"use client";

import { motion } from "motion/react";
import { TestimonialsColumn, type TestimonialItem } from "@/components/ui/testimonials-columns-1";

const testimonialsEN: TestimonialItem[] = [
  {
    text: "The Tip Top POS web application transformed our daily cashier transactions and inventory tracking. Automated sales reporting saves us hours of manual reconciliation every week.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    name: "Alex Pratama",
    role: "Owner, Tip Top Martabak",
  },
  {
    text: "The promotional landing page was delivered ahead of schedule. Fast load speeds on mobile and clean copywriting directly increased our WhatsApp conversion rates.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    name: "Sarah Jenkins",
    role: "Marketing Director, Retail Brands",
  },
  {
    text: "Extremely pleased with our new corporate website. KreativLabs understood modern web engineering standards, providing clean architecture and transparent communication.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    name: "Bilal Ahmed",
    role: "Founder, Digimax Solutions",
  },
  {
    text: "Our brand identity and logo package exceeded expectations. The vector source files, typography guidelines, and mockups were thorough and beautifully documented.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    name: "Briana Patton",
    role: "Brand Director, Artisan Roastery",
  },
  {
    text: "The custom online booking system runs with rock-solid stability. Patients now schedule appointments seamlessly without receptionist bottlenecks.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    name: "Dr. Henry Harrison",
    role: "Managing Director, HealthCare Group",
  },
  {
    text: "The social media templates and carousels are clean and cohesive. Our team can now produce high-converting campaign posts effortlessly.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    name: "Saman Malik",
    role: "Social Media Lead",
  },
  {
    text: "Our custom e-commerce portal integrated seamlessly with payment gateways and automated logistics. It dramatically improved our operational efficiency.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
    name: "Omar Raza",
    role: "Operations Head, Global Logistics",
  },
  {
    text: "The UI/UX Figma design system delivered was modular with standard Auto Layout. Our engineering team implemented the frontend effortlessly.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    name: "Zainab Hussain",
    role: "Product Manager, TechPlatform",
  },
  {
    text: "Exceptional after-sales support and ongoing warranty. Any technical query or minor adjustment was handled promptly and professionally.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    name: "Hassan Ali",
    role: "Co-Founder, EduVenture",
  },
];

const firstColumn = testimonialsEN.slice(0, 3);
const secondColumn = testimonialsEN.slice(3, 6);
const thirdColumn = testimonialsEN.slice(6, 9);

export default function TestimonialsEN() {
  return (
    <section id="testimonials" className="relative py-16 md:py-24 bg-background overflow-hidden w-full scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-3">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
            Direct feedback from business owners and founders who trust KreativLabs for their digital platforms and brand identities.
          </p>
        </motion.div>

        {/* 3-Column Looping Animated Marquee with Edge Fade Mask */}
        <div className="flex justify-center gap-5 sm:gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[680px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={22} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={19} />
        </div>

      </div>
    </section>
  );
}
