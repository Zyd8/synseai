'use client';

import ProposalReportChart from '@/components/DonutChart';
import Sidebar from "@/components/DashboardSidebar";
import ProtectedRoute from "@/components/ProtectedRoute";
import CollabCompanyProtectedRoute from "@/components/CollabCompanyProtectedRoute";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function BpiDashboard() {
    const router = useRouter();
    const API = process.env.NEXT_PUBLIC_API_URL;

    const [proposals, setProposals] = useState<any[]>([]);
    const [companies, setCompanies] = useState<{ [key: number]: any }>({});
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState<number | null>(null);
    const [openRow, setOpenRow] = useState<number | null>(null);
    const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

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

    // Fetch company by ID
    const fetchCompanyById = async (companyId: number) => {
        const token = sessionStorage.getItem("access_token");
        try {
            const res = await fetch(`${API}/api/company/${companyId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            if (!res.ok) {
                console.warn(`Failed to fetch company ${companyId}`);
                return null;
            }

            const data = await res.json();
            return data.company;
        } catch (err) {
            console.error(`Error fetching company ${companyId}:`, err);
            return null;
        }
    };

    useEffect(() => {
        const fetchAllProposals = async () => {
            const token = sessionStorage.getItem("access_token");
            try {
                console.log("Fetching proposals from:", `${API}/api/proposal`);
                const res = await fetch(`${API}/api/proposal`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!res.ok) throw new Error("Failed to fetch proposals");
                const data = await res.json();
                console.log("Full API Response:", data);

                // Extract proposals from the response structure
                const proposalsList = data.proposals || data || [];
                console.log("Extracted proposals list:", proposalsList);

                setProposals(Array.isArray(proposalsList) ? proposalsList : []);

                // Extract unique company IDs and fetch company data
                const companyIds = [...new Set(proposalsList
                    .map((p: any) => p.company_id)
                    .filter((id: any) => id !== null && id !== undefined)
                )] as number[];

                console.log("Unique company IDs:", companyIds);

                // Fetch all companies in parallel
                const companyPromises = companyIds.map(async (id: number) => {
                    const company = await fetchCompanyById(id);
                    return { id, company };
                });

                const companyResults = await Promise.all(companyPromises);

                // Create companies lookup object
                const companiesLookup: { [key: number]: any } = {};
                companyResults.forEach(({ id, company }) => {
                    if (company) {
                        companiesLookup[id] = company;
                    }
                });

                console.log("Companies lookup:", companiesLookup);
                setCompanies(companiesLookup);

            } catch (err) {
                console.error("Error fetching proposals:", err);
                setProposals([]);
            } finally {
                setLoading(false);
            }
        };

        fetchAllProposals();
    }, [API]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = () => {
            setOpenRow(null);
        };

        if (openRow !== null) {
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
        }
    }, [openRow]);

    // Get company name for a proposal
    const getCompanyName = (proposal: any) => {
        if (proposal.company_id && companies[proposal.company_id]) {
            return companies[proposal.company_id].name;
        }
        return proposal.company_name || 'Unknown Company';
    };

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

    // Handle proposal row click → navigate to BPI proposal tracking
    const handleProposalClick = (proposalId: number) => {
        console.log('=== NAVIGATION DEBUG ===');
        console.log('Proposal ID:', proposalId);

        const token = sessionStorage.getItem("access_token");
        const userRole = sessionStorage.getItem("role");

        if (!token) {
            alert('Session expired. Please log in again.');
            router.push('/login');
            return;
        }

        if (!userRole) {
            alert('Role information missing. Please log in again.');
            router.push('/login');
            return;
        }

        if (userRole !== 'employee') {
            alert('Access denied. Employee role required.');
            return;
        }

        // ✅ Correct path for BPI proposal tracking
        const targetUrl = `/bpiproposaltracking?id=${proposalId}`;
        console.log('Navigating to:', targetUrl);
        router.push(targetUrl);
    };

    // Activities = latest 3 proposals sorted by created_at
    const activities = proposals
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        .slice(0, 3);

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

    const handleActionClick = (e: React.MouseEvent, rowIndex: number) => {
        e.stopPropagation();

        if (openRow === rowIndex) {
            setOpenRow(null);
            return;
        }

        // Calculate dropdown position
        const button = e.currentTarget as HTMLElement;
        const rect = button.getBoundingClientRect();
        const scrollY = window.scrollY;
        const scrollX = window.scrollX;

        // Position dropdown to the left of the button (since it's the last column)
        setDropdownPosition({
            top: rect.bottom + scrollY + 5, // 5px gap below button
            left: rect.right + scrollX - 160 // Align right edge of dropdown with right edge of button
        });

        setOpenRow(rowIndex);
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
                    <div className="bg-white rounded-lg drop-shadow-lg sm:p-8 p-6 border border-gray-500 h-[350px] flex flex-col">
                        <h3 className="text-red-700 font-bold text-xl mb-4 border-b border-black pb-2 sm:pb-4">
                            Recent Activities
                        </h3>

                        {/* Scrollable container */}
                        <div
                            className="relative flex-1 overflow-y-auto pr-2"
                            style={{ "--dot-size": "0.75rem" } as React.CSSProperties}
                        >
                            {activities.length === 0 ? (
                                <p className="text-gray-500 text-center mt-6">No recent activities</p>
                            ) : (
                                <div className="space-y-0">
                                    {activities.map((a, i, arr) => (
                                        <div key={i} className="relative flex items-start">
                                            {/* Dot */}
                                            <div
                                                className="relative z-10 rounded-full flex-shrink-0 bg-[#B11016]"
                                                style={{
                                                    width: "var(--dot-size)",
                                                    height: "var(--dot-size)",
                                                    marginTop: "0.5rem",
                                                }}
                                            ></div>

                                            {/* Vertical line */}
                                            {i < arr.length - 1 && (
                                                <div
                                                    className="absolute left-[calc(var(--dot-size)/2-1px)] top-[calc(var(--dot-size)+0.5rem)] w-0.5 bg-gray-300"
                                                    style={{ height: "calc(100% - var(--dot-size) - 0rem)" }}
                                                ></div>
                                            )}

                                            {/* Content */}
                                            <div className="ml-4 pb-2">
                                                <div className="font-semibold text-gray-900">{a.title}</div>
                                                <div className="text-sm text-blue-600 mb-1">
                                                    {getCompanyName(a)}
                                                </div>
                                                <div className="font-bold text-gray-800 mb-1">
                                                    {mapStatus(a.status)}
                                                </div>
                                                <div className="text-gray-500 text-xs">
                                                    {new Date(a.created_at).toLocaleDateString("en-US", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric",
                                                    })}{" "}
                                                    |{" "}
                                                    {new Date(a.created_at).toLocaleTimeString("en-US", {
                                                        hour: "numeric",
                                                        minute: "2-digit",
                                                        hour12: true,
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                </div>

                {/* Bottom grid */}
                <div className="grid grid-cols-1 sm:grid-cols-[69%_30%] gap-4 mt-5 items-stretch">
                    <div className="sm:col-span-1 border border-gray-500 rounded-lg p-5 bg-white drop-shadow-xl relative">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-red-700 font-bold text-lg">Your Proposals</h3>
                            <span className="text-sm text-gray-600">Click on any row to view details</span>
                        </div>
                        <div className="max-h-200 overflow-y-auto relative">
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
                                                key={p.id}
                                                className="border-t hover:bg-gray-50 transition-colors cursor-pointer"
                                                onClick={() => handleProposalClick(p.id)}
                                            >
                                                <td className="p-3">
                                                    {p.id}
                                                </td>
                                                <td className="p-3">
                                                    <div className="font-medium">
                                                        {getCompanyName(p)}
                                                    </div>
                                                </td>
                                                <td className="p-3">
                                                    <div className="font-medium">{p.title || 'No title'}</div>
                                                    {p.description && (
                                                        <div className="text-xs text-gray-500 truncate max-w-xs">
                                                            {p.description.length > 50
                                                                ? `${p.description.substring(0, 50)}...`
                                                                : p.description
                                                            }
                                                        </div>
                                                    )}
                                                </td>
                                                <td className="p-3">
                                                    <span
                                                        className={`px-2 py-1 rounded-full text-xs font-medium ${mapStatus(p.status) === "Approved"
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
                                                <td className="p-3 text-center">
                                                    <button
                                                        onClick={(e) => handleActionClick(e, i)}
                                                        className="text-xl font-bold text-gray-600 hover:text-red-600 disabled:opacity-50"
                                                        disabled={updating === p.id}
                                                    >
                                                        {updating === p.id ? "..." : "⋮"}
                                                    </button>
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

                {/* Dropdown Portal - renders outside of table to avoid clipping */}
                {openRow !== null && createPortal(
                    <div
                        className="absolute w-40 bg-white border rounded-lg shadow-lg z-50"
                        style={{
                            top: `${dropdownPosition.top}px`,
                            left: `${dropdownPosition.left}px`
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {getStatusOptions(proposals[openRow]?.status || '').map((status) => (
                            <button
                                key={status}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleStatusUpdate(proposals[openRow].id, status);
                                }}
                                className="w-full px-4 py-2 text-left text-sm hover:bg-red-100 text-red-700 border-b border-gray-100 last:border-b-0 first:rounded-t-lg last:rounded-b-lg"
                                disabled={updating === proposals[openRow]?.id}
                            >
                                Set to {status}
                            </button>
                        ))}
                    </div>,
                    document.body
                )}
            </main>
        </div>
    );
}