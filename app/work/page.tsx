import { CaseStudyCard } from "@/components/case-study/CaseStudyCard";
import { Container } from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { getAllCaseStudies } from "@/lib/case-studies";
import { site } from "@/data/site";

export default function WorkPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <Section spacing="spacious">
      <Container>
        <SectionHeading
          eyebrow={site.work.eyebrow}
          title={site.work.title}
          description={site.work.description}
          divider="heartbeat"
          className="mb-16"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.slug}
              caseStudy={caseStudy}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}