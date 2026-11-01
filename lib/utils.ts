import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Single source of truth untuk nomor WhatsApp bisnis.
// Ubah lewat NEXT_PUBLIC_WHATSAPP di .env.local tanpa menyentuh kode.
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP || "6287816270140"
