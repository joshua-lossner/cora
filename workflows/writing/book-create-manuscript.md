---
kind: workflow
title: Book — Plan and Write Manuscript
intent: Plan, scaffold, and produce a book from a single input seed through chapter production loops
status: active
updated: 2025-10-12
tags: [workflow, writing, book]
---

# Workflow — Book Plan and Manuscript

This Markdown‑only workflow turns one book input into a coherent voice guide, outline, character bible, scaffolded chapter inputs, and finalized chapter files, then compiles a manuscript. It evolves the book/chapters in place and moves them under `harvest/books/out/<book-slug>/` with no separate archives (use git history).

## Actors
- Writer/Editor — `context/roles/writer-editor.md:1`
- Project Manager — `context/roles/project-manager.md:1`

## Inputs
- One file at `harvest/books/in/<book-slug>.md` using `harvest/books/in/TEMPLATE.md:1`.
- Recommended references:
  - `context/documentation/writing/pov-tense-voice.md:1`
  - `context/documentation/writing/story-structure.md:1`
  - `context/documentation/writing/editing-passes.md:1`
  - `context/documentation/writing/book-metadata.md:1`

## Outputs
- `harvest/books/out/<book-slug>/book.md` — evolved book file with frontmatter and sections (Concept, Voice, Outline, Characters, Notes).
- `harvest/books/out/<book-slug>/chapters/<NN>-<Chapter Title>.md` — one file per finalized chapter.
- `harvest/books/out/<book-slug>/index.md` — links to `book.md` and each chapter file.
- Optional: `voice_guide.md`, `outline.md`, `character_bible.md` under `harvest/books/out/<book-slug>/`.

## Steps (Prompts to Use)

1) Prepare Book Input (PM)
- Copy `harvest/books/in/TEMPLATE.md:1` → `harvest/books/in/<book-slug>.md`. Fill frontmatter and Inspiration.

2) Create Voice Guide (Ivy)
- Open: `procedures/book/create_voice_guide.md:1`
- Produce a concise voice guide (POV, tense, diction, cadence, distance, devices, negatives).

3) Create Book Outline (S'Vektor)
- Open: `procedures/book/create_outline.md:1`
- Produce acts/parts, chapter list with one‑line themes and beats per chapter.

4) Create Character Bible (S'Vektor)
- Open: `procedures/book/character_bible.md:1`
- Define principal cast, wants/needs, arcs, contradictions, continuity notes, and sample voice lines.

5) Scaffold Chapter Inputs (Scribe)
- For each chapter in the outline:
  - Copy `harvest/chapters/in/TEMPLATE.md:1` → `harvest/chapters/in/<chapter-slug>.md`.
  - Set `book_slug`, `number`, `title`, `slug`, `pov`, `tense`, `target_words` (numeric from target_per_chapter).
  - Fill `# Beats` with 5–9 concrete beats.
  - Add `# Flow` seeds: inbound threads and outbound hooks.

6) Wordcount Plan (PM)
- From `length_words` (range) in book frontmatter, set the midpoint as `target_total`.
- Choose provisional `chapter_count` and compute `target_per_chapter = target_total / chapter_count`.
- Set tolerance: ±10–15% per chapter; ±5% total.
 - Record a variance budget (2–3 chapters may stray to ±20% if total stays within ±5%).

7) Chapter Production Loop (Repeat per Chapter)
- Open: `workflows/writing/chapter-production-loop.md:1`
- Draft → Dev edit → Line edit → Copy edit → Evolve & Move Chapter.

8) Evolve Book Input (PM)
– Follow: `procedures/book/evolve_and_move_book.md:1`.
- Normalize frontmatter; add/complete sections (Concept, Voice, Outline, Characters, Notes).
- Move to `harvest/books/out/<book-slug>/book.md`.

9) Create Links Index (Scribe)
- Keep relative paths.

10) Wordcount Audit (S'Vektor)
- Open: `procedures/book/wordcount_audit.md:1`
- Emit `metrics/wordcount.csv` and `metrics/wordcount.md` under the book folder; adjust plan if out of tolerance.
- Create `harvest/books/out/<book-slug>/index.md` with frontmatter and links to `book.md` and each chapter file.
- Keep relative paths.
 - Gate: if any chapter is outside tolerance, run `procedures/book/expand_to_target.md:1` before compile.

## Chain (Procedures)
- `procedures/book/create_voice_guide.md:1`
- `procedures/book/create_outline.md:1`
- `procedures/book/character_bible.md:1`
- `procedures/book/scene_beats.md:1`
- `procedures/book/draft_chapter.md:1`
- `procedures/book/dev_edit.md:1`
- `procedures/book/line_edit.md:1`
- `procedures/book/copy_edit.md:1`
- `procedures/book/evolve_and_move_chapter.md:1`
- `procedures/book/evolve_and_move_book.md:1`
- `procedures/book/compile_manuscript.md:1`

## Success Signals
- Voice guide is concrete and consistently applied.
- Outline spans the whole book with chapter beats and sequencing.
- Character bible aligns arcs and stakes across chapters.
- Each chapter shipped as a finalized file under `chapters/`.
- `index.md` links resolve and order matches outline.
