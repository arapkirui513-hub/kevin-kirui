import type { ReactNode } from "react";

type CalloutVariant =
  | "info"
  | "success"
  | "warning"
  | "decision";

type CalloutProps = {
  title: string;
  children: ReactNode;
  variant?: CalloutVariant;
};

const variantStyles: Record<CalloutVariant, string> = {
  info:
    "border-cyan-200 bg-cyan-50",

  success:
    "border-emerald-200 bg-emerald-50",

  warning:
    "border-amber-200 bg-amber-50",

  decision:
    "border-[var(--navy)] bg-slate-50",
};

export function Callout({
  title,
  children,
  variant = "info",
}: CalloutProps) {
  return (
    <aside
      className={`my-8 rounded-2xl border-l-4 p-6 ${variantStyles[variant]}`}
    >
      <h4 className="font-heading text-lg text-[var(--navy)]">
        {title}
      </h4>

      <div className="mt-3 text-black/80">
        {children}
      </div>
    </aside>
  );
}