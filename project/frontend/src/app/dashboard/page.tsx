'use client';

import ProposalReportChart from '@/components/DonutChart';
import Sidebar from "@/components/DashboardSidebar";
import ProtectedRoute from "@/components/ProtectedRoute";
import CollabCompanyProtectedRoute from "@/components/CollabCompanyProtectedRoute";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const router = useRouter();
    const API = process.env.NEXT_PUBLIC_API_URL;

    const [proposals, setProposals] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    // Map backend status
    const mapStatus = (status: string) => {
        switch (status) {
            case "SUBMITTED": return "Submitted";
            case "ONGOING": return "In Progress";
            case "APPROVED": return "Approved";
            case "REJECTED": return "Rejected";
            default: return status;
        }
    };

    useEffect(() => {
        const fetchProposals = async () => {
            const token = sessionStorage.getItem("access_token");
            try {
                const res = await fetch(`${API}/api/proposal`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!res.ok) throw new Error("Failed to fetch proposals");
                const data = await res.json();

                setProposals(Array.isArray(data) ? data : data.proposals || []);
            } catch (err) {
                console.error("Error fetching proposals:", err);
                setProposals([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProposals();
    }, []);

    // Compute summary counts
    const summary = [
        { label: "Submitted", count: proposals.filter(p => mapStatus(p.status) === "Submitted").length, img: "/images/db_submitted.png" },
        { label: "In Progress", count: proposals.filter(p => mapStatus(p.status) === "In Progress").length, img: "/images/db_inprogress.png" },
        { label: "Approved", count: proposals.filter(p => mapStatus(p.status) === "Approved").length, img: "/images/db_approved.png" },
        { label: "Rejected", count: proposals.filter(p => mapStatus(p.status) === "Rejected").length, img: "/images/db_rejected.png" },
    ];

    // Activities = latest 3 proposals sorted by created_at
    const activities = proposals
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        .slice(0, 3);

    // Handle proposal row click
    const handleProposalClick = (proposalId: number) => {
        router.push(`/proposaltracking/${proposalId}`);
    };

    return (
        <ProtectedRoute allowedRoles={["user"]}>
            <CollabCompanyProtectedRoute>
                <div className="flex min-h-screen bg-gray-50">
                    {/* Sidebar */}
                    <Sidebar />

                    {/* Main content */}
                    <main className="flex-1 py-3 sm:py-6 pl-[2%] sm:pl-[3%] pr-[3%] sm:pr-[5%]">
                        {/* Header row */}
                        <div className="flex items-center justify-between border-b-[3px] border-red-700 pb-2 sm:pb-4">
                            <div>
                                <h1 className="text-2xl font-bold text-red-700">Dashboard</h1>
                                <p className="text-sm text-gray-600 mt-1">
                                    Track the status of all your submitted collaboration proposals with BPI.
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => router.push("/proposalform")}
                                    className="bg-[#B11016] border-2 text-white px-4 py-2 rounded-md hover:bg-white hover:border-[#B11016] hover:text-[#B11016] transition"
                                >
                                    Create Proposal
                                </button>
                                <button
                                    onClick={() => router.push("/companysetup")}
                                    className="bg-[#B11016] border-2 text-white px-4 py-2 rounded-md hover:bg-white hover:border-[#B11016] hover:text-[#B11016] transition"
                                >
                                    Edit Company
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-[69%_30%] gap-4 mt-5">
                            {/* Summary cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-0 p-0">
                                {summary.map((item, i) => (
                                    <div
                                        key={i}
                                        className="bg-white rounded-lg flex items-center gap-4 drop-shadow-lg border border-gray-500"
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.label}
                                            className="m-0 p-0 h-full w-auto object-cover"
                                        />
                                        <div className="flex-1 flex items-center justify-center">
                                            <h2 className="text-4xl font-bold">{item.count}</h2>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Activities */}
                            <div className="bg-white rounded-lg drop-shadow-lg sm:p-8 p-6 border border-gray-500">
                                <h3 className="text-red-700 font-bold text-xl mb-4 border-b border-black pb-2 sm:pb-4">
                                    Recent Activities
                                </h3>

                                <div className="relative" style={{ "--dot-size": "0.75rem" } as React.CSSProperties}>
                                    {activities.length === 0 ? (
                                        <p className="text-gray-500 text-center">No recent activities</p>
                                    ) : (
                                        activities.map((a, i, arr) => (
                                            <div key={i} className="relative flex items-start">
                                                {/* Dot */}
                                                <div
                                                    className="relative z-10 rounded-full flex-shrink-0 bg-gray-600"
                                                    style={{
                                                        width: "var(--dot-size)",
                                                        height: "var(--dot-size)",
                                                        marginTop: "0.5rem",
                                                    }}
                                                ></div>

                                                {i < arr.length - 1 && (
                                                    <div
                                                        className="absolute left-[calc(var(--dot-size)/2-1px)] top-[calc(var(--dot-size)+0.5rem)] w-0.5 bg-gray-400"
                                                        style={{ height: "calc(100% - var(--dot-size) - 0rem)" }}
                                                    ></div>
                                                )}

                                                <div className="ml-4 pb-6 last:pb-0 mb-4">
                                                    <div className="font-semibold text-gray-900">{a.title}</div>
                                                    <div className="font-bold text-gray-900">{mapStatus(a.status)}</div>
                                                    <div className="text-gray-500 text-sm">
                                                        {new Date(a.created_at).toLocaleDateString("en-US", {
                                                            year: "numeric",
                                                            month: "long",
                                                            day: "numeric",
                                                        })}{" | "}{new Date(a.created_at).toLocaleTimeString("en-US", {
                                                            hour: "numeric",
                                                            minute: "2-digit",
                                                            hour12: true,
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Bottom grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-[69%_30%] gap-4 mt-5 items-stretch">
                            {/* Table */}
                            <div className="sm:col-span-1 border border-gray-500 rounded-lg p-5 bg-white drop-shadow-xl">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-red-700 font-bold text-lg">Your Proposals</h3>
                                    <span className="text-sm text-gray-600">Click on any row to view details</span>
                                </div>
                                
                                <div className="max-h-64 overflow-y-auto">
                                    <table className="w-full text-sm rounded-lg overflow-hidden">
                                        <thead className="sticky top-0 bg-white z-10">
                                            <tr>
                                                <th className="p-3 text-left text-red-700">Proposal ID</th>
                                                <th className="p-3 text-left text-red-700">Proposal Title</th>
                                                <th className="p-3 text-left text-red-700">Status</th>
                                                <th className="p-3 text-center text-red-700">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {!loading && proposals.length === 0 && (
                                                <tr>
                                                    <td colSpan={4} className="p-6 text-center text-gray-500">
                                                        <div className="flex flex-col items-center gap-2">
                                                            <p>No proposals found</p>
                                                            <button
                                                                onClick={() => router.push("/proposalform")}
                                                                className="text-red-700 hover:underline text-sm"
                                                            >
                                                                Create your first proposal
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )}
                                            {!loading &&
                                                proposals.map((p, i) => (
                                                    <tr 
                                                        key={i} 
                                                        className="border-t hover:bg-gray-50 cursor-pointer transition-colors"
                                                        onClick={() => handleProposalClick(p.id)}
                                                    >
                                                        <td className="p-3 font-medium text-red-700">#{p.id}</td>
                                                        <td className="p-3">
                                                            <div className="font-medium">{p.title}</div>
                                                            {p.description && (
                                                                <div className="text-xs text-gray-500 mt-1 truncate max-w-xs">
                                                                    {p.description}
                                                                </div>
                                                            )}
                                                        </td>
                                                        <td className="p-3">
                                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                                mapStatus(p.status) === 'Approved' ? 'bg-green-100 text-green-800' :
                                                                mapStatus(p.status) === 'Rejected' ? 'bg-red-100 text-red-800' :
                                                                mapStatus(p.status) === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                                                                'bg-gray-100 text-gray-800'
                                                            }`}>
                                                                {mapStatus(p.status)}
                                                            </span>
                                                        </td>
                                                        <td className="p-3 text-center">
                                                            <div className="flex items-center justify-center">
                                                                <svg 
                                                                    className="w-4 h-4 text-gray-400" 
                                                                    fill="none" 
                                                                    stroke="currentColor" 
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path 
                                                                        strokeLinecap="round" 
                                                                        strokeLinejoin="round" 
                                                                        strokeWidth={2} 
                                                                        d="M9 5l7 7-7 7" 
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                                {loading && <p className="text-center p-3">Loading proposals...</p>}
                            </div>

                            <div className="sm:col-span-1 h-full border border-gray-500 rounded-lg drop-shadow-lg">
                                <ProposalReportChart proposals={proposals} />
                            </div>
                        </div>
                    </main>
                </div>
            </CollabCompanyProtectedRoute>
        </ProtectedRoute>
    );
}