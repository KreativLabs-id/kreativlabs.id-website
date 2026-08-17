"use client";

import {
  useId,
  useState,
  useEffect,
  type CSSProperties,
  type ReactNode,
} from "react";
import { useTheme } from "next-themes";

type Stop = { offset: number; color: string };

const VBW = 1271;
const VBH = 599;

// Dark theme gradient stops: Deep Navy → Royal Blue → Sky Blue → Transparent
export const KREATIVLABS_DARK_STOPS: Stop[] = [
  { offset: 0, color: "#0A192F" },
  { offset: 0.18, color: "#0C2340" },
  { offset: 0.35, color: "#1D4ED8" },
  { offset: 0.55, color: "#2563EB" },
  { offset: 0.72, color: "#3B82F6" },
  { offset: 0.86, color: "#60A5FA" },
  { offset: 0.94, color: "#38BDF8" },
  { offset: 1, color: "#38BDF800" },
];

// Light theme gradient stops matching exact text colors:
// "#2F4E60" (Heading Text) → "#6995AD" (Highlight Text) → Soft Ice Slate → Transparent
export const KREATIVLABS_LIGHT_STOPS: Stop[] = [
  { offset: 0, color: "#2F4E60" },
  { offset: 0.22, color: "#45677B" },
  { offset: 0.48, color: "#6995AD" },
  { offset: 0.72, color: "#8CAEC0" },
  { offset: 0.88, color: "#BDD3DE" },
  { offset: 0.96, color: "#E2EDF2" },
  { offset: 1, color: "#E2EDF200" },
];

export const KREATIVLABS_STOPS = KREATIVLABS_DARK_STOPS;

function bellHeights(n: number, peak: number, valley: number): number[] {
  const out: number[] = [];
  const mid = (n - 1) / 2;
  for (let i = 0; i < n; i++) {
    const t = mid === 0 ? 0 : Math.abs(i - mid) / mid;
    const eased = 1 - Math.pow(t, 1.24);
    out.push(peak * VBH * (valley + (1 - valley) * eased));
  }
  return out;
}

export interface RuixenGradientFooterProps {
  children?: ReactNode;
  gradientHeight?: string;
  bars?: number;
  blur?: number;
  peak?: number;
  valley?: number;
  stops?: Stop[];
  className?: string;
  style?: CSSProperties;
}

export function RuixenGradientFooter({
  children,
  gradientHeight = "160px",
  bars = 9,
  blur = 20,
  peak = 0.98,
  valley = 0.55,
  stops,
  className = "",
  style,
}: RuixenGradientFooterProps) {
  const uid = useId().replace(/:/g, "");
  const colW = VBW / bars;
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted && resolvedTheme === "light";
  const themeKey = mounted ? (resolvedTheme || "dark") : "dark";
  const activeStops = stops
    ? stops
    : isLight
    ? KREATIVLABS_LIGHT_STOPS
    : KREATIVLABS_DARK_STOPS;

  const gradId = `grad-${uid}-${themeKey}`;
  const blurId = `blur-${uid}-${themeKey}`;

  return (
    <footer
      className={`relative overflow-hidden ${className}`}
      style={{ ...style }}
    >
      {/* Footer Content at the top */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Ambient Gradient Wave positioned neatly BELOW the footer content */}
      <div
        aria-hidden
        className="w-full pointer-events-none overflow-hidden relative -mt-4"
        style={{
          height: gradientHeight,
        }}
      >
        <svg
          key={themeKey}
          style={{ height: "100%", width: "100%", display: "block" }}
          viewBox={`0 0 ${VBW} ${VBH}`}
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={gradId} x1="0" y1="1" x2="0" y2="0">
              {activeStops.map((s, i) => (
                <stop key={`${themeKey}-${i}`} offset={s.offset} stopColor={s.color} />
              ))}
            </linearGradient>
            <filter
              id={blurId}
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation={blur} />
            </filter>
          </defs>
          {bellHeights(bars, peak, valley).map((barH, i) => (
            <g key={i} filter={`url(#${blurId})`}>
              <rect
                x={i * colW}
                y={VBH - barH}
                width={colW * 1.23}
                height={barH}
                fill={`url(#${gradId})`}
              />
            </g>
          ))}
        </svg>
      </div>
    </footer>
  );
}
