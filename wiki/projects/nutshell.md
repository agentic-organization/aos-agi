# Nutshell

**Status:** active · **Ecosystem:** [[projects/cashu]] · **Owner team:** [[teams/cashu-core]]
**Language:** Python · **Kind:** mint + wallet + library (Python)

## Summary
The **original Cashu mint and wallet** — Chaumian ecash for Bitcoin in Python. Historically the first Cashu implementation, released in 2022 by [[people/callebtc]]. Ships three surfaces in one repo:

1. A **mint** — the reference Cashu mint implementation, with full Bitcoin Lightning integration.
2. A **CLI wallet** — the first Cashu wallet, available via PyPI as `cashu`. Supports multiple mints, builtin Tor, Nostr send/receive, and complex spending conditions (P2PK, P2SH).
3. A **Python library** — the mint and wallet logic can be imported into other Python projects.

One of the two canonical mint stacks alongside [[projects/mintd]] (CDK/Rust).

## Website
- [https://docs.cashu.space/](https://docs.cashu.space/)

## Repository
- GitHub: [cashubtc/nutshell](https://github.com/cashubtc/nutshell)
- Library mirror: [cashubtc/cashu](https://github.com/cashubtc/cashu) (the PyPI-shaped Python library)

## Scope
- Mint: `PostgreSQL` and `SQLite` backends; Bitcoin Lightning via CLN, LND, LNbits, or Strike.
- Wallet CLI: multi-mint, Tor, Nostr transfers, P2SH spending conditions.
- Library: importable as `from cashu.wallet import ...` — powers tools like [[projects/sixty-nuts]] and research scripts.

## Related
- [[projects/cdk]] — the other reference mint, in Rust
- [[projects/cashu]] — protocol umbrella

## History
- 2026-05-07: Page created from [cashu.space](https://cashu.space/) / [docs.cashu.space](https://docs.cashu.space/) and `cashubtc/awesome-cashu` snapshot (`data/raw/cashu/awesome-cashu-2026-05-07.md`).

## Open questions
- Primary maintainers, funding model, and activity cadence.
- Which Cashu library (cashu-ts, CDK, Nutshell, etc.) it builds on.
- Current deployment footprint and active user count, if any.
