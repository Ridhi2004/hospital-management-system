'use client';

import {
  Heart,
  Brain,
  Bone,
  Baby,
  Venus,
  Droplet,
  Siren,
  ScanLine,
  FlaskConical,
  ArrowUpRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const SPECIALTIES = [
  {
    label: "Cardiology",
    href: "/departments/cardiology",
    icon: Heart,
    tint: "bg-rose-600",
    seed: "./images/specialities/1.jpg",
    blurb: "Comprehensive heart care, from diagnostics to surgery.",
  },
  {
    label: "Neurology",
    href: "/departments/neurology",
    icon: Brain,
    tint: "bg-indigo-600",
    seed: "./images/specialities/2.jpg",
    blurb: "Advanced treatment for brain and nervous system conditions.",
  },
  {
    label: "Orthopedics",
    href: "/departments/orthopedics",
    icon: Bone,
    tint: "bg-emerald-700",
    seed: "./images/specialities/3.jpg",
    blurb: "Joint, bone, and sports injury care to keep you moving.",
  },
  {
    label: "Pediatrics",
    href: "/departments/pediatrics",
    icon: Baby,
    tint: "bg-amber-600",
    seed: "./images/specialities/4.jpg",
    blurb: "Gentle, dedicated care for infants through teens.",
  },
  {
    label: "Gynecology",
    href: "/departments/gynecology",
    icon: Venus,
    tint: "bg-fuchsia-600",
    seed: "./images/specialities/5.jpg",
    blurb: "Compassionate women's health at every life stage.",
  },
  {
    label: "Dermatology",
    href: "/departments/dermatology",
    icon: Droplet,
    tint: "bg-red-700",
    seed: "./images/specialities/6.jpg",
    blurb: "Skin, hair, and nail treatments from board-certified experts.",
  },
  {
    label: "Emergency Medicine",
    href: "/departments/emergency-medicine",
    icon: Siren,
    tint: "bg-orange-600",
    seed: "./images/specialities/7.jpg",
    blurb: "Round-the-clock trauma and critical care response.",
  },
  {
    label: "Radiology",
    href: "/departments/radiology",
    icon: ScanLine,
    tint: "bg-cyan-700",
    seed: "./images/specialities/8.jpg",
    blurb: "High-precision imaging for fast, accurate diagnosis.",
  },
  {
    label: "Laboratory",
    href: "/departments/laboratory",
    icon: FlaskConical,
    tint: "bg-teal-700",
    seed: "./images/specialities/9.jpg",
    blurb: "Rapid, reliable diagnostic testing on-site.",
  },
];

export default function Specialties() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-slate-50 py-8 sm:py-18 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <div 
            className={`transform transition-all duration-700 delay-100 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-600">
              Our Specialties
            </span>
          </div>
          
          <div 
            className={`mt-3 h-[3px] w-14 bg-gradient-to-r from-indigo-950 via-indigo-800 to-amber-500 rounded-full transform transition-all duration-700 delay-200 origin-left ${
              isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`} 
          />
          
          <h2 
            className={`mt-5 font-serif text-3xl sm:text-4xl font-semibold leading-tight text-indigo-950 transform transition-all duration-700 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Nine departments, one connected system of care.
          </h2>
          
          <p 
            className={`mt-4 text-base text-slate-600 transform transition-all duration-700 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            Whichever specialist you need, our departments work together — sharing
            records and referrals so nothing falls through the cracks.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALTIES.map((s, index) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.href}
                href={s.href}
                className={`group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 transform ${
                  isVisible 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-12 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 100 + 500}ms`,
                  transitionProperty: 'all'
                }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={`${s.seed}`}
                    alt={s.label}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/70 via-indigo-950/10 to-transparent" />
                  
                  {/* Icon with pulse animation on hover */}
                  <span className={`absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${s.tint}`}>
                    <Icon size={19} className="transition-transform duration-300 group-hover:scale-110" />
                  </span>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg font-semibold text-indigo-950 transition-colors duration-300 group-hover:text-amber-600">
                      {s.label}
                    </h3>
                    <ArrowUpRight 
                      size={18} 
                      className="text-slate-300 transition-all duration-300 group-hover:text-amber-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110" 
                    />
                  </div>
                  <p className="mt-1.5 text-sm text-slate-500 leading-relaxed transition-colors duration-300 group-hover:text-slate-700">
                    {s.blurb}
                  </p>
                  
                  {/* Decorative line that appears on hover */}
                  <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-500 group-hover:w-full" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}