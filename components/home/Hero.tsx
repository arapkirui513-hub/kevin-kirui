import Section from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

import { home } from "@/data/home";

export function Hero() {
  return (
    <Section
  spacing="spacious"
  className="pt-16 md:pt-20 pb-12 md:pb-16"
>
      <Container>
        <div className="max-w-4xl">
          <SectionHeading
            as="h1"
            eyebrow={home.hero.eyebrow}
            title={home.hero.title}
            description={home.hero.description}
            divider="heartbeat"
          />

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={home.hero.primaryCta.href}>
              {home.hero.primaryCta.label}
            </Button>

            <Button
              href={home.hero.secondaryCta.href}
              variant="secondary"
            >
              {home.hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}