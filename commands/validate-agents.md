---
name: validate-agents
intent: Validate agents departments, agent frontmatter, and SOP presence
inputs: []
steps:
  - Verify agents/COHERENCE.md exists
  - Check each department has COHERENCE.md
  - Validate agent files have required frontmatter keys
  - Report SOP coverage per department
shell:
  - test -f agents/COHERENCE.md && echo "agents/COHERENCE.md present" || echo "Missing agents/COHERENCE.md"
  - echo "Departments with COHERENCE:"; for d in agents/*; do [ -d "$d" ] || continue; base=$(basename "$d"); [ "$base" = "_templates" ] && continue; if [ -f "$d/COHERENCE.md" ]; then echo "  ✅ $base"; else echo "  ❌ $base (missing COHERENCE.md)"; fi; done
  - echo "Agent files missing frontmatter (first line '---'):"; rg -n --glob 'agents/**/*.md' -S '^' | cut -d: -f1 | sort -u | while read -r f; do head -n1 "$f" | rg -q '^---$' || echo "  $f"; done | sed -n '1,200p'
  - echo "Agent frontmatter keys (kind: agent, title, department, intent, status, updated):"; rg -n "^kind:\s*agent|^title:\s+|^department:\s+|^intent:\s+|^status:\s+(draft|active|archived)|^updated:\s+" agents | wc -l
  - echo "Department frontmatter kind lines (kind: department):"; rg -n "^kind:\s*department" agents/*/COHERENCE.md | wc -l
  - echo "SOP coverage by department:"; for d in agents/*; do [ -d "$d/sops" ] || continue; count=$(ls "$d"/sops/*.md 2>/dev/null | wc -l | tr -d ' '); echo "  $(basename "$d"): $count SOP(s)"; done
expected: All departments have COHERENCE; agents have frontmatter and required keys; SOPs present where applicable
tags: [agents, validation, hygiene]
---

# Validate Agents

## Purpose
Ensure department structure is present, agent frontmatter is consistent, and there is at least minimal SOP coverage where applicable.

## Process
1. Check department entry files
2. Validate agent metadata keys
3. Summarize SOP counts for visibility

## Usage
Run the listed shell checks (or ask Ivy to run them) and fix any missing or inconsistent items.

## Notes
- This is a lightweight validator; it does not strictly parse YAML.
- Extend with department-specific checks (e.g., HR requires role-charter SOP).

