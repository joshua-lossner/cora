---
kind: procedure
title: Git — Update Project PR Log and Task Frontmatter
intent: Ensure PR logs and task git fields are updated on PR open and merge
status: active
updated: 2025-10-04
tags: [git, logging, pm]
---

# Procedure — Update Project PR Log and Task Frontmatter

Purpose
- Keep a reliable, human‑readable history by updating PR log entries and task git fields at PR open and merge.

When to Run
- Immediately after opening a PR.
- Immediately after merging a PR (in a tiny follow‑up branch).

Steps — On PR Open (feature branch)
1) Project page (e.g., `context/projects/<project>.md:1`):
   - Add a line to “PRs (Log)” with: `YYYY-MM-DD — <branch> — <title> — Status: PR Open — PR: <url>`.
   - Add a short indented Summary line if helpful.
2) Task frontmatter (e.g., `context/project-tasks/<project>/<task>.md`):
   - `git_status: pr_open`, set `branch` and `pr_url`, update `updated` date.
3) Commit these documentation updates to the same feature branch.

Steps — On Merge (follow‑up tiny branch)
1) Project page: change the PR entry’s Status to `Merged` and add a brief post‑merge note if needed.
2) Task frontmatter: set `git_status: merged`; if the task objective is complete, set `status: done` and update `updated` date.
3) Commit on a tiny branch (e.g., `chore/pr-<number>-merge-log`) and open a quick PR; merge it.

Acceptance
- PR log reflects current state (open vs. merged) with links.
- Task frontmatter accurately mirrors git state across branch → PR open → merged.

Links
- `procedures/git/open_pull_request.md:1`
- `procedures/git/merge_to_main.md:1`

