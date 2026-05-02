"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flame, CheckCircle2, ArrowUpRight, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";
import Image from "next/image";
import Link from "next/link";

export default function HotProducts() {
  return (
    <section id="hot-products" className="relative py-24 bg-background overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-[150px] opacity-[0.03] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-foreground/10 rounded-full mb-6 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-[10px] tracking-[0.2em] text-foreground/60 font-bold uppercase">Featured Product</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
              Produk <span className="text-primary">Unggulan</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Hot Product Card - Redesigned for Minimalist Clean Look */}
        <div className="max-w-6xl mx-auto">
          <FadeInStagger index={0} delay={100}>
            <div className="group relative bg-white/[0.02] border border-foreground/5 hover:border-foreground/10 transition-all duration-500 rounded-[2rem] overflow-hidden">
              <div className="grid lg:grid-cols-12 gap-0">
                {/* Left Side - Image with Floating Effect */}
                <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-[500px] flex items-center justify-center p-8 lg:p-12 bg-gradient-to-br from-white/[0.03] to-transparent">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                    <Image
                      src="/tiptopframe.png"
                      alt="Aplikasi Kasir Web Modern"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 60vw"
                      priority
                    />
                    {/* Minimalist Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"></div>
                  </div>

                  {/* Minimalist Best Seller Badge */}
                  <div className="absolute top-12 left-12 z-10">
                    <div className="flex items-center gap-2 px-4 py-2 bg-foreground/10 backdrop-blur-md border border-foreground/10 rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                      <span className="text-foreground text-[11px] font-bold tracking-wider uppercase">Best Seller</span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Content with Clean Typography */}
                <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-8">
                    <span className="text-primary text-xs font-bold tracking-[0.1em] uppercase">
                      Management System
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-foreground mt-4 mb-6 leading-tight">
                      Aplikasi Kasir <br />
                      <span className="text-foreground/40">Web Modern</span>
                    </h3>
                    <p className="text-foreground/50 text-base leading-relaxed mb-8">
                      Efisiensi operasional bisnis retail Anda dengan sistem manajemen stok real-time, laporan analytics mendalam, dan interface yang sangat intuitif.
                    </p>

                    {/* Minimalist Feature List */}
                    <div className="grid grid-cols-1 gap-4 mb-10">
                      {[
                        "Smart Inventory Tracking",
                        "Automated Sales Reports",
                        "Cloud-based Accessibility",
                        "Secure Multi-user Access"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3 group/item">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 transition-colors group-hover/item:bg-primary/20">
                            <CheckCircle2 className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-foreground/70 text-sm group-hover/item:text-foreground transition-colors">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions - Clean Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-6 rounded-2xl group/btn transition-all duration-300 w-full sm:w-auto"
                    >
                      <Link href="/blog/aplikasi-kasir-web-modern" className="flex items-center gap-2">
                        <span className="font-semibold">Explore Product</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="ghost"
                      className="text-foreground/60 hover:text-foreground hover:bg-foreground/5 px-8 py-6 rounded-2xl transition-all duration-300 w-full sm:w-auto"
                    >
                      <a href="#contact">Contact Sales</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </FadeInStagger>
        </div>

        {/* Footer Link - Minimalist */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="mt-20 text-center">
            <Link 
              href="#projects" 
              className="group inline-flex items-center gap-2 text-foreground/30 hover:text-primary transition-all duration-300"
            >
              <span className="text-sm font-medium tracking-wide">Browse all digital solutions</span>
              <div className="w-8 h-[1px] bg-foreground/10 group-hover:bg-primary transition-all duration-300 group-hover:w-12"></div>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
