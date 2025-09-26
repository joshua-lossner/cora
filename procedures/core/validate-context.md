---
name: validate-context
intent: Validate cora context structure and frontmatter across directories
inputs: []
steps:
  - Check required frontmatter keys in context docs
  - Verify presence of directory COHERENCE and INDEX where applicable
  - Confirm template and example pointers exist
  - Check Knowledge Tree spec present and fresh (heuristic)
  - Report missing or malformed items
shell:
  - rg -n "^---$" context | wc -l | xargs echo "Frontmatter block delimiters:"
  - rg -n "^kind:\s*(forest-tree|project|methodology|tool|philosophy|strategy|working|documentation)" context || true
  - rg -n "^title:\s+" context || true
  - rg -n "^intent:\s+" context || true
  - rg -n "^status:\s+(draft|active|archived|reference)" context || true
  - echo "Context INDEX.md files (should be none):"; rg -n --files context | rg 'INDEX\\.md$' || echo "None"
  - rg -n "Templates: see `context/_templates/" context/*/COHERENCE.md || true
  - rg -n "_example\\.md" context/*/COHERENCE.md context/*/*/COHERENCE.md || true
  - echo "Knowledge Tree present:"; test -f context/documentation/knowledge-tree.md && echo OK || echo MISSING
  - echo "Knowledge Tree updated field:"; rg -n "^updated:\\s+" context/documentation/knowledge-tree.md || true
  - echo "Knowledge Tree staleness (>120 days since last commit) [heuristic]:"; if command -v git >/dev/null 2>&1 && test -f context/documentation/knowledge-tree.md; then last=$(git log -1 --format=%ct -- context/documentation/knowledge-tree.md 2>/dev/null || echo 0); now=$(date +%s); if [ "$last" -gt 0 ] 2>/dev/null; then days=$(( (now - last) / 86400 )); echo "$days days"; if [ "$days" -gt 120 ]; then echo "STALE"; else echo "FRESH"; fi; else echo "No git history"; fi; else echo "git unavailable"; fi
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
Run the listed ripgrep invocations (or let Ivy run them) and address any reported gaps.

## Notes
- This is a lightweight check; it won’t parse YAML strictly.
- Expand checks as cora evolves (e.g., enforce `updated` recency, `INDEX.md` membership).
