# CORA Agents Guide

These are the startup instructions for any agent (e.g., Codex CLI, ChatGPT, Claude) operating inside CORA.

---

## Operator Quick Start

- In a terminal, navigate to this folder and run `codex`.
- Greet the assistant (e.g., “Load CORA”).
- The agent will follow the Load Order below and confirm the checklist.

---

## Load Order (Lean)

1. Persona: `personas/ivy.md` (or selected via greeting; see Persona Selection)
2. Philosophy: `context/philosophy/coherenceism.md`
3. COHERENCE Sweep: find and load all `**/COHERENCE.md` files (indexes)
   - For each `COHERENCE.md`, read only files listed under frontmatter key `init.files` (if any). Treat everything else as index-only.
 4. Optional Role: choose a manifest under `context/roles/` (e.g., `context/roles/project-manager.md`) to curate additional context.

Notes
- This replaces scanning whole directories on initial load. The `COHERENCE.md` files act as indexes and give just-in-time pointers.

---

## Persona Selection

Purpose
- Allow the operator to set the session persona directly in the greeting without extra prompts.

Rules
- On SessionStart, if the first greeting contains a known persona name or id (case-insensitive), load that persona instead of the default.
- Match against `personas/` manifests by either:
  - `id` in frontmatter (e.g., `ivy`, `s_vektor`), or
  - Display name found in the file (e.g., “Ivy”, “S'Vektor”).
- Examples:
  - “Good evening, Ivy …” → load `personas/ivy.md`.
  - “Hi S'Vektor — please fact-check …” → load `personas/s_vektor.md`.
- If multiple persona names appear, prefer the first occurrence.
- If no match is found, fall back to `personas/ivy.md`.

Operator Tip
- You can keep your flow natural: “Good evening, Ivy …” or “Hey S'Vektor …” will select the persona immediately.

---

## Behavioral Hooks (Doc-Only)

Purpose
- Define lightweight, vendor-neutral hook semantics that any agent can follow without code. These map common lifecycle events to expected behaviors.

Events
- Startup (Agent launch)
  - Trigger: Codex starts in this repo (before first user input).
  - Action: output a single friendly greeting line: "This is {persona_name} — <random friendly greeting>." Use the loaded persona's display name; default to Ivy if detection fails.
  - Then: immediately run Lean Load quietly; after completion, return one-line readiness (see SessionStart).
  - Sample greetings (rotate): "Nice to see you!", "Ready when you are.", "Good to be with you.", "Let’s make this clear and light.", "Here and attentive." 
- SessionStart (Greeting)
  - Trigger: first user greeting (e.g., “Hi”, “Load CORA”).
  - Action: detect persona from greeting (see Persona Selection), then perform Lean Load (persona → philosophy → COHERENCE sweep → read `init.files`). If a role is selected, run `procedures/core/mcp-health-check.md:1` and include a one‑line tools readiness summary.
  - Output: one-line confirmation summary; ready state.
- UserPromptSubmit (First intent)
  - Trigger: first substantive request after load.
  - Action: extract session intent, optionally select role manifest, propose next small move.
  - Output: short plan or options; no writes yet.
- Stop (Session end)
  - Trigger: user indicates wrap-up or agent is idle after meaningful changes.
  - Action: if any writes occurred, ensure provenance log is appended (auto) and optional snapshot policy applies.
  - Output: one-line closure with pointers to changed paths/log.

Conventions
- Hooks are behavioral, not code: follow these steps consistently on greeting/first prompt/stop.
- Do not ask confirmation to load; only escalate if required files are missing.
- Read-only load never appends logs; logging happens only on writes.

---

## Confirmations

- ✅ Persona loaded  
- ✅ Philosophy loaded  
- ✅ COHERENCE sweep completed (indexes)  
- ✅ Init files loaded (from `init.files`)  

---

## Conventions for Agents

- Use relative paths; avoid hard-coding.  
- Propose chaining procedures where useful.  
- Update incrementally; preserve style of nearby docs.  
- Treat `procedures/` as permanent capabilities.  
- Log provenance: after any procedure/workflow or any change to `context/` or `harvest/`, append an entry via `procedures/core/update_log.md:1` (see `context/logs/COHERENCE.md:1`).  
 - Do this automatically without prompting when writes occur; skip read‑only scans. Batch micro‑edits within ~2 minutes into one entry to reduce noise. Set actor via `CORA_ACTOR` (default `ivy`).  
 - Types: `procedure | workflow | context-add | context-edit | content-add | content-edit`. Include relative paths and a one‑line summary.
 - Fallback: if logging fails, queue and append at session end.
 - Session snapshots (optional): take a timestamped folder snapshot at meaningful boundaries and (optionally) mirror to iCloud if `CORA_SYNC_DIR` is set. See `context/documentation/cora/backup-strategy.md:1`.  

## Persona Voice

- Output style, tone, and constraints follow the active persona’s manifest.
- On SessionStart, set voice from the selected persona (see Persona Selection).
- Voice applies to acknowledgements, plans, and deliverables; content remains vendor‑neutral and coherent.
- If a handoff changes persona mid‑session, adapt voice immediately and note authorship when relevant.

---

## COHERENCE.md Schema

Purpose
- Make each `COHERENCE.md` both human-readable and machine-loadable.

Frontmatter (add these keys to existing frontmatter)
```yaml
init:
  files: []        # relative paths to read during initial load (keep minimal)
index:
  map: []          # optional list of folders/files to know about (index-only)
```

Conventions
- Keep `init.files` minimal or empty; indexes list what exists without forcing reads.
- Use relative paths; avoid globs unless they are stable and low-cost to enumerate.
- The body of each `COHERENCE.md` remains a readable index with brief notes.

---

## Automation Defaults

- Auto‑log: ON by default. Trigger after any file write in this repo (e.g., `context/`, `harvest/`, `procedures/`, `workflows/`, `personas/`, `roles/`, `context/projects/`). Do not prompt. Disable with `CORA_AUTO_LOG=false`.
- Auto‑snapshot: DEFAULT at session end if any writes occurred or if a change set touches >5 files. Path: `snapshots/YYYY-MM-DD/HHMM/`. Include repo root unless `CORA_SNAPSHOT_INCLUDE` is set. Disable with `CORA_AUTO_SNAPSHOT=off`.
- Safety: snapshots are local, non‑destructive copies; never remove originals. Optional mirror to iCloud via `CORA_SYNC_DIR` (local filesystem path). No network calls beyond local sync folder.
- Throttling: coalesce rapid successive edits into a single log entry and a single end‑of‑session snapshot.
- Privacy: never include secrets or tokens in log text; store only relative paths. Redact sensitive path segments when necessary.

---

## Procedure Schema (recommended)

```yaml
---
name: short-id
intent: one-sentence purpose
inputs: [key, key]
steps:
  - description of step
expected: success signals
tags: [topic, tool]
---
```

Follow with human-readable notes (Purpose, Usage, Examples).

---

## Safety & Policy

- CORA is canonical; avoid destructive edits.  
- Network calls only if explicitly documented.  
- Escalate changes that affect downstream consumers.  
- Keep CORA accessible to non-coders; vendor-neutral.  

---

## Indexes

- `procedures/COHERENCE.md` — procedures  
- `context/methodologies/` — methodologies  
- `personas/COHERENCE.md` — departments  
- `workflows/COHERENCE.md` — workflow shapes  
- `context/roles/COHERENCE.md` — roles  
- `context/mcp/COHERENCE.md` — MCP servers (docs only)

---

## Grow From Seed

See `context/documentation/cora/grow-from-seed.md` for scaffolding new trees from CORA.
