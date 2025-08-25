(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/DashboardSidebar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>DashboardSidebar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function DashboardSidebar() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardSidebar.useEffect": ()=>{
            const storedRole = sessionStorage.getItem("role");
            setRole(storedRole);
        }
    }["DashboardSidebar.useEffect"], []);
    // Menus
    const collabMenu = [
        {
            href: "/dashboard",
            icon: "/images/Sidebar_home.png",
            label: "Home"
        },
        {
            href: "/collabapproved",
            icon: "/images/Folder_check.png",
            label: "Approved"
        },
        {
            href: "/collabinprocess",
            icon: "/images/folder-send.png",
            label: "In Process"
        },
        {
            href: "/collabrejected",
            icon: "/images/Folder_del.png",
            label: "Rejected"
        }
    ];
    const employeeMenu = [
        {
            href: "/bpidashboard",
            icon: "/images/Sidebar_home.png",
            label: "Home"
        },
        {
            href: "/bpiapproved",
            icon: "/images/Folder_check.png",
            label: "Approved"
        },
        {
            href: "/bpiinprocess",
            icon: "/images/folder-send.png",
            label: "In Process"
        },
        {
            href: "/bpirejected",
            icon: "/images/Folder_del.png",
            label: "Rejected"
        },
        {
            href: "/bpifilesviewer",
            icon: "/images/Folder_del.png",
            label: "FileViewer"
        },
        {
            href: "/companylist",
            icon: "/images/building-03.png",
            label: "Collaborators"
        },
        {
            href: "/bpifindcollab",
            icon: "/images/peer-to-peer-02.png",
            label: "Find Collaborators"
        }
    ];
    const adminMenu = [
        {
            href: "/admindashboard",
            icon: "/images/Sidebar_home.png",
            label: "Home"
        },
        {
            href: "/bpiapproved",
            icon: "/images/Folder_check.png",
            label: "Approved"
        },
        {
            href: "/bpiinprocess",
            icon: "/images/folder-send.png",
            label: "In Process"
        },
        {
            href: "/bpirejected",
            icon: "/images/Folder_del.png",
            label: "Rejected"
        },
        {
            href: "/adminfilesviewer",
            icon: "/images/Folder_del.png",
            label: "FileViewer"
        },
        {
            href: "/companylist",
            icon: "/images/building-03.png",
            label: "Collaborators"
        },
        {
            href: "/bpifindcollab",
            icon: "/images/peer-to-peer-02.png",
            label: "Find Collaborators"
        }
    ];
    const menuItems = role === "user" ? collabMenu : role === "employee" ? employeeMenu : role === "admin" ? adminMenu : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].aside, {
        initial: {
            x: -250,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1
        },
        exit: {
            x: -250,
            opacity: 0
        },
        transition: {
            duration: 0.2,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ]
        },
        className: "pl-4 group relative bg-white border-r flex flex-col items-center items-start py-4 space-y-6 h-screen w-20 hover:w-56 transition-all duration-300 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 pl-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/logo/synsei_icon.png",
                        alt: "Logo",
                        className: "w-10"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DashboardSidebar.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-lg font-bold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                        children: "Synsei"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DashboardSidebar.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DashboardSidebar.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex flex-col space-y-2 w-[92%]",
                children: menuItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: item.href,
                        className: "flex items-center gap-3 rounded-lg transition-all duration-200\n              ".concat(pathname === item.href ? "bg-[#FEC2C5]" : "hover:bg-gray-100", "\n              px-2 py-2 w-12 group-hover:w-full"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: item.icon,
                                alt: item.label,
                                className: "w-8 h-8"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DashboardSidebar.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/DashboardSidebar.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/DashboardSidebar.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/DashboardSidebar.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DashboardSidebar.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(DashboardSidebar, "ibQAlE8ciiA42ryWKgIFstvmTw8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = DashboardSidebar;
var _c;
__turbopack_context__.k.register(_c, "DashboardSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ProtectedRoute.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ProtectedRoute
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ProtectedRoute(param) {
    let { children, allowedRoles } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProtectedRoute.useEffect": ()=>{
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
        }
    }["ProtectedRoute.useEffect"], [
        router,
        allowedRoles
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(ProtectedRoute, "+gdBHa1gbW9Mmc3iF6LvDTPtsos=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProtectedRoute;
var _c;
__turbopack_context__.k.register(_c, "ProtectedRoute");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/bpiapproved/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>BpiApproved
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DashboardSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DashboardSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProtectedRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProtectedRoute.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function BpiApproved() {
    _s();
    const API = ("TURBOPACK compile-time value", "http://localhost:5000");
    const [proposals, setProposals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BpiApproved.useEffect": ()=>{
            const fetchAllProposals = {
                "BpiApproved.useEffect.fetchAllProposals": async ()=>{
                    const token = sessionStorage.getItem("access_token");
                    try {
                        const res = await fetch("".concat(API, "/api/proposal?status=APPROVED"), {
                            headers: {
                                Authorization: "Bearer ".concat(token),
                                "Content-Type": "application/json"
                            }
                        });
                        if (!res.ok) throw new Error("Failed to fetch proposals");
                        const data = await res.json();
                        // Extract proposals from the response structure
                        const proposalsList = data.proposals || [];
                        setProposals(Array.isArray(proposalsList) ? proposalsList : []);
                    } catch (err) {
                        console.error("Error fetching proposals:", err);
                        setProposals([]);
                    } finally{
                        setLoading(false);
                    }
                }
            }["BpiApproved.useEffect.fetchAllProposals"];
            fetchAllProposals();
        }
    }["BpiApproved.useEffect"], [
        API
    ]);
    const formatDate = (dateString)=>{
        const date = new Date(dateString);
        return "".concat(date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        }), " | ").concat(date.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true
        }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProtectedRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        allowedRoles: [
            "employee",
            "admin"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen bg-gray-50 overflow-x-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DashboardSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/bpiapproved/page.tsx",
                    lineNumber: 59,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 py-3 sm:py-6 pl-[2%] sm:pl-[3%] pr-[3%] sm:pr-[5%] overflow-x-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-red-700",
                            children: "Approved Proposals"
                        }, void 0, false, {
                            fileName: "[project]/src/app/bpiapproved/page.tsx",
                            lineNumber: 63,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600 mt-1 border-b-3 border-black pb-2 sm:pb-4 border-red-700",
                            children: "Track all your collaboration proposals that have been approved with BPI."
                        }, void 0, false, {
                            fileName: "[project]/src/app/bpiapproved/page.tsx",
                            lineNumber: 64,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border border-gray-500 rounded-lg p-5 bg-white drop-shadow-xl mt-5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-gray-500",
                                    children: "Loading proposals..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/bpiapproved/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 37
                                }, this) : proposals.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-gray-500",
                                    children: "No approved proposals found."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/bpiapproved/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 37
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-sm rounded-lg overflow-hidden min-w-[600px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 text-left text-red-700 whitespace-nowrap",
                                                        children: "Proposal ID"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/bpiapproved/page.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 text-left text-red-700 whitespace-nowrap",
                                                        children: "Proposal Title"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/bpiapproved/page.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 text-left text-red-700 whitespace-nowrap",
                                                        children: "Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/bpiapproved/page.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 text-left text-red-700 whitespace-nowrap",
                                                        children: "Approved Date"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/bpiapproved/page.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 text-center text-red-700 whitespace-nowrap",
                                                        children: "Action"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/bpiapproved/page.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/bpiapproved/page.tsx",
                                                lineNumber: 77,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/bpiapproved/page.tsx",
                                            lineNumber: 76,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: proposals.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: "border-t",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3 whitespace-nowrap",
                                                            children: p.id
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/bpiapproved/page.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3",
                                                            children: p.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/bpiapproved/page.tsx",
                                                            lineNumber: 89,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3",
                                                            children: p.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/bpiapproved/page.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3 whitespace-nowrap",
                                                            children: formatDate(p.updated_at || p.created_at)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/bpiapproved/page.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 53
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3 text-center",
                                                            children: "⋮"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/bpiapproved/page.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 53
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/app/bpiapproved/page.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 49
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/bpiapproved/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/bpiapproved/page.tsx",
                                    lineNumber: 75,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/bpiapproved/page.tsx",
                                lineNumber: 69,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/bpiapproved/page.tsx",
                            lineNumber: 68,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/bpiapproved/page.tsx",
                    lineNumber: 62,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/bpiapproved/page.tsx",
            lineNumber: 57,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/bpiapproved/page.tsx",
        lineNumber: 55,
        columnNumber: 9
    }, this);
}
_s(BpiApproved, "nyz0UqXwvRWw5ueX9mBP7F1EJjg=");
_c = BpiApproved;
var _c;
__turbopack_context__.k.register(_c, "BpiApproved");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_c0626f33._.js.map