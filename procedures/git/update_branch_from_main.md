---
kind: procedure
title: Git — Update Branch from Main
intent: Bring a feature/bugfix/preview branch up to date with `main`
status: active
updated: 2025-10-18
tags: [git, sync]
---

# Procedure — Update Branch from Main

Applies to any short-lived branch (`feature/`, `bugfix/`, or downstream `preview/`).

Steps (safe fast-forward where possible)
1) On your branch, fetch latest: `git fetch origin`
2) Rebase onto main (preferred for tidy history):
   - `git rebase origin/main`
   - Resolve conflicts if prompted; continue rebase
   - Alternatively, merge: `git merge origin/main`
3) Run validations/tests as needed; push updated branch: `git push --force-with-lease` (if rebased)

Expected
- Branch aligned with `main`; PR reflects latest base.
