# CDK (Cashu Development Kit)

**Status:** active · **Ecosystem:** [[projects/cashu]] · **Owner team:** [[teams/cashu-core]]
**Language:** Rust · **Kind:** library

## Summary
The **Rust Cashu Development Kit** — wallet *and* mint logic in one library, with broad language bindings. CDK is the workhorse of the modern Cashu ecosystem: [[projects/mintd]] is built on it, most new production mints use it, and its Swift/Kotlin/Python bindings let mobile and scripting clients share a single vetted codebase.

## Website
- [https://cashudevkit.org/](https://cashudevkit.org/)

## Repository
- GitHub: [cashubtc/cdk](https://github.com/cashubtc/cdk)

## Bindings & surfaces
- [[projects/mintd]] — the CDK mint binary.
- [[projects/cdk-wallet]] — the CDK CLI wallet.
- [[projects/cdk-swift]] — Swift bindings.
- [[projects/cdk-kotlin]] — Kotlin/Android bindings.
- [[projects/cdk-python]] — Python bindings.

## Core maintainers
- [[people/thesimplekid]] — primary maintainer.
- [[people/crodas]] — storage layer.
- [[people/davidcaseria]] — FFI / Flutter surfaces.

## Related
- [[projects/cashu]] — protocol umbrella

## History
- 2026-05-07: Page created from [cashu.space](https://cashu.space/) / [docs.cashu.space](https://docs.cashu.space/) and `cashubtc/awesome-cashu` snapshot (`data/raw/cashu/awesome-cashu-2026-05-07.md`).
- 2026-05-19: Daily ingestion (`data/raw/github/daily/2026-05-19/cashubtc/cdk/`) shows **1 commit** by [[people/thesimplekid]] ("fix: rust version job"). **13 issues updated** including Swift publication pipeline workflow, onchain BDK integration, `p2pk_signing_keys` in `SendOptions`, payment-processor mint `quote_id` propagation to backend.

- 2026-05-12: `data/raw/github/daily/2026-05-12/cashubtc/cdk/` captured **4 commits** in the 24h window. Themes: FFI runtime consolidation into `RuntimeGuard`, replace blocking `Condvar` pool with async `Semaphore`, agent review scaffolding, DB test expansion. No new release in this window (last release v0.16.0 on 2026-03-31).

- 2026-05-15: `data/raw/github/daily/2026-05-15/cashubtc/cdk/` captured **1 commit** and **11 updated issues** in the 24h window. Themes: agent review documentation update. Issues: redis-cluster caching support (#1936), FFI mint-info error propagation (#1968), auth wildcard behavior (#1967), zero-signature validation (#1966), SendOptions p2pk_signing_keys (#1835), keyset expiry enforcement (#1946), on-chain BDK work (#1870), wallet RestoreOptions batching (#1923), Apache license addition (#1864). Committer: [[people/thesimplekid]].

- 2026-05-15: `data/raw/github/daily/2026-05-15/cashubtc/cdk/` captured **1 commit** and **11 updated issues** in the 24h window. Themes: agent review documentation update. Issues: redis-cluster caching support (#1936), FFI mint-info error propagation (#1968), auth wildcard behavior (#1967), zero-signature validation (#1966), SendOptions p2pk_signing_keys (#1835), keyset expiry enforcement (#1946), on-chain BDK work (#1870), wallet RestoreOptions batching (#1923), Apache license addition (#1864). Committer: [[people/thesimplekid]].

- 2026-05-17: `data/raw/github/daily/2026-05-17/cashubtc/cdk/` captured **3 commits** in the 24h window. Themes: batch mint-quote subscription snapshot fetching, FFI mint-info conversion error propagation, preserve auth wildcard endpoint matching. Committer: [[people/thesimplekid]] (all 3).
- 2026-05-20: Daily ingestion (`data/raw/github/daily/2026-05-20/cashubtc/cdk/`) shows **3 commits** by [[people/thesimplekid]]: "feat: ws connection limit", "fix: normalize payment method case for auth", and "feat: ensure auth keyset". **16 issues updated** including closing #1792 (multi-language bindings CI checks) and #1788 (Dart release process); open issue #1799 removes `clone` from Mint struct.
- 2026-05-21: Daily ingestion (`data/raw/github/daily/2026-05-21/cashubtc/cdk/`) shows **1 commit** by [[people/zeugmaster]]: propagate mint `quote_id` through payment-processor backend so custom backends can correlate `get_payment_quote` and `make_payment` calls for the same melt (#1799). **14 issues updated**.
- 2026-05-22: Daily ingestion (`data/raw/github/daily/2026-05-22/cashubtc/cdk/`) shows **8 commits** by [[people/thesimplekid]], vnprc, and GEET3001. Themes: redis-cluster caching support in `cdk-axum`, P2PK signing key support in `send`, locked-proof coin selection fix, remove direct `secp` dependency, include recover sagas in FFI, MSRV fix for tonic bump, invalid config error handling, refactor locked-proof passthrough from bool to send mode. **100 events**, **15 issues updated**.
- 2026-05-27: Daily ingestion (`data/raw/github/daily/2026-05-27/cashubtc/cdk/`) shows **2 commits** by [[people/thesimplekid]]. "chore: add bdk to release" adds BDK to the release pipeline. "fix: stabilize onchain regtest helpers" configures BDK env vars when restarting regtest mints so onchain flows keep working after restart, and translates cargo test thread flags to nextest job flags for archived integration tests. **13 issues updated**.

- 2026-05-25: Daily ingestion (`data/raw/github/daily/2026-05-25/cashubtc/cdk/`) shows **11 PushEvents** and **11 issues/PRs updated** including NUT-XX efficient wallet recovery (#1735), auth websocket handling (#1682), Apache license addition (#1864), golang release pipeline (#2000), XCFramework CI streamlining (#1979), and OpenAPI removal (#2004). Actors: [[people/thesimplekid]], [[people/callebtc]], [[people/asmogo]], [[people/crodas]]. No default-branch commits in the 24h window.
- 2026-05-28: Daily ingestion (`data/raw/github/daily/2026-05-28/cashubtc/cdk/`) shows **6 commits** by [[people/thesimplekid]] and **18 issues updated**. Merged PRs: prevent logging p2pk key (#1993), custom methods in fake wallet (#1998), improve amountless invoice checks (#1991), bind docker ldk dashboard to localhost (#1989), spending conditions transformation should error (#2002), update nix flake.lock (#2005), rename onchain to nut30 (#2006). Themes: privacy hardening (p2pk key logging), payment flexibility (amountless invoices, fake wallet extensibility), devops (docker bind, nix flake), and protocol alignment (nut30 rename). Open issues include FFI improvements (#1981), golang release (#2000), zstd-safe regtest build (#2011), offline ecash DLEQ verification (#1931), and uuid v7 migration (#1990).


## Open questions
- Primary maintainers, funding model, and activity cadence.
- Which Cashu library (cashu-ts, CDK, Nutshell, etc.) it builds on.
- Current deployment footprint and active user count, if any.
