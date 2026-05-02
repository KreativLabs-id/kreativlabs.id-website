"use client";

import { useState, useEffect } from "react";
import { Particles } from "@/components/ui/shadcn-io/particles";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useTheme } from "next-themes";

interface OptimizedParticlesProps {
  quantity?: number;
  ease?: number;
  staticity?: number;
  size?: number;
  className?: string;
}

export default function OptimizedParticles({
  quantity = 50,
  ease = 80,
  staticity = 50,
  size = 0.6,
  className = "absolute inset-0",
}: OptimizedParticlesProps) {
  const isMobile = useIsMobile();
  const [hasMounted, setHasMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Don't render particles on mobile or before mounting for better performance
  if (!hasMounted || isMobile) {
    return null;
  }

  // Light mode: abu-abu gelap agar terlihat di background putih
  // Dark mode: putih agar terlihat di background biru gelap
  const particleColor = resolvedTheme === "dark" ? "#FFFFFF" : "#94A3B8";

  return (
    <Particles
      className={className}
      quantity={quantity}
      ease={ease}
      staticity={staticity}
      color={particleColor}
      size={size}
    />
  );
}
