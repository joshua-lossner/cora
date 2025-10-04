---
kind: task
title: Design Write-through PR API for CORA Updates
project: coherenceism-project
status: todo
git_status: none
branch: 
pr_url: 
updated: 2025-10-04
tags: [api, spec, github-app, safety]
depends_on: []
---

# Task — Design Write-through PR API for CORA Updates

## Purpose
Define an HTTP API that converts GUI actions in coherenceism.project into CORA pull requests, keeping CORA canonical and fully auditable.

## Steps
1) Specify endpoints and payloads (minimal set):
   - `POST /cora/projects/{project}/tasks/{task}/state` → flip `status`, update `updated`, optional git fields.
   - `POST /cora/projects/{project}/log` → append PR log entries.
   - Path whitelist limited to `context/projects/` and `context/project-tasks/`.
2) Auth model: GitHub App with restricted perms (contents:write, pull_requests:write).
3) Conflict policy: optimistic (include base sha); on drift, rebase/update and re-run patch.
4) Output: branch, PR URL; include preview of the computed diff.
5) Document operator prompts and safety gates (no destructive edits; read-only preview first).

## Acceptance
- API spec doc exists with endpoints, payloads, responses, auth, and safety notes.
- Examples include sample requests for marking a task done and logging a PR.

## Roles
- Product Lead — `context/roles/product-lead.md:1`
- Backend Engineer — `context/roles/backend-engineer.md:1`
- QA/Release Manager — `context/roles/qa-release-manager.md:1`
- Project Manager — `context/roles/project-manager.md:1`

## Links
- `procedures/api/propose_cora_update_via_pr.md:1`
- `context/documentation/cora/knowledge-tree.md:1`
- `procedures/content/validate-content.md:1`

## Notes
- Default to read-only runtime; writes always go through PRs with human review.

