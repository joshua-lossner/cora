---
kind: procedure
title: Create Role — Manifest + References
intent: Create a new role manifest with clear load order, scope, capsule prompt, handoffs, and resolving references
status: active
updated: 2025-10-04
tags: [roles, authoring]
---

# Procedure — Create Role

Purpose
- Add a new role to CORA with everything needed to operate it immediately.

Inputs
- role id (kebab-case), title, default persona, alternates (optional)
- Linked procedures/methodologies/tools the role will use

Expected
- A role file at `context/roles/<role-id>.md` with load order, scope, capsule prompt, handoffs, eval
- Roles index updated to list the new role
- Any missing procedures stubbed under `procedures/`

Steps
1) Draft — copy role shape from an existing role (e.g., `context/roles/project-manager.md:1`).
2) Load Order — list persona, operator guides, indexes, and key procedures for this role.
3) Scope — write Do/Don’t; keep boundaries clear to prevent role creep.
4) Capsule Prompt — one paragraph to initialize the role in-session.
5) Handoffs — define when to hand to adjacent roles (writer, researcher, workflow designer, etc.).
6) References — verify every referenced path resolves; if a procedure is missing, stub it.
7) Index — update `context/roles/COHERENCE.md:1` to list the role.
8) Validate — run `procedures/core/role_quality_check.md:1` for the new role file.

Operator Prompt
"""
You are creating a new CORA role.
Inputs: <role-id>, <title>, <default_persona>, <alternates>, <key_procedures>.

Actions:
1) Create `context/roles/<role-id>.md` with: frontmatter; Overview; Load Order; Scope; Capsule Prompt; Constraints & Eval; Handoffs; Artifacts.
2) Ensure referenced procedures exist (create stubs under `procedures/<category>/` if missing).
3) Update `context/roles/COHERENCE.md` to include a one-line summary for the new role.
4) Return: paths created/updated and a short validation note.
"""

Notes
- Prefer S’Vektor for drafting; Ivy can refine language if needed.
- Keep manifests short and pragmatic; link rather than repeat.

