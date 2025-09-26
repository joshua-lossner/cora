---
kind: documentation
title: Codex CLI — Usage in cora
intent: Summarize tool capabilities, patterns, and guardrails for Codex CLI
status: active
updated: 2025-09-17
tags: [codex, tools]
---

# Codex CLI — How We Work

## Capabilities
- Patches: `apply_patch` creates/updates/deletes files via a safe diff format
- Plans: `update_plan` keeps a visible step list; exactly one `in_progress`
- Shell: `shell` runs shell invocations (prefer `rg`; read files in <=250 line chunks)

## Guardrails
- Approvals: on-request; destructive ops require clear intent
- Sandbox: workspace-write; avoid writes outside repo unless approved
- Network: restricted; avoid downloads/installs

## Conventions
- Repository-relative paths; avoid absolute paths (use `.env` for local absolutes)
- Templates first (`_templates/`), then minimal docs linking to COHERENCE files
- Small, focused changes; keep style consistent with nearby files

## Integrations
- MCP optional (see `context/tools/mcp/`)
- Downstream trees embed cora via submodule and start from `AGENTS.md`
