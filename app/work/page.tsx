import type { Metadata } from "next";

import { CaseStudyCard } from "@/components/case-study/CaseStudyCard";
import { Container } from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { getAllCaseStudies } from "@/lib/case-studies";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: {
    absolute: "Work | Kevin Kirui – Healthcare AI Systems",
  },
  description:
    "Selected healthcare AI, clinical workflow, and data systems projects by Kevin Kirui.",
  alternates: {
    canonical: `${site.url}/work`,
  },
  openGraph: {
    title: "Work | Kevin Kirui – Healthcare AI Systems",
    description:
      "Selected healthcare AI, clinical workflow, and data systems projects by Kevin Kirui.",
    url: `${site.url}/work`,
    type: "website",
  },
};

export default function WorkPage() {
  const caseStudies = getAllCaseStudies();

  return (
    <Section spacing="spacious">
      <Container>
        <SectionHeading
          as="h1"
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
