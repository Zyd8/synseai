(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/DonutChart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>ProposalReportChart
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
'use client';
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ArcElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
function ProposalReportChart(param) {
    let { proposals } = param;
    // Count proposals by status
    const counts = {
        approved: proposals.filter((p)=>p.status === "Approved").length,
        inProgress: proposals.filter((p)=>p.status === "Ongoing").length,
        submitted: proposals.filter((p)=>p.status === "Submitted").length,
        rejected: proposals.filter((p)=>p.status === "Rejected").length
    };
    const data = {
        labels: [
            'Approved',
            'In Progress',
            'Submitted',
            'Rejected'
        ],
        datasets: [
            {
                data: [
                    counts.approved,
                    counts.inProgress,
                    counts.submitted,
                    counts.rejected
                ],
                backgroundColor: [
                    '#15803d',
                    '#eab308',
                    '#1d4ed8',
                    '#b91c1c'
                ],
                borderWidth: 0
            }
        ]
    };
    const options = {
        cutout: '65%',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true
            }
        }
    };
    const total = data.datasets[0].data.reduce((a, b)=>a + b, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow-md p-6 flex flex-col items-center h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-red-700 font-bold text-xl mb-6 text-center",
                children: "Proposal Report"
            }, void 0, false, {
                fileName: "[project]/src/components/DonutChart.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col 2xl:flex-row items-center justify-center gap-6 2xl:gap-10 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-36 h-36 sm:w-44 sm:h-44 2xl:w-56 2xl:h-56 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Doughnut"], {
                                data: data,
                                options: options
                            }, void 0, false, {
                                fileName: "[project]/src/components/DonutChart.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl 2xl:text-4xl font-bold text-gray-900",
                                children: total
                            }, void 0, false, {
                                fileName: "[project]/src/components/DonutChart.tsx",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DonutChart.tsx",
                        lineNumber: 53,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col space-y-3 w-full 2xl:w-auto items-center 2xl:items-start",
                        children: data.labels.map((label, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 rounded-full",
                                        style: {
                                            backgroundColor: data.datasets[0].backgroundColor[index]
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DonutChart.tsx",
                                        lineNumber: 64,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-gray-700",
                                        children: [
                                            label,
                                            " (",
                                            data.datasets[0].data[index],
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DonutChart.tsx",
                                        lineNumber: 71,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, label, true, {
                                fileName: "[project]/src/components/DonutChart.tsx",
                                lineNumber: 63,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/DonutChart.tsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DonutChart.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DonutChart.tsx",
        lineNumber: 46,
        columnNumber: 9
    }, this);
}
_c = ProposalReportChart;
var _c;
__turbopack_context__.k.register(_c, "ProposalReportChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
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
"[project]/src/app/bpidashboard/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>BpiDashboard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DonutChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DonutChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DashboardSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DashboardSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function BpiDashboard() {
    var _proposals_openRow;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const API = ("TURBOPACK compile-time value", "http://localhost:5000");
    const [proposals, setProposals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [companies, setCompanies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [updating, setUpdating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [openRow, setOpenRow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dropdownPosition, setDropdownPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    // Map backend status to display status
    const mapStatus = (status)=>{
        switch(status){
            case "SUBMITTED":
                return "Submitted";
            case "ONGOING":
                return "In Progress";
            case "APPROVED":
                return "Approved";
            case "REJECTED":
                return "Rejected";
            default:
                return status;
        }
    };
    // Map display status back to backend status
    const mapStatusToBackend = (status)=>{
        switch(status){
            case "Submitted":
                return "SUBMITTED";
            case "In Progress":
                return "ONGOING";
            case "Approved":
                return "APPROVED";
            case "Rejected":
                return "REJECTED";
            default:
                return status;
        }
    };
    // Fetch company by ID
    const fetchCompanyById = async (companyId)=>{
        const token = sessionStorage.getItem("access_token");
        try {
            const res = await fetch("".concat(API, "/api/company/").concat(companyId), {
                headers: {
                    Authorization: "Bearer ".concat(token),
                    "Content-Type": "application/json"
                }
            });
            if (!res.ok) {
                console.warn("Failed to fetch company ".concat(companyId));
                return null;
            }
            const data = await res.json();
            return data.company;
        } catch (err) {
            console.error("Error fetching company ".concat(companyId, ":"), err);
            return null;
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BpiDashboard.useEffect": ()=>{
            const fetchAllProposals = {
                "BpiDashboard.useEffect.fetchAllProposals": async ()=>{
                    const token = sessionStorage.getItem("access_token");
                    try {
                        console.log("Fetching proposals from:", "".concat(API, "/api/proposal"));
                        const res = await fetch("".concat(API, "/api/proposal"), {
                            headers: {
                                Authorization: "Bearer ".concat(token),
                                "Content-Type": "application/json"
                            }
                        });
                        if (!res.ok) throw new Error("Failed to fetch proposals");
                        const data = await res.json();
                        console.log("Full API Response:", data);
                        // Extract proposals from the response structure
                        const proposalsList = data.proposals || data || [];
                        console.log("Extracted proposals list:", proposalsList);
                        setProposals(Array.isArray(proposalsList) ? proposalsList : []);
                        // Extract unique company IDs and fetch company data
                        const companyIds = [
                            ...new Set(proposalsList.map({
                                "BpiDashboard.useEffect.fetchAllProposals": (p)=>p.company_id
                            }["BpiDashboard.useEffect.fetchAllProposals"]).filter({
                                "BpiDashboard.useEffect.fetchAllProposals": (id)=>id !== null && id !== undefined
                            }["BpiDashboard.useEffect.fetchAllProposals"]))
                        ];
                        console.log("Unique company IDs:", companyIds);
                        // Fetch all companies in parallel
                        const companyPromises = companyIds.map({
                            "BpiDashboard.useEffect.fetchAllProposals.companyPromises": async (id)=>{
                                const company = await fetchCompanyById(id);
                                return {
                                    id,
                                    company
                                };
                            }
                        }["BpiDashboard.useEffect.fetchAllProposals.companyPromises"]);
                        const companyResults = await Promise.all(companyPromises);
                        // Create companies lookup object
                        const companiesLookup = {};
                        companyResults.forEach({
                            "BpiDashboard.useEffect.fetchAllProposals": (param)=>{
                                let { id, company } = param;
                                if (company) {
                                    companiesLookup[id] = company;
                                }
                            }
                        }["BpiDashboard.useEffect.fetchAllProposals"]);
                        console.log("Companies lookup:", companiesLookup);
                        setCompanies(companiesLookup);
                    } catch (err) {
                        console.error("Error fetching proposals:", err);
                        setProposals([]);
                    } finally{
                        setLoading(false);
                    }
                }
            }["BpiDashboard.useEffect.fetchAllProposals"];
            fetchAllProposals();
        }
    }["BpiDashboard.useEffect"], [
        API
    ]);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BpiDashboard.useEffect": ()=>{
            const handleClickOutside = {
                "BpiDashboard.useEffect.handleClickOutside": ()=>{
                    setOpenRow(null);
                }
            }["BpiDashboard.useEffect.handleClickOutside"];
            if (openRow !== null) {
                document.addEventListener('click', handleClickOutside);
                return ({
                    "BpiDashboard.useEffect": ()=>document.removeEventListener('click', handleClickOutside)
                })["BpiDashboard.useEffect"];
            }
        }
    }["BpiDashboard.useEffect"], [
        openRow
    ]);
    // Get company name for a proposal
    const getCompanyName = (proposal)=>{
        if (proposal.company_id && companies[proposal.company_id]) {
            return companies[proposal.company_id].name;
        }
        return proposal.company_name || 'Unknown Company';
    };
    // Compute summary counts based on mapped status
    const summary = [
        {
            label: "Submitted",
            count: proposals.filter((p)=>mapStatus(p.status) === "Submitted").length,
            img: "/images/db_submitted.png"
        },
        {
            label: "In Progress",
            count: proposals.filter((p)=>mapStatus(p.status) === "In Progress").length,
            img: "/images/db_inprogress.png"
        },
        {
            label: "Approved",
            count: proposals.filter((p)=>mapStatus(p.status) === "Approved").length,
            img: "/images/db_approved.png"
        },
        {
            label: "Rejected",
            count: proposals.filter((p)=>mapStatus(p.status) === "Rejected").length,
            img: "/images/db_rejected.png"
        }
    ];
    // Handle proposal row click → navigate to BPI proposal tracking
    const handleProposalClick = (proposalId)=>{
        console.log('=== NAVIGATION DEBUG ===');
        console.log('Proposal ID:', proposalId);
        const token = sessionStorage.getItem("access_token");
        const userRole = sessionStorage.getItem("role");
        if (!token) {
            alert('Session expired. Please log in again.');
            router.push('/login');
            return;
        }
        if (!userRole) {
            alert('Role information missing. Please log in again.');
            router.push('/login');
            return;
        }
        if (userRole !== 'employee') {
            alert('Access denied. Employee role required.');
            return;
        }
        // ✅ Correct path for BPI proposal tracking
        const targetUrl = "/bpiproposaltracking?id=".concat(proposalId);
        console.log('Navigating to:', targetUrl);
        router.push(targetUrl);
    };
    // Activities = latest 3 proposals sorted by created_at
    const activities = proposals.sort((a, b)=>new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).slice(0, 3);
    const handleStatusUpdate = async (proposalId, newStatus)=>{
        const token = sessionStorage.getItem("access_token");
        setUpdating(proposalId);
        try {
            const res = await fetch("".concat(API, "/api/proposal/").concat(proposalId, "/status"), {
                method: 'PATCH',
                headers: {
                    Authorization: "Bearer ".concat(token),
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    status: mapStatusToBackend(newStatus)
                })
            });
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || "Failed to update proposal status");
            }
            const data = await res.json();
            // Update the local state
            setProposals((prevProposals)=>prevProposals.map((p)=>p.id === proposalId ? {
                        ...p,
                        status: data.proposal.status
                    } : p));
            alert("Proposal status updated to: ".concat(newStatus));
            setOpenRow(null);
        } catch (err) {
            console.error("Error updating proposal status:", err);
            alert("Error updating proposal status: ".concat(err instanceof Error ? err.message : 'Unknown error'));
        } finally{
            setUpdating(null);
        }
    };
    const getStatusOptions = (currentStatus)=>{
        const mappedStatus = mapStatus(currentStatus);
        const allStatuses = [
            "Submitted",
            "In Progress",
            "Approved",
            "Rejected"
        ];
        return allStatuses.filter((status)=>status !== mappedStatus);
    };
    const handleActionClick = (e, rowIndex)=>{
        e.stopPropagation();
        if (openRow === rowIndex) {
            setOpenRow(null);
            return;
        }
        // Calculate dropdown position
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const scrollY = window.scrollY;
        const scrollX = window.scrollX;
        // Position dropdown to the left of the button (since it's the last column)
        setDropdownPosition({
            top: rect.bottom + scrollY + 5,
            left: rect.right + scrollX - 160 // Align right edge of dropdown with right edge of button
        });
        setOpenRow(rowIndex);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DashboardSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/bpidashboard/page.tsx",
                lineNumber: 281,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 py-3 sm:py-6 pl-[2%] sm:pl-[3%] pr-[3%] sm:pr-[5%]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b-[3px] border-red-700 pb-2 sm:pb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold text-red-700",
                                        children: "Employee Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/bpidashboard/page.tsx",
                                        lineNumber: 288,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 mt-1",
                                        children: "Review and manage collaboration proposals from all companies."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/bpidashboard/page.tsx",
                                        lineNumber: 289,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/bpidashboard/page.tsx",
                                lineNumber: 287,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>window.location.reload(),
                                    className: "bg-[#B11016] border-2 text-white px-4 py-2 rounded-md hover:bg-white hover:border-[#B11016] hover:text-[#B11016] transition",
                                    children: "Refresh"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/bpidashboard/page.tsx",
                                    lineNumber: 295,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/bpidashboard/page.tsx",
                                lineNumber: 294,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/bpidashboard/page.tsx",
                        lineNumber: 286,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-[69%_30%] gap-4 mt-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4 m-0 p-0",
                                children: summary.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg flex items-center gap-4 drop-shadow-lg border border-gray-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: item.img,
                                                alt: item.label,
                                                className: "m-0 p-0 h-full w-auto object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                lineNumber: 312,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-4xl font-bold",
                                                    children: item.count
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                    lineNumber: 318,
                                                    columnNumber: 37
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                lineNumber: 317,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/app/bpidashboard/page.tsx",
                                        lineNumber: 308,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/bpidashboard/page.tsx",
                                lineNumber: 306,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-lg drop-shadow-lg sm:p-8 p-6 border border-gray-500 h-[350px] flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-red-700 font-bold text-xl mb-4 border-b border-black pb-2 sm:pb-4",
                                        children: "Recent Activities"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/bpidashboard/page.tsx",
                                        lineNumber: 326,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex-1 overflow-y-auto pr-2",
                                        style: {
                                            "--dot-size": "0.75rem"
                                        },
                                        children: activities.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-500 text-center mt-6",
                                            children: "No recent activities"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/bpidashboard/page.tsx",
                                            lineNumber: 336,
                                            columnNumber: 33
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-0",
                                            children: activities.map((a, i, arr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative flex items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative z-10 rounded-full flex-shrink-0 bg-[#B11016]",
                                                            style: {
                                                                width: "var(--dot-size)",
                                                                height: "var(--dot-size)",
                                                                marginTop: "0.5rem"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                            lineNumber: 342,
                                                            columnNumber: 45
                                                        }, this),
                                                        i < arr.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute left-[calc(var(--dot-size)/2-1px)] top-[calc(var(--dot-size)+0.5rem)] w-0.5 bg-gray-300",
                                                            style: {
                                                                height: "calc(100% - var(--dot-size) - 0rem)"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                            lineNumber: 353,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "ml-4 pb-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-semibold text-gray-900",
                                                                    children: a.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                                    lineNumber: 361,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-blue-600 mb-1",
                                                                    children: getCompanyName(a)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                                    lineNumber: 362,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-bold text-gray-800 mb-1",
                                                                    children: mapStatus(a.status)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                                    lineNumber: 365,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-gray-500 text-xs",
                                                                    children: [
                                                                        new Date(a.created_at).toLocaleDateString("en-US", {
                                                                            year: "numeric",
                                                                            month: "long",
                                                                            day: "numeric"
                                                                        }),
                                                                        " ",
                                                                        "|",
                                                                        " ",
                                                                        new Date(a.created_at).toLocaleTimeString("en-US", {
                                                                            hour: "numeric",
                                                                            minute: "2-digit",
                                                                            hour12: true
                                                                        })
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                                    lineNumber: 368,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                            lineNumber: 360,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/bpidashboard/page.tsx",
                                            lineNumber: 338,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/bpidashboard/page.tsx",
                                        lineNumber: 331,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/bpidashboard/page.tsx",
                                lineNumber: 325,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/bpidashboard/page.tsx",
                        lineNumber: 304,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-[69%_30%] gap-4 mt-5 items-stretch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sm:col-span-1 border border-gray-500 rounded-lg p-5 bg-white drop-shadow-xl relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-red-700 font-bold text-lg",
                                                children: "Your Proposals"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                lineNumber: 395,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-600",
                                                children: "Click on any row to view details"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                lineNumber: 396,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/bpidashboard/page.tsx",
                                        lineNumber: 394,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-h-200 overflow-y-auto relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full text-sm rounded-lg overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "sticky top-0 bg-white z-10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "p-3 text-left text-red-700",
                                                                children: "ID"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                                lineNumber: 402,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "p-3 text-left text-red-700",
                                                                children: "Company"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "p-3 text-left text-red-700",
                                                                children: "Proposal Title"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                                lineNumber: 404,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "p-3 text-left text-red-700",
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                                lineNumber: 405,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "p-3 text-center text-red-700",
                                                                children: "Action"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                                lineNumber: 406,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 37
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: [
                                                        !loading && proposals.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                colSpan: 5,
                                                                className: "p-3 text-center text-gray-500",
                                                                children: "No proposals found"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                                lineNumber: 412,
                                                                columnNumber: 45
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                            lineNumber: 411,
                                                            columnNumber: 41
                                                        }, this),
                                                        !loading && proposals.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "border-t hover:bg-gray-50 transition-colors cursor-pointer",
                                                                onClick: ()=>handleProposalClick(p.id),
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "p-3",
                                                                        children: p.id
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                                        lineNumber: 425,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "p-3",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-medium",
                                                                            children: getCompanyName(p)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                                            lineNumber: 429,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                                        lineNumber: 428,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "p-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "font-medium",
                                                                                children: p.title || 'No title'
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                                                lineNumber: 434,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            p.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-gray-500 truncate max-w-xs",
                                                                                children: p.description.length > 50 ? "".concat(p.description.substring(0, 50), "...") : p.description
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                                                lineNumber: 436,
                                                                                columnNumber: 57
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                                        lineNumber: 433,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "p-3",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "px-2 py-1 rounded-full text-xs font-medium ".concat(mapStatus(p.status) === "Approved" ? "bg-green-100 text-green-800" : mapStatus(p.status) === "Rejected" ? "bg-red-100 text-red-800" : mapStatus(p.status) === "In Progress" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"),
                                                                            children: mapStatus(p.status)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                                            lineNumber: 445,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                                        lineNumber: 444,
                                                                        columnNumber: 49
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "p-3 text-center",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: (e)=>handleActionClick(e, i),
                                                                            className: "text-xl font-bold text-gray-600 hover:text-red-600 disabled:opacity-50",
                                                                            disabled: updating === p.id,
                                                                            children: updating === p.id ? "..." : "⋮"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                                            lineNumber: 461,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                                        lineNumber: 460,
                                                                        columnNumber: 49
                                                                    }, this)
                                                                ]
                                                            }, p.id, true, {
                                                                fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                                lineNumber: 420,
                                                                columnNumber: 45
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/bpidashboard/page.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/bpidashboard/page.tsx",
                                            lineNumber: 399,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/bpidashboard/page.tsx",
                                        lineNumber: 398,
                                        columnNumber: 25
                                    }, this),
                                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center p-3",
                                        children: "Loading proposals..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/bpidashboard/page.tsx",
                                        lineNumber: 475,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/bpidashboard/page.tsx",
                                lineNumber: 393,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "sm:col-span-1 h-full border border-gray-500 rounded-lg drop-shadow-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DonutChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    proposals: proposals
                                }, void 0, false, {
                                    fileName: "[project]/src/app/bpidashboard/page.tsx",
                                    lineNumber: 479,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/bpidashboard/page.tsx",
                                lineNumber: 478,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/bpidashboard/page.tsx",
                        lineNumber: 392,
                        columnNumber: 17
                    }, this),
                    openRow !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute w-40 bg-white border rounded-lg shadow-lg z-50",
                        style: {
                            top: "".concat(dropdownPosition.top, "px"),
                            left: "".concat(dropdownPosition.left, "px")
                        },
                        onClick: (e)=>e.stopPropagation(),
                        children: getStatusOptions(((_proposals_openRow = proposals[openRow]) === null || _proposals_openRow === void 0 ? void 0 : _proposals_openRow.status) || '').map((status)=>{
                            var _proposals_openRow;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    handleStatusUpdate(proposals[openRow].id, status);
                                },
                                className: "w-full px-4 py-2 text-left text-sm hover:bg-red-100 text-red-700 border-b border-gray-100 last:border-b-0 first:rounded-t-lg last:rounded-b-lg",
                                disabled: updating === ((_proposals_openRow = proposals[openRow]) === null || _proposals_openRow === void 0 ? void 0 : _proposals_openRow.id),
                                children: [
                                    "Set to ",
                                    status
                                ]
                            }, status, true, {
                                fileName: "[project]/src/app/bpidashboard/page.tsx",
                                lineNumber: 494,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/bpidashboard/page.tsx",
                        lineNumber: 485,
                        columnNumber: 21
                    }, this), document.body)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/bpidashboard/page.tsx",
                lineNumber: 284,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/bpidashboard/page.tsx",
        lineNumber: 279,
        columnNumber: 9
    }, this);
}
_s(BpiDashboard, "FpBgMLgElNjV6qtIqXIeP3qGoyQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = BpiDashboard;
var _c;
__turbopack_context__.k.register(_c, "BpiDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_e2a15810._.js.map