---
kind: procedure
id: pm_update_tasks
title: PM — Update Tasks
intent: Update task statuses and timestamps for the active project
status: active
updated: 2025-10-04
tags: [project-management, tasks]
---

# PM — Update Tasks

Operator Prompt (Ivy)
- Open `context/tasks/<project-slug>/` for the active project.
- For tasks touched today, set `status: todo|doing|blocked|done` and update `updated: YYYY-MM-DD`.
- Add a one-line note under Steps or Notes if material changed.

Expected Output
- Task files updated with current status and dates; project page checklist reflects the changes.
