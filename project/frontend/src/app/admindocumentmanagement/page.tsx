"use client";

import Sidebar from "@/components/DashboardSidebar";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaFileAlt, FaFolder, FaBuilding, FaUpload, FaDownload, FaEye, FaEdit, FaTrash } from "react-icons/fa";

interface Document {
    id: number;
    name: string;
    file_url: string;
    type: string;
    description?: string;
    is_bpi: boolean;
    is_assigned: boolean;
    proposal_id?: number;
    created_at: string;
    download_url: string;
    view_url: string;
    department_id?: number | null;
    department_name?: string | null; // frontend only

}

interface Department {
    id: string;
    name: string;
}

interface DocumentSetting {
    id: number;
    document_id: number;
    document_name?: string;
    current_location?: number;
}

export default function AdminDocumentManagement() {
    const API = process.env.NEXT_PUBLIC_API_URL;
    const [documents, setDocuments] = useState<Document[]>([]);
    const [assignedDocuments, setAssignedDocuments] = useState<Document[]>([]);
    const [documentSettings, setDocumentSettings] = useState<DocumentSetting[]>([]);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState<number | null>(null);
    const [selectedDocuments, setSelectedDocuments] = useState<Set<number>>(new Set());
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [showAssignModal, setShowAssignModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [typeFilter, setTypeFilter] = useState<string>('all');
    const [statusFilter, setStatusFilter] = useState<string>('all'); // all, assigned, unassigned
    const [bpiFilter, setBpiFilter] = useState<string>('all');
    const [selectedDocumentForDelete, setSelectedDocumentForDelete] = useState<Document | null>(null);
    const [bulkDepartment, setBulkDepartment] = useState<string>('');
    const router = useRouter();

    const [departments, setDepartments] = useState<Department[]>([]);
    const [departmentFilter, setDepartmentFilter] = useState("all");

    const getDepartmentNameFromSetting = (docId: number) => {
        const setting = documentSettings.find(s => s.document_id === docId);
        if (!setting?.current_location) return "Unassigned";

        const dept = departments.find(d => parseInt(d.id) === setting.current_location);
        return dept ? dept.name : "Unknown Department";
    };

    // Upload form state
    const [uploadForm, setUploadForm] = useState({
        name: '',
        type: 'team',
        description: '',
        is_bpi: false,
        proposal_id: '',
        file: null as File | null
    });

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
    const getDepartmentName = (departmentId?: number) => {
        if (!departmentId) return "N/A";
        const dept = departments.find(d => parseInt(d.id) === departmentId || d.id === String(departmentId));
        return dept ? dept.name : "N/A";
    };

    const getAllDocumentsForDisplay = () => {
        const unassignedDocs = documents.map(doc => ({
            ...doc,
            is_assigned: false,
            assignedDepartment: "Unassigned",
            assignedDepartmentId: null
        }));

        const assignedDocs = assignedDocuments.map(doc => {
            const token = sessionStorage.getItem("access_token");
            const setting = documentSettings.find(s => String(s.document_id) === String(doc.id));
            const currentLocationId = setting ? Number(setting.current_location) : null;

            let deptName = "Unassigned";

            if (currentLocationId) {
                const dept = departments.find(d => Number(d.id) === currentLocationId);
                if (dept) {
                    deptName = dept.name;
                } else {
                    // fallback fetch if department is not in the local list
                    fetch(`${API}/api/department/${currentLocationId}`, {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                        .then(res => res.ok ? res.json() : null)
                        .then(data => {
                            if (data) {
                                setDepartments(prev => [...prev, data]);
                            }
                        });
                }
            }


            return {
                ...doc,
                is_assigned: true,
                assignedDepartment: deptName,
                assignedDepartmentId: currentLocationId || null
            };
        });

        return [...unassignedDocs, ...assignedDocs];
    };


    // Filter documents based on search and filters
    const allDocuments = getAllDocumentsForDisplay();

    const filteredDocuments = allDocuments.filter((doc) => {
        const matchesSearch =
            (doc.name || "").toLowerCase().includes((searchTerm || "").toLowerCase()) ||
            (doc.description || "").toLowerCase().includes((searchTerm || "").toLowerCase());

        const matchesType =
            typeFilter === "all" || doc.type === typeFilter;

        const matchesStatus =
            statusFilter === "all" ||
            (statusFilter === "assigned" && doc.is_assigned) ||
            (statusFilter === "unassigned" && !doc.is_assigned);

        const matchesDepartment =
            departmentFilter === "all" ||
            (doc.assignedDepartmentId && String(doc.assignedDepartmentId) === String(departmentFilter));

        return matchesSearch && matchesType && matchesStatus && matchesDepartment;
    });

    console.log("Filtered Documents: ", filteredDocuments)

    const assignedCount = assignedDocuments.length;
    console.log("Assigned Count: ", assignedCount)
    const unassignedCount = documents.length;
    console.log("Unassigned Count: ", unassignedCount)
    const totalDocs = assignedCount + unassignedCount

    // Handle document upload
    const handleUploadDocument = async () => {
        const token = sessionStorage.getItem("access_token");
        if (!uploadForm.name || !uploadForm.type || !uploadForm.file) {
            alert('Please fill in all required fields');
            return;
        }


        const formData = new FormData();
        formData.append('name', uploadForm.name);
        formData.append('type', uploadForm.type);
        formData.append('description', uploadForm.description);
        formData.append('is_bpi', uploadForm.is_bpi.toString());
        formData.append('proposal_id', uploadForm.proposal_id || '');
        formData.append('file', uploadForm.file);

        try {
            const res = await fetch(`${API}/api/document/upload_file`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Failed to upload document");
            }

            const data = await res.json();

            // Add the new document to the list
            const newDoc: Document = {
                id: data.file.id,
                name: data.file.name,
                file_url: data.file.file,
                type: data.file.type,
                description: data.file.description,
                is_bpi: data.file.is_bpi,
                is_assigned: data.file.is_assigned || false,
                proposal_id: data.file.proposal_id,
                created_at: data.file.created_at || new Date().toISOString(),
                download_url: `/api/document/download_file/${data.file.id}`,
                view_url: `/api/document/view_file/${data.file.id}`
            };

            setDocuments(prev => [newDoc, ...prev]);
            setUploadForm({
                name: '',
                type: 'team',
                description: '',
                is_bpi: false,
                proposal_id: '',
                file: null
            });
            setShowUploadModal(false);
            alert('Document uploaded successfully!');

        } catch (err) {
            console.error("Error uploading document:", err);
            alert(`Error uploading document: ${err instanceof Error ? err.message : 'Unknown error'}`);
        }
    };

    // Handle bulk department assignment
    const handleBulkDepartmentAssignment = async () => {
        if (selectedDocuments.size === 0 || !bulkDepartment) {
            alert("Please select documents and a department");
            return;
        }

        const token = sessionStorage.getItem("access_token");

        try {
            const promises = Array.from(selectedDocuments).map(async (documentId) => {
                const response = await fetch(`${API}/api/document_setting/upload_document_setting`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        document_id: documentId,
                        iteration: [parseInt(bulkDepartment)]
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Failed to assign document ${documentId}`);
                }

                return response.json();
            });

            await Promise.all(promises);

            // Refresh the data
            const settingsRes = await fetch(`${API}/api/document_setting/get_all`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            if (settingsRes.ok) {
                const settingsData = await settingsRes.json();
                setDocumentSettings(settingsData || []);

                // Remove assigned documents from unassigned list and add to assigned list
                const assignedIds = new Set(Array.from(selectedDocuments));
                const newlyAssignedDocs = documents.filter(doc => assignedIds.has(doc.id));
                setDocuments(prev => prev.filter(doc => !assignedIds.has(doc.id)));
                setAssignedDocuments(prev => [...prev, ...newlyAssignedDocs]);

            }

            setSelectedDocuments(new Set());
            setBulkDepartment("");
            setShowAssignModal(false);
            alert("Documents assigned to department successfully!");
        } catch (err) {
            console.error("Error in bulk assignment:", err);
            alert(
                `Error in bulk assignment: ${err instanceof Error ? err.message : "Unknown error"
                }`
            );
        }
    };

    // Handle delete document
    const handleDeleteDocument = async () => {
        if (!selectedDocumentForDelete) return;

        const token = sessionStorage.getItem("access_token");
        try {
            const res = await fetch(`${API}/api/document/${selectedDocumentForDelete.id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Failed to delete document");
            }

            setDocuments((prevDocs) => prevDocs.filter((doc) => doc.id !== selectedDocumentForDelete.id));
            setAssignedDocuments((prevDocs) => prevDocs.filter((doc) => doc.id !== selectedDocumentForDelete.id));
            // Also remove from document settings
            setDocumentSettings(prevSettings => prevSettings.filter(setting => setting.document_id !== selectedDocumentForDelete.id));
            alert("Document deleted successfully!");

        } catch (err) {
            console.error("Error deleting document:", err);
            alert(
                `Error deleting document: ${err instanceof Error ? err.message : "Unknown error"
                }`
            );
        } finally {
            setShowDeleteModal(false);
            setSelectedDocumentForDelete(null);
        }
    };

    // Toggle document selection
    const toggleDocumentSelection = (documentId: number) => {
        const newSelection = new Set(selectedDocuments);
        if (newSelection.has(documentId)) {
            newSelection.delete(documentId);
        } else {
            newSelection.add(documentId);
        }
        setSelectedDocuments(newSelection);
    };

    // Select all filtered documents
    const selectAllDocuments = () => {
        const allFilteredIds = new Set(filteredDocuments.map(doc => doc.id));
        setSelectedDocuments(allFilteredIds);
    };

    // Clear all selections
    const clearSelection = () => {
        setSelectedDocuments(new Set());
    };

    // Open delete modal
    const openDeleteModal = (document: any) => {
        setSelectedDocumentForDelete(document);
        setShowDeleteModal(true);
    };

    // Get type color
    const getTypeColor = (type: string) => {
        switch ((type || "").toLowerCase()) {
            case "team":
                return "bg-blue-100 text-blue-800";
            case "proposal":
                return "bg-green-100 text-green-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

    // Get status color
    const getStatusColor = (is_assigned: boolean) => {
        return is_assigned ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800";
    };

    useEffect(() => {
        const fetchData = async () => {
            const token = sessionStorage.getItem("access_token");
            if (!token) {
                console.error("No access token found");
                setLoading(false);
                return;
            }

            if (!API) {
                console.error("API URL is not defined");
                setLoading(false);
                return;
            }

            try {
                // Fetch unassigned documents
                const unassignedRes = await fetch(`${API}/api/document/get_unassigned`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                let unassignedDocs: Document[] = [];
                if (unassignedRes.ok) {
                    unassignedDocs = await unassignedRes.json();
                    // Add is_assigned = false to unassigned docs
                    unassignedDocs = unassignedDocs.map(doc => ({ ...doc, is_assigned: false }));
                    console.log("Unassigned documents fetched:", unassignedDocs.length);
                } else {
                    console.error("Unassigned fetch failed:", unassignedRes.status);
                }

                // Fetch assigned documents
                console.log("Fetching assigned documents:", `${API}/api/document/get_assigned`);
                const assignedRes = await fetch(`${API}/api/document/get_assigned`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                let assignedDocs: Document[] = [];
                if (assignedRes.ok) {
                    assignedDocs = await assignedRes.json();
                    // Add is_assigned = true to assigned docs
                    assignedDocs = assignedDocs.map(doc => ({ ...doc, is_assigned: true }));
                    console.log("Assigned documents fetched:", assignedDocs.length);
                } else {
                    console.error("Assigned fetch failed:", assignedRes.status);
                }

                // Combine assigned and unassigned docs into one list if needed
                setDocuments(unassignedDocs);
                setAssignedDocuments(assignedDocs);

                // Fetch document settings (still needed for UI)
                console.log("Fetching document settings:", `${API}/api/document_setting/get_all`);
                const settingsRes = await fetch(`${API}/api/document_setting/get_all`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (settingsRes.ok) {
                    const settingsData = await settingsRes.json();
                    setDocumentSettings(settingsData || []);
                    console.log("Document settings fetched:", settingsData.length);
                } else {
                    console.error("Document settings fetch failed:", settingsRes.status);
                }

                // Fetch departments
                console.log("Fetching departments:", `${API}/api/department`);
                const deptRes = await fetch(`${API}/api/department`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (deptRes.ok) {
                    const data = await deptRes.json();
                    setDepartments(data.departments || []);
                } else {
                    const errorText = await deptRes.text();
                    console.error("Department fetch error:", errorText);
                }
            } catch (err) {
                console.error("Error fetching data:", err);
                setDocuments([]);
                setAssignedDocuments([]);
                setDocumentSettings([]);
                setDepartments([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [API]);



    return (
        <ProtectedRoute allowedRoles={["admin"]}>
            <div className="flex min-h-screen overflow-x-hidden">
                {/* Sidebar */}
                <Sidebar />

                {/* Main content */}
                <div className="flex-1 py-3 sm:py-6 pl-[2%] sm:pl-[3%] pr-[3%] sm:pr-[5%] overflow-x-auto">
                    <h1 className="text-2xl font-bold text-red-700">Document Management</h1>
                    <p className="text-sm text-gray-600 mt-1 border-b-3 border-black pb-2 sm:pb-4 border-red-700">
                        Manage documents, assign to departments, and control document access across the system.
                    </p>

                    {/* Summary Stats */}
                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-lg border border-gray-500 text-center drop-shadow-md">
                            <div className="text-2xl font-bold text-blue-600">
                                {totalDocs}
                            </div>
                            <div className="text-sm text-gray-600">Total Documents</div>
                            <FaFileAlt className="text-3xl text-blue-600 mx-auto mt-2" />
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-500 text-center drop-shadow-md">
                            <div className="text-2xl font-bold text-green-600">
                                {assignedCount}
                            </div>
                            <div className="text-sm text-gray-600">Assigned</div>
                            <FaBuilding className="text-3xl text-green-600 mx-auto mt-2" />
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-500 text-center drop-shadow-md">
                            <div className="text-2xl font-bold text-yellow-500">
                                {documents.filter(d => !d.is_assigned).length}
                            </div>
                            <div className="text-sm text-gray-600">Unassigned</div>
                            <FaFolder className="text-3xl text-yellow-500 mx-auto mt-2" />
                        </div>
                    </div>

                    {/* Controls Section */}
                    <div className="bg-white rounded-lg border border-gray-500 p-5 mt-5 mb-5 drop-shadow-md">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
                            {/* Search */}
                            <div>
                                <label className="block text-sm font-medium text-[#B11016] mb-2">Search Documents</label>
                                <input
                                    type="text"
                                    placeholder="Search by name or description..."
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>

                            {/* Type Filter */}
                            <div>
                                <label className="block text-sm font-medium text-[#B11016] mb-2">Filter by Type</label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    value={typeFilter}
                                    onChange={(e) => setTypeFilter(e.target.value)}
                                >
                                    <option value="all">All Types</option>
                                    <option value="team">Team</option>
                                    <option value="proposal">Proposal</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>

                            {/* Status Filter */}
                            <div>
                                <label className="block text-sm font-medium text-[#B11016] mb-2">Filter by Status</label>
                                <select
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                >
                                    <option value="all">All Status</option>
                                    <option value="assigned">Assigned</option>
                                    <option value="unassigned">Unassigned</option>
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
                                    onClick={() => setShowUploadModal(true)}
                                    className="w-full px-4 mt-0.5 py-2.5 bg-[#B11016] border border-2 text-white rounded-md hover:bg-white hover:border-[#B11016] hover:text-[#B11016] transition text-sm"
                                >
                                    Upload Document
                                </button>
                            </div>
                        </div>

                        {/* Bulk Operations - Only show for unassigned documents */}
                        {selectedDocuments.size > 0 && (
                            <div className="border-t pt-4">
                                <div className="flex items-center gap-4 flex-wrap">
                                    <span className="text-sm font-medium text-gray-700">
                                        {selectedDocuments.size} document(s) selected
                                    </span>
                                    {/* Only show assign button if there are unassigned documents selected */}
                                    {Array.from(selectedDocuments).some(id =>
                                        documents.some(doc => doc.id === id)
                                    ) && (
                                            <button
                                                onClick={() => setShowAssignModal(true)}
                                                className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                                            >
                                                Assign to Department
                                            </button>
                                        )}
                                    <button
                                        onClick={selectAllDocuments}
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

                    {/* Documents Table */}
                    <div className="border border-gray-500 rounded-lg p-5 bg-white drop-shadow-xl">
                        <div className="overflow-x-auto">
                            {loading ? (
                                <p className="text-center text-gray-500">Loading documents...</p>
                            ) : filteredDocuments.length === 0 ? (
                                <p className="text-center text-gray-500">No documents found.</p>
                            ) : (
                                <table className="w-full text-sm rounded-lg overflow-hidden min-w-[1200px]">
                                    <thead>
                                        <tr>
                                            <th className="p-3 text-left text-red-700 whitespace-nowrap">
                                                <input
                                                    type="checkbox"
                                                    onChange={selectedDocuments.size === filteredDocuments.length ? clearSelection : selectAllDocuments}
                                                    checked={selectedDocuments.size === filteredDocuments.length && filteredDocuments.length > 0}
                                                    className="rounded border-gray-300"
                                                />
                                            </th>
                                            <th className="p-3 text-left text-red-700 whitespace-nowrap">ID</th>
                                            <th className="p-3 text-left text-red-700 whitespace-nowrap">Name</th>
                                            <th className="p-3 text-left text-red-700 whitespace-nowrap">Type</th>
                                            <th className="p-3 text-left text-red-700 whitespace-nowrap">Description</th>

                                            <th className="p-3 text-left text-red-700 whitespace-nowrap">Status</th>
                                            <th className="p-3 text-left text-red-700 whitespace-nowrap">Department</th>
                                            <th className="p-3 text-left text-red-700 whitespace-nowrap">Created</th>
                                            <th className="p-3 text-center text-red-700 whitespace-nowrap">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredDocuments.map((document, i) => (
                                            <tr key={`${document.id}-${document.is_assigned ? "assigned" : "unassigned"}`} className="border-t hover:bg-gray-50 transition-colors">
                                                <td className="p-3">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedDocuments.has(document.id)}
                                                        onChange={() => toggleDocumentSelection(document.id)}
                                                        className="rounded border-gray-300"
                                                    />
                                                </td>
                                                <td className="p-3 whitespace-nowrap">{document.id}</td>
                                                <td className="p-3 font-medium">{document.name}</td>
                                                <td className="p-3">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(document.type)}`}>
                                                        {document.type || "N/A"}
                                                    </span>
                                                </td>
                                                <td className="p-3 max-w-[200px] truncate">{document.description || "N/A"}</td>

                                                <td className="p-3">
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(document.is_assigned)}`}>
                                                        {document.is_assigned ? "Assigned" : "Unassigned"}
                                                    </span>
                                                </td>
                                                {/* Assigned Department */}
                                                <td className="p-3">{document.assignedDepartment}</td>
                                                <td className="p-3 whitespace-nowrap">{formatDate(document.created_at)}</td>
                                                <td className="p-3 text-center">
                                                    <div className="flex items-center justify-center gap-2">


                                                        <a
                                                            href={`${API}${document.download_url}`}
                                                            className="text-green-600 hover:text-green-800 text-sm"
                                                            title="Download"
                                                        >
                                                            <FaDownload />
                                                        </a>
                                                        <span className="text-gray-400">|</span>
                                                        <button
                                                            onClick={() => openDeleteModal(document)}
                                                            className="text-red-600 hover:text-red-800 text-sm"
                                                            title="Delete"
                                                        >
                                                            <FaTrash />
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

            {/* Upload Document Modal */}
            {showUploadModal && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                        <h2 className="text-xl font-bold text-red-700 mb-4">Upload New Document</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Document Name *</label>
                                <input
                                    type="text"
                                    value={uploadForm.name}
                                    onChange={(e) => setUploadForm({ ...uploadForm, name: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Enter document name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Type *</label>
                                <select
                                    value={uploadForm.type}
                                    onChange={(e) => setUploadForm({ ...uploadForm, type: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                >
                                    <option value="team">Team</option>
                                    <option value="proposal">Proposal</option>
                                    <option value="others">Others</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea
                                    value={uploadForm.description}
                                    onChange={(e) => setUploadForm({ ...uploadForm, description: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Enter description"
                                    rows={3}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Proposal ID</label>
                                <input
                                    type="text"
                                    value={uploadForm.proposal_id}
                                    onChange={(e) => setUploadForm({ ...uploadForm, proposal_id: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                    placeholder="Enter proposal ID (optional)"
                                />
                            </div>
                            <div>
                                <label className="flex items-center text-sm font-medium text-gray-700">
                                    <input
                                        type="checkbox"
                                        checked={uploadForm.is_bpi}
                                        onChange={(e) => setUploadForm({ ...uploadForm, is_bpi: e.target.checked })}
                                        className="mr-2 rounded border-gray-300"
                                    />
                                    BPI Document
                                </label>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">File *</label>
                                <input
                                    type="file"
                                    onChange={(e) => setUploadForm({ ...uploadForm, file: e.target.files?.[0] || null })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={handleUploadDocument}
                                className="flex-1 bg-[#B11016] text-white py-2 rounded-md hover:bg-red-700 transition"
                            >
                                Upload Document
                            </button>
                            <button
                                onClick={() => {
                                    setShowUploadModal(false);
                                    setUploadForm({
                                        name: '',
                                        type: 'team',
                                        description: '',
                                        is_bpi: false,
                                        proposal_id: '',
                                        file: null
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

            {/* Assign to Department Modal */}
            {showAssignModal && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold text-red-700 mb-4">Assign to Department</h2>
                        <p className="text-gray-600 mb-4">
                            Assign {selectedDocuments.size} selected document(s) to a department
                        </p>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Select Department</label>
                            <select
                                value={bulkDepartment}
                                onChange={(e) => setBulkDepartment(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                <option value="">Choose a department...</option>
                                {departments.map((dept) => (
                                    <option key={dept.id} value={dept.id}>
                                        {dept.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={handleBulkDepartmentAssignment}
                                className="flex-1 bg-[#B11016] text-white py-2 rounded-md hover:bg-red-700 transition"
                            >
                                Assign Documents
                            </button>
                            <button
                                onClick={() => {
                                    setShowAssignModal(false);
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

            {/* Delete Confirmation Modal */}
            {showDeleteModal && selectedDocumentForDelete && (
                <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-xl font-bold text-red-700 mb-4">Confirm Delete</h2>
                        <p className="text-gray-600 mb-4">
                            Are you sure you want to delete document <span className="font-medium">"{selectedDocumentForDelete.name}"</span>?
                        </p>
                        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 mb-4">
                            <p className="text-yellow-800 text-sm">
                                <strong>Warning:</strong> This action cannot be undone. The document file will be permanently removed from the system.
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={handleDeleteDocument}
                                className="flex-1 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
                            >
                                Delete Document
                            </button>
                            <button
                                onClick={() => {
                                    setShowDeleteModal(false);
                                    setSelectedDocumentForDelete(null);
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