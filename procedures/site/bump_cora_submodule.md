---
kind: procedure
title: Site — Bump CORA Submodule
intent: Update a downstream repo’s pinned CORA commit (or track branch) and commit the pointer
status: active
updated: 2025-10-04
tags: [site, git, submodule]
---

# Procedure — Bump CORA Submodule

Purpose
- Keep downstream projects in sync with CORA canonical by updating the `cora/` submodule pointer.

Inputs
- Desired target (branch tip or specific commit SHA)

Steps
1) From downstream repo root:
   - Track a branch (optional, one-time): `git submodule set-branch --branch main cora && git add .gitmodules && git commit -m "Track cora main"`
   - Update to latest tracked branch: `git submodule update --remote cora`
   - Or pin to a specific SHA: `cd cora && git fetch && git checkout <sha> && cd ..`
2) Commit the pointer bump:
   - `git add cora && git commit -m "Bump cora to <short-sha>"`
3) Open a PR; reference related CORA PRs in the body.

Expected
- Downstream repo points to the intended CORA commit; PR documents why.

Notes
- Submodules pin to a commit; updating requires a commit per downstream repo.

