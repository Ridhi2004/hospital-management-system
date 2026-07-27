'use client';

import { CheckCircle2, PlayCircle } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const POINTS = [
  "Board-certified specialists across 9 core departments",
  "State-of-the-art diagnostic & imaging technology",
  "Patient-first care model with dedicated case managers",
  "Seamless referrals between departments, no repeat paperwork",
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-white py-8 sm:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Image collage */}
          <div 
            className={`relative transform transition-all duration-700 delay-100 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}
          >
            <div className="grid grid-cols-5 grid-rows-6 gap-4 h-[440px] sm:h-[520px]">
              <div className="col-span-3 row-span-4 rounded-2xl overflow-hidden shadow-lg group">
                <img
                  src="./images/1.jpg"
                  alt="Meridian Hospital reception"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="col-span-2 row-span-3 col-start-4 rounded-2xl overflow-hidden shadow-lg group">
                <img
                  src="./images/2.jpg"
                  alt="Doctor consulting a patient"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="col-span-2 row-span-3 col-start-4 row-start-4 rounded-2xl overflow-hidden shadow-lg group">
                <img
                  src="./images/3.jpg"
                  alt="Modern medical equipment"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="col-span-3 row-span-2 row-start-5 rounded-2xl overflow-hidden shadow-lg relative group cursor-pointer">
                <img
                  src="./images/4.jpg"
                  alt="Hospital surgical team"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-indigo-950/40 flex items-center justify-center transition-all duration-300 group-hover:bg-indigo-950/55">
                  <PlayCircle 
                    size={44} 
                    className="text-white drop-shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:text-amber-400" 
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 rounded-2xl bg-indigo-950 px-6 py-5 shadow-xl animate-bounce-slow">
              <p className="font-serif text-3xl font-bold text-amber-400 leading-none">27+</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-300">Years of Excellence</p>
            </div>
          </div>

          {/* Copy */}
          <div>
            {/* Badge */}
            <div 
              className={`transform transition-all duration-700 delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-amber-600">
                About Meridian
              </span>
            </div>

            {/* Divider */}
            <div 
              className={`mt-3 h-[3px] w-14 bg-gradient-to-r from-indigo-950 via-indigo-800 to-amber-500 rounded-full transform transition-all duration-700 delay-300 origin-left ${
                isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
              }`} 
            />

            {/* Heading */}
            <h2 
              className={`mt-5 font-serif text-3xl sm:text-4xl font-semibold leading-tight text-indigo-950 transform transition-all duration-700 delay-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            >
              A health system built around
              <span className="text-amber-600"> the whole person.</span>
            </h2>

            {/* Description */}
            <p 
              className={`mt-5 text-base leading-relaxed text-slate-600 text-justify transform transition-all duration-700 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            >
              Since 1998, Meridian Hospital &amp; Health System has grown from a single
              community clinic into a full-service medical campus. Our philosophy is
              simple: combine clinical excellence with genuine compassion, so every
              patient leaves feeling heard, healed, and cared for.
            </p>

            {/* Points list */}
            <ul className="mt-7 space-y-3.5">
              {POINTS.map((point, index) => (
                <li 
                  key={point} 
                  className={`flex items-start gap-3 transform transition-all duration-700 delay-${index * 100 + 600} ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
                  } group`}
                >
                  <CheckCircle2 
                    size={20} 
                    className="mt-0.5 flex-shrink-0 text-amber-500 transition-all duration-300 group-hover:scale-125 group-hover:text-amber-600" 
                  />
                  <span className="text-sm sm:text-[0.95rem] text-slate-700 transition-colors duration-300 group-hover:text-slate-900">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Bottom row */}
            <div 
              className={`mt-9 flex flex-wrap items-center gap-4 transform transition-all duration-700 delay-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full bg-indigo-950 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-indigo-900 active:scale-[0.97] hover:shadow-lg hover:shadow-indigo-950/20 group"
              >
                More About Us
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {["doc-a", "doc-b", "doc-c"].map((seed, index) => (
                    <img
                      key={seed}
                      src={`https://picsum.photos/seed/${seed}/80/80`}
                      alt="Meridian physician"
                      className={`h-9 w-9 rounded-full border-2 border-white object-cover shadow-sm transition-all duration-300 hover:scale-110 hover:z-10 hover:border-amber-400 ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ 
                        transitionDelay: `${index * 100 + 1100}ms`,
                        transitionProperty: 'opacity, transform, border-color'
                      }}
                    />
                  ))}
                </div>
                <span className="text-sm text-slate-500">120+ physicians on staff</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}