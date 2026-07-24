# Portfolio Engineering Handbook

> Engineering documentation for the Kevin Kirui portfolio application.

**Version:** 1.6.0  
**Status:** Active Handbook  
**Last Updated:** July 2026

---

# Purpose

The Portfolio Engineering Handbook records the engineering knowledge, repository structure, architectural governance, operational procedures, engineering history, and recurring engineering practices supporting the Kevin Kirui portfolio application.

The handbook provides a governed engineering reference derived from observable repository evidence.

Its purpose is to preserve engineering knowledge beyond source code while maintaining clear separation between architecture, implementation, operational guidance, engineering history, planning, and engineering principles.

The handbook documents:

- Repository architecture.
- Architecture Decision Records (ADRs).
- System documentation.
- Operational development procedures.
- Engineering history.
- Planned engineering work.
- Recurring engineering practices.

The handbook does not replace the repository implementation, Git history, or Architecture Decision Records.

---

# Handbook Structure

The Portfolio Engineering Handbook consists of the following governed records.

| Document | Purpose |
|----------|---------|
| **00-Handbook-Standards.md** | Defines handbook governance, documentation standards, evidence policy, ADR lifecycle, and revision practices. |
| **01-Engineering-Principles.md** | Records recurring engineering practices supported by repeated observable repository evidence. |
| **02-Architecture.md** | Documents the repository architecture, subsystem relationships, and information flow. |
| **03-Decision-Log.md** | Records the Architecture Decision Record (ADR) repository and decision governance. |
| **04-Case-Study-System.md** | Documents the MDX publishing system and content architecture. |
| **05-SEO-System.md** | Documents metadata generation, structured data, and search engine optimization. |
| **06-Reading-Experience.md** | Documents reading progress, navigation, and long-form reading features. |
| **07-Release-History.md** | Records tagged software releases and repository milestones. |
| **08-Future-Roadmap.md** | Records identified engineering work not yet completed. |
| **09-Developer-Guide.md** | Documents repository maintenance and operational development procedures. |
| **10-Engineering-Journal.md** | Records the chronological history of completed engineering activities. |

---

# Handbook Organization

The handbook separates engineering knowledge into distinct responsibilities.

| Subject | Primary Record |
|---------|----------------|
| Engineering Standards | Handbook Standards |
| Engineering Principles | Engineering Principles |
| Repository Architecture | Architecture |
| Architectural Decisions | Decision Log and ADRs |
| System Documentation | System chapters |
| Operational Procedures | Developer Guide |
| Engineering History | Engineering Journal |
| Software Releases | Release History |
| Planned Engineering Work | Future Roadmap |

This separation prevents duplication while ensuring each subject has a single authoritative record.

---

# Repository Evidence

The handbook is derived from observable repository evidence.

Primary evidence sources include:

- Repository implementation.
- Git commit history.
- Git tags.
- Architecture Decision Records.
- Project configuration.
- Governed handbook records.

Repository evidence remains the authoritative source supporting all handbook records.

---

# Recommended Reading Order

Readers new to the repository should follow this sequence.

1. Handbook Standards
2. Architecture
3. Decision Log
4. Case Study System
5. SEO System
6. Reading Experience
7. Developer Guide
8. Release History
9. Engineering Journal
10. Engineering Principles
11. Future Roadmap

This progression moves from repository structure through implementation, operations, engineering history, recurring engineering practices, and future planning.

---

# Related Documents

The handbook operates alongside the following repository records.

- Architecture Decision Records (`docs/adr/`)
- Case study publishing specification
- Git repository
- Git commit history
- Git tags

---

# Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.6.0 | 2026-07-24 | Updated README to reflect the completed Portfolio Engineering Handbook, finalized document structure, evidence-first governance model, and handbook organization. |

---

**Document Status:** Reviewed

This README has been reviewed against the current Portfolio Engineering Handbook and accurately reflects the structure, responsibilities, and governance model of the documentation set.

Future revisions should occur only when the handbook structure, governance model, or document organization changes.

