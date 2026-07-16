import type { ReactNode } from "react";

import Link from "next/link";
import clsx from "clsx";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
};

export function TextLink({
  href,
  children,
  className,
  showArrow = true,
}: TextLinkProps) {
  return (
    <Link
      href={href}
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