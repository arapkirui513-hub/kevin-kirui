# SEO System

> Describes the implemented Search Engine Optimization (SEO) subsystem responsible for transforming and publishing application metadata for search engines and social platforms.

**Handbook Version:** 1.0.0
**Document Version:** 1.0.0
**Project Version:** 1.6.0
**Status:** Reviewed
**Last Updated:** 2026-07-24

---

# Purpose

This document describes the implemented Search Engine Optimization (SEO) System used by the portfolio application.

Its purpose is to document how site-level metadata and case study metadata are transformed and published as search engine–consumable outputs, including page metadata, structured data, Open Graph metadata, social sharing metadata, and search engine discovery resources.

The SEO System forms a supporting application subsystem that consumes metadata from two primary sources:

- Site-level metadata defined within the shared site configuration.
- Case study metadata produced by the Case Study System.

These metadata sources are transformed and published through shared application components using the Next.js Metadata API, Schema.org JSON-LD, and Metadata Routes.

This document is intentionally descriptive. It records the observable implementation of the SEO System at the time of writing and does not duplicate architectural rationale.

Where implementation decisions require explanation, this document references the appropriate Architecture Decision Record (ADR) rather than repeating engineering reasoning.

The scope of this document includes:

- Metadata sources.
- Metadata transformation.
- Metadata publication.
- Structured data.
- Open Graph integration.
- Metadata Routes.
- Search engine outputs.
- Validation rules.
- Observable extension points.

The following topics are documented elsewhere within the Portfolio Engineering Handbook:

- Overall application architecture (`02-Architecture.md`).
- Case Study metadata production (`04-Case-Study-System.md`).
- Rendering strategy (ADR-003).
- Content pipeline rationale (ADR-001).

# System Overview

The SEO System is responsible for transforming and publishing metadata that enables search engines, social platforms, and other consumers to understand the application's content.

The subsystem integrates metadata from two independent sources.

- Site-level metadata defined within the shared site configuration.
- Case study metadata produced by the Case Study System.

These metadata sources remain independent until they enter the SEO subsystem, where they are transformed and published through shared metadata interfaces.

## SEO Processing Overview

The observable SEO processing flow is shown below.

```text
                 Site Configuration
                   (data/site.ts)
                         │
                         │
                         ▼
                 Site-level Metadata
                         │
                         │
                         ├──────────────────────┐
                         │                      │
                         ▼                      │
          Metadata Transformation              │
       (Person / Website Schema)               │
                         │                      │
                         │                      │
                         ▼                      │
                   Global Publication           │
                  (app/layout.tsx)             │
                                                │
                                                │
          Case Study System                     │
                 │                              │
                 ▼                              │
         Case Study Metadata                    │
                 │                              │
                 ▼                              │
        Metadata Transformation                 │
          (Article Schema)                      │
                 │                              │
                 ▼                              │
          Page Publication                      │
      (app/work/[slug]/page.tsx)                │
                 │                              │
                 └──────────────┬───────────────┘
                                ▼
                   Search Engine Outputs
```

The current implementation publishes metadata through three complementary mechanisms.

| Publication Mechanism | Observable Outputs |
|-----------------------|--------------------|
| Next.js Metadata API | Page metadata, Open Graph metadata, Twitter metadata |
| Schema.org JSON-LD | Person, WebSite, and Article structured data |
| Metadata Routes | `robots.txt` and `sitemap.xml` |

Each publication mechanism consumes shared metadata while exposing different outputs to search engines and other metadata consumers.

## Subsystem Responsibilities

The SEO System is responsible for:

- Consuming site-level metadata.
- Consuming case study metadata.
- Transforming application metadata into structured data.
- Publishing metadata through the Next.js Metadata API.
- Publishing Schema.org JSON-LD.
- Publishing search engine discovery resources.

The SEO System is not responsible for:

- Authoring metadata.
- Managing case study content.
- Rendering MDX content.
- Determining publication status.
- Defining application routing.

These responsibilities are documented in other chapters of the Portfolio Engineering Handbook.

> 🔗 **Related ADR**
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related ADR**
> ADR-003 – Rendering Strategy *(Implemented)*

# SEO Processing Lifecycle

The SEO System processes metadata through a sequence of transformation and publication stages.

The subsystem begins with metadata produced by the application and concludes with search engine–consumable outputs published through multiple interfaces.

Each stage performs a distinct responsibility while contributing to the overall SEO pipeline.

## Processing Lifecycle

The observable SEO processing lifecycle is shown below.

```text
Site Metadata
        │
        ├──────────────┐
        │              │
        ▼              │
Case Study Metadata    │
        │              │
        └──────┬───────┘
               ▼
Metadata Transformation
               │
               ▼
Metadata Publication
               │
        ┌──────┼─────────────┐
        ▼      ▼             ▼
Metadata  JSON-LD     Metadata Routes
 API
        │      │             │
        └──────┴─────────────┘
               ▼
Search Engine Outputs
```

The lifecycle separates metadata production from metadata publication.

Metadata is first collected from application sources, then transformed into reusable representations before being published through the appropriate search engine interfaces.

## Lifecycle Stages

The current implementation consists of the following observable stages.

| Stage | Responsibility |
|--------|----------------|
| Metadata Sources | Provides site-level and case study metadata. |
| Metadata Transformation | Converts application metadata into structured representations used by the SEO subsystem. |
| Metadata Publication | Publishes metadata through the Next.js Metadata API. |
| Structured Data Publication | Publishes Schema.org JSON-LD for supported content types. |
| Metadata Routes | Publishes search engine discovery resources. |
| Search Engine Outputs | Exposes published metadata for search engines and other metadata consumers. |

Each stage consumes the outputs of the preceding stage while maintaining a clear separation of responsibilities.

## Publication Scope

The SEO System publishes metadata at two different application scopes.

### Global Publication

Global publication applies metadata shared by every page in the application.

Observable outputs include:

- Site metadata.
- Person structured data.
- Website structured data.

### Page Publication

Page publication extends the global metadata for individual case study pages.

Observable outputs include:

- Page metadata.
- Article structured data.
- Page-specific Open Graph metadata.
- Page-specific Twitter metadata.

This separation allows the application to maintain consistent site-wide metadata while publishing page-specific information where required.

## Observable Characteristics

The current SEO processing lifecycle exhibits the following characteristics.

- Two independent metadata sources.
- Centralized metadata transformation.
- Separate global and page-level publication.
- Multiple publication mechanisms.
- Shared metadata consumed across the application.
- Search engine discovery resources published independently from page metadata.

> 🔗 **Related ADR**
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related ADR**
> ADR-003 – Rendering Strategy *(Implemented)*

# Metadata Sources

The SEO System consumes metadata from two independent application sources.

The first source provides metadata shared across the entire application, while the second provides metadata specific to individual case study pages.

These metadata sources remain independent until they enter the SEO subsystem for transformation and publication.

## Metadata Source Overview

The observable metadata sources are shown below.

```text
                 Metadata Sources
                        │
        ┌───────────────┴───────────────┐
        ▼                               ▼
 Site Configuration            Case Study System
   (data/site.ts)          (Case Study Frontmatter)
        │                               │
        ▼                               ▼
 Site-level Metadata          Page-specific Metadata
        └───────────────┬───────────────┘
                        ▼
                  SEO System
```

The current implementation derives all SEO metadata from these two sources.

No additional metadata repositories, databases, or external content services have been observed.

---

## Site-level Metadata

Site-level metadata is defined within the shared site configuration.

The observable implementation centralizes this metadata in:

```text
data/site.ts
```

Observable metadata supplied by the site configuration includes:

- Site name.
- Site description.
- Canonical site URL.
- Author information.
- Social profile links.
- Default Open Graph image.
- Site-wide keywords.

This metadata is shared across the application and provides the foundation for global metadata and structured data publication.

---

## Case Study Metadata

Page-specific metadata is supplied by the Case Study System.

The observable implementation derives this metadata from each published case study's frontmatter.

Observable metadata includes:

- Title.
- Summary.
- Date.
- Category.
- Status.
- Reading time.
- Tags.
- Featured image.
- Open Graph image.
- Slug.

This metadata is consumed when publishing SEO outputs for individual case study pages.

Metadata production for case studies is documented separately in **04-Case-Study-System.md**.

---

## Metadata Independence

The two metadata sources remain independent within the application.

Site-level metadata provides information common to every page.

Case study metadata provides information unique to an individual published case study.

The SEO subsystem combines these sources only where required during metadata transformation and publication.

This separation allows changes to site-wide metadata and page-specific metadata without altering the underlying metadata model.

---

## Observable Characteristics

The current metadata source model exhibits the following characteristics.

- Two independent metadata sources.
- Centralized site configuration.
- Frontmatter-driven page metadata.
- Shared metadata consumed across multiple application subsystems.
- Separation between global and page-specific metadata.
- Single authoritative source for each metadata domain.

> 🔗 **Related ADR**
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related Documents**
> 04-Case-Study-System.md

# Metadata Transformation

The SEO System transforms application metadata into structured representations before publication.

Rather than generating metadata independently, the transformation layer consumes metadata supplied by the site's shared configuration and the Case Study System, preparing it for publication through the application's SEO interfaces.

The observable implementation centralizes these transformations within a shared library layer.

## Transformation Overview

The observable metadata transformation process is shown below.

```text
           Metadata Sources
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
 Site Configuration   Case Study Metadata
                  │
                  ▼
      Metadata Transformation
      (lib/structured-data.ts)
                  │
        ┌─────────┼─────────┐
        ▼         ▼         ▼
     Person    WebSite    Article
      Schema    Schema     Schema
```

Each transformation produces a structured representation consumed later by the publication layer.

The transformation layer does not publish metadata directly.

---

## Transformation Layer

The observable implementation centralizes metadata transformation within:

```text
lib/structured-data.ts
```

This layer converts application metadata into Schema.org-compatible objects while remaining independent from page rendering and metadata publication.

The current implementation exports four transformation functions.

| Transformation | Metadata Source | Observed Consumer |
|---------------|-----------------|-------------------|
| Person | Site configuration | Global publication |
| WebSite | Site configuration | Global publication |
| Article | Site configuration + Case Study metadata | Page publication |
| BreadcrumbList | Site configuration + Route information | No observed consumer |

The `BreadcrumbList` transformation exists within the implementation but is not currently consumed elsewhere in the application.

---

## Metadata Composition

The transformation layer combines metadata from multiple application domains where required.

Observable composition includes:

- Site identity.
- Author information.
- Canonical URLs.
- Case study metadata.
- Publication dates.
- Open Graph image paths.
- Technology tags.

The `Article` transformation demonstrates this composition by combining site-level metadata with case study-specific metadata before producing a structured representation.

---

## Observable Transformations

The current implementation performs several observable transformations.

These include:

- Constructing canonical URLs.
- Converting relative image paths into absolute URLs for structured data.
- Combining metadata from multiple application sources.
- Producing Schema.org-compatible object structures.

These transformations prepare metadata for publication without modifying the underlying application data.

---

## Separation of Responsibilities

The transformation layer performs a distinct responsibility within the SEO subsystem.

| Transformation Layer | Publication Layer |
|----------------------|-------------------|
| Consumes application metadata. | Publishes metadata. |
| Produces structured representations. | Exposes metadata to search engines. |
| Performs metadata composition. | Uses Metadata API, JSON-LD, and Metadata Routes. |

Maintaining this separation allows metadata transformation and metadata publication to evolve independently while preserving a shared metadata model.

---

## Observable Characteristics

The current metadata transformation layer exhibits the following characteristics.

- Centralized metadata transformation.
- Shared transformation functions.
- Schema.org-compatible object generation.
- Composition of metadata from multiple application sources.
- Separation between transformation and publication.
- Independent structured representations for Person, WebSite, and Article metadata.

> 🔗 **Related ADR**
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related ADR**
> ADR-003 – Rendering Strategy *(Implemented)*

# Metadata Publication

The SEO System publishes application metadata through the Next.js Metadata API.

Rather than defining metadata independently within individual pages, the application consumes shared metadata produced by the transformation layer and publishes it through framework-provided metadata interfaces.

The current implementation separates metadata publication into global publication and page-level publication.

## Publication Overview

The observable metadata publication process is shown below.

```text
Application Metadata
        │
        ▼
Metadata Transformation
        │
        ▼
Metadata Publication
        │
 ┌──────┴──────────────┐
 ▼                     ▼
Global Publication   Page Publication
(app/layout.tsx)   (app/work/[slug]/page.tsx)
        │                     │
        └──────────┬──────────┘
                   ▼
        Next.js Metadata API
                   │
                   ▼
            HTML <head> Metadata
```

The publication layer exposes metadata for application pages without modifying the underlying metadata model.

---

## Global Metadata Publication

Global metadata is published through the application's root layout.

The observable implementation publishes:

- Metadata base.
- Default page title.
- Title template.
- Site description.
- Keywords.
- Author information.
- Creator information.
- Open Graph website metadata.
- Twitter metadata.

This metadata is shared across every page within the application.

The publication layer derives these values from the shared site configuration rather than defining them independently.

---

## Page Metadata Publication

Individual case study pages extend the global metadata with page-specific information.

Observable page metadata includes:

- Page title.
- Page description.
- Open Graph metadata.
- Twitter metadata.

These values are derived from the published case study model supplied by the Case Study System.

Page-level metadata supplements the global metadata while remaining consistent with the application's shared metadata model.

---

## Publication Scope

The current implementation publishes metadata at two distinct scopes.

| Scope | Observable Outputs |
|--------|--------------------|
| Global | Shared site metadata applied to every page. |
| Page | Metadata specific to an individual published case study. |

This separation allows common metadata to be managed centrally while enabling individual pages to publish content-specific metadata.

---

## Shared Metadata Model

Both publication scopes consume the same underlying metadata sources.

Observable shared metadata includes:

- Site identity.
- Site description.
- Canonical site URL.
- Author information.
- Case study metadata.
- Open Graph image references.

Maintaining a shared metadata model reduces duplication while preserving a consistent representation of application metadata.

---

## Observable Characteristics

The current metadata publication implementation exhibits the following characteristics.

- Centralized metadata publication.
- Separate global and page-level publication.
- Shared metadata sources.
- Metadata API–based publication.
- Reusable metadata consumed across multiple application pages.
- Consistent publication model for site-level and page-level metadata.

> 🔗 **Related ADR**
> ADR-003 – Rendering Strategy *(Implemented)*

> 🔗 **Related Documents**
> 02-Architecture.md

# Structured Data

The SEO System publishes structured data using Schema.org JSON-LD.

Structured data supplements conventional page metadata by providing machine-readable descriptions of the application and its published case studies.

The observable implementation transforms application metadata into Schema.org-compatible objects before publishing them as JSON-LD script elements.

## Structured Data Overview

The observable structured data publication process is shown below.

```text
Application Metadata
        │
        ▼
Metadata Transformation
(lib/structured-data.ts)
        │
        ▼
Schema.org Objects
        │
 ┌──────┼──────────────┐
 ▼      ▼              ▼
Person  WebSite      Article
        │              │
        └──────┬───────┘
               ▼
JSON-LD Publication
               │
               ▼
<script type="application/ld+json">
```

The transformation layer produces structured representations that are published independently from the Next.js Metadata API.

---

## Supported Structured Data

The current implementation provides three observable structured data types.

| Schema Type | Publication Scope | Metadata Source |
|-------------|-------------------|-----------------|
| Person | Global | Site configuration |
| WebSite | Global | Site configuration |
| Article | Individual case study | Site configuration + Case Study metadata |

Each schema type is generated from shared application metadata before publication.

---

## Global Structured Data

Global structured data is published by the application's root layout.

The observable implementation publishes:

- Person
- WebSite

These schemas are generated from the shared site configuration and are published for every page within the application.

Global structured data provides a consistent description of the website and its author across the application.

---

## Page Structured Data

Individual case study pages publish Article structured data.

Observable Article metadata includes:

- Headline.
- Description.
- Publication date.
- Author.
- Publisher.
- Canonical page reference.
- Keywords.
- Open Graph image.

Article structured data combines site-level metadata with case study metadata before publication.

This composition is performed by the metadata transformation layer.

---

## Structured Data Publication

The observable implementation publishes structured data using JSON-LD script elements.

Global publication occurs within the application layout.

Page-specific publication occurs within individual case study pages.

The publication layer consumes structured representations produced by the transformation layer without modifying their contents.

---

## Unused Structured Data

The current implementation also includes a transformation for the Schema.org `BreadcrumbList` type.

No observable consumer of this transformation has been identified within the application.

Accordingly, the current implementation does not publish breadcrumb structured data.

This document records the implementation as observed and does not infer future use.

---

## Observable Characteristics

The current structured data implementation exhibits the following characteristics.

- Centralized structured data transformation.
- Separate global and page-level publication.
- Shared metadata consumed across schema types.
- Schema.org-compatible JSON-LD publication.
- Composition of site-level and page-specific metadata.
- Unused breadcrumb transformation present within the implementation.

> 🔗 **Related ADR**
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related ADR**
> ADR-003 – Rendering Strategy *(Implemented)*

# Open Graph and Social Metadata

The SEO System publishes Open Graph and social metadata for both the application and individual case study pages.

These metadata enable external platforms to generate consistent previews when application pages are shared.

The current implementation publishes Open Graph and Twitter metadata independently from structured data while consuming the same underlying metadata model.

## Publication Overview

The observable Open Graph publication process is shown below.

```text
Application Metadata
        │
        ├──────────────┐
        │              │
        ▼              ▼
Site Metadata   Case Study Metadata
        │              │
        └──────┬───────┘
               ▼
      Metadata Publication
               │
        ┌──────┴───────────┐
        ▼                  ▼
     Open Graph         Twitter
        │                  │
        └────────┬─────────┘
                 ▼
       Social Sharing Metadata
```

The publication layer exposes metadata suitable for external sharing without modifying the underlying metadata sources.

---

## Global Open Graph Metadata

Global Open Graph metadata is published by the application's root layout.

The observable implementation publishes:

- Site title.
- Site description.
- Canonical site URL.
- Website type.
- Site name.
- Default Open Graph image.

These values are derived from the shared site configuration and apply to every page within the application.

---

## Page-level Open Graph Metadata

Individual case study pages extend the global Open Graph metadata with page-specific information.

Observable page-level metadata includes:

- Case study title.
- Case study summary.
- Case study URL.
- Article type.
- Open Graph image.

These values are derived from the published case study metadata.

---

## Twitter Metadata

The application also publishes Twitter metadata.

Global publication includes:

- Site title.
- Site description.
- Default Open Graph image.
- Summary Large Image card type.

Case study pages publish corresponding page-specific values using the current case study metadata.

The observable implementation maintains consistency between Open Graph and Twitter metadata while publishing them through separate metadata fields.

---

## Open Graph Images

The current implementation distinguishes between presentation images and Open Graph images.

Observable image roles include:

| Image | Observable Responsibility |
|--------|---------------------------|
| Featured Image | Rendered within the page content. |
| Open Graph Image | Published through Open Graph, Twitter metadata, and Article structured data. |

The published case studies currently reference the same image asset for both fields.

This represents an observable implementation characteristic rather than a required architectural constraint.

Future case studies may publish different assets while preserving the same metadata model.

---

## Observable Characteristics

The current Open Graph implementation exhibits the following characteristics.

- Separate global and page-level publication.
- Shared metadata sources.
- Dedicated Open Graph image field.
- Consistent Twitter and Open Graph metadata.
- Separation between presentation imagery and metadata imagery.
- Metadata publication through the Next.js Metadata API.

> 🔗 **Related ADR**
> ADR-003 – Rendering Strategy *(Implemented)*

> 🔗 **Related Documents**
> 04-Case-Study-System.md

# Metadata Routes

The SEO System publishes search engine discovery resources through the Next.js Metadata Route API.

Unlike page metadata and structured data, Metadata Routes expose standalone resources that assist search engines in discovering and indexing application content.

The current implementation publishes both crawler directives and an XML sitemap using dedicated Metadata Route handlers.

## Metadata Route Overview

The observable Metadata Route processing flow is shown below.

```text
Application Metadata
        │
        ├──────────────┐
        │              │
        ▼              ▼
 Site Configuration   Published Case Studies
        │              │
        └──────┬───────┘
               ▼
        Metadata Routes
               │
        ┌──────┴───────┐
        ▼              ▼
    robots.txt     sitemap.xml
               │
               ▼
    Search Engine Discovery
```

Metadata Routes operate independently from page rendering and metadata publication while consuming the same application metadata model.

---

## robots.txt

The application publishes crawler directives through the `robots.txt` Metadata Route.

The observable implementation provides:

- Crawler rules applicable to all user agents.
- A reference to the application's XML sitemap.

The canonical sitemap location is derived from the shared site configuration, maintaining a single authoritative source for the application's base URL.

The current implementation permits unrestricted crawling of application content.

---

## sitemap.xml

The application publishes an XML sitemap through the `sitemap.xml` Metadata Route.

The observable implementation includes:

- Home page.
- Work index page.
- Published case study pages.

Case study entries are derived from the published content model supplied by the Case Study System.

Only published case studies are included within the sitemap.

---

## Route Publication

Metadata Routes consume metadata independently from page rendering.

The observable implementation derives sitemap entries from:

- Shared site configuration.
- Published case study metadata.

Crawler directives consume:

- Shared site configuration.

No Metadata Route directly consumes rendered page content.

---

## Publication Filtering

The sitemap reflects the application's publication model.

Only case studies identified as published are exposed through sitemap generation.

This behavior is consistent with the application's observable routing and static generation processes.

Publication status is determined by the Case Study System and is not managed by the SEO System.

---

## Last Modified Values

The current implementation assigns last modified values according to route type.

| Route | Observable Source |
|--------|-------------------|
| Home | Runtime date |
| Work | Runtime date |
| Case Study | Published frontmatter date |

This document records the implementation as observed and does not infer additional publication history beyond the available metadata.

---

## Observable Characteristics

The current Metadata Route implementation exhibits the following characteristics.

- Metadata Route–based publication.
- Separate crawler and sitemap resources.
- Shared site configuration.
- Publication filtering based on published case studies.
- Centralized sitemap generation.
- Independent publication from page rendering.

> 🔗 **Related ADR**
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related Documents**
> 04-Case-Study-System.md

# Search Engine Outputs

The SEO System publishes a collection of machine-readable outputs that describe the application and its published case studies.

These outputs are consumed by search engines, social platforms, metadata parsers, and other external systems.

The observable implementation publishes multiple output types through separate publication mechanisms while maintaining a shared metadata model.

## Output Overview

The observable outputs of the SEO System are shown below.

```text
Metadata Sources
        │
        ▼
Metadata Transformation
        │
        ▼
Metadata Publication
        │
 ┌──────┼──────────────┐
 ▼      ▼              ▼
Metadata JSON-LD   Metadata Routes
 API
 │      │              │
 ▼      ▼              ▼
Page   Structured    Search Engine
Metadata   Data      Discovery Resources
        └──────┬─────────────┘
               ▼
      Search Engine Outputs
```

The published outputs describe the application without exposing implementation-specific details.

---

## Conventional Metadata

The observable implementation publishes conventional metadata through the Next.js Metadata API.

Published metadata includes:

- Page titles.
- Page descriptions.
- Author information.
- Keywords.
- Open Graph metadata.
- Twitter metadata.

Global metadata applies across the application, while individual case study pages extend this metadata with page-specific information.

---

## Structured Data

Structured data is published using Schema.org JSON-LD.

The observable implementation publishes:

- Person
- WebSite
- Article

Each structured data type is generated from shared application metadata before publication.

Structured data is published independently from conventional metadata while describing the same application content.

---

## Search Engine Discovery Resources

The application publishes discovery resources through Metadata Routes.

Observable discovery resources include:

- `robots.txt`
- `sitemap.xml`

These resources enable search engines to discover published application routes while remaining independent from page-level metadata.

---

## Published Content Scope

The SEO System publishes outputs for two content scopes.

| Scope | Published Outputs |
|--------|-------------------|
| Global | Site metadata, Person schema, WebSite schema, robots.txt, sitemap.xml |
| Case Study | Page metadata, Article schema, Open Graph metadata, Twitter metadata |

This separation allows site-wide information and page-specific information to be published independently while maintaining a consistent metadata model.

---

## Output Consistency

The current implementation derives published outputs from shared application metadata.

Observable consistency includes:

- Shared site identity.
- Shared author information.
- Shared canonical URLs.
- Shared metadata sources.
- Consistent publication of published case studies.

This shared metadata model reduces duplication across the published outputs while maintaining consistency throughout the application.

---

## Observable Characteristics

The current Search Engine Outputs exhibit the following characteristics.

- Multiple publication mechanisms.
- Shared metadata model.
- Separate global and page-level outputs.
- Structured and conventional metadata published independently.
- Search engine discovery resources published separately from page metadata.
- Published outputs derived from centralized application metadata.

> 🔗 **Related ADR**
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related ADR**
> ADR-003 – Rendering Strategy *(Implemented)*

# Validation Rules

The SEO System relies on application-level validation and shared metadata models to maintain consistent metadata publication.

The current implementation does not implement a dedicated SEO validation subsystem. Instead, validation is achieved through typed metadata structures, centralized metadata sources, and shared publication components.

## Validation Overview

The observable validation flow is shown below.

```text
Metadata Sources
        │
        ▼
Shared Type Definitions
        │
        ▼
Metadata Transformation
        │
        ▼
Metadata Publication
        │
        ▼
Published SEO Outputs
```

The implementation emphasizes consistency through shared metadata models rather than runtime validation.

---

## Metadata Consistency

Site-level metadata is maintained through a centralized configuration.

The observable implementation derives shared metadata from a single configuration source.

This approach provides consistent values for:

- Site identity.
- Author information.
- Canonical URLs.
- Default Open Graph metadata.
- Shared keywords.

---

## Shared Metadata Model

Case study metadata is represented through a shared frontmatter model.

Observable metadata consumers include:

- Metadata publication.
- Structured data publication.
- Open Graph metadata.
- Twitter metadata.
- Sitemap generation.

Using a shared metadata model ensures that multiple publication mechanisms consume the same metadata representation.

---

## Publication Filtering

The current implementation validates publication scope through the published case study model.

Observable publication outputs derive content from:

```text
getPublishedCaseStudies()
```

This filtering affects:

- Static route generation.
- Page metadata.
- XML sitemap generation.

Unpublished case studies are not observed within these publication outputs.

---

## Type Safety

The implementation uses shared TypeScript types throughout the SEO subsystem.

Observable typed metadata includes:

- Site configuration.
- Case study frontmatter.
- Metadata Route definitions.
- Next.js Metadata objects.

These shared types provide compile-time consistency across metadata transformation and publication.

---

## Observable Characteristics

The current validation model exhibits the following characteristics.

- Centralized metadata sources.
- Shared metadata models.
- Type-safe metadata publication.
- Consistent publication filtering.
- Reuse of metadata across publication mechanisms.
- No dedicated runtime SEO validation subsystem.

> 🔗 **Related ADR**
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related Documents**
> 04-Case-Study-System.md

# Extension Points

The SEO System exposes several observable extension points that allow additional metadata capabilities to be incorporated without altering the existing subsystem architecture.

These extension points describe where new functionality can integrate with the current implementation. They do not represent planned features or future development commitments.

## Extension Overview

The observable extension points are shown below.

```text
                SEO System
                     │
     ┌───────────────┼───────────────┐
     ▼               ▼               ▼
Metadata      Structured Data   Metadata Routes
Publication      Layer
     │               │               │
     ▼               ▼               ▼
Additional     Additional      Additional
Metadata       Schema Types     Discovery
Fields                          Resources
```

The current implementation separates metadata sources, transformation, and publication, allowing each layer to be extended independently.

---

## Metadata Sources

Additional metadata may be introduced by extending the existing metadata sources.

Observable extension locations include:

- Shared site configuration.
- Case study frontmatter.

Because metadata publication consumes these shared models, additional metadata fields can participate in the existing publication pipeline without altering its overall structure.

---

## Metadata Transformation

The transformation layer provides an observable extension point for additional structured metadata.

The current implementation already contains multiple independent transformation functions.

Additional transformations may be introduced alongside existing implementations without modifying the publication layer.

The existing `BreadcrumbList` transformation demonstrates that new structured data types can exist independently until adopted by the publication layer.

---

## Metadata Publication

The publication layer separates global metadata from page-specific metadata.

This separation provides observable extension points for:

- Additional global metadata.
- Additional page-level metadata.
- Additional social metadata.

The current implementation centralizes publication through shared framework interfaces, allowing publication behavior to evolve without changing metadata sources.

---

## Structured Data

Structured data publication currently supports:

- Person
- WebSite
- Article

The transformation layer is organized so that additional Schema.org object types can be introduced independently while preserving the existing publication process.

No assumptions are made regarding future schema types beyond those currently implemented.

---

## Metadata Routes

Metadata Routes operate independently from page rendering.

Additional discovery resources may be introduced alongside the existing route handlers while preserving the current separation between page metadata and search engine discovery resources.

The current implementation demonstrates this separation through independent `robots.txt` and `sitemap.xml` Metadata Routes.

---

## Observable Characteristics

The current extension model exhibits the following characteristics.

- Independent metadata sources.
- Centralized transformation.
- Separate publication mechanisms.
- Independent Metadata Routes.
- Modular structured data transformations.
- Layered subsystem organization.

Future evolution of the SEO System can occur within these observable extension points without requiring changes to the overall subsystem structure.

> 🔗 **Related ADR**
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related ADR**
> ADR-003 – Rendering Strategy *(Implemented)*

# Related ADRs

The following Architecture Decision Records provide engineering rationale for implementation decisions referenced throughout this document.

This chapter documents the observable implementation of the SEO System. Engineering rationale is maintained within the corresponding ADRs in accordance with the Portfolio Engineering Handbook Cross-Reference Policy.

| ADR | Relationship |
|-----|--------------|
| ADR-001 – Content Pipeline *(Implemented)* | Documents the architectural decisions governing content processing, metadata production, and the content publication pipeline consumed by the SEO System. |
| ADR-003 – Rendering Strategy *(Implemented)* | Documents the rendering strategy that determines how metadata, structured data, Metadata Routes, and page outputs are published within the application. |

This chapter intentionally references ADRs rather than repeating engineering rationale.

When implementation decisions change, the corresponding ADR should be updated before this chapter is revised.

# Related Documents

The following Portfolio Engineering Handbook documents describe systems that interact directly with the SEO System.

These documents provide complementary implementation details while maintaining clear separation of responsibilities.

| Document | Relationship |
|----------|--------------|
| 00-Handbook-Standards.md | Defines the documentation standards, cross-reference policy, and governance model followed by this chapter. |
| 02-Architecture.md | Describes the overall application architecture and identifies the SEO System as an application subsystem. |
| 04-Case-Study-System.md | Documents the metadata production pipeline that supplies case study metadata consumed by the SEO System. |
| 06-Reading-Experience.md *(Planned)* | Documents the reading subsystem that operates alongside the SEO System within published case study pages. |

The following reference documents provide supporting guidance for content managed by the SEO System.

| Reference | Relationship |
|-----------|--------------|
| case-study-publishing-specification.md | Defines the authoring requirements for case study content whose metadata is consumed by the SEO System. |
| glossary.md | Defines terminology used consistently throughout the Portfolio Engineering Handbook. |

This chapter intentionally references related documents rather than duplicating implementation details maintained elsewhere in the handbook.

# Revision History

| Document Version | Handbook Version | Date | Author | Summary |
|-----------------|------------------|------|--------|---------|
| 1.0.0 | 1.0 | 2026-07-24 | Kevin Kirui | Initial implementation of the SEO System chapter. Documented metadata sources, metadata transformation, metadata publication, structured data, Open Graph and social metadata, Metadata Routes, search engine outputs, validation model, and observable extension points based on the implemented portfolio application. |

---

**Document Status:** Reviewed

This chapter has been reviewed against the current implementation of the portfolio application.

Observable implementation details have been verified against the repository available at the time of writing.

Engineering rationale remains documented within the corresponding Architecture Decision Records (ADRs) in accordance with the Portfolio Engineering Handbook Cross-Reference Policy.

Future revisions to this document should occur only when observable implementation changes affect the SEO subsystem.
