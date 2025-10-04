---
kind: procedure
title: Accessibility — A11y Audit
intent: Audit a surface for contrast, keyboard access, motion, and semantics
status: active
updated: 2025-10-04
tags: [accessibility, a11y]
---

# Procedure — A11y Audit

Purpose
- Catch basic accessibility issues early and gate releases on fixes.

Steps
1) Contrast check key text vs. background; meet WCAG AA.
2) Keyboard path for all interactive elements; visible focus.
3) Reduced motion respected; no flashing.
4) Semantics: landmarks, headings, labels/aria.
5) Output a short issue list with severity and fixes.

Expected
- Actionable audit notes and severity-tagged issues.

