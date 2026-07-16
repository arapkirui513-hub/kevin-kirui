import Section from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

import { home } from "@/data/home";

export function CTA() {
  return (
    <Section spacing="spacious">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow={home.cta.eyebrow}
            title={home.cta.title}
            description={home.cta.description}
          />

          <div className="mt-10">
            <Button href={home.cta.button.href}>
              {home.cta.button.label}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}