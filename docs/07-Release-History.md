# Release History

> Records tagged software releases within the portfolio repository.

**Handbook Version:** 1.0.0
**Document Version:** 1.0.0
**Project Version:** 1.5.0
**Status:** Reviewed
**Last Updated:** 2026-07-24

---

# Purpose

The Release History records tagged software releases within the portfolio repository.

The Release History provides a chronological record of released versions together with their associated release commits and observable repository state.

This chapter serves as the governance record for software releases maintained within the Portfolio Engineering Handbook.

This chapter documents:

- Release identifiers.
- Release versions.
- Release commits.
- Release chronology.
- Relationships between releases and governed handbook records.

This chapter does not document:

- Implementation details.
- Architectural decisions.
- Engineering rationale.
- Development observations.
- Engineering principles.

Those responsibilities remain within subsystem chapters, Architecture Decision Records (ADRs), and the Engineering Journal.

# Release History Overview

The Release History provides a centralized index of tagged software releases within the portfolio repository.

Each release records an observable state of the repository at a specific point in its development history. Release information is derived from the Git repository, including tagged releases and their associated release commits.

The Release History does not duplicate implementation details, architectural decisions, or development observations. Instead, it records the existence, chronology, and identifying information of released versions.

---

## Release Repository

The observable release repository is shown below.

```text
Git Repository
       │
       ▼
Tagged Release
       │
       ▼
Release Commit
       │
       ▼
Release History
```

The Release History records tagged releases while the Git repository remains the authoritative source for commit history and repository state.

---

## Release Scope

The Release History records the following observable information for each release.

| Information | Description |
|------------|-------------|
| Version | Tagged release identifier. |
| Release Commit | Commit associated with the tagged release. |
| Release Date | Date recorded by the Git repository. |
| Release Summary | Summary recorded in the tagged release commit. |

The Release History does not reproduce:

- Individual commit history.
- Source code changes.
- Architectural rationale.
- Engineering observations.
- Implementation details.

These remain within the Git repository and the corresponding handbook records.

---

## Current Repository State

At the time of writing, the repository contains tagged software releases together with subsequent development commits that have not yet been recorded as a tagged release.

The observable release history consists of tagged release commits followed by ongoing repository development.

This chapter records tagged releases without documenting unreleased repository changes as formal software releases.

---

## Observable Characteristics

The current Release History exhibits the following characteristics.

- Repository-derived release records.
- Tagged version identification.
- Chronological release ordering.
- Separation between release records and commit history.
- Git repository as the authoritative release source.

# Release Lifecycle

The portfolio repository records software releases through Git tags associated with specific repository commits.

Each tagged release identifies a stable repository state and provides a reference point within the repository history.

The Release History records these tagged releases while the Git repository remains the authoritative source for commit history.

---

## Lifecycle Overview

The observable release lifecycle is shown below.

```text
Repository Development
          │
          ▼
Release Commit
          │
          ▼
Git Tag
          │
          ▼
Release History
```

The Release History records tagged repository states without reproducing the underlying commit history.

---

## Current Lifecycle State

At the time of writing, the repository contains two tagged software releases.

| Version | Repository State |
|---------|------------------|
| v1.4.0 | Tagged release |
| v1.5.0 | Tagged release |

Subsequent repository development has occurred after the latest tagged release.

These commits are part of the observable repository history but are not currently recorded as tagged software releases.

---

## Lifecycle Responsibility

The Git repository maintains:

- Complete commit history.
- Release commits.
- Tagged versions.
- Repository chronology.

The Release History maintains:

- Release identifiers.
- Release ordering.
- Release summaries.
- Relationships to governed handbook records.

This separation maintains a clear distinction between repository history and handbook governance.

---

## Observable Characteristics

The current release lifecycle exhibits the following characteristics.

- Tagged software releases.
- Chronological release ordering.
- Repository-derived release records.
- Separation between commit history and release history.
- Git repository as the authoritative release source.

# Release Index

The Release Index records every tagged software release currently maintained within the portfolio repository.

Each entry identifies the tagged release together with its associated release commit and observable repository state.

The Release Index does not reproduce commit history or implementation details. The Git repository remains the authoritative source for repository history.

---

## Tagged Releases

| Version | Release Commit | Repository State | Release Summary |
|---------|----------------|------------------|-----------------|
| v1.4.0 | `04d9b10` | Tagged Release | Structured data and SEO enhancements |
| v1.5.0 | `ea9a3de` | Tagged Release | Reading experience and case study enhancements |

The current repository contains two tagged software releases.

Both releases are represented by dedicated release commits associated with Git tags.

---

## Repository Development

The current repository contains development commits that occur after the latest tagged release.

These commits represent ongoing repository development and are not currently recorded as tagged software releases.

The Release History records only tagged releases while preserving the complete repository chronology maintained by Git.

---

## Repository Characteristics

The current release repository exhibits the following observable characteristics.

- Tagged software releases.
- Unique semantic version identifiers.
- Dedicated release commits.
- Chronological release ordering.
- Ongoing repository development following the latest tagged release.
- Git repository as the authoritative release record.

---

## Relationship to Repository History

Tagged releases identify significant repository states within the complete commit history.

The Release History records these repository states while the Git repository maintains:

- Complete commit chronology.
- Individual development commits.
- Branch history.
- Tag associations.

This separation preserves a clear distinction between repository history and handbook release governance.

# Release Governance

The Release History records the governance of tagged software releases within the Portfolio Engineering Handbook.

Each release is represented by a Git tag associated with a specific repository commit.

The Release History provides a centralized index of these tagged releases while the Git repository remains the authoritative source for repository history.

---

## Governance Overview

The observable governance model is shown below.

```text
Repository Development
          │
          ▼
Release Commit
          │
          ▼
Git Tag
          │
          ▼
Release History
          │
          ▼
Portfolio Engineering Handbook
```

The Release History records governed release information without duplicating repository history.

---

## Governed Release Records

Each tagged software release is governed through information maintained by the Git repository.

The current Release History records the following information for each tagged release.

- Release version.
- Release commit.
- Repository state.
- Release summary.

The Git repository maintains the complete history associated with each release.

---

## Repository Governance

The Git repository maintains:

- Complete commit history.
- Tagged releases.
- Branch history.
- Repository chronology.

The Release History maintains:

- Release identifiers.
- Release ordering.
- Release summaries.
- Relationships to governed handbook records.

This separation maintains a clear distinction between repository history and handbook governance.

---

## Release Relationships

Tagged releases identify observable repository states.

Development commits occurring after the latest tagged release remain part of the repository history until recorded by a subsequent tagged release.

The Release History records tagged releases without classifying unreleased development as software releases.

---

## Separation of Responsibilities

Governance responsibilities are divided between the Git repository and the Release History.

| Record | Responsibility |
|---------|----------------|
| Git Repository | Maintains commit history, tagged releases, branch history, and repository chronology. |
| Release History | Records release identifiers, release ordering, release summaries, and handbook relationships. |

This separation preserves the Git repository as the authoritative source for repository history while the Release History serves as the governed handbook record for released versions.

---

## Observable Characteristics

The current release governance model exhibits the following characteristics.

- Git-governed release records.
- Tagged software releases.
- Repository-derived release information.
- Centralized handbook release index.
- Separation between repository history and release governance.
- Independent handbook revision history.

The Release History documents the observable governance model without reproducing the underlying repository history.

# Related Documents

The following Portfolio Engineering Handbook documents interact directly with the Release History.

These documents provide complementary governance and implementation information while maintaining clear separation of responsibilities.

| Document | Relationship |
|----------|--------------|
| 00-Handbook-Standards.md | Defines the documentation standards, governance model, and revision practices followed by the Release History. |
| 02-Architecture.md | Documents the architectural baseline associated with repository releases. |
| 03-Decision-Log.md | Records the Architecture Decision Record repository governing architectural changes introduced throughout repository development. |
| 04-Case-Study-System.md | Documents the Case Study subsystem whose implementation evolves across repository releases. |
| 05-SEO-System.md | Documents the SEO subsystem whose implementation evolves across repository releases. |
| 06-Reading-Experience.md | Documents the Reading Experience subsystem whose implementation evolves across repository releases. |

The following repository records provide the primary evidence for this chapter.

| Repository Record | Relationship |
|-------------------|--------------|
| Git Commit History | Records the complete repository development history from which release commits are identified. |
| Git Tags | Identify tagged software releases recorded by the Release History. |

The Release History records tagged software releases without reproducing repository history maintained by Git.

# Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-07-24 | Initial implementation of the Release History documenting the tagged release repository, release lifecycle, release index, release governance, and handbook relationships. |

---

**Document Status:** Reviewed

This chapter has been reviewed against the current Git repository and the tagged software releases maintained within the portfolio project.

The Release History accurately reflects the observable repository state at the time of writing, including tagged releases, release commits, repository chronology, and release governance.

The Git repository remains the authoritative source for commit history, tagged releases, branch history, and repository chronology.

Future revisions to this document should occur only when the repository release history changes, including the creation of new tagged releases, updates to release information, or changes to the governed relationships documented within this chapter.