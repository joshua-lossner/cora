---
name: new-project
intent: Scaffold a new project in ~/Projects with cora as a submodule
inputs: [project_name, cora_repo_url?, git_remote_url?]
steps:
  - Create project directory under $PROJECTS_ROOT (defaults to ~/Projects)
  - Initialize git repository and optional remote
  - Add cora as submodule at cora/
  - Create AGENT_STARTUP.md referencing cora/
  - Print next steps
shell:
  - PROJECTS_ROOT="${PROJECTS_ROOT:-$HOME/Projects}"; PROJECT_NAME="<project_name>"; CORA_REPO_URL="${CORA_REPO_URL:-https://github.com/joshua-lossner/cora.git}"; GIT_REMOTE_URL="<git_remote_url>"; set -e; \
    mkdir -p "$PROJECTS_ROOT/$PROJECT_NAME"; cd "$PROJECTS_ROOT/$PROJECT_NAME"; \
    git init; \
    [ -n "$GIT_REMOTE_URL" ] && git remote add origin "$GIT_REMOTE_URL" || true; \
    git submodule add "$CORA_REPO_URL" cora; \
    cp cora/CODEX-template.md AGENT_STARTUP.md; \
    echo "CORA_ROOT=./cora" >> AGENT_STARTUP.md; \
    echo "# Refer to ./cora for cora context and commands." >> AGENT_STARTUP.md; \
    printf "\nCreated %s with cora submodule.\n" "$PROJECTS_ROOT/$PROJECT_NAME"; \
    printf "Run: cd %s && git add . && git commit -m 'chore: init with cora'\n" "$PROJECTS_ROOT/$PROJECT_NAME"
expected: Project directory exists with cora/ submodule and AGENT_STARTUP.md
tags: [scaffold, project, submodule, cora]
---

# New Project Scaffold

## Purpose
Create a new project under `~/Projects` that’s pre-wired to your cora via a `cora/` git submodule and includes an `AGENT_STARTUP.md` for Codex.

## Usage
- Provide `<project_name>` and `<cora_repo_url>`; optionally `<git_remote_url>` for the new project.
- Defaults: `PROJECTS_ROOT=~/Projects`

## Notes
- Requires git and network access to clone the cora submodule.
- If you prefer a local symlink instead of a submodule, use: `ln -s "$CORA_ROOT" cora` (set `CORA_ROOT` in `.env`) and add `cora` to `.gitignore`.
