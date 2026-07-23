'use client';

import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";

const INFO_CARDS = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Maitighar, Kathmandu, Nepal",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+977 9861619210",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@meridianhospital.com",
  },
  {
    icon: Clock,
    label: "Emergency",
    value: "Open 24/7, all week",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-600">
            Get In Touch
          </span>
          <div className="mt-3 mx-auto h-[3px] w-14 bg-gradient-to-r from-indigo-950 via-indigo-800 to-amber-500 rounded-full" />
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-semibold leading-tight text-indigo-950">
            We're here whenever you need us.
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INFO_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div key={card.label} className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-950 text-amber-400">
                  <Icon size={20} />
                </span>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-400">{card.label}</p>
                <p className="mt-1 font-medium text-indigo-950 text-sm">{card.value}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Form */}
          <div className="rounded-2xl bg-white shadow-sm border border-slate-100 p-7 sm:p-9">
            <h3 className="font-serif text-xl font-semibold text-indigo-950">Send us a message</h3>
            <p className="mt-1.5 text-sm text-slate-500">We typically respond within one business day.</p>

            {submitted ? (
              <div className="mt-8 rounded-xl bg-emerald-50 border border-emerald-200 px-5 py-6 text-center">
                <p className="font-semibold text-emerald-800">Thanks — your message has been sent!</p>
                <p className="mt-1 text-sm text-emerald-700">Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-700 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+977 9800000000"
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-700 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-700 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-slate-500 mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="How can we help?"
                    className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-700 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-sm transition-all duration-300 hover:from-amber-400 hover:to-amber-500 active:scale-[0.98]"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-100 min-h-[380px] relative">
            <iframe
              title="Meridian Hospital location map"
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              src="https://www.google.com/maps?q=Maitighar,Kathmandu,Nepal&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}