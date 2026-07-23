import { Container } from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function AboutPage() {
  return (
    <Section spacing="spacious">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="Healthcare Workflow & AI Systems Designer"
          description="I translate breakdowns in clinical workflows into workflow models engineering teams can build from."
          divider="heartbeat"
        />

        <div className="mt-12 max-w-3xl space-y-6 body">
          <p>
            I translate breakdowns in clinical workflows into specs
            engineering teams can build from. That means mapping how
            information actually moves through a clinical or operational
            process, finding where it stalls or gets lost, and turning
            that into a model a backend team can implement directly.
          </p>

          <p>
            The Clinical Workflow Signal Audit is the clearest example:
            an ICU signal-to-action latency model with an escalation
            state machine and risk-tiered routing logic, built to show
            where alerts break down before they reach a clinician. The
            Kenya Health Facilities Dashboard applies the same approach
            at a system level, a public API covering 10,483 facilities
            across all 47 counties, structured to surface gaps like the
            facility density difference between counties such as
            Mandera and Nyeri.
          </p>

          <p>
            My background is in biomedical engineering, with operational
            experience inside Kenya&apos;s Level 5 and Level 6 public
            referral hospitals, the tier that handles the highest patient
            volume and the most complex cases. That combination is why I
            read clinical workflows the way an engineer reads a system:
            as a set of states, transitions, and failure points, not as
            a general process to describe in the abstract.
          </p>

          <p>
            I work with founders and Heads of Product at early-stage
            health-tech companies who need someone who can sit between
            clinical reality and software architecture, and hand back
            something the engineering team can actually build.
          </p>
        </div>
      </Container>
    </Section>
  );
}