"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2, Tag, Check } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { getBlogPostBySlug } from "../../../data/blogs";
import Markdown from "markdown-to-jsx";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = getBlogPostBySlug(slug);
  const [shareStatus, setShareStatus] = useState<'idle' | 'shared' | 'copied'>('idle');

  const handleShare = async () => {
    if (!post) return;
    
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: window.location.href,
    };

    try {
      // Try Web Share API first (mobile devices)
      if (navigator.share) {
        await navigator.share(shareData);
        setShareStatus('shared');
        setTimeout(() => setShareStatus('idle'), 2000);
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        setShareStatus('copied');
        setTimeout(() => setShareStatus('idle'), 2000);
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  if (!post) {
    return (
      <main className="min-h-screen bg-[#0A192F] overflow-x-hidden w-full max-w-[100vw]">
        <Navbar />
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Artikel Tidak Ditemukan</h1>
          <p className="text-white/70 mb-8">Maaf, artikel yang Anda cari tidak ditemukan.</p>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Blog
            </Link>
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0A192F] overflow-x-hidden w-full max-w-[100vw]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-gradient-to-b from-[#0A192F] to-[#0F1E37]">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 text-white/70 hover:text-[#3B82F6] transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Kembali ke Blog</span>
              </Link>

              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-[#3B82F6]/20 text-[#3B82F6] text-sm font-semibold rounded-full border border-[#3B82F6]/30">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-white/60 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#3B82F6]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#3B82F6] font-bold text-sm">KL</span>
                  </div>
                  <span className="text-sm">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{post.readTime} baca</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1920}
                  height={1080}
                  className="object-cover w-full h-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E37]/80 to-transparent"></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-[#0A192F]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <AnimatedSection animation="fade-up">
                <article className="blog-content prose prose-invert max-w-none">
                  {post.content && (
                    <div className="text-white">
                      <Markdown
                        options={{
                          wrapper: 'article',
                          forceBlock: true,
                          overrides: {
                            h1: { 
                              component: ({ children, ...props }) => (
                                <h1 {...props} className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 mt-6 md:mt-8">{children}</h1>
                              )
                            },
                            h2: { 
                              component: ({ children, ...props }) => (
                                <h2 {...props} className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4 mt-6 md:mt-8">{children}</h2>
                              )
                            },
                            h3: { 
                              component: ({ children, ...props }) => (
                                <h3 {...props} className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 md:mb-3 mt-4 md:mt-6">{children}</h3>
                              )
                            },
                            p: { 
                              component: ({ children, ...props }) => (
                                <p {...props} className="text-white/80 text-base md:text-lg mb-3 md:mb-4 leading-relaxed">{children}</p>
                              )
                            },
                            ul: { 
                              component: ({ children, ...props }) => (
                                <ul {...props} className="pl-4 md:pl-6 text-white/80 mb-4 md:mb-6 space-y-2 md:space-y-3" style={{ listStyleType: 'disc', color: '#3B82F6' }}>{children}</ul>
                              )
                            },
                            ol: { 
                              component: ({ children, ...props }) => (
                                <ol {...props} className="list-decimal pl-4 md:pl-6 text-white/80 mb-4 md:mb-6 space-y-2 md:space-y-3">{children}</ol>
                              )
                            },
                            li: { 
                              component: ({ children, ...props }) => (
                                <li {...props} className="text-white/80 text-base md:text-lg leading-relaxed pl-1 md:pl-2">{children}</li>
                              )
                            },
                            strong: { 
                              component: ({ children, ...props }) => (
                                <strong {...props} className="text-white font-bold">{children}</strong>
                              )
                            },
                            a: { 
                              component: ({ children, ...props }) => (
                                <a {...props} className="text-blue-400 underline hover:text-blue-300 break-all">{children}</a>
                              )
                            },
                            hr: { 
                              component: (props) => (
                                <hr {...props} className="border-white/20 my-6 md:my-8" />
                              )
                            },
                            img: {
                              component: ({ src, alt, ...props }) => (
                                <div className="my-6 md:my-8">
                                  <Image
                                    src={src}
                                    alt={alt || "Blog image"}
                                    width={800}
                                    height={450}
                                    className="w-full h-auto rounded-lg shadow-lg"
                                    {...props}
                                  />
                                </div>
                              )
                            },
                            code: {
                              component: ({ children, ...props }) => (
                                <code {...props} className="bg-[#1E3A5F] px-2 py-1 rounded text-sm font-mono break-all">{children}</code>
                              )
                            },
                            pre: {
                              component: ({ children, ...props }) => (
                                <pre {...props} className="bg-[#1E3A5F] p-4 rounded-lg overflow-x-auto text-sm font-mono mb-4">{children}</pre>
                              )
                            },
                          }
                        }}
                      >
                        {post.content}
                      </Markdown>
                    </div>
                  )}
                  
                  {!post.content && (
                    <p className="text-white/60 text-center py-10">Konten tidak tersedia</p>
                  )}
                </article>

                {/* Tags */}
                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10">
                  <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                    <Tag className="w-4 h-4 md:w-5 md:h-5 text-white/60" />
                    {post.tags.map((tag: string, index: number) => (
                      <span 
                        key={index}
                        className="px-2 md:px-3 py-1 md:py-1.5 bg-white/5 hover:bg-white/10 text-white/70 text-xs md:text-sm rounded-lg transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share Section */}
                <div className="mt-6 md:mt-8 p-4 md:p-6 bg-[#0F1E37]/50 rounded-xl border border-white/10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-white font-bold mb-1 text-sm md:text-base">Bagikan Artikel Ini</h4>
                      <p className="text-white/60 text-xs md:text-sm">Bantu teman Anda menemukan artikel bermanfaat ini</p>
                    </div>
                    <Button
                      onClick={handleShare}
                      className={`${
                        shareStatus !== 'idle'
                          ? 'bg-green-600 hover:bg-green-600' 
                          : 'bg-[#3B82F6] hover:bg-[#3B82F6]/90'
                      } text-white transition-all duration-300 text-sm md:text-base`}
                    >
                      {shareStatus === 'shared' ? (
                        <>
                          <Check className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                          Dibagikan!
                        </>
                      ) : shareStatus === 'copied' ? (
                        <>
                          <Check className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                          Link Disalin!
                        </>
                      ) : (
                        <>
                          <Share2 className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                          Share
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 order-first lg:order-last">
              <div className="sticky top-24 space-y-4 md:space-y-6">
                {/* CTA Card */}
                <AnimatedSection animation="fade-up" delay={200}>
                  <div className="bg-linear-to-br from-[#0F1E37] to-[#1E3A5F] border border-white/10 rounded-xl p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                      Tertarik dengan {post.title}?
                    </h3>
                    <p className="text-white/70 text-xs md:text-sm mb-3 md:mb-4">
                      Dapatkan demo gratis dan konsultasi untuk kebutuhan bisnis Anda
                    </p>
                    <Button 
                      asChild
                      className="w-full bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white text-sm md:text-base"
                    >
                      <Link href="/#contact">Hubungi Kami</Link>
                    </Button>
                  </div>
                </AnimatedSection>

                {/* Author Card */}
                <AnimatedSection animation="fade-up" delay={300}>
                  <div className="bg-[#0F1E37] border border-white/10 rounded-xl p-4 md:p-6">
                    <h4 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">Tentang Penulis</h4>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-[#3B82F6]/20 rounded-full flex items-center justify-center">
                        <span className="text-[#3B82F6] font-bold text-sm md:text-base">KL</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm md:text-base">{post.author}</p>
                        <p className="text-white/60 text-xs">Web Development Team</p>
                      </div>
                    </div>
                    <p className="text-white/70 text-xs md:text-sm">
                      Tim profesional yang berpengalaman dalam web development dan solusi bisnis digital.
                    </p>
                  </div>
                </AnimatedSection>

                {/* Quick Links */}
                <AnimatedSection animation="fade-up" delay={400}>
                  <div className="bg-[#0F1E37] border border-white/10 rounded-xl p-4 md:p-6">
                    <h4 className="text-white font-bold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
                    <div className="space-y-2 md:space-y-3">
                      <Link 
                        href="/#projects"
                        className="block text-white/70 hover:text-[#3B82F6] transition-colors text-xs md:text-sm"
                      >
                        → Lihat Portfolio
                      </Link>
                      <Link 
                        href="/#services"
                        className="block text-white/70 hover:text-[#3B82F6] transition-colors text-xs md:text-sm"
                      >
                        → Layanan Kami
                      </Link>
                      <Link 
                        href="/#pricing"
                        className="block text-white/70 hover:text-[#3B82F6] transition-colors text-xs md:text-sm"
                      >
                        → Harga & Paket
                      </Link>
                      <Link 
                        href="/#contact"
                        className="block text-white/70 hover:text-[#3B82F6] transition-colors text-xs md:text-sm"
                      >
                        → Hubungi Kami
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-b from-[#0A192F] to-[#0F1E37]">
        <div className="container mx-auto px-6">
          <AnimatedSection animation="fade-up">
            <div className="bg-linear-to-br from-[#0F1E37] to-[#1E3A5F] border border-white/10 rounded-2xl p-10 max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Siap Meningkatkan Bisnis Anda?
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Konsultasikan kebutuhan aplikasi kasir dan solusi bisnis digital Anda dengan tim profesional kami
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  asChild
                  className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white px-8 py-6 text-base rounded-full shadow-lg shadow-[#3B82F6]/30"
                >
                  <Link href="/#contact">Hubungi Kami Sekarang</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base rounded-full"
                >
                  <Link href="/blog">Baca Artikel Lainnya</Link>
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
