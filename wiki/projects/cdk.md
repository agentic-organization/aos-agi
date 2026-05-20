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
- 2026-05-20: Daily ingestion (`data/raw/github/daily/2026-05-20/cashubtc/cdk/`) shows **3 commits** by [[people/thesimplekid]]: "feat: ws connection limit", "fix: normalize payment method case for auth", and "feat: ensure auth keyset". **16 issues updated** including closing #1792 (multi-language bindings CI checks) and #1788 (Dart release process); open issue #1799 removes `clone` from Mint struct.

## Open questions
- Primary maintainers, funding model, and activity cadence.
- Which Cashu library (cashu-ts, CDK, Nutshell, etc.) it builds on.
- Current deployment footprint and active user count, if any.
