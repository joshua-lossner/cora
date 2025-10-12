---
kind: task
title: Integration — OpenAI Realtime Voice (Advanced Voice)
project: coherenceism-ai
status: done
git_status: none
branch: 
pr_url: 
updated: 2025-10-11
tags: [integration, voice, realtime, openai]
depends_on: [context/tasks/coherenceism-ai/research-openai-voice-realtime.md, context/tasks/coherenceism-ai/integration-provider-contracts.md]
---

# Task — Integration: OpenAI Realtime Voice (Advanced Voice)

## Purpose
Add a voice toggle to stream synthesized audio of responses using OpenAI Realtime, with secure token exchange and low‑latency playback.

## Steps
1) Implement server route for short‑lived Realtime tokens.
2) Client: mic capture (optional), WS connect, stream playback.
3) Text‑only TTS path for responses (no mic) as MVP.

## Acceptance
- When voice toggle is on, responses play via advanced voice with minimal lag; errors degrade cleanly to text.

## Roles
- Media Producer — `context/roles/media-producer.md:1`
- Frontend Engineer — `context/roles/frontend-engineer.md:1`

## Notes
- Do not expose API keys to the browser; use server‑issued tokens.

