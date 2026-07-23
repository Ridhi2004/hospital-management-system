'use client';

import { ShieldCheck, Clock3, HeartHandshake, Microscope, BadgeDollarSign, Users2 } from "lucide-react";
import { useState, useEffect } from "react";

const FEATURES = [
  {
    title: "Certified Specialists",
    desc: "Every physician is board-certified and continually trained on the latest protocols.",
    icon: ShieldCheck,
  },
  {
    title: "24/7 Emergency Response",
    desc: "A fully staffed emergency wing and ambulance fleet, ready around the clock.",
    icon: Clock3,
  },
  {
    title: "Patient-Centered Care",
    desc: "Personalized treatment plans built around your history, not a one-size template.",
    icon: HeartHandshake,
  },
  {
    title: "Advanced Diagnostics",
    desc: "In-house imaging and lab work means faster answers and faster treatment.",
    icon: Microscope,
  },
  {
    title: "Transparent Pricing",
    desc: "Clear cost estimates upfront, with insurance support that removes the guesswork.",
    icon: BadgeDollarSign,
  },
  {
    title: "Dedicated Care Teams",
    desc: "A single coordinated team follows your case from admission to recovery.",
    icon: Users2,
  },
];

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-indigo-950 py-20 sm:py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl animate-pulse" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
          {/* Image */}
          <div 
            className={`relative transform transition-all duration-700 delay-100 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="./images/why.jpg"
                alt="Meridian care team with a patient"
                className="w-full h-[420px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.src = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-7 -right-6 sm:-right-10 rounded-2xl bg-white p-5 shadow-xl max-w-[220px] transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-bounce-slow">
              <div className="flex -space-x-2.5 mb-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                    alt="Patient"
                    className="h-8 w-8 rounded-full border-2 border-white object-cover transition-transform duration-300 hover:scale-110 hover:z-10"
                  />
                ))}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <span className="font-serif text-base font-semibold text-indigo-950">4.9/5</span> average rating from over 8,200 patients
              </p>
            </div>
          </div>

          {/* Features */}
          <div>
            {/* Badge */}
            <div 
              className={`transform transition-all duration-700 delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-400">
                Why Choose Meridian
              </span>
            </div>
            
            {/* Divider */}
            <div 
              className={`mt-3 h-[3px] w-14 bg-gradient-to-r from-amber-500 via-amber-400 to-white/40 rounded-full transform transition-all duration-700 delay-300 origin-left ${
                isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
              }`} 
            />
            
            {/* Heading */}
            <h2 
              className={`mt-5 font-serif text-3xl sm:text-4xl font-semibold leading-tight text-white transform transition-all duration-700 delay-400 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            >
              Care that earns your trust, every visit.
            </h2>

            {/* Features Grid */}
            <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-8">
              {FEATURES.map((f, index) => {
                const Icon = f.icon;
                return (
                  <div 
                    key={f.title} 
                    className={`flex gap-4 group transform transition-all duration-700 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 500}ms` }}
                  >
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-amber-400 border border-white/10 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-indigo-950 group-hover:border-amber-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-amber-500/20">
                      <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-white text-[0.98rem] transition-colors duration-300 group-hover:text-amber-400">
                        {f.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-slate-300 leading-relaxed transition-colors duration-300 group-hover:text-slate-200">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}