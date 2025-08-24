"use client";

import Sidebar from "@/components/DashboardSidebar";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Company {
    id: number;
    name: string;
    // contact_email: string;
    website?: string;
    address?: string;
    industry?: string;
    size?: string;
    bio?: string;
    created_at: string;
    updated_at: string;
    user_id: string;
}

export default function CompanyList() {
    const API = process.env.NEXT_PUBLIC_API_URL;
    const [companies, setCompanies] = useState<Company[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchAllCompanies = async () => {
            const token = sessionStorage.getItem("access_token");
            try {
                const res = await fetch(`${API}/api/company`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!res.ok) throw new Error("Failed to fetch companies");
                const data = await res.json();

                setCompanies(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error("Error fetching companies:", err);
                setCompanies([]);
            } finally {
                setLoading(false);
            }
        };

        fetchAllCompanies();
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

    // Fixed function to redirect to company profile with the correct company ID
    const handleCompanyClick = (companyId: number) => {
        console.log("Navigating to company profile:", companyId);
        router.push(`/companyprofile?id=${companyId}`);
    };

    return (
        <ProtectedRoute allowedRoles={["employee", "admin"]}>
            <div className="flex min-h-screen bg-gray-50 overflow-x-hidden">
                {/* Sidebar */}
                <Sidebar />

                {/* Main content */}
                <div className="flex-1 py-3 sm:py-6 pl-[2%] sm:pl-[3%] pr-[3%] sm:pr-[5%] overflow-x-auto">
                    <h1 className="text-2xl font-bold text-red-700">Company List</h1>
                    <p className="text-sm text-gray-600 mt-1 border-b-3 border-black pb-2 sm:pb-4 border-red-700">
                        Track all the companies that are collaborating with BPI.
                    </p>

                    <div className="border border-gray-500 rounded-lg p-5 bg-white drop-shadow-xl mt-5">
                        <div className="overflow-x-auto">
                            {loading ? (
                                <p className="text-center text-gray-500">Loading companies...</p>
                            ) : companies.length === 0 ? (
                                <p className="text-center text-gray-500">No companies found.</p>
                            ) : (
                            <table className="w-full text-sm rounded-lg overflow-hidden min-w-[800px]">
                                <thead>
                                    <tr>
                                        <th className="p-3 text-left text-red-700 whitespace-nowrap">Company ID</th>
                                        <th className="p-3 text-left text-red-700 whitespace-nowrap">Company Name</th>
                                        {/* <th className="p-3 text-left text-red-700 whitespace-nowrap">Contact Email</th> */}
                                        <th className="p-3 text-left text-red-700 whitespace-nowrap">Industry</th>
                                        <th className="p-3 text-left text-red-700 whitespace-nowrap">Company Size</th>
                                        <th className="p-3 text-left text-red-700 whitespace-nowrap">Created Date</th>
                                        <th className="p-3 text-center text-red-700 whitespace-nowrap">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {companies.map((company, i) => (
                                            <tr 
                                                key={i} 
                                                className="border-t hover:bg-gray-50 cursor-pointer transition-colors"
                                                onClick={() => handleCompanyClick(company.id)}
                                            >
                                                <td className="p-3 whitespace-nowrap">{company.id}</td>
                                                <td className="p-3">{company.name}</td>
                                                {/* <td className="p-3">{company.contact_email}</td> */}
                                                <td className="p-3">{company.industry || 'N/A'}</td>
                                                <td className="p-3">{company.size || 'N/A'}</td>
                                                <td className="p-3 whitespace-nowrap">{formatDate(company.created_at)}</td>
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
                                        )
                                    )}
                                </tbody>
                            </table>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}