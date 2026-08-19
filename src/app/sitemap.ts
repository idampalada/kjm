import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://kjmlogistic.com";
  const routes = ["", "/about-us", "/services", "/contact", "/gallery"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
