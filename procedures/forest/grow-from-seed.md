---
name: grow-from-seed
intent: Initialize a downstream tree that consumes CORA as a read-only trunk
inputs: [tree_dir, cora_repo_url?]
steps:
  - Create tree directory and git repo
  - Add CORA as submodule at cora/
  - Create minimal directories (agents, content, context, procedures, workflows)
  - Copy AGENTS template and optional examples
  - Pin submodule and print next steps
shell:
  - TREE_DIR="<tree_dir>"; CORA_REPO_URL="${CORA_REPO_URL:-https://github.com/joshua-lossner/cora.git}"; set -e; \
    mkdir -p "$TREE_DIR"; cd "$TREE_DIR"; \
    git init; \
    git submodule add "$CORA_REPO_URL" cora; \
    mkdir -p agents content context procedures workflows; \
    cp cora/AGENTS-template.md AGENTS.md; \
    echo "CORA_ROOT=./cora" >> .env; \
    mkdir -p context/forest; \
    cp cora/context/_templates/forest-tree.md context/forest/COHERENCE.md 2>/dev/null || true; \
    cp cora/workflows/_templates/workflow.md workflows/_example.md 2>/dev/null || true; \
    echo "Initialized tree at $TREE_DIR with CORA submodule."; \
    echo "Next: edit AGENTS.md, add local context under context/, and render content in your site."; \
    git add .; git commit -m "chore: init with CORA seed" || true
expected: Tree initialized with cora/ submodule and minimal structure
tags: [tree, seed, scaffold]
---

# Grow From Seed (Tree Init)

## Purpose
Scaffold a new tree around CORA as the trunk. Leaves rendering and UI to the downstream tree.

## Usage
- Provide `<tree_dir>` path where the tree should live.
- Optionally set `CORA_REPO_URL` if using a fork or local mirror.

## Notes
- Keep tree content minimal; link to CORA for canon.
- Pin the submodule to a tag/commit and upgrade intentionally.
