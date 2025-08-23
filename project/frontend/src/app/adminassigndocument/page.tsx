"use client";

import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";

type Doc = {
  id: number;
  name: string;
  type: string;
  description: string | null;
  is_bpi: boolean;
  proposal_id: number | null;
  created_at?: string;
  view_url?: string;
  download_url?: string;
};

type Department = {
  id: number;
  name: string;
  description?: string | null;
};

type Preset = {
  id: number;
  name: string;
  // expecting backend .to_dict() includes this as an array of ids in order
  department_queues: number[];
};

const AdminAssignDocument = () => {
  const router = useRouter();
  const API = process.env.NEXT_PUBLIC_API_URL;

  // UI state
  const [activeTab, setActiveTab] = useState<"view" | "upload">("view");
  const [showFilesModal, setShowFilesModal] = useState(false);
  const [showDeptPicker, setShowDeptPicker] = useState(false);
  const [savingPreset, setSavingPreset] = useState(false);

  // Data state
  const [allDocs, setAllDocs] = useState<Doc[]>([]);
  const [selectedDoc, setSelectedDoc] = useState<Doc | null>(null);

  const [departments, setDepartments] = useState<Department[]>([]);
  const [queue, setQueue] = useState<Department[]>([]);

  const [presets, setPresets] = useState<Preset[]>([]);
  const [selectedPresetId, setSelectedPresetId] = useState<number | "">("");

  const [loadingDocs, setLoadingDocs] = useState(false);
  const [loadingDepts, setLoadingDepts] = useState(false);
  const [loadingPresets, setLoadingPresets] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [showUploadModal, setShowUploadModal] = useState(false);

const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileDescription, setFileDescription] = useState("");
  const searchParams = useSearchParams();
const proposalId = searchParams?.get("proposalId");
  const handleFileSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!uploadedFile) {
    alert("Please select a file to upload.");
    return;
  }

  try {
    const token = sessionStorage.getItem("access_token");
    const role = sessionStorage.getItem("role");
    
    console.log("Token:", token ? "Present" : "Missing");
    console.log("Role:", role);
    console.log("API URL:", API);
    console.log("File:", uploadedFile);
    
    if (!token) {
      alert("You are not authenticated.");
      return;
    }

    const formData = new FormData();
    formData.append("file", uploadedFile);
    formData.append("name", fileName || uploadedFile.name);
    formData.append("description", fileDescription || "");
    formData.append("type", "Proposal");
    formData.append("proposal_id", ""); // Send empty string for proposal_id
    formData.append("is_bpi", role === "employee" ? "true" : "false");

    // Log FormData contents
    console.log("FormData contents:");
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    console.log("Making request to:", `${API}/api/document/upload_file`);

    const response = await fetch(`${API}/api/document/upload_file`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    console.log("Response status:", response.status);
    console.log("Response ok:", response.ok);

    if (!response.ok) {
      const error = await response.json();
      console.log("Error response:", error);
      alert(`Upload failed: ${error.error || JSON.stringify(error)}`);
      return;
    }

    const uploadedDoc = await response.json();
    console.log("Upload successful:", uploadedDoc);

    // Create the document object from the response
    const newDoc: Doc = {
      id: uploadedDoc.file.id,
      name: uploadedDoc.file.name,
      type: uploadedDoc.file.type,
      description: uploadedDoc.file.description,
      is_bpi: uploadedDoc.file.is_bpi,
      proposal_id: uploadedDoc.file.proposal_id,
      created_at: uploadedDoc.file.created_at,
      view_url: `/api/document/view_file/${uploadedDoc.file.id}`,
      download_url: `/api/document/download_file/${uploadedDoc.file.id}`
    };

    // Automatically select the uploaded document
    setSelectedDoc(newDoc);

    // Refresh the documents list after successful upload
    await fetchAllDocs();

    // Clear form
    setUploadedFile(null);
    setFileName("");
    setFileDescription("");
    setShowUploadModal(false);

    alert("File uploaded successfully!");

  } catch (err) {
    console.error("Detailed error:", err);
    alert(`Upload failed: ${err instanceof Error ? err.message : "Unknown error"}`);
  }
};

const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const token = useMemo(() => (typeof window !== "undefined" ? sessionStorage.getItem("access_token") : null), []);

  // Fetch departments & presets early
  useEffect(() => {
    if (!token) return;

    const fetchDepartments = async () => {
      setLoadingDepts(true);
      try {
        const res = await fetch(`${API}/api/department`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || "Failed to fetch departments");
        setDepartments(data.departments || []);
      } catch (e: any) {
        setError(e.message || "Error fetching departments");
      } finally {
        setLoadingDepts(false);
      }
    };

    const fetchPresets = async () => {
      setLoadingPresets(true);
      try {
        const res = await fetch(`${API}/api/department_preset`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || "Failed to fetch presets");
        setPresets(data.department_presets || []);
      } catch (e: any) {
        setError(e.message || "Error fetching presets");
      } finally {
        setLoadingPresets(false);
      }
    };

    fetchDepartments();
    fetchPresets();
  }, [API, token]);

  // Open files modal when View Files tab is chosen
  useEffect(() => {
    if (activeTab === "view") {
      setShowFilesModal(true);
    }
  }, [activeTab]);

  const fetchAllDocs = async () => {
  if (!token) return;
  setLoadingDocs(true);
  try {
    const res = await fetch(`${API}/api/document/get_unassigned`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data?.error || data?.message || "Failed to fetch documents");

    if (!Array.isArray(data)) {
      setAllDocs([]);
      return;
    }

    // For each unassigned doc, fetch its full details
    const detailedDocs: Doc[] = await Promise.all(
      data.map(async (doc: { id: number; name: string; file: string }) => {
        try {
          const detailRes = await fetch(`${API}/api/document/${doc.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
          const detailData = await detailRes.json();
          if (!detailRes.ok) throw new Error(detailData?.error || "Failed to fetch doc details");

          return detailData as Doc;
        } catch (err) {
          console.error("Error fetching details for doc", doc.id, err);
          // fallback to minimal data
          return {
            id: doc.id,
            name: doc.name,
            type: "Team",
            description: null,
            created_at: "",
            is_bpi: true,
            proposal_id: null,
          };
        }
      })
    );

    setAllDocs(detailedDocs);
  } catch (e: any) {
    setError(e.message || "Error fetching documents");
  } finally {
    setLoadingDocs(false);
  }
};

  // When files modal is shown, fetch docs
  useEffect(() => {
    if (showFilesModal) fetchAllDocs();
  }, [showFilesModal]);

  const deptById = (id: number) => departments.find((d) => d.id === id);

  // Handle preset selection (populate queue)
  const handleSelectPreset = (idStr: string) => {
    if (!idStr) {
      setSelectedPresetId("");
      return;
    }
    const id = Number(idStr);
    setSelectedPresetId(id);
    const p = presets.find((x) => x.id === id);
    if (p && Array.isArray(p.department_queues)) {
      // Map ids to department objects; ignore ids we don't know
      const mapped = p.department_queues
        .map((deptId) => deptById(deptId))
        .filter(Boolean) as Department[];
      setQueue(mapped);
    }
  };

  // Add department into queue
  const addDepartmentToQueue = (dept: Department) => {
    setQueue((prev) => [...prev, dept]);
    setShowDeptPicker(false);
  };

  // Remove / reorder handlers
  const removeFromQueue = (index: number) => {
    setQueue((prev) => prev.filter((_, i) => i !== index));
  };
  const moveUp = (index: number) => {
    if (index === 0) return;
    setQueue((prev) => {
      const copy = [...prev];
      [copy[index - 1], copy[index]] = [copy[index], copy[index - 1]];
      return copy;
    });
  };
  const moveDown = (index: number) => {
    setQueue((prev) => {
      if (index >= prev.length - 1) return prev;
      const copy = [...prev];
      [copy[index + 1], copy[index]] = [copy[index], copy[index + 1]];
      return copy;
    });
  };

  // Save as preset
  const handleSavePreset = async () => {
    if (!token) return;
    if (queue.length === 0) {
      alert("Add at least one department to save a preset.");
      return;
    }
    const name = prompt("Preset name:");
    if (!name) return;

    setSavingPreset(true);
    try {
      const res = await fetch(`${API}/api/department_preset`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          department_queues: queue.map((d) => d.id),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to save preset");
      // refresh presets
      setPresets((prev) => [...prev, data.department_preset]);
      setSelectedPresetId(data.department_preset?.id ?? "");
      alert("Preset saved.");
    } catch (e: any) {
      alert(e.message || "Error saving preset");
    } finally {
      setSavingPreset(false);
    }
  };

// Fixed handleAssignDocument function
const handleAssignDocument = async () => {
  if (!selectedDoc) {
    alert("Please select a document first.");
    return;
  }
  if (queue.length === 0) {
    alert("Please add at least one department to set the route.");
    return;
  }

  const payload = {
    document_id: selectedDoc.id,
    iteration: queue.map((d) => d.id), // must be a list of integers
  };

  console.log("=== ASSIGN DOCUMENT DEBUG ===");
  console.log("Payload:", payload);
  console.log("API URL:", `${API}/api/document_setting/upload_document_setting`);

  try {
    const res = await fetch(
      `${API}/api/document_setting/upload_document_setting`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      }
    );

    console.log("Response status:", res.status);
    console.log("Response ok:", res.ok);

    if (!res.ok) {
      const errorData = await res.json();
      console.log("Error response:", errorData);
      throw new Error(errorData.error || "Failed to assign document");
    }

    const data = await res.json();
    console.log("Success response:", data);
    console.log("Full response structure:", JSON.stringify(data, null, 2));
    console.log("Response data type:", typeof data);
    console.log("Is data an array?", Array.isArray(data));
    console.log("Data keys:", Object.keys(data || {}));
    
    // Based on your backend code, it returns new_setting.to_dict() directly
    // So the ID should be directly in data.id
    const documentSettingId = 
      data.id ||                      // Direct ID from to_dict() - this should work
      data.document_setting_id ||     // Just in case
      data.document_setting?.id ||    // Nested object fallback
      data.setting_id ||              // Alternative naming
      data.documentSettingId;         // CamelCase variant
    
    console.log("Extracted document_setting_id:", documentSettingId);
    
    if (documentSettingId) {
      console.log("✅ Successfully extracted ID, navigating...");
      
      // Clear any previous state
      setSelectedDoc(null);
      setQueue([]);
      setSelectedPresetId("");
      
      // Navigate to filespusher with the document_setting ID
      const navigationUrl = `/filespusher?id=${documentSettingId}`;
      console.log("Navigating to:", navigationUrl);
      
      // Show success message first
      alert("✅ Document successfully assigned! Redirecting to Files Pusher...");
      
      // Small delay to ensure alert is seen, then navigate
      setTimeout(() => {
        router.push(navigationUrl);
      }, 100);
      
    } else {
      console.error("❌ No document_setting ID found in response");
      console.log("Available response keys:", Object.keys(data || {}));
      console.log("Response data structure:", data);
      console.log("Typeof data:", typeof data);
      console.log("Is array:", Array.isArray(data));
      
      // Try to extract ANY id-like field for debugging
      const possibleIds = Object.keys(data || {}).filter(key => 
        key.toLowerCase().includes('id')
      );
      console.log("Fields containing 'id':", possibleIds);
      
      // Still show success but explain the navigation issue
      alert(`✅ Document successfully assigned! However, unable to navigate to Files Pusher automatically. 
      
Debug info: 
- Response keys: ${Object.keys(data || {}).join(', ')}
- ID fields found: ${possibleIds.join(', ')}
- Please check the browser console for full response details.`);
      
      // Optionally, you could still try to navigate to a general page
      // router.push("/bpidashboard");
    }
    
  } catch (error) {
    console.error("❌ Error assigning document:", error);

  }
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
            Assign Document
          </h1>
          <p className="text-sm sm:text-md text-black mb-4 sm:mb-6 px-4">
            Push the files to the departments.
          </p>
          <div className="mx-2 border-b-[3px] border-[#B11016]"></div>
        </div>
      </div>

      {/* Top nav tabs + Preset selector */}
      <div className="w-full flex items-center justify-between gap-4">
        <div className="flex gap-6">
          <button
            className={`p-2 px-6 text-sm sm:text-base rounded-md ${
              activeTab === "view" ? "bg-[#B11016] text-white font-semibold" : "border-2 border-[#B11016] text-[#B11016]"
            }`}
            onClick={() => setActiveTab("view")}
          >
            VIEW FILES
          </button>
          <button
          className={`p-2 px-6 text-sm sm:text-base rounded-md ${
            activeTab === "upload"
              ? "bg-[#B11016] text-white font-semibold"
              : "border-2 border-[#B11016] text-[#B11016]"
          }`}
          onClick={() => {
            setActiveTab("upload");
            setShowUploadModal(true); // ✅ open modal
          }}
        >
          UPLOAD
        </button>

        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-700 mr-1">CHOOSE A PRESET</label>
          <select
            className="border rounded-md px-3 py-2 text-sm outline-none"
            value={selectedPresetId}
            onChange={(e) => handleSelectPreset(e.target.value)}
            disabled={loadingPresets}
          >
            <option value="">Select…</option>
            {presets.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Body */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* LEFT: File card + details */}
<div className="md:col-span-1 bg-white rounded-2xl shadow-md p-6">
  {selectedDoc ? (
    <>
      {/* File Card Header */}
      <div className="flex items-center gap-4">
        <img
          src="/images/file-card.png"
          alt="File Icon"
          className="w-34 h-36 object-contain"
        />
        <div>
          <h3 className="font-semibold text-xl text-black">{selectedDoc.name}</h3>
          <p className="text-sm text-gray-500">
            Type: {selectedDoc.type || "—"}
          </p>
        </div>
      </div>

      {/* File Details */}
      <div className="mt-5 text-md space-y-2">
        <p className="text-black font-medium border-b pb-2">File Details</p>
        <p className="text-gray-600">
          <span className="font-semibold text-black">Description:</span>{" "}
          {selectedDoc.description || "No description."}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold text-black">Date Created:</span>{" "}
          {selectedDoc.created_at
            ? new Date(selectedDoc.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            : "—"}
        </p>

        
      </div>
    </>
  ) : (
    <div className="text-center py-12">
      <img
        src="/images/file-card.png"
        alt="No File"
        className="w-14 h-16 mx-auto object-contain"
      />
      <p className="mt-3 text-gray-600 text-sm">
        No file selected. Click <span className="font-medium">“VIEW FILES”</span>.
      </p>
    </div>
  )}
</div>


        {/* RIGHT: Departments assigned frame */}
        <div className="md:col-span-2 bg-white rounded-xl shadow p-5">
          <p className="font-semibold text-gray-800">DEPARTMENTS ASSIGNED</p>
          <div className="mt-3 border-t" />

          {/* Queue items */}
          <div className="mt-4 space-y-3">
            {queue.map((dept, idx) => (
              <div
                key={`${dept.id}-${idx}`}
                className="flex items-center justify-between bg-gray-200 rounded-md px-4 py-3"
              >
                <span className="font-semibold text-sm tracking-wide">
                  {idx + 1}. {dept.name}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => moveUp(idx)}
                    className="text-xs border rounded px-2 py-1 hover:bg-gray-100"
                    title="Move up"
                  >
                    ↑
                  </button>
                  <button
                    onClick={() => moveDown(idx)}
                    className="text-xs border rounded px-2 py-1 hover:bg-gray-100"
                    title="Move down"
                  >
                    ↓
                  </button>
                  <button
                    onClick={() => removeFromQueue(idx)}
                    className="text-xs border rounded px-2 py-1 hover:bg-gray-100"
                    title="Remove"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}

            {/* Add button */}
            <button
              onClick={() => setShowDeptPicker((s) => !s)}
              className="w-full border rounded-md py-3 text-sm hover:bg-gray-50"
              disabled={loadingDepts}
            >
              +
            </button>

            {/* Department picker dropdown list */}
            {showDeptPicker && (
              <div className="border rounded-lg shadow bg-white max-h-64 overflow-auto">
                {loadingDepts ? (
                  <p className="p-3 text-sm text-gray-600">Loading departments…</p>
                ) : departments.length === 0 ? (
                  <p className="p-3 text-sm text-gray-600">No departments found.</p>
                ) : (
                  departments.map((d) => (
                    <button
                      key={d.id}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                      onClick={() => addDepartmentToQueue(d)}
                    >
                      {d.name}
                    </button>
                  ))
                )}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleSavePreset}
              className="w-full sm:w-auto bg-gray-600 hover:bg-gray-700 text-white rounded-md px-5 py-3"
              disabled={savingPreset}
            >
              {savingPreset ? "Saving…" : "SAVE AS PRESET"}
            </button>
            <button
              onClick={handleAssignDocument}
              className="w-full sm:w-auto bg-[#B11016] hover:bg-[#8f0e12] text-white rounded-md px-5 py-3"
            >
              ASSIGN DOCUMENT
            </button>
          </div>
        </div>
      </div>

      {/* Upload modal */}
{showUploadModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div
      className="absolute inset-0 bg-black/30"
      onClick={() => setShowUploadModal(false)}
    />
    <div className="relative bg-white rounded-xl shadow-xl w-[95%] max-w-lg p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-[#B11016]">Upload File</h3>
        <button
          className="text-gray-600 hover:text-black"
          onClick={() => setShowUploadModal(false)}
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleFileSubmit} className="space-y-4">

                  <div className="w-full text-red-700 text-base font-normal mb-1">
                    FILE NAME
                  </div>
                  {/* FILE NAME INPUT */}
                  <div className="w-full relative group mb-5">
                    <input
                      type="text"
                      value={fileName}
                      onChange={(e) => setFileName(e.target.value)}
                      placeholder="Enter file name"
                      className="px-2 appearance-none w-full py-3 placeholder-gray-400 bg-transparent focus:outline-none text-sm sm:text-base"
                      aria-label="File Name"
                    />
                    <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                    <div className="absolute left-0 bottom-0 h-[2px] bg-red-700 
                    transition-transform duration-300 ease-in-out 
                    origin-center scale-x-0 w-full 
                    group-focus-within:scale-x-100" />
                  </div>

                  {/* File Description */}
                  <div className="w-full text-red-700 text-base font-normal mb-1">
                    FILE DESCRIPTION
                  </div>
                  {/* FILE DESCRIPTION INPUT */}
                  <div className="w-full relative group mb-5">
                    <input
                      type="text"
                      value={fileDescription}
                      onChange={(e) => setFileDescription(e.target.value)}
                      placeholder="Enter file description"
                      className="px-2 appearance-none w-full py-3 placeholder-gray-400 bg-transparent focus:outline-none text-sm sm:text-base"
                      aria-label="File Description"
                    />
                    <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-300" />
                    <div className="absolute left-0 bottom-0 h-[2px] bg-red-700 
                    transition-transform duration-300 ease-in-out 
                    origin-center scale-x-0 w-full 
                    group-focus-within:scale-x-100" />
                  </div>



                  {/* Drag and Drop Area */}
                  <div
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className="border-2 border-dashed border-red-300 rounded-lg p-6 text-center cursor-pointer hover:border-red-500 transition"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <img
                      src="/images/uploadicon.png"
                      alt="Upload Icon"
                      className="mx-auto h-12 w-12 object-contain"
                    />

                    <p className="mt-2 text-gray-600 text-md">
                      Drag & drop files or{" "}
                      <span className="text-red-600 underline">Browse</span>
                    </p>
                    <p className="text-xs text-gray-400">
                      Supported formats: JPEG, PNG, PDF, DOCX
                    </p>

                    <input
                      type="file"
                      accept=".jpeg,.jpg,.png,.pdf,.docx"
                      ref={fileInputRef}
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </div>

                  {/* Uploaded File Preview */}
                  {uploadedFile && (
                    <div className="mt-3 p-2 border border-green-400 rounded bg-green-50 text-green-700 text-xs">
                      Uploaded: {uploadedFile.name}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="w-full flex justify-end space-x-2">

                    <button
                      type="submit"
                      className="w-full px-4 py-2 rounded-lg bg-[#B11016] text-white font-semibold hover:bg-[#800b10]"
                    >
                      Upload
                    </button>
                  </div>


                </form>

      <div className="mt-6 text-right">
        <button
          onClick={() => setShowUploadModal(false)}
          className="px-4 py-2 border rounded-md text-sm hover:bg-gray-50"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}


      {/* Files modal */}
      {showFilesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setShowFilesModal(false)}
          />
          <div className="relative bg-white rounded-xl shadow-xl w-[95%] max-w-3xl p-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[#B11016]">Select a File</h3>
              <button
                className="text-gray-600 hover:text-black"
                onClick={() => setShowFilesModal(false)}
              >
                ✕
              </button>
            </div>

            <div className="mt-4 border rounded-lg overflow-hidden">
              {loadingDocs ? (
                <p className="p-4 text-sm text-gray-600">Loading files…</p>
              ) : allDocs.length === 0 ? (
                <p className="p-4 text-sm text-gray-600">No files found.</p>
              ) : (
                <ul className="max-h-80 overflow-auto divide-y">
                  {allDocs.map((doc) => (
                    <li key={doc.id} className="hover:bg-gray-50">
                      <button
                        className="w-full text-left px-4 py-3"
                        onClick={() => {
                          setSelectedDoc(doc);
                          setShowFilesModal(false);
                        }}
                      >
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-xs text-gray-500">
                          {doc.type || "—"} {doc.description ? "• " + doc.description : ""}
                        </p>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-4 text-right">
              <button
                onClick={() => setShowFilesModal(false)}
                className="px-4 py-2 border rounded-md text-sm hover:bg-gray-50"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Error toast-ish */}
      {error && (
        <div className="fixed bottom-5 right-5 bg-red-600 text-white px-4 py-2 rounded shadow">
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm">{error}</span>
            <button className="text-white/80" onClick={() => setError(null)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAssignDocument;
