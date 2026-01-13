import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    ArrowRight,
    CheckCircle2,
    Code,
    Globe,
    Cpu,
    Palette,
    Instagram,
    PenTool,
    Star,
    Clock,
    Shield,
    Zap
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Jasa Pembuatan Website Murah Semarang | Landing Page, Company Profile, Toko Online",
    description: "Jasa pembuatan website murah di Semarang mulai 350rb. Landing page, company profile, toko online/e-commerce. Responsif, SEO friendly, fast loading. Gratis konsultasi!",
    keywords: [
        "jasa website murah",
        "jasa pembuatan website semarang",
        "jasa landing page murah",
        "jasa company profile",
        "jasa toko online",
        "jasa e-commerce murah",
        "jasa bikin website",
        "jasa buat website",
        "web developer semarang",
        "harga jasa website",
        "paket website umkm",
        "jasa website profesional"
    ],
    openGraph: {
        title: "Jasa Pembuatan Website Murah Semarang | KreativLabs.id",
        description: "Jasa pembuatan website murah di Semarang mulai 350rb. Landing page, company profile, toko online. Responsif, SEO friendly!",
        url: "https://kreativlabs.my.id/services/website",
        images: [
            {
                url: "https://kreativlabs.my.id/bannerkreativlabsid.png",
                width: 1200,
                height: 630,
                alt: "Jasa Pembuatan Website Murah Semarang",
            },
        ],
    },
    alternates: {
        canonical: "https://kreativlabs.my.id/services/website",
    },
};

const websiteServices = [
    {
        icon: Code,
        title: "Jasa Landing Page",
        description: "Landing page responsif dan modern yang dirancang untuk meningkatkan konversi bisnis Anda. Cocok untuk kampanye marketing dan promosi produk.",
        price: "Mulai Rp 350.000",
        features: [
            "Desain Responsif (Mobile-First)",
            "Fast Loading Speed",
            "SEO On-Page Optimization",
            "Integrasi WhatsApp",
            "1x Revisi Gratis",
            "Free Domain .my.id"
        ],
        popular: false
    },
    {
        icon: Globe,
        title: "Jasa Company Profile",
        description: "Website company profile profesional yang mencerminkan kredibilitas dan identitas bisnis Anda. Dilengkapi dengan halaman lengkap.",
        price: "Mulai Rp 750.000",
        features: [
            "5+ Halaman Lengkap",
            "Desain Premium & Responsif",
            "SEO Friendly Structure",
            "Contact Form",
            "Google Maps Integration",
            "3x Revisi Gratis"
        ],
        popular: true
    },
    {
        icon: Cpu,
        title: "Jasa E-Commerce / Toko Online",
        description: "Website toko online lengkap dengan fitur manajemen produk, keranjang belanja, dan integrasi pembayaran untuk mengembangkan bisnis Anda.",
        price: "Mulai Rp 1.500.000",
        features: [
            "Manajemen Produk",
            "Keranjang & Checkout",
            "Integrasi Payment Gateway",
            "Dashboard Admin",
            "Responsive Design",
            "Unlimited Revisi"
        ],
        popular: false
    }
];

const benefits = [
    {
        icon: Zap,
        title: "Fast Loading",
        description: "Website cepat dengan performa optimal untuk pengalaman pengguna terbaik"
    },
    {
        icon: Shield,
        title: "Aman & Terpercaya",
        description: "Keamanan website terjamin dengan SSL dan hosting berkualitas"
    },
    {
        icon: Star,
        title: "Desain Premium",
        description: "Desain modern dan profesional yang meningkatkan kredibilitas bisnis"
    },
    {
        icon: Clock,
        title: "Pengerjaan Cepat",
        description: "Proses pengerjaan efisien dengan timeline yang jelas dan transparan"
    }
];

export default function WebsiteServicesPage() {
    return (
        <main className="min-h-screen bg-[#0A192F]">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
                            Jasa Website Profesional
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Jasa Pembuatan Website
                            <br />
                            <span className="text-blue-400">Murah & Berkualitas</span>
                        </h1>
                        <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
                            Butuh website untuk bisnis Anda? KreativLabs.id menyediakan <strong className="text-white">jasa pembuatan website murah di Semarang</strong> dengan kualitas premium.
                            Landing page, company profile, hingga toko online dengan harga terjangkau untuk UMKM dan bisnis!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-full">
                                <a href="https://wa.me/6281327862503?text=Halo,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website" target="_blank" rel="noopener noreferrer">
                                    Konsultasi Gratis
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
                                <Link href="/#projects">
                                    Lihat Portfolio
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-6 bg-[#112240]/50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Paket Jasa Website
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Pilih paket yang sesuai dengan kebutuhan bisnis Anda
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {websiteServices.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <Card
                                    key={index}
                                    className={`relative bg-[#0A192F] border-white/10 p-8 rounded-3xl hover:border-blue-500/50 transition-all duration-300 ${service.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : ''
                                        }`}
                                >
                                    {service.popular && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                            <span className="bg-blue-500 text-white text-sm font-medium px-4 py-1 rounded-full">
                                                Paling Populer
                                            </span>
                                        </div>
                                    )}

                                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                                        <Icon className="w-7 h-7 text-blue-400" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                                    <p className="text-blue-400 font-semibold mb-4">{service.price}</p>
                                    <p className="text-slate-400 mb-6">{service.description}</p>

                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-slate-300 text-sm">
                                                <CheckCircle2 className="w-4 h-4 mr-3 text-blue-500" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Button asChild className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full">
                                        <a href={`https://wa.me/6281327862503?text=Halo,%20saya%20tertarik%20dengan%20${encodeURIComponent(service.title)}`} target="_blank" rel="noopener noreferrer">
                                            Pesan Sekarang
                                        </a>
                                    </Button>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Mengapa Pilih KreativLabs?
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Keunggulan jasa pembuatan website kami
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <div key={index} className="text-center p-6">
                                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-8 h-8 text-blue-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                                    <p className="text-slate-400 text-sm">{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-blue-500/10">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Siap Memiliki Website Profesional?
                    </h2>
                    <p className="text-slate-400 text-lg mb-8">
                        Konsultasikan kebutuhan website Anda dengan tim kami secara GRATIS!
                    </p>
                    <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-6 text-lg rounded-full">
                        <a href="https://wa.me/6281327862503?text=Halo,%20saya%20ingin%20konsultasi%20pembuatan%20website" target="_blank" rel="noopener noreferrer">
                            Hubungi Kami Sekarang
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </Button>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
            <BackToTop />
        </main>
    );
}
