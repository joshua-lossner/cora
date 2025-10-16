---
kind: procedure
title: Book — Flow Check (Cross‑Chapter)
intent: Ensure continuity of voice, threads, motifs, and open loops across chapters
status: active
updated: 2025-10-14
tags: [book, editing, structure]
---

# Procedure — Flow Check (Cross‑Chapter)

Purpose
- Keep the book reading as one coherent arc: consistent voice, clear handoffs, and tracked promises/payoffs.

Inputs
- book.md (Voice, Outline, Characters)
- chapters folder
- style_sheet.md (if present)

Steps
1) Voice continuity
   - Sample 2–3 paragraphs per chapter; verify POV/tense/diction/distance alignment.
2) Thread register
   - List 2–4 recurring threads (e.g., motif, question, relationship). For each chapter: mark enter/carry/resolve.
3) Open loop ledger
   - Record each chapter’s exit hook; ensure the next chapter addresses or intentionally delays it.
4) Cadence & length banding
   - Check chapters within target ± tolerance; alternate high/low intensity or scene/sequel to vary rhythm.
5) Continuity fixes
   - Note required linkers (1–2 sentences at starts/ends), motif echoes, or pronoun/time clarifications.

Expected
- A short `flow_check.md` note or checklist under the book folder, and an edit TODO list per chapter.

Operator Prompt (S'Vektor)
"""
You are running a cross‑chapter flow check.
Return a short register of threads (enter/carry/resolve), a list of open loops per chapter with the next address point, and specific linker sentences to add where flow falters. Keep it concise and actionable.
"""

Notes
- For nonfiction, treat “threads” as recurring concepts, images, or promises.

