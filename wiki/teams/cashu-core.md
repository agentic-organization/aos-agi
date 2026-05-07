# Cashu Core

**Canonical id:** `team_cashu-core`
**Type:** engineering team · **Steward:** [[teams/foundry]] · **Organization:** [[teams/and-other-stuff]]

## Summary
Engineering members active in the [cashubtc](https://github.com/cashubtc) GitHub organization — the maintainers and regular contributors to the Cashu protocol, its reference implementations (Rust CDK, cashu-ts, Go Cashu), and user-facing Cashu products (Numo, Minibits, Macadamia, cashu.me).

This team is **inferred from GitHub organization membership and observed contribution activity**; formal AOS affiliation per individual has not been mapped yet.

## Members

### Core maintainers and senior contributors
- [[people/callebtc]] — organization lead; protocol design.
- [[people/thesimplekid]] — Rust CDK; Android/Kotlin bindings.
- [[people/egge21m]] — cashu-ts; coco framework.
- [[people/a1denvalu3]] — Numo PoS; mobile.
- [[people/robwoodgate]] — TypeScript ecosystem; NUT specs.

### Specialized contributors
- [[people/crodas]] — CDK storage layer.
- [[people/minibits-cash]] — Minibits wallet.
- [[people/zeugmaster]] — iOS / Swift (Macadamia).
- [[people/davidcaseria]] — CDK FFI / Flutter.
- [[people/lescuer97]] — Go Cashu; P2PK / SIG_ALL.
- [[people/asmogo]] — payment-processor integrations.
- [[people/swedishfrenchpress]] — UI/UX design.

### Ecosystem and infrastructure
- [[people/findingsov]] — documentation; awesome-cashu.
- [[people/gandlafbtc]] — Tor / Docker / privacy infra.
- [[people/gudnuf]] — protocol testing; NUT-11.
- [[people/ye0man]] — CI/CD feedback.

### Listed organization members with status to confirm
- [[people/aidenvalu3]] — identity overlap with `a1denvalu3` to resolve.
- [[people/misovan]]
- [[people/gohumble]]

## Projects stewarded
- [[projects/cashu]] — protocol umbrella.

### Reference implementations (inside `cashubtc/`)
- [[projects/nuts]] — protocol specs.
- [[projects/cdk]] (Rust) + bindings [[projects/cdk-swift]], [[projects/cdk-kotlin]], [[projects/cdk-python]].
- [[projects/cashu-ts]], [[projects/cashu-crypto-ts]], [[projects/coco]] (TypeScript/JavaScript).
- [[projects/nutshell]] (Python — mint + wallet + library).
- [[projects/cashu-me]] (web wallet), [[projects/numo]] (Android PoS).
- [[projects/mintd]] (Rust mint, inside CDK), [[projects/cdk-wallet]] (Rust CLI wallet, inside CDK).
- [[projects/npub-cash]] — Lightning-address provider.
- [[projects/cashu-redeem]] — redemption web tool.
- [[projects/awesome-cashu]] — ecosystem index.
- [[projects/enuts]] — historical mobile wallet (in revival).

### External ecosystem projects in the broader Cashu community
These are **not** stewarded by `cashubtc/` — they are independent teams/maintainers building on the protocol. Documented on their own pages:

- Wallets — [[projects/minibits]], [[projects/macadamia]], [[projects/sovran]], [[projects/nutstash]], [[projects/agicash]], [[projects/harbor]], [[projects/zeus]], [[projects/kashir]], [[projects/cocod]], [[projects/nutsack]], [[projects/sixty-nuts]].
- Mints — [[projects/nutmix]] (Go).
- Libraries — [[projects/cashuswift]], [[projects/cashu-jdk]].
- Applications — [[projects/athenut]], [[projects/btcnutserver]], [[projects/hashpool]], [[projects/routstr]], [[projects/otrta-client]], [[projects/tollgate]], [[projects/wally]], [[projects/0xchat]], [[projects/keychat]], [[projects/iris]], [[projects/shopstr]], [[projects/x-cashu]], [[projects/proxnut]], [[projects/bitcoinmints]], [[projects/cashumints-space]], [[projects/mint-audit]].

## Known repositories (organization-level)
- `cashubtc/cdk` — Rust Cashu Development Kit.
- `cashubtc/cashu-ts` — TypeScript library.
- `cashubtc/nuts` — NUT specifications.
- `cashubtc/numo` — point-of-sale.
- `cashubtc/cashu.me` — web wallet.
- `cashubtc/coco` — TypeScript framework ([[people/egge21m]]).
- `cashubtc/nutshell` — Python Cashu reference implementation.
- `cashubtc/BTCNutServer` — Bitcoin/Nut server component.
- `cashubtc/awesome-cashu` — ecosystem index.
- `cashubtc/cashu-go` / `elnosh/gonuts` — Go implementation(s).
- External: `minibits-cash/minibits_wallet`, `zeugmaster/macadamia`, `zeugmaster/cashu-swift`.

## Observational surface
- [[tools/cashu-daily-report]] — daily ingestion script covering the 8 watched core repos: `Numo`, `cashu-ts`, `cdk`, `coco`, `cashu.me`, `nuts`, `nutshell`, `BTCNutServer`. Output is routed via [[communication/cashu-daily-report-dm]] to [[people/callebtc]].

## Platform coverage observed
- **Rust** — `cashubtc/cdk` via [[people/thesimplekid]], [[people/crodas]], [[people/davidcaseria]].
- **TypeScript** — `cashubtc/cashu-ts`, cashu.me, Numo via [[people/egge21m]], [[people/robwoodgate]], [[people/a1denvalu3]].
- **Go** — via [[people/lescuer97]].
- **Swift / iOS** — Macadamia and `cashu-swift` via [[people/zeugmaster]].
- **Kotlin / Android** — CDK bindings via [[people/thesimplekid]]; mobile clients via [[people/a1denvalu3]].
- **Flutter / Dart** — CDK FFI via [[people/davidcaseria]].

## Concentration observations
Individual platforms are currently driven by a small number of contributors:
- iOS/Swift: primarily [[people/zeugmaster]].
- Android/Kotlin bindings: primarily [[people/thesimplekid]].
- Numo PoS: primarily [[people/a1denvalu3]].

Noting this on the team page (not as a judgement) so identity/skill ingestion can track how this distribution evolves over time.

## History
- Page created from an internal Q4-2025 cashubtc organization analysis.

## Open questions
- Which members are funded by [[teams/and-other-stuff]] and which are independent or funded elsewhere?
- Where does cashubtc coordinate asynchronously — Matrix, Telegram, Nostr, Signal, mailing list?
- Are there regular calls or synchronous meetings?
- Is there a formal steering / protocol-maintainer subset, or is governance flat?
