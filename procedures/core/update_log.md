---
kind: procedure
title: Update Log — Append Daily Entry
intent: Append a concise Markdown entry to today’s log after any procedure/workflow or context/content change
status: active
updated: 2025-10-08
tags: [logs, provenance, hygiene]
---

# Procedure — Update Log (Daily Entry)

Purpose
- Keep a local, Markdown‑only provenance trail under `context/logs/`.
- Standardize what gets recorded and where, with minimal friction.

Path Convention
- ONLY valid path: `context/logs/YYYY-MM-DD.md` (e.g., `context/logs/2025-10-25.md`)
- DO NOT create: `logs/`, `core/logs/`, or any other location
- Rationale: `context/` groups all working files; keeps repo root clean

Inputs
- actor (ivy | joshua | other)
- type (procedure | workflow | context-add | context-edit | content-add | content-edit)
- summary (one–two lines)
- paths touched (list)
- related procedure/workflow id or path (optional)
 - follow‑ups/tasks (optional; link to `context/tasks/` when applicable)

Expected
- A new entry appended to `context/logs/YYYY-MM-DD.md` (create file if missing using `_templates/daily-log.md`).
- Entry contains time, type, actor, paths, summary, outcome, and optional follow‑ups.

Steps
1) Select file — compute today’s file `context/logs/YYYY-MM-DD.md` (local date).
2) Create if missing — copy `context/logs/_templates/daily-log.md` and replace date tokens.
3) Prepare entry — copy `context/logs/_templates/log-entry.md` and fill fields.
4) Append — paste the entry under the `## Entries` section (end of file).
5) Save — keep lines short; prefer path links over long prose.

Operator Prompt
"""
You are appending a log entry for today.

1) Open or create `context/logs/YYYY-MM-DD.md` (e.g., context/logs/2025-10-25.md) using the daily template.
   IMPORTANT: Path must be exactly `context/logs/YYYY-MM-DD.md` - do not create logs/ at repo root.
2) Append an entry using `_templates/log-entry.md` with:
   - Actor, Type, Paths, Procedure/Workflow, Summary, Outcome, Follow-ups
3) Keep it to ~5–8 lines; include the most relevant paths.
4) Return the file path you updated.
"""

Example Entry
```
### 2025-10-08T19:25:00-07:00 — procedure — scaffold Markdown logging

- Actor: ivy
- Paths: [context/logs/COHERENCE.md, context/logs/_templates/daily-log.md, procedures/core/update_log.md]
- Procedure/Workflow: procedures/core/update_log.md
- Summary: Added logs index and templates; standardized post‑change logging.
- Outcome: Logging is now a first‑class, Markdown‑driven capability.
- Follow-ups: Add a weekly roll‑up task in context/projects/cora.md
```

Notes
- Keep logs human; they are not a changelog replacement. Use project tasks for action tracking and reference them from entries.
- No network or tooling needed; plain text only to preserve portability.
