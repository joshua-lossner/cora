# CORA — Coherent Operating & Reasoning Architecture

Quick Start (Agent)
- `cd /path/to/cora`
- `codex`
- Say: “Load CORA,” then ask for a role or workflow (e.g., “Use Project Manager role” or “Run essay_from_notes”).

CORA is a filesystem-native way to store **intent** (prompts as structured entities) so that AI agents can hydrate themselves, reason with your context, and produce artifacts (text, tables, essays, slides, music, code) with minimal glue code.

**Core Philosophy**
CORA puts coherence over complexity: keep work in plain files, take the next small visible step, and link everything so it stays clear. When we solve something once, we turn it into a small, reusable prompt that anyone can run and combine. The result is a human‑readable, vendor‑neutral system where people (not tools) stay in control while the AI helps reduce noise.

---

## Why CORA Exists

CORA is the canonical trunk for the Coherenceism network. It holds philosophy, ontology, and reusable procedures in plain Markdown so that any AI assistant can load coherent context instantly.  

This trunk is a **bridge**: today downstream trees may still need code (websites, apps), but as consumption shifts toward agent-native interfaces, CORA becomes the substrate — less about code, more about content and coherence.

---

## Core Entities

- **Personas** — specialized voices or departments that act within the system  
- **Context** — philosophy, ontology, strategy, active work  
- **Content (Coherenceism)** — canonical content tree (roots, branches, seeds, leaves)  
- **Procedures** — reusable methods, captured once and kept permanent  
- **Workflows** — compositions of procedures that turn intent into artifacts  
- **Policies (optional)** — guardrails for sourcing, safety, licensing; when present, capture under `context/`  

---

## Minimal Repository Layout

```
repo root
├── personas/                    # Personas + departments
├── procedures/                  # Reusable procedures (Markdown)
├── context/                     # Philosophy, strategy, tools, working
├── coherenceism/                # Canonical Coherenceism content (roots/branches/seeds/leaves)
├── content/                     # Templates and essay I/O (in/out/archive)
├── workflows/                   # Workflow templates
├── AGENTS.md                    # Startup guide for Codex/agents
└── .env.example                 # Optional env hints
```

---

## Hydration Contract (How Agents Boot)

1. Read `AGENTS.md` for load order.  
2. Load selected personas (`personas/*`).  
3. Pull context (philosophy, ontology, strategy).  
4. Validate intent against the chosen workflow template.  
5. Execute steps; write artifacts; log provenance.  

Artifacts are primarily Markdown in this trunk. Downstream workflows and tools may produce `.pdf`, `.csv`, `.pptx`, or other formats as needed.

---

## Getting Started

Who this is for
- People who want to talk to an AI agent that runs the prompts in this repo for you.

Recommended — Agent‑operated (Codex CLI)
1) Install Codex CLI (OpenAI). See the Codex CLI project for install instructions.
2) Open a terminal and navigate to this folder.
   - macOS/Linux: `cd /path/to/cora`
   - Windows (PowerShell): `cd "C:\\path\\to\\cora"`
3) Start the agent: `codex`
4) Say “Load CORA” (or just greet it). The agent will read `AGENTS.md:1`, load the Persona, Philosophy, Strategy, Ontology, Procedures, and confirm the checklist.
5) To work, ask for a role or a workflow, e.g., “Use Project Manager role” or “Run the essay_from_notes workflow.” The agent will open the right procedures and save artifacts to the paths listed.

Optional — Chat‑only fallback (no terminal)
1) Download this repo as a ZIP and unzip it locally.
2) In your chat AI, say: “You are operating inside CORA. Load according to AGENTS.md:1. Use relative paths only.”
3) When the AI asks for files, provide the small pieces it needs (intent/notes/procedure prompt), and save outputs to the paths it names (e.g., `content/essays/out/YYYY-MM-DD/<slug>/`).

Where files go
- Inputs (essays): `content/essays/in/`
- Outputs (essays): `content/essays/out/YYYY-MM-DD/<slug>/`
- Archives: `content/essays/archive/YYYY-MM-DD/<slug>/`

Tips
- If your chat AI can’t open files, paste only the small parts needed for the current step (intent, notes, or procedure prompt). Keep messages short and focused.
- Rename outputs with today’s date and a short slug to keep things organized.
- When in doubt, follow `context/documentation/cora/LLM-Operator.md:1` step‑by‑step.

---

## Usage Modes

- **LLM-first (no code)**: use workflow/procedure prompts; save artifacts to listed paths (e.g., `content/essays/out/YYYY-MM-DD/<slug>/`). See `context/documentation/cora/LLM-Operator.md:1`.  
- **Hybrid**: pair CORA with downstream tools (e.g., render slides/audio/video) defined in project workflows.  
- **Agent-native**: chat agents (e.g., Codex CLI) load CORA directly; the chat and saved artifacts are the output.  

---

## Best Practices

- Start small; capture one procedure at a time.  
- Keep procedures specific and reproducible.  
- Maintain logical hierarchy in `context/`.  
- Never commit secrets; use `.env`.  
- Every solved problem becomes a permanent capability.  

---

## Credits

CORA is inspired by **Daniel Miessler’s Universal File-based Context (UFC)** system, originally built for his personal AI assistant “Kai.”  
Resources:  
- [Daniel’s blog post](https://danielmiessler.com/blog/personal-ai-infrastructure/)  
- [Daniel’s Fabric Project](https://github.com/danielmiessler/fabric)  

License: MIT (`LICENSE.md`)
