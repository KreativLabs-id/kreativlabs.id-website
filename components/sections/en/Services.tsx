"use client";

import { Card } from "@/components/ui/card";
import { Code, Image, Instagram, CheckCircle2, ArrowRight, LayoutTemplate, Briefcase, PenTool } from "lucide-react";
import OptimizedParticles from "@/components/OptimizedParticles";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";

const services = [
  {
    icon: LayoutTemplate,
    title: "Landing Page",
    description: "Professional landing page to showcase your business effectively.",
    features: ["Responsive Design", "Fast Loading", "SEO Friendly", "Modern Template"],
  },
  {
    icon: Code,
    title: "Website Development",
    description: "Full-featured website development with modern technologies.",
    features: ["Company Profile", "E-Commerce", "Web Application", "CMS Integration"],
  },
  {
    icon: Briefcase,
    title: "Full Branding Package",
    description: "Complete solution including website and brand identity design.",
    features: ["Logo Design", "Brand Guidelines", "Stationery", "Social Media Kit"],
  },
  {
    icon: Image,
    title: "Graphic Design",
    description: "Creative designs for logos, posters, flyers, and more.",
    features: ["Logo & Identity", "Marketing Materials", "Print Design", "Digital Assets"],
  },
  {
    icon: Instagram,
    title: "Social Media Design",
    description: "Engaging visual content to boost your social media presence.",
    features: ["Post & Story", "Content Strategy", "Feed Aesthetics", "Engagement Boost"],
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Professional user interface and user experience design for apps.",
    features: ["User Research", "Wireframing", "Prototyping", "App Design"],
  },
];

export default function ServicesEN() {
  return (
    <section id="services" className="relative py-32 bg-background overflow-hidden w-full">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Integrated Digital <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto leading-relaxed">
              We provide Website Development & Graphic Design solutions that are not only aesthetic but also functional for your business growth.
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeInStagger key={index} index={index} delay={index * 20}>
                <div className="group relative h-full">
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-foreground/5 group-hover:border-primary/30 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative flex flex-col">

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-primary group-hover:text-primary/80 transition-colors" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-foreground/60 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-grow">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-foreground/70 text-sm">
                          <CheckCircle2 className="w-4 h-4 mr-3 text-primary/70" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                  </Card>
                </div>
              </FadeInStagger>
            );
          })}
        </div>
      </div>

      {/* Interactive Particles - Desktop Only */}
      <OptimizedParticles quantity={30} />
    </section>
  );
}
