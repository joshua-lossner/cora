---
kind: task
title: Feature — Procedure Runner (Operator Prompt aware)
project: coherenceism-ai
status: done
git_status: none
branch: 
pr_url: 
updated: 2025-10-11
tags: [feature, procedures]
depends_on: [context/tasks/coherenceism-ai/integration-openai-chat.md]
---

# Task — Feature: Procedure Runner

## Purpose
Detect and run CORA procedures by reading their Inputs/Steps/Operator Prompt, guiding the agent to produce artifacts and propose writes.

## Steps
1) Parse procedure frontmatter and sections.
2) Display steps with progress; allow re-run of a step.
3) Align provider prompts with Operator Prompt blocks; capture outputs to paths.

## Acceptance
- Selected procedures run end‑to‑end with visible progress and artifact paths.

## Roles
- Workflow Designer — `context/roles/workflow-designer.md:1`

## Notes
- Keep prompts minimal and role‑aware; show paths inline.

