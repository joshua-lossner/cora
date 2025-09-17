---
kind: documentation
title: COHERENCE — Workflows
intent: Orchestrate agents, commands, and methods into repeatable chains
status: active
updated: 2025-09-16
tags: [workflows, coherence]
---

# Workflows

## Purpose
Define end-to-end workflows that chain agents, commands, and methodologies to produce consistent outcomes.

## Structure
- Workflow files live in `workflows/` (one file per workflow) or subfolders if assets are needed.
- Template: `workflows/_templates/workflow.md`.
- Keep workflows concise; link to agents, commands, and methods.

## Available Workflows
- blog-post.md — Research → Outline → Draft → Review → Edit → Publish

## Notes
- Use clear Actors, Inputs, Outputs, Steps, and Success Signals.
- Prefer commands in `commands/core|git|project|writing` and methods in `context/methodologies/`.

