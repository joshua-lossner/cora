---
name: refine_style
intent: Tighten prose for clarity and rhythm while preserving voice and labels
inputs: [draft_checked.md]
steps:
  - Remove redundancy and hedging; keep labels (F/I/U)
  - Ensure a concrete opening hook in first 2 sentences
  - Add tiny lived scene in Practical Moves
  - Vary sentence length; one longer reflective line per major section
  - Move authority mentions to footnotes; keep at most one in-text nod
expected: refined.md, edits.diff.md
tags: [writing, style]
---

# Refine Style — Operator Prompt (Ivy)

Input: `draft_checked.md`

Do:
- Preserve author’s voice and all F/I/U labels.
- Sharpen hook, relationships scene, and forward-looking ending.
- Return both `refined.md` and a brief `edits.diff.md` explaining major changes.

Output:
- `path: .../out/YYYY-MM-DD/<slug>/refined.md`
- `path: .../out/YYYY-MM-DD/<slug>/edits.diff.md`

