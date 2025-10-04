---
kind: procedure
title: Project Status — Report Projects and Tasks
intent: List all projects and their task statuses, including git fields, as a terminal-only report
status: active
updated: 2025-10-04
tags: [projects, tasks, report]
---

# Procedure — Project Status Report (Terminal)

Purpose
- Provide a quick, non-editing overview of current projects and tasks, suitable for pasting into the terminal or a chat session.

Scope
- Reads files only. Does not edit content.
- Sources: `context/projects/*.md`, `context/project-tasks/<project>/*.md`.

Inputs
- None (defaults to all projects). Optionally a project slug to narrow focus.

Expected
- A concise, grouped report: project title/status/updated, PR log entries (if present), and a list of tasks with status, updated, and git fields.

Steps
1) Projects — list `context/projects/*.md`; for each, parse frontmatter: `title`, `status`, `updated`.
2) PR Log — if a project file includes a “PRs (Log)” section, capture each line as-is.
3) Tasks — if `context/project-tasks/<slug>/` exists, list tasks; parse frontmatter: `title`, `status`, `updated`, and optional `git_status`, `branch`, `pr_url`.
4) Output — print a terminal report grouped by project:
   - Project: <Title> (status, updated)
   - PRs (Log): bullet each entry
   - Tasks: `- [status] Title — updated: <date> — git: <git_status> <branch> <pr_url>` (omit missing fields)
5) Do not write files; if errors occur, output short notes.

Operator Prompt
"""
You are reporting CORA project status to the terminal.
1) List projects from `context/projects/*.md`; print: Title (status, updated).
2) For each project, if a “PRs (Log)” section exists, print each PR line.
3) If `context/project-tasks/<project>/` exists, list each task as: `- [<status>] <title> — updated: <date> — git: <git_status> <branch> <pr_url>` (only include git fields that are present).
4) Keep output concise and grouped by project. Do not modify files.
"""

Notes
- Designed for human scanning; adjust verbosity by omitting empty sections.

