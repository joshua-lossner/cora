---
name: load-cora-context
intent: Manually load cora context and verify readiness
steps:
  - Read agent persona
  - Read UFC docs
  - Read strategy context
  - Read tools/MCP overview
  - List procedures and methodologies
  - Confirm loaded
expected: All confirmations appear and relevant directories are scanned
tags: [cora, context, startup]
---

# Load cora Context

## Purpose
Use to manually trigger cora context loading if automatic loading fails (Codex CLI friendly).

## Usage
When an agent isn't following cora protocols, use this procedure to force context loading.

## What It Does
1. Reads the complete UFC system documentation
2. Loads the Knowledge Tree (content ontology)
3. Loads strategy and forest context
4. Identifies available tools (MCP optional in Codex)
5. Scans procedures and methodologies
6. Confirms successful loading

## Files to Read (relative paths)
- `agents/ivy.md` - Primary agent persona
- `context/COHERENCE.md` - Core cora system
- `context/philosophy/coherenceism.md` - Coherenceism foundation
- `context/documentation/knowledge-tree.md` - Content ontology & rendering rails
- `context/tools/mcp/servers.md` - Tools overview and MCP configuration (optional)
- `content/COHERENCE.md` - Content system overview (frontmatter/types/sites)
- List `procedures/` - Available procedures
- List `context/methodologies/` - Available methodologies
- Read `context/forest/COHERENCE.md` - Forest registry guidance
- Read `context/strategy/COHERENCE.md` - Strategy index

## Expected Confirmation
✅ UFC system loaded - I understand the context architecture
✅ Persona loaded - Ivy persona is active
✅ Philosophy loaded - Coherenceism foundation is active
✅ Content ontology loaded - Knowledge Tree is active
✅ Tools overview loaded - I see available tools
✅ Procedures directory scanned - I see available procedures
✅ Methodologies scanned - I see available processes
