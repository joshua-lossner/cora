---
kind: documentation
title: COHERENCE — Cellar (Private Harvest)
intent: Private workspace for personal content, projects, and daily practice
status: active
updated: 2025-10-25
tags: [cellar, private, personal]
scope: directory
init:
  files: []
index:
  map:
    - cellar/personal/
    - cellar/household/
    - cellar/learning/
    - cellar/planning/
    - cellar/professional/
    - cellar/projects/
    - cellar/tasks/
    - cellar/logs/
    - cellar/workflows/
---

# Cellar — Private Harvest

## Purpose
The cellar is CORA's private workspace—personal content, ongoing projects, daily practice, and whatever emerges from human-AI collaboration that doesn't belong in the public harvest.

**Metaphor:**
- `harvest/` = public fruit, ready for presentation layers to consume
- `cellar/` = private storage, experiments, personal notes, work in progress

## What Goes Here
- Personal health, family, finance, memories, recipes
- Household documentation (appliances, vehicles, home maintenance)
- Active learning notes (courses, videos, research)
- Weekly planning and daily practice logs
- Professional development and career tracking
- Personal projects and tasks
- Private workflows (financial projections, memory capture, daily check-ins)

## What Doesn't Go Here
- Public-facing content → use `harvest/`
- Canonical Coherenceism philosophy → use `coherenceism/`
- Reusable procedures/personas/roles → use `procedures/`, `personas/`, `context/roles/`
- Public workflows → use `workflows/`

## Structure

```
cellar/
├── COHERENCE.md            # This file (checked into git)
├── .gitkeep                # Ensures directory exists (checked into git)
├── personal/               # Health, family, finance, memories, recipes
│   ├── health/
│   ├── family/
│   ├── finance/
│   ├── memories/
│   │   └── in/TEMPLATE.md  # Template (checked into git)
│   └── recipes/
│       └── in/TEMPLATE.md  # Template (checked into git)
├── household/              # Home, appliances, vehicles
│   ├── home/
│   ├── appliances/
│   └── vehicles/
├── learning/               # Active study, courses, research notes
│   ├── active/
│   │   └── in/TEMPLATE.md  # Template (checked into git)
│   └── archive/
├── planning/               # Weekly plans, periodic reviews
├── professional/           # Career goals, skills, work projects
│   ├── goals/
│   ├── projects/
│   └── skills/
├── projects/               # Multi-step personal/professional work
├── tasks/                  # Individual to-dos with detail
├── logs/                   # Provenance tracking (personal system changes)
│   └── COHERENCE.md        # (if it exists, checked into git)
└── workflows/              # Private workflows (daily practice, financial, etc.)
    └── COHERENCE.md        # Workflow index (checked into git)
```

## Git Strategy
- **Checked in:** Structure documentation (COHERENCE.md files), templates (TEMPLATE.md), .gitkeep
- **Ignored:** All actual content under `cellar/**` (see `.gitignore`)
- **Why:** Keeps personal data local while preserving documented structure for onboarding

## Templates
Templates live in `in/` subdirectories and are checked into git:
- `personal/recipes/in/TEMPLATE.md` — Recipe template with frontmatter
- `personal/memories/in/TEMPLATE.md` — Memory capture template
- `learning/active/in/TEMPLATE.md` — Learning note template (videos, articles, courses)

## Workflows
Private workflows live in `cellar/workflows/`. See `cellar/workflows/COHERENCE.md` for details.

## Philosophy
CORA is more than content publishing—it's architecture for **coherent human-AI collaboration**. The cellar is where private reasoning, problem-solving, planning, and daily practice happen. Content is one output; coherent living is the real work.

## Asset Management
**Text in git. Binaries elsewhere.**
- **Repository**: Markdown, frontmatter, structure only
- **Assets**: Photos, PDFs, receipts, manuals → store in iCloud or other backup location
- **Reference pattern**: Link to asset path in frontmatter (e.g., `photos: ~/Library/Mobile Documents/...`)
- **Why**: Avoids git bloat, fast operations, automatic backup, no sync conflicts

## Notes
- Cellar structure can evolve; it doesn't need to mirror harvest/ exactly
- Keep frontmatter consistent where helpful (kind, title, status, updated, tags)
- Use `cellar/logs/` for system provenance (not personal journaling)
- Link to public CORA procedures/workflows when applicable
