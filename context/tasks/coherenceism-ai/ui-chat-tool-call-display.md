---
kind: task
title: UI — Display Tool Call Outputs
project: coherenceism-ai
status: done
git_status: none
branch: 
pr_url: 
updated: 2025-10-11
tags: [frontend, chat, tools]
depends_on: [context/tasks/coherenceism-ai/ui-chat-pane-and-stream.md]
---

# Task — UI: Display Tool Call Outputs

## Purpose
Render tool-call metadata and arguments in the chat pane so operators can see which tools fired during a response.

## Steps
- [x] Extend streaming hook to capture `tool_call` events (id, name, arguments).
- [x] Render tool call cards beneath the assistant message with status/result placeholders.
- [ ] Populate results once tool execution wiring is complete.

## Acceptance
- Tool call events show up inline with readable argument JSON and status badges.

## Notes
- Update again when tool outputs are available; statuses currently default to pending.
