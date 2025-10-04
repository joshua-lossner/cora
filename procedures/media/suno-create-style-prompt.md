---
kind: procedure
title: Media — Suno Create Style Prompt
intent: Craft a concise, production-ready style prompt for Suno v5
status: active
updated: 2025-10-04
tags: [media, prompts, suno, style]
---

# Procedure — Suno Create Style Prompt

Purpose
- Produce a compact style prompt that reliably guides Suno v5 toward the intended sound, structure, and mood without referencing specific artists.

Inputs
- genre: primary genre (and optional subgenre or blend of two)
- mood: 2–4 adjectives (e.g., uplifting, somber, aggressive, dreamy)
- bpm: integer or descriptor (e.g., 128 BPM, slow ballad, mid‑tempo)
- instrumentation: 2–5 signature instruments/production elements
- vocals: on/off, voice style (male/female/duet/choir; gritty/sultry/breathy)
- language: lyrics language (if vocals on)
- structure: optional section cues (e.g., Intro → Build → Drop → Chorus; [Guitar Solo: 8s])
- negatives: list of exclusions (e.g., no electric guitar, no heavy reverb)
- references: high‑level descriptors only (era/scene, not named artists)
- persona_id (optional): link to a persona card if using a consistent voice

Steps
1) Focus the style: choose 1–2 genres/subgenres; write 2–4 vivid mood adjectives.
2) Pick signature sounds: list 2–5 instruments/production elements that define the track.
3) Set tempo/energy: choose BPM or a concise energy descriptor.
4) Map structure (optional): add 1–3 cues like build/drop/chorus or intro/verse/chorus; use short tags (e.g., [Drop: heavy bass]).
5) Vocals & language: decide on/off; specify voice character and language if on.
6) Add negatives: state any exclusions (e.g., “no distorted guitars”).
7) Compose the prompt:
   - Prose format (1–3 sentences) OR a compact JSON‑like line.
   - Keep it specific but brief; avoid long prose.
8) Final check: remove named artists; ensure clarity; keep within a short token budget.

Expected
- A one‑to‑three‑sentence style prompt (or small JSON) that includes genre/style, mood, tempo/energy, key instrumentation, optional section cues, vocals/language, and negatives.
- Prompt reads like production notes; no named artists or copyrighted lyrics.

Examples
- Prose — “Cinematic outlaw country, with bluesy pedal steel guitar and a raw, emotional atmosphere; ends as a cinematic southern soul ballad.”
- Prose — “A dreamy progressive house track at 128 BPM. Starts with airy pads and a soft beat, building with rising synth arpeggios. [Drop: heavy bass] with full drums and side‑chained chords, then an energetic, euphoric chorus.”
- JSON — `{"genre": "lofi jazz-trap", "mood": "chill yet dark", "elements": ["smooth saxophone riffs", "808 trap beat", "lo-fi piano samples"], "bpm": 85}`

Operator Prompt (to assist writing)
"""
You are crafting a Suno v5 style prompt. Ask for or use the following:
- genre (1–2), mood (2–4 adj), bpm/energy, 2–5 instruments/elements,
  vocals on/off (language, voice style), structure cues (optional), negatives.
Output either:
1) A concise prose prompt (1–3 sentences), OR
2) A compact JSON line with keys: genre, mood, elements, bpm, vocals?, language?, structure?, negatives?
Avoid named artists and copyrighted lyrics. Keep it brief and clear.
"""

Notes
- Keep references to era/scene/technique (e.g., “’90s grunge,” “analog synth pads”), not specific artists.
- Use negatives for exclusions instead of long lists of what to include.
- For longer forms (albums/sets), pair with lyrics/persona/concept procedures.

