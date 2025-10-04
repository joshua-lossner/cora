---
name: outline
intent: Produce a minimal, testable outline from notes + intent with labeled claims
inputs: [intent.yml, notes.md]
steps:
  - Extract/confirm a single-sentence thesis
  - Propose 1–3 opening hook images (concrete)
  - Map 4–6 body sections (+ intro/outro) that trace the thesis
  - List 1–3 claims per section labeled (F/I/U) with notes on evidence
  - Emit outline.md and claim_table.csv
expected: outline.md, claim_table.csv, assumptions.md
tags: [writing, structure]
---

# Outline — Operator Prompt (S'Vektor)

Inputs: `intent.yml` and `notes.md`

Do:
- Thesis: restate it in one sentence for the audience and stance.
- Hook: list 1–3 concrete opening images or micro-scenes.
- Sections: create 4–6 body sections + intro/outro. Each section has a purpose.
- Claims: list 1–3 labeled claims per section (F/I/U) with evidence/risk notes.
- Relationships: include a tiny scene (the knot carried; boundary voiced).
- Output 1: `outline.md` with headings, claims, and notes for examples/sources.
- Output 2: `claim_table.csv` with headers: `id,section,type,statement,evidence,risk`.
- Output 3 (optional): `assumptions.md` capturing top risks.

Constraints:
- ≤ 7 top-level sections including intro/outro.
- Prefer smallest sufficient structure.

Return Blocks:
- `path: .../out/YYYY-MM-DD/<slug>/outline.md`
- `path: .../out/YYYY-MM-DD/<slug>/claim_table.csv`
- (optional) `path: .../out/YYYY-MM-DD/<slug>/assumptions.md`

