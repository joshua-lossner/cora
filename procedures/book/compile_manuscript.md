---
kind: procedure
title: Book — Compile Manuscript
intent: Assemble book frontmatter and ordered chapters into a single manuscript file (and optional PDF)
status: active
updated: 2025-10-12
tags: [book, writing, compile]
---

# Procedure — Compile Manuscript

Purpose
- Assemble the book’s `book.md` metadata and ordered chapter files into `manuscript.md`, and optionally export a PDF if a local tool is available.

Inputs
- `harvest/books/out/<book-slug>/book.md`
- `harvest/books/out/<book-slug>/chapters/` (ordered files named `<NN>-<Chapter Title>.md`)

Steps
1) Order
   - Sort chapter files by `<NN>`.
2) Front matter
   - Compose manuscript frontmatter: `kind: manuscript`, `title`, `slug`, `status`, `updated`, `chapters: <count>`.
3) Concatenate
   - `manuscript.md` = frontmatter + a title page + chapter bodies in order.
4) Optional PDF
   - If a local exporter exists, render `manuscript.pdf` (skip otherwise).

Expected
- `harvest/books/out/<book-slug>/manuscript.md` and (optional) `manuscript.pdf`.

Operator Prompt (S'Vektor)
"""
You are compiling a manuscript.
Return a single Markdown file consisting of: manuscript frontmatter (see above), a title page (
Title, Author, Date), and the chapter bodies in order, with `# Chapter <NN> — <Title>` headings between.
If PDF export is unavailable, omit it.
"""

