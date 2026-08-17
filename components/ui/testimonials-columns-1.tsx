"use client";
import React from "react";
import { motion } from "motion/react";

export type TestimonialItem = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: TestimonialItem[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 15,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-6 sm:p-7 rounded-3xl bg-card border border-border/80 hover:border-primary/50 transition-colors shadow-sm max-w-xs sm:max-w-sm w-full flex flex-col justify-between"
                  key={i}
                >
                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                    &ldquo;{text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border/50">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover shrink-0 border border-border"
                    />
                    <div className="flex flex-col min-w-0">
                      <div className="font-bold text-xs sm:text-sm text-foreground tracking-tight leading-snug truncate">
                        {name}
                      </div>
                      <div className="text-[11px] sm:text-xs text-foreground/60 leading-snug truncate">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
