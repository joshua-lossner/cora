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

Lean Load (downstream)
- `COHERENCE.md` frontmatter `init.files` keeps startup small:
  - `README.md`, `package.json`, `scripts/build.js`
  - `src/templates/player.js`, `src/templates/router.js`, `src/templates/styles.css`

Run
- `npm install`
- `npm run build` → generates `public/`
- `npm run preview` → serves on 8001
- `npm run sync:suno` → backfill Suno MP3 URLs

Next Small Move
- Add per-song pages with lyrics and shareable links.

