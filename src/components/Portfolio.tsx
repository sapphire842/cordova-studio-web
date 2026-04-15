"use client";

import { useReveal } from "@/lib/utils";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  const ref = useReveal();

  return (
    <section id="portfolio" className="bg-[#eee7df] py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div
          ref={ref}
          className="fade-in mb-16 grid gap-8 border-b border-charcoal/12 pb-10 lg:grid-cols-[0.8fr_1fr]"
        >
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
              Selected Work
            </p>
            <h2 className="font-serif text-4xl text-charcoal md:text-5xl">
              Portfolio
            </h2>
          </div>
          <p className="max-w-xl self-end text-sm font-light leading-relaxed text-charcoal/65">
            A cross-section of residential, hospitality, workplace, and
            community interiors, each shaped around story, materiality, and
            everyday use.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
