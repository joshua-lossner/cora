---
kind: task
title: UI — Display Tool Call Results
project: coherenceism-ai
status: done
git_status: none
branch: 
pr_url: 
updated: 2025-10-11
tags: [frontend, chat, tools]
depends_on: [context/tasks/coherenceism-ai/integration-openai-realtime-voice.md]
---

# Task — UI: Display Tool Call Results

## Purpose
Surface tool execution outputs in the chat pane and mark tool cards as complete/error once results come back from the orchestrator.

## Steps
1) Extend adapter to capture tool results (success/error payloads).
2) Update hook to merge results into the matching tool card.
3) Show result summary in chat (status badge + optional actions).

## Acceptance
- Tool card status flips to `complete` or `error` with result snippet once execution finishes.

## Notes
- Wire this after the tool execution layer is ready; pairs with voice/tool integration work.
