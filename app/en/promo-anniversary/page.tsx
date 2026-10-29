import type { Metadata } from "next";
import NavbarEN from "@/components/NavbarEN";
import FooterEN from "@/components/sections/en/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnniversaryPromoPage from "@/components/AnniversaryPromoPage";

export const metadata: Metadata = {
  title: "KreativLabs 1st Anniversary Offers",
  description: "Celebrate one year of KreativLabs with a free landing page opportunity, package discounts, and a bonus for returning clients through November 10, 2026.",
  alternates: {
    canonical: "https://www.kreativlabs.id/en/promo-anniversary",
    languages: { "id-ID": "https://www.kreativlabs.id/promo-anniversary", "en-US": "https://www.kreativlabs.id/en/promo-anniversary" },
  },
  openGraph: { title: "KreativLabs 1st Anniversary Offers", description: "A free landing page opportunity, package discounts, and a bonus for returning clients.", url: "https://www.kreativlabs.id/en/promo-anniversary", images: ["/anniversary-blog-cover.png"] },
};

export default function PromoPageEN() {
  return <main className="min-h-screen bg-background"><NavbarEN /><AnniversaryPromoPage english /><FooterEN /><WhatsAppButton /></main>;
}
