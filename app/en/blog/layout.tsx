import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kreativlabs.id'),
  title: "Blog - KreativLabs.id | Web Development & Design Tips",
  description:
    "Discover the latest tips, tutorials, and insights about web development, graphic design, and digital business solutions from KreativLabs.id",
  keywords:
    "web development blog, design tips, tutorial website, desain grafis, digital marketing, kreativlabs blog",
  openGraph: {
    title: "Blog - KreativLabs.id | Web Development & Design Tips",
    description:
      "Discover the latest tips, tutorials, and insights about web development, graphic design, and digital business solutions",
    url: "https://www.kreativlabs.id/en/blog",
    siteName: "KreativLabs.id",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.kreativlabs.id/og-image.png",
        secureUrl: "https://www.kreativlabs.id/og-image.png",
        width: 1200,
        height: 630,
        alt: "KreativLabs.id Blog - Web Development & Design Tips",
        type: "image/png",
      },
      {
        url: "https://www.kreativlabs.id/og-image.jpg",
        secureUrl: "https://www.kreativlabs.id/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KreativLabs.id Blog - Web Development & Design Tips",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - KreativLabs.id | Web Development & Design Tips",
    description:
      "Discover the latest tips, tutorials, and insights about web development, graphic design, and digital business solutions",
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
