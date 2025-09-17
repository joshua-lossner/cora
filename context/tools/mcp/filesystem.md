---
kind: tool
title: Filesystem MCP Server
intent: Provide direct read access to the cora context for clients
status: active
updated: 2025-09-16
tags: [tool, mcp]
---

# Filesystem MCP Server

## Purpose
Direct access to the cora context directory structure, enabling Claude to search and read files without manual tool calls.

## What It Does
- Provides direct file system access to your cora `context/` directory
- Allows searching for files by name or content
- Enables reading multiple files efficiently
- Works seamlessly with the UFC (Universal File-based Context) system

## Usage Examples
With the filesystem MCP, you can:
- "Find my notes about coherentism"
- "What commands do I have for git workflows?"
- "Show me the philosophy context files"

## Usage Pattern
Instead of manually using Read/Grep tools, the MCP server provides a more fluid interface for context retrieval, similar to how Daniel throws queries "over the wall" to Kai.

## Integration with cora
This MCP server reads from the same `context/` directory that your UFC system uses, maintaining coherence across all interactions.

## To Activate
1. Restart Claude Desktop app
2. Look for "filesystem" in the tools menu (puzzle piece icon)
3. The server will have access to your entire context directory

## Future Enhancement Ideas
Potential expansions:
1. Create dynamic markdown files that become queryable knowledge
2. Build a personal daemon that broadcasts your current state
3. Add vector embeddings for semantic search across all context
