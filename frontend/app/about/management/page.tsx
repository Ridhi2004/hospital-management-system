'use client';

import Navbar from '../../components/landing/Navbar';
import Footer from '../../components/landing/Footer';
import { Mail, Award } from "lucide-react";

const LEADERSHIP = [
  {
    name: "Dr. Meera Bhandari",
    role: "Chief Executive Officer",
    seed: "../../images/doctor/1.jpg",
    bio: "20+ years in hospital administration, leading Meridian's growth since 2011.",
  },
  {
    name: "Dr. Anil Basnet",
    role: "Chief Medical Officer",
    seed: "../../images/doctor/2.jpg",
    bio: "Oversees clinical standards across all 9 departments and specialist teams.",
  },
  {
    name: "Sunita Karki",
    role: "Chief Nursing Officer",
    seed: "../../images/doctor/3.jpg",
    bio: "Leads a 300+ member nursing staff with a focus on patient-first protocols.",
  },
  {
    name: "Prakash Maharjan",
    role: "Chief Financial Officer",
    seed: "../../images/doctor/4.jpg",
    bio: "Ensures transparent, sustainable pricing so care stays accessible.",
  },
  {
    name: "Dr. Rita Shakya",
    role: "Director of Operations",
    seed: "../../images/doctor/1.jpg",
    bio: "Manages day-to-day hospital operations, facilities, and patient flow.",
  },
  {
    name: "Bishal Tamang",
    role: "Head of Technology",
    seed: "../../images/doctor/2.jpg",
    bio: "Drives digital health records, telemedicine, and diagnostic systems.",
  },
];

// LinkedIn SVG Icon Component
const LinkedInIcon = ({ size = 14, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className={className}
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function ManagementTeam() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero - Removed blue background */}
        <section className="relative overflow-hidden py-12 sm:py-16">
          <img
            src="../../images/Hospital.jpg"
            alt="Meridian Hospital leadership"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-400">Leadership</span>
            <h1 className="mt-5 font-serif text-4xl sm:text-5xl font-semibold leading-tight text-white">
              The team steering Meridian forward.
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-slate-200">
              Decades of combined experience in medicine, operations, and patient
              care — all working toward the same mission.
            </p>
          </div>
        </section>

        {/* Leadership grid - Reduced padding */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {LEADERSHIP.map((person) => (
                <div
                  key={person.name}
                  className="group rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    <img
                      src={`${person.seed}`}
                      alt={person.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg font-semibold text-indigo-950">{person.name}</h3>
                    <p className="mt-0.5 text-sm text-amber-600 font-medium">{person.role}</p>
                    <p className="mt-3 text-sm text-slate-500 leading-relaxed">{person.bio}</p>

                    <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4">
                      <button
                        aria-label={`Email ${person.name}`}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-indigo-950 hover:text-indigo-950"
                      >
                        <Mail size={14} />
                      </button>
                      <button
                        aria-label={`${person.name} LinkedIn`}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:border-indigo-950 hover:text-indigo-950"
                      >
                        <LinkedInIcon size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recognition strip - Reduced padding */}
        <section className="bg-slate-50 py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-center sm:text-left">
            <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-indigo-950 text-amber-400">
              <Award size={24} />
            </span>
            <p className="text-sm sm:text-base text-slate-600">
              Our leadership team has been recognized with multiple national healthcare
              excellence awards, and continues to guide Meridian's expansion into new
              specialties and facilities.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}