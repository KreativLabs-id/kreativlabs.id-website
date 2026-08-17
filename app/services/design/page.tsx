import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Palette,
  Instagram,
  PenTool,
  CheckCircle2,
  ArrowRight,
  Layers,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Desain Grafis, Branding & UI/UX Profesional | KreativLabs",
  description: "Layanan desain grafis profesional dan identitas visual untuk bisnis. Desain logo, konten media sosial terstruktur, brand guideline, hingga desain antarmuka UI/UX di Figma.",
  keywords: [
    "jasa desain grafis",
    "jasa desain logo",
    "jasa ui ux design",
    "jasa branding bisnis",
    "jasa desain instagram",
    "kreativlabs design"
  ],
  alternates: {
    canonical: "https://kreativlabs.id/services/design",
  },
};

const designServices = [
  {
    icon: Palette,
    title: "Identitas Brand & Desain Logo",
    description: "Perancangan logo original dan filosofis yang membedakan bisnis Anda dari kompetitor, dilengkapi dengan pedoman warna, tipografi, dan file vektor master.",
    deliverables: [
      "Konsep logo original & riset karakter bisnis",
      "File master vektor lengkap (AI, SVG, EPS, PDF)",
      "Format transparan resolusi tinggi (PNG, JPG)",
      "Panduan palet warna (Color Guide) & jenis font",
      "Mockup penerapan pada media promosi nyata",
      "Hak kepemilikan cipta penuh untuk bisnis Anda"
    ],
    waMessage: "Halo KreativLabs, saya ingin konsultasi pembuatan Desain Logo & Brand Identity."
  },
  {
    icon: Instagram,
    title: "Desain Konten & Social Media Kit",
    description: "Materi visual berkualitas untuk Instagram feed, carousel edukasi, story promosi, dan banner digital agar kanal media sosial bisnis Anda terlihat konsisten dan terpercaya.",
    deliverables: [
      "Tata letak feed & carousel yang terstruktur rapi",
      "Template visual konsisten sesuai warna brand",
      "Banner promosi dan iklan berkonversi tinggi",
      "Format siap unggah resolusi tinggi tanpa pecah",
      "Fleksibilitas revisi hingga desain sesuai kebutuhan",
      "Termasuk file master desain yang dapat diedit kembali"
    ],
    waMessage: "Halo KreativLabs, saya ingin memesan paket Desain Konten Social Media."
  },
  {
    icon: PenTool,
    title: "Desain Antarmuka UI/UX (Web & Mobile)",
    description: "Perancangan pengalaman dan tampilan aplikasi atau website di Figma yang memprioritaskan kemudahan pengguna, alur navigasi yang intuitif, serta kemudahan bagi tim developer.",
    deliverables: [
      "Pemetaan alur pengguna (User Flow & Wireframing)",
      "Desain mockup visual interaktif resolusi tinggi",
      "Design System lengkap (Komponen, Warna, Ikon)",
      "File Figma rapi dengan sistem auto-layout standar",
      "Prototyping interaktif untuk pengujian alur",
      "Dokumentasi handoff yang jelas bagi developer"
    ],
    waMessage: "Halo KreativLabs, saya ingin konsultasi jasa Desain UI/UX untuk aplikasi/website."
  }
];

const workflow = [
  {
    step: "01",
    title: "Brief & Diskusi Konsep",
    description: "Kami mendalami karakter brand Anda, audiens yang dituju, dan preferensi gaya visual yang diinginkan."
  },
  {
    step: "02",
    title: "Eksplorasi Sketsa & Moodboard",
    description: "Pembuatan draf konsep visual dan moodboard warna untuk menyepakati arah desain sejak awal."
  },
  {
    step: "03",
    title: "Produksi & Sesi Revisi",
    description: "Pengerjaan desain resolusi tinggi dengan sesi penyesuaian detail berdasarkan masukan Anda."
  },
  {
    step: "04",
    title: "Penyerahan File Master",
    description: "Pengiriman seluruh paket file siap pakai dalam berbagai format lengkap (vektor, raster, & master)."
  }
];

export default function DesignServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-28 pb-14 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-2.5">
            Layanan Desain Grafis & UI/UX
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.18] mb-4">
            Identitas Visual Profesional yang <br className="hidden sm:block" />
            <span className="text-primary">Membangun Kredibilitas Brand Anda.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-foreground/75 max-w-2xl mx-auto leading-relaxed mb-8">
            Kami menciptakan karya desain yang memadukan estetika modern dengan strategi visual terarah untuk membantu bisnis Anda tampil percaya diri dan menonjol.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/6285872381791?text=Halo%20KreativLabs,%20saya%20tertarik%20dengan%20jasa%20desain%20grafis"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              Mulai Konsultasi Desain
            </a>

            <Link
              href="/#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full bg-secondary border border-border hover:border-primary/50 text-foreground text-xs sm:text-sm font-medium hover:text-primary transition-all hover:-translate-y-0.5"
            >
              Lihat Hasil Desain
            </Link>
          </div>
        </div>
      </section>

      {/* Services Breakdown Grid */}
      <section className="py-12 px-4 sm:px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 tracking-tight">
              Koleksi Layanan Desain Kreatif
            </h2>
            <p className="text-xs sm:text-sm text-foreground/70 max-w-xl mx-auto">
              Setiap karya dikerjakan secara eksklusif dengan riset mendalam agar relevan dengan target pasar Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {designServices.map((service, index) => {
              const Icon = service.icon;
              const waUrl = `https://wa.me/6285872381791?text=${encodeURIComponent(service.waMessage)}`;

              return (
                <div
                  key={index}
                  className="h-full flex flex-col justify-between bg-card border border-border/80 hover:border-primary/50 rounded-2xl sm:rounded-3xl p-6 sm:p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-border/60 mb-6">
                      <span className="text-[11px] font-semibold text-foreground/50 uppercase tracking-wider block mb-2">
                        Kelengkapan File & Fitur:
                      </span>
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-foreground/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    <span>Konsultasi Paket Ini</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Process */}
      <section className="py-16 px-4 sm:px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-1">
              Alur Pengerjaan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Tahapan Pengerjaan Desain yang Terarah
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflow.map((item, index) => (
              <div key={index} className="bg-card border border-border/80 rounded-2xl p-5">
                <span className="text-xl font-extrabold text-primary block mb-2">
                  {item.step}
                </span>
                <h4 className="text-sm font-bold text-foreground mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border border-border/80 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 tracking-tight">
              Ingin Meningkatkan Tampilan Visual Bisnis Anda?
            </h2>
            <p className="text-xs sm:text-sm text-foreground/70 max-w-lg mx-auto leading-relaxed mb-6">
              Diskusikan kebutuhan logo, media sosial, atau antarmuka aplikasi bisnis Anda bersama tim desainer KreativLabs.
            </p>
            <a
              href="https://wa.me/6285872381791?text=Halo%20KreativLabs,%20saya%20ingin%20konsultasi%20kebutuhan%20desain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              Diskusi via WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
