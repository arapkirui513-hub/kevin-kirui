# Developer Guide

> Documents the operational procedures required to maintain, extend, and publish the portfolio application.

**Handbook Version:** 1.0.0
**Document Version:** 1.0.0
**Project Version:** 1.5.0
**Status:** Reviewed
**Last Updated:** 2026-07-24

---

# Purpose

The Developer Guide documents the operational procedures required to maintain, extend, and publish the portfolio application.

The guide provides practical development guidance derived from the current repository implementation and governed handbook records.

This chapter serves as the operational reference for developers working on the portfolio.

This chapter documents:

- Development environment.
- Repository organization.
- Development workflow.
- Content publishing workflow.
- Quality assurance procedures.
- Build and deployment procedures.
- Maintenance responsibilities.

This chapter does not document:

- System architecture.
- Architectural decisions.
- Completed engineering activities.
- Planned engineering work.
- Engineering principles.

These subjects remain documented within the Architecture, Architecture Decision Records, Engineering Journal, Future Roadmap, and Engineering Principles.

# Developer Guide Overview

The Developer Guide provides the operational reference for maintaining, extending, and publishing the portfolio application.

It consolidates the practical development procedures required to work with the repository while preserving consistency with the engineering practices and governance model documented throughout the Portfolio Engineering Handbook.

The Developer Guide supports day-to-day development activities while the Architecture, subsystem documentation, and Architecture Decision Records (ADRs) remain the authoritative sources for system design and engineering decisions.

---

## Operational Model

The operational development model is shown below.

```text
Repository
     │
     ▼
Development Environment
     │
     ▼
Implementation
     │
     ▼
Quality Assurance
     │
     ▼
Build
     │
     ▼
Deployment
```

The Developer Guide documents the operational workflow used to maintain the portfolio without replacing architectural or governance records.

---

## Guide Scope

The Developer Guide documents the following operational activities.

| Activity | Description |
|----------|-------------|
| Development Environment | Local tools, dependencies, and project setup required for development. |
| Repository Workflow | Practical procedures for working with the project structure. |
| Content Publishing | Operational workflow for creating and publishing case studies. |
| Quality Assurance | Validation procedures performed before changes are accepted. |
| Build and Deployment | Procedures for building and deploying the application. |
| Maintenance | Responsibilities for preserving repository quality and handbook consistency. |

The Developer Guide does not reproduce:

- System architecture.
- Architectural rationale.
- Subsystem implementation.
- Release history.
- Engineering principles.

These subjects remain documented within the Architecture, subsystem chapters, Decision Log, Release History, Engineering Journal, Future Roadmap, and Engineering Principles.

---

## Current Operational State

At the time of writing, the portfolio is maintained as a static Next.js application with an MDX-based publishing workflow, reusable UI components, centralized metadata management, and governed engineering documentation.

Operational procedures described within this guide reflect the current observable repository implementation.

---

## Observable Characteristics

The current Developer Guide exhibits the following characteristics.

- Repository-derived operational procedures.
- Practical development guidance.
- Separation between implementation and operation.
- Integration with governed handbook records.
- Repository implementation as the authoritative operational source.

# Development Environment

The portfolio application is developed using a modern TypeScript-based web development environment centered on the Next.js App Router.

The current development environment supports application development, MDX content publishing, static site generation, and deployment preparation.

This section documents the observable development environment required to work with the repository.

---

## Environment Overview

The observable development environment is shown below.

```text
Local Development Environment
             │
             ▼
Repository
             │
             ▼
Development Server
             │
             ▼
Quality Assurance
             │
             ▼
Production Build
```

The development environment provides the tools required to maintain the portfolio while preserving consistency with the repository implementation.

---

## Core Technologies

The current development environment includes the following technologies.

| Technology | Purpose |
|------------|---------|
| Next.js (App Router) | Application framework and routing. |
| React | User interface development. |
| TypeScript | Static type checking. |
| Tailwind CSS | Utility-first styling framework. |
| MDX | Case study authoring and content publishing. |
| Node.js | JavaScript runtime for development and build processes. |
| npm | Dependency management and project scripts. |
| Git | Source control and repository history. |

These technologies form the observable development environment documented throughout the Portfolio Engineering Handbook.

---

## Repository Setup

Development is performed using the project repository as the primary working environment.

The repository provides:

- Application source code.
- MDX content.
- Static assets.
- Shared components.
- Stylesheets.
- Engineering documentation.

Repository organization is documented in **02-Architecture.md**.

---

## Development Dependencies

The project depends on repository-managed packages defined by the application configuration.

Development dependencies are installed before local development begins.

Package management remains repository-driven to preserve consistency across development environments.

---

## Local Development

The current development workflow supports local application execution during implementation and content authoring.

Local development provides:

- Application preview.
- Component development.
- MDX rendering.
- Static asset validation.
- Metadata generation.

Operational development procedures are documented later in this guide.

---

## Observable Characteristics

The current development environment exhibits the following characteristics.

- Repository-managed dependencies.
- Type-safe application development.
- Component-based implementation.
- MDX-based publishing workflow.
- Static site generation.
- Integrated quality assurance.

# Repository Structure

The portfolio repository is organized to separate application logic, content, shared components, static assets, styling, and engineering documentation.

This organization supports maintainability by separating implementation concerns from published content and engineering records.

The detailed architectural relationships between repository directories are documented in **02-Architecture.md**.

---

## Repository Overview

The observable repository organization is shown below.

```text
Repository
├── app/
├── components/
├── content/
├── data/
├── docs/
├── lib/
├── public/
├── styles/
└── types/
```

The Developer Guide documents the operational role of these directories while the Architecture chapter documents their structural relationships.

---

## Working Directories

The following directories are used during routine development.

| Directory | Operational Role |
|-----------|------------------|
| `app/` | Application routes, layouts, and page components. |
| `components/` | Shared reusable UI components. |
| `content/` | MDX case studies and published content. |
| `data/` | Shared application metadata and configuration. |
| `lib/` | Utility functions and shared application logic. |
| `public/` | Static assets served directly by the application. |
| `styles/` | Global stylesheets and design tokens. |
| `types/` | Shared TypeScript type definitions. |
| `docs/` | Portfolio Engineering Handbook and supporting documentation. |

Each directory has a defined operational responsibility within the repository.

---

## Development Responsibilities

Routine development activities typically occur within the following locations.

| Activity | Primary Location |
|----------|------------------|
| User interface development | `components/`, `app/` |
| Case study authoring | `content/` |
| Shared utilities | `lib/` |
| Styling updates | `styles/` |
| Metadata updates | `data/` |
| Static asset management | `public/` |
| Documentation | `docs/` |

This organization supports separation between implementation, content publishing, and engineering documentation.

---

## Repository Maintenance

Repository organization should preserve the current separation between:

- Application implementation.
- Published content.
- Shared utilities.
- Static assets.
- Styling.
- Engineering documentation.

New additions should be placed within the directory that corresponds to their operational responsibility.

Detailed architectural relationships remain documented in **02-Architecture.md**.

---

## Observable Characteristics

The current repository structure exhibits the following characteristics.

- Separation of application and content.
- Reusable component organization.
- Shared utility layer.
- Centralized styling.
- Dedicated engineering documentation.
- Repository-based content publishing.

# Development Workflow

The portfolio repository is maintained through a repeatable development workflow that supports application implementation, content publishing, documentation updates, and quality assurance.

The workflow described in this guide reflects the observable development practices used throughout the repository.

---

## Workflow Overview

The observable development workflow is shown below.

```text
Repository
     │
     ▼
Implement Changes
     │
     ▼
Validate Changes
     │
     ▼
Build Verification
     │
     ▼
Version Control
```

The development workflow emphasizes repository consistency and validation before engineering work becomes part of the project history.

---

## Implementation Workflow

Engineering work is performed directly within the repository.

Typical implementation activities include:

- Developing application components.
- Updating shared utilities.
- Publishing MDX case studies.
- Maintaining engineering documentation.
- Updating shared metadata.
- Managing static assets.

The location of each activity is determined by the repository structure documented in **02-Architecture.md**.

---

## Validation Workflow

Changes are validated before they are considered complete.

The current repository validation process includes:

- Type checking through the TypeScript compiler.
- Static analysis using project linting.
- Local application verification.
- MDX rendering verification where applicable.
- Review of affected documentation.

Validation confirms that engineering changes remain consistent with the existing implementation.

---

## Build Verification

Repository changes are verified using the project's standard build process.

Observable quality assurance activities include:

- Running project linting.
- Executing the production build.
- Confirming successful compilation.
- Resolving reported errors before committing changes.

The production build serves as the final verification step before repository changes are recorded.

---

## Version Control Workflow

Completed engineering work is recorded using Git.

The repository history preserves:

- Engineering milestones.
- Documentation updates.
- Feature implementation.
- Release preparation.
- Governance documentation.

Completed engineering activities become part of the repository history and are subsequently recorded within the Engineering Journal where appropriate.

---

## Observable Characteristics

The current development workflow exhibits the following characteristics.

- Repository-based implementation.
- Incremental engineering changes.
- Validation before commit.
- Build verification prior to version control.
- Repository history as the authoritative engineering record.

# Content Publishing Workflow

The portfolio publishes technical case studies through an MDX-based content publishing workflow.

This workflow provides a repeatable process for authoring, validating, and publishing case study content while preserving consistency with the repository implementation.

Detailed implementation of the publishing pipeline is documented in **04-Case-Study-System.md**.

---

## Workflow Overview

The observable content publishing workflow is shown below.

```text
Case Study Content
         │
         ▼
Frontmatter
         │
         ▼
MDX Processing
         │
         ▼
Static Generation
         │
         ▼
Published Case Study
```

The Developer Guide documents the operational publishing process while the Case Study System documents the implementation of the publishing pipeline.

---

## Content Authoring

Case studies are authored as MDX documents within the repository.

Each published case study consists of:

- Structured frontmatter.
- Markdown content.
- Embedded MDX components.
- Associated media assets.

Content authors are responsible for maintaining consistency with the established case study structure.

---

## Frontmatter Management

Each case study includes structured frontmatter describing the published content.

Observable metadata includes:

- Title.
- Summary.
- Slug.
- Category.
- Publication status.
- Featured image.
- Open Graph image.
- Reading time.
- Publication year.
- Tags.

Frontmatter provides the metadata consumed by the application during static generation.

---

## MDX Components

Published content may include reusable MDX components provided by the repository.

Current observable components include:

- Callout.
- Figure.
- MetricCard.
- MetricGrid.

These components provide consistent presentation across published case studies.

---

## Publishing Validation

Content should be validated before publication.

Observable validation activities include:

- Frontmatter verification.
- MDX rendering verification.
- Internal link verification.
- Image verification.
- Metadata verification.
- Local application review.

Validation confirms that published content integrates correctly with the existing publishing pipeline.

---

## Publication Workflow

Completed content becomes part of the repository through the standard development workflow.

Publication includes:

- Repository update.
- Build verification.
- Version control.
- Static site generation.

Published case studies become available through the application's content repository after successful build verification.

---

## Observable Characteristics

The current content publishing workflow exhibits the following characteristics.

- MDX-based authoring.
- Structured frontmatter.
- Reusable content components.
- Repository-managed publication.
- Static site generation.
- Integrated metadata management.

# Quality Assurance

The portfolio repository uses a structured quality assurance process to verify application behavior, content integrity, and documentation consistency before engineering work is recorded within the repository.

Quality assurance activities are performed throughout development and before changes become part of the repository history.

---

## Quality Assurance Overview

The observable quality assurance workflow is shown below.

```text
Engineering Change
         │
         ▼
Implementation Review
         │
         ▼
Static Analysis
         │
         ▼
Production Build
         │
         ▼
Repository Update
```

The quality assurance process verifies repository consistency before engineering work is committed.

---

## Validation Activities

The current quality assurance process includes the following validation activities.

| Validation Activity | Purpose |
|---------------------|---------|
| Type Checking | Verifies consistency across TypeScript source files. |
| Project Linting | Performs static analysis of repository code. |
| Production Build | Confirms the application builds successfully. |
| Content Validation | Verifies published MDX content renders correctly. |
| Metadata Validation | Confirms structured metadata is generated correctly. |
| Documentation Review | Verifies handbook records remain accurate and internally consistent. |

These activities provide observable validation before repository updates are completed.

---

## Content Verification

Published case studies are verified before publication.

Observable verification activities include:

- Frontmatter validation.
- MDX rendering verification.
- Image verification.
- Internal navigation verification.
- Metadata verification.
- Reading experience verification.

Content verification confirms that published case studies integrate correctly with the repository implementation.

---

## Documentation Verification

Engineering documentation is reviewed before acceptance into the Portfolio Engineering Handbook.

Documentation verification includes:

- Evidence review.
- Responsibility review.
- Cross-reference review.
- Revision history verification.
- Handbook consistency review.

These review activities preserve consistency across governed handbook records.

---

## Build Verification

Production verification is performed before repository updates are finalized.

Observable build verification includes:

- Executing project linting.
- Executing the production build.
- Resolving reported issues.
- Confirming successful application compilation.

The production build serves as the final repository verification step.

---

## Observable Characteristics

The current quality assurance process exhibits the following characteristics.

- Repository-based validation.
- Static analysis before commit.
- Production build verification.
- Content publishing verification.
- Documentation governance reviews.
- Repository consistency verification.

# Build and Deployment

The portfolio application is built and deployed using the repository's standard build process.

Build verification confirms that application code, published content, metadata generation, and engineering documentation remain consistent before deployment.

This section documents the observable operational build and deployment procedures supported by the current repository.

---

## Build and Deployment Overview

The observable build and deployment workflow is shown below.

```text
Repository
     │
     ▼
Validation
     │
     ▼
Production Build
     │
     ▼
Deployment
     │
     ▼
Published Application
```

The Developer Guide documents the operational build workflow while subsystem implementation remains documented elsewhere within the Portfolio Engineering Handbook.

---

## Build Process

The current repository uses a production build to verify application integrity.

Observable build activities include:

- Dependency resolution.
- Application compilation.
- Static site generation.
- MDX processing.
- Metadata generation.
- Asset optimization.

Successful completion of the production build confirms that the repository is in a deployable state.

---

## Build Verification

Production builds are performed after repository validation activities have completed.

Observable verification includes:

- Successful project linting.
- Successful application compilation.
- Successful static generation.
- Successful MDX rendering.
- Successful metadata generation.

Build verification provides the final operational confirmation before deployment.

---

## Deployment

The current repository supports deployment of the generated application following successful build verification.

Deployment publishes:

- Application routes.
- Published case studies.
- Static assets.
- Generated metadata.
- Structured data.

Deployment reflects the current repository state at the time of publication.

---

## Operational Responsibilities

Build and deployment activities are responsible for:

- Verifying repository consistency.
- Publishing validated application changes.
- Publishing validated case study content.
- Preserving metadata integrity.
- Maintaining deployment consistency.

Detailed subsystem behavior remains documented within the Architecture and subsystem chapters.

---

## Observable Characteristics

The current build and deployment process exhibits the following characteristics.

- Repository-driven builds.
- Production build verification.
- Static application generation.
- Integrated content publishing.
- Metadata generation during build.
- Repository-derived deployment.

# Maintenance Responsibilities

The portfolio repository is maintained through ongoing operational activities that preserve application quality, published content, engineering documentation, and repository consistency.

Maintenance activities are performed throughout the lifecycle of the project and support the long-term stability of the portfolio.

This section documents the observable maintenance responsibilities associated with the current repository.

---

## Maintenance Overview

The observable maintenance model is shown below.

```text
Repository
     │
     ▼
Application Maintenance
     │
     ├─────────────┐
     ▼             ▼
Content        Documentation
Maintenance    Maintenance
     │             │
     └──────┬──────┘
            ▼
Repository Consistency
```

The Developer Guide documents operational maintenance responsibilities while architectural and governance responsibilities remain documented elsewhere within the Portfolio Engineering Handbook.

---

## Application Maintenance

Application maintenance includes activities associated with preserving the operational behavior of the portfolio.

Observable responsibilities include:

- Maintaining application components.
- Maintaining shared utilities.
- Maintaining application routes.
- Maintaining shared metadata.
- Maintaining static assets.

Application implementation remains documented within **02-Architecture.md** and the subsystem chapters.

---

## Content Maintenance

Published case studies require ongoing maintenance to preserve consistency with the content publishing workflow.

Observable responsibilities include:

- Maintaining MDX content.
- Maintaining frontmatter metadata.
- Maintaining media assets.
- Maintaining internal navigation.
- Maintaining structured metadata.

The operational publishing workflow is documented earlier in this guide, while implementation details remain documented in **04-Case-Study-System.md**.

---

## Documentation Maintenance

Engineering documentation is maintained as part of the Portfolio Engineering Handbook.

Observable responsibilities include:

- Maintaining handbook chapters.
- Maintaining Architecture Decision Records.
- Maintaining release documentation.
- Maintaining engineering history.
- Maintaining handbook cross-references.
- Maintaining revision history.

Documentation maintenance preserves consistency across governed handbook records.

---

## Repository Maintenance

Routine repository maintenance includes:

- Preserving repository organization.
- Maintaining shared dependencies.
- Maintaining build consistency.
- Maintaining documentation consistency.
- Recording engineering history through version control.

Repository history remains the authoritative record of engineering work.

---

## Maintenance Responsibilities

Operational responsibilities are distributed across repository areas.

| Repository Area | Maintenance Responsibility |
|-----------------|----------------------------|
| `app/` | Maintain application routes and page implementation. |
| `components/` | Maintain reusable user interface components. |
| `content/` | Maintain published MDX case studies. |
| `data/` | Maintain shared metadata and configuration. |
| `lib/` | Maintain shared utilities and helper functions. |
| `public/` | Maintain static assets. |
| `styles/` | Maintain global styles and design tokens. |
| `docs/` | Maintain the Portfolio Engineering Handbook and related engineering documentation. |

Each repository area maintains a clearly defined operational responsibility.

---

## Observable Characteristics

The current maintenance model exhibits the following characteristics.

- Repository-based maintenance.
- Separation of implementation and content.
- Governed engineering documentation.
- Integrated quality assurance.
- Repository consistency.
- Long-term maintainability.

# Related Documents

The following Portfolio Engineering Handbook documents interact directly with the Developer Guide.

These documents provide complementary architectural, implementation, governance, publishing, and operational information while maintaining clear separation of responsibilities.

| Document | Relationship |
|----------|--------------|
| 00-Handbook-Standards.md | Defines the documentation standards, governance model, and revision practices followed by the Developer Guide. |
| 02-Architecture.md | Documents the repository architecture and subsystem relationships referenced throughout this guide. |
| 04-Case-Study-System.md | Documents the implementation of the MDX publishing pipeline operated through the content publishing workflow. |
| 05-SEO-System.md | Documents metadata generation, structured data, and search engine optimization maintained during development. |
| 06-Reading-Experience.md | Documents the reading experience subsystem maintained through the operational development workflow. |
| 08-Future-Roadmap.md | Records identified engineering work that may affect future development and maintenance activities. |
| 10-Engineering-Journal.md | Records completed engineering activities associated with repository development and maintenance. |

The following repository records provide the primary operational evidence for this guide.

| Repository Record | Relationship |
|-------------------|--------------|
| Git Repository | Provides the repository structure, implementation, and operational environment described throughout this guide. |
| Git Commit History | Records engineering activities performed during repository maintenance. |
| Project Configuration | Defines project dependencies, build scripts, and development tooling used during local development and deployment. |

The Developer Guide documents operational development procedures without reproducing architectural documentation, subsystem implementation, engineering history, or governance records maintained elsewhere within the Portfolio Engineering Handbook.

# Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-07-24 | Initial implementation of the Developer Guide documenting the development environment, repository structure, development workflow, content publishing workflow, quality assurance, build and deployment procedures, maintenance responsibilities, and handbook relationships. |

---

**Document Status:** Reviewed

This chapter has been reviewed against the current repository implementation, project configuration, and governed handbook records maintained within the Portfolio Engineering Handbook.

The Developer Guide accurately reflects the observable operational procedures used to develop, maintain, validate, build, and publish the portfolio application at the time of writing.

Operational procedures described within this guide are derived from the current repository implementation, development workflow, and project configuration.

Future revisions to this document should occur only when observable development procedures change, including updates to the development environment, repository workflow, content publishing process, quality assurance procedures, build process, deployment workflow, or maintenance responsibilities.