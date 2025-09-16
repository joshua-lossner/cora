---
name: update-cora-submodule
intent: Update the cora submodule (cora/) to the latest remote revision and commit the pointer
inputs: []
steps:
  - Ensure submodule is initialized
  - Fetch and merge latest upstream for cora/
  - Commit the updated submodule pointer
shell:
  - set -e; \
    if [ ! -d cora/.git ]; then git submodule update --init --recursive cora; fi; \
    git submodule update --remote --merge cora; \
    git add cora; \
    git commit -m "chore(cora): update submodule" || echo "No changes in submodule"; \
    echo "cora submodule updated." 
expected: Submodule advanced to latest remote; commit created if changed
tags: [submodule, maintenance, cora]
---

# Update cora Submodule

## Purpose
Advance `cora/` submodule to the latest upstream commit and commit the new pointer in the current repo.

## Usage
Run from a project that uses cora as a submodule in `cora/`.

## Notes
- Requires the cora submodule to have a configured remote.
- Add `--recursive` if your cora repo uses nested submodules.

