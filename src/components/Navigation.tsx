"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Services", href: "/#services" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-warm-white shadow-sm"
          : "bg-warm-white shadow-md"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 lg:px-12 ${
          scrolled ? "min-h-[68px] py-3" : "min-h-[84px] py-2"
        }`}
      >
        <Link
          href="/"
          className={`inline-flex items-center transition-all duration-500 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
            scrolled
              ? "font-serif text-xl text-charcoal hover:text-accent"
              : "h-[72px] w-[96px] justify-center hover:drop-shadow-2xl"
          }`}
          aria-label="The Cordova Studio home"
        >
          {scrolled ? (
            "The Córdova Studio"
          ) : (
            <Image
              src="/images/logo.png"
              alt="The Cordova Studio"
              width={637}
              height={480}
              priority
              className="h-full w-full object-contain"
            />
          )}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-light uppercase tracking-widest transition-colors ${
                  scrolled
                    ? "text-charcoal hover:text-accent"
                    : "text-charcoal hover:text-accent"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 text-charcoal md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 bg-charcoal transition-all ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-charcoal transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-charcoal transition-all ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute inset-x-0 top-full bg-warm-white/98 backdrop-blur-lg md:hidden">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm uppercase tracking-widest text-charcoal hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
