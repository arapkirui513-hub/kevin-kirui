"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import clsx from "clsx";

type Heading = {
  id: string;
  text: string;
};

type TableOfContentsProps = {
  headings: Heading[];
};

export function TableOfContents({
  headings,
}: TableOfContentsProps) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const elements = headings
      .map((heading) =>
        document.getElementById(heading.id)
      )
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(
          (entry) => entry.isIntersecting
        );

        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -65% 0px",
      }
    );

    elements.forEach((element) =>
      observer.observe(element)
    );

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  return (
    <aside className="sticky top-24">
      <h2 className="label mb-4">
        On this page
      </h2>

      <nav>
        <ul className="space-y-3">
          {headings.map((heading) => (
            <li key={heading.id}>
              <Link
                href={`#${heading.id}`}
                className={clsx(
                  "block border-l-2 pl-3 text-sm transition-all duration-200",
                  activeId === heading.id
                    ? "border-[var(--color-accent)] text-[var(--color-accent)] font-medium"
                    : "border-transparent text-black/60 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                )}
              >
                {heading.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}