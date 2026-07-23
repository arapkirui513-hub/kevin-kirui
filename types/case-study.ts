export type CaseStudyStatus = "Completed" | "In Progress";

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;

  category: string;
  year: string;

  featured: boolean;

  status: CaseStudyStatus;

  client: string;

  readingTime: string;

  tags: readonly string[];
};

export type CaseStudyFrontmatter = {
  title: string;
  slug: string;
  summary: string;

  published: boolean;
  featured: boolean;

  date: string;
  year: string;

  client: string;

  role: readonly string[];

  category: string;

  tags: readonly string[];

  repository: string;

  status: CaseStudyStatus;

  readingTime: string;

  featuredImage: string;

  ogImage: string;
};

export type PublishedCaseStudy = {
  frontmatter: CaseStudyFrontmatter;
  source: string;
};