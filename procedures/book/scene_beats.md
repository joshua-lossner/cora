---
kind: procedure
title: Book — Scene Beats (Per Chapter)
intent: Define 5–9 concrete beats that drive the chapter forward and set exits with momentum
status: active
updated: 2025-10-12
tags: [book, writing, beats]
---

# Procedure — Scene Beats (Per Chapter)

Purpose
- Create actionable beats per chapter so drafting stays focused and maintains momentum.

Inputs
- chapter_input with `book_slug`, `number`, `title`, `pov`, `tense`
- book outline, character bible, voice guide

Steps
1) Confirm purpose
   - State what changes from the start to end of the chapter (state/knowledge/relationship).
2) Write beats (5–9)
   - One line each; concrete turns. Note scene/sequel balance and exit hook.
   - (Optional) Add a rough words budget per beat (e.g., 400–800) to guide drafting.
3) Continuity hooks
   - Seeds/payoffs; character arc notes.

Expected
- Updated `# Beats` section in `harvest/chapters/in/<chapter-slug>.md`.

Operator Prompt (S'Vektor)
"""
You are writing 5–9 short, concrete beats for a chapter.
Return:
1) Chapter Purpose (1–2 lines: what changes)
2) Beats 1..N (one line each, concrete turn)
3) Exit Hook (1 line)
Keep lines short; ensure momentum into the next chapter.
"""

Links
- context/documentation/writing/story-structure.md:1
