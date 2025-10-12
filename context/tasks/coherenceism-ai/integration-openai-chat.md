---
kind: task
title: Integration — OpenAI Chat/Workflows Adapter
project: coherenceism-ai
status: done
git_status: none
branch: 
pr_url: 
updated: 2025-10-11
tags: [integration, openai, chat]
depends_on: [context/tasks/coherenceism-ai/integration-provider-contracts.md]
---

# Task — Integration: OpenAI Chat/Workflows Adapter

## Purpose
Implement the provider adapter for text chat and (optionally) Agent Workflows, mapping CORA prompts and tool schema to provider calls.

## Steps
1) Implement chat streaming and tool-call plumbing.
2) If using Workflows, encode a thin mapping from CORA procedure steps to workflow nodes.
3) Translate errors into contract-standard forms for the UI.

## Acceptance
- Chat works end-to-end in the UI with streaming and basic tool calls. ✔

## Roles
- Backend Engineer — `context/roles/backend-engineer.md:1`

## Notes
- Keep a feature flag for Workflows vs. lightweight orchestrator.
