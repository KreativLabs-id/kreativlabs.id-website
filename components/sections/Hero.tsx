"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2, Palette } from "lucide-react";
import { AuroraBackground } from "@/components/ui/shadcn-io/aurora-background";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { useIsMobile } from "@/hooks/useIsMobile";
import FadeInStagger from "@/components/FadeInStagger";

export default function Hero() {
  const isMobile = useIsMobile();
  
  return (
    <AuroraBackground className="min-h-[85vh] pt-20">
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span className="text-xs text-white/90 font-medium">
                Website Development & Graphic Design Services
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Website & Desain Grafis
              <br />
              <span className="relative inline-block">
                <span className="text-[#3B82F6]">Untuk Bisnis Anda</span>
                <svg className="absolute -bottom-1 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none">
                  <path d="M1 6C50 2 100 1 150 2C200 3 250 4 299 6" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base md:text-lg text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Jasa pembuatan website profesional dan desain grafis (logo, poster, sosmed, packaging) dengan harga terjangkau mulai dari 50 ribu!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
              <Button 
                asChild
                className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white px-6 py-5 text-base rounded-full group shadow-lg shadow-[#3B82F6]/30 hover:shadow-xl hover:shadow-[#3B82F6]/40 transition-all"
              >
                <a href="#contact">
                  Mulai Konsultasi Gratis
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                asChild
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 px-6 py-5 text-base rounded-full backdrop-blur-sm"
              >
                <a href="#projects">Lihat Portfolio</a>
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {/* Feature 1 */}
              <FadeInStagger index={0} delay={150}>
                <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-[#3B82F6]/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-10 h-10 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Code2 className="w-5 h-5 text-[#3B82F6]" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">Modern Development</h3>
                  <p className="text-white/60 text-xs">Teknologi terkini untuk performa optimal</p>
                </div>
                </div>
              </FadeInStagger>

              {/* Feature 2 */}
              <FadeInStagger index={1} delay={150}>
                <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-[#3B82F6]/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-10 h-10 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Palette className="w-5 h-5 text-[#3B82F6]" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">Beautiful Design</h3>
                  <p className="text-white/60 text-xs">UI/UX yang menarik dan user-friendly</p>
                </div>
                </div>
              </FadeInStagger>

              {/* Feature 3 */}
              <FadeInStagger index={2} delay={150}>
                <div className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-[#3B82F6]/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-10 h-10 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-5 h-5 text-[#3B82F6]" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">Fast Delivery</h3>
                  <p className="text-white/60 text-xs">Pengerjaan cepat tanpa mengorbankan kualitas</p>
                </div>
                </div>
              </FadeInStagger>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="text-center mt-16">
            <p className="text-white/40 text-sm mb-4 animate-pulse">Scroll untuk melihat lebih banyak</p>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-[#3B82F6] rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Interactive Particles - Desktop Only */}
      {!isMobile && (
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          staticity={50}
          color="#3B82F6"
          size={0.8}
        />
      )}
    </AuroraBackground>
  );
}
