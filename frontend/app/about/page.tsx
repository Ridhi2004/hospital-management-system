'use client';

import { CheckCircle2, Award, Users, HeartHandshake, Target, Eye, Sparkles } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/landing/Navbar"; // Fixed: Changed Navbar import to correct path
import Footer from "../components/landing/Footer";

const VALUES = [
  {
    title: "Compassion",
    desc: "Every patient is treated with dignity, empathy, and genuine care.",
    icon: HeartHandshake,
  },
  {
    title: "Excellence",
    desc: "We hold ourselves to the highest clinical and ethical standards.",
    icon: Award,
  },
  {
    title: "Integrity",
    desc: "Honest communication and transparent care, always.",
    icon: Target,
  },
  {
    title: "Innovation",
    desc: "Continuously adopting better tools and techniques for patient care.",
    icon: Sparkles,
  },
];

const TIMELINE = [
  { year: "1998", text: "Meridian opens as a single community clinic in Kathmandu." },
  { year: "2006", text: "Expanded into a full-service hospital with 3 core departments." },
  { year: "2014", text: "Opened the Emergency & Trauma wing, operating 24/7." },
  { year: "2022", text: "Reached 120+ specialists across 9 departments." },
];

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero - Removed blue background */}
        <section className="relative overflow-hidden py-24 sm:py-28">
          <img
            src="./images/Hospital.jpg"
            alt="Meridian Hospital campus"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-400">About Meridian</span>
            <h1 className="mt-5 font-serif text-4xl sm:text-5xl font-semibold leading-tight text-white">
              Care rooted in community, built to grow with you.
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-slate-200">
              For over 27 years, Meridian Hospital &amp; Health System has combined
              clinical excellence with genuine compassion for every patient who walks
              through our doors.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-8 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
              <div className="relative">
                <div className="grid grid-cols-5 grid-rows-6 gap-4 h-[420px] sm:h-[480px]">
                  <div className="col-span-3 row-span-4 rounded-2xl overflow-hidden shadow-lg">
                    <img src="./images/1.jpg" alt="Meridian reception" className="h-full w-full object-cover" />
                  </div>
                  <div className="col-span-2 row-span-3 col-start-4 rounded-2xl overflow-hidden shadow-lg">
                    <img src="./images/2.jpg" alt="Doctor with patient" className="h-full w-full object-cover" />
                  </div>
                  <div className="col-span-2 row-span-3 col-start-4 row-start-4 rounded-2xl overflow-hidden shadow-lg">
                    <img src="./images/3.jpg" alt="Medical staff" className="h-full w-full object-cover" />
                  </div>
                  <div className="col-span-3 row-span-2 row-start-5 rounded-2xl overflow-hidden shadow-lg">
                    <img src="./images/4.jpg" alt="Hospital exterior" className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-4 sm:-right-8 rounded-2xl bg-indigo-950 px-6 py-5 shadow-xl">
                  <p className="font-serif text-3xl font-bold text-amber-400 leading-none">27+</p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-300">Years of Service</p>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-600">Our Story</span>
                <div className="mt-3 h-[3px] w-14 bg-gradient-to-r from-indigo-950 via-indigo-800 to-amber-500 rounded-full" />
                <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-semibold leading-tight text-indigo-950">
                  From a single clinic to a full health system.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-slate-600">
                  Meridian Hospital &amp; Health System began in 1998 with one goal: make
                  excellent healthcare accessible to every family in our community. Today,
                  we've grown into a full-service medical campus with 9 departments, 450+
                  beds, and a team of 120+ specialists — but that founding goal hasn't changed.
                </p>

                <div className="mt-8 space-y-5">
                  {TIMELINE.map((t) => (
                    <div key={t.year} className="flex gap-4">
                      <span className="flex-shrink-0 font-serif text-lg font-bold text-amber-600 w-14">{t.year}</span>
                      <p className="text-sm text-slate-600 border-l-2 border-slate-200 pl-4">{t.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission / Vision teaser */}
        <section className="bg-slate-50 py-8 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-950 text-amber-400">
                <Target size={22} />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-indigo-950">Our Mission</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                To deliver compassionate, accessible, and clinically excellent healthcare
                to every patient we serve, regardless of background or circumstance.
              </p>
            </div>
            <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-950 text-amber-400">
                <Eye size={22} />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-indigo-950">Our Vision</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                To be the region's most trusted health system — recognized for
                innovation, integrity, and the wellbeing of the communities we serve.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-8 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-600">What Guides Us</span>
              <div className="mt-3 mx-auto h-[3px] w-14 bg-gradient-to-r from-indigo-950 via-indigo-800 to-amber-500 rounded-full" />
              <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-semibold leading-tight text-indigo-950">
                Our core values
              </h2>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="rounded-2xl bg-slate-50 border border-slate-100 p-6 text-center">
                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-950 text-amber-400">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-4 font-serif text-lg font-semibold text-indigo-950">{v.title}</h3>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

       
      </main>
      <Footer />
    </>
  );
}