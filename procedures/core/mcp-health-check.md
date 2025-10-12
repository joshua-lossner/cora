---
kind: procedure
title: MCP — Health Check (Servers & Fallbacks)
intent: Validate configured MCP servers and set graceful fallbacks for capabilities
status: active
updated: 2025-10-10
tags: [mcp, health, tools]
---

# Procedure — MCP Health Check

Purpose
- Quickly assess availability of MCP servers required by the active role, and declare degrade paths so work can proceed without blocking.

Inputs
- servers (optional) — list of server ids to check (default: from Codex config)
- role_id (optional) — to print a concise, role‑scoped summary

Expected
- One‑line readiness summary (e.g., `Tools: web=ok, fs=builtin, git=builtin`).
- A short Markdown report listing each server and status: `ok|warn|missing`.

Steps
1) Enumerate servers
   - Prefer `codex mcp list` to show configured servers for this session.
   - If local `.codex/config.json` exists, confirm entries; otherwise consult `context/mcp/codex-config.example.json:1` for examples.
2) Probe availability
   - For `web`: run `uvx --from mcp-browser mcp-browser --version` (expect an exit code 0 and a version string).
   - For builtin procedures (fs, git): mark as `builtin` (no external server required).
3) Report
   - Summarize status per id. Example: `web=ok` if version returns; `web=missing` if command not found.
4) Degrade
   - For any `missing`, mark related verbs from `context/mcp/capabilities.md:1` as unavailable and prefer documented fallbacks (often `none`).

Operator Prompt
"""
Run an MCP health check for this session.

1) List configured MCP servers: `codex mcp list`.
2) For `web`, probe: `uvx --from mcp-browser mcp-browser --version`.
3) Prepare a one‑line summary and a short Markdown bullet list per server with `ok|warn|missing`.
4) If any are missing, note the affected capability verbs and fallbacks per `context/mcp/capabilities.md:1`.
Return the one‑line summary and the short list.
"""

Notes
- Keep this read‑only. Do not install or modify environment from within CORA.
- Roles should call this once on SessionStart and proceed with graceful degrade.

