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

const services = [
  {
    icon: LayoutTemplate,
    title: "Landing Page",
    description: "Website satu halaman yang cepat, responsif di HP, dan dirancang langsung untuk menarik pelanggan ke WhatsApp.",
    points: [
      "Tampilan responsif di HP & desktop",
      "Loading cepat & ramah SEO Google",
      "Tombol WhatsApp langsung",
      "Domain & hosting siap pakai"
    ],
    detailHref: "/services/website",
    waMessage: "Halo KreativLabs, saya ingin tanya-tanya tentang jasa pembuatan Landing Page."
  },
  {
    icon: Globe,
    title: "Website Profil & Bisnis",
    description: "Website resmi untuk memperkenalkan profil perusahaan, portofolio, dan layanan bisnis Anda agar terlihat lebih terpercaya.",
    points: [
      "Halaman lengkap (Tentang, Layanan, Kontak)",
      "Desain profesional & mudah dibaca",
      "Integrasi formulir kontak & maps",
      "Bisa update konten sendiri"
    ],
    detailHref: "/services/website",
    waMessage: "Halo KreativLabs, saya ingin tanya-tanya tentang jasa pembuatan Website Profil / Bisnis."
  },
  {
    icon: Cpu,
    title: "Website Custom",
    description: "Pembuatan website dengan fitur khusus sesuai kebutuhan alur kerja bisnis, seperti sistem kasir, booking, atau portal internal.",
    points: [
      "Fitur dibuat sesuai kebutuhan",
      "Database & dashboard admin",
      "Bisa integrasi sistem pembayaran / API",
      "Performa aman & stabil"
    ],
    detailHref: "/services/website",
    waMessage: "Halo KreativLabs, saya ingin konsultasi pembuatan Website Custom."
  },
  {
    icon: Palette,
    title: "Desain Logo",
    description: "Desain logo original dan profesional yang mencerminkan karakter bisnis Anda, lengkap dengan file master untuk cetak maupun digital.",
    points: [
      "Konsep original & tidak pasaran",
      "File master lengkap (AI, SVG, PNG)",
      "Panduan warna & jenis font",
      "Bebas revisi sampai sesuai"
    ],
    detailHref: "/services/design",
    waMessage: "Halo KreativLabs, saya ingin pesan jasa Desain Logo."
  },
  {
    icon: Instagram,
    title: "Desain Social Media",
    description: "Konten visual menarik untuk postingan feed, story, dan banner promosi agar media sosial bisnis Anda terlihat aktif dan rapi.",
    points: [
      "Desain feed & carousel terstruktur",
      "Template story promosi",
      "Banner iklan & diskon",
      "File siap posting resolusi tinggi"
    ],
    detailHref: "/services/design",
    waMessage: "Halo KreativLabs, saya ingin pesan jasa Desain Social Media."
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description: "Perancangan tampilan dan alur aplikasi mobile atau website di Figma agar mudah dan nyaman digunakan oleh pengguna.",
    points: [
      "Riset alur pengguna (User Flow)",
      "Wireframe & mockup interaktif",
      "File Figma rapi & siap coding",
      "Desain modern & intuitif"
    ],
    detailHref: "/services/design",
    waMessage: "Halo KreativLabs, saya ingin konsultasi jasa UI/UX Design."
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-16 md:py-20 bg-background overflow-hidden w-full scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">

        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 tracking-tight">
              Jasa Pembuatan <span className="text-primary">Website & Desain</span>
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Kami membantu bisnis dan UMKM memiliki website yang bekerja dengan baik serta desain visual yang rapi dan profesional.
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const waUrl = `https://wa.me/6285872381791?text=${encodeURIComponent(service.waMessage)}`;

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
                      Lihat detail
                    </Link>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 font-semibold flex items-center gap-1 transition-colors"
                    >
                      <span>Tanya Layanan</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
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
