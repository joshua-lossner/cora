---
kind: procedure
title: Book — Evolve and Move Chapter
intent: Turn a `chapter_input` into a finalized `chapter`, then move it under the book’s chapters/ folder (no archive)
status: active
updated: 2025-10-12
tags: [book, chapter, evolve]
---

# Procedure — Evolve and Move Chapter

Purpose
- Evolve a single chapter input by normalizing frontmatter, keeping Beats, adding the Chapter body, then move it to `harvest/books/out/<book-slug>/chapters/<NN>-<Chapter Title>.md`.

Inputs
- Path: `harvest/chapters/in/<chapter-slug>.md`
- Content: frontmatter with `kind: chapter_input` and a Beats section

Preconditions
- File exists under `harvest/chapters/in/` with valid YAML frontmatter.
- You have a finalized chapter body (drafted and edited).

Steps
1) Normalize frontmatter
   - Ensure/complete keys:
     - kind: change `chapter_input` → `chapter`
     - book_slug: <book-slug>
     - number: <NN>
     - title: <Chapter Title>
     - slug: <chapter-slug>
     - created: <YYYY-MM-DD> (today if missing)
     - pov, tense, target_words, themes[]
     - status, updated
2) Keep Beats
   - Retain the existing `# Beats` section (edit only if clarity requires).
3) Add Chapter body
   - Add `# Chapter` with the final body text.
4) Move the evolved file
   - Compute destination: `harvest/books/out/<book-slug>/chapters/`
   - Filename: `<NN>-<Chapter Title>.md` (pad number to 2 digits).
   - Move the same file (don’t copy).

Expected
- The original input is evolved in place, then moved under the book’s chapters folder.
- Final file contains: frontmatter (kind: chapter), Beats, Chapter.
- `harvest/chapters/in/` is clean; no archives created.

Notes
- Provenance is tracked via git history; no separate archive is used.

Operator Prompt (optional)
"""
You are evolving a chapter input.
1) Normalize frontmatter (kind→chapter; book_slug, number, title, slug, created, pov, tense, target_words, themes, status, updated).
2) Keep Beats; add Chapter body.
3) Move file to harvest/books/out/<book-slug>/chapters/<NN>-<Title>.md.
Do not create an archive; rely on git history.
"""

