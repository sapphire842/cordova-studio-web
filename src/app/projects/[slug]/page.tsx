import { projects, getProject, getAllSlugs } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Cordova Studio`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  // Find adjacent projects for navigation
  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <>
      {/* Hero banner with cover image */}
      <section className="relative flex min-h-[60vh] items-end pb-16 pt-32">
        <div className="absolute inset-0 z-0">
          <img
            src={project.coverImage}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-12">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-accent">
            {project.category} · {project.location}
          </p>
          <div className="flex items-end gap-6">
            <span className="font-serif text-7xl font-light text-warm-white/20 md:text-9xl">
              {project.number}
            </span>
            <h1 className="font-serif text-4xl leading-tight text-warm-white md:text-6xl">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-warm-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          {/* Overview */}
          <p className="mb-16 font-serif text-xl leading-relaxed text-charcoal/80 md:text-2xl">
            {project.description}
          </p>

          {/* Concept */}
          <div className="mb-16">
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-accent">
              Concept
            </h2>
            <p className="text-sm font-light leading-relaxed text-charcoal/70">
              {project.concept}
            </p>
          </div>

          {/* Image gallery */}
          <div className="mb-16 grid gap-4 md:grid-cols-2">
            {project.images.map((img, i) => (
              <div
                key={i}
                className="aspect-[4/3] overflow-hidden bg-light-gray"
              >
                <img
                  src={img}
                  alt={`${project.title} — Image ${i + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Approach */}
          <div className="mb-16">
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-accent">
              Design Approach
            </h2>
            <p className="text-sm font-light leading-relaxed text-charcoal/70">
              {project.approach}
            </p>
          </div>
        </div>
      </section>

      {/* Project navigation */}
      <section className="border-t border-charcoal/10 bg-warm-white py-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-12">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group text-left"
            >
              <p className="text-[10px] uppercase tracking-widest text-muted">
                ← Previous
              </p>
              <p className="mt-1 font-serif text-lg text-charcoal transition-colors group-hover:text-accent">
                {prev.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group text-right"
            >
              <p className="text-[10px] uppercase tracking-widest text-muted">
                Next →
              </p>
              <p className="mt-1 font-serif text-lg text-charcoal transition-colors group-hover:text-accent">
                {next.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </section>
    </>
  );
}
