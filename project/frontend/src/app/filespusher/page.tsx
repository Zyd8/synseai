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
  downloadUrl?: string;
}

interface DocumentSetting {
  id: number;
  current_location: number;
  iteration: number[];
  updated_at: string;
  document_id: number;
  document_name: string;
  document_created_at: string;
  document_description: string;
  download_url: string;
}

export default function FilesPusher() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const settingId = searchParams?.get("id");
  const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'; // Provide fallback

  const [proposalTitle, setProposalTitle] = useState<string>("");
  const [proposalDetails, setProposalDetails] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [documentSetting, setDocumentSetting] = useState<DocumentSetting | null>(null);
  const [userDepartmentId, setUserDepartmentId] = useState<number | null>(null);
  const [canInteract, setCanInteract] = useState<boolean>(false);

  const [departments, setDepartments] = useState<Department[]>([
    { id: "1", name: "Technology Department", isActive: true, isCompleted: false },
    { id: "2", name: "Operations Department", isActive: false, isCompleted: false },
    { id: "3", name: "Finance Department", isActive: false, isCompleted: false },
  ]);

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [fileDescription, setFileDescription] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isPushing, setIsPushing] = useState(false);

  const [files, setFiles] = useState<FileItem[]>([]);

  // Get user's department ID from session storage
  useEffect(() => {
    const fetchUserDepartment = () => {
      try {
        console.log("=== DEBUG: Checking for department_id ===");
        
        // Check all sessionStorage items for debugging
        const allSessionItems: Record<string, string | null> = {};
        for (let i = 0; i < sessionStorage.length; i++) {
          const key = sessionStorage.key(i);
          if (key) {
            allSessionItems[key] = sessionStorage.getItem(key);
          }
        }
        console.log("All sessionStorage items:", allSessionItems);

        // Method 1: Try to get department_id directly
        const storedDeptId = sessionStorage.getItem("department_id");
        console.log("Direct department_id lookup:", storedDeptId);
        
        if (storedDeptId && storedDeptId !== "null" && storedDeptId !== "undefined") {
          const deptId = parseInt(storedDeptId);
          console.log("✅ Found department_id directly:", deptId);
          setUserDepartmentId(deptId);
          return;
        }

        // Method 2: Try to get from stored user data (common key names)
        const possibleUserKeys = ['user', 'userData', 'currentUser'];
        for (const userKey of possibleUserKeys) {
          const storedUserData = sessionStorage.getItem(userKey);
          if (storedUserData && storedUserData !== "null" && storedUserData !== "undefined") {
            try {
              const userData = JSON.parse(storedUserData);
              console.log(`Found user data in '${userKey}':`, userData);
              
              if (userData && typeof userData === 'object' && userData.department_id !== undefined && userData.department_id !== null) {
                console.log("✅ Found department_id in user data:", userData.department_id);
                setUserDepartmentId(userData.department_id);
                // Store it directly for future use
                sessionStorage.setItem("department_id", userData.department_id.toString());
                return;
              }
            } catch (parseError) {
              console.warn(`Error parsing '${userKey}' data:`, parseError);
            }
          }
        }

        // Method 3: Check if we have user_id and can make assumptions
        const userId = sessionStorage.getItem("user_id");
        const role = sessionStorage.getItem("role");
        
        console.log("Available session data:", {
          user_id: userId,
          role: role,
          allKeys: Object.keys(allSessionItems)
        });

        console.warn("❌ Department ID not found in sessionStorage.");
        console.warn("Your login response includes department_id, but it's not being stored in sessionStorage.");
        console.warn("Please update your login process to store the user data:");
        console.warn("Example: sessionStorage.setItem('user', JSON.stringify(loginResponse.user))");
        console.warn("Or: sessionStorage.setItem('department_id', loginResponse.user.department_id)");
        
        // For immediate testing, suggest the manual approach
        if (role === 'employee') {
          console.warn("🔧 For testing, run this in console: sessionStorage.setItem('department_id', '1')");
        }
        
      } catch (error) {
        console.error("Error getting user department from sessionStorage:", error);
      }
    };

    fetchUserDepartment();
  }, []);

  // Handle file selection from input or drag & drop
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  // Update handler
  const handleFileUpdate = async () => {
    if (!selectedFile || !settingId) {
      alert("Please select a file first.");
      return;
    }

    if (!canInteract) {
      alert("You can only update documents that are currently at your department.");
      return;
    }

    try {
      const token = sessionStorage.getItem("access_token");
      if (!token) throw new Error("No token found.");

      const formData = new FormData();
      formData.append("file", selectedFile);

      const res = await fetch(`${API}/api/document_setting/update/${settingId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const responseText = await res.text();
      console.log("Update response:", responseText);

      if (!res.ok) {
        throw new Error(`Update failed: ${responseText}`);
      }

      alert("File updated successfully!");
      setIsUploadModalOpen(false);
      setSelectedFile(null);
      setFileName("");
      setFileDescription("");
      window.location.reload();
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
        alert(`Error updating file: ${err.message}`);
      } else {
        console.error(err);
        alert("Error updating file.");
      }
    }
  };

  // Push handler - moves document to next department in iteration
  const handlePushDocument = async () => {
    if (!settingId || !documentSetting) {
      alert("No document setting found.");
      return;
    }

    if (!canInteract) {
      alert("You can only push documents that are currently at your department.");
      return;
    }

    // Check if we're at the last department
    const currentIndex = documentSetting.iteration.indexOf(documentSetting.current_location);
    if (currentIndex >= documentSetting.iteration.length - 1) {
      alert("This document is already at the final department.");
      return;
    }

    try {
      setIsPushing(true);
      const token = sessionStorage.getItem("access_token");
      if (!token) throw new Error("No token found.");

      const res = await fetch(`${API}/api/document_setting/push/${settingId}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Push failed: ${errorText}`);
      }

      const result = await res.json();
      alert("Document pushed to next department successfully!");
      
      // Refresh the page to get updated data
      window.location.reload();
    } catch (err) {
      console.error("Error pushing document:", err);
      alert(`Error pushing document: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setIsPushing(false);
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

        const token = sessionStorage.getItem('access_token');
        
        if (!token) {
          throw new Error("No authentication token found. Please log in again.");
        }

        console.log("Attempting to fetch from:", `${API}/api/document_setting/${settingId}`);

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
        setDocumentSetting(documentSetting);

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
            downloadUrl: `${API}/api/document/download_file/${documentSetting.document_id}`,
          };

          setFiles([mainFile]);
        } else {
          setFiles([]);
        }

        // Update departments based on iteration and current_location
        updateDepartmentStatus(documentSetting.iteration, documentSetting.current_location);

      } catch (err) {
        console.error("Error fetching document setting:", err);
        const errorMessage = err instanceof Error ? err.message : "Failed to fetch document data";
        setError(errorMessage);
        
        setProposalTitle(`Document Setting ${settingId}`);
        setProposalDetails("Push the files to the departments for review and approval");
        setFiles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDocumentSettingAndFiles();
  }, [settingId, API]); // Back to including API in dependency array

  // Check if user can interact with document (update/push)
  useEffect(() => {
    if (documentSetting && userDepartmentId !== null) {
      const canUserInteract = documentSetting.current_location === userDepartmentId;
      setCanInteract(canUserInteract);
      console.log("Can user interact:", canUserInteract, "Current location:", documentSetting.current_location, "User dept:", userDepartmentId);
    }
  }, [documentSetting, userDepartmentId]);

  // Update department status based on iteration and current location
  const updateDepartmentStatus = (iteration: number[], currentLocation: number) => {
    setDepartments(prev => prev.map((dept, index) => {
      const deptId = index + 1; // Assuming department IDs are 1-indexed
      const currentIndex = iteration.indexOf(currentLocation);
      const deptIndex = iteration.indexOf(deptId);
      
      return {
        ...dept,
        isActive: deptId === currentLocation,
        isCompleted: deptIndex !== -1 && deptIndex < currentIndex
      };
    }));
  };

  // Get current active department
  const currentDepartment = departments.find((dept) => dept.isActive);

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
    return departmentNames[location - 1] || "Technology Department"; // Assuming 1-indexed
  };

  // Download function
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

        {/* Access Control Notice */}
        {userDepartmentId === null && (
          <div className="w-full max-w-6xl mb-4 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded">
            <p className="text-sm">
              <strong>Note:</strong> Department information not found. Make sure your login process stores 'department_id' in sessionStorage.
              For testing, you can manually add it: <code>sessionStorage.setItem('department_id', '1')</code>
            </p>
          </div>
        )}
        
        {!canInteract && documentSetting && userDepartmentId !== null && (
          <div className="w-full max-w-6xl mb-4 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
            <p className="text-sm">
              This document is currently at {getDepartmentNameByLocation(documentSetting.current_location)}. 
              You can only update or push documents that are at your department (Department ID: {userDepartmentId}).
            </p>
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
          <div className="flex space-x-2 w-full">
            {departments.map((dept) => (
              <div
                key={dept.id}
                className={`flex-1 h-10 rounded flex items-center justify-center text-xs font-medium transition-colors duration-300 ${
                  dept.isCompleted
                    ? "bg-[#333333] text-white"
                    : dept.isActive
                    ? "bg-[#B11016] text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {dept.name}
              </div>
            ))}
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
              disabled={!canInteract || userDepartmentId === null}
              className={`w-full px-6 py-3 rounded transition-colors ${
                canInteract && userDepartmentId !== null
                  ? "bg-[#333333] text-white hover:bg-[#0f0f0f]" 
                  : "bg-gray-400 text-gray-600 cursor-not-allowed"
              }`}
            >
              Update
            </button>
            <button 
              onClick={handlePushDocument}
              disabled={!canInteract || isPushing || userDepartmentId === null}
              className={`w-full px-6 py-3 rounded transition-colors ${
                canInteract && !isPushing && userDepartmentId !== null
                  ? "bg-[#B11016] text-white hover:bg-[#800b10]" 
                  : "bg-gray-400 text-gray-600 cursor-not-allowed"
              }`}
            >
              {isPushing ? "Pushing..." : "Push"}
            </button>
          </div>
          
          {/* Help text */}
          <div className="text-center text-sm text-gray-500 mt-2 space-y-1">
            {userDepartmentId === null ? (
              <p>Department information not available. Please check your login setup.</p>
            ) : !canInteract ? (
              <p>You can only update or push documents that are currently at your department.</p>
            ) : null}
            
            {/* Debug info - remove in production */}
            {process.env.NODE_ENV === 'development' && (
              <div className="text-xs text-gray-400 mt-2">
                <p>Debug: User Dept ID: {userDepartmentId || 'Not set'}</p>
                {documentSetting && (
                  <p>Debug: Document at Dept: {documentSetting.current_location}</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Upload Modal with Drag & Drop */}
        {isUploadModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative mx-4">
              {/* Close button */}
              <button
                onClick={() => {
                  setIsUploadModalOpen(false);
                  setSelectedFile(null);
                  setFileName('');
                  setFileDescription('');
                }}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>

              <h2 className="text-xl font-semibold text-[#B11016] mb-4">
                Update File
              </h2>

              {/* Drag and Drop Area */}
              <div
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className="border-2 border-dashed border-red-300 rounded-lg p-6 text-center cursor-pointer hover:border-red-500 transition mb-4"
                onClick={() => fileInputRef.current?.click()}
              >
                <img
                  src="/images/uploadicon.png"
                  alt="Upload Icon"
                  className="mx-auto h-12 w-12 object-contain"
                />

                <p className="mt-2 text-gray-600 text-sm">
                  Drag & drop files or{" "}
                  <span className="text-red-600 underline">Browse</span>
                </p>
                <p className="text-xs text-gray-400">
                  Supported formats: JPEG, PNG, PDF, DOCX
                </p>

                <input
                  type="file"
                  accept=".jpeg,.jpg,.png,.pdf,.docx"
                  ref={fileInputRef}
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>

              {/* Selected File Display */}
              {selectedFile && (
                <div className="mb-4 p-2 border border-green-400 rounded bg-green-50 text-green-700 text-sm">
                  Selected: {selectedFile.name}
                </div>
              )}

              {/* Update Button */}
              <button
                onClick={handleFileUpdate}
                disabled={!selectedFile}
                className="w-full px-4 py-2 bg-[#B11016] text-white rounded hover:bg-[#800b10] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Update File
              </button>
            </div>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}