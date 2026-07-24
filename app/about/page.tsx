
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  Building2,
  Award,
  Stethoscope,
  Clock,
  ArrowRight,
} from "lucide-react";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
const STATS = [
  { label: "Years of Service", value: "28+" },
  { label: "Specialist Doctors", value: "140+" },
  { label: "Beds", value: "320" },
  { label: "Patients Served Annually", value: "95,000+" },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Patient Safety First",
    description:
      "Every protocol, from admission to discharge, is built around minimizing risk and maximizing clinical accuracy.",
  },
  {
    icon: Users,
    title: "Compassionate Care",
    description:
      "We treat every person who walks through our doors with dignity, empathy, and the time they deserve.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    description:
      "Our specialists pursue continuing education and evidence-based practice to keep outcomes at their best.",
  },
  {
    icon: Building2,
    title: "Community Commitment",
    description:
      "As a regional health system, we invest in outreach, screening camps, and accessible care for underserved areas.",
  },
];

export default function AboutPage() {
  return (
       <>
         <Navbar />
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-amber-50/40 to-white border-b border-amber-100">
        <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
            About Meridian Hospital
          </p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold text-indigo-950 max-w-3xl leading-tight">
            Care built on trust, guided by science, delivered with heart.
          </h1>
          <p className="mt-6 max-w-2xl text-slate-600 text-base sm:text-lg leading-relaxed">
            For almost three decades, Meridian Hospital &amp; Health System has served
            our community with a simple promise: every patient receives the
            attention, expertise, and respect they would want for their own family.
          </p>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 -mt-10 sm:-mt-12 mb-10 relative z-10">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-amber-200/70 shadow-lg rounded-xl m-1.5 px-4 py-6 text-center"
              >
                <div className="font-serif text-2xl sm:text-3xl font-semibold text-amber-600">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-slate-500 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
              Our Story
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-indigo-950">
              A hospital founded on a single question
            </h2>
            <div className="mt-5 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Meridian Hospital opened its doors with a single ward and a handful
                of physicians who shared one belief: that quality healthcare should
                never depend on where you live or what you can afford. That belief
                still shapes every decision we make today.
              </p>
              <p>
                What began as a small general clinic has grown into a full-service
                health system spanning nine specialty departments, a 24/7 emergency
                center, an in-house diagnostic laboratory, and a network of
                affiliated physicians across the region.
              </p>
              <p>
                Yet the scale has never changed the culture. Our nurses still know
                patients by name. Our doctors still sit down and explain, not just
                prescribe. Growth, for us, has always meant reaching more people
                without losing the care that got us here.
              </p>
            </div>
            <Link
              href="/about/mission-vision"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
            >
              Read our mission &amp; vision
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-amber-50/60 border border-amber-100 p-6">
              <Stethoscope className="h-8 w-8 text-amber-600" />
              <h3 className="mt-4 font-serif text-lg font-semibold text-indigo-950">
                Multi-specialty Expertise
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Nine dedicated departments working together on complex, cross-disciplinary cases.
              </p>
            </div>
            <div className="rounded-xl bg-amber-50/60 border border-amber-100 p-6 sm:mt-8">
              <Clock className="h-8 w-8 text-amber-600" />
              <h3 className="mt-4 font-serif text-lg font-semibold text-indigo-950">
                Always Open
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Emergency and ambulance services staffed around the clock, every day of the year.
              </p>
            </div>
            <div className="rounded-xl bg-amber-50/60 border border-amber-100 p-6">
              <Users className="h-8 w-8 text-amber-600" />
              <h3 className="mt-4 font-serif text-lg font-semibold text-indigo-950">
                Community Rooted
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Regular screening camps and outreach programs across underserved areas.
              </p>
            </div>
            <div className="rounded-xl bg-amber-50/60 border border-amber-100 p-6 sm:mt-8">
              <Award className="h-8 w-8 text-amber-600" />
              <h3 className="mt-4 font-serif text-lg font-semibold text-indigo-950">
                Accredited Care
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Recognized standards in patient safety, hygiene, and clinical governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
              What Guides Us
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-indigo-950">
              Our core values
            </h2>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-amber-500 text-slate-950">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 font-serif text-base font-semibold text-indigo-950">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 px-6 sm:px-12 py-12 sm:py-14 text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10" />
          <div className="absolute -bottom-14 -left-14 h-48 w-48 rounded-full bg-white/10" />
          <h2 className="relative font-serif text-2xl sm:text-3xl font-semibold text-slate-950">
            Want to know more about our team and facilities?
          </h2>
          <p className="relative mt-3 text-slate-900/70 max-w-xl mx-auto">
            Explore our management team, our departments, and the infrastructure
            behind the care we provide.
          </p>
          <div className="relative mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/about/management"
              className="rounded-full bg-indigo-950 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-900 transition-colors"
            >
              Meet the Team
            </Link>
            <Link
              href="/book-appointment"
              className="rounded-full bg-white px-6 py-2.5 text-sm font-bold text-indigo-950 hover:bg-slate-100 transition-all"
            >
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
    
         <Footer />
          </>
  );
}