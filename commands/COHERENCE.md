---
kind: documentation
title: COHERENCE — Commands
intent: Organize reusable commands into clear categories with a single index
status: active
updated: 2025-09-16
tags: [commands, coherence]
---

# Commands

## Purpose
Reusable capabilities with minimal frontmatter and human-readable usage.

## Structure
- Root index: `commands/INDEX.md` (human index; keep updated)
- Categories (subfolders):
  - `core/` — cora maintenance, validation, context loaders
  - `git/` — git hygiene and workflows
  - `project/` — project scaffolding and submodule utilities
  - `writing/` — summarization and editorial helpers
- Templates: `commands/_templates/`

## Notes
- Keep command names kebab-case and action-oriented.
- Prefer tags and categories in frontmatter for discoverability.
- Cross-link commands that often chain.

