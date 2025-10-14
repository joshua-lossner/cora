---
kind: procedure
title: Book — Copy Edit (Chapter)
intent: Correct grammar, usage, and consistency; maintain a simple style sheet
status: active
updated: 2025-10-12
tags: [book, editing, copy]
---

# Procedure — Copy Edit (Chapter)

Purpose
- Clean surface errors and enforce consistency without altering meaning or voice.

Inputs
- line-edited chapter body
- style sheet (optional)

Steps
1) Mechanics
   - Grammar, punctuation, spelling; dialog punctuation; numerals.
2) Consistency
   - Names, capitalization, hyphenation; time and measure formats.
3) Style sheet
   - Create/update a minimal list of decisions (caps, hyphens, serial comma, etc.).
4) Markups
   - If needed, annotate only where meaning might be impacted; otherwise apply cleanly.

Expected
- Copy‑edited chapter body and (optional) `style_sheet.md` updates.

Operator Prompt (S'Vektor)
"""
You are copyediting a chapter. Fix mechanics and consistency; preserve meaning and voice.
Return the cleaned body and (if changed) a short style_sheet section.
"""

Links
- context/documentation/writing/editing-passes.md:1

