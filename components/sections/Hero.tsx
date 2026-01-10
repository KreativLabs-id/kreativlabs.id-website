"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2, Palette } from "lucide-react";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams";
import { useIsMobile } from "@/hooks/useIsMobile";
import FadeInStagger from "@/components/FadeInStagger";
import AnimatedSection from "@/components/AnimatedSection";

export default function Hero() {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-[90vh] pt-20 bg-[#0A192F] overflow-hidden flex items-center justify-center">
      {/* Background Beams - Desktop Only */}
      {!isMobile && <BackgroundBeams className="absolute inset-0" />}

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0A192F]/50 via-transparent to-[#0A192F]/80 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            {/* Main Heading */}
            <AnimatedSection animation="fade-up" delay={150} duration={800}>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Website & Desain Grafis
                <br />
                <span className="relative inline-block">
                  <span className="text-[#3B82F6]">Untuk Bisnis Anda</span>
                  <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none">
                    <path d="M1 6C50 2 100 1 150 2C200 3 250 4 299 6" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </AnimatedSection>

            {/* Subheading */}
            <AnimatedSection animation="fade-up" delay={300} duration={800}>
              <p className="text-base md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                Jasa pembuatan website profesional dan desain grafis (logo, poster, sosmed, packaging) dengan harga terjangkau mulai dari 50 ribu!
              </p>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection animation="fade-up" delay={450} duration={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  asChild
                  className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white px-6 py-5 text-base rounded-full group shadow-lg shadow-[#3B82F6]/30 hover:shadow-xl hover:shadow-[#3B82F6]/40 transition-all"
                >
                  <a href="#contact">
                    Mulai Konsultasi Gratis
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 !text-white hover:bg-white/10 hover:!text-white px-6 py-5 text-base rounded-full backdrop-blur-sm"
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
          quantity={100}
          ease={80}
          staticity={50}
          color="#FFFFFF"
          size={0.8}
        />
      )}
    </section>
  );
}
