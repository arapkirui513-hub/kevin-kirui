import {
  getAllProjects,
  getFeaturedProjects,
  getProjectBySlug,
} from "@/data/projects";

export function getAllCaseStudies() {
  return getAllProjects();
}

export function getFeaturedCaseStudies() {
  return getFeaturedProjects();
}

export function getCaseStudyBySlug(slug: string) {
  return getProjectBySlug(slug);
}