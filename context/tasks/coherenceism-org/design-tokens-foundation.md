---
kind: task
title: Design Tokens — Foundation (colors, type, spacing)
project: coherenceism-org
status: todo
updated: 2025-10-09
tags: [tokens, design]
depends_on: [init-repo-and-monorepo]
---

# Task — Design Tokens: Foundation

## Purpose
Define a small, coherent token set (colors, typography, spacing, radii) that expresses the CORA forest terminal aesthetic and can map to both TUI and web consumers pulling from coherenceism.org.

## Steps
1) Draft `packages/tokens/src/tokens.json` with semantic keys (bg, surface, text, muted, accent, warning, danger; space-1..4; radius-0..2; mono/sans font families and sizes).
2) Document token naming and usage in `packages/tokens/README.md`.
3) Include light/dark variants or a single neutral set with accent override.

## Acceptance
- tokens.json exists with a minimal but complete set; names are semantic and stable.
- README explains how tokens map to Ink and CSS variables.

## Roles
- Designer/Engineer

## Links
- `context/projects/coherenceism-org.md:1`
