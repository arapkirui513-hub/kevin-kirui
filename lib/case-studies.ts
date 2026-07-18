import {
  getAllProjects,
  getFeaturedProjects,
  getProjectBySlug,
} from "@/data/projects";

import {
  getAllMdxCaseStudies,
  getMdxCaseStudyBySlug,
} from "@/lib/mdx";

import type {
  CaseStudy,
  PublishedCaseStudy,
} from "@/types/case-study";

export function getAllCaseStudies(): readonly CaseStudy[] {
  return getAllProjects();
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return getFeaturedProjects();
}

/**
 * Temporary compatibility layer.
 * Existing pages still use this function.
 */
export function getCaseStudyBySlug(
  slug: string
): CaseStudy | undefined {
  return getProjectBySlug(slug);
}

export function getCaseStudyMetadata(
  slug: string
): CaseStudy | undefined {
  return getProjectBySlug(slug);
}

export function getPublishedCaseStudyBySlug(
  slug: string
): PublishedCaseStudy | null {
  const metadata = getProjectBySlug(slug);
  const article = getMdxCaseStudyBySlug(slug);

  if (!metadata || !article) {
    return null;
  }

  return {
    metadata,
    frontmatter: article.frontmatter,
    source: article.source,
  };
}

export function getPublishedCaseStudies(): PublishedCaseStudy[] {
  return getAllMdxCaseStudies()
    .map((article) => {
      const metadata = getProjectBySlug(
        article.frontmatter.slug
      );

      if (!metadata) {
        return null;
      }

      return {
        metadata,
        frontmatter: article.frontmatter,
        source: article.source,
      };
    })
    .filter(
      (
        study
      ): study is PublishedCaseStudy =>
        study !== null
    );
}