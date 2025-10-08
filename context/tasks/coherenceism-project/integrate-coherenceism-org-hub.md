---
kind: task
title: Integrate coherenceism.org hub (tokens + shell)
project: coherenceism-project
status: todo
updated: 2025-10-09
tags: [integration, ui, tui, hub]
depends_on: []
---

# Task — Integrate coherenceism.org hub (tokens + shell)

## Purpose
Consume the shared tokens and shells from `coherenceism.org` to render the Projects/PRs/Tasks views with a consistent look and keyboard map.

## Steps
1) Add dependencies on `coherenceism.org` packages (GitHub URL) in this repo.
2) Wrap existing views with `<CoherenceShell>` and wire Header/LeftNav/TerminalPane.
3) Apply tokenized styles; map status and git_status to accent and muted colors.
4) Add command palette wiring for report/open/refresh.

## Acceptance
- TUI renders with shared shell; keyboard shortcuts work; existing features unchanged.

## Roles
- UI Engineer

## Links
- `context/projects/coherenceism-project.md:1`
- `context/projects/coherenceism-org.md:1`
