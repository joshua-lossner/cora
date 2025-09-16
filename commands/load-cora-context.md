---
name: load-cora-context
intent: Manually load cora context and verify readiness
steps:
  - Read agent persona
  - Read UFC docs
  - Read personal context
  - Read tools/MCP overview
  - List commands and methodologies
  - Confirm loaded
expected: All confirmations appear and relevant directories are scanned
tags: [cora, context, startup]
---

# Load cora Context

## Purpose
Use to manually trigger cora context loading if automatic loading fails (Codex CLI friendly).

## Usage
When an agent isn't following cora protocols, use this command to force context loading.

## What It Does
1. Reads the complete UFC system documentation
2. Loads personal preferences and context
3. Identifies available tools (MCP optional in Codex)
4. Scans commands and methodologies
5. Confirms successful loading

## Files to Read (relative paths)
- `agents/ivy.md` - Primary agent persona
- `context/COHERENCE.md` - Core cora system
- `context/philosophy/coherenceism.md` - Coherenceism foundation
- `context/tools/mcp/servers.md` - Tools overview and MCP configuration (optional)
- List `commands/` - Available commands
- List `context/methodologies/` - Available methodologies
- Read `context/projects/COHERENCE.md` - Projects guidance

## Expected Confirmation
✅ UFC system loaded - I understand the context architecture
✅ Persona loaded - Ivy persona is active
✅ Philosophy loaded - Coherenceism foundation is active
✅ Tools overview loaded - I see available tools
✅ Commands directory scanned - I see available commands
✅ Methodologies scanned - I see available processes
