# whitenoise-rs

**Status:** active · **Team:** [[teams/marmot-protocol]] · **Hub:** [[teams/foundry]] (via [[projects/white-noise]] lineage) · **Organization:** [[teams/and-other-stuff]]

## Summary
The Rust brain for the White Noise app

## Repository
- GitHub: [marmot-protocol/whitenoise-rs](https://github.com/marmot-protocol/whitenoise-rs)
- Primary language: **Rust** · stars: 444 · default branch: `master`


## Top contributors
- [[people/erskingardner]] — 485 contributions
- [[people/jgmontoya]] — 112 contributions
- [[people/mubarakcoded]] — 36 contributions
- [[people/dannym-arx]] — 33 contributions
- [[people/delcin-raj]] — 33 contributions
- [[people/pepina-dev]] — 16 contributions
- [[people/justinmoon]] — 6 contributions
- `jmcorgan` — 2 contributions *(occasional; no page)*

## Organizational relevance
Part of the [[teams/marmot-protocol]] organization — the Marmot protocol and its reference implementations (including [[projects/white-noise]]).

## History
- 2026-05-19: Daily ingestion (`data/raw/github/daily/2026-05-19/marmot-protocol/whitenoise-rs/`) shows **4 commits** by [[people/erskingardner]] and [[people/dannym-arx]]. Major themes: reuse `d_tag` slot for kind:30443 key-package publishes to enable NIP-33 replacement (with monotonic `created_at`, DB tracking, and serialized concurrent rotations per account), harden notification collection for NSE wakeups and background cold-start races, add `whitenoise-markdown` crate retiring the `nostr-sdk` token parser, and add weekly Rust toolchain staleness check workflow. **7 issues updated**.
- 2026-05-07: Page created from `data/raw/github/org-discovery/2026-05-07/marmot-protocol/github-org-discover.json` (discovery run via [[tools/github-org-discover]]).

## Related
- [[projects/whitenoise]] — the Flutter app consuming this crate.
- Powers [[projects/wn-tui]] via the same Rust core.

## Open questions
- Who is the designated maintainer beyond the top contributors?
- Communication channels?
- Is this project part of the public [[projects/white-noise]] umbrella, or tracked separately?
