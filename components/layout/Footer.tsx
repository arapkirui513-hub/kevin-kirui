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

        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-[var(--font-heading)] text-xl text-[var(--color-primary)]">
              {site.name}
            </h2>

            <p className="mt-2 max-w-md text-sm text-black/70">
              {site.description}
            </p>

            <p className="mt-4 text-sm text-black/50">
              © {year} {site.name}
            </p>
          </div>

          <div className="flex flex-col items-start gap-5 md:items-end">
            {/* FlyRank verified credential */}
            <a
              href="https://internship.flyrank.ai/verify?id=FR-D11-6E49A-BC453&first_name=Kevin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verify Kevin Kirui's FlyRank AI Internship credential FR-D11-6E49A-BC453"
              style={{
                boxSizing: "border-box",
                margin: "0",
                padding: "14px 18px",
                border: "1px solid #DDE4E7",
                background: "#FFFFFF",
                textDecoration: "none",
                fontFamily:
                  "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif",
                fontStyle: "normal",
                lineHeight: "1.25",
                textTransform: "none",
                float: "none",
                WebkitFontSmoothing: "antialiased",
                display: "inline-flex",
                alignItems: "center",
                gap: "14px",
                borderRadius: "20px",
                boxShadow: "0 1px 2px rgba(5,31,33,0.05)",
                maxWidth: "100%",
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 96 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                style={{
                  display: "block",
                  flex: "none",
                  opacity: "1",
                  transform: "none",
                  maxWidth: "none",
                }}
              >
                <rect width="96" height="96" rx="22" fill="#051F21" />
                <path
                  d="M28.2354 74.2202V67.9039C29.6419 68.4369 31.3724 68.7055 33.4311 68.7055C35.3235 68.7055 36.8153 68.2396 37.8979 67.3079C38.9805 66.3762 39.9566 64.8695 40.8218 62.792L42.6887 58.3139L29.8976 29.2879C35.0038 29.2879 39.6028 32.3307 41.5294 36.9893L47.0746 50.3985L56.0126 28.6038C57.9221 23.9452 62.5168 20.894 67.6187 20.894L50.0795 63.5936C48.4556 67.5933 46.5205 70.5102 44.2743 72.3484C42.0281 74.1867 39.1169 75.1058 35.5451 75.1058C32.6212 75.1058 30.1875 74.812 28.2354 74.2244V74.2202Z"
                  fill="#54E399"
                />
              </svg>

              <span
                style={{
                  margin: "0",
                  padding: "0",
                  border: "0",
                  background: "none",
                  color: "inherit",
                  fontWeight: "400",
                  fontStyle: "normal",
                  letterSpacing: "normal",
                  textTransform: "none",
                  textDecoration: "none",
                  whiteSpace: "normal",
                  float: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  minWidth: "0",
                }}
              >
                <span
                  style={{
                    margin: "0",
                    padding: "0",
                    border: "0",
                    background: "none",
                    color: "rgba(5,31,33,0.5)",
                    fontWeight: "700",
                    fontStyle: "normal",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    whiteSpace: "normal",
                    float: "none",
                    fontFamily:
                      "ui-monospace,SFMono-Regular,Menlo,Consolas,monospace",
                    fontSize: "9px",
                  }}
                >
                  FlyRank AI Internship
                </span>

                <span
                  style={{
                    margin: "0",
                    padding: "0",
                    border: "0",
                    background: "none",
                    color: "#051F21",
                    fontWeight: "600",
                    fontStyle: "normal",
                    letterSpacing: "-0.01em",
                    textTransform: "none",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    float: "none",
                    fontSize: "15px",
                  }}
                >
                  Verified credential
                </span>

                <span
                  style={{
                    margin: "0",
                    padding: "0",
                    border: "0",
                    background: "none",
                    color: "#1A7A4A",
                    fontWeight: "400",
                    fontStyle: "normal",
                    letterSpacing: "normal",
                    textTransform: "none",
                    textDecoration: "none",
                    whiteSpace: "normal",
                    float: "none",
                    fontFamily:
                      "ui-monospace,SFMono-Regular,Menlo,Consolas,monospace",
                    fontSize: "11px",
                  }}
                >
                  FR-D11-6E49A-BC453
                </span>
              </span>

              <span
                style={{
                  margin: "0",
                  padding: "6px 12px",
                  border: "1px solid rgba(84,227,153,0.28)",
                  background: "rgba(84,227,153,0.12)",
                  color: "#1A7A4A",
                  fontWeight: "600",
                  fontStyle: "normal",
                  letterSpacing: "normal",
                  textTransform: "none",
                  textDecoration: "none",
                  whiteSpace: "normal",
                  float: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  marginLeft: "8px",
                  borderRadius: "9999px",
                  fontSize: "12px",
                  flex: "none",
                }}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  style={{
                    display: "block",
                    flex: "none",
                    opacity: "1",
                    transform: "none",
                    maxWidth: "none",
                  }}
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#1A7A4A"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M7.9 12.3l2.8 2.8 5.4-5.8"
                    stroke="#1A7A4A"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Verify
              </span>
            </a>

            {/* Social links */}
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
        </div>
      </Container>
    </footer>
  );
}