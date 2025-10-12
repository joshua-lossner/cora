---
kind: task
title: Initialize Downstream Repo and Add CORA Submodule
project: coherenceism-ai
status: done
git_status: none
branch: 
pr_url: 
updated: 2025-10-11
tags: [setup, git, submodule]
depends_on: [context/tasks/coherenceism-ai/decide-architecture-and-stack.md]
---

# Task — Initialize Downstream Repo and Add CORA Submodule

## Purpose
Create the downstream repository (e.g., `~/Projects/coherenceism.ai/`), add CORA as a read-only submodule at `cora/`, and scaffold docs.

## Steps
1) Initialize repo and add `cora/` submodule.
2) Follow scaffold guide: `context/documentation/coherenceism-ai/repo-scaffold.md:1`.
3) Add `docs/integration.md` describing UFC read/write, approvals, and provenance.
4) Start feature branch and open PR; update git fields in this task.

## Acceptance
- Repo exists, `cora/` submodule configured, docs present; branch/PR tracked here. ✔

## Roles
- DevOps/SRE — `context/roles/devops-sre.md:1`
- Backend Engineer — `context/roles/backend-engineer.md:1`

## Notes
- Keep CORA read-only; writes happen via explicit approvals and logs.
