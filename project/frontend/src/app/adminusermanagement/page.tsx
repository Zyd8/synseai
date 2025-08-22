"use client";

import Sidebar from "@/components/DashboardSidebar";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
    id: number;
    name: string;
    email: string;
    role: 'employee' | 'user' | 'admin';
    status: 'active' | 'inactive' | 'suspended';
    department?: string;
    last_login?: string;
    created_at: string;
    updated_at: string;
}

export default function UserManagement() {
    const API = process.env.NEXT_PUBLIC_API_URL;
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState<number | null>(null);
    const [selectedUsers, setSelectedUsers] = useState<Set<number>>(new Set());
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showRoleModal, setShowRoleModal] = useState(false);
    const [bulkRole, setBulkRole] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState<string>('all');
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const router = useRouter();

    // New user form state
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        role: 'user',
        password: '',
        department: ''
    });

    useEffect(() => {
        const fetchAllUsers = async () => {
            const token = sessionStorage.getItem("access_token");
            try {
                const res = await fetch(`${API}/api/users`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!res.ok) throw new Error("Failed to fetch users");
                const data = await res.json();

                setUsers(Array.isArray(data.users) ? data.users : []);
            } catch (err) {
                console.error("Error fetching users:", err);
                setUsers([]);
            } finally {
                setLoading(false);
            }
        };

        fetchAllUsers();
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

    // Filter users based on search and filters
    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            user.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = roleFilter === 'all' || user.role === roleFilter;
        const matchesStatus = statusFilter === 'all' || user.status === statusFilter;
        
        return matchesSearch && matchesRole && matchesStatus;
    });

    // Handle role change for single user
    const handleRoleChange = async (userId: number, newRole: string) => {
        const token = sessionStorage.getItem("access_token");
        setUpdating(userId);
        
        try {
            const res = await fetch(`${API}/api/users/${userId}/role`, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ role: newRole }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Failed to update user role");
            }

            // Update local state
            setUsers(prevUsers =>
                prevUsers.map(user =>
                    user.id === userId ? { ...user, role: newRole as any } : user
                )
            );

            alert(`User role updated successfully!`);
            
        } catch (err) {
            console.error("Error updating user role:", err);
            alert(`Error updating role: ${err instanceof Error ? err.message : 'Unknown error'}`);
        } finally {
            setUpdating(null);
        }
    };

    // Handle status change for single user
    const handleStatusChange = async (userId: number, newStatus: string) => {
        const token = sessionStorage.getItem("access_token");
        setUpdating(userId);
        
        try {
            const res = await fetch(`${API}/api/users/${userId}/status`, {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ status: newStatus }),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Failed to update user status");
            }

            // Update local state
            setUsers(prevUsers =>
                prevUsers.map(user =>
                    user.id === userId ? { ...user, status: newStatus as any } : user
                )
            );

            alert(`User status updated successfully!`);
            
        } catch (err) {
            console.error("Error updating user status:", err);
            alert(`Error updating status: ${err instanceof Error ? err.message : 'Unknown error'}`);
        } finally {
            setUpdating(null);
        }
    };

    // Handle bulk role assignment
    const handleBulkRoleAssignment = async () => {
        if (selectedUsers.size === 0 || !bulkRole) {
            alert('Please select users and a role');
            return;
        }

        const token = sessionStorage.getItem("access_token");
        
        try {
            const promises = Array.from(selectedUsers).map(userId => 
                fetch(`${API}/api/users/${userId}/role`, {
                    method: 'PATCH',
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ role: bulkRole }),
                })
            );

            await Promise.all(promises);

            // Update local state
            setUsers(prevUsers =>
                prevUsers.map(user =>
                    selectedUsers.has(user.id) ? { ...user, role: bulkRole as any } : user
                )
            );

            setSelectedUsers(new Set());
            setBulkRole('');
            setShowRoleModal(false);
            alert(`Bulk role assignment completed!`);
            
        } catch (err) {
            console.error("Error in bulk role assignment:", err);
            alert(`Error in bulk assignment: ${err instanceof Error ? err.message : 'Unknown error'}`);
        }
    };

    // Handle create new user
    const handleCreateUser = async () => {
        if (!newUser.name || !newUser.email || !newUser.password) {
            alert('Please fill in all required fields');
            return;
        }

        const token = sessionStorage.getItem("access_token");
        
        try {
            const res = await fetch(`${API}/api/users`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Failed to create user");
            }

            const data = await res.json();
            setUsers(prev => [...prev, data.user]);
            setNewUser({ name: '', email: '', role: 'user', password: '', department: '' });
            setShowCreateModal(false);
            alert('User created successfully!');
            
        } catch (err) {
            console.error("Error creating user:", err);
            alert(`Error creating user: ${err instanceof Error ? err.message : 'Unknown error'}`);
        }
    };

    // Toggle user selection for bulk operations
    const toggleUserSelection = (userId: number) => {
        const newSelection = new Set(selectedUsers);
        if (newSelection.has(userId)) {
            newSelection.delete(userId);
        } else {
            newSelection.add(userId);
        }
        setSelectedUsers(newSelection);
    };

    // Select all filtered users
    const selectAllUsers = () => {
        const allFilteredIds = new Set(filteredUsers.map(user => user.id));
        setSelectedUsers(allFilteredIds);
    };

    // Clear all selections
    const clearSelection = () => {
        setSelectedUsers(new Set());
    };

    const getRoleColor = (role: string) => {
        switch (role) {
            case 'admin': return 'bg-red-100 text-red-800';
            case 'employee': return 'bg-blue-100 text-blue-800';
            case 'user': return 'bg-green-100 text-green-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'active': return 'bg-green-100 text-green-800';
            case 'inactive': return 'bg-gray-100 text-gray-800';
            case 'suspended': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <ProtectedRoute allowedRoles={["admin"]}>
            <div className="flex min-h-screen bg-gray-50 overflow-x-hidden">
                {/* Sidebar */}
                <Sidebar />

                {/* Main content */}
                <div className="flex-1 py-3 sm:py-6 pl-[2%] sm:pl-[3%] pr-[3%] sm:pr-[5%] overflow-x-auto">
                    <h1 className="text-2xl font-bold text-red-700">User Management</h1>
                    <p className="text-sm text-gray-600 mt-1 border-b-3 border-black pb-2 sm:pb-4 border-red-700">
                        Manage users, assign roles, and control user access across the system.
                    </p>

                    {/* Summary Stats */}
                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                            <div className="text-2xl font-bold text-blue-600">{users.length}</div>
                            <div className="text-sm text-gray-600">Total Users</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                            <div className="text-2xl font-bold text-green-600">{users.filter(u => u.role === 'user').length}</div>
                            <div className="text-sm text-gray-600">Collaborators</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                            <div className="text-2xl font-bold text-purple-600">{users.filter(u => u.role === 'employee').length}</div>
                            <div className="text-sm text-gray-600">Employees</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                            <div className="text-2xl font-bold text-red-600">{users.filter(u => u.status === 'active').length}</div>
                            <div className="text-sm text-gray-600">Active Users</div>
                        </div>
                    </div>

                    {/* Controls Section */}
                    <div className="bg-white rounded-lg border border-gray-200 p-4 mt-5 mb-5">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
                            {/* Search */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Search Users</label>
                                <input
                                    type="text"
                                    placeholder="Search by name or email..."
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            {/* Role Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Role</label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    value={roleFilter}
                                    onChange={(e) => setRoleFilter(e.target.value)}
                                >
                                    <option value="all">All Roles</option>
                                    <option value="admin">Super Admin</option>
                                    <option value="employee">Employee</option>
                                    <option value="user">Collaborator</option>
                                </select>
                            </div>

                            {/* Status Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Status</label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                >
                                    <option value="all">All Status</option>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                    <option value="suspended">Suspended</option>
                                </select>
                            </div>

                            {/* Actions */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Actions</label>
                                <button
                                    onClick={() => setShowCreateModal(true)}
                                    className="w-full px-4 py-2.5 bg-[#B11016] text-white rounded-md hover:bg-red-700 transition text-sm"
                                >
                                    Create User
                                </button>
                            </div>
                        </div>

                        {/* Bulk Operations */}
                        {selectedUsers.size > 0 && (
                            <div className="border-t pt-4">
                                <div className="flex items-center gap-4 flex-wrap">
                                    <span className="text-sm font-medium text-gray-700">
                                        {selectedUsers.size} user(s) selected
                                    </span>
                                    <button
                                        onClick={() => setShowRoleModal(true)}
                                        className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                                    >
                                        Bulk Assign Role
                                    </button>
                                    <button
                                        onClick={selectAllUsers}
                                        className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700"
                                    >
                                        Select All
                                    </button>
                                    <button
                                        onClick={clearSelection}
                                        className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                                    >
                                        Clear Selection
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Users Table */}
                    <div className="border border-gray-500 rounded-lg p-5 bg-white drop-shadow-xl">
                        <div className="overflow-x-auto">
                            {loading ? (
                                <p className="text-center text-gray-500">Loading users...</p>
                            ) : filteredUsers.length === 0 ? (
                                <p className="text-center text-gray-500">No users found.</p>
                            ) : (
                                <table className="w-full text-sm rounded-lg overflow-hidden min-w-[1000px]">
                                    <thead>
                                        <tr>
                                            <th className="p-3 text-left text-red-700 whitespace-nowrap">
                                                <input
                                                    type="checkbox"
                                                    onChange={selectedUsers.size === filteredUsers.length ? clearSelection : selectAllUsers}
                                                    checked={selectedUsers.size === filteredUsers.length && filteredUsers.length > 0}
                                                    className="rounded border-gray-300"
                                                />
                                            </th>
                                            <th className="p-3 text-left text-red-700 whitespace-nowrap">User ID</th>
                                            <th className="p-3 text-left text-red-700 whitespace-nowrap">Name</th>
                                            <th className="p-3 text-left text-red-700 whitespace-nowrap">Email</th>
                                            <th className="p-3 text-left text-red-700 whitespace-nowrap">Role</th>
                                            <th className="p-3 text-left text-red-700 whitespace-nowrap">Status</th>
                                            <th className="p-3 text-left text-red-700 whitespace-nowrap">Department</th>
                                            <th className="p-3 text-left text-red-700 whitespace-nowrap">Created Date</th>
                                            <th className="p-3 text-center text-red-700 whitespace-nowrap">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredUsers.map((user, i) => (
                                            <tr key={i} className="border-t hover:bg-gray-50 transition-colors">
                                                <td className="p-3">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedUsers.has(user.id)}
                                                        onChange={() => toggleUserSelection(user.id)}
                                                        className="rounded border-gray-300"
                                                    />
                                                </td>
                                                <td className="p-3 whitespace-nowrap">{user.id}</td>
                                                <td className="p-3 font-medium">{user.name}</td>
                                                <td className="p-3">{user.email}</td>
                                                <td className="p-3">
                                                    <select
                                                        value={user.role}
                                                        onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                                        disabled={updating === user.id}
                                                        className={`px-2 py-1 rounded-full text-xs font-medium border-0 focus:ring-2 focus:ring-red-500 ${getRoleColor(user.role)}`}
                                                    >
                                                        <option value="user">Collaborator</option>
                                                        <option value="employee">Employee</option>
                                                        <option value="admin">Super Admin</option>
                                                    </select>
                                                </td>
                                                <td className="p-3">
                                                    <select
                                                        value={user.status}
                                                        onChange={(e) => handleStatusChange(user.id, e.target.value)}
                                                        disabled={updating === user.id}
                                                        className={`px-2 py-1 rounded-full text-xs font-medium border-0 focus:ring-2 focus:ring-red-500 ${getStatusColor(user.status)}`}
                                                    >
                                                        <option value="active">Active</option>
                                                        <option value="inactive">Inactive</option>
                                                        <option value="suspended">Suspended</option>
                                                    </select>
                                                </td>
                                                <td className="p-3">{user.department || 'N/A'}</td>
                                                <td className="p-3 whitespace-nowrap">{formatDate(user.created_at)}</td>
                                                <td className="p-3 text-center">
                                                    <div className="flex items-center justify-center gap-2">
                                                        <button
                                                            onClick={() => router.push(`/super-admin/user-profile?id=${user.id}`)}
                                                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                                        >
                                                            View
                                                        </button>
                                                        <span className="text-gray-400">|</span>
                                                        <button
                                                            onClick={() => router.push(`/super-admin/edit-user?id=${user.id}`)}
                                                            className="text-green-600 hover:text-green-800 text-sm font-medium"
                                                        >
                                                            Edit
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )}
                        </div>
                    </div>

                    
                </div>
            </div>

            {/* Create User Modal */}
            {showCreateModal && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold text-red-700 mb-4">Create New User</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                                <input
                                    type="text"
                                    value={newUser.name}
                                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                <input
                                    type="email"
                                    value={newUser.email}
                                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                                <input
                                    type="password"
                                    value={newUser.password}
                                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                                <select
                                    value={newUser.role}
                                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                >
                                    <option value="user">Collaborator</option>
                                    <option value="employee">Employee</option>
                                    <option value="admin">Super Admin</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                                <input
                                    type="text"
                                    value={newUser.department}
                                    onChange={(e) => setNewUser({ ...newUser, department: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={handleCreateUser}
                                className="flex-1 bg-[#B11016] text-white py-2 rounded-md hover:bg-red-700 transition"
                            >
                                Create User
                            </button>
                            <button
                                onClick={() => setShowCreateModal(false)}
                                className="flex-1 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Bulk Role Assignment Modal */}
            {showRoleModal && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold text-red-700 mb-4">Bulk Role Assignment</h2>
                        <p className="text-gray-600 mb-4">
                            Assign role to {selectedUsers.size} selected user(s)
                        </p>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Select Role</label>
                            <select
                                value={bulkRole}
                                onChange={(e) => setBulkRole(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                <option value="">Choose a role...</option>
                                <option value="user">Collaborator</option>
                                <option value="employee">Employee</option>
                                <option value="admin">Super Admin</option>
                            </select>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={handleBulkRoleAssignment}
                                disabled={!bulkRole}
                                className="flex-1 bg-[#B11016] text-white py-2 rounded-md hover:bg-red-700 transition disabled:opacity-50"
                            >
                                Assign Role
                            </button>
                            <button
                                onClick={() => setShowRoleModal(false)}
                                className="flex-1 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </ProtectedRoute>
    );
}