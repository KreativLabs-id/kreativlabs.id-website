"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles, Code2, Palette } from "lucide-react";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useTheme } from "next-themes";
import FadeInStagger from "@/components/FadeInStagger";
import AnimatedSection from "@/components/AnimatedSection";
import { useInView } from "framer-motion";

export default function Hero() {
  const isMobile = useIsMobile();
  const [hasMounted, setHasMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "200px" });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen pt-20 pb-16 bg-background overflow-hidden flex items-center justify-center"
      aria-label="Sistem Otomatisasi dan Aplikasi UMKM"
    >
      {/* Gradient overlay for better text readability and smooth bottom transition */}
      <div className="absolute inset-0 bg-linear-to-b from-background/50 via-background/10 to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-0" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            {/* Minimalist Badge */}
            <AnimatedSection animation="fade-up" delay={50} duration={800}>
               <div className="inline-flex items-center rounded-full border border-border/50 bg-secondary/50 px-3 py-1 text-sm font-medium text-muted-foreground mb-8">
                 <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                 Otomatisasi UMKM Paling Modern
               </div>
            </AnimatedSection>
          
            {/* Main Heading */}
            <AnimatedSection animation="fade-up" delay={150} duration={800}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-[-0.02em]">
                Otomatisasi Operasional<br className="hidden md:block" /> Bisnis Anda
                <br />
                <span className="text-primary font-medium tracking-tight">Dalam Satu Ekosistem</span>
              </h1>
            </AnimatedSection>

            {/* Subheading */}
            <AnimatedSection animation="fade-up" delay={300} duration={800}>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
                KreativLabs menghadirkan aplikasi kasir, manajemen stok, dan sistem reservasi pintar. Hentikan kebocoran profit dan lipatgandakan produktivitas Anda hari ini.
              </p>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection animation="fade-up" delay={450} duration={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-sm font-medium rounded-full shadow-sm hover:-translate-y-0.5 transition-all w-full sm:w-auto"
                >
                  <a href="#contact">
                    Mulai Konsultasi Gratis
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-transparent border-border/50 hover:bg-secondary/80 text-foreground px-8 py-6 text-sm font-medium rounded-full shadow-none hover:-translate-y-0.5 transition-all w-full sm:w-auto"
                >
                  <a href="#projects">
                    Jelajahi Fitur
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Interactive Particles - Desktop Only */}
      {hasMounted && !isMobile && (
        <Particles
          className="absolute inset-0"
          quantity={30}
          ease={80}
          staticity={50}
          color={resolvedTheme === "dark" ? "#FFFFFF" : "#94A3B8"}
          size={0.8}
        />
      )}
    </section>
  );
}
