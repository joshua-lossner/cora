---
name: prepare-signal-log
intent: Scaffold a dated signal log file for a given tree from the template
inputs: [tree]
steps:
  - Create tree signals folder if missing
  - Copy template and substitute date
  - Print created path for next steps
expected: A new `context/working/signals/<tree>/YYYY-MM-DD.md` file exists
tags: [signals, setup]
---

# Prepare Signal Log

## Purpose
Quickly create today’s signal log file (with date) so Research and Content agents can share concrete inputs/outputs.

## Usage (macOS)
```
TREE=my-tree
DATE=$(date +%F)
DIR="context/working/signals/${TREE}"
FILE="${DIR}/${DATE}.md"
mkdir -p "$DIR"
cp context/_templates/signal-log.md "$FILE"
sed -i '' "s/YYYY-MM-DD/${DATE}/g" "$FILE"
echo "Created: $FILE"
```

## Notes
- Set `TREE` to the downstream repository or site key you’re working in.
- On Linux, remove the `''` after `-i` for sed: `sed -i "s/YYYY-MM-DD/${DATE}/g" "$FILE"`.
