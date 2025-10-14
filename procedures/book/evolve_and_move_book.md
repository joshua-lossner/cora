---
kind: procedure
title: Book — Evolve and Move Book
intent: Turn a `book_input` into a finalized `book`, then move it under the book’s out/ folder (no archive)
status: active
updated: 2025-10-12
tags: [book, evolve]
---

# Procedure — Evolve and Move Book

Purpose
- Evolve a single book input by normalizing frontmatter, completing core sections, and moving it to `harvest/books/out/<book-slug>/book.md`.

Inputs
- Path: `harvest/books/in/<book-slug>.md`
- Content: frontmatter with `kind: book_input` and Inspiration

Preconditions
- File exists under `harvest/books/in/` with valid YAML frontmatter.
- You have (or will generate) Voice, Outline, and Character sections.

Steps
1) Normalize frontmatter
   - Ensure/complete keys:
     - kind: change `book_input` → `book`
     - title: <Book Title>
     - slug: <book-slug>
     - created: <YYYY-MM-DD> (today if missing)
     - audience, genre, themes[], length_words, tone
     - persona_id, references[]
     - status, updated
2) Sections
   - Keep `# Inspiration` (optional to keep brief).
   - Add/complete:
     - `# Concept`
     - `# Voice` (paste or link `voice_guide.md`)
     - `# Outline` (summary + link to `outline.md`)
     - `# Characters` (summary + link to `character_bible.md`)
     - `# Notes`
3) Move the evolved file
   - Destination: `harvest/books/out/<book-slug>/book.md`
   - Create folder if needed and move the same file (don’t copy).

Expected
- The original input is evolved in place, then moved under `harvest/books/out/<book-slug>/book.md`.
- Final file contains: frontmatter (kind: book), Concept, Voice, Outline, Characters, Notes (Inspiration may remain).
- No archives are created; `harvest/books/in/` stays clean.

Notes
- Provenance is tracked via git history; no separate archive is used.

Operator Prompt (optional)
"""
You are evolving a book input.
1) Normalize frontmatter (kind→book; title, slug, created, audience, genre, themes, length_words, tone, persona_id, references, status, updated).
2) Keep Inspiration; add Concept, Voice, Outline, Characters, Notes.
3) Move file to harvest/books/out/<book-slug>/book.md.
Do not create an archive; rely on git history.
"""

