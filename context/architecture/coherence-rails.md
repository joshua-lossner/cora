---
kind: documentation
title: Coherence Rails
intent: Reusable KPIs, APIs, and patterns that preserve coherence under load
status: active
updated: 2025-09-17
tags: [coherence, architecture, patterns]
---

# Coherence Rails — KPIs, APIs, and Patterns

## Purpose
Define practical rails that keep human systems aligned during high‑stress events. These are structural constraints (not optional “nice‑to‑haves”) that reduce fragmentation and sustain legitimacy.

## Core Components
- Humanitarian Corridors — multilaterally verified movement paths
- Ceasefire Windows — predictable, auditable pause schedules
- Information Integrity — rumor triage, verified updates, slow‑virality defaults

## KPIs (Measure Coherence)
- Corridor success rate: people moved / attempts; corridor uptime
- Civilian‑harm proxies: e.g., hospital diversion times, emergency response latency
- Misinformation half‑life: time from rumor emergence to neutral correction adoption
- Cross‑party compliance: adherence to corridor/window protocols
- Service restoration time: water, power, comms after active windows

## APIs (Public, Read‑only)
- Corridor Status API
  - GET /corridors — list {id, name, status: green|yellow|red, last_update, notes}
  - GET /corridors/:id — details {routes, monitors, verifications[], incidents[]}
- Ceasefire Windows Feed
  - GET /windows — list {id, start, end, zone, status: scheduled|active|elapsed, verifier}
  - SSE/Webhook/USSD/SMS variants for low‑bandwidth contexts
- Verification Log
  - GET /verifications — {id, subject_type, subject_id, timestamp, verifier, outcome}

## Data Models (Minimal)
- Corridor: {id, name, routes[], monitors[], status, last_update}
- Window: {id, zone, start, end, status}
- Verification: {id, subject_type: corridor|window, subject_id, timestamp, verifier, outcome}
- Incident: {id, subject_type, subject_id, timestamp, reporter, description, severity}

## Verification & Auditing
- Neutral Monitors — cross‑signed observations; randomized audits
- Tamper‑evident logs — append‑only, mirrored across multiple orgs
- Breach Playbooks — proportional responses that de‑escalate

## Governance & Roles
- Decision Cells — include humanitarian ops from the start
- Public Transparency — simple dashboards, plain language status
- Proportional Boundaries — clear, predictable enforcement with review

## Implementation Notes
- Publish machine‑readable data + human‑friendly dashboards
- Prefer SMS/USSD fallbacks; design for low power and intermittent connectivity
- Document failure modes and remediation paths

## Security & Privacy
- Minimize PII; redact or coarsen location/time if needed
- HTTPS everywhere; signed responses for source integrity
- Threat model misuse (spoofing, flooding, timing attacks) and apply rate‑limits + signatures

## Reuse
- Link this document from posts or playbooks that reference corridors/windows/information integrity
- Treat KPI thresholds as living; adjust to context and learnings

## Minimal Slice (Starter)
- Public corridor map + read‑only status API (with SMS fallback)
- Scheduled ceasefire window feed exposed via web + USSD
- “Monitor kit” checklists and a single, open incident dashboard

