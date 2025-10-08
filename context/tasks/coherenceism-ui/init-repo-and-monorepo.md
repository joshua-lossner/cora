---
kind: task
title: Initialize Repo and Monorepo (tokens + tui-shell)
project: coherenceism-ui
status: todo
updated: 2025-10-08
tags: [scaffold, monorepo, packages]
depends_on: []
---

# Task — Initialize Repo and Monorepo (tokens + tui-shell)

## Purpose
Create the coherenceism.ui repository as a workspaces monorepo housing shared design tokens and a reusable TUI shell.

## Steps
1) Initialize repo with workspaces (npm or pnpm) and two packages:
   - `packages/tokens/` — token sources + build to CSS variables and TS exports.
   - `packages/tui-shell/` — React + Ink components consuming tokens.
2) Add basic README and CONTRIBUTING, including versioning policy.
3) Set up TypeScript and build scripts for both packages.
4) Configure lint/format (optional) aligned with simplicity.

## Acceptance
- Repo exists with workspaces and two packages scaffolded; `npm run -w packages/tui-shell dev` boots a hello shell.
- Clear README describing purpose and consumption model.

## Roles
- App Architect/Engineer — scaffolding
- Project Manager — PR/open/log per CORA conventions

## Links
- `context/projects/coherenceism-ui.md:1`

