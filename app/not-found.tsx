"use client";

import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="relative min-h-screen bg-background flex items-center justify-center">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card opacity-80" />

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
                            <span className="bg-gradient-to-r from-primary to-[#60A5FA] bg-clip-text text-transparent">
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
                        <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
                            Halaman Tidak Ditemukan
                        </h2>
                        <p className="text-foreground/50 text-sm sm:text-base">
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
                            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-5 rounded-xl transition-all"
                        >
                            <Link href="/">
                                <Home className="mr-2 h-4 w-4" />
                                Kembali ke Beranda
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="ghost"
                            className="text-foreground/70 hover:text-foreground hover:bg-foreground/5 px-6 py-5 rounded-xl"
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
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full" />
        </div>
    );
}
