---
kind: procedure
title: Git — Merge to Main (Squash)
intent: Merge an approved PR into `main` using squash-merge and clean messages
status: active
updated: 2025-10-04
tags: [git, merge]
---

# Procedure — Merge to Main (Squash)

Pre-merge
- Ensure checks pass:
  - Content validation complete.
  - Release checklist applied if publishing downstream.
  - Branch up to date with `main`.

Steps
1) Squash-merge the PR into `main` with a concise message.
2) Delete the branch on remote (and local when done).
3) Pull latest `main` locally: `git checkout main && git pull --ff-only`.

Expected
- Main updated with a clean, single commit; branch removed.

