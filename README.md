# cora — Coherent Operating & Reasoning Architecture

> **Based on Daniel Miessler's UFC System** - This implementation is inspired by [Daniel Miessler's Personal AI Infrastructure](https://danielmiessler.com/blog/personal-ai-infrastructure/) that he built for his AI assistant "Kai". Full credit to Daniel for pioneering this approach and openly sharing it with the community.

## Why cora exists

cora is the canonical trunk for the Coherenceism network. It keeps philosophy, ontology, and reusable procedures in one place so any AI assistant (including Codex CLI) can load coherent context instantly. Today there are no downstream trees in production — this repo is the seedbed that future sites, apps, and experiences will grow from.

**Core philosophy:** solve each problem once, then keep the solution as a reusable capability.

### Primary use cases
1. **Maintain the trunk.** Steward the canonical Coherenceism philosophy, knowledge tree, and procedures in a clean, UI-free repo.
2. **Fork for your own worldview.** Swap the philosophy layer, rewrite the knowledge tree, and you have a ready-made UFC scaffold for any belief system or project.
3. **Plant downstream trees.** Lift seeds from `content/seeds/`, register new trees in `context/forest/`, and let external repos render them.

## Getting started

### 1. Clone this repository

```bash
git clone https://github.com/joshua-lossner/cora.git cora
cd cora
# optional: cp .env.example .env && edit CORA_ROOT/BLOG_ROOT
```

### 2. Load core philosophy and strategy

```bash
# Review core philosophy and strategy
nano context/philosophy/coherenceism.md
nano context/strategy/COHERENCE.md
```

### 3. Use with Codex CLI (trunk only)

```bash
# Option A: Work inside this repo (recommended for Codex)
# Open Codex CLI in this repo and use the cora system directly.

# Option B: Embed in another tree as a submodule (recommended)
cd ~/your-tree
git init                                      # if not already a repo
git submodule add https://github.com/joshua-lossner/cora.git cora
cp cora/AGENTS-template.md AGENTS.md          # startup instructions that reference cora/
echo "CORA_ROOT=./cora" >> .env                 # optional human hint
echo "# Refer to ./cora for cora context and procedures." >> AGENTS.md
```

## How the trunk works (and why trees matter later)

### The Three-Layer Architecture

1. **Trunk (CORA)** — canonical philosophy and content; no UI
2. **Forest Pointers** — downstream repos include CORA as submodule and point to it
3. **Growing Capabilities** — procedures and methods accrue in both trunk and trees

### Daily workflow in the trunk

1. Start or resume work → load the context listed in `AGENTS.md`.
2. Solve a problem → capture it as a procedure or methodology.
3. Update seeds/leaves → keep `spawned_systems` accurate even if the tree is just an idea.
4. Record active focus → maintain `context/working/active/` so the field stays legible.

## Repository layout

```
repo root
├── agents/                      # Persona + departments (minimal)
├── procedures/                  # Reusable procedures (core, forest, writing, research, …)
├── context/                     # Canon + strategy + tools + working
├── content/                     # Roots, branches, seeds, leaves
├── workflows/                   # Shapes/templates (no site-specific flows)
├── AGENTS.md                    # Startup for Codex
├── AGENTS-template.md           # To copy into downstream trees
└── .env.example                 # Optional hints (CORA_ROOT)
```

## Core concepts

### Universal File-based Context (UFC)
Your filesystem is the knowledge base. Directories map to context slices that agents load explicitly.

### Procedures as permanent capabilities
Once a problem is solved, capture it under `procedures/` so every agent can reuse it. Check `procedures/INDEX.md` for the catalog.

### Forest registry
Seeds that can spawn external systems declare `spawned_systems`. Register prospective trees in `context/forest/`; it keeps the ecosystem legible even before anything ships.

## Building on CORA

### Creating Procedures

When you solve a problem, save it:

```bash
# Create a new procedure
cat > procedures/your-solution.md << 'EOF'
# Procedure Name

## Purpose
What this solves

## Process
1. Step one
2. Step two
3. Step three

## Usage
"Example phrases that trigger this"
EOF
```

### Adding or customizing context

Organize knowledge by topic and keep references to templates close by:

```bash
# Add methodology
nano context/methodologies/code-review.md

# Add forest tree context  
mkdir -p context/forest/my-tree
nano context/forest/my-tree.md

# Add tool documentation
nano context/tools/my-tool.md
```

### Managing secrets

Never commit secrets. Use environment variables:

```bash
# Add to .env (git-ignored)
echo "OPENAI_API_KEY=sk-..." >> .env

# Reference in .env.example (committed)
echo "OPENAI_API_KEY=" >> .env.example
```

## Adapting CORA to your philosophy

Want a trunk for a different worldview or product?

1. **Fork this repo.** Rename the project and update `AGENTS.md` to describe your philosophy.
2. **Rewrite the roots.** Update `context/philosophy/…`, `content/roots/`, and adjust the branches/seeds to fit your ontology.
3. **Revise procedures.** Keep or replace items under `procedures/` so they reflect your practices.
4. **Update documentation.** Tailor the Knowledge Tree definitions and README to explain your version.

This pattern works for teams that want their own UFC system with a different intent.

## Planting downstream trees from seeds

Even though the current forest is aspirational, the workflow is ready:

1. Choose a seed in `content/seeds/` that you want to grow.
2. Ensure it lists the tree slug in `spawned_systems` (add it if missing).
3. Create a forest entry via `context/_templates/forest-tree.md` and document purpose, repo URL, and next change.
4. In the new tree repo, follow `procedures/forest/grow-from-seed.md` to scaffold with the CORA submodule.
5. Keep the registry updated as the tree progresses from idea to active.

## Advanced usage

### Agents

Create specialized personalities:

```bash
cat > agents/researcher.md << 'EOF'
# Researcher Agent

You are a thorough researcher who:
- Finds primary sources
- Verifies information
- Provides citations
- Identifies biases
EOF
```

### Methodologies

Document complex processes:

```bash
cat > context/methodologies/security-audit.md << 'EOF'
# Security Audit Methodology

## Phase 1: Reconnaissance
- Identify attack surface
- Map dependencies
- Document entry points

## Phase 2: Analysis
[...]
EOF
```

### Grow From Seed (Downstream)
See `context/documentation/grow-from-seed.md` for creating a new tree that consumes CORA. Downstream repos render content and keep their own agents/context/procedures/workflows.

## Growth Pattern

```
Week 1:   5 procedures  → Basic automation
Month 1:  30 procedures → Significant capability
Month 3:  100+ procedures → Complex workflows automated
Month 6:  Exponential → AI handles most repetitive work
```

Each procedure can chain with others, creating infinite combinations.

## Best Practices

### 1. Start Small

- Don't over-plan
- Add procedures as you work
- Let the system grow organically

### 2. Be Specific

- Clear procedure descriptions
- Explicit process steps
- Example usage phrases

### 3. Stay Organized

- One procedure per file
- Descriptive filenames
- Logical context hierarchy

### 4. Regular Maintenance

```bash
# Backup your brain
cd cora
git add .
git commit -m "Update: added new procedures"
git push
```

### 5. Security First

- Never commit .env
- Use .gitignore properly
- Rotate API keys regularly

## Practical Examples

### Example: Code Review Automation

```bash
# Create command
cat > procedures/review-pr.md << 'EOF'
# Review Pull Request

## Process
1. Check for breaking changes
2. Verify test coverage
3. Review security implications
4. Check performance impact
5. Generate review comments

## Usage
"Review this PR"
"Check this code change"
EOF
```

### Example 3: Daily Standup

```bash
# Create command  
cat > procedures/daily-standup.md << 'EOF'
# Generate Daily Standup

## Process
1. Check yesterday's completed tasks
2. Review today's priorities
3. Identify blockers
4. Format for Slack

## Reads From
- context/working/active/
- Calendar events
- Git commits

## Usage
"Generate my standup"
"What did I do yesterday?"
EOF
```

## Troubleshooting

### AI not loading context?

- Check `AGENTS.md` or `COHERENCE.md` exists in project
- Verify paths are correct (use `cora/` if using a submodule)
- Ensure files are readable
- If using submodules, ensure they are initialized: `git submodule update --init --recursive`

### Procedures not working?

- Check procedure file exists
- Verify markdown formatting
- Test process steps manually

### Git issues?

- Ensure .env is in .gitignore
- Check remote URL: `git remote -v`
- Pull before pushing: `git pull --rebase`

## The Power of Compounding

Every day you use cora:

- Problems you solve become permanent solutions
- Knowledge accumulates in structured form
- Future work builds on past learnings
- Your AI becomes more capable

This isn't just about automation - it's about building a second brain that grows with you.

## Contributing to cora

### Adding a new capability

1. Solve the problem manually
2. Document the solution
3. Save as procedure
4. Commit to git
5. Available forever

### Sharing with others

- Procedures can be shared individually
- Keep secrets in `.env` and `secrets/`
- Consider open-sourcing useful procedures

## Credits

This cora implementation is based on **Daniel Miessler's** Universal File-based Context (UFC) system that he built for his personal AI assistant "Kai". Daniel pioneered this approach and openly shared his methodology in his blog post and YouTube video about building a Personal AI Infrastructure.

### Core Philosophy (from Daniel Miessler)

- **System > Intelligence**: Organization matters more than model smartness
- **Text as Thought**: Markdown is one step from pure thought
- **Solve Once**: Never solve the same problem twice
- **Think Bigger**: You have "1000 employees" - what would you build?

## Resources

- [Daniel Miessler's Original PAI Blog Post](https://danielmiessler.com/blog/personal-ai-infrastructure/)
- [Daniel's YouTube Video on PAI](https://www.youtube.com/watch?v=iKwRWwabkEc)
- [Daniel's Fabric Project](https://github.com/danielmiessler/fabric)
- [Daniel's Website](https://danielmiessler.com/)
- [Claude Code Documentation](https://claude.ai/docs)
- Codex CLI: see your local Codex CLI docs/config

## Using cora as a Submodule in Trees

Recommended when you keep your canonical cora in a separate repo and want each downstream tree to load it on startup:

### Add to a tree
```bash
cd ~/Forest/my-new-tree
git init
git submodule add https://github.com/joshua-lossner/cora.git cora
cp cora/AGENTS-template.md AGENTS.md
echo "CORA_ROOT=./cora" >> .env  # optional
```

### Keep cora current in a tree
```bash
# Pull latest from the cora repo and update local submodule pointer
git submodule update --remote --merge cora
git add cora && git commit -m "chore(cora): update submodule"
```

### Prefer a global local copy instead?
- Create a symlink: `ln -s /absolute/path/to/cora cora` (then add `cora` to `.gitignore`).
- Edits in your canonical cora appear instantly in all trees.
- Tradeoff: less portable; not suitable for collaborators.

## License

License as you see fit. Consider:

- Keep secrets private
- Share useful procedures publicly
- Contribute improvements back

---

_Remember: Every problem you solve becomes a permanent capability. Start small, be consistent, and watch your AI assistant become exponentially more capable._
