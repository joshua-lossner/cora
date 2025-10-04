---
kind: procedure
title: Site — Render Leaves Index
intent: Render a list/grid of leaves from CORA with titles, summaries, and links
status: active
updated: 2025-10-04
tags: [site, rendering]
---

# Procedure — Render Leaves Index

Purpose
- Show a browsable index of leaves using CORA as the source of truth.

Inputs
- Path to CORA submodule (e.g., `cora/`), glob for leaves (e.g., `cora/coherenceism/leaves/*.md`)

Steps
1) Parse frontmatter for each leaf: `title`, `summary`, `canonical_slug`, `updated`.
2) Sort by `updated` (desc) or as desired.
3) Render list/grid linking to leaf pages (or downstream render of leaf content).

Expected
- Leaves index page with correct titles/summaries and working links.

