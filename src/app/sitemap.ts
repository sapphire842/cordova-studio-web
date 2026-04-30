import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const siteUrl = "https://thecordovastudio.com";
const siteUpdatedAt = "2026-04-30";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: project.updatedAt,
    changeFrequency: "monthly" as const,
    priority: project.parentSlug ? 0.7 : 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: siteUpdatedAt,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...projectEntries,
  ];
}
