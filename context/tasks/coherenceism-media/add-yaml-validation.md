---
kind: task
title: Add YAML validation to sync-content.js
project: coherenceism-media
status: todo
updated: 2025-10-18
tags: [validation, dx, quality]
depends_on: [fix-yaml-parsing-errors]
git_status: none
---

# Add YAML Validation to Sync Script

## Purpose
Catch malformed YAML in album.md files during sync phase, before build fails or generates broken HTML. Provides better DX and prevents shipping broken content.

## Steps
1. Add gray-matter to sync-content.js dependencies (already installed)
2. Parse frontmatter during sync:
   ```js
   const { data, content } = matter(fileContent);
   ```
3. Validate required fields for albums:
   - `kind: album`
   - `title` (string)
   - `slug` (string, kebab-case)
   - `tracks` (array)
   - Each track has `title` and `slug`
4. Check for common YAML errors:
   - Multi-line values without quotes
   - Orphaned keys (like "Align: null")
   - Missing colons or hyphens
5. Log validation errors with file path and line number
6. Option to fail sync or just warn (configurable)
7. Document validation schema in COHERENCE.md

## Acceptance
- Sync script parses and validates all album.md frontmatter
- Clear error messages show file path + issue
- Catches the multi-line title bug proactively
- Validation schema documented
- Optional strict mode fails on any warning
- Dev-friendly output (not just stack traces)

## Links
- Sync script: `coherenceism-media/scripts/sync-content.js`
- Gray-matter docs: https://github.com/jonschlinkert/gray-matter
- Album schema: `cora/harvest/COHERENCE.md`

## Notes
- Could extend to validate songs too
- Consider JSON Schema for formal validation
- Balance strictness vs. flexibility
- Validation should be fast (don't slow sync)
- Could generate validation report as artifact
