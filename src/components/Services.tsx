"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/lib/utils";
import { services } from "@/data/services";
import type { Service } from "@/data/services";

function ServiceIcon({ type }: { type: Service["icon"] }) {
  const iconPaths: Record<Service["icon"], ReactNode> = {
    consultation: (
      <>
        <path d="M6 9.5h12" />
        <path d="M6 14.5h7" />
        <path d="M4.5 5.5h15v12h-8L7 21v-3.5H4.5z" />
      </>
    ),
    planning: (
      <>
        <path d="M4.5 6.5h15v11h-15z" />
        <path d="M9.5 6.5v11" />
        <path d="M14.5 6.5v5h5" />
        <path d="M4.5 12h5" />
      </>
    ),
    palette: (
      <>
        <path d="M5 18.5 18.5 5" />
        <path d="M8 18.5h11" />
        <path d="M5 15.5v3h3" />
        <path d="M14.5 6.5l3 3" />
      </>
    ),
    furniture: (
      <>
        <path d="M6.5 11.5h11a2 2 0 0 1 2 2v4h-15v-4a2 2 0 0 1 2-2z" />
        <path d="M7 11.5V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3.5" />
        <path d="M6.5 17.5v2" />
        <path d="M17.5 17.5v2" />
      </>
    ),
    lighting: (
      <>
        <path d="M12 4.5v3" />
        <path d="M7.5 9.5a4.5 4.5 0 0 1 9 0v1h-9z" />
        <path d="M9 13.5h6" />
        <path d="M10 16h4" />
        <path d="M12 18.5v1" />
      </>
    ),
    home: (
      <>
        <path d="M4.5 11.5 12 5l7.5 6.5" />
        <path d="M6.5 10.5v9h11v-9" />
        <path d="M10 19.5v-5h4v5" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.25"
    >
      {iconPaths[type]}
    </svg>
  );
}

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
              className="group relative overflow-hidden border border-warm-white/10 bg-warm-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:bg-warm-white/[0.06] hover:shadow-[0_22px_60px_rgba(0,0,0,0.26)] focus-within:-translate-y-1 focus-within:border-accent/50 focus-within:bg-warm-white/[0.06] focus-within:shadow-[0_22px_60px_rgba(0,0,0,0.26)]"
            >
              <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100 group-focus-within:scale-x-100" />
              <span className="mb-5 flex h-12 w-12 items-center justify-center border border-accent/35 text-accent-light transition-all duration-500 group-hover:-translate-y-0.5 group-hover:border-accent group-hover:bg-accent group-hover:text-charcoal group-focus-within:-translate-y-0.5 group-focus-within:border-accent group-focus-within:bg-accent group-focus-within:text-charcoal">
                <ServiceIcon type={service.icon} />
              </span>
              <h3 className="mb-3 font-serif text-lg text-warm-white transition-colors duration-500 group-hover:text-accent-light group-focus-within:text-accent-light">
                {service.title}
              </h3>
              <p className="text-sm font-light leading-relaxed text-warm-white/60 transition-colors duration-500 group-hover:text-warm-white/78 group-focus-within:text-warm-white/78">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
