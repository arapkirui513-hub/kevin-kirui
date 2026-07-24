import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { MDXContent } from "@/components/mdx/MDXContent";
import { ReadingProgress } from "@/components/reading/ReadingProgress";
import { TableOfContents } from "@/components/reading/TableOfContents";
import { CaseStudyCard } from "@/components/case-study/CaseStudyCard";
import { Container } from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";

import {
  getAllCaseStudies,
  getPublishedCaseStudies,
  getPublishedCaseStudyBySlug,
} from "@/lib/case-studies";

import { articleSchema } from "@/lib/structured-data";
import { extractHeadings } from "@/lib/toc";

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
  const headings = extractHeadings(caseStudy.source);

  const relatedCaseStudies = getAllCaseStudies()
    .filter((study) => study.slug !== slug)
    .slice(0, 2);

  return (
    <>
      <ReadingProgress />

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

          <div className="mt-12 overflow-hidden rounded-2xl border border-black/10 shadow-sm">
            <Image
              src={caseStudy.frontmatter.featuredImage}
              alt={caseStudy.frontmatter.title}
              width={1200}
              height={630}
              priority
              className="h-auto w-full"
            />
          </div>

          <div className="mt-16 border-t border-black/10 pt-12">
            <h2 className="label mb-6">
              Project Overview
            </h2>

            <dl className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white px-6 py-5 transition-shadow duration-200 hover:shadow-sm">
                <dd className="font-serif text-3xl leading-none text-[var(--color-primary)]">
                  {caseStudy.frontmatter.year}
                </dd>

                <dt className="label mt-3">
                  Year
                </dt>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white px-6 py-5 transition-shadow duration-200 hover:shadow-sm">
                <dd className="font-serif text-3xl leading-none text-[var(--color-primary)]">
                  {caseStudy.frontmatter.status}
                </dd>

                <dt className="label mt-3">
                  Status
                </dt>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white px-6 py-5 transition-shadow duration-200 hover:shadow-sm">
                <dd className="font-serif text-3xl leading-none text-[var(--color-primary)]">
                  {caseStudy.frontmatter.readingTime}
                </dd>

                <dt className="label mt-3">
                  Reading Time
                </dt>
              </div>
            </dl>

            <div className="mt-12">
              <h3 className="label mb-4">
                Technologies & Topics
              </h3>

              <div className="flex flex-wrap gap-3">
                {caseStudy.frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--color-accent)] px-3.5 py-1.5 text-sm font-medium tracking-wide text-[var(--color-accent)] transition-colors duration-200 hover:bg-[var(--color-accent)] hover:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="my-16 border-t border-black/10" />

            <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_260px]">
              <article>
                <MDXContent source={caseStudy.source} />
              </article>

              <TableOfContents headings={headings} />
            </div>

            <div className="mt-24 border-t border-black/10 pt-16">
              <SectionHeading
                eyebrow="Continue Exploring"
                title="More Case Studies"
                description="Explore additional healthcare AI and workflow intelligence projects."
                divider="heartbeat"
                className="mb-12"
              />

              <div className="grid gap-8 md:grid-cols-2">
                {relatedCaseStudies.map((study) => (
                  <CaseStudyCard
                    key={study.slug}
                    caseStudy={study}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}