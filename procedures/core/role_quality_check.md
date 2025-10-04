---
kind: procedure
title: Role Quality Check — Resolve References
intent: Verify a role manifest is complete and all referenced paths exist
status: active
updated: 2025-10-04
tags: [roles, validation]
---

# Procedure — Role Quality Check

Purpose
- Validate that a role file is operational: references resolve, scope and prompts are present, and indexes are updated.

Inputs
- Path to role file (e.g., `context/roles/<role-id>.md`)

Expected
- A short report confirming: sections present; referenced paths exist; roles index lists the role.

Checks
1) Sections present: Overview, Load Order, Scope, Capsule Prompt, Constraints/Eval, Handoffs, Artifacts.
2) Load Order references resolve (personas, guides, indexes, procedures).
3) `context/roles/COHERENCE.md` includes the role id with a one-line description.
4) Any procedure stubs noted but missing are created under `procedures/`.

Operator Prompt
"""
You are validating a CORA role manifest at <role_path>.

1) Confirm required sections exist.
2) For each path in Load Order, verify it exists; list missing ones.
3) Confirm the roles index lists this role with a short description.
4) Output a concise report: [check, result, notes, suggested-fix].
"""

Notes
- Keep it short; fix missing references before refining prose.

