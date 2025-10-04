---
kind: procedure
title: Git — Start Bugfix Branch
intent: Create a short-lived bugfix branch to address a specific issue
status: active
updated: 2025-10-04
tags: [git, bugfix]
---

# Procedure — Start Bugfix Branch

Steps
1) Sync `main` (same as start_feature): fetch, checkout main, pull.
2) Create branch:
   - `git checkout -b bugfix/<id-or-slug>` (e.g., `bugfix/broken-forest-link`)
3) Confirm reproduction and define fix scope in the related task note.
4) Commit the minimal fix and any required tests/docs updates.

Expected
- A bugfix branch focused on one problem.

