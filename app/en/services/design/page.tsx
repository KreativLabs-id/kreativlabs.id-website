import type { Metadata } from "next";
import NavbarEN from "@/components/NavbarEN";
import Footer from "@/components/sections/en/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Palette,
  Instagram,
  PenTool,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Graphic Design, Branding & UI/UX Services | KreativLabs",
  description: "Bespoke visual identity and digital design solutions for modern businesses. From brand logos to structured social media kits and Figma UI/UX design.",
  alternates: {
    canonical: "https://kreativlabs.id/en/services/design",
  },
};

const designServicesEN = [
  {
    icon: Palette,
    title: "Brand Identity & Logo Design",
    description: "Original, conceptual logo engineering that differentiates your brand from competitors, complete with typography guides, color palettes, and full vector source files.",
    deliverables: [
      "Original concepts tailored to your brand personality",
      "Comprehensive vector master formats (AI, SVG, EPS, PDF)",
      "High-resolution transparent assets (PNG, JPG)",
      "Structured Color Palette & Typography Guidelines",
      "Realistic 3D mockup brand applications",
      "Full and uncompromised commercial copyright ownership"
    ],
    waMessage: "Hello KreativLabs, I would like to inquire about Brand Identity & Logo Design services."
  },
  {
    icon: Instagram,
    title: "Social Media Kit & Content Design",
    description: "Consistent high-engagement visual assets for Instagram feeds, educational carousels, promotional stories, and digital campaign ad banners.",
    deliverables: [
      "Structured feed and carousel layout systems",
      "Brand-aligned promotional story templates",
      "High-converting paid advertising banners",
      "Crisp, export-ready high-resolution formats",
      "Iterative revision rounds to guarantee satisfaction",
      "Includes fully editable design source files"
    ],
    waMessage: "Hello KreativLabs, I would like to order a Social Media Design package."
  },
  {
    icon: PenTool,
    title: "UI/UX & Product Design (Web & Mobile)",
    description: "Designing modern, intuitive digital experiences and interfaces in Figma, crafted for frictionless user navigation and effortless developer implementation.",
    deliverables: [
      "User research, wireframing, and user flow mapping",
      "High-fidelity interactive prototype mockups",
      "Comprehensive Design System (Tokens, Icons, Components)",
      "Well-organized Figma files with standard Auto-Layout",
      "Interactive click-through prototype testing",
      "Clear developer handoff and implementation documentation"
    ],
    waMessage: "Hello KreativLabs, I would like to discuss a UI/UX Design project."
  }
];

const workflowEN = [
  {
    step: "01",
    title: "Brief & Discovery",
    description: "We analyze your brand values, target demographic, and visual direction preferences."
  },
  {
    step: "02",
    title: "Concept Exploration",
    description: "Creating initial drafts, moodboards, and directional sketches to align early."
  },
  {
    step: "03",
    title: "Refinement & Revisions",
    description: "Polishing high-resolution designs with focused revision cycles based on your feedback."
  },
  {
    step: "04",
    title: "Master File Delivery",
    description: "Delivering the complete asset kit in all required production and vector formats."
  }
];

export default function DesignServicesPageEN() {
  return (
    <main className="min-h-screen bg-background">
      <NavbarEN />

      {/* Hero Header */}
      <section className="pt-28 pb-14 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-2.5">
            Graphic & UI/UX Design Services
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.18] mb-4">
            Bespoke Visual Identities Engineered to <br className="hidden sm:block" />
            <span className="text-primary">Establish Lasting Brand Authority.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-foreground/75 max-w-2xl mx-auto leading-relaxed mb-8">
            We craft cohesive visual experiences that combine contemporary aesthetic standards with commercial strategy to help your brand command market trust.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/6285872381791?text=Hello%20KreativLabs,%20I%20would%20like%20to%20consult%20about%20design"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              Start Design Consultation
            </a>

            <Link
              href="/en#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full bg-secondary border border-border hover:border-primary/50 text-foreground text-xs sm:text-sm font-medium hover:text-primary transition-all hover:-translate-y-0.5"
            >
              View Design Showcase
            </Link>
          </div>
        </div>
      </section>

      {/* Services Breakdown Grid */}
      <section className="py-12 px-4 sm:px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 tracking-tight">
              Curated Design Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-foreground/70 max-w-xl mx-auto">
              Every deliverable is crafted from ground-up research without reliance on generic clipart.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {designServicesEN.map((service, index) => {
              const Icon = service.icon;
              const waUrl = `https://wa.me/6285872381791?text=${encodeURIComponent(service.waMessage)}`;

              return (
                <div
                  key={index}
                  className="h-full flex flex-col justify-between bg-card border border-border/80 hover:border-primary/50 rounded-2xl sm:rounded-3xl p-6 sm:p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-border/60 mb-6">
                      <span className="text-[11px] font-semibold text-foreground/50 uppercase tracking-wider block mb-2">
                        Included Deliverables:
                      </span>
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-foreground/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Process */}
      <section className="py-16 px-4 sm:px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-1">
              Design Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Our Structured Creative Workflow
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflowEN.map((item, index) => (
              <div key={index} className="bg-card border border-border/80 rounded-2xl p-5">
                <span className="text-xl font-extrabold text-primary block mb-2">
                  {item.step}
                </span>
                <h4 className="text-sm font-bold text-foreground mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border border-border/80 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 tracking-tight">
              Ready to Upgrade Your Brand Identity?
            </h2>
            <p className="text-xs sm:text-sm text-foreground/70 max-w-lg mx-auto leading-relaxed mb-6">
              Discuss your visual identity or digital product interface with the KreativLabs design team.
            </p>
            <a
              href="https://wa.me/6285872381791?text=Hello%20KreativLabs,%20I%20would%20like%20to%20discuss%20design%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              Discuss via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
