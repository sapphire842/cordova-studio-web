"use client";

import { useReveal } from "@/lib/utils";

export default function Hero() {
  const ref = useReveal();

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-charcoal overflow-hidden">
      {/* Background image with slow zoom */}
      <img
        src="/images/hero-bg.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover animate-hero-zoom"
      />

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal/90" />

      <div ref={ref} className="fade-in relative z-10 px-6 text-center">
        <p className="mb-4 text-sm font-light uppercase tracking-[0.35em] text-accent">
          Interior Architecture &amp; Design
        </p>
        <h1 className="font-serif text-5xl font-normal leading-tight text-warm-white md:text-7xl lg:text-8xl">
          The Córdova
          <br />
          Studio
        </h1>
        <p className="mx-auto mt-8 max-w-lg text-base font-light leading-relaxed text-warm-white/70">
          Timeless designs rooted in natural aesthetics — spaces that inspire
          and engage.
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <a href="#about" className="group flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-warm-white/40 transition-colors group-hover:text-accent">
            Scroll
          </span>
          <span className="block h-10 w-px bg-gradient-to-b from-warm-white/40 to-transparent" />
        </a>
      </div>
    </section>
  );
}
