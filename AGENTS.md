# CORA Agents Guide

These are the startup instructions for any agent (e.g., Codex CLI, ChatGPT, Claude) operating inside CORA.

---

## Load Order

1. Persona: `agents/ivy.md`
2. Philosophy: `context/philosophy/coherenceism.md`
3. Ontology: `context/documentation/knowledge-tree.md`
4. Strategy: `context/strategy/COHERENCE.md`
5. Departments: `agents/COHERENCE.md`
6. Procedures: scan `procedures/`, index via `procedures/INDEX.md`
7. Methodologies: scan `context/methodologies/`
8. Active work: `context/working/`

---

## Confirmations

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

- `procedures/INDEX.md` — all procedures  
- `context/methodologies/` — methodologies  
- `agents/COHERENCE.md` — departments  
- `workflows/COHERENCE.md` — workflow shapes  

---

## Grow From Seed

See `context/documentation/grow-from-seed.md` for scaffolding new trees from CORA.
