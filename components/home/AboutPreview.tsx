import { TextLink } from "@/components/ui/TextLink";

import Section from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

import { home } from "@/data/home";

export function AboutPreview() {
  return (
    <Section>
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow={home.aboutPreview.eyebrow}
            title={home.aboutPreview.title}
            description={home.aboutPreview.description}
          />

          <div>
            <ul className="space-y-8">
  {home.aboutPreview.principles.map((principle) => (
    <li
      key={principle}
      className="border-b border-black/10 pb-8"
    >
      <p className="text-lg font-semibold text-[var(--color-primary)]">
        {principle}
      </p>
    </li>
  ))}
</ul>

            <TextLink
              href={home.aboutPreview.cta.href}
              className="mt-10"
            >
              {home.aboutPreview.cta.label}
            </TextLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}