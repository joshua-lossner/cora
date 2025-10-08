---
kind: task
title: Wire GUI Actions to Write-through API
project: coherenceism-project
status: todo
git_status: none
branch: 
pr_url: 
updated: 2025-10-04
tags: [frontend, integration, api]
depends_on: [implement-write-through-pr-api]
---

# Task — Wire GUI Actions to Write-through API

## Purpose
Connect UI actions (mark task done, edit fields) to the API, with a confirmation preview and PR link display.

## Steps
1) Add “Mark done” and “Edit task fields” actions on task rows.
2) Confirmation dialog shows proposed changes and explains PR-based update.
3) Call API; on success, render PR badge/link and optimistic state.
4) Add a non-blocking toast with the PR URL; allow quick copy.
5) Reconcile state via webhook or polling PR status.

## Acceptance
- From the UI, a user can complete a task and see the created PR link.
- State reflects PR open/merged without page refresh.

## Roles
- Frontend Engineer — `context/roles/frontend-engineer.md:1`
- Product Lead — `context/roles/product-lead.md:1`
- Project Manager — `context/roles/project-manager.md:1`

## Links
- `procedures/api/propose_cora_update_via_pr.md:1`
- `procedures/git/update_project_pr_log.md:1`

## Notes
- Keep all edits PR-gated; do not mutate CORA directly from the client.

