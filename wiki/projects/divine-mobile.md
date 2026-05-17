# divine-mobile

**Status:** active · **Team:** [[teams/divine]] · **Product:** [[projects/divine]] · **Hub:** [[teams/foundry]] · **Organization:** [[teams/and-other-stuff]]

## Summary
(no description on GitHub — see Divine product page for context)

## Repository
- GitHub: [divinevideo/divine-mobile](https://github.com/divinevideo/divine-mobile)
- Primary language: **Dart** · stars: 242 · default branch: `main`

## Top contributors
- [[people/rabble]] — 1018 contributions
- [[people/realmeylisdev]] — 253 contributions
- [[people/hm21]] — 238 contributions
- [[people/omartinma]] — 134 contributions
- [[people/b0berman]] — 91 contributions
- [[people/notthatkindofdrliz]] — 67 contributions
- [[people/johnweidner]] — 54 contributions
- [[people/dcadenas]] — 49 contributions
- [[people/ryzizub]] — 45 contributions
- [[people/josh-sanford]] — 37 contributions

## Related
- [[projects/divine]] — the Divine product.
- This repository is the renamed successor of `rabble/nostrvine` (andotherstuff.org's Foundry card still points at the old path). The mobile app has been the primary front-end since the rename to `divinevideo/divine-mobile`.

## Organizational relevance
Part of the [[teams/divine]] organization — Divine's short-form video social platform on Nostr.

## History
- 2026-05-10: 2026-05-07 → 2026-05-10 daily ingestion (`data/raw/github/daily/2026-05-10/divinevideo/divine-mobile/`) captured 56 commits, 78 updated PRs, 100 updated issues, and release **1.0.12** (published 2026-05-08): comments/replies + reply notifications, audio picker with search and saved sounds, two new bundled tracks, divine.video handle improvements. Commit-window contributors: [[people/rabble]], [[people/realmeylisdev]], [[people/notthatkindofdrliz]], [[people/untreu2]], [[people/mbradley]], [[people/hm21]], `evgenibir`, `Chardot` *(both occasional; no page yet)*.
- 2026-05-07: Page created from `data/raw/github/org-discovery/2026-05-07/divinevideo/github-org-discover.json` (discovery run via [[tools/github-org-discover]]).

- 2026-05-11: `data/raw/github/daily/2026-05-11/divinevideo/divine-mobile/` captured **54 commits** in the 72h window and release **1.0.13** (published 2026-05-10). Commit themes: video-editor audio extraction, DM auto-sweep of failed outgoing states, profile memCacheWidth fix, notification row styling, IdentitySkeletonizer component, pro_video_editor bump to 1.16.1, liker/reposter list in video. Committers: [[people/rabble]], [[people/realmeylisdev]], [[people/notthatkindofdrliz]], [[people/hm21]], [[people/mbradley]], [[people/untreu2]], `evgenibir`, `Chardot`.

- 2026-05-17: `data/raw/github/daily/2026-05-17/divinevideo/divine-mobile/` captured **14 commits** in the 24h window. Themes: notification auth refresh and stable cursors (#4451), optimized video playback URLs (#4461), feed auto-advance on active loop (#4454), push control events to Divine relay with relay OK handling (#4410), prefer named actors in grouped notification rows (#4448), inline comment composer + fullscreen layout polish (#4424), redesign video metadata editing (#4322), fix timeline reset after clip adjustment/duplication (#4351), local nsec export fix for Keycast-backed accounts (#4444), keep staging API on staging relay (#4441), redesign video info metadata sheet to match Figma (#4422), fix user reports emitting invalid NIP-56 e tags (#4421), harden notification row localization and large-font layout (#4412), default `useLegacySurface` to true on Android to close FlutterJNI renderer race. Committers: [[people/rabble]] (5), [[people/dcadenas]] (3), [[people/realmeylisdev]] (1), Sebastian Heit (2), Alex Frei (2), Liz Sweigart (1), Meylis (1).

## Open questions
- Who is the named maintainer (beyond top contributors by volume)?
- Runtime deployment: where is this service hosted?
- Direct dependencies / upstream services in the Divine stack?
