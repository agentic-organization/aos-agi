# White Noise

**Status:** active · **Hub:** [[teams/foundry]] · **Organization:** [[teams/and-other-stuff]]
**Engineering home:** [[teams/marmot-protocol]]

## Summary
A secure and private messaging application that emphasizes user privacy and data security. Built on open standards — Nostr for identity and transport, and [MLS](https://messaginglayersecurity.rocks/) (Messaging Layer Security) for end-to-end encrypted group messaging. The MLS-over-Nostr combination is codified as the [[projects/marmot]] protocol.

White Noise is the first end-user client of Marmot. The engineering lives in the [marmot-protocol](https://github.com/marmot-protocol) GitHub organization and is split between a shared Rust core and platform-specific front-ends.

## Website
- [whitenoise.chat](https://whitenoise.chat)

## Repositories
White Noise is a product composed of multiple repositories; each has its own project page:

- [[projects/whitenoise-rs]] — `marmot-protocol/whitenoise-rs` — the shared Rust core.
- [[projects/whitenoise]] — `marmot-protocol/whitenoise` — the Flutter app.
- [[projects/wn-tui]] — `marmot-protocol/wn-tui` — terminal UI.
- `marmot-protocol/whitenoise-web` — marketing website (no dedicated page).
- `marmot-protocol/whitenoise-meta` — UX/design research.
- `marmot-protocol/whitenoise-podcast` — podcast.

> **Migration note.** The andotherstuff.org Foundry card lists `parres-hq/whitenoise` as the canonical repo. Per the 2026-05-07 discovery of `marmot-protocol`, the active development now lives at `marmot-protocol/*`. The `parres-hq` URL either needs updating on andotherstuff.org, or represents a legacy mirror. Archived sibling `marmot-protocol/whitenoise-archive` is explicitly excluded from project pages per AOS guidance.

## Tags / concepts
[[concepts/messaging]] · [[concepts/privacy]] · [[concepts/nostr]] · [[concepts/mls]] · [[concepts/e2ee]]

## Owners & contributors
- Engineering team: [[teams/marmot-protocol]].
- Lead maintainer: [[people/erskingardner]].
- Other primary contributors: [[people/jgmontoya]], [[people/pepina-dev]], [[people/dannym-arx]], [[people/mubarakcoded]], [[people/untreu2]], [[people/delcin-raj]].
- See [[teams/marmot-protocol]] for the full contributor list.

## Communication
- (channels unknown — Nostr / Telegram / Matrix / Signal to be discovered)

## Related projects
- [[projects/marmot]] — the protocol White Noise implements.
- [[projects/mdk]] — the shared development kit.
- [[projects/transponder]] — MIP-05 push-notifications server used by the Marmot stack.

## Required capabilities / skills
- [[skills/messaging]]
- [[skills/privacy]]
- [[skills/nostr]]
- [[skills/rust]]
- [[skills/flutter]]
- [[skills/mls]]

## Organizational relevance
Part of AOS's **Foundry** hub — projects the Foundry supports and stewards as part of the freedom-tech ecosystem. Engineering operationally lives in [[teams/marmot-protocol]].

## History
- 2026-05-07: Page created from andotherstuff.org Foundry project listing.
- 2026-05-07: Page expanded after marmot-protocol GitHub org discovery. Engineering link to [[teams/marmot-protocol]] added, multi-repo structure documented, migration note about the `parres-hq` URL added.

## Open questions
- Why is the andotherstuff.org card pointing at `parres-hq/whitenoise`? Update the website, or is `parres-hq` still relevant?
- Who owns operational concerns (releases, app-store accounts, notification infra)?
- Funding source and contributor compensation model.
- Relationship to the `parres.org` site (hosted in the same org) — is Parres a parent brand?
