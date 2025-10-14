---
kind: procedure
title: Book — Create Voice Guide
intent: Define POV, tense, diction, cadence, distance, devices, and negatives as a compact narrative voice guide
status: active
updated: 2025-10-12
tags: [book, writing, voice]
---

# Procedure — Create Voice Guide

Purpose
- Produce a compact voice guide that governs narrative choices across chapters so drafts stay consistent and readable.

Inputs
- premise: one-sentence premise
- audience & tone
- pov: 1st / 3rd-limited / omniscient
- tense: past / present
- diction: register and vocabulary constraints
- cadence: sentence length mix; imagery density; rhythm
- distance: narrative distance (close, medium, distant)
- devices: allowed stylistic moves (e.g., free indirect, epigraphs)
- negatives: exclusions (no head-hopping, no long flashbacks, etc.)

Steps
1) Choose voice rails
   - Fix POV and tense. State distance. Note any permissible deviations.
2) Define sound on the page
   - Diction/register; cadence (short/medium/long mix); imagery density; figurative boundaries.
3) Mark devices and constraints
   - Allowed devices (free indirect, scene/sequel, epigraphs); negatives (e.g., no authorial asides).
4) Provide 3–5 sample lines
   - Write 1–2 lines per key mode (narration, dialogue beat, interiority).
5) Final pass
   - Keep it one page max; concrete and operable.

Expected
- `voice_guide.md` content ready to paste under `harvest/books/out/<book-slug>/voice_guide.md` or into `book.md` under `# Voice`.

Operator Prompt (Ivy)
"""
You are defining a narrative voice guide for a book.
Ask for or infer: premise, audience, tone, POV, tense, diction, cadence, distance, devices, and negatives.
Return:
1) Voice Rails (POV, tense, distance)
2) Diction & Cadence
3) Devices (allowed) and Negatives (exclusions)
4) Sample Lines (3–5)
Keep it concise, specific, and operable for drafting.
"""

Links
- context/documentation/writing/pov-tense-voice.md:1

