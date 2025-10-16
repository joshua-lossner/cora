---
kind: procedure
title: Media — Evolve and Move Album (Suno)
intent: Turn an `album_input` into a finalized `album`, then move it under a dated out/ folder (no archive)
status: active
updated: 2025-10-05
tags: [media, suno, album, evolve]
---

# Procedure — Evolve and Move Album (Suno)

Purpose
- Evolve a single album input into its final form by normalizing frontmatter, completing the album sections, then moving it to `harvest/albums/out/<album-slug>/album.md`.

Inputs
- Path: `harvest/albums/in/<album-slug>.md`
- Content: frontmatter with `kind: album_input` and an Inspiration section

Preconditions
- File exists under `harvest/albums/in/` with valid YAML frontmatter.
- You have (or will generate) the Concept, Tracklist (ordered), and Notes.

Steps
1) Normalize frontmatter
   - Ensure/complete keys:
     - kind: change `album_input` → `album`
     - title: <Album Title>
     - slug: <album-slug>
     - created: <YYYY-MM-DD> (today if missing)
     - language, genre, mood[], energy_bpm
     - instrumentation[], vocals { on, style }
     - negatives[], persona_id, references[]
     - tracks[]: list of `{ title: <Track Title>, slug: <track-slug> }` in final order
2) Sections
   - Keep `# Inspiration` as the raw conceptual seed (optional to keep brief).
   - Add/complete:
     - `# Concept` — 3–6 sentences describing the arc and motifs.
     - `# Tracklist` — numbered list with one‑line themes per track.
     - `# Notes` — production/sequencing notes.
3) Move the evolved file
   - Compute destination: `harvest/albums/out/<album-slug>/album.md`
   - Create folder if needed and move the same file (don’t copy).
4) (Optional) Scaffold per‑track song inputs
   - Create `harvest/songs/in/<track-slug>.md` for each track using the songs template, prefill from album frontmatter, and run `procedures/media/evolve_and_move_song.md:1` for each.
5) Update links index (optional now, recommended later)
   - Create/update `harvest/albums/out/<album-slug>/index.md` with links to `album.md` and each song output path.

Expected
- The original album input is evolved in place, then moved under `harvest/albums/out/<album-slug>/album.md`.
- Final file contains: frontmatter (kind: album), Concept, Tracklist, Notes (Inspiration may remain for provenance of intent).
- No archives are created; `harvest/albums/in/` stays clean.

Notes
- Provenance is tracked via git history; no separate archive is used.
- Pair this with:
  - `workflows/music/suno-create-album.md:1` (end‑to‑end album flow)
  - `procedures/media/evolve_and_move_song.md:1` (per‑track evolution)

Operator Prompt (optional)
"""
You are evolving a Suno album input.
1) Normalize frontmatter (kind→album; title, slug, created, language, genre, mood, BPM, instrumentation, vocals, negatives, persona_id, references, tracks[]).
2) Keep Inspiration; add Concept, Tracklist, Notes.
3) Move file to harvest/albums/out/<album-slug>/album.md.
Do not create an archive; rely on git history.
"""
