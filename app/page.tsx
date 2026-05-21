import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import Insights from "@/components/Insights";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <Services />
        <About />
        <Testimonials />
        <Insights />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
