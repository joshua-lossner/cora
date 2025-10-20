---
kind: task
title: Document dev server workflow for non-blocking usage
project: coherenceism-media
status: todo
updated: 2025-10-18
tags: [docs, dx, workflow]
git_status: none
---

# Document Dev Server Workflow

## Purpose
`npm run dev` runs `build && watch`, where watch never exits. This blocks Codex and confuses users expecting command completion. Need clear documentation and possibly alternative commands.

## Issue
Current behavior:
- `npm run dev` → `npm run build && npm run watch`
- Watch mode runs forever (by design)
- Blocks CLI tools expecting completion (Codex, CI/CD)
- Users don't know to use Ctrl+C or background mode

## Steps
1. Update README.md with clear dev workflow:
   ```markdown
   ## Development

   ### Start dev server (blocks terminal)
   npm run dev
   # Press Ctrl+C to stop

   ### Run in background
   npm run dev &
   # Use `pkill -f "build.js.*watch"` to stop

   ### One-time build
   npm run build
   ```

2. Consider adding new npm scripts:
   ```json
   "dev:bg": "npm run build && npm run watch &",
   "stop": "pkill -f 'build.js.*watch'"
   ```

3. Add note in AGENTS.md about background mode for Codex

4. Document process management:
   - How to check if server is running
   - How to kill stuck processes
   - How to restart cleanly

## Acceptance
- README has clear "Development" section with all workflow options
- Users understand watch mode blocks by design
- Background mode is documented and tested
- Kill/restart instructions are clear and safe
- AGENTS.md notes background mode for AI tools

## Links
- README: `coherenceism-media/README.md`
- AGENTS: `coherenceism-media/AGENTS.md`
- Package scripts: `coherenceism-media/package.json`

## Notes
- This is workflow documentation, not a bug
- Watch mode blocking is expected behavior for dev servers
- Most frameworks have same issue (Next.js, Vite, etc.)
- Consider timeout-based mode for CI contexts (future)
