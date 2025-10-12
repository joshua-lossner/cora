---
kind: procedure
title: Site — Add CORA as Submodule
intent: Add CORA as a read-only git submodule in a downstream repo and wire basic loaders
status: active
updated: 2025-10-04
tags: [site, integration, git]
---

# Procedure — Add CORA as Submodule

Purpose
- Integrate CORA into a downstream repo as read-only content for rendering.

Inputs
- Downstream repo path (sibling of `cora/`), desired submodule path (e.g., `cora/`)

Steps
1) Add submodule (operator runs in downstream repo; recommended: remote URL)
   - Remote (preferred): `git submodule add <repo-url> cora`
   - Initialize: `git submodule update --init --recursive`
   - Optional, track branch: `git submodule set-branch --branch main cora && git commit -am "Track cora main"`
2) Sibling local path (advanced; not recommended for long-term)
   - If using a local sibling (e.g., `~/Projects/cora`), you must explicitly allow file protocol:
   - `git -c protocol.file.allow=always submodule add ../cora cora`
   - Note: prefer remote URLs to avoid protocol settings and portability issues.
3) Configure content loaders to read from `cora/` paths (branches, leaves, seeds, forest).
4) Document the integration: list which views map to which `cora/` paths.

Expected
- Submodule present; loaders resolve; short integration note committed.

Notes
- Downstream repos live as siblings of `cora/` (e.g., `~/Projects/coherenceism-ai/`), not nested inside the CORA repo. Use this procedure from the downstream repo root.
