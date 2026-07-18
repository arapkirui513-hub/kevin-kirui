import { compileMDX } from "next-mdx-remote/rsc";

import { Callout } from "./Callout";
import { MetricCard } from "./MetricCard";
import { MetricGrid } from "./MetricGrid";
import { Figure } from "./Figure";

type MDXContentProps = {
  source: string;
};

const components = {
  Callout,
  MetricCard,
  MetricGrid,
};

export async function MDXContent({
  source,
}: MDXContentProps) {
  const { content } = await compileMDX({
    source,
    components,
  });

  return (
    <article className="case-study-content">
      {content}
    </article>
  );
}