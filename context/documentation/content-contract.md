---
kind: documentation
title: Content Contract v1
intent: Define frontmatter keys, relationships, and invariants for CORA content
status: active
updated: 2025-09-23
tags: [contract, content, ontology]
---

# Content Contract v1

## Scope
Applies to files under `content/` in CORA (trunk). Downstream trees should honor this contract when consuming or extending CORA content.

## Types
- type: `root|branch|seed|leaf`

## Required Frontmatter
- `kind: content`
- `type`: one of the allowed types
- `title`: human-readable title
- `status`: `draft|active|archived|deprecated`
- `updated`: ISO date (YYYY-MM-DD)
- `canonical_slug`: unique identifier (kebab-case recommended)

## Optional Frontmatter
- `summary`: short abstract
- `version`: e.g., `2025.09` or semver
- `tags`: `[ ... ]`
- `sites`: `[info, blog, ai, tech, ...]` (hint for downstream selection; non-strict)
- `authors`: `[ ... ]`
- `related`: `[canonical_slug, ...]`
- `order`: number for sibling ordering (branches and siblings)
- `spawned_systems`: `[tree-slug, ...]` (seeds only; map to entries in `context/forest/`)

## Relationships
- Roots have no `parent`.
- Branches must declare `parent` that resolves to a `root` item.
- Seeds and leaves must declare `parent` that resolves to a `branch` item.

## Invariants
- `canonical_slug` is unique repository-wide.
- Every non-root item includes `parent` and that slug exists.
- No `type: pattern` in trunk. Use seeds/leaves; downstream repos may define additional types locally.

## Notes for Consumers
- CORA ships no UI or rendering code. Downstream trees render content using their own overlays.
- `sites` is a convenience hint; do not rely on fixed domain mappings.

## Validation
- Use `procedures/content/validate-content.md` to run lightweight checks for this contract.
- Extend in downstream repos if stricter validation is needed.
