"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
  { name: "Blog", href: "/en/blog" },
];

export default function NavbarEN() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const logoSrc = mounted && resolvedTheme === "light" ? "/logokreativlabsterang.png" : "/logokreativ.png";

  useEffect(() => { setMounted(true); }, []);
  
  const getInitialActiveSection = () => {
    if (pathname.startsWith('/en/blog')) return '/en/blog';
    if (pathname === '/en') return '#';
    return '';
  };
  
  const [activeSection, setActiveSection] = useState(getInitialActiveSection);

  useEffect(() => {
    const checkScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    checkScroll();
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    if (pathname !== '/en') return;

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
    handleScroll();
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
          <Link href="/en" className="flex items-center z-10">
            <Image
              src={logoSrc}
              alt="KreativLabs.id"
              width={140}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const isExternal = link.href.startsWith('/');
              const href = isExternal ? link.href : (pathname !== '/en' ? `/en/${link.href}` : link.href);
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
                <Link href={pathname !== '/en' ? '/en/#contact' : '#contact'}>Get Started</Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground z-10 p-2 hover:bg-foreground/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-[600px] opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-6 bg-background backdrop-blur-xl rounded-b-2xl shadow-xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, index) => {
                const isExternal = link.href.startsWith('/');
                const href = isExternal ? link.href : (pathname !== '/en' ? `/en/${link.href}` : link.href);
                const isActive = activeSection === link.href || (link.href.startsWith('/') && pathname.startsWith(link.href));
                
                return (
                  <a
                    key={link.name}
                    href={href}
                    className={`text-base font-medium px-6 py-3 rounded-lg mx-2 transition-all ${
                      isActive
                        ? "text-primary bg-foreground/10"
                        : "text-foreground hover:text-primary hover:bg-foreground/5"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="px-4 pt-4 mt-2 border-t border-foreground/5">
                {mounted && (
                  <Button 
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground w-full rounded-full py-6 text-base font-medium shadow-lg shadow-primary/30"
                  >
                    <Link href={pathname !== '/en' ? '/en/#contact' : '#contact'} onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
