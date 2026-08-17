"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutEN() {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-background overflow-hidden w-full scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* Asymmetrical 2-Column Tech Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Brand Statement & Story (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatedSection animation="fade-up">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-[1.18]">
                Building high-performance digital products engineered for real growth.
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={80}>
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
                We are more than just a web studio. KreativLabs serves as your dedicated digital engineering partner, prioritizing lightning-fast performance, intuitive content workflows, and undisputed market credibility.
              </p>
              
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed mt-3">
                From high-converting promotional landing pages to custom web applications and full brand identities, every solution is engineered from the ground up without dependency on bloated templates.
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
                    Fast Page Load
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
                    Support & Warranty
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
                  <span>Start a Project Consultation</span>
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
                    alt="KreativLabs team architecting scalable software and UI/UX design systems"
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
