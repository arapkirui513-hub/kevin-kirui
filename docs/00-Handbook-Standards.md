# Portfolio Engineering Handbook Standard (PEH Standard v1.0)

> Governance, documentation standards, and maintenance policy for the Portfolio Engineering Handbook.

**Handbook Version:** 1.0.0  
**Document Version:** 1.0  
**Project Version:** 1.5.0  
**Status:** Approved  
**Last Updated:** 2026-07-24

---

# Purpose

The Portfolio Engineering Handbook (PEH) is treated as an engineering system rather than a collection of notes.

Like the portfolio itself, the handbook has its own architecture, governance model, versioning strategy, documentation standards, and maintenance workflow.

This document defines those standards.

Every handbook chapter, Architecture Decision Record (ADR), diagram, and reference document must conform to this standard.

---

# Scope

The handbook exists to preserve engineering knowledge that cannot be recovered reliably from source code alone.

Its objectives are to:

- Document architectural intent.
- Record engineering decisions.
- Preserve project evolution.
- Explain implementation rationale.
- Improve long-term maintainability.
- Support future contributors.

The handbook complements the source code.

> **Code explains implementation. Documentation explains intent.**

---

# Governance Scope

This document governs the Portfolio Engineering Handbook.

It does not define the architecture of the portfolio itself.

Engineering architecture is documented through handbook chapters and Architecture Decision Records.

---

# Information Architecture

The handbook is organized into four logical domains.

## Governance

Defines how the handbook itself is maintained.

Includes:

- README
- Handbook Standards
- Glossary

---

## Engineering

Documents how the portfolio is designed and implemented.

Includes:

- Engineering Principles
- Architecture
- ADR Index
- Architecture Decision Records
- Case Study System
- SEO System
- Reading Experience

---

## Project Evolution

Documents how the portfolio changes over time.

Includes:

- Release History
- Future Roadmap
- Developer Guide
- Engineering Journal

---

## Reference

Supporting material.

Examples include:

- Publishing specifications
- Supporting diagrams
- Reference assets

---

# Physical Structure

```text
docs/
│
├── README.md
│
├── 00-Handbook-Standards.md
├── 01-Engineering-Principles.md
├── 02-Architecture.md
├── 03-Decision-Log.md
│
├── adr/
│     ├── ADR-001.md
│     ├── ADR-002.md
│     └── ...
│
├── 04-Case-Study-System.md
├── 05-SEO-System.md
├── 06-Reading-Experience.md
├── 07-Release-History.md
├── 08-Future-Roadmap.md
├── 09-Developer-Guide.md
├── 10-Engineering-Journal.md
│
├── glossary.md
├── assets/
└── case-study-publishing-specification.md
```

New ADRs are added to the `adr/` directory.

New handbook chapters are appended to the end of the numbered sequence.

---

# Documentation Philosophy

The handbook documents observed engineering practice rather than intended engineering practice.

Documentation should describe how the project was actually designed, implemented, reviewed, and evolved.

The handbook avoids aspirational guidance that cannot be supported by project evidence.

---

# Principle Admission Rule

Engineering principles are descriptive rather than aspirational.

A principle may be included only if it is grounded in documented evidence from the project's development history.

Acceptable evidence includes:

- Architecture Decision Records
- Release History
- Engineering Journal
- Source code
- Commit history
- Pull requests
- Git tags
- Supporting diagrams

If a principle cannot be supported by evidence, it should not be included.

This rule applies to Engineering Principles. Governance Principles, which describe how the handbook governs itself rather than how the portfolio was engineered, are not required to satisfy this rule.

---

# Governance Principles

These principles govern the handbook itself.

They are distinct from Engineering Principles, which describe the portfolio.

## GP-001 — Identifiers Are Stable, Organization Is Conceptual

Identifiers provide permanent references.

Information architecture provides navigation.

As a result:

- handbook chapter numbers never change,
- ADR identifiers never change,
- handbook chapters are append-only,
- conceptual organization is independent of physical numbering.

## GP-002 — New Record Types Require Governance Before Content

Before introducing a new permanent handbook record type, its governance shall be defined within the handbook standard.

Governance includes:

- purpose,
- lifecycle,
- identifier policy,
- template,
- evidence requirements,
- authority,
- maintenance rules.

Content shall not be authored until these rules have been approved.

---

# Document Responsibilities

Each handbook chapter has a single primary responsibility.

Responsibilities shall not overlap.

| Document | Responsibility |
|----------|-----------------|
| Handbook Standards | Governs the handbook. |
| Architecture | Describes the implemented system. |
| ADRs | Explain why engineering decisions were made. |
| Engineering Principles | Capture lessons learned from implementation evidence. |
| Release History | Records what changed between releases. |
| Engineering Journal | Records development narrative and observations. |

Engineering rationale shall exist in ADRs.

Architectural description shall exist in Architecture.

Engineering lessons shall exist in Engineering Principles.

Documents should reference one another rather than duplicate content.

Subsystem chapters (04–06) inherit the descriptive responsibility of the Architecture chapter, scoped to their respective subsystem. Reference documents provide supporting information and are not intended to establish engineering rationale.

---

# Document Standard

Every handbook chapter begins with:

```markdown
# Title

> One-sentence summary.

**Handbook Version:** x.y.z
**Document Version:** x.y
**Project Version:** x.y.z
**Status:** Draft | Reviewed | Approved | Living
**Last Updated:** YYYY-MM-DD
```

Every handbook chapter ends with:

- Related Documents
- Revision History

---

# Document Lifecycle

```text
Draft

↓

Reviewed

↓

Approved

↓

Living
```

| Status | Meaning |
|----------|----------|
| Draft | Initial authoring or major revision. |
| Reviewed | Technical review completed. |
| Approved | Accepted as the current reference. |
| Living | Approved documentation that evolves with the project. |

---

# Versioning Policy

Three independent version numbers exist.

| Version | Scope |
|----------|----------|
| Project Version | Portfolio application releases. |
| Handbook Version | Handbook governance and structure. |
| Document Version | Individual handbook chapters. |

Changes to one do not automatically require changes to the others.

---

# Known Limitations

PEH Standard v1.0 intentionally retains the metadata field **Project Version** for compatibility with the handbook templates originally designed during development.

The current repository does not maintain a portfolio release numbering system that corresponds to this field.

A future approved amendment may rename this field to **Portfolio Release** or another governance-approved identifier without affecting the remainder of this standard.

---

# Authority Model

When documentation disagrees:

```text
Architecture Decision Records

↓

Release History

↓

Engineering Journal
```

Architecture Decision Records are authoritative.

Release History summarizes project milestones.

Engineering Journal provides narrative and lessons learned.

`03-Decision-Log.md` serves only as an ADR index.

Engineering Principle Records are descriptive rather than authoritative and do not participate in this hierarchy. They derive credibility from documented evidence rather than resolving disagreements.

---

# Evidence Policy

Authority and evidence are separate concepts.

Authority determines which document resolves disagreements.

Evidence determines which artifacts may support a statement.

Evidence may originate from:

- ADRs
- Release History
- Engineering Journal
- Source code
- Commit history
- Pull requests
- Git tags
- Supporting diagrams
- Screenshots

Evidence is not restricted by authority ranking.

---

# Architecture Decision Records

Architecture Decision Records document significant engineering decisions.

Each ADR receives a permanent identifier.

Examples:

- ADR-001
- ADR-002
- ADR-003

Identifiers are never renumbered or reused.

---

# ADR Policy

ADRs may be written:

- contemporaneously, or
- retrospectively.

Retrospective ADRs must contain documented evidence rather than relying on memory.

Proposed ADRs may temporarily defer completion of the Evidence section until the ADR reaches Accepted status. The Evidence section becomes mandatory before an ADR may be accepted.

---

# ADR Status

ADR Status is independent from handbook chapter status.

Valid values are:

| Status | Meaning |
|----------|----------|
| Proposed | Under discussion, or reserved but not yet fully authored. |
| Accepted | Current architectural decision. |
| Deprecated | No longer recommended. |
| Superseded by ADR-XXX | Replaced by a later ADR. |
| Rejected | Considered but not adopted. |

An ADR never uses the handbook lifecycle states.

---

# ADR Header Policy

ADR files follow the ADR template exclusively.

They do not use the handbook chapter metadata block.

---

# ADR Template

```text
ADR Identifier

Status

Date

Context

Problem

Alternatives Considered

Decision

Evidence

Rationale

Trade-offs

Outcome

Related ADRs

Related Engineering Principles

Related Documents

Revision History
```

The Evidence section is mandatory for ADRs with Accepted status. See ADR Policy for the Proposed-status exception.

---

# Cross-Reference Policy

Engineering rationale should exist in one place only.

Documents should reference the appropriate governed handbook record instead of duplicating reasoning. Architectural rationale belongs in ADRs. Additional governed record types, once approved through a future amendment, follow the same rule.

The 🔗 **Related Record** callout provides inline references.

The Related Documents section provides chapter-level navigation.

Records referenced by an inline callout must exist as a file, even if only as a Proposed stub, before the reference is published. The handbook does not knowingly contain references to non-existent records.

---

# Diagram Standard

All diagrams are stored in:

```text
docs/assets/
```

Recommended naming:

```text
architecture-overview.svg

component-hierarchy.svg

adr-004-seo-pipeline.svg

adr-006-reading-pipeline.svg
```

Diagrams supplement documentation.

They do not replace it.

---

# Callout Standard

The handbook uses a closed set of callouts.

| Callout | Purpose |
|----------|----------|
| 📌 **Principle** | Engineering rule. |
| 💡 **Engineering Insight** | Design reasoning. |
| ⚠️ **Trade-off** | Limitation or compromise. |
| 🧭 **Recommendation** | Preferred guidance. |
| 🔗 **Related Record** | Cross-reference to another governed handbook record (currently ADRs; additional record types may be added by future approved amendment). |

No additional callout styles should be introduced without revising this standard.

---

# Naming Conventions

Handbook chapters use zero-padded numbering.

Examples:

```text
00-Handbook-Standards.md

01-Engineering-Principles.md

...

10-Engineering-Journal.md
```

Reference documents remain unnumbered.

Examples:

- README.md
- glossary.md
- case-study-publishing-specification.md

---

# Chapter Numbering Policy

Chapter numbers are stable identifiers.

Once assigned, they are never renumbered.

New handbook chapters are appended to the end of the numbered sequence regardless of conceptual placement.

Conceptual organization is maintained through the handbook's information architecture rather than physical numbering.

---

# Maintenance Policy

Changes to handbook governance require a new Handbook Version.

Changes to handbook chapters require only a Document Version update.

New ADRs never require renumbering handbook chapters or existing ADRs.

---

# Related Documents

- README
- 01-Engineering-Principles
- 02-Architecture

---

# Approval

PEH Standard v1.0 is the first approved governance document of the Portfolio Engineering Handbook.

All handbook chapters created after this approval shall conform to the standards defined in this document unless superseded by a future approved handbook version.

Future governance changes shall be introduced only through an approved amendment and shall not modify this version retrospectively.

PEH Standard v1.0 serves as the baseline governance document for all subsequent handbook revisions.

---

# Revision History

| Version | Date | Changes |
|----------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| 1.0 | 2026-07-24 | Initial release of the Portfolio Engineering Handbook Standard (PEH Standard v1.0). Established governance model, document standards, ADR policy, authority model, maintenance policy, governance principles, and handbook architecture. |