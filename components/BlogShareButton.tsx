"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";

interface BlogShareButtonProps {
  title: string;
  excerpt: string;
  isEn?: boolean;
}

export default function BlogShareButton({ title, excerpt, isEn = false }: BlogShareButtonProps) {
  const [shareStatus, setShareStatus] = useState<"idle" | "shared" | "copied">("idle");

  const handleShare = async () => {
    const shareData = {
      title,
      text: excerpt,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareStatus("shared");
        setTimeout(() => setShareStatus("idle"), 2000);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setShareStatus("copied");
        setTimeout(() => setShareStatus("idle"), 2000);
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div className="mt-8 p-5 bg-card border border-border/80 rounded-2xl flex items-center justify-between gap-4">
      <div>
        <h4 className="text-sm font-bold text-foreground mb-0.5">
          {isEn ? "Share This Article" : "Bagikan Artikel Ini"}
        </h4>
        <p className="text-foreground/60 text-xs">
          {isEn
            ? "Share this insight with your team or colleagues."
            : "Bagikan wawasan ini kepada rekan kerja atau tim Anda."}
        </p>
      </div>
      <button
        onClick={handleShare}
        type="button"
        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors shrink-0 cursor-pointer"
        aria-label={isEn ? "Share article" : "Bagikan artikel"}
      >
        {shareStatus === "shared" ? (
          <>
            <Check className="w-3.5 h-3.5" />
            <span>{isEn ? "Shared!" : "Dibagikan!"}</span>
          </>
        ) : shareStatus === "copied" ? (
          <>
            <Check className="w-3.5 h-3.5" />
            <span>{isEn ? "Link Copied!" : "Link Disalin!"}</span>
          </>
        ) : (
          <>
            <Share2 className="w-3.5 h-3.5" />
            <span>{isEn ? "Share" : "Bagikan"}</span>
          </>
        )}
      </button>
    </div>
  );
}
