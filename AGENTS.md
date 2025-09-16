# cora Agents Guide (Codex CLI)

This repository implements a Personal AI Infrastructure (cora) using the Universal File-based Context (UFC) pattern. These instructions apply to any agent working within this repo, with a focus on Codex CLI.

## Load Order
- Philosophy: `context/philosophy/` (start with `context/COHERENCE.md` references)
- Agent persona: `agents/` (if applicable)
- Personal context: `context/projects/personal/cora.md`
- Capabilities: `commands/`, `context/tools/`, `context/methodologies/`
- Active work: `context/working/`

## Startup Checklist (Codex)
1. Read `context/COHERENCE.md` (UFC overview)
2. Read `context/projects/personal/cora.md` (preferences)
3. Read `context/tools/mcp/servers.md` (tools; MCP optional)
4. List `commands/` and read `commands/INDEX.md`
5. List `context/methodologies/` and read `context/methodologies/COHERENCE.md`
6. Confirm loaded using the confirmations in `AGENT_STARTUP.md`

## Conventions for Agents
- Prefer repository-relative paths (avoid hard-coded absolute paths).
- Use `rg` for search and `sed -n` to read files in <=250 line chunks.
- Use `update_plan` to track multi-step work; keep exactly one step in_progress.
- Treat `commands/` as reusable capabilities; propose chaining where useful.
- When writing, update only what’s necessary; keep style consistent with nearby code/docs.

## Command Schema (Recommended)
New files in `commands/` should include a lightweight frontmatter header to standardize execution and self-verification:

---
name: short-id
intent: one-sentence purpose
inputs: [key, key]
steps:
  - description of step
shell:
  - example command (optional)
expected: success signals to look for
tags: [topic, tool]
---

Follow with human-readable sections (Purpose, Usage, Notes). Older commands without frontmatter remain valid.

## Safety and Approvals
- Filesystem: workspace-write; avoid destructive ops without explicit user instruction.
- Network: restricted; avoid network calls unless approved.
- Approvals: on-request; escalate only when necessary (e.g., writes outside workspace, destructive changes).

## Indexes
- `commands/INDEX.md` summarizes available commands.
- `context/methodologies/COHERENCE.md` lists available methodologies.

## Compatibility
- In older repos you may see `CLAUDE.md` as an entrypoint; in cora, use `COHERENCE.md` per subtree and `AGENT_STARTUP.md` as the canonical entry for Codex.
