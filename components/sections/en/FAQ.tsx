"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";

const faqsEN = [
  {
    question: "How long does it take to develop a website?",
    answer: "A standard Landing Page is typically completed in 3–5 business days. Corporate Websites and custom platforms require 1–3 weeks. We establish and agree on clear milestones at project kickoff.",
  },
  {
    question: "Are domain and cloud hosting included?",
    answer: "Selected plans (such as Custom Systems and special packages) include domain setup. For standard plans, we guide and handle complete registration and hosting setup directly for you.",
  },
  {
    question: "Will the website be mobile-friendly?",
    answer: "Yes, 100% responsive. We rigorously test all pages across various smartphone, tablet, and desktop viewports to ensure seamless user navigation and rapid loading speeds.",
  },
  {
    question: "What is your revision process?",
    answer: "We provide structured preview and revision cycles based on your package. You can supply itemized feedback, and our team will implement refinements until specifications are met.",
  },
  {
    question: "Can I manage and update content independently?",
    answer: "Yes. For dynamic web platforms, we provide an intuitive admin dashboard and a quick walkthrough guide so you can edit text, publish articles, and update assets effortlessly.",
  },
  {
    question: "Do you offer post-launch warranty and technical support?",
    answer: "Yes, we include post-delivery technical warranty and ongoing maintenance support to guarantee continuous uptime and stable performance.",
  },
];

export default function FAQEN() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-16 md:py-20 bg-background overflow-hidden w-full scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-4xl">

        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 tracking-tight">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Find clear answers regarding our development workflow, revision cycles, and asset ownership.
            </p>
          </div>
        </AnimatedSection>

        {/* FAQ Items */}
        <div className="space-y-3.5">
          {faqsEN.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeInStagger key={index} index={index} delay={25}>
                <div
                  className={`bg-card border rounded-2xl overflow-hidden transition-all duration-200 ${
                    isOpen
                      ? "border-primary/50 shadow-xs"
                      : "border-border/80 hover:border-primary/40"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4 group"
                  >
                    <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-secondary/80 flex items-center justify-center shrink-0 transition-all ${
                        isOpen ? "bg-primary text-primary-foreground" : "text-foreground/70 group-hover:text-primary"
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-foreground/75 text-xs sm:text-sm leading-relaxed border-t border-border/40">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeInStagger>
            );
          })}
        </div>
      </div>
    </section>
  );
}
