"use client";

import { useReveal } from "@/lib/utils";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="bg-warm-white py-24 lg:py-32">
      <div ref={ref} className="fade-in mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
              About
            </p>
            <h2 className="mb-8 font-serif text-4xl leading-tight text-charcoal md:text-5xl">
              Omar Córdova
              <br />
              García
            </h2>
            <div className="group relative max-w-sm py-5 pl-5 pr-4">
              <div className="absolute left-0 top-0 h-full w-px bg-charcoal/12" />
              <div className="absolute left-0 top-0 h-px w-28 bg-charcoal/12" />
              <div className="absolute bottom-0 right-0 h-px w-40 bg-accent/45 transition-all duration-500 group-hover:w-52" />
              <div className="absolute bottom-0 right-0 h-36 w-px bg-accent/45 transition-all duration-500 group-hover:h-44" />
              <div className="absolute left-9 top-10 h-[calc(100%-5rem)] w-px bg-accent/18" />
              <div className="absolute left-0 top-24 h-px w-[calc(100%+1.5rem)] bg-charcoal/8" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-[6px] bg-light-gray ring-1 ring-charcoal/10">
                <img
                  src="/images/headshot.jpg"
                  alt="Omar Córdova García"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6 lg:pt-24">
            <blockquote className="border-l-2 border-accent/40 pl-6 font-serif text-lg italic leading-relaxed text-charcoal/80">
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

            <div className="mt-4 flex gap-8 text-xs uppercase tracking-widest text-muted">
              <div>
                <span className="block font-serif text-2xl text-charcoal">3+</span>
                Years
              </div>
              <div>
                <span className="block font-serif text-2xl text-charcoal">BFA</span>
                Interior Arch.
              </div>
              <div>
                <span className="block font-serif text-2xl text-charcoal">SF</span>
                Bay Area
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
