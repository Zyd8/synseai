'use client';

import { useState } from "react";
import { X, Building2 } from "lucide-react";

interface CreateDepartmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void; 
    apiUrl: string;
}

export default function CreateDepartmentModal({ isOpen, onClose, onSuccess, apiUrl }: CreateDepartmentModalProps) {
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleCreateDepartment = async () => {
        if (!name.trim()) {
            setError("Department name is required.");
            return;
        }

        const token = sessionStorage.getItem("access_token");
        if (!token) {
            setError("Unauthorized: Please log in again.");
            return;
        }

        try {
            setLoading(true);
            setError(null);

            const response = await fetch(`${apiUrl}/api/department`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ name }),
            });

            if (!response.ok) {
                const errData = await response.json();
                setError(errData.error || "Failed to create department.");
                setLoading(false);
                return;
            }

            await response.json();
            setName("");
            onSuccess(); // Refresh data in parent
            onClose();
        } catch (err) {
            setError("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !loading) {
            handleCreateDepartment();
        }
        if (e.key === 'Escape') {
            onClose();
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
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 transform transition-all duration-300 ease-out scale-100 opacity-100">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                            <Building2 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">Create Department</h2>
                            <p className="text-sm text-gray-500">Add a new department to your organization</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200"
                        disabled={loading}
                    >
                        <X className="w-5 h-5 text-gray-400" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    {error && (
                        <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200">
                            <p className="text-red-600 text-sm font-medium">{error}</p>
                        </div>
                    )}

                    <div className="space-y-2">
                        <label htmlFor="department-name" className="block text-sm font-medium text-gray-700">
                            Department Name
                        </label>
                        <input
                            id="department-name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onKeyDown={handleKeyPress}
                            placeholder="e.g., Human Resources, IT, Marketing"
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                            disabled={loading}
                            autoFocus
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end space-x-3 p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
                    <button
                        onClick={onClose}
                        className="px-6 py-2.5 rounded-xl text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={loading}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleCreateDepartment}
                        className="px-6 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                        disabled={loading || !name.trim()}
                    >
                        {loading ? (
                            <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                <span>Creating...</span>
                            </div>
                        ) : (
                            "Create Department"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}