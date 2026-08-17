"use client";

import { Instagram, Mail, Twitter, Facebook, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { ThemeToggle } from "../../ThemeToggle";

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
    label: "Facebook"
  },
  {
    icon: Mail,
    href: "mailto:hello@kreativlabs.id",
    label: "Email",
  },
];

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Portfolio", href: "#projects" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "/en/blog" },
  ],
  services: [
    { name: "Landing Page", href: "#services" },
    { name: "Web Development", href: "#services" },
    { name: "Fullstack Development", href: "#services" },
    { name: "Company Profile", href: "#services" },
    { name: "Graphic Design", href: "#services" },
    { name: "Social Media Design", href: "#services" },
    { name: "Flyer & Poster Design", href: "#services" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/en/legal/privacy-policy" },
    { name: "Terms of Service", href: "/en/legal/terms-of-service" },
    { name: "Cookie Policy", href: "/en/legal/cookie-policy" },
  ],
};

export default function FooterEN() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const logoSrc = mounted && resolvedTheme === "light" ? "/logokreativlabsterang.png" : "/logokreativ.png";
  useEffect(() => { setMounted(true); }, []);
  return (
    <footer className="relative bg-background border-t border-foreground/10 overflow-hidden overflow-x-hidden w-full">
      {/* Lighting Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary rounded-full blur-[120px] opacity-5"></div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Link href="/en">
                <Image
                  src={logoSrc}
                  alt="KreativLabs.id"
                  width={160}
                  height={60}
                  className="h-20 w-auto"
                />
              </Link>
            </div>
            <p className="text-foreground/70 text-sm mb-6 leading-relaxed">
              Modern digital solutions for your business. We create attractive, functional websites and designs that generate conversions.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-foreground/5 hover:bg-primary/20 border border-foreground/10 hover:border-primary rounded-lg flex items-center justify-center transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-foreground/70 group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('#') ? (
                    <a
                      href={link.href}
                      className="text-foreground/70 hover:text-primary text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-foreground/70 hover:text-primary text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-foreground/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} KreativLabs.id. All rights reserved.
            </p>
            {/* Actions */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Link
                href="/"
                className="flex items-center gap-2 px-4 py-2 text-foreground/70 hover:text-primary transition-colors rounded-lg hover:bg-foreground/5 border border-foreground/10"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">Bahasa Indonesia (ID)</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
