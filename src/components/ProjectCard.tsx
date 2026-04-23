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
      <Link href={`/projects/${project.slug}`} className="block">
        <div
          className={`img-zoom aspect-[4/3] overflow-hidden bg-light-gray ${
            roundedImageClass
          }`}
        >
          {project.coverImage ? (
            <img
              src={project.coverImage}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(181,131,105,0.22),_transparent_55%),linear-gradient(135deg,_#f6f0e7,_#ebe1d3)] p-8 text-center">
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
