'use client';

import Sidebar from "@/components/DashboardSidebar";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaUsers, FaUserTie, FaUserFriends, FaFileAlt, FaBuilding } from "react-icons/fa"; 

export default function SuperAdminDashboard() {
    const router = useRouter();
    const API = process.env.NEXT_PUBLIC_API_URL;

    const [users, setUsers] = useState<any[]>([]);
    const [departments, setDepartments] = useState<any[]>([]);
    const [documents, setDocuments] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [recentActivities, setRecentActivities] = useState<any[]>([]);

    // Statistics
    const [stats, setStats] = useState({
        totalUsers: 0,
        totalCollaborators: 0,
        totalEmployees: 0,
        totalDocuments: 0,
        totalDepartments: 0
    });

    // Fetch all data
    useEffect(() => {
        const fetchAllData = async () => {
            const token = sessionStorage.getItem("access_token");
            try {
                // Fetch users
                const usersRes = await fetch(`${API}/api/users`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                const usersData = await usersRes.json();
                const usersList = usersData.users || [];
                setUsers(usersList);

                // Fetch departments
                const deptRes = await fetch(`${API}/api/departments`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                const deptData = await deptRes.json();
                const deptList = deptData.departments || [];
                setDepartments(deptList);

                // Fetch documents
                const docsRes = await fetch(`${API}/api/documents`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                const docsData = await docsRes.json();
                const docsList = docsData.documents || [];
                setDocuments(docsList);

                // Calculate statistics
                const collaborators = usersList.filter((user: any) => user.role === 'collaborator');
                const employees = usersList.filter((user: any) => user.role === 'employee');

                setStats({
                    totalUsers: usersList.length,
                    totalCollaborators: collaborators.length,
                    totalEmployees: employees.length,
                    totalDocuments: docsList.length,
                    totalDepartments: deptList.length
                });

                // Generate recent activities (mock data based on users and documents)
                const activities = [
                    ...usersList.slice(0, 2).map((user: any) => ({
                        type: 'user',
                        title: `New user registered: ${user.name || user.email}`,
                        description: `Role: ${user.role}`,
                        timestamp: user.created_at || new Date().toISOString(),
                        icon: '👤'
                    })),
                    ...docsList.slice(0, 2).map((doc: any) => ({
                        type: 'document',
                        title: `Document uploaded: ${doc.title || doc.name}`,
                        description: `Type: ${doc.type || 'Unknown'}`,
                        timestamp: doc.created_at || new Date().toISOString(),
                        icon: '📄'
                    })),
                    ...deptList.slice(0, 1).map((dept: any) => ({
                        type: 'department',
                        title: `Department: ${dept.name}`,
                        description: `${dept.employee_count || 0} employees`,
                        timestamp: dept.created_at || new Date().toISOString(),
                        icon: '🏢'
                    }))
                ].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()).slice(0, 5);

                setRecentActivities(activities);

            } catch (err) {
                console.error("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchAllData();
    }, [API]);

    // Summary cards data
    const summaryCards = [
        { 
            label: "Total Users", 
            count: stats.totalUsers, 
            icon: "👥",
            color: "bg-blue-100 text-blue-800",
            bgColor: "bg-blue-50"
        },
        { 
            label: "Collaborators", 
            count: stats.totalCollaborators, 
            icon: "🤝",
            color: "bg-green-100 text-green-800",
            bgColor: "bg-green-50"
        },
        { 
            label: "Employees", 
            count: stats.totalEmployees, 
            icon: "👔",
            color: "bg-purple-100 text-purple-800",
            bgColor: "bg-purple-50"
        },
        { 
            label: "Documents", 
            count: stats.totalDocuments, 
            icon: "📁",
            color: "bg-orange-100 text-orange-800",
            bgColor: "bg-orange-50"
        },
    ];

            // Management sections
        const managementSections = [
        {
            title: "Users & Roles",
            icon: <FaUsers className="text-2xl" />,
            actions: [
            { name: "Assign Role", action: "assign-role" },
            { name: "Manage Users", action: "manage-users" }
            ]
        },
        {
            title: "Departments",
            icon: <FaBuilding className="text-2xl" />,
            actions: [
            { name: "Create Department", action: "create-department" },
            { name: "Assign Employee to Department", action: "assign-employee" },
            { name: "Manage Departments", action: "manage-departments" }
            ]
        },
        {
            title: "Documents",
            icon: <FaFileAlt className="text-2xl" />,
            actions: [
            { name: "Upload Document", action: "upload-document" },
            { name: "Assign Document to Departments", action: "assign-document" },
            { name: "Manage Documents", action: "manage-documents" }
            ]
        }
        ];

    const handleActionClick = (action: string) => {
        setActiveSection(activeSection === action ? null : action);
        // Here you would typically navigate to specific management pages
        console.log(`Navigating to: ${action}`);
        
        // Example navigation (you can customize these routes)
        switch(action) {
            case 'assign-role':
                router.push('/super-admin/assign-role');
                break;
            case 'manage-users':
                router.push('/adminusermanagement');
                break;
            case 'create-department':
                router.push('/super-admin/create-department');
                break;
            case 'assign-employee':
                router.push('/super-admin/assign-employee');
                break;
            case 'manage-departments':
                router.push('/super-admin/manage-departments');
                break;
            case 'upload-document':
                router.push('/super-admin/upload-document');
                break;
            case 'assign-document':
                router.push('/super-admin/assign-document');
                break;
            case 'manage-documents':
                router.push('/super-admin/manage-documents');
                break;
            default:
                console.log(`Action ${action} not implemented yet`);
        }
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
                        <h1 className="text-2xl font-bold text-red-700">Super Admin Dashboard</h1>
                        <p className="text-sm text-gray-600 mt-1">
                            Manage users, departments, documents and system-wide settings.
                        </p>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={() => window.location.reload()}
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
                  
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {/* Total Users */}
                        <div className="text-center p-4 bg-gray-50 rounded-lg flex flex-col items-center">
                        <FaUsers className="text-3xl text-blue-600 mb-2" />
                        <div className="text-2xl font-bold text-blue-600">{stats.totalUsers}</div>
                        <div className="text-sm text-gray-600">Total Users</div>
                        </div>

                        {/* Collaborators */}
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

                
            </main>
        </div>
    );
}