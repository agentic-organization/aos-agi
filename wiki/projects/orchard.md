# orchard

**Status:** active · **Hub:** [[teams/foundry]] · **Steward team:** [[teams/cashu-core]] · **Product:** [[projects/cashu]]

## Summary
Web application for Cashu mint management — an operator-facing dashboard for running and monitoring a Cashu mint. The current iteration is a single-developer effort built in TypeScript and deployed at [orchard.space](https://orchard.space).

## Repository
- GitHub: [cashubtc/orchard](https://github.com/cashubtc/orchard)
- Primary language: **TypeScript** · stars: 42 · default branch: `master`
- Topics: `bitcoin`, `ecash`, `lightning-network`, `taproot-assets`, `ai`
- Created: 2024-10-18 · License: MIT
- Homepage: [orchard.space](https://orchard.space/)

## Top contributors
- [[people/orangeshyguy21]] — sole active contributor in the 2026-05-07 → 2026-05-10 window (27 commits across 27 of the last ~10 PRs).

## Organizational relevance
Orchard sits inside the `cashubtc/` GitHub organization, so it inherits stewardship from [[teams/cashu-core]]. Functionally it complements the protocol implementations ([[projects/cdk]], [[projects/nutshell]]) by giving mint operators a UI rather than a CLI.

## Recent activity (2026-05-07 → 2026-05-10)
- 27 commits, all by [[people/orangeshyguy21]].
- PR themes: `feat: Nuts 21,22,29` (NUT-21/22/29 support), `Keyset analytic accuracy`, `E2E mint suite p1`, `client crypto.randomUUID → uuid`, `non-blocking analytics bootstrap`, `Websockets Upgraded`, monthly `April 2026 Updates` rollup.
- No releases tagged in this window.

## Tags / concepts
[[concepts/cashu]] · [[concepts/ecash]] · [[concepts/mint]]

## History
- 2026-05-10: Page created from `data/raw/github/daily/2026-05-10/cashubtc/orchard/` and `data/raw/github/org-discovery/2026-05-10/cashubtc/snapshot.json` after the daily ingestion run via [[tools/github-daily-ingest]].

- 2026-05-11: `data/raw/github/daily/2026-05-11/cashubtc/orchard/` captured **16 commits** in the 72h window. Themes: client `crypto.randomUUID` → `uuid` swap with specs and review follow-up, keyset analytic accuracy, e2e assert `applyAiModel` option, `listFees` LAG/fan-out invariant + `getPreRangeEnd` helper, custom-bucket date pinning in keyset aggregation. All commits by [[people/orangeshyguy21]].

## Open questions
- Is orangeshyguy21 a [[teams/cashu-core]] member or an external maintainer hosted under `cashubtc/`?
- Is Orchard intended as the canonical operator UI for Cashu mints, or one of several?
- Production deployment behind `orchard.space` — who operates it?
- Communication channels for Orchard-specific discussion?
