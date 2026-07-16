import Link from "next/link";

import type { CaseStudy } from "@/types/case-study";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({
  caseStudy,
}: CaseStudyCardProps) {
  return (
    <article className="rounded-[var(--radius-lg)] border border-black/10 bg-white p-8 transition-shadow duration-200 hover:shadow-md">
      <p className="label">
        {caseStudy.category} · {caseStudy.year}
      </p>

      <h3 className="mt-4 h2">
        {caseStudy.title}
      </h3>

      <p className="body mt-4 text-black/70">
        {caseStudy.summary}
      </p>

      <Link
        href={`/work/${caseStudy.slug}`}
        className="mt-8 inline-flex text-sm font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)]"
      >
        View Case Study →
      </Link>
    </article>
  );
}