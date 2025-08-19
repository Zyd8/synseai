"use client";
import { useState, useEffect } from "react";
import Sidebar from "@/components/DashboardSidebar";
import ProtectedRoute from "@/components/ProtectedRoute";
import CollabCompanyProtectedRoute from "@/components/CollabCompanyProtectedRoute";

export default function CollabRejected() {
    const API = process.env.NEXT_PUBLIC_API_URL;
    const [proposals, setProposals] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

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

                // Filter rejected only
                const rejected = (Array.isArray(data) ? data : data.proposals || [])
                    .filter((p: any) => p.status === "Rejected");

                setProposals(rejected);
            } catch (err) {
                console.error("Error fetching rejected proposals:", err);
                setProposals([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProposals();
    }, [API]);

    return (
        <ProtectedRoute>
            <CollabCompanyProtectedRoute>
                <div className="flex min-h-screen bg-gray-50 overflow-x-hidden">
                    {/* Sidebar */}
                    <Sidebar />

                    {/* Main content */}
                    <div className="flex-1 py-3 sm:py-6 pl-[2%] sm:pl-[3%] pr-[3%] sm:pr-[5%] overflow-x-auto">
                        <h1 className="text-2xl font-bold text-red-700">Rejected Proposals</h1>
                        <p className="text-sm text-gray-600 mt-1 border-b-3 border-black pb-2 sm:pb-4 border-red-700">
                            Track all your collaboration proposals that have been rejected with BPI.
                        </p>

                        <div className="border border-gray-500 rounded-lg p-5 bg-white drop-shadow-xl mt-5">
                            <div className="overflow-x-auto">
                                {loading ? (
                                    <p className="text-gray-500">Loading...</p>
                                ) : proposals.length === 0 ? (
                                    <p className="text-gray-500">No rejected proposals found.</p>
                                ) : (
                                    <table className="w-full text-sm rounded-lg overflow-hidden min-w-[600px]">
                                        <thead>
                                            <tr>
                                                <th className="p-3 text-left text-red-700 whitespace-nowrap">Proposal ID</th>
                                                <th className="p-3 text-left text-red-700 whitespace-nowrap">Proposal Title</th>
                                                <th className="p-3 text-left text-red-700 whitespace-nowrap">Status</th>
                                                <th className="p-3 text-left text-red-700 whitespace-nowrap">Rejected Date</th>
                                                <th className="p-3 text-center text-red-700 whitespace-nowrap">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {proposals.map((p, i) => (
                                                <tr key={i} className="border-t">
                                                    <td className="p-3 whitespace-nowrap">{p.id}</td>
                                                    <td className="p-3">{p.title}</td>
                                                    <td className="p-3">{p.status}</td>
                                                    <td className="p-3 whitespace-nowrap">
                                                        {p.updated_at
                                                            ? new Date(p.updated_at).toLocaleDateString("en-US", {
                                                                  year: "numeric",
                                                                  month: "long",
                                                                  day: "numeric",
                                                                  hour: "numeric",
                                                                  minute: "2-digit",
                                                              })
                                                            : "-"}
                                                    </td>
                                                    <td className="p-3 text-center">⋮</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </CollabCompanyProtectedRoute>
        </ProtectedRoute>
    );
}
