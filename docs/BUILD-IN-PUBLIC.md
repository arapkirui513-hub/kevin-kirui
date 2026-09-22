# FlyRank AI Internship - Build in Public

My FlyRank internship taught me that shipping a system and finishing a system are different things.

Over the past several weeks, I worked across APIs, databases, containers, AI integrations, automation workflows, agents, background jobs, PDF generation, decision flows, and healthcare-focused applications.

My capstone brought several of those pieces together: an AI image understanding and content-matching system for healthcare equipment.

The pipeline uses vision metadata, embeddings, similarity retrieval, a mismatch guard, and human review paths.

For V2, I evaluated:

- 12 evaluation posts
- 4 equipment categories
- 120 retrieval candidates

The evaluation produced:

**60.00% Retrieval Precision@10**

**66.67% Guarded Precision**

The evaluation's real value was exposing a weakness in patient-monitor matching.

Some hard-negative images were themselves classified as patient monitors with high confidence. Because the expected subject and model classification can agree, the current guard logic can accept some weak matches.

I could have kept tuning thresholds until the numbers looked better.

Instead, I documented the limitation.

That changed how I think about evaluation. A system needs more than a successful happy path. It needs tests, evidence, failure analysis, and a clear account of where the current design stops working.

AI-assisted development was part of my workflow throughout the internship. I used AI for code generation, debugging, test design, documentation, and development support. I still verified the implementation through execution, database checks, failure-path testing, API behavior, corpus integrity checks, and evaluation runs.

I'm leaving FlyRank with a clearer direction around building healthcare-focused AI systems with explicit workflow boundaries, human review, auditability, and failure handling.

The work:

- Portfolio: https://kevin-kirui.vercel.app/
- Capstone: https://github.com/arapkirui513-hub/flyrank-capstone-image-relevance

#AIEngineering #HealthcareAI #BuildInPublic #SoftwareEngineering

---

## Publication Notes

**Primary channel:** LinkedIn

**Purpose:** Public build-in-public summary of the FlyRank AI internship.

**Publication status:** Published

**LinkedIn status:** Published

LinkedIn post: https://www.linkedin.com/posts/kevin-kirui-ba9593275_aiengineering-healthcareai-buildinpublic-share-7508146426313420800-UOA9/

**Capstone demo:** Deferred

**Canonical supporting documents:**

- `docs/FINAL-PACKAGE.md`
- `docs/RETROSPECTIVE.md`
- `docs/HOURS-LOG.md`

## Social Preview Guidance

The linked portfolio page should use concise social metadata rather than the full post as its description.

Recommended title:

> Kevin Kirui - Healthcare Workflow & AI Systems Designer

Recommended description:

> Healthcare AI systems, workflow analytics, and backend projects built during my FlyRank AI internship.

Recommended social preview image dimensions:

> 1200 × 630
