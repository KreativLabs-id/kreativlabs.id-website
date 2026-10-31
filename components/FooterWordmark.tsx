"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

export default function FooterWordmark() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [36, 0]);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none overflow-hidden px-2 pt-6 text-center sm:pt-10">
      <motion.div style={{ y: reducedMotion ? 0 : y }} className="select-none whitespace-nowrap text-[clamp(3.5rem,12vw,12rem)] font-extrabold leading-[0.7] tracking-[-0.07em] text-primary/10">
        KreativLabs
      </motion.div>
    </div>
  );
}
