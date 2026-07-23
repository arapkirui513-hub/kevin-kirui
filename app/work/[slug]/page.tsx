import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MDXContent } from "@/components/mdx/MDXContent";
import { Container } from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { articleSchema } from "@/lib/structured-data";
import { TextLink } from "@/components/ui/TextLink";

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
    slug: caseStudy.frontmatter.slug,
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
    title: caseStudy.frontmatter.title,
    description: caseStudy.frontmatter.summary,

    openGraph: {
      title: caseStudy.frontmatter.title,
      description: caseStudy.frontmatter.summary,
      url: `/work/${caseStudy.frontmatter.slug}`,
      type: "article",

      images: [
        {
          url: caseStudy.frontmatter.ogImage,
          width: 1200,
          height: 630,
          alt: caseStudy.frontmatter.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: caseStudy.frontmatter.title,
      description: caseStudy.frontmatter.summary,
      images: [caseStudy.frontmatter.ogImage],
    },
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

  const article = articleSchema(caseStudy.frontmatter);
  return (
    <Section spacing="spacious">
      <Container>
        <TextLink
          href="/work"
          showArrow={false}
          className="mb-8 inline-flex"
        >
          ← Back to Work
        </TextLink>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(article),
          }}
        />
        
        <SectionHeading
          eyebrow={caseStudy.frontmatter.category}
          title={caseStudy.frontmatter.title}
          description={caseStudy.frontmatter.summary}
          divider="heartbeat"
        />

        <div className="mt-16 border-t border-black/10 pt-12">
          <dl className="grid gap-8 sm:grid-cols-3">
            <div>
              <dt className="label">Year</dt>
              <dd className="mt-2">{caseStudy.frontmatter.year}</dd>
            </div>

            <div>
              <dt className="label">Status</dt>
              <dd className="mt-2">{caseStudy.frontmatter.status}</dd>
            </div>

            <div>
              <dt className="label">Reading Time</dt>
              <dd className="mt-2">
                {caseStudy.frontmatter.readingTime}
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