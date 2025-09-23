---
name: validate-content
intent: Validate content frontmatter and basic publishing fields
inputs: []
steps:
  - Check required frontmatter keys exist
  - Check canonical_slug uniqueness
  - Check sites values appear from allowed set
  - Check non-root items declare a parent
  - Check parents referenced by seeds/leaves exist
  - Heuristic: parents of seeds/leaves are branches
  - List items by site for spot checks
shell:
  - echo "Frontmatter blocks:"; rg -n "^---$" content | wc -l
  - echo "Missing kind: content"; rg -L "^kind:\\s*content" -g "content/**/*.md" || true
  - echo "Missing type:"; rg -L "^type:\\s*(root|branch|leaf|seed|pattern)" -g "content/**/*.md" || true
  - echo "Missing title:"; rg -L "^title:\\s+" -g "content/**/*.md" || true
  - echo "Missing status:"; rg -L "^status:\\s+" -g "content/**/*.md" || true
  - echo "Missing updated:"; rg -L "^updated:\\s+" -g "content/**/*.md" || true
  - echo "Invalid type value:"; rg -n "^type:\\s*(?!root|branch|leaf|seed|pattern)" -g "content/**/*.md" || true
  - echo "Missing canonical_slug:"; rg -L "^canonical_slug:\\s+" -g "content/**/*.md" || true
  - echo "Missing sites:"; rg -L "^sites:\\s*\\[" -g "content/**/*.md" || true
  - echo "Duplicate canonical_slug:"; rg -n "^canonical_slug:" content | sed 's/^[^:]*:[^:]*: *//' | sort | uniq -d || true
  - echo "Items with invalid site keys (heuristic):"; rg -n "^sites:.*\\b(?!media|info|ai|blog|social|network|com|tech)\\w+\\b" -P content || true
  - echo "Non-root items missing parent:"; rg -l "^type:\\s*(branch|leaf|seed|pattern)" -g "content/**/*.md" | xargs -I{} sh -c 'rg -q "^parent:\\s+" {} || echo {}' || true
  - echo "Parents referenced that do not exist as any canonical_slug:"; comm -23 <(rg -n "^parent:\\s*(.+)$" -g "content/**/*.md" | sed 's/.*parent:\s*//' | sort -u) <(rg -n "^canonical_slug:\\s*" -g "content/**/*.md" | sed 's/.*canonical_slug:\s*//' | sort -u) || true
  - echo "Parents of seeds/leaves that are not branches (heuristic):"; for p in $(rg -n "^type:\\s*(seed|leaf)$" -g "content/**/*.md" -l | xargs -I{} rg -n "^parent:\\s*(.+)$" {} | sed 's/.*parent:\s*//' | sort -u); do files=$(rg -l "^canonical_slug:\\s*$p$" -g "content/**/*.md"); if [ -n "$files" ]; then echo "$files" | xargs -I{} sh -c 'rg -q "^type:\\s*branch" {} || echo "Not a branch: {}"'; else echo "Missing parent slug entirely: $p"; fi; done || true
  - echo "By site (blog):"; rg -l "^sites:.*\\bblog\\b" content || true
  - echo "By site (media):"; rg -l "^sites:.*\\bmedia\\b" content || true
expected: No missing required fields; no duplicate slugs; items list per site
tags: [content, validation, hygiene]
---

# Validate Content

## Purpose
Quick checks to keep the centralized content coherent and publishable across sites.

## Usage
Run the above ripgrep invocations. Fix missing keys, duplicate slugs, or invalid site values.

## Notes
- Site-key validation is heuristic; keep allowed keys aligned with `content/COHERENCE.md`.
- For richer validation, add a script later (YAML parser) if desired.
