import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Hero from "@/components/sections/Hero";
import HotProducts from "@/components/sections/HotProducts";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import Principles from "@/components/sections/Principles";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://kreativlabs.my.id/",
    languages: {
      "id-ID": "https://kreativlabs.my.id/",
      "en-US": "https://kreativlabs.my.id/en",
    },
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      <Hero />
      <HotProducts />
      <Projects />
      <About />
      <Services />
      <Pricing />
      <Principles />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
