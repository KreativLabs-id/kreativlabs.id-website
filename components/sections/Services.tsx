"use client";

import { Card } from "@/components/ui/card";
import { Utensils, ShoppingBag, Calendar, ShieldCheck, TrendingUp, MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";
import OptimizedParticles from "@/components/OptimizedParticles";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";

const services = [
  {
    icon: Utensils,
    title: "RestoFlow AI",
    description: "Otomasi alur pesanan meja ke dapur. Pantau stok bahan baku presisi dan kelola pesanan online/offline dalam satu layar.",
    features: ["Manajemen Meja", "Stok Bahan Baku", "POS Integrasi", "Pesanan Real-time"],
  },
  {
    icon: ShoppingBag,
    title: "OmniSell Pro",
    description: "Sinkronisasi stok di semua marketplace (Offline, Shopee, Tokopedia, Web). Notifikasi stok rendah otomatis untuk cegah kehilangan peluang.",
    features: ["Multi-Kanal", "Sinkronisasi Stok", "Notifikasi Pintar", "Laporan Penjualan"],
  },
  {
    icon: Calendar,
    title: "AutoReserve",
    description: "Asisten reservasi 24/7. Izinkan pelanggan menjadwalkan layanan dan bayar dimuka. Hilangkan jadwal bentrok secara otomatis.",
    features: ["Reservasi 24/7", "Pembayaran Dimuka", "Anti Jadwal Bentrok", "Pengingat Otomatis"],
  },
  {
    icon: ShieldCheck,
    title: "Zero-Downtime Guard",
    description: "Perlindungan data tingkat tinggi dan pemeliharaan sistem agar bisnis tidak pernah berhenti beroperasi.",
    features: ["Ketersediaan Tinggi", "Backup Otomatis", "Sistem Keamanan", "Pemeliharaan Rutin"],
  },
  {
    icon: TrendingUp,
    title: "Growth Consultation",
    description: "Strategi implementasi fitur aplikasi untuk melipatgandakan produktivitas dan profit bisnis Anda.",
    features: ["Audit Bisnis", "Strategi Digital", "Optimasi Proses", "Laporan Kinerja"],
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Auto-Pilot",
    description: "Kirim nota otomatis, pengingat pembayaran, dan notifikasi status pesanan langsung ke WhatsApp pelanggan.",
    features: ["Siaran Bot", "Pengingat Bayar", "Notifikasi Status", "Pesan Kustom"],
  },
];

export default function Services() {
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
              Layanan Kami
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Solusi Digital <span className="text-primary">Terintegrasi</span>
            </h2>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Tinggalkan sistem manual yang rumit. Kami membangun ekosistem aplikasi cerdas yang terintegrasi penuh untuk berbagai sektor industri.
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <FadeInStagger key={index} index={index} delay={index * 20}>
                <div className="group relative h-full">
                  <div className="h-full flex flex-col p-8 rounded-[2rem] bg-card border border-border/50 hover:border-primary/30 hover:shadow-sm transition-all duration-500">
                    
                    <div className="flex items-start justify-between mb-8">
                      <div className="p-3 bg-secondary/50 rounded-2xl group-hover:scale-110 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500">
                        <Icon strokeWidth={1.5} className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                      </div>
                      <div className="h-8 w-8 rounded-full border border-border/50 flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:border-primary/30 transition-all duration-500">
                        <ArrowRight strokeWidth={1.5} className="w-4 h-4 text-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-foreground tracking-tight mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-8 flex-grow">
                      {service.description}
                    </p>

                    <div className="pt-6 border-t border-border/50">
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-muted-foreground text-sm font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              </FadeInStagger>
            );
          })}
        </div>

        {/* CTA Section */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="text-center mt-16">
            <a href="#contact" className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              Mulai Proyek Anda
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Interactive Particles - Desktop Only */}
      <OptimizedParticles quantity={30} />
    </section>
  );
}
