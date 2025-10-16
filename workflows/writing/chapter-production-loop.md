---
kind: workflow
title: Chapter — Production Loop
intent: Turn beats into a clean chapter through draft, edits, and move into the book’s chapters folder
status: active
updated: 2025-10-12
tags: [workflow, writing, chapter]
---

# Workflow — Chapter Production Loop

This workflow turns one chapter input into a finalized chapter file and moves it under `harvest/books/out/<book-slug>/chapters/`. No archives are created; provenance is via git.

## Actors
- Writer/Editor — `context/roles/writer-editor.md:1`
- Project Manager — `context/roles/project-manager.md:1`

## Inputs
- One file at `harvest/chapters/in/<chapter-slug>.md` using `harvest/chapters/in/TEMPLATE.md:1`.
- Must include: `book_slug`, `number`, `title`, `slug`, `pov`, `tense`, and a `# Beats` section.

## Outputs
- `harvest/books/out/<book-slug>/chapters/<NN>-<Chapter Title>.md` — finalized chapter with normalized frontmatter and body.

## Steps (Prompts to Use)

0) Context Skim (Ivy)
- Skim the prior 1–2 chapters’ openings/closings and the voice guide; note active threads, cadence, and a linker to carry forward.

1) Validate Beats (S'Vektor)
- Open: `procedures/book/scene_beats.md:1`
- Ensure 5–9 concrete beats with visible turns and continuity notes.

2) Draft Chapter (Ivy)
- Open: `procedures/book/draft_chapter.md:1`
- Expand beats into scenes; maintain POV/tense and voice guide constraints.

3) (If outside target) Expand/Trim to Target (Ivy)
- Open: `procedures/book/expand_to_target.md:1`
- Add micro‑scenes/interiority/examples/method/Q&A to reach target ± tolerance; or trim redundancy if over.

4) Developmental Edit (S'Vektor)
- Open: `procedures/book/dev_edit.md:1`
- Fix structure, pacing, arc alignment, and scene purpose.

5) Line Edit (Ivy)
- Open: `procedures/book/line_edit.md:1`
- Tighten clarity, rhythm, and imagery while preserving voice.

6) Copy Edit (S'Vektor)
- Open: `procedures/book/copy_edit.md:1`
- Correct grammar/usage/style, track a style sheet if used.

7) Gate: Wordcount Within Tolerance (PM)
- Recount quickly; only proceed if within ± tolerance.

8) Evolve and Move Chapter (PM)
- Open: `procedures/book/evolve_and_move_chapter.md:1`
- Normalize frontmatter, keep Beats, add Chapter body, and move under the book.

## Chain (Procedures)
- `procedures/book/scene_beats.md:1`
- `procedures/book/draft_chapter.md:1`
- `procedures/book/dev_edit.md:1`
- `procedures/book/line_edit.md:1`
- `procedures/book/copy_edit.md:1`
- `procedures/book/expand_to_target.md:1`
- `procedures/book/evolve_and_move_chapter.md:1`

## Success Signals
- Chapter adheres to POV/tense; beats realized; scenes end with momentum.
- Structure and line-level clarity improved; copy is clean.
- File saved under the correct path with accurate numbering and title.
