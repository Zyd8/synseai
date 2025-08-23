"use client";

import Sidebar from "@/components/DashboardSidebar";
import ProtectedRoute from "@/components/ProtectedRoute";
import CollabCompanyProtectedRoute from "@/components/CollabCompanyProtectedRoute";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CollabApproved() {
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

                // Filter approved only
                const approved = (Array.isArray(data) ? data : data.proposals || [])
                    .filter((p: any) => p.status === "Approved");

                setProposals(approved);
            } catch (err) {
                console.error("Error fetching approved proposals:", err);
                setProposals([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProposals();
    }, [API]);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return `${date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })} | ${date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
        })}`;
    };

    const pageVariants = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
        exit: { opacity: 0, y: -30, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
    };

    return (
        <ProtectedRoute allowedRoles={["user"]}>
            <CollabCompanyProtectedRoute>
                <AnimatePresence mode="wait">
                    <motion.div
                        key="collabapproved-page"
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="flex min-h-screen bg-gray-50"
                    >
                    {/* Sidebar */}
                    <Sidebar />

                    {/* Main content */}
                    <div  className="flex-1 py-3 sm:py-6 pl-[2%] sm:pl-[3%] pr-[3%] sm:pr-[5%] overflow-x-auto">
                        <h1 className="text-2xl font-bold text-red-700">Approved Proposals</h1>
                        <p className="text-sm text-gray-600 mt-1 border-b-3 border-black pb-2 sm:pb-4 border-red-700">
                            Track all your collaboration proposals that have been approved with BPI.
                        </p>

                        <div className="border border-gray-500 rounded-lg p-5 bg-white drop-shadow-xl mt-5">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm rounded-lg overflow-hidden min-w-[600px]">
                                    <thead>
                                        <tr>
                                            <th className="p-3 text-left text-red-700 whitespace-nowrap">Proposal ID</th>
                                            <th className="p-3 text-left text-red-700 whitespace-nowrap">Proposal Title</th>
                                            <th className="p-3 text-left text-red-700 whitespace-nowrap">Status</th>
                                            <th className="p-3 text-left text-red-700 whitespace-nowrap">Approved Date</th>
                                            <th className="p-3 text-center text-red-700 whitespace-nowrap">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {loading ? (
                                            <tr>
                                                <td colSpan={5} className="p-3 text-center text-gray-500">
                                                    Loading approved proposals...
                                                </td>
                                            </tr>
                                        ) : proposals.length === 0 ? (
                                            <tr>
                                                <td colSpan={5} className="p-3 text-center text-gray-500">
                                                    No approved proposals found.
                                                </td>
                                            </tr>
                                        ) : (
                                            proposals.map((p, i) => (
                                                <tr key={i} className="border-t">
                                                    <td className="p-3 whitespace-nowrap">{p.id}</td>
                                                    <td className="p-3">{p.title}</td>
                                                    <td className="p-3">{p.status}</td>
                                                    <td className="p-3 whitespace-nowrap">{formatDate(p.updated_at || p.created_at)}</td>
                                                    <td className="p-3 text-center">⋮</td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </motion.div>
                </AnimatePresence>
            </CollabCompanyProtectedRoute>
        </ProtectedRoute>
    );
}
