---
kind: task
title: Feature — Essay Pipeline (Outline → Draft → Refine)
project: coherenceism-ai
status: done
git_status: none
branch: 
pr_url: 
updated: 2025-10-11
tags: [feature, writing, workflow]
depends_on: [context/tasks/coherenceism-ai/features-procedure-runner.md]
---

# Task — Feature: Essay Pipeline

## Purpose
Enable a single‑click run of the essay pipeline using CORA writing procedures, saving artifacts to `harvest/essays/out/YYYY-MM-DD/<slug>/` with provenance.

## Steps
1) Wire outline → draft → refine steps to procedures.
2) Capture artifacts with correct frontmatter and paths.
3) Present diffs and approvals; log provenance on write.

## Acceptance
- A demo note runs through the pipeline and saves artifacts with logs.

## Roles
- Writer/Editor — `context/roles/writer-editor.md:1`
- Project Manager — `context/roles/project-manager.md:1`

## Notes
- Include an optional S’Vektor handoff for fact‑checking.

