---
name: validate-content
intent: Validate content frontmatter and basic publishing fields
inputs: []
steps:
  - Check required frontmatter keys exist
  - Check canonical_slug uniqueness
  - (Optional) List site keys in use
  - Check non-root items declare a parent
  - Check parents referenced by seeds/leaves exist
  - (Optional) Ensure seeds with `spawned_systems` map to entries in `context/forest/`
  - Heuristic: parents of seeds/leaves are branches
  - Heuristic: parents of branches are roots
  - List items by site for spot checks
shell:
  - echo "Frontmatter blocks:"; rg -n "^---$" content | wc -l
  - echo "Missing kind: content"; rg -L "^kind:\\s*content" -g "content/**/*.md" -g '!content/_templates/**' || true
  - echo "Missing type:"; rg -L "^type:\\s*(root|branch|leaf|seed)" -g "content/**/*.md" -g '!content/_templates/**' || true
  - echo "Missing title:"; rg -L "^title:\\s+" -g "content/**/*.md" -g '!content/_templates/**' || true
  - echo "Missing status:"; rg -L "^status:\\s+" -g "content/**/*.md" -g '!content/_templates/**' || true
  - echo "Missing updated:"; rg -L "^updated:\\s+" -g "content/**/*.md" -g '!content/_templates/**' || true
  - echo "Disallowed type (pattern) present:"; rg -n "^type:\\s*pattern" -g "content/**/*.md" || true
  - echo "Invalid type value:"; rg -n "^type:\\s*(?!root|branch|leaf|seed)" -g "content/**/*.md" -g '!content/_templates/**' || true
  - echo "Missing canonical_slug:"; rg -L "^canonical_slug:\\s+" -g "content/**/*.md" -g '!content/_templates/**' || true
  - echo "Duplicate canonical_slug:"; rg -n "^canonical_slug:" content | sed 's/^[^:]*:[^:]*: *//' | sort | uniq -d || true
  - echo "Site keys in use (non-strict):"; rg -n "^sites:\\s*\\[(.*)\\]" -o -r '$1' -g "content/**/*.md" -g '!content/_templates/**' | tr ', ' '\n' | sed '/^$/d' | sort -u || true
  - echo "Non-root items missing parent:"; rg -l "^type:\\s*(branch|leaf|seed)" -g "content/**/*.md" -g '!content/_templates/**' | xargs -I{} sh -c 'rg -q "^parent:\\s+" {} || echo {}' || true
  - echo "Parents referenced that do not exist as any canonical_slug:"; comm -23 <(rg -n "^parent:\\s*(.+)$" -g "content/**/*.md" -g '!content/_templates/**' | sed 's/.*parent:\s*//' | sort -u) <(rg -n "^canonical_slug:\\s*" -g "content/**/*.md" -g '!content/_templates/**' | sed 's/.*canonical_slug:\s*//' | sort -u) || true
  - echo "Parents of seeds/leaves that are not branches (heuristic):"; for p in $(rg -n "^type:\\s*(seed|leaf)$" -g "content/**/*.md" -g '!content/_templates/**' -l | xargs -I{} rg -n "^parent:\\s*(.+)$" {} | sed 's/.*parent:\s*//' | sort -u); do files=$(rg -l "^canonical_slug:\\s*$p$" -g "content/**/*.md" -g '!content/_templates/**'); if [ -n "$files" ]; then echo "$files" | xargs -I{} sh -c 'rg -q "^type:\\s*branch" {} || echo "Not a branch: {}"'; else echo "Missing parent slug entirely: $p"; fi; done || true
  - echo "Parents of branches that are not roots (heuristic):"; for p in $(rg -n "^type:\\s*branch$" -g "content/**/*.md" -g '!content/_templates/**' -l | xargs -I{} rg -n "^parent:\\s*(.+)$" {} | sed 's/.*parent:\s*//' | sort -u); do files=$(rg -l "^canonical_slug:\\s*$p$" -g "content/**/*.md" -g '!content/_templates/**'); if [ -n "$files" ]; then echo "$files" | xargs -I{} sh -c 'rg -q "^type:\\s*root" {} || echo "Not a root: {}"'; else echo "Missing parent slug entirely: $p"; fi; done || true
  - echo "By site (blog):"; rg -l "^sites:.*\\bblog\\b" content || true
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
- Keep seed `spawned_systems` aligned with slugs under `context/forest/`.
