---
kind: task
title: TUI Shell — Layout + Core Components
project: coherenceism-ui
status: todo
updated: 2025-10-08
tags: [tui, ink, components]
depends_on: [token-bridges-css-ink-ts]
---

# Task — TUI Shell: Layout + Core Components

## Purpose
Implement reusable Ink components for the shared terminal-first shell: Header, LeftNav, TerminalPane, Layout, and simple separators.

## Steps
1) Create `packages/tui-shell` with Ink + TypeScript.
2) Implement components with token-aware styles and focus states.
3) Export a `<CoherenceShell>` layout that composes Header/LeftNav/Pane.
4) Add Story/demo script to render a mock view using sample data.

## Acceptance
- Components render with tokenized styles; layout resizes cleanly; keyboard focus visible.

## Roles
- UI Engineer

## Links
- `context/projects/coherenceism-ui.md:1`

