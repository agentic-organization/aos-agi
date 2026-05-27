# Cashu

**Status:** active · **Hub:** [[teams/foundry]] · **Organization:** [[teams/and-other-stuff]] · **Steward team:** [[teams/cashu-core]]

## Summary
**Cashu is a free and open-source Chaumian ecash protocol built for Bitcoin.** It represents a digital bearer token stored on a user's device — behaviorally close to physical cash: instant, nearly free, and redeemable for bitcoin at any time. Transactions preserve user privacy via blind signatures: a Cashu mint never sees a database of user accounts.

An ecash system has two halves — a **mint** (custodian of reserves, signs tokens) and a **wallet** (holds tokens client-side). Anyone can run a mint for their application: a standalone wallet, a web paywall, a streaming-payment gateway, a voucher system, a rewards program.

Between mints, value moves through the **Bitcoin Lightning Network**. Deposits and withdrawals happen via Lightning; tokens within a single mint transfer peer-to-peer and are redeemable for on-chain or Lightning bitcoin by the mint at any time.

## Website & docs
- Home: [cashu.space](https://cashu.space/)
- Documentation: [docs.cashu.space](https://docs.cashu.space/)
- Blog: [blog.cashu.space](https://blog.cashu.space/)
- GitHub organization: [github.com/cashubtc](https://github.com/cashubtc)
- Twitter: [@cashubtc](https://twitter.com/cashubtc)

## Repository
- GitHub organization: [cashubtc](https://github.com/cashubtc)
- External ecosystem repos watched by daily ingestion: `minibits-cash/minibits_wallet`, `zeugmaster/macadamia`, `zeugmaster/cashu-swift`, `elnosh/gonuts`.

## Protocol
Cashu is specified through a family of small, numbered specifications called **NUTs** — "Notation, Usage, and Terminology" — published at [github.com/cashubtc/nuts](https://github.com/cashubtc/nuts). Implementations that follow the NUTs are interoperable with the rest of the ecosystem.

### Cryptographic core — BDHKE
The foundational primitive is **Blind Diffie-Hellmann Key Exchange (BDHKE)**, based on David Wagner's 1996 variant of David Chaum's blinding scheme. Three actors:

- **Bob** (mint) holds private key `k` (one per amount), publishes public key `K = kG`.
- **Alice** (user) picks a secret `x`, computes `Y = hash_to_curve(x)`, picks a blinding factor `r`, sends `B_ = Y + rG` to Bob (*blinding*).
- Bob signs: returns `C_ = kB_` (*signing*).
- Alice unblinds: `C = C_ - rK = kY` (*unblinding*). The pair `(x, C)` is now a token she can spend.
- To redeem, any holder sends `(x, C)` back to Bob, who checks that `k·hash_to_curve(x) == C` and marks `x` as spent (*verification*).

Key properties that follow: the mint cannot link a signed token to the user who requested the blind signature; double-spending is prevented via the spent-secrets list; tokens are bearer instruments.

### Related protocol artifacts
- **NIP-60 / NIP-61** — Nostr protocol NIPs for carrying Cashu wallets and nutzap payments over Nostr relays. A large share of Nostr-native wallets (chorus, Iris, Nutsack, Olas, chachi, Shopstr, and others) implement these for interoperability.
- **NUT-24 / x-cashu** — an in-progress HTTP 402 "Payment Required" scheme using Cashu tokens in HTTP headers, enabling pay-per-request API access.

## Ecosystem

The Cashu ecosystem is much larger than the `cashubtc` GitHub organization. The `cashubtc` org hosts the canonical implementations and specs; the broader ecosystem of wallets, mints, and applications extends far beyond, maintained by independent teams and individuals.

### Reference implementations (inside `cashubtc/`)
- [[projects/cashu-ts]] — TypeScript library, powers most web wallets.
- [[projects/cdk]] — **Cashu Development Kit** — Rust library, powers the most mint and wallet deployments. Ships bindings for Swift ([[projects/cdk-swift]]), Kotlin ([[projects/cdk-kotlin]]), and Python ([[projects/cdk-python]]).
- [[projects/coco]] — modular TypeScript toolkit for building wallets and apps.
- [[projects/nutshell]] — Python reference implementation; ships as both a **mint** and a **CLI wallet**.
- [[projects/cashu-crypto-ts]] — low-level TypeScript crypto primitives (blinding, unblinding, etc.).
- [[projects/cashu-me]] — the reference web wallet.
- [[projects/numo]] — Android point-of-sale app for merchants.
- [[projects/nuts]] — protocol specifications repo.

### Mints (featured on docs.cashu.space/mints)
- [[projects/nutshell]] — Python reference mint (and wallet).
- [[projects/mintd]] — Rust mint built on CDK.
- [[projects/nutmix]] — Go mint implementation (community-maintained).

### Wallets (featured on docs.cashu.space/wallets)
- [[projects/cashu-me]] — web (TypeScript/Vue).
- [[projects/minibits]] — mobile (Android/iOS).
- [[projects/macadamia]] — iOS (Swift).
- [[projects/sovran]] — iOS.
- [[projects/nutstash]] — web; multimint; Nostr token transfer.
- [[projects/agicash]] — web wallet built on Open Secret.
- [[projects/cdk-wallet]] — CDK-based CLI wallet (Rust).
- [[projects/nutshell]] — Python CLI wallet.

### Featured applications (docs.cashu.space/projects)
- [[projects/athenut]] — privacy-preserving web search (Kagi-powered, pay in sats).
- [[projects/btcnutserver]] — BTCPay Server plugin for accepting Cashu.
- [[projects/hashpool]] — accountless mining pool using ecash for mining shares.
- [[projects/npub-cash]] — Lightning-address provider backed by Cashu mints for Nostr pubkeys.
- [[projects/numo]] — tap-to-pay Bitcoin point of sale.
- [[projects/cashu-redeem]] — browser tool to redeem any Cashu token to Lightning.
- [[projects/routstr]] — marketplace for buying and selling LLM API access with Cashu.
- [[projects/tollgate]] — turns a WiFi router into a decentralized ISP using Bitcoin and ecash.

### Other notable ecosystem projects
- [[projects/harbor]] — desktop ecash wallet.
- [[projects/zeus]] — Lightning wallet with Cashu integration.
- [[projects/kashir]] — React Native ecash wallet with Nostr integration.
- [[projects/chorus]] — AOS-Foundry community app with an integrated Cashu wallet (NIP-60/61).

The canonical, continuously-updated index is [github.com/cashubtc/awesome-cashu](https://github.com/cashubtc/awesome-cashu) — a collaborative list with 100+ projects at the time of ingestion.

## Owners & contributors
- Primary engineering team: [[teams/cashu-core]] — the `cashubtc` GitHub organization maintainers.
- Organization lead: [[people/callebtc]].
- External wallet/app teams exist as separate projects; see each project page for its maintainer.

## Communication
- [[communication/cashu-daily-report-dm]] — daily 24h activity digest delivered to [[people/callebtc]] via Telegram.
- Other coordination channels (Matrix, Telegram, Nostr, Discord) are not yet mapped.

## Ingestion signals
- [[tools/cashu-daily-report]] — daily GitHub activity scrape over `Numo`, `cashu-ts`, `cdk`, `coco`, `cashu.me`, `nuts`, `nutshell`, `BTCNutServer`.
- [[tools/github-daily-ingest]] — org-wide raw GitHub ingestion for `cashubtc` plus selected external Cashu ecosystem repos, using `data/sources/github-watchlist.json`.
- `data/raw/cashu/` — snapshots of cashu.space, docs.cashu.space, and `awesome-cashu` used to synthesize this page and the ecosystem project pages.

## Organizational relevance
Cashu is one of the AOS **Foundry** projects and the organization's flagship privacy-payments surface. Its dependency graph reaches into multiple other AOS projects — [[projects/chorus]] ships a Cashu wallet, and Cashu's NIP-60/61 tooling makes it the de-facto ecash layer of the wider Nostr ecosystem that [[teams/soapbox]], [[teams/divine]], and [[teams/marmot-protocol]] also build on.

- 2026-05-11: Daily ingestion (`data/raw/github/daily/2026-05-11/`) shows concentrated activity in the TypeScript and mint-operator stacks: [[projects/cashu-ts]] (10 commits: CTSError, DLEQ, maxSpendableAfterFees), [[projects/orchard]] (16 commits: keyset analytics, uuid swap, listFees invariant), [[projects/coco]] (6 commits), [[projects/nutshell]] (1 commit). [[projects/cashu.me]] had a historical release `0.1` (2024-05-10) surface in the ingestion window.
- 2026-05-19: Daily ingestion (`data/raw/github/daily/2026-05-19/`) shows **[[projects/coco]]** as the most active Cashu repo with **31 commits** by [[people/egge21m]] (history refactor, IndexedDB fixes, legacy-send preservation). **[[projects/cdk]]** had 1 commit by [[people/thesimplekid]] fixing the Rust version job and 13 issues updated (Swift publication pipeline, onchain BDK, p2pk_signing_keys). **[[projects/nutshell]]** had 3 issues updated (SIG_ALL/P2PK/HTLC fixes, NUT-29 batched minting). **[[projects/nuts]]** had 1 issue updated (onchain payment method). **[[projects/cashu-ts]]** had 2 issues updated (BLS12-381 v3 keysets, onchain mint/melt).
- 2026-05-17: Daily ingestion (`data/raw/github/daily/2026-05-17/`) captures continued TypeScript and Rust-stack activity: [[projects/cashu-ts]] (4 commits including release **v4.4.0** — `AmountWithUnit`, `verifyDleqIfPresent` deprecation, `ProofLike` in `WalletEvent` proof state updates; committer: [[people/rob-woodgate]]), [[projects/cdk]] (3 commits — batch mint quote subscription snapshots, FFI mint-info conversion error propagation, auth wildcard endpoint matching; committer: [[people/thesimplekid]]), [[projects/coco]] (2 commits — multi-unit support merge #174, changeset major-bump adjustment; committer: [[people/egge21m]]), [[projects/numo]] (1 commit — validate auto-withdraw threshold against LNURL `minSendable`; committer: [[people/a1denvalu3]]).
- 2026-05-22: Daily ingestion (`data/raw/github/daily/2026-05-22/`) shows concentrated ecosystem activity: [[projects/cashu-ts]] release **v4.5.0** (onchain mint/melt), [[projects/cashu-me]] release **0.2** (BOLT12, mutinynet support), [[projects/numo]] release **v1.6-rc1** (BTCMap onboarding), [[projects/cdk]] (8 commits: redis-cluster, P2PK send, coin selection), [[projects/nutshell]] (100 events/9 issues), [[projects/orchard]] (100 events), [[projects/coco]] (100 events). External wallets [[projects/minibits]] (36 events) and [[projects/macadamia]] (46 events) also active.
- 2026-05-27: Daily ingestion (`data/raw/github/daily/2026-05-27/`) shows concentrated Cashu-core activity: [[projects/cdk]] (2 commits by [[people/thesimplekid]]: BDK release integration, onchain regtest helper stabilization), [[projects/coco]] (3 commits by [[people/egge21m]]: quote-first BOLT11 mint operations via PR #183, mint watcher quote key alignment, duplicate melt quote prevention), [[projects/minibits]] (1 commit by [[people/minibits-cash]]: basic transaction search). High event volume but no default-branch commits: cashubtc/cashu-ts (100 events), cashubtc/cashu.me (40 events), cashubtc/nuts (98 events), cashubtc/orchard (71 events).

## History
- 2026-05-10: Added [[projects/orchard]] (mint-management web app, sole maintainer [[people/orangeshyguy21]]) to the cashubtc sub-project graph after `data/raw/github/daily/2026-05-10/cashubtc/orchard/` showed concentrated activity (27 commits in 72h, NUT-21/22/29 work).
- 2026-05-07: Page expanded from a Foundry-listing stub into a protocol/ecosystem umbrella, using cashu.space, docs.cashu.space, and `cashubtc/awesome-cashu` README as sources (snapshots in `data/raw/cashu/`).
- 2026-05-07: Original Foundry-listing stub created from andotherstuff.org.
- 2026-05-07: Repository section and ingestion signals updated after `data/raw/github/daily/2026-05-07/` captured org-wide `cashubtc` activity through [[tools/github-daily-ingest]].

## Open questions
- Adoption metrics — how many mints are live? How much value is custodied? (Mint-audit tools like `audit.8333.space` and `bitcoinmints.com` exist but are not yet ingested.)
- Governance — which NUTs are considered stable vs experimental, and who decides? The NUTs repo is the authoritative source but the governance model is not yet mapped here.
- Which regulated or custodial mints are operating Cashu in production, and what is their operational posture?
- Cross-pollination — of the Nostr-native wallets implementing NIP-60/61, how many share library dependencies versus reimplement?
