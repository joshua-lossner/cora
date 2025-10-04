---
kind: procedure
title: Git — Open Pull Request
intent: Open a PR from a feature/bugfix branch to `main` with lightweight checks
status: active
updated: 2025-10-04
tags: [git, pr]
---

# Procedure — Open Pull Request

Steps
1) Push your branch:
   - `git push -u origin <branch-name>`
2) Open PR to `main` and include:
   - Summary (what/why)
   - Paths changed and linked procedures/roles
   - Checklist outcomes (validation, release needs)
   - Links to project/tasks
3) Request review from QA/Release Manager (and others as needed).
4) Update the relevant project page and task:
   - Project page (e.g., `context/projects/cora.md:1`) → add an entry under “PRs (Log)” with date, branch, title, summary, status = “PR Open”, and the PR link.
   - Task frontmatter (e.g., `context/project-tasks/<project>/<task>.md`) → set `git_status: pr_open`, add `branch` and `pr_url`, and update `updated`.

Expected
- A clear PR ready for review and checks.

Tools (optional)
- GitHub CLI — `context/tools/github-cli.md:1`
  - Open PR from current branch (auto-fill template): `gh pr create --base main --fill`
  - Or specify title/body: `gh pr create --base main --title "<title>" --body-file .github/pull_request_template.md`
  - View PR in browser: `gh pr view --web`
  - Add reviewers: `gh pr edit --add-reviewer <user>`

PR Template (copy-paste)
Title
- Short, plain-language summary (e.g., “Add roles and tidy forest index”)

Summary
- What changed in simple terms and why it matters.

What Changed
- Bulleted list of key changes using repo-relative paths.
- Group by theme (docs, roles, procedures, seeds, forest, onboarding).

Checks Run
- Content validation status (frontmatter/links): pass/follow-ups
- Release checklist (only if publishing downstream): n/a or summary

Impact
- Any user-facing shifts, new conventions, or follow-ups to schedule.

Reviewers
- Who should look (by role), and why.

Links
- Project/task paths or notes that track this work.

Operator Prompt (to draft the PR body)
"""
You are writing a non-technical PR description for branch <branch-name> targeting main.
Explain what changed and why in plain language. List key changes grouped by theme with repo paths. Note checks run (validation, release), impact, reviewers, and links.
Keep it concise and scannable.
"""

Example (for inspiration)
- Summary: Expand roles and procedures, add seeds for downstream projects, and simplify the forest index so newcomers can navigate and operate CORA more easily.
- What Changed:
  - Roles: added manifests under `context/roles/*` (writer-editor, workflow-designer, …) and updated `context/roles/COHERENCE.md:1`.
  - Procedures: added git, validation, design, media, api, devops, a11y, localization, commerce, legal, analytics, policy under `procedures/*`.
  - Forest: switched to a single group manifest at `coherenceism/forest/coherenceism-forest.md:1` and index at `coherenceism/forest/COHERENCE.md:1`.
  - Seeds: added `coherenceism-identity`, `coherenceism-info`, `coherenceism-blog`, `coherenceism-media`, `coherenceism-design`, `coherenceism-net`, `coherenceism-com`, `coherenceism-studio`; removed `coherence-rails`.
  - Onboarding: updated `README.md:1` (Quick Start, Getting Started), `AGENTS.md:1` (Operator Quick Start).
  - References: linked validator `procedures/content/validate-content.md:1` and example session `context/documentation/cora/example-session-essay-from-notes.md:1`.
- Checks Run:
  - Content validation: manual pass (frontmatter/links updated); follow-up: run full validator procedure.
  - Release checklist: not applicable (docs/content repo only).
- Impact: clearer onboarding; consistent roles and git flow; simpler forest registry. Downstream sites can adopt design tokens later.
- Reviewers: QA/Release Manager (checks), Product Lead (scope), Forest Steward (lineage), Project Manager (next steps).
- Links: context/projects/COHERENCE.md:1 (projects index).
