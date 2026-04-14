"use client";

import Link from "next/link";
import { useReveal } from "@/lib/utils";
import type { Project } from "@/data/projects";

const basePath = "/cordova-studio-web";

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useReveal();

  return (
    <div ref={ref} className="fade-in group">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="img-zoom aspect-[4/3] overflow-hidden bg-light-gray">
          <img
            src={`${basePath}${project.coverImage}`}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </div>

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
    </div>
  );
}
