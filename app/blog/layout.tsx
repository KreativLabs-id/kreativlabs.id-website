import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://kreativlabs.my.id'),
  title: "Blog - KreativLabs.id | Tips Web Development & Desain",
  description:
    "Temukan tips, tutorial, dan insight terbaru seputar web development, desain grafis, dan solusi bisnis digital dari KreativLabs.id",
  keywords:
    "blog web development, tips desain, tutorial website, desain grafis, digital marketing, kreativlabs blog",
  openGraph: {
    title: "Blog - KreativLabs.id | Tips Web Development & Desain",
    description:
      "Temukan tips, tutorial, dan insight terbaru seputar web development, desain grafis, dan solusi bisnis digital",
    url: "https://kreativlabs.my.id/blog",
    siteName: "KreativLabs.id",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://kreativlabs.my.id/bannerkreativlabsid.png",
        width: 1200,
        height: 630,
        alt: "KreativLabs.id Blog - Tips Web Development & Desain",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - KreativLabs.id | Tips Web Development & Desain",
    description:
      "Temukan tips, tutorial, dan insight terbaru seputar web development, desain grafis, dan solusi bisnis digital",
    images: ["https://kreativlabs.my.id/bannerkreativlabsid.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
