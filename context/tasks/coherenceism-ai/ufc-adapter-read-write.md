---
kind: task
title: Implement UFC Adapter (Read, Diff, Write with Approvals)
project: coherenceism-ai
status: done
git_status: none
branch: 
pr_url: 
updated: 2025-10-11
tags: [ufc, backend]
depends_on: [context/tasks/coherenceism-ai/init-repo-and-submodule.md]
---

# Task — Implement UFC Adapter

## Purpose
Provide safe access to CORA content: list/map paths, parse frontmatter, compute diffs, and apply writes behind explicit operator approvals.

## Steps
1) Implement readers (chunked, path-safe) and frontmatter parser.
2) Diff engine that returns patch preview for UI.
3) Write layer with guardrails (repo-relative, no destructive ops without confirm).

## Acceptance
- Functions available in app backend; unit tests for path safety and diff output. ✔

## Roles
- Backend Engineer — `context/roles/backend-engineer.md:1`

## Notes
- Never upload entire repo to providers; send minimal slices per step.
