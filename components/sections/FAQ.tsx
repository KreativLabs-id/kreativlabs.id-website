"use client";

import { useState } from "react";
import { ArrowRightIcon, ChevronDown } from "lucide-react";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useTheme } from "next-themes";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";

const faqs = [
  {
    question: "Berapa lama proses implementasi sistem di toko kami?",
    answer: "Proses implementasi sangat cepat. Setelah Anda memilih paket berlangganan, tim kami akan melakukan setup sistem dalam 1-3 hari kerja. Anda dan karyawan bisa langsung menggunakan sistem pada hari yang sama.",
  },
  {
    question: "Apakah data transaksi kami aman tersimpan di cloud?",
    answer: "Sangat aman. Seluruh data penjualan, stok, dan pelanggan Anda dienkripsi dan disimpan di server cloud berspesifikasi enterprise kami yang memiliki backup otomatis setiap jam.",
  },
  {
    question: "Apakah sistem ini bisa diakses lewat HP atau tablet oleh karyawan?",
    answer: "Tentu saja. Ekosistem perangkat lunak kami berbasis web dan cloud (SaaS), sehingga bisa diakses dari perangkat apapun (HP, Tablet, PC/Laptop) cukup dengan koneksi internet, tanpa perlu instalasi rumit.",
  },
  {
    question: "Bagaimana jika ada kendala teknis atau mati lampu di lapangan?",
    answer: "Aplikasi kasir kami memiliki mode offline ringan yang memungkinkan transaksi tetap berjalan saat internet terputus, dan akan otomatis tersinkronisasi saat online kembali. Tim support teknis kami juga bersiaga untuk membantu kapan pun.",
  },
  {
    question: "Apakah saya bisa melacak stok banyak cabang secara real-time?",
    answer: "Ya, dengan paket AppGrowth dan AppScale, Anda mendapatkan kontrol penuh multi-cabang. Anda bisa memantau pergerakan stok, tren penjualan, dan performa kasir setiap cabang secara real-time dari satu dashboard utama.",
  },
  {
    question: "Apakah ada biaya pemeliharaan tersembunyi?",
    answer: "Tidak ada. Skema berlangganan kami bersifat flat dan transparan. Semua biaya server, pemeliharaan sistem, update fitur terbaru, dan dukungan teknis sudah termasuk di dalam paket langganan Anda.",
  },
];

export default function FAQ() {
  const isMobile = useIsMobile();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { resolvedTheme } = useTheme();
  const particleColor = resolvedTheme === "dark" ? "#FFFFFF" : "#94A3B8";

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-background overflow-hidden overflow-x-hidden w-full">
      {/* Lighting Effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[120px] opacity-10"></div>

      {/* Particles - Desktop Only */}
      {!isMobile && (
        <Particles
          className="absolute inset-0"
          quantity={80}
          ease={80}
          staticity={50}
          color={particleColor}
          size={0.6}
        />
      )}

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Pertanyaan yang Sering <span className="text-primary">Ditanyakan</span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Pertanyaan yang sering ditanyakan seputar sistem dan integrasi
            </p>
          </div>
        </AnimatedSection>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FadeInStagger key={index} index={index} delay={80}>
              <div
                key={index}
                className="bg-card border border-foreground/10 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group"
                >
                  <span className="text-foreground font-semibold pr-8 group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                >
                  <div className="px-6 pb-5 text-foreground/70 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </FadeInStagger>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="text-center mt-12">
            <p className="text-foreground/60 mb-4">
              Masih ada pertanyaan lain?
            </p>
            <a
              href="#contact"
              className="inline-block text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
