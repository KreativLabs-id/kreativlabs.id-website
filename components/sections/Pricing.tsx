"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import OptimizedParticles from "@/components/OptimizedParticles";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";

const pricingPlans = [
  {
    name: "Landing Page",
    price: "300k",
    originalPrice: "600k",
    description: "Landing page profesional untuk bisnis Anda",
    features: [
      "Landing Page Responsif",
      "Modern Design",
      "Fast Loading",
      "SEO Friendly",
      "1 Bulan Support",
      "2 Kali Revisi",
      "Domain terpisah",
    ],
    popular: false,
    badge: "Best untuk UMKM",
  },
  {
    name: "Fullstack Website",
    price: "800k",
    originalPrice: "1.6jt",
    description: "Website lengkap dengan backend & database",
    features: [
      "Multi-page Website",
      "Responsive Design",
      "Modern & Fast Loading",
      "SEO Friendly",
      "Free Domain .com",
      "3 Bulan Support",
      "3 Kali Revisi",
    ],
    popular: true,
    badge: "Most Popular",
  },
  {
    name: "Website Custom",
    price: "2jt",
    originalPrice: "4jt",
    description: "Website custom sesuai kebutuhan bisnis",
    features: [
      "Custom Website Development",
      "Advanced Features",
      "E-Commerce Integration",
      "SEO Optimization",
      "Free Domain .com",
      "6 Bulan Support",
      "Unlimited Revisi",
    ],
    popular: false,
    badge: "Best Value",
  },
  {
    name: "Design Logo",
    price: "79k",
    originalPrice: "158k",
    description: "Desain logo profesional untuk branding",
    features: [
      "Logo Design Profesional",
      "3 Konsep Awal",
      "High Quality Output",
      "File Source (AI/PSD)",
      "3 Kali Revisi",
      "Fast Response",
    ],
    popular: false,
    badge: "Mulai dari",
  },
  {
    name: "Desain Social Media",
    price: "150k",
    originalPrice: "300k",
    description: "Desain konten social media yang menarik",
    features: [
      "Design 5 Post Social Media",
      "Modern & Eye-catching",
      "High Quality Output",
      "File Source (AI/PSD)",
      "2 Kali Revisi",
      "Fast Response",
    ],
    popular: false,
    badge: "Mulai dari",
  },
  {
    name: "UI/UX Design",
    price: "500k",
    originalPrice: "1jt",
    description: "Desain UI/UX profesional untuk aplikasi",
    features: [
      "UI/UX Design Lengkap",
      "Wireframe & Prototype",
      "High Fidelity Mockup",
      "Design System",
      "3 Kali Revisi",
      "Fast Response",
    ],
    popular: false,
    badge: "Mulai dari",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-[#0A192F] overflow-hidden overflow-x-hidden w-full">
      {/* Lighting Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
            <div className="bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-full px-4 py-2">
              <span className="text-[#3B82F6] font-semibold text-sm">💰 Harga Spesial - Terbatas!</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mulai dari <span className="text-[#3B82F6]">79 Ribu</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Harga terjangkau untuk Website Development & Graphic Design. Investasi terbaik untuk bisnis Anda!
          </p>
          </div>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-16 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <FadeInStagger key={index} index={index} delay={100}>
            <Card
              key={index}
              className={`relative bg-[#0F1E37] border-white/10 p-8 transition-all duration-300 flex flex-col h-full ${
                plan.popular
                  ? "border-[#3B82F6] transform scale-105 shadow-xl shadow-[#3B82F6]/20"
                  : "hover:border-[#3B82F6]/50"
              }`}
            >
              {/* Badge */}
              {(plan.popular || plan.badge) && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className={`text-white text-sm font-semibold px-4 py-1 rounded-full ${
                    plan.popular ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-[#3B82F6]"
                  }`}>
                    {plan.badge || "Most Popular"}
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-white/60 text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                {plan.originalPrice && (
                  <div className="mb-2">
                    <span className="text-white/40 line-through text-lg">Rp {plan.originalPrice}</span>
                    <span className="ml-2 bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded-full">Hemat 50%</span>
                  </div>
                )}
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">
                    {plan.price.includes("Mulai") ? plan.price : `Rp ${plan.price}`}
                  </span>
                  {!plan.price.includes("Mulai") && (
                    <span className="text-white/60 ml-2 text-sm">/project</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="shrink-0 w-5 h-5 bg-[#3B82F6]/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <Check className="w-3 h-3 text-[#3B82F6]" />
                    </div>
                    <span className="text-white/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                asChild
                className={`w-full ${
                  plan.popular
                    ? "bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white"
                    : "bg-white/10 hover:bg-white/20 text-white border border-white/20"
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
            <div className="bg-[#3B82F6]/5 border border-[#3B82F6]/20 rounded-xl p-6 max-w-3xl mx-auto">
              <p className="text-white/90 text-base mb-2">
                ✨ <strong>Bonus:</strong> Konsultasi gratis + Free domain .com (paket Professional ke atas)
              </p>
              <p className="text-white/60 text-sm">
                Butuh custom package atau fitur khusus? Hubungi kami untuk penawaran terbaik!
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
