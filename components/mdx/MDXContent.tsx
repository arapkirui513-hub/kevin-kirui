import { compileMDX } from "next-mdx-remote/rsc";

import { Callout } from "./Callout";
import { MetricCard } from "./MetricCard";
import { MetricGrid } from "./MetricGrid";
import { Figure } from "./Figure";
import type { ReactNode } from "react";

import { slugify } from "@/lib/slugify";

type MDXContentProps = {
  source: string;
};

type HeadingProps = {
  children: ReactNode;
};

function H2({ children }: HeadingProps) {
  const text = String(children);

  return (
    <h2 id={slugify(text)}>
      {children}
    </h2>
  );
}

function H3({ children }: HeadingProps) {
  const text = String(children);

  return (
    <h3 id={slugify(text)}>
      {children}
    </h3>
  );
}

const components = {
  Callout,
  Figure,
  MetricCard,
  MetricGrid,
  h2: H2,
  h3: H3,
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