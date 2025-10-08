---
kind: procedure
title: API — Propose CORA Update via PR
intent: Turn a UI action into a CORA pull request with minimal, validated content edits
status: active
updated: 2025-10-04
tags: [api, github-app, safety]
---

# Procedure — API: Propose CORA Update via PR

Purpose
- Provide a safe, auditable way for apps to update CORA by creating pull requests for limited, whitelisted edits.

Inputs
- Project slug, task slug (when applicable)
- Desired changes (e.g., `status: done`, `updated: YYYY-MM-DD`, `git_status: pr_open|merged`, `branch`, `pr_url`)
- Base commit SHA of CORA `main` used to generate the patch

Steps
1) Validate request fields; ensure target paths are inside `context/projects/` or `context/tasks/`.
2) Read current files at the provided base SHA; compute minimal patch (frontmatter flips + PR log append).
3) Run content validator (`procedures/content/validate-content.md:1`).
4) Create branch `feature/task-<slug>-<yyyymmdd>` and commit patch with clear message (+ links to paths).
5) Open a PR to `main` and return `{ pr_url, branch, base_sha }`.
6) On PR open, ensure logs are updated per `procedures/git/open_pull_request.md:1`.

Expected
- A new branch and PR exist with only the intended edits; logs and task git fields are set.

Safety
- Enforce path whitelist; reject body fields outside allowed schema.
- Require base SHA to reduce race conditions; handle drift with a new patch on latest.

Notes
- Keep the service stateless where possible; log audit context (who, what paths, base sha).
