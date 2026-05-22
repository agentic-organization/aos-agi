# Marmot Protocol

**Canonical id:** `team_marmot-protocol`
**Type:** GitHub organization + engineering team · **Steward:** [[teams/foundry]] · **Organization:** [[teams/and-other-stuff]]
**Website:** [marmot.build](https://marmot.build/)

## Summary
The [marmot-protocol](https://github.com/marmot-protocol) GitHub organization — home of the **Marmot Protocol** (end-to-end encrypted group messaging over Nostr using [MLS](https://messaginglayersecurity.rocks/)), the reference **Marmot Development Kit** and its language bindings, and the **White Noise** client applications built on top.

Org creation: 2025-02-26. Currently hosts 32 active public repositories (4 archived) and 2 publicly-visible members; 16 recurring contributors are active across the repositories within a 180-day window.

## Relationship to AOS
- Steward: [[teams/foundry]] — White Noise is a listed Foundry project.
- [[projects/white-noise]] is the user-facing umbrella brand; the engineering lives in this org.

## Members

### Publicly-visible org members
- [[people/erskingardner]]
- [[people/cypherpinkdev]] *(no active contributions observed in this window — stub)*

### Active recurring contributors (last 180 days, ≥3 contributions or ≥2 repos)
- [[people/erskingardner]] — lead maintainer of Marmot and White Noise; active across ~13 repos.
- [[people/hzrd149]] — TypeScript implementation (`marmot-ts`, `marmots-web-chat`).
- [[people/jgmontoya]] — White Noise Rust core and ancillary projects.
- [[people/gzuuus]] — TypeScript Marmot.
- [[people/dannym-arx]] — Marmot Development Kit language bindings.
- [[people/pepina-dev]] — White Noise (Flutter / Rust core / `marmot-ts`).
- [[people/mubarakcoded]] — MDK, White Noise.
- [[people/untreu2]] — White Noise Flutter.
- [[people/delcin-raj]] — White Noise Rust core.
- [[people/dennisreimann]] — `marmot-web` (protocol website).
- [[people/Datawav]] — White Noise (web, podcast).
- [[people/justinmoon]] — White Noise Rust core.
- [[people/staab]] — `marmot-ts`.
- [[people/alltheseas]] — cross-repo contributions (`marmot`, `marmot-ts`, `mdk`).
- [[people/agent-r3n]] — `whitenoise-web`.
- [[people/kuba-04]] — MDK, White Noise Rust core.

### Occasional contributors (single small contribution in window)
`jmcorgan`, `nikitawvi`, `JSKitty`, `dmcarrington`, `dechristopher`, `mehmetefeumit`, `sjmcnamara`, `RenAndKiwi`, `hthere1209` — included in the snapshot but without standalone wiki pages yet. Create pages as contribution density grows.

## Projects

### Core protocol & reference implementations
- [[projects/marmot]] — the protocol specification.
- [[projects/mdk]] — Marmot Development Kit (Rust); with language bindings `mdk-swift`, `mdk-python`, `mdk-ruby`, `mdk-kotlin`, `mdk-web`.
- [[projects/marmot-ts]] — TypeScript implementation.
- [[projects/marmots-web-chat]] — reference web-chat implementation using `marmot-ts`.
- [[projects/transponder]] — MIP-05 notifications server (Rust).

### White Noise client
- [[projects/whitenoise-rs]] — Rust core.
- [[projects/whitenoise]] — Flutter app.
- [[projects/wn-tui]] — terminal UI.
- `whitenoise-web` — marketing/website (no dedicated project page).
- `whitenoise-meta` — UX/design research (no dedicated project page).
- `whitenoise-podcast` — podcast site (no dedicated project page).

### Ancillary and supporting
- [[projects/nostr-doctor]] — Nostr diagnostic utility.
- [[projects/proton-beam]] — Nostr events → protobuf.
- [[projects/botburrow]] — purpose TBD.
- [[projects/openmls-sled-storage]], [[projects/openmls-redb-storage]], [[projects/openmls-lmdb-storage]] — OpenMLS storage-trait implementations for embedded DBs.
- `mdk-python-example`, `mdk-kotlin-example`, `mdk-ruby-example` — usage examples.
- `propose` — MLS proposal/commit test scenarios.
- `marmot-web`, `ipf.dev`, `parres.org` — websites.
- `media-assets` — logos, icons, marketing.
- `.github`, `agent-config` — organization meta/config.

### Archived (historical)
- `whitenoise-archive` — explicitly excluded from project pages per AOS guidance.
- `dr.marmot`, `mls-ts`, `nostr-openmls` — superseded implementations kept for history.

## Platform coverage observed
- **Rust** — heavy: core MDK, whitenoise-rs, transponder, wn-tui, proton-beam, openmls-* adapters.
- **TypeScript** — `marmot-ts`, `marmots-web-chat`, `nostr-doctor`.
- **Dart/Flutter** — `whitenoise` (user-facing White Noise app).
- **Swift, Kotlin, Python, Ruby** — MDK bindings, primarily via [[people/dannym-arx]].

## Concentration observations
- `erskingardner` contributes across the widest surface by a significant margin (13 repos, ~half of all tracked contributions).
- MDK language bindings are largely a single-person effort (`dannym-arx`).
- TypeScript implementation is concentrated in `hzrd149` + `gzuuus`.

Noting these as facts about current distribution, not verdicts.

## Ingestion provenance
- Discovery run: `data/raw/github/org-discovery/2026-05-07/marmot-protocol/github-org-discover.json`.
- Tool: [[tools/github-org-discover]].

## History
- 2026-05-15: White Noise Flutter app activity per `data/raw/github/daily/2026-05-15/marmot-protocol/whitenoise/`: 1 commit (QR scanner camera fix) and 12 updated issues (deep links, rich mentions, FRB migration, group-message editing). Committer: [[people/pepina-dev]].
- 2026-05-20: Daily ingestion (`data/raw/github/daily/2026-05-20/`) shows concentrated White Noise activity: [[projects/whitenoise]] (4 commits by [[people/mubarakcoded]], [[people/dannym-arx]], [[people/pepina-dev]]), [[projects/whitenoise-rs]] (3 commits by [[people/mubarakcoded]], [[people/erskingardner]]), and binding auto-bumps across `mdk-kotlin`, `mdk-python`, `mdk-ruby`.
- 2026-05-22: Daily ingestion (`data/raw/github/daily/2026-05-22/`) shows concentrated activity: [[projects/whitenoise]] (3 commits — block/unblock UX, mention color fix, group member routing), [[projects/mdk]] (4 commits + binding auto-bumps — Swift packaging on macOS 26 arm64, Kotlin ProGuard, CI cache fixes), [[projects/marmot-ts]] (100 events), [[projects/transponder]] (100 events), and [[projects/whitenoise-rs]] (1 commit, 1 issue).

## Open questions
- Formal maintainer role assignments per project.
- Governance: is there a steering group, or is `erskingardner` the sole decision-maker?
- Communication: where does the team coordinate — Nostr, Telegram, Signal, Matrix, mailing list?
- Funding model per active contributor.
- Relationship with [[teams/cashu-core]] (Nostr ecosystem overlap — `hzrd149`, `staab`, possibly others).
