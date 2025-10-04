# CORA — Coherent Operating & Reasoning Architecture

CORA is a filesystem-native way to store **intent** (prompts as structured entities) so that AI agents can hydrate themselves, reason with your context, and produce artifacts (text, tables, essays, slides, music, code) with minimal glue code.  

**Core philosophy:** solve each problem once, capture it as a reusable capability, and make it legible across projects. Operate LLM-first: workflows and procedures are Markdown prompts anyone can run.

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
- **Policies** — optional guardrails for sourcing, safety, licensing  

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
4. Validate intent against the chosen workflow schema.  
5. Execute steps; write artifacts; log provenance.  

Artifacts may be `.md`, `.pdf`, `.csv`, `.pptx`, or other supported formats.

---

## Usage Modes

- **Local**: files + runner = artifacts in `/out`  
- **Hybrid**: local plus external tools (render slides, audio, video)  
- **Agent-native**: chat agents consume CORA directly; UI is the artifact  

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
