---
name: outline-from-signals
intent: Generate a 6–10 bullet outline from a daily signals log
inputs: [signals_path, title_hint]
steps:
  - Read the signals and prompts
  - Select or refine a thesis
  - Produce a clear outline (problem → points → implications → conclusion)
expected: An outline saved to context/working/drafts/<project>/outline-YYYY-MM-DD.md
tags: [writing, outline]
---

# Outline From Signals

## Purpose
Turn the daily signal log into a clear, coherent outline ready for drafting.

## Usage
- Input the signals file path and an optional title hint.
- Save the outline under `context/working/drafts/<project>/outline-YYYY-MM-DD.md`.

## Notes
- Keep bullet points short; ensure logical flow and alignment with Coherenceism.

