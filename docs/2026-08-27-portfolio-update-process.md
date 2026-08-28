# Building a Repeatable Process for Adding Case Studies

Date: 2026-08-27

A portfolio that stops growing after one project stops proving anything new. This is a short process note on how new case studies get added, what's coming next, and how progress gets checked before adding it.

## Where the next case study goes

New case studies go in the Work / Case Studies section of the portfolio, alongside the existing work (Clinical Workflow Signal Audit, Kenya Health Facilities Dashboard, Remote HealthAI Role Matcher). Each one follows the same three-beat structure:

1. **Problem** – the real healthcare or operational problem being addressed.
2. **What I did** – how the workflow was analyzed, the system designed, and the solution built or tested.
3. **What came of it** – the measurable result, working artifact, evaluation outcome, or practical learning. Only what is demonstrably evidenced, no inferred impact.

## How a case study gets added

1. Open the existing Claude Project. It already holds the portfolio's voice, stack, and identity kit, so this is a short conversation, not a rebuild.
2. Provide the new project's context: repository, evidence, results.
3. Have the draft structured using the existing three-beat format and design tokens.
4. Review the draft against the evidence-before-claim standard: every outcome needs a traceable source, and any gap or rejected option gets flagged rather than left out.
5. Add the entry as a new page under the existing Work/`[slug]` structure.
6. Check the live page on desktop and mobile.
7. Publish and note the version bump in the roadmap doc.

## Next piece of work

**Biomedical Maintenance Triage API.** This case study will demonstrate structured outputs, routing logic, confidence handling, validation, and operational decision support, the same category of problem as the ICU signal-to-action work, applied to equipment maintenance triage instead of clinical signals.

**Current status, checked directly against the repository code:**

| Item | Status | Evidence |
|---|---|---|
| Completion-side cost log | Resolved | Commit `f2b441f` adds `logModelCompletion()`, recording model, input tokens, output tokens, duration, and call type. Confirmed present in `src/llm/costLog.js` and documented in the README's "Cost and Usage Logging" section. |
| `isTimeoutError()` matches actual SDK timeout shape | Not yet verified | `retry.js` checks four error shapes (`AbortError`, `TimeoutError`, `ETIMEDOUT`, `ECONNABORTED`), but there is no test or comment confirming these match the pinned provider SDK's actual timeout errors. The README's own "Known Limitations" section states this has been tested against controlled shapes only, not exhaustively verified against the real SDK. |
| `AbortSignal` cancellation past the 60-second deadline | Not yet verified | Direct code search of `client.js` and `retry.js` confirms no `AbortSignal` or `AbortController` usage anywhere in the transport layer. The 60-second deadline bounds the HTTP response via `Promise.race`, but does not cancel the in-flight model call, retries, or a possible repair call. |

**Last verified: 2026-08-28**, by direct inspection of `src/llm/client.js` and `src/llm/retry.js` (not just repository history or README claims).

One of three items is confirmed resolved. The case study will not be added until all three are closed and verified in code, not just documented as done.

## Reminder and check-in

A reminder is set for **September 3, 2026 (Africa/Nairobi)** in ChatGPT's task system. It is written as a status check-in, not an assumption that the work is finished:

- Verify the current state of the three Week 7 items against the repository.
- If all three are closed and verified, add the case study using the process above.
- If not, note what remains and reset the check-in for one week later rather than adding the case study before it is ready.

This keeps the update habit itself evidence-based: the next entry gets added when the work behind it is actually done, not on a fixed date regardless of status.
