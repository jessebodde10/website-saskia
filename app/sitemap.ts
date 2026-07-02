import type { MetadataRoute } from "next";

const base = "https://riseandconnect.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/trainingen", "/ademcoaching", "/over-mij", "/contact"];
  const now = new Date();
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
