"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, CheckCircle2, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";
import Image from "next/image";
import Link from "next/link";

export default function HotProducts() {
  return (
    <section id="hot-products" className="relative py-24 bg-[#0A192F] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F59E0B]/10 border border-[#F59E0B]/30 rounded-full mb-6">
              <Flame className="w-5 h-5 text-[#F59E0B]" />
              <span className="text-sm text-white font-semibold">HOT PRODUCT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Produk <span className="text-[#F59E0B]">Unggulan</span> Kami
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Solusi terbaik untuk bisnis Anda dengan teknologi terkini
            </p>
          </div>
        </AnimatedSection>

        {/* Hot Product Card */}
        <div className="max-w-5xl mx-auto">
          <FadeInStagger index={0} delay={100}>
            <Card className="bg-[#0F1E37] border border-[#F59E0B]/30 hover:border-[#F59E0B]/50 transition-colors duration-300 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left Side - Image */}
                <div className="relative h-[300px] md:h-[400px] overflow-hidden bg-[#1E3A5F]">
                  <Image
                    src="/tiptopframe.png"
                    alt="Aplikasi Kasir Web Modern"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0F1E37]/60 to-transparent"></div>

                  {/* Hot Badge - Simple without animation */}
                  <div className="absolute top-6 left-6 z-10">
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#F59E0B] rounded-full">
                      <Flame className="w-4 h-4 text-white" />
                      <span className="text-white font-bold text-sm">BEST SELLER</span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-[#3B82F6]/20 text-[#3B82F6] text-xs font-semibold rounded-full border border-[#3B82F6]/30">
                      Web Application
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Aplikasi Kasir Web Modern
                  </h3>

                  <p className="text-white/70 text-sm mb-5 leading-relaxed">
                    Sistem kasir berbasis web yang powerful untuk mengelola bisnis retail Anda.
                    Akses dari mana saja, kapan saja dengan fitur lengkap dan interface yang mudah digunakan.
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2 mb-6">
                    {[
                      "Point of Sale (POS) Modern & Cepat",
                      "Manajemen Stok Real-time",
                      "Laporan Penjualan & Analytics",
                      "Multi User & Cloud-based"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span className="text-white/80 text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      asChild
                      className="bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-white px-5 py-2.5 text-sm rounded-lg transition-colors"
                    >
                      <Link href="/blog/aplikasi-kasir-web-modern">
                        Pelajari Lebih Lanjut
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border border-white/20 text-white hover:bg-white/5 px-5 py-2.5 text-sm rounded-lg transition-colors"
                    >
                      <a href="#contact">Hubungi Kami</a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </FadeInStagger>
        </div>

        {/* Additional Info */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="mt-12 text-center">
            <p className="text-white/50 text-sm mb-4">
              Tertarik dengan produk lainnya?
            </p>
            <Button
              asChild
              variant="ghost"
              className="text-[#3B82F6] hover:text-[#3B82F6]/80 hover:bg-[#3B82F6]/10"
            >
              <a href="#projects">
                Lihat Semua Produk
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
