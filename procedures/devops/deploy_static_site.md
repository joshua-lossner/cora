---
kind: procedure
title: DevOps — Deploy Static Site
intent: Deploy a static site that consumes CORA read-only with monitoring and backups
status: active
updated: 2025-10-04
tags: [devops, deploy]
---

# Procedure — Deploy Static Site

Purpose
- Ship a static site safely with observability and rollback.

Steps
1) Build pipeline: install, build, test; artifact checksum.
2) Provision hosting (static host or CDN); configure caching and headers.
3) Add monitoring (uptime, error logs) and nightly backups.
4) Document rollback steps and SLOs.

Expected
- Deployed site with monitoring, backups, and rollback plan.

