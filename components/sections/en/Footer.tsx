"use client";

import { Instagram, Mail, Twitter, Facebook, Globe, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { ThemeToggle } from "../../ThemeToggle";
import { RuixenGradientFooter } from "@/components/ui/ruixen-gradient-footer";

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/kreativlabs.id",
    label: "Instagram",
  },
  {
    icon: TikTokIcon,
    href: "https://tiktok.com/@kreativlabs.id",
    label: "TikTok",
  },
  {
    icon: Twitter,
    href: "https://x.com/kreativlabs_id",
    label: "X/Twitter",
  },
  {
    icon: Facebook,
    href: "https://facebook.com/kreativlabs.id",
    label: "Facebook",
  },
  {
    icon: Mail,
    href: "mailto:hello@kreativlabs.id",
    label: "Email",
  }
];

const footerColumnsEN = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/en#about" },
      { name: "Services", href: "/en#services" },
      { name: "Portfolio", href: "/en#projects" },
      { name: "FAQ", href: "/en#faq" },
      { name: "Contact", href: "/en#contact" },
      { name: "Blog", href: "/en/blog" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Landing Page", href: "/en/services/website" },
      { name: "Corporate Website", href: "/en/services/website" },
      { name: "Custom Systems", href: "/en/services/website" },
      { name: "Logo Design", href: "/en/services/design" },
      { name: "Social Media", href: "/en/services/design" },
      { name: "UI/UX Design", href: "/en/services/design" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/en/legal/privacy-policy" },
      { name: "Terms of Service", href: "/en/legal/terms-of-service" },
      { name: "Cookie Policy", href: "/en/legal/cookie-policy" },
    ],
  },
];

export default function FooterEN() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const logoSrc = mounted && resolvedTheme === "light" ? "/logokreativlabsterang.png" : "/logokreativ.png";

  useEffect(() => { 
    setMounted(true); 
  }, []);

  return (
    <RuixenGradientFooter gradientHeight="160px" className="relative bg-background border-t border-border/80 overflow-hidden w-full">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 pt-16 pb-4 relative z-10">
        
        {/* Main Grid */}
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-6">
          
          {/* Brand & Bio (2 Columns) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="mb-4">
              <Link href="/en">
                <Image
                  src={logoSrc}
                  alt="KreativLabs.id"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            
            <p className="max-w-sm text-xs sm:text-sm text-foreground/70 leading-relaxed">
              Modern digital solutions for your business. We engineer functional websites and craft professional visual designs that deliver real results.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-secondary hover:bg-primary/15 border border-border/80 hover:border-primary/40 flex items-center justify-center transition-all group"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-foreground/70 group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Nav Columns (3 Columns) */}
          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:col-span-3">
            {footerColumnsEN.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm">
                  {col.links.map((link) => (
                    <li key={link.name}>
                      {link.href.startsWith("#") ? (
                        <a
                          href={link.href}
                          className="text-foreground/70 hover:text-primary transition-colors"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-foreground/70 hover:text-primary transition-colors"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-foreground/60">
          <div>
            © {new Date().getFullYear()} KreativLabs.id. All rights reserved.
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-foreground/70 hover:text-primary transition-colors rounded-lg bg-secondary border border-border"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Bahasa Indonesia (ID)</span>
            </Link>
          </div>
        </div>

      </div>
    </RuixenGradientFooter>
  );
}
