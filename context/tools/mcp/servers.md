---
kind: tool
title: MCP Tools Overview
intent: Outline optional MCP servers and usage within cora
status: active
updated: 2025-09-16
tags: [tool, mcp]
---

# MCP Tools Overview

## For Codex CLI

- MCP is optional. Prefer direct filesystem access within this repository.
- Use repository-relative paths (e.g., `context/...`, `commands/...`).
- If running outside this repo, ensure the agent has access to this context (open Codex in this repo, or include this repo as a submodule).

## Example: Filesystem Server (Claude Desktop, optional)

If you also use Claude Desktop with MCP:
- Purpose: Direct access to cora context directory
- Path: `<CORA_ROOT>/context/` (set `CORA_ROOT` in `.env` if needed)
- Package: `@modelcontextprotocol/server-filesystem`

How to add MCP servers (Claude Desktop):
1. Install: `npm install @modelcontextprotocol/server-<name>`
2. Add to desktop config
3. Document in `context/tools/mcp/<servername>.md`
4. Update this overview

## MCP Architecture Patterns

- Local MCPs: immediate file/system access
- Cloud MCPs: always-available APIs and services
- Dynamic Tools: markdown-defined tools callable by agents

## Future MCP Servers to Consider

1. Memory/Notes MCP — persistent memory
2. Git MCP — repository management
3. Personal Daemon — broadcasting current state
4. Command Registry — dynamic tool generation from markdown
