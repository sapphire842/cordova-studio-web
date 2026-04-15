"use client";

import { useReveal } from "@/lib/utils";

const basePath = "/cordova-studio-web";

export default function Hero() {
  const ref = useReveal();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-charcoal pt-24">
      <img
        src={`${basePath}/images/hero-bg.jpg`}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover animate-hero-zoom"
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,26,26,0.94)_0%,rgba(26,26,26,0.78)_44%,rgba(26,26,26,0.36)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-end gap-12 px-6 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
        <div ref={ref} className="fade-in max-w-3xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-accent">
            Interior Architecture &amp; Design
          </p>
          <h1 className="font-serif text-5xl font-normal leading-[0.95] text-warm-white md:text-7xl lg:text-8xl">
            Cordova
            <span className="block italic text-accent-light">Studio</span>
          </h1>
          <p className="mt-8 max-w-xl text-base font-light leading-relaxed text-warm-white/72 md:text-lg">
            Spaces with quiet depth. Warm, layered interiors for homes,
            hospitality, and commercial environments across the Bay Area.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center border border-accent bg-accent px-7 py-3 text-xs font-medium uppercase tracking-[0.22em] text-charcoal transition-colors hover:bg-accent-light"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-warm-white/30 px-7 py-3 text-xs font-medium uppercase tracking-[0.22em] text-warm-white transition-colors hover:border-accent hover:text-accent"
            >
              Start a Project
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-warm-white/14 py-5">
            <div>
              <span className="block font-serif text-2xl text-warm-white">04</span>
              <span className="text-[10px] uppercase tracking-widest text-warm-white/45">
                Projects
              </span>
            </div>
            <div className="border-x border-warm-white/14 px-5">
              <span className="block font-serif text-2xl text-warm-white">SF</span>
              <span className="text-[10px] uppercase tracking-widest text-warm-white/45">
                Bay Area
              </span>
            </div>
            <div className="pl-5">
              <span className="block font-serif text-2xl text-warm-white">BFA</span>
              <span className="text-[10px] uppercase tracking-widest text-warm-white/45">
                Interior
              </span>
            </div>
          </div>
        </div>

        <aside className="hidden justify-self-end lg:block">
          <a href="#portfolio" className="group block w-[min(34vw,430px)]">
            <div className="relative aspect-[4/5] overflow-hidden border border-warm-white/15 bg-warm-white/5">
              <img
                src={`${basePath}/images/projects/vallejo-residence/cover.jpg`}
                alt="2190 Vallejo Street Residence"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                  Featured Residential
                </p>
                <h2 className="mt-2 font-serif text-2xl text-warm-white">
                  2190 Vallejo Street
                </h2>
              </div>
            </div>
          </a>
        </aside>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
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
