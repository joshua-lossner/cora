---
kind: documentation
title: coherenceism-ai — Architecture Brief
status: active
updated: 2025-10-11
tags: [architecture, planning, ui, voice, workflows]
---

# Architecture — coherenceism-ai

## Overview & Goals
- Chat-style UI that operates the CORA UFC canon locally (read-first, safe writes with approvals), adds optional advanced voice, and orchestrates procedures/workflows in a provider-agnostic way.
- Keep CORA vendor-neutral; encapsulate provider specifics in small adapters. Preserve human-readable provenance.

## Components
- UI Shell (Next.js, App Router)
  - Panes: Chat (streaming), Document (file view + diff), Left Nav (UFC map), Status (persona/role + load checks).
  - Accessibility: keyboard shortcuts, focus order, captions for voice.
- Backend Routes (server-only)
  - `/api/realtime-token` — mint ephemeral voice tokens.
  - `/api/chat` — start/stream completions and tool events (SSE/WebSocket); optional.
  - `/api/write` — apply UFC writes after approval and return updated file/diff.
- UFC Adapter (local FS layer)
  - Read chunked files, parse frontmatter, compute/format diffs, and enforce repo-relative path safety.
  - Write with guardrails; call Provenance Logger after success.
- Provider Adapters
  - Chat/Workflows Adapter — stream text + tool calls; translate errors.
  - Voice/Reatime Adapter — token exchange + audio stream playback hooks.
- Orchestrator (lightweight)
  - Map CORA procedure steps to executable nodes; maintain progress; small deterministic runner.
- Provenance Logger
  - Append entries to `context/logs/YYYY-MM-DD.md` using CORA templates; coalesce micro-edits.

## Data Flow (MVP)
1) Operator clicks “Load CORA” → Lean Load runs (persona, philosophy, indexes) → checklist shown.
2) Chat request → Orchestrator decides: direct chat or run a procedure/workflow.
3) Provider streams tokens (+ tool events) → UI renders partials and tool call annotations.
4) For proposed edits → Diff preview → Approve → `/api/write` → UFC write → Provenance log → UI updates.
5) Voice ON → response text sent to Realtime adapter → audio stream plays; fallback to text on error.

## Endpoints (server)
- `POST /api/realtime-token` → `{ token, expires_at }`
- `POST /api/chat` → stream of `{ delta|tool_call|final }` (optional; can embed provider client server-side without a separate route)
- `POST /api/write` → `{ path, patch }` → `{ ok, path, updated, diff }`

## Configuration
- `.env.local` (downstream): `OPENAI_API_KEY`, model ids, feature flags, rate limits.
- App flags: `VOICE_ENABLED`, `AGENT_WORKFLOWS_ENABLED` (default false), `PROVIDER=openai`.

## Security & Privacy
- Never expose long-lived API keys to the browser; use ephemeral tokens for Realtime.
- Repo-relative path enforcement in UFC adapter; deny `..` escapes and destructive ops without double confirm.
- Minimize provider payloads: send only needed UFC slices, not entire files or repo.

## Observability
- Client: structured events (chat tokens, tool calls, writes, voice state).
- Server: request ids, adapter errors, rate-limit signals; redact secrets.

## UX & A11y
- Keyboard: approve write, open diff, toggle voice, focus chat.
- Reduced-motion and captions for voice; visible connection state.

## MVP Scope & Flags
- Orchestrator path only (Workflows flag off).
- Text chat + voice playback (no live mic).
- Procedures: Lean Load checklist, Procedure Runner basic, Essay Pipeline.

## Risks & Mitigations
- Provider coupling → adapters with minimal contracts; clear seam for swap.
- Latency → stream early; chunk UFC reads.
- Conflict writes → show latest file content on diff; require re-approve if stale.

