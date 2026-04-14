"use client";

import Link from "next/link";
import { useReveal } from "@/lib/utils";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useReveal<HTMLElement>();

  return (
    <article ref={ref} className="fade-in group">
      <Link href={`/projects/${project.slug}`} className="block">
        {/* Image placeholder */}
        <div className="img-zoom aspect-[4/3] overflow-hidden bg-light-gray">
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-charcoal/5 to-charcoal/15 transition-transform duration-700 group-hover:scale-105">
            <span className="font-serif text-6xl font-light text-charcoal/20 md:text-8xl">
              {project.number}
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="mt-5">
          <div className="flex items-baseline justify-between">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
              {project.category}
            </p>
            <p className="text-[10px] tracking-widest text-muted">
              {project.location}
            </p>
          </div>
          <h3 className="mt-2 font-serif text-xl text-charcoal transition-colors group-hover:text-accent md:text-2xl">
            {project.title}
          </h3>
          <p className="mt-2 text-sm font-light leading-relaxed text-charcoal/60">
            {project.summary}
          </p>
        </div>
      </Link>
    </article>
  );
}
