---
kind: documentation
title: Tasks — coherenceism.blog (Alignment)
intent: Align the blog with the canon; add cora integration and non‑opinion SOP
status: active
updated: 2025-09-21
tags: [tasks, coherenceism, blog]
---

# coherenceism.blog — Alignment Tasks

## Scope
Keep the designed Astro blog as a field‑notes journal. Link posts to canonical items in .info, and remove opinionated tone.

## Steps
1. Initialize `cora/` submodule (git submodule update --init --recursive)
2. Add frontmatter keys to posts: `branch`, `seed`, `tone: field-note`
3. Add a “Related” block in the journal entry layout linking to .info URLs
4. Map RIVERS taxonomy to branches (optional visual badges)
5. Editorial SOP: non‑opinion, field‑notes; link first mention of a concept to the branch/seed
6. Migrate 2–3 recent posts as exemplars

## Deliverables
- Updated layout with “Related” block
- 2–3 migrated posts with branch/seed links
- SOP document saved under `content/page/` or `docs/`

## Dependencies
- coherenceism.info live (for links)
- cora/content schema

## Notes
- If a concept lacks a canonical item, draft a seed first in cora/content, then cite.

