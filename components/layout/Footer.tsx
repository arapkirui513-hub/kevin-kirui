import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { HeartbeatDivider } from "@/components/ui/HeartbeatDivider";
import { site } from "@/data/site";
import { socialLinks } from "@/data/social-links";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-black/10">
      <Container className="py-12">
        <HeartbeatDivider className="mb-8" />

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-[var(--font-heading)] text-xl text-[var(--color-primary)]">
              {site.name}
            </h2>

            <p className="mt-2 max-w-md text-sm text-black/70">
              {site.title}
            </p>

            <p className="mt-4 text-sm text-black/50">
              © {year} {site.name}
            </p>
          </div>

          <nav aria-label="Social links">
            <ul className="flex gap-6 text-sm">
              <li>
                <Link
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </li>

              <li>
                <Link
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}