"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import AnimatedSection from "@/components/AnimatedSection";
import FadeInStagger from "@/components/FadeInStagger";

const faqsEN = [
  {
    question: "How long does a website take?",
    answer: "A simple landing page usually takes 3–5 business days. A business website or online store takes around 1–3 weeks. We agree on the timeline before we start.",
  },
  {
    question: "Are domain and hosting included?",
    answer: "It depends on the package, so check its features first. The free anniversary landing page does not include domain or hosting.",
  },
  {
    question: "Will the website be mobile-friendly?",
    answer: "Yes. We make responsive websites and test them on different screen sizes, from phones to laptops.",
  },
  {
    question: "What if I want to make changes?",
    answer: "We will send you the work to review. Let us know what you would like changed, and we will revise it according to your package.",
  },
  {
    question: "Can I manage and update content independently?",
    answer: "Yes, with a dynamic website package. You get an admin dashboard and a short guide to help you update content yourself.",
  },
  {
    question: "Can I still ask for help after delivery?",
    answer: "Yes. Warranty and technical support are available after handover. The details and duration depend on your package.",
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
