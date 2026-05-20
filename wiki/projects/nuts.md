# NUTs (Cashu protocol specs)

**Status:** active · **Ecosystem:** [[projects/cashu]] · **Owner team:** [[teams/cashu-core]]
**Language:** Markdown (spec) · **Kind:** protocol specification

## Summary
The **Cashu protocol specifications** — Notation, Usage, and Terminology. NUTs are individually-numbered documents that together define what any Cashu-compatible wallet or mint must implement. Any client that follows the NUTs is interoperable with the rest of the ecosystem.

Key NUTs include the mandatory primitives (minting, melting via Lightning, BDHKE), optional extensions (P2PK spending conditions, DLEQ proofs, token versions v3/v4), and emerging drafts (NUT-24 / x-cashu HTTP 402).

## Repository
- GitHub: [cashubtc/nuts](https://github.com/cashubtc/nuts)



## Related
- [[projects/cashu]] — protocol umbrella
- [[projects/cdk]] — Rust reference
- [[projects/nutshell]] — Python reference
- [[projects/cashu-ts]] — TypeScript reference

## History
- 2026-05-07: Page created from [cashu.space](https://cashu.space/) / [docs.cashu.space](https://docs.cashu.space/) and `cashubtc/awesome-cashu` snapshot (`data/raw/cashu/awesome-cashu-2026-05-07.md`).
- 2026-05-20: Daily ingestion (`data/raw/github/daily/2026-05-20/cashubtc/nuts/`) shows **3 issues updated** (no new commits): #368 deterministic DLEQ nonce derivation (NUT-12) by [[people/robwoodgate]], #365 onchain payment method by [[people/thesimplekid]], #278 NUT10/NUT11 canonical serialization of secret by Toporin.

## Open questions
- Primary maintainers, funding model, and activity cadence.
- Which Cashu library (cashu-ts, CDK, Nutshell, etc.) it builds on.
- Current deployment footprint and active user count, if any.
