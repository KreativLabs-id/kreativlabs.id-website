"use client";

import { useState } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";

interface PricingPlanEN {
  id: string;
  name: string;
  category: "website" | "design";
  price: string;
  originalPrice?: string;
  description: string;
  badge?: string;
  popular?: boolean;
  features: string[];
  waMessage: string;
}

const pricingPlansEN: PricingPlanEN[] = [
  {
    id: "landing-page",
    name: "Landing Page",
    category: "website",
    price: "$50",
    originalPrice: "$100",
    badge: "Best for Promo",
    description: "Fast, single-page website to promote specific products, events, and generate customer leads.",
    features: [
      "1 Mobile & desktop responsive page",
      "Fast load speed & Google SEO ready",
      "Direct WhatsApp call-to-action",
      "Domain and hosting setup included",
      "2 Design revisions",
      "Basic user guidelines & support"
    ],
    waMessage: "Hello KreativLabs, I would like to order the Landing Page package ($50)."
  },
  {
    id: "fullstack-website",
    name: "Business & Company Website",
    category: "website",
    price: "$200",
    originalPrice: "$400",
    badge: "Most Popular",
    popular: true,
    description: "Complete multi-page website to showcase your company profile, services, and build client trust.",
    features: [
      "Multi-page (Home, About, Services, Contact)",
      "Admin dashboard & content manager",
      "Integrated secure database",
      "Contact forms & Google Maps",
      "On-page SEO optimization",
      "3 Revisions + 2 months support"
    ],
    waMessage: "Hello KreativLabs, I would like to order the Business Website package ($200)."
  },
  {
    id: "custom-website",
    name: "Custom Web Application",
    category: "website",
    price: "From $500",
    badge: "Business Scale",
    description: "Tailored web systems built specifically around your business workflow and operational requirements.",
    features: [
      "Tailored custom features and architecture",
      "Payment gateway & 3rd-party API integrations",
      "Multi-role user authentication",
      ".com domain setup & cloud deployment",
      "System documentation & user training",
      "3 Months priority support"
    ],
    waMessage: "Hello KreativLabs, I would like to discuss a Custom Web Application project."
  },
  {
    id: "design-logo",
    name: "Logo Design",
    category: "design",
    price: "From $10",
    originalPrice: "$20",
    badge: "50% Off",
    description: "Original, professional logo design crafted to establish a distinct and memorable brand identity.",
    features: [
      "3 Initial design concept options",
      "Full vector master files (AI, SVG, EPS)",
      "Ready-to-use files (Transparent PNG, High-Res JPG)",
      "Brand color palette & typography guide",
      "3 Design revisions",
      "100% Commercial copyright ownership"
    ],
    waMessage: "Hello KreativLabs, I would like to order the Logo Design package."
  },
  {
    id: "social-media",
    name: "Social Media Design",
    category: "design",
    price: "$30",
    originalPrice: "$60",
    badge: "5 Posts Pack",
    description: "High-impact visual content for feeds and stories to keep your business social channels active.",
    features: [
      "5 Custom feed/carousel designs",
      "Ready-to-use story templates",
      "Consistent visual identity and branding",
      "Editable master files (Canva / PSD / AI)",
      "2 Design revisions",
      "Fast 2-3 business days turnaround"
    ],
    waMessage: "Hello KreativLabs, I would like to order the Social Media Design package ($30)."
  },
  {
    id: "uiux-design",
    name: "UI/UX Design",
    category: "design",
    price: "From $100",
    originalPrice: "$200",
    badge: "Figma Ready",
    description: "Intuitive user interface and experience design in Figma with clean prototypes ready for coding.",
    features: [
      "User research and workflow mapping",
      "Interactive wireframes and high-res mockups",
      "High-Fidelity UI Design",
      "Modular design system and components",
      "Organized Figma files for developer handoff",
      "3 Design revisions"
    ],
    waMessage: "Hello KreativLabs, I would like to inquire about the UI/UX Design package."
  }
];

export default function PricingEN() {
  const [activeCategory, setActiveCategory] = useState<"all" | "website" | "design">("all");

  const filteredPlans = pricingPlansEN.filter(
    (plan) => activeCategory === "all" || plan.category === activeCategory
  );

  return (
    <section id="pricing" className="relative py-16 md:py-20 bg-background overflow-hidden w-full scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 tracking-tight">
              Transparent & <span className="text-primary">Predictable Pricing</span>
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Choose the right plan for your business goals. All projects are delivered with professional quality and zero hidden fees.
            </p>

            {/* Filter Tabs */}
            <div className="mt-7 inline-flex p-1 rounded-lg bg-secondary/80 border border-border">
              <button
                type="button"
                onClick={() => setActiveCategory("all")}
                className={`px-3.5 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeCategory === "all"
                    ? "bg-card text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All Plans ({pricingPlansEN.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("website")}
                className={`px-3.5 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeCategory === "website"
                    ? "bg-card text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Website Packages
              </button>
              <button
                type="button"
                onClick={() => setActiveCategory("design")}
                className={`px-3.5 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeCategory === "design"
                    ? "bg-card text-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Design Packages
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredPlans.map((plan, index) => {
            const waUrl = `https://wa.me/6285872381791?text=${encodeURIComponent(plan.waMessage)}`;

            return (
              <FadeInStagger key={plan.id} index={index} delay={40}>
                <div
                  className={`h-full flex flex-col justify-between rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                    plan.popular
                      ? "bg-card border-2 border-primary shadow-sm relative"
                      : "bg-card border border-border/80 hover:border-primary/50"
                  }`}
                >
                  <div>
                    {/* Header: Title & Badge */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">
                          {plan.name}
                        </h3>
                        <p className="text-foreground/60 text-xs mt-1 leading-relaxed">
                          {plan.description}
                        </p>
                      </div>

                      {plan.badge && (
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-md shrink-0 ${
                            plan.popular
                              ? "bg-primary text-primary-foreground font-bold"
                              : "bg-secondary text-foreground/80 border border-border"
                          }`}
                        >
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    {/* Price Display */}
                    <div className="py-4 my-2 border-y border-border/60">
                      {plan.originalPrice && (
                        <div className="text-xs text-foreground/40 line-through mb-1">
                          {plan.originalPrice}
                        </div>
                      )}
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                          {plan.price}
                        </span>
                      </div>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-2.5 my-4 text-xs sm:text-[13px] text-foreground/75">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 mt-auto">
                    <Button
                      asChild
                      className={`w-full py-5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                        plan.popular
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm"
                          : "bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground border border-border"
                      }`}
                    >
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5"
                      >
                        <span>Order This Package</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </FadeInStagger>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <AnimatedSection animation="fade-up" delay={150}>
          <div className="mt-14 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-card border border-border/80 hover:border-primary/40 transition-colors shadow-xs">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    Have custom requirements or a specific budget?
                  </h4>
                  <p className="text-xs text-foreground/70 mt-0.5">
                    Consult your roadmap and custom feature set freely with our team.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/6285872381791?text=Hello%20KreativLabs,%20I%20would%20like%20to%20discuss%20a%20custom%20package"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all hover:shadow-md hover:-translate-y-0.5 whitespace-nowrap shrink-0"
              >
                Inquire Custom Scope
              </a>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
