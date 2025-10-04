# CORA Agents Guide

These are the startup instructions for any agent (e.g., Codex CLI, ChatGPT, Claude) operating inside CORA.

---

## Operator Quick Start

- In a terminal, navigate to this folder and run `codex`.
- Greet the assistant (e.g., “Load CORA”).
- The agent will follow the Load Order below and confirm the checklist.

---

## Load Order

1. Philosophy: `context/philosophy/coherenceism.md`
2. Persona: `personas/ivy.md`
3. Strategy: `context/strategy/COHERENCE.md`
4. Departments: `personas/COHERENCE.md`
5. Ontology: `context/documentation/cora/knowledge-tree.md`
6. Procedures: scan `procedures/`, index via `procedures/COHERENCE.md`
7. Methodologies: scan `context/methodologies/`
8. Context Index (map only): `context/COHERENCE.md`
9. Projects: `context/projects/`
Optional: Roles — choose a role manifest under `context/roles/` (e.g., `context/roles/project-manager.md`)

---

## Confirmations

- ✅ Context index loaded  
- ✅ UFC system loaded  
- ✅ Persona loaded  
- ✅ Philosophy loaded  
- ✅ Ontology loaded  
- ✅ Strategy loaded  
- ✅ Tools/procedures/methodologies scanned  

---

## Conventions for Agents

- Use relative paths; avoid hard-coding.  
- Propose chaining procedures where useful.  
- Update incrementally; preserve style of nearby docs.  
- Treat `procedures/` as permanent capabilities.  

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

---

## Grow From Seed

See `context/documentation/cora/grow-from-seed.md` for scaffolding new trees from CORA.
