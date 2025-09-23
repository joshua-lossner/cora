---
kind: workflow
title: Blog Post — Autopilot (Agents Only)
intent: Produce a blog post from signals to final draft using agents and procedures
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

## Steps (Agents + Procedures)
0. Prepare Signal Log — procedures/core/prepare-signal-log.md (procedure)
1. Daily Scan — procedures/research/daily-scan.md (or procedures/research/extract-signals.md) (procedure)
2. Outline — procedures/writing/outline-from-signals.md → save outline (procedure)
3. Draft — procedures/writing/draft-from-outline.md → save draft (procedure)
4. Edit — procedures/writing/edit-apply-sop.md (procedure)
5. Principles Review — procedures/philosophy/review-draft.md → save notes to `context/working/reviews/coherenceism.blog/` (procedure)
6. Privacy Check (if needed) — procedures/compliance/privacy-check.md → apply mitigations (procedure)
7. Validate — procedures/core/validate-context.md (cora) + procedures/git/git-review.md (blog) (procedures)
8. Stage Draft — procedures/project/stage-blog-draft.md → ready for publish (procedure)

## Success Signals
- Clear thesis; aligned with Coherenceism
- Clean validation and review
- Draft staged in blog repo
