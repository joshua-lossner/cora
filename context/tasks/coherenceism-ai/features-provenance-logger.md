---
kind: task
title: Feature — Provenance Logger (Auto Append)
project: coherenceism-ai
status: done
git_status: none
branch: 
pr_url: 
updated: 2025-10-11
tags: [feature, logging]
depends_on: [context/tasks/coherenceism-ai/ui-diff-approval-save.md]
---

# Task — Feature: Provenance Logger

## Purpose
After any approved write to CORA, append an entry to `context/logs/<today>.md` using CORA’s logging procedure and templates.

## Steps
1) Compute today’s log path; create from template if missing.
2) Append entry with type, actor, paths, procedure/workflow, and outcome.
3) Coalesce micro‑edits within ~2 minutes into one entry.

## Acceptance
- Log entries appear on write, matching CORA shapes and templates. ✔

## Roles
- Project Manager — `context/roles/project-manager.md:1`

## Notes
- Redact secrets; never include tokens in log text.
