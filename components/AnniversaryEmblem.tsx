import Image from "next/image";

export default function AnniversaryEmblem({ english = false }: { english?: boolean }) {
  return (
    <div className="relative mb-6 flex flex-col items-center sm:mb-8">
      <Image
        src="/1st_kreativlabs.png"
        alt={english ? "KreativLabs first anniversary" : "Anniversary pertama KreativLabs"}
        width={880}
        height={493}
        sizes="(min-width: 640px) 156px, 116px"
        className="animate-anniversary-glow h-auto w-[116px] sm:w-[156px]"
        priority
      />
      <div className="mt-2 flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-primary uppercase sm:text-xs">
        <span aria-hidden="true" className="h-px w-7 bg-primary/40 sm:w-10" />
        <span>Anniversary</span>
        <span aria-hidden="true" className="h-px w-7 bg-primary/40 sm:w-10" />
      </div>
      <p className="mt-2 text-xs text-foreground/65">
        {english ? "One year of KreativLabs. Thank you!" : "Satu tahun KreativLabs. Terima kasih!"}
      </p>
    </div>
  );
}
