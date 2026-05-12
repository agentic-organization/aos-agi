#!/usr/bin/env bash
set -euo pipefail

REMOTE_NAME="${TEMPLATE_REMOTE_NAME:-template}"
REMOTE_URL="${TEMPLATE_REMOTE_URL:-https://github.com/agentic-organization/mini-agi-template.git}"
BRANCH_NAME="${1:-sync/template-$(date -u +%F)}"

if git remote get-url "$REMOTE_NAME" >/dev/null 2>&1; then
  git remote set-url "$REMOTE_NAME" "$REMOTE_URL"
else
  git remote add "$REMOTE_NAME" "$REMOTE_URL"
fi

git fetch origin
git fetch "$REMOTE_NAME"

git checkout main
git pull --ff-only origin main
git checkout -b "$BRANCH_NAME"
git merge "$REMOTE_NAME/main"

cat <<MSG

Template sync merge completed on branch: $BRANCH_NAME

Next steps:
  1. Resolve conflicts using docs/TEMPLATE_SYNC.md ownership rules.
  2. Run: npm test
  3. Run: tools/search/build.sh
  4. Run: node tools/ingestion/github-daily-ingest.js --dry-run --limit 3
  5. Open a PR.
MSG
