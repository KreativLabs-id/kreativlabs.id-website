"use client";

import { motion } from "motion/react";
import { TestimonialsColumn, type TestimonialItem } from "@/components/ui/testimonials-columns-1";

const testimonialsID: TestimonialItem[] = [
  {
    text: "Aplikasi kasir web Tip Top sangat membantu pencatatan transaksi harian dan stok martabak kami. Laporan omzet otomatis bikin rekap bulanan jauh lebih cepat tanpa ribet.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    name: "Pak Alex",
    role: "Owner, Martabak Tip Top",
  },
  {
    text: "Pengerjaan landing page untuk campaign promosi produk kami selesai tepat waktu. Tampilannya clean, loading-nya kencang di HP, dan konversi chat WhatsApp naik drastis.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    name: "Siti Nurhaliza",
    role: "Marketing Lead, Fashion Store",
  },
  {
    text: "Sangat puas dengan pembuatan website profil perusahaan kami. Tim KreativLabs sangat komunikatif, paham arsitektur modern, dan selalu responsif saat diskusi teknis.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    name: "Ahmad Wijaya",
    role: "Founder, Digimax Studio",
  },
  {
    text: "Desain logo dan brand guideline yang dibuatkan punya filosofi yang kuat. File master AI, SVG, dan panduan warnanya lengkap dan sangat rapi.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    name: "Dian Pratiwi",
    role: "Brand Manager, Kopi Titik Temu",
  },
  {
    text: "Sistem reservasi online yang dibangun bekerja sangat stabil. Pasien bisa booking jadwal dengan mudah tanpa antri panjang di resepsionis.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    name: "dr. Hendra Kurniawan",
    role: "Direktur Klinik Pratama",
  },
  {
    text: "Template konten Instagram dan feed carousels-nya rapi banget. Tim kami sekarang jauh lebih gampang posting konten promosi yang konsisten.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    name: "Rina Maharani",
    role: "Social Media Specialist",
  },
  {
    text: "Website custom e-commerce kami terintegrasi dengan payment gateway dan sistem ongkir otomatis. Sangat membantu efisiensi tim gudang.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
    name: "Bambang Santoso",
    role: "Operasional, IndoSupply",
  },
  {
    text: "Desain UI/UX di Figma yang diserahkan rapi dengan Auto Layout dan design system yang modular. Programmer kami bisa langsung implementasi tanpa bingung.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    name: "Nadia Safitri",
    role: "Product Owner, Logistik Kita",
  },
  {
    text: "Layanan purna jual dan garansinya terbukti. Setiap ada kendala teknis atau update kecil selalu dibantu dengan cepat dan ramah.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    name: "Fajar Pratama",
    role: "Co-Founder, EduPlatform",
  },
];

const firstColumn = testimonialsID.slice(0, 3);
const secondColumn = testimonialsID.slice(3, 6);
const thirdColumn = testimonialsID.slice(6, 9);

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-16 md:py-24 bg-background overflow-hidden w-full scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center mb-12"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-2.5">
            Testimoni Klien
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            Apa Kata <span className="text-primary">Klien Kami</span>
          </h2>
          <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
            Pengalaman nyata dari para pelaku usaha dan pemilik bisnis yang mempercayakan platform digital serta visual brand mereka kepada KreativLabs.
          </p>
        </motion.div>

        {/* 3-Column Looping Animated Marquee with Edge Fade Mask */}
        <div className="flex justify-center gap-5 sm:gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[680px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={19} />
        </div>

      </div>
    </section>
  );
}
