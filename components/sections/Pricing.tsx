"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import OptimizedParticles from "@/components/OptimizedParticles";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";

const pricingPlans = [
  {
    name: "AppStarter",
    price: "Hubungi Kami",
    originalPrice: "",
    description: "Fondasi digital untuk UMKM yang siap meninggalkan sistem manual. Kelola operasional harian dan bangun kredibilitas profesional dalam satu platform.",
    features: [
      "Maksimal 3 User/Kasir",
      "Laporan Penjualan Harian",
      "Integrasi Printer Thermal",
      "Cloud Database 5GB",
    ],
    popular: false,
    badge: "Mulai Transformasi",
  },
  {
    name: "AppGrowth",
    price: "Hubungi Kami",
    originalPrice: "",
    description: "Akselerasi performa bisnis dengan kekuatan data. Otomatisasi laporan penjualan dan analisis tren pelanggan secara real-time untuk keputusan akurat.",
    features: [
      "Maksimal 10 User/Kasir",
      "Sinkronisasi Multi-Cabang",
      "Manajemen Stok Real-time",
      "Analitik & Tren Pelanggan",
    ],
    popular: true,
    badge: "Most Popular",
  },
  {
    name: "AppScale",
    price: "Hubungi Kami",
    originalPrice: "",
    description: "Sistem manajemen enterprise untuk skalabilitas tanpa batas. Kontrol penuh multi-cabang dan integrasi API menyeluruh untuk ekosistem bisnis sinkron.",
    features: [
      "Unlimited User/Kasir",
      "Custom API Gateway",
      "Integrasi Marketplace (Shopee/Tokped)",
      "Dedicated Server & Support 24/7",
    ],
    popular: false,
    badge: "Skala Enterprise",
  },
];

export default function Pricing() {
  const parsePrice = (price: string) => {
    const cleanPrice = price.replace(/,/g, ''); // remove commas
    if (cleanPrice.includes('jt')) {
      return parseFloat(cleanPrice.replace('jt', '')) * 1000000;
    } else if (cleanPrice.includes('k')) {
      return parseFloat(cleanPrice.replace('k', '')) * 1000;
    }
    return parseFloat(cleanPrice);
  };

  const calculateSavings = (original: string, current: string) => {
    const orig = parsePrice(original);
    const curr = parsePrice(current);
    return Math.round(((orig - curr) / orig) * 100);
  };

  return (
    <section id="pricing" className="relative py-24 bg-background overflow-hidden overflow-x-hidden w-full">
      {/* Lighting Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary rounded-full blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
            <div className="bg-primary/10 border border-primary/30 rounded-full px-4 py-2">
              <span className="text-primary font-semibold text-sm">💰 Harga Spesial - Terbatas!</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Paket <span className="text-primary">Layanan Terintegrasi</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Pilih paket yang paling sesuai dengan tingkat pertumbuhan dan kebutuhan bisnis Anda saat ini.
          </p>
          </div>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-16 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <FadeInStagger key={index} index={index} delay={100}>
            <Card
              key={index}
              className={`relative bg-card border-foreground/10 p-8 transition-all duration-300 flex flex-col h-full ${
                plan.popular
                  ? "border-primary transform scale-105 shadow-xl shadow-primary/20"
                  : "hover:border-primary/50"
              }`}
            >
              {/* Badge */}
              {(plan.popular || plan.badge) && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className={`text-foreground text-sm font-semibold px-4 py-1 rounded-full ${
                    plan.popular ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-primary"
                  }`}>
                    {plan.badge || "Most Popular"}
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-foreground/60 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                {plan.originalPrice && (
                  <div className="mb-2">
                    <span className="text-foreground/40 line-through text-lg">Rp {plan.originalPrice}</span>
                    <span className="ml-2 bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded-full">Hemat {calculateSavings(plan.originalPrice, plan.price)}%</span>
                  </div>
                )}
                <div>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-foreground">
                      {plan.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="shrink-0 w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                asChild
                className={`w-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-foreground/10 hover:bg-foreground/20 text-foreground border border-foreground/20"
                }`}
              >
                <a href="#contact">Pesan Sekarang</a>
              </Button>
            </Card>
            </FadeInStagger>
          ))}
        </div>

        {/* Additional Info */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="text-center mt-12">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 max-w-3xl mx-auto">
              <p className="text-foreground/90 text-base mb-2">
                ✨ <strong>Bonus:</strong> Sesi Konsultasi Strategi Digital Eksklusif
              </p>
              <p className="text-foreground/60 text-sm">
                Hubungi kami untuk mendapatkan penawaran harga terbaik yang disesuaikan dengan kebutuhan Anda.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
      
      {/* Interactive Particles - Desktop Only */}
      <OptimizedParticles quantity={50} />
    </section>
  );
}
