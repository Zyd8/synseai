"use client";
import Head from "next/head";
import React, { useState, useEffect } from 'react';
import ProtectedRoute from "@/components/ProtectedRoute";
import CollabCompanyProtectedRoute from "@/components/CollabCompanyProtectedRoute";
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface TimelineItem {
  id: string;
  date: string;
  time: string;
  title: string;
  description: string;
  status: 'SUBMITTED' | 'ONGOING' | 'APPROVED' | 'REJECTED';
  created_at: string;
}

interface ProposalData {
  id: number;
  title: string;
  description: string;
  collab_type: string;
  status: 'SUBMITTED' | 'ONGOING' | 'APPROVED' | 'REJECTED';
  created_at: string;
  updated_at: string;
  timeline: TimelineItem[];
}

// API service functions - Fixed to use correct environment variable
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const apiService = {
  async getProposal(proposalId: number): Promise<ProposalData> {
    const token = sessionStorage.getItem("access_token");
    if (!token) throw new Error("No access token found. Please log in again.");

    try {
      console.log(`Fetching proposal from: ${API_BASE}/api/proposal/${proposalId}`);
      
      const response = await fetch(`${API_BASE}/api/proposal/${proposalId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errMsg = await response.text();
        throw new Error(
          `Failed to fetch proposal: ${response.status} ${response.statusText} - ${errMsg}`
        );
      }

      return await response.json();
    } catch (err) {
      console.error("getProposal error:", err);
      throw err;
    }
  },

  async getAllProposals(): Promise<ProposalData[]> {
    const token = sessionStorage.getItem("access_token");
    if (!token) throw new Error("No access token found. Please log in again.");

    try {
      const response = await fetch(`${API_BASE}/api/proposal/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errMsg = await response.text();
        throw new Error(
          `Failed to fetch proposals: ${response.status} ${response.statusText} - ${errMsg}`
        );
      }

      const data = await response.json();
      return Array.isArray(data) ? data : data.proposals || [];
    } catch (err) {
      console.error("getAllProposals error:", err);
      throw err;
    }
  },
};

// Helper functions
const getStepNumber = (status: string): number => {
  switch (status.toUpperCase()) {
    case 'SUBMITTED': return 1;
    case 'ONGOING': return 2;
    case 'APPROVED': return 3;
    case 'REJECTED': return 1; // Rejected stays at step 1 but with different styling
    default: return 1;
  }
};

const getStatusLabel = (status: string): string => {
  switch (status.toUpperCase()) {
    case 'SUBMITTED': return 'SUBMITTED';
    case 'ONGOING': return 'IN PROGRESS';
    case 'APPROVED': return 'APPROVED';
    case 'REJECTED': return 'REJECTED';
    default: return 'SUBMITTED';
  }
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const formatTime = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

const createTimelineFromProposal = (proposal: any): TimelineItem[] => {
  const timeline: TimelineItem[] = [];
  
  // Always add submitted entry first
  timeline.push({
    id: `${proposal.id}-submitted`,
    date: formatDate(proposal.created_at),
    time: formatTime(proposal.created_at),
    title: 'Proposal Submitted',
    description: `Your proposal "${proposal.title}" has been successfully submitted for review.`,
    status: 'SUBMITTED',
    created_at: proposal.created_at
  });

  // Add status-specific entries based on current status
  const currentStatus = proposal.status.toUpperCase();
  
  if (currentStatus === 'ONGOING') {
    timeline.push({
      id: `${proposal.id}-ongoing`,
      date: formatDate(proposal.updated_at || proposal.created_at),
      time: formatTime(proposal.updated_at || proposal.created_at),
      title: 'Review In Progress',
      description: 'Your proposal is currently under review by our team.',
      status: 'ONGOING',
      created_at: proposal.updated_at || proposal.created_at
    });
  } else if (currentStatus === 'APPROVED') {
    // Add ongoing entry first if we went through that stage
    timeline.push({
      id: `${proposal.id}-ongoing`,
      date: formatDate(proposal.updated_at || proposal.created_at),
      time: formatTime(proposal.updated_at || proposal.created_at),
      title: 'Review In Progress',
      description: 'Your proposal was under review by our team.',
      status: 'ONGOING',
      created_at: proposal.updated_at || proposal.created_at
    });
    
    // Then add approved entry
    timeline.push({
      id: `${proposal.id}-approved`,
      date: formatDate(proposal.updated_at),
      time: formatTime(proposal.updated_at),
      title: 'Proposal Approved',
      description: 'Congratulations! Your proposal has been approved and we will proceed with the collaboration.',
      status: 'APPROVED',
      created_at: proposal.updated_at
    });
  } else if (currentStatus === 'REJECTED') {
    timeline.push({
      id: `${proposal.id}-rejected`,
      date: formatDate(proposal.updated_at || proposal.created_at),
      time: formatTime(proposal.updated_at || proposal.created_at),
      title: 'Proposal Status Update',
      description: 'Your proposal has been reviewed. Please check your email for detailed feedback and next steps.',
      status: 'REJECTED',
      created_at: proposal.updated_at || proposal.created_at
    });
  }

  return timeline;
};

export default function CollabProposalTracking() {
  const [proposalData, setProposalData] = useState<ProposalData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const proposalId = searchParams?.get('id');

  useEffect(() => {
    const fetchProposalData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('Proposal ID from URL:', proposalId);
        console.log('API Base URL:', API_BASE);
        
        if (proposalId) {
          // Fetch specific proposal by ID
          const proposal = await apiService.getProposal(parseInt(proposalId));
          console.log('Fetched proposal:', proposal);
          
          const timeline = createTimelineFromProposal(proposal);
          
          setProposalData({
            ...proposal,
            timeline: timeline
          });
        } else {
          // If no ID provided, get the first proposal (or redirect to selection)
          const proposals = await apiService.getAllProposals();
          
          if (proposals.length === 0) {
            setError('No proposals found. Please submit a proposal first.');
            return;
          }
          
          // Use the most recent proposal if no ID is specified
          const latestProposal = proposals[0];
          const timeline = createTimelineFromProposal(latestProposal);
          
          setProposalData({
            ...latestProposal,
            timeline: timeline
          });
        }
        
      } catch (err) {
        console.error('Error fetching proposal:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch proposal data');
      } finally {
        setLoading(false);
      }
    };

    fetchProposalData();
  }, [proposalId]);

  // Loading state
  if (loading) {
    return (
      <ProtectedRoute allowedRoles={["user"]}>
        <CollabCompanyProtectedRoute>
          <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#B11016] mx-auto mb-4"></div>
              <p className="text-gray-600">Loading proposal data...</p>
            </div>
          </div>
        </CollabCompanyProtectedRoute>
      </ProtectedRoute>
    );
  }

  // Error state
  if (error) {
    return (
      <ProtectedRoute allowedRoles={["user"]}>
        <CollabCompanyProtectedRoute>
          <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
              <div className="mb-4">
                <svg className="mx-auto h-12 w-12 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.98-.833-2.75 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Proposal</h3>
              <p className="text-red-600 mb-4">{error}</p>
              <div className="space-x-4">
                <button 
                  onClick={() => router.push("/dashboard")}
                  className="bg-[#B11016] text-white px-6 py-2 rounded hover:bg-[#800b10] transition-colors"
                >
                  Back to Dashboard
                </button>
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition-colors"
                >
                  Retry
                </button>
              </div>
            </div>
          </div>
        </CollabCompanyProtectedRoute>
      </ProtectedRoute>
    );
  }

  // No proposal found state
  if (!proposalData) {
    return (
      <ProtectedRoute allowedRoles={["user"]}>
        <CollabCompanyProtectedRoute>
          <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
              <div className="mb-4">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Proposal Found</h3>
              <p className="text-gray-600 mb-4">The requested proposal could not be found.</p>
              <button 
                onClick={() => router.push("/dashboard")}
                className="bg-[#B11016] text-white px-6 py-2 rounded hover:bg-[#800b10] transition-colors"
              >
                Back to Dashboard
              </button>
            </div>
          </div>
        </CollabCompanyProtectedRoute>
      </ProtectedRoute>
    );
  }

  const currentStep = getStepNumber(proposalData.status);
  const isRejected = proposalData.status.toUpperCase() === 'REJECTED';

  return (
    <ProtectedRoute allowedRoles={["user", "employee" ]}>
   
        <>
          <div className="min-h-screen bg-white flex flex-col items-center px-[10%] py-8">
            {/* Header */}
            <div className="relative flex items-center w-full mt-2 mb-10">
                {/* Back Button */}
                <button
                    onClick={() => router.push("/dashboard")}
                    className="absolute left-0 flex items-center text-[#B11016] hover:text-[#800b10] transition-colors"
                >
                    <FaArrowLeft className="mr-2" />
                    <span className="hidden sm:inline">Back</span>
                </button>

                {/* Title */}
                <div className="text-center w-full">
                    <h1 className="text-2xl sm:text-4xl font-bold text-[#B11016] pb-4">
                        Track Your Proposal
                    </h1>
                    <p className="text-md text-black mb-6">
                        View the status of your submitted collaboration proposal with BPI.
                    </p>
                    <div className="mx-2 border-b-[3px] border-[#B11016]"></div>
                </div>
            </div>
            
            {/* Status Timeline - Horizontal Progress Bar */}
            <div className="relative flex items-center justify-between w-full mb-10 mt-10">
              {/* Connecting Lines */}
              <div className={`absolute top-5 left-10 right-1/2 h-1 z-0 mr-4 ${
                currentStep >= 2 && !isRejected ? 'bg-red-700' : 'bg-gray-300'
              }`}></div>
              <div className={`absolute top-5 left-1/2 right-10 h-1 z-0 ml-5 ${
                currentStep >= 3 && !isRejected ? 'bg-red-700' : 'bg-gray-300'
              }`}></div>

              {/* Step 1 - Submitted */}
              <div className="flex flex-col items-center z-10">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                  currentStep >= 1
                    ? isRejected 
                      ? 'bg-red-500 text-white'
                      : 'bg-red-700 text-white'
                    : 'border-2 border-gray-400 bg-white text-gray-500'
                }`}>
                  {currentStep >= 1 ? '✓' : '1'}
                </div>
                <span className={`mt-2 font-bold text-xs sm:text-sm ${
                  currentStep >= 1 ? 'text-black' : 'text-gray-400'
                }`}>SUBMITTED</span>
              </div>

              {/* Step 2 - In Progress */}
              <div className="flex flex-col items-center z-10">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                  currentStep >= 2 && !isRejected
                    ? 'bg-red-700 text-white'
                    : 'border-2 border-gray-400 bg-white text-gray-500'
                }`}>
                  {currentStep >= 2 && !isRejected ? '2' : '2'}
                </div>
                <span className={`mt-2 font-bold text-xs sm:text-sm ${
                  currentStep >= 2 && !isRejected ? 'text-black' : 'text-gray-400'
                }`}>IN PROGRESS</span>
              </div>

              {/* Step 3 - Approved */}
              <div className="flex flex-col items-center z-10">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                  currentStep >= 3 && !isRejected
                    ? 'bg-red-700 text-white'
                    : 'border-2 border-gray-400 bg-white text-gray-500'
                }`}>
                  {currentStep >= 3 && !isRejected ? '✓' : '3'}
                </div>
                <span className={`mt-2 font-bold text-xs sm:text-sm ${
                  currentStep >= 3 && !isRejected ? 'text-black' : 'text-gray-400'
                }`}>APPROVED</span>
              </div>
            </div>

            {/* Rejection Notice */}
            {isRejected && (
              <div className="w-full mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">
                      Proposal Requires Attention
                    </h3>
                    <div className="mt-2 text-sm text-red-700">
                      <p>Your proposal requires further review or modifications. Please check your email for detailed feedback and next steps.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Proposal Details */}
            <div className="w-full">
              {/* Proposal Title */}
              <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-4">
                PROPOSAL TITLE
              </label>
              <div className="relative w-full mb-6">
                <input
                  type="text"
                  value={proposalData.title}
                  readOnly
                  className="w-full px-3 py-3 border-0 
                        bg-[#E7E7E7] text-gray-900
                        focus:outline-none text-sm sm:text-base"
                />
                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-[#B11016]" />
              </div>
              
              {/* Row with two inputs */}
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Type of Collaboration */}
                <div className="flex-1">
                  <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-4">
                    TYPE OF COLLABORATION
                  </label>
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={proposalData.collab_type || 'Not specified'}
                      readOnly
                      className="w-full px-3 py-3 border-0 
                            bg-[#E7E7E7] text-gray-900
                            focus:outline-none text-sm sm:text-base"
                    />
                    <div className="absolute left-0 bottom-0 w-full h-[2px] bg-[#B11016]" />
                  </div>
                </div>
                
                {/* Expected Support from BPI */}
                <div className="flex-1">
                  <label className="block text-sm sm:text-base font-medium text-[#B11016] mb-4">
                    EXPECTED SUPPORT FROM BPI
                  </label>
                  <div className="relative w-full">
                    <input
                      type="text"
                      value={proposalData.description ? 
                        (proposalData.description.length > 50 ? 
                          proposalData.description.substring(0, 50) + '...' : 
                          proposalData.description
                        ) : 'See proposal description'
                      }
                      readOnly
                      className="w-full px-3 py-3 border-0 
                            bg-[#E7E7E7] text-gray-900
                            focus:outline-none text-sm sm:text-base"
                      title={proposalData.description}
                    />
                    <div className="absolute left-0 bottom-0 w-full h-[2px] bg-[#B11016]" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Vertical Status Timeline */}
            <div className="w-full mt-12">
              <div className="text-center mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-[#B11016]">STATUS HISTORY</h2>
                <p className="text-sm text-gray-600 mt-2">Track the progress of your proposal submission</p>
              </div>

              <div className="relative">
                {/* Vertical Timeline Line */}
                {proposalData.timeline.length > 0 && (
                  <div className="absolute left-[22px] top-0 bottom-0 w-[2px] bg-[#B11016]"></div>
                )}

                {/* Timeline Items */}
                <div className="space-y-6">
                  {proposalData.timeline.map((item, index) => (
                    <div key={item.id} className="relative flex items-start">
                      <div className={`flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center z-10 ${
                        item.status === 'REJECTED' ? 'bg-red-500' : 
                        item.status === 'APPROVED' ? 'bg-green-600' :
                        item.status === 'ONGOING' ? 'bg-yellow-600' :
                        'bg-[#B11016]'
                      }`}>
                        <span className="text-white text-lg">
                          {item.status === 'REJECTED' ? '!' : 
                           item.status === 'APPROVED' ? '✓' :
                           item.status === 'ONGOING' ? '⏳' : 
                           '✓'}
                        </span>
                      </div>
                      <div className={`ml-6 border border-gray-300 rounded-lg p-4 flex-1 ${
                        item.status === 'REJECTED' ? 'bg-red-50 border-red-200' : 
                        item.status === 'APPROVED' ? 'bg-green-50 border-green-200' :
                        item.status === 'ONGOING' ? 'bg-yellow-50 border-yellow-200' :
                        'bg-gray-100'
                      }`}>
                        <div className="text-sm text-gray-600 mb-1">
                          {item.date} | {item.time}
                        </div>
                        <div className={`text-base font-semibold mb-2 ${
                          item.status === 'REJECTED' ? 'text-red-800' :
                          item.status === 'APPROVED' ? 'text-green-800' :
                          item.status === 'ONGOING' ? 'text-yellow-800' :
                          'text-gray-800'
                        }`}>
                          {item.title}
                        </div>
                        <div className={`text-sm ${
                          item.status === 'REJECTED' ? 'text-red-700' :
                          item.status === 'APPROVED' ? 'text-green-700' :
                          item.status === 'ONGOING' ? 'text-yellow-700' :
                          'text-gray-700'
                        }`}>
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))}

                  {proposalData.timeline.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <svg className="mx-auto h-12 w-12 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p>No timeline data available</p>
                      <p className="text-xs mt-1">Timeline will update as your proposal progresses</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="w-full mt-10 space-y-4">
              {/* View Files Button */}
              <Link href={`/collabfiles${proposalId ? `?proposalId=${proposalId}` : ''}`}>
                <button className="w-full bg-[#B11016] border-2 border-transparent text-white py-3 px-6 font-bold text-lg hover:bg-white hover:border-[#B11016] hover:text-[#B11016] transition-colors">
                  VIEW FILES
                </button>
              </Link>
              
              {/* Refresh Button
              <button 
                onClick={() => window.location.reload()}
                className="w-full bg-white border-2 border-[#B11016] text-[#B11016] py-3 px-6 font-bold text-lg hover:bg-[#B11016] hover:text-white transition-colors"
              >
                REFRESH STATUS
              </button> */}
            </div>
          </div>
        </>
      
    </ProtectedRoute>
  );
}