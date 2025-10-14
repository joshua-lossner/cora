---
kind: procedure
title: Book — Line Edit (Chapter)
intent: Tighten clarity, rhythm, and imagery while preserving voice
status: active
updated: 2025-10-12
tags: [book, editing, line]
---

# Procedure — Line Edit (Chapter)

Purpose
- Improve readability and rhythm without changing scene purpose or content.

Inputs
- developmentally edited chapter body
- voice guide constraints

Steps
1) Clarity
   - Remove redundancy and hedging; prefer concrete over abstract.
2) Rhythm
   - Vary sentence length; one longer reflective line per major beat.
3) Imagery
   - Replace clichés; add tiny sensory anchors.
4) Voice integrity
   - Keep diction and distance consistent with voice guide.

Expected
- A refined chapter body and `edits.diff.md` explaining major changes (optional).

Operator Prompt (Ivy)
"""
You are line-editing a chapter. Preserve voice and content.
Return the refined body only. Optionally add a short edits.diff section with bullet highlights.
"""

Links
- context/documentation/writing/editing-passes.md:1

