'use client';

import { Star, Calendar, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const DOCTORS = [
  {
    name: "Dr. Anjali Sharma",
    role: "Senior Cardiologist",
    seed: "./images/doctor/1.jpg",
    rating: "4.9",
    exp: "15 yrs exp.",
  },
  {
    name: "Dr. Rajiv Thapa",
    role: "Chief Neurologist",
    seed: "./images/doctor/2.jpg",
    rating: "4.8",
    exp: "18 yrs exp.",
  },
  {
    name: "Dr. Priya Koirala",
    role: "Pediatric Specialist",
    seed: "./images/doctor/3.jpg",
    rating: "5.0",
    exp: "12 yrs exp.",
  },
  {
    name: "Dr. Suresh Gurung",
    role: "Orthopedic Surgeon",
    seed: "./images/doctor/4.jpg",
    rating: "4.9",
    exp: "20 yrs exp.",
  },
];

export default function Doctors() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-white py-8 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <div 
              className={`transform transition-all duration-700 delay-100 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-600">
                Our Physicians
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
              Meet a few of our specialists.
            </h2>
          </div>
          
          <div 
            className={`transform transition-all duration-700 delay-400 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            <Link
              href="/doctors"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-indigo-950 transition-all duration-300 hover:border-indigo-950 hover:bg-slate-100 hover:shadow-md active:scale-[0.97] whitespace-nowrap group"
            >
              View All Doctors
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS.map((doc, index) => (
            <div
              key={doc.name}
              className={`group rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 transform ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 150 + 500}ms`
              }}
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={`${doc.seed}`}
                  alt={doc.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${doc.name.replace('Dr. ', '')}&background=1e1b4b&color=fff&size=128`;
                  }}
                />
                
                <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-indigo-950 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
                  <Star size={13} className="fill-amber-500 text-amber-500" />
                  {doc.rating}
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold text-indigo-950 transition-colors duration-300 group-hover:text-amber-600">
                  {doc.name}
                </h3>
                <p className="mt-0.5 text-sm text-amber-600 font-medium">{doc.role}</p>
                <p className="mt-1 text-xs text-slate-400">{doc.exp}</p>

                <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4">
                  <Link
                    href="/book-appointment"
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-indigo-950 px-3 py-2 text-xs font-bold text-white transition-all duration-300 hover:bg-indigo-900 hover:shadow-lg hover:shadow-indigo-950/20 active:scale-[0.97] group"
                  >
                    <Calendar size={13} className="transition-transform duration-300 group-hover:scale-110" />
                    Book
                  </Link>
                  
                  <button
                    aria-label="Email doctor"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 hover:border-indigo-950 hover:text-indigo-950 hover:bg-slate-50 hover:scale-110"
                  >
                    <Mail size={14} />
                  </button>
                  
                  <button
                    aria-label="Doctor LinkedIn"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 hover:border-[#0077B5] hover:text-[#0077B5] hover:bg-[#0077B5]/5 hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}