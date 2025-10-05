---
kind: procedure
title: Integrations — Setup MCP Servers (Codex CLI)
intent: Configure and validate MCP servers for use with CORA via Codex CLI without vendoring code
status: active
updated: 2025-10-05
tags: [integrations, mcp, codex]
---

# Procedure — Setup MCP Servers (Codex CLI)

Purpose
- Add MCP servers (e.g., web browser) to your local Codex CLI for this repo, keeping CORA vendor‑neutral.

Inputs
- Codex CLI installed
- Python 3.10+ and `uvx` available on PATH

Steps
1) Install prerequisites
   - Verify Python: `python3 -V`
   - Verify uvx: `uvx --version` (install `uv` if missing)
2) Install/verify the Web MCP
   - Check: `uvx --from mcp-browser mcp-browser --version`
   - First‑time browser runtime (optional): `uvx --from playwright playwright install chromium`
3) Configure Codex MCP locally (untracked)
   - Copy `context/mcp/codex-config.example.json:1` → `.codex/config.json` (repo‑local; `.codex/` is git‑ignored).
   - Or add via CLI: `codex mcp add web -- uvx --from mcp-browser mcp-browser mcp`
4) Health check
   - List servers: `codex mcp list` (expect `web`)
   - Start Codex in this repo; ensure the web MCP does not time out.
5) Troubleshoot timeouts
   - Preinstall browsers (Step 2).
   - Ensure `uvx` is on PATH for the same shell Codex uses.
   - Manually run: `uvx --from mcp-browser mcp-browser mcp` (should print help/usage, not crash).

Expected
- Codex starts without “MCP client for `web` failed to start: request timed out.”
- `codex mcp list` shows `web` and the server responds.

Notes
- CORA trunk remains vendor‑neutral: we commit docs and examples only; place actual configs in `.codex/` locally.
- Add more MCP docs under `context/mcp/`; keep commands resilient (prefer `uvx`).

