import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import SEOSchema from "@/components/SEOSchema";
import { ThemeProvider } from "@/components/theme-provider";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kreativlabs.id'),
  title: {
    default: "Jasa Website Murah & Desain Grafis | KreativLabs.id - Mulai 50rb",
    template: "%s | KreativLabs.id"
  },
  description:
    "Jasa pembuatan website murah & desain grafis profesional mulai 50rb. Landing page, company profile, toko online, desain logo, poster, social media. Kualitas premium, harga UMKM friendly!",
  keywords: [
    // Primary Keywords - Jasa Website
    "jasa pembuatan website",
    "jasa pembuatan website semarang",
    "jasa bikin website",
    "jasa bikin website semarang",
    "jasa website",
    "jasa website murah",
    "jasa buat website",
    "jasa landing page",
    "jasa company profile",
    "jasa toko online",
    "jasa pembuatan e-commerce",
    "jasa website umkm",

    // Primary Keywords - Jasa Design
    "jasa design grafis",
    "jasa desain grafis",
    "jasa desain logo",
    "jasa desain murah",
    "jasa desain poster",
    "jasa desain social media",
    "jasa pembuatan logo",
    "jasa desain semarang",
    "jasa design murah",

    // Location Keywords
    "jasa website semarang",
    "jasa pembuatan website jawa tengah",
    "web developer semarang",
    "desainer grafis semarang",
    "freelance website semarang",

    // Long-tail Keywords
    "bikin website murah berkualitas",
    "harga jasa pembuatan website",
    "jasa desain logo murah berkualitas",
    "paket website umkm murah",
    "jasa website profesional murah"
  ],
  authors: [{ name: "KreativLabs.id", url: "https://kreativlabs.id" }],
  creator: "KreativLabs.id",
  publisher: "KreativLabs.id",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
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
    title: "Jasa Website Murah & Desain Grafis | KreativLabs.id",
    description:
      "Jasa pembuatan website murah & desain grafis profesional mulai 50rb. Landing page, company profile, e-commerce, desain logo, poster, social media. Melayani di seluruh Indonesia!",
    url: "https://kreativlabs.id",
    siteName: "KreativLabs.id",
    locale: "id_ID",
    alternateLocale: "en_US",
    type: "website",
    images: [
      {
        url: "https://kreativlabs.id/bannerkreatiflabsid.png",
        width: 1200,
        height: 630,
        alt: "KreativLabs.id - Jasa Website Murah & Desain Grafis Mulai 50rb",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Website Murah & Desain Grafis | KreativLabs.id",
    description:
      "Jasa pembuatan website & desain grafis profesional mulai 50rb. Melayani di seluruh Indonesia!",
    images: ["https://kreativlabs.id/bannerkreatiflabsid.png"],
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
      <body
        className={`${plusJakartaSans.variable} antialiased font-sans overflow-x-hidden`}
      >
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
