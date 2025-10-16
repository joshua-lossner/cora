---
kind: procedure
title: Book — Draft Chapter
intent: Expand beats into a coherent chapter that honors POV/tense and the voice guide
status: active
updated: 2025-10-12
tags: [book, writing, draft]
---

# Procedure — Draft Chapter

Purpose
- Turn beats into a readable chapter with consistent voice, clear scene objectives, and momentum.

Inputs
- chapter_input with Beats
- voice guide, outline, character bible
- targets (optional): target_per_chapter words and tolerance (±10–15%)

Steps
0) Context skim (2–3 minutes)
   - Skim the prior 1–2 chapters’ openings/closings and the voice guide; note active threads, cadence, and any linker to carry.
1) Set rails
   - Confirm POV/tense and any diction/cadence constraints from the voice guide.
2) Plan expansion (optional, 2–3 bullets)
   - If under a strict target, pick beats likely to carry examples/method blocks.
3) Draft pass
   - Write scene-by-scene; 1–3 paragraphs per beat. Include sensory specifics and micro‑tension.
4) Length & exits
   - Aim for `target_per_chapter ± tolerance`.
   - Use small expansions (micro‑scenes, interiority, setting texture, concrete examples) or trims (collapse redundant beats, tighten summary) to land near target.
   - Ensure end‑of‑scene and end‑of‑chapter leave an open loop or small forward pressure.
5) Trim
   - Remove throat‑clearing, keep sentences active, vary rhythm.

Expected
- A clean draft body ready to paste under `# Chapter`, within target ± tolerance.

Operator Prompt (Ivy)
"""
You are drafting a chapter from beats.
Before drafting, skim the prior 1–2 chapters and the voice guide to align voice and cadence and pick up any linker. Maintain the specified POV/tense and voice guide. For each beat, write 1–3 short paragraphs. Keep concrete detail and momentum. End with a small open loop.
Return only the chapter body without extra commentary.
"""

Links
- context/documentation/writing/pov-tense-voice.md:1
