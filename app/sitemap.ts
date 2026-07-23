import type { MetadataRoute } from "next";

import { site } from "@/data/site";
import { getPublishedCaseStudies } from "@/lib/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudies = getPublishedCaseStudies();

  return [
    {
      url: site.url,
      lastModified: new Date(),
    },
    {
      url: `${site.url}/work`,
      lastModified: new Date(),
    },
    ...caseStudies.map((caseStudy) => ({
      url: `${site.url}/work/${caseStudy.frontmatter.slug}`,
      lastModified: new Date(caseStudy.frontmatter.date),
    })),
  ];
}