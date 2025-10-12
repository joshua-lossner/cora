---
kind: task
title: Ops — Packaging and Run Scripts
project: coherenceism-ai
status: done
git_status: none
branch: 
pr_url: 
updated: 2025-10-11
tags: [ops, packaging]
depends_on: [context/tasks/coherenceism-ai/ui-scaffold-shell.md]
---

# Task — Ops: Packaging and Run Scripts

## Purpose
Provide `dev`, `build`, and `start` scripts, and a short README with local run instructions and known caveats.

## Steps
1) Add npm scripts and lint/format config (minimal).
2) Write `README.md` (downstream) for setup and run.
3) Confirm voice feature and diffs work on `npm run dev`.

## Acceptance
- Local run is one command; README lists envs and feature flags.

## Roles
- DevOps/SRE — `context/roles/devops-sre.md:1`

## Notes
- Keep dependencies lean; prefer native browser/Web APIs where possible.

