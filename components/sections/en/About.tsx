"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutEN() {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-background overflow-hidden w-full scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* Asymmetrical 2-Column Tech Company Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Brand Statement & Story (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatedSection animation="fade-up">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest block">
                About KreativLabs
              </span>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-[1.18] mt-2">
                Engineering high-performance web products for growing businesses.
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={80}>
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
                We are more than just a web design studio. KreativLabs partners with ambitious brands to engineer digital experiences that prioritize loading speed, ease of management, and measurable customer conversion.
              </p>
              
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed mt-3">
                From high-converting landing pages to custom web applications, everything we build is powered by clean, scalable, and secure modern code.
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
                    Fast Page Speed
                  </div>
                </div>

                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-foreground">
                    100%
                  </div>
                  <div className="text-[11px] text-foreground/60 font-medium mt-0.5">
                    Asset Ownership
                  </div>
                </div>

                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-foreground">
                    24/7
                  </div>
                  <div className="text-[11px] text-foreground/60 font-medium mt-0.5">
                    Technical Support
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={160}>
              <div className="pt-2">
                <Link
                  href="/en#contact"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors group"
                >
                  <span>Discuss Your Next Project</span>
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
                  Architecture & Code Quality
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                  Modern, Resilient Web Technologies
                </h3>
                <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                  We build with modern frameworks (Next.js, TypeScript, Tailwind CSS) to guarantee instant performance, clean SEO architectures, and rock-solid security without bloat.
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
                      Execution Speed
                    </span>
                    <h4 className="text-base font-bold text-foreground mb-2">
                      Transparent Timelines
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                      Agreed schedules and transparent delivery milestones with zero bureaucratic friction.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Card 3 */}
              <AnimatedSection animation="fade-up" delay={140}>
                <div className="h-full bg-card border border-border/80 hover:border-primary/50 rounded-2xl sm:rounded-3xl p-6 transition-all duration-200 hover:shadow-md flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-primary uppercase tracking-wider block mb-2">
                      Full Onboarding
                    </span>
                    <h4 className="text-base font-bold text-foreground mb-2">
                      End-to-End Support
                    </h4>
                    <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                      From domain and cloud configuration to guided team onboarding, we ensure your team is confident with the new platform.
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
