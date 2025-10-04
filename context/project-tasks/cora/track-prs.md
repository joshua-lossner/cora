---
kind: task
title: Track PRs in CORA Project Page
project: cora
status: todo
git_status: none
branch: 
pr_url: 
updated: 2025-10-04
tags: [git, pm]
depends_on: []
---

# Task — Track PRs in CORA Project Page

## Purpose
Keep a human-readable PR log on the CORA project page so non-technical collaborators can follow progress.

## Steps
1. On each PR open, add an entry to `context/projects/cora.md:1` under “PRs (Log)” (date, branch, title, summary, status, link).
2. Update the related task frontmatter with `git_status: pr_open`, `branch`, and `pr_url`.
3. On merge, mark `git_status: merged` and add a short post-merge note if needed.

## Acceptance
- Project page shows a current PR list with links and statuses.
- Task frontmatter reflects actual git state (branch/PR/merge).

