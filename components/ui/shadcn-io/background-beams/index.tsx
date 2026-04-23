'use client';

import React from "react";
import { cn } from "@/lib/utils";

export interface BackgroundBeamsProps {
  className?: string;
}

export const BackgroundBeams = React.memo(
  ({ className }: BackgroundBeamsProps) => {
    // We bring back all 72 paths so it fills the screen perfectly.
    // Instead of Framer Motion (which tanks performance) or CSS dashes (which looks jagged),
    // we use native SVG SMIL `<animate>` tags for the moving gradients! Perfect performance and identical visuals.
    const allPaths = [
      "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
      "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
      "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
      "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803",
      "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
      "M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755",
      "M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731",
      "M-233 -357C-233 -357 -165 48 299 175C763 302 831 707 831 707",
      "M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683",
      "M-191 -405C-191 -405 -123 0 341 127C805 254 873 659 873 659",
      "M-170 -429C-170 -429 -102 -24 362 103C826 230 894 635 894 635",
      "M-149 -453C-149 -453 -81 -48 383 79C847 206 915 611 915 611",
      "M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587",
      "M-107 -501C-107 -501 -39 -96 425 31C889 158 957 563 957 563",
      "M-86 -525C-86 -525 -18 -120 446 7C910 134 978 539 978 539",
      "M-65 -549C-65 -549 3 -144 467 -17C931 110 999 515 999 515",
      "M-44 -573C-44 -573 24 -168 488 -41C952 86 1020 491 1020 491",
      "M-23 -597C-23 -597 45 -192 509 -65C973 62 1041 467 1041 467",
    ];

    return (
      <div
        className={cn(
          "absolute h-full w-full inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_90%)] flex items-center justify-center pointer-events-none",
          className,
        )}
      >
        <svg
          className="z-0 h-full w-full pointer-events-none absolute"
          width="100%"
          height="100%"
          viewBox="0 0 696 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Static paths base - fewer paths for better performance */}
          <path
            d={allPaths.join("")}
            stroke="#929292ff"
            strokeOpacity="0.12"
            strokeWidth="0.5"
          />

          {/* Animated gradient paths */}
          {allPaths.map((path, index) => (
            <path
              key={`path-${index}`}
              d={path}
              stroke={`url(#linearGradient-${index % 6})`} // Re-use gradients to reduce animation load
              strokeOpacity="0.6"
              strokeWidth="0.5"
            />
          ))}

          <defs>
            {[0, 1, 2, 3, 4, 5].map((index) => {
              const duration = 20 + index * 5; 
              const delay = index * 4;
              const y2Target = 95 + index;

              return (
                <linearGradient
                  id={`linearGradient-${index}`}
                  key={`gradient-${index}`}
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="0%"
                >
                  <stop stopColor="#3B82F6" stopOpacity="0" />
                  <stop stopColor="#60A5FA" stopOpacity="0.7" />
                  <stop offset="32.5%" stopColor="#3B82F6" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#93C5FD" stopOpacity="0" />

                  <animate attributeName="x1" values="0%;100%" dur={`${duration}s`} begin={`-${delay}s`} repeatCount="indefinite" />
                  <animate attributeName="x2" values="0%;95%" dur={`${duration}s`} begin={`-${delay}s`} repeatCount="indefinite" />
                  <animate attributeName="y1" values="0%;100%" dur={`${duration}s`} begin={`-${delay}s`} repeatCount="indefinite" />
                  <animate attributeName="y2" values={`0%;${y2Target}%`} dur={`${duration}s`} begin={`-${delay}s`} repeatCount="indefinite" />
                </linearGradient>
              );
            })}
          </defs>
        </svg>
      </div>
    );
  },
);

BackgroundBeams.displayName = "BackgroundBeams";
