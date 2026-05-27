# Wiki Log

> Chronological record of all wiki actions. Append-only.
> Format: `## [YYYY-MM-DD] action | subject`
> Actions: ingest, update, query, lint, create, archive, delete
> When this file exceeds 500 entries, rotate: rename to log-YYYY.md, start fresh.

## [2026-05-27] ingest | Daily GitHub ingestion run 2026-05-27 + wiki synthesis
- Run: `data/raw/github/daily/2026-05-27/` (110 repos attempted, 0 errors, run_id: 20260527T060058Z-github-daily)
- Notable activity synthesized into wiki pages:
  - [[projects/cdk]] — 2 commits by [[people/thesimplekid]] (BDK release integration, onchain regtest helper stabilization)
  - [[projects/coco]] — 3 commits by [[people/egge21m]] (quote-first BOLT11 mint operations PR #183, mint watcher quote key alignment, duplicate melt quote prevention)
  - [[projects/minibits]] — 1 commit by [[people/minibits-cash]] (basic transaction search)
  - [[projects/ditto]] — 1 commit by [[people/alexgleason]] (embedded poll/poll-vote rendering, kind-labeled fallback cards)
  - [[projects/cashu]] umbrella page updated with ecosystem summary
- People pages updated: [[people/thesimplekid]], [[people/egge21m]], [[people/minibits-cash]], [[people/alexgleason]]
- Files modified: 9 wiki pages

## [2026-05-22] ingest | Daily GitHub ingestion run 2026-05-22 + wiki synthesis
- Run: `data/raw/github/daily/2026-05-22/` (110 repos attempted, 0 errors, run_id: 20260522T060056Z-github-daily)
- Notable activity synthesized into wiki pages:
  - [[projects/divine-mobile]] — 25 commits + release 1.0.14
  - [[projects/ditto]] — 10 commits (BIP-352 silent payments, BIP-375, PSBT v2)
  - [[projects/ngit]] — 9 commits (lazy git-server fetch, PR checkout fixes)
  - [[projects/cdk]] — 8 commits (redis-cluster, P2PK send, coin selection)
  - [[projects/cashu-me]] — 5 commits + release 0.2 (BOLT12, mutinynet)
  - [[projects/numo]] — 5 commits + release v1.6-rc1 (BTCMap onboarding)
  - [[projects/mdk]] — 4 commits + binding auto-bumps (Swift packaging, CI fixes)
  - [[projects/whitenoise]] — 3 commits (block/unblock UX)
  - [[projects/cashu-ts]] — 2 commits + release v4.5.0 (onchain mint/melt)
  - [[projects/nutshell]] — 100 events / 9 issues
  - [[projects/orchard]] — 100 events
  - [[projects/coco]] — 100 events
  - [[projects/bitchat]] — 100 events
  - [[projects/minibits]] — 36 events
  - [[projects/macadamia]] — 46 events
  - [[projects/transponder]] — 100 events
- Team pages updated: [[teams/cashu-core]], [[teams/divine]], [[teams/marmot-protocol]], [[teams/soapbox]]
- Project umbrella updated: [[projects/cashu]]
- Files modified: 17 wiki pages
