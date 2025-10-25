---
kind: documentation
title: COHERENCE — Logs
intent: Provenance tracking for changes to personal knowledge system
status: active
updated: 2025-10-19
tags: [logs, provenance]
scope: directory
init:
  files: []
index:
  map:
    - logs/2025/
---

# Logs — Provenance

## Purpose
Maintain a Markdown audit trail of what changed, why, and where in this personal knowledge system. This mirrors the CORA provenance pattern.

## Structure
- Daily files: `logs/YYYY/YYYY-MM-DD.md`
- Each daily file has frontmatter and an `## Entries` section
- Each entry is a short, human-readable block under a `###` heading

## Policy
**Auto-log is ON by default.**

After any write to this repo (add/edit/delete in `personal/`, `professional/`, `learning/`, `household/`, `workflows/`, etc.), the assistant appends a log entry to `logs/YYYY/YYYY-MM-DD.md`.

Types: `domain-add | domain-edit | workflow | memory | household-doc | context-edit`

## Entry Shape

```markdown
### <ISO-time> — <type> — <short summary>

- Actor: ivy | joshua | [other]
- Paths: [path, path]
- Workflow: <workflow path if applicable>
- Summary: one-two lines of what/why
- Outcome: result or status
- Follow-ups: [optional notes]
```

## Example

```markdown
### 2025-10-19T13:45:00-07:00 — memory — captured summer BBQ memory

- Actor: ivy
- Paths: [personal/memories/2024-07-04-summer-bbq.md]
- Workflow: workflows/capture-memory.md
- Summary: Guided user through memory capture; documented family BBQ event.
- Outcome: Memory file created with photos link.
- Follow-ups: None
```

## Notes
- Logs are for the system, not personal journaling
- Append-only; don't edit past entries unless correcting errors
- Coalesce rapid edits into single entries to reduce noise
