import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import SEOSchema from "@/components/SEOSchema";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kreativlabs.my.id'),
  title: {
    default: "KreativLabs | Sistem Otomatisasi & Aplikasi UMKM Terbaik",
    template: "%s | KreativLabs.id"
  },
  description:
    "Solusi otomatisasi operasional bisnis UMKM. Dari aplikasi kasir pintar, manajemen stok, hingga sistem reservasi. Melipatgandakan produktivitas dan mencegah kebocoran profit.",
  keywords: [
    // Primary Keywords - Sistem UMKM
    "aplikasi kasir umkm",
    "sistem erp mini",
    "software manajemen restoran",
    "otomatisasi bisnis",
    "sistem pos umkm",
    "aplikasi kasir online",
    "sistem manajemen stok",
    
    // Secondary Keywords - Solusi Bisnis
    "software pembukuan umkm",
    "aplikasi reservasi otomatis",
    "sistem order meja",
    "integrasi marketplace umkm",
    "aplikasi kasir pintar",

    // Long-tail Keywords
    "cara mencegah kebocoran stok",
    "aplikasi kasir restoran terbaik",
    "sistem otomatisasi bisnis umkm",
    "software manajemen banyak cabang"
  ],
  authors: [{ name: "KreativLabs.id", url: "https://kreativlabs.my.id" }],
  creator: "KreativLabs.id",
  publisher: "KreativLabs.id",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
  alternates: {
    canonical: "https://kreativlabs.my.id",
    languages: {
      'id-ID': 'https://kreativlabs.my.id',
      'en-US': 'https://kreativlabs.my.id/en',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-icon', type: 'image/png', sizes: '180x180' },
    ],
  },
  openGraph: {
    title: "KreativLabs | Sistem Otomatisasi & Aplikasi UMKM Terbaik",
    description:
      "Solusi otomatisasi operasional bisnis UMKM. Dari aplikasi kasir pintar, manajemen stok, hingga sistem reservasi.",
    url: "https://kreativlabs.my.id",
    siteName: "KreativLabs.id",
    locale: "id_ID",
    alternateLocale: "en_US",
    type: "website",
    images: [
      {
        url: "https://kreativlabs.my.id/bannerkreatiflabsid.png",
        width: 1200,
        height: 630,
        alt: "KreativLabs.id - Jasa Website Murah & Desain Grafis Mulai 50rb",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KreativLabs | Sistem Otomatisasi & Aplikasi UMKM Terbaik",
    description:
      "Solusi otomatisasi operasional bisnis UMKM. Tingkatkan produktivitas bisnis Anda.",
    images: ["https://kreativlabs.my.id/bannerkreatiflabsid.png"],
    creator: "@kreativlabsid",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="overflow-x-hidden" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased font-sans overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SEOSchema />
          <SmoothScroll />
          {children}
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""} />
        </ThemeProvider>
      </body>
    </html>
  );
}
