import type { Metadata } from "next";

import { site } from "@/data/site";

import { Container } from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Kevin Kirui, a Healthcare AI Product Systems Specialist working across clinical workflows, healthcare operations, and AI systems.",
  alternates: {
    canonical: `${site.url}/about`,
  },
  openGraph: {
    url: `${site.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <Section spacing="spacious">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Healthcare AI Product Systems Specialist"
          description="I translate breakdowns in clinical workflows into specs engineering teams can build from."
          divider="heartbeat"
        />

        <div className="mt-12 max-w-3xl space-y-6 body">
          <p>
            That means mapping how information actually moves through a clinical or operational process, finding where it stalls or gets lost, and turning that into a model a backend team can implement directly.
          </p>

          <p>
            The Clinical Workflow Signal Audit is the clearest example: an ICU signal-to-action latency model with an escalation state machine and risk-tiered routing logic, built to show where alerts break down before they reach a clinician. The Kenya Health Facilities Dashboard applies the same approach at a system level, a public API covering 10,483 facilities across all 47 counties, structured to surface gaps like the facility density difference between counties such as Mandera and Nyeri.
          </p>

          <p>
            My background is in biomedical engineering, with hands-on experience maintaining and troubleshooting medical equipment inside Kenya&apos;s public referral hospital system. That work is where I learned to read clinical workflows the way an engineer reads a system as a set of states, transitions, and failure points, not as a general process to describe in the abstract.
          </p>

          <p>
            I want to work with founders and Heads of Product at early-stage health-tech companies who need someone who can sit between clinical reality and software architecture, and hand back something the engineering team can actually build.
          </p>

          <div className="pt-4">
            <Button href="/contact">
              Let's Talk
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

