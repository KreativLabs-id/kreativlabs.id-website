"use client";

import { Clock, ShieldCheck, MessageSquare, FolderKey } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";

const principles = [
  {
    icon: Clock,
    title: "Pengerjaan Tepat Waktu",
    description: "Timeline pengerjaan disepakati di awal secara transparan dengan laporan berkala agar project selesai sesuai jadwal.",
  },
  {
    icon: ShieldCheck,
    title: "Kualitas & Performa Teruji",
    description: "Website dibuat dengan standar koding modern yang ringan dan cepat, serta desain grafis yang original dan beresolusi tinggi.",
  },
  {
    icon: MessageSquare,
    title: "Komunikasi Terbuka & Ramah",
    description: "Konsultasi langsung tanpa birokrasi rumit. Kami siap mendengarkan kebutuhan Anda dan memberikan solusi terbaik.",
  },
  {
    icon: FolderKey,
    title: "100% Hak Milik Klien",
    description: "Semua file master (vektor, source code, aset desain) diserahkan penuh kepada Anda tanpa biaya tersembunyi.",
  },
];

export default function Principles() {
  return (
    <section className="relative py-16 md:py-20 bg-background overflow-hidden w-full">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">

        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 tracking-tight">
              Komitmen Kami di Setiap <span className="text-primary">Project</span>
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Prinsip kerja yang kami pegang untuk memastikan hasil akhir memuaskan, transparan, dan memberikan dampak nyata bagi bisnis Anda.
            </p>
          </div>
        </AnimatedSection>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <FadeInStagger key={index} index={index} delay={40}>
                <div className="group h-full flex flex-col justify-between bg-card border border-border/80 hover:border-primary/50 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  <div>
                    {/* Top Row: Icon + Number */}
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
