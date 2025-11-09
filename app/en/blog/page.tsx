"use client";

import NavbarEN from "@/components/NavbarEN";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/sections/en/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../../../data/blogs";

export default function BlogPageEN() {
  return (
    <main className="min-h-screen bg-[#0A192F] overflow-x-hidden w-full max-w-[100vw]">
      <NavbarEN />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-b from-[#0A192F] to-[#0F1E37]">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full mb-6 backdrop-blur-sm">
                <BookOpen className="w-4 h-4 text-[#3B82F6]" />
                <span className="text-sm text-white/90 font-medium">Blog & Articles</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                <span className="text-[#3B82F6]">Kreativ Labs</span> Blog
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                Discover the latest tips, tutorials, and insights about web development, 
                graphic design, and digital business solutions
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-[#0A192F]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <FadeInStagger key={post.id} index={index} delay={100}>
                <Link href={`/blog/${post.slug}`}>
                  <Card className="group bg-[#0F1E37] border-white/10 hover:border-[#3B82F6]/50 transition-all duration-300 overflow-hidden cursor-pointer h-full flex flex-col">
                    {/* Post Image */}
                    <div className="relative h-56 bg-[#1E3A5F] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E37] via-transparent to-transparent opacity-60"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 bg-[#3B82F6] text-white text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Post Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-white/60 text-xs mb-3">
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
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#3B82F6] transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-white/70 text-sm mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded-md"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      {/* Read More */}
                      <div className="flex items-center text-[#3B82F6] text-sm font-semibold group-hover:gap-2 transition-all">
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
              <p className="text-white/60 text-lg">No articles published yet.</p>
            </div>
          )}

          {/* CTA Section */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-br from-[#0F1E37] to-[#1E3A5F] border border-white/10 rounded-2xl p-10 max-w-3xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Interested in Our Services?
                </h3>
                <p className="text-white/70 mb-6">
                  Consult your web development and graphic design needs with our professional team
                </p>
                <Button 
                  asChild
                  className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white px-8 py-6 text-base rounded-full shadow-lg shadow-[#3B82F6]/30"
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
      <BackToTop />
    </main>
  );
}
