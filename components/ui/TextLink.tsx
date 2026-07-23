import type { ComponentProps, ReactNode } from "react";

import Link from "next/link";
import clsx from "clsx";

type TextLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  showArrow?: boolean;
};

export function TextLink({
  children,
  className,
  showArrow = true,
  ...props
}: TextLinkProps) {
  return (
    <Link
      {...props}
      className={clsx(
        "inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] transition-colors duration-200 hover:text-[var(--color-accent)]",
        className
      )}
    >
      <span>{children}</span>

      {showArrow && (
        <span aria-hidden="true">→</span>
      )}
    </Link>
  );
}