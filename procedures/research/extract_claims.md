---
kind: procedure
id: research_extract_claims
title: Research — Extract Claims (F/I/U)
intent: Enumerate and label claims from a target artifact
status: active
updated: 2025-10-04
tags: [research, claims]
---

# Research — Extract Claims (F/I/U)

Operator Prompt (S'Vektor)
- Given an artifact (draft, brief, notes), enumerate distinct claims.
- Label each as Fact (F), Inference (I), or Unknown (U).
- Produce a table with columns: `id, section, type, statement, notes`.

Expected Output
- A `claims.csv` table (or Markdown table) saved alongside the artifact, or returned to be saved by operator.

