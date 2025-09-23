---
kind: documentation
title: Connectors — Patterns & Options
intent: Clarify how we connect AI to external systems across vendors
status: draft
updated: 2025-09-17
tags: [connectors, integration]
---

# Connectors — Patterns & Options

## Purpose
Describe integration patterns to reach external systems from AI workflows. Vendor names and features vary; keep this vendor-neutral and link specifics elsewhere.

## Patterns
- API Actions — define HTTP APIs the agent can call with auth/secrets managed outside prompts
- File/Drive Integrations — grant read access to selected folders/data
- Event/Webhook Bridges — subscribe to events; trigger workflows or summarize changes

## Vendor Examples (map to patterns)
- OpenAI: Actions/function calling; Files/Vector Stores; webhooks/batch (confirm per latest docs)
- Anthropic (Claude): MCP servers (see `context/tools/mcp/`)

## Principles
- Least privilege: narrow scopes; read-only by default
- Auditability: log calls/changes; store artifacts in `context/working/`
- Separation: keep secrets in env; keep schemas explicit; avoid side effects unless intended

## Status
- Use MCP for local file context when on Claude Desktop
- Prefer repo-grounded context and procedures in cora where possible
