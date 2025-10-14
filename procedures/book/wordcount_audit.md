---
kind: procedure
title: Book — Wordcount Audit
intent: Compute per-chapter and total wordcounts against targets; emit a report and CSV
status: active
updated: 2025-10-13
tags: [book, writing, metrics]
---

# Procedure — Wordcount Audit

Purpose
- Provide a quick, reproducible count of words for each chapter and the whole manuscript, compared to book and per‑chapter targets.

Inputs
- Book folder: `harvest/books/out/<book-slug>/`
- Targets: `length_words` range in book frontmatter or explicit `target_total` + `chapter_count`

Steps
1) Determine targets
   - If `length_words` is a range (e.g., 75000‑85000), set midpoint as `target_total`.
   - If `chapter_count` not provided, use current number of chapter files.
   - Compute `target_per_chapter = target_total / chapter_count`.
   - Set tolerance: ±10–15% per chapter; ±5% total.
2) Count words
   - Count chapter words excluding YAML frontmatter.
3) Emit report
   - CSV: `metrics/wordcount.csv` (columns: chapter, words, target, delta, delta_pct)
   - Markdown: `metrics/wordcount.md` summarizing totals and highlights over/under tolerance.

Expected
- `harvest/books/out/<book-slug>/metrics/wordcount.csv`
- `harvest/books/out/<book-slug>/metrics/wordcount.md`

Operator Prompt (S'Vektor)
"""
You are auditing book wordcount.
Given the book folder and a target range or total, compute per‑chapter and total words. Use the midpoint of a range as the target total. Derive a per‑chapter target and tolerance (±10–15%). Report any chapters outside tolerance and the total delta vs target.
Return two blocks:
1) path: .../metrics/wordcount.csv (with headers: chapter,words,target,delta,delta_pct)
2) path: .../metrics/wordcount.md (summary, totals, and highlights)
"""

Notes
- Counting heuristic: Ignore YAML frontmatter (between the first and second `---`). Count the remainder as words.
- Use consistent tokenizer (split on whitespace) for rough counts; this is a planning tool, not typesetting.

