---
kind: task
title: Fix YAML frontmatter parsing errors in album.md files
project: coherenceism-media
status: todo
updated: 2025-10-18
tags: [bug, content, yaml, critical]
git_status: none
---

# Fix YAML Frontmatter Parsing Errors

## Purpose
Multi-word track titles are breaking across YAML lines in album.md files, causing malformed data structures. This breaks track metadata parsing and display.

## Issue
In `cora/harvest/albums/out/we-are-the-wire/album.md:46-77`:
```yaml
- title: Don't Push
  Align: null            # ← Should be "Don't Push, Align"
- title: One Breath
  One Note: null         # ← Should be "One Breath, One Note"
```

The YAML parser treats the continuation as a new key instead of part of the title string.

## Steps
1. Scan all album.md files in `cora/harvest/albums/out/` for multi-line title breaks
2. Quote multi-word titles or fix line breaks:
   ```yaml
   - title: "Don't Push, Align"
     slug: dont-push-align
   ```
3. Run `npm run build` in coherenceism-media to verify parsing
4. Check generated HTML for correct track titles

## Acceptance
- All track titles parse correctly as single strings
- No orphaned YAML keys like "Align: null" or "One Note: null"
- Build completes without YAML parsing warnings
- Track titles display correctly on album pages

## Links
- Issue location: `cora/harvest/albums/out/we-are-the-wire/album.md:46-77`
- Similar issues likely in other album.md files
- Build script: `coherenceism-media/scripts/build.js`

## Notes
- This is a CORA content issue, not a code issue
- Fix in CORA harvest directory, changes will sync to coherenceism-media
- Consider adding YAML validation to sync-content.js (separate task)
