"use client";

import { useState } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";

interface PricingPlan {
  id: string;
  name: string;
  category: "website" | "design";
  price: string;
  originalPrice?: string;
  description: string;
  badge?: string;
  popular?: boolean;
  features: string[];
  waMessage: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: "landing-page",
    name: "Landing Page",
    category: "website",
    price: "Rp 99.000",
    originalPrice: "Rp 500.000",
    badge: "Best untuk Promo",
    description: "Website satu halaman cepat untuk promosi produk, event, dan validasi ide bisnis.",
    features: [
      "1 Halaman responsif HP & desktop",
      "Loading cepat & ramah SEO dasar",
      "Tombol WhatsApp langsung",
      "Domain & hosting siap pakai",
      "2x Revisi desain",
      "Garansi & panduan penggunaan"
    ],
    waMessage: "Halo KreativLabs, saya ingin pesan paket Landing Page (Rp 99rb)."
  },
  {
    id: "fullstack-website",
    name: "Website Bisnis & Profil",
    category: "website",
    price: "Rp 469.000",
    originalPrice: "Rp 2.000.000",
    badge: "Paling Diminati",
    popular: true,
    description: "Website lengkap multi-halaman untuk profil bisnis, katalog layanan, dan portofolio resmi.",
    features: [
      "Multi-halaman (Beranda, Profil, Layanan, Kontak)",
      "Dashboard admin & manajemen konten",
      "Database terintegrasi & aman",
      "Formulir kontak & Google Maps",
      "Optimasi SEO On-Page",
      "3x Revisi + Support 2 bulan"
    ],
    waMessage: "Halo KreativLabs, saya ingin pesan paket Website Bisnis & Profil (Rp 469rb)."
  },
  {
    id: "custom-website",
    name: "Website Custom",
    category: "website",
    price: "Mulai Rp 2.899.000",
    originalPrice: "Rp 6.000.000",
    badge: "Skala Bisnis",
    description: "Pengembangan sistem web khusus sesuai alur proses bisnis dan kebutuhan operasional Anda.",
    features: [
      "Fitur kustom sesuai kebutuhan bisnis",
      "Integrasi payment gateway & API pihak ketiga",
      "Multi-role user & keamanan teruji",
      "Setup domain .com & cloud hosting",
      "Dokumentasi sistem & pelatihan",
      "Support & maintenance prioritas 3 bulan"
    ],
    waMessage: "Halo KreativLabs, saya ingin konsultasi paket Website Custom."
  },
  {
    id: "design-logo",
    name: "Desain Logo",
    category: "design",
    price: "Mulai Rp 50.000",
    originalPrice: "Rp 250.000",
    badge: "Hemat 80%",
    description: "Desain logo profesional original untuk membangun identitas visual usaha yang berkarakter.",
    features: [
      "3 Pilihan konsep desain awal",
      "File master vektor (AI, SVG, EPS)",
      "File siap pakai (PNG transparan, JPG High-Res)",
      "Panduan warna & font brand",
      "3x Revisi desain",
      "100% Hak cipta milik klien"
    ],
    waMessage: "Halo KreativLabs, saya ingin pesan paket Desain Logo (Mulai 50rb)."
  },
  {
    id: "social-media",
    name: "Desain Social Media",
    category: "design",
    price: "Rp 150.000",
    originalPrice: "Rp 300.000",
    badge: "Paket 5 Konten",
    description: "Paket konten visual untuk feed dan story Instagram agar tampilan media sosial terlihat rapi.",
    features: [
      "5 Desain post feed / carousel",
      "Template story promosi",
      "Konsistensi visual & warna brand",
      "File master editable (Canva / PSD / AI)",
      "2x Revisi desain",
      "Pengerjaan cepat 2-3 hari"
    ],
    waMessage: "Halo KreativLabs, saya ingin pesan paket Desain Social Media (Rp 150rb)."
  },
  {
    id: "uiux-design",
    name: "UI/UX Design",
    category: "design",
    price: "Mulai Rp 500.000",
    originalPrice: "Rp 1.000.000",
    badge: "Figma Ready",
    description: "Desain tampilan dan alur aplikasi mobile atau website di Figma yang terstruktur dan siap koding.",
    features: [
      "Riset alur pengguna (User Flow)",
      "Wireframe & mockup interaktif",
      "High-Fidelity UI Design",
      "Design System & komponen modular",
      "File Figma rapi siap handoff programmer",
      "3x Revisi desain"
    ],
    waMessage: "Halo KreativLabs, saya ingin konsultasi paket UI/UX Design."
  }
];

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState<"all" | "website" | "design">("all");

  const filteredPlans = pricingPlans.filter(
    (plan) => activeCategory === "all" || plan.category === activeCategory
  );

  return (
    <section id="pricing" className="relative py-16 md:py-20 bg-background overflow-hidden w-full scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">

        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 tracking-tight">
              Pilihan Paket & <span className="text-primary">Investasi Transparan</span>
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Pilih paket yang paling pas untuk kebutuhan Anda. Semua paket dikerjakan dengan standar profesional dan tanpa biaya tersembunyi.
            </p>

            {/* Filter Tabs */}
            <div className="mt-7 inline-flex p-1 rounded-lg bg-secondary/80 border border-border">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`px-3.5 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${activeCategory === "all"
                    ? "bg-card text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                Semua Paket ({pricingPlans.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("website")}
                className={`px-3.5 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${activeCategory === "website"
                    ? "bg-card text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                Paket Website
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("design")}
                className={`px-3.5 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${activeCategory === "design"
                    ? "bg-card text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                Paket Desain Grafis
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredPlans.map((plan, index) => {
            const waUrl = `https://wa.me/6287816270140?text=${encodeURIComponent(plan.waMessage)}`;

            return (
              <FadeInStagger key={plan.id} index={index} delay={40}>
                <div
                  className={`h-full flex flex-col justify-between rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${plan.popular
                      ? "bg-card border-2 border-primary shadow-sm relative"
                      : "bg-card border border-border/80 hover:border-primary/50"
                    }`}
                >
                  <div>
                    {/* Header: Title & Badge */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">
                          {plan.name}
                        </h3>
                        <p className="text-foreground/60 text-xs mt-1 leading-relaxed">
                          {plan.description}
                        </p>
                      </div>

                      {plan.badge && (
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md shrink-0 ${plan.popular
                              ? "bg-primary text-primary-foreground font-bold"
                              : "bg-secondary text-foreground/80 border border-border"
                            }`}
                        >
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    {/* Price Display */}
                    <div className="py-4 my-2 border-y border-border/60">
                      {plan.originalPrice && (
                        <div className="text-xs text-foreground/40 line-through mb-1">
                          {plan.originalPrice}
                        </div>
                      )}
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                          {plan.price}
                        </span>
                      </div>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-2.5 my-4 text-xs sm:text-[13px] text-foreground/75">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 mt-auto">
                    <Button
                      asChild
                      className={`w-full py-5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${plan.popular
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm"
                          : "bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground border border-border"
                        }`}
                    >
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5"
                      >
                        <span>Pesan Paket Ini</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </FadeInStagger>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <AnimatedSection animation="fade-up" delay={150}>
          <div className="mt-14 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/40 transition-colors shadow-xs">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    Punya kebutuhan khusus atau budget tertentu?
                  </h4>
                  <p className="text-xs text-foreground/70 mt-0.5">
                    Konsultasikan ide Anda secara gratis dan fleksibel bersama tim kami.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/6287816270140?text=Halo%20KreativLabs,%20saya%20ingin%20tanya%20paket%20custom"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              >
                Tanya Paket Custom
              </a>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
