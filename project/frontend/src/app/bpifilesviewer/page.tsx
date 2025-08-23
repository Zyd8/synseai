"use client";

import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const BpiFilesViewerPage = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("all");
    const [files, setFiles] = useState<{ id: number; document_name: string }[]>([]);
    const [pendingFiles, setPendingFiles] = useState<{ id: number; document_name: string }[]>([]);
    const [departmentId, setDepartmentId] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [departmentName, setDepartmentName] = useState<string>("");

    const API = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        const token = sessionStorage.getItem("access_token");
        if (!token) return;

        const fetchFiles = async () => {
            setLoading(true);
            try {
                // 1. Get current user details
                const userResponse = await fetch(`${API}/api/user/me`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                const userData = await userResponse.json();
                const departmentId = userData?.department_id;

                if (!departmentId) {
                    setError("Department ID not found.");
                    setLoading(false);
                    return;
                }

                // 2. Fetch department name
                const deptResponse = await fetch(`${API}/api/department/${departmentId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                const deptData = await deptResponse.json();
                if (deptResponse.ok && deptData?.name) {
                    setDepartmentName(deptData.name);
                }

                // 3. Fetch files based on active tab
                const url =
                    activeTab === "all"
                        ? `${API}/api/document_setting/included/${departmentId}`
                        : `${API}/api/document_setting/current/${departmentId}`;

                const res = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                const data = await res.json();

                if (activeTab === "all") {
                    setFiles(data);
                } else {
                    setPendingFiles(data);
                }
            } catch (err) {
                setError("Error fetching files.");
                console.error(err);
            }
            setLoading(false);
        };

        fetchFiles();
    }, [activeTab, API]);

    const handleFilesClick = (settingId: number) => {
        router.push(`/filespusher?id=${settingId}`);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 sm:px-[5%] lg:px-[10%] py-4 sm:py-8">
            {/* Header */}
            <div className="relative flex items-center w-full mt-2 mb-4">
                <button
                    onClick={() => router.push("/bpidashboard")}
                    className="absolute left-0 flex items-center text-[#B11016] hover:text-[#800b10] text-sm sm:text-base"
                >
                    <FaArrowLeft className="mr-2" />
                    <span className="hidden sm:inline">Back</span>
                </button>
                <div className="text-center w-full">
                    <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-[#B11016] pb-2 sm:pb-4">
                        {departmentName || "Loading Department..."}
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
                    className={`flex-1 text-center py-2 font-semibold transition ${activeTab === "pending"
                        ? "bg-[#B11016] text-white rounded-t"
                        : "text-gray-600 hover:text-black"
                        }`}
                >
                    Files Pending
                </button>
                <button
                    onClick={() => setActiveTab("all")}
                    className={`flex-1 text-center py-2 font-semibold transition ${activeTab === "all"
                        ? "bg-[#B11016] text-white rounded-t"
                        : "text-gray-600 hover:text-black"
                        }`}
                >
                    All Files
                </button>
            </div>

            {/* Content */}
            <div className="w-full max-w-4xl mt-6 bg-white shadow rounded-lg p-4 overflow-x-auto border border-gray-400">
                {loading ? (
                    <p className="text-center">Loading files...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : activeTab === "all" ? (
                    <FileTable files={files} onRowClick={handleFilesClick} emptyMessage="No files found." />
                ) : (
                    <FileTable files={pendingFiles} onRowClick={handleFilesClick} emptyMessage="No pending files found." />
                )}
            </div>
        </div>
    );
};

// ✅ Reusable Table Component
const FileTable = ({
    files,
    emptyMessage,
    onRowClick,
}: {
    files: { id: number; document_name: string }[];
    emptyMessage: string;
    onRowClick: (id: number) => void;
}) => (
    <table className="w-full text-sm rounded-lg overflow-hidden min-w-[600px]">
        <thead>
            <tr>
                <th className="p-3 text-left text-red-700 whitespace-nowrap">ID</th>
                <th className="p-3 text-left text-red-700 whitespace-nowrap">Document Name</th>
                <th className="p-3 text-center text-red-700 whitespace-nowrap">Action</th>
            </tr>
        </thead>
        <tbody>
            {files.length > 0 ? (
                files.map((file, i) => (
                    <tr
                        key={i}
                        className="border-t hover:bg-gray-100 transition cursor-pointer"
                        onClick={() => onRowClick(file.id)}
                    >
                        <td className="p-3">{file.id}</td>
                        <td className="p-3">{file.document_name}</td>
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
                ))
            ) : (
                <tr>
                    <td colSpan={3} className="text-center py-4">
                        {emptyMessage}
                    </td>
                </tr>
            )}
        </tbody>
    </table>
);

export default BpiFilesViewerPage;
