# Template Sync

This AOS mini-agi repository is now an instance of the generic `mini-agi-template` repository.

- Template upstream: `https://github.com/agentic-organization/mini-agi-template.git`
- Instance repository: `https://github.com/agentic-organization/mini-agi.git`

The goal is to keep generic tooling, docs, skills, CI, and pipeline contracts syncable from the template while preserving AOS-specific wiki pages, raw evidence, and source configuration.

## One-time remote setup

```bash
git remote add template https://github.com/agentic-organization/mini-agi-template.git
git fetch template
```

If the remote already exists:

```bash
git remote set-url template https://github.com/agentic-organization/mini-agi-template.git
git fetch template
```

## Sync workflow

Always sync through a PR branch.

```bash
git checkout main
git pull --ff-only origin main
git fetch template
git checkout -b sync/template-$(date -u +%F)
git merge template/main
```

Resolve conflicts with these ownership rules, then test and open a PR.

## Ownership rules

Prefer template version for generic files:

```text
.github/workflows/
docs/CONFIGURATION.md
docs/GETTING_STARTED.md
docs/INGESTION_PIPELINE.md
docs/OPERATING_LOOP.md
docs/PRIVACY_AND_DATA.md
package.json
tests/
tools/pipeline/
```

Prefer AOS instance version for organization-specific files:

```text
AGENTS.md
README.md
data/sources/github-watchlist.json
wiki/**
data/raw/**
data/normalized/**
data/derived/**
```

Mixed files need manual review:

```text
.tools/ingestion/github-daily-ingest.js  # keep template pipeline upgrades, preserve AOS bug fixes
.agents/skills/**                        # keep useful generic template skills, preserve AOS-specific skills
mini-agi.yaml                            # keep schema, set AOS-specific values
```

## Verification after sync

```bash
python3 -m json.tool data/sources/github-watchlist.json >/tmp/watchlist.json
python3 -m json.tool data/sources/github-watchlist.example.json >/tmp/watchlist.example.json
python3 -m json.tool package.json >/tmp/package.json
npm test
tools/search/build.sh
node tools/search/search.js "cashu" --bm25-only
node tools/ingestion/github-daily-ingest.js --dry-run --limit 3
```

Run a small real ingestion test outside committed data paths:

```bash
rm -rf /tmp/aos-mini-agi-ingest-test
node tools/ingestion/github-daily-ingest.js \
  --out /tmp/aos-mini-agi-ingest-test \
  --date 2099-01-01 \
  --run-id template-sync-smoke \
  --only cashubtc/cdk \
  --since-hours 1
node tools/pipeline/validate-run.js /tmp/aos-mini-agi-ingest-test/daily/2099-01-01/manifest.json --require-files
```

## Data preservation check

Before and after sync, compare tracked file counts:

```bash
git ls-files 'wiki/**' | wc -l
git ls-files 'data/**' | wc -l
git ls-files 'data/raw/**' | wc -l
sha256sum data/sources/github-watchlist.json
```

The sync should not remove existing wiki pages, raw evidence, or AOS watchlist entries unless the PR explicitly says so.
