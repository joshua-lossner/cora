---
kind: working
title: Active — CORA Trunk Alignment
intent: Align CORA to a trunk‑only, content‑first model
status: active
updated: 2025-09-23
tags: [working, trunk]
---

# Active Focus: CORA Trunk Alignment

- Strategy: `context/strategy/COHERENCE.md`
- Content: `content/` (roots, branches, seeds, leaves)

## Direction
- CORA ships no UI, templates, or vendor code.
- Downstream sites import CORA read‑only and render content externally.
- Content remains strictly philosophical and canonical.

## Tasks Index (Live)
- T‑01 Remove UI overlay and design tokens — done
- T‑02 Remove vendor MCP server code — done
- T‑03 Prune site‑specific tasks/workflows/working items — done
- T‑04 Simplify content types to roots/branches/seeds/leaves — done
- T‑05 Update AGENTS + COHERENCE docs — in progress
- T‑06 Add/maintain validation procedures for frontmatter integrity — planned

## Immediate Next Steps
1. Finalize documentation updates and validation checks.
2. Tag a release for downstream consumers with a brief migration note.

## Notes
- Use frontmatter `type`, `parent`, and `order` to drive navigation in downstream overlays.
