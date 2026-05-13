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

- 2026-05-12: `data/raw/github/daily/2026-05-12/cashubtc/cdk/` captured **4 commits** in the 24h window. Themes: FFI runtime consolidation into `RuntimeGuard`, replace blocking `Condvar` pool with async `Semaphore`, agent review scaffolding, DB test expansion. No new release in this window (last release v0.16.0 on 2026-03-31).

## Open questions
- Primary maintainers, funding model, and activity cadence.
- Which Cashu library (cashu-ts, CDK, Nutshell, etc.) it builds on.
- Current deployment footprint and active user count, if any.
