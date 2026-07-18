import clsx from "clsx";
import type { ReactNode } from "react";

type MetricGridProps = {
  children: ReactNode;
  columns?: 2 | 3 | 4;
};

export function MetricGrid({
  children,
  columns = 3,
}: MetricGridProps) {
  return (
    <section
      className={clsx(
        "my-12 grid gap-6",
        {
          "sm:grid-cols-2 lg:grid-cols-2":
            columns === 2,

          "sm:grid-cols-2 lg:grid-cols-3":
            columns === 3,

          "sm:grid-cols-2 lg:grid-cols-4":
            columns === 4,
        }
      )}
    >
      {children}
    </section>
  );
}