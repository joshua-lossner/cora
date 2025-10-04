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
- Downstream repo path, desired submodule path (e.g., `cora/`)

Steps
1) Add submodule (operator runs in downstream repo):
   - `git submodule add <repo-url> cora`
   - `git submodule update --init --recursive`
2) Configure content loaders to read from `cora/` paths (branches, leaves, seeds, forest).
3) Document the integration: list which views map to which `cora/` paths.

Expected
- Submodule present; loaders resolve; short integration note committed.

