'use client';

import {
  Mail,
  Lock,
  User,
  Phone,
  Calendar,
  Users as GenderIcon,
  Eye,
  EyeOff,
  ArrowLeft,
  ShieldCheck,
  Stethoscope,
  Users,
  CheckCircle2,
  X,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

type View = "login" | "register" | "forgot";

export default function AuthPage() {
  const [view, setView] = useState<View>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  const goTo = (v: View) => {
    setResetSent(false);
    setView(v);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up login
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up registration
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setResetSent(true);
    // TODO: wire up password reset email
  };

  return (
    <section className="min-h-screen bg-slate-50 flex relative">
      {/* Close Button - Top Right */}
      <Link
        href="/"
        className="absolute top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 text-slate-700 hover:text-amber-600 border border-slate-200/50"
        aria-label="Close and go to homepage"
      >
        <X size={20} />
      </Link>

      {/* Left: brand / image panel */}
      <div className="hidden lg:flex lg:w-[42%] relative overflow-hidden bg-slate-800">
        <img
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1000&h=1400&fit=crop"
          alt="Meridian Hospital care team"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/80 to-slate-900/50" />

        <div className="relative flex flex-col justify-between p-10 xl:p-14 w-full">
          <Link href="/" className="flex items-center gap-2.5">
            <svg viewBox="0 0 40 40" className="h-9 w-9 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="19" stroke="#f8fafc" strokeWidth="1.4" opacity="0.25" />
              <path
                d="M6 21h5l2.5-7 4 14 3-9 2 4.5H34"
                stroke="#d97706"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <span className="font-serif text-lg font-semibold leading-tight text-white">
              Meridian
              <span className="mt-0.5 block font-sans text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-amber-400">
                Hospital &amp; Health System
              </span>
            </span>
          </Link>

          <div>
            <h2 className="font-serif text-3xl xl:text-[2.6rem] font-semibold leading-tight text-white max-w-md">
              Your health records, appointments, and care team — all in one place.
            </h2>

            <div className="mt-9 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400 border border-white/10">
                  <ShieldCheck size={18} />
                </span>
                <span className="text-sm text-slate-300">Secure, encrypted patient records</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400 border border-white/10">
                  <Stethoscope size={18} />
                </span>
                <span className="text-sm text-slate-300">Book &amp; manage appointments in seconds</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400 border border-white/10">
                  <Users size={18} />
                </span>
                <span className="text-sm text-slate-300">Direct messaging with your care team</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Meridian Hospital &amp; Health System. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right: form panel */}
      <div className="relative flex-1 flex items-center justify-center px-4 sm:px-8 py-12">
        <div className={`w-full ${view === "register" ? "max-w-xl" : "max-w-md"}`}>
          {/* Mobile brand */}
          <Link href="/" className="lg:hidden flex items-center justify-center gap-2.5 mb-8">
            <svg viewBox="0 0 40 40" className="h-9 w-9 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="19" stroke="#1e1b4b" strokeWidth="1.4" opacity="0.25" />
              <path
                d="M6 21h5l2.5-7 4 14 3-9 2 4.5H34"
                stroke="#d97706"
                strokeWidth="2.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            <span className="font-serif text-lg font-semibold leading-tight text-slate-900">
              Meridian
              <span className="mt-0.5 block font-sans text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-amber-600">
                Hospital &amp; Health System
              </span>
            </span>
          </Link>

          {view === "login" && (
            <div>
              <div className="text-center lg:text-left">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-600">Welcome Back</span>
                <div className="mt-3 h-[3px] w-14 bg-gradient-to-r from-slate-900 via-slate-800 to-amber-500 rounded-full mx-auto lg:mx-0" />
                <h1 className="mt-5 font-serif text-3xl font-semibold text-slate-900">Sign in to your account</h1>
                <p className="mt-2 text-sm text-slate-500">Access your appointments, records, and care team.</p>
              </div>

              <form onSubmit={handleLoginSubmit} className="mt-8 space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                    Email
                  </label>
                  <div className="relative">
                    <Mail size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      required
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-slate-300 pl-10 pr-3.5 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <Lock size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      required
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="w-full rounded-lg border border-slate-300 pl-10 pr-10 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2.5 text-sm text-slate-600">
                    <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-amber-500/30" />
                    Remember Me
                  </label>
                  <button type="button" onClick={() => goTo("forgot")} className="text-xs font-semibold text-amber-600 hover:text-amber-700">
                    Forgot Password?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-sm transition-all duration-300 hover:from-amber-400 hover:to-amber-500 active:scale-[0.98]"
                >
                  Login
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-slate-500">
                Don't have an account?{" "}
                <button onClick={() => goTo("register")} className="font-semibold text-slate-900 hover:text-amber-600">
                  Register
                </button>
              </p>
            </div>
          )}

          {view === "register" && (
            <div>
              <div className="text-center lg:text-left">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-600">Join Meridian</span>
                <div className="mt-3 h-[3px] w-14 bg-gradient-to-r from-slate-900 via-slate-800 to-amber-500 rounded-full mx-auto lg:mx-0" />
                <h1 className="mt-5 font-serif text-3xl font-semibold text-slate-900">Create your patient account</h1>
                <p className="mt-2 text-sm text-slate-500">
                  A few extra details help us match you with the right care before your first visit.
                </p>
              </div>

              <form onSubmit={handleRegisterSubmit} className="mt-8 space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      required
                      type="text"
                      placeholder="Full legal name"
                      className="w-full rounded-lg border border-slate-300 pl-10 pr-3.5 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                      Email
                    </label>
                    <div className="relative">
                      <Mail size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-slate-300 pl-10 pr-3.5 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        type="tel"
                        placeholder="+977 9800000000"
                        className="w-full rounded-lg border border-slate-300 pl-10 pr-3.5 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                      Date of Birth
                    </label>
                    <div className="relative">
                      <Calendar size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        type="date"
                        className="w-full rounded-lg border border-slate-300 pl-10 pr-3.5 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                      Gender
                    </label>
                    <div className="relative">
                      <GenderIcon size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      <select
                        required
                        defaultValue=""
                        className="w-full appearance-none rounded-lg border border-slate-300 pl-10 pr-3.5 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                      >
                        <option value="" disabled>Select gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                      Password
                    </label>
                    <div className="relative">
                      <Lock size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        type={showPassword ? "text" : "password"}
                        placeholder="Create password"
                        className="w-full rounded-lg border border-slate-300 pl-10 pr-9 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <Lock size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Repeat password"
                        className="w-full rounded-lg border border-slate-300 pl-10 pr-9 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                      >
                        {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-sm transition-all duration-300 hover:from-amber-400 hover:to-amber-500 active:scale-[0.98]"
                >
                  Register
                </button>
              </form>

              <p className="mt-8 text-center text-sm text-slate-500">
                Already have an account?{" "}
                <button onClick={() => goTo("login")} className="font-semibold text-slate-900 hover:text-amber-600">
                  Login
                </button>
              </p>
            </div>
          )}

          {view === "forgot" && (
            <div>
              <button
                onClick={() => goTo("login")}
                className="flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-900 mb-6"
              >
                <ArrowLeft size={16} />
                Back to sign in
              </button>

              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-600">Account Recovery</span>
              <div className="mt-3 h-[3px] w-14 bg-gradient-to-r from-slate-900 via-slate-800 to-amber-500 rounded-full" />
              <h1 className="mt-5 font-serif text-3xl font-semibold text-slate-900">Reset your password</h1>
              <p className="mt-2 text-sm text-slate-500">
                Enter the email linked to your account and we'll send a reset link.
              </p>

              {resetSent ? (
                <div className="mt-8 rounded-xl bg-emerald-50 border border-emerald-200 px-5 py-6 text-center">
                  <CheckCircle2 size={32} className="mx-auto text-emerald-600" />
                  <p className="mt-3 font-semibold text-emerald-800">Reset link sent!</p>
                  <p className="mt-1 text-sm text-emerald-700">
                    Check your inbox for instructions to reset your password.
                  </p>
                  <button
                    onClick={() => goTo("login")}
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                  >
                    Return to Sign In
                  </button>
                </div>
              ) : (
                <form onSubmit={handleForgotSubmit} className="mt-8 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                      Email
                    </label>
                    <div className="relative">
                      <Mail size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-slate-300 pl-10 pr-3.5 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-sm transition-all duration-300 hover:from-amber-400 hover:to-amber-500 active:scale-[0.98]"
                  >
                    Send Reset Link
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}