'use client';
import React from "react";
import { useRouter } from "next/navigation";
import {
    FaArrowLeft,
    FaMapMarkerAlt,
    FaGlobe,
    FaBriefcase,
    FaUsers,
    FaEnvelope,
    FaCalendarAlt
} from "react-icons/fa";

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
}

export default function FindCollabCompanyProfile() {
    const router = useRouter();

    // ✅ Dummy company data
    const companyData: CompanyData = {
        id: 1,
        name: "GCash Philippines",
        contact_email: "contact@gcash.com",
        website: "https://gcash.com",
        address: "Bonifacio Global City, Taguig, Philippines",
        industry: "Fintech",
        size: "5000+ employees",
        bio: "GCash is a leading mobile wallet in the Philippines offering secure and convenient financial services.",
        color: "#B11016",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/GCash_Logo.png",
        created_at: "2012-03-15",
    };

    const synergyScore = 75;

    const formatCompanySize = (size?: string): string => {
        return size || 'N/A';
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center px-[10%] py-8">
            {/* Header */}
            <div className="relative flex items-center w-full mt-2 mb-10">
                <button
                    onClick={() => router.back()}
                    className="absolute left-0 flex items-center text-[#B11016] hover:text-[#800b10]"
                >
                    <FaArrowLeft className="mr-2" />
                    <span className="hidden sm:inline">Back to Company List</span>
                </button>
            </div>

            {/* Company Profile */}
            <div className="w-full max-w-8xl mx-auto">
                {/* Logo */}
                <div className="text-center mb-8">
                    {companyData.logo ? (
                        <img
                            src={companyData.logo}
                            alt={`${companyData.name} Logo`}
                            className="max-w-48 max-h-48 mx-auto rounded-lg shadow-lg"
                        />
                    ) : (
                        <div className="w-48 h-48 mx-auto bg-gray-200 rounded-lg flex items-center justify-center shadow-lg">
                            <span className="text-gray-500 text-lg font-medium">No Logo</span>
                        </div>
                    )}
                </div>

                {/* Name & Bio */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-[#B11016]">
                        {companyData.name}
                    </h2>
                    {companyData.bio && (
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                            {companyData.bio}
                        </p>
                    )}
                </div>

                {/* Company Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mb-8 border-b-2 border-gray-800 pb-4">
                    <Detail icon={<FaMapMarkerAlt />} title="Location" text={companyData.address} />
                    <Detail icon={<FaGlobe />} title="Website" text={companyData.website?.replace(/^https?:\/\//, '')} link={companyData.website} />
                    <Detail icon={<FaBriefcase />} title="Industry" text={companyData.industry} />
                    <Detail icon={<FaUsers />} title="Team Size" text={formatCompanySize(companyData.size)} />
                    <Detail icon={<FaEnvelope />} title="Contact Email" text={companyData.contact_email} link={`mailto:${companyData.contact_email}`} />
                    <Detail icon={<FaCalendarAlt />} title="Registered Since" text={new Date(companyData.created_at || '').toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })} />
                </div>

                {/* Synergy Score */}
                <div className="text-center my-12">
                    <h3 className="text-2xl font-bold text-red-700 mb-6">Synergy Score</h3>
                    <div className="w-48 h-48 mx-auto mb-12">
                        <CircularProgressbar
                            value={synergyScore}
                            text={`${synergyScore}%`}
                            styles={buildStyles({
                                textSize: "20px",
                                textColor: "#111827",
                                pathColor: "#B11016",
                                trailColor: "#d1d5db",
                            })}
                            strokeWidth={12}
                        />
                    </div>

                    {/* ✅ Your Static Synergy Categories */}
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
    );
}

// ✅ Detail Component
function Detail({ icon, title, text, link }: { icon: React.ReactNode, title: string, text?: string, link?: string }) {
    if (!text) return null;
    return (
        <div className="flex items-center gap-3 p-4">
            <div className="text-2xl text-[#B11016]">{icon}</div>
            <div>
                <h3 className="font-semibold text-gray-800">{title}</h3>
                {link ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline break-all" style={{ color: '#B11016' }}>
                        {text}
                    </a>
                ) : (
                    <p className="text-gray-600 text-sm">{text}</p>
                )}
            </div>
        </div>
    );
}
