---
name: privacy-check
intent: Review a draft for privacy-first alignment and policy compliance
inputs: [draft_path]
steps:
  - Inventory data claims and references
  - Check consent and scope
  - Propose mitigations
expected: Privacy review notes saved as draft_path.privacy.md
tags: [compliance, privacy]
---

# Privacy Check — Compliance

## Purpose
Apply the privacy review SOP to drafts that include data collection or sensitive topics.

## Usage
- Save notes with `.privacy.md` appended.
- If your downstream tree maintains a privacy SOP, reference it there.
