"use client";

import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="relative min-h-screen bg-[#0A192F] flex items-center justify-center">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F] via-[#0A192F] to-[#0F1E37] opacity-80" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6">
                <div className="max-w-xl mx-auto text-center">
                    {/* 404 Number */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <h1 className="text-[140px] sm:text-[180px] font-black leading-none tracking-tight">
                            <span className="bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">
                                404
                            </span>
                        </h1>
                    </motion.div>

                    {/* Message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-10"
                    >
                        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3">
                            Halaman Tidak Ditemukan
                        </h2>
                        <p className="text-white/50 text-sm sm:text-base">
                            Halaman yang kamu cari tidak ada atau sudah dipindahkan.
                        </p>
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-3 justify-center"
                    >
                        <Button
                            asChild
                            className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white px-6 py-5 rounded-xl transition-all"
                        >
                            <Link href="/">
                                <Home className="mr-2 h-4 w-4" />
                                Kembali ke Beranda
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="ghost"
                            className="text-white/70 hover:text-white hover:bg-white/5 px-6 py-5 rounded-xl"
                        >
                            <Link href="javascript:history.back()">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Kembali
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Bottom line accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#3B82F6]/50 to-transparent rounded-full" />
        </div>
    );
}
