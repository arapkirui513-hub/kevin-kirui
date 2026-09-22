# FlyRank AI Internship - Build in Public

I started my FlyRank AI internship thinking I was here to learn how to build AI applications.

I’m leaving with a different lesson:

**Building the system is only half the work. You also need to test it, evaluate it, document it, and understand where it fails.**

Over the internship, I worked across APIs, databases, containers, AI integrations, automation workflows, agents, background jobs, PDF generation, decision flows, and healthcare-focused applications.

My capstone brought many of those pieces together: an **AI image understanding and content-matching system for healthcare equipment.**

The pipeline uses:

- Vision metadata
- Embeddings
- Similarity retrieval
- A mismatch guard
- Human review paths

For V2, I evaluated:

- 12 evaluation posts
- 4 equipment categories
- 120 retrieval candidates

The results:

**60.00% Retrieval Precision@10**
**66.67% Guarded Precision**

But the most useful result wasn't the percentage.

The evaluation exposed a weakness in **patient-monitor matching**. Some hard-negative images were themselves classified as patient monitors with high confidence, allowing the current guard logic to accept some weak matches.

I could have tuned the thresholds until the numbers looked better.

Instead, I documented the limitation.

That became one of my biggest lessons from the internship:

**A system isn't finished because the happy path works.**

AI-assisted development was also part of my workflow. I used AI for code generation, debugging, test design, documentation, and development support. I still had to run the code, inspect the data, test failure paths, verify API behavior, and evaluate the results myself.

I'm leaving FlyRank with a clearer direction: building healthcare-focused AI systems where **workflow boundaries, human review, auditability, and failure handling are explicit.**

The work:

- Portfolio: [ADD_PORTFOLIO_LINK]
- Capstone: [ADD_CAPSTONE_LINK]
- Final package: [ADD_FINAL_PACKAGE_LINK]

The capstone demo is currently deferred, so I'm documenting the work as it actually stands rather than presenting an unfinished deliverable as complete.

#AIEngineering #HealthcareAI #BuildInPublic #SoftwareEngineering

---

## Publication Notes

**Primary channel:** LinkedIn

**Purpose:** Public build-in-public summary of the FlyRank AI internship.

**Canonical supporting documents:**

- `docs/FINAL-PACKAGE.md`
- `docs/RETROSPECTIVE.md`
- `docs/HOURS-LOG.md`

**Publication status:** Published

**LinkedIn status:** Published

LinkedIn post: https://www.linkedin.com/posts/kevin-kirui-ba9593275_aiengineering-healthcareai-buildinpublic-share-7508146426313420800-UOA9/

**Capstone demo:** Deferred

## Social Preview Guidance

The linked portfolio page should use concise social metadata rather than the full post as its description.

Recommended title:

> Kevin Kirui - Healthcare Workflow & AI Systems Designer

Recommended description:

> Healthcare AI systems, workflow analytics, and backend projects built during my FlyRank AI internship.

Recommended social preview image dimensions:

> 1200 × 630
