"use client";

import { 
  LayoutTemplate, 
  Globe, 
  Cpu, 
  Palette, 
  Instagram, 
  PenTool, 
  ArrowRight
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";
import Link from "next/link";

const servicesEN = [
  {
    icon: LayoutTemplate,
    title: "Landing Page",
    description: "Fast, mobile-friendly one-page website designed to capture leads and drive direct customer inquiries to WhatsApp.",
    points: [
      "Responsive design across all devices",
      "Fast load speed & Google SEO ready",
      "Direct WhatsApp call-to-action button",
      "Ready-to-use domain and hosting setup"
    ],
    detailHref: "/services/website",
    waMessage: "Hello KreativLabs, I would like to inquire about Landing Page services."
  },
  {
    icon: Globe,
    title: "Company & Business Website",
    description: "Official multi-page website to showcase your company profile, services, and build trust with your potential clients.",
    points: [
      "Complete pages (About, Services, Contact)",
      "Clean, modern, and readable layout",
      "Integrated contact forms and Google Maps",
      "Easy content updates and management"
    ],
    detailHref: "/services/website",
    waMessage: "Hello KreativLabs, I would like to inquire about Business / Company Website development."
  },
  {
    icon: Cpu,
    title: "Custom Website",
    description: "Tailored web applications built specifically for your business workflow, such as POS cashier systems or internal portals.",
    points: [
      "Custom features built to your requirements",
      "Database management & admin dashboard",
      "Payment gateway & API integrations",
      "Secure, stable, and reliable performance"
    ],
    detailHref: "/services/website",
    waMessage: "Hello KreativLabs, I would like to discuss a Custom Website project."
  },
  {
    icon: Palette,
    title: "Logo Design",
    description: "Original, professional logo design that reflects your brand identity, complete with vector master files for digital and print.",
    points: [
      "Original concepts tailored to your brand",
      "Full vector master files (AI, SVG, PNG)",
      "Color palette and typography guide",
      "Revisions included to ensure satisfaction"
    ],
    detailHref: "/services/design",
    waMessage: "Hello KreativLabs, I would like to order Logo Design services."
  },
  {
    icon: Instagram,
    title: "Social Media Design",
    description: "Engaging visual content for feeds, stories, and advertising banners to keep your social media presence active and cohesive.",
    points: [
      "Structured feed and carousel posts",
      "Promotional story templates",
      "Digital ad campaign banners",
      "High-resolution ready-to-post files"
    ],
    detailHref: "/services/design",
    waMessage: "Hello KreativLabs, I would like to order Social Media Design services."
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Intuitive user interface and experience design in Figma for web and mobile apps, built for seamless usability and development.",
    points: [
      "User research and workflow mapping",
      "Interactive wireframes and high-res mockups",
      "Organized Figma files ready for coding",
      "Modern, user-friendly aesthetic"
    ],
    detailHref: "/services/design",
    waMessage: "Hello KreativLabs, I would like to inquire about UI/UX Design services."
  }
];

export default function ServicesEN() {
  return (
    <section id="services" className="relative py-16 md:py-20 bg-background overflow-hidden w-full scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 tracking-tight">
              Website & <span className="text-primary">Design Services</span>
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              We help businesses build functional websites and clean, professional visual designs that deliver real results.
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {servicesEN.map((service, index) => {
            const Icon = service.icon;
            const waUrl = `https://wa.me/6287816270140?text=${encodeURIComponent(service.waMessage)}`;

            return (
              <FadeInStagger key={index} index={index} delay={40}>
                <div className="group h-full flex flex-col justify-between bg-card border border-border/80 hover:border-primary/50 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  <div>
                    {/* Icon */}
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Points */}
                    <ul className="space-y-2 mb-6 text-xs sm:text-[13px] text-foreground/70">
                      {service.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/80 mt-1.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-4 border-t border-border/60 flex items-center justify-between text-xs mt-auto">
                    <Link 
                      href={service.detailHref} 
                      className="text-foreground/60 hover:text-foreground font-medium transition-colors"
                    >
                      View details
                    </Link>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 font-semibold flex items-center gap-1 transition-colors"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </FadeInStagger>
            );
          })}
        </div>

        {/* Simple Consultation Footer */}
        <AnimatedSection animation="fade-up" delay={150}>
          <div className="mt-12 text-center">
            <p className="text-foreground/70 text-sm mb-3">
              Need custom requirements or want to discuss a tailored package?
            </p>
            <a
              href="https://wa.me/6287816270140?text=Hello%20KreativLabs,%20I%20would%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <span>Free consultation via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
