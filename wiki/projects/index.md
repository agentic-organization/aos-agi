# Projects — Index

One page per project. Pages evolve as maintainers, communication channels, skills, and systems are discovered.

## Foundry projects (andotherstuff.org)

| Project | Focus | Repo |
|---|---|---|
| [[projects/shakespeare]] | AI-first dev platform (Nostr) | GitLab · soapbox-pub/shakespeare (mirror on GitHub) |
| [[projects/agora]] | Global activist network (Nostr) | GitLab · soapbox-pub/agora |
| [[projects/clawi]] | Managed cloud AI agent platform | private (see page) |
| [[projects/ditto]] | Customizable Nostr social platform | GitLab · soapbox-pub/ditto (mirror on GitHub) |
| [[projects/divine]] | Short-form looping video on Nostr | GitHub · divinevideo/* |
| [[projects/white-noise]] | Private Nostr-based messaging | GitHub · marmot-protocol/* |
| [[projects/flotilla]] | Community/social platform (Nostr) | GitHub · coracle-social/flotilla |
| [[projects/cashu]] | Bitcoin ecash / privacy payments | GitHub · cashubtc (see [[projects/cashu]] for full ecosystem) |
| [[projects/chorus]] | Decentralized community for creators | GitHub · andotherstuff/chorus |
| [[projects/bitchat]] | Offline Bluetooth messaging | GitHub · permissionlesstech/bitchat |
| [[projects/marmot]] | Protocol: MLS over Nostr | GitHub · marmot-protocol/marmot |
| [[projects/zapstore]] | Nostr/Bitcoin app store | GitHub · zapstore/zapstore |
| [[projects/ngit]] | Git collaboration over Nostr | GitHub · DanConwayDev/ngit-cli |

## Marmot Protocol sub-projects
Engineering pages for components under [[teams/marmot-protocol]]:

- [[projects/marmot]] — protocol specification.
- [[projects/mdk]] — Marmot Development Kit (Rust + language bindings).
- [[projects/marmot-ts]] — TypeScript implementation.
- [[projects/marmots-web-chat]] — reference web-chat using `marmot-ts`.
- [[projects/transponder]] — MIP-05 notifications server.
- [[projects/whitenoise-rs]] — White Noise Rust core.
- [[projects/whitenoise]] — White Noise Flutter app.
- [[projects/wn-tui]] — White Noise terminal UI.
- [[projects/nostr-doctor]] — Nostr diagnostic utility.
- [[projects/proton-beam]] — Nostr events → protobuf.
- [[projects/botburrow]] — purpose TBD.
- [[projects/openmls-sled-storage]] · [[projects/openmls-redb-storage]] · [[projects/openmls-lmdb-storage]] — OpenMLS storage-trait adapters for embedded DBs.

## Related engines referenced by Foundry projects

- [[projects/openclaw]] — community-powered agent engine (stub).
- [[projects/hermes]] — self-improving agent engine (stub).

## Divine sub-projects
Engineering pages for components under [[teams/divine]] (the `divinevideo` GitHub org). All share [[projects/divine]] as product umbrella.

### Clients
- [[projects/divine-mobile]] · [[projects/divine-web]] · [[projects/divine-space]]

### Authentication
- [[projects/keycast]] · [[projects/divine-login]] · [[projects/divine-signer]] · [[projects/divine-identify-verification-service]]

### Storage
- [[projects/divine-blossom]] · [[projects/divine-upload-server]]

### Content moderation
- [[projects/divine-moderation-service]] · [[projects/divine-moderation-api]] · [[projects/divine-realness]]

### Nostr infrastructure
- [[projects/divine-relay-manager]] · [[projects/divine-relay-sync]] · [[projects/divine-router]] · [[projects/divine-rest-gateway]] · [[projects/divine-sky]] · [[projects/divine-name-server]] · [[projects/divine-name-sync]] · [[projects/divine-push-service]]

### Features
- [[projects/divine-badges]] · [[projects/divine-clips]]

## Soapbox sub-projects
Engineering pages for components under [[teams/soapbox]] (the `soapbox-pub` GitHub org).

### Active
- [[projects/ditto]] — Nostr social client (Soapbox-built, Foundry-listed)
- [[projects/shakespeare]] — AI-first app builder (Soapbox-built, Foundry-listed)
- [[projects/nostrify]] — Soapbox's Nostr framework
- [[projects/openclaw-skills]] — skills targeting [[projects/openclaw]] / [[projects/clawi]]
- [[projects/nostr-skills]] — Nostr-protocol skill pack

### Legacy / lower velocity
- [[projects/soapbox]] — original Mastodon-fork client (still the most-starred Soapbox repo)
- [[projects/rebased]] — Pleroma-derived Elixir backend (last push 2025-04)

## Cashu ecosystem

The [[projects/cashu]] page is the protocol and ecosystem umbrella. Sub-projects below are split by role and by whether they sit inside the `cashubtc/` GitHub organization (stewarded by [[teams/cashu-core]]) or are independent.

### Protocol & reference implementations (`cashubtc/`)
- [[projects/nuts]] — the NUT specifications.
- [[projects/cdk]] — Rust Cashu Development Kit (+ [[projects/mintd]], [[projects/cdk-wallet]], [[projects/cdk-swift]], [[projects/cdk-kotlin]], [[projects/cdk-python]]).
- [[projects/cashu-ts]] · [[projects/cashu-crypto-ts]] · [[projects/coco]] — TypeScript stack.
- [[projects/nutshell]] — Python reference mint + wallet + library.
- [[projects/cashu-me]] — reference web wallet.
- [[projects/numo]] — Android point-of-sale.
- [[projects/npub-cash]] — Lightning-address provider.
- [[projects/cashu-redeem]] — redemption web tool.
- [[projects/awesome-cashu]] — ecosystem index (meta).
- [[projects/enuts]] — historical mobile wallet, being revived.

### Wallets (independent)
- [[projects/minibits]] (mobile), [[projects/macadamia]] (iOS/Swift), [[projects/sovran]] (iOS).
- [[projects/nutstash]] (web), [[projects/agicash]] (web), [[projects/harbor]] (desktop).
- [[projects/zeus]] (Lightning + Cashu), [[projects/kashir]] (React Native + Nostr).
- [[projects/cocod]] (CLI daemon), [[projects/nutsack]] (NIP-60 framework), [[projects/sixty-nuts]] (Python NIP-60).

### Mints (independent)
- [[projects/nutmix]] (Go).

### Libraries (independent)
- [[projects/cashuswift]] (Swift), [[projects/cashu-jdk]] (Java).

### Applications & tools
- [[projects/athenut]] (search), [[projects/btcnutserver]] (BTCPay plugin), [[projects/hashpool]] (mining pool).
- [[projects/routstr]] + [[projects/otrta-client]] (LLM marketplace).
- [[projects/tollgate]] + [[projects/wally]] (decentralized WiFi ISP).
- [[projects/0xchat]] · [[projects/keychat]] · [[projects/iris]] · [[projects/shopstr]] — messengers/clients with Cashu wallets.
- [[projects/x-cashu]] + [[projects/proxnut]] — HTTP 402 paywall stack.
- [[projects/bitcoinmints]] · [[projects/cashumints-space]] · [[projects/mint-audit]] — mint discovery/audit.
- AOS-internal integration: [[projects/chorus]] ships a NIP-60/61 Cashu wallet.

## Source
- [andotherstuff.org](https://andotherstuff.org/#foundry-projects) Foundry project listing.
- `data/raw/github/org-discovery/2026-05-07/marmot-protocol/github-org-discover.json` — discovery snapshot for the Marmot Protocol organization.
- `data/raw/github/org-discovery/2026-05-07/divinevideo/github-org-discover.json` — discovery snapshot for the Divine (divinevideo) organization.
- `data/raw/github/org-discovery/2026-05-07/soapbox-pub/github-org-discover.json` — discovery snapshot for the Soapbox (soapbox-pub) organization.
- `data/raw/github/daily/2026-05-07/` — first watchlist-wide raw GitHub ingestion run via [[tools/github-daily-ingest]].
- `data/raw/cashu/` — snapshots of cashu.space, docs.cashu.space pages, and `cashubtc/awesome-cashu` README used to synthesize the Cashu ecosystem pages.
