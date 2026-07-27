'use client';

import { Calendar, Phone, ShieldCheck, Stethoscope, Users, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const DEPT_OPTIONS = [
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Gynecology",
  "Dermatology",
  "Emergency Medicine",
];

export default function Hero() {
  const [department, setDepartment] = useState(DEPT_OPTIONS[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-900">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <img
          src="./images/Hospital.jpg"
          alt="Meridian Hospital campus"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/90 to-slate-900/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-24 lg:pt-20 lg:pb-32">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          {/* Left: copy */}
          <div>
            {/* Badge - Slide down with fade */}
            <div 
              className={`transform transition-all duration-700 delay-100 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-amber-400">
                <ShieldCheck size={14} className="animate-pulse" />
                Trusted care since 1998
              </div>
            </div>

            {/* Heading - Fade in from left */}
            <h1 
              className={`mt-6 font-serif text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.08] text-white transform transition-all duration-700 delay-200 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
            >
              Expert care, close
              <br />
              to your heart.
            </h1>

            {/* Description - Fade in with delay */}
            <p 
              className={`mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-300 text-justify transform transition-all duration-700 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              Meridian Hospital &amp; Health System brings together award-winning
              specialists, advanced diagnostics, and round-the-clock emergency
              care - all under one roof, for every stage of life.
            </p>

            {/* Buttons - Staggered fade in */}
            <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
              <div 
                className={`transform transition-all duration-700 delay-400 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
              >
                <Link
                  href="/book-appointment"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-900/20 transition-all duration-300 hover:from-amber-400 hover:to-amber-500 active:scale-[0.97] group"
                >
                  <Calendar size={17} className="transition-transform duration-300 group-hover:rotate-12" />
                  Book an Appointment
                </Link>
              </div>
              <div 
                className={`transform transition-all duration-700 delay-500 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                }`}
              >
                <a
                  href="tel:+9779861619210"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/40 group"
                >
                  <Phone size={16} className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  24/7 Emergency Line
                </a>
              </div>
            </div>

            {/* Trust row - Staggered fade in */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-7">
              {[
                { icon: Users, label: 'Specialist Doctors', value: '120+', delay: 600 },
                { icon: Stethoscope, label: 'Core Departments', value: '9', delay: 700 },
                { icon: ShieldCheck, label: 'Patient Satisfaction', value: '98%', delay: 800 },
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-2.5 transform transition-all duration-700 delay-${item.delay} ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                >
                  <item.icon size={18} className="text-amber-400" />
                  <span className="text-sm text-slate-300">
                    <span className="font-semibold text-white">{item.value}</span> {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: floating appointment card */}
          <div 
            className={`relative transform transition-all duration-700 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-amber-500/20 via-transparent to-indigo-500/20 blur-2xl animate-pulse" />
            <div className="relative rounded-2xl bg-white shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
              <div className="h-1.5 bg-gradient-to-r from-slate-900 via-slate-800 to-amber-500" />
              <div className="p-6 sm:p-7">
                <h3 className="font-serif text-xl font-semibold text-slate-900">Find a Specialist</h3>
                <p className="mt-1 text-sm text-slate-500">Get matched with the right department in seconds.</p>

                <div className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                      Department
                    </label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 hover:border-amber-400"
                    >
                      {DEPT_OPTIONS.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                        Date
                      </label>
                      <input
                        type="date"
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 hover:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                        Time
                      </label>
                      <input
                        type="time"
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-700 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all duration-300 hover:border-amber-400"
                      />
                    </div>
                  </div>

                  <Link
                    href="/book-appointment"
                    className="flex items-center justify-center gap-1.5 w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-slate-800 active:scale-[0.98] group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center gap-1.5">
                      Check Availability
                      <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}