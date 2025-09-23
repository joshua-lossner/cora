---
name: validate-workflows
intent: Validate workflow files for frontmatter and referenced links
inputs: []
steps:
  - Check workflows/COHERENCE.md exists
  - Validate each workflow has frontmatter and kind: workflow
  - Report missing referenced agents/procedures paths
shell:
  - test -f workflows/COHERENCE.md && echo "workflows/COHERENCE.md present" || echo "Missing workflows/COHERENCE.md"
  - echo "Workflows with frontmatter (--- on first line):"; for f in $(rg --files workflows | rg '\\.md$' | rg -v '^workflows/_templates/'); do head -n1 "$f" | rg -q '^---$' && echo "  ✅ $f" || echo "  ❌ $f"; done
  - echo "Workflows with kind: workflow:"; rg -n "^kind:\\s*workflow" workflows | sed -n '1,200p'
  - echo "Referenced procedures that are missing:"; for p in $(rg -on "procedures/[a-z0-9_\-/]+\\.md" workflows | cut -d: -f3- | sort -u); do [ -f "$p" ] || echo "  $p"; done | sed -n '1,200p'
  - echo "Referenced agents that are missing:"; for p in $(rg -on "agents/[A-Za-z0-9_\-/]+\\.md" workflows | cut -d: -f3- | sort -u); do [ -f "$p" ] || echo "  $p"; done | sed -n '1,200p'
expected: All workflows have frontmatter and kind; referenced paths exist
tags: [workflows, validation, hygiene]
---

# Validate Workflows

## Purpose
Ensure workflows are well-formed and their references to agents and procedures resolve.

## Usage
Run the listed checks and fix any missing metadata or broken links.

