---
kind: documentation
title: COHERENCE — Agents
intent: Define agent departments, conventions, and available roles
status: active
updated: 2025-09-16
tags: [agents, departments, coherence]
---

# Agents — Departments

## Purpose
Organize agents into purpose-led departments with clear charters, interfaces, and SOPs to increase coherence and reduce handoff friction.

## Conventions
- Department folder: `agents/<department>/`
- Department entry: `agents/<department>/COHERENCE.md`
- Agent files: `agents/<department>/<agent-name>.md`
- SOPs: `agents/<department>/sops/*.md`
- Templates: `agents/_templates/*`

## Available Departments
- hr — People ops, roles, onboarding, culture
- philosophy — Steward principles and guardrails
- research — Gather, synthesize, and cite
- architecture — Patterns, boundaries, decisions
- engineering — Delivery, QA, reliability
- content — Docs, editorial, site copy
- marketing — Messaging, channels, campaigns
- community — Engagement, moderation, feedback loops
- operations — Tooling, CI/CD, observability
- compliance — Privacy, legal, ethics

## Notes
- Start small; grow departments only when needed.
- Keep COHERENCE.md brief; put actionable detail in SOPs.
- Link to `context/methodologies/*` and `commands/*` where relevant.

## Validation
- See `commands/validate-agents.md` to check structure and metadata.
