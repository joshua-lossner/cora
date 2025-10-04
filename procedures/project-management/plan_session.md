---
kind: procedure
id: pm_plan_session
title: PM — Plan Session (Top 3)
intent: Set today’s top three small, verifiable moves with artifact links
status: active
updated: 2025-10-04
tags: [project-management, planning]
---

# PM — Plan Session (Top 3)

Operator Prompt (Ivy)
- Open the active project file(s) under `context/projects/`.
- List today’s top 3 moves (≤ 15 minutes each). For each, include:
  - path to artifact to touch
  - the smallest next action
  - expected outcome (1 sentence)
- Keep tokens lean; do not open unrelated projects/tasks.

Expected Output
- A short checklist added to the project file(s) under a “Today” section, with paths and outcomes.

