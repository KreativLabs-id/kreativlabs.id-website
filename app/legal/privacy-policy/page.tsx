import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowLeft, Shield, Database, Lock, UserCheck, Eye, MessageCircle, ExternalLink } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | KreativLabs.id",
  description: "Prinsip perlindungan data dan privasi pengguna di KreativLabs.id. Kami menjaga informasi bisnismu tetap aman.",
  alternates: {
    canonical: "https://www.kreativlabs.id/legal/privacy-policy",
  },
};

const privacyPrinciples = [
  {
    icon: Database,
    title: "1. Informasi yang Kami Terima",
    summary: "Hanya data yang kamu berikan secara sadar saat berkomunikasi atau memesan layanan.",
    points: [
      "Kontak bisnis: Nama, alamat email, dan nomor WhatsApp saat mengirim form atau berkonsultasi.",
      "Kebutuhan proyek: Informasi usaha, materi teks, foto, aset logo, atau referensi desain yang kamu bagikan kepada tim kami.",
      "Data teknis anonim: Alamat IP umum, tipe peramban web, dan waktu kunjungan untuk menjaga performa dan kestabilan server."
    ]
  },
  {
    icon: Eye,
    title: "2. Penggunaan Informasi",
    summary: "Seluruh data hanya digunakan untuk keperluan pengerjaan proyek dan komunikasi resmi.",
    points: [
      "Membalas pesan konsultasi, menyusun rincian penawaran, dan memulai proses pengerjaan proyek.",
      "Melakukan koordinasi teknis, preview desain, dan pengiriman invoice.",
      "Kami tidak pernah menjual atau menyewakan informasi kontakmu kepada pihak pemasaran pihak ketiga."
    ]
  },
  {
    icon: Lock,
    title: "3. Keamanan & Kerahasiaan Data",
    summary: "Perlindungan data proyek dengan standar pengamanan yang memadai.",
    points: [
      "Transmisi data di website KreativLabs.id dilindungi dengan enkripsi standar industri (SSL/TLS).",
      "Akses file proyek dan kredensial hosting/domain hanya dipegang oleh staf yang bertanggung jawab langsung atas proyekmu.",
      "Setelah proyek selesai dan diserahterimakan, kamu dapat meminta penghapusan kredensial sementara kapan saja."
    ]
  },
  {
    icon: UserCheck,
    title: "4. Hak dan Kendali Kamu",
    summary: "Kamu berhak sepenuhnya atas data pribadi yang tersimpan di sistem kami.",
    points: [
      "Meminta rangkuman data kontak apa saja yang tercatat dalam riwayat layanan kami.",
      "Memperbarui atau memperbaiki nomor kontak dan alamat email jika terjadi perubahan.",
      "Meminta penghapusan data kontak atau arsip materi proyek setelah kewajiban proyek selesai."
    ]
  }
];

export default function PrivacyPolicyPage() {
  const lastUpdated = "2 November 2026";

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-primary/20 selection:text-foreground">
      <Navbar />

      <div className="w-full pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          
          {/* Breadcrumb & Navigation */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground/70 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg px-2 py-1 -ml-2"
            >
              <ArrowLeft className="w-4 h-4 shrink-0" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>

          {/* Header Card */}
          <header className="rounded-3xl border border-border/80 bg-card p-6 sm:p-10 mb-8 sm:mb-10 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary/10 text-primary text-xs font-semibold w-fit">
                <Shield className="w-4 h-4 shrink-0" />
                <span>Dokumen Legal</span>
              </div>
              <p className="text-xs text-foreground/60">
                Pembaruan terakhir: <time dateTime="2026-11-02">{lastUpdated}</time>
              </p>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Kebijakan Privasi
            </h1>

            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed max-w-2xl">
              Privasi dan kerahasiaan materi bisnismu adalah prioritas kami. Kebijakan ini menguraikan komitmen KreativLabs.id dalam mengumpulkan, menjaga, dan mengelola informasi yang kamu bagikan.
            </p>
          </header>

          {/* Core Principles */}
          <section className="space-y-4 sm:space-y-6 mb-10 sm:mb-12">
            {privacyPrinciples.map((section, index) => {
              const IconComponent = section.icon;

              return (
                <article
                  key={index}
                  className="rounded-2xl border border-border/80 bg-card p-5 sm:p-7 transition-colors hover:border-primary/40 shadow-xs"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h2 className="font-bold text-foreground text-base sm:text-lg">
                      {section.title}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-foreground/70 mb-4 ml-0 sm:ml-12 leading-relaxed">
                    {section.summary}
                  </p>

                  <div className="pt-3 border-t border-border/60 ml-0 sm:ml-12">
                    <ul className="space-y-2.5">
                      {section.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </section>

          {/* Cookie Notice Cross-link */}
          <section className="rounded-2xl border border-border/70 bg-secondary/50 p-5 sm:p-7 mb-8 sm:mb-10 text-xs sm:text-sm leading-relaxed text-foreground/80">
            <h3 className="font-bold text-foreground text-sm sm:text-base mb-2">
              Penggunaan Cookie & Teknologi Penunjang
            </h3>
            <p className="mb-3">
              Kami menggunakan cookie secukupnya untuk keperluan teknis seperti mengingat tema warna website dan mengukur performa halaman melalui analitik anonim.
            </p>
            <p>
              Rincian kategori cookie dan langkah pengaturannya dapat kamu pelajari secara lengkap di halaman{" "}
              <Link
                href="/legal/cookie-policy"
                className="font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1 focus-visible:outline-none focus-visible:underline"
              >
                <span>Kebijakan Cookie</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
              .
            </p>
          </section>

          {/* Contact Studio Assistance */}
          <aside className="rounded-3xl border border-primary/20 bg-card p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1.5 max-w-lg">
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                Ingin menanyakan perlindungan datamu?
              </h3>
              <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                Hubungi kami via WhatsApp atau email resmi di hello@kreativlabs.id. Kami siap membantu setiap pertanyaanmu.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20KreativLabs,%20saya%20ingin%20bertanya%20mengenai%20kebijakan%20privasi`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat via WhatsApp</span>
              </a>

              <Link
                href="/#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-secondary border border-border text-foreground hover:border-primary/40 text-xs sm:text-sm font-semibold transition-all hover:-translate-y-0.5"
              >
                Form Kontak
              </Link>
            </div>
          </aside>

        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
