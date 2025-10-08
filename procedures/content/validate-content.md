---
kind: procedure
title: Validate Content — Frontmatter & Links
intent: Check frontmatter keys, parent relationships, and slug uniqueness per Knowledge Tree
status: active
updated: 2025-10-04
tags: [content, validation, ontology]
---

# Procedure — Validate Content (Ontology Rails)

Purpose
- Ensure repository content conforms to the Knowledge Tree rails in `context/documentation/cora/knowledge-tree.md:1`.

Scope
- Files under `coherenceism/` and `content/` (plus any other content with `kind: content`).

Inputs
- Target paths (default): `coherenceism/`, `content/essays/out/`

Expected
- A short report listing: missing/invalid frontmatter, broken parent refs, duplicate `canonical_slug`, and unresolved references.

Steps
1) Inventory — list target files with frontmatter.
2) Frontmatter — verify required keys by type (root/branch/seed/leaf).
3) Parents — ensure each non-root item has a valid `parent` pointing to an allowed type.
4) Seeds — confirm `spawned_systems` entries are represented in the forest via either:
   - a `kind: forest-tree` file under `coherenceism/forest/`, or
   - a `kind: forest-group` manifest that lists the id in `members: []`.
   (Recommended `seed_stage: idea|incubating|germinated|retired`.)
5) Leaves — if `seed_refs` present, ensure they point to existing seeds.
6) Slugs — build a map of `canonical_slug` across files and flag duplicates.
7) Links — flag any file paths referenced in `related:` or inline that don’t resolve.
8) Summarize — return a tidy list of issues with suggested fixes.

Operator Prompt
"""
You are validating CORA content against its Knowledge Tree rails.

1) Scan these folders for Markdown with YAML frontmatter:
   - coherenceism/
   - content/essays/out/

2) For each file, parse frontmatter and capture:
   - kind, type, title, status, updated, canonical_slug, parent, tags, authors, sites, related, seed_refs, spawned_systems, seed_stage

3) Apply checks:
   - Required keys: kind, title, status, updated; and by type:
     • root → type: root
     • branch → type: branch, parent set to a root
     • seed → type: seed, parent set to a branch, spawned_systems present
     • leaf → type: leaf, parent set to a branch
   - Parents resolve and are of an allowed type.
   - For seeds: each spawned_systems entry appears either as a forest-tree file or as a member id in a forest-group manifest under coherenceism/forest/.
   - For leaves: if seed_refs, each ref resolves to an existing seed.
   - canonical_slug is unique repo-wide (build a map and report collisions).

4) Output a concise report:
   - A table of issues: [path, check, details, suggested-fix]
   - A summary line: counts by issue type

Notes
- If you cannot read files directly, ask the operator for specific paths.
- Prefer small, verifiable checks; don’t infer missing semantics.
"""

Notes
- This is a human-operated check; no code required. Pair with a simple spreadsheet or a short table in Markdown.
- Run before publishing or after larger refactors to catch drift early.
