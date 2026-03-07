"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2, Palette } from "lucide-react";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams";
import { useIsMobile } from "@/hooks/useIsMobile";
import FadeInStagger from "@/components/FadeInStagger";
import AnimatedSection from "@/components/AnimatedSection";
import { useInView } from "framer-motion";

export default function Hero() {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "200px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen pt-20 pb-16 bg-[#0A192F] overflow-hidden flex items-center justify-center"
      aria-label="Jasa Website Murah dan Desain Grafis Profesional"
    >
      {/* Background Beams - Desktop Only */}
      {!isMobile && <BackgroundBeams className="absolute inset-0" />}

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
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-sm mx-auto sm:max-w-none">
                <Button
                  asChild
                  className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white px-8 py-6 text-lg rounded-full group shadow-lg shadow-[#3B82F6]/30 hover:shadow-xl hover:shadow-[#3B82F6]/40 transition-all w-full sm:w-auto"
                >
                  <a href="#contact">
                    Mulai Konsultasi Gratis
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 !text-white hover:bg-white/10 hover:!text-white px-8 py-6 text-lg rounded-full backdrop-blur-sm w-full sm:w-auto"
                >
                  <a href="#projects" className="text-white">Lihat Portfolio</a>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Interactive Particles - Desktop Only */}
      {!isMobile && (
        <Particles
          className="absolute inset-0"
          quantity={40}
          ease={80}
          staticity={50}
          color="#FFFFFF"
          size={0.8}
        />
      )}
    </section>
  );
}
