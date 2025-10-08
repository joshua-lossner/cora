---
kind: task
title: Webhooks Sync and Conflict Handling
project: coherenceism-project
status: todo
git_status: none
branch: 
pr_url: 
updated: 2025-10-04
tags: [webhooks, github, sync]
depends_on: [wire-gui-actions-to-api]
---

# Task — Webhooks Sync and Conflict Handling

## Purpose
Keep the UI in sync with PR state (open/merged/closed) and handle update conflicts gracefully.

## Steps
1) Subscribe to GitHub webhooks (PR open/close/merge; checks complete).
2) Update UI state for affected tasks/projects on webhook receipt.
3) On conflict (drift vs. base SHA), prompt user to retry; API should rebase and reapply patch.
4) Log failures with enough detail to reproduce locally.

## Acceptance
- PR state changes reflect in the UI within seconds.
- Conflict cases present clear guidance and a retry path.

## Roles
- Integrations Engineer — `context/roles/integrations-engineer.md:1`
- Backend Engineer — `context/roles/backend-engineer.md:1`
- Project Manager — `context/roles/project-manager.md:1`

## Links
- `procedures/api/propose_cora_update_via_pr.md:1`
- `procedures/git/merge_to_main.md:1`

## Notes
- Prefer idempotent handlers; ensure webhook verification and replay safety.

