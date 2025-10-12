---
kind: task
title: Research — Agent Workflows (Assistants) vs. Lightweight Orchestrator
project: coherenceism-ai
status: done
git_status: none
branch: 
pr_url: 
updated: 2025-10-11
tags: [research, workflows, assistants, orchestration]
depends_on: [context/tasks/coherenceism-ai/research-openai-platform-overview.md]
---

# Task — Research Agent Workflows vs. Lightweight Orchestrator

## Purpose
Evaluate using OpenAI Agent Workflows/Assistants against a simple app-driven orchestrator that maps CORA procedures to tool calls, considering control, latency, cost, and portability.

## Steps
1) List Agent Workflows features (state, tools, parallelism) and limits.
2) Model CORA procedures as nodes; compare where Agent Workflows helps/hurts.
3) Decide MVP approach; define where to keep seams for future swap.
4) Document minimal adapter interfaces for both paths.

## Acceptance
- Decision note stored at `context/documentation/openai/workflows-vs-orchestrator.md:1` with a clear MVP recommendation and fallback. ✔

## Roles
- Project Manager — `context/roles/project-manager.md:1`
- Workflow Designer — `context/roles/workflow-designer.md:1`

## Notes
- Prioritize predictable control and debuggability in early MVP; avoid hidden automations.
