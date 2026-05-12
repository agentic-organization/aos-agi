# github-daily-ingest

**Canonical id:** `tool_github-daily-ingest`
**Type:** ingestion script (daily raw evidence) · **Status:** active
**Source:** [`tools/ingestion/github-daily-ingest.js`](../../tools/ingestion/github-daily-ingest.js)
**Watchlist:** [`data/sources/github-watchlist.json`](../../data/sources/github-watchlist.json)

## Summary

Daily raw GitHub ingestion for the org-memory repo. The tool reads the curated watchlist, resolves watched GitHub organizations through `gh api`, fetches per-repository activity endpoints, and writes raw JSON under `data/raw/github/` for later normalization and LLM wiki synthesis.

It does not use `curl` or `GITHUB_TOKEN`. Authentication and rate limits are delegated to the local GitHub CLI session.

## Output shape

```text
data/raw/github/org-discovery/<YYYY-MM-DD>/<org>/snapshot.json
data/raw/github/daily/<YYYY-MM-DD>/run.json
data/raw/github/daily/<YYYY-MM-DD>/commands.sh
data/raw/github/daily/<YYYY-MM-DD>/<owner>/<repo>/repo.json
data/raw/github/daily/<YYYY-MM-DD>/<owner>/<repo>/events.json
data/raw/github/daily/<YYYY-MM-DD>/<owner>/<repo>/issues-updated.json
data/raw/github/daily/<YYYY-MM-DD>/<owner>/<repo>/pulls-updated.json
data/raw/github/daily/<YYYY-MM-DD>/<owner>/<repo>/commits-since.json
data/raw/github/daily/<YYYY-MM-DD>/<owner>/<repo>/releases.json
data/raw/github/daily/<YYYY-MM-DD>/<owner>/<repo>/meta.json
```

## Usage

```bash
node tools/ingestion/github-daily-ingest.js --since-hours 24
```

Useful flags:
- `--dry-run` — resolve repositories and print replayable `gh api` commands without writing data.
- `--limit N` — smoke-test the first `N` resolved repositories.
- `--only owner/repo` — fetch one resolved repository.
- `--force` — replace an existing dated daily run directory.

## Signals emitted
- **Repository inventory** from watched orgs → detects new, archived, or forked repositories.
- **Recent commits** → feeds velocity and contributor observations.
- **Updated issues and PRs** → feeds maintenance, planning, and collaboration observations.
- **Events and releases** → captures stars, forks, issue/PR events, release cadence, and other operational signals.
- **Run metadata** → records exact repos attempted, endpoint counts, and any endpoint errors.

## Current watchlist
- `marmot-protocol` org → [[projects/marmot]] and [[projects/white-noise]].
- `divinevideo` org → [[projects/divine]].
- `soapbox-pub` org → [[projects/ditto]], [[projects/shakespeare]], [[projects/nostrify]], [[projects/openclaw-skills]], [[projects/nostr-skills]], [[projects/soapbox]], and [[projects/rebased]].
- `cashubtc` org plus external Cashu ecosystem repos → [[projects/cashu]].
- Single Foundry repos → [[projects/flotilla]], [[projects/chorus]], [[projects/bitchat]], [[projects/zapstore]], and [[projects/ngit]].
- External dependency `hzrd149/blossom` → [[projects/divine-blossom]].

## History
- 2026-05-10: Second daily ingestion run, stored at `data/raw/github/daily/2026-05-10/`. 107 repositories attempted with 0 endpoint errors over a 72-hour window (`since=2026-05-07T04:18:25Z`). Highest-activity repos: `divinevideo/divine-mobile` (56 commits, 78 PRs, 100 issues, release **1.0.12**), `cashubtc/orchard` (27 commits, sole author [[people/orangeshyguy21]] — surfaced as a new project page [[projects/orchard]]), `marmot-protocol/mdk` (15 commits, 17 PRs), `marmot-protocol/whitenoise` (release **v2026.5.7+24**), `soapbox-pub/ditto` (11 commits by [[people/alexgleason]]).
- 2026-05-07: Tool introduced and first full daily ingestion run stored at `data/raw/github/daily/2026-05-07/`. The run attempted 114 repositories with 0 endpoint errors and captured 2,956 events, 95 recent commits, 175 updated issues, 2,915 PR records, and 538 releases.

- 2026-05-11: Daily ingestion run at `data/raw/github/daily/2026-05-11/` — **107 repositories** attempted, **0 endpoint errors**, **0 watchlist errors** over a 72-hour window. Tool script fix: removed unsupported `--slurp` flag from `gh api --paginate` calls in `tools/ingestion/github-daily-ingest.js` so the tool works with `gh` CLI ≤2.46.0. Highest-activity repos: `divinevideo/divine-mobile` (54 commits, release 1.0.13), `cashubtc/orchard` (16 commits), `cashubtc/cashu-ts` (10 commits), `soapbox-pub/ditto` (9 commits, releases v2.14.0/v2.14.1).

## Open questions
- Should daily runs capture README and CODEOWNERS files for ownership inference?
- Should `pulls-updated.json` filter by `updated_at` in a later normalization stage, since GitHub's pulls endpoint does not accept `since`?
- Should the next stage materialize normalized events under `data/normalized/events/` before invoking LLM synthesis?
