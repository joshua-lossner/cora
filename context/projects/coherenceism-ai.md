---
kind: project
title: coherenceism-ai — Coherence‑Grounded Assistant UI
status: active
updated: 2025-10-11
tags: [assistant, ui, voice, workflows, ufc]
---

# coherenceism-ai — Coherence‑Grounded Assistant UI

## Purpose
Build a chatGPT‑style interface that embeds CORA (read‑only) and orchestrates CORA procedures/workflows with OpenAI capabilities (chat, agent workflows, advanced voice). Keep CORA vendor‑neutral; implement adapters downstream.

## Scope
- Read CORA (UFC) locally; propose diffs and write back with approvals + provenance.
- Persona/role loader that follows CORA Lean Load and shows confirmations.
- Chat pane + UFC‑aware navigator; voice toggle using provider adapters.
- Procedure/Workflow runner that maps CORA steps to executable nodes.
- Provenance log and optional session snapshots.

## Dependencies
- Downstream code repo (new) with `cora/` as a read‑only submodule.
- OpenAI API/key for chat/voice/workflows (configured in app `.env.local`).
- Node.js LTS; Next.js (web) with Realtime voice/WebSocket support.

## Notes
- Downstream path: `~/Projects/coherenceism-ai/` (sibling to `~/Projects/cora/`). Do not nest inside CORA; use CORA as a submodule at `cora/`.

## Tasks (Summary)
- [x] context/tasks/coherenceism-ai/research-openai-platform-overview.md:1
- [x] context/tasks/coherenceism-ai/research-openai-voice-realtime.md:1
- [x] context/tasks/coherenceism-ai/research-openai-agents-workflows.md:1
- [x] context/tasks/coherenceism-ai/decide-architecture-and-stack.md:1
- [x] context/tasks/coherenceism-ai/init-repo-and-submodule.md:1
- [x] context/tasks/coherenceism-ai/init-sibling-repo-and-submodule.md:1
- [x] context/tasks/coherenceism-ai/ufc-adapter-read-write.md:1
- [x] context/tasks/coherenceism-ai/ui-scaffold-shell.md:1
- [x] context/tasks/coherenceism-ai/ui-left-nav-ufc-map.md:1
- [x] context/tasks/coherenceism-ai/ui-chat-pane-and-stream.md:1
- [x] context/tasks/coherenceism-ai/ui-diff-approval-save.md:1
- [x] context/tasks/coherenceism-ai/integration-provider-contracts.md:1
- [x] context/tasks/coherenceism-ai/integration-openai-chat.md:1
- [x] context/tasks/coherenceism-ai/features-provenance-logger.md:1
- [x] context/tasks/coherenceism-ai/ui-chat-tool-call-display.md:1
- [x] context/tasks/coherenceism-ai/ui-tool-call-results.md:1
- [x] context/tasks/coherenceism-ai/integration-openai-realtime-voice.md:1
- [x] context/tasks/coherenceism-ai/features-lean-load-checklist.md:1
- [x] context/tasks/coherenceism-ai/features-procedure-runner.md:1
- [x] context/tasks/coherenceism-ai/features-workflow-essay-pipeline.md:1
- [x] context/tasks/coherenceism-ai/quality-a11y-and-shortcuts.md:1
- [x] context/tasks/coherenceism-ai/ops-env-keys-and-secrets.md:1
- [x] context/tasks/coherenceism-ai/ops-testing-and-health-check.md:1
- [x] context/tasks/coherenceism-ai/ops-packaging-and-run-scripts.md:1
- [x] context/tasks/coherenceism-ai/integration-openai-realtime-voice-live.md:1
- [x] context/tasks/coherenceism-ai/tool-execution-backend.md:1

## PRs (Log)
- Add entries here when opening PRs (date, branch, title, summary, status, link).

## Execution Plan
1. Realtime Voice (Live Audio) — ✅ complete
   - Voice toggle now mints realtime tokens, opens WebRTC, and streams audio.
2. Tool Execution Backend — ✅ complete
   - Tool dispatcher calls orchestrator to return real procedure/workflow data.
3. Testing & QA Enhancements
   - Add automated checks (unit, health), document runbook.
   - Follow-ups: reuse `ops-testing-and-health-check.md:1` (completed), expand as needed.
4. Accessibility & Shortcuts review (done)
   - Ensure future changes keep a11y guidelines.

## Next Small Moves
- Extend QA: add integration smoke for tool dispatcher + voice handshake.
- Design + build operator controls for orchestrated tool approvals.

## Architecture (Summary)
- Next.js app with server routes for chat (optional), write, and realtime token minting.
- Lightweight orchestrator executes CORA procedures; provider adapters for chat/voice.
- UFC adapter enforces repo-relative safety; provenance logger appends daily entries.
- Voice via ephemeral tokens; text-only fallback always available.
