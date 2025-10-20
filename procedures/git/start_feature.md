---
kind: procedure
title: Git — Start Feature Branch
intent: Create a short-lived feature branch synced with `main`
status: active
updated: 2025-10-18
tags: [git, feature]
---

# Procedure — Start Feature Branch

Downstream repos use `procedures/git/start_preview_branch.md:1` instead; this procedure applies to work inside the CORA trunk.

Steps
1) Sync `main`:
   - `git fetch origin`
   - `git checkout main`
   - `git pull --ff-only`
2) Create branch:
   - `git checkout -b feature/<short-slug>` (e.g., `feature/forest-group`)
3) Scope & link:
   - Update the relevant project/tasks with what this branch will change.
4) Work in small commits; reference file paths in messages.

Expected
- A new feature branch ready for focused work.
