---
kind: task
title: Parse CORA Projects and Tasks (UFC Adapter)
project: coherenceism-project
status: todo
git_status: none
branch: 
pr_url: 
updated: 2025-10-04
tags: [backend, parser, ufc]
depends_on: [init-repo-and-submodule]
---

# Task — Parse CORA Projects and Tasks (UFC Adapter)

## Purpose
Implement a read-only UFC adapter that scans `cora/context/projects/*.md` and `cora/context/tasks/*/*.md`, extracting frontmatter and key sections for the viewer app.

## Steps
1) Define data models for Project and Task (frontmatter + links to sections):
   - Project: title, status, updated, tags; tasks summary paths; PR log entries.
   - Task: project, status, updated, git_status, branch, pr_url, depends_on, tags.
2) Implement readers:
   - Parse YAML frontmatter and capture section anchors (`#`, `##`).
   - Map task slugs to file paths and resolve `depends_on` references.
3) Provide a simple in-memory index (filterable by project/status/git_status).
4) Add a short readme in downstream repo describing the adapter inputs/outputs.
5) Start a feature branch; open a PR when ready and update git fields here.

## Acceptance
- Running the adapter lists all projects and tasks with accurate metadata.
- Filters by status and git_status work in memory.
- No writes to CORA; read-only file access only.

## Roles
- Backend Engineer — `context/roles/backend-engineer.md:1`
- Content Librarian (optional validation) — `context/roles/content-librarian.md:1`
- Project Manager — `context/roles/project-manager.md:1`

## Links
- `context/documentation/cora/knowledge-tree.md:1`
- `procedures/api/expose_content_api.md:1` (reference-only; keep this adapter file-first)
- `procedures/git/start_feature.md:1`, `procedures/git/open_pull_request.md:1`

## Notes
- Keep the adapter agnostic: return plain objects; defer rendering to UI.

