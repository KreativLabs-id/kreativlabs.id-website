import type { Metadata } from "next";
import NavbarEN from "@/components/NavbarEN";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroEN from "@/components/sections/en/Hero";
import HotProductsEN from "@/components/sections/en/HotProducts";
import ProjectsEN from "@/components/sections/en/Projects";
import AboutEN from "@/components/sections/en/About";
import ServicesEN from "@/components/sections/en/Services";
import PricingEN from "@/components/sections/en/Pricing";
import PrinciplesEN from "@/components/sections/en/Principles";
import TestimonialsEN from "@/components/sections/en/Testimonials";
import FAQEN from "@/components/sections/en/FAQ";
import ContactEN from "@/components/sections/en/Contact";
import FooterEN from "@/components/sections/en/Footer";

export const metadata: Metadata = {
  title: { absolute: "KreativLabs.id — 1st Anniversary" },
  openGraph: {
    title: "KreativLabs 1st Anniversary Offers",
    description: "A free landing page for one selected business and package discounts through November 10, 2026.",
    url: "https://www.kreativlabs.id/en",
    siteName: "KreativLabs.id",
    type: "website",
    images: [{ url: "/anniversary-social.png", width: 1200, height: 630, alt: "KreativLabs first anniversary offers with Koda the mascot" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "KreativLabs 1st Anniversary Offers",
    description: "A free landing page for one selected business and package discounts through November 10, 2026.",
    images: ["/anniversary-social.png"],
  },
};

export default function HomeEN() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden w-full max-w-[100vw]">
      <NavbarEN />
      <HeroEN />
      <HotProductsEN />
      <ProjectsEN />
      <AboutEN />
      <ServicesEN />
      <PricingEN />
      <PrinciplesEN />
      <TestimonialsEN />
      <FAQEN />
      <ContactEN />
      <FooterEN />
      <WhatsAppButton />
    </main>
  );
}
