import type { Metadata } from "next";
import NavbarEN from "@/components/NavbarEN";
import Footer from "@/components/sections/en/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Code,
  Globe,
  Cpu,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professional Website & Web App Development Services | KreativLabs",
  description: "High-performance web development solutions for ambitious businesses. From high-converting landing pages to custom web applications.",
  alternates: {
    canonical: "https://kreativlabs.id/en/services/website",
  },
};

const websiteServicesEN = [
  {
    icon: Code,
    title: "Business & Promotional Landing Pages",
    description: "Structured single-page websites engineered specifically for marketing campaigns, high conversion rates, and direct WhatsApp lead generation.",
    deliverables: [
      "Persuasive layout structured for high conversions",
      "Near-instant page load speed on modern devices",
      "Adaptive & mobile-first responsive architecture",
      "Direct WhatsApp and lead capture integration",
      "Turnkey domain, hosting, and SSL setup",
      "Clean on-page Google SEO structure"
    ],
    waMessage: "Hello KreativLabs, I would like to inquire about Landing Page development."
  },
  {
    icon: Globe,
    title: "Corporate & Business Websites",
    description: "Official multi-page websites designed to establish brand credibility, showcase service portfolios, and earn the trust of corporate clients.",
    deliverables: [
      "Complete multi-page structure (About, Services, Portfolio, Contact)",
      "Editorial typography that communicates corporate trust",
      "Intuitive CMS for effortless internal content updates",
      "Integrated contact forms, corporate email, and Google Maps",
      "Enterprise-grade performance and data security",
      "Comprehensive onboarding and maintenance guide"
    ],
    waMessage: "Hello KreativLabs, I would like to build a Corporate / Business Website."
  },
  {
    icon: Cpu,
    title: "Custom Web Applications & Portals",
    description: "Custom-tailored software systems built to automate business operations, such as cloud POS cashiers, reservation systems, or internal portals.",
    deliverables: [
      "Next.js, TypeScript, and modern scalable databases",
      "Role-based access control and intuitive admin dashboards",
      "Seamless payment gateway and third-party API integrations",
      "Automated database backups and encrypted security",
      "Intuitive UX tailored for operators and daily staff",
      "Technical warranty and continuous bug-fix support"
    ],
    waMessage: "Hello KreativLabs, I would like to discuss a Custom Web App project."
  }
];

const workflowEN = [
  {
    step: "01",
    title: "Consultation & Scope",
    description: "We align on your digital goals, target audience, and required feature specifications."
  },
  {
    step: "02",
    title: "UI Design & Wireframing",
    description: "Structuring user journeys, copywriting, and visual prototypes for seamless clarity."
  },
  {
    step: "03",
    title: "Development & Integration",
    description: "Clean engineering, database configuration, performance optimization, and testing."
  },
  {
    step: "04",
    title: "Testing, Revisions, & Launch",
    description: "Cross-device responsiveness tests, client revisions, domain setup, and official deployment."
  }
];

export default function WebsiteServicesPageEN() {
  return (
    <main className="min-h-screen bg-background">
      <NavbarEN />

      {/* Hero Header */}
      <section className="pt-28 pb-14 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-2.5">
            Web Development Services
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.18] mb-4">
            High-Performance Websites Engineered to <br className="hidden sm:block" />
            <span className="text-primary">Drive Measurable Growth for Your Business.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-foreground/75 max-w-2xl mx-auto leading-relaxed mb-8">
            We engineer websites that load instantly, convert visitors into loyal clients, and provide seamless content management.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/6285872381791?text=Hello%20KreativLabs,%20I%20would%20like%20to%20consult%20about%20a%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              Start Free Consultation
            </a>

            <Link
              href="/en#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full bg-secondary border border-border hover:border-primary/50 text-foreground text-xs sm:text-sm font-medium hover:text-primary transition-all hover:-translate-y-0.5"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Breakdown Grid */}
      <section className="py-12 px-4 sm:px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 tracking-tight">
              Tailored Web Solutions
            </h2>
            <p className="text-xs sm:text-sm text-foreground/70 max-w-xl mx-auto">
              Every solution is crafted with modern engineering standards, free from bloated legacy templates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {websiteServicesEN.map((service, index) => {
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
                        Deliverables & Features:
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
                    <span>Inquire About This Package</span>
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
              Development Lifecycle
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Our Proven Web Engineering Process
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
              Ready to Build Your Digital Platform?
            </h2>
            <p className="text-xs sm:text-sm text-foreground/70 max-w-lg mx-auto leading-relaxed mb-6">
              Consult your specifications directly with the KreativLabs team. We will provide honest technical guidance and an accurate project timeline.
            </p>
            <a
              href="https://wa.me/6285872381791?text=Hello%20KreativLabs,%20I%20would%20like%20to%20discuss%20a%20website%20project"
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
