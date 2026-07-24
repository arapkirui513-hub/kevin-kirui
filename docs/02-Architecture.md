# Architecture

**Handbook Version:** 1.0.0  
**Document Version:** 1.0  
**Project Version:** 1.6.0  
**Status:** Reviewed  
**Last Updated:** 2026-07-24

---

# Purpose

This document describes the implemented architecture of the portfolio application.

Its purpose is to provide an evidence-based overview of the system's structure, technologies, major components, content pipeline, rendering model, and supporting infrastructure.

This document is intentionally descriptive. It records the architecture as implemented in the repository at the time of writing and does not duplicate engineering rationale.

Where architectural decisions require explanation, this document references the appropriate Architecture Decision Record (ADR) rather than repeating the reasoning.

---

# System Overview

The portfolio is implemented as a statically generated web application built with the Next.js App Router.

The application presents professional case studies, supporting pages, and reusable interface components while using MDX as the primary content format for long-form technical writing.

Content is authored as files within the repository rather than being retrieved from a database or external content management system.

During the build process, published case studies are discovered from the local content directory, transformed into application data structures, and rendered as static pages.

Each case study includes generated metadata, structured data, reading enhancements, and reusable MDX components to provide a consistent reading experience.

The application is organized into several architectural layers:

- Application layer
- Content layer
- Component layer
- Library layer
- Styling layer
- Static asset layer

Each layer has a distinct responsibility and interacts with the others through well-defined interfaces.

---

# Architectural Characteristics

The current implementation exhibits the following observable architectural characteristics:

- Next.js App Router architecture.
- Static site generation for case study pages using `generateStaticParams()`.
- Per-page metadata generation using `generateMetadata()`.
- MDX-based content authored directly within the repository.
- Runtime MDX compilation using `next-mdx-remote/rsc`.
- File-system content discovery using `gray-matter`.
- Component-based user interface organized by functional domain.
- CSS-first styling architecture using Tailwind CSS v4 and design tokens.
- Structured data generation using JSON-LD.
- Reading enhancements including automatic table of contents generation, heading anchors, and reading progress tracking.
- Static asset management through the `public/` directory.

---

# Related ADRs

- 🔗 ADR-001 — Content Pipeline *(Implemented)*
- 🔗 ADR-002 — Routing Strategy *(Implemented)*
- 🔗 ADR-003 — Rendering Strategy *(Implemented)*

---

# Related Documents

- 00-Handbook-Standards.md
- 03-Decision-Log.md

---

# Revision History

| Version | Date | Changes |
|----------|------------|------------------------------------------------|
| 1.0 | 2026-07-24 | Initial architecture document created. |

# Technology Stack

The portfolio is built using a modern React and Next.js technology stack with a file-based content architecture. The implementation emphasizes static generation, reusable components, and repository-managed content rather than external services.

The technology stack documented below reflects the implementation present in the repository at the time of writing.

| Layer | Technology | Observed Implementation |
|--------|------------|-------------------------|
| Framework | Next.js 16.2.10 | App Router application with static generation and Metadata API. |
| UI Library | React 19.2.4 | Component-based interface using React Server Components where supported by the App Router. |
| Language | TypeScript | Strict mode enabled with repository-wide path aliases (`@/*`). |
| Styling | Tailwind CSS v4 | CSS-first configuration using `styles/tokens.css`; no `tailwind.config.ts` present. |
| Content | MDX | Case studies authored as `.mdx` files within the repository. |
| MDX Runtime | next-mdx-remote/rsc | Runtime compilation of MDX with custom component mapping. |
| Frontmatter | gray-matter | Parses metadata from MDX files during content loading. |
| Fonts | next/font/google | DM Sans, DM Serif Display, and IBM Plex Mono loaded through Next.js font optimization. |
| Metadata | Next.js Metadata API | Per-page metadata generated through `generateMetadata()`. |
| Structured Data | JSON-LD | Person, Website, and Article schema generation implemented in `lib/structured-data.ts`. |
| Linting | ESLint | Uses `eslint-config-next` with Core Web Vitals and TypeScript configuration. |

## Observable Characteristics

The current implementation also exhibits the following characteristics:

- The application uses the Next.js App Router.
- Static generation is implemented through `generateStaticParams()`.
- MDX is compiled at runtime using `next-mdx-remote/rsc`.
- The repository does not use the `@next/mdx` integration.
- Content is loaded directly from the local file system.
- No database or external CMS is used.
- `next.config.ts` remains the default configuration with no custom runtime settings.
- Tailwind CSS follows the CSS-first configuration introduced in Tailwind CSS v4.

> 🔗 **Related ADR**  
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related ADR**  
> ADR-002 – Routing Strategy *(Implemented)*

> 🔗 **Related ADR**  
> ADR-003 – Rendering Strategy *(Implemented)*

# Repository Structure

The portfolio follows a feature-oriented repository structure that separates application logic, reusable components, content, supporting libraries, static assets, and engineering documentation.

At the highest level, the repository is organized as follows:

| Directory | Responsibility |
|-----------|----------------|
| `app/` | Next.js App Router pages, layouts, route handlers, and metadata routes. |
| `components/` | Reusable React components organized by functional domain. |
| `content/` | MDX case studies and supporting content authored within the repository. |
| `data/` | Static data used by the application. |
| `docs/` | Portfolio Engineering Handbook and supporting engineering documentation. |
| `lib/` | Shared application logic, content loading, utilities, structured data generation, and helper functions. |
| `public/` | Static assets including Open Graph images and case study images. |
| `styles/` | Global styles, design tokens, and typography configuration. |

## Application Layer

The `app/` directory implements the Next.js App Router.

The current route structure includes:

| Route | Purpose |
|--------|---------|
| `/` | Portfolio homepage. |
| `/work` | Case study listing page. |
| `/work/[slug]` | Individual statically generated case study pages. |
| `/about` | About page. |
| `/contact` | Contact page. |
| `robots.ts` | Metadata Route generating the site's robots.txt. |
| `sitemap.ts` | Metadata Route generating the XML sitemap. |

Application-wide layout responsibilities are implemented in `app/layout.tsx`, including global metadata, typography, and shared page layout.

## Component Organization

Reusable components are grouped by functional responsibility rather than by page.

The current component domains include:

| Directory | Responsibility |
|-----------|----------------|
| `ui/` | Generic user interface building blocks. |
| `layout/` | Navigation, footer, and shared layout components. |
| `home/` | Homepage-specific presentation components. |
| `case-study/` | Components used by case study pages. |
| `mdx/` | Components available inside MDX content. |
| `reading/` | Reading experience enhancements such as the reading progress indicator and table of contents. |

Components are imported directly from their implementation paths. The repository does not currently use barrel (`index.ts`) exports.

## Content Organization

Long-form content is authored as MDX files stored within the repository.

Case study metadata is defined in frontmatter and loaded through the shared content pipeline implemented in the `lib/` directory.

The repository does not use an external content management system or database for published content.

## Supporting Libraries

The `lib/` directory contains reusable application logic shared across routes and components.

Observable responsibilities include:

- Loading and parsing MDX content.
- Case study discovery and filtering.
- Frontmatter processing.
- Heading extraction.
- Slug generation.
- Structured data generation.
- Supporting utility functions.

The current implementation includes a temporary compatibility function (`getCaseStudyBySlug`) retained to support existing consumers during an incremental migration.

> 🔗 **Related ADR**  
> ADR-001 – Content Pipeline *(Implemented)*

## Static Assets

Static assets are stored within the `public/` directory.

The current implementation includes:

- Open Graph images.
- Featured case study images.
- Supporting images referenced by MDX content.

Each published case study currently reuses a single image for both featured display and Open Graph metadata.

## Documentation

Engineering documentation is maintained separately from application code within the `docs/` directory.

The documentation currently includes:

- Portfolio Engineering Handbook chapters.
- Architecture Decision Records.
- Reference documentation.
- Publishing specifications.
- Supporting handbook assets.

Engineering documentation follows the governance model defined by PEH Standard v1.0.

---

> 🔗 **Related ADR**  
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related ADR**  
> ADR-002 – Routing Strategy *(Implemented)*

# Application Architecture

The portfolio is implemented as a Next.js App Router application.

Application behavior is organized around file-based routing, shared layouts, reusable components, and supporting libraries that together render statically generated pages.

At a high level, an incoming request follows the application flow illustrated below.

```text
Browser Request
        │
        ▼
App Router
        │
        ▼
Route Handler
(page.tsx)
        │
        ▼
Shared Libraries
(lib/)
        │
        ▼
React Components
(components/)
        │
        ▼
Rendered HTML
```

The App Router is responsible for resolving incoming routes to their corresponding page components.

Each page coordinates data retrieval through shared library functions before rendering reusable React components.

## Route Hierarchy

The current application implements the following primary routes.

| Route | Description |
|--------|-------------|
| `/` | Portfolio homepage. |
| `/work` | Lists published case studies. |
| `/work/[slug]` | Displays an individual case study. |
| `/about` | About page. |
| `/contact` | Contact page. |

Supporting application routes are implemented using the Next.js Metadata API.

| Route | Purpose |
|--------|---------|
| `robots.ts` | Generates `robots.txt`. |
| `sitemap.ts` | Generates `sitemap.xml`. |

## Shared Layout

Application-wide presentation is coordinated through `app/layout.tsx`.

The shared layout provides:

- Global HTML structure.
- Typography configuration.
- Site-wide metadata.
- Shared navigation.
- Shared footer.
- Global structured data.
- Global styles.

Individual pages contribute page-specific metadata without modifying the shared layout.

## Page Composition

Each route is implemented as a React Server Component within the App Router.

Page components coordinate application behavior by:

- Loading required data.
- Calling shared library functions.
- Passing data to reusable components.
- Returning the rendered page structure.

Business logic is not implemented directly inside presentation components where reusable library functions already exist.

## Dynamic Route Implementation

Case study pages are implemented using the dynamic route:

```text
app/work/[slug]/page.tsx
```

The implementation includes observable support for:

- Static path generation using `generateStaticParams()`.
- Per-page metadata generation using `generateMetadata()`.
- Article structured data generation.
- MDX content rendering.
- Reading progress tracking.
- Automatic table of contents generation.

## Shared Libraries

Application routes depend on reusable library modules rather than implementing data access directly.

Observable responsibilities include:

- Case study discovery.
- Frontmatter processing.
- Content loading.
- Structured data generation.
- Heading extraction.
- Slug generation.

The application currently includes a compatibility layer (`getCaseStudyBySlug`) alongside the newer published-case-study functions.

## Observable Characteristics

The current application architecture exhibits the following characteristics.

- File-based routing through the App Router.
- Static page generation for case studies.
- Shared layout architecture.
- Reusable component composition.
- Shared library abstraction.
- Repository-managed content.
- Metadata generated per route.
- Structured data generated alongside rendered pages.

> 🔗 **Related ADR**  
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related ADR**  
> ADR-002 – Routing Strategy *(Implemented)*

> 🔗 **Related ADR**  
> ADR-003 – Rendering Strategy *(Implemented)*

# Content Architecture

The portfolio uses a repository-managed content architecture.

Long-form content is authored as MDX files stored within the `content/` directory. Published case studies are discovered from the local file system, transformed into application data structures, and rendered through the shared MDX rendering pipeline.

No external content management system or database is used for published content.

## Content Organization

Case studies are authored as individual `.mdx` files.

Each document consists of two primary parts:

- Frontmatter containing structured metadata.
- MDX content containing the body of the case study.

Frontmatter provides metadata used throughout the application, including page generation, listing pages, metadata generation, and structured data.

Observable frontmatter fields include:

- Title
- Summary
- Category
- Date
- Year
- Status
- Reading Time
- Tags
- Featured Image
- Open Graph Image
- Publication Status

## Content Discovery

Content discovery is implemented through shared library functions located in `lib/`.

The observable workflow is:

```text
MDX Files
        │
        ▼
File System
        │
        ▼
gray-matter
        │
        ▼
Frontmatter
        │
        ▼
Case Study Model
        │
        ▼
Application Routes
```

Content is read directly from the repository and parsed using `gray-matter`.

Published case studies are transformed into application models before being consumed by route components.

The content layer currently includes a temporary compatibility function (`getCaseStudyBySlug`) alongside the newer published-case-study retrieval functions.

This compatibility layer remains part of the observable implementation.

> 🔗 **Related ADR**
> ADR-001 – Content Pipeline *(Implemented)*

## MDX Rendering

Case study content is rendered through the shared `MDXContent` component.

Rendering is performed using `next-mdx-remote/rsc`.

The implementation provides custom component mappings for supported MDX elements.

Observable custom components include:

- Callout
- Figure
- MetricCard
- MetricGrid

These components allow structured visual elements to be embedded directly within MDX documents.

The repository does not use the `@next/mdx` integration.

MDX compilation is performed through the runtime rendering pipeline.

## Heading Processing

Reading enhancements are generated through supporting library functions.

The current implementation includes:

- Heading extraction using `lib/toc.ts`.
- Slug generation using `lib/slugify.ts`.
- Heading identifiers applied during MDX rendering.

The table of contents and rendered heading anchors are generated through separate implementations that produce matching heading identifiers.

This behavior is an observable characteristic of the current implementation.

> 🔗 **Related ADR**
> ADR-003 – Rendering Strategy *(Implemented)*

## Metadata Integration

Content metadata is reused throughout multiple application layers.

Observable integrations include:

- Case study listing pages.
- Dynamic route generation.
- Page metadata.
- Open Graph metadata.
- JSON-LD Article structured data.
- Reading time display.
- Technology tag display.

Featured images and Open Graph images currently reference the same asset for each published case study.

## Observable Characteristics

The content architecture currently exhibits the following characteristics.

- Repository-managed content.
- MDX-based authoring.
- Runtime MDX compilation.
- Frontmatter-driven metadata.
- File-system content discovery.
- Shared content loading libraries.
- Reusable MDX component mapping.
- Automatic heading extraction.
- Shared metadata reused across presentation and SEO layers.

> 🔗 **Related ADR**
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related ADR**
> ADR-003 – Rendering Strategy *(Implemented)*

# Component Architecture

The portfolio follows a domain-oriented component architecture.

Reusable React components are grouped according to functional responsibility rather than individual application routes. This organization separates shared interface elements, page-specific presentation, MDX rendering components, and reading enhancements into distinct component domains.

The current implementation contains no barrel (`index.ts`) exports. Components are imported directly from their implementation paths.

## Component Organization

The `components/` directory is organized into the following domains.

| Directory | Responsibility |
|-----------|----------------|
| `ui/` | Reusable user interface building blocks shared across the application. |
| `layout/` | Shared layout components including navigation and footer elements. |
| `home/` | Components used exclusively by the homepage. |
| `case-study/` | Components supporting case study pages and related presentation. |
| `mdx/` | Components available within MDX content. |
| `reading/` | Reading experience enhancements including reading progress and table of contents. |

Each domain provides components with a clearly scoped responsibility while remaining reusable within that domain.

## Component Composition

Application pages are composed from multiple reusable component domains.

A typical case study page combines:

- Shared layout components.
- Case study presentation components.
- MDX-rendered content.
- Reading experience components.
- Shared user interface components.

Application routes coordinate component composition rather than embedding large amounts of presentation logic directly within page files.

## MDX Component Integration

MDX documents are extended through custom React component mappings implemented by the shared `MDXContent` renderer.

The current implementation exposes the following custom MDX components:

- `Callout`
- `Figure`
- `MetricCard`
- `MetricGrid`

These components allow structured visual content to be authored directly within MDX documents while remaining part of the shared component system.

## Reading Components

Reading-related functionality is implemented independently from the MDX rendering layer.

Observable reading components include:

- Reading Progress
- Table of Contents

These components consume processed content metadata rather than implementing content parsing directly.

## Component Relationships

The observable relationship between application layers is shown below.

```text
Application Route
        │
        ▼
Page Component
        │
        ▼
Shared Components
 ├── UI
 ├── Layout
 ├── Case Study
 ├── MDX
 └── Reading
        │
        ▼
Rendered Interface
```

This composition model allows presentation responsibilities to remain separated while supporting consistent rendering across the application.

## Observable Characteristics

The current component architecture exhibits the following characteristics.

- Domain-oriented component organization.
- Reusable presentation components.
- Shared layout components.
- MDX component mapping.
- Independent reading enhancement components.
- Direct component imports without barrel exports.
- Composition-based page construction.

> 🔗 **Related ADR**  
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related ADR**  
> ADR-003 – Rendering Strategy *(Implemented)*

# Data Flow

The portfolio processes content through a repository-based data flow that transforms MDX documents into statically generated web pages.

The observable flow begins with content stored on disk and ends with rendered HTML delivered to the browser.

## High-Level Flow

The current implementation follows the processing sequence below.

```text
MDX Content
      │
      ▼
File System
      │
      ▼
Content Loading
(lib/mdx.ts)
      │
      ▼
Frontmatter Parsing
(gray-matter)
      │
      ▼
Case Study Model
(lib/case-studies.ts)
      │
      ▼
Application Route
(app/work/[slug]/page.tsx)
      │
      ▼
MDX Rendering
(next-mdx-remote/rsc)
      │
      ▼
React Components
      │
      ▼
Rendered HTML
```

Each stage performs a distinct responsibility while passing structured data to the next stage.

## Content Loading Flow

Content loading begins by discovering MDX files stored within the repository.

The observable workflow is:

1. Case study files are read from the local file system.
2. Frontmatter is parsed using `gray-matter`.
3. Published content is filtered through the shared case study library.
4. Structured case study objects are returned to application routes.

Application routes consume these shared models rather than reading MDX files directly.

> 🔗 **Related ADR**  
> ADR-001 – Content Pipeline *(Implemented)*

## Page Generation Flow

Dynamic case study routes use shared library functions to retrieve the requested content.

The observable processing sequence is:

```text
Route Parameter (slug)
        │
        ▼
Case Study Lookup
        │
        ▼
Structured Metadata
        │
        ▼
MDX Source
        │
        ▼
Page Rendering
```

If no published case study matches the requested slug, the application returns the standard Next.js `notFound()` response.

## Metadata Flow

Case study metadata is reused throughout multiple application layers.

Observable destinations include:

- Static page generation.
- HTML metadata.
- Open Graph metadata.
- Twitter metadata.
- JSON-LD Article schema.
- Case study listing pages.
- Reading time display.
- Technology tags.

The same frontmatter serves multiple consumers without requiring duplicate metadata definitions.

## Reading Enhancement Flow

Reading features are generated independently from MDX rendering.

The observable processing sequence is:

```text
MDX Source
      │
      ├───────────────┐
      ▼               ▼
Heading Extraction    MDX Rendering
(lib/toc.ts)          (MDXContent)
      │               │
      ▼               ▼
Slug Generation   Heading IDs
      │               │
      └──────┬────────┘
             ▼
Table of Contents
```

The table of contents and rendered headings are produced through separate processing paths that generate matching heading identifiers.

This behavior is part of the observable implementation at the time of writing.

## Structured Data Flow

Structured data is generated independently from page rendering.

Observable structured data includes:

- Person schema.
- Website schema.
- Article schema.

Global structured data is injected through the shared application layout.

Article structured data is generated by individual case study pages.

The repository also defines a `breadcrumbSchema` helper that is not referenced by the application at the time of writing.

## Observable Characteristics

The current data flow exhibits the following characteristics.

- Repository-managed content.
- File-system content discovery.
- Shared content loading libraries.
- Frontmatter reused across multiple consumers.
- Independent metadata generation.
- Independent structured data generation.
- Parallel heading extraction and MDX rendering.
- Static page generation through shared application models.

> 🔗 **Related ADR**  
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related ADR**  
> ADR-003 – Rendering Strategy *(Implemented)*

# Rendering Strategy

The portfolio uses the Next.js App Router rendering model.

The observable implementation combines static page generation, per-page metadata generation, and Metadata Route handlers to produce the final application delivered to the browser.

Rendering behavior is implemented through framework features rather than custom rendering infrastructure.

## Static Page Generation

Published case studies are generated as static pages.

The current implementation uses `generateStaticParams()` to enumerate published case study routes during the build process.

The observable rendering flow is:

```text
Published Case Studies
        │
        ▼
generateStaticParams()
        │
        ▼
Static Route Generation
        │
        ▼
HTML Output
```

Each published case study is rendered as an individual static page.

Routes not returned by `generateStaticParams()` are not generated as part of the static build.

> 🔗 **Related ADR**
> ADR-003 – Rendering Strategy *(Implemented)*

## Dynamic Metadata Generation

Each case study page provides page-specific metadata through `generateMetadata()`.

Observable metadata includes:

- Page title.
- Description.
- Open Graph metadata.
- Twitter Card metadata.

Metadata is derived from the case study frontmatter rather than being duplicated within page components.

## Structured Data Rendering

Structured data is rendered independently from page content.

The observable implementation includes:

- Person schema.
- Website schema.
- Article schema.

Person and Website schema are injected through the shared application layout.

Article schema is generated by individual case study pages.

The repository also contains a `breadcrumbSchema` helper that is not referenced by the application at the time of writing.

## Metadata Routes

Search engine support is implemented using Next.js Metadata Routes.

The repository currently includes:

| Route | Output |
|--------|--------|
| `robots.ts` | `robots.txt` |
| `sitemap.ts` | XML sitemap |

These routes are generated through framework handlers rather than static files.

## Rendering Components

Case study pages combine multiple rendering responsibilities.

The observable page includes:

- Shared application layout.
- Generated metadata.
- Structured data.
- MDX-rendered content.
- Reading progress indicator.
- Table of contents.
- Featured image.
- Project metadata.
- Technology tags.

These elements are assembled during page rendering through reusable components and shared library functions.

## Observable Characteristics

The current rendering strategy exhibits the following characteristics.

- Static generation for published case studies.
- Metadata generated per page.
- Structured data generated alongside rendered pages.
- Metadata Routes for search engine discovery.
- Shared application layout.
- MDX rendered through server-side compilation.
- Component-based page assembly.

> 🔗 **Related ADR**
> ADR-003 – Rendering Strategy *(Implemented)*

# Styling System

The portfolio implements a centralized styling system that combines Tailwind CSS utility classes, CSS custom properties, and optimized web font loading.

Styling responsibilities are separated into reusable design tokens, global styles, typography, and component-level presentation.

The implementation follows the CSS-first configuration model introduced in Tailwind CSS v4.

## Design Tokens

The application defines reusable design tokens through CSS custom properties.

Observable token categories include:

- Color palette
- Typography scale
- Spacing
- Border radius

These tokens are defined in `styles/tokens.css` and are shared throughout the application.

Components consume these shared values rather than defining independent design constants.

## Global Styling

Global styles are applied at the application level.

Observable responsibilities include:

- Base HTML styling.
- Typography defaults.
- Global spacing rules.
- Shared utility classes.
- Theme variables.

Global styling provides a consistent visual foundation across all routes.

## Typography

Typography is implemented using the Next.js Font Optimization API.

The current implementation loads the following Google Fonts:

| Font | Primary Usage |
|------|---------------|
| DM Sans | Primary body text. |
| DM Serif Display | Headings and display typography. |
| IBM Plex Mono | Monospaced technical content. |

Fonts are configured through `next/font/google` within the shared application layout.

## Tailwind CSS

Component styling combines shared design tokens with Tailwind utility classes.

Observable characteristics include:

- CSS-first Tailwind CSS v4 configuration.
- No `tailwind.config.ts` present.
- Utility-first component styling.
- Shared design tokens referenced through CSS custom properties.

The repository relies on the default Tailwind configuration together with project-specific CSS variables.

## Component Styling

Presentation styling is applied within reusable React components.

Observable styling patterns include:

- Shared spacing conventions.
- Reusable typography classes.
- Border radius tokens.
- Color tokens.
- Responsive layouts.
- Utility-class composition.

Visual styling remains localized to components while shared values are centralized within the design token system.

## Observable Characteristics

The styling system currently exhibits the following characteristics.

- Centralized design tokens.
- CSS custom properties.
- Tailwind CSS v4 CSS-first configuration.
- Shared typography system.
- Optimized Google Font loading.
- Utility-first component styling.
- Repository-managed styling resources.

---

> 🔗 **Related ADR**  
> ADR-002 – Routing Strategy *(Implemented)*

> 🔗 **Related ADR**  
> ADR-003 – Rendering Strategy *(Implemented)*


# SEO Architecture

The portfolio implements a metadata architecture that combines the Next.js Metadata API, Open Graph metadata, Twitter Card metadata, JSON-LD structured data, and Metadata Routes to support search engine indexing and content sharing.

SEO-related responsibilities are distributed across shared libraries, application routes, and the global application layout.

## Metadata Generation

The application generates metadata using the Next.js Metadata API.

Observable metadata sources include:

- Global application metadata.
- Page-specific metadata.
- Case study frontmatter.

Case study pages generate metadata through `generateMetadata()`.

Observable metadata includes:

- Page title.
- Description.
- Open Graph metadata.
- Twitter Card metadata.

Metadata values are derived from case study frontmatter rather than duplicated within page components.

## Structured Data

Structured data is generated through reusable helper functions located in `lib/structured-data.ts`.

The current implementation includes:

| Schema | Implementation |
|---------|----------------|
| Person | Injected through the shared application layout. |
| Website | Injected through the shared application layout. |
| Article | Generated by individual case study pages. |

Structured data is rendered as JSON-LD.

The repository also defines a `breadcrumbSchema` helper that is not referenced by the application at the time of writing.

## Open Graph Assets

Published case studies include Open Graph image metadata defined within frontmatter.

The current implementation stores Open Graph images in:

```text
public/images/og/
```

Each published case study currently references a single image for both:

- Featured page image.
- Open Graph preview image.

This reuse is an observable characteristic of the current implementation.

## Metadata Routes

Search engine support is implemented using Next.js Metadata Routes.

The repository currently provides:

| Route | Output |
|--------|--------|
| `robots.ts` | Generates `robots.txt`. |
| `sitemap.ts` | Generates `sitemap.xml`. |

These routes are generated through framework handlers rather than static files.

## Metadata Flow

SEO metadata follows the observable processing sequence below.

```text
Case Study Frontmatter
          │
          ▼
generateMetadata()
          │
          ▼
Metadata API
          │
          ▼
Rendered HTML
          │
          ├──────────────┐
          ▼              ▼
Open Graph         Twitter Card
```

Structured data is generated independently.

```text
Structured Data Helpers
          │
          ▼
JSON-LD
          │
          ▼
Rendered Page
```

## Observable Characteristics

The current SEO architecture exhibits the following characteristics.

- Metadata generated through the Next.js Metadata API.
- Frontmatter-driven page metadata.
- JSON-LD structured data generation.
- Metadata Routes for sitemap and robots generation.
- Shared structured-data helper library.
- Repository-managed Open Graph assets.
- Shared Open Graph and featured image assets.
- Unused `breadcrumbSchema` helper present in the repository.

> 🔗 **Related ADR**  
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related ADR**  
> ADR-003 – Rendering Strategy *(Implemented)*

# Reading Experience

The portfolio implements a dedicated reading subsystem that enhances long-form case study content through navigation, progress tracking, and structured presentation.

Reading functionality is implemented independently from the core content pipeline while consuming metadata and processed content generated by shared library functions.

## Reading Features

The current implementation provides the following reader-facing features:

| Feature | Implementation |
|---------|----------------|
| Reading Progress | Displays reading progress as the user moves through the page. |
| Table of Contents | Generates a navigable list of section headings. |
| Heading Anchors | Provides stable heading identifiers for in-page navigation. |
| Smooth Scrolling | Enables animated navigation between document sections. |

These features are available on case study pages without requiring changes to the underlying MDX content.

## Reading Architecture

The reading subsystem is composed of reusable components and supporting library functions.

Observable implementation includes:

| Component / Library | Responsibility |
|---------------------|----------------|
| `ReadingProgress` | Tracks and displays reading progress. |
| `TableOfContents` | Renders the document navigation sidebar. |
| `lib/toc.ts` | Extracts headings from MDX source. |
| `lib/slugify.ts` | Generates stable heading identifiers. |
| `MDXContent` | Applies heading identifiers during MDX rendering. |

Each module has a single observable responsibility while contributing to the overall reading experience.

## Heading Processing

Reading enhancements are generated through supporting library functions.

The current implementation includes:

- Heading extraction using `lib/toc.ts`.
- Slug generation using `lib/slugify.ts`.
- Heading identifiers applied during MDX rendering.

Heading extraction currently processes level-two (`##`) headings when generating the table of contents.

Heading identifiers are independently generated during MDX rendering for both level-two (`h2`) and level-three (`h3`) headings.

Both processes use the shared slug generation utility, enabling reliable navigation between generated table of contents entries and rendered section headings.

This behavior is an observable characteristic of the current implementation.

## Navigation Flow

Reader navigation follows the observable sequence below.

```text
Table of Contents
        │
        ▼
Heading Link
        │
        ▼
Heading Identifier
        │
        ▼
Rendered Section
```

Smooth scrolling is applied globally through CSS, allowing navigation links to transition between document sections.

## Reading Progress

Reading progress is implemented independently from table of contents generation.

The reading progress component observes the user's position within the rendered page and updates the progress indicator without modifying the document content itself.

## Observable Characteristics

The current reading subsystem exhibits the following characteristics.

- Independent reading components.
- Automatic heading extraction.
- Stable heading identifiers.
- Parallel heading extraction and rendering.
- Automatic table of contents generation.
- Reading progress tracking.
- Smooth in-page navigation.
- MDX-integrated reading enhancements.

> 🔗 **Related ADR**  
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related ADR**  
> ADR-003 – Rendering Strategy *(Implemented)*

# Extension Strategy

The portfolio architecture exposes several observable extension points that allow new functionality to be integrated without requiring changes to the application's overall structure.

These extension points are part of the implemented architecture and represent existing capabilities rather than planned enhancements.

## Content Extension

The content pipeline is designed to discover published case studies from the repository.

Additional case studies can be introduced by adding new MDX documents that follow the established frontmatter structure.

Observable extension points include:

- New case study documents.
- Additional frontmatter fields.
- Additional technology tags.
- Additional Open Graph assets.

Content discovery continues to be managed through the shared content loading libraries.

> 🔗 **Related ADR**
> ADR-001 – Content Pipeline *(Implemented)*

---

## Component Extension

The component architecture is organized into functional domains.

New reusable components can be introduced by extending the existing component directories without modifying unrelated domains.

Observable extension points include:

- User interface components.
- MDX components.
- Reading components.
- Layout components.
- Case study presentation components.

Components remain reusable through direct imports from their implementation paths.

---

## Route Extension

The application uses the Next.js App Router.

New application functionality can be introduced by adding routes within the existing routing structure.

Observable extension points include:

- Static pages.
- Dynamic routes.
- Metadata Routes.

Route discovery continues to follow the App Router conventions implemented throughout the repository.

> 🔗 **Related ADR**
> ADR-002 – Routing Strategy *(Implemented)*

---

## Content Rendering Extension

MDX rendering is centralized through the shared `MDXContent` component.

Additional MDX components can be introduced by extending the existing component mapping without changing authored case study content.

Observable extension points include:

- Additional MDX React components.
- Additional supported content blocks.
- Additional document presentation components.

The rendering pipeline remains centralized within the shared MDX renderer.

> 🔗 **Related ADR**
> ADR-003 – Rendering Strategy *(Implemented)*

---

## Metadata Extension

Metadata generation is implemented through shared helper functions and page-level metadata generation.

Observable extension points include:

- Additional structured data helpers.
- Additional metadata fields.
- Additional metadata consumers.

The repository already centralizes metadata generation through shared library functions.

---

## Styling Extension

The styling system is based on shared design tokens and utility-class composition.

Observable extension points include:

- Additional design tokens.
- Additional typography utilities.
- Additional reusable styling patterns.

Component styling continues to consume the centralized token system.

---

## Observable Characteristics

The current architecture supports extension through:

- Repository-managed content.
- Shared library abstractions.
- Domain-oriented component organization.
- File-based routing.
- Centralized MDX rendering.
- Shared metadata generation.
- Shared design tokens.
- Reusable reading components.

These extension points are implemented within the current repository and do not require changes to the overall architectural structure.

---

# Related ADRs

- 🔗 ADR-001 – Content Pipeline *(Implemented)*
- 🔗 ADR-002 – Routing Strategy *(Implemented)*
- 🔗 ADR-003 – Rendering Strategy *(Implemented)*

---

**Document Status:** Reviewed

This chapter has been reviewed against the current repository implementation and accurately reflects the observable architecture of the portfolio application at the time of writing.

Engineering rationale remains documented within the corresponding Architecture Decision Records (ADRs) in accordance with the Portfolio Engineering Handbook Cross-Reference Policy.

Future revisions to this document should occur only when observable architectural changes affect the documented system structure.
