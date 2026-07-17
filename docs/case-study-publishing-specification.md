# Case Study Publishing Specification

**Version:** 1.0

**Status:** Active

**Owner:** Kevin Kirui

**Last Updated:** July 2026

---

> **Status:** This document defines the publishing standard for all case studies in this portfolio. Every published case study must conform to this specification unless a future version explicitly revises the standard.

---

## 1. Purpose

The Case Study Publishing Specification defines the standard for documenting every project published in this portfolio.

Its purpose is to ensure that every case study communicates work consistently, accurately, and transparently regardless of the underlying technology used to render it.

The specification separates authored content from application code. Case studies are written according to this standard, while the application is responsible only for presenting that content.

Every published case study must follow this specification.

Projects adapt to the specification. The specification does not adapt to individual projects.

---

## 2. Publishing Principles

### Principle 1 - Consistency

Every case study follows the same document structure and publishing standard.

### Principle 2 - Transparency

Claims must be supported by evidence.

Assumptions, synthetic data, simulations, and limitations must be clearly identified.

### Principle 3 - Systems Thinking

Case studies should explain not only what was built, but why design decisions were made and how information moves through the system.

### Principle 4 - Reflection

Every case study concludes with lessons learned and proposed future improvements.

### Principle 5 - Stability

Projects adapt to this specification.

The specification evolves only when multiple published case studies reveal the same structural limitation.

### Principle 6 - Decision Reduction

The specification exists to reduce decisions during writing while increasing consistency across published work.

---

## 3. Frontmatter Specification

Every case study must include a frontmatter block.

The frontmatter provides structured metadata used by the application to index, organize, and render case studies consistently.

The following fields are required.

| Field | Required | Purpose |
|-------|----------|---------|
| `title` | Yes | Display name of the case study. |
| `summary` | Yes | Short overview used in listings and previews. |
| `category` | Yes | Primary domain or discipline represented by the project. |
| `year` | Yes | Year the project was completed or published. |
| `status` | Yes | Current project status (for example: Completed or In Progress). |
| `client` | Yes | Client name or "Independent Project" where applicable. |
| `readingTime` | Yes | Estimated reading time displayed to readers. |
| `tags` | Yes | Keywords used for categorization and future filtering. |
| `featured` | Yes | Indicates whether the project appears in featured sections of the site. |

### Example

```yaml
---
title: Clinical Workflow Signal Audit
summary: An AI-assisted workflow intelligence system that identifies delays, missed escalations, and workflow bottlenecks in critical care environments.
category: Healthcare AI
year: 2026
status: Completed
client: Independent Project
readingTime: "8 min"
tags:
  - Healthcare AI
  - Workflow Intelligence
  - Clinical Operations
featured: true
---
```

---

## 4. Document Structure

Every published case study must follow the same document structure.

The purpose of a standardized structure is to improve readability, make projects easier to compare, and reduce decisions during writing.

Sections must appear in the following order:

1. Executive Summary
2. Context
3. The Problem
4. Objectives
5. My Approach
6. System Design
7. Technical Implementation
8. Results
9. Lessons Learned
10. What I'd Do Next

### Executive Summary

Provide a concise overview of the project.

A reader should understand what the project is, why it exists, and what it accomplished in less than one minute.

---

### Context

Describe the environment in which the project exists.

This section provides background but should not describe the solution.

---

### The Problem

Clearly define the problem that motivated the project.

Focus on workflow failures, operational challenges, information gaps, or user needs rather than jumping directly into implementation.

---

### Objectives

Define what success looked like before implementation began.

Objectives should be specific enough that the reader can later evaluate whether they were achieved.

---

### My Approach

Explain the reasoning behind the chosen solution.

Describe the design process, trade-offs, and major decisions rather than listing implementation details.

---

### System Design

Describe how the system is structured.

Include workflows, architecture, data flow, decision logic, or interaction models as appropriate.

This section should explain how the parts of the system work together rather than how individual technologies were implemented.

---

### Technical Implementation

Describe the technologies, frameworks, libraries, and engineering decisions used to build the solution.

Technology supports the story but should not become the story.

Include implementation details only when they help the reader understand important design decisions or technical trade-offs.

---

### Results

Present measurable outcomes whenever available.

When production metrics are unavailable, clearly distinguish measured outcomes, simulated results, qualitative observations, and assumptions.

---

### Lessons Learned

Reflect on what worked well, what proved difficult, and what changed your thinking during the project.

Focus on insights that would improve future work rather than simply describing challenges.

---

### What I'd Do Next

Describe the logical next iteration of the project.

Focus on future improvements, validation opportunities, and product evolution rather than unresolved problems.

---

## 5. Writing Standards

The purpose of these standards is to ensure that every published case study is clear, consistent, evidence-based, and easy to read.

### Write for understanding

Assume the reader is intelligent but unfamiliar with the project.

Explain enough context that someone outside the immediate domain can understand the problem, approach, and outcome.

---

### Prioritize reasoning over description

Do not simply describe what was built.

Explain why important decisions were made, what alternatives were considered, and which trade-offs influenced the final solution.

---

### Separate product thinking from implementation

Describe workflow design, system architecture, and decision-making before discussing technologies, frameworks, or libraries.

Technology should support the narrative rather than lead it.

---

### Use evidence whenever possible

Support claims with measurable outcomes, documented observations, or clearly identified simulations.

Avoid unsupported statements such as "significantly improved" or "greatly reduced" unless evidence is provided.

---

### Be transparent about limitations

If production data, deployment metrics, or validation results are unavailable, state this clearly.

Do not imply certainty where evidence does not exist.

---

### Write concise sections

Every section should answer its primary question without unnecessary repetition.

Readers should be able to scan the document while still understanding the overall narrative.

---

### Maintain a reflective tone

Case studies are records of professional work, not marketing material.

Focus on thoughtful analysis, lessons learned, and future improvements rather than promotional language.

---

## 6. Evidence Standards

Every claim made within a case study must be supported by appropriate evidence or clearly identified as an observation, simulation, assumption, or future proposal.

The purpose of these standards is to maintain credibility, encourage transparency, and help readers distinguish between validated outcomes and design reasoning.

### Measured Outcomes

Measured outcomes are supported by verifiable data collected during the project.

Examples include:

- Performance metrics
- User testing results
- Workflow timing measurements
- Benchmark comparisons
- Production analytics

Whenever possible, explain how the measurement was obtained.

---

### Simulated Results

Simulation is acceptable when production data is unavailable.

Synthetic datasets, workflow simulations, and controlled experiments must always be identified as simulated.

Simulation should never be presented as real-world operational performance.

---

### Qualitative Observations

Not every project produces numerical results.

Qualitative observations may include:

- Design insights
- Workflow improvements
- User feedback
- Technical discoveries
- Architectural advantages

These observations should be presented as professional judgment rather than objective measurement.

---

### Assumptions

Assumptions must be explicitly stated whenever they influence the project.

Readers should never have to infer which parts of a case study are based on assumptions.

---

### Limitations

Every case study should acknowledge important limitations.

Examples include:

- Limited validation
- Synthetic data
- Small sample sizes
- Prototype implementations
- Lack of production deployment

Describing limitations increases credibility and provides appropriate context for interpreting the work.

---

### Future Work

Ideas for future development should be clearly separated from completed work.

Future improvements should never be described as existing functionality.

---

### Evidence Hierarchy

When presenting results, use the following order of preference:

1. Measured outcomes
2. Controlled experiments
3. Simulated results
4. Qualitative observations
5. Design reasoning
6. Assumptions

Whenever stronger evidence is unavailable, clearly explain why.

---

## 7. Evolution Policy

The Case Study Publishing Specification is intended to remain stable over time while continuing to improve through deliberate, evidence-based refinement.

Changes to the specification should be made only when they improve consistency, clarity, or the long-term quality of published case studies.

### Projects Adapt to the Specification

Individual projects must conform to the current publishing specification.

The specification must not be modified to accommodate the unique characteristics of a single project.

When a project appears to conflict with the specification, the project should adapt unless a broader pattern has been identified.

---

### Evidence-Based Evolution

The specification should evolve only when multiple published case studies reveal the same structural limitation.

Examples include:

- Repeated difficulty documenting a particular type of project.
- Consistent gaps in the document structure.
- Missing metadata required by multiple case studies.
- Publishing workflows that introduce unnecessary repetition.

Changes should be based on recurring evidence rather than isolated situations.

---

### Backward Compatibility

Whenever practical, revisions should preserve compatibility with previously published case studies.

If a structural change is required, existing case studies should be updated so that the portfolio continues to present a consistent reading experience.

---

### Versioning

Every significant revision to this specification must increment the document version and record the change in the Revision History.

Minor wording improvements that do not alter the publishing standard do not require a new version.

---

### Governance Principles

The publishing specification is governed by the following principles:

- Consistency is preferred over convenience.
- Transparency is preferred over completeness.
- Clarity is preferred over complexity.
- Evidence is preferred over assumption.
- Long-term maintainability is preferred over short-term optimization.
- Simplicity is preferred until additional complexity has been earned.

---

## Revision History

| Version | Date | Summary |
|---------|------|---------|
| 1.0 | July 2026 | Established the initial Case Study Publishing Specification, including publishing principles, frontmatter contract, document structure, writing standards, evidence standards, and evolution policy. |