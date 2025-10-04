---
kind: task
title: Implement Write-through PR API Service
project: coherenceism-project
status: todo
git_status: none
branch: 
pr_url: 
updated: 2025-10-04
tags: [api, backend, github-app]
depends_on: [design-write-through-pr-api]
---

# Task — Implement Write-through PR API Service

## Purpose
Build a small service that receives GUI updates, validates and patches CORA files, and opens PRs with clear messages and links.

## Steps
1) Create GitHub App and configure app permissions and secrets.
2) Implement route handlers for designed endpoints; include:
   - Path whitelist, frontmatter edits (status/updated/git fields), PR log appenders.
   - Patch builder: compute minimal diff; include preview in response.
3) Open a PR per request: branch name `feature/task-<slug>-<yyyymmdd>` with links to affected paths.
4) Integrate content validator (`procedures/content/validate-content.md:1`) before commit.
5) Return `{ pr_url, branch, base_sha }` to the client; log audit data.

## Acceptance
- Service runs locally; calling the API opens a PR in CORA with correct edits.
- Validator passes; safety checks prevent edits outside allowed paths.

## Roles
- Backend Engineer — `context/roles/backend-engineer.md:1`
- QA/Release Manager — `context/roles/qa-release-manager.md:1`
- Project Manager — `context/roles/project-manager.md:1`

## Links
- `procedures/api/propose_cora_update_via_pr.md:1`
- `procedures/git/open_pull_request.md:1`, `procedures/git/merge_to_main.md:1`

## Notes
- Keep implementation language/tooling minimal; portability > framework.

