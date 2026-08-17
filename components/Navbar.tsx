"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Beranda", href: "#" },
  { name: "Proyek", href: "#projects" },
  { name: "Tentang", href: "#about" },
  { name: "Layanan", href: "#services" },
  { name: "Harga", href: "#pricing" },
  { name: "Kontak", href: "#contact" },
  { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const logoSrc = mounted && resolvedTheme === "light" ? "/logokreativlabsterang.png" : "/logokreativ.png";

  useEffect(() => {
    setMounted(true);
  }, []);

  const getInitialActiveSection = () => {
    if (pathname.startsWith("/blog")) return "/blog";
    if (pathname === "/") return "#";
    return "";
  };

  const [activeSection, setActiveSection] = useState(getInitialActiveSection);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname !== "/") return;

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        if (section === "") {
          if (window.scrollY < 120) {
            setActiveSection("#");
          }
          continue;
        }
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-200 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/80 shadow-xs"
          : "bg-background/70 backdrop-blur-xs border-b border-border/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo (Left) */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src={logoSrc}
              alt="KreativLabs.id"
              width={140}
              height={40}
              className="h-8 sm:h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation Links (Center) */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-8">
            {navLinks.map((link) => {
              const isExternal = link.href.startsWith("/");
              const href = isExternal ? link.href : (pathname !== "/" ? `/${link.href}` : link.href);
              const isActive = activeSection === link.href || (link.href.startsWith("/") && pathname.startsWith(link.href));

              return (
                <a
                  key={link.name}
                  href={href}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-foreground/75 hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Action Button (Right) */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href={pathname !== "/" ? "/#contact" : "#contact"}
              className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-xs hover:-translate-y-0.5 whitespace-nowrap"
            >
              Mulai Sekarang
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-foreground p-2 rounded-lg hover:bg-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Buka menu navigasi"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu (Standard full-width below header) */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-border/80 bg-background/98 backdrop-blur-xl shadow-lg px-4 sm:px-6 py-4 space-y-1">
          {navLinks.map((link) => {
            const isExternal = link.href.startsWith("/");
            const href = isExternal ? link.href : (pathname !== "/" ? `/${link.href}` : link.href);
            const isActive = activeSection === link.href || (link.href.startsWith("/") && pathname.startsWith(link.href));

            return (
              <a
                key={link.name}
                href={href}
                className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary bg-primary/10 font-semibold"
                    : "text-foreground/80 hover:bg-secondary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            );
          })}

          <div className="pt-3 border-t border-border/60 mt-2">
            <Link
              href={pathname !== "/" ? "/#contact" : "#contact"}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center py-2.5 px-4 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors text-center"
            >
              Mulai Sekarang
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
