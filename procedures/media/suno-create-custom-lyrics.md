---
kind: procedure
title: Media — Suno Create Custom Lyrics
intent: Write original, well-structured lyrics for Suno v5 with clear section tags
status: active
updated: 2025-10-04
tags: [media, prompts, suno, lyrics]
---

# Procedure — Suno Create Custom Lyrics

Purpose
- Produce singable, original lyrics formatted for Suno v5, using clear section tags and optional musical cues so the model performs the intended structure and feel.

Inputs
- concept/theme: short description of the song’s idea
- perspective/voice: I/you/they; optional persona_id
- language: lyrics language
- structure: ordered list of sections (e.g., Intro, Verse 1, Chorus, Verse 2, Bridge, Chorus, Outro)
- rhyme/meter: desired pattern (AABB/ABAB/none) and rough syllable target per line
- hook/chorus: a short, repeatable line or title phrase
- musical cues (optional): key, tempo/BPM, chord progression, time signature

Steps
1) Define the shape
   - Choose a familiar structure (e.g., Intro → Verse → Chorus → Verse → Bridge → Chorus → Outro).
   - Decide rhyme/meter targets (light, consistent patterns are best).
2) Craft the hook (Chorus)
   - Write a 1–2 line refrain with a memorable phrase; repeat exact wording.
3) Write verses for narrative
   - 2–4 lines per verse; concrete imagery; keep line length and rhythm consistent.
4) Add optional sections
   - [Intro]/[Outro] descriptors; [Bridge] for contrast; [Drop]/[Break]/[Guitar Solo] as needed.
   - Non‑sung directions must be in square brackets on their own lines (e.g., [Soft instrumental intro], [Guitar solo over chords]).
5) Add optional musical cues
   - Top‑of‑file meta tags on their own lines: [Key: G Major], [Tempo: 78 BPM], [Chord Progression: …].
6) Format with tags
   - Place tags on their own lines: [Verse 1], [Chorus], [Bridge], etc.; number repeated sections.
   - Put any words not meant to be sung out loud in square brackets [like this], not parentheses.
7) Final pass
   - Check singability, remove awkward phrasing, ensure section content matches energy (hooky chorus; narrative verses).
   - Verify all non‑sung descriptors/instructions are bracketed and on their own lines.

Expected
- A lyrics file that uses clear section tags, consistent line rhythm, and a memorable chorus, ready to paste into Suno v5 (UI or API custom‑lyrics mode).

Template
```
[Title: "<Song Title>"]
[Language: <e.g., English>]
[Key: <optional>]
[Tempo: <optional BPM>]
[Chord Progression: <optional>]

[Intro]
[Short instrumental intro]

[Verse 1]
<4–6 short lines>

[Chorus]
<2–4 short lines with repeated hook>

[Verse 2]
<4–6 short lines>

[Bridge]
[Descriptor or contrasting 2–4 lines]

[Chorus]
<repeat hook>

[Outro]
[Descriptor]
```

Operator Prompt (to assist writing)
"""
You are writing original, singable lyrics for Suno v5.
Ask for or infer: concept/theme, language, structure (sections), rhyme/meter, hook phrase, and any musical cues (key/BPM/chords).
Output in tagged format with lines under each tag. Keep lines concise; maintain consistent rhythm; avoid copyrighted lyrics. Use square brackets for any non‑sung descriptors or stage directions on their own lines (e.g., [Guitar solo], [Soft fade‑out]).
"""

Notes
- Tags should be on their own lines; avoid combining directives in one tag.
- Keep vocabulary natural for singing; avoid tongue‑twisters and overlong sentences.
- For API workflows, send lyrics in custom‑lyrics mode and ensure instrumental=false.
 - Non‑sung guidance: Always wrap non‑sung instructions in square brackets on their own line so they are treated as cues, not lyrics.

Links
- context/documentation/suno/suno-using-custom-lyrics.md:1
- context/documentation/suno/effective-style-prompt-writing.md:1
