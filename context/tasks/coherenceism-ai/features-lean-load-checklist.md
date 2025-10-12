---
kind: task
title: Feature — Lean Load Checklist (Persona/Philosophy/Indexes)
project: coherenceism-ai
status: done
git_status: none
branch: 
pr_url: 
updated: 2025-10-11
tags: [feature, load, ufc]
depends_on: [context/tasks/coherenceism-ai/ufc-adapter-read-write.md]
---

# Task — Feature: Lean Load Checklist

## Purpose
Run CORA’s Lean Load on session start: persona selection, philosophy document, COHERENCE indexes, and init.files; then display confirmations.

## Steps
1) Implement persona detection from greeting; load manifests.
2) Read required files (minimal) and show the four checks.
3) Cache state in session; display persona name and one‑line greeting.

## Acceptance
- On “Load CORA”, the app shows the four confirmations exactly per CORA convention.

## Roles
- Project Manager — `context/roles/project-manager.md:1`

## Notes
- Treat COHERENCE files as indexes; avoid broad scans.

