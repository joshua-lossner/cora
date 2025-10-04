---
kind: workflow
title: Essay From Notes (LLM-First)
intent: Produce a coherent essay from a single markdown+frontmatter input using only Markdown procedures and agent prompts
status: active
updated: 2025-10-04
tags: [workflow, writing]
---

# Workflow — Essay From Notes (LLM-First)

This is a Markdown-only workflow designed for operators who don’t use code. It chains Markdown procedures with clear copy/paste prompts for an LLM (Ivy + S'Vektor via COHERENCE). Outputs go under `content/essays/out/YYYY-MM-DD/<slug>/` and inputs are archived.

## Actors
- Ivy (primary drafting + style)
- S'Vektor (outline, checks, compile)

## Inputs
- One file at `content/essays/in/<file>.md` with YAML frontmatter containing: `thesis, audience, stance, length_minutes` (plus optional `tone, sources[], keywords[], title_hint`).

## Outputs
- `outline.md`, `claim_table.csv`, `draft.md`, `counterpoint.md`, `draft_checked.md`, `refined.md`, `citations.md`, `final.md`, `final.pdf`
- Archive originals under `content/essays/archive/YYYY-MM-DD/<slug>/` as `input.md, intent.yml, notes.md`.

## Steps (Prompts to Use)

1) Prepare Input (S'Vektor)
- Open: `procedures/writing/prepare_input.md`
- Copy the “Operator Prompt” into your LLM with your input file in view.
- Paste/Save emitted files to the suggested paths.

2) Outline (S'Vektor)
- Open: `procedures/writing/outline.md`
- Use the prompt to generate `outline.md` and `claim_table.csv`.

3) Expand Draft (Ivy)
- Open: `procedures/writing/draft_from_outline.md`
- Use the prompt to produce `draft.md` (hook + sections; keep labels if present).

4) Add Counterpoint (Ivy)
- Open: `procedures/writing/add_counterpoint.md`
- Insert “## Counterpoint” (2–3 sentences) into `draft.md`; save `counterpoint.md` snippet.

5) Fact Check (S'Vektor)
- Open: `procedures/writing/fact_check.md`
- Produce `draft_checked.md`, `citations.md`, and a brief `fact_check_report.md` if needed.

6) Refine Style (Ivy)
- Open: `procedures/writing/refine_style.md`
- Produce `refined.md` and `edits.diff.md`.

7) Compile (S'Vektor)
- Open: `procedures/writing/compile_leaf.md`
- Produce `final.md` (content-leaf frontmatter + refined body) and `final.pdf`.

## Success Signals
- Final includes a concrete opening hook, clear headings, counterpoint, citations as footnotes or references, and a forward-looking ending.
- At least 3 claims upgraded to (F) with resolving citations, or clearly marked assumptions.
- Artifacts present in the expected paths.

## Notes
- This workflow is vendor-neutral. Any capable LLM can be the “runner” by following these prompts and writing artifacts to the filesystem (or returning them for a human to save).
