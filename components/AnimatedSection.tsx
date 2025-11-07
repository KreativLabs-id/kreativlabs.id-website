"use client";

import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

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
  const isMobile = useIsMobile();
  
  // Reduce animation complexity on mobile
  const mobileDuration = isMobile ? Math.min(duration, 400) : duration;
  const mobileDelay = isMobile ? Math.min(delay, 50) : delay;

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
        threshold: 0.05,
        rootMargin: "0px 0px 50px 0px",
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
    
    if (isVisible) {
      return `${baseClasses} duration-[${mobileDuration}ms] opacity-100 translate-x-0 translate-y-0 scale-100`;
    }

    // Use fixed Tailwind classes for better performance
    const baseHidden = `${baseClasses} duration-[${mobileDuration}ms] opacity-0`;
    
    switch (animation) {
      case "fade-up":
        return `${baseHidden} ${isMobile ? 'translate-y-4' : 'translate-y-8'}`;
      case "fade-down":
        return `${baseHidden} ${isMobile ? '-translate-y-4' : '-translate-y-8'}`;
      case "fade-left":
        return `${baseHidden} ${isMobile ? 'translate-x-4' : 'translate-x-8'}`;
      case "fade-right":
        return `${baseHidden} ${isMobile ? '-translate-x-4' : '-translate-x-8'}`;
      case "scale":
        return `${baseHidden} scale-95`;
      case "fade":
      default:
        return baseHidden;
    }
  };

  return (
    <div
      ref={sectionRef}
      className={`${getAnimationClasses()} ${className}`}
      style={{ 
        transitionDelay: `${mobileDelay}ms`,
        willChange: isVisible ? 'auto' : 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}
