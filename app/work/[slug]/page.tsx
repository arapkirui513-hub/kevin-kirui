import { notFound } from "next/navigation";

import { Container } from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { getCaseStudyBySlug } from "@/lib/case-studies";

type CaseStudyPageProps = {
  params: {
    slug: string;
  };
};

export default function CaseStudyPage({
  params,
}: CaseStudyPageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <Section spacing="spacious">
      <Container>
        <SectionHeading
          eyebrow={caseStudy.category}
          title={caseStudy.title}
          description={caseStudy.summary}
          divider="heartbeat"
        />

        <div className="mt-16 border-t border-black/10 pt-12">
          <dl className="grid gap-8 sm:grid-cols-3">
            <div>
              <dt className="label">Year</dt>
              <dd className="mt-2">{caseStudy.year}</dd>
            </div>

            <div>
              <dt className="label">Status</dt>
              <dd className="mt-2">{caseStudy.status}</dd>
            </div>

            <div>
              <dt className="label">Reading Time</dt>
              <dd className="mt-2">{caseStudy.readingTime}</dd>
            </div>
          </dl>

          <div className="mt-16">
            <p className="body-lg text-black/60">
              Case study content will be rendered here when we introduce MDX.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}