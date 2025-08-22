'use client';

import { useEffect, useState } from "react";
import { X, Building2, Edit3, Trash2, Save, MoreVertical, Users } from "lucide-react";

interface Department {
  id: number;
  name: string;
  created_at: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
  apiUrl: string;
  onSuccess: () => void;
}

export default function ManageDepartmentsModal({ isOpen, onClose, apiUrl, onSuccess }: Props) {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newName, setNewName] = useState("");
  const [deleteConfirmId, setDeleteConfirmId] = useState<number | null>(null);
  const token = typeof window !== 'undefined' ? sessionStorage.getItem("access_token") : null;

  useEffect(() => {
    if (isOpen) fetchDepartments();
  }, [isOpen]);

  const fetchDepartments = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${apiUrl}/api/department`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setDepartments(data.departments || []);
    } catch (err) {
      console.error("Failed to load departments:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (dept: Department) => {
    setEditingId(dept.id);
    setNewName(dept.name);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setNewName("");
  };

  const handleUpdate = async (id: number) => {
    if (!newName.trim()) return;
    
    try {
      const res = await fetch(`${apiUrl}/api/department/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ name: newName })
      });
      if (res.ok) {
        await fetchDepartments();
        setEditingId(null);
        setNewName("");
        onSuccess();
      } else {
        console.error("Update failed:", await res.json());
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch(`${apiUrl}/api/department/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
      });
      if (res.ok) {
        await fetchDepartments();
        onSuccess();
        setDeleteConfirmId(null);
      } else {
        console.error("Delete failed:", await res.json());
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent, deptId: number) => {
    if (e.key === 'Enter') {
      handleUpdate(deptId);
    }
    if (e.key === 'Escape') {
      cancelEdit();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Blurred backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">Manage Departments</h2>
              <p className="text-sm text-gray-500">
                {departments.length} department{departments.length !== 1 ? 's' : ''} in your organization
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 border-2 border-red-500/30 border-t-red-500 rounded-full animate-spin" />
                <span className="text-gray-500">Loading departments...</span>
              </div>
            </div>
          ) : departments.length === 0 ? (
            <div className="text-center py-12">
              <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg font-medium">No departments found</p>
              <p className="text-gray-400 text-sm">Create your first department to get started</p>
            </div>
          ) : (
            <div className="space-y-3">
              {departments.map((dept) => (
                <div key={dept.id} className="group border border-gray-200 rounded-xl p-4 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 flex-1">
                      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-200">
                        <Building2 className="w-4 h-4 text-gray-600" />
                      </div>
                      
                      {editingId === dept.id ? (
                        <div className="flex-1 flex items-center space-x-3 pr-3">
                          <input
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            onKeyDown={(e) => handleKeyPress(e, dept.id)}
                            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent"
                            placeholder="Department name"
                            autoFocus
                          />
                        </div>
                      ) : (
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900">{dept.name}</h3>
                          <p className="text-xs text-gray-500">
                            Created {new Date(dept.created_at).toLocaleDateString()}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center space-x-2">
                      {editingId === dept.id ? (
                        <>
                          <button
                            onClick={() => handleUpdate(dept.id)}
                            disabled={!newName.trim()}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-green-100 text-green-600 hover:bg-green-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Save changes"
                          >
                            <Save className="w-4 h-4" />
                          </button>
                          <button
                            onClick={cancelEdit}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors duration-200"
                            title="Cancel editing"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEdit(dept)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors duration-200 opacity-0 group-hover:opacity-100"
                            title="Edit department"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setDeleteConfirmId(dept.id)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors duration-200 opacity-0 group-hover:opacity-100"
                            title="Delete department"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
          >
            Close
          </button>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 flex items-center justify-center z-60">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative bg-white rounded-2xl shadow-2xl p-6 mx-4 max-w-sm w-full">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Delete Department</h3>
              <p className="text-gray-500 mb-6">
                Are you sure you want to delete this department? This action cannot be undone.
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={() => setDeleteConfirmId(null)}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(deleteConfirmId)}
                  className="flex-1 px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition-colors duration-200"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}