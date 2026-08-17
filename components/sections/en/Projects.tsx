"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";
import { projects } from "@/data/projects";

export default function ProjectsEN() {
  return (
    <section id="projects" className="relative py-16 md:py-20 bg-background overflow-hidden w-full scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 tracking-tight">
              Featured <span className="text-primary">Portfolio & Work</span>
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              A showcase of digital products and web experiences we have crafted with high performance standards.
            </p>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, index) => (
            <FadeInStagger key={project.id} index={index} delay={40}>
              <Link href={`/en/projects/${project.id}`} className="block h-full">
                <div className="group h-full flex flex-col justify-between bg-card border border-border/80 hover:border-primary/50 rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  
                  {/* Project Image */}
                  <div className="relative w-full aspect-[16/10] bg-secondary/40 overflow-hidden border-b border-border/50">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Project Info */}
                  <div className="p-5 sm:p-6 flex flex-col justify-between grow">
                    <div>
                      <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">
                        {project.category}
                      </span>
                      
                      <h3 className="text-base sm:text-lg font-bold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-foreground/70 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Footer link */}
                    <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs font-semibold text-primary">
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                </div>
              </Link>
            </FadeInStagger>
          ))}
        </div>

      </div>
    </section>
  );
}
