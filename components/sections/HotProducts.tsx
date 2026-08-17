"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";

const features = [
  "Pencatatan transaksi kasir & cetak struk cepat",
  "Laporan rekap penjualan & omzet otomatis",
  "Manajemen menu, varian harga, dan kontrol stok",
  "Akses fleksibel dari HP, tablet, maupun laptop (berbasis web)",
];

export default function HotProducts() {
  const waUrl = `https://wa.me/6285872381791?text=${encodeURIComponent("Halo KreativLabs, saya tertarik untuk melihat demo Aplikasi Kasir Web.")}`;

  return (
    <section id="hot-products" className="relative py-16 md:py-20 bg-background overflow-hidden w-full scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
        
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 tracking-tight">
              Produk <span className="text-primary">Unggulan</span>
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Sistem kasir dan manajemen usaha siap pakai untuk membantu operasional bisnis Anda lebih rapi dan efisien.
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
                    alt="Preview Aplikasi Kasir Web Tip Top"
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
                    Sistem Kasir & Penjualan (POS)
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-2 mb-3 tracking-tight">
                    Aplikasi Kasir Web Tip Top
                  </h3>

                  <p className="text-foreground/70 text-xs sm:text-sm leading-relaxed mb-6">
                    Aplikasi kasir berbasis web yang dirancang praktis untuk bisnis kuliner dan retail. Mempermudah pencatatan kasir harian tanpa perlu instalasi rumit.
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-8">
                    {features.map((feature, idx) => (
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
                    href="/blog/aplikasi-kasir-web-modern"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap text-center"
                  >
                    Lihat Detail
                  </Link>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-secondary border border-border hover:border-primary/40 text-foreground text-sm font-medium hover:text-primary transition-colors whitespace-nowrap text-center"
                  >
                    Coba Demo Kasir
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
