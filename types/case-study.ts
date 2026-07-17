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