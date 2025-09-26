---
name: new-tree
intent: Scaffold a new downstream tree in ~/Projects with cora as a submodule
inputs: [tree_name, cora_repo_url?, git_remote_url?]
steps:
  - Create tree directory under $PROJECTS_ROOT (defaults to ~/Projects)
  - Initialize git repository and optional remote
  - Add cora as submodule at cora/
  - Create AGENTS.md referencing cora/
  - Print next steps
shell:
  - PROJECTS_ROOT="${PROJECTS_ROOT:-$HOME/Projects}"; TREE_NAME="<tree_name>"; CORA_REPO_URL="${CORA_REPO_URL:-https://github.com/joshua-lossner/cora.git}"; GIT_REMOTE_URL="<git_remote_url>"; set -e; \
    mkdir -p "$PROJECTS_ROOT/$TREE_NAME"; cd "$PROJECTS_ROOT/$TREE_NAME"; \
    git init; \
    [ -n "$GIT_REMOTE_URL" ] && git remote add origin "$GIT_REMOTE_URL" || true; \
    git submodule add "$CORA_REPO_URL" cora; \
    cp cora/AGENTS-template.md AGENTS.md; \
    echo "CORA_ROOT=./cora" >> .env; \
    echo "# Refer to ./cora for cora context and procedures." >> AGENTS.md; \
    printf "\nCreated %s with cora submodule.\n" "$PROJECTS_ROOT/$TREE_NAME"; \
    printf "Run: cd %s && git add . && git commit -m 'chore: init with cora'\n" "$PROJECTS_ROOT/$TREE_NAME"
expected: Tree directory exists with cora/ submodule and AGENTS.md
tags: [scaffold, tree, submodule, cora]
---

# New Tree Scaffold

## Purpose
Create a new tree under `~/Projects` that’s pre-wired to your cora via a `cora/` git submodule and includes an `AGENTS.md` for Codex.

## Usage
- Provide `<tree_name>` and `<cora_repo_url>`; optionally `<git_remote_url>` for the new tree.
- Defaults: `PROJECTS_ROOT=~/Projects`

## Notes
- Requires git and network access to clone the cora submodule.
- If you prefer a local symlink instead of a submodule, use: `ln -s "$CORA_ROOT" cora` (set `CORA_ROOT` in `.env`) and add `cora` to `.gitignore`.
