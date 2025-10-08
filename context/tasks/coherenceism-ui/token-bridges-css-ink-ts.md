---
kind: task
title: Token Bridges — CSS vars, Ink theme, TS exports
project: coherenceism-ui
status: todo
updated: 2025-10-08
tags: [tokens, ink, css]
depends_on: [design-tokens-foundation]
---

# Task — Token Bridges: CSS vars, Ink theme, TS exports

## Purpose
Provide outputs for multiple runtimes: CSS variables for web, an Ink theme object for TUI, and typed TS exports for programmatic use.

## Steps
1) Build `tokens.css` (CSS variables) from tokens.json and document import usage.
2) Build `tokens.ink.ts` exporting a theme usable by Ink components (colors, emphasis, borders).
3) Build `tokens.ts` exporting typed values for Node consumers.
4) Wire simple build script (`npm run build` in packages/tokens).

## Acceptance
- CSS, Ink, and TS outputs build from a single source; sample consumers compile.

## Roles
- Engineer

## Links
- `context/projects/coherenceism-ui.md:1`

