#!/usr/bin/env bash
set -euo pipefail

IN_DIR="content/essays/in"
OUT_ROOT="content/essays/out"
ARCHIVE_ROOT="content/essays/archive"
TODAY=$(date +%F)

slugify() {
  # to-lower, replace non-alnum with '-', squeeze '-', trim '-'
  tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g; s/-+/-/g; s/^-|-$//g'
}

derive_title() {
  local file="$1"
  # extract YAML frontmatter block and prefer title_hint over thesis
  awk 'BEGIN{inY=0} /^---\s*$/{c++; if(c==1){inY=1;next} else if(c==2){inY=0; exit}} inY{print}' "$file" \
    | awk -F: '/^title_hint\s*:/ {sub(/^[^:]*:\s*/,"",
    $0); gsub(/^\s+|\s+$/,"",$0); gsub(/^"|"$/,"",$0); print; found=1; exit} END{if(!found) exit 1}' 2>/dev/null || \
  awk 'BEGIN{inY=0} /^---\s*$/{c++; if(c==1){inY=1;next} else if(c==2){inY=0; exit}} inY{print}' "$file" \
    | awk -F: '/^thesis\s*:/ {sub(/^[^:]*:\s*/,"",$0); gsub(/^\s+|\s+$/,"",$0); gsub(/^"|"$/,"",$0); print; exit}' 2>/dev/null || echo "untitled"
}

emit_intent_and_notes() {
  local in_file="$1" out_dir="$2"
  mkdir -p "$out_dir"
  # frontmatter → intent.yml (strip runner-specific keys)
  awk 'BEGIN{inY=0} /^---\s*$/{c++; if(c==1){inY=1;next} else if(c==2){inY=0; exit}} inY{print}' "$in_file" \
    | grep -Ev '^(kind|workflow|version|category)\s*:' > "$out_dir/intent.yml" || true
  # body (after second ---)
  awk 'BEGIN{c=0} /^---\s*$/{c++; next} c>=2 {print}' "$in_file" > "$out_dir/notes.md" || true
}

if [ ! -d "$IN_DIR" ]; then
  echo "Input directory not found: $IN_DIR" >&2
  exit 1
fi

shopt -s nullglob
FILES=($IN_DIR/*.md)
shopt -u nullglob

if [ ${#FILES[@]} -eq 0 ]; then
  echo "No input files in $IN_DIR; nothing to do."
  exit 0
fi

echo "Processing ${#FILES[@]} file(s) from $IN_DIR"

for f in "${FILES[@]}"; do
  echo "\n==> Running essay_from_notes for: $f"
  if command -v cora >/dev/null 2>&1; then
    # Replace flags here if your runner differs
    cora run --workflow essay_from_notes --in "$f" || true
  else
    echo "[fallback] No runner found; auto-archiving input for $f"
    title=$(derive_title "$f")
    slug=$(printf "%s" "$title" | slugify)
    out_dir="$OUT_ROOT/$TODAY/$slug"
    archive_dir="$ARCHIVE_ROOT/$TODAY/$slug"
    mkdir -p "$archive_dir"
    # archive original input (separate archive area)
    cp -p "$f" "$archive_dir/input.md"
    # emit derived intent + notes for traceability
    emit_intent_and_notes "$f" "$archive_dir"
  fi

  # Verify archival of input and safely remove original
  IN_HASH=$(shasum -a 256 "$f" | awk '{print $1}')
  MATCH_FOUND=""
  if [ -d "$ARCHIVE_ROOT/$TODAY" ]; then
    while IFS= read -r -d '' candidate; do
      C_HASH=$(shasum -a 256 "$candidate" | awk '{print $1}')
      if [ "$C_HASH" = "$IN_HASH" ]; then
        MATCH_FOUND="$candidate"
        break
      fi
    done < <(find "$ARCHIVE_ROOT/$TODAY" -type f -name input.md -print0)
  fi

  if [ -n "$MATCH_FOUND" ]; then
    echo "Archived copy detected at: $MATCH_FOUND"
    rm -f "$f"
    echo "Removed original input: $f"
  else
    echo "WARNING: Could not verify archived input for $f under $OUT_ROOT/$TODAY; leaving original in place." >&2
  fi
done

echo "Batch complete."
