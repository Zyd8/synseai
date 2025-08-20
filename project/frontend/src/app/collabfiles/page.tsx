"use client";
import Head from "next/head";
import React, { useState, useEffect, useRef } from 'react';
import ProtectedRoute from "@/components/ProtectedRoute";
import { FaArrowLeft, FaFileAlt, FaDownload } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useSearchParams } from "next/navigation";

interface TimelineItem {
  id: string;
  date: string;
  time: string;
  title: string;
  description: string;
  status: 'completed' | 'in_progress' | 'pending';
  sender: 'user' | 'bpi';
  fileType?: string; // e.g., 'PDF', 'DOCX', 'JPG'
  fileSize?: string; // e.g., '2.4 MB'
}

interface CompanyData {
  companyName: string;
  companyLogo: string;
}

export default function CollabFiles() {
  const [proposalTitle, setproposalTitle] = useState<string>('');
  const [typeOfCollaboration, settypeOfCollaboration] = useState<string>('');
  const [expectedSupport, setexpectedSupport] = useState<string>('');
  const [companyData, setCompanyData] = useState<CompanyData>({
    companyName: '',
    companyLogo: ''
  });
  const [bpiDepartment, setBpiDepartment] = useState<string>('');

  const searchParams = useSearchParams();
  const proposalId = searchParams?.get("proposalId");

  const API = process.env.NEXT_PUBLIC_API_URL;

  const [timeline, setTimeline] = useState<TimelineItem[]>([]);
  const fetchTimeline = async () => {
    if (!proposalId) return;
    try {
      const token = sessionStorage.getItem("access_token");
      if (!token) return;

      const res = await fetch(`${API}/api/document/get_proposal_files/${proposalId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        setTimeline([]);
        return;
      }

      const docs = await res.json();

      const role = sessionStorage.getItem("role");

      const fileTimeline: TimelineItem[] = docs.map((doc: any) => {
        const sender: 'user' | 'bpi' = role === 'employee'
          ? (doc.is_bpi ? 'bpi' : 'user')
          : (doc.is_bpi ? 'bpi' : 'user');

        return {
          id: doc.id.toString(),
          date: new Date(doc.created_at).toISOString().split('T')[0],
          time: new Date(doc.created_at).toLocaleTimeString('en-PH', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            timeZone: 'Asia/Manila'
          }),
          title: doc.name,
          description: doc.description,
          status: 'completed',
          sender,
          fileType: doc.type,
          fileSize: '',
          downloadUrl: doc.download_url,
          viewUrl: doc.view_url,
        };
      });

      setTimeline(fileTimeline);

    } catch (err) {
      console.error("Failed to fetch timeline:", err);
    }
  };
  useEffect(() => {
    if (!proposalId) return;
    console.log("Fetching proposal for ID:", proposalId);
    const fetchProposalData = async () => {
      try {
        const token = sessionStorage.getItem("access_token");
        const role = sessionStorage.getItem("role");

        if (!token || !role) {
          console.error("Missing token or role in sessionStorage");
          return;
        }

        if (!proposalId) {
          console.error("Missing proposalId in URL params");
          return;
        }

        let proposal: any;
        let company: any;

        // Fetch proposal data
        const proposalRes = await fetch(`${API}/api/proposal/${proposalId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!proposalRes.ok) throw new Error("Failed to fetch proposal");
        const proposalData = await proposalRes.json();

        // Employee vs user roles
        if (role === "employee") {
          proposal = proposalData; // already a single proposal
          company = {
            name: proposal.company_name || "Unknown",
            logo: null
          };
        } else {
          proposal = proposalData;
          // Fetch company for user side
          const companyRes = await fetch(`${API}/api/company?proposalId=${proposal.company_id}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (!companyRes.ok) throw new Error("Failed to fetch company");
          company = await companyRes.json();
        }

        // Now you can set state safely
        setproposalTitle(proposal.title);
        settypeOfCollaboration(proposal.collab_type);
        setexpectedSupport(proposal.description);
        setCompanyData({
          companyName: company.name,
          companyLogo: company.logo ? `data:image/png;base64,${company.logo}` : "/logo/synsei_icon.png",
        });


        // Fetch proposal documents (works for both roles)
        const docRes = await fetch(`${API}/api/document/get_proposal_files/${proposalId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!docRes.ok) {
          console.warn("No documents found for this proposal");
          setTimeline([]);
          return;
        }

        const docs = await docRes.json();

        // Map documents to timeline items
        const fileTimeline: TimelineItem[] = docs.map((doc: any) => {
          let sender: 'user' | 'bpi';

          if (role === "employee") {
            // On employee view, files from user are 'user' (left), files from employee/BPI are 'bpi' (right)
            sender = doc.is_bpi ? 'bpi' : 'user';
          } else {
            // On user view, files from user are 'user' (right), files from BPI are 'bpi' (left)
            sender = doc.is_bpi ? 'bpi' : 'user';
          }

          return {
            id: doc.id.toString(),
            date: new Date(doc.created_at).toISOString().split('T')[0],
            time: new Date(doc.created_at).toLocaleTimeString('en-PH', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,       // optional: true for 12-hour, false for 24-hour
              timeZone: 'Asia/Manila'
            }),
            title: doc.name,
            description: doc.description,
            status: 'completed',
            sender: sender,
            fileType: doc.type,
            fileSize: '', // optional
            downloadUrl: doc.download_url,
            viewUrl: doc.view_url,
          };
        });

        setTimeline(fileTimeline);

      } catch (error) {
        console.error("Error fetching proposal/company/files:", error);
      }
    };




    fetchProposalData();
  }, [proposalId]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileDescription, setFileDescription] = useState("");

  const handleFileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!uploadedFile) {
      alert("Please select a file to upload.");
      return;
    }

    try {
      const token = sessionStorage.getItem("access_token");
      const role = sessionStorage.getItem("role"); // Get role from sessionStorage
      if (!token) {
        alert("You are not authenticated.");
        return;
      }

      // Make sure proposalId exists
      if (!proposalId) {
        alert("Missing proposal ID.");
        return;
      }

      const formData = new FormData();
      formData.append("file", uploadedFile);
      formData.append("name", fileName || uploadedFile.name);
      formData.append("description", fileDescription || "");
      formData.append("type", "Proposal");
      formData.append("proposal_id", proposalId);
      formData.append("is_bpi", role === "employee" ? "true" : "false"); // <-- updated

      const response = await fetch(`${API}/api/document/upload_file`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        alert(error.error || "File upload failed.");
        return;
      }

      const uploadedDoc = await response.json();
      console.log("Uploaded file:", uploadedDoc);

      // Update timeline immediately
      setTimeline(prev => [
        ...prev,
        {
          id: uploadedDoc.id?.toString() || Math.random().toString(36).substring(2),
          date: uploadedDoc.created_at?.split("T")[0] || new Date().toISOString().split("T")[0],
          time: uploadedDoc.created_at
            ? new Date(uploadedDoc.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            : new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          title: uploadedDoc.name || uploadedFile.name,
          description: uploadedDoc.description || "",
          status: "completed",
          sender: role === "employee" ? "bpi" : "user", // <-- sender based on role
          fileType: uploadedDoc.type || uploadedFile.name.split('.').pop()?.toUpperCase(),
          fileSize: uploadedFile.size ? `${(uploadedFile.size / 1024 / 1024).toFixed(2)} MB` : undefined,
          fileUrl: uploadedDoc.file || ""
        }
      ]);

      // Clear form
      setUploadedFile(null);
      setFileName("");
      setFileDescription("");
      setIsModalOpen(false);
      await fetchTimeline();
    } catch (err) {
      console.error("Error uploading file:", err);
      alert("File upload failed. Check console for details.");
    }
  };



  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const router = useRouter();

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-PH', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const ProfilePicture = ({ sender }: { sender: 'user' | 'bpi' }) => {
    const imageSize = 40;

    if (sender === 'user') {
      return (
        <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-gray-200">
          <Image
            src={companyData.companyLogo && companyData.companyLogo.trim() !== "" ? companyData.companyLogo : "/logo/synsei_icon.png"}
            alt={companyData.companyName}
            width={imageSize}
            height={imageSize}
            className="w-full h-full object-cover"
          />
        </div>
      );
    } else {
      return (
        <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-white">
          <Image
            src="/logo/bpi-logo.jpg"
            alt="BPI"
            width={imageSize}
            height={imageSize}
            className="w-full h-full object-cover"
          />
        </div>
      );
    }
  };

  const getSenderName = (sender: 'user' | 'bpi') => {
    if (sender === 'user') {
      return companyData.companyName.toUpperCase();
    } else {
      return `BPI | ${bpiDepartment}`.toUpperCase();
    }
  };

  return (
    <ProtectedRoute allowedRoles={["user", "employee"]}>
      <>
        <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 sm:px-[5%] lg:px-[10%] py-4 sm:py-8">
          {/* Header */}
          <div className="relative flex items-center w-full mt-2 mb-4">
            {/* Back Button */}
            <button
              onClick={() => {
                const role = sessionStorage.getItem("role");
                if (role === "employee") {
                  router.push("/bpidashboard");
                } else {
                  router.push("/dashboard");
                }
              }}
              className="absolute left-0 flex items-center text-[#B11016] hover:text-[#800b10] text-sm sm:text-base"
            >
              <FaArrowLeft className="mr-2" />
              <span className="hidden sm:inline">Back</span>
            </button>

            {/* Title */}
            <div className="text-center w-full">
              <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-[#B11016] pb-2 sm:pb-4">
                Track Your Files
              </h1>
              <p className="text-sm sm:text-md text-black mb-4 sm:mb-6 px-4">
                View the files you submitted and exchanged with BPI.
              </p>
              <div className="mx-2 border-b-[3px] border-[#B11016]"></div>
            </div>
          </div>

          {/* Chat-Style File Timeline */}
          <div className="w-full max-w-4xl mt-4">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#B11016]">FILE EXCHANGE</h2>
            </div>

            <div className="space-y-4 pb-6 px-2 sm:px-0">
              {timeline.map((item) => {
                const role = sessionStorage.getItem("role"); // 'user' or 'employee'

                // Determine if the bubble should appear on the right
                const isRightSide =
                  (item.sender === "user" && role === "user") ||
                  (item.sender === "bpi" && role === "employee");

                return (
                  <div
                    key={item.id}
                    className={`flex items-end ${isRightSide ? "justify-end" : "justify-start"}`}
                  >
                    {/* Left profile picture */}
                    {!isRightSide && (
                      <div className="mr-4 shadow-lg rounded-full overflow-hidden">
                        <ProfilePicture sender={item.sender} />
                      </div>
                    )}

                    {/* File card */}
                    <div
                      className={`w-100 max-w-[calc(100vw-80px)] sm:max-w-md shadow-lg ${isRightSide ? "bg-[#B11016] text-white" : "bg-[#fdfdfd]"
                        } rounded-lg p-4 relative`}
                    >
                      {/* Sender label */}
                      <div
                        className={`text-xs font-semibold mb-2 pb-2 border-b-1 ${isRightSide ? "text-white opacity-90 border-white" : "text-[#B11016] border-[#B11016]"
                          }`}
                      >
                        {getSenderName(item.sender)}
                      </div>

                      {/* File info */}
                      <div className="flex items-start space-x-3">
                        <div className="flex-1 min-w-0">
                          <h3 className={`font-semibold text-md mb-1 ${isRightSide ? "text-white" : "text-gray-800"}`}>
                            {item.title}
                          </h3>
                          <p className={`text-sm mb-2 line-clamp-2 ${isRightSide ? "text-white" : "text-gray-600"}`}>
                            {item.description}
                          </p>
                          <div className={`text-xs mt-1 mb-2 ${isRightSide ? "text-white opacity-75" : "text-gray-400"}`}>
                            {formatDate(item.date)} at {item.time}
                          </div>

                          <div className={`flex items-center justify-between text-xs ${isRightSide ? "text-white opacity-75" : "text-gray-500"}`}>
                            <span className="truncate">{item.fileType} • {item.fileSize}</span>
                            <button className={`p-1 rounded hover:bg-opacity-20 hover:bg-gray-500 transition-colors flex-shrink-0 ml-2 ${isRightSide ? "text-white" : "text-[#B11016]"}`}>
                              <FaDownload size={12} />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Bubble tail */}
                      <div
                        className={`absolute bottom-4 ${isRightSide
                          ? "-right-2 border-l-8 border-l-[#B11016] border-t-4 border-b-4 border-t-transparent border-b-transparent shadow-md"
                          : "-left-2 border-r-8 border-r-white border-t-4 border-b-4 border-t-transparent border-b-transparent shadow-md"
                          } w-0 h-0`}
                      ></div>
                    </div>

                    {/* Right profile picture */}
                    {isRightSide && (
                      <div className="ml-4 shadow-lg rounded-full overflow-hidden">
                        <ProfilePicture sender={item.sender} />
                      </div>
                    )}
                  </div>
                );
              })}

              {timeline.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <FaFileAlt className="mx-auto text-4xl mb-4 opacity-30" />
                  <p className="text-sm sm:text-base">No files exchanged yet</p>
                  <p className="text-xs sm:text-sm mt-1 px-4">
                    Files will appear here as they are shared between you and BPI
                  </p>
                </div>
              )}
            </div>


            {/* Date Separators for better organization */}
            {timeline.length > 0 && (
              <div className="text-center mt-8">
                <span className="text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                  End of conversation
                </span>
              </div>
            )}
          </div>

          {/* Upload Files Button */}
          {/* Upload Files Button */}
          <div className="w-full max-w-4xl mt-6 sm:mt-10 px-2 sm:px-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-[#B11016] border-2 border-transparent text-white py-3 px-6 font-bold text-sm sm:text-lg hover:bg-white hover:border-[#B11016] hover:text-[#B11016] transition-colors rounded-lg"
            >
              UPLOAD FILES
            </button>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">

              <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-5 text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>

                <h2 className="text-xl font-bold text-[#B11016] mb-4">
                  Upload File
                </h2>

                <form onSubmit={handleFileSubmit} className="space-y-4">

                  <div className="w-full text-red-700 text-base font-normal mb-1">
                    FILE NAME
                  </div>
                  {/* FILE NAME INPUT */}
                  <div className="w-full relative group mb-5">
                    <input
                      type="text"
                      value={fileName}
                      onChange={(e) => setFileName(e.target.value)}
                      placeholder="Enter file name"
                      className="px-2 appearance-none w-full py-3 placeholder-gray-400 bg-transparent focus:outline-none text-sm sm:text-base"
                      aria-label="File Name"
                    />
                    <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                    <div className="absolute left-0 bottom-0 h-[2px] bg-red-700 
                    transition-transform duration-300 ease-in-out 
                    origin-center scale-x-0 w-full 
                    group-focus-within:scale-x-100" />
                  </div>

                  {/* File Description */}
                  <div className="w-full text-red-700 text-base font-normal mb-1">
                    FILE DESCRIPTION
                  </div>
                  {/* FILE DESCRIPTION INPUT */}
                  <div className="w-full relative group mb-5">
                    <input
                      type="text"
                      value={fileDescription}
                      onChange={(e) => setFileDescription(e.target.value)}
                      placeholder="Enter file description"
                      className="px-2 appearance-none w-full py-3 placeholder-gray-400 bg-transparent focus:outline-none text-sm sm:text-base"
                      aria-label="File Description"
                    />
                    <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                    <div className="absolute left-0 bottom-0 h-[2px] bg-red-700 
                    transition-transform duration-300 ease-in-out 
                    origin-center scale-x-0 w-full 
                    group-focus-within:scale-x-100" />
                  </div>



                  {/* Drag and Drop Area */}
                  <div
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className="border-2 border-dashed border-red-300 rounded-lg p-6 text-center cursor-pointer hover:border-red-500 transition"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <img
                      src="/images/uploadicon.png"
                      alt="Upload Icon"
                      className="mx-auto h-12 w-12 object-contain"
                    />

                    <p className="mt-2 text-gray-600 text-md">
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

                  {/* Uploaded File Preview */}
                  {uploadedFile && (
                    <div className="mt-3 p-2 border border-green-400 rounded bg-green-50 text-green-700 text-xs">
                      Uploaded: {uploadedFile.name}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="w-full flex justify-end space-x-2">

                    <button
                      type="submit"
                      className="w-full px-4 py-2 rounded-lg bg-[#B11016] text-white font-semibold hover:bg-[#800b10]"
                    >
                      Upload
                    </button>
                  </div>


                </form>
              </div>
            </div>
          )}
        </div>
      </>
    </ProtectedRoute>
  );
}