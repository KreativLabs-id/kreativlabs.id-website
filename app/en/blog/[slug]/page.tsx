"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import NavbarEN from "@/components/NavbarEN";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/sections/en/Footer";
import { ArrowLeft, Share2, Check, Clock, Calendar, Tag } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { getBlogPostBySlug } from "@/data/blogs";
import Markdown from "markdown-to-jsx";

export default function BlogPostPageEN() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogPostBySlug(slug);
  const [shareStatus, setShareStatus] = useState<"idle" | "shared" | "copied">("idle");

  const handleShare = async () => {
    if (!post) return;
    
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareStatus("shared");
        setTimeout(() => setShareStatus("idle"), 2000);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setShareStatus("copied");
        setTimeout(() => setShareStatus("idle"), 2000);
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  if (!post) {
    return (
      <main className="min-h-screen bg-background overflow-x-hidden w-full">
        <NavbarEN />
        <div className="container mx-auto px-4 sm:px-6 py-32 text-center max-w-md">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Article Not Found</h1>
          <p className="text-foreground/70 text-sm mb-6">Sorry, the article you are looking for does not exist.</p>
          <Link
            href="/en/blog"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background overflow-x-hidden w-full">
      <NavbarEN />
      
      {/* Header Section */}
      <section className="relative pt-28 pb-6 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
          <AnimatedSection animation="fade-up">
            
            {/* Back link */}
            <Link 
              href="/en/blog"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground/60 hover:text-primary transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to All Articles</span>
            </Link>

            {/* Category */}
            <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-2.5">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-[1.2] mb-5">
              {post.title}
            </h1>

            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-foreground/60 pb-6 border-b border-border/70">
              <span className="font-semibold text-foreground">{post.author}</span>
              <span className="text-foreground/30">•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="text-foreground/30">•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime} read
              </span>
            </div>

            {/* Cover Image */}
            <div className="relative w-full aspect-16/9 sm:aspect-21/9 rounded-2xl overflow-hidden border border-border/80 bg-secondary shadow-md my-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1200px) 100vw, 1000px"
              />
            </div>

          </AnimatedSection>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-4 pb-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Main Article Body */}
            <div className="lg:col-span-8">
              <AnimatedSection animation="fade-up">
                <article className="prose dark:prose-invert max-w-none text-foreground/85 leading-relaxed">
                  {post.content ? (
                    <Markdown
                      options={{
                        wrapper: "div",
                        forceBlock: true,
                        overrides: {
                          h1: { component: ({ children }) => <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 tracking-tight">{children}</h2> },
                          h2: { component: ({ children }) => <h2 className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-4 tracking-tight">{children}</h2> },
                          h3: { component: ({ children }) => <h3 className="text-lg sm:text-xl font-bold text-foreground mt-6 mb-3 tracking-tight">{children}</h3> },
                          p: { component: ({ children }) => <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4">{children}</p> },
                          ul: { component: ({ children }) => <ul className="list-disc pl-5 text-sm sm:text-base text-foreground/80 mb-4 space-y-2">{children}</ul> },
                          ol: { component: ({ children }) => <ol className="list-decimal pl-5 text-sm sm:text-base text-foreground/80 mb-4 space-y-2">{children}</ol> },
                          li: { component: ({ children }) => <li className="leading-relaxed">{children}</li> },
                          strong: { component: ({ children }) => <strong className="text-foreground font-bold">{children}</strong> },
                          a: { component: ({ children, href }) => <a href={href} className="text-primary underline hover:text-primary/80 transition-colors">{children}</a> },
                          hr: { component: () => <hr className="border-border/60 my-6" /> },
                          code: { component: ({ children }) => <code className="bg-secondary px-2 py-0.5 rounded text-xs font-mono text-foreground/90">{children}</code> },
                          pre: { component: ({ children }) => <pre className="bg-secondary p-4 rounded-xl overflow-x-auto text-xs font-mono mb-4">{children}</pre> },
                        },
                      }}
                    >
                      {post.content}
                    </Markdown>
                  ) : (
                    <p className="text-foreground/60 text-center py-8">Article content is being prepared.</p>
                  )}
                </article>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-10 pt-6 border-t border-border/60 flex items-center gap-2 flex-wrap">
                    <Tag className="w-4 h-4 text-foreground/50" />
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-secondary border border-border/80 text-foreground/75 text-xs rounded-lg"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Share Box */}
                <div className="mt-8 p-5 bg-card border border-border/80 rounded-2xl flex items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-0.5">Share This Article</h4>
                    <p className="text-foreground/60 text-xs">Spread these insights with your team and network.</p>
                  </div>
                  <button
                    onClick={handleShare}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors shrink-0"
                  >
                    {shareStatus === "shared" ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Shared!</span>
                      </>
                    ) : shareStatus === "copied" ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Share</span>
                      </>
                    )}
                  </button>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar (4 Cols) */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                
                {/* Author Card */}
                <div className="bg-card border border-border/80 rounded-2xl p-5 sm:p-6">
                  <h4 className="text-xs font-bold text-foreground mb-3 uppercase tracking-wider">
                    About Author
                  </h4>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                      KL
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">{post.author}</p>
                      <p className="text-foreground/50 text-xs">KreativLabs Editorial Studio</p>
                    </div>
                  </div>
                  <p className="text-foreground/70 text-xs leading-relaxed">
                    Sharing actionable engineering and UI/UX design guides to elevate digital businesses.
                  </p>
                </div>

                {/* Consultation CTA */}
                <div className="bg-card border border-primary/30 rounded-2xl p-5 sm:p-6">
                  <h4 className="text-sm font-bold text-foreground mb-2">
                    Need a Custom Web Solution?
                  </h4>
                  <p className="text-xs text-foreground/70 leading-relaxed mb-4">
                    Consult your business requirements directly with our web engineering team.
                  </p>
                  <a
                    href="https://wa.me/6285872381791?text=Hello%20KreativLabs,%20I%20would%20like%20to%20consult%20about%20a%20website%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Consult via WhatsApp
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Banner */}
          <AnimatedSection animation="fade-up" delay={150}>
            <div className="bg-card border border-border/80 rounded-2xl p-8 sm:p-10 text-center mt-16">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Explore More Articles
              </h2>
              <p className="text-xs sm:text-sm text-foreground/70 mb-5">
                Find more insights and practical tutorials to support your digital roadmap.
              </p>
              <Link
                href="/en/blog"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-secondary border border-border hover:border-primary/40 text-foreground text-xs sm:text-sm font-medium hover:text-primary transition-colors"
              >
                View All Articles
              </Link>
            </div>
          </AnimatedSection>

        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
