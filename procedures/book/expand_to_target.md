---
kind: procedure
title: Book — Expand to Target (Chapter)
intent: Plan and apply targeted expansions to reach per‑chapter wordcount within tolerance without padding
status: active
updated: 2025-10-14
tags: [book, writing, wordcount]
---

# Procedure — Expand to Target (Chapter)

Purpose
- Reach the per‑chapter word target (± tolerance) using meaningful expansions that strengthen clarity, example density, and flow — never filler.

Inputs
- chapter draft body (may be under target)
- beats, voice guide, outline
- target_per_chapter and tolerance (±10–15%)

Steps
1) Diagnose shortfall
   - Compute words missing vs target; choose 2–4 beats for expansion.
2) Choose expansion types (per beat)
   - Micro‑scene (1–2 short paragraphs with sensory anchors)
   - Interiority (brief interior thought revealing stakes)
   - Concrete example (Tuesday‑specific case)
   - Method snippet (checklist/table with 3–6 items)
   - Q&A (1–3 concise Q→A pairs that remove friction)
3) Allocate words
   - Aim ~120–200 words per micro‑scene; ~60–120 per interiority/example; ~80–160 per checklist/Q&A block.
4) Maintain flow
   - Ensure exits still propel forward; add or sharpen the final open loop.
5) Recount and trim
   - If over tolerance, tighten redundancy or fold two examples into one.

Expected
- Revised chapter body within target ± tolerance; momentum intact.

Operator Prompt (Ivy)
"""
You are expanding a chapter to reach a word target without padding.
Plan expansions by beat (micro‑scenes, interiority, concrete examples, method snippets, Q&A), apply them, and ensure the exit still carries momentum. Return only the revised chapter body.
"""

Notes
- Prefer examples grounded in the book’s domain; avoid generic anecdotes.
- Maintain voice constraints (POV/tense/diction/distance) from the guide.

