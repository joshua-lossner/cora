---
kind: task
title: Decide Architecture & Stack (Next.js, Realtime, UFC Adapter)
project: coherenceism-ai
status: done
git_status: none
branch: 
pr_url: 
updated: 2025-10-11
tags: [architecture, planning]
depends_on: [context/tasks/coherenceism-ai/research-openai-platform-overview.md, context/tasks/coherenceism-ai/research-openai-voice-realtime.md, context/tasks/coherenceism-ai/research-openai-agents-workflows.md]
---

# Task — Decide Architecture & Stack

## Purpose
Select the initial tech stack and app architecture: Next.js (app router), server routes for token exchange, WebSocket for Realtime, UFC adapter lib for CORA.

## Steps
1) Choose SSR/ISR strategy and where to host (local-first dev).
2) Define server endpoints: `/api/realtime-token`, `/api/complete` (if needed).
3) Plan client state (chat log, pending tool calls, voice toggle).
4) Outline UFC adapter boundaries (read, diff, write with approvals).

## Acceptance
- Architecture brief added to project file (summary) and captured in CORA at `context/documentation/coherenceism-ai/architecture.md:1`. ✔

## Roles
- Project Manager — `context/roles/project-manager.md:1`
- Backend/Frontend Engineers — `context/roles/backend-engineer.md:1`, `context/roles/frontend-engineer.md:1`

## Notes
- Keep seams clear so providers (chat/voice) can swap without UI churn.
