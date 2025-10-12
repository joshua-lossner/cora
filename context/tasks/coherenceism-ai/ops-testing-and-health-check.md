---
kind: task
title: Ops — Testing and Health Check
project: coherenceism-ai
status: done
git_status: none
branch: 
pr_url: 
updated: 2025-10-11
tags: [ops, testing]
depends_on: [context/tasks/coherenceism-ai/ufc-adapter-read-write.md]
---

# Task — Ops: Testing and Health Check

## Purpose
Add minimal tests for UFC adapter safety and a health route that verifies env/config and prints a readiness line.

## Steps
1) Unit tests: path guardrails, frontmatter parse, diff shape.
2) Health endpoint returns short status and versions.
3) Integrate CORA `procedures/core/mcp-health-check.md:1` as a read-only check in the UI.

## Acceptance
- Tests pass; health endpoint shows concise readiness; UI displays one‑line tools readiness.

## Roles
- QA/Release Manager — `context/roles/qa-release-manager.md:1`

## Notes
- Keep it fast and local; no network calls beyond provider pings in dev.

