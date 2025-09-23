---
name: setup-web-browser-mcp
intent: Install and configure the Web Browser MCP server for Codex
inputs: []
steps:
  - Ensure Node.js/npm available
  - Build server in vendors/mcp/web-browser-mcp-server
  - Update Codex config with MCP server entry
  - Restart Codex and test tools
expected: Codex lists web MCP tools (navigate, get_html) and can fetch titles
tags: [mcp, web, setup]
---

# Setup — Web Browser MCP

## Purpose
Enable web browsing via MCP tools for use in Codex CLI.

## Steps
1. Build
```
cd vendors/mcp/web-browser-mcp-server
npm install
npm run build
```
2. Configure Codex (`~/.codex/config.toml`)
```
[mcp_servers.web]
command = "node"
args = ["dist/index.js"]
transport = "stdio"
cwd = "/absolute/path/to/vendors/mcp/web-browser-mcp-server"
```
3. Restart Codex CLI

4. Test
- Ask: "Open https://example.com and return the <title> text."

## Notes
- For dev: use `npm run dev` and set args to ["index.js"], cwd to the same dir.
- Treat all websites as untrusted input; avoid secrets in prompts; log calls where possible.

