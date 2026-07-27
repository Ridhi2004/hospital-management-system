'use client';

import Navbar from '../../components/landing/Navbar';
import Footer from '../../components/landing/Footer';
import {
  HeartHandshake,
  GraduationCap,
  BadgeDollarSign,
  Clock3,
  MapPin,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const BENEFITS = [
  {
    title: "Health & Wellness Coverage",
    desc: "Full medical, dental, and mental health benefits for you and your family.",
    icon: HeartHandshake,
  },
  {
    title: "Continuing Education",
    desc: "Funded certifications, conferences, and training to grow your career.",
    icon: GraduationCap,
  },
  {
    title: "Competitive Compensation",
    desc: "Transparent pay bands with regular performance-based reviews.",
    icon: BadgeDollarSign,
  },
  {
    title: "Flexible Scheduling",
    desc: "Shift options designed around work-life balance for clinical staff.",
    icon: Clock3,
  },
];

const DEPARTMENTS = ["All Departments", "Cardiology", "Nursing", "Emergency Medicine", "Radiology", "Administration"];

const OPENINGS = [
  { title: "Senior Cardiologist", dept: "Cardiology", type: "Full-time", location: "Kathmandu, NP" },
  { title: "ICU Registered Nurse", dept: "Nursing", type: "Full-time", location: "Kathmandu, NP" },
  { title: "Emergency Room Physician", dept: "Emergency Medicine", type: "Full-time", location: "Kathmandu, NP" },
  { title: "Radiology Technician", dept: "Radiology", type: "Part-time", location: "Kathmandu, NP" },
  { title: "Patient Care Coordinator", dept: "Administration", type: "Full-time", location: "Kathmandu, NP" },
  { title: "Pediatric Nurse Practitioner", dept: "Nursing", type: "Full-time", location: "Kathmandu, NP" },
];

export default function Careers() {
  const [activeDept, setActiveDept] = useState("All Departments");

  const filtered =
    activeDept === "All Departments"
      ? OPENINGS
      : OPENINGS.filter((o) => o.dept === activeDept);

  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero - Removed blue background */}
        <section className="relative overflow-hidden py-12 sm:py-16">
          <img
            src="/images/Hospital.jpg"
            alt="Meridian Hospital staff"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-400">Careers at Meridian</span>
            <h1 className="mt-5 font-serif text-4xl sm:text-5xl font-semibold leading-tight text-white">
              Build a career that means something.
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-slate-200">
              Join a team of 500+ professionals dedicated to compassionate,
              high-quality patient care — with the support to grow your own career too.
            </p>
          </div>
        </section>

        {/* Benefits - Reduced padding */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/doctor/2.jpg"
                  alt="Meridian staff team"
                  className="w-full h-[380px] sm:h-[440px] object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-600">Why Work Here</span>
                <div className="mt-3 h-[3px] w-14 bg-gradient-to-r from-indigo-950 via-indigo-800 to-amber-500 rounded-full" />
                <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-semibold leading-tight text-indigo-950">
                  We invest in the people who care for others.
                </h2>

                <div className="mt-8 grid sm:grid-cols-2 gap-6">
                  {BENEFITS.map((b) => {
                    const Icon = b.icon;
                    return (
                      <div key={b.title} className="flex gap-3.5">
                        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-950 text-amber-400">
                          <Icon size={19} />
                        </span>
                        <div>
                          <h3 className="font-semibold text-indigo-950 text-sm">{b.title}</h3>
                          <p className="mt-1 text-sm text-slate-500 leading-relaxed">{b.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Open positions - Reduced padding */}
        <section className="bg-slate-50 py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-600">Open Roles</span>
              <div className="mt-3 mx-auto h-[3px] w-14 bg-gradient-to-r from-indigo-950 via-indigo-800 to-amber-500 rounded-full" />
              <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-semibold leading-tight text-indigo-950">
                Current openings
              </h2>
            </div>

            {/* Filter tabs */}
            <div className="mt-10 flex flex-wrap justify-center gap-2.5">
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setActiveDept(dept)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeDept === dept
                      ? "bg-indigo-950 text-white"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-950"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Listings */}
            <div className="mt-10 space-y-4">
              {filtered.map((job) => (
                <div
                  key={job.title}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl bg-white border border-slate-100 shadow-sm p-6 transition-all duration-300 hover:shadow-md"
                >
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-indigo-950">{job.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5"><Briefcase size={13} className="text-amber-500" />{job.dept}</span>
                      <span className="flex items-center gap-1.5"><Clock3 size={13} className="text-amber-500" />{job.type}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={13} className="text-amber-500" />{job.location}</span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="flex flex-shrink-0 items-center justify-center gap-1.5 rounded-full bg-indigo-950 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-indigo-900"
                  >
                    Apply Now
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              ))}

              {filtered.length === 0 && (
                <p className="text-center text-sm text-slate-500 py-10">
                  No open roles in this department right now — check back soon.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* CTA - Changed to dark gradient instead of blue */}
        <section className="relative overflow-hidden py-12 sm:py-16">
          <img
            src="/images/doctor/1.jpg"
            alt="Background"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/70 to-black/60" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-white">Don't see the right role?</h3>
              <p className="mt-1.5 text-sm text-slate-300">Send us your resume — we're always looking for great people.</p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:from-amber-400 hover:to-amber-500"
            >
              Submit Your Resume
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}