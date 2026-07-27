'use client';
import Navbar from '../../components/landing/Navbar';
import Footer from '../../components/landing/Footer';

import { Target, Eye, HeartHandshake, ShieldCheck, Sparkles, Award, Quote } from "lucide-react";

const PILLARS = [
  {
    title: "Patient First",
    desc: "Every decision, from scheduling to treatment planning, starts with what's best for the patient.",
    icon: HeartHandshake,
  },
  {
    title: "Clinical Excellence",
    desc: "Board-certified specialists held to rigorous, continually updated standards of care.",
    icon: Award,
  },
  {
    title: "Transparency",
    desc: "Clear communication about diagnoses, costs, and treatment options — no surprises.",
    icon: ShieldCheck,
  },
  {
    title: "Continuous Innovation",
    desc: "Investing in modern diagnostics and treatment methods to stay ahead of patient needs.",
    icon: Sparkles,
  },
];

export default function MissionVision() {
  return (
    <>
    <Navbar />
    <main className="bg-white">
      {/* Hero - Removed blue background */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <img
          src="../../images/specialities/6.jpg"
          alt="Meridian Hospital care team"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-400">Mission &amp; Vision</span>
          <h1 className="mt-5 font-serif text-4xl sm:text-5xl font-semibold leading-tight text-white">
            What drives everything we do.
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-slate-200">
            Our mission and vision aren't just words on a wall — they shape every
            appointment, every treatment plan, and every hire we make.
          </p>
        </div>
      </section>

      {/* Mission & Vision cards */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
          <div className="relative overflow-hidden rounded-3xl shadow-lg">
            <img
              src="../../images/specialities/2.jpg"
              alt="Care team consulting a patient"
              className="h-56 w-full object-cover"
            />
            <div className="p-8 bg-white border border-t-0 border-slate-100">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-950 text-amber-400">
                <Target size={22} />
              </span>
              <h2 className="mt-5 font-serif text-2xl font-semibold text-indigo-950">Our Mission</h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                To deliver compassionate, accessible, and clinically excellent
                healthcare to every patient we serve — regardless of background,
                income, or circumstance — while treating every person who walks
                through our doors with dignity and respect.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-lg">
            <img
              src="../../images/specialities/7.jpg"
              alt="Modern hospital facility"
              className="h-56 w-full object-cover"
            />
            <div className="p-8 bg-white border border-t-0 border-slate-100">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-950 text-amber-400">
                <Eye size={22} />
              </span>
              <h2 className="mt-5 font-serif text-2xl font-semibold text-indigo-950">Our Vision</h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                To be the region's most trusted health system — recognized for
                clinical innovation, ethical integrity, and a measurable, lasting
                impact on the wellbeing of every community we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-600">How We Deliver</span>
            <div className="mt-3 mx-auto h-[3px] w-14 bg-gradient-to-r from-indigo-950 via-indigo-800 to-amber-500 rounded-full" />
            <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-semibold leading-tight text-indigo-950">
              Four pillars behind our promise
            </h2>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-950 text-amber-400">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-indigo-950">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership quote - Changed background to dark gradient instead of blue */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        <img
          src="../../images/Hospital.jpg"
          alt="Background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/70 to-black/60" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote size={40} className="mx-auto text-amber-500/40" />
          <p className="mt-6 font-serif text-xl sm:text-2xl leading-relaxed text-white">
            "We measure success not in beds filled, but in patients who leave
            healthier, informed, and treated with the dignity they deserve."
          </p>
          <div className="mt-6 flex items-center justify-center gap-3.5">
            <img
              src="../../images/doctor/1.jpg"
              alt="Meridian Hospital Director"
              className="h-12 w-12 rounded-full object-cover border-2 border-amber-500/50"
            />
            <div className="text-left">
              <p className="font-semibold text-white text-sm">Dr. Meera Bhandari</p>
              <p className="text-xs text-slate-300">Chief Executive Officer</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}