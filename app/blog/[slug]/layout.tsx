import type { Metadata } from "next";
import { getBlogPostBySlug } from "@/data/blogs";

type Props = {
  params: { slug: string };
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Artikel Tidak Ditemukan - KreativLabs.id",
      description: "Artikel yang Anda cari tidak ditemukan",
    };
  }

  const baseUrl = "https://kreativlabs.my.id";
  const fullUrl = `${baseUrl}/blog/${post.slug}`;
  const imageUrl = `${baseUrl}/bannerkreativlabsid.png`;

  return {
    metadataBase: new URL(baseUrl),
    title: `${post.title} - KreativLabs.id`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author }],
    openGraph: {
      title: `${post.title} - KreativLabs.id`,
      description: post.excerpt,
      url: fullUrl,
      siteName: "KreativLabs.id",
      locale: "id_ID",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} - KreativLabs.id`,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
