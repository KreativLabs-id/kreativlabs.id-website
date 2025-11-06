"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade" | "scale";
  delay?: number;
  duration?: number;
}

export default function AnimatedSection({ 
  children, 
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 700
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve after animation to improve performance
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getAnimationClasses = () => {
    const baseClasses = "transition-all ease-out";
    const durationClass = `duration-[${duration}ms]`;
    
    if (isVisible) {
      return `${baseClasses} ${durationClass} opacity-100 translate-x-0 translate-y-0 scale-100`;
    }

    switch (animation) {
      case "fade-up":
        return `${baseClasses} ${durationClass} opacity-0 translate-y-8`;
      case "fade-down":
        return `${baseClasses} ${durationClass} opacity-0 -translate-y-8`;
      case "fade-left":
        return `${baseClasses} ${durationClass} opacity-0 translate-x-8`;
      case "fade-right":
        return `${baseClasses} ${durationClass} opacity-0 -translate-x-8`;
      case "scale":
        return `${baseClasses} ${durationClass} opacity-0 scale-95`;
      case "fade":
      default:
        return `${baseClasses} ${durationClass} opacity-0`;
    }
  };

  return (
    <div
      ref={sectionRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        willChange: isVisible ? 'auto' : 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}
