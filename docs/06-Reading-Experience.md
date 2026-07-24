## Reading Experience

> Describes the implemented Reading Experience subsystem responsible for rendering, navigating, and presenting published case study content.

**Handbook Version:** 1.0.0
**Document Version:** 1.0.0
**Project Version:** 1.6.0
**Status:** Reviewed
**Last Updated:** 2026-07-24

---

# Purpose

The Reading Experience subsystem provides the presentation and navigation layer for published case studies.

The subsystem transforms authored MDX content into an interactive reading interface through content rendering, heading processing, navigation generation, reading progress tracking, and presentation styling.

The Reading Experience subsystem operates on published case study content supplied by the Case Study System. It consumes MDX source and heading metadata to produce the interactive reading interface presented within individual case study pages.

This chapter documents the observable implementation of the Reading Experience subsystem, including:

- Reading source consumption.
- Heading processing.
- Content rendering.
- Navigation generation.
- Reading progress tracking.
- Presentation styling.
- Subsystem integration.

This chapter does not document:

- Case study authoring or content management.
- Metadata generation or search engine optimization.
- Architectural rationale for rendering or navigation decisions.
- Future enhancements to the reading interface.

Engineering rationale is maintained within the corresponding Architecture Decision Records (ADRs) in accordance with the Portfolio Engineering Handbook Cross-Reference Policy.

# System Overview

The Reading Experience subsystem transforms published MDX case study content into an interactive reading interface.

The subsystem assembles independent processing, rendering, navigation, progress tracking, and presentation layers to produce the reading experience presented on individual case study pages.

Reading Experience functionality is integrated within the published case study route, where the subsystem consumes MDX source supplied by the Case Study System together with shared heading metadata and rendering components.

The subsystem does not implement content management or metadata generation. Those responsibilities are documented separately in:

- `04-Case-Study-System.md`
- `05-SEO-System.md`

Instead, the Reading Experience subsystem focuses on how published content is rendered, navigated, and presented to readers.

---

## Reading Experience Architecture

The observable subsystem architecture is shown below.

```text
                    Published MDX Source
                           │
          ┌────────────────┴────────────────┐
          ▼                                 ▼
 Heading Processing                 MDX Rendering
    (extractHeadings)                (MDXContent)
          │                                 │
          ▼                                 ▼
 Heading Metadata                  Rendered Content
          │                                 │
          ▼                                 ▼
 Table of Contents               Reading Progress
          └──────────────┬──────────────────┘
                         ▼
                Presentation Layer
                    (mdx.css)
                         │
                         ▼
              Published Reading Experience
```

The Reading Experience subsystem consists of the following observable implementation layers.

| Layer | Responsibility |
|--------|----------------|
| Heading Processing | Extracts navigation metadata from MDX source. |
| Content Rendering | Compiles and renders MDX content into React components. |
| Navigation | Presents heading metadata as an interactive table of contents. |
| Reading Progress | Tracks document scroll progress and presents a visual progress indicator. |
| Presentation | Applies typography, spacing, and content styling to rendered MDX output. |

Each layer has a distinct responsibility and communicates through observable data rather than shared presentation logic.

The subsystem exhibits a parallel processing model. Heading processing and content rendering both consume the same MDX source independently, while navigation and reading progress consume the outputs of those processing layers to produce the complete reading interface.

> 🔗 **Related Record**
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related Record**
> ADR-003 – Rendering Strategy *(Implemented)*

# Reading Experience Lifecycle

The Reading Experience subsystem transforms published MDX content into an interactive reading interface through a series of observable processing stages.

Each stage has a distinct responsibility and produces outputs consumed by subsequent stages within the subsystem.

---

## Lifecycle Overview

The observable Reading Experience lifecycle is shown below.

```text
Published MDX Source
        │
        ▼
Heading Processing
        │
        ▼
Heading Metadata
        │
        ├────────────────────┐
        ▼                    │
Content Rendering            │
        │                    │
        ▼                    ▼
Rendered Content     Table of Contents
        │                    │
        ├──────────────┐     │
        ▼              ▼     │
Presentation     Reading Progress
        │              │
        └───────┬──────┘
                ▼
Published Reading Experience
```

The Reading Experience subsystem processes published content through six observable stages.

---

## Stage 1 – Content Source

The lifecycle begins with published MDX content supplied by the Case Study System.

The subsystem consumes the MDX source associated with the requested case study without modifying its content.

The published MDX source provides the common input for both heading processing and content rendering.

---

## Stage 2 – Heading Processing

The subsystem extracts navigational heading metadata from the MDX source.

The current implementation processes level-two (`##`) headings and generates normalized heading identifiers using the shared `slugify()` utility.

The resulting heading metadata is supplied to the navigation layer.

---

## Stage 3 – Content Rendering

The subsystem compiles the published MDX source into rendered React content.

During rendering, custom MDX components are mapped to application components, and rendered heading elements receive normalized identifier attributes generated by the shared `slugify()` utility.

Rendered content is produced independently from heading extraction while consuming the same MDX source.

---

## Stage 4 – Navigation

The subsystem presents extracted heading metadata as an interactive table of contents.

Navigation links reference the heading identifiers assigned during content rendering.

The current implementation tracks the visible heading using the browser's `IntersectionObserver` API and highlights the active navigation entry as the reader moves through the document.

---

## Stage 5 – Reading Progress

The subsystem monitors document scroll position throughout the reading session.

Scroll position is transformed into a normalized progress percentage that is presented through a fixed reading progress indicator positioned at the top of the viewport.

---

## Stage 6 – Presentation

The subsystem applies presentation styling to the rendered content.

Typography, spacing, content hierarchy, tables, images, blockquotes, and other rendered Markdown elements are styled through the scoped `case-study-content` presentation layer.

This stage affects presentation only and does not modify rendered content or navigation metadata.

---

## Observable Characteristics

The current Reading Experience lifecycle exhibits the following characteristics.

- Published MDX content is the single source of input.
- Heading processing and content rendering execute independently.
- Navigation consumes extracted heading metadata.
- Reading progress derives from browser scroll state.
- Presentation styling is applied after rendering.
- Each lifecycle stage has a distinct responsibility.

> 🔗 **Related Record**
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related Record**
> ADR-003 – Rendering Strategy *(Implemented)*

# Reading Sources

The Reading Experience subsystem consumes published case study content together with derived heading metadata to construct the interactive reading interface.

The subsystem does not maintain its own content repository. Instead, it operates on content supplied by the Case Study System and metadata generated during the reading pipeline.

---

## Source Overview

The observable reading sources are shown below.

```text
Published Case Study
         │
         ▼
     MDX Source
         │
         ├──────────────┐
         ▼              ▼
Heading Processing   Content Rendering
         │              │
         ▼              ▼
Heading Metadata  Rendered Content
```

The Reading Experience subsystem consumes two observable sources.

| Source | Provider | Consumer |
|--------|----------|----------|
| Published MDX source | Case Study System | `MDXContent`, `extractHeadings()` |
| Heading metadata | `extractHeadings()` | `TableOfContents` |

---

## Published MDX Source

The primary reading source is the published MDX document associated with the requested case study.

The published MDX source is retrieved from the Case Study System and supplied to the Reading Experience subsystem during page generation.

The current implementation provides the same MDX source to two independent consumers:

- Heading processing.
- Content rendering.

Both consumers operate directly on the published MDX source without modifying its contents.

---

## Heading Metadata

Heading metadata is derived from the published MDX source during heading processing.

Each extracted heading is represented by a lightweight metadata model consisting of:

- Heading identifier.
- Heading text.

The current implementation extracts level-two (`##`) headings and generates normalized identifiers through the shared `slugify()` utility.

The resulting metadata is supplied directly to the Table of Contents component.

---

## Shared Identifier Model

The Reading Experience subsystem maintains a shared heading identifier model.

Heading identifiers are generated through the shared `slugify()` utility during heading processing and are reused during content rendering when assigning identifier attributes to rendered heading elements.

This shared identifier model provides consistent identifiers across:

- Heading metadata.
- Rendered heading elements.
- Navigation links.

---

## Observable Characteristics

The current implementation exhibits the following source characteristics.

- Published MDX content is the primary reading source.
- Heading metadata is derived from published content.
- Heading processing and content rendering consume the same MDX source independently.
- Heading identifiers are generated through a shared utility.
- Navigation consumes derived metadata rather than the original MDX source.

> 🔗 **Related Record**
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related Documents**
> 04-Case-Study-System.md

# Heading Processing

The Reading Experience subsystem derives navigational metadata from published MDX content through a dedicated heading processing stage.

The implementation extracts heading information independently from content rendering and produces a lightweight metadata model consumed by the navigation layer.

---

## Processing Overview

The observable heading processing flow is shown below.

```text
Published MDX Source
         │
         ▼
Regular Expression
         │
         ▼
Heading Text
         │
         ▼
slugify()
         │
         ▼
Heading Metadata
```

Heading processing transforms published MDX source into navigation metadata without rendering content.

---

## Heading Extraction

The current implementation extracts headings directly from the published MDX source.

Heading extraction is performed using a regular expression that matches level-two Markdown headings (`##`).

The implementation currently extracts:

- Heading text.
- Heading identifiers.

The current implementation does not extract:

- Level-one headings (`#`).
- Level-three headings (`###`).
- Heading hierarchy.
- Heading position metadata.

Each extracted heading is represented by a lightweight metadata model containing:

- Identifier.
- Display text.

---

## Identifier Generation

Heading identifiers are generated through the shared `slugify()` utility.

The utility performs a deterministic sequence of string transformations to produce normalized heading identifiers.

Observable transformations include:

- Conversion to lowercase.
- Removal of non-word characters.
- Removal of leading and trailing whitespace.
- Replacement of whitespace with hyphens.

The generated identifier is associated with the extracted heading metadata and reused by the rendering layer.

---

## Metadata Model

The heading processing stage produces a lightweight navigation model.

Each heading contains:

| Field | Description |
|--------|-------------|
| `id` | Normalized heading identifier. |
| `text` | Extracted heading text. |

The current metadata model does not include heading level, nesting, ordering metadata beyond document sequence, or presentation information.

---

## Separation from Rendering

Heading processing operates independently from content rendering.

The subsystem extracts heading metadata directly from the published MDX source before the navigation layer consumes the resulting metadata.

The heading processing stage does not compile MDX, generate HTML, or participate in presentation styling.

These responsibilities are performed by subsequent stages within the Reading Experience subsystem.

---

## Observable Characteristics

The current heading processing implementation exhibits the following characteristics.

- Regular-expression-based extraction.
- Level-two (`##`) heading extraction.
- Lightweight metadata model.
- Shared identifier generation.
- Rendering-independent processing.
- Deterministic identifier normalization.

> 🔗 **Related Record**
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related Record**
> ADR-003 – Rendering Strategy *(Implemented)*

# Content Rendering

The Reading Experience subsystem renders published MDX content through a dedicated content rendering stage.

The rendering layer transforms published MDX source into React components while applying custom component mappings and shared heading identifiers.

Content rendering operates independently from heading processing while consuming the same published MDX source.

---

## Rendering Overview

The observable rendering flow is shown below.

```text
Published MDX Source
         │
         ▼
compileMDX()
         │
         ▼
Component Mapping
         │
         ▼
Rendered React Content
         │
         ▼
Article Container
```

The rendering stage transforms published MDX source into the interactive content displayed within published case study pages.

---

## MDX Compilation

The current implementation renders published MDX content using the server-side `compileMDX()` function provided by `next-mdx-remote/rsc`.

The rendering stage consumes the published MDX source and produces rendered React content without modifying the original document.

The rendered output is enclosed within a dedicated article container that serves as the presentation boundary for case study content.

---

## Component Mapping

The rendering stage provides explicit mappings between supported MDX elements and application components.

The current implementation maps the following elements.

| MDX Element | Rendered Component |
|-------------|--------------------|
| `Callout` | `Callout` |
| `Figure` | `Figure` |
| `MetricCard` | `MetricCard` |
| `MetricGrid` | `MetricGrid` |
| `h2` | `H2` |
| `h3` | `H3` |

These mappings are supplied during MDX compilation and determine how supported MDX elements are rendered within published case studies.

---

## Heading Rendering

The rendering stage assigns normalized identifiers to rendered heading elements.

The current implementation generates identifiers for:

- Level-two (`h2`) headings.
- Level-three (`h3`) headings.

Heading identifiers are generated through the shared `slugify()` utility.

This shared identifier model aligns rendered heading identifiers with the identifiers generated during heading processing.

---

## Rendered Content Container

Rendered MDX output is presented within a dedicated article container.

The container establishes the presentation boundary for rendered case study content and provides the styling scope used by the Reading Experience subsystem.

The rendering stage produces structured content without applying presentation rules directly.

Presentation styling is applied separately by the presentation layer.

---

## Separation from Navigation

Content rendering is independent from navigation generation.

The rendering stage produces rendered heading elements while the navigation layer consumes heading metadata produced separately during heading processing.

Although both stages consume the same published MDX source and share the same identifier model, neither stage depends on the output of the other.

---

## Observable Characteristics

The current rendering implementation exhibits the following characteristics.

- Server-side MDX compilation.
- Explicit component mapping.
- Shared heading identifier generation.
- Dedicated article container.
- Independent rendering and navigation processing.
- Separation of rendering and presentation responsibilities.

> 🔗 **Related Record**
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related Record**
> ADR-003 – Rendering Strategy *(Implemented)*

# Navigation System

The Reading Experience subsystem provides document navigation through a dedicated table of contents.

The navigation layer presents extracted heading metadata as an interactive navigation interface while tracking the reader's current position within the document.

The Navigation System consumes heading metadata produced during heading processing and rendered heading identifiers produced during content rendering.

---

## Navigation Overview

The observable navigation flow is shown below.

```text
Heading Metadata
       │
       ▼
TableOfContents
       │
       ▼
Navigation Links
       │
       ▼
IntersectionObserver
       │
       ▼
Active Navigation State
       │
       ▼
Highlighted Navigation
```

The Navigation System transforms heading metadata into an interactive reading aid without modifying the rendered content.

---

## Heading Metadata Consumption

The Navigation System consumes heading metadata supplied by the heading processing stage.

Each heading contains:

- Normalized identifier.
- Display text.

The navigation layer does not perform heading extraction or identifier generation.

Instead, it consumes the metadata produced earlier in the Reading Experience lifecycle.

---

## Navigation Generation

The current implementation renders the table of contents using semantic navigation elements.

The observable navigation structure consists of:

| Element | Responsibility |
|---------|----------------|
| `<aside>` | Reading navigation container |
| `<nav>` | Navigation landmark |
| `<ul>` | Heading collection |
| `<li>` | Navigation item |
| `Link` | In-page navigation |

Navigation links reference rendered headings through fragment identifiers derived from the shared heading identifier model.

---

## Active Section Tracking

The Navigation System tracks the reader's position within the document using the browser's `IntersectionObserver` API.

The current implementation observes rendered heading elements associated with the supplied heading metadata.

When a heading becomes visible within the viewport, the corresponding heading identifier becomes the active navigation state.

The active navigation entry is highlighted independently from the rendered content.

---

## Empty Navigation State

The current implementation does not render a table of contents when no heading metadata is available.

If the supplied heading collection is empty, the Navigation System produces no navigation interface.

This behavior is an observable characteristic of the current implementation.

---

## Shared Identifier Model

Navigation relies on the shared heading identifier model established earlier in the Reading Experience lifecycle.

The Navigation System references the normalized identifiers assigned during heading processing and reused during content rendering.

This shared identifier model maintains consistency across:

- Heading metadata.
- Rendered heading elements.
- Navigation links.

---

## Separation from Rendering

The Navigation System is independent from content rendering.

The subsystem renders MDX content separately while the Navigation System consumes the heading metadata generated during heading processing.

Navigation therefore depends on shared metadata rather than the rendered document structure.

---

## Observable Characteristics

The current Navigation System exhibits the following characteristics.

- Metadata-driven navigation.
- Semantic navigation structure.
- Client-side active section tracking.
- Shared heading identifier model.
- Independent navigation state.
- Graceful handling of empty heading collections.

> 🔗 **Related Record**
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related Record**
> ADR-003 – Rendering Strategy *(Implemented)*

# Reading Progress

The Reading Experience subsystem provides a visual indication of document reading progress through a dedicated reading progress component.

The Reading Progress layer monitors document scroll position, calculates normalized reading progress, and presents a fixed progress indicator throughout the reading session.

Reading progress is derived from browser state and operates independently from heading processing, content rendering, and navigation.

---

## Progress Overview

The observable reading progress flow is shown below.

```text
Browser Scroll Position
          │
          ▼
Progress Calculation
          │
          ▼
Progress Percentage
          │
          ├──────────────┐
          ▼              ▼
Visibility State   Progress State
          │              │
          └──────┬───────┘
                 ▼
      Reading Progress Indicator
```

The Reading Progress layer transforms browser scroll information into a visual progress indicator.

---

## Scroll Monitoring

The current implementation monitors the reader's position using browser scroll events.

Progress calculation consumes the following observable browser state.

| Source | Description |
|--------|-------------|
| `window.scrollY` | Current document scroll position. |
| `document.documentElement.scrollHeight` | Total document height. |
| `window.innerHeight` | Current viewport height. |

These values are sampled whenever the document is scrolled.

---

## Progress Calculation

The Reading Progress layer calculates progress as a normalized percentage of the scrollable document.

The implementation derives the progress value from the current scroll position and the total scrollable height of the document.

The calculated value is constrained to the observable range of:

```text
0 – 100
```

before being presented within the reading interface.

---

## Visibility Management

The Reading Progress layer manages visibility independently from progress calculation.

The current implementation displays the progress indicator only after the reader has scrolled more than twenty pixels from the top of the document.

Before this threshold is reached, the indicator remains hidden.

This threshold is an observable implementation characteristic of the current Reading Experience subsystem.

---

## Progress Presentation

The Reading Progress layer presents progress using a fixed indicator positioned at the top of the viewport.

The observable presentation characteristics include:

| Characteristic | Implementation |
|---------------|----------------|
| Position | Fixed at the top of the viewport |
| Height | Three pixels |
| Width | Progress percentage |
| Visibility | Controlled through opacity |
| Styling | Accent color with rounded trailing edge |

The width of the indicator is updated dynamically as reading progress changes.

---

## Separation from Navigation

Reading Progress operates independently from the Navigation System.

The Navigation System tracks the reader's position relative to document headings.

The Reading Progress layer tracks the reader's position relative to the overall document length.

Both layers observe browser state independently while presenting different aspects of the reading experience.

---

## Observable Characteristics

The current Reading Progress implementation exhibits the following characteristics.

- Client-side scroll monitoring.
- Browser-state-driven progress calculation.
- Normalized percentage representation.
- Independent visibility threshold.
- Fixed viewport presentation.
- Separation of progress tracking and navigation.

> 🔗 **Related Record**
> ADR-003 – Rendering Strategy *(Implemented)*

# Presentation Layer

The Reading Experience subsystem applies presentation styling through a dedicated presentation layer.

The presentation layer defines the visual appearance of rendered MDX content after content rendering has completed. It applies typography, spacing, hierarchy, and content-specific styling while remaining independent of content processing, navigation, and reading progress.

---

## Presentation Overview

The observable presentation flow is shown below.

```text
Rendered MDX Content
         │
         ▼
Article Container
(case-study-content)
         │
         ▼
Presentation Styling
         │
         ▼
Typography
Spacing
Content Hierarchy
Element Styling
         │
         ▼
Published Reading Experience
```

The Presentation Layer styles rendered content without modifying its structure or behavior.

---

## Presentation Scope

Presentation styling is scoped to the rendered case study content container.

The current implementation applies reading-specific styling through the dedicated `case-study-content` container.

This scoped approach limits presentation rules to rendered MDX content and does not affect the broader application interface.

---

## Typography

The Presentation Layer establishes the visual typography hierarchy for rendered content.

Observable typography characteristics include:

| Element | Presentation |
|---------|--------------|
| Article content | Maximum width, reading font size, line height |
| Headings | Shared heading font, weight, color, and hierarchical sizing |
| Paragraphs | Reading text color |
| Strong text | Primary color emphasis |

Typography is applied after rendering and does not alter the underlying document structure.

---

## Content Spacing

The Presentation Layer applies consistent spacing throughout rendered content.

Observable spacing includes:

- Vertical spacing between adjacent content elements.
- Heading spacing.
- List spacing.
- Image spacing.
- Table spacing.
- Blockquote spacing.
- Horizontal rule spacing.

Spacing is managed centrally through the presentation layer rather than individual rendering components.

---

## Markdown Element Styling

The current implementation provides presentation rules for supported Markdown elements.

Observable styled elements include:

| Element | Presentation Responsibility |
|---------|------------------------------|
| Headings | Hierarchy and emphasis |
| Paragraphs | Reading typography |
| Lists | Indentation and spacing |
| Links | Accent styling and hover state |
| Images | Width, spacing, and border radius |
| Tables | Borders, spacing, and header styling |
| Blockquotes | Accent border and typography |
| Horizontal rules | Visual section separation |

The Presentation Layer styles rendered content without participating in content generation.

---

## Shared Design System

The Presentation Layer consumes shared application design tokens.

Observable shared tokens include:

- Primary color.
- Accent color.
- Body text color.
- Heading typography.

The Reading Experience subsystem therefore inherits the application's shared visual design rather than defining an independent visual system.

---

## Separation from Rendering

The Presentation Layer operates independently from content rendering.

The rendering layer produces structured HTML content.

The Presentation Layer applies visual styling to that rendered output through scoped stylesheet rules.

Presentation does not generate content, assign heading identifiers, or participate in navigation.

---

## Observable Characteristics

The current Presentation Layer exhibits the following characteristics.

- Scoped content presentation.
- Shared typography hierarchy.
- Centralized spacing rules.
- Styled Markdown elements.
- Shared application design tokens.
- Separation of rendering and presentation responsibilities.

> 🔗 **Related Record**
> ADR-003 – Rendering Strategy *(Implemented)*

# Observable Characteristics

The Reading Experience subsystem exhibits several observable architectural and implementation characteristics.

These characteristics summarize the behavior documented throughout this chapter and describe the subsystem as implemented within the current portfolio application.

---

## Content Consumption

The subsystem operates exclusively on published MDX content supplied by the Case Study System.

The Reading Experience subsystem does not manage content, metadata, or publication status. Instead, it consumes published MDX source together with derived heading metadata to construct the reading interface.

---

## Parallel Processing

The subsystem processes published MDX content through parallel processing stages.

Heading processing and content rendering consume the same published MDX source independently.

Neither stage depends on the output of the other.

This parallel processing model separates navigation metadata generation from content rendering while maintaining a shared source of input.

---

## Shared Identifier Model

The subsystem maintains a shared heading identifier model.

Normalized heading identifiers are generated through the shared `slugify()` utility and reused throughout the Reading Experience subsystem.

The current implementation applies these identifiers consistently across:

- Heading metadata.
- Rendered heading elements.
- Navigation links.

---

## Layered Architecture

The Reading Experience subsystem is organized into distinct implementation layers.

The observable layers are:

- Heading Processing.
- Content Rendering.
- Navigation.
- Reading Progress.
- Presentation.

Each layer has a single observable responsibility and communicates through well-defined data rather than shared presentation logic.

---

## Independent User Interface Components

The subsystem assembles multiple independent user interface components to produce the complete reading experience.

Observable components include:

- MDX content rendering.
- Table of contents navigation.
- Reading progress indicator.

Each component performs a distinct responsibility while participating in the same reading interface.

---

## Scoped Presentation

Presentation styling is isolated to rendered MDX content.

The subsystem applies typography, spacing, and Markdown element styling through a dedicated presentation container.

Presentation styling remains independent from processing, rendering, navigation, and progress tracking.

---

## Browser-State Integration

The subsystem integrates browser APIs where required to support reader interaction.

Observable browser integrations include:

- Scroll event monitoring.
- Intersection Observer.
- Fragment navigation.

These integrations operate independently while contributing to the overall reading experience.

---

## Observable Summary

The current Reading Experience subsystem exhibits the following observable characteristics.

- Published MDX content as the primary reading source.
- Parallel heading processing and content rendering.
- Shared heading identifier generation.
- Layered subsystem organization.
- Independent navigation and progress tracking.
- Scoped presentation styling.
- Browser-state-driven reader interaction.

These characteristics describe the current implementation without expressing engineering rationale or future design intentions.

> 🔗 **Related Record**
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related Record**
> ADR-003 – Rendering Strategy *(Implemented)*

# Validation Rules

The Reading Experience subsystem relies on shared data models, component boundaries, and browser interfaces to maintain consistent behavior throughout the reading pipeline.

The current implementation does not implement a dedicated validation subsystem. Instead, consistency is achieved through shared processing utilities, typed component interfaces, and centralized rendering behavior.

---

## Validation Overview

The observable validation flow is shown below.

```text
Published MDX Source
         │
         ▼
Heading Processing
         │
         ▼
Shared Identifier Generation
         │
         ▼
Component Integration
         │
         ▼
Browser Interaction
         │
         ▼
Reading Experience
```

The current implementation emphasizes consistency through shared processing and component integration rather than runtime validation.

---

## Shared Heading Metadata

Heading processing produces a shared metadata model consumed by the Navigation System.

Each heading contains:

- Normalized identifier.
- Display text.

The Navigation System consumes this metadata without modifying its structure.

This shared metadata model provides consistent navigation data throughout the Reading Experience subsystem.

---

## Shared Identifier Model

The Reading Experience subsystem maintains a single heading identifier model.

The current implementation generates heading identifiers through the shared `slugify()` utility during:

- Heading processing.
- Content rendering.

Using the same identifier generation utility maintains consistency between extracted heading metadata and rendered heading elements.

---

## Component Integration

The Reading Experience subsystem integrates independently implemented components through shared data contracts.

Observable integration includes:

- Published MDX source supplied to the rendering layer.
- Heading metadata supplied to the Navigation System.
- Browser scroll state supplied to the Reading Progress component.

Each component consumes shared data without modifying the responsibilities of other subsystem layers.

---

## Browser State

Interactive reading behavior depends upon browser APIs.

Observable browser integrations include:

- Scroll events.
- Intersection Observer.
- Fragment navigation.

The subsystem consumes browser state through dedicated components while maintaining separation between navigation, rendering, and progress tracking.

---

## Type Safety

The Reading Experience subsystem uses shared TypeScript definitions across component boundaries.

Observable typed interfaces include:

- Heading metadata.
- Component properties.
- MDX source input.

These shared types provide compile-time consistency across the subsystem.

---

## Observable Characteristics

The current validation model exhibits the following characteristics.

- Shared heading metadata.
- Shared identifier generation.
- Typed component interfaces.
- Browser-state integration.
- Independent subsystem layers.
- No dedicated runtime validation subsystem.

> 🔗 **Related Record**
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related Record**
> ADR-003 – Rendering Strategy *(Implemented)*

# Extension Points

The Reading Experience subsystem exposes several observable extension points that allow additional reading functionality to be incorporated without altering the current subsystem architecture.

These extension points describe where new functionality can integrate with the existing implementation. They do not represent planned features or future development commitments.

---

## Extension Overview

The observable extension points are shown below.

```text
              Reading Experience
                      │
     ┌────────────────┼────────────────┐
     ▼                ▼                ▼
Heading         Rendering       Presentation
Processing         Layer            Layer
     │                │                │
     ▼                ▼                ▼
Navigation     MDX Components     Content Styling
     │
     ▼
Reading Progress
```

The current implementation separates processing, rendering, navigation, progress tracking, and presentation into independent layers that can evolve without changing the overall subsystem structure.

---

## Heading Processing

Heading processing provides an observable extension point for additional navigation metadata.

The current implementation derives heading metadata independently from content rendering through a dedicated processing stage.

Additional metadata processing may be introduced within this layer while preserving the existing separation between processing and rendering.

---

## Content Rendering

The rendering layer provides an observable extension point through explicit MDX component mappings.

The current implementation maps supported MDX elements to application components during MDX compilation.

Additional component mappings may be introduced alongside existing mappings without altering the overall rendering pipeline.

---

## Navigation

The Navigation System operates independently from content rendering.

The current implementation consumes heading metadata through a dedicated navigation component.

Additional navigation functionality may be introduced within this layer while preserving the shared heading metadata model.

---

## Reading Progress

Reading progress is implemented independently from navigation and rendering.

The current implementation derives reading progress exclusively from browser scroll state.

Additional progress-related functionality may be incorporated within this layer without changing heading processing or content rendering.

---

## Presentation Layer

Presentation styling is isolated within a dedicated stylesheet scoped to rendered MDX content.

Additional presentation rules may be introduced within this scoped layer while preserving the separation between rendering and presentation.

The current implementation consumes shared application design tokens rather than defining subsystem-specific visual values.

---

## Observable Characteristics

The current extension model exhibits the following characteristics.

- Independent processing layers.
- Shared heading identifier model.
- Modular MDX component mapping.
- Independent navigation and progress tracking.
- Scoped presentation styling.
- Layered subsystem organization.

Future evolution of the Reading Experience subsystem can occur within these observable extension points without requiring changes to the overall subsystem architecture.

> 🔗 **Related Record**
> ADR-001 – Content Pipeline *(Implemented)*

> 🔗 **Related Record**
> ADR-003 – Rendering Strategy *(Implemented)*

# Related ADRs

The following Architecture Decision Records provide engineering rationale for implementation decisions referenced throughout this document.

This chapter documents the observable implementation of the Reading Experience subsystem. Engineering rationale is maintained within the corresponding ADRs in accordance with the Portfolio Engineering Handbook Cross-Reference Policy.

| ADR | Relationship |
|-----|--------------|
| ADR-001 – Content Pipeline *(Implemented)* | Documents the architectural decisions governing MDX content processing, heading extraction, and the content pipeline consumed by the Reading Experience subsystem. |
| ADR-003 – Rendering Strategy *(Implemented)* | Documents the rendering strategy governing MDX compilation, component rendering, client-side reading components, and page composition. |

This chapter intentionally references ADRs rather than repeating engineering rationale.

When implementation decisions change, the corresponding ADR should be updated before this chapter is revised.

# Related Documents

The following Portfolio Engineering Handbook documents describe systems that interact directly with the Reading Experience subsystem.

These documents provide complementary implementation details while maintaining clear separation of responsibilities.

| Document | Relationship |
|----------|--------------|
| 00-Handbook-Standards.md | Defines the documentation standards, cross-reference policy, and governance model followed by this chapter. |
| 02-Architecture.md | Describes the overall application architecture and identifies the Reading Experience subsystem within the portfolio application. |
| 04-Case-Study-System.md | Documents the content pipeline that supplies published MDX content consumed by the Reading Experience subsystem. |
| 05-SEO-System.md | Documents the metadata and search engine optimization subsystem that operates alongside the Reading Experience subsystem during case study publication. |

The following reference documents provide supporting guidance for content presented by the Reading Experience subsystem.

| Reference | Relationship |
|-----------|--------------|
| case-study-publishing-specification.md | Defines the authoring requirements and content structure rendered by the Reading Experience subsystem. |
| glossary.md | Defines terminology used consistently throughout the Portfolio Engineering Handbook. |

This chapter intentionally references related documents rather than duplicating implementation details maintained elsewhere in the handbook.

# Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-07-24 | Initial implementation of the Reading Experience chapter documenting reading sources, heading processing, content rendering, navigation, reading progress, presentation styling, validation rules, observable characteristics, and extension points. |

---

**Document Status:** Reviewed

This chapter has been reviewed against the current implementation of the Reading Experience subsystem within the portfolio application.

Observable implementation details have been verified against the repository available at the time of writing.

Engineering rationale remains documented within the corresponding Architecture Decision Records (ADRs) in accordance with the Portfolio Engineering Handbook Cross-Reference Policy.

Future revisions to this document should occur only when observable implementation changes affect the Reading Experience subsystem or its documented interfaces.
