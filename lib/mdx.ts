import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import type { CaseStudyFrontmatter } from "@/types/case-study";

const CONTENT_DIRECTORY = path.join(
  process.cwd(),
  "content",
  "case-studies"
);

export type MdxCaseStudy = {
  frontmatter: CaseStudyFrontmatter;
  source: string;
};

function getFilePath(slug: string): string {
  return path.join(CONTENT_DIRECTORY, `${slug}.mdx`);
}

export function getCaseStudySlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIRECTORY)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getMdxCaseStudyBySlug(
  slug: string
): MdxCaseStudy | null {
  const filePath = getFilePath(slug);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const file = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(file);

  return {
    frontmatter: data as CaseStudyFrontmatter,
    source: content,
  };
}

export function getAllMdxCaseStudies(): MdxCaseStudy[] {
  return getCaseStudySlugs()
    .map(getMdxCaseStudyBySlug)
    .filter(
      (study): study is MdxCaseStudy =>
        study !== null
    );
}