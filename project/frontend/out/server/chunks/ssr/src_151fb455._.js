module.exports = {

"[project]/src/components/ProtectedRoute.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>ProtectedRoute
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function ProtectedRoute({ children, allowedRoles }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const token = sessionStorage.getItem("access_token");
        const role = sessionStorage.getItem("role");
        if (!token || !role) {
            router.push("/login");
            return;
        }
        if (!allowedRoles.includes(role)) {
            router.push("/"); // redirect if role not allowed
            return;
        }
        setLoading(false);
    }, [
        router,
        allowedRoles
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/src/app/companysetup/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>CompanySetup
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProtectedRoute$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProtectedRoute.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function CompanySetup() {
    const API = ("TURBOPACK compile-time value", "http://localhost:5000");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Company Information - mapped to backend fields
    const [companyName, setCompanyName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [companyWebsite, setCompanyWebsite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""); // mapped to location in original
    const [industry, setIndustry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [companySize, setCompanySize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [customCompanySize, setCustomCompanySize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [customIndustry, setCustomIndustry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [color, setColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("#000000");
    const [companyLogo, setCompanyLogo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [existingLogoUrl, setExistingLogoUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [bio, setBio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [collabType, setCollabType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const logoInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Point of Contact - this will be the contact_email for the company
    const [fullname, setFullname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [contactEmail, setContactEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""); // mapped from email
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [contactNumber, setContactNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Loading and error states
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // New states for company management
    const [hasExistingCompany, setHasExistingCompany] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditMode, setIsEditMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [originalCompanyData, setOriginalCompanyData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [companyId, setCompanyId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Modal state
    const [showSuccessModal, setShowSuccessModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalMessage, setModalMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isNewCompany, setIsNewCompany] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Convert company size number to display string
    const sizeToString = (size)=>{
        if (size <= 10) return "1-10";
        if (size <= 50) return "11-50";
        if (size <= 200) return "51-200";
        if (size <= 500) return "201-500";
        if (size <= 1000) return "501-1000";
        if (size > 1000) return "1000+";
        return "Other";
    };
    // Fetch user data and company data on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchData = async ()=>{
            const token = sessionStorage.getItem("access_token");
            if (!token) return;
            try {
                // Fetch user data first
                const resUser = await fetch(`${API}/api/auth/protected`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });
                if (resUser.ok) {
                    const userData = await resUser.json();
                    const user = userData.user;
                    setFullname(`${user.first_name || ""} ${user.last_name || ""}`);
                    setContactEmail(user.email || "");
                    setPosition(user.position || "");
                    setContactNumber(user.contact_number || "");
                }
                // Try to fetch existing company data
                const resCompany = await fetch(`${API}/api/company`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });
                if (resCompany.ok) {
                    const companyData = await resCompany.json();
                    // Pre-fill all company fields
                    setCompanyName(companyData.name || "");
                    setCompanyWebsite(companyData.website || "");
                    setAddress(companyData.address || "");
                    setIndustry(companyData.industry || "");
                    setPosition(companyData.position || "");
                    setBio(companyData.bio || "");
                    setColor(companyData.color || "#000000");
                    setCollabType(companyData.collab_type || "");
                    // Handle company size
                    if (companyData.size) {
                        const sizeString = sizeToString(companyData.size);
                        if (sizeString === "Other") {
                            setCompanySize("Other");
                            setCustomCompanySize(companyData.size.toString());
                        } else {
                            setCompanySize(sizeString);
                        }
                    }
                    // Handle industry
                    const predefinedIndustries = [
                        "Financial Technology",
                        "Healthcare",
                        "Education",
                        "Technology",
                        "Manufacturing",
                        "Retail",
                        "Finance",
                        "Consulting",
                        "Real Estate",
                        "Media & Entertainment"
                    ];
                    if (companyData.industry && !predefinedIndustries.includes(companyData.industry)) {
                        setIndustry("Other");
                        setCustomIndustry(companyData.industry);
                    }
                    // Store existing logo URL
                    if (companyData.logo) {
                        setExistingLogoUrl(companyData.logo);
                    }
                    setHasExistingCompany(true);
                    setCompanyId(companyData.id);
                    // Store original data for cancel functionality
                    setOriginalCompanyData({
                        name: companyData.name || "",
                        website: companyData.website || "",
                        address: companyData.address || "",
                        industry: companyData.industry || "",
                        size: companyData.size,
                        bio: companyData.bio || "",
                        position: companyData.position || "",
                        color: companyData.color || "#000000",
                        collab_type: companyData.collab_type || "",
                        logo: companyData.logo || ""
                    });
                } else if (resCompany.status === 404) {
                    // No company exists, user can create one
                    setHasExistingCompany(false);
                }
            } catch (err) {
                console.error("Error fetching data:", err);
            }
        };
        fetchData();
    }, [
        API
    ]);
    // Convert file to base64
    const fileToBase64 = (file)=>{
        return new Promise((resolve, reject)=>{
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = ()=>resolve(reader.result);
            reader.onerror = (error)=>reject(error);
        });
    };
    // Handle Logo Upload
    const handleLogoChange = (e)=>{
        if (e.target.files && e.target.files[0]) {
            setCompanyLogo(e.target.files[0]);
            setExistingLogoUrl(""); // Clear existing logo when new one is uploaded
        }
    };
    const handleLogoDrop = (e)=>{
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setCompanyLogo(e.dataTransfer.files[0]);
            setExistingLogoUrl(""); // Clear existing logo when new one is uploaded
        }
    };
    // Handle edit mode toggle
    const handleEditClick = ()=>{
        setIsEditMode(true);
        setError("");
        setSuccess("");
    };
    // Handle cancel edit
    const handleCancelEdit = ()=>{
        if (originalCompanyData) {
            // Restore original values
            setCompanyName(originalCompanyData.name);
            setCompanyWebsite(originalCompanyData.website);
            setAddress(originalCompanyData.address);
            setBio(originalCompanyData.bio);
            setColor(originalCompanyData.color);
            setCollabType(originalCompanyData.collab_type);
            setExistingLogoUrl(originalCompanyData.logo);
            setCompanyLogo(null);
            // Handle industry restoration
            const predefinedIndustries = [
                "Financial Technology",
                "Healthcare",
                "Education",
                "Technology",
                "Manufacturing",
                "Retail",
                "Finance",
                "Consulting",
                "Real Estate",
                "Media & Entertainment"
            ];
            if (originalCompanyData.industry && !predefinedIndustries.includes(originalCompanyData.industry)) {
                setIndustry("Other");
                setCustomIndustry(originalCompanyData.industry);
            } else {
                setIndustry(originalCompanyData.industry);
                setCustomIndustry("");
            }
            // Handle size restoration
            if (originalCompanyData.size) {
                const sizeString = sizeToString(originalCompanyData.size);
                if (sizeString === "Other") {
                    setCompanySize("Other");
                    setCustomCompanySize(originalCompanyData.size.toString());
                } else {
                    setCompanySize(sizeString);
                    setCustomCompanySize("");
                }
            } else {
                setCompanySize("");
                setCustomCompanySize("");
            }
        }
        setIsEditMode(false);
        setError("");
        setSuccess("");
    };
    // Close modal and handle navigation
    const handleCloseModal = ()=>{
        setShowSuccessModal(false);
        if (isNewCompany) {
            // Redirect to dashboard for new companies
            setTimeout(()=>{
                router.push("/dashboard");
            }, 300);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        setSuccess("");
        if (!companyName.trim() || !contactEmail.trim()) {
            setError("Company name and contact email are required fields.");
            return;
        }
        setIsLoading(true);
        try {
            // --- 1. Prepare company update payload ---
            let logoBase64 = "";
            if (companyLogo) {
                logoBase64 = await fileToBase64(companyLogo);
            } else if (existingLogoUrl && !companyLogo) {
                logoBase64 = existingLogoUrl;
            }
            const finalIndustry = industry === "Other" ? customIndustry : industry;
            const finalSizeString = companySize === "Other" ? customCompanySize : companySize;
            let finalSize;
            if (finalSizeString) {
                if (finalSizeString.includes("-")) {
                    const parts = finalSizeString.split("-");
                    finalSize = parseInt(parts[1]) || parseInt(parts[0]);
                } else if (finalSizeString.includes("+")) {
                    finalSize = parseInt(finalSizeString.replace("+", ""));
                } else {
                    finalSize = parseInt(finalSizeString);
                }
                if (isNaN(finalSize)) finalSize = undefined;
            }
            const companyPayload = {
                name: companyName,
                contact_email: contactEmail
            };
            if (address.trim()) companyPayload.address = address;
            if (companyWebsite.trim()) companyPayload.website = companyWebsite;
            if (color.trim()) companyPayload.color = color;
            if (logoBase64) companyPayload.logo = logoBase64;
            if (bio.trim()) companyPayload.bio = bio;
            if (finalIndustry && finalIndustry.trim()) companyPayload.industry = finalIndustry;
            if (finalSize !== undefined) companyPayload.size = finalSize;
            if (collabType && collabType.trim()) companyPayload.collab_type = collabType;
            const token = sessionStorage.getItem("access_token");
            if (!token) {
                setError("Authentication required. Please log in first.");
                return;
            }
            // --- 2. Update company ---
            const method = hasExistingCompany ? "PUT" : "POST";
            const companyRes = await fetch(`${API}/api/company`, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(companyPayload)
            });
            const companyData = await companyRes.json();
            if (!companyRes.ok) throw new Error(companyData.error || "Company update failed");
            // --- 3. Update user contact info ---
            const userId = sessionStorage.getItem("user_id"); // Or however you get logged-in user ID
            if (userId) {
                const userPayload = {
                    contact_number: contactNumber,
                    position: position
                };
                const userRes = await fetch(`${API}/api/user/${userId}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(userPayload)
                });
                const userData = await userRes.json();
                if (!userRes.ok) throw new Error(userData.message || "User update failed");
            }
            // Success handling
            setModalMessage(`Company "${companyData.company.name}" ${hasExistingCompany ? "updated" : "created"} successfully!`);
            setShowSuccessModal(true);
        } catch (err) {
            console.error("Error with update:", err);
            setError(err.message || "An unexpected error occurred.");
        } finally{
            setIsLoading(false);
        }
    };
    // Check if fields should be read-only
    const isReadOnly = hasExistingCompany && !isEditMode;
    // Get button text based on state
    const getButtonText = ()=>{
        if (isLoading) {
            if (hasExistingCompany) {
                return isEditMode ? "SAVING..." : "LOADING...";
            }
            return "SETTING UP COMPANY...";
        }
        if (hasExistingCompany) {
            return isEditMode ? "SAVE CHANGES" : "EDIT COMPANY";
        }
        return "SETUP COMPANY";
    };
    // Handle button click
    const handleButtonClick = (e)=>{
        if (hasExistingCompany && !isEditMode) {
            e.preventDefault();
            handleEditClick();
        } else {
            handleSubmit(e);
        }
    };
    const pageVariants = {
        initial: {
            opacity: 0,
            y: 30
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [
                    0.25,
                    0.1,
                    0.25,
                    1
                ]
            }
        },
        exit: {
            opacity: 0,
            y: -30,
            transition: {
                duration: 0.4,
                ease: [
                    0.25,
                    0.1,
                    0.25,
                    1
                ]
            }
        }
    };
    // Modal animation variants
    const modalOverlayVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1
        }
    };
    const modalVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 50
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
            }
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            y: 50,
            transition: {
                duration: 0.2
            }
        }
    };
    const iconVariants = {
        hidden: {
            scale: 0,
            rotate: -180
        },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                delay: 0.2,
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProtectedRoute$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        allowedRoles: [
            "user"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
            mode: "wait",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: pageVariants,
                initial: "initial",
                animate: "animate",
                exit: "exit",
                className: "min-h-screen bg-white flex flex-col items-center px-[10%] py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center w-full mt-2 mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (hasExistingCompany) {
                                        // ✅ User already has a company or updated it → Go to dashboard
                                        router.push("/dashboard");
                                    } else {
                                        // 🚫 No company yet → Must finish setup → Stay in collab flow
                                        router.push("/collabhome");
                                    }
                                },
                                className: "absolute left-0 flex items-center text-[#B11016] hover:text-[#800b10]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaArrowLeft"], {
                                        className: "mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                        lineNumber: 466,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "hidden sm:inline",
                                        children: "Back"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                        lineNumber: 467,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/companysetup/page.tsx",
                                lineNumber: 454,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl sm:text-4xl font-bold text-[#B11016] pb-4",
                                        children: "Company Setup Form"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                        lineNumber: 472,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-md text-black mb-6",
                                        children: hasExistingCompany ? "Manage your company information" : "Set up your company that's aiming to partner with BPI"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                        lineNumber: 475,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mx-2 border-b-[3px] border-[#B11016]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                        lineNumber: 480,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/companysetup/page.tsx",
                                lineNumber: 471,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/companysetup/page.tsx",
                        lineNumber: 452,
                        columnNumber: 21
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/app/companysetup/page.tsx",
                        lineNumber: 486,
                        columnNumber: 25
                    }, this),
                    success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded",
                        children: success
                    }, void 0, false, {
                        fileName: "[project]/src/app/companysetup/page.tsx",
                        lineNumber: 491,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleButtonClick,
                        className: "w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 lg:grid-cols-2 gap-12 w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "flex items-center space-x-3 text-[#B11016] text-2xl font-bold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#B11016] text-base font-bold leading-none",
                                                        children: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 501,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Company Information"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 504,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                lineNumber: 500,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm sm:text-base font-medium text-[#B11016] mb-2",
                                                        children: "COMPANY NAME *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 509,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative w-full group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: companyName,
                                                                onChange: (e)=>setCompanyName(e.target.value),
                                                                placeholder: "Enter Company Name",
                                                                readOnly: isReadOnly,
                                                                className: `appearance-none w-full px-0 py-3 border-0 
                                    placeholder-gray-400 text-gray-900 
                                    focus:outline-none text-sm sm:text-base
                                    ${isReadOnly ? 'bg-gray-100 cursor-not-allowed' : 'bg-transparent'}`,
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 513,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute left-0 bottom-0 w-full h-[2px] bg-gray-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 525,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute left-0 bottom-0 h-[2px] bg-[#B11016]   transition-transform duration-300 ease-in-out    origin-center scale-x-0 w-full    group-focus-within:scale-x-100"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 526,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 512,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                lineNumber: 508,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm sm:text-base font-medium text-[#B11016] mb-2",
                                                        children: "COMPANY WEBSITE LINK"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 535,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative w-full group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "url",
                                                                value: companyWebsite,
                                                                onChange: (e)=>setCompanyWebsite(e.target.value),
                                                                placeholder: "Enter Website Link (https://...)",
                                                                readOnly: isReadOnly,
                                                                className: `appearance-none w-full px-0 py-3 border-0 
                                    placeholder-gray-400 text-gray-900 
                                    focus:outline-none text-sm sm:text-base
                                    ${isReadOnly ? 'bg-gray-100 cursor-not-allowed' : 'bg-transparent'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 539,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute left-0 bottom-0 w-full h-[2px] bg-gray-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 550,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute left-0 bottom-0 h-[2px] bg-[#B11016]    transition-transform duration-300 ease-in-out    origin-center scale-x-0 w-full    group-focus-within:scale-x-100"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 551,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 538,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                lineNumber: 534,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm sm:text-base font-medium text-[#B11016] mb-2",
                                                        children: "COMPANY ADDRESS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 560,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative w-full group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: address,
                                                                onChange: (e)=>setAddress(e.target.value),
                                                                placeholder: "Enter Company Address",
                                                                readOnly: isReadOnly,
                                                                className: `appearance-none w-full px-0 py-3 border-0 
                                    placeholder-gray-400 text-gray-900 
                                    focus:outline-none text-sm sm:text-base
                                    ${isReadOnly ? 'bg-gray-100 cursor-not-allowed' : 'bg-transparent'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 564,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute left-0 bottom-0 w-full h-[2px] bg-gray-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 575,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute left-0 bottom-0 h-[2px] bg-[#B11016]    transition-transform duration-300 ease-in-out    origin-center scale-x-0 w-full    group-focus-within:scale-x-100"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 576,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 563,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                lineNumber: 559,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm sm:text-base font-medium text-[#B11016] mb-2",
                                                        children: "COMPANY BIO"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 585,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: bio,
                                                        onChange: (e)=>setBio(e.target.value),
                                                        placeholder: "Brief description of your company...",
                                                        readOnly: isReadOnly,
                                                        className: `w-full border border-gray-300 rounded-md py-2 px-3 focus:border-[#B11016] outline-none resize-vertical
                                ${isReadOnly ? 'bg-gray-100 cursor-not-allowed' : ''}`,
                                                        rows: 3
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 588,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                lineNumber: 584,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm sm:text-base font-medium text-[#B11016] mb-4",
                                                        children: "COMPANY SIZE (Number of Employees)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 601,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: companySize,
                                                        onChange: (e)=>setCompanySize(e.target.value),
                                                        disabled: isReadOnly,
                                                        className: `border border-gray-300 rounded-md py-2 px-3 focus:border-[#B11016] outline-none w-full
                                ${isReadOnly ? 'bg-gray-100 cursor-not-allowed' : ''}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Select Company Size"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 611,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "1-10",
                                                                children: "1-10 employees"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 612,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "11-50",
                                                                children: "11-50 employees"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 613,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "51-200",
                                                                children: "51-200 employees"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 614,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "201-500",
                                                                children: "201-500 employees"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 615,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "501-1000",
                                                                children: "501-1000 employees"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 616,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "1000+",
                                                                children: "1000+ employees"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 617,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Other",
                                                                children: "Other (specify number)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 618,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 604,
                                                        columnNumber: 37
                                                    }, this),
                                                    companySize === "Other" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: customCompanySize,
                                                        onChange: (e)=>setCustomCompanySize(e.target.value),
                                                        placeholder: "Enter exact number of employees",
                                                        readOnly: isReadOnly,
                                                        className: `w-full border-b-2 border-gray-300 focus:border-[#B11016] outline-none py-2 mt-2
                                    ${isReadOnly ? 'bg-gray-100 cursor-not-allowed' : ''}`,
                                                        min: "1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 622,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                lineNumber: 600,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm sm:text-base font-medium text-[#B11016] mb-4",
                                                        children: "COMPANY INDUSTRY"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 637,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: industry,
                                                        onChange: (e)=>setIndustry(e.target.value),
                                                        disabled: isReadOnly,
                                                        className: `border border-gray-300 rounded-md py-2 px-3 focus:border-[#B11016] outline-none w-full
                                ${isReadOnly ? 'bg-gray-100 cursor-not-allowed' : ''}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "Select Industry"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 647,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Financial Technology"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 648,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Healthcare"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 649,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Education"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 650,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Technology"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 651,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Manufacturing"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 652,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Retail"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 653,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Finance"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 654,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Consulting"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 655,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Real Estate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 656,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                children: "Media & Entertainment"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 657,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "Other",
                                                                children: "Other"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 658,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 640,
                                                        columnNumber: 37
                                                    }, this),
                                                    industry === "Other" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: customIndustry,
                                                        onChange: (e)=>setCustomIndustry(e.target.value),
                                                        placeholder: "Enter industry",
                                                        readOnly: isReadOnly,
                                                        className: `w-full border-b-2 border-gray-300 focus:border-[#B11016] outline-none py-2 mt-2
                                    ${isReadOnly ? 'bg-gray-100 cursor-not-allowed' : ''}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 661,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                lineNumber: 636,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm sm:text-base font-medium text-[#B11016] mb-2",
                                                                children: "COMPANY LOGO"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 677,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                onDrop: !isReadOnly ? handleLogoDrop : undefined,
                                                                onDragOver: !isReadOnly ? (e)=>e.preventDefault() : undefined,
                                                                className: `border-2 border-dashed border-[#B11016] rounded-lg p-6 text-center
                                    ${!isReadOnly ? 'cursor-pointer hover:border-[#B11016]' : 'cursor-not-allowed bg-gray-100'}`,
                                                                onClick: !isReadOnly ? ()=>logoInputRef.current?.click() : undefined,
                                                                children: [
                                                                    existingLogoUrl && !companyLogo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                src: existingLogoUrl,
                                                                                alt: "Company Logo",
                                                                                className: "max-w-full max-h-24 mx-auto mb-2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                                lineNumber: 689,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-gray-500 text-sm",
                                                                                children: "Current logo"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                                lineNumber: 694,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                                        lineNumber: 688,
                                                                        columnNumber: 49
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-gray-500",
                                                                        children: [
                                                                            isReadOnly ? "Logo upload disabled" : "Drag & drop logo or ",
                                                                            !isReadOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "underline text-[#B11016]",
                                                                                children: "Browse"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                                lineNumber: 700,
                                                                                columnNumber: 69
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                                        lineNumber: 697,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "file",
                                                                        accept: ".jpeg,.jpg,.png",
                                                                        ref: logoInputRef,
                                                                        className: "hidden",
                                                                        onChange: handleLogoChange,
                                                                        disabled: isReadOnly
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                                        lineNumber: 703,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 680,
                                                                columnNumber: 41
                                                            }, this),
                                                            companyLogo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-green-700 mt-2 text-sm",
                                                                children: [
                                                                    "New upload: ",
                                                                    companyLogo.name
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 713,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 676,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm sm:text-base font-medium text-[#B11016] mb-2",
                                                                children: "BRAND COLOR"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 721,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center space-x-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "color",
                                                                        value: color,
                                                                        onChange: (e)=>setColor(e.target.value),
                                                                        disabled: isReadOnly,
                                                                        className: `w-12 h-12 border rounded
                                        ${isReadOnly ? 'cursor-not-allowed' : ''}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                                        lineNumber: 725,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: color,
                                                                        onChange: (e)=>setColor(e.target.value),
                                                                        readOnly: isReadOnly,
                                                                        className: `border border-gray-300 rounded px-3 py-2 font-mono
                                        ${isReadOnly ? 'bg-gray-100 cursor-not-allowed' : ''}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                                        lineNumber: 733,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 724,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 720,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                lineNumber: 674,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                        lineNumber: 499,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "flex items-center space-x-3 text-[#B11016] text-2xl font-bold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#B11016] text-base font-bold leading-none",
                                                        children: "2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 749,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Point of Contact"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 752,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                lineNumber: 748,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm sm:text-base font-medium text-[#B11016] mb-2",
                                                        children: "FULL NAME"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 757,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative w-full group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: fullname,
                                                                readOnly: true,
                                                                placeholder: "Loading...",
                                                                className: "appearance-none w-full px-2 py-3 border-0    placeholder-gray-400 text-gray-900 bg-gray-100    focus:outline-none text-sm sm:text-base cursor-not-allowed"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 761,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute left-0 bottom-0 w-full h-[2px] bg-gray-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 770,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute left-0 bottom-0 h-[2px] bg-[#B11016]   transition-transform duration-300 ease-in-out    origin-center scale-x-0 w-full    group-focus-within:scale-x-100"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 771,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 760,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                lineNumber: 756,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm sm:text-base font-medium text-[#B11016] mb-2",
                                                        children: "CONTACT EMAIL *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 780,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative w-full group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "email",
                                                                value: contactEmail,
                                                                readOnly: true,
                                                                placeholder: "Loading...",
                                                                className: "appearance-none w-full px-2 py-3 border-0    placeholder-gray-400 text-gray-900 bg-gray-100    focus:outline-none text-sm sm:text-base cursor-not-allowed",
                                                                required: true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 784,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute left-0 bottom-0 w-full h-[2px] bg-gray-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 794,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute left-0 bottom-0 h-[2px] bg-[#B11016]   transition-transform duration-300 ease-in-out    origin-center scale-x-0 w-full    group-focus-within:scale-x-100"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 795,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 783,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                lineNumber: 779,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm sm:text-base font-medium text-[#B11016] mb-2",
                                                        children: "POSITION/TITLE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 804,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative w-full group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: position,
                                                                onChange: (e)=>setPosition(e.target.value),
                                                                placeholder: "Enter Position/Title",
                                                                readOnly: isReadOnly,
                                                                className: `appearance-none w-full px-0 py-3 border-0 
                                    placeholder-gray-400 text-gray-900 
                                    focus:outline-none text-sm sm:text-base
                                    ${isReadOnly ? 'bg-gray-100 cursor-not-allowed' : 'bg-transparent'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 808,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute left-0 bottom-0 w-full h-[2px] bg-gray-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 819,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute left-0 bottom-0 h-[2px] bg-[#B11016]   transition-transform duration-300 ease-in-out    origin-center scale-x-0 w-full    group-focus-within:scale-x-100"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 820,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 807,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                lineNumber: 803,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm sm:text-base font-medium text-[#B11016] mb-2",
                                                        children: "CONTACT NUMBER"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 829,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative w-full group",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "tel",
                                                                value: contactNumber,
                                                                onChange: (e)=>setContactNumber(e.target.value),
                                                                placeholder: "Enter your Contact Number",
                                                                readOnly: isReadOnly,
                                                                className: `appearance-none w-full px-0 py-3 border-0 
                                    placeholder-gray-400 text-gray-900 
                                    focus:outline-none text-sm sm:text-base
                                    ${isReadOnly ? 'bg-gray-100 cursor-not-allowed' : 'bg-transparent'}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 833,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute left-0 bottom-0 w-full h-[2px] bg-gray-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 844,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute left-0 bottom-0 h-[2px] bg-[#B11016]    transition-transform duration-300 ease-in-out    origin-center scale-x-0 w-full    group-focus-within:scale-x-100"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                                lineNumber: 845,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 832,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                lineNumber: 828,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                        lineNumber: 747,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/companysetup/page.tsx",
                                lineNumber: 497,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full mt-10",
                                children: hasExistingCompany && isEditMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isLoading,
                                            className: "flex-1 bg-[#B11016] border-2 border-transparent text-white py-3 px-6 font-bold text-lg hover:bg-white hover:border-[#B11016] hover:text-[#B11016] transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                            children: getButtonText()
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/companysetup/page.tsx",
                                            lineNumber: 858,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleCancelEdit,
                                            disabled: isLoading,
                                            className: "flex-1 bg-white border-2 border-[#B11016] text-[#B11016] py-3 px-6 font-bold text-lg hover:bg-[#B11016] hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                            children: "CANCEL"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/companysetup/page.tsx",
                                            lineNumber: 865,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/companysetup/page.tsx",
                                    lineNumber: 857,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isLoading,
                                    className: "w-full bg-[#B11016] border-2 border-transparent text-white py-3 px-6 font-bold text-lg hover:bg-white hover:border-[#B11016] hover:text-[#B11016] transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: getButtonText()
                                }, void 0, false, {
                                    fileName: "[project]/src/app/companysetup/page.tsx",
                                    lineNumber: 875,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/companysetup/page.tsx",
                                lineNumber: 855,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/companysetup/page.tsx",
                        lineNumber: 496,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: showSuccessModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "fixed inset-0 z-50 flex items-center justify-center p-4",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: 0.3
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Confetti, {
                                    show: showSuccessModal
                                }, void 0, false, {
                                    fileName: "[project]/src/app/companysetup/page.tsx",
                                    lineNumber: 897,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute inset-0 bg-black/30 backdrop-blur-sm",
                                    onClick: handleCloseModal,
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    exit: {
                                        opacity: 0
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/companysetup/page.tsx",
                                    lineNumber: 900,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden",
                                    initial: {
                                        scale: 0.8,
                                        opacity: 0
                                    },
                                    animate: {
                                        scale: 1,
                                        opacity: 1
                                    },
                                    exit: {
                                        scale: 0.8,
                                        opacity: 0
                                    },
                                    transition: {
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 20
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleCloseModal,
                                            className: "absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTimes"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/companysetup/page.tsx",
                                                lineNumber: 921,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/companysetup/page.tsx",
                                            lineNumber: 917,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-8 text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            className: "absolute inset-0 bg-green-200 rounded-full",
                                                            animate: {
                                                                scale: [
                                                                    1,
                                                                    1.5,
                                                                    2
                                                                ],
                                                                opacity: [
                                                                    0.3,
                                                                    0.1,
                                                                    0
                                                                ]
                                                            },
                                                            transition: {
                                                                duration: 2,
                                                                repeat: Infinity,
                                                                ease: "easeOut"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/companysetup/page.tsx",
                                                            lineNumber: 929,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                            className: "absolute inset-0 bg-green-200 rounded-full",
                                                            animate: {
                                                                scale: [
                                                                    1,
                                                                    1.5,
                                                                    2
                                                                ],
                                                                opacity: [
                                                                    0.3,
                                                                    0.1,
                                                                    0
                                                                ]
                                                            },
                                                            transition: {
                                                                duration: 2,
                                                                repeat: Infinity,
                                                                ease: "easeOut",
                                                                delay: 0.5
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/companysetup/page.tsx",
                                                            lineNumber: 934,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheckCircle"], {
                                                            className: "text-green-600 text-2xl relative z-10"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/companysetup/page.tsx",
                                                            lineNumber: 939,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/companysetup/page.tsx",
                                                    lineNumber: 927,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h3, {
                                                    className: "text-2xl font-bold text-gray-900 mb-4",
                                                    initial: {
                                                        opacity: 0,
                                                        y: 20
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    transition: {
                                                        delay: 0.3,
                                                        duration: 0.4
                                                    },
                                                    children: isNewCompany ? "Company Created!" : "Company Updated!"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/companysetup/page.tsx",
                                                    lineNumber: 943,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                                    className: "text-gray-600 mb-8 leading-relaxed",
                                                    initial: {
                                                        opacity: 0,
                                                        y: 20
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    transition: {
                                                        delay: 0.4,
                                                        duration: 0.4
                                                    },
                                                    children: modalMessage
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/companysetup/page.tsx",
                                                    lineNumber: 953,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "space-y-3",
                                                    initial: {
                                                        opacity: 0,
                                                        y: 20
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    transition: {
                                                        delay: 0.5,
                                                        duration: 0.4
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleCloseModal,
                                                        className: "w-full bg-[#B11016] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#800b10] transition-colors transform hover:scale-105 active:scale-95",
                                                        children: isNewCompany ? "Go to Dashboard" : "Continue"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/companysetup/page.tsx",
                                                        lineNumber: 969,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/companysetup/page.tsx",
                                                    lineNumber: 963,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/companysetup/page.tsx",
                                            lineNumber: 925,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/companysetup/page.tsx",
                                    lineNumber: 909,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/companysetup/page.tsx",
                            lineNumber: 889,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/companysetup/page.tsx",
                        lineNumber: 887,
                        columnNumber: 21
                    }, this)
                ]
            }, "dashboard-page", true, {
                fileName: "[project]/src/app/companysetup/page.tsx",
                lineNumber: 442,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/companysetup/page.tsx",
            lineNumber: 441,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/companysetup/page.tsx",
        lineNumber: 440,
        columnNumber: 9
    }, this);
}
const Confetti = ({ show })=>{
    const [particles, setParticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (show) {
            const newParticles = Array.from({
                length: 50
            }, (_, i)=>({
                    id: i,
                    x: Math.random() * 100,
                    rotation: Math.random() * 360,
                    color: [
                        '#ff6b6b',
                        '#4ecdc4',
                        '#45b7d1',
                        '#f9ca24',
                        '#6c5ce7',
                        '#a29bfe',
                        '#fd79a8',
                        '#00b894',
                        '#e84393'
                    ][Math.floor(Math.random() * 9)],
                    size: Math.random() * 8 + 4,
                    drift: (Math.random() - 0.5) * 2
                }));
            setParticles(newParticles);
            const timer = setTimeout(()=>setParticles([]), 3000);
            return ()=>clearTimeout(timer);
        }
    }, [
        show
    ]);
    if (!show || particles.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 pointer-events-none z-[60] overflow-hidden",
        children: particles.map((particle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute rounded-sm",
                style: {
                    backgroundColor: particle.color,
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    left: `${particle.x}%`
                },
                initial: {
                    y: -20,
                    opacity: 1
                },
                animate: {
                    y: window.innerHeight + 100,
                    x: particle.drift * 100,
                    rotate: 720,
                    opacity: 0
                },
                transition: {
                    duration: 3,
                    ease: "easeOut",
                    delay: Math.random() * 0.5
                }
            }, particle.id, false, {
                fileName: "[project]/src/app/companysetup/page.tsx",
                lineNumber: 1025,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/src/app/companysetup/page.tsx",
        lineNumber: 1023,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
}),

};

//# sourceMappingURL=src_151fb455._.js.map