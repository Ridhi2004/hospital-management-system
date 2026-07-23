'use client';

import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  Calendar,
  User,
  Heart,
  Brain,
  Bone,
  Baby,
  Venus,
  Droplet,
  Siren,
  ScanLine,
  FlaskConical,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const DEPARTMENTS = [
  { label: "Cardiology", href: "/departments/cardiology", icon: Heart, tint: "bg-rose-600 text-white" },
  { label: "Neurology", href: "/departments/neurology", icon: Brain, tint: "bg-indigo-600 text-white" },
  { label: "Orthopedics", href: "/departments/orthopedics", icon: Bone, tint: "bg-emerald-700 text-white" },
  { label: "Pediatrics", href: "/departments/pediatrics", icon: Baby, tint: "bg-amber-600 text-white" },
  { label: "Gynecology", href: "/departments/gynecology", icon: Venus, tint: "bg-fuchsia-600 text-white" },
  { label: "Dermatology", href: "/departments/dermatology", icon: Droplet, tint: "bg-red-700 text-white" },
  { label: "Emergency Medicine", href: "/departments/emergency-medicine", icon: Siren, tint: "bg-orange-600 text-white" },
  { label: "Radiology", href: "/departments/radiology", icon: ScanLine, tint: "bg-cyan-700 text-white" },
  { label: "Laboratory", href: "/departments/laboratory", icon: FlaskConical, tint: "bg-teal-700 text-white" },
];

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const [mobileDropdowns, setMobileDropdowns] = useState({
    about: false,
    departments: false,
    services: false,
  });

  const toggleMobileDropdown = (key: keyof typeof mobileDropdowns) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
        setMobileMenuOpen(false);
      } else {
        setShowNavbar(true);
      }

      setScrolled(currentScrollY > 10);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setMobileDropdowns({
      about: false,
      departments: false,
      services: false,
    });
  };

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-slate-950 text-slate-300 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-xs sm:text-sm">
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Phone size={14} className="text-amber-400" />
                <span className="font-medium text-slate-100">+977 9861619210</span>
              </div>
              <span className="text-white/15">|</span>
              <a
                href="mailto:info@meridianhospital.com"
                className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors duration-300"
              >
                <Mail size={14} className="text-amber-400" />
                <span>info@meridianhospital.com</span>
              </a>
            </div>

            <div className="flex items-center gap-3 ml-auto md:ml-0 text-slate-300">
              <span className="hidden sm:inline text-slate-500">24/7 Emergency:</span>
              <a href="tel:+9779861619210" className="font-semibold text-amber-400">
                +977 9861619210
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white shadow-sm"
        } border-b border-slate-200`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link href="/" onClick={closeAllMenus} className="flex flex-shrink-0 items-center gap-2.5">
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
              <span className="font-serif text-[1.32rem] font-semibold leading-tight tracking-tight text-indigo-950">
                Meridian
                <span className="mt-0.5 block font-sans text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-amber-600">
                  Hospital &amp; Health System
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="relative text-slate-700 font-medium text-sm px-4 py-2 rounded-md transition-all duration-300 hover:text-indigo-950 hover:bg-slate-100 group"
              >
                Home
                <span className="absolute left-4 right-4 bottom-1 h-[2px] bg-amber-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </Link>

              {/* About dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-slate-700 font-medium text-sm px-4 py-2 rounded-md transition-all duration-300 group-hover:text-indigo-950 group-hover:bg-slate-100">
                  About
                  <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                  <span className="absolute left-4 right-4 bottom-1 h-[2px] bg-amber-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </button>
                <div className="absolute left-0 mt-1 w-64 bg-white border border-slate-200 rounded-xl shadow-2xl opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-10 overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-indigo-950 via-indigo-800 to-amber-500" />
                  <Link href="/about" className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 hover:text-indigo-950 transition-colors">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    About Us
                  </Link>
                  <Link href="/about/mission-vision" className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 hover:text-indigo-950 transition-colors">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    Mission &amp; Vision
                  </Link>
                  <Link href="/about/management" className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 hover:text-indigo-950 transition-colors">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    Management Team
                  </Link>
                  <Link href="/about/facilities" className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 hover:text-indigo-950 transition-colors">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    Facilities
                  </Link>
                  <Link href="/about/careers" className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 hover:text-indigo-950 transition-colors">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    Careers
                  </Link>
                </div>
              </div>

              {/* Departments mega dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-slate-700 font-medium text-sm px-4 py-2 rounded-md transition-all duration-300 group-hover:text-indigo-950 group-hover:bg-slate-100">
                  Departments
                  <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                  <span className="absolute left-4 right-4 bottom-1 h-[2px] bg-amber-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-[560px] bg-white border border-slate-200 rounded-xl shadow-2xl opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-10 overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-indigo-950 via-indigo-800 to-amber-500" />
                  <div className="grid grid-cols-3 gap-1 p-2">
                    {DEPARTMENTS.map((dept) => {
                      const Icon = dept.icon;
                      return (
                        <Link
                          key={dept.href}
                          href={dept.href}
                          className="flex items-center gap-2.5 rounded-md px-2.5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
                        >
                          <span className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[9px] shadow-sm ${dept.tint}`}>
                            <Icon className="h-[17px] w-[17px]" />
                          </span>
                          {dept.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              <Link
                href="/doctors"
                className="relative text-slate-700 font-medium text-sm px-4 py-2 rounded-md transition-all duration-300 hover:text-indigo-950 hover:bg-slate-100 group"
              >
                Doctors
                <span className="absolute left-4 right-4 bottom-1 h-[2px] bg-amber-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </Link>

              {/* Services dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-slate-700 font-medium text-sm px-4 py-2 rounded-md transition-all duration-300 group-hover:text-indigo-950 group-hover:bg-slate-100">
                  Services
                  <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                  <span className="absolute left-4 right-4 bottom-1 h-[2px] bg-amber-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </button>
                <div className="absolute left-0 mt-1 w-64 bg-white border border-slate-200 rounded-xl shadow-2xl opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-10 overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-indigo-950 via-indigo-800 to-amber-500" />
                  <Link href="/services/emergency-care" className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 hover:text-indigo-950 transition-colors">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    Emergency Care
                  </Link>
                  <Link href="/services/laboratory" className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 hover:text-indigo-950 transition-colors">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    Laboratory
                  </Link>
                  <Link href="/services/pharmacy" className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 hover:text-indigo-950 transition-colors">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    Pharmacy
                  </Link>
                  <Link href="/services/ambulance" className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 hover:text-indigo-950 transition-colors">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    Ambulance
                  </Link>
                  <Link href="/services/health-checkup" className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 hover:text-indigo-950 transition-colors">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    Health Checkup
                  </Link>
                  <Link href="/services/telemedicine" className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-100 hover:text-indigo-950 transition-colors">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-500" />
                    Telemedicine
                  </Link>
                </div>
              </div>

              <Link
                href="/contact"
                className="relative text-slate-700 font-medium text-sm px-4 py-2 rounded-md transition-all duration-300 hover:text-indigo-950 hover:bg-slate-100 group"
              >
                Contact
                <span className="absolute left-4 right-4 bottom-1 h-[2px] bg-amber-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </Link>
            </nav>

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center gap-2.5">
              <Link
                href="/login"
                className="flex items-center gap-1.5 rounded-full border border-slate-300 px-[18px] py-2.5 text-sm font-semibold text-indigo-950 transition-colors hover:border-indigo-950 hover:bg-slate-100"
              >
                <User size={15} />
                Login
              </Link>
              <Link
                href="/book-appointment"
                className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-[18px] py-2.5 text-sm font-bold text-slate-950 shadow-sm transition-all duration-300 hover:from-amber-400 hover:to-amber-500 hover:shadow-md active:scale-[0.97]"
              >
                <Calendar size={15} />
                Book Appointment
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 rounded-lg text-indigo-950 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute left-0 top-full w-full bg-white border-t border-slate-200 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto z-40">
            <nav className="flex flex-col px-4 py-3 space-y-0.5">
              <Link
                href="/"
                onClick={closeAllMenus}
                className="text-slate-700 hover:text-indigo-950 hover:bg-slate-100 font-medium py-3 px-3 rounded-lg transition-all duration-200 border-b border-slate-200"
              >
                Home
              </Link>

              {/* About accordion */}
              <div className="border-b border-slate-200">
                <button
                  onClick={() => toggleMobileDropdown("about")}
                  className="flex items-center justify-between w-full text-left text-slate-700 hover:text-indigo-950 hover:bg-slate-100 font-medium py-3 px-3 rounded-lg transition-all duration-200"
                >
                  <span>About</span>
                  {mobileDropdowns.about ? (
                    <ChevronUp size={18} className="text-amber-500" />
                  ) : (
                    <ChevronDown size={18} className="text-amber-500" />
                  )}
                </button>
                {mobileDropdowns.about && (
                  <div className="flex flex-col ml-4 pb-2 space-y-0.5 border-l-2 border-amber-500/30 pl-3">
                    <Link href="/about" onClick={closeAllMenus} className="py-2 px-2 text-sm text-slate-500 hover:text-indigo-950 hover:bg-slate-100 rounded-lg transition-colors">
                      About Us
                    </Link>
                    <Link href="/about/mission-vision" onClick={closeAllMenus} className="py-2 px-2 text-sm text-slate-500 hover:text-indigo-950 hover:bg-slate-100 rounded-lg transition-colors">
                      Mission &amp; Vision
                    </Link>
                    <Link href="/about/management" onClick={closeAllMenus} className="py-2 px-2 text-sm text-slate-500 hover:text-indigo-950 hover:bg-slate-100 rounded-lg transition-colors">
                      Management Team
                    </Link>
                    <Link href="/about/facilities" onClick={closeAllMenus} className="py-2 px-2 text-sm text-slate-500 hover:text-indigo-950 hover:bg-slate-100 rounded-lg transition-colors">
                      Facilities
                    </Link>
                    <Link href="/about/careers" onClick={closeAllMenus} className="py-2 px-2 text-sm text-slate-500 hover:text-indigo-950 hover:bg-slate-100 rounded-lg transition-colors">
                      Careers
                    </Link>
                  </div>
                )}
              </div>

              {/* Departments accordion */}
              <div className="border-b border-slate-200">
                <button
                  onClick={() => toggleMobileDropdown("departments")}
                  className="flex items-center justify-between w-full text-left text-slate-700 hover:text-indigo-950 hover:bg-slate-100 font-medium py-3 px-3 rounded-lg transition-all duration-200"
                >
                  <span>Departments</span>
                  {mobileDropdowns.departments ? (
                    <ChevronUp size={18} className="text-amber-500" />
                  ) : (
                    <ChevronDown size={18} className="text-amber-500" />
                  )}
                </button>
                {mobileDropdowns.departments && (
                  <div className="flex flex-col ml-4 pb-2 space-y-0.5 border-l-2 border-amber-500/30 pl-3">
                    {DEPARTMENTS.map((dept) => {
                      const Icon = dept.icon;
                      return (
                        <Link
                          key={dept.href}
                          href={dept.href}
                          onClick={closeAllMenus}
                          className="flex items-center gap-2.5 py-2 px-2 text-sm text-slate-500 hover:text-indigo-950 hover:bg-slate-100 rounded-lg transition-colors"
                        >
                          <span className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg shadow-sm ${dept.tint}`}>
                            <Icon className="h-[15px] w-[15px]" />
                          </span>
                          {dept.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Link
                href="/doctors"
                onClick={closeAllMenus}
                className="text-slate-700 hover:text-indigo-950 hover:bg-slate-100 font-medium py-3 px-3 rounded-lg transition-all duration-200 border-b border-slate-200"
              >
                Doctors
              </Link>

              {/* Services accordion */}
              <div className="border-b border-slate-200">
                <button
                  onClick={() => toggleMobileDropdown("services")}
                  className="flex items-center justify-between w-full text-left text-slate-700 hover:text-indigo-950 hover:bg-slate-100 font-medium py-3 px-3 rounded-lg transition-all duration-200"
                >
                  <span>Services</span>
                  {mobileDropdowns.services ? (
                    <ChevronUp size={18} className="text-amber-500" />
                  ) : (
                    <ChevronDown size={18} className="text-amber-500" />
                  )}
                </button>
                {mobileDropdowns.services && (
                  <div className="flex flex-col ml-4 pb-2 space-y-0.5 border-l-2 border-amber-500/30 pl-3">
                    <Link href="/services/emergency-care" onClick={closeAllMenus} className="py-2 px-2 text-sm text-slate-500 hover:text-indigo-950 hover:bg-slate-100 rounded-lg transition-colors">
                      Emergency Care
                    </Link>
                    <Link href="/services/laboratory" onClick={closeAllMenus} className="py-2 px-2 text-sm text-slate-500 hover:text-indigo-950 hover:bg-slate-100 rounded-lg transition-colors">
                      Laboratory
                    </Link>
                    <Link href="/services/pharmacy" onClick={closeAllMenus} className="py-2 px-2 text-sm text-slate-500 hover:text-indigo-950 hover:bg-slate-100 rounded-lg transition-colors">
                      Pharmacy
                    </Link>
                    <Link href="/services/ambulance" onClick={closeAllMenus} className="py-2 px-2 text-sm text-slate-500 hover:text-indigo-950 hover:bg-slate-100 rounded-lg transition-colors">
                      Ambulance
                    </Link>
                    <Link href="/services/health-checkup" onClick={closeAllMenus} className="py-2 px-2 text-sm text-slate-500 hover:text-indigo-950 hover:bg-slate-100 rounded-lg transition-colors">
                      Health Checkup
                    </Link>
                    <Link href="/services/telemedicine" onClick={closeAllMenus} className="py-2 px-2 text-sm text-slate-500 hover:text-indigo-950 hover:bg-slate-100 rounded-lg transition-colors">
                      Telemedicine
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                onClick={closeAllMenus}
                className="text-slate-700 hover:text-indigo-950 hover:bg-slate-100 font-medium py-3 px-3 rounded-lg transition-all duration-200 border-b border-slate-200"
              >
                Contact
              </Link>

              <Link
                href="/login"
                onClick={closeAllMenus}
                className="mt-2 text-center text-indigo-950 font-semibold py-3 px-6 rounded-full border border-slate-300 hover:border-indigo-950 hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <User size={16} />
                Login
              </Link>

              <Link
                href="/book-appointment"
                onClick={closeAllMenus}
                className="mt-2 text-center bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold py-3 px-6 rounded-full transition-all duration-300 hover:from-amber-400 hover:to-amber-500 flex items-center justify-center gap-2"
              >
                <Calendar size={16} />
                Book Appointment
              </Link>

              <div className="mt-4 pt-4 border-t border-slate-200 space-y-3 text-sm">
                <div className="flex items-center gap-3 justify-center text-slate-500">
                  <div className="w-8 h-8 rounded-full bg-indigo-950 flex items-center justify-center">
                    <Phone size={14} className="text-amber-400" />
                  </div>
                  <span>+977 9861619210</span>
                </div>
                <div className="flex items-center gap-3 justify-center text-slate-500">
                  <div className="w-8 h-8 rounded-full bg-indigo-950 flex items-center justify-center">
                    <Mail size={14} className="text-amber-400" />
                  </div>
                  <span>info@meridianhospital.com</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}