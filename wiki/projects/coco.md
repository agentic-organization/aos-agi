# Coco

**Status:** active · **Ecosystem:** [[projects/cashu]] · **Owner team:** [[teams/cashu-core]]
**Language:** TypeScript · **Kind:** library

## Summary
A **modular, TypeScript-first toolkit** for building Cashu wallets and applications, maintained by [[people/egge21m]]. Sits at a higher abstraction level than [[projects/cashu-ts]] — Coco takes opinionated design decisions about wallet architecture, storage, and UX patterns so apps can be assembled from components rather than written from the primitives.

## Repository
- GitHub: [cashubtc/coco](https://github.com/cashubtc/coco)



## Related
- [[projects/cashu-ts]] — lower-level sibling
- [[projects/cocod]] — the daemon/CLI built by Egge on top of Coco

## History
- 2026-05-07: Page created from [cashu.space](https://cashu.space/) / [docs.cashu.space](https://docs.cashu.space/) and `cashubtc/awesome-cashu` snapshot (`data/raw/cashu/awesome-cashu-2026-05-07.md`).
- 2026-05-19: Daily ingestion (`data/raw/github/daily/2026-05-19/cashubtc/coco/`) shows **31 commits** in the 24h window, all by [[people/egge21m]]. Commit themes: project history derived from operations (`feat/history-refactor` merged), fix rebased operation projection in history, update test fixtures for history send, preserve legacy send tokens in adapters, exclude failed melts from IndexedDB history. **7 issues updated** including refactor of legacy melt quote surface, unblind restored signatures, rollback offline exact-match sends, and payment-request receive saga.

- 2026-05-17: `data/raw/github/daily/2026-05-17/cashubtc/coco/` captured **2 commits** in the 24h window. Themes: merge multi-unit support (#174), adjust changeset to major-bump semver. Committer: [[people/egge21m]] (both).
- 2026-05-20: Daily ingestion (`data/raw/github/daily/2026-05-20/cashubtc/coco/`) shows **3 commits** by [[people/egge21m]]: merge PR #178 removing legacy melt quotes, merge PR #177 for blinded signature recovery, and fix validating restored proof keyset units in core.
- 2026-05-21: Daily ingestion (`data/raw/github/daily/2026-05-21/cashubtc/coco/`) shows **2 commits** by [[people/egge21m]]: merge PR #166 fixing checkstate-loop, and dedupe proof state polling batches. **7 issues updated**.
- 2026-05-22: Daily ingestion (`data/raw/github/daily/2026-05-22/cashubtc/coco/`) shows **0 commits** in the 24h window but **100 events** and **2 issues updated** — sustained PR/issue activity.
- 2026-05-27: Daily ingestion (`data/raw/github/daily/2026-05-27/cashubtc/coco/`) shows **3 commits** by [[people/egge21m]]. Merge PR #183 introduces quote-first BOLT11 mint operations (decoupled quote-then-mint flow). Follow-up fixes: "fix(core): align mint watcher quote keys" and "fix(core): prevent duplicate melt quote operations". **3 issues updated**.
- 2026-05-31: Daily ingestion (`data/raw/github/daily/2026-05-31/cashubtc/coco/`) shows **9 commits** by [[people/egge21m]] in the 24h window. Major merges: PR #187 (BOLT12 payments on onchain) and PR #184 (onchain payments). Follow-up fixes: reject amountless fixed bolt12 mint quotes, require explicit bolt12 mint amounts, preserve melt quote uniqueness in adapters, reject duplicate melt quote operations, keep bolt12 melt method data minimal. **5 issues updated** including onchain payments (#161), bolt12 payments (#160/#182), and reusable onchain mint quotes (#184).

- 2026-06-01: Daily ingestion (`data/raw/github/daily/2026-06-01/cashubtc/coco/`) shows **2 commits**. Merge PR #188 by [[people/egge21m]]: "chore: remove redundant feature doc" by IgboPharaoh — cleanup of a redundant feature documentation file. **4 issues updated**. **100 events** in the 24h window.

## Open questions
- Primary maintainers, funding model, and activity cadence.
- Which Cashu library (cashu-ts, CDK, Nutshell, etc.) it builds on.
- Current deployment footprint and active user count, if any.
