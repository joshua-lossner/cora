---
kind: project
title: coherenceism.org — Shared Artifact Hub
status: active
updated: 2025-10-09
tags: [ui, tokens, tui, design, hub]
---

# coherenceism.org — Shared Artifact Hub

## Purpose
Position `coherenceism.org` as the shared artifact hub for the CORA forest so downstream apps draw from one canonical source for front-end assets—design tokens, reusable TUI/web components, documentation, and any future shared surfaces.

## Scope
- Design tokens: color, typography, spacing, radii; exported for terminal (Ink) and web (CSS vars) consumers.
- Shared shells/components: Header, LeftNav, TerminalPane, Layout, CommandPalette, and web equivalents as they mature.
- Artifact registry: documentation, examples, keyboard map, accessibility guidance, and links to downstream adopters.
- Consumers: coherenceism.project (first), later others; hub remains source-of-truth for artifacts.

## Dependencies
- Node.js LTS; React + Ink for TUI; CSS variable export for web parity later.
- CORA (read-only) for conventions; no direct writes to CORA.

## Tasks (Summary)
- [ ] context/tasks/coherenceism-org/init-repo-and-monorepo.md:1
- [ ] context/tasks/coherenceism-org/design-tokens-foundation.md:1
- [ ] context/tasks/coherenceism-org/token-bridges-css-ink-ts.md:1
- [ ] context/tasks/coherenceism-org/tui-shell-layout-components.md:1
- [ ] context/tasks/coherenceism-org/command-palette-and-shortcuts.md:1
- [ ] context/tasks/coherenceism-org/docs-and-examples.md:1
- [ ] context/tasks/coherenceism-org/versioning-and-publish.md:1
- [ ] context/tasks/coherenceism-org/a11y-and-tests.md:1
- [ ] context/tasks/coherenceism-org/web-shell-stub.md:1

## PRs (Log)
- Add entries here when opening PRs (date, branch, title, summary, status, link).

## Next Small Moves
- Initialize repo with packages/tokens and packages/tui-shell scaffolds.
- Draft tokens.json and a minimal Ink theme mapping.
