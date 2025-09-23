# cora — Coherent Operating & Reasoning Architecture

> **Based on Daniel Miessler's UFC System** - This implementation is inspired by [Daniel Miessler's Personal AI Infrastructure](https://danielmiessler.com/blog/personal-ai-infrastructure/) that he built for his AI assistant "Kai". Full credit to Daniel for pioneering this approach and openly sharing it with the community.

## What is cora?

cora is a file system-based knowledge management system that gives your AI assistants (including Codex CLI) persistent memory and growing capabilities across the Coherenceism network of projects. Instead of starting fresh with each conversation, your AI assistant loads the network’s accumulated knowledge, tools, strategy, and workflows.

**Core Philosophy**: Solve each problem once, then it becomes a permanent capability.

## Quick Start

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

### 3. Use with Codex CLI

```bash
# Option A: Work inside this repo (recommended for Codex)
# Open Codex CLI in this repo and use the cora system directly.

# Option B: Embed in another project as a submodule (recommended)
cd ~/your-project
git init                                      # if not already a repo
git submodule add https://github.com/joshua-lossner/cora.git cora
cp cora/AGENTS-template.md AGENTS.md          # startup instructions that reference cora/
echo "CORA_ROOT=./cora" >> .env                 # optional human hint
echo "# Refer to ./cora for cora context and procedures." >> AGENTS.md
```

## How It Works

### The Three-Layer Architecture

1. **Central Brain** (`context/`) - All your knowledge lives here
2. **Project Pointers** (`AGENTS.md` or `COHERENCE.md`) - Simple files that point to the central brain (relative when embedded)
3. **Growing Capabilities** (`procedures/`) - Every solution becomes a reusable procedure

### Daily Workflow

1. **Start a project** → Add `AGENTS.md` (or `COHERENCE.md`) pointing to the `cora/` submodule
2. **Solve a problem** → Save solution as a procedure
3. **Learn something** → Add to context
4. **Everything compounds** → All future work benefits

## Directory Structure

```
repo root
├── agents/                      # Departments, agents, SOPs
│   ├── COHERENCE.md             # Purpose, conventions, departments
│   ├── _templates/              # agent.md, department-COHERENCE.md
│   └── <department>/            # hr/, philosophy/, engineering/, …
│       ├── COHERENCE.md
│       ├── <agent>.md
│       └── sops/*.md
├── procedures/                 # Reusable procedures (by category)
│   ├── COHERENCE.md             # Structure and conventions
│   ├── INDEX.md                 # Grouped catalog
│   ├── core/                    # load/validate/run-workflow, etc.
│   ├── git/                     # git-review, …
│   ├── project/                 # new-project, update-cora-submodule, …
│   ├── writing/                 # summarize, outline-from-signals, …
│   ├── research/                # daily-scan, extract-signals, …
│   ├── philosophy/              # review-draft, …
│   ├── compliance/              # privacy-check, …
│   └── _templates/command.md
├── context/                     # Central knowledge base
│   ├── COHERENCE.md
│   ├── _templates/              # project/methodology/etc.
│   ├── philosophy/coherenceism.md
│   ├── strategy/                # challenges/programs/objectives/metrics
│   ├── architecture/coherence-rails.md
│   ├── methodologies/
│   ├── tools/
│   └── working/                 # Active artifacts
│       ├── active/
│       ├── signals/<project>/   # YYYY-MM-DD.md daily signals logs
│       ├── drafts/<project>/    # outline-/draft-*.md
│       └── reviews/<project>/   # review notes
├── content/                     # Canonical cross-site content
│   ├── COHERENCE.md             # Purpose, structure, allowed site keys
│   ├── REGISTRY.md              # Optional human-readable index
│   ├── _templates/content-item.md
│   ├── shared/                  # Primers and canonical texts
│   ├── articles/                # Essays, long-form
│   ├── notes/                   # Short-form
│   └── media/                   # Descriptors for audio/video
├── workflows/                   # Chained processes (by project)
│   ├── COHERENCE.md
│   ├── _templates/workflow.md
│   └── <project>/*.md           # e.g., coherenceism.blog/blog-post.md
├── AGENTS.md                    # Canonical startup for Codex
├── AGENTS-template.md           # Template to embed in other projects
├── .env.example                 # Example env vars (CORA_ROOT, BLOG_ROOT)
└── .env                         # Local env (git-ignored)
```

## Core Concepts

### 1. Universal File-based Context (UFC)

Your file system IS your AI's brain. Knowledge is organized in directories that get loaded when needed.

### 2. Procedures: Solve Once, Reuse Forever

Every problem you solve becomes a permanent capability:

See `procedures/INDEX.md` for grouped examples and usage.

### 3. Context Inheritance

Projects inherit all central knowledge plus their own context:

- Central context (always loaded)
- Project-specific context (when in that project)
- Procedures (available everywhere)

## Building Your System

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

### Adding Context

Organize knowledge by topic:

```bash
# Add methodology
nano context/methodologies/code-review.md

# Add project context  
mkdir -p context/projects/my-app
nano context/projects/my-app/cora.md

# Add tool documentation
nano context/tools/my-tool.md
```

### Managing Secrets

Never commit secrets. Use environment variables:

```bash
# Add to .env (git-ignored)
echo "OPENAI_API_KEY=sk-..." >> .env

# Reference in .env.example (committed)
echo "OPENAI_API_KEY=" >> .env.example
```

## Advanced Usage

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

### Project Integration

For each project, create an `AGENTS.md` or `COHERENCE.md`:

```markdown
# Project: My App

**Load cora System:**
- If embedded as submodule `cora/`:
  - `cora/context/COHERENCE.md`
  - `cora/context/projects/my-app/cora.md`

## Project-Specific Info
This is a Next.js app for tracking expenses...

## Relevant Procedures
- `procedures/nextjs-setup.md`
- `procedures/deploy-vercel.md`
```

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

### Example 1: Blog Writing Workflow

```bash
# Create command
cat > procedures/write-blog.md << 'EOF'
# Write Blog Post

## Process
1. Research topic
2. Create outline
3. Write draft
4. Add examples
5. Format in markdown

## Chains With
- `summarize.md` - Research papers
- `create-image.md` - Header images
- `social-media.md` - Promotion posts
EOF
```

### Example 2: Code Review Automation

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

## Using cora as a Submodule in Projects

Recommended when you keep your canonical cora in a separate repo and want each project to load it on startup:

### Add to a project
```bash
cd ~/Projects/my-new-app
git init
git submodule add https://github.com/joshua-lossner/cora.git cora
cp cora/AGENTS-template.md AGENTS.md
echo "CORA_ROOT=./cora" >> .env  # optional
```

### Keep cora current in a project
```bash
# Pull latest from the cora repo and update local submodule pointer
git submodule update --remote --merge cora
git add cora && git commit -m "chore(cora): update submodule"
```

### Prefer a global local copy instead?
- Create a symlink: `ln -s /absolute/path/to/cora cora` (then add `cora` to `.gitignore`).
- Edits in your canonical cora appear instantly in all projects.
- Tradeoff: less portable; not suitable for collaborators.

## License

License as you see fit. Consider:

- Keep secrets private
- Share useful procedures publicly
- Contribute improvements back

---

_Remember: Every problem you solve becomes a permanent capability. Start small, be consistent, and watch your AI assistant become exponentially more capable._
