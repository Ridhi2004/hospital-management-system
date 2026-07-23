import { Target, Eye, Heart, ShieldCheck, Lightbulb, HandHeart } from "lucide-react";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer";

const CORE_COMMITMENTS = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We listen before we treat, and we never let a patient feel like a number.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Honest diagnoses, transparent costs, and accountability at every step of care.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Adopting proven medical advances so our patients benefit from modern medicine.",
  },
  {
    icon: HandHeart,
    title: "Equity",
    description: "Accessible healthcare for every patient, regardless of background or income.",
  },
];

export default function MissionVisionPage() {
  return (
      <>
            <Navbar />
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-indigo-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            Mission &amp; Vision
          </p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold text-white">
            Why we exist, and where we&apos;re headed
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-slate-300 text-base sm:text-lg leading-relaxed">
            Two statements guide every decision at Meridian Hospital, from how we
            train our staff to how we design a patient&apos;s first visit.
          </p>
        </div>
      </section>

      {/* Mission & Vision cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 relative z-10 pb-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 sm:p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-amber-500 text-slate-950">
              <Target size={22} />
            </span>
            <h2 className="mt-5 font-serif text-2xl font-semibold text-indigo-950">
              Our Mission
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              To deliver safe, compassionate, and evidence-based healthcare to every
              patient who comes to us, while treating families with the dignity and
              clarity they deserve during difficult moments. We exist to close the
              gap between the medical care people need and the care they can
              actually reach.
            </p>
          </div>

          <div className="bg-indigo-950 rounded-2xl border border-indigo-900 shadow-xl p-8 sm:p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-[12px] bg-amber-500 text-slate-950">
              <Eye size={22} />
            </span>
            <h2 className="mt-5 font-serif text-2xl font-semibold text-white">
              Our Vision
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              To be the region&apos;s most trusted health system: a place where
              clinical excellence, modern infrastructure, and genuine human care
              meet, and where every community, urban or rural, has a path to
              world-class treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
            How We Live This Out
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-indigo-950">
            Our core commitments
          </h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            A mission statement means little without daily practice behind it.
            These are the commitments our staff are trained and held accountable to.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CORE_COMMITMENTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-slate-200 p-6 hover:border-amber-400 hover:shadow-md transition-all"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-slate-100 text-indigo-950">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 font-serif text-base font-semibold text-indigo-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quote strip */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <svg width="40" height="30" viewBox="0 0 40 30" fill="none" className="mx-auto text-amber-500">
            <path
              d="M0 30V17.6C0 12.13 1.36 7.6 4.08 4C6.8 0.4 10.44 -1 15 -1V6.4C12.44 6.4 10.44 7.36 9 9.28C7.56 11.2 6.84 13.6 6.84 16.48H15V30H0ZM25 30V17.6C25 12.13 26.36 7.6 29.08 4C31.8 0.4 35.44 -1 40 -1V6.4C37.44 6.4 35.44 7.36 34 9.28C32.56 11.2 31.84 13.6 31.84 16.48H40V30H25Z"
              fill="currentColor"
            />
          </svg>
          <p className="mt-6 font-serif text-xl sm:text-2xl text-indigo-950 leading-relaxed">
            Medicine gives us the tools. Compassion decides how we use them. At
            Meridian, we try never to forget the second part.
          </p>
          <p className="mt-4 text-sm font-semibold text-slate-500 uppercase tracking-wide">
            Meridian Hospital &amp; Health System
          </p>
        </div>
      </section>
    </main>
       <Footer />
         </>
  );
}