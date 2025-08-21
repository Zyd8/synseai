'use client';
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { 
    FaArrowLeft,
    FaMapMarkerAlt, 
    FaMapPin,
    FaGlobe, 
    FaBriefcase, 
    FaUsers, 
    FaEnvelope, 
    FaCalendarAlt
} from "react-icons/fa";
import ProtectedRoute from "@/components/ProtectedRoute";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface CompanyData {
    id: number;
    name: string;
    contact_email?: string;
    website?: string;
    address?: string;
    industry?: string;
    size?: string;
    bio?: string;
    color?: string;
    logo?: string;
    created_at?: string;
    updated_at?: string;
    user_id?: string;
}

export default function CompanyProfile() {
    const API = process.env.NEXT_PUBLIC_API_URL;
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const [companyData, setCompanyData] = useState<CompanyData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    // Get company ID from URL parameters - this is required for employee view
    const companyId = searchParams.get('id');

    // Convert company size string to display format
    const formatCompanySize = (size?: string): string => {
        if (!size || size === 'N/A') return 'N/A';
        return size;
    };

    // Fetch specific company data by ID
    useEffect(() => {
        const fetchCompanyData = async () => {
            // Company ID is required for this employee view
            if (!companyId) {
                setError("Company ID is required to view company profile.");
                setIsLoading(false);
                return;
            }

            const token = sessionStorage.getItem("access_token");
            if (!token) {
                setError("Authentication required. Please log in first.");
                setIsLoading(false);
                return;
            }

            try {
                console.log("Fetching company with ID:", companyId);
                console.log("API URL:", `${API}/api/company/${companyId}`);
                
                const response = await fetch(`${API}/api/company/${companyId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                console.log("Response status:", response.status);
                console.log("Response ok:", response.ok);

                if (response.ok) {
                    const data = await response.json();
                    console.log("Full API Response:", data);
                    
                    // The API returns {company: {...}}
                    if (data.company) {
                        console.log("Company data found:", data.company);
                        setCompanyData(data.company);
                    } else {
                        console.log("No company key in response");
                        setError("Invalid response format from server.");
                    }
                } else if (response.status === 404) {
                    console.log("Company not found");
                    setError("Company not found.");
                } else {
                    console.log("Other error occurred");
                    try {
                        const errorData = await response.json();
                        console.log("Error data:", errorData);
                        setError(errorData.error || `Failed to load company data. Status: ${response.status}`);
                    } catch {
                        setError(`Failed to load company data. Status: ${response.status}`);
                    }
                }
            } catch (err) {
                console.error("Network/fetch error:", err);
                setError("Network error occurred while loading company data.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchCompanyData();
    }, [API, companyId]);

    if (isLoading) {
        return (
            <ProtectedRoute allowedRoles={["employee"]}>
                <div className="min-h-screen bg-white flex items-center justify-center">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#B11016] mx-auto"></div>
                        <p className="mt-4 text-gray-600">Loading company profile...</p>
                    </div>
                </div>
            </ProtectedRoute>
        );
    }

    if (error) {
        return (
            <ProtectedRoute allowedRoles={["employee"]}>
                <div className="min-h-screen bg-white flex flex-col items-center justify-center px-[10%]">
                    <div className="text-center">
                        <div className="text-red-500 text-6xl mb-4">⚠</div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Company</h2>
                        <p className="text-gray-600 mb-6">{error}</p>
                        <button
                            onClick={() => router.back()}
                            className="bg-[#B11016] text-white py-2 px-6 rounded-lg hover:bg-[#800b10] transition-colors"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </ProtectedRoute>
        );
    }

    if (!companyData) {
        return (
            <ProtectedRoute allowedRoles={["employee"]}>
                <div className="min-h-screen bg-white flex flex-col items-center justify-center px-[10%]">
                    <div className="text-center">
                        <FaBriefcase className="text-6xl text-gray-300 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-600 mb-2">No Company Data</h3>
                        <p className="text-gray-500 mb-6">Company profile could not be loaded.</p>
                        <button
                            onClick={() => router.back()}
                            className="bg-[#B11016] text-white py-2 px-6 rounded-lg hover:bg-[#800b10] transition-colors"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </ProtectedRoute>
        );
    }

    return (
        <ProtectedRoute allowedRoles={["employee"]}>
            <div className="min-h-screen bg-white flex flex-col items-center px-[10%] py-8">
                {/* Header */}
                <div className="relative flex items-center w-full mt-2 mb-10">
                    {/* Back Button */}
                    <button
                        onClick={() => router.back()}
                        className="absolute left-0 flex items-center text-[#B11016] hover:text-[#800b10]"
                    >
                        <FaArrowLeft className="mr-2" />
                        <span className="hidden sm:inline">Back to Company List</span>
                    </button>

                   
                </div>

                {/* Company Profile Display */}
                <div className="w-full max-w-8xl mx-auto">
                    {/* Company Logo */}
                    <div className="text-center mb-8">
                        {companyData.logo ? (
                            <div className="inline-block">
                                <img 
                                    src={companyData.logo} 
                                    alt={`${companyData.name} Logo`}
                                    className="max-w-48 max-h-48 mx-auto rounded-lg shadow-lg"
                                />
                            </div>
                        ) : (
                            <div className="w-48 h-48 mx-auto bg-gray-200 rounded-lg flex items-center justify-center shadow-lg">
                                <span className="text-gray-500 text-lg font-medium">No Logo</span>
                            </div>
                        )}
                    </div>

                    {/* Company Name */}
                    <div className="text-center mb-8">
                        <h2 
                            className="text-3xl sm:text-5xl font-bold mb-4 text-[#B11016]"
                            // style={{ color: companyData.color || '#B11016' }}
                        >
                            {companyData.name}
                        </h2>
                        {companyData.bio && (
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                                {companyData.bio}
                            </p>
                        )}
                    </div>

                    {/* Company Details Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-8 border-b-2 border-gray-800 pb-4">
                        {/* Location */}
                        {companyData.address && (
                            <div className="flex items-center gap-3 p-4 transition-colors">
                                <FaMapMarkerAlt 
                                    className="text-2xl"
                                    style={{ color:  '#B11016' }}
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Location</h3>
                                    <p className="text-gray-600 text-sm">{companyData.address}</p>
                                </div>
                            </div>
                        )}

                        {/* Website */}
                        {companyData.website && (
                            <div className="flex items-center gap-3 p-4 transition-colors">
                                <FaGlobe 
                                    className="text-2xl"
                                    style={{ color:  '#B11016' }}
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Website</h3>
                                    <a 
                                        href={companyData.website} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-sm hover:underline break-all"
                                        style={{ color:  '#B11016' }}
                                    >
                                        {companyData.website.replace(/^https?:\/\//, '')}
                                    </a>
                                </div>
                            </div>
                        )}

                        {/* Industry */}
                        {companyData.industry && (
                            <div className="flex items-center gap-3 p-4 transition-colors">
                                <FaBriefcase 
                                    className="text-2xl"
                                    style={{ color: '#B11016' }}
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Industry</h3>
                                    <p className="text-gray-600 text-sm">{companyData.industry}</p>
                                </div>
                            </div>
                        )}

                        {/* Company Size */}
                        {companyData.size && (
                            <div className="flex items-center gap-3 p-4 transition-colors">
                                <FaUsers 
                                    className="text-2xl"
                                    style={{ color:'#B11016' }}
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Team Size</h3>
                                    <p className="text-gray-600 text-sm">{formatCompanySize(companyData.size)}</p>
                                </div>
                            </div>
                        )}

                        {/* Contact Email */}
                        {companyData.contact_email && (
                            <div className="flex items-center gap-3 p-4 transition-colors">
                                <FaEnvelope 
                                    className="text-2xl"
                                    style={{ color: '#B11016' }}
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Contact Email</h3>
                                    <a 
                                        href={`mailto:${companyData.contact_email}`}
                                        className="text-sm hover:underline break-all"
                                        style={{ color: '#B11016' }}
                                    >
                                        {companyData.contact_email}
                                    </a>
                                </div>
                            </div>
                        )}

                        {/* Creation Date */}
                        {companyData.created_at && (
                            <div className="flex items-center gap-3 p-4 transition-colors">
                                <FaCalendarAlt 
                                    className="text-2xl"
                                    style={{ color: '#B11016' }}
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-800">Registered Since</h3>
                                    <p className="text-gray-600 text-sm">
                                        {new Date(companyData.created_at).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Synergy Score */}
<div className="text-center my-12">
  <h3 className="text-2xl font-bold text-red-700 mb-6">Synergy Score</h3>
  <div className="w-48 h-48 mx-auto mb-12">
    {(() => {
      const synergyScore = 75;
      return (
        <CircularProgressbar
          value={synergyScore}
          text={`${synergyScore}%`}
          styles={buildStyles({
            textSize: "20px",
            textColor: "#111827",
            pathColor: "#B11016",
            trailColor: "#d1d5db",
          
          })}
        />
      );
    })()}
  </div>

  {/* Categories Row */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
    {/* Credibility */}
    <div>
      <h4 className="text-xl font-bold text-red-700 mb-2">Credibility</h4>
      <p className="text-4xl font-bold mb-4">35%</p>
      <div className="border-t-2 border-gray-800 mb-8"></div>
      <div className="space-y-6">
        <div className="bg-[#B11016] text-white rounded-md p-3 text-sm text-left shadow-md">
          <span className="font-bold">Market Leadership:</span> GCash is the
          leading e-wallet in the Philippines with over 80M users,
          establishing it as a trusted financial platform.
        </div>
        <div className="bg-[#800b10] text-white rounded-md p-3 text-sm text-left shadow-md">
          <span className="font-bold">Strong Backing:</span> Operated by Mynt, a
          partnership between Globe Telecom, Ayala Corporation, and Ant Group
          (Alibaba).
        </div>
        <div className="bg-[#60080c] text-white rounded-md p-3 text-sm text-left shadow-md">
          <span className="font-bold">Track Record:</span> Recognized by the
          Bangko Sentral ng Pilipinas (BSP) and awarded for innovation in
          financial inclusion.
        </div>
      </div>
    </div>

    {/* Referential */}
    <div>
      <h4 className="text-xl font-bold text-red-700 mb-2">Referential</h4>
      <p className="text-4xl font-bold mb-4">25%</p>
      <div className="border-t-2 border-gray-800 mb-8"></div>
      <div className="space-y-6">
        <div className="bg-[#B11016] text-white rounded-md p-3 text-sm text-left shadow-md">
          <span className="font-bold">Market Leadership:</span> GCash is the
          leading e-wallet in the Philippines with over 80M users,
          establishing it as a trusted financial platform.
        </div>
        <div className="bg-[#800b10] text-white rounded-md p-3 text-sm text-left shadow-md">
          <span className="font-bold">Strong Backing:</span> Operated by Mynt, a
          partnership between Globe Telecom, Ayala Corporation, and Ant Group
          (Alibaba).
        </div>
        <div className="bg-[#60080c] text-white rounded-md p-3 text-sm text-left shadow-md">
          <span className="font-bold">Track Record:</span> Recognized by the
          Bangko Sentral ng Pilipinas (BSP) and awarded for innovation in
          financial inclusion.
        </div>
      </div>
    </div>

    {/* Compliance */}
    <div>
      <h4 className="text-xl font-bold text-red-700 mb-2">Compliance</h4>
      <p className="text-4xl font-bold mb-4">15%</p>
      <div className="border-t-2 border-gray-800 mb-8"></div>
      <div className="space-y-6">
        <div className="bg-[#B11016] text-white rounded-md p-3 text-sm text-left shadow-md">
          <span className="font-bold">Market Leadership:</span> GCash is the
          leading e-wallet in the Philippines with over 80M users,
          establishing it as a trusted financial platform.
        </div>
        <div className="bg-[#800b10] text-white rounded-md p-3 text-sm text-left shadow-md">
          <span className="font-bold">Strong Backing:</span> Operated by Mynt, a
          partnership between Globe Telecom, Ayala Corporation, and Ant Group
          (Alibaba).
        </div>
        <div className="bg-[#60080c] text-white rounded-md p-3 text-sm text-left shadow-md">
          <span className="font-bold">Track Record:</span> Recognized by the
          Bangko Sentral ng Pilipinas (BSP) and awarded for innovation in
          financial inclusion.
        </div>
      </div>
    </div>
  </div>
</div>



                    
                    
                </div>
            </div>
        </ProtectedRoute>
    );
}