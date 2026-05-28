# cashu-ts

**Status:** active · **Ecosystem:** [[projects/cashu]] · **Owner team:** [[teams/cashu-core]]
**Language:** TypeScript · **Kind:** library

## Summary
The **TypeScript reference library** for Cashu. Powers most web wallets in the ecosystem ([[projects/cashu-me]], [[projects/nutstash]], Shopstr, Satoshi Pay, and many more). The most widely-depended-on Cashu library after the Python and Rust stacks.

## Website
- [https://cashu-ts.dev/](https://cashu-ts.dev/)

## Repository
- GitHub: [cashubtc/cashu-ts](https://github.com/cashubtc/cashu-ts)



## Related
- [[projects/cashu-crypto-ts]] — low-level crypto primitives
- [[projects/coco]] — higher-level wallet-building toolkit
- [[projects/cashu]] — protocol umbrella

## History
- 2026-05-07: Page created from [cashu.space](https://cashu.space/) / [docs.cashu.space](https://docs.cashu.space/) and `cashubtc/awesome-cashu` snapshot (`data/raw/cashu/awesome-cashu-2026-05-07.md`).

- 2026-05-11: `data/raw/github/daily/2026-05-11/cashubtc/cashu-ts/` captured **10 commits** in the 72h window. Themes: new `CTSError` base class, deterministic DLEQ nonce derivation (NUT-12), verify DLEQ on received proofs without explicit request, `maxSpendableAfterFees` primitive, coerce omitted `payment_preimage`/`witness` to null, treat `expiry: 0` as no-expiry in mint-quote validation, docs/examples aligned to Makimoto BOLT12 example.
- 2026-05-19: Daily ingestion (`data/raw/github/daily/2026-05-19/cashubtc/cashu-ts/`) shows **2 issues updated** (no new commits in the 24h window): BLS12-381 v3 keysets, and onchain mint/melt support.

- 2026-05-12: `data/raw/github/daily/2026-05-12/cashubtc/cashu-ts/` captured **2 commits** in the 24h window and release **v4.3.0** (published 2026-05-12). Themes: improved async melt change handling, new `CTSError` base class. Committers: [[people/gudnuf]], `lollerfirst`.

- 2026-05-17: `data/raw/github/daily/2026-05-17/cashubtc/cashu-ts/` captured **4 commits** in the 24h window, including release **v4.4.0** (2026-05-17). Themes: `AmountWithUnit` value object with unit-aware sibling to `Amount`, `verifyDleqIfPresent` deprecation ahead of v5 removal, `ProofLike` accepted in `WalletEvent` proof state updates, chore/main release automation. Committer: [[people/rob-woodgate]] (all 4).
- 2026-05-20: Daily ingestion (`data/raw/github/daily/2026-05-20/cashubtc/cashu-ts/`) shows **1 issue updated** (no new commits): #633 feat: add onchain mint/melt support by [[people/robwoodgate]].
- 2026-05-22: Daily ingestion (`data/raw/github/daily/2026-05-22/cashubtc/cashu-ts/`) shows **2 commits** by [[people/robwoodgate]] and release **v4.5.0** (published 2026-05-21). Themes: onchain mint/melt support (#633), release 4.5.0 (#666). **99 events**, **6 issues updated**.
- 2026-05-24: Daily ingestion (`data/raw/github/daily/2026-05-24/cashubtc/cashu-ts/`) shows **5 commits** by [[people/robwoodgate]], including releases **v5.0.0-rc.1** and **v4.5.1**. Themes: add `method_name` to mint/melt method settings (NUT-04/05), scoped request `fetch` hooks, remove v4-deprecated APIs, mark RC GitHub releases as prereleases, update developer docs for LTS workflow. **10 issues updated** including conditional token primitives for NUT-CTF (#682).

## Open questions
- Primary maintainers, funding model, and activity cadence.
- Which Cashu library (cashu-ts, CDK, Nutshell, etc.) it builds on.
- Current deployment footprint and active user count, if any.
