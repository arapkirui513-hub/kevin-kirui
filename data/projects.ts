import type { CaseStudy } from "@/types/case-study";

export const projects: readonly CaseStudy[] = [
  {
    slug: "clinical-workflow-signal-audit",

    title: "Clinical Workflow Signal Audit",

    summary:
      "An AI-assisted workflow intelligence system that identifies delays, missed escalations, and workflow bottlenecks in critical care environments.",

    category: "Healthcare AI",

    year: "2026",

    featured: true,

    status: "Completed",

    client: "Independent Project",

    readingTime: "8 min",

    tags: [
      "Healthcare AI",
      "Workflow Intelligence",
      "Clinical Operations",
    ],
  },

  {
    slug: "kenya-health-dashboard",

    title: "Kenya Health Facilities Dashboard",

    summary:
      "A population-adjusted planning dashboard that helps compare county healthcare indicators and identify service gaps.",

    category: "Public Health",

    year: "2026",

    featured: true,

    status: "Completed",

    client: "Independent Project",

    readingTime: "7 min",

    tags: [
      "Public Health",
      "Data Visualization",
      "Health Planning",
    ],
  },

  {
    slug: "remote-healthai-role-matcher",

    title: "Remote HealthAI Role Matcher",

    summary:
      "A workflow that discovers, scores, and prioritizes remote healthcare AI opportunities using structured evaluation criteria.",

    category: "AI Systems",

    year: "2026",

    featured: true,

    status: "Completed",

    client: "Independent Project",

    readingTime: "6 min",

    tags: [
      "AI Systems",
      "Workflow Automation",
      "Career Intelligence",
    ],
  },
];

export function getFeaturedProjects(): CaseStudy[] {
  return projects.filter((project) => project.featured);
}

export function getAllProjects(): readonly CaseStudy[] {
  return projects;
}

export function getProjectBySlug(slug: string): CaseStudy | undefined {
  return projects.find((project) => project.slug === slug);
}