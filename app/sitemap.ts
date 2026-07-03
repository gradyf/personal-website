import type { MetadataRoute } from "next";
import { PROJECTS, SITE } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/cv", "/blog", "/contact"].map((path) => ({
    url: `${SITE.domain}${path}`,
  }));
  const projects = PROJECTS.map((p) => ({
    url: `${SITE.domain}/projects/${p.id}`,
  }));
  return [...pages, ...projects];
}
