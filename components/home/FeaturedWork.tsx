import Section from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { CaseStudyCard } from "@/components/case-study/CaseStudyCard";

import { home } from "@/data/home";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedWork() {
  const featuredProjects = getFeaturedProjects();

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow={home.featuredWork.eyebrow}
          title={home.featuredWork.title}
          description={home.featuredWork.description}
          className="mb-12"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <CaseStudyCard
              key={project.slug}
              caseStudy={project}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}