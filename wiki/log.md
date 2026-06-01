# Wiki Log

> Chronological record of all wiki actions. Append-only.
> Format: `## [YYYY-MM-DD] action | subject`
> Actions: ingest, update, query, lint, create, archive, delete
> When this file exceeds 500 entries, rotate: rename to log-YYYY.md, start fresh.

## [2026-06-01] ingest | Daily GitHub ingestion run 2026-06-01 + wiki synthesis
- Run: `data/raw/github/daily/2026-06-01/` (110 repos attempted, 0 errors, run_id: 20260601T060050Z-github-daily)
- Notable activity synthesized into wiki pages:
  - [[projects/cdk]] — **4 commits** by [[people/thesimplekid]] and [[people/asmogo]] (multiple lightning backends per currency #2015, backend support fix, keyset rotation fix, env var multiple units)
  - [[projects/coco]] — **2 commits** by [[people/egge21m]] (merge PR #188 removing redundant feature doc)
  - [[projects/numo]] — **1 commit** by [[people/a1denvalu3]] (non-bolt11 mint handling #324)
  - [[projects/nutshell]] — **1 commit** by [[people/callebtc]] (version bump to 0.20.1 #1030)
  - [[projects/bitchat]] — **5 commits** by jackjackbits (BLE transport refactoring series #1310/#1306/#1280/#1266)
  - [[projects/ditto]] — **4 commits** by [[people/alexgleason]] (wallet Send UX polish, feed sticky items, default relay trim)
  - [[projects/cashu-me]] — **2 issues updated** (docker CI release #527, seed-phrase-less wallets #528)
  - [[projects/nuts]] — **4 issues updated** — sustained spec discussion
  - [[projects/divine-mobile]] — **7 issues updated** (drafts disappearance bug #4852)
- Files modified: 9 wiki pages

## [2026-05-26] ingest | Daily GitHub ingestion run 2026-05-26 + wiki synthesis
- Run: `data/raw/github/daily/2026-05-26/` (110 repos attempted, 0 errors, run_id: 20260526T060034Z-github-daily)
- Notable activity synthesized into wiki pages:
  - [[projects/ditto]] — 5 commits (BIP-21 wallet-send UX polish)
  - [[projects/divine-mobile]] — 4 commits (emoji picker, provider cleanup)
  - [[projects/nutshell]] — 2 commits (LNbits preimage fix)
  - [[projects/zapstore]] — 3 commits (README refresh)
  - [[projects/numo]] — 1 commit (build.gradle.kts update)
  - [[projects/minibits]] — 1 commit (transaction lifecycle methods)
  - High event volume but no default-branch commits: cashubtc/cashu-ts (100 events), cashubtc/cdk (100 events), cashubtc/coco (100 events), cashubtc/nuts (98 events), cashubtc/orchard (71 events), divinevideo/divine-blossom (100 events), divinevideo/divine-moderation-service (100 events), divinevideo/divine-name-server (99 events), divinevideo/divine-web (100 events), divinevideo/keycast (100 events), marmot-protocol/mdk (100 events), marmot-protocol/marmot-ts (100 events), marmot-protocol/transponder (100 events), marmot-protocol/whitenoise (99 events), marmot-protocol/whitenoise-rs (100 events), permissionlesstech/bitchat (100 events), soapbox-pub/ditto (100 events)
- Files modified: 6 wiki pages
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

## [2026-05-31] ingest | Daily GitHub ingestion run 2026-05-31 + wiki synthesis
- Run: `data/raw/github/daily/2026-05-31/` (110 repos attempted, 0 errors, run_id: 20260531T060033Z-github-daily)
- Notable activity synthesized into wiki pages:
  - [[projects/coco]] — **9 commits** by [[people/egge21m]] (BOLT12 payments on onchain #187, onchain payments #184, bolt12 mint quote fixes, melt quote uniqueness)
  - [[projects/ditto]] — **6 commits** by [[people/alexgleason]] on GitHub mirror (releases v2.18.4/v2.18.3, Nostrify upgrade, NIP-21 deep links, Esplora failover, custom fee rate in Send)
  - [[projects/divine-mobile]] — **2 commits** by [[people/realmeylisdev]] and [[people/hm21]] (analyzer print fix #4821, video publish state fix #4829). **34 issues updated**.
  - [[projects/nutshell]] — **2 commits** by [[people/a1denvalu3]] (merge PR #1027 fixing CLN fee math for clnrest/corelightningrest). **5 issues updated**.
  - [[projects/numo]] — **2 commits** by [[people/a1denvalu3]] (NFC polling fixes for Android 15+ #328, Apple Pay popup suppression #327)
  - [[projects/bitchat]] — **1 commit** ([codex] refactor app runtime and ownership architecture #1104). **3 issues updated**.
  - `soapbox-pub/nostrify` — **2 commits** (Version packages, NPool eoseTimeout fix)
- People pages updated: [[people/egge21m]], [[people/alexgleason]], [[people/a1denvalu3]]
- Team pages updated: [[teams/soapbox]]
- Files modified: 10 wiki pages

## [2026-05-30] ingest | Daily GitHub ingestion run 2026-05-30 + wiki synthesis
- Run: `data/raw/github/daily/2026-05-30/` (110 repos attempted, 0 errors, run_id: 20260530T060702Z-github-daily)
- Notable activity synthesized into wiki pages:
  - [[projects/divine-mobile]] — 2 commits by [[people/realmeylisdev]] and [[people/hm21]] (VideoRecorderBloc sequential() refactor, video-editor split functionality with robust state management). **25 issues updated**.
  - [[projects/minibits]] — 1 commit by [[people/minibits-cash]] ("Fix loadMintFromCache"). **41 events**, **43 updated PRs**.
  - [[projects/ditto]] — 1 commit by [[people/alexgleason]] on GitHub mirror ("Replace genUserName with 'Anonymous' fallback"). **100 events**.
- People pages updated: [[people/realmeylisdev]], [[people/hm21]], [[people/minibits-cash]], [[people/alexgleason]]
- Files modified: 7 wiki pages

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
