"use client";

import { Card } from "@/components/ui/card";
import { Code, Palette, Instagram, CheckCircle2, ArrowRight, Globe, Cpu, PenTool } from "lucide-react";
import OptimizedParticles from "@/components/OptimizedParticles";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";

const services = [
  {
    icon: Code,
    title: "Landing Page",
    description: "Landing page responsif dan modern untuk meningkatkan konversi bisnis Anda.",
    features: ["Responsive Design", "Fast Loading", "SEO Friendly", "Modern Template"],
  },
  {
    icon: Globe,
    title: "Fullstack Website",
    description: "Website lengkap dengan fitur backend dan database untuk kebutuhan bisnis yang lebih kompleks.",
    features: ["Dynamic Content", "Database Integration", "Admin Dashboard", "Secure System"],
  },
  {
    icon: Cpu,
    title: "Website Custom",
    description: "Solusi pengembangan website yang disesuaikan sepenuhnya dengan kebutuhan spesifik Anda.",
    features: ["Custom Features", "Scalable Architecture", "API Integration", "Premium Support"],
  },
  {
    icon: Palette,
    title: "Design Logo",
    description: "Desain logo profesional yang mencerminkan identitas dan nilai brand bisnis Anda.",
    features: ["Original Concept", "Brand Identity", "Vector Files", "Copyright Ownership"],
  },
  {
    icon: Instagram,
    title: "Desain Social Media",
    description: "Konten visual kreatif dan menarik untuk meningkatkan engagement di media sosial.",
    features: ["Feed & Story", "Content Planning", "Visual Consistency", "Engagement Focused"],
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Perancangan antarmuka dan pengalaman pengguna yang intuitif untuk aplikasi atau website.",
    features: ["User Research", "Wireframing", "Prototyping", "High Fidelity Design"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 bg-[#0A192F] overflow-hidden w-full">
      {/* Background Elements - Monochromatic Blue */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
              Layanan Kami
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Solusi Digital <span className="text-blue-400">Terintegrasi</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Kami menghadirkan solusi Website Development & Graphic Design yang tidak hanya estetis, tetapi juga fungsional untuk pertumbuhan bisnis Anda.
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
                  <Card className="h-full bg-[#112240]/50 backdrop-blur-sm border-white/5 group-hover:border-blue-500/30 p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative flex flex-col">

                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-grow">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-300 text-sm">
                          <CheckCircle2 className="w-4 h-4 mr-3 text-blue-500/70" />
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
