"use client";

import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/sections/Footer";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogs";

function parseDateIndonesian(dateStr: string): Date {
  const months: { [key: string]: number } = {
    "Januari": 0, "Februari": 1, "Maret": 2, "April": 3, "Mei": 4, "Juni": 5,
    "Juli": 6, "Agustus": 7, "September": 8, "Oktober": 9, "November": 10, "Desember": 11
  };
  const parts = dateStr.split(" ");
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10);
    const month = months[parts[1]] || 0;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }
  return new Date();
}

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort((a, b) => {
    return parseDateIndonesian(b.date).getTime() - parseDateIndonesian(a.date).getTime();
  });

  return (
    <main className="min-h-screen bg-background overflow-x-hidden w-full">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-28 pb-10 bg-background overflow-hidden w-full">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-3">
                Wawasan & <span className="text-primary">Edukasi Digital</span>
              </h1>
              <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
                Kumpulan artikel praktis seputar pengembangan website, desain visual, SEO, dan strategi pertumbuhan bisnis online.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-8 pb-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">

          {sortedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedPosts.map((post, index) => (
                <FadeInStagger key={post.id} index={index} delay={40}>
                  <Link href={`/blog/${post.slug}`} className="block h-full">
                    <div className="group h-full flex flex-col justify-between bg-card border border-border/80 hover:border-primary/50 rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">

                      {/* Post Thumbnail */}
                      <div className="relative w-full aspect-16/10 bg-secondary overflow-hidden border-b border-border/50">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Post Details */}
                      <div className="p-5 sm:p-6 flex flex-col justify-between grow">
                        <div>
                          <div className="flex items-center justify-between text-xs text-foreground/50 mb-2">
                            <span className="font-semibold text-primary uppercase tracking-wider text-[11px]">
                              {post.category}
                            </span>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>

                          <h2 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                            {post.title}
                          </h2>

                          <p className="text-foreground/70 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                            {post.excerpt}
                          </p>
                        </div>

                        {/* Card Bottom Meta */}
                        <div className="pt-3 border-t border-border/40 flex items-center justify-between text-xs font-semibold text-primary">
                          <span className="text-foreground/50 font-normal text-[11px] flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                            Baca Artikel
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>

                      </div>
                    </div>
                  </Link>
                </FadeInStagger>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-foreground/60 text-base">Belum ada artikel yang dipublikasikan.</p>
            </div>
          )}

          {/* Consultation Banner */}
          <AnimatedSection animation="fade-up" delay={150}>
            <div className="bg-card border border-border/80 rounded-2xl p-8 sm:p-12 text-center mt-16 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 tracking-tight">
                Ingin Mengembangkan Website untuk Bisnis Anda?
              </h2>
              <p className="text-xs sm:text-sm text-foreground/70 max-w-lg mx-auto leading-relaxed mb-6">
                Diskusikan konsep desain dan strategi digital yang tepat bersama tim KreativLabs.
              </p>

              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                Mulai Konsultasi Gratis
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
