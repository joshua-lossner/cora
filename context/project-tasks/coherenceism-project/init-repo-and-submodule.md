---
kind: task
title: Initialize Downstream Repo and Add CORA Submodule
project: coherenceism-project
status: todo
git_status: none
branch: 
pr_url: 
updated: 2025-10-04
tags: [setup, git, submodule, integration]
depends_on: []
---

# Task — Initialize Downstream Repo and Add CORA Submodule

## Purpose
Create the downstream repository and add CORA as a read-only git submodule at `cora/`, documenting the integration so subsequent tasks can parse UFC content safely.

## Steps
1) Create downstream repo at `~/Projects/coherenceism.project/` (or chosen path) and initialize git.
2) Add CORA as submodule under `cora/` via `procedures/site/add_cora_submodule.md:1`.
3) Commit a short `docs/integration.md` noting which views will read from which `cora/` paths.
4) Start a feature branch for this setup via `procedures/git/start_feature.md:1`.
5) Open a PR when ready via `procedures/git/open_pull_request.md:1` and update this task’s git fields.

## Acceptance
- Downstream repo exists with `cora/` submodule initialized and documented.
- Branch opened; PR created or planned; git fields updated here when opened.

## Roles
- DevOps/SRE — `context/roles/devops-sre.md:1`
- Backend Engineer — `context/roles/backend-engineer.md:1`
- Project Manager — `context/roles/project-manager.md:1`

## Links
- `procedures/site/add_cora_submodule.md:1`
- `procedures/git/start_feature.md:1`
- `procedures/git/open_pull_request.md:1`

## Notes
- Keep CORA read-only; do not modify canon from the downstream app repo.

