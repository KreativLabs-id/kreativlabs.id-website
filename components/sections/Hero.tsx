"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Sparkles, Code2, Palette } from "lucide-react";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { useIsMobile } from "@/hooks/useIsMobile";
import FadeInStagger from "@/components/FadeInStagger";
import AnimatedSection from "@/components/AnimatedSection";
import { useInView } from "framer-motion";

export default function Hero() {
  const isMobile = useIsMobile();
  const [hasMounted, setHasMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "200px" });

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen pt-20 pb-16 bg-[#0A192F] overflow-hidden flex items-center justify-center"
      aria-label="Jasa Website Murah dan Desain Grafis Profesional"
    >
      {/* Gradient overlay for better text readability and smooth bottom transition */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0A192F]/50 via-[#0A192F]/10 to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A192F] to-transparent pointer-events-none z-0" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            {/* Main Heading */}
            <AnimatedSection animation="fade-up" delay={150} duration={800}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.15] tracking-tight">
                Website & <br className="block md:hidden" /> Desain Grafis
                <br />
                <span className="relative inline-block mt-2">
                  <span className="text-[#3B82F6]">Untuk Bisnis Anda</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 300 8" fill="none">
                    <path d="M1 6C50 2 100 1 150 2C200 3 250 4 299 6" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </AnimatedSection>

            {/* Subheading */}
            <AnimatedSection animation="fade-up" delay={300} duration={800}>
              <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed px-2">
                Jasa pembuatan website profesional dan desain grafis (logo, poster, sosmed, packaging) dengan harga terjangkau mulai dari 50 ribu!
              </p>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection animation="fade-up" delay={450} duration={800}>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center w-full">
                <Button
                  asChild
                  className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-7 py-6 text-base rounded-full group shadow-lg shadow-[#3B82F6]/25 hover:shadow-xl hover:shadow-[#3B82F6]/40 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto min-w-[200px]"
                >
                  <a href="#contact" className="flex items-center justify-center gap-2">
                    <span>Mulai Konsultasi</span>
                    <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/40 px-7 py-6 text-base rounded-full backdrop-blur-sm w-full sm:w-auto min-w-[180px] group transition-all duration-300 hover:-translate-y-0.5"
                >
                  <a href="#projects" className="flex items-center justify-center gap-2">
                    <span>Lihat Portfolio</span>
                    <ArrowUpRight className="h-5 w-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
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
          color="#FFFFFF"
          size={0.8}
        />
      )}
    </section>
  );
}
