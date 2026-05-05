"use client";

import { Zap, Shield, Heart, TrendingUp } from "lucide-react";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useTheme } from "next-themes";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";

const principles = [
  {
    icon: Zap,
    title: "Fast & Efficient",
    description: "We prioritize speed and efficiency in every project we undertake",
  },
  {
    icon: Shield,
    title: "Quality First",
    description: "Quality is our top priority in producing digital products",
  },
  {
    icon: Heart,
    title: "Client Satisfaction",
    description: "Client satisfaction is our goal, with transparent communication",
  },
  {
    icon: TrendingUp,
    title: "Continuous Innovation",
    description: "Always following the latest technology developments for optimal results",
  },
];

export default function PrinciplesEN() {
  const isMobile = useIsMobile();
  const { resolvedTheme } = useTheme();
  const particleColor = resolvedTheme === "dark" ? "#FFFFFF" : "#94A3B8";
  
  return (
    <section className="relative py-24 bg-background overflow-hidden overflow-x-hidden w-full">
      {/* Lighting Effects */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary rounded-full blur-[120px] opacity-10"></div>
      
      {/* Particles - Desktop Only */}
      {!isMobile && (
        <Particles
          className="absolute inset-0"
          quantity={80}
          ease={80}
          staticity={50}
          color={particleColor}
          size={0.6}
        />
      )}

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Engineering <span className="text-primary">Principles</span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              The principles we uphold in every project
            </p>
          </div>
        </AnimatedSection>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto mt-12">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <FadeInStagger key={index} index={index} delay={index * 20}>
                <div className="group relative flex flex-col pt-8">
                  {/* Subtle and Animated Top Line */}
                  <div className="absolute top-0 left-0 w-full h-px bg-border/50"></div>
                  <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-700 ease-out"></div>

                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 mt-1">
                      <Icon strokeWidth={1.5} className="w-9 h-9 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground tracking-tight mb-3 group-hover:text-primary transition-colors duration-500">
                        {principle.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInStagger>
            );
          })}
        </div>

        {/* Bottom Divider */}
        <div className="mt-16 flex items-center justify-center">
          <div className="h-px w-32 bg-linear-to-r from-transparent via-primary to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
