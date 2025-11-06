(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/QuestionCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuestionCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Card/Card.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CardContent/CardContent.js [app-client] (ecmascript) <export default as CardContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function QuestionCard({ question, options, selectedAnswer, onAnswerSelect, questionNumber, totalQuestions }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: -20
        },
        transition: {
            duration: 0.3
        },
        style: {
            width: "100%"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
            sx: {
                borderRadius: {
                    xs: 2,
                    sm: 3
                },
                boxShadow: "0 10px 40px rgba(0, 95, 163, 0.15), 0 0 0 1px rgba(255, 152, 0, 0.1)",
                maxWidth: 800,
                width: "100%",
                mx: "auto",
                minHeight: {
                    xs: "auto",
                    sm: 500
                },
                maxHeight: {
                    xs: "calc(100vh - 200px)",
                    sm: "none"
                },
                display: "flex",
                flexDirection: "column",
                background: "linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)",
                border: "1px solid rgba(0, 95, 163, 0.1)",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: "linear-gradient(90deg, #005fa3 0%, #ff9800 50%, #ff6f00 100%)"
                },
                "&::after": {
                    content: '""',
                    position: "absolute",
                    top: -50,
                    right: -50,
                    width: "200px",
                    height: "200px",
                    background: "radial-gradient(circle, rgba(255, 152, 0, 0.05) 0%, transparent 70%)",
                    borderRadius: "50%",
                    pointerEvents: "none"
                }
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                sx: {
                    p: {
                        xs: 2,
                        sm: 3,
                        md: 4
                    },
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    minHeight: 0,
                    overflow: "auto"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "caption",
                        color: "text.secondary",
                        sx: {
                            mb: 2,
                            display: "block",
                            height: 24,
                            lineHeight: "24px"
                        },
                        children: [
                            "Soru ",
                            questionNumber,
                            " / ",
                            totalQuestions
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/QuestionCard.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            minHeight: {
                                xs: "auto",
                                sm: 120
                            },
                            maxHeight: {
                                xs: "none",
                                sm: 120
                            },
                            mb: {
                                xs: 2,
                                sm: 3,
                                md: 4
                            },
                            display: "flex",
                            alignItems: "flex-start",
                            overflow: {
                                xs: "visible",
                                sm: "auto"
                            },
                            "&::-webkit-scrollbar": {
                                width: "6px"
                            },
                            "&::-webkit-scrollbar-track": {
                                background: "#f1f1f1",
                                borderRadius: "10px"
                            },
                            "&::-webkit-scrollbar-thumb": {
                                background: "#888",
                                borderRadius: "10px",
                                "&:hover": {
                                    background: "#555"
                                }
                            }
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            variant: "h5",
                            component: "h2",
                            sx: {
                                fontWeight: 600,
                                color: "#333",
                                lineHeight: 1.5,
                                wordBreak: "break-word",
                                fontSize: {
                                    xs: "1.25rem",
                                    sm: "1.5rem",
                                    md: "1.75rem"
                                }
                            },
                            children: question
                        }, void 0, false, {
                            fileName: "[project]/src/components/QuestionCard.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuestionCard.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            display: "flex",
                            flexDirection: "column",
                            gap: {
                                xs: 1.5,
                                sm: 2
                            },
                            flex: 1,
                            minHeight: 0,
                            pt: {
                                xs: 1,
                                sm: 2
                            },
                            overflowY: {
                                xs: "visible",
                                sm: "auto"
                            },
                            maxHeight: {
                                xs: "none",
                                sm: "calc(100vh - 400px)",
                                md: "none"
                            },
                            "&::-webkit-scrollbar": {
                                width: "6px"
                            },
                            "&::-webkit-scrollbar-track": {
                                background: "#f1f1f1",
                                borderRadius: "10px"
                            },
                            "&::-webkit-scrollbar-thumb": {
                                background: "#888",
                                borderRadius: "10px",
                                "&:hover": {
                                    background: "#555"
                                }
                            }
                        },
                        children: options.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: selectedAnswer === option ? "contained" : "outlined",
                                onClick: ()=>onAnswerSelect(option),
                                fullWidth: true,
                                sx: {
                                    minHeight: {
                                        xs: "auto",
                                        sm: 56
                                    },
                                    py: {
                                        xs: 1.25,
                                        sm: 1.5
                                    },
                                    px: {
                                        xs: 2,
                                        sm: 3
                                    },
                                    textTransform: "none",
                                    fontSize: {
                                        xs: "0.875rem",
                                        sm: "0.9375rem",
                                        md: "1rem"
                                    },
                                    borderRadius: 2,
                                    background: selectedAnswer === option ? "linear-gradient(135deg, #005fa3 0%, #004a82 100%)" : "transparent",
                                    backgroundColor: selectedAnswer === option ? "#005fa3" : "transparent",
                                    color: selectedAnswer === option ? "#fff" : "#005fa3",
                                    borderColor: selectedAnswer === option ? "#005fa3" : "#d0d7de",
                                    borderWidth: 2,
                                    justifyContent: "flex-start",
                                    textAlign: "left",
                                    whiteSpace: "normal",
                                    wordBreak: "break-word",
                                    fontWeight: selectedAnswer === option ? 600 : 500,
                                    boxShadow: selectedAnswer === option ? "0 2px 8px rgba(0, 95, 163, 0.2)" : "none",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        background: selectedAnswer === option ? "linear-gradient(135deg, #004a82 0%, #003d6b 100%)" : "linear-gradient(135deg, #fff5e6 0%, #ffe0b2 100%)",
                                        backgroundColor: selectedAnswer === option ? "#004a82" : "#fff5e6",
                                        borderColor: selectedAnswer === option ? "#004a82" : "#ff9800",
                                        transform: "translateY(-2px)",
                                        boxShadow: selectedAnswer === option ? "0 4px 12px rgba(0, 95, 163, 0.3)" : "0 2px 8px rgba(255, 152, 0, 0.2)"
                                    }
                                },
                                children: option
                            }, index, false, {
                                fileName: "[project]/src/components/QuestionCard.tsx",
                                lineNumber: 162,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuestionCard.tsx",
                        lineNumber: 135,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/QuestionCard.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/QuestionCard.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/QuestionCard.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = QuestionCard;
var _c;
__turbopack_context__.k.register(_c, "QuestionCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ResultScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResultScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Card/Card.js [app-client] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CardContent/CardContent.js [app-client] (ecmascript) <export default as CardContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Link/Link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Divider/Divider.js [app-client] (ecmascript) <export default as Divider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/CheckCircle.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Cancel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Cancel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Description.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Language$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/Language.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$VerifiedUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/icons-material/esm/VerifiedUser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function ResultScreen({ isEligible, onRestart }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            scale: 0.9
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        transition: {
            duration: 0.5
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
            sx: {
                borderRadius: {
                    xs: 2,
                    sm: 3
                },
                boxShadow: isEligible ? "0 20px 60px rgba(76, 175, 80, 0.25), 0 0 0 1px rgba(76, 175, 80, 0.1)" : "0 20px 60px rgba(244, 67, 54, 0.15), 0 0 0 1px rgba(244, 67, 54, 0.1)",
                maxWidth: 800,
                width: "100%",
                mx: "auto",
                minHeight: {
                    xs: "auto",
                    sm: 400
                },
                maxHeight: {
                    xs: "calc(100vh - 100px)",
                    sm: "none"
                },
                display: "flex",
                flexDirection: "column",
                background: isEligible ? "linear-gradient(135deg, #ffffff 0%, #f1f8f4 100%)" : "linear-gradient(135deg, #ffffff 0%, #fff5f5 100%)",
                border: isEligible ? "1px solid rgba(76, 175, 80, 0.2)" : "1px solid rgba(244, 67, 54, 0.2)",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: isEligible ? "linear-gradient(90deg, #4caf50 0%, #66bb6a 50%, #81c784 100%)" : "linear-gradient(90deg, #f44336 0%, #e57373 50%, #ef5350 100%)"
                },
                "&::after": {
                    content: '""',
                    position: "absolute",
                    top: -100,
                    right: -100,
                    width: "300px",
                    height: "300px",
                    background: isEligible ? "radial-gradient(circle, rgba(76, 175, 80, 0.08) 0%, transparent 70%)" : "radial-gradient(circle, rgba(244, 67, 54, 0.08) 0%, transparent 70%)",
                    borderRadius: "50%",
                    pointerEvents: "none"
                }
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                sx: {
                    p: {
                        xs: 3,
                        sm: 4,
                        md: 6
                    },
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                    minHeight: 0,
                    overflow: "auto"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            minHeight: {
                                xs: "auto",
                                sm: 200
                            },
                            justifyContent: "center",
                            mb: {
                                xs: 2,
                                sm: 0
                            }
                        },
                        children: isEligible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$CheckCircle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        fontSize: {
                                            xs: 60,
                                            sm: 70,
                                            md: 80
                                        },
                                        color: "#4caf50",
                                        mb: {
                                            xs: 2,
                                            sm: 3
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ResultScreen.tsx",
                                    lineNumber: 108,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "h4",
                                    component: "h2",
                                    sx: {
                                        mb: {
                                            xs: 1,
                                            sm: 2
                                        },
                                        fontWeight: 600,
                                        color: "#333",
                                        fontSize: {
                                            xs: "1.5rem",
                                            sm: "2rem",
                                            md: "2.125rem"
                                        }
                                    },
                                    children: "Tebrikler!"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ResultScreen.tsx",
                                    lineNumber: 115,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "h6",
                                    sx: {
                                        mb: {
                                            xs: 2,
                                            sm: 3,
                                            md: 4
                                        },
                                        color: "#666",
                                        lineHeight: 1.6,
                                        fontSize: {
                                            xs: "1rem",
                                            sm: "1.25rem"
                                        },
                                        px: {
                                            xs: 2,
                                            sm: 0
                                        }
                                    },
                                    children: "TOKİ başvuru şartlarını sağlıyorsunuz."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ResultScreen.tsx",
                                    lineNumber: 127,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Cancel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    sx: {
                                        fontSize: {
                                            xs: 60,
                                            sm: 70,
                                            md: 80
                                        },
                                        color: "#f44336",
                                        mb: {
                                            xs: 2,
                                            sm: 3
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ResultScreen.tsx",
                                    lineNumber: 142,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "h4",
                                    component: "h2",
                                    sx: {
                                        mb: {
                                            xs: 1,
                                            sm: 2
                                        },
                                        fontWeight: 600,
                                        color: "#333",
                                        fontSize: {
                                            xs: "1.5rem",
                                            sm: "2rem",
                                            md: "2.125rem"
                                        }
                                    },
                                    children: "Maalesef"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ResultScreen.tsx",
                                    lineNumber: 149,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "h6",
                                    sx: {
                                        mb: {
                                            xs: 2,
                                            sm: 3,
                                            md: 4
                                        },
                                        color: "#666",
                                        lineHeight: 1.6,
                                        fontSize: {
                                            xs: "1rem",
                                            sm: "1.25rem"
                                        },
                                        px: {
                                            xs: 2,
                                            sm: 0
                                        }
                                    },
                                    children: "Bu başvuru döneminde TOKİ'ye başvuru yapamıyorsunuz."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ResultScreen.tsx",
                                    lineNumber: 161,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ResultScreen.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "contained",
                        onClick: onRestart,
                        sx: {
                            m: {
                                xs: 1,
                                sm: 2
                            },
                            py: {
                                xs: 1.25,
                                sm: 1.5
                            },
                            px: {
                                xs: 2,
                                sm: 3
                            },
                            fontSize: {
                                xs: "0.875rem",
                                sm: "1rem"
                            },
                            backgroundColor: "#005fa3",
                            "&:hover": {
                                backgroundColor: "#004a82"
                            }
                        },
                        children: "Yeniden Dene"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ResultScreen.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {
                        sx: {
                            my: {
                                xs: 2,
                                sm: 3,
                                md: 4
                            },
                            width: "100%",
                            maxWidth: 500
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ResultScreen.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            width: "100%",
                            maxWidth: 600
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                variant: "subtitle2",
                                sx: {
                                    mb: {
                                        xs: 2,
                                        sm: 3
                                    },
                                    color: "#55883B",
                                    fontWeight: 600,
                                    fontSize: {
                                        xs: "0.875rem",
                                        sm: "0.95rem"
                                    }
                                },
                                children: "Yararlı Bağlantılar"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ResultScreen.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: {
                                        xs: 1.5,
                                        sm: 2
                                    },
                                    mb: 1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                        href: "https://talep.toki.gov.tr/500binkonut/basvuru_bilgilendirme_formu.pdf",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        sx: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: {
                                                xs: 1,
                                                sm: 1.5
                                            },
                                            color: "#005fa3",
                                            textDecoration: "none",
                                            p: {
                                                xs: 1.25,
                                                sm: 1.5
                                            },
                                            borderRadius: 2,
                                            border: "1px solid rgba(0, 95, 163, 0.2)",
                                            backgroundColor: "rgba(0, 95, 163, 0.05)",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                backgroundColor: "rgba(0, 95, 163, 0.1)",
                                                borderColor: "#005fa3",
                                                transform: "translateY(-2px)",
                                                boxShadow: "0 4px 12px rgba(0, 95, 163, 0.15)"
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Description$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                sx: {
                                                    fontSize: {
                                                        xs: 18,
                                                        sm: 20
                                                    },
                                                    color: "#005fa3",
                                                    flexShrink: 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ResultScreen.tsx",
                                                lineNumber: 244,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "body2",
                                                sx: {
                                                    flex: 1,
                                                    textAlign: "left",
                                                    fontWeight: 500,
                                                    fontSize: {
                                                        xs: "0.8125rem",
                                                        sm: "0.875rem"
                                                    }
                                                },
                                                children: "Detaylı Başvuru Bilgilendirme Formu"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ResultScreen.tsx",
                                                lineNumber: 245,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ResultScreen.tsx",
                                        lineNumber: 221,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                        href: "https://talep.toki.gov.tr/500binkonut/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        sx: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: {
                                                xs: 1,
                                                sm: 1.5
                                            },
                                            color: "#005fa3",
                                            textDecoration: "none",
                                            p: {
                                                xs: 1.25,
                                                sm: 1.5
                                            },
                                            borderRadius: 2,
                                            border: "1px solid rgba(0, 95, 163, 0.2)",
                                            backgroundColor: "rgba(0, 95, 163, 0.05)",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                backgroundColor: "rgba(0, 95, 163, 0.1)",
                                                borderColor: "#005fa3",
                                                transform: "translateY(-2px)",
                                                boxShadow: "0 4px 12px rgba(0, 95, 163, 0.15)"
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$Language$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                sx: {
                                                    fontSize: {
                                                        xs: 18,
                                                        sm: 20
                                                    },
                                                    color: "#005fa3",
                                                    flexShrink: 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ResultScreen.tsx",
                                                lineNumber: 281,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "body2",
                                                sx: {
                                                    flex: 1,
                                                    textAlign: "left",
                                                    fontWeight: 500,
                                                    fontSize: {
                                                        xs: "0.8125rem",
                                                        sm: "0.875rem"
                                                    }
                                                },
                                                children: "TOKİ 500 Bin Konut Projesi Resmi Site"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ResultScreen.tsx",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ResultScreen.tsx",
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                        href: "https://www.turkiye.gov.tr/toplu-konut-idaresi-baskanligi-toki",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        sx: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: {
                                                xs: 1,
                                                sm: 1.5
                                            },
                                            color: "#005fa3",
                                            textDecoration: "none",
                                            p: {
                                                xs: 1.25,
                                                sm: 1.5
                                            },
                                            borderRadius: 2,
                                            border: "1px solid rgba(0, 95, 163, 0.2)",
                                            backgroundColor: "rgba(0, 95, 163, 0.05)",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                backgroundColor: "rgba(0, 95, 163, 0.1)",
                                                borderColor: "#005fa3",
                                                transform: "translateY(-2px)",
                                                boxShadow: "0 4px 12px rgba(0, 95, 163, 0.15)"
                                            }
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$icons$2d$material$2f$esm$2f$VerifiedUser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                sx: {
                                                    fontSize: {
                                                        xs: 18,
                                                        sm: 20
                                                    },
                                                    color: "#005fa3",
                                                    flexShrink: 0
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ResultScreen.tsx",
                                                lineNumber: 318,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "body2",
                                                sx: {
                                                    flex: 1,
                                                    textAlign: "left",
                                                    fontWeight: 500,
                                                    fontSize: {
                                                        xs: "0.8125rem",
                                                        sm: "0.875rem"
                                                    }
                                                },
                                                children: "E-devlet TOKİ İşlemleri"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ResultScreen.tsx",
                                                lineNumber: 319,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ResultScreen.tsx",
                                        lineNumber: 295,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ResultScreen.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ResultScreen.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ResultScreen.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ResultScreen.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ResultScreen.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c = ResultScreen;
var _c;
__turbopack_context__.k.register(_c, "ResultScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/QuizFlow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuizFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stepper$2f$Stepper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stepper$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Stepper/Stepper.js [app-client] (ecmascript) <export default as Stepper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Step$2f$Step$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Step$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Step/Step.js [app-client] (ecmascript) <export default as Step>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$StepLabel$2f$StepLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StepLabel$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/StepLabel/StepLabel.js [app-client] (ecmascript) <export default as StepLabel>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/QuestionCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ResultScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const QUESTIONS = [
    {
        id: "citizenship",
        question: "En az 10 yıldır T.C. vatandaşı mısınız?",
        options: [
            "Evet",
            "Hayır"
        ]
    },
    {
        id: "age",
        question: "18 yaşını doldurdunuz mu?",
        options: [
            "Evet",
            "Hayır"
        ]
    },
    {
        id: "category",
        question: "Hangi kategoriye başvurmak istiyorsunuz?",
        options: [
            "Şehit Ailesi, Terör, Harp veya Vazife Malulü",
            "Gazi (Kıbrıs, Kore)",
            "En az %40 Engelli Vatandaş",
            "Emekli",
            "3 ve Daha Fazla Çocuklu Aile",
            "Genç (18–30 yaş arası)",
            "Diğer"
        ]
    },
    {
        id: "residence",
        question: "Projenin bulunduğu il/ilçe/beldede en az 1 yıldır ikamet ediyor musunuz? (Şehit Aileleri için 3 yıl şartı vardır.)",
        options: [
            "Evet",
            "Hayır"
        ]
    },
    {
        id: "hasHouse",
        question: "Sizin, eşinizin veya çocuklarınızın adına Türkiye'de tapuda kayıtlı bağımsız konut var mı?",
        options: [
            "Evet",
            "Hayır"
        ]
    },
    {
        id: "hasTokiBefore",
        question: "Daha önce TOKİ'den konut veya arsa aldınız mı?",
        options: [
            "Evet",
            "Hayır"
        ]
    },
    {
        id: "income",
        question: "Aylık hane halkı toplam net geliriniz (12 ay ortalaması):",
        options: [
            "127.000 TL ve altı (İstanbul için 145.000 TL ve altı)",
            "Daha yüksek"
        ]
    },
    {
        id: "spouse",
        question: "Evliyseniz, eşiniz de aynı şartları sağlıyor mu?",
        options: [
            "Evet",
            "Hayır",
            "Bekarım"
        ]
    }
];
const CATEGORY_SPECIFIC_QUESTIONS = {
    "Genç (18–30 yaş arası)": {
        question: "Doğum tarihiniz 10/11/1995 tarihinden sonra mı?",
        options: [
            "Evet",
            "Hayır"
        ]
    },
    "3 ve Daha Fazla Çocuklu Aile": {
        question: "19/12/2007 tarihinden sonra doğan en az 3 çocuk sahibi misiniz?",
        options: [
            "Evet",
            "Hayır"
        ]
    },
    "Şehit Ailesi, Terör, Harp veya Vazife Malulü": {
        question: '"Hak Sahipliği" TOKİ/Sosyal Güvenlik Kurumu tarafından onaylanmış mı?',
        options: [
            "Evet",
            "Hayır"
        ]
    },
    "Gazi (Kıbrıs, Kore)": {
        question: "1005 Sayılı Kanun kapsamında Kore veya Kıbrıs Gazisi misiniz?",
        options: [
            "Evet",
            "Hayır"
        ]
    },
    "En az %40 Engelli Vatandaş": {
        question: "En az %40 engel oranına sahip sağlık kurulu raporunuz var mı?",
        options: [
            "Evet",
            "Hayır"
        ]
    },
    Emekli: {
        question: "SGK emeklisi misiniz veya vefat eden emeklinin dul eşi misiniz?",
        options: [
            "Evet",
            "Hayır"
        ]
    }
};
function QuizFlow() {
    _s();
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        citizenship: null,
        age: null,
        category: null,
        residence: null,
        hasHouse: null,
        hasTokiBefore: null,
        income: null,
        spouse: null,
        categorySpecific: null
    });
    const [showResult, setShowResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEligible, setIsEligible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const getTotalSteps = ()=>{
        const hasCategorySpecific = answers.category && CATEGORY_SPECIFIC_QUESTIONS[answers.category];
        return QUESTIONS.length + (hasCategorySpecific ? 1 : 0);
    };
    const totalSteps = getTotalSteps();
    const handleAnswer = (answer)=>{
        const currentQuestion = getCurrentQuestion();
        if (!currentQuestion) return;
        const newAnswers = {
            ...answers,
            [currentQuestion.id]: answer
        };
        setAnswers(newAnswers);
        // Check for immediate disqualification
        if (shouldDisqualifyImmediately(currentQuestion.id, answer)) {
            setTimeout(()=>{
                setIsEligible(false);
                setShowResult(true);
            }, 500);
            return;
        }
        // Auto-advance after a short delay
        setTimeout(()=>{
            // Calculate if we need category-specific question
            const needsCategorySpecific = newAnswers.category && newAnswers.category !== "Diğer" && CATEGORY_SPECIFIC_QUESTIONS[newAnswers.category];
            const newTotalSteps = QUESTIONS.length + (needsCategorySpecific ? 1 : 0);
            if (currentStep < newTotalSteps - 1) {
                setCurrentStep(currentStep + 1);
            } else {
                checkEligibility(newAnswers);
            }
        }, 500);
    };
    const shouldDisqualifyImmediately = (questionId, answer)=>{
        switch(questionId){
            case "citizenship":
                return answer === "Hayır";
            case "age":
                return answer === "Hayır";
            case "residence":
                return answer === "Hayır";
            case "hasHouse":
                return answer === "Evet";
            case "hasTokiBefore":
                return answer === "Evet";
            case "income":
                return answer === "Daha yüksek";
            case "spouse":
                return answer === "Hayır";
            case "categorySpecific":
                return answer === "Hayır";
            default:
                return false;
        }
    };
    const getCurrentQuestion = ()=>{
        // Show category-specific question after all regular questions
        if (currentStep === QUESTIONS.length && answers.category && CATEGORY_SPECIFIC_QUESTIONS[answers.category]) {
            return {
                id: "categorySpecific",
                question: CATEGORY_SPECIFIC_QUESTIONS[answers.category].question,
                options: CATEGORY_SPECIFIC_QUESTIONS[answers.category].options
            };
        }
        // Regular question flow
        if (currentStep < QUESTIONS.length) {
            return QUESTIONS[currentStep];
        }
        return null;
    };
    const checkEligibility = (finalAnswers)=>{
        // Check all basic requirements
        if (finalAnswers.citizenship === "Evet" && finalAnswers.age === "Evet" && finalAnswers.residence === "Evet" && finalAnswers.hasHouse === "Hayır" && finalAnswers.hasTokiBefore === "Hayır" && finalAnswers.income === "127.000 TL ve altı (İstanbul için 145.000 TL ve altı)" && (finalAnswers.spouse === "Evet" || finalAnswers.spouse === "Bekarım")) {
            // Check category-specific requirements if applicable
            if (finalAnswers.category && CATEGORY_SPECIFIC_QUESTIONS[finalAnswers.category]) {
                if (finalAnswers.categorySpecific === "Evet") {
                    setIsEligible(true);
                } else {
                    setIsEligible(false);
                }
            } else {
                // For "Diğer" category or categories without specific requirements
                setIsEligible(true);
            }
        } else {
            setIsEligible(false);
        }
        setShowResult(true);
    };
    const handleNext = ()=>{
        if (currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            checkEligibility(answers);
        }
    };
    const handleBack = ()=>{
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };
    const handleRestart = ()=>{
        setCurrentStep(0);
        setAnswers({
            citizenship: null,
            age: null,
            category: null,
            residence: null,
            hasHouse: null,
            hasTokiBefore: null,
            income: null,
            spouse: null,
            categorySpecific: null
        });
        setShowResult(false);
        setIsEligible(false);
    };
    if (showResult) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ResultScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isEligible: isEligible,
            onRestart: handleRestart
        }, void 0, false, {
            fileName: "[project]/src/components/QuizFlow.tsx",
            lineNumber: 285,
            columnNumber: 12
        }, this);
    }
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) {
        checkEligibility(answers);
        return null;
    }
    const questionKey = currentQuestion.id;
    const selectedAnswer = answers[questionKey];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            width: "100%",
            maxWidth: 900,
            mx: "auto",
            px: {
                xs: 1,
                sm: 2
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Stepper$2f$Stepper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stepper$3e$__["Stepper"], {
                activeStep: currentStep,
                sx: {
                    mb: {
                        xs: 2,
                        sm: 3,
                        md: 4
                    },
                    mt: {
                        xs: 1,
                        sm: 2
                    },
                    "& .MuiStepLabel-root .Mui-completed": {
                        color: "#005fa3"
                    },
                    "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel": {
                        color: "#005fa3",
                        fontSize: {
                            xs: "0.625rem",
                            sm: "0.75rem",
                            md: "0.875rem"
                        }
                    },
                    "& .MuiStepLabel-root .Mui-active": {
                        color: "#ff9800"
                    },
                    "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel": {
                        color: "#ff9800",
                        fontWeight: 600,
                        fontSize: {
                            xs: "0.625rem",
                            sm: "0.75rem",
                            md: "0.875rem"
                        }
                    },
                    "& .MuiStepLabel-label": {
                        fontSize: {
                            xs: "0.625rem",
                            sm: "0.75rem",
                            md: "0.875rem"
                        }
                    },
                    "& .MuiStep-root": {
                        padding: {
                            xs: "4px",
                            sm: "8px"
                        },
                        "& .MuiStepLabel-root": {
                            "& .MuiStepIcon-root": {
                                fontSize: {
                                    xs: "1.2rem",
                                    sm: "1.5rem",
                                    md: "1.8rem"
                                },
                                width: {
                                    xs: 24,
                                    sm: 32,
                                    md: 36
                                },
                                height: {
                                    xs: 24,
                                    sm: 32,
                                    md: 36
                                },
                                "&.Mui-completed": {
                                    color: "#005fa3"
                                },
                                "&.Mui-active": {
                                    color: "#ff9800"
                                }
                            }
                        }
                    }
                },
                children: Array.from({
                    length: totalSteps
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Step$2f$Step$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Step$3e$__["Step"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$StepLabel$2f$StepLabel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__StepLabel$3e$__["StepLabel"], {}, void 0, false, {
                            fileName: "[project]/src/components/QuizFlow.tsx",
                            lineNumber: 342,
                            columnNumber: 13
                        }, this)
                    }, index, false, {
                        fileName: "[project]/src/components/QuizFlow.tsx",
                        lineNumber: 341,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/QuizFlow.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                mode: "wait",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuestionCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    question: currentQuestion.question,
                    options: currentQuestion.options,
                    selectedAnswer: selectedAnswer,
                    onAnswerSelect: handleAnswer,
                    questionNumber: currentStep + 1,
                    totalQuestions: totalSteps
                }, currentStep, false, {
                    fileName: "[project]/src/components/QuizFlow.tsx",
                    lineNumber: 348,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/QuizFlow.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    display: "flex",
                    justifyContent: "space-between",
                    gap: {
                        xs: 1,
                        sm: 2
                    },
                    mt: {
                        xs: 2,
                        sm: 3,
                        md: 4
                    },
                    mb: {
                        xs: 2,
                        sm: 3,
                        md: 4
                    },
                    minHeight: {
                        xs: 48,
                        sm: 56
                    },
                    alignItems: "center",
                    flexWrap: {
                        xs: "wrap",
                        sm: "nowrap"
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        onClick: handleBack,
                        disabled: currentStep === 0,
                        sx: {
                            color: "#005fa3",
                            minWidth: {
                                xs: 100,
                                sm: 120
                            },
                            fontSize: {
                                xs: "0.875rem",
                                sm: "1rem"
                            },
                            py: {
                                xs: 1,
                                sm: 1.5
                            },
                            "&:disabled": {
                                color: "#ccc"
                            }
                        },
                        children: "Önceki"
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuizFlow.tsx",
                        lineNumber: 371,
                        columnNumber: 9
                    }, this),
                    selectedAnswer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                        variant: "contained",
                        onClick: handleNext,
                        sx: {
                            background: "linear-gradient(135deg, #005fa3 0%, #ff9800 100%)",
                            boxShadow: "0 4px 15px rgba(0, 95, 163, 0.3)",
                            fontWeight: 600,
                            minWidth: {
                                xs: 100,
                                sm: 120
                            },
                            fontSize: {
                                xs: "0.875rem",
                                sm: "1rem"
                            },
                            py: {
                                xs: 1,
                                sm: 1.5
                            },
                            "&:hover": {
                                background: "linear-gradient(135deg, #004a82 0%, #ff6f00 100%)",
                                boxShadow: "0 6px 20px rgba(0, 95, 163, 0.4)"
                            }
                        },
                        children: currentStep === totalSteps - 1 ? "Sonuçları Gör 🏠" : "Sonraki"
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuizFlow.tsx",
                        lineNumber: 387,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/QuizFlow.tsx",
                lineNumber: 359,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/QuizFlow.tsx",
        lineNumber: 298,
        columnNumber: 5
    }, this);
}
_s(QuizFlow, "tLnWflgUNdKinThpvZxQOTSubG0=");
_c = QuizFlow;
var _c;
__turbopack_context__.k.register(_c, "QuizFlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [app-client] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Container/Container.js [app-client] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuizFlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/QuizFlow.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Home() {
    _s();
    const [quizStarted, setQuizStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (quizStarted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #e8f4f8 0%, #f0f8ff 50%, #fff5e6 100%)',
                position: 'relative',
                py: {
                    xs: 2,
                    sm: 3,
                    md: 4
                },
                px: {
                    xs: 1,
                    sm: 2
                },
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(0, 95, 163, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(255, 152, 0, 0.08) 0%, transparent 50%),
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 35px,
                rgba(0, 95, 163, 0.03) 35px,
                rgba(0, 95, 163, 0.03) 70px
              )
            `,
                    pointerEvents: 'none'
                }
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                maxWidth: "lg",
                sx: {
                    position: 'relative',
                    zIndex: 1,
                    px: {
                        xs: 0,
                        sm: 2
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuizFlow$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #005fa3 0%, #ff9800 50%, #ff6f00 100%)',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: {
                xs: 1,
                sm: 2
            },
            py: {
                xs: 2,
                sm: 0
            },
            overflow: 'hidden',
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
            radial-gradient(circle at 15% 25%, rgba(255, 255, 255, 0.15) 0%, transparent 40%),
            radial-gradient(circle at 85% 75%, rgba(255, 255, 255, 0.1) 0%, transparent 40%),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
          `,
                opacity: 0.6,
                pointerEvents: 'none'
            },
            '&::after': {
                content: '""',
                position: 'absolute',
                top: '-50%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 20,
                scale: 0.95
            },
            animate: {
                opacity: 1,
                y: 0,
                scale: 1
            },
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            },
            style: {
                position: 'relative',
                zIndex: 1
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    backgroundColor: 'rgba(255, 255, 255, 0.98)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: 4,
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.2)',
                    p: {
                        xs: 4,
                        sm: 6,
                        md: 8
                    },
                    maxWidth: 650,
                    textAlign: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: 'linear-gradient(90deg, #005fa3 0%, #ff9800 50%, #ff6f00 100%)'
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "h3",
                        component: "h1",
                        sx: {
                            mb: 3,
                            fontWeight: 800,
                            background: 'linear-gradient(135deg, #005fa3 0%, #ff9800 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            fontSize: {
                                xs: '2rem',
                                sm: '2.5rem',
                                md: '3rem'
                            }
                        },
                        children: "TOKİ Uygunluk Testi"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "h6",
                        sx: {
                            mb: {
                                xs: 3,
                                sm: 4
                            },
                            color: '#666',
                            lineHeight: 1.8,
                            fontSize: {
                                xs: '1rem',
                                sm: '1.25rem'
                            },
                            px: {
                                xs: 1,
                                sm: 0
                            }
                        },
                        children: "500 Bin Sosyal Konut Projesi için başvuru şartlarını sağlayıp sağlamadığınızı öğrenmek için teste başlayın."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "body2",
                        sx: {
                            mb: {
                                xs: 3,
                                sm: 4
                            },
                            color: '#999',
                            fontStyle: 'italic',
                            fontSize: {
                                xs: '0.8125rem',
                                sm: '0.875rem'
                            },
                            px: {
                                xs: 1,
                                sm: 0
                            }
                        },
                        children: "Bu test sadece bilgilendirme amaçlıdır. Resmî bir başvuru işlemi yapılmaz."
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            variant: "contained",
                            size: "large",
                            onClick: ()=>setQuizStarted(true),
                            sx: {
                                py: {
                                    xs: 1.5,
                                    sm: 2
                                },
                                px: {
                                    xs: 4,
                                    sm: 6
                                },
                                fontSize: {
                                    xs: '1rem',
                                    sm: '1.1rem'
                                },
                                fontWeight: 600,
                                background: 'linear-gradient(135deg, #005fa3 0%, #ff9800 100%)',
                                boxShadow: '0 8px 25px rgba(0, 95, 163, 0.4), 0 0 0 0 rgba(255, 152, 0, 0.4)',
                                borderRadius: 3,
                                textTransform: 'none',
                                position: 'relative',
                                overflow: 'hidden',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: '-100%',
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                                    transition: 'left 0.5s'
                                },
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #004a82 0%, #ff6f00 100%)',
                                    boxShadow: '0 12px 35px rgba(0, 95, 163, 0.5), 0 0 0 4px rgba(255, 152, 0, 0.2)',
                                    '&::before': {
                                        left: '100%'
                                    }
                                }
                            },
                            children: "Teste Başla 🏠"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(Home, "znVyKdUjnm6o80no8hM8JBbM48o=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_de28efea._.js.map