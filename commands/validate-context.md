---
name: validate-context
intent: Validate cora context structure and frontmatter across directories
inputs: []
steps:
  - Check required frontmatter keys in context docs
  - Verify presence of directory COHERENCE and INDEX where applicable
  - Confirm template and example pointers exist
  - Report missing or malformed items
shell:
  - rg -n "^---$" context | wc -l | xargs echo "Frontmatter block delimiters:"
  - rg -n "^kind:\s*(project|methodology|tool|philosophy|personal|working|documentation)" context || true
  - rg -n "^title:\s+" context || true
  - rg -n "^intent:\s+" context || true
  - rg -n "^status:\s+(draft|active|archived|reference)" context || true
  - echo "Context INDEX.md files (should be none):"; rg -n --files context | rg 'INDEX\.md$' || echo "None"
  - rg -n "Templates: see `context/_templates/" context/*/COHERENCE.md || true
  - rg -n "_example\.md" context/*/COHERENCE.md context/*/*/COHERENCE.md || true
expected: No critical missing fields; COHERENCE files reference templates/examples
tags: [cora, validation, hygiene]
---

# Validate cora Context

## Purpose
Run quick hygiene checks to keep the UFC structure coherent and discover missing metadata early.

## Process
1. Scan for frontmatter presence and required keys
2. Verify COHERENCE files link to canonical templates and local examples
3. Summarize gaps to fix

## Usage
Run the listed ripgrep commands (or let Ivy run them) and address any reported gaps.

## Notes
- This is a lightweight check; it won’t parse YAML strictly.
- Expand checks as cora evolves (e.g., enforce `updated` recency, `INDEX.md` membership).
