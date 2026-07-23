import {
  getAllMdxCaseStudies,
  getMdxCaseStudyBySlug,
} from "@/lib/mdx";

import type {
  CaseStudy,
  CaseStudyFrontmatter,
  PublishedCaseStudy,
} from "@/types/case-study";

function toCaseStudy(
  frontmatter: CaseStudyFrontmatter
): CaseStudy {
  return {
    slug: frontmatter.slug,
    title: frontmatter.title,
    summary: frontmatter.summary,
    category: frontmatter.category,
    year: frontmatter.year,
    featured: frontmatter.featured,
    status: frontmatter.status,
    client: frontmatter.client,
    readingTime: frontmatter.readingTime,
    tags: frontmatter.tags,
  };
}

export function getAllCaseStudies(): readonly CaseStudy[] {
  return getAllMdxCaseStudies()
    .filter((article) => article.frontmatter.published)
    .map((article) => toCaseStudy(article.frontmatter));
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return getAllMdxCaseStudies()
    .filter(
      (article) =>
        article.frontmatter.published &&
        article.frontmatter.featured
    )
    .map((article) => toCaseStudy(article.frontmatter));
}

/**
 * Temporary compatibility layer.
 * Existing pages still use this function.
 */
export function getCaseStudyBySlug(
  slug: string
): CaseStudy | undefined {
  const article = getMdxCaseStudyBySlug(slug);

  if (!article || !article.frontmatter.published) {
    return undefined;
  }

  return toCaseStudy(article.frontmatter);
}

export function getCaseStudyMetadata(
  slug: string
): CaseStudy | undefined {
  return getCaseStudyBySlug(slug);
}

export function getPublishedCaseStudyBySlug(
  slug: string
): PublishedCaseStudy | null {
  const article = getMdxCaseStudyBySlug(slug);

  if (!article || !article.frontmatter.published) {
    return null;
  }

  return {
    frontmatter: article.frontmatter,
    source: article.source,
  };
}

export function getPublishedCaseStudies(): PublishedCaseStudy[] {
  return getAllMdxCaseStudies()
    .filter((article) => article.frontmatter.published)
    .map((article) => ({
      frontmatter: article.frontmatter,
      source: article.source,
    }));
}