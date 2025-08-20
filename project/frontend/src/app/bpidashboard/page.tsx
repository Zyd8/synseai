'use client';

import ProposalReportChart from '@/components/DonutChart';
import Sidebar from "@/components/DashboardSidebar";
import ProtectedRoute from "@/components/ProtectedRoute";
import CollabCompanyProtectedRoute from "@/components/CollabCompanyProtectedRoute";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BpiDashboard() {
    const router = useRouter();
    const API = process.env.NEXT_PUBLIC_API_URL;

    const [proposals, setProposals] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState<number | null>(null);

    // Map backend status to display status
    const mapStatus = (status: string) => {
        switch (status) {
            case "SUBMITTED": return "Submitted";
            case "ONGOING": return "In Progress";
            case "APPROVED": return "Approved";
            case "REJECTED": return "Rejected";
            default: return status;
        }
    };

    // Map display status back to backend status
    const mapStatusToBackend = (status: string) => {
        switch (status) {
            case "Submitted": return "SUBMITTED";
            case "In Progress": return "ONGOING";
            case "Approved": return "APPROVED";
            case "Rejected": return "REJECTED";
            default: return status;
        }
    };

    useEffect(() => {
        const fetchAllProposals = async () => {
            const token = sessionStorage.getItem("access_token");
            try {
                const res = await fetch(`${API}/api/proposal/all`, {
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

        fetchAllProposals();
    }, []);

    // Compute summary counts based on mapped status
    const summary = [
        { 
            label: "Submitted", 
            count: proposals.filter(p => mapStatus(p.status) === "Submitted").length, 
            img: "/images/db_submitted.png" 
        },
        { 
            label: "In Progress", 
            count: proposals.filter(p => mapStatus(p.status) === "In Progress").length, 
            img: "/images/db_inprogress.png" 
        },
        { 
            label: "Approved", 
            count: proposals.filter(p => mapStatus(p.status) === "Approved").length, 
            img: "/images/db_approved.png" 
        },
        { 
            label: "Rejected", 
            count: proposals.filter(p => mapStatus(p.status) === "Rejected").length, 
            img: "/images/db_rejected.png" 
        },
    ];

    const handleProposalClick = (proposalId: number) => {
    console.log("Navigating to proposal:", proposalId);
    router.push(`/collabproposaltracking?id=${proposalId}`);
    };

    // Activities = latest 3 proposals sorted by created_at
    const activities = proposals
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        .slice(0, 3);

    const [openRow, setOpenRow] = useState<number | null>(null);

    const handleStatusUpdate = async (proposalId: number, newStatus: string) => {
        const token = sessionStorage.getItem("access_token");
        setUpdating(proposalId);
        
        try {
            const res = await fetch(`${API}/api/proposal/${proposalId}/status`, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ 
                    status: mapStatusToBackend(newStatus) 
                }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Failed to update proposal status");
            }

            const data = await res.json();
            
            // Update the local state
            setProposals(prevProposals =>
                prevProposals.map(p =>
                    p.id === proposalId ? { ...p, status: data.proposal.status } : p
                )
            );

            alert(`Proposal status updated to: ${newStatus}`);
            setOpenRow(null);
            
        } catch (err) {
            console.error("Error updating proposal status:", err);
            alert(`Error updating proposal status: ${err instanceof Error ? err.message : 'Unknown error'}`);
        } finally {
            setUpdating(null);
        }
    };

    const getStatusOptions = (currentStatus: string) => {
        const mappedStatus = mapStatus(currentStatus);
        const allStatuses = ["Submitted", "In Progress", "Approved", "Rejected"];
        return allStatuses.filter(status => status !== mappedStatus);
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <main className="flex-1 py-3 sm:py-6 pl-[2%] sm:pl-[3%] pr-[3%] sm:pr-[5%]">
                {/* Header row */}
                <div className="flex items-center justify-between border-b-[3px] border-red-700 pb-2 sm:pb-4">
                    <div>
                        <h1 className="text-2xl font-bold text-red-700">Employee Dashboard</h1>
                        <p className="text-sm text-gray-600 mt-1">
                            Review and manage collaboration proposals from all companies.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-[#B11016] border-2 text-white px-4 py-2 rounded-md hover:bg-white hover:border-[#B11016] hover:text-[#B11016] transition"
                        >
                            Refresh
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
                                            <div className="text-sm text-blue-600 mb-1">{a.company_name}</div>
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
  <div className="sm:col-span-1 border border-gray-500 rounded-lg p-5 bg-white drop-shadow-xl relative">
    <div className="max-h-64 overflow-y-auto">
      <table className="w-full text-sm rounded-lg overflow-hidden">
        <thead className="sticky top-0 bg-white z-10">
          <tr>
            <th className="p-3 text-left text-red-700">ID</th>
            <th className="p-3 text-left text-red-700">Company</th>
            <th className="p-3 text-left text-red-700">Proposal Title</th>
            <th className="p-3 text-left text-red-700">Status</th>
            <th className="p-3 text-center text-red-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {!loading && proposals.length === 0 && (
            <tr>
              <td colSpan={5} className="p-3 text-center text-gray-500">
                No proposals found
              </td>
            </tr>
          )}

          {!loading &&
            proposals.map((p, i) => (
              <tr
                key={i}
                className="border-t hover:bg-gray-50 transition-colors"
                onClick={(e) => {
                  // Prevent row click if action button was clicked
                  if (!(e.target as HTMLElement).closest(".action-menu")) {
                    handleProposalClick(p.id);
                  }
                }}
              >
                <td className="p-3">{p.id}</td>
                <td className="p-3">
                  <div className="font-medium">{p.company_name}</div>
                  <div className="text-xs text-gray-500">{p.company_industry}</div>
                </td>
                <td className="p-3">{p.title}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      mapStatus(p.status) === "Approved"
                        ? "bg-green-100 text-green-800"
                        : mapStatus(p.status) === "Rejected"
                        ? "bg-red-100 text-red-800"
                        : mapStatus(p.status) === "In Progress"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {mapStatus(p.status)}
                  </span>
                </td>

                {/* Action Button */}
                <td className="p-3 text-center relative action-menu">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // prevent row click
                      setOpenRow(openRow === i ? null : i);
                    }}
                    className="text-xl font-bold text-gray-600 hover:text-red-600 disabled:opacity-50"
                    disabled={updating === p.id}
                  >
                    {updating === p.id ? "..." : "⋮"}
                  </button>

                  {/* Dropdown Menu */}
                  {openRow === i && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-20 overflow-hidden">
                      {getStatusOptions(p.status).map((status) => (
                        <button
                          key={status}
                          onClick={(e) => {
                            e.stopPropagation(); // stop row navigation
                            handleStatusUpdate(p.id, status);
                            setOpenRow(null); // close after action
                          }}
                          className="w-full px-4 py-2 text-left text-sm hover:bg-red-100 text-red-700 border-b border-gray-100 last:border-b-0"
                          disabled={updating === p.id}
                        >
                          Set to {status}
                        </button>
                      ))}
                    </div>
                  )}
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
    );
}