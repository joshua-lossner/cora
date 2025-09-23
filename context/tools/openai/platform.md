---
kind: documentation
title: OpenAI Platform — Overview (API/tools)
intent: Capture a stable, high-level summary of OpenAI platform concepts we use
status: draft
updated: 2025-09-17
tags: [openai, api, tools]
---

# OpenAI Platform — Overview

## Scope
High-level concepts relevant to cora; specifics evolve. Confirm against official docs before implementation.

## Core APIs (high-level)
- Chat/Responses API — text generation with tool use (function calling)
- Realtime API — low-latency, streaming interactions
- Files & Vector Stores — store/retrieve content for search and grounding
- Batch/Assistants (if applicable) — orchestration and background jobs

## Tool Use (function calling)
- Models can request calling named tools with JSON args; your code executes and returns results
- Keep schemas small; return concise, structured data; avoid side effects by default

## Patterns We Use
- Grounding with repo context (cora) over network calls
- Clean separation between content (context/) and capabilities (procedures in procedures/)
- Environment via `.env` for local paths/secrets; never commit secrets

## Notes
- This is a living summary; update as platform features change
- For Claude/MCP, see `context/tools/mcp/` (separate protocol)
