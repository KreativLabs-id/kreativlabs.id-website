import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function AnniversaryPromo({ english = false }: { english?: boolean }) {
  const message = english
    ? "Hi KreativLabs! I would like to share my business story for the anniversary free landing page."
    : "Halo KreativLabs! Saya ingin cerita tentang usaha saya untuk promo landing page gratis anniversary.";
  const whatsappUrl = `https://wa.me/6287816270140?text=${encodeURIComponent(message)}`;

  return (
    <aside id="promo-anniversary" aria-label={english ? "Anniversary offers" : "Promo anniversary"} className="anniversary-coupon relative my-10 scroll-mt-24 overflow-hidden rounded-[28px] text-left sm:rounded-[32px]">
      <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)]">
        <div className="relative flex flex-col items-start bg-[#234B63] p-7 text-white sm:p-9 lg:p-10">
          <span aria-hidden="true" className="coupon-perforation pointer-events-none absolute inset-x-3 bottom-0 h-0.5 lg:inset-x-auto lg:bottom-3 lg:right-0 lg:top-3 lg:h-auto lg:w-0.5" />
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-3 -left-3 z-10 size-6 rounded-full bg-background lg:-right-3 lg:-top-3 lg:bottom-auto lg:left-auto" />
          <span aria-hidden="true" className="pointer-events-none absolute -bottom-3 -right-3 z-10 size-6 rounded-full bg-background" />
          <span aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10" />
          <span aria-hidden="true" className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10" />
          <div className="relative flex items-center gap-3">
            <Image src="/1st_kreativlabs.png" alt="" width={880} height={493} sizes="64px" className="h-auto w-16" />
            <p className="border-l border-white/25 pl-3 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.16em] text-[#C4E1ED]">KreativLabs<br />Anniversary</p>
          </div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[#9ED4E4]">{english ? "A thank you from us" : "Hadiah ulang tahun kami"}</p>
          <h3 className="mt-3 max-w-sm text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            {english ? "One year, one chance to get started." : "1 tahun, 1 kesempatan untuk mulai."}
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
            {english ? "Tell us your business story. One selected business gets a free landing page." : "Ceritakan usahamu. Satu usaha terpilih dapat landing page gratis."}
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#234B63] transition-colors hover:bg-[#D9EDF2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            {english ? "Share your story" : "Ceritakan Usahamu"}
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
          <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60 lg:mt-auto lg:pt-10">
            {english ? "Anniversary coupon · 01" : "Kupon anniversary · 01"}
          </p>
        </div>

        <div className="flex flex-col bg-[#EAF4F8] p-7 text-[#234B63] sm:p-9 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#39758C]">{english ? "Anniversary offers" : "Promo Anniversary"}</p>
          <div className="mt-5 grid flex-1 gap-6 sm:grid-cols-2 sm:gap-0">
            <div className="sm:pr-7">
              <p className="text-4xl font-bold leading-none tracking-tight sm:text-5xl">{english ? "Free" : "Gratis"}</p>
              <h4 className="mt-3 text-base font-bold">{english ? "A landing page for one selected business" : "Landing page untuk satu usaha terpilih"}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#234B63]/80">
                {english ? "One mobile-friendly page with a WhatsApp button. Domain and hosting not included." : "Satu halaman responsif dengan tombol WhatsApp. Domain dan hosting belum termasuk."}
              </p>
            </div>
            <div className="border-t border-[#6995AD]/25 pt-6 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0">
              <p className="text-4xl font-bold leading-none tracking-tight sm:text-5xl">10<span className="text-2xl sm:text-3xl">%</span></p>
              <h4 className="mt-3 text-base font-bold">{english ? "Off website & design packages" : "Diskon paket website & desain"}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#234B63]/80">
                {english ? "Off listed prices for paid packages. Calculated during consultation; not valid with the free offer." : "Dari harga paket berbayar yang tertera, dihitung saat konsultasi. Tidak bisa digabung dengan promo gratis."}
              </p>
            </div>
          </div>
          <div className="mt-6 border-t border-[#6995AD]/25 pt-5">
            <h4 className="text-base font-bold">{english ? "A bonus for returning clients" : "Bonus buat klien lama"}</h4>
            <p className="mt-2 text-sm leading-relaxed text-[#234B63]/80">
              {english ? "One free small update to a website we built for you: text, a photo, or a WhatsApp number. New features are not included." : "Gratis satu perubahan kecil di website buatan kami: ganti teks, foto, atau nomor WhatsApp. Fitur baru tidak termasuk."}
            </p>
          </div>
          <div className="mt-6 border-t border-[#6995AD]/25 pt-4 text-xs leading-relaxed text-[#234B63]/75">
            <p className="font-semibold text-[#234B63]">{english ? "Offers and story submissions end November 30, 2026" : "Promo dan pengiriman cerita sampai 10 November 2026"}</p>
            <p className="mt-1">{english ? "Send your story via WhatsApp. We will choose one business whose needs fit the offer and contact them after submissions close. One update per returning client." : "Kirim ceritamu lewat WhatsApp. Kami pilih satu usaha yang kebutuhannya sesuai promo dan menghubunginya setelah pendaftaran ditutup. Bonus berlaku satu kali per klien lama."}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
