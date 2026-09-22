# FlyRank AI Internship – Final Package & Deliverables Index

**Name:** Kevin Kirui
**Role:** AI Intern
**Track:** Backend / AI Engineering + AI Fluency
**Final checkpoint:** FL-10 – Final package, retrospective, hours log and publication
**Source of assignment index:** FlyRank internship portal, reviewed September 22, 2026

---

## 1. Purpose

This document is the central index for my FlyRank AI internship work.

It connects the internship's weekly assignments, major engineering projects, capstone work, portfolio evidence, retrospective, hours log, and final publication into one place.

The assignment names and week structure below follow the FlyRank internship portal. Repository and evidence links are included where a corresponding artifact has been verified.

---

# 2. Weekly Deliverables

## Week 1

| Assignment | Status | Evidence / Artifact |
|---|---|---|
| AI Workflow Audit and Tool Setup | In Review | FlyRank submission |
| Draw the Path: Portfolio Sitemap + Toolkit | In Review | FlyRank submission |
| What Are You Proving? | In Review | FlyRank submission |

## Week 2

| Assignment | Status | Evidence / Artifact |
|---|---|---|
| Frame It as Cases: Work That Speaks for Itself | In Review | FlyRank submission |
| The Prompt Ladder | In Review | FlyRank submission |
| Prompting Fundamentals on Real Tasks v2 | In Review | FlyRank submission |
| Build your first CRUD API | In Review | FlyRank submission |

## Week 3

| Assignment | Status | Evidence / Artifact |
|---|---|---|
| A2 Connecting to the database | In Review | FlyRank submission |
| Consistency, Not Talent (and Frame, Not Upstage) | In Review | FlyRank submission |
| Decide Once: Build Your Identity Kit | In Review | FlyRank submission |
| Kill your darlings: Curate Your Images | In Review | FlyRank submission |
| The Through-Line: Map Content & CTAs | In Review | FlyRank submission |
| A3 Containerize your stack | In Review | FlyRank submission |

## Week 4

| Assignment | Status | Evidence / Artifact |
|---|---|---|
| Auth – Login & protect | In Review | FlyRank submission |
| Empty but Live: Ship a Blank Page | In Review | FlyRank submission |
| Three Roads: Choose Your Stack with AI | In Review | FlyRank submission |
| Ship an Automation Workflow v2 | In Review | FlyRank submission |
| Agent Concepts and MCP Basics | In Review | FlyRank submission |

## Week 5

| Assignment | Status | Evidence / Artifact |
|---|---|---|
| Explain It Like You Built It | In Review | FlyRank submission |
| The polite scraper | In Review | FlyRank submission |
| Design Your Personal Agent | In Review | FlyRank submission |
| Build the Agent | In Review | FlyRank submission |
| Personal Website Live on the FlyRank Domain | In Review | FlyRank submission |

## Week 6

| Assignment | Status | Evidence / Artifact |
|---|---|---|
| Connect to an AI API | In Review | FlyRank submission |
| Make It Do Something | In Review | FlyRank submission |
| Open It on Your Phone | In Review | FlyRank submission |
| Survive the Crit | In Review | FlyRank submission |

## Week 7

| Assignment | Status | Evidence / Artifact |
|---|---|---|
| Break Your Own Site | Submitted | Portfolio repo + week-07 evidence |
| Build an AI Decision Flow with React Flow + Inngest | Submitted | AI Decision Flow repo |
| PDF report generator | Submitted | Biomedical Report Generator repo |
| Plant Your Flag: Domain + Badge | Submitted | Portfolio + domain/badge evidence |
| Your first background job | Submitted | Healthcare Report Job Queue repo |

---

# 3. Major Capstone / Final Deliverables

The FlyRank portal shows the following major capstone submissions separately from the weekly assignment list.

| Deliverable | Portal status | Artifact |
|---|---|---|
| Image Relevance & Auto-Tagging | Approved | Capstone repository |
| General AI Fluency – Impact Project | Approved | Biomedical Maintenance Triage work |
| Send the Link: Launch, Demo & Story | Approved | Portfolio / launch evidence |
| Embeddable Widget & Lead-Capture Platform | Approved | Capstone submission |

## Capstone: Image Relevance & Auto-Tagging

The capstone is an AI image understanding and content matching system for healthcare equipment content.

Repository:

`flyrank-capstone-image-relevance`

Core pipeline:

1. Vision model extracts structured image metadata.
2. Embedding model creates semantic vectors.
3. Matching service ranks candidate images using cosine similarity.
4. A mismatch guard checks subject compatibility, confidence, and similarity.
5. Suggestions can be accepted, rejected, or sent for human review.

### Verified V2 evaluation

- 12 evaluation posts
- 4 equipment categories
- 120 retrieval candidates
- Retrieval Precision@10: **60.00%**
- Guarded Precision: **66.67%**
- Automated tests: **89 passed, 0 failed**

The main documented weakness is patient-monitor matching. Some hard negatives are themselves classified by the vision model as patient monitors with high confidence, allowing the current guard logic to accept some weak matches.

This limitation is documented rather than hidden through threshold tuning.

### Safety boundary

The system is not a clinical AI tool.

It does not provide:

- patient diagnosis
- treatment recommendations
- patient-care decisions
- clinical image interpretation for care
- biomedical equipment fault diagnosis
- replacement for biomedical engineering judgment or clinical review

### Demo status

The capstone documentation is complete.

The 3–5 minute live demo/video required by the documentation checkpoint is **deferred for now** and will be added when completed.

---

# 4. Engineering Project Portfolio

The internship produced several substantial engineering artifacts beyond the individual weekly submissions.

## Kenya Health Facilities Dashboard

Repository:

`kenya-health-dashboard`

Live application:

`kenya-health-dashboard.vercel.app`

Backend API:

`kenya-health-dashboard-api.onrender.com`

Key work:

- 10,483 health facilities
- county-level exploration
- service-gap analysis
- population-adjusted access
- planning-priority index
- CSV export
- public API
- performance and SEO improvements
- API rate limiting and CORS restrictions

## Clinical Workflow Signal Audit

Repository:

`clinical-workflow-signal-audit`

Live demo:

`workflow-signal-audit.lovable.app`

Purpose:

A synthetic ICU workflow analytics demonstration that audits signal-to-action latency, escalation SLAs, data-quality gaps, and role-based routing.

The system uses explicit action tiers:

- Monitor
- Review
- Escalate
- Activate

It is a workflow analytics demonstration, not a diagnostic AI system.

## Biomedical Maintenance Triage

Repository:

`maintenance-triage`

Purpose:

A maintenance-report routing API for biomedical equipment.

The API produces structured routing information including:

- equipment type
- issue type
- urgency
- assigned team
- confidence
- reason

The project also includes retry, timeout, parsing, provider-error, and regression-test handling.

## Remote HealthAI Role Matcher

Repository:

`remote-healthai-role-matcher`

Purpose:

A pipeline for matching healthcare/AI roles against candidate criteria and producing structured role information.

## Biomedical Report Generator

Repository:

`biomedical-report-generator`

Purpose:

A backend report-generation pipeline using maintenance-report data.

The project includes:

- PostgreSQL-compatible data model
- synthetic maintenance data
- aggregation queries
- PDF rendering
- report endpoints

## Healthcare Report Job Queue

Repository:

`healthcare-report-job-queue`

Purpose:

A background-job implementation using Inngest and FastAPI.

The project explores:

- event-triggered execution
- step-based jobs
- delayed execution
- job orchestration
- local Inngest development

## AI Decision Flow

Repository:

`flyrank-ai-decision-flow`

Purpose:

A visual AI decision workflow using React Flow and Inngest.

The workflow represents decisions as connected nodes, with each decision returning a YES/NO result.

---

# 5. Portfolio and Public Presence

## Portfolio

Live site:

`kevin-kirui.vercel.app`

Repository:

`kevin-kirui`

Positioning:

**Healthcare Workflow & AI Systems Designer**

The portfolio connects healthcare operations, AI systems, product thinking, and software engineering.

---

# 6. Week 7 Evidence

The portfolio repository contains:

`week-07-evidence/`

The evidence package covers the site-hardening work completed during the Break Your Own Site assignment.

Verified areas include:

- SEO and metadata
- performance
- accessibility
- social preview
- favicon/title
- mobile behavior
- footer/badge evidence
- build verification

Supporting documentation also exists in the portfolio repository under `docs/`.

---

# 7. AI-Assisted Development Transparency

AI tools were used during development for:

- code generation
- debugging
- test design
- documentation drafting
- development support
- reasoning through implementation options

Implementation was checked through direct execution and verification, including:

- local builds
- automated tests
- database checks
- provider contracts
- API behavior
- corpus integrity checks
- retry and failure paths
- end-to-end processing
- evaluation runs

For the image-relevance capstone, the evaluation limitation was reviewed and documented rather than concealed.

---

# 8. Retrospective

The final retrospective will be maintained separately:

`docs/RETROSPECTIVE.md`

Required scope:

- what I set out to do in Week 1
- what changed during the internship
- what I would do next
- three transferable lessons

Target length:

**500–800 words**

Status:

**Completed**

---

# 9. Hours Log

The complete internship hours log will be maintained separately:

`docs/HOURS-LOG.md`

Status:

**Completed**

The log preserves the estimated hours recorded by the FlyRank internship portal.

---

# 10. Build-in-Public Publication

The final publication will document the internship outcome and direct readers to the portfolio and capstone evidence.

Status:

**Published**

LinkedIn: https://www.linkedin.com/posts/kevin-kirui-ba9593275_aiengineering-healthcareai-buildinpublic-share-7508146426313420800-UOA9/

Planned destinations:

- personal portfolio
- GitHub
- relevant build-in-public channel

---

# 11. Final Review / Sign-off

Before final submission, verify:

- [x] Weekly assignment index captured from FlyRank portal
- [x] Major engineering projects documented
- [x] Capstone documented
- [x] Capstone evaluation results recorded
- [x] Capstone limitation recorded
- [x] AI-assisted development transparency included
- [x] Portfolio repository identified
- [x] Week 7 evidence identified
- [x] Retrospective completed
- [x] Hours log completed
- [x] Build-in-public post published
- [x] Capstone demo/video intentionally deferred
- [ ] Final FlyRank review/sign-off completed

---

# 12. Final Package Structure

The final package is organized around these documents:

```text
docs/
├── FINAL-PACKAGE.md
├── RETROSPECTIVE.md
└── HOURS-LOG.md

week-07-evidence/
└── Week 7 site-hardening evidence

Portfolio repository
└── Engineering documentation and project links
```

---

# 13. Primary Repositories

| Project | Repository |
|---|---|
| Portfolio | `kevin-kirui` |
| Kenya Health Facilities Dashboard | `kenya-health-dashboard` |
| Clinical Workflow Signal Audit | `clinical-workflow-signal-audit` |
| Biomedical Maintenance Triage | `maintenance-triage` |
| Remote HealthAI Role Matcher | `remote-healthai-role-matcher` |
| Biomedical Report Generator | `biomedical-report-generator` |
| Healthcare Report Job Queue | `healthcare-report-job-queue` |
| AI Decision Flow | `flyrank-ai-decision-flow` |
| Image Relevance & Auto-Tagging | `flyrank-capstone-image-relevance` |

---

# 14. Current Final Status

| Area | Status |
|---|---|
| Weekly assignments | Indexed |
| Engineering projects | Indexed |
| Capstone | Documented |
| Capstone V2 evaluation | Verified |
| Capstone limitation | Documented |
| Portfolio | Published |
| Week 7 evidence | Present |
| Final package | Documentation complete; final sign-off pending |
| Retrospective | Completed |
| Hours log | Completed |
| Build-in-public publication | Published |
| Demo video | Deferred |
| Final sign-off | Pending |

---

## Source Note

The weekly assignment names and portal statuses in this document were transcribed from the FlyRank internship portal as observed on September 22, 2026.

Where a repository, document, or evidence artifact has not been directly mapped to a specific portal assignment, this document does not claim that mapping.

This distinction is intentional: the final package should be auditable without inventing assignment-to-repository relationships.
