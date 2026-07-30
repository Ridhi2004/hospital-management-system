(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/hospital-management-system/frontend/services/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authAPI",
    ()=>authAPI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/hospital-management-system/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// services/api.js
const API_URL = ("TURBOPACK compile-time value", "http://localhost:8000") || 'http://localhost:8000/api/auth';
// Helper function to handle API responses
const handleResponse = async (response)=>{
    const data = await response.json();
    if (!response.ok) {
        // Handle different error formats
        const errorMessage = data.message || data.detail || 'Something went wrong';
        const errors = data.errors || {};
        throw {
            message: errorMessage,
            errors,
            status: response.status
        };
    }
    return data;
};
const authAPI = {
    // Register new user
    register: async (userData)=>{
        try {
            const response = await fetch(`${API_URL}/register/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: userData.email,
                    full_name: userData.fullName,
                    phone: userData.phone,
                    password: userData.password,
                    confirm_password: userData.confirmPassword,
                    date_of_birth: userData.dateOfBirth,
                    gender: userData.gender,
                    role: userData.role || 'PATIENT'
                })
            });
            return await handleResponse(response);
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    },
    // Login user
    login: async (email, password)=>{
        try {
            const response = await fetch(`${API_URL}/login/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const data = await handleResponse(response);
            // Store tokens and user data
            if (data.success && data.token) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
            }
            return data;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    },
    // Get current user
    getCurrentUser: async ()=>{
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found');
            }
            const response = await fetch(`${API_URL}/user/`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            return await handleResponse(response);
        } catch (error) {
            console.error('Get user error:', error);
            throw error;
        }
    },
    // Forgot password
    forgotPassword: async (email)=>{
        try {
            const response = await fetch(`${API_URL}/forgot-password/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email
                })
            });
            return await handleResponse(response);
        } catch (error) {
            console.error('Forgot password error:', error);
            throw error;
        }
    },
    // Reset password
    resetPassword: async (token, password, confirmPassword)=>{
        try {
            const response = await fetch(`${API_URL}/reset-password/${token}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    password,
                    confirm_password: confirmPassword
                })
            });
            return await handleResponse(response);
        } catch (error) {
            console.error('Reset password error:', error);
            throw error;
        }
    },
    // Logout
    logout: async ()=>{
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_URL}/logout/`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            // Always clear local storage
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return await handleResponse(response);
        } catch (error) {
            // Even if API fails, clear local storage
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            throw error;
        }
    },
    // Check if user is authenticated
    isAuthenticated: ()=>{
        const token = localStorage.getItem('token');
        return !!token;
    },
    // Get user from local storage
    getUser: ()=>{
        const userStr = localStorage.getItem('user');
        if (userStr) {
            try {
                return JSON.parse(userStr);
            } catch  {
                return null;
            }
        }
        return null;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hospital-management-system/frontend/app/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hospital-management-system/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/hospital-management-system/frontend/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/hospital-management-system/frontend/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/hospital-management-system/frontend/node_modules/lucide-react/dist/esm/icons/user.mjs [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/hospital-management-system/frontend/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/hospital-management-system/frontend/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/hospital-management-system/frontend/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/hospital-management-system/frontend/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/hospital-management-system/frontend/node_modules/lucide-react/dist/esm/icons/eye-off.mjs [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/hospital-management-system/frontend/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/hospital-management-system/frontend/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/hospital-management-system/frontend/node_modules/lucide-react/dist/esm/icons/stethoscope.mjs [app-client] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/hospital-management-system/frontend/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/hospital-management-system/frontend/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hospital-management-system/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hospital-management-system/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hospital-management-system/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hospital-management-system/frontend/services/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// 'use client';
// import {
//   Mail,
//   Lock,
//   User,
//   Phone,
//   Calendar,
//   Users as GenderIcon,
//   Eye,
//   EyeOff,
//   ArrowLeft,
//   ShieldCheck,
//   Stethoscope,
//   Users,
//   CheckCircle2,
//   X,
// } from "lucide-react";
// import { useState } from "react";
// import Link from "next/link";
// type View = "login" | "register" | "forgot";
// export default function AuthPage() {
//   const [view, setView] = useState<View>("login");
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [resetSent, setResetSent] = useState(false);
//   const goTo = (v: View) => {
//     setResetSent(false);
//     setView(v);
//   };
//   const handleLoginSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // TODO: wire up login
//   };
//   const handleRegisterSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // TODO: wire up registration
//   };
//   const handleForgotSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setResetSent(true);
//     // TODO: wire up password reset email
//   };
//   return (
//     <section className="min-h-screen bg-slate-50 flex relative">
//       {/* Close Button - Top Right */}
//       <Link
//         href="/"
//         className="absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 text-slate-700 hover:text-amber-600 border border-slate-200/50"
//         aria-label="Close and go to homepage"
//       >
//         <X size={20} />
//       </Link>
//       {/* Left: brand / image panel */}
//       <div className="hidden lg:flex lg:w-[42%] relative overflow-hidden bg-slate-800">
//         <img
//           src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1000&h=1400&fit=crop"
//           alt="Meridian Hospital care team"
//           className="absolute inset-0 h-full w-full object-cover opacity-50"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/80 to-slate-900/50" />
//         <div className="relative flex flex-col justify-between p-10 xl:p-14 w-full">
//           <Link href="/" className="flex items-center gap-2.5">
//             <svg viewBox="0 0 40 40" className="h-9 w-9 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <circle cx="20" cy="20" r="19" stroke="#f8fafc" strokeWidth="1.4" opacity="0.25" />
//               <path
//                 d="M6 21h5l2.5-7 4 14 3-9 2 4.5H34"
//                 stroke="#d97706"
//                 strokeWidth="2.1"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 fill="none"
//               />
//             </svg>
//             <span className="font-serif text-lg font-semibold leading-tight text-white">
//               Meridian
//               <span className="mt-0.5 block font-sans text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-amber-400">
//                 Hospital &amp; Health System
//               </span>
//             </span>
//           </Link>
//           <div>
//             <h2 className="font-serif text-3xl xl:text-[2.6rem] font-semibold leading-tight text-white max-w-md">
//               Your health records, appointments, and care team — all in one place.
//             </h2>
//             <div className="mt-9 space-y-4">
//               <div className="flex items-center gap-3">
//                 <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400 border border-white/10">
//                   <ShieldCheck size={18} />
//                 </span>
//                 <span className="text-sm text-slate-300">Secure, encrypted patient records</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400 border border-white/10">
//                   <Stethoscope size={18} />
//                 </span>
//                 <span className="text-sm text-slate-300">Book &amp; manage appointments in seconds</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400 border border-white/10">
//                   <Users size={18} />
//                 </span>
//                 <span className="text-sm text-slate-300">Direct messaging with your care team</span>
//               </div>
//             </div>
//           </div>
//           <p className="text-xs text-slate-400">
//             &copy; {new Date().getFullYear()} Meridian Hospital &amp; Health System. All rights reserved.
//           </p>
//         </div>
//       </div>
//       {/* Right: form panel */}
//       <div className="relative flex-1 flex items-center justify-center px-4 sm:px-8 py-12">
//         <div className={`w-full ${view === "register" ? "max-w-xl" : "max-w-md"}`}>
//           {/* Mobile brand */}
//           <Link href="/" className="lg:hidden flex items-center justify-center gap-2.5 mb-8">
//             <svg viewBox="0 0 40 40" className="h-9 w-9 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <circle cx="20" cy="20" r="19" stroke="#1e1b4b" strokeWidth="1.4" opacity="0.25" />
//               <path
//                 d="M6 21h5l2.5-7 4 14 3-9 2 4.5H34"
//                 stroke="#d97706"
//                 strokeWidth="2.1"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 fill="none"
//               />
//             </svg>
//             <span className="font-serif text-lg font-semibold leading-tight text-slate-900">
//               Meridian
//               <span className="mt-0.5 block font-sans text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-amber-600">
//                 Hospital &amp; Health System
//               </span>
//             </span>
//           </Link>
//           {view === "login" && (
//             <div>
//               <div className="text-center lg:text-left">
//                 <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-600">Welcome Back</span>
//                 <div className="mt-3 h-[3px] w-14 bg-gradient-to-r from-slate-900 via-slate-800 to-amber-500 rounded-full mx-auto lg:mx-0" />
//                 <h1 className="mt-5 font-serif text-3xl font-semibold text-slate-900">Sign in to your account</h1>
//                 <p className="mt-2 text-sm text-slate-500">Access your appointments, records, and care team.</p>
//               </div>
//               <form onSubmit={handleLoginSubmit} className="mt-8 space-y-4">
//                 <div>
//                   <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
//                     Email
//                   </label>
//                   <div className="relative">
//                     <Mail size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
//                     <input
//                       required
//                       type="email"
//                       placeholder="you@example.com"
//                       className="w-full rounded-lg border border-slate-300 pl-10 pr-3.5 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
//                     Password
//                   </label>
//                   <div className="relative">
//                     <Lock size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
//                     <input
//                       required
//                       type={showPassword ? "text" : "password"}
//                       placeholder="Enter your password"
//                       className="w-full rounded-lg border border-slate-300 pl-10 pr-10 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
//                       aria-label={showPassword ? "Hide password" : "Show password"}
//                     >
//                       {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
//                     </button>
//                   </div>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <label className="flex items-center gap-2.5 text-sm text-slate-600">
//                     <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-amber-500/30" />
//                     Remember Me
//                   </label>
//                   <button type="button" onClick={() => goTo("forgot")} className="text-xs font-semibold text-amber-600 hover:text-amber-700">
//                     Forgot Password?
//                   </button>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-sm transition-all duration-300 hover:from-amber-400 hover:to-amber-500 active:scale-[0.98]"
//                 >
//                   Login
//                 </button>
//               </form>
//               <p className="mt-8 text-center text-sm text-slate-500">
//                 Don't have an account?{" "}
//                 <button onClick={() => goTo("register")} className="font-semibold text-slate-900 hover:text-amber-600">
//                   Register
//                 </button>
//               </p>
//             </div>
//           )}
//           {view === "register" && (
//             <div>
//               <div className="text-center lg:text-left">
//                 <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-600">Join Meridian</span>
//                 <div className="mt-3 h-[3px] w-14 bg-gradient-to-r from-slate-900 via-slate-800 to-amber-500 rounded-full mx-auto lg:mx-0" />
//                 <h1 className="mt-5 font-serif text-3xl font-semibold text-slate-900">Create your patient account</h1>
//                 <p className="mt-2 text-sm text-slate-500">
//                   A few extra details help us match you with the right care before your first visit.
//                 </p>
//               </div>
//               <form onSubmit={handleRegisterSubmit} className="mt-8 space-y-4">
//                 <div>
//                   <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
//                     Full Name
//                   </label>
//                   <div className="relative">
//                     <User size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
//                     <input
//                       required
//                       type="text"
//                       placeholder="Full legal name"
//                       className="w-full rounded-lg border border-slate-300 pl-10 pr-3.5 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
//                     />
//                   </div>
//                 </div>
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
//                       Email
//                     </label>
//                     <div className="relative">
//                       <Mail size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
//                       <input
//                         required
//                         type="email"
//                         placeholder="you@example.com"
//                         className="w-full rounded-lg border border-slate-300 pl-10 pr-3.5 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
//                       Phone Number
//                     </label>
//                     <div className="relative">
//                       <Phone size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
//                       <input
//                         required
//                         type="tel"
//                         placeholder="+977 9800000000"
//                         className="w-full rounded-lg border border-slate-300 pl-10 pr-3.5 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
//                       Date of Birth
//                     </label>
//                     <div className="relative">
//                       <Calendar size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
//                       <input
//                         required
//                         type="date"
//                         className="w-full rounded-lg border border-slate-300 pl-10 pr-3.5 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
//                       Gender
//                     </label>
//                     <div className="relative">
//                       <GenderIcon size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
//                       <select
//                         required
//                         defaultValue=""
//                         className="w-full appearance-none rounded-lg border border-slate-300 pl-10 pr-3.5 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
//                       >
//                         <option value="" disabled>Select gender</option>
//                         <option value="female">Female</option>
//                         <option value="male">Male</option>
//                         <option value="other">Other</option>
//                         <option value="prefer-not-to-say">Prefer not to say</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="grid sm:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
//                       Password
//                     </label>
//                     <div className="relative">
//                       <Lock size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
//                       <input
//                         required
//                         type={showPassword ? "text" : "password"}
//                         placeholder="Create password"
//                         className="w-full rounded-lg border border-slate-300 pl-10 pr-9 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
//                       />
//                       <button
//                         type="button"
//                         onClick={() => setShowPassword(!showPassword)}
//                         className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
//                         aria-label={showPassword ? "Hide password" : "Show password"}
//                       >
//                         {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                       </button>
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
//                       Confirm Password
//                     </label>
//                     <div className="relative">
//                       <Lock size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
//                       <input
//                         required
//                         type={showConfirmPassword ? "text" : "password"}
//                         placeholder="Repeat password"
//                         className="w-full rounded-lg border border-slate-300 pl-10 pr-9 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
//                       />
//                       <button
//                         type="button"
//                         onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                         className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
//                         aria-label={showConfirmPassword ? "Hide password" : "Show password"}
//                       >
//                         {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-sm transition-all duration-300 hover:from-amber-400 hover:to-amber-500 active:scale-[0.98]"
//                 >
//                   Register
//                 </button>
//               </form>
//               <p className="mt-8 text-center text-sm text-slate-500">
//                 Already have an account?{" "}
//                 <button onClick={() => goTo("login")} className="font-semibold text-slate-900 hover:text-amber-600">
//                   Login
//                 </button>
//               </p>
//             </div>
//           )}
//           {view === "forgot" && (
//             <div>
//               <button
//                 onClick={() => goTo("login")}
//                 className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 mb-6"
//               >
//                 <ArrowLeft size={16} />
//                 Back to sign in
//               </button>
//               <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-600">Account Recovery</span>
//               <div className="mt-3 h-[3px] w-14 bg-gradient-to-r from-slate-900 via-slate-800 to-amber-500 rounded-full" />
//               <h1 className="mt-5 font-serif text-3xl font-semibold text-slate-900">Reset your password</h1>
//               <p className="mt-2 text-sm text-slate-500">
//                 Enter the email linked to your account and we'll send a reset link.
//               </p>
//               {resetSent ? (
//                 <div className="mt-8 rounded-xl bg-emerald-50 border border-emerald-200 px-5 py-6 text-center">
//                   <CheckCircle2 size={32} className="mx-auto text-emerald-600" />
//                   <p className="mt-3 font-semibold text-emerald-800">Reset link sent!</p>
//                   <p className="mt-1 text-sm text-emerald-700">
//                     Check your inbox for instructions to reset your password.
//                   </p>
//                   <button
//                     onClick={() => goTo("login")}
//                     className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
//                   >
//                     Return to Sign In
//                   </button>
//                 </div>
//               ) : (
//                 <form onSubmit={handleForgotSubmit} className="mt-8 space-y-4">
//                   <div>
//                     <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
//                       Email
//                     </label>
//                     <div className="relative">
//                       <Mail size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
//                       <input
//                         required
//                         type="email"
//                         placeholder="you@example.com"
//                         className="w-full rounded-lg border border-slate-300 pl-10 pr-3.5 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
//                       />
//                     </div>
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-sm transition-all duration-300 hover:from-amber-400 hover:to-amber-500 active:scale-[0.98]"
//                   >
//                     Send Reset Link
//                   </button>
//                 </form>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';
;
;
;
;
;
function AuthPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("login");
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfirmPassword, setShowConfirmPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resetSent, setResetSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Form states
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        email: '',
        password: '',
        fullName: '',
        phone: '',
        dateOfBirth: '',
        gender: '',
        confirmPassword: ''
    });
    // Loading and error states
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Check if user is already logged in
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthPage.useEffect": ()=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authAPI"].isAuthenticated()) {
                router.push('/dashboard');
            }
        }
    }["AuthPage.useEffect"], [
        router
    ]);
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        // Clear error when user types
        setError('');
    };
    const goTo = (v)=>{
        setResetSent(false);
        setError('');
        setSuccessMessage('');
        setView(v);
    };
    // Handle Login
    const handleLoginSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authAPI"].login(formData.email, formData.password);
            if (response.success) {
                // Show success message
                setSuccessMessage('Login successful! Redirecting...');
                // Redirect to dashboard after short delay
                setTimeout(()=>{
                    router.push('/dashboard');
                }, 1500);
            }
        } catch (error) {
            setError(error.message || 'Login failed. Please try again.');
        } finally{
            setLoading(false);
        }
    };
    // Handle Register
    const handleRegisterSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError('');
        // Validate password match
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }
        // Validate phone number (basic)
        if (formData.phone && formData.phone.length < 10) {
            setError('Please enter a valid phone number');
            setLoading(false);
            return;
        }
        // Validate date of birth
        if (!formData.dateOfBirth) {
            setError('Please select your date of birth');
            setLoading(false);
            return;
        }
        // Validate gender
        if (!formData.gender) {
            setError('Please select your gender');
            setLoading(false);
            return;
        }
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authAPI"].register({
                email: formData.email,
                fullName: formData.fullName,
                phone: formData.phone,
                password: formData.password,
                confirmPassword: formData.confirmPassword,
                dateOfBirth: formData.dateOfBirth,
                gender: formData.gender,
                role: 'PATIENT'
            });
            if (response.success) {
                setSuccessMessage('Registration successful! You can now login.');
                setError('');
                // Clear form
                setFormData({
                    email: '',
                    password: '',
                    fullName: '',
                    phone: '',
                    dateOfBirth: '',
                    gender: '',
                    confirmPassword: ''
                });
                // Redirect to login after 2 seconds
                setTimeout(()=>{
                    goTo('login');
                    setSuccessMessage('');
                }, 2000);
            }
        } catch (error) {
            // Handle validation errors from backend
            if (error.errors) {
                const errorMessages = Object.values(error.errors).flat().join('\n');
                setError(errorMessages || error.message);
            } else {
                setError(error.message || 'Registration failed. Please try again.');
            }
        } finally{
            setLoading(false);
        }
    };
    // Handle Forgot Password
    const handleForgotSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$services$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["authAPI"].forgotPassword(formData.email);
            if (response.success) {
                setResetSent(true);
                setSuccessMessage('Password reset link sent to your email!');
            }
        } catch (error) {
            setError(error.message || 'Failed to send reset link. Please try again.');
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen bg-slate-50 flex relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 text-slate-700 hover:text-amber-600 border border-slate-200/50",
                "aria-label": "Close and go to homepage",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                    lineNumber: 646,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                lineNumber: 641,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:flex lg:w-[42%] relative overflow-hidden bg-slate-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1000&h=1400&fit=crop",
                        alt: "Meridian Hospital care team",
                        className: "absolute inset-0 h-full w-full object-cover opacity-50"
                    }, void 0, false, {
                        fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                        lineNumber: 651,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/80 to-slate-900/50"
                    }, void 0, false, {
                        fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                        lineNumber: 656,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex flex-col justify-between p-10 xl:p-14 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 40 40",
                                        className: "h-9 w-9 flex-shrink-0",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "20",
                                                cy: "20",
                                                r: "19",
                                                stroke: "#f8fafc",
                                                strokeWidth: "1.4",
                                                opacity: "0.25"
                                            }, void 0, false, {
                                                fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                lineNumber: 661,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6 21h5l2.5-7 4 14 3-9 2 4.5H34",
                                                stroke: "#d97706",
                                                strokeWidth: "2.1",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                fill: "none"
                                            }, void 0, false, {
                                                fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                lineNumber: 662,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                        lineNumber: 660,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-serif text-lg font-semibold leading-tight text-white",
                                        children: [
                                            "Meridian",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-0.5 block font-sans text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-amber-400",
                                                children: "Hospital & Health System"
                                            }, void 0, false, {
                                                fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                lineNumber: 673,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                        lineNumber: 671,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                lineNumber: 659,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-serif text-3xl xl:text-[2.6rem] font-semibold leading-tight text-white max-w-md",
                                        children: "Your health records, appointments, and care team — all in one place."
                                    }, void 0, false, {
                                        fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                        lineNumber: 680,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-9 space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400 border border-white/10",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 687,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                        lineNumber: 686,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-slate-300",
                                                        children: "Secure, encrypted patient records"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                        lineNumber: 689,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                lineNumber: 685,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400 border border-white/10",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 693,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                        lineNumber: 692,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-slate-300",
                                                        children: "Book & manage appointments in seconds"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                        lineNumber: 695,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                lineNumber: 691,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400 border border-white/10",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 699,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                        lineNumber: 698,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-slate-300",
                                                        children: "Direct messaging with your care team"
                                                    }, void 0, false, {
                                                        fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                        lineNumber: 701,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                lineNumber: 697,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                        lineNumber: 684,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                lineNumber: 679,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-400",
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    "Meridian Hospital & Health System. All rights reserved."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                lineNumber: 706,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                        lineNumber: 658,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                lineNumber: 650,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex-1 flex items-center justify-center px-4 sm:px-8 py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `w-full ${view === "register" ? "max-w-xl" : "max-w-md"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "lg:hidden flex items-center justify-center gap-2.5 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    viewBox: "0 0 40 40",
                                    className: "h-9 w-9 flex-shrink-0",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "20",
                                            cy: "20",
                                            r: "19",
                                            stroke: "#1e1b4b",
                                            strokeWidth: "1.4",
                                            opacity: "0.25"
                                        }, void 0, false, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 718,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M6 21h5l2.5-7 4 14 3-9 2 4.5H34",
                                            stroke: "#d97706",
                                            strokeWidth: "2.1",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            fill: "none"
                                        }, void 0, false, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 719,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                    lineNumber: 717,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-serif text-lg font-semibold leading-tight text-slate-900",
                                    children: [
                                        "Meridian",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-0.5 block font-sans text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-amber-600",
                                            children: "Hospital & Health System"
                                        }, void 0, false, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 730,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                    lineNumber: 728,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                            lineNumber: 716,
                            columnNumber: 11
                        }, this),
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm",
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                            lineNumber: 738,
                            columnNumber: 13
                        }, this),
                        successMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-600 text-sm",
                            children: successMessage
                        }, void 0, false, {
                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                            lineNumber: 744,
                            columnNumber: 13
                        }, this),
                        view === "login" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center lg:text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold uppercase tracking-[0.14em] text-amber-600",
                                            children: "Welcome Back"
                                        }, void 0, false, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 752,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 h-[3px] w-14 bg-gradient-to-r from-slate-900 via-slate-800 to-amber-500 rounded-full mx-auto lg:mx-0"
                                        }, void 0, false, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 753,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "mt-5 font-serif text-3xl font-semibold text-slate-900",
                                            children: "Sign in to your account"
                                        }, void 0, false, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 754,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-slate-500",
                                            children: "Access your appointments, records, and care team."
                                        }, void 0, false, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 755,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                    lineNumber: 751,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleLoginSubmit,
                                    className: "mt-8 space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                    lineNumber: 760,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            size: 17,
                                                            className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 764,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            required: true,
                                                            type: "email",
                                                            name: "email",
                                                            value: formData.email,
                                                            onChange: handleInputChange,
                                                            placeholder: "you@example.com",
                                                            className: "w-full rounded-lg border border-slate-300 pl-10 pr-3.5 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 765,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                    lineNumber: 763,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 759,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5",
                                                    children: "Password"
                                                }, void 0, false, {
                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                    lineNumber: 778,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                            size: 17,
                                                            className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 782,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            required: true,
                                                            type: showPassword ? "text" : "password",
                                                            name: "password",
                                                            value: formData.password,
                                                            onChange: handleInputChange,
                                                            placeholder: "Enter your password",
                                                            className: "w-full rounded-lg border border-slate-300 pl-10 pr-10 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 783,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setShowPassword(!showPassword),
                                                            className: "absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600",
                                                            "aria-label": showPassword ? "Hide password" : "Show password",
                                                            children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                                size: 17
                                                            }, void 0, false, {
                                                                fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                lineNumber: 798,
                                                                columnNumber: 39
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                size: 17
                                                            }, void 0, false, {
                                                                fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                lineNumber: 798,
                                                                columnNumber: 62
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 792,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                    lineNumber: 781,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 777,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-2.5 text-sm text-slate-600",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            className: "h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-amber-500/30"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 805,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Remember Me"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                    lineNumber: 804,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>goTo("forgot"),
                                                    className: "text-xs font-semibold text-amber-600 hover:text-amber-700",
                                                    children: "Forgot Password?"
                                                }, void 0, false, {
                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                    lineNumber: 808,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 803,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: loading,
                                            className: "w-full rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-sm transition-all duration-300 hover:from-amber-400 hover:to-amber-500 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed",
                                            children: loading ? 'Logging in...' : 'Login'
                                        }, void 0, false, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 813,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                    lineNumber: 758,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-8 text-center text-sm text-slate-500",
                                    children: [
                                        "Don't have an account?",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>goTo("register"),
                                            className: "font-semibold text-slate-900 hover:text-amber-600",
                                            children: "Register"
                                        }, void 0, false, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 824,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                    lineNumber: 822,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                            lineNumber: 750,
                            columnNumber: 13
                        }, this),
                        view === "register" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center lg:text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold uppercase tracking-[0.14em] text-amber-600",
                                            children: "Join Meridian"
                                        }, void 0, false, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 834,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 h-[3px] w-14 bg-gradient-to-r from-slate-900 via-slate-800 to-amber-500 rounded-full mx-auto lg:mx-0"
                                        }, void 0, false, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 835,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "mt-5 font-serif text-3xl font-semibold text-slate-900",
                                            children: "Create your patient account"
                                        }, void 0, false, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 836,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-slate-500",
                                            children: "A few extra details help us match you with the right care before your first visit."
                                        }, void 0, false, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 837,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                    lineNumber: 833,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleRegisterSubmit,
                                    className: "mt-8 space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5",
                                                    children: "Full Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                    lineNumber: 844,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                            size: 17,
                                                            className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 848,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            required: true,
                                                            type: "text",
                                                            name: "fullName",
                                                            value: formData.fullName,
                                                            onChange: handleInputChange,
                                                            placeholder: "Full legal name",
                                                            className: "w-full rounded-lg border border-slate-300 pl-10 pr-3.5 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 849,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                    lineNumber: 847,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 843,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid sm:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5",
                                                            children: "Email"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 863,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                    size: 17,
                                                                    className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                    lineNumber: 867,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    required: true,
                                                                    type: "email",
                                                                    name: "email",
                                                                    value: formData.email,
                                                                    onChange: handleInputChange,
                                                                    placeholder: "you@example.com",
                                                                    className: "w-full rounded-lg border border-slate-300 pl-10 pr-3.5 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                    lineNumber: 868,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 866,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                    lineNumber: 862,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5",
                                                            children: "Phone Number"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 880,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                                    size: 17,
                                                                    className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                    lineNumber: 884,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    required: true,
                                                                    type: "tel",
                                                                    name: "phone",
                                                                    value: formData.phone,
                                                                    onChange: handleInputChange,
                                                                    placeholder: "+977 9800000000",
                                                                    className: "w-full rounded-lg border border-slate-300 pl-10 pr-3.5 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                    lineNumber: 885,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 883,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                    lineNumber: 879,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 861,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid sm:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5",
                                                            children: "Date of Birth"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 900,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                    size: 17,
                                                                    className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                    lineNumber: 904,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    required: true,
                                                                    type: "date",
                                                                    name: "dateOfBirth",
                                                                    value: formData.dateOfBirth,
                                                                    onChange: handleInputChange,
                                                                    className: "w-full rounded-lg border border-slate-300 pl-10 pr-3.5 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                    lineNumber: 905,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 903,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                    lineNumber: 899,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5",
                                                            children: "Gender"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 916,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                    size: 17,
                                                                    className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                    lineNumber: 920,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    required: true,
                                                                    name: "gender",
                                                                    value: formData.gender,
                                                                    onChange: handleInputChange,
                                                                    className: "w-full appearance-none rounded-lg border border-slate-300 pl-10 pr-3.5 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            disabled: true,
                                                                            children: "Select gender"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                            lineNumber: 928,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "female",
                                                                            children: "Female"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                            lineNumber: 929,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "male",
                                                                            children: "Male"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                            lineNumber: 930,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "other",
                                                                            children: "Other"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                            lineNumber: 931,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "prefer-not-to-say",
                                                                            children: "Prefer not to say"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                            lineNumber: 932,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                    lineNumber: 921,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 919,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                    lineNumber: 915,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 898,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid sm:grid-cols-2 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5",
                                                            children: "Password"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 940,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                                    size: 17,
                                                                    className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                    lineNumber: 944,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    required: true,
                                                                    type: showPassword ? "text" : "password",
                                                                    name: "password",
                                                                    value: formData.password,
                                                                    onChange: handleInputChange,
                                                                    placeholder: "Create password",
                                                                    className: "w-full rounded-lg border border-slate-300 pl-10 pr-9 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                    lineNumber: 945,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setShowPassword(!showPassword),
                                                                    className: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600",
                                                                    "aria-label": showPassword ? "Hide password" : "Show password",
                                                                    children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                        lineNumber: 960,
                                                                        columnNumber: 41
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                        lineNumber: 960,
                                                                        columnNumber: 64
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                    lineNumber: 954,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 943,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                    lineNumber: 939,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5",
                                                            children: "Confirm Password"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 965,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                                    size: 17,
                                                                    className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                    lineNumber: 969,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    required: true,
                                                                    type: showConfirmPassword ? "text" : "password",
                                                                    name: "confirmPassword",
                                                                    value: formData.confirmPassword,
                                                                    onChange: handleInputChange,
                                                                    placeholder: "Repeat password",
                                                                    className: "w-full rounded-lg border border-slate-300 pl-10 pr-9 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                    lineNumber: 970,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setShowConfirmPassword(!showConfirmPassword),
                                                                    className: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600",
                                                                    "aria-label": showConfirmPassword ? "Hide password" : "Show password",
                                                                    children: showConfirmPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                        lineNumber: 985,
                                                                        columnNumber: 48
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                        lineNumber: 985,
                                                                        columnNumber: 71
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                                    lineNumber: 979,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 968,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                    lineNumber: 964,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 938,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: loading,
                                            className: "w-full rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-sm transition-all duration-300 hover:from-amber-400 hover:to-amber-500 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed",
                                            children: loading ? 'Creating account...' : 'Register'
                                        }, void 0, false, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 991,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                    lineNumber: 842,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-8 text-center text-sm text-slate-500",
                                    children: [
                                        "Already have an account?",
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>goTo("login"),
                                            className: "font-semibold text-slate-900 hover:text-amber-600",
                                            children: "Login"
                                        }, void 0, false, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 1002,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                    lineNumber: 1000,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                            lineNumber: 832,
                            columnNumber: 13
                        }, this),
                        view === "forgot" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>goTo("login"),
                                    className: "flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 1015,
                                            columnNumber: 17
                                        }, this),
                                        "Back to sign in"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                    lineNumber: 1011,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-semibold uppercase tracking-[0.14em] text-amber-600",
                                    children: "Account Recovery"
                                }, void 0, false, {
                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                    lineNumber: 1019,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 h-[3px] w-14 bg-gradient-to-r from-slate-900 via-slate-800 to-amber-500 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                    lineNumber: 1020,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "mt-5 font-serif text-3xl font-semibold text-slate-900",
                                    children: "Reset your password"
                                }, void 0, false, {
                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                    lineNumber: 1021,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm text-slate-500",
                                    children: "Enter the email linked to your account and we'll send a reset link."
                                }, void 0, false, {
                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                    lineNumber: 1022,
                                    columnNumber: 15
                                }, this),
                                resetSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 rounded-xl bg-emerald-50 border border-emerald-200 px-5 py-6 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            size: 32,
                                            className: "mx-auto text-emerald-600"
                                        }, void 0, false, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 1028,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-3 font-semibold text-emerald-800",
                                            children: "Reset link sent!"
                                        }, void 0, false, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 1029,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-emerald-700",
                                            children: "Check your inbox for instructions to reset your password."
                                        }, void 0, false, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 1030,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>goTo("login"),
                                            className: "mt-5 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800",
                                            children: "Return to Sign In"
                                        }, void 0, false, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 1033,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                    lineNumber: 1027,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: handleForgotSubmit,
                                    className: "mt-8 space-y-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                    lineNumber: 1043,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            size: 17,
                                                            className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 1047,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            required: true,
                                                            type: "email",
                                                            name: "email",
                                                            value: formData.email,
                                                            onChange: handleInputChange,
                                                            placeholder: "you@example.com",
                                                            className: "w-full rounded-lg border border-slate-300 pl-10 pr-3.5 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                                                        }, void 0, false, {
                                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                            lineNumber: 1048,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                                    lineNumber: 1046,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 1042,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: loading,
                                            className: "w-full rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-sm transition-all duration-300 hover:from-amber-400 hover:to-amber-500 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed",
                                            children: loading ? 'Sending...' : 'Send Reset Link'
                                        }, void 0, false, {
                                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                            lineNumber: 1060,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                                    lineNumber: 1041,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                            lineNumber: 1010,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                    lineNumber: 714,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
                lineNumber: 713,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/hospital-management-system/frontend/app/login/page.tsx",
        lineNumber: 639,
        columnNumber: 5
    }, this);
}
_s(AuthPage, "l77HNLg0l6q89Is8m982OjckaVA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hospital$2d$management$2d$system$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthPage;
var _c;
__turbopack_context__.k.register(_c, "AuthPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=hospital-management-system_frontend_1c-8psa._.js.map