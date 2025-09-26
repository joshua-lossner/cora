# cora Agents Guide (Codex CLI)

This repository implements cora — a philosophy-first assistant for the Coherenceism forest of downstream trees — using the Universal File-based Context (UFC) pattern. These instructions apply to any agent working within this repo, with a focus on Codex CLI.

## Load Order
- Agent persona: `agents/ivy.md`
- Philosophy: `context/philosophy/coherenceism.md`
- Content ontology: `context/documentation/knowledge-tree.md`
- Strategy: `context/strategy/COHERENCE.md`
- Agent departments: `agents/COHERENCE.md`
- Capabilities: procedures in `procedures/`, `context/tools/`, `context/methodologies/`
- Active work: `context/working/`

## Startup Checklist (Codex)
0. Read `agents/ivy.md` (persona)
1. Read `context/COHERENCE.md` (UFC overview)
2. Read `context/philosophy/coherenceism.md` (foundation)
3. Read `context/documentation/knowledge-tree.md` (content ontology)
4. Read `context/strategy/COHERENCE.md` (strategy overview)
5. Read `context/tools/mcp/servers.md` (tools; MCP optional)
6. List procedures in `procedures/` and skim `procedures/INDEX.md`
7. List `context/methodologies/` and read `context/methodologies/COHERENCE.md`
8. Confirm loaded (see Confirmations below)

## Confirmations
- ✅ UFC system loaded — I understand the context architecture
- ✅ Persona loaded — Ivy persona is active
- ✅ Philosophy loaded — Coherenceism foundation is active
- ✅ Content ontology loaded — Knowledge Tree is active
- ✅ Strategy loaded — Network strategy is active
- ✅ Tools overview loaded — I see available tools
- ✅ Procedures scanned — I see available procedures
- ✅ Methodologies scanned — I see available processes

## Conventions for Agents
- Prefer repository-relative paths (avoid hard-coded absolute paths).
- Use `rg` for search and `sed -n` to read files in <=250 line chunks.
- Use `update_plan` to track multi-step work; keep exactly one step in_progress.
- Treat `procedures/` as reusable capabilities; propose chaining where useful.
- When writing, update only what’s necessary; keep style consistent with nearby code/docs.

## Procedure Schema (Recommended)
New files in `procedures/` should include a lightweight frontmatter header to standardize execution and self-verification:

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

Follow with human-readable sections (Purpose, Usage, Notes). Older procedures without frontmatter remain valid.

## Safety and Approvals
- Filesystem: treat CORA as canonical content; avoid destructive ops outside explicit maintenance tasks.
- Network: avoid network calls in procedures unless documented and necessary.
- Approvals: escalate when actions impact downstream consumers or remove large sections.

## Indexes
- `procedures/INDEX.md` summarizes available procedures.
- `context/methodologies/COHERENCE.md` lists available methodologies.
- `agents/COHERENCE.md` lists available agent departments.
- `workflows/COHERENCE.md` outlines workflow shape; downstream repos define their own.

## Grow From Seed
- Read `context/documentation/grow-from-seed.md` for how to consume CORA as a trunk and grow a new tree.

## Compatibility
- In older repos you may see `CLAUDE.md` as an entrypoint; in cora, use `COHERENCE.md` per subtree and `AGENTS.md` as the canonical entry for Codex.
