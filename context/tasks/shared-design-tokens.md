---
kind: documentation
title: Tasks — Shared Design Tokens
intent: Extract and share base tokens (colors, type, spacing) between .info and .blog
status: planned
updated: 2025-09-21
tags: [tasks, design, tokens]
---

# Shared Design Tokens — Tasks

## Steps
1. Extract tokens from coherenceism.blog `:root` into `cora/ui/tokens.css`
2. Replace blog inline tokens with an import
3. Import the same file in coherenceism.info

## Deliverables
- `cora/ui/tokens.css` with documented variables
- Both sites importing the same tokens

## Notes
- Keep variable names stable; capture palette per site if diverging later as overlays.

