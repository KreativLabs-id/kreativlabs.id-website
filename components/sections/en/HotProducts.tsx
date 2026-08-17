"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";

const featuresEN = [
  "Fast transaction records & receipt printing",
  "Automated daily & monthly sales turnover reports",
  "Menu management, product variants, and inventory control",
  "Seamless access via mobile, tablet, or laptop (web-based)",
];

export default function HotProductsEN() {
  const waUrl = `https://wa.me/6285872381791?text=${encodeURIComponent("Hello KreativLabs, I would like to try a demo of the Tip Top Web Cashier application.")}`;

  return (
    <section id="hot-products" className="relative py-16 md:py-20 bg-background overflow-hidden w-full scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
        
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 tracking-tight">
              Featured <span className="text-primary">Solution</span>
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              A ready-to-deploy web cashier and inventory management system built to streamline daily store operations.
            </p>
          </div>
        </AnimatedSection>

        {/* Featured Product Card */}
        <FadeInStagger index={0} delay={60}>
          <div className="bg-card border border-border/80 hover:border-primary/50 rounded-2xl p-6 sm:p-8 transition-all duration-200 hover:shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Product Preview Image (Left) */}
              <div className="lg:col-span-6">
                <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden border border-border/80 bg-secondary/30">
                  <Image
                    src="/tiptopframe.png"
                    alt="Tip Top Web POS System Preview"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>

              {/* Product Information (Right) */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Web Cashier & POS System
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-2 mb-3 tracking-tight">
                    Tip Top Web POS Application
                  </h3>

                  <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed mb-6">
                    A practical web-based POS software engineered for culinary and retail businesses. Simplify daily cashier workflows without complicated installations.
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-8">
                    {featuresEN.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80">
                        <div className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Call to Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <Link
                    href="/en/blog/modern-web-pos-application"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap text-center"
                  >
                    View Details
                  </Link>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-secondary border border-border hover:border-primary/40 text-foreground text-sm font-medium hover:text-primary transition-colors whitespace-nowrap text-center"
                  >
                    Try Cashier Demo
                  </a>
                </div>

              </div>

            </div>
          </div>
        </FadeInStagger>

      </div>
    </section>
  );
}
