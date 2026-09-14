import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";

export function Header() {
  return (
  <>
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--color-primary)] focus:px-4 focus:py-3 focus:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-text)]"
    >
      Skip to main content
    </a>

    <header className="sticky top-0 z-50 border-b border-black/10 bg-[var(--color-background)]">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-[var(--font-heading)] text-xl text-[var(--color-primary)]"
        >
          {site.name}
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-[var(--font-body)] text-sm text-[var(--color-text)] transition-colors duration-200 hover:text-[var(--color-accent)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  </>
  );
}
