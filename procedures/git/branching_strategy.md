---
kind: procedure
title: Git — Branching Strategy (Main + Feature/Bugfix + PRs)
intent: Describe how we branch, name, review, and merge changes into `main`
status: active
updated: 2025-10-04
tags: [git, branching, review]
---

# Procedure — Branching Strategy

Purpose
- Keep `main` production-ready. Do all work on short-lived branches. Merge via PR with lightweight checks.

Branches
- `main` — production; protected; PR-only merges.
- `feature/<short-slug>` — new capabilities or docs (e.g., `feature/roles-expansion`).
- `bugfix/<short-id>-<slug>` — fixes (e.g., `bugfix/112-broken-link`).

Commit & PR Conventions
- Small, linked commits. Reference paths (and tasks if applicable).
- PR title: brief imperative summary; body lists changed areas and links.
- Prefer squash-merge to keep history tidy; use clear final messages.

Required Checks (before merge)
- Content validation: `procedures/content/validate-content.md:1`.
- Role/procedure references resolve (if roles changed).
- Release checklist (when publishing downstream artifacts): `procedures/release/release_checklist.md:1`.

Owners
- Project Manager: starts branches; keeps scope small.
- QA/Release Manager: opens PRs, runs checks, and merges.

