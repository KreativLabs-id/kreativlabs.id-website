"use client";

import { Clock, ShieldCheck, MessageSquare, FolderKey } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";

const principlesEN = [
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Clear, agreed timelines with transparent milestone updates so your project launches right on schedule.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & High Performance",
    description: "Websites built with clean, modern code for fast loading, and original high-resolution graphic designs.",
  },
  {
    icon: MessageSquare,
    title: "Direct & Friendly Communication",
    description: "Straightforward communication without unnecessary red tape. We listen closely to tailor the best solutions.",
  },
  {
    icon: FolderKey,
    title: "100% Asset Ownership",
    description: "Full handover of all vector master files, source code, and commercial copyright directly to you.",
  },
];

export default function PrinciplesEN() {
  return (
    <section className="relative py-16 md:py-20 bg-background overflow-hidden w-full">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 tracking-tight">
              Our Commitment to Every <span className="text-primary">Project</span>
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Core work principles we uphold to deliver high-quality, transparent results that create real value for your business.
            </p>
          </div>
        </AnimatedSection>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {principlesEN.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <FadeInStagger key={index} index={index} delay={40}>
                <div className="group h-full flex flex-col justify-between bg-card border border-border/80 hover:border-primary/50 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  <div>
                    {/* Top Row: Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {principle.title}
                    </h3>

                    {/* Description */}
                    <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </FadeInStagger>
            );
          })}
        </div>

      </div>
    </section>
  );
}
