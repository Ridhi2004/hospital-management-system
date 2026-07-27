'use client';

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const TESTIMONIALS = [
  {
    name: "Sabina Rai",
    role: "Cardiology Patient",
    seed: "patient-sabina",
    quote:
      "The cardiology team caught an issue my previous clinic missed entirely. I felt genuinely cared for from my first appointment to my last checkup.",
    rating: 5,
  },
  {
    name: "Bikash Shrestha",
    role: "Orthopedics Patient",
    seed: "patient-bikash",
    quote:
      "After my knee surgery, the follow-up care was outstanding. The physiotherapy team had me walking pain-free within weeks.",
    rating: 5,
  },
  {
    name: "Namrata Adhikari",
    role: "Pediatrics Parent",
    seed: "patient-namrata",
    quote:
      "The pediatric ward is warm and welcoming — my daughter actually looks forward to her checkups now, which says everything.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActive((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const current = TESTIMONIALS[active];

  return (
    <section className="bg-indigo-950 py-20 sm:py-28 relative overflow-hidden">
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-400">
          Patient Stories
        </span>
        <div className="mt-3 mx-auto h-[3px] w-14 bg-gradient-to-r from-amber-500 via-amber-400 to-white/40 rounded-full" />
        <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-semibold leading-tight text-white">
          Real experiences, real recoveries.
        </h2>

        <div className="mt-14 rounded-3xl bg-white/[0.06] border border-white/10 backdrop-blur-sm px-6 sm:px-14 py-10 sm:py-14">
          <Quote size={40} className="mx-auto text-amber-500/40" />

          <p className="mt-6 font-serif text-xl sm:text-2xl leading-relaxed text-white">
            "{current.quote}"
          </p>

          <div className="mt-8 flex items-center justify-center gap-1">
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-3.5">
            <img
              src={`https://picsum.photos/seed/${current.seed}/100/100`}
              alt={current.name}
              className="h-12 w-12 rounded-full object-cover border-2 border-amber-500/50"
            />
            <div className="text-left">
              <p className="font-semibold text-white text-sm">{current.name}</p>
              <p className="text-xs text-slate-400">{current.role}</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial from ${t.name}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-6 bg-amber-500" : "w-2 bg-white/25"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}