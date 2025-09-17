---
kind: workflow
title: Blog Post — Autopilot (Agents Only)
intent: Produce a blog post from signals to final draft using agents and commands
status: active
updated: 2025-09-17
tags: [workflow, content, automation]
---

# Workflow — Blog Post (Autopilot)

## Actors
- Research — agents/research/news-curator.md
- Content — agents/content/writer.md
- Philosophy — agents/philosophy/principles-reviewer.md
- Compliance — agents/compliance/privacy-reviewer.md (if applicable)
- Operations — agents/operations

## Inputs
- Project: coherenceism.blog
- Signals file path: context/working/signals/<project>/YYYY-MM-DD.md

## Outputs
- Draft at context/working/drafts/<project>/draft-YYYY-MM-DD-<slug>.md
- Final staged at ~/Projects/coherenceism.blog/src/content/journal/YYYY-MM-DD-<slug>.md

## Steps (Agents + Commands)
0. Prepare Signal Log — commands/core/prepare-signal-log.md
1. Daily Scan — commands/research/daily-scan.md (or commands/research/extract-signals.md)
2. Outline — commands/writing/outline-from-signals.md → save outline
3. Draft — commands/writing/draft-from-outline.md → save draft
4. Edit — commands/writing/edit-apply-sop.md
5. Principles Review — commands/philosophy/review-draft.md → apply guidance
6. Privacy Check (if needed) — commands/compliance/privacy-check.md → apply mitigations
7. Validate — commands/core/validate-context.md (cora) + commands/git/git-review.md (blog)
8. Stage Draft — commands/project/stage-blog-draft.md → ready for publish

## Success Signals
- Clear thesis; aligned with Coherenceism
- Clean validation and review
- Draft staged in blog repo

