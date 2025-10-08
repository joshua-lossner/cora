---
kind: task
title: Command Palette + Keyboard Shortcuts
project: coherenceism-ui
status: todo
updated: 2025-10-08
tags: [tui, commands, a11y]
depends_on: [tui-shell-layout-components]
---

# Task — Command Palette + Keyboard Shortcuts

## Purpose
Add a minimal command palette and consistent keyboard map (↑/↓, Enter, Back, / search, f filters, r refresh, o open, ? help) to the TUI shell.

## Steps
1) Implement a palette overlay with typeahead, tokenized styles, and proper focus handling.
2) Expose a hook or prop-based API so apps can register commands.
3) Document default key bindings; ensure they’re discoverable via `?`.

## Acceptance
- Palette works with keyboard only; commands are pluggable; help overlay documents keys.

## Roles
- UI Engineer

## Links
- `context/projects/coherenceism-ui.md:1`

