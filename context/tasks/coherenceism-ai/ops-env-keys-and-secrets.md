---
kind: task
title: Ops — Env, Keys, and Safety
project: coherenceism-ai
status: done
git_status: none
branch: 
pr_url: 
updated: 2025-10-11
tags: [ops, security]
depends_on: [context/tasks/coherenceism-ai/init-repo-and-submodule.md]
---

# Task — Ops: Env, Keys, and Safety

## Purpose
Set up `.env.local` for the downstream app; establish server‑side token exchange for Realtime; codify safe handling rules.

## Steps
1) Define required env vars (OPENAI_API_KEY, etc.).
2) Implement server token exchange; never expose keys to the browser.
3) Document safety policy and rotate/testing notes.

## Acceptance
- Env and secret handling documented and enforced; Realtime tokens flow from server only.

## Roles
- DevOps/SRE — `context/roles/devops-sre.md:1`

## Notes
- Add a local `.env.example` to the downstream repo (not committed here).

