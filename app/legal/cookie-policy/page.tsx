import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowLeft, Cookie, ShieldCheck, BarChart3, Settings2, SlidersHorizontal, MessageCircle, ExternalLink } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Kebijakan Cookie | KreativLabs.id",
  description: "Penjelasan transparan mengenai penggunaan cookie dan teknologi penyimpanan data di website KreativLabs.id.",
  alternates: {
    canonical: "https://www.kreativlabs.id/legal/cookie-policy",
  },
};

const cookieCategories = [
  {
    id: "essential",
    icon: ShieldCheck,
    title: "Cookie Esensial (Wajib)",
    badge: "Wajib",
    badgeType: "required",
    summary: "Dibutuhkan agar fungsi dasar dan keamanan website berjalan normal.",
    description: "Cookie ini langsung aktif saat kamu membuka website. Tanpa cookie ini, fitur keamanan, navigasi halaman, dan penyimpanan preferensi tema (dark/light mode) tidak dapat berfungsi dengan benar.",
    items: [
      "Menyimpan preferensi tampilan tema (Next-Themes)",
      "Proteksi keamanan formulir dan pencegahan serangan spam (CSRF/Honeypot)",
      "Sesi navigasi dasar antar halaman"
    ],
    duration: "Sesi browsing aktif hingga maksimal 1 tahun"
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Cookie Pengukuran & Kinerja",
    badge: "Opsional",
    badgeType: "optional",
    summary: "Membantu kami mengetahui performa halaman dan kecepatan akses.",
    description: "Data yang dikumpulkan bersifat anonim dan agregat (tanpa identitas pribadi langsung), seperti artikel yang paling sering dibaca, durasi muat halaman, dan jenis browser yang digunakan.",
    items: [
      "Google Analytics 4 (pengukuran kunjungan halaman anonim)",
      "Vercel Analytics & Speed Insights (pemantauan kecepatan muat web)"
    ],
    duration: "Mulai dari sesi aktif hingga maksimal 2 tahun"
  },
  {
    id: "functional",
    icon: Settings2,
    title: "Cookie Fungsionalitas",
    badge: "Opsional",
    badgeType: "optional",
    summary: "Mengingat pilihan navigasi agar kamu tidak perlu mengatur ulang.",
    description: "Digunakan untuk mempertahankan preferensi bahasa antarmuka atau status interaksi tertentu saat kamu kembali mengunjungi KreativLabs.id.",
    items: [
      "Penyimpanan pilihan bahasa antarmuka (ID / EN)",
      "Status interaksi banner promosi musiman"
    ],
    duration: "Hingga 12 bulan"
  }
];

const thirdPartyPartners = [
  {
    name: "Google Analytics & Fonts",
    role: "Analitik performa web & pemuatan font",
    privacyUrl: "https://policies.google.com/privacy"
  },
  {
    name: "Vercel Platform",
    role: "Infrastruktur hosting & analitik performa server",
    privacyUrl: "https://vercel.com/legal/privacy-policy"
  }
];

export default function CookiePolicyPage() {
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
                <Cookie className="w-4 h-4 shrink-0" />
                <span>Dokumen Kebijakan</span>
              </div>
              <p className="text-xs text-foreground/60">
                Pembaruan terakhir: <time dateTime="2026-11-02">{lastUpdated}</time>
              </p>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Kebijakan Cookie
            </h1>

            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed max-w-2xl">
              Halaman ini menjelaskan bagaimana KreativLabs.id menggunakan cookie dan teknologi serupa saat kamu mengakses website kami, tujuan penggunaannya, serta bagaimana kamu dapat mengelolanya.
            </p>
          </header>

          {/* Quick Context Block */}
          <section className="rounded-2xl border border-border/70 bg-secondary/50 p-5 sm:p-7 mb-8 sm:mb-10 text-xs sm:text-sm leading-relaxed text-foreground/80">
            <h2 className="font-bold text-foreground text-sm sm:text-base mb-2">
              Apa itu Cookie dan Kenapa Digunakan?
            </h2>
            <p className="mb-3">
              Cookie adalah berkas teks kecil yang disimpan pada browser perangkatmu saat kamu mengunjungi sebuah website. Di KreativLabs.id, kami mengutamakan kenyamanan dan privasi kamu: kami tidak menjual data cookie dan tidak menanam cookie pihak ketiga yang melacak aktivitasmu di luar lingkup website ini.
            </p>
            <p>
              Cookie kami gunakan untuk fungsi dasar situs, seperti mengingat tema tampilan dan mengukur halaman mana yang sering dibaca agar kami bisa terus memperbaiki kualitas konten dan performa website.
            </p>
          </section>

          {/* Main Categories Section */}
          <section className="space-y-6 sm:space-y-8 mb-10 sm:mb-12">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight mb-2">
                Kategori Cookie yang Kami Gunakan
              </h2>
              <p className="text-xs sm:text-sm text-foreground/70">
                Berikut adalah rincian peran masing-masing cookie yang aktif pada platform kami:
              </p>
            </div>

            <div className="space-y-4">
              {cookieCategories.map((cat) => {
                const IconComponent = cat.icon;
                const isRequired = cat.badgeType === "required";

                return (
                  <article
                    key={cat.id}
                    className="rounded-2xl border border-border/80 bg-card p-5 sm:p-7 transition-colors hover:border-primary/40 shadow-xs"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h3 className="font-bold text-foreground text-base sm:text-lg">
                          {cat.title}
                        </h3>
                      </div>
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold w-fit ${
                          isRequired
                            ? "bg-foreground/10 text-foreground border border-border"
                            : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                        }`}
                      >
                        {cat.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed mb-4">
                      {cat.description}
                    </p>

                    <div className="pt-3 border-t border-border/60">
                      <div className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-2">
                        Contoh penerapan:
                      </div>
                      <ul className="space-y-2 mb-4">
                        {cat.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/75 leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="text-xs text-foreground/60 bg-secondary/60 rounded-xl px-3.5 py-2 font-medium">
                        Masa penyimpanan: <span className="text-foreground/80">{cat.duration}</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Third Party Partners */}
          <section className="rounded-2xl border border-border/80 bg-card p-5 sm:p-7 mb-8 sm:mb-10 shadow-xs">
            <h2 className="text-base sm:text-lg font-bold text-foreground mb-2">
              Layanan Pihak Ketiga
            </h2>
            <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-4">
              Untuk memastikan kecepatan dan ketersediaan sistem, beberapa layanan mitra berikut memproses data teknis dasar sesuai dengan kebijakan privasi masing-masing:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {thirdPartyPartners.map((partner, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-border/60 bg-secondary/40 p-4 flex flex-col justify-between gap-3"
                >
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{partner.name}</h3>
                    <p className="text-xs text-foreground/70 leading-relaxed">{partner.role}</p>
                  </div>
                  <a
                    href={partner.privacyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors w-fit focus-visible:outline-none focus-visible:underline"
                  >
                    <span>Kebijakan Privasi Penyedia</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Browser Controls */}
          <section className="rounded-2xl border border-border/80 bg-card p-5 sm:p-7 mb-8 sm:mb-10 shadow-xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
              <h2 className="text-base sm:text-lg font-bold text-foreground">
                Cara Mengelola Cookie di Perangkatmu
              </h2>
            </div>
            
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed mb-4">
              Kamu memegang kendali penuh atas browser yang kamu gunakan. Hampir semua web browser (Google Chrome, Safari, Mozilla Firefox, Microsoft Edge) menyediakan menu pengaturan untuk:
            </p>

            <ul className="space-y-2 mb-4 text-xs sm:text-sm text-foreground/75">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                <span>Melihat berkas cookie apa saja yang tersimpan di perangkatmu.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                <span>Menghapus cookie secara berkala atau otomatis saat jendela browser ditutup.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                <span>Memblokir cookie pihak ketiga tanpa mengganggu operasional situs utama.</span>
              </li>
            </ul>

            <div className="rounded-xl bg-secondary/60 p-3.5 text-xs text-foreground/70 leading-relaxed">
              <strong className="text-foreground font-semibold">Catatan praktis:</strong> Jika kamu mematikan seluruh cookie esensial melalui pengaturan browser secara paksa, fitur preferensi tema warna dan kelancaran form pesan mungkin membutuhkan pemuatan ulang.
            </div>
          </section>

          {/* Contact Assistance Callout */}
          <aside className="rounded-3xl border border-primary/20 bg-card p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-1.5 max-w-lg">
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                Ada pertanyaan seputar data atau cookie kami?
              </h3>
              <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                Kami siap memberikan penjelasan terbuka mengenai teknologi dan privasi data yang kami terapkan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto shrink-0">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20KreativLabs,%20saya%20ingin%20bertanya%20seputar%20kebijakan%20cookie`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Tanya via WhatsApp</span>
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
