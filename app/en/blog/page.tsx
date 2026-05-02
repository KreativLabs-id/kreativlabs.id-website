"use client";

import NavbarEN from "@/components/NavbarEN";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/sections/en/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, BlogPost } from "../../../data/blogs";

function parseDateIndonesian(dateStr: string): Date {
  // Format: "10 Maret 2026"
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
  return new Date(); // Fallback
}

export default function BlogPageEN() {
  const sortedPosts = [...blogPosts].sort((a, b) => {
    return parseDateIndonesian(b.date).getTime() - parseDateIndonesian(a.date).getTime();
  });
  return (
    <main className="min-h-screen bg-background overflow-x-hidden w-full max-w-[100vw]">
      <NavbarEN />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-b from-background to-card">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary rounded-full blur-[120px] opacity-10"></div>

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 backdrop-blur-sm">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/90 font-medium">Blog & Articles</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                <span className="text-primary">Kreativ Labs</span> Blog
              </h1>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Discover the latest tips, tutorials, and insights about web development,
                graphic design, and digital business solutions
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {sortedPosts.map((post, index) => (
              <FadeInStagger key={post.id} index={index} delay={100}>
                <Link href={`/blog/${post.slug}`}>
                  <Card className="group bg-card border-foreground/10 hover:border-primary/50 transition-all duration-300 overflow-hidden cursor-pointer h-full flex flex-col">
                    {/* Post Image */}
                    <div className="relative h-56 bg-secondary overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60"></div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-foreground/60 text-xs mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-foreground/70 text-sm mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-foreground/5 text-foreground/60 text-xs rounded-md"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More */}
                      <div className="flex items-center text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </FadeInStagger>
            ))}
          </div>

          {/* No Posts Message (if empty) */}
          {blogPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-foreground/60 text-lg">No articles published yet.</p>
            </div>
          )}

          {/* CTA Section */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-br from-card to-[#1E3A5F] border border-foreground/10 rounded-2xl p-10 max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Interested in Our Services?
                </h3>
                <p className="text-foreground/70 mb-6">
                  Consult your web development and graphic design needs with our professional team
                </p>
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base rounded-full shadow-lg shadow-primary/30"
                >
                  <a href="/en#contact">
                    Contact Us Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
