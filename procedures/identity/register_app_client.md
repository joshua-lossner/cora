---
kind: procedure
title: Identity — Register App Client
intent: Register a downstream site/app with the Identity provider with clear scopes and consent copy
status: active
updated: 2025-10-04
tags: [identity, sso, oauth]
---

# Procedure — Register App Client

Purpose
- Add an app client to the IdP and document scopes and consent text.

Inputs
- App name, redirect URIs, scopes, contact, consent copy.

Steps
1) Define scopes minimally (e.g., profile:read, comment:write).
2) Register client in IdP; capture client id/secret securely (not in CORA).
3) Document consent copy and link to privacy policy.

Expected
- Client registered; consent documented; integration notes ready.

