import type { MetadataRoute } from "next";

const base = "https://29sfilm-cor.hyphen.it.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${base}/`,
      lastModified: new Date("2026-09-24T00:00:00+09:00"),
    },
  ];
}
