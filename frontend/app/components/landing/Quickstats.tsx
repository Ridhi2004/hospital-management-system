'use client';

import { Users, BedDouble, Award, Clock3 } from "lucide-react";
import { useState, useEffect } from "react";

const STATS = [
  { label: "Specialist Doctors", value: "120+", icon: Users },
  { label: "Beds & Facilities", value: "450+", icon: BedDouble },
  { label: "Years of Service", value: "27", icon: Award },
  { label: "Emergency Care", value: "24/7", icon: Clock3 },
];

export default function QuickStats() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative -mt-12 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 rounded-2xl bg-white shadow-xl shadow-indigo-950/10 border border-slate-100 p-5 sm:p-7 transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex items-center gap-4 px-2 sm:px-4 py-2 transform transition-all duration-500 delay-${i * 100 + 200} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                } ${
                  i !== 0 ? "sm:border-l sm:border-slate-200" : ""
                } ${i === 2 ? "border-l border-slate-200 sm:border-l" : ""} group hover:bg-slate-50/50 rounded-lg transition-colors duration-300`}
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-950 text-amber-400 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:bg-indigo-900 group-hover:text-amber-300">
                  <Icon size={22} className="transition-transform duration-300 group-hover:scale-110" />
                </span>
                <div>
                  <p className="font-serif text-2xl sm:text-[1.7rem] font-semibold leading-none text-indigo-950 transition-all duration-300 group-hover:text-amber-600">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-xs sm:text-sm font-medium text-slate-500 transition-colors duration-300 group-hover:text-slate-700">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}