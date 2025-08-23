"use client";

import Sidebar from "@/components/DashboardSidebar";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaUsers, FaUserTie, FaUserFriends, FaFileAlt, FaBuilding, FaUserShield, FaArrowLeft } from "react-icons/fa"; 

interface User {
  id: number;
  first_name: string;
  last_name: string;
  full_name: string;
  email: string;
  contact_number?: string;
  role: "employee" | "user" | "admin";
  position?: string;
  department_id?: number;
  created_at: string;
}

interface Department {
  id: string;
  name: string;
}

export default function UserManagement() {
    const API = process.env.NEXT_PUBLIC_API_URL;
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState<number | null>(null);
    const [selectedUsers, setSelectedUsers] = useState<Set<number>>(new Set());
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showRoleModal, setShowRoleModal] = useState(false);
    const [showEditUserModal, setShowEditUserModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [bulkRole, setBulkRole] = useState<string>('');
    const [bulkDepartment, setBulkDepartment] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState<string>('all');
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const [selectedUserForEdit, setSelectedUserForEdit] = useState<User | null>(null);
    const [selectedUserForDelete, setSelectedUserForDelete] = useState<User | null>(null);
    const router = useRouter();

    const [departments, setDepartments] = useState<Department[]>([]);
    const [departmentFilter, setDepartmentFilter] = useState("all");

    // New user form state
    const [newUser, setNewUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        role: 'user',
        password: '',
        contact_number: '',
        position: '',
        department_id: ''
    });

    // Edit user form state
    const [editUser, setEditUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        role: '',
        contact_number: '',
        position: '',
        department_id: ''
    });

    const handleRoleChange = (newRole: string) => {
            setNewUser({ 
                ...newUser, 
                role: newRole, 
                department_id: newRole === 'admin' ? '' : newUser.department_id 
            });
        };

        const handleEditRoleChange = (newRole: string) => {
            setEditUser({ 
                ...editUser, 
                role: newRole, 
                department_id: newRole === 'admin' ? '' : editUser.department_id 
            });
        };

    useEffect(() => {
  const fetchDepartments = async () => {
    const token = sessionStorage.getItem("access_token");
    try {
      const deptRes = await fetch(`${API}/api/department`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!deptRes.ok) throw new Error("Failed to fetch departments");

      const data = await deptRes.json();
      setDepartments(data.departments || []);
    } catch (err) {
      console.error("Error fetching departments:", err);
      setDepartments([]);
    }
  };

  fetchDepartments();
}, [API]);

    useEffect(() => {
    const fetchAllUsers = async () => {
        const token = sessionStorage.getItem("access_token");
        try {
        const res = await fetch(`${API}/api/user`, {
            headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            },
        });

        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();

        setUsers(Array.isArray(data) ? data : []); // backend returns an array
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

    // Get department name by ID
    const getDepartmentName = (departmentId?: number, userRole?: string) => {
        // Admins should not have departments
        if (userRole === 'admin') return "Admin Department";
        
        if (!departmentId) return "N/A";
        
        // Convert departmentId to string for comparison since backend returns string IDs
        const dept = departments.find(d => parseInt(d.id) === departmentId || d.id === String(departmentId));
        return dept ? dept.name : "N/A";
    };

    // Filter users based on search and filters
   const filteredUsers = users.filter(user => {
  const matchesSearch =
    user.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesRole = roleFilter === "all" || user.role === roleFilter;

  const matchesDepartment =
    departmentFilter === "all" || String(user.department_id) === departmentFilter;

  return matchesSearch && matchesRole && matchesDepartment;
});

    // Handle user update (role and department)
    const handleUserUpdate = async (userId: number, updates: any) => {
        const token = sessionStorage.getItem("access_token");
        setUpdating(userId);
        
        try {
            const res = await fetch(`${API}/api/user/${userId}`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updates),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Failed to update user");
            }

            const updatedUserFromServer = await res.json();

            // Update local state with the actual server response
            setUsers(prevUsers =>
                prevUsers.map(user =>
                    user.id === userId ? {
                        ...user,
                        first_name: updatedUserFromServer.first_name,
                        last_name: updatedUserFromServer.last_name,
                        full_name: updatedUserFromServer.full_name,
                        email: updatedUserFromServer.email,
                        contact_number: updatedUserFromServer.contact_number,
                        role: updatedUserFromServer.role,
                        position: updatedUserFromServer.position,
                        department_id: updatedUserFromServer.department_id
                    } : user
                )
            );

            alert(`User updated successfully!`);
            
        } catch (err) {
            console.error("Error updating user:", err);
            alert(`Error updating user: ${err instanceof Error ? err.message : 'Unknown error'}`);
        } finally {
            setUpdating(null);
        }
    };

    // Open edit user modal
    const openEditUserModal = (user: User) => {
        setSelectedUserForEdit(user);
        setEditUser({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            role: user.role,
            contact_number: user.contact_number || '',
            position: user.position || '',
            department_id: user.department_id ? String(user.department_id) : ''
        });
        setShowEditUserModal(true);
    };

    // Handle edit user submission
    const handleEditUserSubmit = async () => {
        if (!selectedUserForEdit) return;
        
        const updates: any = {
            first_name: editUser.first_name,
            last_name: editUser.last_name,
            email: editUser.email,
            role: editUser.role,
            contact_number: editUser.contact_number,
            position: editUser.position
        };

        // Only include department_id if a department is selected AND user is not admin
        if (editUser.role !== 'admin') {
            updates.department_id = editUser.department_id ? parseInt(editUser.department_id) : null;
        } else {
            // Admins should have no department
            updates.department_id = null;
        }
        
        await handleUserUpdate(selectedUserForEdit.id, updates);
        setShowEditUserModal(false);
        setSelectedUserForEdit(null);
        setEditUser({
            first_name: '',
            last_name: '',
            email: '',
            role: '',
            contact_number: '',
            position: '',
            department_id: ''
        });
    };

    // Open delete modal
    const openDeleteModal = (user: User) => {
        setSelectedUserForDelete(user);
        setShowDeleteModal(true);
    };

    // Handle delete user
    const handleDeleteUser = async () => {
        if (!selectedUserForDelete) return;

        const token = sessionStorage.getItem("access_token");
        try {
            const res = await fetch(`${API}/api/user/${selectedUserForDelete.id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Failed to delete user");
            }

            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== selectedUserForDelete.id));
            alert("User deleted successfully!");
            
        } catch (err) {
            console.error("Error deleting user:", err);
            alert(
                `Error deleting user: ${
                    err instanceof Error ? err.message : "Unknown error"
                }`
            );
        } finally {
            setShowDeleteModal(false);
            setSelectedUserForDelete(null);
        }
    };

    // Update bulk operations to handle both role and department
    const handleBulkAssignment = async () => {
        if (selectedUsers.size === 0) {
            alert("Please select users first");
            return;
        }

        if (!bulkRole && !bulkDepartment) {
            alert("Please select either a role or department to assign");
            return;
        }

        const token = sessionStorage.getItem("access_token");

        try {
            const updates: any = {};
            if (bulkRole) updates.role = bulkRole;
            if (bulkDepartment) updates.department_id = parseInt(bulkDepartment);

            const promises = Array.from(selectedUsers).map((userId) =>
                fetch(`${API}/api/user/${userId}`, {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updates),
                })
            );

            const responses = await Promise.all(promises);
            
            // Get all updated user data from server responses
            const updatedUsersData = await Promise.all(
                responses.map(response => response.json())
            );

            setUsers((prevUsers) =>
                prevUsers.map((user) => {
                    if (selectedUsers.has(user.id)) {
                        const updatedUser = updatedUsersData.find(u => u.id === user.id);
                        return updatedUser ? {
                            ...user,
                            first_name: updatedUser.first_name,
                            last_name: updatedUser.last_name,
                            full_name: updatedUser.full_name,
                            email: updatedUser.email,
                            contact_number: updatedUser.contact_number,
                            role: updatedUser.role,
                            position: updatedUser.position,
                            department_id: updatedUser.department_id
                        } : user;
                    }
                    return user;
                })
            );

            setSelectedUsers(new Set());
            setBulkRole("");
            setBulkDepartment("");
            setShowRoleModal(false);
            alert("Bulk assignment completed!");
        } catch (err) {
            console.error("Error in bulk assignment:", err);
            alert(
                `Error in bulk assignment: ${
                    err instanceof Error ? err.message : "Unknown error"
                }`
            );
        }
    };

    // Handle create new user
    const handleCreateUser = async () => {
        if (!newUser.first_name || !newUser.last_name || !newUser.email || !newUser.password) {
            alert('Please fill in all required fields');
            return;
        }

        const token = sessionStorage.getItem("access_token");
        
        try {
            const userData: any = {
                first_name: newUser.first_name,
                last_name: newUser.last_name,
                email: newUser.email,
                password: newUser.password,
                role: newUser.role,
                contact_number: newUser.contact_number,
                position: newUser.position
            };

            // Only include department_id if a department is selected AND user is not admin
            if (newUser.role !== 'admin' && newUser.department_id) {
                userData.department_id = parseInt(newUser.department_id);
            }

            const res = await fetch(`${API}/api/auth/register`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Failed to create user");
            }

            const data = await res.json();
            
            // Create user object that matches the expected format for the frontend
            const newUserForState: User = {
                id: data.user.id,
                first_name: data.user.first_name,
                last_name: data.user.last_name,
                full_name: data.user.full_name || `${data.user.first_name} ${data.user.last_name}`,
                email: data.user.email,
                contact_number: data.user.contact_number,
                role: data.user.role as "employee" | "user" | "admin",
                position: data.user.position,
                department_id: data.user.department_id,
                created_at: data.user.created_at || new Date().toISOString()
            };
            
            setUsers(prev => [...prev, newUserForState]);
            setNewUser({ 
                first_name: '', 
                last_name: '', 
                email: '', 
                role: 'user', 
                password: '', 
                contact_number: '', 
                position: '',
                department_id: ''
            });
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
        case "admin":
        return "bg-red-100 text-red-800";
        case "employee":
        return "bg-blue-100 text-blue-800";
        case "user":
        return "bg-green-100 text-green-800";
        default:
        return "bg-gray-100 text-gray-800";
    }
    };

    return (
        <ProtectedRoute allowedRoles={["admin"]}>
            <div className="flex min-h-screen  overflow-x-hidden">
                {/* Sidebar */}
                <Sidebar />

                {/* Main content */}
                <div className="flex-1 py-3 sm:py-6 pl-[2%] sm:pl-[3%] pr-[3%] sm:pr-[5%] overflow-x-auto">
                    <div className="flex items-center justify-between mb-4 border-b-3 pb-2 sm:pb-4 border-red-700">
                        <div>
                            <h1 className="text-2xl font-bold text-red-700">User Management</h1>
                            <p className="text-sm text-gray-600 mt-1 ">
                            Manage users, assign roles and departments, and control user access across the system.
                            </p>
                        </div>

                        <button
                            onClick={() => router.push("/admindashboard")}
                            className="flex items-center gap-2 bg-red-700 text-white px-4 py-2 border-2 rounded-md hover:bg-white hover:text-[#B11016] hover-border-[#B11016]  transition"
                        >
                            <FaArrowLeft /> Back to Dashboard
                        </button>
                        </div>

                    {/* Summary Stats */}
                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-lg border border-gray-500 text-center drop-shadow-md">
                            <div className="text-2xl font-bold text-blue-600">{users.length}</div>
                            <div className="text-sm text-gray-600">Total Users</div>
                            <FaUsers className="text-3xl text-blue-600 mx-auto mt-2" />
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-500 text-center drop-shadow-md">
                            <div className="text-2xl font-bold text-green-600">{users.filter(u => u.role === 'user').length}</div>
                            <div className="text-sm text-gray-600">Collaborators</div>
                            <FaUserFriends className="text-3xl text-green-600 mx-auto mt-2" />
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-500 text-center drop-shadow-md">
                            <div className="text-2xl font-bold text-purple-600">{users.filter(u => u.role === 'employee').length}</div>
                            <div className="text-sm text-gray-600">Employees</div>
                            <FaUserTie className="text-3xl text-purple-600 mx-auto mt-2" />
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-500 text-center drop-shadow-md">
                            <div className="text-2xl font-bold text-yellow-500">{users.filter(u => u.role === 'admin').length}</div>
                            <div className="text-sm text-gray-600">Administrators</div>
                            <FaUserShield className="text-3xl text-yellow-500 mx-auto mt-2" />
                        </div>
                   
                    </div>

                    {/* Controls Section */}
                    <div className="bg-white rounded-lg border border-gray-500 p-5 mt-5 mb-5 drop-shadow-md">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
                            {/* Search */}
                            <div>
                                <label className="block text-sm font-medium text-[#B11016] mb-2">Search Users</label>
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
                                <label className="block text-sm font-medium text-[#B11016] mb-2">Filter by Role</label>
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

                            {/* Department Filter */}
                            <div>
                            <label className="block text-sm font-medium text-[#B11016] mb-2">
                                Filter by Department
                            </label>
                            <select
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                value={departmentFilter}
                                onChange={(e) => setDepartmentFilter(e.target.value)}
                            >
                                <option value="all">All Departments</option>
                                {departments.map((dept) => (
                                <option key={dept.id} value={dept.id}>
                                    {dept.name}
                                </option>
                                ))}
                            </select>
                            </div>

                            {/* Actions */}
                            <div>
                                <label className="block text-sm font-medium text-[#B11016] mb-1">Actions</label>
                                <button
                                    onClick={() => setShowCreateModal(true)}
                                    className="w-full px-4 mt-0.5 py-2.5 bg-[#B11016] border border-2 text-white rounded-md hover:bg-white hover:border-[#B11016] hover:text-[#B11016] transition text-sm"
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
                                        Bulk Assign Role/Department
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
                                <table className="w-full text-sm rounded-lg overflow-hidden min-w-[1200px]">
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
                                            <th className="p-3 text-left text-red-700 whitespace-nowrap">Position</th>
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
                                                <td className="p-3 font-medium">{user.full_name}</td>
                                                <td className="p-3">{user.email}</td>
                                               <td className="p-3">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                                                    {user.role}
                                                </span>
                                                </td>
                                                <td className="p-3">{user.position || "N/A"}</td>
                                                <td className="p-3">{getDepartmentName(user.department_id, user.role)}</td>
                                                <td className="p-3 whitespace-nowrap">{formatDate(user.created_at)}</td>
                                                <td className="p-3 text-center">
                                                    <div className="flex items-center justify-center gap-2">
                                                       <button
                                                            onClick={() => openEditUserModal(user)}
                                                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                                            disabled={updating === user.id}
                                                        >
                                                            {updating === user.id ? 'Updating...' : 'Edit'}
                                                        </button>
                                                        <span className="text-gray-400">|</span>
                                                        <button
                                                            onClick={() => openDeleteModal(user)}
                                                            className="text-red-600 hover:text-red-800 text-sm font-medium"
                                                        >
                                                            Delete
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
                    <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                        <h2 className="text-xl font-bold text-red-700 mb-4">Create New User</h2>
                        <div className="space-y-4">
                            <div className="col-span-1">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        First Name *
                                    </label>
                                    <input
                                        type="text"
                                        value={newUser.first_name}
                                        onChange={(e) =>
                                        setNewUser({ ...newUser, first_name: e.target.value })
                                        }
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="Enter first name"
                                    />
                                    </div>
                                    <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Last Name *
                                    </label>
                                    <input
                                        type="text"
                                        value={newUser.last_name}
                                        onChange={(e) =>
                                        setNewUser({ ...newUser, last_name: e.target.value })
                                        }
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="Enter last name"
                                    />
                                    </div>
                                </div>
                                </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                <input
                                    type="email"
                                    value={newUser.email}
                                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Enter email address"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                                <input
                                    type="password"
                                    value={newUser.password}
                                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Enter password"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                                <input
                                    type="text"
                                    value={newUser.contact_number}
                                    onChange={(e) => setNewUser({ ...newUser, contact_number: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Enter contact number"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                                <input
                                    type="text"
                                    value={newUser.position}
                                    onChange={(e) => setNewUser({ ...newUser, position: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Enter position/job title"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                                <select
                                    value={newUser.role}
                                    onChange={(e) => handleRoleChange(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                >
                                    <option value="user">Collaborator</option>
                                    <option value="employee">Employee</option>
                                    <option value="admin">Super Admin</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                                <select
                                    value={newUser.department_id}
                                    onChange={(e) => setNewUser({ ...newUser, department_id: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    disabled={newUser.role === 'admin'}
                                >
                                    <option value="">
                                        {newUser.role === 'admin' ? 'Admins have no department' : 'Select Department (Optional)'}
                                    </option>
                                    {newUser.role !== 'admin' && departments.map((dept) => (
                                        <option key={dept.id} value={dept.id}>
                                            {dept.name}
                                        </option>
                                    ))}
                                </select>
                                {newUser.role === 'admin' && (
                                    <p className="text-xs text-gray-500 mt-1">
                                        Admin users are not assigned to departments
                                    </p>
                                )}
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
                                onClick={() => {
                                    setShowCreateModal(false);
                                    setNewUser({ 
                                        first_name: '', 
                                        last_name: '', 
                                        email: '', 
                                        role: 'user', 
                                        password: '', 
                                        contact_number: '', 
                                        position: '',
                                        department_id: ''
                                    });
                                }}
                                className="flex-1 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Edit User Modal */}
            {showEditUserModal && selectedUserForEdit && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                        <h2 className="text-xl font-bold text-red-700 mb-4">Edit User</h2>
                        <p className="text-gray-600 mb-4">
                            Editing <span className="font-medium">{selectedUserForEdit.full_name}</span>
                        </p>
                        <div className="space-y-4">
                           <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                First Name *
                                </label>
                                <input
                                type="text"
                                value={editUser.first_name}
                                onChange={(e) =>
                                    setEditUser({ ...editUser, first_name: e.target.value })
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter first name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                Last Name *
                                </label>
                                <input
                                type="text"
                                value={editUser.last_name}
                                onChange={(e) =>
                                    setEditUser({ ...editUser, last_name: e.target.value })
                                }
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                placeholder="Enter last name"
                                />
                            </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                <input
                                    type="email"
                                    value={editUser.email}
                                    onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Enter email address"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                                <input
                                    type="text"
                                    value={editUser.contact_number}
                                    onChange={(e) => setEditUser({ ...editUser, contact_number: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Enter contact number"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                                <input
                                    type="text"
                                    value={editUser.position}
                                    onChange={(e) => setEditUser({ ...editUser, position: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Enter position/job title"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Current Role</label>
                                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${getRoleColor(selectedUserForEdit.role)}`}>
                                    {selectedUserForEdit.role}
                                </div>
                                <select
                                    value={editUser.role}
                                    onChange={(e) => setEditUser({ ...editUser, role: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                >
                                    <option value="user">Collaborator</option>
                                    <option value="employee">Employee</option>
                                    <option value="admin">Super Admin</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                                <div className="text-sm text-gray-600 mb-2">
                                    Current: {getDepartmentName(selectedUserForEdit.department_id, selectedUserForEdit.role)}
                                </div>
                                <select
                                    value={editUser.department_id}
                                    onChange={(e) => setEditUser({ ...editUser, department_id: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    disabled={editUser.role === 'admin'}
                                >
                                    <option value="">
                                        {editUser.role === 'admin' ? 'Admins have no department' : 'No Department'}
                                    </option>
                                    {editUser.role !== 'admin' && departments.map((dept) => (
                                        <option key={dept.id} value={dept.id}>
                                            {dept.name}
                                        </option>
                                    ))}
                                </select>
                                {editUser.role === 'admin' && (
                                    <p className="text-xs text-gray-500 mt-1">
                                        Admin users are not assigned to departments
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={handleEditUserSubmit}
                                disabled={updating === selectedUserForEdit.id}
                                className="flex-1 bg-[#B11016] text-white py-2 rounded-md hover:bg-red-700 transition disabled:opacity-50"
                            >
                                {updating === selectedUserForEdit.id ? 'Updating...' : 'Update User'}
                            </button>
                            <button
                                onClick={() => {
                                    setShowEditUserModal(false);
                                    setSelectedUserForEdit(null);
                                    setEditUser({
                                        first_name: '',
                                        last_name: '',
                                        email: '',
                                        role: '',
                                        contact_number: '',
                                        position: '',
                                        department_id: ''
                                    });
                                }}
                                className="flex-1 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteModal && selectedUserForDelete && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold text-red-700 mb-4">Confirm Delete</h2>
                        <p className="text-gray-600 mb-4">
                            Are you sure you want to delete user <span className="font-medium">{selectedUserForDelete.full_name}</span>?
                        </p>
                        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mb-4">
                            <p className="text-yellow-800 text-sm">
                                <strong>Warning:</strong> This action cannot be undone. The user will be permanently removed from the system.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={handleDeleteUser}
                                className="flex-1 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
                            >
                                Delete User
                            </button>
                            <button
                                onClick={() => {
                                    setShowDeleteModal(false);
                                    setSelectedUserForDelete(null);
                                }}
                                className="flex-1 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Bulk Assignment Modal */}
            {showRoleModal && (
            <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-bold text-red-700 mb-4">Bulk Assignment</h2>
                <p className="text-gray-600 mb-4">
                    Assign role and/or department to {selectedUsers.size} selected user(s)
                </p>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select Role (Optional)</label>
                        <select
                            value={bulkRole}
                            onChange={(e) => setBulkRole(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            <option value="">Don't change role</option>
                            <option value="user">Collaborator</option>
                            <option value="employee">Employee</option>
                            <option value="admin">Super Admin</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select Department (Optional)</label>
                        <select
                            value={bulkDepartment}
                            onChange={(e) => setBulkDepartment(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            <option value="">Don't change department</option>
                            {departments.map((dept) => (
                                <option key={dept.id} value={dept.id}>
                                    {dept.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="flex gap-3 mt-6">
                    <button
                    onClick={handleBulkAssignment}
                    className="flex-1 bg-[#B11016] text-white py-2 rounded-md hover:bg-red-700 transition"
                    >
                    Apply Changes
                    </button>
                    <button
                    onClick={() => {
                        setShowRoleModal(false);
                        setBulkRole('');
                        setBulkDepartment('');
                    }}
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