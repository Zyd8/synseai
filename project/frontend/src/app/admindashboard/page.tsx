'use client';

import Sidebar from "@/components/DashboardSidebar";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaUsers, FaUserTie, FaUserFriends, FaFileAlt, FaBuilding, FaUserShield } from "react-icons/fa";
import { ReactElement } from "react";
import CreateDepartmentModal from "@/components/CreateDepartmentModal";
import ManageDepartmentModal from "@/components/ManageDepartmentModal";

interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    contact_number: string;
    role: 'user' | 'employee' | 'admin';
    position: string;
    department_id: number;
    created_at: string;
    full_name: string;
}

interface Department {
    id: number;
    name: string;
    employee_count?: number;
    created_at: string;
}

interface Document {
    id: number;
    title?: string;
    name?: string;
    type?: string;
    created_at: string;
}

interface Activity {
    type: string;
    title: string;
    description: string;
    timestamp: string;
    icon: ReactElement;
}

export default function SuperAdminDashboard() {
    const router = useRouter();
    const API = process.env.NEXT_PUBLIC_API_URL;

    const [users, setUsers] = useState<User[]>([]);
    const [departments, setDepartments] = useState<Department[]>([]);
    const [documents, setDocuments] = useState<Document[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [recentActivities, setRecentActivities] = useState<Activity[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [showCreateDeptModal, setShowCreateDeptModal] = useState(false);
    const [showManageDeptModal, setShowManageDeptModal] = useState(false);

    // Statistics
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalCollaborators: 0, // users with role 'user'
        totalEmployees: 0,     // users with role 'employee' 
        totalAdmins: 0,        // users with role 'admin'
        totalDocuments: 0,
        totalDepartments: 0
    });

    // Fetch all data
    // Fetch all data
    useEffect(() => {
        const fetchAllData = async () => {
            const token = sessionStorage.getItem("access_token");

            if (!token) {
                setError("No access token found. Please login again.");
                setLoading(false);
                return;
            }

            try {
                setError(null);

                // ---------------- Users ----------------
                let usersList: User[] = [];
                try {
                    const usersRes = await fetch(`${API}/api/user`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    });

                    if (usersRes.ok) {
                        const usersData = await usersRes.json();
                        // backend returns an array directly
                        console.log("Fetched users:", usersData);
                        usersList = Array.isArray(usersData) ? usersData : [];
                    } else {
                        console.warn("Failed to fetch users:", usersRes.status);
                    }
                } catch (err) {
                    console.warn("Could not fetch users:", err);
                }
                setUsers(usersList);

                // ---------------- Departments ----------------
                let deptList: Department[] = [];
                try {
                    const deptRes = await fetch(`${API}/api/department`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    });

                    if (deptRes.ok) {
                        const deptData = await deptRes.json();
                        // backend returns { departments: [...] }
                        deptList = deptData.departments ?? [];
                    } else {
                        console.warn("Failed to fetch departments:", deptRes.status);
                    }
                } catch (err) {
                    console.warn("Could not fetch departments:", err);
                }
                setDepartments(deptList);

                // ---------------- Documents ----------------
                let docsList: Document[] = [];
                try {
                    const docsRes = await fetch(`${API}/api/document/get_all`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    });

                    if (docsRes.ok) {
                        const docsData = await docsRes.json();
                        // since backend returns [] (list of documents), not {documents: [...]}
                        docsList = Array.isArray(docsData) ? docsData : [];
                    }
                } catch (docsError) {
                    console.warn("Could not fetch documents:", docsError);
                }
                setDocuments(docsList);

                // ---------------- Stats ----------------
                const collaborators = usersList.filter((u: User) => u.role === "user");
                const employees = usersList.filter((u: User) => u.role === "employee");
                const admins = usersList.filter((u: User) => u.role === "admin");

                setStats({
                    totalUsers: usersList.length,
                    totalCollaborators: collaborators.length,
                    totalEmployees: employees.length,
                    totalAdmins: admins.length,
                    totalDocuments: docsList.length,
                    totalDepartments: deptList.length,
                });

                // ---------------- Activities ----------------
                const activities: Activity[] = [
                    // Collaborators
                    ...collaborators.slice(0, 2).map((user) => ({
                        type: "user",
                        title: `New collaborator registered: ${user.full_name || `${user.first_name} ${user.last_name}`}`,
                        description: `Email: ${user.email} | Position: ${user.position || "Not specified"}`,
                        timestamp: user.created_at || new Date().toISOString(),
                        icon: <FaUsers className="text-2xl" />,
                    })),
                    // Employees
                    ...employees.slice(0, 2).map((user) => ({
                        type: "employee",
                        title: `New employee registered: ${user.full_name || `${user.first_name} ${user.last_name}`}`,
                        description: `Email: ${user.email} | Position: ${user.position || "Not specified"}`,
                        timestamp: user.created_at || new Date().toISOString(),
                        icon: <FaUserTie className="text-3xl text-purple-600 mb-2" />,

                    })),
                    // Documents
                    ...docsList.slice(0, 2).map((doc) => ({
                        type: "document",
                        title: `Document uploaded: ${doc.name || "Untitled"}`,
                        description: `Type: ${doc.type || "Unknown"}`,
                        timestamp: doc.created_at || new Date().toISOString(),
                        icon: <FaFileAlt className="text-2xl" />,
                    })),
                    // Departments
                    ...deptList.slice(0, 1).map((dept) => ({
                        type: "department",
                        title: `Department: ${dept.name}`,
                        description: `${dept.employee_count || 0} employees`,
                        timestamp: dept.created_at || new Date().toISOString(),
                        icon: <FaBuilding className="text-2xl" />,
                    })),
                ]
                    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
                    .slice(0, 5);

                setRecentActivities(activities);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError(err instanceof Error ? err.message : "An error occurred while fetching data");
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, [API]);


    // Management sections
    const managementSections = [
        {
            title: "Users & Roles",
            icon: <FaUsers className="text-2xl" />,
            actions: [
                
                { name: "Manage Users", action: "manage-users" }
            ]
        },
        {
            title: "Departments",
            icon: <FaBuilding className="text-2xl" />,
            actions: [
                { name: "Create Department", action: "create-department" },
                
                { name: "Manage Departments", action: "manage-departments" }
            ]
        },
        {
            title: "Documents",
            icon: <FaFileAlt className="text-2xl" />,
            actions: [
                { name: "Manage Documents", action: "manage-documents" },
                { name: "Assign Document to Departments", action: "assign-document" },
                
            ]
        }
    ];

    const handleActionClick = (action: string) => {
        setActiveSection(activeSection === action ? null : action);
        console.log(`Navigating to: ${action}`);

        // Example navigation (you can customize these routes)
        switch (action) {
            case 'assign-role':
                router.push('/super-admin/assign-role');
                break;
            case 'manage-users':
                router.push('/adminusermanagement');
                break;
            case 'create-department':
                if (action === "create-department") {
                    setShowCreateDeptModal(true);
                    return;
                }
            case 'assign-employee':
                router.push('/super-admin/assign-employee');
                break;
            case 'manage-departments':
                setShowManageDeptModal(true);
                break;
            case 'upload-document':
                router.push('/super-admin/upload-document');
                break;
            case 'assign-document':
                router.push('/adminassigndocument');
                break;
            case 'manage-documents':
                router.push('/admindocumentmanagement');
                break;
            default:
                console.log(`Action ${action} not implemented yet`);
        }
    };

    const handleRefresh = () => {
        setLoading(true);
        window.location.reload();
    };

        const handleSuccess = () => {
            return
    };

    if (loading) {
        return (
            <div className="flex min-h-screen bg-gray-50">
                <Sidebar />
                <main className="flex-1 py-6 pl-[3%] pr-[5%]">
                    <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-700 mx-auto"></div>
                            <p className="mt-4 text-gray-600">Loading dashboard data...</p>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex min-h-screen bg-gray-50">
                <Sidebar />
                <main className="flex-1 py-6 pl-[3%] pr-[5%]">
                    <div className="flex items-center justify-center h-full">
                        <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-red-500 text-xl mb-4">⚠️</div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Error Loading Data</h3>
                            <p className="text-gray-600 mb-4">{error}</p>
                            <button
                                onClick={handleRefresh}
                                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                            >
                                Retry
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main content */}
            <main className="flex-1 py-3 sm:py-6 pl-[2%] sm:pl-[3%] pr-[3%] sm:pr-[5%]">
                {/* Header row */}
                <div className="flex items-center justify-between border-b-[3px] border-red-700 pb-2 sm:pb-4">
                    <div>
                        <h1 className="text-2xl font-bold text-red-700">Super Admin Dashboard</h1>
                        <p className="text-sm text-gray-600 mt-1">
                            Manage users, departments, documents and system-wide settings.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={handleRefresh}
                            className="bg-[#B11016] border-2 text-white px-4 py-2 rounded-md hover:bg-white hover:border-[#B11016] hover:text-[#B11016] transition"
                        >
                            Refresh
                        </button>
                        <button
                            onClick={() => router.push('/super-admin/system-settings')}
                            className="bg-gray-600 border-2 border-gray-600 text-white px-4 py-2 rounded-md hover:bg-white hover:text-gray-600 transition"
                        >
                            System Settings
                        </button>
                    </div>
                </div>

                {/* Quick Stats Overview */}
                <h2 className="text-xl font-bold text-gray-800 mb-1 mt-6">System Overview</h2>
                <div className="mt-6 bg-white rounded-lg drop-shadow-lg border border-gray-200 p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                        {/* Total Users */}
                        <div className="text-center p-4 bg-gray-50 rounded-lg flex flex-col items-center">
                            <FaUsers className="text-3xl text-blue-600 mb-2" />
                            <div className="text-2xl font-bold text-blue-600">{stats.totalUsers}</div>
                            <div className="text-sm text-gray-600">Total Users</div>
                        </div>

                        {/* Collaborators (users with role 'user') */}
                        <div className="text-center p-4 bg-gray-50 rounded-lg flex flex-col items-center">
                            <FaUserFriends className="text-3xl text-green-600 mb-2" />
                            <div className="text-2xl font-bold text-green-600">{stats.totalCollaborators}</div>
                            <div className="text-sm text-gray-600">Collaborators</div>
                        </div>

                        {/* Employees */}
                        <div className="text-center p-4 bg-gray-50 rounded-lg flex flex-col items-center">
                            <FaUserTie className="text-3xl text-purple-600 mb-2" />
                            <div className="text-2xl font-bold text-purple-600">{stats.totalEmployees}</div>
                            <div className="text-sm text-gray-600">Employees</div>
                        </div>

                        {/* Admins */}
                        <div className="text-center p-4 bg-gray-50 rounded-lg flex flex-col items-center">
                            <FaUserShield className="text-3xl text-yellow-500 mb-2" />
                            <div className="text-2xl font-bold text-yellow-500">{stats.totalAdmins}</div>
                            <div className="text-sm text-gray-600">Admins</div>
                        </div>

                        {/* Documents */}
                        <div className="text-center p-4 bg-gray-50 rounded-lg flex flex-col items-center">
                            <FaFileAlt className="text-3xl text-orange-600 mb-2" />
                            <div className="text-2xl font-bold text-orange-600">{stats.totalDocuments}</div>
                            <div className="text-sm text-gray-600">Documents</div>
                        </div>

                        {/* Departments */}
                        <div className="text-center p-4 bg-gray-50 rounded-lg flex flex-col items-center">
                            <FaBuilding className="text-3xl text-red-600 mb-2" />
                            <div className="text-2xl font-bold text-red-600">{stats.totalDepartments}</div>
                            <div className="text-sm text-gray-600">Departments</div>
                        </div>
                    </div>
                </div>

                {/* Management Sections */}
                <div className="mt-8">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Management Center</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {managementSections.map((section, i) => (
                            <div key={i} className="bg-white rounded-lg drop-shadow-lg border border-gray-200 overflow-hidden">
                                {/* Section Header */}
                                <div className="bg-[#B11016] text-white p-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="text-2xl">{section.icon}</div>
                                        <h3 className="text-lg font-semibold">{section.title}</h3>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="p-4 space-y-2">
                                    {section.actions.map((action, j) => (
                                        <button
                                            key={j}
                                            onClick={() => handleActionClick(action.action)}
                                            className="w-full text-left px-4 py-3 rounded-md border border-gray-200 hover:border-red-300 hover:bg-red-50 hover:text-red-700 transition-all duration-200 group"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="font-medium">{action.name}</span>
                                                <span className="text-gray-400 group-hover:text-red-600 transition-colors">→</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activities */}
                {recentActivities.length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Activities</h2>

                        <div className="bg-white rounded-lg drop-shadow-lg border border-gray-200 p-6">
                            <div className="space-y-4">
                                {recentActivities.map((activity, index) => (
                                    <div key={index} className="flex items-start space-x-3 p-3 border-l-4 border-gray-200 bg-gray-50 rounded-r-lg">
                                        <span className="text-lg">{activity.icon}</span>
                                        <div className="flex-1">
                                            <h4 className="font-medium text-gray-800">{activity.title}</h4>
                                            <p className="text-sm text-gray-600">{activity.description}</p>
                                            <p className="text-xs text-gray-500 mt-1">
                                                {new Date(activity.timestamp).toLocaleDateString()} at{' '}
                                                {new Date(activity.timestamp).toLocaleTimeString()}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <CreateDepartmentModal
                isOpen={showCreateDeptModal}
                onClose={() => setShowCreateDeptModal(false)}
                onSuccess={handleSuccess}
                apiUrl={API ?? ""}
            />
            <ManageDepartmentModal
                isOpen={showManageDeptModal}
                onClose={() => setShowManageDeptModal(false)}
                onSuccess={handleSuccess}
                apiUrl={API ?? ""}
            />
        </div>

    );

}