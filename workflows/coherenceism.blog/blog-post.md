---
kind: workflow
title: Blog Post — Research to Publish
intent: Deliver a coherent blog post from research to publication
status: active
updated: 2025-09-16
tags: [workflow, content]
---

# Workflow — Blog Post

## Actors
- Research — agents/research (synthesis)
- Content — agents/content (writing/editing)
- Philosophy — agents/philosophy/principles-reviewer.md (alignment)
- Compliance — agents/compliance/privacy-reviewer.md (as needed)
- Operations — agents/operations (publish/deploy)

## Inputs
- Topic or question; constraints (audience, length, voice)
- Sources or seed materials (links/notes)

## Outputs
- Post markdown (src/content/journal/<slug>.md)
- Commit with message and summary; published site build

## Steps
0. Daily Signal Scan
   - Run Research SOP: agents/research/sops/daily-signal-scan.md
   - Use commands/research/daily-scan.md and/or commands/research/extract-signals.md
   - Save to `context/working/signals/coherenceism.blog/YYYY-MM-DD.md` (template: context/_templates/signal-log.md)
1. Research Brief
   - Gather 3–5 high-signal sources; extract key claims
   - Use commands/writing/summarize.md to condense notes
2. Outline
   - Draft an outline: problem, key points, implications, conclusion
   - Sanity-check against context/philosophy/coherenceism.md
3. Draft
   - Write a concise first draft; keep paragraphs short; link where useful
   - Run commands/writing/summarize.md on sections to tighten
4. Principles Review
   - Send draft to agents/philosophy/principles-reviewer.md using its SOP
   - Apply guidance; note any tensions/tradeoffs
5. Edit
   - Clarify voice and structure; add headings and links
6. Privacy Check (if applicable)
   - If collecting data or referencing sensitive info, run compliance SOP
7. Commit & Review
   - Run commands/core/validate-context.md; then commands/git/git-review.md
   - Adjust based on findings; craft clear commit message
8. Publish
   - Merge and deploy; verify build and page
   - Postmortem small notes: what to reuse next time

## Chain (Commands)
- commands/writing/summarize.md → commands/core/validate-context.md → commands/git/git-review.md

## Success Signals
- Clear thesis; aligned with Coherenceism; actionable insights
- No privacy issues; clean git review; successful publish
