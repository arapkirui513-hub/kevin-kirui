import { site } from "@/data/site";
import type { CaseStudyFrontmatter } from "@/types/case-study";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",

    name: site.author.name,

    url: site.url,

    jobTitle: site.author.role,

    description: site.description,

    image: `${site.url}${site.seo.defaultImage}`,

    email: site.author.email,

    sameAs: [
      site.social.github,
      site.social.linkedin,
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",

    name: site.name,

    url: site.url,

    description: site.description,

    author: {
      "@type": "Person",
      name: site.author.name,
    },

    inLanguage: "en",
  };
}

export function articleSchema(
  frontmatter: CaseStudyFrontmatter
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: frontmatter.title,

    description: frontmatter.summary,

    image: `${site.url}${frontmatter.ogImage}`,

    datePublished: frontmatter.date,

    author: {
      "@type": "Person",
      name: site.author.name,
    },

    publisher: {
      "@type": "Person",
      name: site.author.name,
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/work/${frontmatter.slug}`,
    },

    keywords: frontmatter.tags,
  };
}

export function breadcrumbSchema(
  title: string,
  slug: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: `${site.url}/work`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: `${site.url}/work/${slug}`,
      },
    ],
  };
}