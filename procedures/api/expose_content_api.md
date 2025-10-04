---
kind: procedure
title: API — Expose Read-only Content
intent: Provide minimal read-only endpoints for CORA content to downstream sites
status: active
updated: 2025-10-04
tags: [api, backend]
---

# Procedure — Expose Read-only Content API

Purpose
- Serve selected CORA content via minimal endpoints when file-based reads are insufficient.

Inputs
- Target content types (branches/leaves/seeds), filtering/sorting needs.

Steps
1) Define endpoints and response shapes (avoid over-fetching).
2) Implement read-only handlers; cache aggressively; no mutations.
3) Document routes and examples for frontend integration.

Expected
- Small API surface with docs and examples; canon preserved.

