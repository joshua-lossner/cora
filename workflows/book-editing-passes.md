---
kind: workflow
title: Book — Editing Passes (Dev → Line → Copy)
intent: Run developmental, line, and copy edit passes across all chapters of a book and maintain a shared style sheet
status: active
updated: 2025-10-12
tags: [workflow, writing, editing, book]
---

# Workflow — Book Editing Passes (All Chapters)

This Markdown‑only workflow batches editing passes across every chapter in a book. It iterates Dev → Line → Copy for each chapter under `harvest/books/out/<book-slug>/chapters/`, updating a single `style_sheet.md` as you go. No archives; rely on git history.

## Actors
- Developmental Editor (S'Vektor) — structure, pacing, arcs
- Line Editor (Ivy) — clarity, rhythm, imagery, voice
- Copy Editor (S'Vektor) — mechanics and consistency

## Inputs
- Book: `harvest/books/out/<book-slug>/book.md`
- Chapters folder: `harvest/books/out/<book-slug>/chapters/`
- Optional existing `style_sheet.md` at `harvest/books/out/<book-slug>/style_sheet.md`

## Outputs
- Updated chapter files (same paths)
- Updated or new `harvest/books/out/<book-slug>/style_sheet.md`

## Steps (Prompts to Use)

1) Select Scope (PM)
- Choose `<book-slug>` and confirm chapter count/order.
- Decide range (all chapters, or a subset for this session).

2) Initialize Style Sheet (Copy Editor)
- If absent, create `harvest/books/out/<book-slug>/style_sheet.md` with headings: Names, Capitalization, Hyphenation, Numerals, Dialogue, Misc.

3) Pre-Flight Wordcount Audit (S'Vektor)
- Open: `procedures/book/wordcount_audit.md:1`
- Review chapters outside tolerance; note which need expansion or trim during Dev/Line passes.

4) Developmental Edit (per chapter)
- Open: `procedures/book/dev_edit.md:1`
- Revise structure/pacing; ensure a turn; align character arcs.
- Save the updated chapter body back to the same file.

5) Line Edit (per chapter)
- Open: `procedures/book/line_edit.md:1`
- Tighten clarity/rhythm; preserve voice; optional `edits.diff.md` snippet.
- Save the refined chapter body.

6) Copy Edit (per chapter)
- Open: `procedures/book/copy_edit.md:1`
- Fix mechanics/consistency; update `style_sheet.md` if decisions change.
- Save the cleaned chapter body.

7) Style Sheet Consolidation (after batch)
- Append any new decisions gathered during Copy edits.
- Scan for conflicts; resolve and note final choices.

## Chain (Procedures)
- `procedures/book/dev_edit.md:1`
- `procedures/book/line_edit.md:1`
- `procedures/book/copy_edit.md:1`

## Success Signals
- Every chapter shows improved structure (clear turns), smoother prose, and clean mechanics.
- `style_sheet.md` exists and reflects current decisions (names, caps, hyphens, numerals, dialogue).
- No changes to file paths; all links in `index.md` remain valid.
