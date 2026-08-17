"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-background overflow-hidden w-full scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* Asymmetrical 2-Column Tech Company Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Brand Statement & Story (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatedSection animation="fade-up">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest block">
                Tentang KreativLabs
              </span>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-[1.18] mt-2">
                Membangun website modern dengan standar tinggi untuk bisnis Anda.
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={80}>
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
                Kami bukan sekadar pembuat halaman web. KreativLabs hadir sebagai partner teknologi yang memikirkan performa kecepatan, kemudahan pengelolaan, dan kredibilitas brand Anda di mata calon pelanggan.
              </p>
              
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed mt-3">
                Dari landing page konversi tinggi hingga aplikasi kasir web, setiap produk kami rancang dengan kode yang bersih, aman, dan siap menunjang operasional bisnis harian Anda.
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

          {/* Right Column: Bento Features Grid (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Bento Card 1 - Featured Wide */}
            <AnimatedSection animation="fade-up" delay={60}>
              <div className="bg-card border border-border/80 hover:border-primary/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-200 hover:shadow-md">
                <span className="text-[11px] font-semibold text-primary uppercase tracking-wider block mb-2">
                  Arsitektur & Kualitas Kode
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                  Teknologi Modern yang Cepat & Aman
                </h3>
                <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                  Kami membangun setiap website menggunakan stack terkini (Next.js, TypeScript, dan Tailwind CSS) untuk memastikan performa loading instan, struktur SEO yang rapi, dan keamanan data tanpa beban plugin berlebih.
                </p>
              </div>
            </AnimatedSection>

            {/* Bento Cards 2 & 3 - Two Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card 2 */}
              <AnimatedSection animation="fade-up" delay={100}>
                <div className="h-full bg-card border border-border/80 hover:border-primary/50 rounded-2xl sm:rounded-3xl p-6 transition-all duration-200 hover:shadow-md flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-primary uppercase tracking-wider block mb-2">
                      Kecepatan Eksekusi
                    </span>
                    <h4 className="text-base font-bold text-foreground mb-2">
                      Timeline Transparan
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                      Jadwal kerja dan rincian pengerjaan disepakati di awal. Tanpa proses berbelit dan selalu tepat waktu.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Card 3 */}
              <AnimatedSection animation="fade-up" delay={140}>
                <div className="h-full bg-card border border-border/80 hover:border-primary/50 rounded-2xl sm:rounded-3xl p-6 transition-all duration-200 hover:shadow-md flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-primary uppercase tracking-wider block mb-2">
                      Dukungan Nyata
                    </span>
                    <h4 className="text-base font-bold text-foreground mb-2">
                      Pendampingan Penuh
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                      Kami membantu setup domain, hosting, hingga pelatihan singkat agar Anda dapat mengelola website secara mandiri.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
