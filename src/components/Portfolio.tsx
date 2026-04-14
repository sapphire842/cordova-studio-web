"use client";

import { useReveal } from "@/lib/utils";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="portfolio" className="bg-warm-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div ref={ref} className="fade-in mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Selected Work
          </p>
          <h2 className="font-serif text-4xl text-charcoal md:text-5xl">
            Portfolio
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
