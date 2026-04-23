import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/data/projects";

const siteUrl = "https://thecordovastudio.com";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const projectEntries = getAllSlugs().map((slug) => ({
    url: `${siteUrl}/projects/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectEntries,
  ];
}
