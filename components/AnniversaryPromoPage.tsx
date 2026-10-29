import Image from "next/image";
import Link from "next/link";
import AnniversaryPromo from "@/components/AnniversaryPromo";
import AnniversaryConfetti from "@/components/AnniversaryConfetti";

export default function AnniversaryPromoPage({ english = false }: { english?: boolean }) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pb-24 md:pt-44">
      <AnniversaryConfetti />
      <div className="relative rounded-[28px] bg-[#B9D8E7] px-6 py-8 text-[#234B63] sm:rounded-[36px] sm:px-10 md:min-h-[280px] md:py-12 md:pr-64 lg:pr-80">
        <div className="relative z-10 max-w-2xl">
          <p className="pr-16 text-xs font-semibold uppercase tracking-[0.16em] md:pr-0">KreativLabs · 1st Anniversary</p>
          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            {english ? "A little celebration, a little something for you." : "Ulang tahun kami, hadiahnya buat kamu."}
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#234B63]/85 sm:text-base">
            {english ? "A free landing page opportunity, 10% off our paid packages, and a thank-you for returning clients." : "Ada kesempatan dapat landing page gratis, diskon paket, dan bonus buat kamu yang pernah kerja bareng kami."}
          </p>
        </div>
        <Image src="/1st_kreativlabs.png" alt="" aria-hidden="true" width={880} height={493} sizes="56px" className="pointer-events-none absolute right-5 top-5 h-auto w-14 select-none md:hidden" />
        <Image
          src="/mascot_anniversary.png"
          alt={english ? "Koda celebrating KreativLabs anniversary" : "Koda merayakan anniversary KreativLabs"}
          width={600}
          height={770}
          sizes="(min-width: 1024px) 288px, 256px"
          className="pointer-events-none absolute bottom-0 right-6 hidden h-auto w-64 select-none md:block lg:right-10 lg:w-72"
          priority
        />
      </div>

      <AnniversaryPromo english={english} />

      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-xl font-bold text-foreground sm:text-2xl">{english ? "Want to take part?" : "Tertarik ikut?"}</h2>
        <p className="mt-3 text-sm leading-relaxed text-foreground/70 sm:text-base">
          {english ? "Tell us about your business via the WhatsApp button above. Want to explore the paid packages first? You can see them on our homepage." : "Ceritakan usahamu lewat tombol WhatsApp di atas. Mau lihat paket berbayar dulu? Kamu bisa cek daftarnya di halaman utama."}
        </p>
        <Link href={english ? "/en#pricing" : "/#pricing"} className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-border px-5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
          {english ? "See our packages" : "Lihat paket lainnya"}
        </Link>
      </div>
    </section>
  );
}
