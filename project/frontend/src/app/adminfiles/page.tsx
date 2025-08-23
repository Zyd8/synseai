"use client";
import { useState, useEffect } from "react";
import Sidebar from "@/components/DashboardSidebar";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useRouter } from "next/navigation";

export default function AdminFiles() {
  const API = process.env.NEXT_PUBLIC_API_URL;
  const [settings, setSettings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchAllSettings = async () => {
      const token = sessionStorage.getItem("access_token");
      try {
        const res = await fetch(`${API}/api/document_setting/get_all`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) throw new Error("Failed to fetch document settings");
        const data = await res.json();

        // Response is already an array of settings
        setSettings(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching document settings:", err);
        setSettings([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllSettings();
  }, [API]);

  const handleFilesClick = (settingId: number) => {
    router.push(`/adminassigndocument?id=${settingId}`); // ✅ pass document_setting id to next page
  };

  return (
    <ProtectedRoute allowedRoles={["admin"]}>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 py-3 sm:py-6 pl-[2%] sm:pl-[3%] pr-[3%] sm:pr-[5%] overflow-x-auto">
          <h1 className="text-2xl font-bold text-red-700">Administrator Files</h1>
          <p className="text-sm text-gray-600 mt-1 border-b-3 border-black pb-2 sm:pb-4 border-red-700">
            Track all the files sent by the companies.
          </p>

          {/* Loading State */}
          {loading ? (
            <p className="mt-6 text-gray-500">Loading files...</p>
          ) : settings.length === 0 ? (
            <p className="mt-6 text-gray-500">No files found.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 mt-6 gap-4">
              {settings.map((file) => (
                <div
                  key={file.id}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => handleFilesClick(file.id)} // ✅ use document_setting.id
                >
                  {/* File Card Image */}
                  <img
                    src="/images/file-card.png"
                    alt="File"
                    className="w-30 h-30 object-contain hover:scale-105 transition-transform"
                  />

                  {/* File Name */}
                  <p className="mt-3 text-sm text-gray-900 font-medium text-center">
                    {file.document_name || `Document ${file.document_id}`}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  );
}
