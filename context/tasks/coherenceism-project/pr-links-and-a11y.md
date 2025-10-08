---
kind: task
title: PR Links, GitHub Integration (Optional), and A11y Pass
project: coherenceism-project
status: todo
git_status: none
branch: 
pr_url: 
updated: 2025-10-04
tags: [integrations, github, accessibility]
depends_on: [ui-scaffold-and-filters]
---

# Task — PR Links, GitHub Integration (Optional), and A11y Pass

## Purpose
Surface PR links/status for tasks in the UI. Optionally enrich with GitHub PR titles/status when a token is configured. Run an accessibility pass across the app.

## Steps
1) Display PR links from task frontmatter (`pr_url`, `branch`, `git_status`).
2) Optional GitHub integration:
   - If `GITHUB_TOKEN` provided, fetch PR title/status by URL or branch and render read-only.
   - Keep integration purely optional; feature-gate by env var.
3) Run `procedures/accessibility/a11y_audit.md:1` and fix critical issues.
4) Start a branch; open PR; update git fields here.

## Acceptance
- Tasks show PR link (when present) and a human label for `git_status`.
- With token present, PR title/status appears; without, UI still works.
- A11y audit results addressed for critical issues.

## Roles
- Integrations Engineer — `context/roles/integrations-engineer.md:1`
- Accessibility Lead — `context/roles/accessibility-lead.md:1`
- Frontend Engineer — `context/roles/frontend-engineer.md:1`
- Project Manager — `context/roles/project-manager.md:1`

## Links
- `procedures/accessibility/a11y_audit.md:1`
- `procedures/git/start_feature.md:1`, `procedures/git/open_pull_request.md:1`

## Notes
- Avoid write operations to GitHub; fetch only.

