---
name: add_counterpoint
intent: Insert a brief counterpoint that distinguishes restorative rest from avoidance
inputs: [draft.md]
steps:
  - Draft a 2–3 sentence counterpoint acknowledging a valid concern
  - Emphasize rest as integration (capacity returns), not avoidance
  - Insert as `## Counterpoint` before the final section
expected: counterpoint.md (snippet), updated draft.md
tags: [writing]
---

# Counterpoint — Operator Prompt (Ivy)

Input: `draft.md`

Do:
- Write a 2–3 sentence paragraph that acknowledges the common objection.
- Name how restorative rest integrates change; avoid pamphlet tone.
- Insert into the draft before the final section.

Return Blocks:
- `path: .../out/YYYY-MM-DD/<slug>/counterpoint.md`
- `path: .../out/YYYY-MM-DD/<slug>/draft.md`

