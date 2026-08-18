"use client";

import { useParams } from "next/navigation";
import { getProjectById } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, MessageSquare } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export default function ProjectDetail() {
  const params = useParams();
  const project = getProjectById(params.id as string);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">Project Tidak Ditemukan</h1>
          <p className="text-foreground/70 text-sm mb-6">
            Halaman studi kasus yang Anda cari tidak tersedia atau telah dipindahkan.
          </p>
          <Link
            href="/#projects"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            Kembali ke Portofolio
          </Link>
        </div>
      </div>
    );
  }

  const waUrl = `https://wa.me/6287816270140?text=${encodeURIComponent(`Halo KreativLabs, saya tertarik dengan project ${project.title} dan ingin konsultasi project serupa.`)}`;

  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        
        {/* Navigation & Editorial Header */}
        <AnimatedSection animation="fade-up">
          <div className="mb-6">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-foreground/60 hover:text-primary transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Kembali ke Portofolio</span>
            </Link>

            <span className="text-xs font-semibold text-primary uppercase tracking-widest block mb-2.5">
              {project.category}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-[1.15] mb-4">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed max-w-3xl">
              {project.description}
            </p>

            {/* Editorial Metadata Bar (No AI badges) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-y border-border/70 my-8">
              <div>
                <span className="text-[11px] font-medium text-foreground/50 block uppercase tracking-wider mb-1">
                  Klien
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {project.client}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-medium text-foreground/50 block uppercase tracking-wider mb-1">
                  Kategori
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {project.category}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-medium text-foreground/50 block uppercase tracking-wider mb-1">
                  Durasi Pengerjaan
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {project.duration}
                </span>
              </div>

              <div>
                <span className="text-[11px] font-medium text-foreground/50 block uppercase tracking-wider mb-1">
                  Tahun
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {project.year}
                </span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Main Showcase Banner Image */}
        <AnimatedSection animation="fade-up" delay={80}>
          <div className="relative w-full aspect-16/9 sm:aspect-21/9 rounded-2xl overflow-hidden border border-border/80 bg-secondary shadow-md mb-12">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </AnimatedSection>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          
          {/* Main Column (8 Cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview */}
            <AnimatedSection animation="fade-up">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 tracking-tight">
                  Tentang Proyek
                </h2>
                <p className="text-foreground/75 text-sm sm:text-base leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>
            </AnimatedSection>

            {/* Challenge & Solution */}
            <AnimatedSection animation="fade-up" delay={80}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-card border border-border/80 rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-foreground mb-2 uppercase tracking-wider">
                    Tantangan
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="bg-card border border-border/80 rounded-2xl p-6">
                  <h3 className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">
                    Solusi Kami
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Key Results */}
            {project.results && project.results.length > 0 && (
              <AnimatedSection animation="fade-up" delay={120}>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 tracking-tight">
                    Hasil & Dampak
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {project.results.map((result, idx) => (
                      <div
                        key={idx}
                        className="bg-card border border-border/80 rounded-xl p-4 flex items-start gap-3"
                      >
                        <div className="w-4 h-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-foreground/80">
                          {result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )}

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <AnimatedSection animation="fade-up" delay={160}>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 tracking-tight">
                    Fitur yang Dikembangkan
                  </h2>
                  <div className="bg-card border border-border/80 rounded-2xl p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            )}

            {/* Gallery Screenshots */}
            {project.gallery && project.gallery.length > 0 && (
              <AnimatedSection animation="fade-up" delay={200}>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 tracking-tight">
                    Tampilan & Mockup
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.gallery.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-video rounded-xl overflow-hidden border border-border/80 bg-secondary"
                      >
                        <Image
                          src={img}
                          alt={`${project.title} preview ${idx + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )}

          </div>

          {/* Sidebar Column (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              
              {/* Tech Stack Card */}
              <div className="bg-card border border-border/80 rounded-2xl p-6">
                <h3 className="text-xs font-bold text-foreground mb-4 uppercase tracking-wider">
                  Teknologi & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-secondary border border-border rounded-lg text-xs font-medium text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Consultation Card */}
              <div className="bg-card border border-border/80 rounded-2xl p-6">
                <h3 className="text-base font-bold text-foreground mb-2">
                  Tertarik dengan Project Serupa?
                </h3>
                <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-5">
                  Konsultasikan kebutuhan website atau aplikasi bisnis Anda langsung dengan tim kami untuk mendapatkan estimasi dan solusi terbaik.
                </p>
                
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Konsultasi via WhatsApp</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Full CTA Banner */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="bg-card border border-border/80 rounded-2xl p-8 sm:p-12 text-center mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 tracking-tight">
              Siap Mewujudkan Website Impian Bisnis Anda?
            </h2>
            <p className="text-xs sm:text-sm sm:text-base text-foreground/70 max-w-xl mx-auto leading-relaxed mb-6">
              Mari diskusikan konsep, fitur, dan timeline pengerjaan yang pas untuk bisnis Anda bersama tim KreativLabs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-xl bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Mulai Konsultasi Gratis
              </a>

              <Link
                href="/#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 rounded-xl bg-secondary border border-border hover:border-primary/40 text-foreground text-xs sm:text-sm font-medium hover:text-primary transition-colors"
              >
                Lihat Proyek Lainnya
              </Link>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
