---
kind: task
title: UI — Diff, Approvals, and Save to CORA
project: coherenceism-ai
status: done
git_status: none
branch: 
pr_url: 
updated: 2025-10-11
tags: [frontend, diff, safety]
depends_on: [context/tasks/coherenceism-ai/ufc-adapter-read-write.md]
---

# Task — UI: Diff, Approvals, and Save

## Purpose
Let the operator preview diffs and approve/decline writes to CORA paths, then save with provenance.

## Steps
1) Render patch/diff previews with clear path and line context.
2) Approve → write via UFC adapter; on success, trigger provenance log update.
3) Decline → discard or keep as pending suggestion.

## Acceptance
- Diff preview works; approved writes succeed; log entry is created in CORA. ✔

## Roles
- Frontend Engineer — `context/roles/frontend-engineer.md:1`
- Project Manager — `context/roles/project-manager.md:1`

## Notes
- Do not allow destructive ops without an explicit second confirm.
