---
name: fact_check
intent: Verify claims and references; annotate draft with footnotes and assumptions
inputs: [draft.md, citations.md?]
steps:
  - Extract labeled claims (F/I/U)
  - Map F-claims to sources; grade evidence E1..E4
  - Verify quotes/paraphrases; note mismatches
  - Ensure one numeric worked example (if Money section exists)
  - Annotate draft with footnotes; mark assumptions inline
expected: draft_checked.md, citations.md, fact_check_report.md
tags: [writing, research]
---

# Fact Check — Operator Prompt (S'Vektor)

Input: `draft.md` (+ optional existing `citations.md`)

Do:
- Extract all claims with their F/I/U labels. Build a quick table.
- For each F-claim, attach a source; grade E1..E4; note risks.
- Verify quoted/paraphrased content. Record mismatches.
- Money section: include a small, correct worked example; verify arithmetic.
- Move in-text authority mentions to footnotes when possible.

Output:
- `path: .../out/YYYY-MM-DD/<slug>/draft_checked.md`
- `path: .../out/YYYY-MM-DD/<slug>/citations.md`
- `path: .../out/YYYY-MM-DD/<slug>/fact_check_report.md`

