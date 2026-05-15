"use client";

import Link from "next/link";
import { useReveal } from "@/lib/utils";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useReveal();
  const imageRadiusClass =
    project.slug === "staging" || project.parentSlug === "staging"
      ? "rounded-[5px]"
      : "";
  const hasFurnishingRoundedImage =
    project.slug === "furnishing-styling" ||
    project.parentSlug === "furnishing-styling";
  const roundedImageClass = imageRadiusClass || (hasFurnishingRoundedImage ? "rounded-[6px]" : "");

  return (
    <div ref={ref} className="fade-in group">
      <Link
        href={`/projects/${project.slug}`}
        className="block transition-transform duration-500 hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-accent"
      >
        <div
          className={`img-zoom relative aspect-[4/3] overflow-hidden bg-light-gray transition-shadow duration-500 group-hover:shadow-[0_22px_60px_rgba(26,26,26,0.16)] ${
            roundedImageClass
          }`}
        >
          <span className="absolute inset-x-0 top-0 z-10 h-px origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100 group-focus-within:scale-x-100" />
          {project.coverImage ? (
            <img
              src={project.coverImage}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(181,131,105,0.22),_transparent_55%),linear-gradient(135deg,_#f6f0e7,_#ebe1d3)] p-8 text-center transition-transform duration-700 group-hover:scale-[1.02]">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-accent">
                  {project.placeholderLabel ?? "Coming Soon"}
                </p>
                <p className="mt-4 font-serif text-2xl text-charcoal/80">
                  {project.title}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-5 transition-transform duration-500 group-hover:translate-x-1">
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
          <p className="mt-2 text-sm font-light leading-relaxed text-charcoal/60 transition-colors duration-500 group-hover:text-charcoal/72">
            {project.summary}
          </p>
        </div>
      </Link>
    </div>
  );
}
