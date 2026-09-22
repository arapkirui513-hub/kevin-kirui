# FlyRank AI Internship - Retrospective

**Author:** Kevin Kirui
**Role:** AI Intern
**Track:** Backend / AI Engineering + AI Fluency

## To My Week 1 Self

At the beginning of the FlyRank internship, I thought the main goal was to become better at building AI-powered applications. I expected the work to be mostly technical: learn the tools, build APIs, connect AI models, and produce working projects.

That was only part of what happened.

The internship became an exercise in learning how to move from an idea to a documented, testable, and presentable system. I started with workflow audits, portfolio planning, prompting, and basic backend work. Over the following weeks, that expanded into databases, containers, authentication, automation workflows, AI APIs, agents, web scraping, frontend workflows, background jobs, PDF generation, and AI decision systems.

The biggest change was in how I think about building.

Early on, I was more focused on whether something worked. Later, I became more concerned with whether another person could understand it, reproduce it, test it, and identify its limitations. That shift became especially important in the capstone.

The Image Relevance & Auto-Tagging project forced me to separate retrieval from validation instead of treating similarity as the final answer. I added structured vision metadata, embeddings, a mismatch guard, persistence, background processing, cost logging, automated tests, and evaluation. The V2 evaluation produced 60.00% Retrieval Precision@10 and 66.67% Guarded Precision across 12 evaluation posts and 120 retrieval candidates. More importantly, the evaluation exposed a weakness in patient-monitor matching. Instead of hiding that result through threshold changes, I documented the limitation and explained why the current guard logic struggles with some hard negatives.

That experience changed how I think about AI evaluation. A system is not finished simply because the happy path works.

Another major change was learning to treat documentation as part of engineering rather than something added at the end. The internship required README files, evidence packages, architecture explanations, evaluation results, portfolio case studies, and build-in-public work. I learned that a technically strong project can still be difficult to evaluate if the reasoning and verification are not visible.

I also learned that AI-assisted development needs verification. I used AI tools for code generation, debugging, test design, documentation, and development support, but I still had to run the code, inspect database state, test failure paths, verify API behavior, check corpus integrity, and evaluate outputs. The responsibility for the final implementation remained with me.

## What I Would Tell My Week 1 Self

Do not optimize only for getting the feature to work.

Build with the eventual reviewer, user, or stranger in mind. Keep evidence as you go. Test failure paths early. Document important design decisions while they are still fresh. Most importantly, do not confuse an AI-generated implementation with a verified implementation.

I would also start organizing the final package much earlier. By the end of the internship, there were many repositories, weekly assignments, evidence files, documentation pages, and project artifacts to connect. Maintaining a simple index from the beginning would have reduced the amount of final-stage organization.

## What I Would Do Next

The next step is to turn the collection of internship projects into a smaller number of strong, reusable engineering stories.

I want to continue improving the image-relevance system, particularly the patient-monitor matching limitation, while keeping evaluation honest. I also want to continue developing healthcare-focused AI systems where workflow boundaries, human review, auditability, and failure handling are explicit.

On the professional side, I want my portfolio to increasingly demonstrate not just that I can build software, but that I can understand a healthcare workflow, translate it into a system, evaluate the result, and communicate the trade-offs clearly.

## Three Transferable Lessons

### 1. Build for verification, not just demonstration

A working demo shows that something can work. Tests, logs, evaluation data, failure handling, and documentation show how reliably it works and where it does not.

### 2. Separate system responsibilities

Separating retrieval from validation, providers from application logic, and background jobs from API concerns made the systems easier to reason about and change. Clear boundaries reduce the cost of future changes.

### 3. Evidence compounds

A project becomes much stronger when implementation, tests, evaluation results, screenshots, documentation, and explanations are collected as the work happens. Evidence makes the work easier for someone else to understand and easier for me to defend.

The internship started as an opportunity to learn AI development. I am leaving with a broader understanding of what it means to build an AI system responsibly: define the problem, build the system, verify it, expose its limitations, and communicate what was actually done.
