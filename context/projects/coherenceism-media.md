---
kind: project
title: Project — Coherenceism Media (Music Site)
status: active
updated: 2025-10-18
tags: [music, site, static, cora-linked]
---

# Coherenceism Media — Music Site

Purpose
- Ship and maintain a static, framework-free music library that renders albums/tracks/lyrics sourced from CORA.

Repo
- Downstream: `coherenceism-media` (local). See its `AGENTS.md` for Lean Load and ops.

Branching
- Always work from `preview/<short-slug>` (use `procedures/git/start_preview_branch.md:1`).
- Open a PR from the preview branch back to `main` when ready; main stays ship-ready.
- Delete the preview branch after merge so the namespace stays clean.

Branches in Flight
- `preview/player-controls-fix` (2025-10-18) — Fix the slide-up player and ensure the global player stays in sync.

Lean Load (downstream)
- `COHERENCE.md` frontmatter `init.files` keeps startup small:
  - `README.md`, `package.json`, `scripts/build.js`
  - `src/templates/player.js`, `src/templates/router.js`, `src/templates/styles.css`

Run
- `npm install`
- `npm run build` → generates `public/`
- `npm run preview` → serves on 8001
- `npm run sync:suno` → backfill Suno MP3 URLs

## Tasks

### Critical (Priority 1)
- [ ] `fix-yaml-parsing-errors` — Fix multi-line YAML titles in album.md files
- [ ] `add-audio-error-handling` — Add fallback UI for failed audio loads
- [ ] `document-dev-server-workflow` — Document watch mode blocking behavior
- [ ] `run-lighthouse-audit` — Verify a11y score ≥95

### Performance (Priority 2)
- [ ] `lazy-load-track-metadata` — Reduce index.html from 145KB to <50KB
- [ ] `add-yaml-validation` — Catch malformed content during sync

### Features (Priority 3)
- [ ] `implement-keyboard-shortcuts` — Add Space/Arrow/etc. player controls
- [ ] `add-song-level-pages` — Individual song pages with full lyrics + SEO

### Future Enhancements (Priority 4)
- [ ] `implement-search` — Search across albums/songs/lyrics (Fuse.js)
- [ ] `add-playlist-export` — Create and export playlists as M3U/JSON
- [ ] `add-waveform-visualization` — Live spectrum analyzer (Web Audio API)
- [ ] `add-privacy-first-analytics` — Local-only listening stats

All tasks documented in `context/tasks/coherenceism-media/`

Next Small Move
- Fix YAML parsing errors (blocks other improvements)
