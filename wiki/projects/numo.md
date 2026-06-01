# Numo

**Status:** active · **Ecosystem:** [[projects/cashu]] · **Owner team:** [[teams/cashu-core]]
**Language:** Kotlin (Android) · **Kind:** application (point-of-sale)

## Summary
Bitcoin point-of-sale (PoS) Android application that lets merchants accept Bitcoin via Cashu with a **tap-to-pay** UX. Hosted in `cashubtc/` and maintained by [[people/a1denvalu3]] (primary author). One of the most direct merchant-facing surfaces in the ecosystem.

## Website
- [https://numopay.org/](https://numopay.org/)

## Repository
- GitHub: [cashubtc/Numo](https://github.com/cashubtc/Numo)



## Related
- [[projects/cashu]] — protocol umbrella

## History
- 2026-05-07: Page created from [cashu.space](https://cashu.space/) / [docs.cashu.space](https://docs.cashu.space/) and `cashubtc/awesome-cashu` snapshot (`data/raw/cashu/awesome-cashu-2026-05-07.md`).
- 2026-05-22: Daily ingestion (`data/raw/github/daily/2026-05-22/cashubtc/Numo/`) shows **5 commits** by [[people/a1denvalu3]] and release **v1.6-rc1** (published 2026-05-21). Themes: BTCMap onboarding banner (#321, reverted then re-applied), build.gradle.kts update (#322), remove obsolete Java 21 override in release workflow (#323). **100 events**, **5 issues updated**.

- 2026-05-17: `data/raw/github/daily/2026-05-17/cashubtc/Numo/` captured **1 commit** in the 24h window. Theme: validate auto-withdraw threshold against LNURL `minSendable` (#315). Committer: [[people/a1denvalu3]].

- 2026-05-26: Daily ingestion (`data/raw/github/daily/2026-05-26/cashubtc/Numo/`) shows **1 commit** by [[people/a1denvalu3]]: update build.gradle.kts (#326).
- 2026-05-31: Daily ingestion (`data/raw/github/daily/2026-05-31/cashubtc/Numo/`) shows **2 commits** by [[people/a1denvalu3]] in the 24h window. Themes: use `setDiscoveryTechnology` to suppress NFC polling on Android 15+ (#328), and fix Apple Pay popup trigger by suppressing active NFC polling (#327). **2 issues updated**.

- 2026-06-01: Daily ingestion (`data/raw/github/daily/2026-06-01/cashubtc/Numo/`) shows **1 commit** by [[people/a1denvalu3]]: "Handle non-bolt11 mints by skipping lightning flow" (#324) — enables Numo to gracefully handle mints that do not support BOLT11 Lightning by skipping the lightning flow and rejecting unknown-mint swaps when the preferred mint lacks bolt11 support. Also fixes NDEF APDU READ BINARY boundary checks. **2 issues updated**. **100 events** in the 24h window.

## Open questions
- Primary maintainers, funding model, and activity cadence.
- Which Cashu library (cashu-ts, CDK, Nutshell, etc.) it builds on.
- Current deployment footprint and active user count, if any.
