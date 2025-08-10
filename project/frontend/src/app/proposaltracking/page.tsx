"use client";
import Head from "next/head";
import React, { useState } from 'react';

interface TimelineItem {
    id: string;
    date: string;
    time: string;
    title: string;
    description: string;
    status: 'completed' | 'in_progress' | 'pending';
}

interface ProposalData {
    proposalTitle: string;
    typeOfCollaboration: string;
    expectedSupport: string;
    currentStep: number; // 1: submitted, 2: in_progress, 3: approved
    timeline: TimelineItem[];
}



export default function ProposalTracking() {
    const [proposalTitle, setproposalTitle] = useState<string>('');
    const [typeOfCollaboration, settypeOfCollaboration] = useState<string>('');
    const [expectedSupport, setexpectedSupport] = useState<string>('');
    const [currentStep, setCurrentStep] = useState<number>(1);
    const [timeline, setTimeline] = useState<TimelineItem[]>([]);
    
    // Replace with useEffect and API call
    // useEffect(() => {
    //     fetchProposalData(proposalId).then((data: ProposalData) => {
    //         setproposalTitle(data.proposalTitle);
    //         settypeOfCollaboration(data.typeOfCollaboration);
    //         setexpectedSupport(data.expectedSupport);
    //         setCurrentStep(data.currentStep);
    //         setTimeline(data.timeline);
    //     });
    // }, [proposalId]);
    
  return (
    <>
      <div className="min-h-screen bg-white flex flex-col items-center sm:px-[20%] px-[15%] py-6 sm:py-8">
        {/* Header */}
       <div className="text-center mt-2 w-full">
        <h1 className="text-2xl sm:text-4xl font-bold text-[#B11016] pb-4">
            Track Your Proposals
        </h1>
        <p className="text-md text-black mb-6">
            View the status of your submitted collaboration proposal with BPI.
        </p>
        <div className="mx-2 border-b-[3px] border-[#B11016]"></div>
        </div>
        
         {/* Status Timeline */}
      <div className="relative flex items-center justify-between w-full mb-10 mt-10">
        {/* Connecting Lines */}
        <div className={`absolute top-5 left-10 right-1/2 h-1 z-0 mr-4 ${
          currentStep >= 2 ? 'bg-red-700' : 'bg-gray-300'
        }`}></div>
        <div className={`absolute top-5 left-1/2 right-10 h-1 z-0 ml-5 ${
          currentStep >= 3 ? 'bg-red-700' : 'bg-gray-300'
        }`}></div>
        
        {/* Step 1 */}
        <div className="flex flex-col items-center z-10">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
            currentStep >= 1 
              ? 'bg-red-700 text-white' 
              : 'border-2 border-gray-400 bg-white text-gray-500'
          }`}>
            {currentStep >= 1 ? '✓' : '1'}
          </div>
          <span className={`mt-2 font-bold text-sm ${
            currentStep >= 1 ? 'text-black' : 'text-gray-400'
          }`}>SUBMITTED</span>
        </div>
        
        {/* Step 2 */}
        <div className="flex flex-col items-center z-10">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
            currentStep >= 2 
              ? 'bg-red-700 text-white' 
              : 'border-2 border-gray-400 bg-white text-gray-500'
          }`}>
            {currentStep >= 2 ? '2' : '2'}
          </div>
          <span className={`mt-2 font-bold text-sm ${
            currentStep >= 2 ? 'text-black' : 'text-gray-400'
          }`}>IN PROGRESS</span>
        </div>
        
        {/* Step 3 */}
        <div className="flex flex-col items-center z-10">
          <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
            currentStep >= 3 
              ? 'bg-red-700 text-white' 
              : 'border-2 border-gray-400 bg-white text-gray-500'
          }`}>
            {currentStep >= 3 ? '✓' : '3'}
          </div>
          <span className={`mt-2 font-bold text-sm ${
            currentStep >= 3 ? 'text-black' : 'text-gray-400'
          }`}>APPROVED</span>
        </div>
      </div>
        {/* Proposal Details */}
        <div className="w-full">
        {/* Proposal Title */}
        <label className="block text-sm sm:text-base font-medium text-red-600 mb-4">
            PROPOSAL TITLE
        </label>
        <div className="relative w-full mb-6">
            <input
            type="text"
            value={proposalTitle} // fetched from DB
            readOnly
            className="w-full px-3 py-3 border-0 
                        bg-[#E7E7E7] text-gray-900
                        focus:outline-none text-sm sm:text-base"
            placeholder=""
            />
            <div className="absolute left-0 bottom-0 w-full h-[2px] bg-[#B11016]" />
        </div>
        {/* Row with two inputs */}
        <div className="flex flex-col sm:flex-row gap-6">
            {/* Type of Collaboration */}
            <div className="flex-1">
            <label className="block text-sm sm:text-base font-medium text-red-600 mb-4">
                TYPE OF COLLABORATION
            </label>
            <div className="relative w-full">
                <input
                type="text"
                value={typeOfCollaboration} // fetched from DB
                readOnly
                className="w-full px-3 py-3 border-0 
                            bg-[#E7E7E7] text-gray-900
                            focus:outline-none text-sm sm:text-base"
                placeholder=""
                />
                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-[#B11016]" />
            </div>
            </div>
            {/* Expected Support from BPI */}
            <div className="flex-1">
            <label className="block text-sm sm:text-base font-medium text-red-600 mb-4">
                EXPECTED SUPPORT FROM BPI
            </label>
            <div className="relative w-full">
                <input
                type="text"
                value={expectedSupport} // fetched from DB
                readOnly
                className="w-full px-3 py-3 border-0 
                            bg-[#E7E7E7] text-gray-900
                            focus:outline-none text-sm sm:text-base"
                placeholder=""
                />
                <div className="absolute left-0 bottom-0 w-full h-[2px] bg-[#B11016]" />
            </div>
            </div>
        </div>
        </div>
        {/* Vertical Status Timeline */}
        <div className="w-full mt-12">
            <div className="text-center mb-8">
                <h2 className="text-lg sm:text-xl font-bold text-[#B11016]">STATUS</h2>
            </div>
            
            <div className="relative">
                {/* Vertical Timeline Line */}
                <div className="absolute left-[22px] top-0 bottom-0 w-[2px] bg-[#B11016]"></div>
                
                {/* Timeline Items */}
                <div className="space-y-6">
                    {timeline.map((item, index) => (
                        <div key={item.id} className="relative flex items-start">
                            <div className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center z-10 bg-[#B11016]">
                                <span className="text-white text-lg">✓</span>
                            </div>
                            <div className="ml-6 bg-gray-100 border border-gray-300 rounded-lg p-4 flex-1">
                                <div className="text-sm text-gray-600 mb-1">{item.date} | {item.time}</div>
                                <div className="text-base font-semibold text-gray-800 mb-2">{item.title}</div>
                                <div className="text-sm text-gray-700">{item.description}</div>
                            </div>
                        </div>
                    ))}
                    
                    {timeline.length === 0 && (
                        <div className="text-center py-8 text-gray-500">
                            No timeline data available
                        </div>
                    )}
                </div>
            </div>
        </div>
        {/* View Proposal Document Button */}
        <div className="w-full mt-10">
            <button className="w-full bg-[#B11016] border-2 border-transparent  text-white py-3 px-6 font-bold text-lg hover:bg-white hover:border-[#B11016] hover:text-[#B11016] transition-colors">
                VIEW PROPOSAL DOCUMENT
            </button>
        </div>
      </div>
    </>
  );
}