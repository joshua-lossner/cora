---
kind: procedure
title: Content — Archive Item (Deprecated)
intent: Legacy archive guidance; prefer git history and `status: archived` without moving files
status: deprecated
updated: 2025-10-07
tags: [content]
---

# Procedure — Archive Item (Deprecated)

Purpose
- Historical reference. CORA now relies on git history; do not move files to `archive/`.

Inputs
- Path to item, reason for archival note, summary.

Steps
1) Update frontmatter `status: archived`; add a short `archive_note` with rationale and date.
2) Do not move the file; leave it in place so links remain stable.
3) Update any indexes if you want to hide it from navigation.

Expected
- Item marked archived with context; no path changes.
