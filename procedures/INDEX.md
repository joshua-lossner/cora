# Procedures Index (CORA)

This index lists reusable procedures available in the trunk. Each procedure includes inputs, outputs, constraints, eval checks, and failure modes.

| id               | actor      | purpose                                                                    | inputs (required)                    | outputs                              |
|------------------|------------|----------------------------------------------------------------------------|--------------------------------------|--------------------------------------|
| outline          | s_vektor   | Produce a minimal, testable outline with labeled claims (F/I/U).          | notes.md, intent.yml                 | outline.md, claim_table.csv, assumptions.md |
| refine_style     | ivy        | Tighten prose while preserving voice and claim labels.                    | draft.md                             | refined.md, edits.diff.md            |
| fact_check       | s_vektor   | Verify claims, grade evidence (E1–E4), mark assumptions, build citations. | draft.md (+ optional sources[])      | draft_checked.md, citations.md, fact_check_report.md |
| validate_content | s_vektor   | Validate content against Knowledge Tree + front-matter; propose fixes.    | paths[], knowledge_tree              | validation_report.md, invalid_files.csv, fixes.suggestions.md |
| prepare_essay_input | s_vektor   | Parse unified essay input (markdown+frontmatter) into intent.yml, notes.md, derived title, and slug. | essay.md                            | intent.yml, notes.md, title.txt, slug.txt, meta.json |

**Conventions**  
- Inputs are filesystem paths unless otherwise stated.  
- F/I/U labels: Fact / Inference / Unknown.  
- Evidence Grades: E1 (primary with methods+data) → E4 (anecdote).
