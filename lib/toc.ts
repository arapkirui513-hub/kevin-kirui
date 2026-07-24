import { slugify } from "@/lib/slugify";

export type TocHeading = {
  id: string;
  text: string;
};

export function extractHeadings(
  source: string
): TocHeading[] {
  const headings: TocHeading[] = [];

  const regex = /^##\s+(.+)$/gm;

  let match: RegExpExecArray | null;

  while ((match = regex.exec(source)) !== null) {
    const text = match[1].trim();

    const id = slugify(text);

    headings.push({
      id,
      text,
    });
  }

  return headings;
}