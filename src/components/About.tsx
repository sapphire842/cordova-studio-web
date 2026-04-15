"use client";

import { useReveal } from "@/lib/utils";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="bg-warm-white py-24 lg:py-32">
      <div ref={ref} className="fade-in mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
              Studio Ethos
            </p>
            <h2 className="mb-8 max-w-md font-serif text-4xl leading-tight text-charcoal md:text-5xl">
              Interiors that feel composed, personal, and lived in.
            </h2>
            <div className="aspect-[4/5] max-w-sm overflow-hidden bg-light-gray">
              <img
                src="/cordova-studio-web/images/headshot.jpg"
                alt="Omar Córdova García"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-8 hidden max-w-xs bg-charcoal p-6 text-warm-white shadow-xl md:block">
              <p className="text-[10px] uppercase tracking-[0.28em] text-accent">
                Founder
              </p>
              <p className="mt-2 font-serif text-2xl">Omar Córdova García</p>
              <p className="mt-3 text-xs font-light leading-relaxed text-warm-white/65">
                Interior Architecture &amp; Design, Academy of Art University
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-7 pt-8 lg:pt-0">
            <blockquote className="border-l-2 border-accent/50 pl-6 font-serif text-xl italic leading-relaxed text-charcoal/80 md:text-2xl">
              &ldquo;I am passionate for the arts, channeling my energy towards
              the creation of aesthetically pleasing environments. My
              inspiration is deeply rooted in timeless designs coupled with the
              principles of natural aesthetics.&rdquo;
            </blockquote>

            <p className="text-sm font-light leading-relaxed text-charcoal/70">
              With a Bachelor of Fine Arts in Interior Architecture &amp; Design
              from the Academy of Art University, Omar blends academic rigor
              with hands-on experience designing for high-end furniture
              retailers and staging residential and commercial spaces across the
              Bay Area.
            </p>

            <p className="text-sm font-light leading-relaxed text-charcoal/70">
              Based in Walnut Creek, California, Cordova Studio serves clients
              throughout the San Francisco Bay Area — from single-room
              refreshes to full-home transformations. Every project begins with
              listening: understanding the people, the space, and the story they
              want to tell.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                ["3+", "Years of practice"],
                ["BFA", "Interior architecture"],
                ["Bay Area", "Residential & commercial"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border-t border-charcoal/15 pt-4 text-xs uppercase tracking-widest text-muted"
                >
                  <span className="mb-1 block font-serif text-2xl normal-case tracking-normal text-charcoal">
                    {value}
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
