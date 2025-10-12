---
kind: task
title: Backend — Tool Execution & Results
project: coherenceism-ai
status: done
git_status: none
branch: 
pr_url: 
updated: 2025-10-11
tags: [backend, tools, orchestration]
depends_on: [context/tasks/coherenceism-ai/integration-provider-contracts.md]
---

# Task — Backend: Tool Execution & Results

## Purpose
Replace the stubbed tool-results endpoint with real orchestrator logic that executes procedures/tools and returns structured outputs to the chat UI.

## Steps
1) Define contract for tool execution (input args, outputs, error shape).
2) Implement handler that runs the appropriate procedure/workflow/tool.
3) Update streaming hook to poll/subscribe to real results instead of mock data.

## Acceptance
- When a tool_call event fires, the UI eventually shows the real result payload (status complete/error) pulled from the orchestrator.

## Notes
- Coordinate with essay/procedure workflows so results can be saved to UFC when approved.
