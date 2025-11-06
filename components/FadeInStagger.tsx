"use client";

import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

interface FadeInStaggerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  index?: number;
}

export default function FadeInStagger({ 
  children, 
  className = "",
  delay = 100,
  index = 0
}: FadeInStaggerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Reduce stagger delay on mobile for faster loading feel
  const mobileDelay = isMobile ? Math.min(delay, 50) : delay;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-all ${isMobile ? 'duration-300' : 'duration-500'} ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : `opacity-0 ${isMobile ? 'translate-y-3' : 'translate-y-6'}`
      } ${className}`}
      style={{ 
        transitionDelay: `${index * mobileDelay}ms`,
        willChange: isVisible ? 'auto' : 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}
