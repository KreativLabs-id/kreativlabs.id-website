"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";

const faqs = [
  {
    question: "Berapa lama waktu pengerjaan website?",
    answer: "Untuk Landing Page sederhana selesai dalam 3–5 hari kerja. Untuk Website Profil / Toko Online membutuhkan waktu sekitar 1–3 minggu. Kami selalu menyepakati timeline pengerjaan di awal.",
  },
  {
    question: "Apakah biaya sudah termasuk domain dan hosting?",
    answer: "Untuk paket tertentu (seperti Website Custom & Promo khusus) domain sudah termasuk. Untuk paket dasar, kami bantu proses pendaftaran dan setup domain/hosting pilihan Anda secara langsung.",
  },
  {
    question: "Apakah website bisa dibuka lancar di HP (mobile-friendly)?",
    answer: "Ya, 100% responsif. Semua website kami uji langsung di berbagai ukuran layar smartphone, tablet, dan laptop agar navigasi tetap nyaman dan cepat.",
  },
  {
    question: "Bagaimana alur revisi desain atau website?",
    answer: "Kami menyediakan sesi preview dan revisi sesuai paket yang dipilih. Anda dapat memberikan feedback poin per poin, dan tim kami akan langsung melakukan penyesuaian hingga hasil sesuai.",
  },
  {
    question: "Apakah saya bisa mengelola atau update konten sendiri?",
    answer: "Bisa. Untuk paket website dinamis, kami sediakan dashboard admin yang mudah digunakan serta panduan singkat agar Anda bisa mengedit teks, produk, atau foto sendiri.",
  },
  {
    question: "Apakah ada garansi dan bantuan teknis setelah selesai?",
    answer: "Ya, kami memberikan garansi dan support teknis pasca-serah terima untuk memastikan website tetap berjalan stabil tanpa kendala teknis.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-16 md:py-20 bg-background overflow-hidden w-full scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl">

        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 tracking-tight">
              Pertanyaan yang Sering <span className="text-primary">Ditanyakan</span>
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Jawaban seputar proses pengerjaan, revisi, hingga kepemilikan aset project Anda.
            </p>
          </div>
        </AnimatedSection>

        {/* FAQ Items */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeInStagger key={index} index={index} delay={25}>
                <div
                  className={`bg-card border rounded-2xl overflow-hidden transition-all duration-200 ${
                    isOpen
                      ? "border-primary/50 shadow-xs"
                      : "border-border/80 hover:border-primary/40"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4 group"
                  >
                    <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-secondary/80 flex items-center justify-center shrink-0 transition-all ${
                        isOpen ? "bg-primary text-primary-foreground" : "text-foreground/70 group-hover:text-primary"
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-foreground/75 text-xs sm:text-sm leading-relaxed border-t border-border/40">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeInStagger>
            );
          })}
        </div>
      </div>
    </section>
  );
}
