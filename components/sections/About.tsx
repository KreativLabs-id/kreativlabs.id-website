"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-background overflow-hidden w-full scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* Asymmetrical 2-Column Tech Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Narrative & Impact Metrics (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatedSection animation="fade-up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-[1.18]">
                Membangun website modern dengan standar tinggi untuk bisnis Anda.
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={80}>
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
                Kami bukan sekadar pembuat halaman web biasa. KreativLabs hadir sebagai partner digital yang memprioritaskan performa kecepatan, kemudahan pengelolaan, dan kredibilitas brand Anda di mata calon pelanggan.
              </p>
              
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed mt-3">
                Dari landing page berkonversi tinggi hingga sistem kasir dan web app, setiap produk kami bangun menggunakan teknologi mutakhir tanpa ketergantungan pada template usang.
              </p>
            </AnimatedSection>

            {/* Impact Metrics Row */}
            <AnimatedSection animation="fade-up" delay={120}>
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-border/70">
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-foreground">
                    &lt; 2s
                  </div>
                  <div className="text-[11px] text-foreground/60 font-medium mt-0.5">
                    Waktu Muat Cepat
                  </div>
                </div>

                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-foreground">
                    100%
                  </div>
                  <div className="text-[11px] text-foreground/60 font-medium mt-0.5">
                    Kepemilikan Aset
                  </div>
                </div>

                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-foreground">
                    24/7
                  </div>
                  <div className="text-[11px] text-foreground/60 font-medium mt-0.5">
                    Garansi & Support
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={160}>
              <div className="pt-2">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors group"
                >
                  <span>Mulai Diskusi Project Anda</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Pure Clean Studio Visual (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="relative rounded-3xl overflow-hidden border border-border/80 bg-card shadow-sm group">
                <div className="relative w-full aspect-4/3 sm:aspect-[16/11] bg-secondary overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=80"
                    alt="Tim KreativLabs sedang merancang arsitektur website dan desain antarmuka"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-102"
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>

      </div>
    </section>
  );
}
