"use client";

import { useEffect, useState } from "react";

const PROMO_END = Date.parse("2026-11-11T00:00:00+07:00");

export default function AnniversaryCountdown({ english = false }: { english?: boolean }) {
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setSecondsLeft(Math.max(0, Math.ceil((PROMO_END - Date.now()) / 1000)));
    const initial = window.setTimeout(update, 0);
    const interval = window.setInterval(update, 1000);
    return () => {
      window.clearTimeout(initial);
      window.clearInterval(interval);
    };
  }, []);

  const label = english ? "Anniversary offer ends in" : "Promo anniversary berakhir dalam";
  const units = secondsLeft === null ? null : [
    { label: english ? "days" : "hari", value: Math.floor(secondsLeft / 86400) },
    { label: english ? "hrs" : "jam", value: Math.floor((secondsLeft % 86400) / 3600) },
    { label: english ? "min" : "menit", value: Math.floor((secondsLeft % 3600) / 60) },
    { label: english ? "sec" : "detik", value: secondsLeft % 60 },
  ];

  return (
    <div className="mt-4 text-[#234B63]">
      {secondsLeft === 0 ? (
        <p className="text-xs font-semibold sm:text-sm">{english ? "The anniversary offer has ended." : "Promo anniversary sudah berakhir."}</p>
      ) : (
        <>
          <p className="text-xs font-semibold sm:text-sm">{label}</p>
          <div role="timer" aria-label={english ? "Time remaining until November 11, 2026 at midnight WIB" : "Sisa waktu sampai 11 November 2026 pukul 00.00 WIB"} className="mt-2 flex min-h-10 items-baseline gap-3 tabular-nums sm:gap-4">
            {units ? units.map((unit) => (
              <span key={unit.label} className="inline-flex items-baseline gap-1">
                <span className="text-lg font-bold leading-none sm:text-xl">{String(unit.value).padStart(2, "0")}</span>
                <span className="text-[11px] text-[#234B63]/75">{unit.label}</span>
              </span>
            )) : <span className="text-xs text-[#234B63]/75">{english ? "Until November 10, 2026 (WIB)" : "Sampai 10 November 2026 (WIB)"}</span>}
          </div>
        </>
      )}
    </div>
  );
}
