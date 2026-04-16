"use client";

import Link from "next/link";
import { stagingProjects } from "@/data/staging";
import { useReveal } from "@/lib/utils";

const basePath = "/cordova-studio-web";

export default function StagingServices() {
  const ref = useReveal();
  const project = stagingProjects[0];

  return (
    <section id="staging" className="bg-warm-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div ref={ref} className="fade-in">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Featured Service
          </p>
          <h2 className="font-serif text-4xl text-charcoal md:text-5xl">
            Kitchen Remodel
          </h2>

          <Link
            href={`/staging/${project.slug}`}
            className="group mt-12 block max-w-3xl"
          >
            <div className="img-zoom aspect-[4/3] overflow-hidden bg-light-gray">
              <img
                src={`${basePath}${project.coverImage}`}
                alt={`${project.title} ${project.subtitle}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-5">
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-accent">
                {project.subtitle}
              </p>
              <h3 className="mt-2 font-serif text-2xl text-charcoal transition-colors group-hover:text-accent md:text-3xl">
                {project.title}
              </h3>
              <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.25em] text-charcoal transition-colors group-hover:text-accent">
                View Gallery
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
