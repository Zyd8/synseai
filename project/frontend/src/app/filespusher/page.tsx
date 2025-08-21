"use client";
import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { FaArrowLeft, FaFileAlt, FaDownload, FaTimes  } from "react-icons/fa";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

interface Department {
  id: string;
  name: string;
  isActive: boolean;
  isCompleted: boolean;
}

interface FileItem {
  id: string;
  name: string;
  details: string;
  dateCreated: string;
  isSelected: boolean;
  department: string;
  downloadUrl?: string; // Add download URL field
}

export default function FilesPusher() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const settingId = searchParams?.get("id"); // Get document_setting ID from URL
  const API = process.env.NEXT_PUBLIC_API_URL;

  const [proposalTitle, setProposalTitle] = useState<string>("");
  const [proposalDetails, setProposalDetails] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const [departments, setDepartments] = useState<Department[]>([
    { id: "1", name: "Technology Department", isActive: true, isCompleted: false },
    { id: "2", name: "Operations Department", isActive: false, isCompleted: false },
    { id: "3", name: "Finance Department", isActive: false, isCompleted: false },
  ]);

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [files, setFiles] = useState<FileItem[]>([]);

  // Upload handler
  const handleFileUpload = async () => {
    if (!selectedFile || !settingId) {
      alert("Please select a file first.");
      return;
    }

    try {
      const token = sessionStorage.getItem("access_token");
      if (!token) throw new Error("No token found.");

      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("setting_id", settingId);

      const res = await fetch(`${API}/api/document/upload_file`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      alert("File uploaded successfully!");
      setIsUploadModalOpen(false);
      setSelectedFile(null);
      // Refresh files list after upload
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert("Error uploading file.");
    }
  };

  // Fetch document setting and files data
  useEffect(() => {
    if (!settingId) {
      setError("No document setting ID provided");
      setLoading(false);
      return;
    }

    const fetchDocumentSettingAndFiles = async () => {
      try {
        setLoading(true);
        setError("");

        // Get token from sessionStorage
        const token = sessionStorage.getItem('access_token');
        
        if (!token) {
          throw new Error("No authentication token found. Please log in again.");
        }

        console.log("Attempting to fetch from:", `${API}/api/document_setting/${settingId}`);

        // Get specific document setting by ID using the new endpoint
        const res = await fetch(`${API}/api/document_setting/${settingId}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });

        console.log("Response status:", res.status);

        if (!res.ok) {
          // Try to get error details from response
          let errorMessage = `Failed to fetch document setting: ${res.status}`;
          try {
            const errorData = await res.json();
            errorMessage = errorData.error || errorData.message || errorMessage;
          } catch {
            errorMessage = `HTTP ${res.status}: ${res.statusText}`;
          }
          throw new Error(errorMessage);
        }

        const documentSetting = await res.json();
        console.log("Received document setting:", documentSetting);

        // Set title and details from the actual document data
        setProposalTitle(documentSetting.document_name || `Document Setting ${settingId}`);
        setProposalDetails(documentSetting.document_description || "Push the files to the departments for review and approval");

        // Create a file item for the main document if it exists
        if (documentSetting.document_name && documentSetting.document_id) {
          const mainFile: FileItem = {
            id: documentSetting.document_id.toString(),
            name: documentSetting.document_name,
            details: documentSetting.document_description || "Main document file",
            dateCreated: documentSetting.document_created_at 
              ? new Date(documentSetting.document_created_at).toISOString().split('T')[0]
              : new Date().toISOString().split('T')[0],
            isSelected: false,
            department: getDepartmentNameByLocation(documentSetting.current_location),
            downloadUrl: `${API}/api/document/download_file/${documentSetting.document_id}`, // Use full URL like CollabFiles
          };

          setFiles([mainFile]);
        } else {
          setFiles([]);
        }

        // Update departments based on current_location if needed
        if (documentSetting.current_location !== undefined) {
          const locationIndex = documentSetting.current_location;
          setDepartments(prev => prev.map((dept, index) => ({
            ...dept,
            isActive: index === locationIndex,
            isCompleted: index < locationIndex
          })));
        }

      } catch (err) {
        console.error("Error fetching document setting:", err);
        const errorMessage = err instanceof Error ? err.message : "Failed to fetch document data";
        setError(errorMessage);
        
        // Set fallback data
        setProposalTitle(`Document Setting ${settingId}`);
        setProposalDetails("Push the files to the departments for review and approval");
        setFiles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDocumentSettingAndFiles();
  }, [settingId, API]);

  // Get current active department
  const currentDepartment = departments.find((dept) => dept.isActive);
  const currentDepartmentIndex = departments.findIndex((dept) => dept.isActive);

  const handleFileSelect = (file: FileItem) => {
    setFiles((prev) =>
      prev.map((f) => (f.id === file.id ? { ...f, isSelected: !f.isSelected } : f))
    );
  };

  const currentDepartmentFiles = files.filter(
    (file) => file.department === currentDepartment?.name
  );

  // Helper function to get department name by location index
  const getDepartmentNameByLocation = (location: number) => {
    const departmentNames = [
      "Technology Department",
      "Operations Department", 
      "Finance Department"
    ];
    return departmentNames[location] || "Technology Department";
  };

  const handleNextDepartment = () => {
    if (currentDepartmentIndex < departments.length - 1) {
      setDepartments(prev => prev.map((dept, index) => ({
        ...dept,
        isActive: index === currentDepartmentIndex + 1,
        isCompleted: index === currentDepartmentIndex ? true : dept.isCompleted
      })));
    }
  };

  const handlePreviousDepartment = () => {
    if (currentDepartmentIndex > 0) {
      setDepartments(prev => prev.map((dept, index) => ({
        ...dept,
        isActive: index === currentDepartmentIndex - 1,
        isCompleted: index === currentDepartmentIndex - 1 ? false : dept.isCompleted
      })));
    }
  };

  // Download function matching CollabFiles implementation exactly
  const handleDownload = (file: FileItem) => {
    if (!file.downloadUrl) {
      alert("No download URL available for this file");
      return;
    }
    
    console.log("Opening download URL:", file.downloadUrl);
    window.open(file.downloadUrl, "_blank");
  };

  if (loading) {
    return (
      <ProtectedRoute allowedRoles={["user", "employee"]}>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#B11016] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading document...</p>
          </div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute allowedRoles={["user", "employee"]}>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 sm:px-[5%] lg:px-[10%] py-4 sm:py-8">
        {/* Header */}
        <div className="relative flex items-center w-full mt-2 mb-4">
          <button
            onClick={() => {
              const role = sessionStorage.getItem("role");
              if (role === "employee") router.push("/bpidashboard");
              else router.push("/dashboard");
            }}
            className="absolute left-0 flex items-center text-[#B11016] hover:text-[#800b10] text-sm sm:text-base"
          >
            <FaArrowLeft className="mr-2" />
            <span className="hidden sm:inline">Back</span>
          </button>

          <div className="text-center w-full">
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-[#B11016] pb-2 sm:pb-4">
              Files Pusher
            </h1>
            <p className="text-sm sm:text-md text-black mb-4 sm:mb-6 px-4">
             Push the files to the departments for review and approval.
            </p>
            <div className="mx-2 border-b-[3px] border-[#B11016]"></div>
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="w-full max-w-6xl mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            <p className="text-sm">{error}</p>
          </div>
        )}
{/* File Info Headers */}
        <div className="w-full max-w-6xl mt-2 grid grid-cols-3 gap-4 text-lg font-semibold text-gray-800">
          <div><span className="text-[#B11016] font-bold">File Name:</span> {proposalTitle}</div>
          <div><span className="text-[#B11016] font-bold">File Description:</span>  {proposalDetails}</div>
          <div>
            <span className="text-[#B11016] font-bold">Date created:</span>{" "}
            {files.length > 0 ? files[0].dateCreated : "N/A"}
            </div>
        </div>
        {/* Department Navigation */}
        <div className="w-full max-w-6xl mt-6">
          

          {/* Department Progress Indicator */}
          <div className="flex space-x-2">
            {departments.map((dept, index) => (
              <div
                key={dept.id}
                className={`flex-1 h-6 rounded ${
                  dept.isCompleted 
                    ? 'bg-[#333333]' 
                    : dept.isActive 
                      ? 'bg-[#B11016]' 
                      : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center justify-between mt-4 mb-5">
            <button
              onClick={handlePreviousDepartment}
              disabled={currentDepartmentIndex === 0}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
            >
              Previous
            </button>
            
            <h2 className="text-xl font-semibold text-[#B11016]">
              {currentDepartment?.name}
            </h2>
            
            <button
              onClick={handleNextDepartment}
              disabled={currentDepartmentIndex === departments.length - 1}
              className="px-4 py-2 bg-[#B11016] text-white rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#800b10]"
            >
              Next
            </button>
          </div>
        </div>

        

        {/* File Cards Grid */}
        <div className="w-full max-w-6xl mb-8">
          {currentDepartmentFiles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentDepartmentFiles.map((file) => (
                <div key={file.id} className="text-center">
                  <div
                    className={`cursor-pointer transition-all duration-200 ${
                      file.isSelected ? "transform scale-105" : ""
                    }`}
                    onClick={() => handleFileSelect(file)}
                  >
                    <div className="relative mb-4">
                      <Image
                        src={file.isSelected ? "/images/file-card-black.png" : "/images/file-card.png"}
                        alt="File Card"
                        width={150}
                        height={180}
                        className="mx-auto"
                      />
                    </div>
                  </div>

                  <div className="text-sm font-medium text-gray-800 mb-1 truncate" title={file.name}>
                    {file.name}
                  </div>
                  
                  {/* Download Button */}
                  <button 
                    onClick={() => handleDownload(file)}
                    className="mt-2 px-4 py-2 bg-[#B11016] text-white text-sm rounded hover:bg-[#800b10] transition-colors flex items-center justify-center mx-auto"
                    disabled={!file.downloadUrl}
                  >
                    <FaDownload className="mr-2" size={12} />
                    Download
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500">
              <FaFileAlt className="mx-auto text-4xl mb-4 opacity-30" />
              <p className="text-sm sm:text-base">
                No files available for {currentDepartment?.name || "this department"}
              </p>
              <p className="text-xs text-gray-400 mt-2">
                Files will appear here when they are assigned to this department
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        
          <div className="w-full max-w-6xl mb-8">
            <div className="flex justify-center space-x-4">
                <button
              onClick={() => setIsUploadModalOpen(true)}
              className="px-6 py-3 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              Upload
            </button>
              <button className="px-6 py-3 bg-[#B11016] text-white rounded hover:bg-[#800b10] transition-colors">
                Push Selected Files ({currentDepartmentFiles.filter(f => f.isSelected).length})
              </button>
              
            </div>
          </div>

          {/* Upload Modal */}
        {isUploadModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">

            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
              {/* Close button */}
              <button
                onClick={() => setIsUploadModalOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>

              <h2 className="text-xl font-semibold text-[#B11016] mb-4">
                Upload File
              </h2>

              <input
                type="file"
                onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                className="mb-4 w-full border border-gray-300 rounded px-3 py-2"
              />

              <button
                onClick={handleFileUpload}
                className="w-full px-4 py-2 bg-[#B11016] text-white rounded hover:bg-[#800b10] transition-colors"
              >
                Upload
              </button>
            </div>
          </div>
        )}
      
      </div>
    </ProtectedRoute>
  );
}