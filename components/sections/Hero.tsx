"use client";

import { useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden w-full pt-28 pb-16 sm:pt-32 sm:pb-20"
      aria-label="Jasa Pembuatan Website dan Desain Grafis KreativLabs"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-5xl flex flex-col items-center justify-center text-center my-auto">
        
        {/* Top Micro Pill */}
        <AnimatedSection animation="fade-up" delay={50}>
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-card/80 border border-border/80 backdrop-blur-md text-xs font-medium text-foreground/70 mb-4">
            <span>KreativLabs Studio Digital</span>
          </div>
        </AnimatedSection>

        {/* Framed Canvas Box - Balanced & Spacious */}
        <AnimatedSection animation="fade-up" delay={150}>
          <div className="relative w-full max-w-3xl sm:max-w-4xl md:max-w-[880px] mx-auto p-8 sm:p-11 md:p-14 border border-border/80 bg-card/40 backdrop-blur-xs rounded-3xl text-center shadow-xs">
            
            {/* 4 Corner Crop Marks */}
            <span aria-hidden className="absolute -top-1.5 -left-1.5 w-4.5 h-4.5 border-t-2 border-l-2 border-foreground/60 rounded-tl-xs pointer-events-none" />
            <span aria-hidden className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 border-t-2 border-r-2 border-foreground/60 rounded-tr-xs pointer-events-none" />
            <span aria-hidden className="absolute -bottom-1.5 -left-1.5 w-4.5 h-4.5 border-b-2 border-l-2 border-foreground/60 rounded-bl-xs pointer-events-none" />
            <span aria-hidden className="absolute -bottom-1.5 -right-1.5 w-4.5 h-4.5 border-b-2 border-r-2 border-foreground/60 rounded-br-xs pointer-events-none" />

            {/* Main Headline (2 Wide & Powerful Lines) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] font-extrabold text-foreground tracking-tight leading-[1.18]">
              Jasa Pembuatan Website & <br />
              <span className="text-foreground">Desain Grafis</span> <span className="text-primary">Bisnis.</span>
            </h1>

            {/* Availability Indicator */}
            <div className="inline-flex items-center gap-2 mt-5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Siap Menerima Project Baru</span>
            </div>

          </div>
        </AnimatedSection>

        {/* Subtitle & Actions (Below Frame) */}
        <AnimatedSection animation="fade-up" delay={250}>
          <div className="text-center max-w-xl mx-auto mt-6 flex flex-col items-center">
            
            <p className="text-xs sm:text-sm md:text-base text-foreground/75 leading-relaxed mb-6 px-2">
              Kami merancang website berkinerja tinggi dan identitas visual modern untuk membantu bisnis Anda tampil terpercaya dan menghasilkan konversi.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap"
              >
                Mulai Konsultasi
              </a>

              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full bg-secondary border border-border hover:border-primary/50 text-foreground text-xs sm:text-sm font-medium hover:text-primary transition-all hover:-translate-y-0.5 whitespace-nowrap"
              >
                Lihat Portofolio
              </a>
            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
