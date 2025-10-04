---
kind: procedure
title: Content — Archive Item
intent: Archive a content item with a short summary that feeds future seeds
status: active
updated: 2025-10-04
tags: [content, archive]
---

# Procedure — Archive Item

Purpose
- Move a content item to archive while preserving links and adding a nutrient summary.

Inputs
- Path to item, reason for archive, summary.

Steps
1) Update frontmatter `status: archived`; add a short `archive_note`.
2) Move/copy to archive path (e.g., `content/essays/archive/YYYY-MM-DD/<slug>/`).
3) Add a link from the original location if needed; update indexes.

Expected
- Archived item with context; no broken links.

