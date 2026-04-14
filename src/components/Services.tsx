"use client";

import { useReveal } from "@/lib/utils";
import { services } from "@/data/services";

export default function Services() {
  const ref = useReveal();

  return (
    <section id="services" className="bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div ref={ref} className="fade-in mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl text-warm-white md:text-5xl">
            Services
          </h2>
        </div>

        <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group border border-warm-white/10 p-8 transition-colors hover:border-accent/30"
            >
              <span className="mb-4 block text-2xl">{service.icon}</span>
              <h3 className="mb-3 font-serif text-lg text-warm-white">
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
