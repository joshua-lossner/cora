---
kind: project
title: Project — Coherenceism Info Site
status: active
updated: 2025-10-18
tags: [site, static, cora-linked]
---

# Coherenceism Info — Public Site

Purpose
- Publish a static, framework-free site that orients new visitors to Coherenceism by rendering content sourced from CORA.

Repo
- Downstream: `coherenceism-info` (local). See its `AGENTS.md` for Lean Load and ops.

Lean Load (downstream)
- `COHERENCE.md` frontmatter lists minimal `init.files`:
  - `README.md`, `package.json`, `scripts/build.js`, `scripts/sync-content.js`
  - `src/templates/default.html`, `src/templates/home.html`, `src/templates/styles.css`

Run
- `npm install`
- `npm run sync`
- `npm run build` → generates `public/`
- `npm run dev` → watch mode
- `npm run preview` → serves `public/`

Next Small Move
- Add a simple Leaves index page with featured items and links back to CORA.

