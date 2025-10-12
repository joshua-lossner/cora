---
kind: task
title: UI Scaffold — Shell (Chat + Document Pane)
project: coherenceism-ai
status: done
git_status: none
branch: 
pr_url: 
updated: 2025-10-11
tags: [frontend, ui]
depends_on: [context/tasks/coherenceism-ai/decide-architecture-and-stack.md]
---

# Task — UI Scaffold: Shell

## Purpose
Create the app shell with chat pane (right) and document pane (left or split), plus top bar and persona/role indicator.

## Steps
1) Build layout with responsive panes and a minimal theme.
2) Add session state (persona, role, load status) and checklist display.
3) Wire basic message input/stream display (no providers yet).

## Acceptance
- Navigable shell renders; chat messages display; load checklist placeholder is visible. ✔

## Roles
- Frontend Engineer — `context/roles/frontend-engineer.md:1`

## Notes
- Keep components small; prepare for diff preview injection.
