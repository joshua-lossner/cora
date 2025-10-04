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

Post-merge
- Update project PR log entry to Status: Merged with date.
- Update related task frontmatter: `git_status: merged`; clear or keep `branch` and keep `pr_url` for record.

Expected
- Main updated with a clean, single commit; branch removed.

Tools (optional)
- GitHub CLI — `context/tools/github-cli.md:1`
  - Merge (squash + delete branch): `gh pr merge <number> --squash --delete-branch`
  - Ensure branch is up to date first (rebase/merge): see `procedures/git/update_branch_from_main.md:1`
