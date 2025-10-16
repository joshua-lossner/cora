---
kind: documentation
title: COHERENCE — Workflows
intent: Orchestrate agents, procedures, and methods into repeatable chains
status: active
updated: 2025-10-16
tags: [workflows, coherence]
init:
  files: []
index:
  map:
    - workflows/core/
    - workflows/writing/
    - workflows/music/
scope: directory
---

# Workflows

## Purpose
Define end-to-end workflows that chain agents, procedures, and methodologies to produce consistent outcomes.

## Structure
- Categories (subfolders):
  - `core/` — session/load checks, validation, checkpoints
  - `writing/` — essays, chapters, books
  - `music/` — Suno song/album pipelines
- Root contains `COHERENCE.md` and `_templates/` only.
- Template: `workflows/_templates/workflow.md`.
- Keep workflows concise; link to personas, procedures, and methods.

## Available Workflows
- Writing: see `workflows/writing/`
- Music: see `workflows/music/`
- Core (coming soon): `workflows/core/`
Downstream consumers define their own site- or tree-specific workflows in their repos.

## Notes
- Use clear Actors, Inputs, Outputs, Steps, and Success Signals.
- Prefer procedures in `procedures/core|git|forest|writing` and methods in `context/methodologies/`.
