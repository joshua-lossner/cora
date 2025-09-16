# Rapid Bugfix Plan

## Goals
- Reproduce quickly, isolate root cause, ship a minimal safe fix with a test.

## Steps
1. Reproduce
   - Capture environment, version, inputs, logs, error messages.
2. Minimal Repro
   - Reduce to smallest failing case; add/adjust a test if possible.
3. Impact & Severity
   - Scope affected users, data loss risk, SLAs; choose hotfix vs standard.
4. Diagnose
   - Trace logs/stack, git bisect if regression, inspect recent changes.
5. Fix with Guardrails
   - Implement minimal change; add tests to prevent regression.
6. Validate
   - Run tests, manual verify reproduction steps pass; check related surfaces.
7. Ship
   - Changelog entry, version bump if needed; communicate to stakeholders.
8. Postmortem (lightweight)
   - Root cause, why not caught, prevention actions (tests, monitoring).

## Outputs
- Linked issue with repro, fix description, and test refs.
- Follow-up tasks to harden against recurrence.

