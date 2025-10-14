---
kind: procedure
title: Book — Create Outline
intent: Produce acts/parts and a chapter list with one-line themes and beats
status: active
updated: 2025-10-12
tags: [book, writing, outline]
---

# Procedure — Create Outline

Purpose
- Turn the premise and themes into an actionable outline with acts/parts, chapter sequencing, and per-chapter beats.

Inputs
- premise, themes[], genre, audience
- target length (words) and chapter count (rough)
- constraints from voice guide

Steps
1) Frame the arc
   - Choose structure (3‑act, 4‑part, or custom). State promises and turn-posts.
2) Chapter roster
   - List 12–40 chapters (range fits length). Each: title, one‑line theme, 5–9 beats.
3) Pacing & variety
   - Mark high/low intensity chapters; alternate scene vs sequel; ensure cliff/open loops.
4) Continuity notes
   - Track seeds, payoffs, character arc beats.

Expected
- `outline.md` ready to save under `harvest/books/out/<book-slug>/outline.md` with:

Template
```
# Outline — <Book Title>

## Acts / Parts
1) <Setup/Part I> — promise and stakes
2) <Confrontation/Part II> — rising complications
3) <Resolution/Part III> — climax and consequences

## Chapters
1. <Chapter Title> — <one‑line theme>
   - Beat 1: <...>
   - Beat 2: <...>
   - ...
```

Operator Prompt (S'Vektor)
"""
You are producing a concise, operable book outline.
Ask for or infer: premise, themes, audience, target length, and desired chapter range.
Return Acts/Parts (3–5 short bullets) and a numbered Chapter list.
Each chapter includes: title, one‑line theme, and 5–9 beats (short, concrete).
Mark pacing notes and any continuity seeds/payoffs.
"""

Links
- context/documentation/writing/story-structure.md:1

