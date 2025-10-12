---
kind: task
title: Quality — A11y Pass and Keyboard Shortcuts
project: coherenceism-ai
status: done
git_status: none
branch: 
pr_url: 
updated: 2025-10-11
tags: [quality, a11y, ux]
depends_on: [context/tasks/coherenceism-ai/ui-scaffold-shell.md]
---

# Task — Quality: A11y and Shortcuts

## Purpose
Ensure contrast, focus order, ARIA roles, and useful keyboard shortcuts (toggle voice, approve write, open diff).

## Steps
1) Run a quick a11y audit and fix top issues.
2) Add shortcuts and show a cheat sheet (Cmd+/).
3) Include basic screen reader cues in chat and diff views.

## Acceptance
- A11y checks pass; shortcuts are documented and functional.

## Roles
- Accessibility Lead — `context/roles/accessibility-lead.md:1`

## Notes
- Prefer semantic elements; avoid hidden focus traps.

