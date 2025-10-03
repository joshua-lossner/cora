---
kind: content
type: seed
title: Seed — Coherence Rails
summary: Project starter for a downstream civic/operations rails system that preserves coherence under stress with KPIs, APIs, and patterns.
status: draft
updated: 2025-09-30
version: 2025.09
tags: [coherence, architecture, operations, civic]
sites: [network]
spawned_systems: [coherence-rails]
seed_stage: idea
canonical_slug: coherence-rails
parent: ethics-and-action
authors: [Coherence Network]
related: []
---

# Seed — Coherence Rails

Define practical rails that keep human systems aligned during high‑stress events. These are structural constraints (not optional "nice‑to‑haves") that reduce fragmentation and sustain legitimacy.

## Germination Notes
- Scope: civic operations rails focused on humanitarian corridors, ceasefire windows, and information integrity.
- Surfaces: public read‑only APIs/feeds, dashboards, SMS/USSD fallbacks, verification logs.
- Minimal Slice: corridor status API + ceasefire window feed + basic monitor kit.
- Stage: idea → incubating once a pilot jurisdiction and neutral monitors commit.
- Spawned systems: `coherence-rails` (see context/forest/coherence-rails.md).

## Orientation (from prototype)

### Core Components
- Humanitarian Corridors — multilaterally verified movement paths
- Ceasefire Windows — predictable, auditable pause schedules
- Information Integrity — rumor triage, verified updates, slow‑virality defaults

### KPIs (Measure Coherence)
- Corridor success rate; corridor uptime
- Civilian‑harm proxies (e.g., hospital diversion times)
- Misinformation half‑life (rumor → neutral correction adoption)
- Cross‑party compliance to corridor/window protocols
- Service restoration time (water, power, comms)

### Public APIs (Read‑only)
- Corridor Status API
  - GET /corridors — {id, name, status: green|yellow|red, last_update, notes}
  - GET /corridors/:id — {routes, monitors, verifications[], incidents[]}
- Ceasefire Windows Feed
  - GET /windows — {id, start, end, zone, status: scheduled|active|elapsed, verifier}
  - SSE/Webhook/USSD/SMS variants for low‑bandwidth contexts
- Verification Log
  - GET /verifications — {id, subject_type, subject_id, timestamp, verifier, outcome}

### Data Models (Minimal)
- Corridor: {id, name, routes[], monitors[], status, last_update}
- Window: {id, zone, start, end, status}
- Verification: {id, subject_type, subject_id, timestamp, verifier, outcome}
- Incident: {id, subject_type, subject_id, timestamp, reporter, description, severity}

### Verification & Auditing
- Neutral monitors; randomized audits; tamper‑evident logs
- Proportional breach playbooks; public transparency

### Security & Privacy
- Minimize PII; coarsen location/time as needed
- Signed responses; rate‑limits; threat model spoofing/flooding

Implementation, governance, and publishing live in the downstream tree. This seed provides the orientation and lineage from CORA’s trunk.

