import { TextLink } from "@/components/ui/TextLink";

import type { CaseStudy } from "@/types/case-study";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({
  caseStudy,
}: CaseStudyCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[var(--radius-lg)] border border-black/10 bg-white p-8 transition-shadow duration-200 hover:shadow-md">
      <p className="label">
        {caseStudy.category} · {caseStudy.year}
      </p>

      <h3 className="mt-4 h2">
        {caseStudy.title}
      </h3>

      <p className="body mt-4 text-black/70">
        {caseStudy.summary}
      </p>

      <TextLink
        href={`/work/${caseStudy.slug}`}
        className="mt-auto pt-8"
      >
        View Case Study
      </TextLink>
    </article>
  );
}