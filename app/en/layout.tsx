import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kreativlabs.id'),
  title: "KreativLabs.id - Professional Website & Graphic Design Services Starting from 50k",
  description:
    "Professional website development and graphic design services (logo, poster, social media, packaging) with affordable pricing starting from 50 thousand rupiah. Premium quality, friendly prices!",
  keywords:
    "website services, web development, graphic design, logo design, poster design, social media design, packaging design, affordable design services, cheap website development",
  alternates: {
    canonical: "https://www.kreativlabs.id/en",
    languages: {
      "en-US": "https://www.kreativlabs.id/en",
      "id-ID": "https://www.kreativlabs.id/",
    },
  },
  authors: [{ name: "KreativLabs.id", url: "https://www.kreativlabs.id" }],
  openGraph: {
    title: "KreativLabs.id - Website & Graphic Design Starting from 50k",
    description:
      "Professional website development and graphic design services (logo, poster, social media, packaging) starting from 50 thousand",
    url: "https://www.kreativlabs.id/en",
    siteName: "KreativLabs.id",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.kreativlabs.id/og-image.png",
        secureUrl: "https://www.kreativlabs.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "KreativLabs.id - Website & Graphic Design Starting from 50k",
        type: "image/png",
      },
      {
        url: "https://www.kreativlabs.id/og-image.jpg",
        secureUrl: "https://www.kreativlabs.id/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KreativLabs.id - Website & Graphic Design Starting from 50k",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KreativLabs.id - Website & Graphic Design Starting from 50k",
    description:
      "Professional website development and graphic design services with affordable pricing",
    images: ["https://www.kreativlabs.id/og-image.png"],
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
