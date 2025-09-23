---
kind: documentation
title: Tasks — coherenceism.info (Library)
intent: Stand up the INFO site (Next.js) that presents the living canon from cora/content
status: active
updated: 2025-09-21
tags: [tasks, coherenceism, info]
---

# coherenceism.info — Tasks

## Scope
Build a Next.js site that reads cora/content and presents root/branches/seeds with ordered navigation. Non‑opinionated, canonical.

## Steps
1. Create repo coherenceism.info (Next.js 15, App Router, TS)
2. Add `cora/` as a git submodule (path: `cora`)
3. Implement content loader (frontmatter + markdown)
4. Pages
   - `/` → render root and branch nav
   - `/[branch]` → branch page with auto‑listed seeds
   - `/seed/[slug]` → seed page
5. Styling
   - Import shared tokens.css (via submodule or local copy)
6. Search (optional v1)
   - Client‑side index built at build time
7. Deploy (Vercel), protect staging if needed

## Deliverables
- Repo with working routes and loader
- Navigation built from `type`, `parent`, and `order`
- Shared tokens imported

## Dependencies
- context/tasks/shared-design-tokens.md
- content/COHERENCE.md (schema)

## Notes
- Use `sites: [info]` filter to select content for .info.
- Keep components minimal; prioritize clarity over flourish.
