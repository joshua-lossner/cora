---
kind: procedure
title: Media — Evolve and Move Song (Suno)
intent: Turn a `song_input` into a finalized `song`, then move it under a dated out/ folder (no archive)
status: active
updated: 2025-10-05
tags: [media, suno, song, evolve]
---

# Procedure — Evolve and Move Song (Suno)

Purpose
- Evolve a single song input into its final form by filling frontmatter, keeping Inspiration, adding Style Prompt and Lyrics (or instrumental cues), then move it to `content/songs/out/YYYY-MM-DD/<song-slug>/<Title>.md`.

Inputs
- Path: `content/songs/in/<slug>.md`
- Content: frontmatter with `kind: song_input` and an Inspiration section

Preconditions
- File exists under `content/songs/in/` with valid YAML frontmatter.
- You have a chosen Title and a finalized Style Prompt (and Lyrics or instrumental tags).

Steps
1) Normalize frontmatter
   - Ensure/complete keys:
     - kind: change `song_input` → `song`
     - title: <Final Title>
     - slug: <kebab-case from Title>
     - created: <YYYY-MM-DD> (today if missing)
     - language, genre, mood[], energy_bpm
     - instrumentation[], vocals { on, style }, structure[]
     - negatives[], persona_id, references[]
2) Keep Inspiration
   - Retain the existing `# Inspiration` section (edit only if clarity requires).
3) Add sections
   - Add `# Style Prompt` with the compact, final prompt.
   - Add `# Lyrics`.
     - If instrumental, include tagged instrumental cues (e.g., `[Intro]`, `[Head A]`, `[Solo 1]`, `[Outro]`).
     - If vocals on, include fully tagged lyrics that match `structure`.
4) Move the evolved file
   - Compute destination: `content/songs/out/<created>/<song-slug>/`
   - Move the same file (don’t copy) and name it `<Title>.md`.

Expected
- The original input is evolved in place, then moved to the dated out folder.
- Final file contains: frontmatter (kind: song), Inspiration, Style Prompt, Lyrics.
- `content/songs/in/` is clean; no archives created.

Notes
- Provenance is tracked via git history; no separate archive is used.
- Use this together with:
  - `procedures/media/suno-create-style-prompt.md:1`
  - `procedures/media/suno-create-custom-lyrics.md:1`

Operator Prompt (optional)
"""
You are evolving a Suno song input.
1) Normalize frontmatter (kind→song; title, slug, created, language, genre, mood, BPM, instrumentation, vocals, structure, negatives, persona_id, references).
2) Keep Inspiration.
3) Add Style Prompt and Lyrics (or instrumental tags).
4) Move file to content/songs/out/YYYY-MM-DD/<slug>/<Title>.md.
Do not create an archive; rely on git history.
"""

