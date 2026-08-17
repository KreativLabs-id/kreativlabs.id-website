import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    ArrowRight,
    CheckCircle2,
    Palette,
    Instagram,
    PenTool,
    Star,
    Clock,
    Shield,
    Zap,
    Image as ImageIcon,
    Layers
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Jasa Desain Grafis Murah Semarang | Logo, Poster, Social Media - Mulai 50rb",
    description: "Jasa desain grafis murah di Semarang mulai 50rb. Desain logo, poster, konten social media, packaging, UI/UX. Kualitas profesional, harga UMKM friendly!",
    keywords: [
        "jasa desain grafis murah",
        "jasa desain logo",
        "jasa desain poster",
        "jasa design",
        "jasa desain social media",
        "jasa desain semarang",
        "jasa design murah",
        "jasa desain instagram",
        "desainer grafis semarang",
        "harga jasa desain logo",
        "jasa desain kemasan",
        "jasa desain branding"
    ],
    openGraph: {
        title: "Jasa Desain Grafis Murah Semarang | KreativLabs.id",
        description: "Jasa desain grafis murah di Semarang mulai 50rb. Desain logo, poster, social media. Kualitas profesional!",
        url: "https://kreativlabs.id/services/design",
        images: [
            {
                url: "https://kreativlabs.id/bannerkreatiflabsid.png",
                width: 1200,
                height: 630,
                alt: "Jasa Desain Grafis Murah Semarang",
            },
        ],
    },
    alternates: {
        canonical: "https://kreativlabs.id/services/design",
    },
};

const designServices = [
    {
        icon: Palette,
        title: "Desain Logo",
        description: "Desain logo profesional yang unik dan mencerminkan identitas brand bisnis Anda. File dalam format vektor untuk berbagai kebutuhan.",
        price: "Mulai Rp 50.000",
        features: [
            "Konsep Original & Unik",
            "File Vector (AI, SVG)",
            "Format PNG & JPG",
            "2x Revisi Gratis",
            "Hak Cipta Penuh",
            "Mockup Preview"
        ],
        popular: false
    },
    {
        icon: ImageIcon,
        title: "Desain Poster & Banner",
        description: "Desain poster promosi, banner digital, dan materi marketing visual yang menarik untuk berbagai kebutuhan bisnis Anda.",
        price: "Mulai Rp 50.000",
        features: [
            "Desain Kreatif & Menarik",
            "Berbagai Ukuran",
            "Print Ready (CMYK)",
            "Digital Ready (RGB)",
            "2x Revisi Gratis",
            "Quick Turnaround"
        ],
        popular: false
    },
    {
        icon: Instagram,
        title: "Desain Social Media",
        description: "Konten visual menarik untuk Instagram, Facebook, TikTok dan platform media sosial lainnya untuk meningkatkan engagement.",
        price: "Mulai Rp 50.000/post",
        features: [
            "Feed & Story Design",
            "Carousel Posts",
            "Highlight Covers",
            "Konsistensi Visual",
            "Template Reusable",
            "Unlimited Revisi"
        ],
        popular: true
    },
    {
        icon: Layers,
        title: "Desain Packaging",
        description: "Desain kemasan produk yang menarik dan profesional untuk meningkatkan daya jual dan branding produk Anda.",
        price: "Mulai Rp 150.000",
        features: [
            "Desain Kreatif",
            "Multiple Mockup",
            "Print Ready",
            "Revisi Unlimited",
            "Source File",
            "Konsultasi Gratis"
        ],
        popular: false
    },
    {
        icon: PenTool,
        title: "UI/UX Design",
        description: "Perancangan antarmuka dan pengalaman pengguna untuk aplikasi mobile dan website yang intuitif dan modern.",
        price: "Mulai Rp 500.000",
        features: [
            "User Research",
            "Wireframing",
            "High Fidelity Design",
            "Interactive Prototype",
            "Design System",
            "Handoff Developer"
        ],
        popular: false
    },
    {
        icon: Star,
        title: "Paket Branding",
        description: "Paket lengkap branding untuk bisnis baru atau rebranding. Termasuk logo, brand guideline, dan berbagai materi promosi.",
        price: "Mulai Rp 500.000",
        features: [
            "Logo Design",
            "Brand Guideline",
            "Kartu Nama",
            "Kop Surat",
            "Social Media Kit",
            "All Source Files"
        ],
        popular: false
    }
];

const benefits = [
    {
        icon: Zap,
        title: "Pengerjaan Cepat",
        description: "Proses desain efisien dengan hasil maksimal dalam waktu singkat"
    },
    {
        icon: Shield,
        title: "100% Original",
        description: "Semua desain dibuat original tanpa template atau plagiarisme"
    },
    {
        icon: Star,
        title: "Kualitas Premium",
        description: "Hasil desain berkualitas tinggi dengan standar profesional"
    },
    {
        icon: Clock,
        title: "Revisi Terjamin",
        description: "Revisi gratis untuk memastikan kepuasan Anda"
    }
];

export default function DesignServicesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                            Jasa Desain Profesional
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                            Jasa Desain Grafis
                            <br />
                            <span className="text-primary">Murah & Berkualitas</span>
                        </h1>
                        <p className="text-foreground/60 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
                            Butuh desain untuk bisnis Anda? KreativLabs.id menyediakan <strong className="text-foreground">jasa desain grafis murah di Semarang</strong> dengan kualitas premium.
                            Logo, poster, social media content, packaging dengan <strong className="text-foreground">harga mulai dari 50 ribu</strong>!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild className="bg-primary hover:bg-primary/80 text-primary-foreground px-8 py-6 text-lg rounded-full">
                                <a href="https://wa.me/6281327862503?text=Halo,%20saya%20tertarik%20dengan%20jasa%20desain%20grafis" target="_blank" rel="noopener noreferrer">
                                    Konsultasi Gratis
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground/10 px-8 py-6 text-lg rounded-full">
                                <Link href="/#projects">
                                    Lihat Portfolio
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-6 bg-muted/50">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Layanan Desain Grafis
                        </h2>
                        <p className="text-foreground/60 max-w-2xl mx-auto">
                            Berbagai layanan desain untuk kebutuhan bisnis Anda
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {designServices.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <Card
                                    key={index}
                                    className={`relative bg-background border-foreground/10 p-8 rounded-3xl hover:border-primary/50 transition-all duration-300 ${service.popular ? 'border-primary ring-2 ring-primary/20' : ''
                                        }`}
                                >
                                    {service.popular && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                            <span className="bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
                                                Paling Populer
                                            </span>
                                        </div>
                                    )}

                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                        <Icon className="w-7 h-7 text-primary" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                                    <p className="text-primary font-semibold mb-4">{service.price}</p>
                                    <p className="text-foreground/60 mb-6 text-sm">{service.description}</p>

                                    <ul className="space-y-2 mb-8">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-foreground/70 text-sm">
                                                <CheckCircle2 className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <Button asChild className="w-full bg-primary hover:bg-primary/80 text-primary-foreground rounded-full">
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
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Mengapa Pilih KreativLabs?
                        </h2>
                        <p className="text-foreground/60 max-w-2xl mx-auto">
                            Keunggulan jasa desain grafis kami
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            return (
                                <div key={index} className="text-center p-6">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                                    <p className="text-foreground/60 text-sm">{benefit.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-primary/10">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Siap Wujudkan Desain Impian Anda?
                    </h2>
                    <p className="text-foreground/60 text-lg mb-8">
                        Konsultasikan kebutuhan desain Anda dengan tim kami secara GRATIS!
                    </p>
                    <Button asChild className="bg-primary hover:bg-primary/80 text-primary-foreground px-10 py-6 text-lg rounded-full">
                        <a href="https://wa.me/6281327862503?text=Halo,%20saya%20ingin%20konsultasi%20jasa%20desain" target="_blank" rel="noopener noreferrer">
                            Hubungi Kami Sekarang
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </Button>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
