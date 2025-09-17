---
kind: tool
title: Web Browser MCP Server
intent: Enable web navigation and HTML retrieval via MCP tools for agents
status: active
updated: 2025-09-17
tags: [mcp, web]
---

# Web Browser MCP Server

## Purpose
Expose safe, structured web browsing to agents via MCP. Useful for local models or clients that support MCP tools.

## Location
- Submodule path: `vendors/mcp/web-browser-mcp-server`
- Env (optional): set `WEB_MCP_DIR=$CORA_ROOT/vendors/mcp/web-browser-mcp-server`

## Prerequisites
- Node.js and npm

## Install/Build (one time)
```
cd "$WEB_MCP_DIR"   # or vendors/mcp/web-browser-mcp-server
npm install
npm run build
```

## Start (dev or prod)
```
cd "$WEB_MCP_DIR"
# dev (hot reload)
npm run dev
# or prod (built file)
node dist/index.js
```

## Configure Codex CLI
Edit `~/.codex/config.toml` and add:
```
[mcp_servers.web]
command = "node"
args = ["dist/index.js"]
transport = "stdio"
cwd = "/absolute/path/to/vendors/mcp/web-browser-mcp-server"
```
Restart Codex CLI. It should auto-discover `navigate`, `get_html`, and related tools.

## Test
- Ask: "Open https://example.com and return the <title> text."

## Safety
- Treat unknown pages as untrusted input; avoid sending secrets in prompts.
- Prefer read-only usage; log tool calls when possible.

