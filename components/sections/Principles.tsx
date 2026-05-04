"use client";

import { Zap, Shield, Heart, TrendingUp } from "lucide-react";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useTheme } from "next-themes";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";

const principles = [
  {
    icon: TrendingUp,
    title: "Cegah Kebocoran Profit",
    description: "Transparansi kas 100% dan sinkronisasi stok presisi untuk memastikan setiap rupiah masuk ke kantong Anda.",
  },
  {
    icon: Zap,
    title: "Otomatisasi 24/7",
    description: "Hemat biaya admin dengan asisten reservasi cerdas dan bot WhatsApp yang bekerja tanpa henti.",
  },
  {
    icon: Shield,
    title: "Keputusan Berbasis Data",
    description: "Laporan analitik harian visual, tidak lagi beroperasi berdasarkan sekadar 'feeling' semata.",
  },
  {
    icon: Heart,
    title: "Dukungan Teknis Prioritas",
    description: "Sistem anti-downtime dan tim support berdedikasi memastikan kasir Anda tidak pernah offline.",
  },
];

export default function Principles() {
  const isMobile = useIsMobile();
  const { resolvedTheme } = useTheme();
  const particleColor = resolvedTheme === "dark" ? "#FFFFFF" : "#94A3B8";
  
  return (
    <section className="relative py-24 bg-background overflow-hidden overflow-x-hidden w-full">
      {/* Lighting Effects */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary rounded-full blur-[120px] opacity-10"></div>
      
      {/* Particles - Desktop Only */}
      {!isMobile && (
        <Particles
          className="absolute inset-0"
          quantity={80}
          ease={80}
          staticity={50}
          color={particleColor}
          size={0.6}
        />
      )}

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Alasan Bisnis Anda <span className="text-primary">Membutuhkan KreativLabs</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <FadeInStagger key={index} index={index} delay={100}>
                <div className="group text-center">
                {/* Icon Container */}
                <div className="relative mb-6 inline-block">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-primary rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  
                  {/* Icon */}
                  <div className="relative w-20 h-20 bg-card border-2 border-primary/30 rounded-full flex items-center justify-center group-hover:border-primary transition-all duration-300">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {principle.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {principle.description}
                </p>
                </div>
              </FadeInStagger>
            );
          })}
        </div>

        {/* Bottom Divider */}
        <div className="mt-16 flex items-center justify-center">
          <div className="h-px w-32 bg-linear-to-r from-transparent via-primary to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
