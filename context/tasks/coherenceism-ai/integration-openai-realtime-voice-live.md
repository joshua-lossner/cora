---
kind: task
title: Integration — OpenAI Realtime Voice (Live Audio)
project: coherenceism-ai
status: done
git_status: none
branch: 
pr_url: 
updated: 2025-10-11
tags: [integration, voice, realtime]
depends_on: [context/tasks/coherenceism-ai/integration-openai-realtime-voice.md]
---

# Task — Integration: OpenAI Realtime Voice (Live Audio)

## Purpose
Replace the current token stub with a real OpenAI Realtime session, stream audio responses, and play them in the UI.

## Steps
1) Call OpenAI Realtime API to mint ephemeral tokens.
2) Establish WebRTC/WebSocket connection; stream audio frames.
3) Hook voice toggle to play/pause audio and degrade cleanly to text.

## Acceptance
- Voice responses play through the browser with minimal lag; toggling stop halts playback.

## Notes
- Reuse `useVoice` hook; store active connection so we can close on component unmount.
