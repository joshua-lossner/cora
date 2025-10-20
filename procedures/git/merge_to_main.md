---
kind: procedure
title: Git — Merge to Main (Squash)
intent: Merge an approved PR into `main` using squash-merge and clean messages
status: active
updated: 2025-10-18
tags: [git, merge]
---

# Procedure — Merge to Main (Squash)

Pre-merge
- Ensure checks pass:
  - Content validation complete.
  - Release checklist applied if publishing downstream.
  - Branch up to date with `main`.
  - Preview diff reviewed (when merging a downstream `preview/` branch).

Steps
1) Squash-merge the PR into `main` with a concise message.
2) Delete the branch on remote (and local when done).
3) Pull latest `main` locally: `git checkout main && git pull --ff-only`.
4) Update logs (required):
   - Project page (e.g., `context/projects/<project>.md:1`) → find the PR entry and change Status from “PR Open” to “Merged”. Optionally add a one‑line post‑merge note.
   - Task frontmatter (e.g., `context/tasks/<project>/<task>.md`) → set `git_status: merged`; if the task’s objective is complete, set `status: done` and update `updated`.
   - Commit these documentation updates on a tiny follow‑up branch (e.g., `chore/pr-<number>-merge-log`) and open a fast PR; merge it.

Expected
- Main updated with a clean, single commit; branch removed.
 - Project PR log and task frontmatter reflect merged state.

Operator Prompt (to update logs)
"""
You just merged PR <number> to main.
Create a tiny branch to update logs:
- Project page PRs (Log): set Status to Merged; add optional note.
- Task frontmatter: set git_status: merged; status: done if appropriate; update date.
Open a small PR for this documentation‑only change and merge it.
"""
