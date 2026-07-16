import type { ElementType, ReactNode } from "react";

import { HeartbeatDivider } from "@/components/ui/HeartbeatDivider";

type SectionHeadingProps = {
  as?: "h1" | "h2" | "h3";
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  divider?: "heartbeat";
  className?: string;
};

export function SectionHeading({
  as = "h2",
  eyebrow,
  title,
  description,
  divider,
  className = "",
}: SectionHeadingProps) {
  const Heading = as as ElementType;

  return (
    <div className={className}>
      {eyebrow && <p className="label mb-4">{eyebrow}</p>}

      <Heading className="h1">
        {title}
      </Heading>

      {divider === "heartbeat" && (
        <HeartbeatDivider className="my-8" />
      )}

      {description && (
        <p className="body-lg mt-4 max-w-2xl text-black/70">
          {description}
        </p>
      )}
    </div>
  );
}