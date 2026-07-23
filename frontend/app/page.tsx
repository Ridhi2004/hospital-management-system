import Navbar from "./components/landing/Navbar";
import Hero from "./components/landing/Hero";
import Quickstats from "./components/landing/Quickstats";
import About from "./components/landing/About";
import Specialities from "./components/landing/Specialities";
import Whychooseus from "./components/landing/Whychooseus";
import Doctors from "./components/landing/Doctors";
import Howitworks from "./components/landing/Howitworks";
import Testimonial from "./components/landing/Testimonial";
import Faq from "./components/landing/Faq";
import Contact from "./components/landing/Contact";
import Footer from "./components/landing/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Quickstats />
        <About />
        <Specialities />
        <Whychooseus />
        <Doctors />
        <Howitworks />
        <Testimonial />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </>
  );
}