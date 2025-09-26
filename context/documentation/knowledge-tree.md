---
kind: documentation
title: Knowledge Tree — Content Ontology and Rails
intent: Define the cora content model (roots→branches→seeds/leaves), relationships, frontmatter, and rendering routes for multi‑site overlays
status: active
updated: 2025-09-22
tags: [coherence, ontology, content, ufc]
---

# Knowledge Tree — Content Ontology

## Purpose
Provide a clear, durable model for how Coherenceism content is structured, validated, and rendered across multiple sites using the UFC pattern.

## Model Overview
- Roots — Canon and orientation; anchors the tree (why/how).
- Trunk — System rails: UFC load order, content graph, UI plumbing.
- Branches — Stable themes that hold tone/scope; parents for seeds/leaves.
- Seeds — Portable practices/patterns meant to germinate elsewhere; short, actionable, evergreen modules that can spawn downstream systems (sites, mediums, tools).
- Leaves — Narrative surfaces that grow from branches/seeds (essays, explainers).
- Mycelium — Orchestration layer (AI + procedures + tools) that routes attention.
- Compost — Lifecycle path for archiving; endings feed future material.

## Locations (Filesystem)
- Roots: `content/roots/…`
- Branches: `content/branches/…`
- Seeds: `content/seeds/…`
- Leaves: `content/…` (any subfolder) with `type: leaf`; template at `content/_templates/content-item.md`
- Forest registry: `context/forest/…`
- System rails and load order: `context/COHERENCE.md`, `context/architecture/…`
- Tools/procedures: `context/tools/…`, `procedures/…`

## Forest Registry
Seeds that germinate new systems are catalogued under `context/forest/` using `kind: forest-tree`. Each file documents the downstream tree’s purpose, origin seeds, repository, and next change so lineage stays traceable without embedding implementation back into CORA.

## Frontmatter Requirements
See also: `context/documentation/content-contract.md` for the formal contract.
Shared keys across all types:
- `kind: content`
- `title`, `summary`, `status` (draft|active|archived)
- `updated` (ISO date), `version` (e.g., 2025.09), `tags: []`, `sites: []`
- `canonical_slug` (unique across the tree)
- `authors: []`, `related: []`

Type‑specific keys:
- Root: `type: root`
- Branch: `type: branch`, `parent: coherenceism-root`, `order`
- Seed: `type: seed`, `parent: <branch-slug>`, optional `order`, `spawned_systems: []` to name downstream surfaces
- Leaf: `type: leaf`, `parent: <branch-slug>`, optional `seed_refs: []`

## Relationships and Integrity
- Parent rules: root→branch; branch→seed|leaf.
- `canonical_slug` must be unique repository‑wide.
- Every non‑root item must declare `parent` that resolves to an existing node of an allowed type.
- `sites: []` drives multi‑site publication surfaces (e.g., `info`, `blog`, `ai`).

## External Overlays (Rendering)
CORA ships no UI. Downstream sites render this content using their own frameworks. Recommended mapping:
- Root: list branches and orientation.
- Branch: render branch content and list its seeds/leaves.
- Seed: render short, actionable practice with metadata pointing to the surfaces it can seed downstream and a Planting Notes section linking practice to format.
- Leaf: render narrative surface linked to branch/seed.

Conventions (recommended, not enforced by CORA):
- Keep side nav to branches; highlight active.
- Use branch accent colors in downstream repos as desired.
- Strip duplicate H1s during render.

## Multi‑Site Overlay
- Keep CORA as canonical content only (no UI).
- Each site consumes this repo (submodule) and filters by `sites` frontmatter.
- Site chrome and layout live in downstream repos.

## Lifecycle and Composting
- Status transitions: draft → active → archived.
- Archiving moves items out of navigation while preserving links; archived items remain nutrients (references, summaries feeding future seeds).
- Version and `updated` track changes; major revisions can bump `version` and note consequences.

## Validation (signals to enforce)
- Required keys present (see above) and valid `parent` types.
- `canonical_slug` uniqueness; no collisions.
- Optional: check `seed_refs` in leaves resolve to existing seeds.
- Optional: confirm `spawned_systems` exists on seeds that are meant to propagate into downstream surfaces.
Use `procedures/content/validate-content.md` as the enforcement scaffold.

## Example — Leaf Frontmatter
```
---
kind: content
type: leaf
title: Why Presence Beats Productivity
summary: A short explainer linking practice to pattern.
status: draft
updated: 2025-09-22
version: 2025.09
tags: [presence, practice]
sites: [info, blog]
canonical_slug: why-presence-beats-productivity
parent: practice-of-presence
authors: [Coherence Network]
related: [one-breath-reset]
---

# Why Presence Beats Productivity

Body…
```

## Notes for Builders
- Keep template files in `content/_templates/` authoritative; copy to create new items.
- Use `content/_templates/seed.md` when writing new seeds so planting metadata and notes stay consistent.
- Prefer small, linked docs over long pages; let the tree do the organizing.
