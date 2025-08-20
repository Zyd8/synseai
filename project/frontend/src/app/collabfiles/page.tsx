"use client";
import Head from "next/head";
import React, { useState, useEffect, useRef } from 'react';
import ProtectedRoute from "@/components/ProtectedRoute";
import CollabCompanyProtectedRoute from "@/components/CollabCompanyProtectedRoute";
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
  sender: 'user' | 'bpi'; // Added to determine which side to show
  fileType?: string; // e.g., 'PDF', 'DOCX', 'JPG'
  fileSize?: string; // e.g., '2.4 MB'
}

interface ProposalData {
  proposalTitle: string;
  typeOfCollaboration: string;
  expectedSupport: string;
  currentStep: number; // 1: submitted, 2: in_progress, 3: approved
  timeline: TimelineItem[];
}

interface CompanyData {
  companyName: string;
  companyLogo: string;
}

interface BPIDepartmentData {
  department: string;
}

export default function CollabFiles() {
  const [proposalTitle, setproposalTitle] = useState<string>('');
  const [typeOfCollaboration, settypeOfCollaboration] = useState<string>('');
  const [expectedSupport, setexpectedSupport] = useState<string>('');
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [companyData, setCompanyData] = useState<CompanyData>({
    companyName: '',
    companyLogo: ''
  });
  const [bpiDepartment, setBpiDepartment] = useState<string>('');
  
  
  // Sample timeline data for demonstration
  const [timeline, setTimeline] = useState<TimelineItem[]>([
    {
      id: '1',
      date: '2024-08-15',
      time: '10:30 AM',
      title: 'Initial Proposal Document',
      description: 'Submitted collaboration proposal with project details and requirements.',
      status: 'completed',
      sender: 'user',
      fileType: 'PDF',
      fileSize: '1.2 MB'
    },
    {
      id: '2',
      date: '2024-08-16',
      time: '2:15 PM',
      title: 'Acknowledgment Letter',
      description: 'BPI has received your proposal and assigned a reference number.',
      status: 'completed',
      sender: 'bpi',
      fileType: 'PDF',
      fileSize: '0.8 MB'
    },
    {
      id: '3',
      date: '2024-08-17',
      time: '9:45 AM',
      title: 'Additional Documentation',
      description: 'Submitted required financial statements and company profile.',
      status: 'completed',
      sender: 'user',
      fileType: 'ZIP',
      fileSize: '5.3 MB'
    },
    {
      id: '4',
      date: '2024-08-18',
      time: '4:20 PM',
      title: 'Review Feedback',
      description: 'Initial review completed with comments and requested modifications.',
      status: 'in_progress',
      sender: 'bpi',
      fileType: 'DOCX',
      fileSize: '0.9 MB'
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileDescription, setFileDescription] = useState("");
  const [fileUpload, setFileUpload] = useState<File | null>(null);

  const handleFileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fileUpload) {
      alert("Please select a file to upload.");
      return;
    }

    // For now just log it (you can integrate with API)
    console.log({
      fileName,
      fileDescription,
      fileUpload,
    });

    // close modal after submission
    setIsModalOpen(false);
    setFileName("");
    setFileDescription("");
    setFileUpload(null);
  };

  const searchParams = useSearchParams();
    const proposalId = searchParams?.get("id");

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

  // Fetch company data and BPI department on component mount
  useEffect(() => {
    fetchCompanyData();
    fetchBPIDepartment();
  }, []);

  const fetchCompanyData = async () => {
    try {
      // Get JWT token from localStorage or wherever you store it
      const token = localStorage.getItem('token'); // Adjust based on your auth implementation
      
      const response = await fetch('/api/company', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setCompanyData({
          companyName: data.name || 'Your Company',
          companyLogo: data.logo ? `data:image/png;base64,${data.logo}` : '/logo/synsei_icon.png'
        });
      } else {
        throw new Error('Failed to fetch company data');
      }
    } catch (error) {
      console.error('Error fetching company data:', error);
      // Set fallback data
      setCompanyData({
        companyName: 'Your Company',
        companyLogo: '/logo/synsei_icon.png'
      });
    }
  };

  const fetchBPIDepartment = async () => {
    try {
      // Get JWT token from localStorage or wherever you store it
      const token = localStorage.getItem('token'); // Adjust based on your auth implementation
      
      const response = await fetch('/api/bpi/department', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setBpiDepartment(data.department || 'Technology Department');
      } else {
        throw new Error('Failed to fetch BPI department');
      }
    } catch (error) {
      console.error('Error fetching BPI department:', error);
      setBpiDepartment('Technology Department');
    }
  };

  const getFileIcon = (fileType: string, sender: 'user' | 'bpi') => {
    const iconClass = `text-lg ${
      sender === 'user' ? 'text-[#B11016]' : 'text-white'
    }`;
    return <FaFileAlt className={iconClass} />;
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const ProfilePicture = ({ sender }: { sender: 'user' | 'bpi' }) => {
    const imageSize = 40; // 40px for w-10 h-10
    
    if (sender === 'user') {
      return (
        <div className="flex-shrink-0 w-10 h-10 rounded-full overflow-hidden bg-gray-200">
          <Image
            src={companyData.companyLogo}
            alt={companyData.companyName}
            width={imageSize}
            height={imageSize}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to synsei icon if company logo fails to load
              e.currentTarget.src = '/logo/synsei_icon.png';
            }}
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
    <ProtectedRoute>
      <CollabCompanyProtectedRoute>
        <>
          <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 sm:px-[5%] lg:px-[10%] py-4 sm:py-8">
            {/* Header */}
            <div className="relative flex items-center w-full mt-2 mb-4">
                {/* Back Button */}
                <button
                    onClick={() => router.push(`/collabproposaltracking?id=${proposalId}`)}
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
                {timeline.map((item, index) => (
                  <div key={item.id} className={`flex items-end ${
                    item.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}>
                    {/* Profile Picture - Show on left for BPI, directly beside tail */}
                    {item.sender === 'bpi' && (
                      <div className="mr-4 shadow-lg rounded-full overflow-hidden ">
                        <ProfilePicture sender={item.sender} />
                      </div>
                    )}
                    
                    {/* File Card - Fixed width for consistency */}
                    <div className={`w-100 max-w-[calc(100vw-80px)] sm:max-w-md shadow-lg ${
                      item.sender === 'user' 
                        ? 'bg-[#B11016] text-white' 
                        : 'bg-[#fdfdfd]'
                    } rounded-lg shadow-lg p-4 relative`}>
                      
                      {/* Sender Label */}
                        <div
                        className={`text-xs font-semibold mb-2 pb-2 border-b-1 ${
                            item.sender === "user"
                            ? "text-white opacity-90 border-white"
                            : "text-[#B11016] border-[#B11016]"
                        }`}
                        >
                        {getSenderName(item.sender)}
                        </div>

                      {/* File Icon and Info */}
                      <div className="flex items-start space-x-3">
                   
                        
                        <div className="flex-1 min-w-0">
                          <h3 className={`font-semibold text-md mb-1 ${
                            item.sender === 'user' ? 'text-white' : 'text-gray-800'
                          }`}>
                            {item.title}
                          </h3>
                          <p className={`text-sm mb-2 line-clamp-2 ${
                            item.sender === 'user' ? 'text-white' : 'text-gray-600'
                          }`}>
                            {item.description}
                          </p>
                          
                          {/* Timestamp */}
                          <div className={`text-xs mt-1 mb-2 ${
                            item.sender === 'user' ? 'text-white opacity-75' : 'text-gray-400'
                          }`}>
                            {formatDate(item.date)} at {item.time}
                          </div>

                          {/* File Details */}
                          <div className={`flex items-center justify-between text-xs ${
                            item.sender === 'user' ? 'text-white opacity-75' : 'text-gray-500'
                          }`}>
                            <span className="truncate">{item.fileType} • {item.fileSize}</span>
                            <button className={`p-1 rounded hover:bg-opacity-20 hover:bg-gray-500 transition-colors flex-shrink-0 ml-2 ${
                              item.sender === 'user' ? 'text-white' : 'text-[#B11016]'
                            }`}>
                              <FaDownload size={12} />
                            </button>
                          </div>

                        </div>
                      </div>

                      {/* Chat Bubble Tail */}
                      <div className={`absolute bottom-4 ${
                        item.sender === 'user' 
                          ? '-right-2 border-l-8 border-l-[#B11016] border-t-4 border-b-4 border-t-transparent border-b-transparent shadow-md'
                          : '-left-2 border-r-8 border-r-white border-t-4 border-b-4 border-t-transparent border-b-transparent shadow-md' 
                      } w-0 h-0`}></div>
                    </div>

                    {/* Profile Picture - Show on right for user, directly beside tail */}
                    {item.sender === 'user' && (
                      <div className="ml-4 shadow-lg rounded-full overflow-hidden ">
                        <ProfilePicture sender={item.sender} />
                      </div>
                    )}
                  </div>
                ))}

                {timeline.length === 0 && (
                  <div className="text-center py-12 text-gray-500">
                    <FaFileAlt className="mx-auto text-4xl mb-4 opacity-30" />
                    <p className="text-sm sm:text-base">No files exchanged yet</p>
                    <p className="text-xs sm:text-sm mt-1 px-4">Files will appear here as they are shared between you and BPI</p>
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
      </CollabCompanyProtectedRoute>
    </ProtectedRoute>
  );
}