import Image from "next/image";

export default function AnniversaryAccent({ english = false }: { english?: boolean }) {
  return (
    <aside aria-label={english ? "Our first anniversary" : "Anniversary pertama KreativLabs"} className="relative mx-auto mt-12 grid w-full max-w-3xl grid-cols-[112px_minmax(0,1fr)] items-center gap-5 border-t border-primary/20 pt-8 text-left sm:mt-14 sm:grid-cols-[190px_minmax(0,1fr)] sm:gap-10 sm:pt-10">
      <div className="relative shrink-0" aria-hidden="true">
        <span className="pointer-events-none absolute inset-x-0 top-1/4 aspect-square rounded-full border border-primary/20" />
        <Image
          src="/mascot_anniversary.png"
          alt=""
          width={600}
          height={770}
          sizes="(min-width: 640px) 190px, 112px"
          className="anniversary-mascot relative h-auto w-[112px] select-none sm:w-[190px]"
        />
        <span className="anniversary-confetti absolute -left-2 top-8 h-2 w-1.5 rotate-[-25deg] bg-[#6995AD]/50" />
        <span className="anniversary-confetti absolute -right-2 bottom-8 h-1.5 w-1.5 rotate-[20deg] bg-[#29B8BD]/50" />
      </div>
      <div className="relative min-w-0">
        <p className="mb-3 text-[10px] font-semibold tracking-[0.14em] text-primary uppercase sm:text-xs">
          KreativLabs · 1st Anniversary
        </p>
        <h2 className="text-xl font-semibold leading-[1.18] tracking-tight text-foreground sm:text-4xl">
          One year in.<br /><span className="text-primary">Just getting started.</span>
        </h2>
        <p className="mt-3 max-w-xs text-xs leading-relaxed text-foreground/70 sm:mt-4 sm:text-sm">
          {english ? "Thanks for being part of our journey." : "Terima kasih sudah jadi bagian dari perjalanan kami."}
        </p>
        <a href={english ? "/en#contact" : "#contact"} className="mt-3 inline-flex min-h-10 items-center text-xs font-semibold text-foreground underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:mt-4 sm:text-sm">
          {english ? "Let’s create our next chapter together" : "Jadi bagian dari cerita selanjutnya"}
        </a>
      </div>
    </aside>
  );
}
