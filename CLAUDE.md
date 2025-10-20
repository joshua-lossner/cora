# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

CORA (Coherent Operating & Reasoning Architecture) is a filesystem-native system for storing intent as structured Markdown entities. It enables AI agents to hydrate themselves with context, reason about your work, and produce artifacts with minimal glue code. This is not a traditional code repository—it's a coherent knowledge and procedure system.

## Key Architecture

### Core Directories
- `personas/` - Specialized voices/departments that agents adopt
- `procedures/` - Reusable markdown-based procedures (permanent capabilities)
- `context/` - Philosophy, strategy, tools, working documents
- `coherenceism/` - Canonical Coherenceism content (roots/branches/seeds/leaves)
- `harvest/` - Templates and I/O for essays, music, media
- `workflows/` - Compositions of procedures that produce artifacts

### Agent Hydration Process
1. Read `AGENTS.md` for load order
2. Load persona from `personas/` (default: ivy.md)
3. Load philosophy from `context/philosophy/coherenceism.md`
4. Perform COHERENCE sweep - find all `**/COHERENCE.md` files
5. Load files specified in `init.files` frontmatter keys

## Common Development Tasks

### Running Workflows
```bash
# Start agent in terminal
codex

# In chat, request:
# "Load CORA" - Initialize the system
# "Use [role] role" - Load a specific role from context/roles/
# "Run [workflow]" - Execute workflow from workflows/
```

### File Operations

#### Adding Procedures
- Create in appropriate `procedures/` subfolder
- Use kebab-case naming: `action-name.md`
- Include frontmatter with: name, intent, inputs, steps, expected, tags
- Template: `procedures/_templates/procedure.md`

#### Logging Changes
After any writes to `context/`, `harvest/`, `procedures/`, or `workflows/`:
```
Run procedure: procedures/core/update_log.md
```

#### Creating Workflows
- Place in appropriate `workflows/` subfolder
- Reference procedures and methodologies via relative paths
- Template: `workflows/_templates/workflow.md`

## Key Conventions

### Path Management
- Always use relative paths from repository root
- Never hardcode absolute paths
- Reference files like: `procedures/core/update_log.md`

### COHERENCE.md Files
These are index files found throughout the repository with special frontmatter:
```yaml
init:
  files: []        # Files to load on startup
index:
  map: []         # Directory structure reference
scope: directory  # Indexes only its own folder tree
```

### Provenance Tracking
- Auto-log is ON by default after any file write
- Logs append to `context/logs/YYYY-MM-DD.md`
- Include: actor, type, paths, summary, outcome
- Types: procedure, workflow, context-add, context-edit, content-add, content-edit

### File Conventions
- Markdown files use frontmatter for metadata
- Keep procedures specific and reproducible
- Maintain logical hierarchy in `context/`
- No code files - this is a pure Markdown/text system

## Important Notes

### This is NOT a Code Repository
CORA contains no traditional code files (no .js, .py, .rs, etc.). It's a coherent system of:
- Markdown procedures and workflows
- Philosophy and strategy documents
- Templates for content generation
- Knowledge organization structures

### Safety Principles
- CORA is canonical - avoid destructive edits
- Never commit secrets or tokens
- Network calls only if explicitly documented
- Preserve vendor-neutral, accessible-to-non-coders approach

### Working with Personas
- Default persona: `personas/ivy.md`
- Personas define voice, tone, and constraints
- Can be selected via greeting: "Good evening, Ivy"
- Available personas found in `personas/` directory

### Common Procedures
- `procedures/core/update_log.md` - Log changes
- `procedures/core/mcp-health-check.md` - Check MCP tools
- `procedures/core/create_role.md` - Create new roles
- `procedures/core/role_quality_check.md` - Validate roles

## Troubleshooting

### Missing Files
If load fails due to missing files:
1. Check `AGENTS.md` for current load order
2. Verify COHERENCE.md files exist
3. Ensure persona files are in `personas/`

### Logging Issues
If auto-log fails:
- Queue entries and append at session end
- Fallback path: `context/logs/YYYY-MM-DD.md`
- Template: `context/logs/_templates/log-entry.md`