---
kind: documentation
title: COHERENCE — Forest Registry
intent: Maintain visibility into downstream systems seeded from CORA while keeping the trunk implementation-free
status: active
updated: 2025-09-23
tags: [coherence, forest]
---

# Forest Registry

## Purpose
Track the growing forest of coherence-aligned systems without pulling their implementation into CORA. Each downstream tree keeps its own branches and leaves; this registry records how they sprouted from CORA seeds.

## How to Use
- Give every downstream system a file in `context/forest/<tree-slug>.md` using the template in `context/_templates/forest-tree.md`.
- Reference tree slugs in seed frontmatter via `spawned_systems` so lineage stays traceable.
- Keep implementation, tasks, and workflows inside the downstream repo; link here for orientation only.

## Current Trees
- `coherenceism-blog` — incubating essays and dispatches on coherenceism roots; seeded by `one-breath-reset`, `resonance-check`.
- `coherenceism-info` — orientation site for newcomers; seeded by `alignment-check`, `first-pebble`.
- `coherenceism-music` — exploratory audio surfaces for resonance practice; seeded by `edge-of-knowing`, `personal-compost-pile`.

Update entries as trees move from idea → incubating → active → archived. Let the forest stay visible while CORA remains the canonical trunk.
