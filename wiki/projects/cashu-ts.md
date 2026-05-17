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

- 2026-05-17: `data/raw/github/daily/2026-05-17/cashubtc/cashu-ts/` captured **4 commits** in the 24h window, including release **v4.4.0** (2026-05-17). Themes: `AmountWithUnit` value object with unit-aware sibling to `Amount`, `verifyDleqIfPresent` deprecation ahead of v5 removal, `ProofLike` accepted in `WalletEvent` proof state updates, chore/main release automation. Committer: [[people/rob-woodgate]] (all 4).

## Open questions
- Primary maintainers, funding model, and activity cadence.
- Which Cashu library (cashu-ts, CDK, Nutshell, etc.) it builds on.
- Current deployment footprint and active user count, if any.
