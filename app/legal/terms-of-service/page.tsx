import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowLeft, FileText, CheckCircle2, ShieldCheck, RefreshCw, CreditCard, Scale, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Ketentuan Layanan | KreativLabs.id",
  description: "Pedoman kerja sama, alur revisi, hak kekayaan intelektual, dan kesepakatan layanan di KreativLabs.id.",
  alternates: {
    canonical: "https://www.kreativlabs.id/legal/terms-of-service",
  },
};

const termsSections = [
  {
    icon: CheckCircle2,
    title: "1. Ruang Lingkup Layanan",
    summary: "Layanan pengerjaan digital resmi yang kami sediakan untuk klien.",
    points: [
      "Pengembangan Website: Pembuatan Landing Page terstruktur, Company Profile, Katalog/E-Commerce, dan Aplikasi Web kustom.",
      "Desain Grafis & Identitas Brand: Desain logo, identitas visual, materi promosi cetak, dan template media sosial.",
      "Setiap proyek memiliki cakupan kerja (scope of work) yang disepakati bersama sebelum tahap pengerjaan dimulai."
    ]
  },
  {
    icon: CreditCard,
    title: "2. Skema Pembayaran & Uang Muka (DP)",
    summary: "Aturan pembayaran transparan untuk memulai dan menyelesaikan proyek.",
    points: [
      "Biaya layanan dikonfirmasi secara tertulis sebelum pekerjaan teknis berjalan.",
      "Uang muka (DP) minimal 50% dari total nilai proyek wajib diselesaikan sebelum tim kami mulai merancang atau menulis kode.",
      "Pelunasan 50% sisanya dilakukan setelah proyek selesai diuji, disetujui, dan sebelum serah terima akses penuh (domain, server, atau file master).",
      "Pembayaran sah melalui rekening bank resmi atau e-wallet yang kami konfirmasikan secara langsung."
    ]
  },
  {
    icon: RefreshCw,
    title: "3. Alur Revisi & Penyesuaian",
    summary: "Kami memastikan hasil akhir sesuai dengan kesepakatan awal.",
    points: [
      "Revisi minor (penyesuaian tata letak, warna, teks, atau gambar) diberikan sesuai batas revisi pada paket yang dipilih selama masa pengerjaan.",
      "Permintaan fitur baru, penambahan halaman di luar kesepakatan awal, atau perombakan konsep total setelah approval awal akan dihitung sebagai add-on terpisah dengan penyesuaian biaya dan waktu."
    ]
  },
  {
    icon: Scale,
    title: "4. Hak Kepemilikan & Portofolio",
    summary: "Kejelasan hak cipta aset digital yang telah selesai dikerjakan.",
    points: [
      "Setelah pembayaran lunas 100%, seluruh hak pakai dan hak kepemilikan atas hasil akhir (website, aset desain final) sepenuhnya menjadi milik klien.",
      "KreativLabs.id berhak menampilkan tangkapan layar atau ringkasan hasil kerja sebagai bagian dari portofolio resmi studio, kecuali ada perjanjian kerahasiaan khusus (NDA) tertulis sebelumnya."
    ]
  },
  {
    icon: ShieldCheck,
    title: "5. Garansi Teknis Pasca-Peluncuran",
    summary: "Dukungan berkelanjutan agar websitemu tetap berjalan dengan baik.",
    points: [
      "Kami memberikan garansi perbaikan bug teknis selama 30 hari kalender setelah website resmi diluncurkan.",
      "Garansi mencakup kendala kode bawaan atau error fungsi yang bukan disebabkan oleh modifikasi pihak ketiga atau kelalaian hosting luar.",
      "Untuk pemeliharaan berkala, backup rutin, dan update konten harian setelah masa garansi, kami menyediakan paket maintenance terpisah."
    ]
  }
];

export default function TermsOfServicePage() {
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
                <FileText className="w-4 h-4 shrink-0" />
                <span>Kesepakatan Kerja</span>
              </div>
              <p className="text-xs text-foreground/60">
                Pembaruan terakhir: <time dateTime="2026-11-02">{lastUpdated}</time>
              </p>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Ketentuan Layanan
            </h1>

            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed max-w-2xl">
              Ketentuan ini disusun agar kerja sama antara kamu dan tim KreativLabs.id berjalan lancar, terarah, dan saling menguntungkan. Harap membaca poin-poin berikut sebelum memulai proyek.
            </p>
          </header>

          {/* Terms Articles List */}
          <section className="space-y-4 sm:space-y-6 mb-10 sm:mb-12">
            {termsSections.map((section, index) => {
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

          {/* Cancellation Policy Box */}
          <section className="rounded-2xl border border-border/70 bg-secondary/50 p-5 sm:p-7 mb-8 sm:mb-10 text-xs sm:text-sm leading-relaxed text-foreground/80">
            <h3 className="font-bold text-foreground text-sm sm:text-base mb-2">
              Pembatalan Proyek & Refund
            </h3>
            <p className="mb-2">
              Kami menghargai komitmen waktu dan sumber daya kedua belah pihak:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                <span>Jika pembatalan diajukan sebelum pengerjaan desain/kode dimulai, DP akan dikembalikan penuh (100%).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                <span>Jika pengerjaan konsep awal sudah berjalan, pengembalian DP disesuaikan dengan proporsi waktu dan tenaga yang telah dikeluarkan (maksimal refund 50% DP).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                <span>Setelah proyek masuk tahap finalisasi atau serah terima, dana yang telah dibayarkan tidak dapat dikembalikan.</span>
              </li>
            </ul>
          </section>

          {/* Contact Studio Assistance */}
          <aside className="rounded-3xl border border-primary/20 bg-card p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1.5 max-w-lg">
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                Butuh penyesuaian khusus atau NDA?
              </h3>
              <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                Kami siap mendiskusikan perjanjian kerja sama atau syarat kerahasiaan sebelum proyek dimulai.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20KreativLabs,%20saya%20ingin%20konsultasi%20mengenai%20ketentuan%20layanan`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Diskusi via WhatsApp</span>
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
