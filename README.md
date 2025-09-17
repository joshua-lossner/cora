# cora — Coherent Operating & Reasoning Architecture

> **Based on Daniel Miessler's UFC System** - This implementation is inspired by [Daniel Miessler's Personal AI Infrastructure](https://danielmiessler.com/blog/personal-ai-infrastructure/) that he built for his AI assistant "Kai". Full credit to Daniel for pioneering this approach and openly sharing it with the community.

## What is cora?

cora is a file system-based knowledge management system that gives your AI assistants (including Codex CLI) persistent memory and growing capabilities across your projects. Instead of starting fresh with each conversation, your AI assistant loads your accumulated knowledge, tools, and workflows.

**Core Philosophy**: Solve each problem once, then it becomes a permanent capability.

## Quick Start

### 1. Clone this repository

```bash
git clone https://github.com/joshua-lossner/cora.git cora
cd cora
# optional: cp .env.example .env && edit CORA_ROOT/BLOG_ROOT
```

### 2. Set up your personal context

```bash
# Edit your personal information
nano context/philosophy/coherenceism.md
```

### 3. Use with Codex CLI

```bash
# Option A: Work inside this repo (recommended for Codex)
# Open Codex CLI in this repo and use the cora system directly.

# Option B: Embed in another project as a submodule (recommended)
cd ~/your-project
git init                                      # if not already a repo
git submodule add https://github.com/joshua-lossner/cora.git cora
cp cora/CODEX-template.md AGENT_STARTUP.md     # startup instructions that reference cora/
echo "CORA_ROOT=./cora" >> AGENT_STARTUP.md     # optional human hint
echo "# Refer to ./cora for cora context and commands." >> AGENT_STARTUP.md
```

## How It Works

### The Three-Layer Architecture

1. **Central Brain** (`context/`) - All your knowledge lives here
2. **Project Pointers** (`AGENT_STARTUP.md` or `COHERENCE.md`) - Simple files that point to the central brain (relative when embedded)
3. **Growing Capabilities** (`commands/`) - Every solution becomes a reusable command

### Daily Workflow

1. **Start a project** → Add `AGENT_STARTUP.md` (or `COHERENCE.md`) pointing to the `cora/` submodule
2. **Solve a problem** → Save solution as a command
3. **Learn something** → Add to context
4. **Everything compounds** → All future work benefits

## Directory Structure

```
repo root
├── commands/           # Reusable solutions (one file per command)
│   ├── INDEX.md        # Command list and summaries
│   └── _template.md    # Command frontmatter template
├── context/            # Central knowledge base
│   ├── projects/       # Project-specific contexts
│   │   └── personal/   # Your goals, preferences, information
│   ├── tools/          # Documentation for all tools
│   ├── methodologies/  # Step-by-step processes
│   │   └── INDEX.md    # Methodology list
│   └── working/        # Active tasks and archive
├── agents/             # Specialized AI personalities
├── AGENTS.md           # Agent conventions for this repo
├── AGENT_STARTUP.md    # Codex-friendly startup checklist
├── CODEX-template.md   # Template for embedding in projects
├── secrets/            # Git-ignored sensitive data
└── .env                # API keys and secrets (never committed)
```

## Core Concepts

### 1. Universal File-based Context (UFC)

Your file system IS your AI's brain. Knowledge is organized in directories that get loaded when needed.

### 2. Commands: Solve Once, Reuse Forever

Every problem you solve becomes a permanent capability:

```markdown
# Example: commands/analyze-logs.md

## Purpose
Analyze system logs for errors and patterns

## Process
1. Extract error messages
2. Group by frequency
3. Identify root causes
4. Generate report

## Usage
"Analyze these logs"
"Find errors in log file"
```

### 3. Context Inheritance

Projects inherit all central knowledge plus their own context:

- Central context (always loaded)
- Project-specific context (when in that project)
- Commands (available everywhere)

## Building Your System

### Creating Commands

When you solve a problem, save it:

```bash
# Create a new command
cat > commands/your-solution.md << 'EOF'
# Command Name

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

For each project, create an `AGENT_STARTUP.md` or `COHERENCE.md`:

```markdown
# Project: My App

**Load cora System:**
- If embedded as submodule `cora/`:
  - `cora/context/COHERENCE.md`
  - `cora/context/projects/my-app/cora.md`

## Project-Specific Info
This is a Next.js app for tracking expenses...

## Relevant Commands
- `commands/nextjs-setup.md`
- `commands/deploy-vercel.md`
```

## Growth Pattern

```
Week 1:   5 commands  → Basic automation
Month 1:  30 commands → Significant capability
Month 3:  100+ commands → Complex workflows automated
Month 6:  Exponential → AI handles most repetitive work
```

Each command can chain with others, creating infinite combinations.

## Best Practices

### 1. Start Small

- Don't over-plan
- Add commands as you work
- Let the system grow organically

### 2. Be Specific

- Clear command descriptions
- Explicit process steps
- Example usage phrases

### 3. Stay Organized

- One command per file
- Descriptive filenames
- Logical context hierarchy

### 4. Regular Maintenance

```bash
# Backup your brain
cd cora
git add .
git commit -m "Update: added new commands"
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
cat > commands/write-blog.md << 'EOF'
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
cat > commands/review-pr.md << 'EOF'
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
cat > commands/daily-standup.md << 'EOF'
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

- Check `AGENT_STARTUP.md` or `COHERENCE.md` exists in project
- Verify paths are correct (use `cora/` if using a submodule)
- Ensure files are readable
- If using submodules, ensure they are initialized: `git submodule update --init --recursive`

### Commands not working?

- Check command file exists
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

## Contributing to Your cora

### Adding a new capability

1. Solve the problem manually
2. Document the solution
3. Save as command
4. Commit to git
5. Available forever

### Sharing with others

- Commands can be shared individually
- Keep personal context private
- Consider open-sourcing useful commands

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
cp cora/CODEX-template.md AGENT_STARTUP.md
echo "CORA_ROOT=./cora" >> AGENT_STARTUP.md  # optional
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

Your cora is personal - license as you see fit. Consider:

- Keep personal context private
- Share useful commands publicly
- Contribute improvements back

---

_Remember: Every problem you solve becomes a permanent capability. Start small, be consistent, and watch your AI assistant become exponentially more capable._
