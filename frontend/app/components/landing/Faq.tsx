'use client';

import { Plus, Minus, MessageCircleQuestion } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const FAQS = [
  {
    q: "Do I need a referral to see a specialist?",
    a: "In most cases no — you can book directly with any specialist through our online system. Some insurance plans may require a referral for full coverage, so it's worth checking with your provider first.",
  },
  {
    q: "What insurance plans does Meridian accept?",
    a: "We work with all major national insurers as well as several international plans. Our billing desk can verify your specific coverage before your appointment so there are no surprises.",
  },
  {
    q: "How do I access my test results?",
    a: "All lab and imaging results are uploaded to your patient portal, typically within 24-48 hours. You'll get a notification by SMS and email as soon as they're ready.",
  },
  {
    q: "Can I reschedule or cancel an appointment?",
    a: "Yes, appointments can be rescheduled or cancelled up to 4 hours in advance at no charge, either through the portal or by calling our front desk directly.",
  },
  {
    q: "Is emergency care available 24 hours a day?",
    a: "Yes. Our Emergency Medicine department and ambulance service operate 24/7, 365 days a year, with a dedicated trauma team always on-site.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="bg-white py-8 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-amber-600">
            <MessageCircleQuestion size={14} />
            FAQ
          </span>
          <div className="mt-3 mx-auto h-[3px] w-14 bg-gradient-to-r from-indigo-950 via-indigo-800 to-amber-500 rounded-full" />
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-semibold leading-tight text-indigo-950">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className={`rounded-xl border transition-colors duration-300 ${
                  isOpen ? "border-indigo-950/20 bg-slate-50" : "border-slate-200 bg-white"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left"
                >
                  <span className="font-medium text-[0.95rem] sm:text-base text-indigo-950">{item.q}</span>
                  <span
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                      isOpen ? "bg-amber-500 text-slate-950" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 text-sm leading-relaxed text-slate-600">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 rounded-2xl bg-slate-50 border border-slate-200 px-6 py-6 text-center sm:text-left">
          <p className="text-sm text-slate-600">
            Still have questions? Our patient support team is happy to help.
          </p>
          <Link
            href="/contact"
            className="flex-shrink-0 rounded-full bg-indigo-950 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-900"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}