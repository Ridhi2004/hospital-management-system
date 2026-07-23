'use client';

import { Search, CalendarCheck, Stethoscope, FileHeart } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Find Your Specialist",
    desc: "Browse departments or search by symptom to find the right doctor.",
    icon: Search,
  },
  {
    step: "02",
    title: "Book an Appointment",
    desc: "Pick a date and time that works for you — online, in seconds.",
    icon: CalendarCheck,
  },
  {
    step: "03",
    title: "Visit & Get Diagnosed",
    desc: "Meet your care team for a consultation, tests, or treatment.",
    icon: Stethoscope,
  },
  {
    step: "04",
    title: "Follow-Up & Recover",
    desc: "Access your reports and follow-up plan through your patient portal.",
    icon: FileHeart,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-600">
            How It Works
          </span>
          <div className="mt-3 mx-auto h-[3px] w-14 bg-gradient-to-r from-indigo-950 via-indigo-800 to-amber-500 rounded-full" />
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-semibold leading-tight text-indigo-950">
            Getting care shouldn't be complicated.
          </h2>
          <p className="mt-4 text-base text-slate-600">
            From finding a doctor to your follow-up visit, here's the path most
            patients take through Meridian.
          </p>
        </div>

        <div className="mt-16 relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {/* connecting line for desktop */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-indigo-200 via-amber-300 to-indigo-200" />

          {STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.step} className="relative text-center">
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-950 text-amber-400 shadow-lg z-10">
                  <Icon size={26} />
                  <span className="absolute -top-2.5 -right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-amber-500 text-[11px] font-bold text-slate-950 shadow-sm">
                    {s.step}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold text-indigo-950">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed px-2">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}