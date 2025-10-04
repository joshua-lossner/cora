---
kind: documentation
title: COHERENCE — Roles
intent: Curate session load sets via role manifests (who + what to load)
status: active
updated: 2025-10-04
tags: [roles, sessions]
---

# Roles — Index

Purpose
- Provide lightweight role manifests that curate exactly which personas, workflows, procedures, and references to load for a session. Roles reduce token load, increase repeatability, and keep focus.

Conventions
- One file per role under `context/roles/`, kebab-case.
- Frontmatter (minimal):
  - `kind: role`
  - `id: <role-id>`
  - `title`, `status`, `updated`, `tags: []`
  - `default_persona: <persona-id>` (e.g., `ivy`)
  - `alternates: []` (e.g., `[s_vektor]`)
- Sections:
  - Load Order — exact paths to open
  - Scope — what this role does (and doesn’t)
  - Capsule Prompt — a short starter prompt for the role
  - Constraints & Eval — role-specific guardrails and checks
  - Handoffs — when and how to switch personas/roles

Roles (current)
- `project-manager.md` — manage projects/tasks; keep work small and linked
- `researcher.md` — extract claims, scan sources, grade evidence, synthesize

Notes
- Roles do not duplicate documents; they link to existing workflows/procedures/references.
- Keep manifests short and up to date; prefer paths with line refs for quick jumps.
