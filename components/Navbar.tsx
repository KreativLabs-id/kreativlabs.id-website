"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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

  useEffect(() => { setMounted(true); }, []);
  
  // Derive active section from pathname instead of using effect
  const getInitialActiveSection = () => {
    if (pathname.startsWith('/blog')) return '/blog';
    if (pathname === '/') return '#';
    return '';
  };
  
  const [activeSection, setActiveSection] = useState(getInitialActiveSection);

  useEffect(() => {
    // Check initial scroll position on mount
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Check immediately on mount
    checkScroll();

    // Then add scroll listener
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    // Only track scroll on homepage
    if (pathname !== '/') return;

    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.replace('#', ''));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        if (section === '') {
          if (window.scrollY < 100) {
            setActiveSection('#');
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

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "top-4 px-4 sm:px-6 lg:px-8"
          : "top-0 px-0"
      }`}
    >
      <div className={`mx-auto transition-all duration-500 ease-out ${
        isScrolled
          ? "max-w-5xl bg-background/90 backdrop-blur-xl rounded-full px-6"
          : "max-w-7xl bg-transparent px-6"
      }`}>
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo - Left */}
          <a href="#" className="flex items-center z-10">
            <Image
              src={logoSrc}
              alt="KreativLabs.id"
              width={140}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isExternal = link.href.startsWith('/');
              const href = isExternal ? link.href : (pathname !== '/' ? `/${link.href}` : link.href);
              const isActive = activeSection === link.href || (link.href.startsWith('/') && pathname.startsWith(link.href));
              
              return (
                <a
                  key={link.name}
                  href={href}
                  className={`text-sm font-medium relative group transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </a>
              );
            })}
          </div>

          {/* CTA - Right */}
          <div className="hidden md:flex items-center gap-3">
            {mounted && (
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
                <Link href={pathname !== '/' ? '/#contact' : '#contact'}>Mulai Sekarang</Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2 z-10">
            <button
              className="text-foreground p-2 hover:bg-foreground/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out absolute left-0 right-0 ${
            isScrolled ? 'top-[calc(100%+0.5rem)]' : 'top-full'
          } ${
            isMobileMenuOpen 
              ? 'max-h-[600px] opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-2xl mx-4 mt-2 p-6 flex flex-col space-y-2 relative z-50">
            {navLinks.map((link, index) => {
              const isExternal = link.href.startsWith('/');
              const href = isExternal ? link.href : (pathname !== '/' ? `/${link.href}` : link.href);
              const isActive = activeSection === link.href || (link.href.startsWith('/') && pathname.startsWith(link.href));
              
              return (
                <a
                  key={link.name}
                  href={href}
                  className={`text-base font-medium px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-secondary/80"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="pt-6 mt-4 border-t border-border/50">
              {mounted && (
                <Button 
                  asChild
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full rounded-xl py-6 text-sm font-medium shadow-none hover:shadow-lg transition-all"
                >
                  <Link href={pathname !== '/' ? '/#contact' : '#contact'} onClick={() => setIsMobileMenuOpen(false)}>Mulai Sekarang</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
