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
  title: { absolute: "KreativLabs.id — 1st Anniversary" },
  openGraph: {
    title: "1 Tahun KreativLabs — Promo Anniversary",
    description: "Ada kesempatan landing page gratis untuk satu usaha terpilih dan diskon paket hingga 10 November 2026.",
    url: "https://www.kreativlabs.id/",
    siteName: "KreativLabs.id",
    type: "website",
    images: [{ url: "/anniversary-social.png", width: 1200, height: 630, alt: "Promo anniversary pertama KreativLabs bersama maskot Koda" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "1 Tahun KreativLabs — Promo Anniversary",
    description: "Kesempatan landing page gratis untuk satu usaha terpilih dan diskon paket hingga 10 November 2026.",
    images: ["/anniversary-social.png"],
  },
  alternates: {
    canonical: "https://www.kreativlabs.id/",
    languages: {
      "id-ID": "https://www.kreativlabs.id/",
      "en-US": "https://www.kreativlabs.id/en",
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
