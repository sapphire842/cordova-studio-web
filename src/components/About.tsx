"use client";

import { useReveal } from "@/lib/utils";

export default function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="about" className="bg-warm-white py-24 lg:py-32">
      <div ref={ref} className="fade-in mx-auto max-w-6xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — heading */}
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
              About
            </p>
            <h2 className="font-serif text-4xl leading-tight text-charcoal md:text-5xl">
              Omar Córdova
              <br />
              García
            </h2>
          </div>

          {/* Right — text */}
          <div className="flex flex-col justify-center gap-6">
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
