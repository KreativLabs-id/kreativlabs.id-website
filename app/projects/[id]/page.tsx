"use client";

import { useParams } from "next/navigation";
import { getProjectById } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";

export default function ProjectDetail() {
  const params = useParams();
  const project = getProjectById(params.id as string);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0A192F] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Tidak Ditemukan</h1>
          <Link href="/#projects">
            <Button className="bg-[#3B82F6] hover:bg-[#3B82F6]/90">
              Kembali ke Projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A192F]">
      {/* Hero Section */}
      <section className="relative pt-28 pb-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#3B82F6] rounded-full blur-[120px] opacity-10"></div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Project Header */}
          <div className="max-w-6xl mx-auto">
            <AnimatedSection animation="fade-up">
              {/* Back Button & Category Badge - Sejajar */}
              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <Link href="/#projects">
                  <Button 
                    variant="ghost"
                    className="group text-white hover:text-[#3B82F6] hover:bg-white/5 px-4 py-2 h-auto transition-all duration-300"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Kembali ke Projects
                  </Button>
                </Link>
                <div className="px-4 py-2 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full">
                  <span className="text-[#3B82F6] text-sm font-semibold">{project.category}</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-white/70 mb-6 max-w-3xl">
                {project.description}
              </p>
            </AnimatedSection>

            {/* Project Meta */}
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-white/70">
                  <User className="w-5 h-5 text-[#3B82F6]" />
                  <span className="text-sm">Klien: <span className="text-white font-semibold">{project.client}</span></span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Clock className="w-5 h-5 text-[#3B82F6]" />
                  <span className="text-sm">Durasi: <span className="text-white font-semibold">{project.duration}</span></span>
                </div>
                <div className="flex items-center gap-2 text-white/70">
                  <Calendar className="w-5 h-5 text-[#3B82F6]" />
                  <span className="text-sm">Tahun: <span className="text-white font-semibold">{project.year}</span></span>
                </div>
              </div>
            </AnimatedSection>

            {/* Main Image */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="relative h-[250px] md:h-[400px] rounded-2xl overflow-hidden mb-8">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Overview */}
                <AnimatedSection animation="fade-up">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
                    <p className="text-white/70 text-lg leading-relaxed">
                      {project.fullDescription}
                    </p>
                  </div>
                </AnimatedSection>

                {/* Challenge */}
                <AnimatedSection animation="fade-up" delay={100}>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">Tantangan</h2>
                    <p className="text-white/70 text-lg leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                </AnimatedSection>

                {/* Solution */}
                <AnimatedSection animation="fade-up" delay={200}>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">Solusi</h2>
                    <p className="text-white/70 text-lg leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </AnimatedSection>

                {/* Results */}
                <AnimatedSection animation="fade-up" delay={300}>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Hasil</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.results.map((result, index) => (
                        <FadeInStagger key={index} index={index} delay={100}>
                          <div className="flex items-start gap-3 bg-[#0F1E37]/50 border border-white/10 rounded-xl p-4">
                            <CheckCircle2 className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                            <span className="text-white/80">{result}</span>
                          </div>
                        </FadeInStagger>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                {/* Features */}
                <AnimatedSection animation="fade-up" delay={400}>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-6">Fitur Utama</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.features.map((feature, index) => (
                        <FadeInStagger key={index} index={index} delay={50}>
                          <div className="flex items-center gap-3 text-white/70">
                            <div className="w-2 h-2 bg-[#3B82F6] rounded-full"></div>
                            <span>{feature}</span>
                          </div>
                        </FadeInStagger>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>

                {/* Gallery */}
                {project.gallery && project.gallery.length > 0 && (
                  <AnimatedSection animation="fade-up" delay={500}>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-6">Gallery</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.gallery.map((image, index) => (
                          <FadeInStagger key={index} index={index} delay={100}>
                            <div className="relative h-64 rounded-xl overflow-hidden group">
                              <Image
                                src={image}
                                alt={`${project.title} - Image ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                          </FadeInStagger>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Tech Stack */}
                  <AnimatedSection animation="fade-left">
                    <Card className="bg-[#0F1E37] border-white/10 p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1.5 bg-[#3B82F6]/10 border border-[#3B82F6]/20 rounded-full text-[#3B82F6] text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </AnimatedSection>

                  {/* Project Info */}
                  <AnimatedSection animation="fade-left" delay={100}>
                    <Card className="bg-[#0F1E37] border-white/10 p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Informasi Project</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="text-white/50 text-sm mb-1">Kategori</div>
                          <div className="text-white font-semibold">{project.category}</div>
                        </div>
                        <div>
                          <div className="text-white/50 text-sm mb-1">Klien</div>
                          <div className="text-white font-semibold">{project.client}</div>
                        </div>
                        <div>
                          <div className="text-white/50 text-sm mb-1">Durasi Pengerjaan</div>
                          <div className="text-white font-semibold">{project.duration}</div>
                        </div>
                        <div>
                          <div className="text-white/50 text-sm mb-1">Tahun</div>
                          <div className="text-white font-semibold">{project.year}</div>
                        </div>
                      </div>
                    </Card>
                  </AnimatedSection>

                  {/* CTA */}
                  <AnimatedSection animation="fade-left" delay={200}>
                    <Card className="bg-gradient-to-br from-[#3B82F6]/20 to-[#3B82F6]/5 border-[#3B82F6]/30 p-6">
                      <h3 className="text-xl font-bold text-white mb-3">Tertarik dengan Project Serupa?</h3>
                      <p className="text-white/70 text-sm mb-4">
                        Hubungi kami untuk konsultasi gratis dan dapatkan penawaran terbaik!
                      </p>
                      <Link href="/#contact">
                        <Button className="w-full bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white">
                          Hubungi Kami
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </Card>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6]/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Siap Memulai Project Anda?
              </h2>
              <p className="text-white/70 text-lg mb-8">
                Mari diskusikan kebutuhan project Anda dan wujudkan ide menjadi kenyataan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact">
                  <Button className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white px-8 py-6 text-base">
                    Mulai Konsultasi Gratis
                  </Button>
                </Link>
                <Link href="/#projects">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base">
                    Lihat Project Lainnya
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
