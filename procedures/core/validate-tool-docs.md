---
name: validate-tool-docs
intent: Check tool documentation for complete descriptors and routing metadata
inputs: []
steps:
  - Scan tool docs for required frontmatter keys and description sections
  - Flag missing summaries or outdated updated fields
  - Confirm cross-links to MCP servers or related procedures exist
shell:
  - rg -n "^kind:\\s*tool" context/tools || true
  - rg -n "^title:\\s*" context/tools || true
  - rg -n "^intent:\\s*" context/tools || true
  - rg -n "^status:\\s*(active|draft|reference)" context/tools || true
  - rg -n "^updated:\\s*" context/tools || true
  - rg -n "^## Purpose" context/tools || true
  - rg -n "MCP" context/tools || true
expected: Tool docs list purpose, usage, and routing guidance with fresh metadata
tags: [cora, tools, validation]
---

# Validate Tool Docs

## Purpose
Ensure every tool document gives agents the context routing hints Daniel Miessler emphasizes—clear descriptions, fresh metadata, and explicit chaining notes.

## Process
1. Run the ripgrep checks above to surface missing frontmatter or sections.
2. Inspect any files called out and add concise description text and updated timestamps.
3. Confirm each tool doc links to procedures, MCP servers, or APIs it depends on.

## Usage
"Audit our tool docs"
"Do the routing descriptions look complete?"

## Notes
- Pair with `context/tools/COHERENCE.md` to keep the index current.
- Add additional grep rules as new metadata standards emerge.

