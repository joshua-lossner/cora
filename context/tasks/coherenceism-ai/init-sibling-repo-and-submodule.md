---
kind: task
title: Initialize Sibling Repo and Add CORA Submodule
project: coherenceism-ai
status: done
git_status: none
branch: 
pr_url: 
updated: 2025-10-11
tags: [setup, git, submodule, siblings]
depends_on: [context/tasks/coherenceism-ai/decide-architecture-and-stack.md]
---

# Task — Initialize Sibling Repo and Add CORA Submodule

## Purpose
Create the downstream repository as a sibling of `cora/` at `~/Projects/coherenceism-ai/`, add CORA as a submodule (prefer remote URL), and mirror the scaffold.

## Steps
1) Create sibling repo at `~/Projects/coherenceism-ai/` and `git init -b main`.
2) Add CORA submodule (preferred remote URL) and init recursively.
3) Scaffold folders/files per `context/documentation/coherenceism-ai/repo-scaffold.md:1` or mirror from local scaffold.
4) Make initial commit and open a PR (optional).

## Acceptance
- Sibling repo exists with `cora/` submodule and scaffolded structure; initial commit pushed (if remote). Git fields updated here when PR opened. ✔

## Roles
- DevOps/SRE — `context/roles/devops-sre.md:1`
- Backend Engineer — `context/roles/backend-engineer.md:1`

## Notes
- If using local file protocol, use `git -c protocol.file.allow=always submodule add ../cora cora`.
