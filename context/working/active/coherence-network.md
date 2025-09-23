---
kind: working
title: Active — Coherence Network
intent: Live plan and status for the Coherenceism network (.info + .blog + content)
status: active
updated: 2025-09-21
tags: [working, project]
---

# Active Project: Coherence Network

- Projects: `context/projects/coherenceism/coherence-network.md`
- Strategy: `context/strategy/COHERENCE.md`
- Content: `content/` (root/branches/seeds/patterns)

## Direction
- .info (coherenceism.info): canonical, non‑opinionated library that presents root/branches/seeds (and patterns later).
- .blog (coherenceism.blog): field‑notes journal that links back to canon; avoids opinion takes.
- cora/content: single source of truth; sites filter by `sites: [...]`.
- Shared tokens/UI: consistent visual baseline across sites.

## Tasks Index (Live)
- CN‑01 Centralize canonical content in cora/content — done
- CN‑02 Split book into branches + seeds — done
- CN‑03 Define pattern shape + template — done
- CN‑04 Plan coherenceism.info (Astro) — active
- CN‑05 Extract shared design tokens for reuse — planned
- CN‑06 Initialize cora in blog + add Related links — planned
- CN‑07 Blog writing SOP (non‑opinion field notes) — planned
- CN‑08 Content loader utilities (Astro) — planned
- CN‑09 Patterns library seed (first 1–2 patterns) — planned
- CN‑10 CI content validation in sites — planned

Full details: `context/tasks/coherence-network.md`

## Immediate Next Steps
1. Scaffold coherenceism.info (Astro) with loader and root/branch routes
2. Extract tokens into `cora/ui/tokens.css`
3. Wire blog layout “Related” block and SOP draft

## Notes
- Keep content non‑opinionated; reference branches/seeds for concepts.
- Use frontmatter `type`, `parent`, and `order` to drive navigation.
