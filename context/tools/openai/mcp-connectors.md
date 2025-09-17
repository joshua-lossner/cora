---
kind: documentation
title: OpenAI — MCP Tool and Connectors
intent: Vendor‑specific guide for using remote MCP servers and connectors with the Responses API
status: active
updated: 2025-09-17
tags: [openai, mcp, connectors, tools]
---

# MCP Tool and Connectors (OpenAI)

## Purpose
Give models new capabilities by attaching remote MCP servers and built‑in Connectors via the Responses API. Use with care; approvals and logging are recommended.

## Quickstart (Python)
```python
from openai import OpenAI

client = OpenAI()

resp = client.responses.create(
    model="gpt-5",
    tools=[{
        "type": "mcp",
        "server_label": "dmcp",
        "server_description": "A D&D MCP server for dice.",
        "server_url": "https://dmcp-server.deno.dev/sse",
        "require_approval": "never",
    }],
    input="Roll 2d4+1",
)

print(resp.output_text)
```

## How It Works
- Tool type: `mcp` (covers remote MCP servers and built‑in Connectors)
- Responses may include:
  - `mcp_list_tools` — list of tool definitions imported from the server
  - `mcp_call` — a tool call sent/received via MCP

Keep the `mcp_list_tools` item in conversation context to avoid refetching on each turn (lower latency).

### Filtering Tools
Import only a subset to reduce cost/latency:
```python
tools=[{
  "type": "mcp",
  "server_label": "dmcp",
  "server_url": "https://dmcp-server.deno.dev/sse",
  "require_approval": "never",
  "allowed_tools": ["roll"],
}]
```

### Approvals
Default behavior is to request approval before sharing data with a connector/MCP. You’ll see an `mcp_approval_request` in output; reply by chaining a new Response with an `mcp_approval_response` input or by passing `previous_response_id`.

Skip approvals (only for trusted tools):
```python
tools=[{
  "type": "mcp",
  "server_label": "deepwiki",
  "server_url": "https://mcp.deepwiki.com/mcp",
  "require_approval": {"never": {"tool_names": ["ask_question","read_wiki_structure"]}},
}]
```

### Authentication
Most remote servers/connectors require OAuth tokens:
```python
tools=[{
  "type": "mcp",
  "server_label": "stripe",
  "server_url": "https://mcp.stripe.com",
  "authorization": "$STRIPE_OAUTH_ACCESS_TOKEN",
}]
```
- The API does not store `authorization` values; send on every request.
- Some servers generate authenticated URLs; always send full `server_url` path each call.

## Connectors (Built‑in IDs)
Use connectors the same way as remote MCP servers, but pass `connector_id` instead of `server_url`:
- Dropbox: `connector_dropbox`
- Gmail: `connector_gmail`
- Google Calendar: `connector_googlecalendar`
- Google Drive: `connector_googledrive`
- Microsoft Teams: `connector_microsoftteams`
- Outlook Calendar: `connector_outlookcalendar`
- Outlook Email: `connector_outlookemail`
- SharePoint: `connector_sharepoint`

Example (Google Calendar):
```python
tools=[{
  "type": "mcp",
  "server_label": "google_calendar",
  "connector_id": "connector_googlecalendar",
  "authorization": "ya29...",
  "require_approval": "never",
}]
```

## Risks and Safety (Must‑Read)
- Treat all remote MCP servers as untrusted unless verified; they can exfiltrate context data.
- Require approvals for sensitive actions; narrow `allowed_tools`.
- Log data shared with servers; review regularly.
- Guard against prompt injection; sanitize/validate tool inputs/outputs.
- Prefer official servers hosted by the service owner; avoid aggregators unless audited.
- Mind data residency/ZDR: once data leaves OpenAI to a third‑party server, their policies apply.

## Transport and Token Use
- Supports Streamable HTTP and HTTP/SSE MCP transports.
- You pay only for tokens imported for tool definitions and tool calls (no extra per‑tool fee).

## Patterns in cora
- Keep secrets in `.env`; never commit tokens.
- Save artifacts (inputs/outputs) under `context/working/` for auditability.
- Use repo‑relative paths and approvals; default to least privilege.

## See Also
- `context/tools/mcp/` — MCP background and local filesystem MCP usage (Claude Desktop)
- `context/tools/openai/platform.md` — OpenAI platform overview (APIs, tool use)
- `context/tools/connectors.md` — vendor‑neutral connector patterns and principles

