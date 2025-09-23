---
kind: documentation
title: Tasks — Coherence Network
intent: Execution plan and task index for the Coherenceism network (INFO + BLOG + shared content)
status: active
updated: 2025-09-21
tags: [tasks, coherenceism, network]
---

# Coherence Network — Tasks

## Objectives
- Establish coherenceism.info as the canonical, non‑opinionated library (root/branches/seeds/patterns).
- Align coherenceism.blog as a field‑notes journal linking back to the canon.
- Centralize content in cora/content with per‑site filters via `sites: [...]`.
- Share design tokens and UI primitives across sites.

## Task Index

| ID | Title | Status | Owner | Links |
| --- | --- | --- | --- | --- |
| CN‑01 | Centralize canonical content in cora/content | done | Ivy | content/COHERENCE.md, procedures/content/validate-content.md |
| CN‑02 | Split book into branches + seeds | done | Ivy | content/roots/coherenceism-root.md, content/branches/*, content/seeds/* |
| CN‑03 | Define pattern shape + template | done | Ivy | content/_templates/pattern.md |
| CN‑04 | Build coherenceism.info (Next.js) | active | Ivy | context/tasks/coherenceism-info.md |
| CN‑05 | Extract shared design tokens for reuse | planned | Ivy | context/tasks/shared-design-tokens.md |
| CN‑06 | Initialize cora in blog + add Related links | active | Ivy | context/tasks/coherenceism-blog-alignment.md |
| CN‑07 | Blog writing SOP (non‑opinion field notes) | planned | Ivy | context/tasks/coherenceism-blog-alignment.md |
| CN‑08 | Content loader utilities (Astro) | planned | Ivy | context/tasks/content-integration.md |
| CN‑09 | Patterns library seed (first 1–2 patterns) | planned | Ivy | context/tasks/patterns-library.md |
| CN‑10 | CI content validation in sites | planned | Ivy | procedures/content/validate-content.md |

## Execution Plan (High Level)

1) INFO site
- Scaffold Astro app; add cora as submodule; implement loader for cora/content; render Root + ordered branches + seeds.
- Minimal search (client‑side index from titles/slugs/tags).

2) BLOG alignment
- Initialize cora submodule; add post frontmatter: `branch`, `seed`, `tone: field-note`.
- Add a “Related” block linking to .info canonical items.
- Publish editorial SOP and migrate 2–3 recent posts as exemplars.

3) Shared assets
- Extract tokens from the blog into shared tokens.css; import in both sites.
- Optional UI primitives for nav/sidebar/CTA.

4) Patterns
- Add 1–2 patterns and wire a simple patterns index on .info.

## Acceptance Criteria
- .info renders root/branches/seeds from cora/content with correct order and parent relationships.
- .blog posts link back to canonical items; tone adheres to SOP.
- Shared tokens drive a consistent visual baseline across both sites.
- Content validation passes (no missing keys; no duplicate slugs; site keys valid).
