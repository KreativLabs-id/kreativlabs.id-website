const colors = ["#6995AD", "#239EA6", "#EAF5F7", "#8BBACD"];

function Garland({ swags, className }: { swags: number; className: string }) {
  const curveY = (x: number) => 0.7 * x * (1 - x / 200);

  return (
    <svg viewBox={`0 0 ${swags * 200} 76`} preserveAspectRatio="none" fill="none" className={className}>
      <path
        d={`M0 0 ${Array.from({ length: swags }, (_, i) => `Q${i * 200 + 100} 70 ${(i + 1) * 200} 0`).join(" ")}`}
        stroke="#234B63"
        strokeOpacity="0.4"
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      {Array.from({ length: swags }, (_, i) =>
        [30, 75, 125, 170].map((x, j) => (
          <polygon
            key={`${i}-${j}`}
            points={`${i * 200 + x - 12},${curveY(x - 12)} ${i * 200 + x + 12},${curveY(x + 12)} ${i * 200 + x},${curveY(x) + 26}`}
            fill={colors[(i + j) % colors.length]}
            fillOpacity="0.85"
          />
        )),
      )}
    </svg>
  );
}

export default function AnniversaryBunting() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-20">
      <Garland swags={3} className="block h-16 w-full sm:hidden" />
      <Garland swags={5} className="hidden h-20 w-full sm:block" />
    </div>
  );
}
