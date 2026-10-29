import Image from "next/image";
import AnniversaryBunting from "@/components/AnniversaryBunting";

export default function AnniversaryHero({ english = false }: { english?: boolean }) {
  return (
    <section
      aria-label={english ? "KreativLabs first anniversary" : "Anniversary pertama KreativLabs"}
      className="mx-auto w-full max-w-[1600px] px-4 pb-6 pt-20 sm:px-6 sm:pt-24 lg:px-8"
    >
      <div className="relative isolate overflow-hidden rounded-[28px] bg-[#B9D8E7] text-[#234B63] sm:rounded-[40px]">
        <AnniversaryBunting />
        <span aria-hidden="true" className="pointer-events-none absolute -bottom-6 left-5 whitespace-nowrap text-[100px] font-extrabold leading-none tracking-[-0.07em] text-[#234B63]/15 sm:-bottom-8 sm:text-[180px] lg:text-[230px] xl:text-[280px]">
          ONE YEAR
        </span>

        <div className="relative grid items-center gap-3 px-5 pt-16 sm:gap-6 sm:px-8 sm:pt-24 md:min-h-[clamp(480px,calc(100svh-120px),640px)] md:grid-cols-[1.15fr_1fr] md:gap-8 md:pb-8 lg:px-12 lg:pb-12">
          <div className="relative z-10 min-w-0">
            <div className="mb-4 flex items-center gap-3 sm:mb-6">
              <Image src="/1st_kreativlabs.png" alt="1st" width={880} height={493} sizes="80px" priority className="h-auto w-16 sm:w-20" />
              <p className="border-l border-[#234B63]/25 pl-3 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.16em] sm:text-xs">
                KreativLabs<br />Anniversary
              </p>
            </div>

            <h1 className="max-w-xl text-[28px] font-bold leading-[1.12] tracking-[-0.04em] sm:text-[38px] lg:text-[clamp(40px,3.4vw,50px)]">
              {english ? "One year of creating." : "Satu tahun berkarya."}
              <span className="mt-1 block">{english ? "And more to come." : "Makasih sudah ikut di perjalanan ini."}</span>
            </h1>
            <p className="mt-4 max-w-[390px] text-sm leading-relaxed text-[#234B63]/85 sm:mt-5 sm:text-base">
              {english
                ? "Need a website or a design for your business? Tell us what you're working on. We'd love to help."
                : "Butuh website atau desain buat bisnismu? Ceritakan saja idenya, kita cari cara untuk mewujudkannya bareng."}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-2 sm:mt-6 sm:gap-x-5 sm:gap-y-3">
              <a href={english ? "/en#contact" : "#contact"} className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#234B63] px-4 text-xs font-semibold text-white transition-colors hover:bg-[#16394F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#234B63] sm:min-h-12 sm:px-6 sm:text-sm">
                {english ? "Let's talk" : "Yuk, ngobrol"}
              </a>
              <a href="#promo-anniversary" className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#234B63]/40 px-4 text-xs font-semibold text-[#234B63] transition-colors hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#234B63] sm:min-h-12 sm:px-6 sm:text-sm">
                {english ? "See anniversary offers" : "Lihat Promo Anniversary"}
              </a>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[180px] items-center justify-center pt-2 sm:max-w-[260px] md:max-w-[300px] md:pt-0 lg:max-w-[360px]">
            <span aria-hidden="true" className="absolute bottom-[15%] left-1/2 aspect-square w-[90%] -translate-x-1/2 rounded-full bg-[#D9EDF2]/60" />
            <Image
              src="/mascot_anniversary.png"
              alt={english ? "KreativLabs mascot wearing a party hat" : "Maskot KreativLabs memakai topi pesta anniversary"}
              width={600}
              height={770}
              sizes="(min-width: 1024px) 360px, (min-width: 768px) 300px, (min-width: 640px) 260px, 180px"
              className="anniversary-mascot relative h-auto w-full origin-bottom select-none object-contain md:max-h-[min(460px,60svh)]"
              priority
            />
          </div>
        </div>
        <p className="relative z-10 px-5 pb-5 pt-2 text-center text-[10px] font-medium tracking-[0.14em] text-[#234B63]/70 uppercase sm:px-8 sm:pt-4 md:absolute md:bottom-6 md:right-4 md:p-0 md:[writing-mode:vertical-rl]">
          One year in. Just getting started.
        </p>
      </div>
    </section>
  );
}
