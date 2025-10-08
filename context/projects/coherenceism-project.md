---
kind: project
title: coherenceism.project — UFC Project Viewer
status: active
updated: 2025-10-04
tags: [projects, ui, ufc]
---

# coherenceism.project — UFC Project Viewer

## Purpose
Build a read‑only, UFC‑aware app that visualizes CORA projects, tasks (with git fields), PRs log, and links to roles/procedures/workflows — keeping you and your agents (Ivy, S’Vektor) in sync at a glance.

## Scope
- Reads from a local CORA submodule (no canon edits).
- Dashboards: projects list, tasks by project with status/updated/git fields, PRs log.
- Filters: status (todo/doing/blocked/done) and git_status (none/in_branch/pr_open/merged).
- Design: adopt `coherenceism.design` tokens/CSS for visual coherence.
- Optional: show PR titles/status via GitHub when configured.

## Dependencies
- CORA as a read‑only submodule (`cora/`).
- (Later) `coherenceism.design` tokens.
- (Optional) GitHub token for PR metadata.

## Tasks (Summary)
- [ ] context/tasks/coherenceism-project/init-repo-and-submodule.md:1
- [ ] context/tasks/coherenceism-project/parse-projects-and-tasks.md:1
- [ ] context/tasks/coherenceism-project/ui-scaffold-and-filters.md:1
- [ ] context/tasks/coherenceism-project/pr-links-and-a11y.md:1
- [ ] context/tasks/coherenceism-project/design-write-through-pr-api.md:1
- [ ] context/tasks/coherenceism-project/implement-write-through-pr-api.md:1
- [ ] context/tasks/coherenceism-project/wire-gui-actions-to-api.md:1
- [ ] context/tasks/coherenceism-project/webhooks-sync-and-conflicts.md:1
 - [ ] context/tasks/coherenceism-project/integrate-coherenceism-ui-shell.md:1

## PRs (Log)
- Add entries here when opening PRs (date, branch, title, summary, status, link).
- Add entries here when opening PRs (date, branch, title, summary, status, link).
- 2025-10-04 — feature/write-through-api-tasks — Add write-through PR API tasks and procedures — Status: Merged — PR: https://github.com/joshua-lossner/cora/pull/8

## Notes
- Downstream path: `~/Projects/coherenceism.project/` (code lives there; this file tracks intent/plan in CORA).

## Next Small Moves
- Initialize downstream repo and add CORA submodule — `context/tasks/coherenceism-project/init-repo-and-submodule.md:1`
- Implement UFC adapter to parse projects and tasks — `context/tasks/coherenceism-project/parse-projects-and-tasks.md:1`
- Draft UX brief and scaffold UI with filters — `context/tasks/coherenceism-project/ui-scaffold-and-filters.md:1`
