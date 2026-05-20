"use client";

import Script from "next/script";

interface SEOSchemaProps {
    type?: "homepage" | "service" | "blog";
    pageTitle?: string;
    pageDescription?: string;
}

export default function SEOSchema({
    type = "homepage",
    pageTitle,
    pageDescription
}: SEOSchemaProps) {
    // Organization Schema - untuk branding
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://kreativlabs.my.id/#organization",
        "name": "KreativLabs.id",
        "alternateName": ["Kreativ Labs", "KreativLabs", "Sistem Otomatisasi UMKM", "Aplikasi Kasir UMKM"],
        "url": "https://kreativlabs.my.id",
        "logo": {
            "@type": "ImageObject",
            "url": "https://kreativlabs.my.id/logokreativ.png",
            "width": 512,
            "height": 512
        },
        "image": "https://kreativlabs.my.id/bannerkreatiflabsid.png",
        "description": "Startup B2B spesialis otomatisasi yang memberdayakan bisnis UMKM di Indonesia dengan sistem kasir pintar, manajemen inventori real-time, dan platform reservasi otomatis.",
        "email": "hello@kreativlabs.my.id",
        "telephone": "+6283824787997",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Semarang",
            "addressLocality": "Semarang",
            "addressRegion": "Jawa Tengah",
            "postalCode": "50000",
            "addressCountry": "ID"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-6.966667",
            "longitude": "110.416664"
        },
        "areaServed": [
            { "@type": "Country", "name": "Indonesia" }
        ],
        "sameAs": [
            "https://instagram.com/kreativlabs.id",
            "https://wa.me/6283824787997"
        ],
        "paymentAccepted": ["Bank Transfer", "QRIS"],
        "currenciesAccepted": "IDR",
        "openingHours": "Mo-Su 08:00-22:00"
    };

    // LocalBusiness Schema - untuk Local SEO
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "@id": "https://kreativlabs.my.id/#software",
        "name": "KreativLabs.id - Sistem Otomatisasi & Aplikasi UMKM",
        "applicationCategory": "BusinessApplication",
        "url": "https://kreativlabs.my.id",
        "image": [
            "https://kreativlabs.my.id/bannerkreatiflabsid.png"
        ],
        "description": "Solusi otomatisasi operasional bisnis UMKM. Dari aplikasi kasir pintar, manajemen stok, hingga sistem reservasi. Melipatgandakan produktivitas dan mencegah kebocoran profit.",
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "IDR",
            "offerCount": 3,
            "offers": [
                {
                    "@type": "Offer",
                    "name": "AppStarter",
                    "description": "Fondasi digital untuk UMKM yang siap meninggalkan sistem manual."
                },
                {
                    "@type": "Offer",
                    "name": "AppGrowth",
                    "description": "Akselerasi performa bisnis dengan kekuatan data dan sinkronisasi multi-cabang."
                },
                {
                    "@type": "Offer",
                    "name": "AppScale",
                    "description": "Sistem manajemen enterprise untuk skalabilitas tanpa batas."
                }
            ]
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "150",
            "bestRating": "5",
            "worstRating": "1"
        }
    };

    // Website Schema
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://kreativlabs.my.id/#website",
        "url": "https://kreativlabs.my.id",
        "name": "KreativLabs.id",
        "alternateName": "Sistem Otomatisasi UMKM",
        "description": "Startup B2B spesialis otomatisasi yang memberdayakan bisnis UMKM di Indonesia dengan sistem perangkat lunak cerdas.",
        "publisher": {
            "@id": "https://kreativlabs.my.id/#organization"
        },
        "inLanguage": ["id-ID", "en-US"],
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://kreativlabs.my.id/blog?search={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    // FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Berapa lama proses implementasi sistem di toko kami?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Proses implementasi sangat cepat. Setelah Anda memilih paket berlangganan, tim kami akan melakukan setup sistem dalam 1-3 hari kerja. Anda dan karyawan bisa langsung menggunakan sistem pada hari yang sama."
                }
            },
            {
                "@type": "Question",
                "name": "Apakah data transaksi kami aman tersimpan di cloud?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sangat aman. Seluruh data penjualan, stok, dan pelanggan Anda dienkripsi dan disimpan di server cloud berspesifikasi enterprise kami yang memiliki backup otomatis setiap jam."
                }
            },
            {
                "@type": "Question",
                "name": "Apakah sistem ini bisa diakses lewat HP atau tablet oleh karyawan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tentu saja. Ekosistem perangkat lunak kami berbasis web dan cloud (SaaS), sehingga bisa diakses dari perangkat apapun (HP, Tablet, PC/Laptop) cukup dengan koneksi internet, tanpa perlu instalasi rumit."
                }
            },
            {
                "@type": "Question",
                "name": "Bagaimana jika ada kendala teknis atau mati lampu di lapangan?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Aplikasi kasir kami memiliki mode offline ringan yang memungkinkan transaksi tetap berjalan saat internet terputus, dan akan otomatis tersinkronisasi saat online kembali. Tim support teknis kami juga bersiaga untuk membantu kapan pun."
                }
            }
        ]
    };

    // BreadcrumbList Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://kreativlabs.my.id"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Layanan",
                "item": "https://kreativlabs.my.id#services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Pricing",
                "item": "https://kreativlabs.my.id#pricing"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Kontak",
                "item": "https://kreativlabs.my.id#contact"
            }
        ]
    };

    return (
        <>
            <Script
                id="organization-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id="local-business-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <Script
                id="website-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <Script
                id="faq-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}
