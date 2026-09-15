import { TextLink } from "@/components/ui/TextLink";

import type { CaseStudy } from "@/types/case-study";

const featuredCopy: Record<
  string,
  {
    contribution: string;
    summary: string;
  }
> = {
  "clinical-workflow-signal-audit": {
    contribution:
      "Scoped, designed, and built the workflow audit and analysis.",
    summary:
      "Modeled signal-to-action latency across 500 synthetic ICU workflow events. Found a 36-minute median response time and 63.8% SLA compliance, with a full audit trail from signal to action.",
  },
  "kenya-health-dashboard": {
    contribution:
      "Designed and built the county-level planning and analytics tool.",
    summary:
      "Built a county-level planning tool on 10,483 health facility records from Kenya's public facility data, surfacing service and ownership gaps by region.",
  },
  "maintenance-triage": {
    contribution:
      "Designed and built the maintenance classification and routing pipeline as a FlyRank internship assignment.",
    summary:
      "Classifies biomedical equipment maintenance reports into structured routing decisions, assigning equipment type, issue, urgency, and responsible team.",
  },
  "remote-healthai-role-matcher": {
    contribution:
      "Designed and built the multi-source scraping, scoring, and ranking pipeline.",
    summary:
      "Aggregates live roles from 6 job sources, scores and ranks them, and surfaces a fixed top-30 priority list.",
  },
};

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

      <h3 className="mt-4 min-h-[4rem] h2">
  {caseStudy.title}
</h3>

      {featuredCopy[caseStudy.slug] && (
        <p className="label mt-4 text-black/60">
          My role: {featuredCopy[caseStudy.slug].contribution}
        </p>
      )}

      <p className="body mt-4 text-black/70">
        {featuredCopy[caseStudy.slug]?.summary ?? caseStudy.summary}
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