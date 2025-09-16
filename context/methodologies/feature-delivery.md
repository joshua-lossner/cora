---
kind: methodology
title: Feature Delivery
intent: Deliver user-visible value in small, high-quality slices with docs and observability
status: active
updated: 2025-09-16
tags: [methodology, delivery]
---

# Feature Delivery Plan

## Goals
- Deliver user-visible value incrementally with quality, docs, and observability.

## Steps
1. Outcomes & Constraints
   - Define success metrics, non-goals, performance targets, and risks.
2. Specification
   - Acceptance criteria, UX flows, API contracts, data model changes.
3. Plan & Slice
   - MVP slice first; identify milestones and rollout plan (flags if needed).
4. Build
   - Implement smallest slice end-to-end; keep PRs small and focused.
5. Test
   - Unit, integration, and basic e2e; add monitoring/alerts as needed.
6. Docs
   - Update README, API docs, changelog; add usage examples.
7. Release
   - Staged rollout or feature flag; monitor and be ready to rollback.
8. Measure & Iterate
   - Check metrics; collect feedback; schedule iterations.

## Outputs
- Linked spec, PRs, release notes, and owner for follow-up.
