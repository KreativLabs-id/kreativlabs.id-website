"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en");

  const phoneNumber = "6287816270140";
  const defaultMessage = isEnglish
    ? "Hi Koda & KreativLabs Team! I would like to consult about my website & design project."
    : "Halo Koda & Tim KreativLabs! Saya ingin konsultasi tentang ide project website & desain saya.";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[100] flex items-center select-none pointer-events-none">
      {/* Tooltip on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 8, scale: 0.92 }}
            transition={{ duration: 0.2 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-900/95 dark:bg-slate-900/95 text-white text-xs sm:text-sm font-medium px-3.5 py-2 rounded-xl shadow-xl backdrop-blur-md pointer-events-none flex items-center gap-2 border border-emerald-500/30"
          >
            <span>{isEnglish ? "Chat with Koda on WhatsApp!" : "Tanya Koda di WhatsApp yuk!"}</span>
            {/* Tooltip Tail Arrow */}
            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-900/95 rotate-45 border-t border-r border-emerald-500/30" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pure Koda Mascot Button */}
      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -8, 0],
          rotate: [0, 2, 0, -2, 0],
        }}
        transition={{
          opacity: { duration: 0.4 },
          scale: { duration: 0.4 },
          y: {
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{
          scale: 1.15,
          rotate: [0, -6, 6, -3, 0],
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.92 }}
        className="pointer-events-auto relative group w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 p-0 bg-transparent border-0 outline-none cursor-pointer focus:outline-none"
        aria-label={isEnglish ? "Chat with Koda on WhatsApp" : "Hubungi Koda via WhatsApp"}
      >
        {/* Pure Mascot Image with smooth drop shadow on character contours */}
        <div className="relative w-full h-full filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)] group-hover:drop-shadow-[0_12px_24px_rgba(37,211,102,0.45)] transition-all duration-300">
          <Image
            src="/headkoda.webp"
            alt="Koda - Maskot KreativLabs"
            fill
            sizes="(max-width: 640px) 72px, 96px"
            className="object-contain"
            priority
          />
        </div>

        {/* Mini WhatsApp Badge */}
        <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-900 group-hover:scale-115 transition-transform">
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </div>
      </motion.button>
    </div>
  );
}
