import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MDXContent } from "@/components/mdx/MDXContent";
import { Container } from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

import {
  getPublishedCaseStudies,
  getPublishedCaseStudyBySlug,
} from "@/lib/case-studies";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getPublishedCaseStudies().map((caseStudy) => ({
    slug: caseStudy.metadata.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;

  const caseStudy = getPublishedCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: caseStudy.metadata.title,
    description: caseStudy.metadata.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: CaseStudyPageProps) {
  const { slug } = await params;

  const caseStudy = getPublishedCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <Section spacing="spacious">
      <Container>
        <SectionHeading
          eyebrow={caseStudy.metadata.category}
          title={caseStudy.metadata.title}
          description={caseStudy.metadata.summary}
          divider="heartbeat"
        />

        <div className="mt-16 border-t border-black/10 pt-12">
          <dl className="grid gap-8 sm:grid-cols-3">
            <div>
              <dt className="label">Year</dt>
              <dd className="mt-2">{caseStudy.metadata.year}</dd>
            </div>

            <div>
              <dt className="label">Status</dt>
              <dd className="mt-2">{caseStudy.metadata.status}</dd>
            </div>

            <div>
              <dt className="label">Reading Time</dt>
              <dd className="mt-2">
                {caseStudy.metadata.readingTime}
              </dd>
            </div>
          </dl>

          <div className="mt-16">
            <MDXContent source={caseStudy.source} />
          </div>
        </div>
      </Container>
    </Section>
  );
}