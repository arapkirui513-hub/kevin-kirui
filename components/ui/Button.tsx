import type { ReactNode } from "react";
import Link from "next/link";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2";

  const variants = {
  primary:
    "bg-[var(--color-primary)] !text-white hover:bg-[var(--color-accent)] hover:!text-white",

  secondary:
    "border border-black/10 bg-transparent text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]",
} as const;

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}