"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function AnniversaryConfetti() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = document.createElement("canvas");
    canvas.setAttribute("aria-hidden", "true");
    canvas.className = "pointer-events-none fixed inset-0 z-40 h-full w-full";
    document.body.appendChild(canvas);
    const launch = confetti.create(canvas, { resize: true, useWorker: true, disableForReducedMotion: true });
    const isMobile = window.innerWidth < 640;
    const colors = ["#234B63", "#6995AD", "#29B8BD", "#B9D8E7", "#FFFFFF"];
    const fire = (count: number, velocity: number) => {
      const options = { particleCount: count, spread: 65, startVelocity: velocity, gravity: 0.9, decay: 0.91, ticks: 160, colors, scalar: isMobile ? 0.85 : 1, disableForReducedMotion: true };
      return Promise.all([
        launch({ ...options, angle: 60, origin: { x: 0, y: 0.72 } }),
        launch({ ...options, angle: 120, origin: { x: 1, y: 0.72 } }),
      ]);
    };
    const first = window.setTimeout(() => { void fire(isMobile ? 32 : 48, isMobile ? 48 : 60); }, 150);
    const second = window.setTimeout(() => {
      void fire(isMobile ? 20 : 28, isMobile ? 38 : 48).then(() => canvas.remove());
    }, 400);

    return () => {
      window.clearTimeout(first);
      window.clearTimeout(second);
      launch.reset();
      canvas.remove();
    };
  }, []);

  return null;
}
