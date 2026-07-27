'use client';

import Navbar from '../../components/landing/Navbar';
import Footer from '../../components/landing/Footer';
import {
  BedDouble,
  ScanLine,
  FlaskConical,
  Siren,
  Wifi,
  ParkingCircle,
  UtensilsCrossed,
  Accessibility,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component for optimization

const FACILITIES = [
  {
    title: "Private & Shared Wards",
    desc: "450+ beds across private rooms, shared wards, and ICU suites.",
    icon: BedDouble,
    image: "/images/specialities/1.jpg", // Path from public folder
  },
  {
    title: "Advanced Imaging Center",
    desc: "On-site MRI, CT, X-ray, and ultrasound for same-day diagnostics.",
    icon: ScanLine,
    image: "/images/specialities/2.jpg",
  },
  {
    title: "In-House Laboratory",
    desc: "Full diagnostic lab with rapid turnaround on routine and specialty tests.",
    icon: FlaskConical,
    image: "/images/specialities/3.jpg",
  },
  {
    title: "24/7 Emergency Wing",
    desc: "Dedicated trauma bay, ambulance bay, and round-the-clock ER staff.",
    icon: Siren,
    image: "/images/specialities/4.jpg",
  },
];

const AMENITIES = [
  { label: "Free Wi-Fi Throughout", icon: Wifi },
  { label: "On-Site Parking", icon: ParkingCircle },
  { label: "Patient Cafeteria", icon: UtensilsCrossed },
  { label: "Wheelchair Accessible", icon: Accessibility },
];

// Gallery images with their paths
const GALLERY_IMAGES = [
  { src: "/images/hospital.jpg" },
  { src: "/images/specialities/1.jpg" },
  { src: "/images/specialities/2.jpg" },
  { src: "/images/specialities/3.jpg" },
  { src: "/images/specialities/4.jpg" },
  { src: "/images/specialities/5.jpg" },
  { src: "/images/specialities/6.jpg" },
  { src: "/images/specialities/7.jpg" },
  { src: "/images/specialities/8.jpg" },
];

export default function Facilities() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden py-12 sm:py-16">
          <img
            src="/images/specialities/4.jpg" // Updated path
            alt="Meridian Hospital facilities"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-400">Our Facilities</span>
            <h1 className="mt-5 font-serif text-4xl sm:text-5xl font-semibold leading-tight text-white">
              Modern infrastructure, built for healing.
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-slate-200">
              From advanced imaging to comfortable recovery wards, every space at
              Meridian is designed around patient comfort and clinical precision.
            </p>
          </div>
        </section>

        {/* Facility cards */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {FACILITIES.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="group relative overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={f.image} // Using local image path
                        alt={f.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      <span className="absolute bottom-4 left-5 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 text-slate-950 shadow-md">
                        <Icon size={20} />
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-semibold text-indigo-950">{f.title}</h3>
                      <p className="mt-2 text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="bg-slate-50 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-600">Patient Comfort</span>
              <div className="mt-3 mx-auto h-[3px] w-14 bg-gradient-to-r from-indigo-950 via-indigo-800 to-amber-500 rounded-full" />
              <h2 className="mt-5 font-serif text-3xl sm:text-4xl font-semibold leading-tight text-indigo-950">
                Everyday comforts, thoughtfully included
              </h2>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {AMENITIES.map((a) => {
                const Icon = a.icon;
                return (
                  <div key={a.label} className="flex flex-col items-center text-center rounded-2xl bg-white border border-slate-100 shadow-sm p-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-950 text-amber-400">
                      <Icon size={20} />
                    </span>
                    <p className="mt-4 text-sm font-medium text-indigo-950">{a.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between gap-6 mb-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-600">Take a Look Inside</span>
                <h2 className="mt-3 font-serif text-3xl font-semibold text-indigo-950">Campus Gallery</h2>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {GALLERY_IMAGES.map((image, i) => (
                <div
                  key={i}
                  className={`rounded-xl overflow-hidden ${i === 0 ? "col-span-2 row-span-2" : ""}`}
                >
                  <img
                    src={image.src} // Using local image path
                    alt="Meridian Hospital facility"
                    className="h-full w-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-12 sm:py-16">
          <img
            src="/images/hospital.jpg" // Changed to local image
            alt="Background"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/70 to-black/60" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-white">Want to see it in person?</h3>
              <p className="mt-1.5 text-sm text-slate-300">Schedule a tour or book your first appointment.</p>
            </div>
            <Link
              href="/book-appointment"
              className="flex flex-shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-7 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:from-amber-400 hover:to-amber-500"
            >
              Book an Appointment
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}