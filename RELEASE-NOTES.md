# CORA Release Notes — 2025.09 Trunk Realignment

This release aligns CORA to a trunk‑only, content‑first model. CORA is now purely the canonical source of Coherenceism content and philosophy (no UI or app code). Downstream trees consume CORA as a read‑only submodule and render content in their own overlays.

## Summary
- Trunk only: no UI, vendor code, or site‑specific workflows/tasks
- Content types simplified to: root, branch, seed, leaf
- New growth docs and validation scaffolds for downstream consumers

## Breaking Changes
- Removed UI/overlay code: `app/` pages, `ui/tokens.css`
- Removed vendor MCP server code: `vendors/mcp/web-browser-mcp-server/`
- Removed site‑specific workflows: `workflows/coherenceism.blog/*`
- Removed site‑specific tasks and personal context: `context/tasks/*`, `context/people/*`, `context/forest/coherenceism-*`
- Removed blog‑only procedure: `procedures/forest/stage-blog-draft.md`
- Patterns excluded from trunk (no `type: pattern`)

## Added
- Grow From Seed guide: `context/documentation/grow-from-seed.md`
- Content Contract v1: `context/documentation/content-contract.md`
- Tree init procedure: `procedures/forest/grow-from-seed.md`
- Updated validators: `procedures/content/validate-content.md` (types + relationships)

## Updated
- Knowledge Tree: external overlays only; linked to Content Contract
- Content COHERENCE: clarified trunk scope; simplified examples
- Forest COHERENCE: downstream‑only guidance
- Workflows COHERENCE: generic; downstream define workflows
- README and AGENTS: trunk→trees model, Grow From Seed link

## Migration (Downstream)
- Pin CORA submodule to this release commit/tag
- Remove any references to `app/`, `ui/`, vendor MCP server under `vendors/`
- Replace pattern usage with seeds/leaves where applicable
- Ensure non‑root items declare a `parent`:
  - branches → parent: root slug (e.g., `coherenceism-root`)
  - seeds/leaves → parent: branch slug
- Re‑run validation checks: see `procedures/content/validate-content.md`

## Tagging
- Suggested tag: `2025.09-trunk`
- Include a short summary referencing this file

## Notes
- CORA ships no UI. Downstream repos render content and own their publishing stacks
- `sites` in frontmatter is a non‑strict hint (e.g., `info`, `blog`, `ai`, `tech`)
