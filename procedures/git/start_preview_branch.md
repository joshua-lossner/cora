---
kind: procedure
title: Git — Start Preview Branch (Downstream)
intent: Create a preview branch in a downstream repo and prep it for a PR back to `main`
status: active
updated: 2025-10-18
tags: [git, preview, downstream]
---

# Procedure — Start Preview Branch (Downstream)

Context
- Applies to downstream repos that consume CORA (e.g., `coherenceism-media`, `coherenceism-info`, future sibling sites).
- Goal: keep `main` deploy-ready while we stage changes on a preview branch that will merge back via PR.

Steps
1) Sync `main`:
   - `git fetch origin`
   - `git checkout main`
   - `git pull --ff-only`
2) Create the preview branch:
   - `git checkout -b preview/<short-slug>` (describe the change, e.g., `preview/album-card-a11y`)
3) Set scope and links:
   - Note the branch in the downstream project log/task entry.
   - Outline the intended change so reviewers know what to expect.
4) Start work in small commits; push when ready to share:
   - `git push -u origin preview/<short-slug>`

Expected
- A focused preview branch ready for iterative work and eventual PR to `main`.

Notes
- Each preview branch tracks one change; open a new branch instead of piling unrelated work.
- Delete the branch (remote/local) after the PR merges to keep the namespace clean.

