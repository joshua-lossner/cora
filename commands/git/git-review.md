---
name: git-review
intent: Review staged/uncommitted changes and suggest a commit message
inputs: []
steps:
  - Show repository status
  - Display diffs (summary and unified)
  - Scan for common issues (logs, TODOs, secrets)
  - Suggest a conventional commit message
shell:
  - git status --porcelain=v1
  - git diff --stat
  - git diff
  - rg -n "console\\.log|TODO|FIXME|api_key|password|secret|AKIA[0-9A-Z]{16}" || true
expected: Visible status, diffs, flagged findings, and a commit suggestion
tags: [git, review, hygiene]
---

# Git Review Command

## Purpose
Review git changes before committing

## Process
1. Show status
2. Display diff with context
3. Check for common issues (console.logs, TODOs, credentials)
4. Suggest commit message

## Usage
"Review my changes"
"What did I change?"
