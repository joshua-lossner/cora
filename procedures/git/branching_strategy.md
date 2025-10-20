---
kind: procedure
title: Git — Branching Strategy (Main + Feature/Bugfix + PRs)
intent: Describe how we branch, name, review, and merge changes into `main`
status: active
updated: 2025-10-18
tags: [git, branching, review]
---

# Procedure — Branching Strategy

Purpose
- Keep `main` production-ready. Do all work on short-lived branches. Merge via PR with lightweight checks.

Branches
- `main` — production; protected; PR-only merges.
- `preview/<short-slug>` — downstream staging branches (e.g., `preview/media-player-polish`). Every change in sibling repos such as `coherenceism-media` and `coherenceism-info` starts here; merge back via PR to `main`.
- `feature/<short-slug>` — new capabilities or docs in the CORA trunk (e.g., `feature/roles-expansion`).
- `bugfix/<short-id>-<slug>` — fixes in the CORA trunk (e.g., `bugfix/112-broken-link`).

Commit & PR Conventions
- Small, linked commits. Reference paths (and tasks if applicable).
- PR title: brief imperative summary; body lists changed areas and links.
- Prefer squash-merge to keep history tidy; use clear final messages.
 - Update logs: on PR open, add to project “PRs (Log)” and set task git fields; on merge, mark the entry Merged and set task `git_status: merged` (doc-only follow-up branch is fine).

Required Checks (before merge)
- Content validation: `procedures/content/validate-content.md:1`.
- Role/procedure references resolve (if roles changed).
- Release checklist (when publishing downstream artifacts): `procedures/release/release_checklist.md:1`.
- Preview diff reviewed in downstream sites before PR merge (run the site locally or via hosting preview as available).

Downstream Preview Flow
1) Create a preview branch from `main`: `procedures/git/start_preview_branch.md:1`.
2) Keep the preview branch focused on a single change; push after establishing the first meaningful commit.
3) When ready, open a PR from `preview/<slug>` to `main`: `procedures/git/open_pull_request.md:1`.
4) After merge, delete the preview branch (remote and local) and confirm the downstream deploy step ran cleanly.

Owners
- Project Manager: starts branches; keeps scope small.
- QA/Release Manager: opens PRs, runs checks, reviews previews, and merges.
