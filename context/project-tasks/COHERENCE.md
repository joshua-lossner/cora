---
kind: documentation
title: COHERENCE — Project Tasks
intent: Conventions and index for detailed project task documents grouped by project slug
status: active
updated: 2025-10-04
tags: [projects, tasks]
---

# Project Tasks — Conventions

Purpose
- Keep substantial task documentation out of the project page when tasks need more space. Group tasks under `context/project-tasks/<project-slug>/`.

Schema (frontmatter)
- kind: `task`
- title: string
- project: `<project-slug>` (matches file in `context/projects/`)
- status: `todo|doing|blocked|done`
- updated: `YYYY-MM-DD`
- tags: `[]` (optional)
- depends_on: `[task-slug, ...]` (optional)

Body Sections (recommended)
- Purpose — why this task exists
- Steps — short, verifiable actions
- Acceptance — success criteria/signals
- Links — artifact paths (workflows, content in/out, leaves)
- Notes — anything that aids execution

Usage
- Keep a short checklist on the project page; link to these task pages for detail.
- Update `status` and `updated` in the task frontmatter as you work.

