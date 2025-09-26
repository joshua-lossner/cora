# AGENTS.md Template (Codex + cora)

Use this file in a tree to align with your cora system.

## Load cora
- Read: `AGENTS.md` (in your cora repo)
- Or, if this file sits inside the cora repo, follow the relative paths below.

## Read First (relative when inside cora repo)
- `agents/ivy.md`
- `context/COHERENCE.md`
- `context/philosophy/coherenceism.md`
- `context/tools/mcp/servers.md`

## Pointing to Your cora
- If this file is in a different tree, Codex needs a way to locate your cora repo.
- Recommended (submodule): add your cora repo as a submodule at `cora/` and reference paths like `cora/context/...` in your local `AGENTS.md`.
- Alternative: set `CORA_ROOT` in a `.env` file to your local absolute path and reference via that variable in scripts/docs.
- Optional: include a one-line note in this tree’s `AGENTS.md` that says where cora lives (e.g., `CORA_ROOT=./cora`).

### Submodule Setup (recommended)
```bash
# inside your tree
git init                               # if not already a repo
git submodule add https://github.com/joshua-lossner/cora.git cora
cp cora/AGENTS-template.md AGENTS.md
echo "CORA_ROOT=./cora" >> .env  # optional hint for humans
```
Now point Codex to `AGENTS.md` in this tree. It references files under `cora/`.

## Confirm Loaded
- ✅ UFC system loaded — I understand the context architecture
- ✅ Philosophy loaded — Coherenceism foundation is active
- ✅ Tools overview loaded — I see available tools
- ✅ Procedures scanned — I see available procedures
- ✅ Methodologies scanned — I see available processes

## Tree Context
- Describe the tree’s goals, constraints, and links.

## Relevant Procedures
- List procedures in `procedures/` that apply here.
