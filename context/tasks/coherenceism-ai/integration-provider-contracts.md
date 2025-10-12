---
kind: task
title: Integration — Provider Contracts (Chat, Voice, Tools)
project: coherenceism-ai
status: done
git_status: none
branch: 
pr_url: 
updated: 2025-10-11
tags: [integration, adapters]
depends_on: [context/tasks/coherenceism-ai/decide-architecture-and-stack.md]
---

# Task — Integration: Provider Contracts

## Purpose
Define small, swappable interfaces for chat, voice (TTS/Realtime), and tool-calling so OpenAI can be used now and swapped later.

## Steps
1) Specify TypeScript interfaces and minimal request/response shapes.
2) Add error and retry semantics; rate-limit hooks.
3) Document env variables and safety constraints.

## Acceptance
- Contract doc at `context/tools/text-to-speech.md:1` (voice) and `context/documentation/openai/provider-contracts.md:1` (overview). ✔

## Roles
- Backend Engineer — `context/roles/backend-engineer.md:1`
- Workflow Designer — `context/roles/workflow-designer.md:1`

## Notes
- Keep interfaces minimal; avoid leaking vendor specifics into the app core.
