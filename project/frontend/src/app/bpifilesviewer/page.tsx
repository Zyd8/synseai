"use client";

import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BpiFilesViewerPage = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("all"); 

    // Dummy proposals data
    const proposals = [
        { id: 1, title: "AI-Powered System", status: "Pending" },
        { id: 2, title: "Mobile Banking Upgrade", status: "Approved" },
        { id: 3, title: "Cloud Migration Plan", status: "Pending" },
        { id: 4, title: "Cybersecurity Enhancement", status: "Rejected" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 sm:px-[5%] lg:px-[10%] py-4 sm:py-8">
            {/* Header */}
            <div className="relative flex items-center w-full mt-2 mb-4">
                {/* Back Button */}
                <button
                    onClick={() => {
                        router.push("/bpidashboard");
                    }}
                    className="absolute left-0 flex items-center text-[#B11016] hover:text-[#800b10] text-sm sm:text-base"
                >
                    <FaArrowLeft className="mr-2" />
                    <span className="hidden sm:inline">Back</span>
                </button>

                {/* Title */}
                <div className="text-center w-full">
                    <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-[#B11016] pb-2 sm:pb-4">
                        Technology Department
                    </h1>
                    <p className="text-sm sm:text-md text-black mb-4 sm:mb-6 px-4">
                        Files
                    </p>
                    <div className="mx-2 border-b-[3px] border-[#B11016]"></div>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex w-full max-w-4xl border-b">
                <button
                    onClick={() => setActiveTab("pending")}
                    className={`flex-1 text-center py-2 font-semibold transition ${
                        activeTab === "pending"
                            ? "bg-[#B11016] text-white rounded-t"
                            : "text-gray-600 hover:text-black"
                    }`}
                >
                    Files Pending
                </button>
                <button
                    onClick={() => setActiveTab("all")}
                    className={`flex-1 text-center py-2 font-semibold transition ${
                        activeTab === "all"
                            ? "bg-[#B11016] text-white rounded-t"
                            : "text-gray-600 hover:text-black"
                    }`}
                >
                    All Files
                </button>
            </div>

            {/* Tab Content */}
            <div className="w-full max-w-4xl mt-6 bg-white shadow rounded-lg p-4 overflow-x-auto border border-gray-400">
                {activeTab === "pending" && (
                    <table className="w-full text-sm rounded-lg overflow-hidden min-w-[600px]">
                        <thead>
                            <tr>
                                <th className="p-3 text-left text-red-700 whitespace-nowrap">Proposal ID</th>
                                <th className="p-3 text-left text-red-700 whitespace-nowrap">Proposal Title</th>
                                <th className="p-3 text-left text-red-700 whitespace-nowrap">Status</th>
                                <th className="p-3 text-center text-red-700 whitespace-nowrap">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {proposals
                                .filter((p) => p.status === "Pending")
                                .map((p, i) => (
                                    <tr key={i} className="border-t">
                                        <td className="p-3 whitespace-nowrap">{p.id}</td>
                                        <td className="p-3">{p.title}</td>
                                        <td className="p-3">{p.status}</td>
                                        <td className="p-3 text-center">⋮</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                )}

                {activeTab === "all" && (
                    <table className="w-full text-sm rounded-lg overflow-hidden min-w-[600px]">
                        <thead>
                            <tr>
                                <th className="p-3 text-left text-red-700 whitespace-nowrap">Proposal ID</th>
                                <th className="p-3 text-left text-red-700 whitespace-nowrap">Proposal Title</th>
                                <th className="p-3 text-left text-red-700 whitespace-nowrap">Status</th>
                                <th className="p-3 text-center text-red-700 whitespace-nowrap">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {proposals.map((p, i) => (
                                <tr key={i} className="border-t">
                                    <td className="p-3 whitespace-nowrap">{p.id}</td>
                                    <td className="p-3">{p.title}</td>
                                    <td className="p-3">{p.status}</td>
                                    <td className="p-3 text-center">⋮</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default BpiFilesViewerPage;
