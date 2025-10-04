---
kind: documentation
title: Forest Registry
intent: Register downstream trees spawned from CORA seeds; define schema and integrity checks
status: draft
updated: 2025-10-02
tags: [forest, registry, lineage]
---

# Forest Registry

## Purpose
Track systems that germinate from CORA seeds. Maintain lineage, ownership, and links without pulling implementation back into CORA.

## Usage
- For each downstream system, add a file at `coherenceism/forest/<tree-id>.md`.
- Use the `forest-tree` frontmatter schema below; keep body short with links.
- Reference tree ids from seed frontmatter via `spawned_systems: []`.

## Frontmatter Schema (forest-tree)
```
---
kind: forest-tree
id: <tree-id>
title: <Tree Name>
origin_seed: <seed-canonical-slug>
repo: <relative or remote reference>
status: draft|active|archived
updated: YYYY-MM-DD
maintainers: [name or org]
tags: []
links: [docs, site, board?]
---
```

## Integrity Checks
- `id` unique within `coherenceism/forest/`.
- `origin_seed` resolves to an existing seed in the knowledge tree.
- `status` in allowed set; `updated` present.
- Optional: `repo` resolves or is human-locatable.

## Failure Modes (remedies)
- MISSING_SEED → create/repair the seed and link via `origin_seed`.
- DUPLICATE_ID → rename file and update references.
- STALE_ENTRY → update `updated` and links during periodic review.

## Notes
- The registry is index-like; keep descriptions brief and delegate depth to downstream repos.
- Avoid embedding downstream implementation details here; link out.

## Provenance
- Created: 2025-10-02 by Codex (CORA agent)
- Related: `context/documentation/cora/knowledge-tree.md` (Seeds ↔ Forest linkage)
- Next: add first entries as seeds germinate
