import {
  getAllSlugs,
  getChildProjects,
  getPortfolioProjects,
  getProject,
} from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectGallery from "@/components/ProjectGallery";
import PortfolioBookViewer from "@/components/PortfolioBookViewer";
import ProjectCard from "@/components/ProjectCard";

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
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
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
  const hasCoverImage = Boolean(project.coverImage);

  // Find adjacent projects for navigation
  const portfolioProjects = getPortfolioProjects();
  const idx = portfolioProjects.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? portfolioProjects[idx - 1] : null;
  const next =
    idx >= 0 && idx < portfolioProjects.length - 1
      ? portfolioProjects[idx + 1]
      : null;
  const childProjects = getChildProjects(project.slug);

  return (
    <>
      {/* Hero banner with cover image */}
      <section className="relative flex min-h-[60vh] items-end pb-16 pt-32">
        <div className="absolute inset-0 z-0">
          {project.coverImage ? (
            <>
              <img
                src={project.coverImage}
                alt={project.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30" />
            </>
          ) : (
            <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(181,131,105,0.25),_transparent_45%),linear-gradient(135deg,_#f4ede3,_#e6dac9)]" />
          )}
        </div>
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 lg:px-12">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-accent">
            {project.category} · {project.location}
          </p>
          <div className="flex items-end gap-6">
            <span
              className={`font-serif text-7xl font-light md:text-9xl ${
                hasCoverImage ? "text-warm-white/20" : "text-charcoal/10"
              }`}
            >
              {project.number}
            </span>
            <h1
              className={`font-serif text-4xl leading-tight md:text-6xl ${
                hasCoverImage ? "text-warm-white" : "text-charcoal"
              }`}
            >
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

          {project.isCollection ? (
            <div className="mb-16">
              <h2 className="mb-10 text-xs font-medium uppercase tracking-[0.3em] text-accent">
                Projects
              </h2>
              <div className="grid gap-12 md:grid-cols-2">
                {childProjects.map((childProject) => (
                  <ProjectCard key={childProject.slug} project={childProject} />
                ))}
              </div>
            </div>
          ) : project.pdfUrl ? (
            <PortfolioBookViewer
              title={project.title}
              coverImage={project.coverImage}
              pdfUrl={project.pdfUrl}
            />
          ) : (
            <ProjectGallery
              title={project.title}
              images={project.images}
              captions={project.imageCaptions}
              imageRadius={
                project.parentSlug === "staging"
                  ? "5px"
                  : project.parentSlug === "furnishing-styling"
                    ? "6px"
                    : undefined
              }
            />
          )}

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
