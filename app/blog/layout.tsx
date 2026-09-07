import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kreativlabs.id'),
  title: "Blog - KreativLabs.id | Tips Web Development & Desain",
  description:
    "Temukan tips, tutorial, dan insight terbaru seputar web development, desain grafis, dan solusi bisnis digital dari KreativLabs.id",
  keywords:
    "blog web development, tips desain, tutorial website, desain grafis, digital marketing, kreativlabs blog",
  alternates: {
    canonical: "https://www.kreativlabs.id/blog",
  },
  openGraph: {
    title: "Blog - KreativLabs.id | Tips Web Development & Desain",
    description:
      "Temukan tips, tutorial, dan insight terbaru seputar web development, desain grafis, dan solusi bisnis digital",
    url: "https://www.kreativlabs.id/blog",
    siteName: "KreativLabs.id",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://www.kreativlabs.id/og-image.png",
        secureUrl: "https://www.kreativlabs.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "KreativLabs.id Blog - Tips Web Development & Desain",
        type: "image/png",
      },
      {
        url: "https://www.kreativlabs.id/og-image.jpg",
        secureUrl: "https://www.kreativlabs.id/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KreativLabs.id Blog - Tips Web Development & Desain",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - KreativLabs.id | Tips Web Development & Desain",
    description:
      "Temukan tips, tutorial, dan insight terbaru seputar web development, desain grafis, dan solusi bisnis digital",
    images: ["https://www.kreativlabs.id/og-image.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
