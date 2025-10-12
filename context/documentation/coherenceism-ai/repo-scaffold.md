---
kind: documentation
title: coherenceism-ai — Downstream Repo Scaffold
status: active
updated: 2025-10-11
tags: [scaffold, repo, setup]
---

# Downstream Repo Scaffold — coherenceism-ai

Purpose
- Provide a concrete, vendor-agnostic file/folder scaffold for the downstream app that embeds CORA (read-only) and implements adapters.

Prereqs
- Node.js LTS; git; local path for downstream repo as a sibling of CORA (e.g., `~/Projects/coherenceism-ai`).
- CORA available via git submodule (prefer remote URL); OpenAI key (optional until integration).

Suggested Structure
```
coherenceism.ai/
  .gitignore
  .env.example                     # OPENAI_API_KEY=, PROVIDER=openai, MODEL=...
  README.md
  cora/                            # CORA submodule (read-only)
  app/                             # Next.js (App Router)
    api/
      realtime-token/route.ts      # mint ephemeral tokens (server-only)
      write/route.ts               # apply UFC writes with approvals
      chat/route.ts                # optional: server-streamed chat/events
    page.tsx                       # shell: chat + document panes
    layout.tsx
  src/
    adapters/
      chat.ts                      # provider adapter (chat/tool-calls)
      voice.ts                     # provider adapter (realtime/text→audio)
      contracts.ts                 # minimal provider-agnostic interfaces
    ufc/
      fs.ts                        # safe read/diff/write utilities
      frontmatter.ts               # parse/serialize
      paths.ts                     # UFC map helpers
    orchestrator/
      runProcedure.ts              # step runner (deterministic)
      runWorkflow.ts               # optional small wrapper
    provenance/
      log.ts                       # append to context/logs/<today>.md
    ui/
      components/                  # ChatPane, DocPane, DiffView, LeftNav
      hooks/                       # useStreaming, useDiffApproval
  package.json
  tsconfig.json
```

Init Commands (sketch)
1) Create repo (sibling to CORA) and add CORA submodule at `cora/`.
   - Preferred: `git submodule add <cora-remote-url> cora && git submodule update --init --recursive`
   - Optional (local sibling, advanced): `git -c protocol.file.allow=always submodule add ../cora cora`
2) Scaffold Next.js app (App Router) and folders as above.
3) Add scripts: `dev`, `build`, `start`.
4) Copy `.env.example`; set `OPENAI_API_KEY` when ready.

Policies
- Keep `cora/` read-only; all writes go through approvals and are logged.
- Downstream repos should not live inside CORA; create them as siblings and reference CORA via submodule.
- Never expose secrets in client; issue ephemeral tokens via `realtime-token` route.
- Send minimal UFC slices to providers; avoid repository-wide uploads.

Next Steps
- Follow tasks under `context/tasks/coherenceism-ai/` beginning with init repo and UFC adapter.
