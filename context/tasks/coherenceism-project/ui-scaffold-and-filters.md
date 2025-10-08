---
kind: task
title: UI Scaffold and Filters
project: coherenceism-project
status: todo
git_status: none
branch: 
pr_url: 
updated: 2025-10-04
tags: [frontend, ui, filters, design]
depends_on: [parse-projects-and-tasks]
---

# Task — UI Scaffold and Filters

## Purpose
Stand up a minimal, accessible UI that lists projects and tasks using the UFC adapter, with filters for `status` and `git_status`.

## Steps
1) Draft a UX Flow Brief via `procedures/design/ux_flow_brief.md:1` (views: projects list, project detail with tasks, PRs log).
2) Scaffold UI components (read-only):
   - Projects list with status chip and updated date.
   - Project detail: tasks table (status, updated, git_status, branch, PR link).
   - Filters: status (todo/doing/blocked/done), git_status (none/in_branch/pr_open/merged).
3) Apply baseline design tokens from `coherenceism.design` when available; otherwise keep semantic HTML and system fonts.
4) Keyboard and screen reader checks for core flows (list focus order, filter activation, link labels).
5) Start a branch; open PR and update git fields when ready.

## Acceptance
- UI renders projects and tasks from the adapter with working filters.
- Basic a11y checks pass (focus order, labels, status contrast).

## Roles
- Frontend Engineer — `context/roles/frontend-engineer.md:1`
- UX Designer — `context/roles/ux-designer.md:1`
- Design System Steward — `context/roles/design-system-steward.md:1`
- Project Manager — `context/roles/project-manager.md:1`

## Links
- `procedures/design/ux_flow_brief.md:1`
- `procedures/accessibility/a11y_audit.md:1`
- `procedures/git/start_feature.md:1`, `procedures/git/open_pull_request.md:1`

## Notes
- Keep components simple and data-first; no mutations.

