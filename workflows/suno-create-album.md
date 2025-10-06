---
kind: workflow
title: Suno — Create Concept Album
intent: Create a concept album from a single input, generate track titles, scaffold song inputs, and (optionally) produce per‑track style prompts and lyrics
status: active
updated: 2025-10-04
tags: [workflow, suno, music, album]
---

# Workflow — Suno Create Concept Album

This Markdown‑only workflow turns one album input into a concept description, a curated track list, and per‑track song inputs. It uses the same two Suno procedures (style prompt and custom lyrics) optionally per track.

## Actors
- Writer/Editor — `context/roles/writer-editor.md:1`
- Media Producer — `context/roles/media-producer.md:1`
- Project Manager — `context/roles/project-manager.md:1`

## Inputs
- One file at `content/albums/in/<album-slug>.md` using the template `content/albums/in/TEMPLATE.md:1`.
- Recommended references:
  - `context/documentation/suno/effective-style-prompt-writing.md:1`
  - `context/documentation/suno/suno-using-custom-lyrics.md:1`

## Outputs
- `content/albums/out/<YYYY-MM-DD>/<album-slug>/album.md` — album frontmatter + sections (Concept, Tracklist, Notes).
- For each track: a song input file at `content/songs/in/<track-slug>.md` (based on the songs template), prefilled from the album context.
- Archived album input at `content/albums/archive/<YYYY-MM-DD>/<album-slug>/input.md`.
- Link index at `content/albums/out/<YYYY-MM-DD>/<album-slug>/index.md` — links to album overview and each track output.

## Steps (Prompts to Use)

1) Prepare Album Input (PM)
- Copy `content/albums/in/TEMPLATE.md:1` to `content/albums/in/<album-slug>.md`.
- Fill frontmatter (language, mood, energy_bpm, genre, instrumentation, vocals, negatives, persona, track_count and optional track_themes[]).
- Write the Inspiration section.

2) Draft Concept Album Description (Writer)
- Summarize the album’s narrative/arc (3–6 sentences). Include motifs, imagery, and recurring musical ideas.
- Save for use in titles and track‑level prompts.

3) Create Track Titles (Writer + PM)
- Propose `track_count` title candidates (or 6–12 if unspecified), each with a one‑line theme.
- Select/sequence the final track list; derive `<track-slug>` for each (kebab‑case, ASCII).

4) Scaffold Song Inputs (Scribe)
- For each track:
  - Copy `content/songs/in/TEMPLATE.md:1` → `content/songs/in/<track-slug>.md`.
  - Prefill frontmatter from the album (language, mood, energy_bpm, genre, instrumentation, vocals, structure, negatives, persona_id, references).
  - In “Inspiration”, write 2–4 lines derived from album concept + the track’s one‑line theme.

4a) Plan Structure Variations (Writer/Producer)
- Choose 2–4 tracks to vary structure for album flow (e.g., add [Pre‑Chorus], replace [Bridge] with [Instrumental Break]/[Guitar Solo], end with a double [Chorus]).
- Update each selected track’s `structure` list in its song input and reflect the variation in Inspiration notes.
- Keep the album’s core feel consistent while using variations to avoid sameness.

5) (Optional per Track) Create Style Prompt (Media Producer)
- Open: `procedures/media/suno-create-style-prompt.md:1`
- Produce a concise style prompt from the track input; paste into a working notes file or later into the final song file.

6) (Optional per Track) Write Custom Lyrics (Writer)
- Open: `procedures/media/suno-create-custom-lyrics.md:1`
- Draft original lyrics with section tags matching the intended structure.

7) Compile Album Output (PM)
- Create `content/albums/out/<YYYY-MM-DD>/<album-slug>/` (use today’s date).
- Save `album.md` with frontmatter:

```
---
kind: album
title: <Album Title>
slug: <album-slug>
created: <YYYY-MM-DD>
language: <from input>
genre: <from input>
mood: [ .. ]
energy_bpm: <number or descriptor>
instrumentation: [ .. ]
vocals: { on: true|false, style: <..> }
negatives: [ .. ]
persona_id: <optional>
references: [ .. ]
tracks:
  - { title: <Track 1>, slug: <track-1> }
  - { title: <Track 2>, slug: <track-2> }
  # …
---

# Concept
<3–6 sentence album description>

# Tracklist
1. <Track 1> — <one‑line theme>
2. <Track 2> — <one‑line theme>
...

# Notes
<Any production or sequencing notes>
```

8) Archive Album Input (PM)
- Create folder `content/albums/archive/<YYYY-MM-DD>/<album-slug>/` (use today’s date and the `<album-slug>`).
- Move the processed album input from `content/albums/in/<album-slug>.md` to `content/albums/archive/<YYYY-MM-DD>/<album-slug>/input.md`.
- Rationale: preserves provenance and keeps the `in/` queue clean.

9) Create Links Index (Scribe)
- Create `content/albums/out/<YYYY-MM-DD>/<album-slug>/index.md` with:
  - Frontmatter: `kind: album_links`, `title: <Album Title> — Track Links`, `updated: <YYYY-MM-DD>`.
  - Links: one to `album.md` and one per track pointing to `content/songs/out/<YYYY-MM-DD>/<track-slug>/*.md`.
  - Keep relative paths so the index is portable.

## Chain (Procedures)
- Per track (optional now, or in a later pass):
  - `procedures/media/suno-create-style-prompt.md:1`
  - `procedures/media/suno-create-custom-lyrics.md:1`

## Success Signals
- Album concept concisely describes narrative/mood/sonic through‑lines.
- Track list sequenced with clear per‑track themes and unique slugs.
- Song input files exist for each track with prefilled metadata and tailored Inspiration text.
- 2–4 tracks include intentional structure variants (pre‑chorus, instrumental break, double chorus) to add natural variation.
- Album input archived under the dated folder using the album slug.
 - Album links index exists and all links resolve to the generated outputs.
