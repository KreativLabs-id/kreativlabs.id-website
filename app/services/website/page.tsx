import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Code,
  Globe,
  Cpu,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website & Aplikasi Web Profesional | KreativLabs",
  description: "Layanan pembuatan website profesional untuk bisnis dan UMKM. Dari landing page konversi tinggi, profil perusahaan, hingga aplikasi web dan sistem kustom.",
  keywords: [
    "jasa pembuatan website",
    "jasa website profesional",
    "jasa landing page",
    "jasa company profile",
    "jasa web application",
    "kreativlabs website"
  ],
  alternates: {
    canonical: "https://kreativlabs.id/services/website",
  },
};

const websiteServices = [
  {
    icon: Code,
    title: "Landing Page Bisnis & Promosi",
    description: "Satu halaman website yang dirancang terstruktur khusus untuk promosi produk, campaign iklan, dan mengarahkan calon pembeli langsung menghubungi WhatsApp Anda.",
    deliverables: [
      "Struktur konten persuasif & berorientasi konversi",
      "Waktu muat super cepat (Fast Loading Speed)",
      "Desain adaptif & responsif di semua ukuran layar",
      "Integrasi tombol WhatsApp & formulir leads",
      "Setup domain, hosting, dan SSL siap pakai",
      "Struktur SEO on-page ramah pencarian Google"
    ],
    waMessage: "Halo KreativLabs, saya ingin konsultasi pembuatan Landing Page untuk bisnis saya."
  },
  {
    icon: Globe,
    title: "Website Profil Perusahaan (Company Profile)",
    description: "Website multi-halaman resmi untuk memperkuat identitas brand, memamerkan portofolio dan legalitas, serta membangun rasa percaya bagi calon mitra dan klien Anda.",
    deliverables: [
      "Halaman lengkap (Beranda, Tentang Kami, Layanan, Portofolio, Kontak)",
      "Tipografi dan tata letak elegan mencerminkan profesionalisme",
      "Kemudahan update konten dan artikel blog secara mandiri",
      "Integrasi peta lokasi Google Maps, formulir, & email bisnis",
      "Optimasi performa & keamanan standar industri",
      "Panduan pengelolaan website setelah selesai"
    ],
    waMessage: "Halo KreativLabs, saya ingin membuat Website Company Profile untuk perusahaan."
  },
  {
    icon: Cpu,
    title: "Website Kustom & Sistem Web (Web App)",
    description: "Pengembangan sistem digital dengan logika bisnis khusus, mulai dari sistem kasir (POS), portal reservasi online, direktori data, hingga dashboard operasional internal.",
    deliverables: [
      "Arsitektur Next.js, TypeScript, & database modern",
      "Dashboard admin dengan hak akses pengguna yang fleksibel",
      "Integrasi payment gateway, WhatsApp API, atau sistem pihak ketiga",
      "Keamanan database dan pencadangan data otomatis",
      "Desain antarmuka UI/UX yang intuitif bagi operator dan admin",
      "Garansi pemeliharaan teknis & perbaikan bug"
    ],
    waMessage: "Halo KreativLabs, saya ingin konsultasi pengembangan Website Kustom / Web App."
  }
];

const workflow = [
  {
    step: "01",
    title: "Konsultasi & Penentuan Kebutuhan",
    description: "Kami mendiskusikan tujuan website Anda, target audiens, serta referensi fitur yang dibutuhkan."
  },
  {
    step: "02",
    title: "Perancangan UI & Struktur Konten",
    description: "Penyusunan tata letak, copywriting, dan visual awal agar alur navigasi terasa natural dan terarah."
  },
  {
    step: "03",
    title: "Development & Integrasi Fitur",
    description: "Pemrograman dengan kode bersih, optimasi kecepatan akses, dan integrasi database serta formulir."
  },
  {
    step: "04",
    title: "Uji Coba, Revisi, & Go-Live",
    description: "Pengujian responsif di berbagai perangkat, penyempurnaan revisi, setup domain, hingga website resmi aktif."
  }
];

export default function WebsiteServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-28 pb-14 px-4 sm:px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-2.5">
            Layanan Pembuatan Website
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.18] mb-4">
            Website Berkinerja Tinggi untuk <br className="hidden sm:block" />
            <span className="text-primary">Mendorong Pertumbuhan Bisnis Anda.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-foreground/75 max-w-2xl mx-auto leading-relaxed mb-8">
            Kami merancang dan mengembangkan website yang cepat dimuat, mudah dikelola, dan dirancang khusus untuk meningkatkan kredibilitas dan konversi penjualan Anda.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/6287816270140?text=Halo%20KreativLabs,%20saya%20tertarik%20untuk%20konsultasi%20pembuatan%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              Mulai Konsultasi Gratis
            </a>

            <Link
              href="/#projects"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-full bg-secondary border border-border hover:border-primary/50 text-foreground text-xs sm:text-sm font-medium hover:text-primary transition-all hover:-translate-y-0.5"
            >
              Lihat Hasil Portofolio
            </Link>
          </div>
        </div>
      </section>

      {/* Services Breakdown Grid */}
      <section className="py-12 px-4 sm:px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 tracking-tight">
              Pilihan Solusi Website Sesuai Kebutuhan
            </h2>
            <p className="text-xs sm:text-sm text-foreground/70 max-w-xl mx-auto">
              Setiap paket dikerjakan secara kustom dengan teknologi web modern tanpa menggunakan template usang.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {websiteServices.map((service, index) => {
              const Icon = service.icon;
              const waUrl = `https://wa.me/6287816270140?text=${encodeURIComponent(service.waMessage)}`;

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
                        Fitur & Kelengkapan:
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
              Alur Kerja
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Bagaimana Kami Mewujudkan Website Anda
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
              Siap Memulai Proyek Website Bisnis Anda?
            </h2>
            <p className="text-xs sm:text-sm text-foreground/70 max-w-lg mx-auto leading-relaxed mb-6">
              Konsultasikan ide Anda bersama tim developer KreativLabs tanpa biaya awal. Kami bantu berikan estimasi timeline dan rekomendasi terbaik.
            </p>
            <a
              href="https://wa.me/6287816270140?text=Halo%20KreativLabs,%20saya%20ingin%20diskusi%20tentang%20pembuatan%20website"
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
