"use client";

import { FaArrowLeft, FaChevronDown, FaBuilding } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Sidebar from "@/components/DashboardSidebar";
import ProtectedRoute from "@/components/ProtectedRoute";

const AdminFilesViewerPage = () => {
    const router = useRouter();
    const [user, setUser] = useState<{ id: number; department_id?: number; department_name?: string } | null>(null);
    const [activeTab, setActiveTab] = useState("all");
    const [departments, setDepartments] = useState<{ id: number; name: string }[]>([]);
    const [selectedDepartment, setSelectedDepartment] = useState<number | null>(null);
    const [files, setFiles] = useState<{ id: number; document_name: string }[]>([]);
    const [pendingFiles, setPendingFiles] = useState<{ id: number; document_name: string }[]>([]);
    const [departmentId, setDepartmentId] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [departmentName, setDepartmentName] = useState<string>("");

    const API = process.env.NEXT_PUBLIC_API_URL;
    const token = typeof window !== "undefined" ? sessionStorage.getItem("access_token") : null;

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch(`${API}/api/user/me`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (!res.ok) throw new Error("Failed to fetch user");
                const data = await res.json();

                setUser(data);
                setSelectedDepartment(data.department_id as number);
                setDepartmentName(data.department_name);
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        if (token) fetchUser();
    }, [API, token]);

    // ✅ Fetch all departments
    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const res = await fetch(`${API}/api/department`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (!res.ok) throw new Error("Failed to fetch departments");
                const data = await res.json();
                console.log("Departments API Response:", data);
                setDepartments(data.departments || []);
            } catch (error) {
                console.error("Error fetching departments:", error);
                setDepartments([]);
            }
        };

        if (token) fetchDepartments();
    }, [API, token]);

    // ✅ Fetch files for the selected department
    useEffect(() => {
        const fetchFiles = async () => {
            if (!selectedDepartment) return; // No department selected yet
            try {
                setLoading(true);

                const url =
                    activeTab === "all"
                        ? `${API}/api/document_setting/included/${selectedDepartment}`
                        : `${API}/api/document_setting/current/${selectedDepartment}`;

                console.log("Fetching from:", url);

                const res = await fetch(url, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!res.ok) {
                    const errorText = await res.text();
                    throw new Error(`Failed to fetch files: ${errorText}`);
                }

                const data = await res.json();

                if (activeTab === "all") {
                    setFiles(data); // For "all" tab
                } else {
                    setPendingFiles(data); // For current tab
                }
            } catch (error) {
                console.error("Error fetching files:", error);
            } finally {
                setLoading(false);
            }
        };

        if (token && selectedDepartment) fetchFiles();
    }, [API, token, selectedDepartment, activeTab]);

    const handleFilesClick = (settingId: number) => {
        router.push(`/filespusher?id=${settingId}`);
    };

    const handleDepartmentChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newDeptId = e.target.value;
        setSelectedDepartment(Number(newDeptId));

        try {
            if (!user) {
                throw new Error("User not loaded");
            }
            const res = await fetch(`${API}/api/user/${user.id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ department_id: newDeptId }),
            });

            if (!res.ok) throw new Error("Failed to update department");

            // Update department name in UI
            const selectedDept = departments.find((d) => d.id === parseInt(newDeptId));
            setDepartmentName(selectedDept?.name || "");

        } catch (error) {
            console.error("Error updating department:", error);
        }
    };

    return (
        <ProtectedRoute allowedRoles={["employee", "admin"]}>
            <div className="flex items-center">
                <Sidebar />
                <div className="min-h-screen bg-gray-50 flex-1 flex-col items-center px-4 sm:px-[5%] lg:px-[10%] py-4 sm:py-8">
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

                    {/* Enhanced Department Selector */}
                    <div className="mb-8 w-full max-w-md mx-auto">
                        <label className="block text-gray-700 font-semibold mb-3 text-sm tracking-wide uppercase">
                            View files as:
                        </label>
                        <div className="relative group">
                            {/* Icon */}
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10">
                                <FaBuilding className="text-[#B11016] text-sm" />
                            </div>
                            
                            {/* Select Input */}
                            <select
                                value={selectedDepartment ?? ""}
                                onChange={handleDepartmentChange}
                                className="
                                    w-full 
                                    appearance-none 
                                    bg-white 
                                    border-2 
                                    border-gray-200 
                                    rounded-xl 
                                    pl-12 
                                    pr-12 
                                    py-4 
                                    text-gray-700 
                                    font-medium
                                    shadow-sm
                                    transition-all 
                                    duration-200 
                                    ease-in-out
                                    hover:border-[#B11016] 
                                    hover:shadow-md
                                    focus:outline-none 
                                    focus:ring-2 
                                    focus:ring-[#B11016] 
                                    focus:ring-opacity-20
                                    focus:border-[#B11016]
                                    focus:shadow-lg
                                    group-hover:shadow-md
                                    cursor-pointer
                                "
                            >
                                <option value="" disabled className="text-gray-400">
                                    Select Department
                                </option>
                                {departments.length > 0 ? (
                                    departments.map((dept) => (
                                        <option key={dept.id} value={dept.id} className="text-gray-700 font-medium">
                                            {dept.name}
                                        </option>
                                    ))
                                ) : (
                                    <option disabled className="text-gray-400">
                                        No departments found
                                    </option>
                                )}
                            </select>
                            
                            {/* Custom Dropdown Arrow */}
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                <FaChevronDown className="text-[#B11016] text-sm transition-transform duration-200 group-hover:scale-110" />
                            </div>
                            
                            {/* Subtle gradient overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-50/20 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                        </div>
                        
                        {/* Helper Text */}
                        <p className="text-xs text-gray-500 mt-2 ml-1">
                            Choose a department to view its files
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex w-full max-w-4xl border-b items-center justify-center mx-auto">
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
                    <div className="mx-auto w-full max-w-4xl mt-6 bg-white shadow rounded-lg p-4 overflow-x-auto border border-gray-400">
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
            </div>
        </ProtectedRoute>
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

export default AdminFilesViewerPage;