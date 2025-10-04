---
kind: documentation
title: COHERENCE — Content
intent: Centralize canonical content for the Coherenceism network; enable cross-site reuse
status: active
updated: 2025-09-21
tags: [content, coherence, publishing]
---

# COHERENCE — Content (Trunk)

## Purpose
Maintain a single source of truth for canonical philosophical content used across downstream sites. CORA ships no UI; consumers import this repo read‑only and render content in their own overlays. Sites may select content via the `sites` field in frontmatter.

See also: `context/documentation/cora/content-contract.md` for the formal content contract.

## Structure
- `_templates/content-item.md` — recommended frontmatter + shape
- `coherenceism/roots/` — canon and orientation
- `coherenceism/branches/` — stable themes
- `coherenceism/seeds/` — project starters that can spawn downstream trees/systems
- `coherenceism/leaves/` — narrative and practice surfaces

## Frontmatter Schema (recommended)
- kind: `content`
- type: `root|branch|leaf|seed`
- title: string
- summary: short abstract (optional, use first paragraph if omitted)
- status: `draft|active|archived|deprecated`
- updated: `YYYY-MM-DD`
- version: `YYYY.MM` or semver (optional)
- tags: `[ ... ]`
- sites: `[media, info, ai, blog, social, network, com, tech]`
- canonical_slug: `kebab-case`
- parent: canonical_slug of parent (omit for type: root)
- order: number for sibling ordering (optional)
- authors: `[ ... ]` (optional)
- related: `[canonical_slug, ...]` (optional)

Note: Patterns are out of scope for the trunk. Use seeds + leaves to capture practices and narratives; downstream repos may define additional types.

## Selection (filters)
- Per-site selection: files with `sites` containing the site key within `coherenceism/`.
- Examples:
  - List blog items: `rg -l '^sites:.*\bblog\b' coherenceism`
  - List media items: `rg -l '^sites:.*\bmedia\b' coherenceism`
  - Show titles + slugs: `rg -n '^(title|canonical_slug):' coherenceism`

### Site Keys
The `sites` array in frontmatter is an optional hint for downstream consumers (e.g., `info`, `blog`, `ai`, `tech`). CORA does not bind these to specific domains.

## Notes
- Prefer canonical content here; use per-site overlays to adapt intros/CTAs.
- Keep media binaries outside this repo; store descriptors here, files elsewhere.

## CLI Selection Examples
```bash
# Files tagged for "blog"
rg -l '^sites:.*\bblog\b' coherenceism

# Titles and slugs for those files
rg -n '^(title|canonical_slug|sites):' $(rg -l '^sites:.*\bblog\b' coherenceism)
```

## Root Navigation

To render a navigation for the living tree in a downstream site:

- Select branches under the root: items with `type: branch` and `parent: coherenceism-root`.
- Order by the `order` field (fallback to title if missing).

Example — list branch titles under the root
```bash
rg -n "^(type: branch|parent: coherenceism-root|title:)" coherenceism/branches \
  | awk '/^.*type: branch/{t=1} /^.*parent: coherenceism-root/{p=1} /^.*title:/{if(t&&p){print; t=p=0}}'
```
