# Divine

**Status:** active · **Hub:** [[teams/foundry]] · **Organization:** [[teams/and-other-stuff]]
**Engineering home:** [[teams/divine]]

## Summary
Divine is a short-form social-video platform built on Nostr — **"6-second social videos without AI slop"** (self-description on github.com/divinevideo). The platform spans mobile (Flutter), web (TypeScript), and a stack of Rust / TypeScript / JavaScript services covering authentication, storage (Blossom protocol), content moderation, push notifications, relay management, leaderboard badges, and cross-platform clipping.

## Website
- [divine.video](https://divine.video)
- Contact: contact@divine.video

## Repositories
Divine is a product composed of many repositories under the `divinevideo` GitHub organization. Each non-trivial repo has its own project page. See [[teams/divine]] for the full grouped listing. Primary surfaces:

- [[projects/divine-mobile]] — Flutter mobile app (the renamed successor of `rabble/nostrvine`, still referenced by andotherstuff.org).
- [[projects/divine-web]] — TypeScript web app.
- [[projects/keycast]] — Nostr OAuth authentication service (Rust).
- [[projects/divine-blossom]] — video hosting via the Blossom protocol.

> **Migration note.** The andotherstuff.org Foundry card points at `rabble/nostrvine`. The primary mobile repo has been renamed/moved to `divinevideo/divine-mobile`. andotherstuff.org should be updated.

## Tags / concepts
[[concepts/video]] · [[concepts/nostr]] · [[concepts/social-media]] · [[concepts/short-form-video]] · [[concepts/blossom]] · [[concepts/content-moderation]]

## Owners & contributors
- Engineering team: [[teams/divine]].
- Lead contributor: [[people/rabble]] — active across nearly every repository in the org.
- Significant secondary contributors: [[people/dcadenas]], [[people/mbradley]], [[people/NotThatKindOfDrLiz]] (cross-repo systems/infra work), plus mobile-focused contributors [[people/elphiethewitch]], [[people/realmeylisdev]], [[people/hm21]], [[people/omartinma]], [[people/B0berman]], [[people/JohnWeidner]].
- Cross-team collaboration: [[people/erskingardner]] (lead of [[teams/marmot-protocol]]) is a notable contributor to [[projects/keycast]].

See [[teams/divine]] for the full contributor list.

## Communication
- (channels unknown — Nostr / Telegram / Matrix / Signal to be discovered)

## Related projects
- [[projects/shakespeare]] — referenced on `divine-space` and `divine-web` via the `shakespeare-diy` automation account; suggests Divine is built / augmented with Shakespeare tooling.
- [[projects/clawi]] — the `rabble-claw` account shows up as a contributor on several Divine repos; likely [[people/rabble]]'s Clawi agent committing on his behalf.

## Required capabilities / skills
- [[skills/flutter]]
- [[skills/typescript]]
- [[skills/rust]]
- [[skills/nostr]]
- [[skills/blossom]]
- [[skills/content-moderation]]
- [[skills/cloudflare-workers]]
- [[skills/mls]] *(via keycast and the broader Nostr auth surface)*

## Organizational relevance
A Foundry-listed project on andotherstuff.org. Engineering lives in the `divinevideo` GitHub organization ([[teams/divine]]).

## History
- 2026-05-07: Page created from andotherstuff.org Foundry project listing.
- 2026-05-07: Page expanded after `divinevideo` GitHub org discovery (snapshot: `data/raw/github/divinevideo-2026-05-07.json`). Engineering link added, multi-repo structure documented, migration note about `rabble/nostrvine` added.

## Open questions
- Update the andotherstuff.org Foundry card to point at `divinevideo/divine-mobile` (or a Divine landing page) rather than the old `rabble/nostrvine`.
- Funding and employment model for Divine contributors.
- Relationship to the `rabble-claw` bot account — is this [[people/rabble]]'s Clawi agent, a separate helper, or a shared team bot?
- The `verse-ci` bot account — what CI/deployment system does it represent?
