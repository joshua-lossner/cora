---
kind: task
title: UI — Left Nav with UFC Map
project: coherenceism-ai
status: done
git_status: none
branch: 
pr_url: 
updated: 2025-10-11
tags: [frontend, ufc, navigation]
depends_on: [context/tasks/coherenceism-ai/ufc-adapter-read-write.md]
---

# Task — UI: Left Nav with UFC Map

## Purpose
Expose CORA structure in the UI: Coherenceism tree, Context, Personas, Procedures, Workflows, Projects.

## Steps
1) Render sections from adapter; lazy-load deeper lists.
2) Selecting a path opens it in the document pane.
3) Provide quick filters (recent, changed, favorites).

## Acceptance
- Left nav lists key UFC sections; clicking opens files with path shown. ✔

## Roles
- Frontend Engineer — `context/roles/frontend-engineer.md:1`

## Notes
- Respect path conventions; show repo-relative paths in tooltips.
