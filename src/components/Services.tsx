"use client";

import { useReveal } from "@/lib/utils";
import { services } from "@/data/services";

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" className="bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div
          ref={ref}
          className="fade-in mb-16 grid gap-8 lg:grid-cols-[0.8fr_1fr]"
        >
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
              What We Offer
            </p>
            <h2 className="font-serif text-4xl text-warm-white md:text-5xl">
              Services
            </h2>
          </div>
          <p className="max-w-xl self-end text-sm font-light leading-relaxed text-warm-white/60">
            Flexible design support for clients who need a focused direction,
            a room-by-room plan, or a complete interior from concept to styling.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden border border-warm-white/10 bg-warm-white/10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-charcoal p-8 transition-colors hover:bg-[#22201d]"
            >
              <span className="mb-8 block font-serif text-3xl text-accent/80">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-3 font-serif text-xl text-warm-white">
                {service.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-warm-white/60">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
