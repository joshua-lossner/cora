---
kind: project
title: coherenceism.ui — Shared Tokens + TUI Shell
status: active
updated: 2025-10-08
tags: [ui, tokens, tui, design]
---

# coherenceism.ui — Shared Tokens + TUI Shell

## Purpose
Provide a shared, terminal-first UI foundation for apps in the CORA forest so they look and behave like related “oaks”: common design tokens and a reusable TUI shell (Header · Left Nav · Terminal Pane · Command Palette).

## Scope
- Design tokens: color, typography, spacing, radii; exported for terminal (Ink) and web (CSS vars) consumers.
- TUI Shell components: Header, LeftNav, TerminalPane, Layout, CommandPalette.
- Developer ergonomics: docs, examples, keyboard map, a11y guidance.
- Consumers: coherenceism.project (first), later others.

## Dependencies
- Node.js LTS; React + Ink for TUI; CSS variable export for web parity later.
- CORA (read-only) for conventions; no direct writes to CORA.

## Tasks (Summary)
- [ ] context/tasks/coherenceism-ui/init-repo-and-monorepo.md:1
- [ ] context/tasks/coherenceism-ui/design-tokens-foundation.md:1
- [ ] context/tasks/coherenceism-ui/token-bridges-css-ink-ts.md:1
- [ ] context/tasks/coherenceism-ui/tui-shell-layout-components.md:1
- [ ] context/tasks/coherenceism-ui/command-palette-and-shortcuts.md:1
- [ ] context/tasks/coherenceism-ui/docs-and-examples.md:1
- [ ] context/tasks/coherenceism-ui/versioning-and-publish.md:1
- [ ] context/tasks/coherenceism-ui/a11y-and-tests.md:1
- [ ] context/tasks/coherenceism-ui/web-shell-stub.md:1

## PRs (Log)
- Add entries here when opening PRs (date, branch, title, summary, status, link).

## Next Small Moves
- Initialize repo with packages/tokens and packages/tui-shell scaffolds.
- Draft tokens.json and a minimal Ink theme mapping.
