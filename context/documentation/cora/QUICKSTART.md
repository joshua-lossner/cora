# CORA Quick Start (Artifacts Demo)

## Essay from Notes (LLM-First)
Start from template: `content/essays/in/TEMPLATE.md` (copy and edit).
1. Create a single markdown file with YAML frontmatter at the top and your rough notes in the body.
2. Place your file under `content/essays/in/`.
3. Open `workflows/essay_from_notes.md` and follow the steps. Each procedure page contains a copy/paste “Operator Prompt”.
4. Save the returned blocks to the paths shown under `content/essays/out/YYYY-MM-DD/<slug>/`.
   - No separate archive; provenance is tracked in git history.

## Validate Content (Manual)
1. Ensure `context/documentation/cora/knowledge-tree.md` exists.
2. Use its “Validation (signals to enforce)” section as a checklist.
3. Capture any fixes directly in the files, or draft suggested patches in a new note.
