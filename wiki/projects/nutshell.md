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

## Top contributors
- [[people/callebtc]] — 890 contributions (original author; released in 2022).
- [[people/a1denvalu3]] — 91 contributions (active; latest commit 2026-05-08 fixing Pydantic list handling).
- sihamon — 13 contributions.
- prusnak — 9 contributions.
- dni — 7 contributions.
- Altbierjupp — 7 contributions.
- b-l-u-e — 7 contributions.

## Related
- [[projects/cdk]] — the other reference mint, in Rust
- [[projects/cashu]] — protocol umbrella

## History
- 2026-05-07: Page created from [cashu.space](https://cashu.space/) / [docs.cashu.space](https://docs.cashu.space/) and `cashubtc/awesome-cashu` snapshot (`data/raw/cashu/awesome-cashu-2026-05-07.md`).
- 2026-05-11: Added contributors section from `gh api repos/cashubtc/nutshell/contributors` and `data/raw/github/daily/2026-05-11/cashubtc/nutshell/commits-since.json`.
- 2026-05-19: Daily ingestion (`data/raw/github/daily/2026-05-19/cashubtc/nutshell/`) shows **3 issues updated** (no new commits in the 24h window). Issues cover: fixes for SIG_ALL interaction with P2PK and HTLC (draft PR), a variety of NUT-10 P2PK/HTLC problems, and NUT-29 batched minting.
- 2026-05-20: Daily ingestion (`data/raw/github/daily/2026-05-20/cashubtc/nutshell/`) shows **1 commit** by [[people/a1denvalu3]]: merge PR #904 for bech32m encoded payments.
- 2026-05-21: Daily ingestion (`data/raw/github/daily/2026-05-21/cashubtc/nutshell/`) shows **3 commits** by KvngMikey, Codepocketdev, and [[people/a1denvalu3]]: remove stale TODO and confirm HTLC pubkey signing already wired up (#979), update .env.example for rate limiting (#996), and add Redis caching server to docker-compose (#990). **11 issues updated**.

## Open questions
- Funding model and activity cadence.
- Current deployment footprint and active user count, if any.
