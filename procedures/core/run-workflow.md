---
name: run-workflow
intent: Render workflow steps and references as a checklist for execution
inputs: [path]
steps:
  - Print title and intent
  - List Actors and Inputs
  - Enumerate Steps with referenced agents/procedures
expected: A readable checklist with links to agents/procedures
tags: [workflow, execution]
---

# Run Workflow (Checklist)

## Purpose
Quickly render a given workflow into a checklist with its steps and referenced links.

## Usage
Example to render a workflow:

```
FILE=workflows/example/my-workflow.md
echo "# $(rg -n '^title:' "$FILE" | sed 's/.*title:\\s*//')"
echo
echo "Actors:"; rg -n '^## Actors|^## Inputs|^## Steps' -n "$FILE" | sed -n '1,999p' >/dev/null # anchor
sed -n '/^## Actors/,/^## Inputs/p' "$FILE" | sed '1d;$d'
echo
echo "Steps:"; sed -n '/^## Steps/,/^## Chain/p' "$FILE" | sed '1d;$d'
echo
echo "Referenced procedures:"; rg -o "procedures/[a-z0-9_\-/]+\\.md" -n "$FILE" | cut -d: -f2 | sort -u
echo "Referenced agents:"; rg -o "agents/[A-Za-z0-9_\-/]+\\.md" -n "$FILE" | cut -d: -f2 | sort -u
```

Adjust `FILE` to point to any workflow.
