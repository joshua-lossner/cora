# CORA Quick Start (Artifacts Demo)

## Essay from Notes (Unified Input)
1. Create a single markdown file with YAML frontmatter at the top and your rough notes in the body. Use the example at `content/essays/in/coherence-vs-comfort.example.md`.
2. Place your file under `content/essays/in/`.
3. Run the workflow with your runner (pseudo):
   ```bash
   cora run --workflow essay_from_notes --in content/essays/in/<your-file>.md
   ```
4. Collect results in `content/essays/out/YYYY-MM-DD/<slug>/`.
   - The original input and derived files are archived under `input_archive/` (input.md, intent.yml, notes.md).

### Batch mode
- Place multiple files in `content/essays/in/` and run:
  ```bash
  scripts/run_essay_from_notes_batch.sh
  ```
- The batch runner will call the workflow once per file, verify archival of each input into `input_archive/`, and remove it from `content/essays/in/` if archived.

## Validate Content
1. Ensure `context/documentation/knowledge-tree.md` exists.
2. Run the example script:
   ```bash
   scripts/run_validate_content.sh "content/**/*" "context/documentation/knowledge-tree.md"
   ```
3. Replace the placeholder with your real runner once configured.
