import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnniversaryPromoPage from "@/components/AnniversaryPromoPage";

export const metadata: Metadata = {
  title: "Promo 1st Anniversary KreativLabs",
  description: "Rayakan satu tahun KreativLabs: kesempatan landing page gratis, diskon paket, dan bonus untuk klien lama hingga 10 November 2026.",
  alternates: {
    canonical: "https://www.kreativlabs.id/promo-anniversary",
    languages: { "id-ID": "https://www.kreativlabs.id/promo-anniversary", "en-US": "https://www.kreativlabs.id/en/promo-anniversary" },
  },
  openGraph: { title: "Promo 1st Anniversary KreativLabs", description: "Kesempatan landing page gratis, diskon paket, dan bonus untuk klien lama.", url: "https://www.kreativlabs.id/promo-anniversary", images: [{ url: "/anniversary-social.png", width: 1200, height: 630, alt: "Promo anniversary pertama KreativLabs bersama maskot Koda" }] },
  twitter: { card: "summary_large_image", title: "Promo 1st Anniversary KreativLabs", description: "Kesempatan landing page gratis, diskon paket, dan bonus untuk klien lama.", images: ["/anniversary-social.png"] },
};

export default function PromoPage() {
  return <main className="min-h-screen bg-background"><Navbar /><AnniversaryPromoPage /><Footer /><WhatsAppButton /></main>;
}
