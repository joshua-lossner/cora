---
kind: task
title: Scaffold Downstream Repo Structure
project: coherenceism-ai
status: done
git_status: none
branch: 
pr_url: 
updated: 2025-10-11
tags: [scaffold, repo, setup]
depends_on: [context/tasks/coherenceism-ai/init-repo-and-submodule.md, context/tasks/coherenceism-ai/decide-architecture-and-stack.md]
---

# Task — Scaffold Downstream Repo Structure

## Purpose
Create folders/files per the scaffold guide and minimal placeholders (no vendor code), enabling quick iteration.

## Steps
1) Mirror the structure in `context/documentation/coherenceism-ai/repo-scaffold.md:1`.
2) Add placeholder files (e.g., `contracts.ts` with interface stubs only; no provider code).
3) Verify dev server starts and renders the shell with placeholders.

## Acceptance
- Repo contains the scaffolded structure; app builds and renders an empty shell. ✔

## Roles
- DevOps/SRE — `context/roles/devops-sre.md:1`
- Frontend Engineer — `context/roles/frontend-engineer.md:1`

## Notes
- Keep placeholders minimal to respect CORA’s vendor-neutral policy.
