---

# Decision Log

> Index of all Architecture Decision Records.

**Handbook Version:** 1.0.0
**Document Version:** 1.0.0
**Project Version:** 1.5.0
**Status:** Reviewed
**Last Updated:** 2026-07-24

---

# Purpose

The Decision Log records the Architecture Decision Records (ADRs) that govern the portfolio application.

The Decision Log provides an index of architectural decisions together with their current lifecycle status, relationships, and associated handbook documents.

The Decision Log serves as the governance record for architectural decisions documented within the Portfolio Engineering Handbook.

This chapter documents:

- Architecture Decision Record identifiers.
- Decision titles.
- Decision status.
- Relationships between ADRs and handbook documents.
- Decision governance.

This chapter does not document:

- Architectural rationale.
- Decision analysis.
- Implementation details.
- Engineering principles.
- Future architectural proposals.

Those responsibilities remain within the individual Architecture Decision Records (ADRs).

# Decision Log Overview

The Decision Log provides a centralized index of the Architecture Decision Records (ADRs) maintained within the Portfolio Engineering Handbook.

Each Architecture Decision Record documents a single architectural decision together with its lifecycle status, supporting evidence, and relationships to other governed handbook records.

The Decision Log does not duplicate the contents of individual ADRs.

Instead, it records the existence, status, and relationships of each Architecture Decision Record while providing a single point of reference for architectural governance.

---

## Decision Log Scope

The Decision Log records the following observable information for each ADR.

| Information | Description |
|------------|-------------|
| Identifier | Unique Architecture Decision Record identifier. |
| Title | Decision title. |
| Status | Current decision lifecycle status. |
| Date | Date recorded within the ADR. |
| Related Documents | Handbook documents associated with the ADR. |

The Decision Log does not reproduce the following ADR content.

- Context.
- Problem statement.
- Alternatives considered.
- Decision rationale.
- Supporting evidence.
- Trade-offs.
- Outcomes.

These remain within the corresponding Architecture Decision Record.

---

## Current Repository State

At the time of writing, the Architecture Decision Record repository consists of Implemented ADRs documenting architectural decisions that are verifiable within the repository.

Each ADR records the context, decision, rationale, trade-offs, and implementation notes for a significant architectural decision.

The current ADR template includes the following sections.

- Context.
- Decision.
- Rationale.
- Trade-offs.
- Implementation Notes.
- Related ADRs.

The current ADRs are implemented and verifiable against the repository codebase.

---

## Observable Characteristics

The current Decision Log exhibits the following characteristics.

- Centralized ADR index.
- Status-based governance.
- Standardized ADR structure.
- Separation between index and ADR content.
- Relationships maintained through referenced handbook records.

# Decision Lifecycle

Architecture Decision Records progress through a documented lifecycle within the Portfolio Engineering Handbook.

The current implementation records lifecycle status explicitly through the `Status` field contained within each ADR.

The Decision Log records the current lifecycle state of each ADR without duplicating the architectural content maintained by the corresponding record.

---

## Lifecycle Overview

The observable decision lifecycle is shown below.

```text
Architecture Decision
          │
          ▼
Architecture Decision Record
          │
          ▼
Lifecycle Status
          │
          ▼
Decision Log
```

The Decision Log records lifecycle status for each Architecture Decision Record while the ADR remains the authoritative source for decision content.

---

## Current Lifecycle State

At the time of writing, every Architecture Decision Record within the repository is recorded with the following lifecycle status.

```text
Implemented
```

The current repository contains three Architecture Decision Records, all of which have been implemented and are verifiable within the repository.

This is an observable characteristic of the current ADR repository.

---

## Lifecycle Responsibility

The Architecture Decision Record maintains:

- Decision context.
- Decision.
- Rationale.
- Trade-offs.
- Implementation notes.

The Decision Log maintains:

- ADR identifier.
- ADR title.
- Current lifecycle status.
- Relationships to governed handbook records.

This separation maintains a clear distinction between architectural governance and architectural documentation.

---

## Observable Characteristics

The current decision lifecycle exhibits the following characteristics.

- Explicit lifecycle status.
- One lifecycle state recorded per ADR.
- Governance separated from decision content.
- Architecture Decision Records remain the authoritative source for decision documentation.

# Decision Status Model

The Architecture Decision Record repository records the lifecycle state of each decision through the `Status` field.

The Decision Log records this status without interpreting or modifying the corresponding Architecture Decision Record.

---

## Status Overview

The observable status model is shown below.

| Status | Description |
|--------|-------------|
| Implemented | Architecture Decision Record whose decision is implemented and verifiable within the repository. |

At the time of writing, every Architecture Decision Record within the repository is recorded with the status:

```text
Implemented
```

No additional status values are currently observed within the Architecture Decision Record repository.

---

## Current Repository Status

The current repository contains the following Architecture Decision Records.

| ADR | Title | Status |
|-----|-------|--------|
| ADR-001 | Content Pipeline | Implemented |
| ADR-002 | Routing Strategy | Implemented |
| ADR-003 | Rendering Strategy | Implemented |

The Decision Log records these lifecycle states without duplicating the architectural content maintained within the individual ADRs.

---

## Status Recording

Each Architecture Decision Record records its lifecycle state through a dedicated status field located within the document header.

The Decision Log reproduces this observable status as part of the repository index.

Changes to an ADR's lifecycle state should be reflected within the Decision Log to maintain consistency between the repository index and the corresponding Architecture Decision Record.

---

## Observable Characteristics

The current status model exhibits the following characteristics.

- Explicit lifecycle status.
- One recorded status per ADR.
- Repository-wide use of the Implemented lifecycle state.
- Status maintained independently from decision content.

# ADR Index

The ADR Index records every Architecture Decision Record currently maintained within the Portfolio Engineering Handbook.

Each entry identifies the Architecture Decision Record, its current lifecycle status, and the primary handbook documents that reference or are governed by the decision.

The ADR Index does not summarize or reproduce architectural decisions. Individual ADRs remain the authoritative source for decision content.

---

## Current Architecture Decision Records

| ADR | Title | Status | Date | Related Documents |
|-----|-------|--------|------|-------------------|
| ADR-001 | Content Pipeline | Implemented | 2026-07-24 | 02-Architecture.md |
| ADR-002 | Routing Strategy | Implemented | 2026-07-24 | 02-Architecture.md |
| ADR-003 | Rendering Strategy | Implemented | 2026-07-24 | 02-Architecture.md |

All Architecture Decision Records currently follow the approved ADR template and are recorded in the Implemented lifecycle state.

Each ADR documents an architectural decision that is implemented and verifiable within the repository.

---

## Repository Characteristics

The current ADR repository exhibits the following observable characteristics.

- One Architecture Decision Record per architectural topic.
- Unique ADR identifiers.
- Standardized ADR document structure.
- Explicit lifecycle status.
- Related handbook document references.
- Independent revision history for each ADR.

---

## Relationship to Handbook Chapters

Architecture Decision Records provide governance for implementation documentation contained within the Portfolio Engineering Handbook.

Subsystem chapters reference the corresponding ADRs through the approved `🔗 **Related Record**` callout while maintaining separation between observable implementation and engineering rationale.

The Decision Log records these Architecture Decision Records without duplicating their contents.

# Decision Relationships

The Decision Log records the observable relationships between Architecture Decision Records and other governed records within the Portfolio Engineering Handbook.

These relationships are derived from the corresponding ADRs and the handbook cross-reference model.

The Decision Log does not infer additional architectural dependencies beyond those explicitly recorded.

---

## Relationship Overview

The observable relationship model is shown below.

```text
Architecture Decision Record
              │
              ▼
      Related Documents
              │
              ▼
Portfolio Engineering Handbook
```

Each Architecture Decision Record maintains its own relationships independently.

---

## ADR Relationships

The current Architecture Decision Record repository records the following relationships between ADRs.

| ADR | Related ADRs |
|-----|--------------|
| ADR-001 | ADR-002, ADR-003 |
| ADR-002 | ADR-001, ADR-003 |
| ADR-003 | ADR-001, ADR-002 |

These relationships reflect the architectural dependencies recorded within each ADR. The content pipeline (ADR-001) is consumed by the routing strategy (ADR-002) and rendering strategy (ADR-003). The routing strategy (ADR-002) and rendering strategy (ADR-003) are interdependent through the page generation model.

---

## Handbook Relationships

Each Architecture Decision Record currently records one related handbook document.

| ADR | Related Document |
|-----|------------------|
| ADR-001 | 02-Architecture.md |
| ADR-002 | 02-Architecture.md |
| ADR-003 | 02-Architecture.md |

These relationships are maintained within the corresponding ADRs and reproduced by the Decision Log for governance purposes.

---

## Cross-Reference Model

Implementation chapters reference Architecture Decision Records through the approved handbook callout format.

Architecture Decision Records remain the authoritative source for architectural rationale.

Implementation chapters remain the authoritative source for observable system behavior.

The Decision Log records the existence of these governed records while preserving this separation of responsibilities.

---

## Observable Characteristics

The current relationship model exhibits the following characteristics.

- Inter-ADR dependencies explicitly recorded.
- Explicit handbook document relationships.
- Separation between governance records and implementation documentation.
- Cross-reference consistency across the Portfolio Engineering Handbook.

# Decision Governance

The Decision Log records the governance of Architecture Decision Records (ADRs) within the Portfolio Engineering Handbook.

Each ADR is maintained as an independent governed record using the approved ADR template defined by the handbook.

The Decision Log provides a centralized index of these records while the corresponding ADR remains the authoritative source for architectural decision content.

---

## Governance Overview

The observable governance model is shown below.

```text
Architecture Decision
          │
          ▼
Architecture Decision Record
          │
          ▼
Decision Log
          │
          ▼
Portfolio Engineering Handbook
```

The Decision Log records governed Architecture Decision Records without duplicating their contents.

---

## Governed Records

Each Architecture Decision Record is maintained as an independent handbook record.

The current ADR template includes the following governed sections.

- Context.
- Decision.
- Rationale.
- Trade-offs.
- Implementation Notes.
- Related ADRs.

The Decision Log records the existence and lifecycle status of these governed records.

---

## Status Governance

Each Architecture Decision Record records its current lifecycle state through the `Status` field.

The Decision Log reproduces this status without modifying or interpreting the corresponding Architecture Decision Record.

Changes to an ADR's lifecycle status should be reflected within the Decision Log to maintain consistency across the handbook.

---

## Relationship Governance

Architecture Decision Records maintain their own recorded relationships.

These relationships include:

- Related Architecture Decision Records.
- Related Engineering Principles.
- Related handbook documents.

The Decision Log records these relationships while preserving the corresponding ADR as the authoritative source.

---

## Separation of Responsibilities

Governance responsibilities are divided between the Decision Log and individual Architecture Decision Records.

| Record | Responsibility |
|--------|----------------|
| Decision Log | Records ADR inventory, lifecycle status, and relationships. |
| Architecture Decision Record | Records architectural decision content, evidence, rationale, and revision history. |

This separation maintains a clear distinction between governance records and architectural documentation.

---

## Observable Characteristics

The current governance model exhibits the following characteristics.

- Independent Architecture Decision Records.
- Standardized ADR structure.
- Explicit lifecycle status.
- Centralized governance index.
- Separation between governance records and architectural decision content.
- Independent revision history for each ADR.

The Decision Log documents the current governance model without reproducing architectural decisions maintained within the corresponding ADRs.

# Related Documents

The following Portfolio Engineering Handbook documents interact directly with the Decision Log.

These documents provide complementary governance and architectural information while maintaining clear separation of responsibilities.

| Document | Relationship |
|----------|--------------|
| 00-Handbook-Standards.md | Defines the documentation standards, ADR policy, cross-reference model, and governance requirements followed by the Decision Log. |
| 02-Architecture.md | Identifies the architectural topics governed by the Architecture Decision Record repository. |
| 04-Case-Study-System.md | References Architecture Decision Records governing the Case Study subsystem. |
| 05-SEO-System.md | References Architecture Decision Records governing the SEO subsystem. |
| 06-Reading-Experience.md | References Architecture Decision Records governing the Reading Experience subsystem. |

The following governed records are maintained independently from the Decision Log.

| Record | Relationship |
|--------|--------------|
| ADR-001 – Content Pipeline | Records the architectural decision governing the portfolio content pipeline. |
| ADR-002 – Routing Strategy | Records the architectural decision governing application routing. |
| ADR-003 – Rendering Strategy | Records the architectural decision governing rendering behavior. |

The Decision Log records the existence and lifecycle status of these Architecture Decision Records without reproducing their contents.

# Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-07-24 | Initial implementation of the Decision Log documenting the Architecture Decision Record repository, decision lifecycle, status model, ADR index, decision relationships, governance model, and handbook cross-references. |

---

**Document Status:** Reviewed

This chapter has been reviewed against the current Architecture Decision Record repository maintained within the Portfolio Engineering Handbook.

The Decision Log accurately reflects the observable state of the ADR repository at the time of writing, including recorded Architecture Decision Records, lifecycle status, relationships, and governance structure.

Architecture Decision Records remain the authoritative source for architectural decision content, supporting evidence, rationale, trade-offs, and outcomes.

Future revisions to this document should occur only when the Architecture Decision Record repository changes, including the addition of new ADRs, changes to ADR lifecycle status, or updates to recorded relationships between governed handbook records.