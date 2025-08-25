module.exports = {

"[project]/src/app/adminassigndocument/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>AdminAssignDocument
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function AdminAssignDocument() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/adminassigndocument/page.tsx",
            lineNumber: 36,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AdminAssignDocumentContent, {}, void 0, false, {
            fileName: "[project]/src/app/adminassigndocument/page.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/adminassigndocument/page.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function AdminAssignDocumentContent() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const API = ("TURBOPACK compile-time value", "http://localhost:5000");
    // UI state
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("view");
    const [showFilesModal, setShowFilesModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDeptPicker, setShowDeptPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [savingPreset, setSavingPreset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Data state
    const [allDocs, setAllDocs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedDoc, setSelectedDoc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [departments, setDepartments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [queue, setQueue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [presets, setPresets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedPresetId, setSelectedPresetId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loadingDocs, setLoadingDocs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingDepts, setLoadingDepts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingPresets, setLoadingPresets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showUploadModal, setShowUploadModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [fileDescription, setFileDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const proposalId = searchParams?.get("proposalId");
    const [showPresetModal, setShowPresetModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [presetName, setPresetName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleFileSubmit = async (e)=>{
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
            for (let [key, value] of formData.entries()){
                console.log(key, value);
            }
            console.log("Making request to:", `${API}/api/document/upload_file`);
            const response = await fetch(`${API}/api/document/upload_file`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData
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
            const newDoc = {
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
    const [uploadedFile, setUploadedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleFileChange = (e)=>{
        if (e.target.files && e.target.files.length > 0) {
            setUploadedFile(e.target.files[0]);
        }
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setUploadedFile(e.dataTransfer.files[0]);
        }
    };
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null, []);
    // Fetch departments & presets early
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!token) return;
        const fetchDepartments = async ()=>{
            setLoadingDepts(true);
            try {
                const res = await fetch(`${API}/api/department`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data?.error || "Failed to fetch departments");
                setDepartments(data.departments || []);
            } catch (e) {
                setError(e.message || "Error fetching departments");
            } finally{
                setLoadingDepts(false);
            }
        };
        const fetchPresets = async ()=>{
            setLoadingPresets(true);
            try {
                const res = await fetch(`${API}/api/department_preset`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data?.error || "Failed to fetch presets");
                setPresets(data.department_presets || []);
            } catch (e) {
                setError(e.message || "Error fetching presets");
            } finally{
                setLoadingPresets(false);
            }
        };
        fetchDepartments();
        fetchPresets();
    }, [
        API,
        token
    ]);
    // Open files modal when View Files tab is chosen
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeTab === "view") {
            setShowFilesModal(true);
        }
    }, [
        activeTab
    ]);
    const fetchAllDocs = async ()=>{
        if (!token) return;
        setLoadingDocs(true);
        try {
            const res = await fetch(`${API}/api/document/get_unassigned`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || data?.message || "Failed to fetch documents");
            if (!Array.isArray(data)) {
                setAllDocs([]);
                return;
            }
            // For each unassigned doc, fetch its full details
            const detailedDocs = await Promise.all(data.map(async (doc)=>{
                try {
                    const detailRes = await fetch(`${API}/api/document/${doc.id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json"
                        }
                    });
                    const detailData = await detailRes.json();
                    if (!detailRes.ok) throw new Error(detailData?.error || "Failed to fetch doc details");
                    return detailData;
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
                        proposal_id: null
                    };
                }
            }));
            setAllDocs(detailedDocs);
        } catch (e) {
            setError(e.message || "Error fetching documents");
        } finally{
            setLoadingDocs(false);
        }
    };
    // When files modal is shown, fetch docs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (showFilesModal) fetchAllDocs();
    }, [
        showFilesModal
    ]);
    const deptById = (id)=>departments.find((d)=>d.id === id);
    // Handle preset selection (populate queue)
    const handleSelectPreset = (idStr)=>{
        if (!idStr) {
            setSelectedPresetId("");
            return;
        }
        const id = Number(idStr);
        setSelectedPresetId(id);
        const p = presets.find((x)=>x.id === id);
        if (p && Array.isArray(p.department_queues)) {
            // Map ids to department objects; ignore ids we don't know
            const mapped = p.department_queues.map((deptId)=>deptById(deptId)).filter(Boolean);
            setQueue(mapped);
        }
    };
    // Add department into queue
    const addDepartmentToQueue = (dept)=>{
        setQueue((prev)=>[
                ...prev,
                dept
            ]);
        setShowDeptPicker(false);
    };
    // Remove / reorder handlers
    const removeFromQueue = (index)=>{
        setQueue((prev)=>prev.filter((_, i)=>i !== index));
    };
    const moveUp = (index)=>{
        if (index === 0) return;
        setQueue((prev)=>{
            const copy = [
                ...prev
            ];
            [copy[index - 1], copy[index]] = [
                copy[index],
                copy[index - 1]
            ];
            return copy;
        });
    };
    const moveDown = (index)=>{
        setQueue((prev)=>{
            if (index >= prev.length - 1) return prev;
            const copy = [
                ...prev
            ];
            [copy[index + 1], copy[index]] = [
                copy[index],
                copy[index + 1]
            ];
            return copy;
        });
    };
    // Save as preset
    const handleSavePreset = ()=>{
        if (queue.length === 0) {
            alert("Add at least one department to save a preset.");
            return;
        }
        setShowPresetModal(true); // ✅ Open modal
    };
    const confirmSavePreset = async ()=>{
        if (!presetName.trim()) return;
        setSavingPreset(true);
        try {
            const res = await fetch(`${API}/api/department_preset`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: presetName.trim(),
                    department_queues: queue.map((d)=>d.id)
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data?.error || "Failed to save preset");
            setPresets((prev)=>[
                    ...prev,
                    data.department_preset
                ]);
            setSelectedPresetId(data.department_preset?.id ?? "");
            setShowPresetModal(false); // ✅ Close modal
            setPresetName(""); // ✅ Reset input
        } catch (e) {
            alert(e.message || "Error saving preset");
        } finally{
            setSavingPreset(false);
        }
    };
    // Fixed handleAssignDocument function
    const handleAssignDocument = async ()=>{
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
            iteration: queue.map((d)=>d.id)
        };
        console.log("=== ASSIGN DOCUMENT DEBUG ===");
        console.log("Payload:", payload);
        console.log("API URL:", `${API}/api/document_setting/upload_document_setting`);
        try {
            const res = await fetch(`${API}/api/document_setting/upload_document_setting`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });
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
            const documentSettingId = data.id || // Direct ID from to_dict() - this should work
            data.document_setting_id || // Just in case
            data.document_setting?.id || // Nested object fallback
            data.setting_id || // Alternative naming
            data.documentSettingId; // CamelCase variant
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
                setTimeout(()=>{
                    router.push(navigationUrl);
                }, 100);
            } else {
                console.error("❌ No document_setting ID found in response");
                console.log("Available response keys:", Object.keys(data || {}));
                console.log("Response data structure:", data);
                console.log("Typeof data:", typeof data);
                console.log("Is array:", Array.isArray(data));
                // Try to extract ANY id-like field for debugging
                const possibleIds = Object.keys(data || {}).filter((key)=>key.toLowerCase().includes('id'));
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 flex flex-col items-center px-4 sm:px-[5%] lg:px-[10%] py-4 sm:py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center w-full mt-2 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>router.push("/admindashboard"),
                        className: "absolute left-0 flex items-center text-[#B11016] hover:text-[#800b10] text-sm sm:text-base",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaArrowLeft"], {
                                className: "mr-2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                lineNumber: 507,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                lineNumber: 508,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                        lineNumber: 503,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl sm:text-2xl lg:text-4xl font-bold text-[#B11016] pb-2 sm:pb-4",
                                children: "Assign Document"
                            }, void 0, false, {
                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                lineNumber: 511,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-md text-black mb-4 sm:mb-6 px-4",
                                children: "Push the files to the departments."
                            }, void 0, false, {
                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                lineNumber: 514,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-2 border-b-[3px] border-[#B11016]"
                            }, void 0, false, {
                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                lineNumber: 517,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                        lineNumber: 510,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                lineNumber: 502,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `p-2 px-6 text-sm sm:text-base rounded-md transition-all duration-300 ease-in-out transform ${activeTab === "view" ? "bg-[#B11016] text-white font-semibold shadow-lg hover:bg-[#8B0C11] hover:shadow-xl hover:scale-105" : "border-2 border-[#B11016] text-[#B11016] bg-transparent hover:bg-[#B11016] hover:text-white hover:shadow-lg hover:scale-105 hover:border-[#8B0C11]"}`,
                                onClick: ()=>{
                                    setActiveTab("view");
                                    setShowFilesModal(true);
                                },
                                children: "VIEW FILES"
                            }, void 0, false, {
                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                lineNumber: 524,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `p-2 px-6 text-sm sm:text-base rounded-md transition-all duration-300 ease-in-out transform ${activeTab === "upload" ? "bg-[#B11016] text-white font-semibold shadow-lg hover:bg-[#8B0C11] hover:shadow-xl hover:scale-105" : "border-2 border-[#B11016] text-[#B11016] bg-transparent hover:bg-[#B11016] hover:text-white hover:shadow-lg hover:scale-105 hover:border-[#8B0C11]"}`,
                                onClick: ()=>{
                                    setActiveTab("upload");
                                    setShowUploadModal(true);
                                },
                                children: "UPLOAD"
                            }, void 0, false, {
                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                lineNumber: 536,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                        lineNumber: 523,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm text-gray-700 mr-1",
                                children: "CHOOSE A PRESET"
                            }, void 0, false, {
                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                lineNumber: 551,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "border rounded-md px-3 py-2 text-sm outline-none",
                                value: selectedPresetId,
                                onChange: (e)=>handleSelectPreset(e.target.value),
                                disabled: loadingPresets,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "",
                                        children: "Select…"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                        lineNumber: 558,
                                        columnNumber: 13
                                    }, this),
                                    presets.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: p.id,
                                            children: p.name
                                        }, p.id, false, {
                                            fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                            lineNumber: 560,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                lineNumber: 552,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                        lineNumber: 550,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                lineNumber: 522,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-1 bg-white rounded-2xl shadow-md p-6",
                        children: selectedDoc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/file-card.png",
                                            alt: "File Icon",
                                            className: "w-34 h-36 object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                            lineNumber: 576,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-xl text-black",
                                                    children: selectedDoc.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                    lineNumber: 582,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500",
                                                    children: [
                                                        "Type: ",
                                                        selectedDoc.type || "—"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                    lineNumber: 583,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                            lineNumber: 581,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                    lineNumber: 575,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 text-md space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-black font-medium border-b pb-2",
                                            children: "File Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                            lineNumber: 591,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-black",
                                                    children: "Description:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                    lineNumber: 593,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                selectedDoc.description || "No description."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                            lineNumber: 592,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-black",
                                                    children: "Date Created:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                    lineNumber: 597,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                selectedDoc.created_at ? new Date(selectedDoc.created_at).toLocaleDateString("en-US", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric"
                                                }) : "—"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                            lineNumber: 596,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                    lineNumber: 590,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/file-card.png",
                                    alt: "No File",
                                    className: "w-14 h-16 mx-auto object-contain"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                    lineNumber: 612,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-gray-600 text-sm",
                                    children: [
                                        "No file selected. Click ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: "“VIEW FILES”"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                            lineNumber: 618,
                                            columnNumber: 41
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                    lineNumber: 617,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/adminassigndocument/page.tsx",
                            lineNumber: 611,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                        lineNumber: 571,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-2 bg-white rounded-xl shadow p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-semibold text-gray-800",
                                children: "DEPARTMENTS ASSIGNED"
                            }, void 0, false, {
                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                lineNumber: 627,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 border-t"
                            }, void 0, false, {
                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                lineNumber: 628,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 space-y-3",
                                children: [
                                    queue.map((dept, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between bg-gray-200 rounded-md px-4 py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-sm tracking-wide",
                                                    children: [
                                                        idx + 1,
                                                        ". ",
                                                        dept.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                    lineNumber: 637,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>moveUp(idx),
                                                            className: "text-xs border rounded px-2 py-1 hover:bg-gray-100",
                                                            title: "Move up",
                                                            children: "↑"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                            lineNumber: 641,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>moveDown(idx),
                                                            className: "text-xs border rounded px-2 py-1 hover:bg-gray-100",
                                                            title: "Move down",
                                                            children: "↓"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                            lineNumber: 648,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>removeFromQueue(idx),
                                                            className: "text-xs border rounded px-2 py-1 hover:bg-gray-100",
                                                            title: "Remove",
                                                            children: "✕"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                            lineNumber: 655,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                    lineNumber: 640,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, `${dept.id}-${idx}`, true, {
                                            fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                            lineNumber: 633,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowDeptPicker((s)=>!s),
                                        className: "w-full border rounded-md py-3 text-sm hover:bg-gray-50",
                                        disabled: loadingDepts,
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                        lineNumber: 667,
                                        columnNumber: 13
                                    }, this),
                                    showDeptPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border rounded-lg shadow bg-white max-h-64 overflow-auto",
                                        children: loadingDepts ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "p-3 text-sm text-gray-600",
                                            children: "Loading departments…"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                            lineNumber: 679,
                                            columnNumber: 19
                                        }, this) : departments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "p-3 text-sm text-gray-600",
                                            children: "No departments found."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                            lineNumber: 681,
                                            columnNumber: 19
                                        }, this) : departments.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "w-full text-left px-4 py-2 hover:bg-gray-100 text-sm",
                                                onClick: ()=>addDepartmentToQueue(d),
                                                children: d.name
                                            }, d.id, false, {
                                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                lineNumber: 684,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                        lineNumber: 677,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                lineNumber: 631,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex flex-col sm:flex-row gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSavePreset,
                                        className: "w-full sm:w-auto bg-gray-600 hover:bg-gray-700 text-white rounded-md px-5 py-3",
                                        disabled: savingPreset,
                                        children: savingPreset ? "Saving…" : "SAVE AS PRESET"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                        lineNumber: 699,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleAssignDocument,
                                        className: "w-full sm:w-auto bg-[#B11016] hover:bg-[#8f0e12] text-white rounded-md px-5 py-3",
                                        children: "ASSIGN DOCUMENT"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                        lineNumber: 706,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                lineNumber: 698,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                        lineNumber: 626,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                lineNumber: 569,
                columnNumber: 7
            }, this),
            showUploadModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/30",
                        onClick: ()=>setShowUploadModal(false)
                    }, void 0, false, {
                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                        lineNumber: 719,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative bg-white rounded-xl shadow-xl w-[95%] max-w-lg p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-[#B11016]",
                                        children: "Upload File"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                        lineNumber: 725,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "text-gray-600 hover:text-black",
                                        onClick: ()=>setShowUploadModal(false),
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                        lineNumber: 726,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                lineNumber: 724,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleFileSubmit,
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full text-red-700 text-base font-normal mb-1",
                                        children: "FILE NAME"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                        lineNumber: 736,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full relative group mb-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: fileName,
                                                onChange: (e)=>setFileName(e.target.value),
                                                placeholder: "Enter file name",
                                                className: "px-2 appearance-none w-full py-3 placeholder-gray-400 bg-transparent focus:outline-none text-sm sm:text-base",
                                                "aria-label": "File Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                lineNumber: 741,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-0 bottom-0 w-full h-[2px] bg-gray-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                lineNumber: 749,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-0 bottom-0 h-[2px] bg-red-700    transition-transform duration-300 ease-in-out    origin-center scale-x-0 w-full    group-focus-within:scale-x-100"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                lineNumber: 750,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                        lineNumber: 740,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full text-red-700 text-base font-normal mb-1",
                                        children: "FILE DESCRIPTION"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                        lineNumber: 757,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full relative group mb-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: fileDescription,
                                                onChange: (e)=>setFileDescription(e.target.value),
                                                placeholder: "Enter file description",
                                                className: "px-2 appearance-none w-full py-3 placeholder-gray-400 bg-transparent focus:outline-none text-sm sm:text-base",
                                                "aria-label": "File Description"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                lineNumber: 762,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-0 bottom-0 w-full h-[2px] bg-gray-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                lineNumber: 770,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-0 bottom-0 h-[2px] bg-red-700    transition-transform duration-300 ease-in-out    origin-center scale-x-0 w-full    group-focus-within:scale-x-100"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                lineNumber: 771,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                        lineNumber: 761,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onDrop: handleDrop,
                                        onDragOver: (e)=>e.preventDefault(),
                                        className: "border-2 border-dashed border-red-300 rounded-lg p-6 text-center cursor-pointer hover:border-red-500 transition",
                                        onClick: ()=>fileInputRef.current?.click(),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/images/uploadicon.png",
                                                alt: "Upload Icon",
                                                className: "mx-auto h-12 w-12 object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                lineNumber: 786,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-gray-600 text-md",
                                                children: [
                                                    "Drag & drop files or",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-red-600 underline",
                                                        children: "Browse"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                        lineNumber: 794,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                lineNumber: 792,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400",
                                                children: "Supported formats: JPEG, PNG, PDF, DOCX"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                lineNumber: 796,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                accept: ".jpeg,.jpg,.png,.pdf,.docx",
                                                ref: fileInputRef,
                                                className: "hidden",
                                                onChange: handleFileChange
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                lineNumber: 800,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                        lineNumber: 780,
                                        columnNumber: 15
                                    }, this),
                                    uploadedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 p-2 border border-green-400 rounded bg-green-50 text-green-700 text-xs",
                                        children: [
                                            "Uploaded: ",
                                            uploadedFile.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                        lineNumber: 811,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full flex justify-end space-x-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "w-full px-4 py-2 rounded-lg bg-[#B11016] text-white font-semibold hover:bg-[#800b10]",
                                            children: "Upload"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                            lineNumber: 819,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                        lineNumber: 817,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                lineNumber: 734,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 text-right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowUploadModal(false),
                                    className: "px-4 py-2 border rounded-md text-sm hover:bg-gray-50",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                    lineNumber: 831,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                lineNumber: 830,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                        lineNumber: 723,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                lineNumber: 718,
                columnNumber: 9
            }, this),
            showFilesModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/30",
                        onClick: ()=>setShowFilesModal(false)
                    }, void 0, false, {
                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                        lineNumber: 846,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative bg-white rounded-xl shadow-xl w-[95%] max-w-3xl p-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-[#B11016]",
                                        children: "Select a File"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                        lineNumber: 852,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "text-gray-600 hover:text-black",
                                        onClick: ()=>setShowFilesModal(false),
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                        lineNumber: 853,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                lineNumber: 851,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 border rounded-lg overflow-hidden",
                                children: loadingDocs ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "p-4 text-sm text-gray-600",
                                    children: "Loading files…"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                    lineNumber: 863,
                                    columnNumber: 17
                                }, this) : allDocs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "p-4 text-sm text-gray-600",
                                    children: "No files found."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                    lineNumber: 865,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "max-h-80 overflow-auto divide-y",
                                    children: allDocs.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "hover:bg-gray-50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "w-full text-left px-4 py-3",
                                                onClick: ()=>{
                                                    setSelectedDoc(doc);
                                                    setShowFilesModal(false);
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium",
                                                        children: doc.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                        lineNumber: 877,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500",
                                                        children: [
                                                            doc.type || "—",
                                                            " ",
                                                            doc.description ? "• " + doc.description : ""
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                        lineNumber: 878,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                lineNumber: 870,
                                                columnNumber: 23
                                            }, this)
                                        }, doc.id, false, {
                                            fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                            lineNumber: 869,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                    lineNumber: 867,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                lineNumber: 861,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 text-right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowFilesModal(false),
                                    className: "px-4 py-2 border rounded-md text-sm hover:bg-gray-50",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                    lineNumber: 889,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                lineNumber: 888,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                        lineNumber: 850,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                lineNumber: 845,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-5 right-5 bg-red-600 text-white px-4 py-2 rounded shadow",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/app/adminassigndocument/page.tsx",
                            lineNumber: 904,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "text-white/80",
                            onClick: ()=>setError(null),
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/app/adminassigndocument/page.tsx",
                            lineNumber: 905,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/adminassigndocument/page.tsx",
                    lineNumber: 903,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                lineNumber: 902,
                columnNumber: 9
            }, this),
            showPresetModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 flex items-center justify-center z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/30 backdrop-blur-sm",
                        onClick: ()=>setShowPresetModal(false)
                    }, void 0, false, {
                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                        lineNumber: 915,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 transform transition-all duration-300 ease-out scale-100 opacity-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between p-6 border-b border-gray-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 text-white",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                        lineNumber: 927,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                    lineNumber: 926,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                lineNumber: 925,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-bold text-gray-900",
                                                        children: "Save Preset"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                        lineNumber: 931,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500",
                                                        children: "Create a reusable configuration"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                        lineNumber: 932,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                lineNumber: 930,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                        lineNumber: 924,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowPresetModal(false),
                                        className: "w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200",
                                        disabled: savingPreset,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5 text-gray-400",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M6 18L18 6M6 6l12 12"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                lineNumber: 941,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                            lineNumber: 940,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                        lineNumber: 935,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                lineNumber: 923,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "preset-name",
                                            className: "block text-sm font-medium text-gray-700",
                                            children: "Preset Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                            lineNumber: 949,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "preset-name",
                                            type: "text",
                                            value: presetName,
                                            onChange: (e)=>setPresetName(e.target.value),
                                            onKeyDown: (e)=>{
                                                if (e.key === 'Enter' && !savingPreset && presetName.trim()) {
                                                    confirmSavePreset();
                                                }
                                                if (e.key === 'Escape') {
                                                    setShowPresetModal(false);
                                                }
                                            },
                                            placeholder: "e.g., My Custom Configuration",
                                            className: "w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 placeholder-gray-400",
                                            disabled: savingPreset,
                                            autoFocus: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                            lineNumber: 952,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: "Choose a descriptive name for easy identification later"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                            lineNumber: 970,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                    lineNumber: 948,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                lineNumber: 947,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end space-x-3 p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowPresetModal(false),
                                        className: "px-6 py-2.5 rounded-xl text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
                                        disabled: savingPreset,
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                        lineNumber: 978,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: confirmSavePreset,
                                        disabled: savingPreset || !presetName.trim(),
                                        className: "px-6 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",
                                        children: savingPreset ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                    lineNumber: 992,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Saving..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                                    lineNumber: 993,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                            lineNumber: 991,
                                            columnNumber: 19
                                        }, this) : "Save Preset"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                        lineNumber: 985,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                                lineNumber: 977,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/adminassigndocument/page.tsx",
                        lineNumber: 921,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/adminassigndocument/page.tsx",
                lineNumber: 913,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/adminassigndocument/page.tsx",
        lineNumber: 500,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=src_app_adminassigndocument_page_tsx_982ebd13._.js.map