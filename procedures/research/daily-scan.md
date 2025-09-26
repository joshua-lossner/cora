---
name: daily-scan
intent: Produce categorized signals and prompts from daily sources
inputs: [sources]
steps:
  - Open trusted feeds per category
  - Extract 1–2 patterns per category
  - Write linked bullets (signals)
  - Draft prompts (angles/questions)
  - Synthesize 3 cross-category connections
expected: signals.md and prompts.md updated with dated entries
tags: [research, signals, prompts]
---

# Daily Scan

## Purpose
Create a repeatable scan to inspire writing with distinct, pattern-led angles.

## Usage
- Timebox 25–45 minutes; stop at strong signals.
- Use the Daily Signal Scan SOP under `agents/research/sops/daily-signal-scan.md`.
- Save outputs to `context/working/signals/<tree>/YYYY-MM-DD.md` using the template.

### Snippet (scaffold today’s log for a tree)
```
TREE=my-tree
DATE=$(date +%F)
mkdir -p "context/working/signals/${TREE}"
cp context/_templates/signal-log.md "context/working/signals/${TREE}/${DATE}.md"
sed -i '' "s/YYYY-MM-DD/${DATE}/g" "context/working/signals/${TREE}/${DATE}.md"
```

## Outputs
- Daily log file under `context/working/signals/<tree>/YYYY-MM-DD.md` with signals, prompts, and cross-connections
