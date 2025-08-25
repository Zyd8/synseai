(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

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
"[project]/src/app/filespusher/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>FilesPusher
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProtectedRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProtectedRoute.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// Custom Modal Component
const CustomModal = (param)=>{
    let { isOpen, onClose, title, message, type, onConfirm, confirmText = "OK", cancelText = "Cancel", showInput = false, inputPlaceholder = "", inputValue = "", onInputChange } = param;
    if (!isOpen) return null;
    const getIcon = ()=>{
        switch(type){
            case 'success':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheckCircle"], {
                    className: "text-green-500 text-4xl"
                }, void 0, false, {
                    fileName: "[project]/src/app/filespusher/page.tsx",
                    lineNumber: 77,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'error':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaExclamationTriangle"], {
                    className: "text-red-500 text-4xl"
                }, void 0, false, {
                    fileName: "[project]/src/app/filespusher/page.tsx",
                    lineNumber: 79,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'warning':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaExclamationTriangle"], {
                    className: "text-yellow-500 text-4xl"
                }, void 0, false, {
                    fileName: "[project]/src/app/filespusher/page.tsx",
                    lineNumber: 81,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'info':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInfoCircle"], {
                    className: "text-blue-500 text-4xl"
                }, void 0, false, {
                    fileName: "[project]/src/app/filespusher/page.tsx",
                    lineNumber: 83,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInfoCircle"], {
                    className: "text-gray-500 text-4xl"
                }, void 0, false, {
                    fileName: "[project]/src/app/filespusher/page.tsx",
                    lineNumber: 85,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    const getButtonColor = ()=>{
        switch(type){
            case 'success':
                return 'bg-green-600 hover:bg-green-700';
            case 'error':
                return 'bg-red-600 hover:bg-red-700';
            case 'warning':
                return 'bg-yellow-600 hover:bg-yellow-700';
            case 'info':
                return 'bg-blue-600 hover:bg-blue-700';
            default:
                return 'bg-gray-600 hover:bg-gray-700';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 flex items-center justify-center bg-black/50 z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.8
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    scale: 0.8
                },
                transition: {
                    duration: 0.3,
                    ease: "easeOut"
                },
                className: "bg-white rounded-lg shadow-xl w-full max-w-md p-6 mx-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-3",
                                children: [
                                    getIcon(),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold text-gray-800",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/filespusher/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/filespusher/page.tsx",
                                lineNumber: 124,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "text-gray-400 hover:text-gray-600 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTimes"], {}, void 0, false, {
                                    fileName: "[project]/src/app/filespusher/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/filespusher/page.tsx",
                                lineNumber: 128,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/filespusher/page.tsx",
                        lineNumber: 123,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 leading-relaxed",
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/src/app/filespusher/page.tsx",
                            lineNumber: 138,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/filespusher/page.tsx",
                        lineNumber: 137,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    showInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            value: inputValue,
                            onChange: (e)=>onInputChange === null || onInputChange === void 0 ? void 0 : onInputChange(e.target.value),
                            placeholder: inputPlaceholder,
                            className: "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none",
                            rows: 3
                        }, void 0, false, {
                            fileName: "[project]/src/app/filespusher/page.tsx",
                            lineNumber: 144,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/filespusher/page.tsx",
                        lineNumber: 143,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end space-x-3",
                        children: onConfirm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",
                                    children: cancelText
                                }, void 0, false, {
                                    fileName: "[project]/src/app/filespusher/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        onConfirm();
                                        onClose();
                                    },
                                    className: "px-4 py-2 text-white rounded-lg transition-colors ".concat(getButtonColor()),
                                    children: confirmText
                                }, void 0, false, {
                                    fileName: "[project]/src/app/filespusher/page.tsx",
                                    lineNumber: 164,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "px-6 py-2 text-white rounded-lg transition-colors ".concat(getButtonColor()),
                            children: confirmText
                        }, void 0, false, {
                            fileName: "[project]/src/app/filespusher/page.tsx",
                            lineNumber: 175,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/filespusher/page.tsx",
                        lineNumber: 155,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, "modal", true, {
                fileName: "[project]/src/app/filespusher/page.tsx",
                lineNumber: 114,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, "backdrop", false, {
            fileName: "[project]/src/app/filespusher/page.tsx",
            lineNumber: 107,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/filespusher/page.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CustomModal;
// Loading Modal Component
const LoadingModal = (param)=>{
    let { isOpen, message } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 flex items-center justify-center bg-black/50 z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    scale: 0.8
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    scale: 0.8
                },
                transition: {
                    duration: 0.3,
                    ease: "easeOut"
                },
                className: "bg-white rounded-lg shadow-xl p-6 mx-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center space-x-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-[#B11016]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/filespusher/page.tsx",
                            lineNumber: 211,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-700 font-medium",
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/src/app/filespusher/page.tsx",
                            lineNumber: 212,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/filespusher/page.tsx",
                    lineNumber: 210,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, "loading-box", false, {
                fileName: "[project]/src/app/filespusher/page.tsx",
                lineNumber: 202,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, "loading-backdrop", false, {
            fileName: "[project]/src/app/filespusher/page.tsx",
            lineNumber: 195,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/filespusher/page.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = LoadingModal;
function FilesPusher() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/filespusher/page.tsx",
            lineNumber: 223,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilesPusherContent, {}, void 0, false, {
            fileName: "[project]/src/app/filespusher/page.tsx",
            lineNumber: 224,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/filespusher/page.tsx",
        lineNumber: 223,
        columnNumber: 5
    }, this);
}
_c2 = FilesPusher;
function FilesPusherContent() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const settingId = searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("id");
    const API = ("TURBOPACK compile-time value", "http://localhost:5000") || 'http://localhost:5000';
    const [proposalTitle, setProposalTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [proposalDetails, setProposalDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [documentSetting, setDocumentSetting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userDepartmentId, setUserDepartmentId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [canInteract, setCanInteract] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [departments, setDepartments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [allDepartments, setAllDepartments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isUploadModalOpen, setIsUploadModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [fileName, setFileName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [fileDescription, setFileDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Modal states
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        title: '',
        message: '',
        type: 'info'
    });
    const [loadingModal, setLoadingModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        message: ''
    });
    const [rejectionReason, setRejectionReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Modal helper functions
    const showSuccessModal = (message, onConfirm)=>{
        setModal({
            isOpen: true,
            title: 'Success',
            message,
            type: 'success',
            onConfirm,
            confirmText: 'OK'
        });
    };
    const showErrorModal = (message)=>{
        setModal({
            isOpen: true,
            title: 'Error',
            message,
            type: 'error',
            confirmText: 'OK'
        });
    };
    const showWarningModal = function(message, onConfirm) {
        let confirmText = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'Continue';
        setModal({
            isOpen: true,
            title: 'Warning',
            message,
            type: 'warning',
            onConfirm,
            confirmText,
            cancelText: 'Cancel'
        });
    };
    const showInfoModal = (message)=>{
        setModal({
            isOpen: true,
            title: 'Information',
            message,
            type: 'info',
            confirmText: 'OK'
        });
    };
    const showInputModal = (title, message, placeholder, onConfirm)=>{
        setRejectionReason('');
        setModal({
            isOpen: true,
            title,
            message,
            type: 'warning',
            showInput: true,
            inputPlaceholder: placeholder,
            inputValue: rejectionReason,
            onInputChange: setRejectionReason,
            onConfirm: ()=>onConfirm(rejectionReason),
            confirmText: 'Submit',
            cancelText: 'Cancel'
        });
    };
    const showLoadingModal = (message)=>{
        setLoadingModal({
            isOpen: true,
            message
        });
    };
    const hideLoadingModal = ()=>{
        setLoadingModal({
            isOpen: false,
            message: ''
        });
    };
    const closeModal = ()=>{
        setModal({
            isOpen: false,
            title: '',
            message: '',
            type: 'info'
        });
    };
    // Fetch all departments from database
    const fetchDepartments = async ()=>{
        try {
            const token = sessionStorage.getItem('access_token');
            if (!token) throw new Error("No token found.");
            const res = await fetch("".concat(API, "/api/department"), {
                method: 'GET',
                headers: {
                    'Authorization': "Bearer ".concat(token),
                    'Content-Type': 'application/json'
                }
            });
            if (!res.ok) {
                throw new Error("Failed to fetch departments: ".concat(res.status));
            }
            const response = await res.json();
            console.log("Fetched departments response:", response);
            // Extract departments array from the response
            const departmentsData = response.departments || [];
            setAllDepartments(departmentsData);
            return departmentsData;
        } catch (error) {
            console.error("Error fetching departments:", error);
            throw error; // Re-throw to handle in calling function
        }
    };
    // Enhanced function to get and refresh user's department ID
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FilesPusherContent.useEffect": ()=>{
            const token = sessionStorage.getItem("access_token");
            const fetchUserDepartmentId = {
                "FilesPusherContent.useEffect.fetchUserDepartmentId": async ()=>{
                    if (!token) return;
                    try {
                        var _data_user, _data_user1;
                        console.log("=== Fetching User Department from API ===");
                        const res = await fetch("".concat(API, "/api/user/me"), {
                            headers: {
                                Authorization: "Bearer ".concat(token),
                                "Content-Type": "application/json"
                            }
                        });
                        if (!res.ok) throw new Error("Failed to fetch user details");
                        const data = await res.json();
                        console.log("✅ User data fetched:", data);
                        // Extract department info
                        const deptId = data.department_id || ((_data_user = data.user) === null || _data_user === void 0 ? void 0 : _data_user.department_id);
                        const deptName = data.department_name || ((_data_user1 = data.user) === null || _data_user1 === void 0 ? void 0 : _data_user1.department_name);
                        if (deptId) {
                            setUserDepartmentId(deptId);
                        } else {
                            console.warn("❌ Department ID missing in user data");
                            setUserDepartmentId(null);
                        }
                    } catch (error) {
                        console.error("Error fetching user department:", error);
                        setUserDepartmentId(null);
                    }
                }
            }["FilesPusherContent.useEffect.fetchUserDepartmentId"];
            fetchUserDepartmentId();
        }
    }["FilesPusherContent.useEffect"], [
        API
    ]);
    // Handle file selection from input or drag & drop
    const handleFileChange = (e)=>{
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
        }
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setSelectedFile(e.dataTransfer.files[0]);
        }
    };
    // Update handler
    const handleFileUpdate = async ()=>{
        if (!selectedFile || !settingId) {
            showErrorModal("Please select a file first.");
            return;
        }
        if (!canInteract) {
            showErrorModal("You can only update documents that are currently at your department.");
            return;
        }
        try {
            showLoadingModal("Updating file...");
            const token = sessionStorage.getItem("access_token");
            if (!token) throw new Error("No token found.");
            const formData = new FormData();
            formData.append("file", selectedFile);
            const res = await fetch("".concat(API, "/api/document_setting/update/").concat(settingId), {
                method: "POST",
                headers: {
                    Authorization: "Bearer ".concat(token)
                },
                body: formData
            });
            const responseText = await res.text();
            console.log("Update response:", responseText);
            hideLoadingModal();
            if (!res.ok) {
                throw new Error("Update failed: ".concat(responseText));
            }
            showSuccessModal("File updated successfully!", ()=>{
                setIsUploadModalOpen(false);
                setSelectedFile(null);
                setFileName("");
                setFileDescription("");
                window.location.reload();
            });
        } catch (err) {
            hideLoadingModal();
            const errorMessage = err instanceof Error ? err.message : "Error updating file.";
            console.error(errorMessage);
            showErrorModal("Error updating file: ".concat(errorMessage));
        }
    };
    // Check if document is at the final department
    const isAtFinalDepartment = ()=>{
        if (!documentSetting) return false;
        const currentIndex = documentSetting.iteration.indexOf(documentSetting.current_location);
        return currentIndex >= documentSetting.iteration.length - 1;
    };
    // Push handler - moves document to next department in iteration
    const handlePushDocument = async ()=>{
        if (!settingId || !documentSetting) {
            showErrorModal("No document setting found.");
            return;
        }
        if (!canInteract) {
            showErrorModal("You can only push documents that are currently at your department.");
            return;
        }
        // Check if we're at the last department
        if (isAtFinalDepartment()) {
            showWarningModal("This document is already at the final department.");
            return;
        }
        showWarningModal("Are you sure you want to push this document to the next department? This action cannot be undone.", async ()=>{
            try {
                showLoadingModal("Pushing document to next department...");
                const token = sessionStorage.getItem("access_token");
                if (!token) throw new Error("No token found.");
                const res = await fetch("".concat(API, "/api/document_setting/push/").concat(settingId), {
                    method: "POST",
                    headers: {
                        Authorization: "Bearer ".concat(token),
                        "Content-Type": "application/json"
                    }
                });
                hideLoadingModal();
                if (!res.ok) {
                    const errorText = await res.text();
                    throw new Error("Push failed: ".concat(errorText));
                }
                const result = await res.json();
                showSuccessModal("Document pushed to next department successfully!", ()=>{
                    window.location.reload();
                });
            } catch (err) {
                hideLoadingModal();
                console.error("Error pushing document:", err);
                const errorMessage = err instanceof Error ? err.message : 'Unknown error';
                showErrorModal("Error pushing document: ".concat(errorMessage));
            }
        }, "Push Document");
    };
    // Generic status update handler (similar to BpiDashboard pattern)
    const handleStatusUpdate = async (newStatus, reason)=>{
        const token = sessionStorage.getItem("access_token");
        if (!token) return;
        if (!settingId) {
            showErrorModal("No document setting found.");
            return;
        }
        if (!canInteract) {
            showErrorModal("You can only update documents that are currently at your department.");
            return;
        }
        try {
            const statusLabel = newStatus === 'APPROVED' ? 'Approving' : newStatus === 'REJECTED' ? 'Rejecting' : 'Updating';
            showLoadingModal("".concat(statusLabel, " document..."));
            // ✅ If status is APPROVED, call setapproved API
            if (newStatus === 'APPROVED') {
                const res = await fetch("".concat(API, "/api/document_setting/setapproved/").concat(settingId), {
                    method: 'PUT',
                    headers: {
                        Authorization: "Bearer ".concat(token),
                        "Content-Type": "application/json"
                    }
                });
                hideLoadingModal();
                if (!res.ok) {
                    const errorData = await res.json().catch(()=>({
                            error: "Unknown error"
                        }));
                    throw new Error(errorData.error || "Failed to set approval");
                }
                const result = await res.json();
                // ✅ Update local state to reflect approved = true
                setDocumentSetting((prev)=>prev ? {
                        ...prev,
                        approved: result.approved,
                        updated_at: new Date().toISOString()
                    } : null);
                showSuccessModal("Document approved successfully!", ()=>{
                    window.location.reload();
                });
                return; // Exit after approval
            }
            // ✅ If status is REJECTED or others, handle rejection reason (if needed)
            if (newStatus === 'REJECTED') {
                // You can add a separate API call or logic for rejection
                hideLoadingModal();
                showSuccessModal("Document rejected successfully!", ()=>{
                    window.location.reload();
                });
                return;
            }
            hideLoadingModal();
            showSuccessModal("Document status updated successfully!", ()=>{
                window.location.reload();
            });
        } catch (err) {
            hideLoadingModal();
            console.error("Error updating document setting:", err);
            const errorMessage = err instanceof Error ? err.message : 'Unknown error';
            showErrorModal("Error updating document setting: ".concat(errorMessage));
        }
    };
    // Approve handler for final department
    const handleApproveDocument = async ()=>{
        if (!isAtFinalDepartment()) {
            showErrorModal("You can only approve documents at the final department.");
            return;
        }
        showWarningModal("Are you sure you want to approve this document? This action will mark the document as approved.", ()=>handleStatusUpdate('APPROVED'), "Approve Document");
    };
    // Reject handler for final department
    const handleRejectDocument = async ()=>{
        if (!isAtFinalDepartment()) {
            showErrorModal("You can only reject documents at the final department.");
            return;
        }
        showInputModal("Reject Document", "Please provide a reason for rejection:", "Enter rejection reason (optional)...", (reason)=>handleStatusUpdate('REJECTED', reason || "No reason provided"));
    };
    // Helper function to get department name by ID
    const getDepartmentNameById = (deptId)=>{
        const dept = allDepartments.find((d)=>d.id === deptId);
        return dept ? dept.name : "Department ".concat(deptId);
    };
    // Update department status based on iteration and current location
    const updateDepartmentStatus = (iteration, currentLocation)=>{
        if (!allDepartments.length) return;
        // Create departments array based on iteration order
        const orderedDepartments = iteration.map((deptId)=>{
            const deptInfo = allDepartments.find((d)=>d.id === deptId);
            const currentIndex = iteration.indexOf(currentLocation);
            const deptIndex = iteration.indexOf(deptId);
            return {
                id: deptId,
                name: deptInfo ? deptInfo.name : "Department ".concat(deptId),
                isActive: deptId === currentLocation,
                isCompleted: deptIndex < currentIndex
            };
        });
        setDepartments(orderedDepartments);
    };
    // Refresh user access when document or user department changes
    const refreshUserAccess = async ()=>{
        console.log("Refreshing user access...");
        // Re-check interaction permissions
        if (documentSetting && userDepartmentId !== null) {
            const canUserInteract = documentSetting.current_location === userDepartmentId;
            setCanInteract(canUserInteract);
            console.log("Updated access:", {
                canInteract: canUserInteract,
                currentLocation: documentSetting.current_location,
                userDept: userDepartmentId
            });
        }
    };
    // Fetch document setting and files data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FilesPusherContent.useEffect": ()=>{
            if (!settingId) {
                setError("No document setting ID provided");
                setLoading(false);
                return;
            }
            const fetchDocumentSettingAndFiles = {
                "FilesPusherContent.useEffect.fetchDocumentSettingAndFiles": async ()=>{
                    try {
                        setLoading(true);
                        setError("");
                        // First fetch departments
                        try {
                            await fetchDepartments();
                        } catch (deptError) {
                            console.error("Failed to fetch departments:", deptError);
                            setError("Failed to load departments. Please try again.");
                            return;
                        }
                        const token = sessionStorage.getItem('access_token');
                        if (!token) {
                            throw new Error("No authentication token found. Please log in again.");
                        }
                        console.log("Attempting to fetch from:", "".concat(API, "/api/document_setting/").concat(settingId));
                        const res = await fetch("".concat(API, "/api/document_setting/").concat(settingId), {
                            method: 'GET',
                            headers: {
                                'Authorization': "Bearer ".concat(token),
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            }
                        });
                        console.log("Response status:", res.status);
                        if (!res.ok) {
                            let errorMessage = "Failed to fetch document setting: ".concat(res.status);
                            try {
                                const errorData = await res.json();
                                errorMessage = errorData.error || errorData.message || errorMessage;
                            } catch (e) {
                                errorMessage = "HTTP ".concat(res.status, ": ").concat(res.statusText);
                            }
                            throw new Error(errorMessage);
                        }
                        const documentSetting = await res.json();
                        console.log("Received document setting:", documentSetting);
                        setDocumentSetting(documentSetting);
                        // Set title and details from the actual document data
                        setProposalTitle(documentSetting.document_name || "Document Setting ".concat(settingId));
                        setProposalDetails(documentSetting.document_description || "Push the files to the departments for review and approval");
                        // Refresh user access after loading document
                        setTimeout({
                            "FilesPusherContent.useEffect.fetchDocumentSettingAndFiles": ()=>refreshUserAccess()
                        }["FilesPusherContent.useEffect.fetchDocumentSettingAndFiles"], 100);
                    } catch (err) {
                        console.error("Error fetching document setting:", err);
                        const errorMessage = err instanceof Error ? err.message : "Failed to fetch document data";
                        setError(errorMessage);
                        setProposalTitle("Document Setting ".concat(settingId));
                        setProposalDetails("Push the files to the departments for review and approval");
                        setFiles([]);
                    } finally{
                        setLoading(false);
                    }
                }
            }["FilesPusherContent.useEffect.fetchDocumentSettingAndFiles"];
            fetchDocumentSettingAndFiles();
        }
    }["FilesPusherContent.useEffect"], [
        settingId,
        API
    ]);
    // Update departments when we have both document setting and departments data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FilesPusherContent.useEffect": ()=>{
            if (documentSetting && allDepartments.length > 0) {
                updateDepartmentStatus(documentSetting.iteration, documentSetting.current_location);
                // Create file items for each department in iteration
                const fileItems = documentSetting.iteration.map({
                    "FilesPusherContent.useEffect.fileItems": (deptId, index)=>{
                        const deptName = getDepartmentNameById(deptId);
                        const currentIndex = documentSetting.iteration.indexOf(documentSetting.current_location);
                        return {
                            id: "".concat(documentSetting.document_id, "-").concat(deptId),
                            name: documentSetting.document_name,
                            details: documentSetting.document_description || "Document file",
                            dateCreated: documentSetting.document_created_at ? new Date(documentSetting.document_created_at).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
                            isSelected: false,
                            department: deptName,
                            downloadUrl: "".concat(API, "/api/document/download_file/").concat(documentSetting.document_id),
                            currentLocation: documentSetting.current_location,
                            iteration: documentSetting.iteration
                        };
                    }
                }["FilesPusherContent.useEffect.fileItems"]);
                setFiles(fileItems);
            }
        }
    }["FilesPusherContent.useEffect"], [
        documentSetting,
        allDepartments
    ]);
    // Check if user can interact with document (update/push/approve/reject)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FilesPusherContent.useEffect": ()=>{
            if (documentSetting && userDepartmentId !== null) {
                const canUserInteract = documentSetting.current_location === userDepartmentId;
                setCanInteract(canUserInteract);
                console.log("Can user interact:", canUserInteract, "Current location:", documentSetting.current_location, "User dept:", userDepartmentId);
            }
        }
    }["FilesPusherContent.useEffect"], [
        documentSetting,
        userDepartmentId
    ]);
    const handleFileSelect = (file)=>{
        setFiles((prev)=>prev.map((f)=>f.id === file.id ? {
                    ...f,
                    isSelected: !f.isSelected
                } : f));
    };
    // Download function
    const handleDownload = (file)=>{
        if (!file.downloadUrl) {
            showErrorModal("No download URL available for this file");
            return;
        }
        console.log("Opening download URL:", file.downloadUrl);
        window.open(file.downloadUrl, "_blank");
    };
    // Get file card image based on department status
    const getFileCardImage = (file)=>{
        if (!documentSetting) return "/images/file-card.png";
        const currentIndex = documentSetting.iteration.indexOf(documentSetting.current_location);
        const fileDeptIndex = documentSetting.iteration.findIndex((deptId)=>getDepartmentNameById(deptId) === file.department);
        // If this department has been completed (file passed through)
        if (fileDeptIndex < currentIndex) {
            return "/images/file-card-black.png";
        }
        // If this is the current department
        if (fileDeptIndex === currentIndex) {
            return "/images/file-card.png";
        }
        // If this department hasn't been reached yet
        return "/images/file-card.png";
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProtectedRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            allowedRoles: [
                "user",
                "employee",
                "admin"
            ],
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gray-50 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-12 w-12 border-b-2 border-[#B11016] mx-auto mb-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/filespusher/page.tsx",
                            lineNumber: 875,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600",
                            children: "Loading document..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/filespusher/page.tsx",
                            lineNumber: 876,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/filespusher/page.tsx",
                    lineNumber: 874,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/filespusher/page.tsx",
                lineNumber: 873,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/filespusher/page.tsx",
            lineNumber: 872,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProtectedRoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        allowedRoles: [
            "user",
            "employee",
            "admin"
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex flex-col items-center px-4 sm:px-[5%] lg:px-[10%] py-4 sm:py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex items-center w-full mt-2 mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.back(),
                            className: "absolute left-0 flex items-center text-[#B11016] hover:text-[#800b10] text-sm sm:text-base",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaArrowLeft"], {
                                    className: "mr-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/filespusher/page.tsx",
                                    lineNumber: 892,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/filespusher/page.tsx",
                                    lineNumber: 893,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/filespusher/page.tsx",
                            lineNumber: 888,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl sm:text-2xl lg:text-4xl font-bold text-[#B11016] pb-2 sm:pb-4",
                                    children: "Files Pusher"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/filespusher/page.tsx",
                                    lineNumber: 897,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm sm:text-md text-black mb-4 sm:mb-6 px-4",
                                    children: "Push the files to the departments for review and approval."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/filespusher/page.tsx",
                                    lineNumber: 900,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-2 border-b-[3px] border-[#B11016]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/filespusher/page.tsx",
                                    lineNumber: 903,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/filespusher/page.tsx",
                            lineNumber: 896,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/filespusher/page.tsx",
                    lineNumber: 887,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-6xl mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/app/filespusher/page.tsx",
                        lineNumber: 910,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/filespusher/page.tsx",
                    lineNumber: 909,
                    columnNumber: 11
                }, this),
                userDepartmentId === null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-6xl mb-4 p-4 bg-blue-100 border border-blue-400 text-blue-700 rounded",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Note:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/filespusher/page.tsx",
                                lineNumber: 918,
                                columnNumber: 15
                            }, this),
                            " Department information not found.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: refreshUserAccess,
                                className: "ml-2 px-2 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700",
                                children: "Refresh Access"
                            }, void 0, false, {
                                fileName: "[project]/src/app/filespusher/page.tsx",
                                lineNumber: 919,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/filespusher/page.tsx",
                        lineNumber: 917,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/filespusher/page.tsx",
                    lineNumber: 916,
                    columnNumber: 11
                }, this),
                !canInteract && documentSetting && userDepartmentId !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-6xl mb-4 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: [
                            "This document is currently at ",
                            getDepartmentNameById(documentSetting.current_location),
                            ". You can only interact with documents that are at your department (Department ID: ",
                            userDepartmentId,
                            ").",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: refreshUserAccess,
                                className: "ml-2 px-2 py-1 bg-yellow-600 text-white text-xs rounded hover:bg-yellow-700",
                                children: "Refresh Access"
                            }, void 0, false, {
                                fileName: "[project]/src/app/filespusher/page.tsx",
                                lineNumber: 934,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/filespusher/page.tsx",
                        lineNumber: 931,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/filespusher/page.tsx",
                    lineNumber: 930,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-6xl mt-2 grid grid-cols-3 gap-4 text-lg font-semibold text-gray-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#B11016] font-bold",
                                    children: "File Name:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/filespusher/page.tsx",
                                    lineNumber: 946,
                                    columnNumber: 16
                                }, this),
                                " ",
                                proposalTitle
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/filespusher/page.tsx",
                            lineNumber: 946,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#B11016] font-bold",
                                    children: "File Description:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/filespusher/page.tsx",
                                    lineNumber: 947,
                                    columnNumber: 16
                                }, this),
                                "  ",
                                proposalDetails
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/filespusher/page.tsx",
                            lineNumber: 947,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#B11016] font-bold",
                                    children: "Date created:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/filespusher/page.tsx",
                                    lineNumber: 949,
                                    columnNumber: 13
                                }, this),
                                " ",
                                files.length > 0 ? files[0].dateCreated : "N/A"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/filespusher/page.tsx",
                            lineNumber: 948,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/filespusher/page.tsx",
                    lineNumber: 945,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-6xl mt-6 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-2 w-full mb-6",
                            children: departments.map((dept)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 h-10 rounded flex items-center justify-center text-xs font-medium transition-colors duration-300 ".concat(dept.isCompleted ? "bg-[#333333] text-white" : dept.isActive ? "bg-[#B11016] text-white" : "bg-gray-300 text-gray-700"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-center px-1 truncate",
                                        title: dept.name,
                                        children: dept.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/filespusher/page.tsx",
                                        lineNumber: 968,
                                        columnNumber: 17
                                    }, this)
                                }, dept.id, false, {
                                    fileName: "[project]/src/app/filespusher/page.tsx",
                                    lineNumber: 959,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/filespusher/page.tsx",
                            lineNumber: 957,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-2 w-full",
                            children: departments.map((dept)=>{
                                const deptFile = files.find((file)=>file.department === dept.name);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex flex-col items-center",
                                    children: deptFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cursor-pointer transition-all duration-200 ".concat(deptFile.isSelected ? "transform scale-105" : ""),
                                                onClick: ()=>handleFileSelect(deptFile),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: deptFile.isSelected ? "/images/file-card-black.png" : getFileCardImage(deptFile),
                                                        alt: "File Card",
                                                        width: 120,
                                                        height: 144,
                                                        className: "mx-auto"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/filespusher/page.tsx",
                                                        lineNumber: 990,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/filespusher/page.tsx",
                                                    lineNumber: 989,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/filespusher/page.tsx",
                                                lineNumber: 984,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-medium text-gray-800 mb-2 truncate px-1",
                                                title: deptFile.name,
                                                children: deptFile.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/filespusher/page.tsx",
                                                lineNumber: 1000,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleDownload(deptFile),
                                                className: "px-3 py-1 bg-[#B11016] text-white text-xs rounded hover:bg-[#800b10] transition-colors flex items-center justify-center mx-auto",
                                                disabled: !deptFile.downloadUrl,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaDownload"], {
                                                        className: "mr-1",
                                                        size: 10
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/filespusher/page.tsx",
                                                        lineNumber: 1010,
                                                        columnNumber: 25
                                                    }, this),
                                                    "Download"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/filespusher/page.tsx",
                                                lineNumber: 1005,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/filespusher/page.tsx",
                                        lineNumber: 983,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center py-8 text-gray-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFileAlt"], {
                                                className: "mx-auto text-2xl mb-2 opacity-30"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/filespusher/page.tsx",
                                                lineNumber: 1016,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs",
                                                children: "No file"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/filespusher/page.tsx",
                                                lineNumber: 1017,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/filespusher/page.tsx",
                                        lineNumber: 1015,
                                        columnNumber: 21
                                    }, this)
                                }, dept.id, false, {
                                    fileName: "[project]/src/app/filespusher/page.tsx",
                                    lineNumber: 981,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/filespusher/page.tsx",
                            lineNumber: 976,
                            columnNumber: 11
                        }, this),
                        files.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-12 text-gray-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFileAlt"], {
                                    className: "mx-auto text-4xl mb-4 opacity-30"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/filespusher/page.tsx",
                                    lineNumber: 1030,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm sm:text-base",
                                    children: "No document available"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/filespusher/page.tsx",
                                    lineNumber: 1031,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-400 mt-2",
                                    children: "Document will appear here when loaded"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/filespusher/page.tsx",
                                    lineNumber: 1034,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/filespusher/page.tsx",
                            lineNumber: 1029,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/filespusher/page.tsx",
                    lineNumber: 955,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-6xl mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center space-x-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsUploadModalOpen(true),
                                    disabled: !canInteract || userDepartmentId === null,
                                    className: "".concat(isAtFinalDepartment() ? 'w-full max-w-xs' : 'w-full max-w-xs', " px-6 py-3 rounded transition-colors ").concat(canInteract && userDepartmentId !== null ? "bg-[#333333] text-white hover:bg-[#0f0f0f]" : "bg-gray-400 text-gray-600 cursor-not-allowed"),
                                    children: "Update"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/filespusher/page.tsx",
                                    lineNumber: 1044,
                                    columnNumber: 13
                                }, this),
                                !isAtFinalDepartment() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handlePushDocument,
                                    disabled: !canInteract || userDepartmentId === null,
                                    className: "w-full max-w-xs px-6 py-3 rounded transition-colors ".concat(canInteract && userDepartmentId !== null ? "bg-[#B11016] text-white hover:bg-[#800b10]" : "bg-gray-400 text-gray-600 cursor-not-allowed"),
                                    children: "Push"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/filespusher/page.tsx",
                                    lineNumber: 1057,
                                    columnNumber: 15
                                }, this),
                                isAtFinalDepartment() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleApproveDocument,
                                            disabled: !canInteract || userDepartmentId === null,
                                            className: "w-full max-w-xs px-6 py-3 rounded transition-colors flex items-center justify-center ".concat(canInteract && userDepartmentId !== null ? "bg-green-600 text-white hover:bg-green-700" : "bg-gray-400 text-gray-600 cursor-not-allowed"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaCheck"], {
                                                    className: "mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/filespusher/page.tsx",
                                                    lineNumber: 1080,
                                                    columnNumber: 19
                                                }, this),
                                                "Approve"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/filespusher/page.tsx",
                                            lineNumber: 1072,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleRejectDocument,
                                            disabled: !canInteract || userDepartmentId === null,
                                            className: "w-full max-w-xs px-6 py-3 rounded transition-colors flex items-center justify-center ".concat(canInteract && userDepartmentId !== null ? "bg-red-600 text-white hover:bg-red-700" : "bg-gray-400 text-gray-600 cursor-not-allowed"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTimes"], {
                                                    className: "mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/filespusher/page.tsx",
                                                    lineNumber: 1092,
                                                    columnNumber: 19
                                                }, this),
                                                "Reject"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/filespusher/page.tsx",
                                            lineNumber: 1084,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/filespusher/page.tsx",
                            lineNumber: 1043,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-sm text-gray-500 mt-2 space-y-1",
                            children: userDepartmentId === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Department information not available. Please check your login setup or refresh access."
                            }, void 0, false, {
                                fileName: "[project]/src/app/filespusher/page.tsx",
                                lineNumber: 1102,
                                columnNumber: 15
                            }, this) : !canInteract ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "You can only interact with documents that are currently at your department."
                            }, void 0, false, {
                                fileName: "[project]/src/app/filespusher/page.tsx",
                                lineNumber: 1104,
                                columnNumber: 15
                            }, this) : isAtFinalDepartment() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Document has reached the final department. You can update, approve, or reject the document."
                            }, void 0, false, {
                                fileName: "[project]/src/app/filespusher/page.tsx",
                                lineNumber: 1106,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "You can update the document or push it to the next department."
                            }, void 0, false, {
                                fileName: "[project]/src/app/filespusher/page.tsx",
                                lineNumber: 1108,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/filespusher/page.tsx",
                            lineNumber: 1100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/filespusher/page.tsx",
                    lineNumber: 1042,
                    columnNumber: 9
                }, this),
                isUploadModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 flex items-center justify-center bg-black/50 z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative mx-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setIsUploadModalOpen(false);
                                    setSelectedFile(null);
                                    setFileName('');
                                    setFileDescription('');
                                },
                                className: "absolute top-3 right-3 text-gray-500 hover:text-gray-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTimes"], {}, void 0, false, {
                                    fileName: "[project]/src/app/filespusher/page.tsx",
                                    lineNumber: 1127,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/filespusher/page.tsx",
                                lineNumber: 1118,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold text-[#B11016] mb-4",
                                children: "Update File"
                            }, void 0, false, {
                                fileName: "[project]/src/app/filespusher/page.tsx",
                                lineNumber: 1130,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onDrop: handleDrop,
                                onDragOver: (e)=>e.preventDefault(),
                                className: "border-2 border-dashed border-red-300 rounded-lg p-6 text-center cursor-pointer hover:border-red-500 transition mb-4",
                                onClick: ()=>{
                                    var _fileInputRef_current;
                                    return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/uploadicon.png",
                                        alt: "Upload Icon",
                                        className: "mx-auto h-12 w-12 object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/filespusher/page.tsx",
                                        lineNumber: 1141,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-gray-600 text-sm",
                                        children: [
                                            "Drag & drop files or",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-600 underline",
                                                children: "Browse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/filespusher/page.tsx",
                                                lineNumber: 1149,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/filespusher/page.tsx",
                                        lineNumber: 1147,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-400",
                                        children: "Supported formats: JPEG, PNG, PDF, DOCX"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/filespusher/page.tsx",
                                        lineNumber: 1151,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        accept: ".jpeg,.jpg,.png,.pdf,.docx",
                                        ref: fileInputRef,
                                        className: "hidden",
                                        onChange: handleFileChange
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/filespusher/page.tsx",
                                        lineNumber: 1155,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/filespusher/page.tsx",
                                lineNumber: 1135,
                                columnNumber: 15
                            }, this),
                            selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 p-2 border border-green-400 rounded bg-green-50 text-green-700 text-sm",
                                children: [
                                    "Selected: ",
                                    selectedFile.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/filespusher/page.tsx",
                                lineNumber: 1166,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleFileUpdate,
                                disabled: !selectedFile,
                                className: "w-full px-4 py-2 bg-[#B11016] text-white rounded hover:bg-[#800b10] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed",
                                children: "Update File"
                            }, void 0, false, {
                                fileName: "[project]/src/app/filespusher/page.tsx",
                                lineNumber: 1172,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/filespusher/page.tsx",
                        lineNumber: 1116,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/filespusher/page.tsx",
                    lineNumber: 1115,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomModal, {
                    isOpen: modal.isOpen,
                    onClose: closeModal,
                    title: modal.title,
                    message: modal.message,
                    type: modal.type,
                    onConfirm: modal.onConfirm,
                    confirmText: modal.confirmText,
                    cancelText: modal.cancelText,
                    showInput: modal.showInput,
                    inputPlaceholder: modal.inputPlaceholder,
                    inputValue: modal.inputValue,
                    onInputChange: modal.onInputChange
                }, void 0, false, {
                    fileName: "[project]/src/app/filespusher/page.tsx",
                    lineNumber: 1184,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingModal, {
                    isOpen: loadingModal.isOpen,
                    message: loadingModal.message
                }, void 0, false, {
                    fileName: "[project]/src/app/filespusher/page.tsx",
                    lineNumber: 1200,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/filespusher/page.tsx",
            lineNumber: 885,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/filespusher/page.tsx",
        lineNumber: 884,
        columnNumber: 5
    }, this);
}
_s(FilesPusherContent, "94sVCNZGyOGcCvS0PTsyTWrjGHY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c3 = FilesPusherContent;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CustomModal");
__turbopack_context__.k.register(_c1, "LoadingModal");
__turbopack_context__.k.register(_c2, "FilesPusher");
__turbopack_context__.k.register(_c3, "FilesPusherContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_c13338b0._.js.map