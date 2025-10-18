---
kind: content
type: seed
title: Seed — Coherenceism Music Site
summary: A static, framework-free music library for Coherenceism — albums, songs, lyrics — built with a custom Node.js generator and vanilla JS UI.
status: active
updated: 2025-10-18
version: 2025.10
tags: [music, site, static, vanilla-js]
sites: [network]
spawned_systems: [coherenceism-media]
seed_stage: sprout
canonical_slug: coherenceism-music-site
parent: community-and-culture
authors: [Coherence Network]
related: [coherenceism-studio, coherenceism-media]
---

# Seed — Coherenceism Music Site

A focused music surface for the Coherenceism network: explore albums, queue tracks, and read lyrics. Optimized for clarity, persistence, and mobile listening.

## Purpose
- Present Coherenceism music as coherent albums and tracks with full lyrics.
- Keep runtime light (static HTML/CSS/JS) while offering a polished player and SPA-like routing.
- Keep canon in CORA; downstream code renders and hosts the site.

## Architecture (downstream repo: coherenceism-media)
- Static site generator: `scripts/build.js` produces `public/` from `src/content` + `src/templates`.
- Content inputs: synced from CORA harvest (`albums/out`, `songs/out`) via `scripts/sync-content.js`.
- Runtime UI: vanilla JS router + persistent global audio player (shuffle/repeat/seek/queue).
- Hosting: static host (Vercel). Audio on Vercel Blob with Suno fallback.

## Lean Load (agents)
- Downstream `AGENTS.md` exists in the repo root with a tailored Lean Load.
- Downstream `COHERENCE.md` includes frontmatter with minimal `init.files`:
  - `README.md`
  - `package.json`
  - `scripts/build.js`
  - `src/templates/player.js`
  - `src/templates/router.js`
  - `src/templates/styles.css`
- Treat everything else as index-only on initial load; open as needed.

## Developer Notes
- Commands: `npm install`, `npm run build`, `npm run watch`, `npm run preview` (serves `public/` on 8001).
- Keep generated output in `public/` and avoid hand edits for persistent changes.
- Prefer relative paths; link back to CORA sources in album/song pages where applicable.

## Success Signals
- Albums and tracks load instantly; audio keeps playing during navigation.
- Lean Load for agents reads only the minimal files; broader scans happen on demand.
- CORA remains the source of truth for lyrics, style prompts, and album metadata.

## Next Steps
1) Migrate remaining audio from Suno → Vercel Blob; update URLs via `sync:suno` where possible.
2) Add individual song pages with lyrics display and shareable links.
3) Explore search and lightweight playlist support while keeping the runtime minimal.
4) Optionally run a doc-only preflight: `procedures/site/downstream-check.md:1`.
