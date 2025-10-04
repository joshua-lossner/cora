---
name: draft_from_outline
intent: Expand outline + notes into a coherent draft with a concrete hook and visible structure
inputs: [outline.md, notes.md, intent.yml]
steps:
  - Use the outline headings as the spine
  - Write intro with concrete hook (first 2 sentences) and thesis
  - For each section, write 1–3 paragraphs that advance labeled claims and integrate examples from notes
  - Add a Relationships micro-scene
  - Close with a forward-looking choice
expected: draft.md
tags: [writing, drafting]
---

# Draft — Operator Prompt (Ivy)

Inputs: `outline.md`, `notes.md`, `intent.yml`

Do:
- Keep the outline’s headings; do not add new sections unless necessary.
- Intro: open with a concrete image/micro-scene; state the thesis for the audience.
- Sections: expand claims with examples; preserve any (F/I/U) labels in-line.
- Relationships: include the “knot carried / boundary voiced” micro-scene (2–4 sentences).
- Practical Moves: include a tiny lived scene grounding the checklist (2–4 sentences).
- Ending: point forward with a small, daily choice (no restatement only).

Output:
- `path: .../out/YYYY-MM-DD/<slug>/draft.md`

