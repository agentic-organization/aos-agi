# GitHub Raw Data

Raw GitHub API pulls. Files in this tree are source evidence for later normalization and LLM wiki synthesis; ingestion tools write here but never edit `wiki/` directly.

Path: `data/raw/github/`

## Layout

```text
data/raw/github/
  README.md

  org-discovery/
    <YYYY-MM-DD>/
      <org>/
        snapshot.json
        github-org-discover.json

  daily/
    <YYYY-MM-DD>/
      run.json
      commands.sh
      <owner>/
        <repo>/
          repo.json
          events.json
          issues-updated.json
          pulls-updated.json
          commits-since.json
          releases.json
          meta.json
```

## `org-discovery/`

Organization-level snapshots. These capture repository inventory and org metadata at a point in time. They are used to discover new repositories, detect archived/fork status, and seed team/project/person synthesis.

`snapshot.json` is the current `gh`-based org snapshot emitted by `tools/ingestion/github-daily-ingest.js` when the org is present in the watchlist.

`github-org-discover.json` is a historical snapshot emitted by the older `tools/ingestion/github-org-discover.js` tool. Existing historical snapshots were moved into this layout:

- `org-discovery/2026-05-07/divinevideo/github-org-discover.json`
- `org-discovery/2026-05-07/marmot-protocol/github-org-discover.json`
- `org-discovery/2026-05-07/soapbox-pub/github-org-discover.json`

## `daily/`

Daily raw activity pulls produced by `tools/ingestion/github-daily-ingest.js` from `data/sources/github-watchlist.json`.

Each run writes one dated directory. The run directory contains:

- `run.json` — run metadata, resolved repository list, endpoint success/error summary.
- `commands.sh` — replayable `gh api` commands for the run.
- `<owner>/<repo>/*.json` — raw endpoint responses for each repository.

The daily tool intentionally captures raw API output only. Later stages normalize events, compare changes, and synthesize wiki updates.
