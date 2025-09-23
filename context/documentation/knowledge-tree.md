---
kind: documentation
title: Knowledge Tree — Content Ontology and Rails
intent: Define the cora content model (roots→branches→seeds/leaves), relationships, frontmatter, and rendering routes for multi‑site overlays
status: active
updated: 2025-09-22
tags: [coherence, ontology, content, ufc]
---

# Knowledge Tree — Content Ontology and Rails

## Purpose
Provide a clear, durable model for how Coherenceism content is structured, validated, and rendered across multiple sites using the UFC pattern.

## Model Overview
- Roots — Canon and orientation; anchors the tree (why/how).
- Trunk — System rails: UFC load order, content graph, UI plumbing.
- Branches — Stable themes that hold tone/scope; parents for seeds/leaves.
- Seeds — Small, portable practices/patterns; short, actionable, evergreen.
- Leaves — Narrative surfaces that grow from branches/seeds (essays, explainers).
- Patterns — Reusable solution write‑ups (name, problem, forces, solution…); sibling to seeds.
- Mycelium — Orchestration layer (AI + procedures + tools) that routes attention.
- Compost — Lifecycle path for archiving; endings feed future material.

## Locations (Filesystem)
- Roots: `content/roots/…`
- Branches: `content/branches/…`
- Seeds: `content/seeds/…`
- Leaves: `content/…` (any subfolder) with `type: leaf`; template at `content/_templates/content-item.md`
- Patterns: `content/patterns/…` (or co‑located) with `type: pattern`; template at `content/_templates/pattern.md`
- System rails and load order: `context/COHERENCE.md`, `context/architecture/…`
- Tools/procedures: `context/tools/…`, `procedures/…`

## Frontmatter Requirements
Shared keys across all types:
- `kind: content`
- `title`, `summary`, `status` (draft|active|archived)
- `updated` (ISO date), `version` (e.g., 2025.09), `tags: []`, `sites: []`
- `canonical_slug` (unique across the tree)
- `authors: []`, `related: []`

Type‑specific keys:
- Root: `type: root`
- Branch: `type: branch`, `parent: coherenceism-root`, `order`
- Seed: `type: seed`, `parent: <branch-slug>`, optional `order`
- Leaf: `type: leaf`, `parent: <branch-slug>`, optional `seed_refs: []`
- Pattern: `type: pattern`, `parent: <branch-or-root>`

## Relationships and Integrity
- Parent rules: root→branch; branch→seed|leaf|pattern. Patterns may also hang from root when cross‑cutting.
- `canonical_slug` must be unique repository‑wide.
- Every non‑root item must declare `parent` that resolves to an existing node of an allowed type.
- `sites: []` drives multi‑site publication surfaces (e.g., `info`, `blog`, `ai`).

## Rendering Rails (Next.js overlay)
- Root page: `app/page.tsx` — loads root and lists branches in side nav.
- Branch page: `app/[slug]/page.tsx` — renders branch content; lists seeds (and later leaves).
- Seed page: `app/seed/[slug]/page.tsx` — renders a seed with branch accent.
- Leaf page: `app/leaf/[slug]/page.tsx` — renders a leaf with branch accent (new).

Conventions:
- Side nav always lists branches; active branch is highlighted.
- Accent color pulled from `@/lib/branchColors` using the parent branch slug.
- Strip the first H1 in markdown body before render to avoid duplicate titles.

## Multi‑Site Overlay
- Keep cora as the canonical content + shared overlay.
- Each site consumes this repo (submodule or copy) and filters by `sites` frontmatter.
- Only site chrome (header/footer) varies; content and layout rails stay identical.

## Lifecycle and Composting
- Status transitions: draft → active → archived.
- Archiving moves items out of navigation while preserving links; archived items remain nutrients (references, summaries feeding future seeds).
- Version and `updated` track changes; major revisions can bump `version` and note consequences.

## Validation (signals to enforce)
- Required keys present (see above) and valid `parent` types.
- `canonical_slug` uniqueness; no collisions.
- `sites` only includes known surfaces.
- Optional: check `seed_refs` in leaves resolve to existing seeds.
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
- Add listing of leaves under branches when `loadLeavesFor()` is available; until then, direct links to `/leaf/<slug>` resolve.
- Keep template files in `content/_templates/` authoritative; copy to create new items.
- Prefer small, linked docs over long pages; let the tree do the organizing.
