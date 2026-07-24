# Case Study System

> Describes the implemented content subsystem responsible for authoring, discovering, publishing, and rendering case studies.

**Handbook Version:** 1.0.0  
**Document Version:** 1.0  
**Project Version:** 1.5.0  
**Status:** Reviewed  
**Last Updated:** 2026-07-24

---

# Purpose

This document describes the implemented Case Study System used by the portfolio application.

Its purpose is to document how case studies are authored, organized, discovered, transformed, validated, and rendered throughout the application.

The Case Study System forms the primary content subsystem of the portfolio. It defines the lifecycle of a case study from its creation as an MDX document within the repository to its presentation as a statically generated web page with integrated metadata, structured data, and reading enhancements.

This document is intentionally descriptive. It records the observable implementation of the Case Study System at the time of writing and does not duplicate architectural rationale.

Where implementation decisions require explanation, this document references the appropriate Architecture Decision Record (ADR) rather than repeating engineering reasoning.

The scope of this document includes:

- Case study content organization.
- Case study data model.
- Frontmatter structure.
- Content discovery and loading.
- Publishing pipeline.
- MDX rendering integration.
- Metadata integration.
- Validation rules.
- Observable extension points.

The following topics are documented elsewhere within the Portfolio Engineering Handbook:

- Overall application architecture (`02-Architecture.md`).
- Engineering rationale for the content pipeline (ADR-001).
- Rendering strategy (ADR-003).
- SEO subsystem (`05-SEO-System.md`).
- Reading subsystem (`06-Reading-Experience.md`).

# System Overview

The Case Study System is the portfolio's primary content subsystem.

It provides the infrastructure required to author, manage, discover, transform, and render case studies authored as MDX documents within the repository.

The subsystem is built around a repository-managed content model. Case studies are stored as individual MDX files containing structured frontmatter and Markdown-based content. During application execution, these documents are transformed into strongly typed application models that support page generation, metadata generation, structured data, and reusable user interface components.

The Case Study System operates independently of external content management systems and databases. All published content is version-controlled alongside the application source code.

At a high level, the subsystem follows the processing sequence below.

```text
Case Study Author
        │
        ▼
MDX Document
        │
        ▼
Content Discovery
        │
        ▼
Frontmatter Parsing
        │
        ▼
Case Study Model
        │
        ▼
Application Integration
        │
        ▼
Rendered Case Study
```

Each stage performs a distinct responsibility while passing structured information to the next stage.

The subsystem interacts with several other architectural layers documented elsewhere in the Portfolio Engineering Handbook.

| Connected System | Interaction |
|------------------|-------------|
| Application Architecture | Consumes case study models to generate application pages. |
| Rendering Strategy | Renders published case studies as statically generated pages. |
| SEO System | Consumes case study metadata to generate page metadata and structured data. |
| Reading Experience | Uses rendered content and extracted headings to provide document navigation and reading enhancements. |

The observable implementation currently exhibits the following characteristics.

- Repository-managed content.
- MDX-based authoring.
- File-system content discovery.
- Frontmatter-driven metadata.
- Strongly typed case study models.
- Shared content loading libraries.
- Runtime MDX rendering.
- Reusable content consumed by multiple application subsystems.

> 🔗 **Related ADR**  
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related ADR**  
> ADR-003 – Rendering Strategy *(Implemented)*

# Case Study Lifecycle

A case study progresses through a defined lifecycle as it moves from authored content within the repository to a published page rendered by the application.

The current implementation transforms a single MDX document into multiple application artifacts while maintaining a single source of truth for content and metadata.

At a high level, the lifecycle follows the sequence below.

```text
Authoring
    │
    ▼
Content Storage
    │
    ▼
Content Discovery
    │
    ▼
Frontmatter Parsing
    │
    ▼
Case Study Model
    │
    ▼
Static Page Generation
    │
    ▼
Metadata Generation
    │
    ▼
MDX Rendering
    │
    ▼
Published Case Study
```

Each stage has a distinct observable responsibility within the subsystem.

## Lifecycle Stages

### 1. Authoring

A case study begins as an MDX document authored within the repository.

Each document combines:

- Structured frontmatter.
- Markdown content.
- Supported MDX components.

The repository currently stores published case studies within the `content/case-studies/` directory.

---

### 2. Content Storage

Authored case studies become part of the repository's version-controlled content.

Each MDX document acts as the authoritative source for:

- Page content.
- Metadata.
- Technology tags.
- Publishing information.
- Image references.

No external content management system is involved in this stage.

---

### 3. Content Discovery

Shared library functions discover available case studies from the repository.

The implementation reads MDX files from disk before parsing document metadata and content.

Only published case studies continue through the remainder of the processing pipeline.

> 🔗 **Related ADR**  
> ADR-001 – Content Pipeline *(Implemented)*

---

### 4. Frontmatter Parsing

Each discovered document is parsed into structured metadata and document content.

Frontmatter is transformed into strongly typed application data while the MDX body remains available for later rendering.

This stage establishes the structured information consumed throughout the application.

---

### 5. Case Study Model

Parsed content is transformed into shared application models.

These models become the common representation consumed by:

- Application routes.
- Metadata generation.
- Structured data generation.
- Listing pages.
- Rendering components.

The application uses shared models rather than repeatedly parsing MDX files within individual routes.

---

### 6. Static Page Generation

Published case studies are supplied to the application's routing layer.

Static routes are generated for each published case study during the build process.

Each generated route represents an individual case study page.

> 🔗 **Related ADR**  
> ADR-003 – Rendering Strategy *(Implemented)*

---

### 7. Metadata Generation

Structured metadata derived from frontmatter is reused across multiple application systems.

Observable consumers include:

- HTML metadata.
- Open Graph metadata.
- Twitter Card metadata.
- JSON-LD Article schema.
- XML sitemap.

Metadata remains synchronized because all consumers reference the same underlying content model.

---

### 8. MDX Rendering

The MDX document is rendered through the shared rendering pipeline.

Rendering combines:

- Markdown content.
- Custom MDX components.
- Generated heading identifiers.
- Reading enhancements.

This stage produces the HTML content presented to the reader.

---

### 9. Published Case Study

The completed page becomes available through the application's static routing system.

The published case study combines:

- Rendered MDX content.
- Structured metadata.
- Reading enhancements.
- Shared application layout.
- Search engine metadata.

The published page represents the final observable output of the Case Study System.

## Lifecycle Characteristics

The current lifecycle exhibits the following characteristics.

- Repository-managed authoring.
- Version-controlled content.
- Shared content models.
- Single-source metadata.
- Static page generation.
- Runtime MDX rendering.
- Reusable content consumed by multiple application subsystems.
- Deterministic processing from authored document to published page.

> 🔗 **Related ADR**  
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related ADR**  
> ADR-003 – Rendering Strategy *(Implemented)*

# Content Organization

The Case Study System stores published content as individual MDX documents within the repository.

Each case study exists as a single source document containing both structured metadata and the document body. The repository does not separate metadata, presentation, and content into independent files.

The current implementation stores published case studies in the following directory.

```text
content/
└── case-studies/
    ├── clinical-workflow-signal-audit.mdx
    ├── kenya-health-dashboard.mdx
    └── remote-healthai-role-matcher.mdx
```

Each MDX document represents a complete case study and acts as the authoritative source for both content and metadata.

## Document Structure

The three published case studies currently share a consistent core section structure.

```text
Frontmatter
──────────────
Title
Summary
Category
Date
Year
Status
Reading Time
Tags
Featured Image
Open Graph Image
...

──────────────

MDX Content
──────────────
Executive Summary
Context
Problem
Objectives
Approach
System Design
Technical Implementation
Results
Lessons Learned
What I'd Do Next
```

The frontmatter defines structured metadata consumed throughout the application.

The MDX body contains the narrative content rendered by the application.

One published case study (`remote-healthai-role-matcher.mdx`) includes an additional `Scope & Limitations` section following `Executive Summary`. This variation is an observed characteristic of the current content and is not enforced by the application at render time.

This section structure corresponds to the structure defined in `case-study-publishing-specification.md`; the specification is the authoritative source for the required section order and naming.

## Repository Ownership

Case study documents are version-controlled alongside the application source code.

Observable characteristics include:

- Content resides within the application repository.
- Each case study is represented by a single MDX file.
- Metadata and content remain co-located.
- Published content does not depend on an external CMS.
- Published content does not depend on a database.

This organization establishes the repository as the authoritative source for published case studies.

## Content Independence

Each case study is self-contained.

A document contains all information required for publication, including:

- Structured metadata.
- Narrative content.
- Technology tags.
- Image references.
- Publication state.

Case studies do not reference one another for required metadata or content.

This allows each document to be processed independently by the content pipeline.

## Observable Characteristics

The current content organization exhibits the following characteristics.

- Repository-managed content.
- One MDX document per case study.
- Co-located metadata and content.
- Version-controlled authoring.
- Independent document processing.
- Self-contained publication units.

> 🔗 **Related ADR**  
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related Documents**
> case-study-publishing-specification.md

# Case Study Model

The Case Study System transforms each authored MDX document into a structured application model before it is consumed by application routes or presentation components.

This model provides a consistent representation of case study content throughout the application and serves as the interface between the content pipeline and the rest of the system.

## Model Transformation

The observable transformation follows the sequence below.

```text
MDX Document
      │
      ▼
Frontmatter
      │
      ▼
Content Parsing
      │
      ▼
Case Study Model
      │
      ▼
Application Consumers
```

Rather than exposing raw MDX files to the application, the content pipeline transforms authored documents into structured objects shared across multiple subsystems.

> 🔗 **Related ADR**  
> ADR-001 – Content Pipeline *(Implemented)*

## Model Components

The current implementation represents a case study through two complementary structures.

| Model | Responsibility |
|-------|----------------|
| Frontmatter Model | Represents structured metadata extracted from the MDX document. |
| Case Study Model | Combines structured metadata with rendered content and supporting application data. |

The frontmatter model provides the metadata required for page generation and presentation, while the case study model provides the complete representation consumed by application routes.

## Frontmatter Representation

Observable frontmatter currently consumed throughout the application includes:

- Title
- Summary
- Category
- Date
- Year
- Status
- Reading Time
- Tags
- Featured Status
- Featured Image
- Open Graph Image
- Publication Status
- Slug

This metadata is consumed by multiple application subsystems rather than being duplicated across components.

## Case Study Representation

After parsing, each case study becomes a structured application object.

The observable model includes:

- Structured frontmatter.
- MDX source content.
- Computed application data.
- Route information.
- Rendering metadata.

Application routes consume this shared representation instead of interacting directly with repository files.

## Shared Consumers

The structured case study model is reused throughout the application.

Observable consumers include:

- Work listing page.
- Dynamic case study pages.
- Metadata generation.
- Structured data generation.
- MDX rendering.
- Reading enhancements.

A single model supplies data to multiple application layers while maintaining one authoritative representation of the case study.

## Compatibility Layer

The current implementation includes a compatibility function (`getCaseStudyBySlug`) alongside newer published-case-study retrieval functions.

This compatibility layer remains part of the observable implementation and supports existing application consumers during an incremental migration.

The compatibility layer does not alter the underlying case study model.

## Observable Characteristics

The current case study model exhibits the following characteristics.

- Strongly typed application models.
- Shared metadata representation.
- Separation between authored content and application objects.
- Reusable content consumed by multiple application layers.
- Compatibility support for existing consumers.
- Single authoritative representation after parsing.

> 🔗 **Related ADR**  
> ADR-001 – Content Pipeline *(Implemented)*

# Content Discovery

The Case Study System discovers published case studies through a shared content loading layer implemented within the `lib/` directory.

Rather than allowing individual application routes to read repository files directly, the subsystem centralizes content discovery and loading through reusable library functions.

This establishes a single entry point for accessing published case study content.

## Discovery Flow

The observable discovery process follows the sequence below.

```text
Repository
      │
      ▼
content/case-studies/
      │
      ▼
File Discovery
      │
      ▼
MDX Loading
      │
      ▼
Frontmatter Parsing
      │
      ▼
Case Study Model
```

Each stage transforms repository content into structured application data while maintaining the authored MDX document as the system's source of truth.

> 🔗 **Related ADR**  
> ADR-001 – Content Pipeline *(Implemented)*

---

## Repository Discovery

Published case studies are discovered from the repository's content directory.

The observable implementation reads MDX documents stored within:

```text
content/
└── case-studies/
```

Each document is processed independently.

The repository does not maintain a separate manifest or index of published case studies.

Instead, the content loading layer derives the available content directly from the repository.

---

## Shared Content Loading

Content loading responsibilities are centralized within the shared library layer.

Observable responsibilities include:

- Discovering available case study documents.
- Reading MDX files from disk.
- Parsing frontmatter.
- Returning structured application models.

Application routes consume these shared functions rather than implementing repository access directly.

This centralization provides a consistent interface for all consumers of published case studies.

---

## Published Content Filtering

The current implementation distinguishes between authored content and published content.

Only case studies marked as published continue through the remainder of the processing pipeline.

This filtering occurs within the shared content loading layer before data is returned to application consumers.

As a result, downstream application components operate on published case study models rather than the complete repository contents.

---

## Content Consumers

The shared content discovery layer supplies structured data to multiple application subsystems.

Observable consumers include:

- Work listing page.
- Dynamic case study routes.
- Metadata generation.
- Structured data generation.
- Reading enhancements.

Each consumer receives the same structured representation produced by the shared content pipeline.

---

## Compatibility Layer

The current implementation includes a compatibility function (`getCaseStudyBySlug`) alongside newer published-case-study retrieval functions.

This compatibility layer remains part of the observable implementation.

Existing application consumers continue to access case studies through this compatibility interface while newer functionality uses the published-case-study retrieval functions.

The compatibility layer does not modify repository content or alter the underlying discovery process.

---

## Observable Characteristics

The current content discovery implementation exhibits the following characteristics.

- Repository-based discovery.
- File-system content loading.
- Centralized content access.
- Shared parsing pipeline.
- Published-content filtering.
- Reusable application models.
- Compatibility support for existing consumers.
- Single discovery interface shared across multiple application layers.

> 🔗 **Related ADR**  
> ADR-001 – Content Pipeline *(Implemented)*

# Publishing Pipeline

The Publishing Pipeline transforms authored case study documents into publishable application content.

It coordinates content discovery, metadata extraction, model transformation, and publication filtering before passing structured case study models to the application layer.

The pipeline operates entirely within the repository and does not depend on external publishing services or content management systems.

## Publishing Flow

The observable publishing pipeline follows the sequence below.

```text
MDX Document
      │
      ▼
Repository Discovery
      │
      ▼
Content Loading
      │
      ▼
Frontmatter Parsing
      │
      ▼
Publication Validation
      │
      ▼
Published Case Study Model
      │
      ▼
Application Consumers
```

Each stage contributes to preparing authored content for use throughout the application.

> 🔗 **Related ADR**  
> ADR-001 – Content Pipeline *(Implemented)*

---

## Stage 1 – Repository Discovery

The publishing pipeline begins by discovering available case study documents within the repository.

The current implementation processes each MDX document independently.

No external publishing manifest or content registry is maintained.

---

## Stage 2 – Content Loading

Discovered documents are loaded through the shared content loading layer.

Observable responsibilities include:

- Reading MDX documents.
- Separating frontmatter from document content.
- Preparing content for parsing.

Content loading is centralized and shared across all application consumers.

---

## Stage 3 – Frontmatter Parsing

Frontmatter is parsed into structured metadata.

The parsed metadata forms the foundation for:

- Application routing.
- Page metadata.
- Structured data generation.
- Content presentation.
- Publication filtering.

The MDX body remains available for later rendering.

---

## Stage 4 – Publication Validation

Before a case study becomes available to the application, the publishing pipeline evaluates its publication state.

Only published case studies continue through the remainder of the pipeline.

Unpublished content is not exposed to application routes or downstream consumers.

Publication validation occurs within the shared content loading layer.

---

## Stage 5 – Model Transformation

Validated content is transformed into the shared case study model.

This model becomes the common representation consumed by the application.

Observable consumers include:

- Work listing pages.
- Dynamic case study pages.
- Metadata generation.
- Structured data generation.
- Reading enhancements.

The transformation stage establishes a single authoritative application representation for each published case study.

---

## Pipeline Characteristics

The current publishing pipeline exhibits the following characteristics.

- Repository-managed publishing.
- Centralized content loading.
- Frontmatter-driven publication.
- Shared application models.
- Published-content filtering.
- Single-source metadata.
- Reusable content consumed by multiple application subsystems.

The publishing pipeline concludes once a published case study model has been produced.

Subsequent rendering and presentation responsibilities are documented separately within the Rendering Integration section.

> 🔗 **Related ADR**  
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related Documents**  
> case-study-publishing-specification.md

# Rendering Integration

The Rendering Integration layer consumes published case study models produced by the publishing pipeline and integrates them into the application's rendering architecture.

Rather than rendering repository content directly, the application renders structured case study models through shared application routes and reusable presentation components.

This separation allows the publishing pipeline and the rendering system to evolve independently while sharing a common application model.

## Rendering Flow

The observable rendering integration follows the sequence below.

```text
Published Case Study Model
            │
            ▼
Application Route
            │
            ▼
Metadata Generation
            │
            ▼
MDX Rendering
            │
            ▼
Reading Components
            │
            ▼
Shared Layout
            │
            ▼
Published Page
```

Each stage consumes the structured case study model produced by the publishing pipeline.

> 🔗 **Related ADR**  
> ADR-003 – Rendering Strategy *(Implemented)*

---

## Route Integration

Published case study models are consumed by the application's dynamic case study route.

The observable implementation retrieves a structured case study model before rendering begins.

Application routes consume shared content-loading functions rather than accessing repository content directly.

This separation allows routing and rendering responsibilities to remain independent from content discovery.

---

## MDX Rendering

The document body is rendered through the shared MDX rendering component.

The rendering process combines:

- Markdown content.
- Supported MDX components.
- Generated heading identifiers.
- Shared presentation components.

Rendering occurs after the case study has been transformed into the application's shared content model.

---

## Shared Layout Integration

Rendered case studies are presented within the shared application layout.

Observable layout elements include:

- Navigation.
- Page header.
- Featured image.
- Project overview.
- Technology tags.
- Reading enhancements.
- Footer.

The layout provides a consistent presentation structure while allowing each case study to supply its own content and metadata.

---

## Reading Integration

The rendering layer integrates the reading subsystem during page generation.

Observable reading features include:

- Reading progress indicator.
- Table of contents.
- Heading identifiers.
- Smooth in-page navigation.

These features consume the rendered case study content without modifying the authored MDX document.

Reading subsystem behavior is documented separately in `06-Reading-Experience.md`.

---

## Rendering Consumers

The rendered case study page combines information from multiple parts of the application.

Observable rendering inputs include:

- Structured case study model.
- MDX document content.
- Metadata.
- Structured data.
- Shared UI components.
- Reading components.

Together these inputs produce the final user-facing representation of a published case study.

---

## Observable Characteristics

The current rendering integration exhibits the following characteristics.

- Separation between content preparation and rendering.
- Shared application routes.
- Centralized MDX rendering.
- Shared presentation components.
- Integrated reading enhancements.
- Consistent page layout.
- Reusable rendering pipeline.

> 🔗 **Related ADR**  
> ADR-003 – Rendering Strategy *(Implemented)*

> 🔗 **Related Documents**  
> 02-Architecture.md  
> 06-Reading-Experience.md

# Metadata Integration

The Case Study System supplies structured metadata consumed by multiple application subsystems.

Rather than generating metadata independently within each application route or component, the system derives metadata from the case study model established during the publishing pipeline.

This approach maintains a single authoritative source for published case study metadata.

## Metadata Flow

The observable metadata flow follows the sequence below.

```text
MDX Frontmatter
        │
        ▼
Frontmatter Model
        │
        ▼
Case Study Model
        │
        ├──────────────┬──────────────┬──────────────┐
        ▼              ▼              ▼              ▼
Metadata API      Open Graph     JSON-LD      XML Sitemap
```

Each consumer derives metadata from the same structured case study model.

> 🔗 **Related ADR**  
> ADR-001 – Content Pipeline *(Implemented)*

---

## Frontmatter as the Metadata Source

Metadata originates within the structured frontmatter of each case study document.

Observable metadata consumed by the application includes:

- Title
- Summary
- Date
- Category
- Status
- Reading Time
- Tags
- Featured Image
- Open Graph Image
- Slug

The publishing pipeline transforms this information into the shared case study model before it is consumed elsewhere in the application.

---

## Application Metadata

The application generates page metadata from the structured case study model.

Observable metadata consumers include:

- Page title.
- Page description.
- Open Graph metadata.
- Twitter Card metadata.

Application routes consume shared metadata rather than maintaining independent metadata definitions.

---

## Structured Data

The Case Study System supplies metadata used to generate structured data.

Observable structured data includes:

- Article schema.

Article schema generation derives its values from the shared case study model rather than directly from repository content.

Additional structured data generated elsewhere in the application is documented in `05-SEO-System.md`.

---

## Search Engine Metadata

Case study metadata also contributes to search engine support.

Observable consumers include:

- XML sitemap.
- Open Graph images.
- Featured page images.

The current implementation reuses a single image for both featured content and Open Graph previews.

This reuse is an observable characteristic of the current implementation.

---

## Shared Metadata Model

Multiple application subsystems consume the same metadata representation.

Observable consumers include:

- Application routing.
- SEO metadata generation.
- Structured data generation.
- Case study presentation.
- Work listing pages.

Maintaining a shared metadata model reduces duplication across the application while preserving a single authoritative representation of case study information.

---

## Observable Characteristics

The current metadata integration exhibits the following characteristics.

- Frontmatter-driven metadata.
- Shared metadata model.
- Multiple metadata consumers.
- Single authoritative metadata source.
- Reuse of metadata across application subsystems.
- Shared Open Graph and featured image assets.

> 🔗 **Related ADR**  
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related Documents**  
> 02-Architecture.md  
> 05-SEO-System.md

# Publishing Specification

The Case Study System is supported by a dedicated publishing specification that defines the authoring and publication requirements for case study content.

The publishing specification is maintained separately from this document to prevent duplication between subsystem documentation and operational publishing guidance.

This document describes how the publishing subsystem operates.

The publishing specification describes how content should be authored for that subsystem.

## Relationship to the Publishing Pipeline

The publishing specification provides the operational requirements followed during case study authoring before content enters the publishing pipeline.

These requirements exist before content discovery begins and help ensure that authored documents conform to the expectations of the Case Study System.

At a high level, the relationship is shown below.

```text
Author
      │
      ▼
Publishing Specification
      │
      ▼
MDX Document
      │
      ▼
Case Study System
      │
      ▼
Published Case Study
```

The publishing specification therefore operates as an input to the Case Study System rather than a component of the runtime implementation.

---

## Scope of the Publishing Specification

The current publishing specification documents operational guidance including:

- Required frontmatter.
- Case study document structure.
- Authoring workflow.
- Publication checklist.
- Content quality expectations.

These requirements guide content creation but are implemented outside the application's runtime.

---

## Runtime Responsibilities

Once an authored case study enters the repository, the Case Study System becomes responsible for:

- Content discovery.
- Frontmatter parsing.
- Publication filtering.
- Case study model generation.
- Metadata integration.
- Rendering integration.

The publishing specification is no longer involved after authored content has entered the runtime pipeline.

---

## Separation of Responsibilities

The publishing specification and the Case Study System serve different responsibilities.

| Publishing Specification | Case Study System |
|--------------------------|-------------------|
| Defines how content should be authored. | Describes how authored content is processed. |
| Guides authors. | Documents runtime behavior. |
| Operational guidance. | System documentation. |
| Author-facing. | Developer-facing. |

Maintaining this separation prevents duplication between authoring guidance and subsystem documentation.

---

## Observable Characteristics

The relationship between the publishing specification and the Case Study System exhibits the following characteristics.

- Separate operational and runtime documentation.
- Shared case study content model.
- Publishing guidance maintained independently from implementation documentation.
- Clear boundary between authoring and runtime processing.
- Single publishing specification referenced by the subsystem.

> 🔗 **Related ADR**
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related Documents**
> case-study-publishing-specification.md

# Validation Rules

The Case Study System applies a small number of observable validation rules before authored content becomes available to the application.

These rules are implemented through the content loading and publishing pipeline and determine whether a case study participates in the published application.

This document records only validation behavior observed in the current implementation.

## Validation Flow

The observable validation sequence is shown below.

```text
MDX Document
      │
      ▼
Content Discovery
      │
      ▼
Frontmatter Parsing
      │
      ▼
Publication Validation
      │
      ▼
Published Case Study Model
```

Validation occurs before a case study is supplied to downstream application consumers.

---

## Publication Status

The primary observable validation rule is publication status.

Only case studies identified as published continue through the publishing pipeline.

Content that does not satisfy the publication criteria is excluded from:

- Work listing pages.
- Static route generation.
- Metadata generation.
- Rendering.
- Search engine metadata.

This validation occurs before published case study models are returned to the application.

---

## Frontmatter Requirements

The publishing pipeline expects authored documents to contain structured frontmatter.

Observable frontmatter is consumed throughout the application for:

- Routing.
- Metadata.
- Structured data.
- Case study presentation.

The Case Study System assumes that authored documents conform to the publishing specification.

Frontmatter authoring requirements are documented separately in `case-study-publishing-specification.md`.

---

## Model Validation

After parsing, case study data is represented through shared TypeScript models.

Application consumers operate on these structured models rather than directly on raw repository content.

This establishes a consistent application representation before rendering begins.

---

## Consumer Protection

Application routes and presentation components consume only validated published case study models.

As a result:

- Repository access remains centralized.
- Publication filtering occurs before rendering.
- Downstream consumers receive a consistent application model.

Individual application components do not perform independent publication validation.

---

## Observable Characteristics

The current validation implementation exhibits the following characteristics.

- Publication-state validation.
- Frontmatter-dependent processing.
- Shared application models.
- Centralized validation.
- Published-content filtering before rendering.

No additional runtime validation mechanisms have been observed within the current implementation.

> 🔗 **Related ADR**
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related Documents**
> case-study-publishing-specification.md

# Extension Points

The Case Study System exposes several observable extension points that allow new content and functionality to be introduced without changing the overall subsystem architecture.

These extension points are part of the current implementation and represent existing integration mechanisms rather than planned enhancements.

## Content Extension

The subsystem discovers case studies from the repository.

Additional published content can be introduced by adding new MDX documents that conform to the established publishing specification.

Observable extension points include:

- Additional case study documents.
- Additional technology tags.
- Additional categories.
- Additional Open Graph assets.

New content participates in the existing publishing pipeline without requiring changes to application routes.

---

## Frontmatter Extension

The structured frontmatter model provides the primary metadata interface between authored content and the application.

The model may be extended through additional metadata fields when required by future application consumers.

Observable extension points include:

- Additional metadata fields.
- Additional publication metadata.
- Additional presentation metadata.

Extensions to the frontmatter model should remain consistent with the shared case study representation documented in this chapter.

---

## MDX Extension

The Case Study System renders authored content through a shared MDX rendering layer.

Additional presentation capabilities can be introduced by extending the existing MDX component mapping.

Observable extension points include:

- Additional MDX components.
- Additional reusable content blocks.
- Additional document presentation components.

These extensions do not require changes to authored Markdown syntax beyond the use of supported MDX components.

> 🔗 **Related ADR**  
> ADR-003 – Rendering Strategy *(Implemented)*

---

## Content Processing Extension

Content discovery and model generation are centralized within the shared library layer.

Observable extension points include:

- Additional content transformation steps.
- Additional model properties.
- Additional shared content-loading functions.

Centralizing these responsibilities preserves a single content access layer for application consumers.

---

## Metadata Extension

The Case Study System supplies metadata to multiple application subsystems.

Observable extension points include:

- Additional structured metadata.
- Additional metadata consumers.
- Additional metadata transformations.

Metadata extensions continue to derive values from the shared case study model.

---

## Publishing Extension

The publishing workflow may be extended through changes to the publishing specification.

Observable extension points include:

- Additional authoring requirements.
- Additional publication guidance.
- Additional content conventions.

The publishing specification remains the authoritative operational guide for authored case studies.

---

## Observable Characteristics

The current extension model exhibits the following characteristics.

- Repository-managed extensibility.
- Shared application models.
- Centralized content processing.
- Reusable MDX rendering.
- Shared metadata model.
- Independent case study documents.
- Single publishing workflow.
- Extension through existing subsystem interfaces rather than architectural restructuring.

> 🔗 **Related ADR**  
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related ADR**  
> ADR-003 – Rendering Strategy *(Implemented)*

> 🔗 **Related Documents**  
> case-study-publishing-specification.md

# Related ADRs

The following Architecture Decision Records provide implementation rationale for the Case Study System described in this document.

| ADR | Relationship |
|-----|--------------|
| ADR-001 – Content Pipeline *(Implemented)* | Documents the engineering rationale behind the repository-managed content pipeline, content discovery, and shared content loading architecture described throughout this chapter. |
| ADR-003 – Rendering Strategy *(Implemented)* | Documents the engineering rationale for the rendering pipeline, MDX integration, and static page generation consumed by the Case Study System. |

This chapter intentionally references these ADRs rather than duplicating architectural rationale, in accordance with the Cross-Reference Policy defined in **00-Handbook-Standards.md**.

# Related Documents

The following handbook documents provide additional information related to the Case Study System.

| Document | Relationship |
|----------|--------------|
| 00-Handbook-Standards.md | Defines the documentation standards, governance model, and cross-reference policy followed by this chapter. |
| 02-Architecture.md | Describes the overall application architecture within which the Case Study System operates. |
| 03-Decision-Log.md | Index of Architecture Decision Records referenced throughout this chapter. |
| 05-SEO-System.md | Documents how metadata supplied by the Case Study System is consumed by the SEO subsystem. |
| 06-Reading-Experience.md | Documents how rendered case study content integrates with the reading subsystem. |
| case-study-publishing-specification.md | Defines the operational publishing requirements and authoring workflow for case study content. |

These documents collectively describe the architectural context, supporting subsystems, and operational guidance associated with the Case Study System.

# Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-07-24 | Initial creation of the Case Study System chapter describing the portfolio's repository-managed content subsystem, publishing pipeline, rendering integration, metadata integration, and extension model. |
| 1.0 (reviewed) | 2026-07-24 | Added standard document header block. Added `Featured Status` to the Case Study Model's Frontmatter Representation list. Corrected the Document Structure section to reflect the actual observed heading sequence across the three published case studies, and noted the one document's additional `Scope & Limitations` section. |

---

**Document Status:** Reviewed

This chapter has been reviewed against the current repository implementation and accurately reflects the observable Case Study System at the time of writing.

Engineering rationale remains documented within the corresponding Architecture Decision Records (ADRs) in accordance with the Portfolio Engineering Handbook Cross-Reference Policy.

Future revisions to this document should occur only when observable implementation changes affect the Case Study System or its documented interfaces.
