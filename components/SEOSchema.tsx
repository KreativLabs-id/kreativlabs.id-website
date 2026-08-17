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
        "@id": "https://kreativlabs.id/#organization",
        "name": "KreativLabs.id",
        "alternateName": ["Kreativ Labs", "KreativLabs", "Jasa Website Semarang", "Jasa Desain Semarang"],
        "url": "https://kreativlabs.id",
        "logo": {
            "@type": "ImageObject",
            "url": "https://kreativlabs.id/logokreativ.png",
            "width": 512,
            "height": 512
        },
        "image": "https://kreativlabs.id/og-image.png",
        "description": "Jasa pembuatan website murah dan desain grafis profesional di Semarang. Landing page, company profile, e-commerce, desain logo, poster, dan social media mulai dari Rp 50.000.",
        "email": "kreativlabsid@gmail.com",
        "telephone": "+6285872381791",
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
            {
                "@type": "City",
                "name": "Semarang"
            },
            {
                "@type": "State",
                "name": "Jawa Tengah"
            },
            {
                "@type": "Country",
                "name": "Indonesia"
            }
        ],
        "sameAs": [
            "https://instagram.com/kreativlabs.id",
            "https://wa.me/6285872381791"
        ],
        "priceRange": "Rp 50.000 - Rp 5.000.000",
        "paymentAccepted": ["Cash", "Bank Transfer", "QRIS", "E-Wallet"],
        "currenciesAccepted": "IDR",
        "openingHours": "Mo-Su 08:00-22:00"
    };

    // LocalBusiness Schema - untuk Local SEO
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": "https://kreativlabs.id/#localbusiness",
        "name": "KreativLabs.id - Jasa Website & Desain Grafis Semarang",
        "alternateName": ["Jasa Website Murah Semarang", "Jasa Desain Grafis Semarang", "Jasa Pembuatan Website Semarang"],
        "url": "https://kreativlabs.id",
        "logo": "https://kreativlabs.id/logokreativ.png",
        "image": [
            "https://kreativlabs.id/og-image.png",
            "https://kreativlabs.id/companyprofile.png",
            "https://kreativlabs.id/ecommerce.png"
        ],
        "description": "Jasa pembuatan website profesional dan desain grafis murah di Semarang. Melayani landing page, company profile, toko online, desain logo, poster, social media content. Harga mulai 50rb!",
        "telephone": "+6285872381791",
        "email": "kreativlabsid@gmail.com",
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
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Layanan Digital KreativLabs",
            "itemListElement": [
                {
                    "@type": "OfferCatalog",
                    "name": "Jasa Pembuatan Website",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Jasa Landing Page Murah",
                                "description": "Pembuatan landing page profesional, responsif, dan SEO friendly untuk meningkatkan konversi bisnis"
                            },
                            "priceSpecification": {
                                "@type": "PriceSpecification",
                                "priceCurrency": "IDR",
                                "price": "350000",
                                "minPrice": "350000"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Jasa Company Profile Website",
                                "description": "Website company profile profesional untuk bisnis dan perusahaan"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Jasa Toko Online / E-Commerce",
                                "description": "Pembuatan website toko online lengkap dengan sistem pembayaran dan manajemen produk"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Jasa Website Custom",
                                "description": "Pengembangan website custom sesuai kebutuhan bisnis Anda"
                            }
                        }
                    ]
                },
                {
                    "@type": "OfferCatalog",
                    "name": "Jasa Desain Grafis",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Jasa Desain Logo Murah",
                                "description": "Desain logo profesional yang mencerminkan identitas brand bisnis Anda"
                            },
                            "priceSpecification": {
                                "@type": "PriceSpecification",
                                "priceCurrency": "IDR",
                                "price": "50000",
                                "minPrice": "50000"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Jasa Desain Poster",
                                "description": "Desain poster promosi, event, dan marketing untuk bisnis"
                            },
                            "priceSpecification": {
                                "@type": "PriceSpecification",
                                "priceCurrency": "IDR",
                                "price": "50000",
                                "minPrice": "50000"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Jasa Desain Social Media Content",
                                "description": "Desain konten Instagram, Facebook, TikTok untuk meningkatkan engagement"
                            },
                            "priceSpecification": {
                                "@type": "PriceSpecification",
                                "priceCurrency": "IDR",
                                "price": "50000",
                                "minPrice": "50000"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Jasa Desain UI/UX",
                                "description": "Perancangan user interface dan user experience untuk aplikasi dan website"
                            }
                        }
                    ]
                }
            ]
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "50",
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": [
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Budi Santoso"
                },
                "datePublished": "2025-10-15",
                "reviewBody": "Website toko online saya jadi lebih profesional dan penjualan meningkat 200%. Harga terjangkau, hasil maksimal!",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                }
            },
            {
                "@type": "Review",
                "author": {
                    "@type": "Person",
                    "name": "Sarah Fitri"
                },
                "datePublished": "2025-11-20",
                "reviewBody": "Desain logo dan social media content nya bagus banget! Cocok untuk UMKM yang cari jasa desain murah tapi berkualitas.",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                }
            }
        ],
        "priceRange": "Rp 50.000 - Rp 5.000.000",
        "paymentAccepted": ["Cash", "Bank Transfer", "QRIS", "GoPay", "OVO", "Dana"],
        "currenciesAccepted": "IDR",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "08:00",
                "closes": "22:00"
            }
        ],
        "areaServed": [
            {
                "@type": "City",
                "name": "Semarang"
            },
            {
                "@type": "City",
                "name": "Jakarta"
            },
            {
                "@type": "City",
                "name": "Surabaya"
            },
            {
                "@type": "City",
                "name": "Bandung"
            },
            {
                "@type": "City",
                "name": "Yogyakarta"
            },
            {
                "@type": "State",
                "name": "Jawa Tengah"
            },
            {
                "@type": "Country",
                "name": "Indonesia"
            }
        ],
        "knowsLanguage": ["id", "en"]
    };

    // Website Schema
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://kreativlabs.id/#website",
        "url": "https://kreativlabs.id",
        "name": "KreativLabs.id",
        "alternateName": "Jasa Website Murah Semarang",
        "description": "Jasa pembuatan website murah dan desain grafis profesional mulai dari 50rb. Melayani landing page, company profile, e-commerce, desain logo, poster, social media.",
        "publisher": {
            "@id": "https://kreativlabs.id/#organization"
        },
        "inLanguage": ["id-ID", "en-US"],
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://kreativlabs.id/blog?search={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    // FAQ Schema - untuk Rich Snippets di Google
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Berapa harga jasa pembuatan website di KreativLabs?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Harga jasa pembuatan website di KreativLabs mulai dari Rp 350.000 untuk landing page. Untuk company profile mulai Rp 750.000, dan e-commerce/toko online mulai Rp 1.500.000. Semua sudah termasuk desain responsif dan SEO friendly."
                }
            },
            {
                "@type": "Question",
                "name": "Berapa harga jasa desain grafis di KreativLabs?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Jasa desain grafis di KreativLabs sangat terjangkau, mulai dari Rp 50.000 untuk desain logo, poster, dan konten social media. Cocok untuk UMKM dan bisnis yang mencari jasa desain murah berkualitas."
                }
            },
            {
                "@type": "Question",
                "name": "Apakah KreativLabs melayani jasa website di Semarang?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ya, KreativLabs berbasis di Semarang dan melayani jasa pembuatan website serta desain grafis untuk klien di Semarang, Jawa Tengah, dan seluruh Indonesia secara online."
                }
            },
            {
                "@type": "Question",
                "name": "Berapa lama waktu pengerjaan website?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Waktu pengerjaan bervariasi: landing page 1-2 minggu, company profile 2-4 minggu, dan e-commerce 4-8 minggu. Kami memberikan timeline yang jelas di awal project."
                }
            },
            {
                "@type": "Question",
                "name": "Apakah website yang dibuat mobile-friendly?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ya, semua website yang kami buat sudah responsive dan mobile-friendly. Kami menggunakan pendekatan mobile-first untuk memastikan tampilan optimal di semua perangkat."
                }
            },
            {
                "@type": "Question",
                "name": "Apa saja layanan yang tersedia di KreativLabs?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "KreativLabs menyediakan jasa pembuatan website (landing page, company profile, e-commerce, web custom), desain grafis (logo, poster, social media content, packaging), dan UI/UX design dengan harga terjangkau mulai 50rb."
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
                "item": "https://kreativlabs.id"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Layanan",
                "item": "https://kreativlabs.id#services"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Portfolio",
                "item": "https://kreativlabs.id#projects"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": "Kontak",
                "item": "https://kreativlabs.id#contact"
            }
        ]
    };

    // Service Schema - untuk setiap layanan
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": [
            {
                "@type": "Service",
                "position": 1,
                "name": "Jasa Pembuatan Website Murah",
                "description": "Jasa pembuatan website profesional dengan harga terjangkau. Landing page, company profile, e-commerce, dan website custom untuk bisnis Anda.",
                "provider": {
                    "@id": "https://kreativlabs.id/#organization"
                },
                "areaServed": "Indonesia",
                "serviceType": "Web Development",
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "IDR",
                    "price": "350000"
                }
            },
            {
                "@type": "Service",
                "position": 2,
                "name": "Jasa Desain Grafis Murah",
                "description": "Jasa desain grafis profesional mulai 50rb. Desain logo, poster, konten social media, dan packaging untuk bisnis dan UMKM.",
                "provider": {
                    "@id": "https://kreativlabs.id/#organization"
                },
                "areaServed": "Indonesia",
                "serviceType": "Graphic Design",
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "IDR",
                    "price": "50000"
                }
            },
            {
                "@type": "Service",
                "position": 3,
                "name": "Jasa Website Semarang",
                "description": "Jasa pembuatan website di Semarang. Melayani bisnis lokal dan nasional dengan kualitas premium dan harga bersahabat.",
                "provider": {
                    "@id": "https://kreativlabs.id/#organization"
                },
                "areaServed": ["Semarang", "Jawa Tengah", "Indonesia"],
                "serviceType": "Web Development"
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
            <Script
                id="service-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
        </>
    );
}
