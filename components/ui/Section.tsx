import type { ReactNode } from "react";
import clsx from "clsx";

export type SectionSpacing = "compact" | "regular" | "spacious";

type SectionProps = {
  children: ReactNode;
  spacing?: SectionSpacing;
  className?: string;
};

const spacingVariants: Record<SectionSpacing, string> = {
  compact: "py-[var(--space-section-compact)]",
  regular: "py-[var(--space-section-default)]",
  spacious: "py-[var(--space-section-spacious)]",
};

export default function Section({
  children,
  spacing = "regular",
  className,
}: SectionProps) {
  return (
    <section
      className={clsx(
        spacingVariants[spacing],
        className
      )}
    >
      {children}
    </section>
  );
}