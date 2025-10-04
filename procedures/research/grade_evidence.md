---
kind: procedure
id: research_grade_evidence
title: Research — Grade Evidence (E1–E4)
intent: Assign evidence grades to mapped sources for each claim
status: active
updated: 2025-10-04
tags: [research, evidence]
---

# Research — Grade Evidence (E1–E4)

Operator Prompt (S'Vektor)
- For each claim’s mapped sources, assign an evidence grade:
  - E1 primary (with methods+data)
  - E2 reputable secondary synthesis
  - E3 expert opinion without data
  - E4 anecdote or unverified
- Note gaps and risks; propose acquisition if needed.

Expected Output
- An updated mapping with `grade` and `risk` columns; Unknowns listed with acquisition plan.

