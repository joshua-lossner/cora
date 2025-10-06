---
kind: workflow
title: Suno — Create Song
intent: Create a song from an inspiration input by crafting a style prompt and custom lyrics, then save a single song file
status: active
updated: 2025-10-04
tags: [workflow, suno, music]
---

# Workflow — Suno Create Song

This Markdown‑only workflow chains two procedures to create a song from a simple input file. It evolves the input itself and then moves it to `content/songs/out/<YYYY-MM-DD>/<song-slug>/`.

## Actors
- Writer/Editor — `context/roles/writer-editor.md:1`
- Media Producer — `context/roles/media-producer.md:1`
- Project Manager — `context/roles/project-manager.md:1`

## Inputs
- One file at `content/songs/in/<slug>.md` using the template `content/songs/in/TEMPLATE.md:1`.
- Recommended references:
  - `context/documentation/suno/effective-style-prompt-writing.md:1`
  - `context/documentation/suno/suno-using-custom-lyrics.md:1`

## Outputs
- `content/songs/out/<YYYY-MM-DD>/<song-slug>/<song-name>.md` — the evolved input file (now a song) containing frontmatter, Inspiration, Style Prompt, and Lyrics.
  - No archive folder is used; provenance is tracked via git history.

## Steps (Prompts to Use)

1) Prepare Input (PM)
- Copy `content/songs/in/TEMPLATE.md:1` to `content/songs/in/<slug>.md` and fill frontmatter and Inspiration section.

2) Create Style Prompt (Media Producer)
- Open: `procedures/media/suno-create-style-prompt.md:1`
- Use the Operator Prompt to produce a concise style prompt string based on the input’s frontmatter and inspiration.

3) Write Custom Lyrics (Writer/Editor)
- Open: `procedures/media/suno-create-custom-lyrics.md:1`
- Draft original lyrics with clear section tags that match the intended structure and energy.

4) Title the Song (PM)
- Propose 3 short title candidates that match mood/genre; select one.
- Derive `<song-slug>` from the chosen title (kebab‑case, ASCII).

5) Evolve the Input (Scribe)
– Follow: `procedures/media/evolve_and_move_song.md:1`.
- In the same input file:
  - Normalize/fill frontmatter keys (title, slug, created date, language, genre, mood, energy_bpm, instrumentation, vocals, structure, negatives, persona_id, references).
  - Change `kind: song_input` to `kind: song`.
  - Keep the existing `# Inspiration` section.
  - Add two sections below Inspiration:
    - `# Style Prompt` — final, concise style prompt.
    - `# Lyrics` — tagged lyrics. If instrumental, include tagged instrumental cues (e.g., [Intro], [Head A], [Solo], [Outro]) rather than vocals.
- Create folder `content/songs/out/<YYYY-MM-DD>/<song-slug>/` (use the file’s `created` date if set; otherwise today).
- Move the evolved file into that folder and name it `<Song Title>.md`.

Frontmatter keys (reference)
- kind: song
- title, slug, created (YYYY‑MM‑DD)
- language, genre, mood[], energy_bpm
- instrumentation[], vocals { on, style }, structure[]
- negatives[], persona_id, references[]

6) Move (PM)
- Move the evolved file out of `content/songs/in/` into `content/songs/out/<YYYY-MM-DD>/<song-slug>/<Song Title>.md`.
- `content/songs/in/` stays clean; no separate archive is created.

## Chain (Procedures)
- `procedures/media/evolve_and_move_song.md:1`
- `procedures/media/suno-create-style-prompt.md:1`
- `procedures/media/suno-create-custom-lyrics.md:1`

## Success Signals
- Style prompt is concise and follows the key elements (genre/mood/tempo/instrumentation/structure/vocals/negatives).
- Lyrics are original, singable, with clear section tags; chorus contains a memorable repeated hook.
- Final file saved under the correct path with accurate frontmatter and both sections present.
- Evolved input moved under dated output folder; no archive created.
