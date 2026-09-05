import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/bodgaun-hospital",
    "/programs",
    "/impact",
    "/news",
    "/news/august-2026-hospital-activity",
    "/news/may-2026-surgery-operating",
    "/news/april-2026-first-surgeries",
    "/events",
    "/where-money-goes",
    "/team",
    "/donate",
    "/trust",
    "/get-involved",
    "/ways-to-give",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified,
    changeFrequency:
      route === "" || route === "/donate" || route === "/news" || route === "/bodgaun-hospital"
        ? "weekly"
        : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/donate" || route === "/bodgaun-hospital"
          ? 0.9
          : route === "/impact" || route === "/news"
            ? 0.85
            : 0.7,
  }));
}
