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
"[project]/src/app/adminusermanagement/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>UserManagement
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DashboardSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DashboardSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProtectedRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProtectedRoute.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function UserManagement() {
    _s();
    const API = ("TURBOPACK compile-time value", "http://localhost:5000");
    const [users, setUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [updating, setUpdating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedUsers, setSelectedUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [showCreateModal, setShowCreateModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showRoleModal, setShowRoleModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showEditUserModal, setShowEditUserModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showDeleteModal, setShowDeleteModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bulkRole, setBulkRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [bulkDepartment, setBulkDepartment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [roleFilter, setRoleFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [statusFilter, setStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [selectedUserForEdit, setSelectedUserForEdit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedUserForDelete, setSelectedUserForDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [departments, setDepartments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [departmentFilter, setDepartmentFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    // New user form state
    const [newUser, setNewUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
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
    const [editUser, setEditUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        first_name: '',
        last_name: '',
        email: '',
        role: '',
        contact_number: '',
        position: '',
        department_id: ''
    });
    const handleRoleChange = (newRole)=>{
        setNewUser({
            ...newUser,
            role: newRole,
            department_id: newRole === 'admin' ? '' : newUser.department_id
        });
    };
    const handleEditRoleChange = (newRole)=>{
        setEditUser({
            ...editUser,
            role: newRole,
            department_id: newRole === 'admin' ? '' : editUser.department_id
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserManagement.useEffect": ()=>{
            const fetchDepartments = {
                "UserManagement.useEffect.fetchDepartments": async ()=>{
                    const token = sessionStorage.getItem("access_token");
                    try {
                        const deptRes = await fetch("".concat(API, "/api/department"), {
                            headers: {
                                Authorization: "Bearer ".concat(token),
                                "Content-Type": "application/json"
                            }
                        });
                        if (!deptRes.ok) throw new Error("Failed to fetch departments");
                        const data = await deptRes.json();
                        setDepartments(data.departments || []);
                    } catch (err) {
                        console.error("Error fetching departments:", err);
                        setDepartments([]);
                    }
                }
            }["UserManagement.useEffect.fetchDepartments"];
            fetchDepartments();
        }
    }["UserManagement.useEffect"], [
        API
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserManagement.useEffect": ()=>{
            const fetchAllUsers = {
                "UserManagement.useEffect.fetchAllUsers": async ()=>{
                    const token = sessionStorage.getItem("access_token");
                    try {
                        const res = await fetch("".concat(API, "/api/user"), {
                            headers: {
                                Authorization: "Bearer ".concat(token),
                                "Content-Type": "application/json"
                            }
                        });
                        if (!res.ok) throw new Error("Failed to fetch users");
                        const data = await res.json();
                        setUsers(Array.isArray(data) ? data : []); // backend returns an array
                    } catch (err) {
                        console.error("Error fetching users:", err);
                        setUsers([]);
                    } finally{
                        setLoading(false);
                    }
                }
            }["UserManagement.useEffect.fetchAllUsers"];
            fetchAllUsers();
        }
    }["UserManagement.useEffect"], [
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
    // Get department name by ID
    const getDepartmentName = (departmentId, userRole)=>{
        // Admins should not have departments
        if (userRole === 'admin') return "Admin Department";
        if (!departmentId) return "N/A";
        // Convert departmentId to string for comparison since backend returns string IDs
        const dept = departments.find((d)=>parseInt(d.id) === departmentId || d.id === String(departmentId));
        return dept ? dept.name : "N/A";
    };
    // Filter users based on search and filters
    const filteredUsers = users.filter((user)=>{
        const matchesSearch = user.full_name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = roleFilter === "all" || user.role === roleFilter;
        const matchesDepartment = departmentFilter === "all" || String(user.department_id) === departmentFilter;
        return matchesSearch && matchesRole && matchesDepartment;
    });
    // Handle user update (role and department)
    const handleUserUpdate = async (userId, updates)=>{
        const token = sessionStorage.getItem("access_token");
        setUpdating(userId);
        try {
            const res = await fetch("".concat(API, "/api/user/").concat(userId), {
                method: 'PUT',
                headers: {
                    Authorization: "Bearer ".concat(token),
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updates)
            });
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Failed to update user");
            }
            const updatedUserFromServer = await res.json();
            // Update local state with the actual server response
            setUsers((prevUsers)=>prevUsers.map((user)=>user.id === userId ? {
                        ...user,
                        first_name: updatedUserFromServer.first_name,
                        last_name: updatedUserFromServer.last_name,
                        full_name: updatedUserFromServer.full_name,
                        email: updatedUserFromServer.email,
                        contact_number: updatedUserFromServer.contact_number,
                        role: updatedUserFromServer.role,
                        position: updatedUserFromServer.position,
                        department_id: updatedUserFromServer.department_id
                    } : user));
            alert("User updated successfully!");
        } catch (err) {
            console.error("Error updating user:", err);
            alert("Error updating user: ".concat(err instanceof Error ? err.message : 'Unknown error'));
        } finally{
            setUpdating(null);
        }
    };
    // Open edit user modal
    const openEditUserModal = (user)=>{
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
    const handleEditUserSubmit = async ()=>{
        if (!selectedUserForEdit) return;
        const updates = {
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
    const openDeleteModal = (user)=>{
        setSelectedUserForDelete(user);
        setShowDeleteModal(true);
    };
    // Handle delete user
    const handleDeleteUser = async ()=>{
        if (!selectedUserForDelete) return;
        const token = sessionStorage.getItem("access_token");
        try {
            const res = await fetch("".concat(API, "/api/user/").concat(selectedUserForDelete.id), {
                method: "DELETE",
                headers: {
                    Authorization: "Bearer ".concat(token)
                }
            });
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Failed to delete user");
            }
            setUsers((prevUsers)=>prevUsers.filter((user)=>user.id !== selectedUserForDelete.id));
            alert("User deleted successfully!");
        } catch (err) {
            console.error("Error deleting user:", err);
            alert("Error deleting user: ".concat(err instanceof Error ? err.message : "Unknown error"));
        } finally{
            setShowDeleteModal(false);
            setSelectedUserForDelete(null);
        }
    };
    // Update bulk operations to handle both role and department
    const handleBulkAssignment = async ()=>{
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
            const updates = {};
            if (bulkRole) updates.role = bulkRole;
            if (bulkDepartment) updates.department_id = parseInt(bulkDepartment);
            const promises = Array.from(selectedUsers).map((userId)=>fetch("".concat(API, "/api/user/").concat(userId), {
                    method: "PUT",
                    headers: {
                        Authorization: "Bearer ".concat(token),
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(updates)
                }));
            const responses = await Promise.all(promises);
            // Get all updated user data from server responses
            const updatedUsersData = await Promise.all(responses.map((response)=>response.json()));
            setUsers((prevUsers)=>prevUsers.map((user)=>{
                    if (selectedUsers.has(user.id)) {
                        const updatedUser = updatedUsersData.find((u)=>u.id === user.id);
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
                }));
            setSelectedUsers(new Set());
            setBulkRole("");
            setBulkDepartment("");
            setShowRoleModal(false);
            alert("Bulk assignment completed!");
        } catch (err) {
            console.error("Error in bulk assignment:", err);
            alert("Error in bulk assignment: ".concat(err instanceof Error ? err.message : "Unknown error"));
        }
    };
    // Handle create new user
    const handleCreateUser = async ()=>{
        if (!newUser.first_name || !newUser.last_name || !newUser.email || !newUser.password) {
            alert('Please fill in all required fields');
            return;
        }
        const token = sessionStorage.getItem("access_token");
        try {
            const userData = {
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
            const res = await fetch("".concat(API, "/api/auth/register"), {
                method: 'POST',
                headers: {
                    Authorization: "Bearer ".concat(token),
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || "Failed to create user");
            }
            const data = await res.json();
            // Create user object that matches the expected format for the frontend
            const newUserForState = {
                id: data.user.id,
                first_name: data.user.first_name,
                last_name: data.user.last_name,
                full_name: data.user.full_name || "".concat(data.user.first_name, " ").concat(data.user.last_name),
                email: data.user.email,
                contact_number: data.user.contact_number,
                role: data.user.role,
                position: data.user.position,
                department_id: data.user.department_id,
                created_at: data.user.created_at || new Date().toISOString()
            };
            setUsers((prev)=>[
                    ...prev,
                    newUserForState
                ]);
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
            alert("Error creating user: ".concat(err instanceof Error ? err.message : 'Unknown error'));
        }
    };
    // Toggle user selection for bulk operations
    const toggleUserSelection = (userId)=>{
        const newSelection = new Set(selectedUsers);
        if (newSelection.has(userId)) {
            newSelection.delete(userId);
        } else {
            newSelection.add(userId);
        }
        setSelectedUsers(newSelection);
    };
    // Select all filtered users
    const selectAllUsers = ()=>{
        const allFilteredIds = new Set(filteredUsers.map((user)=>user.id));
        setSelectedUsers(allFilteredIds);
    };
    // Clear all selections
    const clearSelection = ()=>{
        setSelectedUsers(new Set());
    };
    const getRoleColor = (role)=>{
        switch(role){
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProtectedRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        allowedRoles: [
            "admin"
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-screen  overflow-x-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DashboardSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                        lineNumber: 502,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 py-3 sm:py-6 pl-[2%] sm:pl-[3%] pr-[3%] sm:pr-[5%] overflow-x-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4 border-b-3 pb-2 sm:pb-4 border-red-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl font-bold text-red-700",
                                                children: "User Management"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                lineNumber: 508,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 mt-1 ",
                                                children: "Manage users, assign roles and departments, and control user access across the system."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                lineNumber: 509,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                        lineNumber: 507,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push("/admindashboard"),
                                        className: "flex items-center gap-2 bg-red-700 text-white px-4 py-2 border-2 rounded-md hover:bg-white hover:text-[#B11016] hover-border-[#B11016]  transition",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaArrowLeft"], {}, void 0, false, {
                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                lineNumber: 518,
                                                columnNumber: 29
                                            }, this),
                                            " Back to Dashboard"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                        lineNumber: 514,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                lineNumber: 506,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 grid grid-cols-1 sm:grid-cols-4 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-4 rounded-lg border border-gray-500 text-center drop-shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-blue-600",
                                                children: users.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                lineNumber: 525,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-600",
                                                children: "Total Users"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                lineNumber: 526,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUsers"], {
                                                className: "text-3xl text-blue-600 mx-auto mt-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                lineNumber: 527,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                        lineNumber: 524,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-4 rounded-lg border border-gray-500 text-center drop-shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-green-600",
                                                children: users.filter((u)=>u.role === 'user').length
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                lineNumber: 530,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-600",
                                                children: "Collaborators"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                lineNumber: 531,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUserFriends"], {
                                                className: "text-3xl text-green-600 mx-auto mt-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                lineNumber: 532,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                        lineNumber: 529,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-4 rounded-lg border border-gray-500 text-center drop-shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-purple-600",
                                                children: users.filter((u)=>u.role === 'employee').length
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                lineNumber: 535,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-600",
                                                children: "Employees"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                lineNumber: 536,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUserTie"], {
                                                className: "text-3xl text-purple-600 mx-auto mt-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                lineNumber: 537,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                        lineNumber: 534,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white p-4 rounded-lg border border-gray-500 text-center drop-shadow-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-yellow-500",
                                                children: users.filter((u)=>u.role === 'admin').length
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                lineNumber: 540,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-600",
                                                children: "Administrators"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                lineNumber: 541,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaUserShield"], {
                                                className: "text-3xl text-yellow-500 mx-auto mt-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                lineNumber: 542,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                        lineNumber: 539,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                lineNumber: 523,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-lg border border-gray-500 p-5 mt-5 mb-5 drop-shadow-md",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-[#B11016] mb-2",
                                                        children: "Search Users"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                        lineNumber: 552,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "Search by name or email...",
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                                        value: searchTerm,
                                                        onChange: (e)=>setSearchTerm(e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                        lineNumber: 553,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                lineNumber: 551,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-[#B11016] mb-2",
                                                        children: "Filter by Role"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                        lineNumber: 564,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                                        value: roleFilter,
                                                        onChange: (e)=>setRoleFilter(e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "all",
                                                                children: "All Roles"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                                lineNumber: 570,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "admin",
                                                                children: "Super Admin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                                lineNumber: 571,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "employee",
                                                                children: "Employee"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                                lineNumber: 572,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "user",
                                                                children: "Collaborator"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                                lineNumber: 573,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                        lineNumber: 565,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                lineNumber: 563,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-[#B11016] mb-2",
                                                        children: "Filter by Department"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                        lineNumber: 579,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                                        value: departmentFilter,
                                                        onChange: (e)=>setDepartmentFilter(e.target.value),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "all",
                                                                children: "All Departments"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                                lineNumber: 587,
                                                                columnNumber: 33
                                                            }, this),
                                                            departments.map((dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: dept.id,
                                                                    children: dept.name
                                                                }, dept.id, false, {
                                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                                    lineNumber: 589,
                                                                    columnNumber: 33
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                        lineNumber: 582,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                lineNumber: 578,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-[#B11016] mb-1",
                                                        children: "Actions"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                        lineNumber: 598,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowCreateModal(true),
                                                        className: "w-full px-4 mt-0.5 py-2.5 bg-[#B11016] border border-2 text-white rounded-md hover:bg-white hover:border-[#B11016] hover:text-[#B11016] transition text-sm",
                                                        children: "Create User"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                        lineNumber: 599,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                lineNumber: 597,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                        lineNumber: 549,
                                        columnNumber: 25
                                    }, this),
                                    selectedUsers.size > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t pt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 flex-wrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-gray-700",
                                                    children: [
                                                        selectedUsers.size,
                                                        " user(s) selected"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                    lineNumber: 612,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setShowRoleModal(true),
                                                    className: "px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700",
                                                    children: "Bulk Assign Role/Department"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                    lineNumber: 615,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: selectAllUsers,
                                                    className: "px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700",
                                                    children: "Select All"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                    lineNumber: 621,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: clearSelection,
                                                    className: "px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700",
                                                    children: "Clear Selection"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                    lineNumber: 627,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 611,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                        lineNumber: 610,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                lineNumber: 548,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-gray-500 rounded-lg p-5 bg-white drop-shadow-xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-x-auto",
                                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-gray-500",
                                        children: "Loading users..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                        lineNumber: 642,
                                        columnNumber: 33
                                    }, this) : filteredUsers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center text-gray-500",
                                        children: "No users found."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                        lineNumber: 644,
                                        columnNumber: 33
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "w-full text-sm rounded-lg overflow-hidden min-w-[1200px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3 text-left text-red-700 whitespace-nowrap",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                onChange: selectedUsers.size === filteredUsers.length ? clearSelection : selectAllUsers,
                                                                checked: selectedUsers.size === filteredUsers.length && filteredUsers.length > 0,
                                                                className: "rounded border-gray-300"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                                lineNumber: 650,
                                                                columnNumber: 49
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                            lineNumber: 649,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3 text-left text-red-700 whitespace-nowrap",
                                                            children: "User ID"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                            lineNumber: 657,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3 text-left text-red-700 whitespace-nowrap",
                                                            children: "Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                            lineNumber: 658,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3 text-left text-red-700 whitespace-nowrap",
                                                            children: "Email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                            lineNumber: 659,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3 text-left text-red-700 whitespace-nowrap",
                                                            children: "Role"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                            lineNumber: 660,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3 text-left text-red-700 whitespace-nowrap",
                                                            children: "Position"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                            lineNumber: 661,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3 text-left text-red-700 whitespace-nowrap",
                                                            children: "Department"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                            lineNumber: 662,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3 text-left text-red-700 whitespace-nowrap",
                                                            children: "Created Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                            lineNumber: 663,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "p-3 text-center text-red-700 whitespace-nowrap",
                                                            children: "Actions"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                            lineNumber: 664,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                    lineNumber: 648,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                lineNumber: 647,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                children: filteredUsers.map((user, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "border-t hover:bg-gray-50 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: selectedUsers.has(user.id),
                                                                    onChange: ()=>toggleUserSelection(user.id),
                                                                    className: "rounded border-gray-300"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                                    lineNumber: 671,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                                lineNumber: 670,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3 whitespace-nowrap",
                                                                children: user.id
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                                lineNumber: 678,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3 font-medium",
                                                                children: user.full_name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                                lineNumber: 679,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3",
                                                                children: user.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                                lineNumber: 680,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-2 py-1 rounded-full text-xs font-medium ".concat(getRoleColor(user.role)),
                                                                    children: user.role
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                                    lineNumber: 682,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                                lineNumber: 681,
                                                                columnNumber: 48
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3",
                                                                children: user.position || "N/A"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                                lineNumber: 686,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3",
                                                                children: getDepartmentName(user.department_id, user.role)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                                lineNumber: 687,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3 whitespace-nowrap",
                                                                children: formatDate(user.created_at)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                                lineNumber: 688,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "p-3 text-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>openEditUserModal(user),
                                                                            className: "text-blue-600 hover:text-blue-800 text-sm font-medium",
                                                                            disabled: updating === user.id,
                                                                            children: updating === user.id ? 'Updating...' : 'Edit'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                                            lineNumber: 691,
                                                                            columnNumber: 56
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-gray-400",
                                                                            children: "|"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                                            lineNumber: 698,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>openDeleteModal(user),
                                                                            className: "text-red-600 hover:text-red-800 text-sm font-medium",
                                                                            children: "Delete"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                                            lineNumber: 699,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                                    lineNumber: 690,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                                lineNumber: 689,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                        lineNumber: 669,
                                                        columnNumber: 45
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                lineNumber: 667,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                        lineNumber: 646,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 640,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                lineNumber: 639,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                        lineNumber: 505,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                lineNumber: 500,
                columnNumber: 13
            }, this),
            showCreateModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/30 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-red-700 mb-4",
                            children: "Create New User"
                        }, void 0, false, {
                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                            lineNumber: 723,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "First Name *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                        lineNumber: 728,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: newUser.first_name,
                                                        onChange: (e)=>setNewUser({
                                                                ...newUser,
                                                                first_name: e.target.value
                                                            }),
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                                        placeholder: "Enter first name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                        lineNumber: 731,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                lineNumber: 727,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-sm font-medium text-gray-700 mb-1",
                                                        children: "Last Name *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                        lineNumber: 742,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: newUser.last_name,
                                                        onChange: (e)=>setNewUser({
                                                                ...newUser,
                                                                last_name: e.target.value
                                                            }),
                                                        className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                                        placeholder: "Enter last name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                        lineNumber: 745,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                lineNumber: 741,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                        lineNumber: 726,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 725,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Email *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 759,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: newUser.email,
                                            onChange: (e)=>setNewUser({
                                                    ...newUser,
                                                    email: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                            placeholder: "Enter email address"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 760,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 758,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Password *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 769,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "password",
                                            value: newUser.password,
                                            onChange: (e)=>setNewUser({
                                                    ...newUser,
                                                    password: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                            placeholder: "Enter password"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 770,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 768,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Contact Number"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 779,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: newUser.contact_number,
                                            onChange: (e)=>setNewUser({
                                                    ...newUser,
                                                    contact_number: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                            placeholder: "Enter contact number"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 780,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 778,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Position"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 789,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: newUser.position,
                                            onChange: (e)=>setNewUser({
                                                    ...newUser,
                                                    position: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                            placeholder: "Enter position/job title"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 790,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 788,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Role"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 799,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: newUser.role,
                                            onChange: (e)=>handleRoleChange(e.target.value),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "user",
                                                    children: "Collaborator"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                    lineNumber: 805,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "employee",
                                                    children: "Employee"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                    lineNumber: 806,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "admin",
                                                    children: "Super Admin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                    lineNumber: 807,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 800,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 798,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Department"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 811,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: newUser.department_id,
                                            onChange: (e)=>setNewUser({
                                                    ...newUser,
                                                    department_id: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                            disabled: newUser.role === 'admin',
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: newUser.role === 'admin' ? 'Admins have no department' : 'Select Department (Optional)'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                    lineNumber: 818,
                                                    columnNumber: 37
                                                }, this),
                                                newUser.role !== 'admin' && departments.map((dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: dept.id,
                                                        children: dept.name
                                                    }, dept.id, false, {
                                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                        lineNumber: 822,
                                                        columnNumber: 41
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 812,
                                            columnNumber: 33
                                        }, this),
                                        newUser.role === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: "Admin users are not assigned to departments"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 828,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 810,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                            lineNumber: 724,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCreateUser,
                                    className: "flex-1 bg-[#B11016] text-white py-2 rounded-md hover:bg-red-700 transition",
                                    children: "Create User"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 835,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
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
                                    },
                                    className: "flex-1 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 841,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                            lineNumber: 834,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                    lineNumber: 722,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                lineNumber: 721,
                columnNumber: 17
            }, this),
            showEditUserModal && selectedUserForEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/30 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-red-700 mb-4",
                            children: "Edit User"
                        }, void 0, false, {
                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                            lineNumber: 868,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-4",
                            children: [
                                "Editing ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: selectedUserForEdit.full_name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 870,
                                    columnNumber: 37
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                            lineNumber: 869,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "First Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                    lineNumber: 875,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: editUser.first_name,
                                                    onChange: (e)=>setEditUser({
                                                            ...editUser,
                                                            first_name: e.target.value
                                                        }),
                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                                    placeholder: "Enter first name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                    lineNumber: 878,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 874,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                                    children: "Last Name *"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                    lineNumber: 889,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: editUser.last_name,
                                                    onChange: (e)=>setEditUser({
                                                            ...editUser,
                                                            last_name: e.target.value
                                                        }),
                                                    className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                                    placeholder: "Enter last name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                    lineNumber: 892,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 888,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 873,
                                    columnNumber: 28
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Email *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 905,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            value: editUser.email,
                                            onChange: (e)=>setEditUser({
                                                    ...editUser,
                                                    email: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                            placeholder: "Enter email address"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 906,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 904,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Contact Number"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 915,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editUser.contact_number,
                                            onChange: (e)=>setEditUser({
                                                    ...editUser,
                                                    contact_number: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                            placeholder: "Enter contact number"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 916,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 914,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Position"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 925,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editUser.position,
                                            onChange: (e)=>setEditUser({
                                                    ...editUser,
                                                    position: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                            placeholder: "Enter position/job title"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 926,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 924,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Current Role"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 935,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ".concat(getRoleColor(selectedUserForEdit.role)),
                                            children: selectedUserForEdit.role
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 936,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editUser.role,
                                            onChange: (e)=>setEditUser({
                                                    ...editUser,
                                                    role: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "user",
                                                    children: "Collaborator"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                    lineNumber: 944,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "employee",
                                                    children: "Employee"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                    lineNumber: 945,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "admin",
                                                    children: "Super Admin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                    lineNumber: 946,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 939,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 934,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Department"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 950,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600 mb-2",
                                            children: [
                                                "Current: ",
                                                getDepartmentName(selectedUserForEdit.department_id, selectedUserForEdit.role)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 951,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: editUser.department_id,
                                            onChange: (e)=>setEditUser({
                                                    ...editUser,
                                                    department_id: e.target.value
                                                }),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                            disabled: editUser.role === 'admin',
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: editUser.role === 'admin' ? 'Admins have no department' : 'No Department'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                    lineNumber: 960,
                                                    columnNumber: 37
                                                }, this),
                                                editUser.role !== 'admin' && departments.map((dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: dept.id,
                                                        children: dept.name
                                                    }, dept.id, false, {
                                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                        lineNumber: 964,
                                                        columnNumber: 41
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 954,
                                            columnNumber: 33
                                        }, this),
                                        editUser.role === 'admin' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500 mt-1",
                                            children: "Admin users are not assigned to departments"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 970,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 949,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                            lineNumber: 872,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleEditUserSubmit,
                                    disabled: updating === selectedUserForEdit.id,
                                    className: "flex-1 bg-[#B11016] text-white py-2 rounded-md hover:bg-red-700 transition disabled:opacity-50",
                                    children: updating === selectedUserForEdit.id ? 'Updating...' : 'Update User'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 977,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
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
                                    },
                                    className: "flex-1 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 984,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                            lineNumber: 976,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                    lineNumber: 867,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                lineNumber: 866,
                columnNumber: 17
            }, this),
            showDeleteModal && selectedUserForDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/30 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-6 w-full max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-red-700 mb-4",
                            children: "Confirm Delete"
                        }, void 0, false, {
                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                            lineNumber: 1011,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-4",
                            children: [
                                "Are you sure you want to delete user ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: selectedUserForDelete.full_name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 1013,
                                    columnNumber: 66
                                }, this),
                                "?"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                            lineNumber: 1012,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-yellow-50 border border-yellow-200 rounded-md p-3 mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-yellow-800 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Warning:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                        lineNumber: 1017,
                                        columnNumber: 33
                                    }, this),
                                    " This action cannot be undone. The user will be permanently removed from the system."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                lineNumber: 1016,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                            lineNumber: 1015,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleDeleteUser,
                                    className: "flex-1 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition",
                                    children: "Delete User"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 1021,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowDeleteModal(false);
                                        setSelectedUserForDelete(null);
                                    },
                                    className: "flex-1 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 1027,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                            lineNumber: 1020,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                    lineNumber: 1010,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                lineNumber: 1009,
                columnNumber: 17
            }, this),
            showRoleModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/30 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-6 w-full max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-red-700 mb-4",
                            children: "Bulk Assignment"
                        }, void 0, false, {
                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                            lineNumber: 1045,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-4",
                            children: [
                                "Assign role and/or department to ",
                                selectedUsers.size,
                                " selected user(s)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                            lineNumber: 1046,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Select Role (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 1051,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: bulkRole,
                                            onChange: (e)=>setBulkRole(e.target.value),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Don't change role"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                    lineNumber: 1057,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "user",
                                                    children: "Collaborator"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                    lineNumber: 1058,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "employee",
                                                    children: "Employee"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                    lineNumber: 1059,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "admin",
                                                    children: "Super Admin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                    lineNumber: 1060,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 1052,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 1050,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Select Department (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 1064,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: bulkDepartment,
                                            onChange: (e)=>setBulkDepartment(e.target.value),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Don't change department"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                    lineNumber: 1070,
                                                    columnNumber: 29
                                                }, this),
                                                departments.map((dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: dept.id,
                                                        children: dept.name
                                                    }, dept.id, false, {
                                                        fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                                        lineNumber: 1072,
                                                        columnNumber: 33
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                            lineNumber: 1065,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 1063,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                            lineNumber: 1049,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleBulkAssignment,
                                    className: "flex-1 bg-[#B11016] text-white py-2 rounded-md hover:bg-red-700 transition",
                                    children: "Apply Changes"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 1080,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowRoleModal(false);
                                        setBulkRole('');
                                        setBulkDepartment('');
                                    },
                                    className: "flex-1 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                                    lineNumber: 1086,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/adminusermanagement/page.tsx",
                            lineNumber: 1079,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/adminusermanagement/page.tsx",
                    lineNumber: 1044,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/adminusermanagement/page.tsx",
                lineNumber: 1043,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/adminusermanagement/page.tsx",
        lineNumber: 499,
        columnNumber: 9
    }, this);
}
_s(UserManagement, "zTDhSdKDAlFzUDSA0xnn0gM4+WY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = UserManagement;
var _c;
__turbopack_context__.k.register(_c, "UserManagement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_160ab8e1._.js.map