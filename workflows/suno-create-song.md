---
kind: workflow
title: Suno — Create Song
intent: Create a song from an inspiration input by crafting a style prompt and custom lyrics, then save a single song file
status: active
updated: 2025-10-04
tags: [workflow, suno, music]
---

# Workflow — Suno Create Song

This Markdown‑only workflow chains two procedures to create a song from a simple input file. It produces a single output file under `content/songs/out/<song-slug>/`.

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
- `content/songs/out/<song-slug>/<song-name>.md` — a single Markdown file with frontmatter and sections for Style Prompt and Lyrics.
- (Optional) Archive input to `content/songs/archive/<YYYY-MM-DD>/<slug>/input.md`.

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
- Derive `<song-slug>` from the chosen title (kebab-case, ASCII).

5) Compile Output (Scribe)
- Create folder `content/songs/out/<song-slug>/`.
- Save `<song-name>.md` with frontmatter and body using this shape:

```
---
kind: song
title: <Chosen Title>
slug: <song-slug>
created: <YYYY-MM-DD>
language: <from input>
genre: <from input>
mood: [ .. ]
energy_bpm: <number or descriptor>
instrumentation: [ .. ]
vocals: { on: true|false, style: <..> }
structure: [Intro, Verse 1, Chorus, Verse 2, Bridge, Chorus, Outro]
negatives: [ .. ]
persona_id: <optional>
references: [ .. ]
---

# Style Prompt
<paste final style prompt>

# Lyrics
<paste tagged lyrics>
```

## Chain (Procedures)
- `procedures/media/suno-create-style-prompt.md:1`
- `procedures/media/suno-create-custom-lyrics.md:1`

## Success Signals
- Style prompt is concise and follows the key elements (genre/mood/tempo/instrumentation/structure/vocals/negatives).
- Lyrics are original, singable, with clear section tags; chorus contains a memorable repeated hook.
- Final file saved under the correct path with accurate frontmatter and both sections present.

