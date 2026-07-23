import { Container } from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TextLink } from "@/components/ui/TextLink";
import { site } from "@/data/site";

export default function ContactPage() {
  return (
    <Section spacing="spacious">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Have a clinical workflow problem worth solving?"
          description="I work with founders and Heads of Product at early-stage health-tech companies who need clinical workflows translated into specs their engineering team can build from. If that's the kind of problem you're facing, I'd like to hear from you."
          divider="heartbeat"
        />

        <div className="mt-12 max-w-3xl space-y-10 body">
          <div>
            <h2 className="h3">Email</h2>
            <p className="mt-2 text-sm text-muted">
              Best for a first message: a short description of the problem
              and where the project stands.
            </p>
            <TextLink
              href={`mailto:${site.author.email}`}
              className="mt-2 inline-block"
            >
              {site.author.email}
            </TextLink>
          </div>

          <div>
            <h2 className="h3">LinkedIn</h2>
            <TextLink
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block"
            >
              Connect on LinkedIn
            </TextLink>
          </div>

          <div className="border-t border-border pt-8">
            <h2 className="h3">See the work</h2>
            <TextLink
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block"
            >
              View GitHub Projects
            </TextLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}