# Glossary

> Standard terminology used throughout the Portfolio Engineering Handbook.

---

# A

## Architecture

The structural organization of the portfolio application, including repository layout, subsystem relationships, information flow, and system boundaries.

See: **02-Architecture.md**

---

## Architecture Decision Record (ADR)

A governed record documenting a significant architectural decision, its context, alternatives, decision, rationale, trade-offs, and outcome.

Architecture Decision Records are maintained within the `docs/adr/` directory.

See: **03-Decision-Log.md**

---

# C

## Case Study

A published technical article authored in MDX that documents a healthcare AI project or engineering system.

Case studies are stored separately from application code and rendered through the shared MDX publishing pipeline.

See: **04-Case-Study-System.md**

---

## Content Pipeline

The repository workflow responsible for loading, parsing, rendering, and publishing MDX case studies.

See: **04-Case-Study-System.md**

---

# D

## Decision Log

The governed handbook record that indexes the Architecture Decision Record (ADR) repository and documents the lifecycle, status, and relationships of architectural decisions.

See: **03-Decision-Log.md**

---

## Developer Guide

The operational handbook describing repository maintenance, development workflow, quality assurance, build procedures, and deployment practices.

See: **09-Developer-Guide.md**

---

# E

## Engineering Activity

A completed engineering task supported by observable Git repository evidence and recorded within the Engineering Journal.

See: **10-Engineering-Journal.md**

---

## Engineering Journal

The governed handbook record documenting the chronological history of completed engineering activities.

See: **10-Engineering-Journal.md**

---

## Engineering Principle

A recurring engineering practice admitted into the handbook only after satisfying the Principle Admission Policy through repeated observable repository evidence.

See: **01-Engineering-Principles.md**

---

# F

## Frontmatter

Structured metadata stored at the beginning of an MDX case study describing publication attributes such as title, summary, slug, tags, and publication status.

See: **04-Case-Study-System.md**

---

## Future Roadmap

The governed handbook record documenting identified engineering work that has not yet become part of the repository history.

The Future Roadmap records planned work independently from completed engineering activities.

See: **08-Future-Roadmap.md**

---

# G

## Governed Handbook Record

A handbook document maintained according to the documentation standards defined by the Portfolio Engineering Handbook.

Governed records include architecture documentation, system documentation, governance records, operational guidance, engineering history, and planning documents.

See: **00-Handbook-Standards.md**

---

# H

## Handbook

The Portfolio Engineering Handbook documenting engineering knowledge, governance, operational procedures, engineering history, and recurring engineering practices for the portfolio application.

---

# J

## Journal Entry

A historical record describing a completed engineering activity supported by repository evidence.

See: **10-Engineering-Journal.md**

---

# M

## MDX

Markdown extended with React component support, used as the publishing format for technical case studies.

See: **04-Case-Study-System.md**

---

## Metadata Route

A Next.js application route responsible for generating metadata resources such as `robots.txt` and `sitemap.xml`.

See: **05-SEO-System.md**

---

# P

## Portfolio Engineering Handbook (PEH)

The governed engineering documentation maintained alongside the portfolio repository.

The handbook preserves engineering knowledge independently from repository implementation.

---

## Principle Admission Policy

The governance policy defining the criteria that must be satisfied before an Engineering Principle becomes an adopted handbook record.

See: **01-Engineering-Principles.md**

---

# R

## Reading Experience

The subsystem responsible for long-form reading features including reading progress, heading extraction, table of contents generation, and section highlighting.

See: **06-Reading-Experience.md**

---

## Related Record

The standard handbook callout used to reference another governed handbook record without reproducing its content.

Related Record callouts preserve clear separation of responsibilities between handbook chapters.

See: **00-Handbook-Standards.md**

---

## Release History

The governed handbook record documenting tagged software releases and repository milestones.

See: **07-Release-History.md**

---

## Repository Evidence

Observable evidence contained within the repository, including implementation, Git history, release records, project configuration, and governed handbook records.

Repository evidence forms the basis for engineering documentation throughout the handbook.

---

# S

## SEO System

The subsystem responsible for metadata generation, structured data, search engine optimization, and machine-readable content descriptions.

See: **05-SEO-System.md**

---

## Slug

A normalized identifier used to create stable URLs and HTML element identifiers throughout the portfolio application.

Slugs are used for case study routing and generated heading identifiers.

See: **04-Case-Study-System.md**  
See: **06-Reading-Experience.md**

---

## Structured Data

Machine-readable metadata generated using JSON-LD and Schema.org vocabularies to improve search engine understanding of published content.

See: **05-SEO-System.md**

---

## System Documentation

A handbook record describing the observable implementation of a subsystem without documenting architectural rationale or operational procedures.

Examples include the Case Study System, SEO System, and Reading Experience chapters.

---

# T

## Timeline Entry

A chronological Engineering Journal record describing a completed engineering activity supported by Git repository evidence.

See: **10-Engineering-Journal.md**

---

# V

## Versioned Release

A tagged software release recorded within the Git repository and documented by the Release History.

See: **07-Release-History.md**

---

# Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-07-24 | Initial glossary defining the standardized terminology used throughout the Portfolio Engineering Handbook. |

---

**Document Status:** Reviewed

This glossary has been reviewed against the current Portfolio Engineering Handbook and defines the standardized terminology used consistently across governed handbook records.

Future revisions should occur only when new recurring terminology is introduced or existing terminology changes within the handbook.