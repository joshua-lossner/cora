---
kind: procedure
title: Book — Character Bible
intent: Capture cast, wants/needs, contradictions, arcs, continuity, and sample voice lines
status: active
updated: 2025-10-12
tags: [book, writing, characters]
---

# Procedure — Character Bible

Purpose
- Define principal and secondary characters in a compact, operable format that supports drafting and edits.

Inputs
- cast list (names/roles), relationships, major locations
- for each principal: wants, needs, fears, contradictions, external/internal arcs

Steps
1) Principal profiles (5–9 fields)
   - Name, Role, Goal, Need, Fear, Contradictions, Arc (start→end), Voice Notes, Visuals.
2) Secondary cast
   - One‑liners with function and any continuity hooks.
3) Relationships map
   - Key dynamics and tensions; note turning points.
4) Sample lines
   - 1–2 dialogue beats per principal, matching voice guide.

Expected
- `character_bible.md` ready to save under `harvest/books/out/<book-slug>/character_bible.md`.

Operator Prompt (S'Vektor)
"""
You are creating a character bible.
For each principal character, return short fields: Role, Goal, Need, Fear, Contradictions, Arc, Voice Notes, Visuals.
Add a Secondary Cast list (one‑liners) and a short Relationships section.
Keep it one page if possible.
"""

