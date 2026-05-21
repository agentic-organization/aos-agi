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

- 2026-05-12: `data/raw/github/daily/2026-05-12/divinevideo/divine-mobile/` captured **18 commits** in the 24h window. Themes: notification-system refactor (delete legacy Riverpod stack, dedupe WS-first notifications, complete tap-target routing, retire legacy list-item screens, throw typed API exceptions), profile features (banner upload from setup, linkify profile/list text, pre-seed cached profile), video/editor work (native video-player in feed, metadata screen redesign), canonical subtitle overlay in feed, cache_sync package with follower/following integration, auth copy updates, search per-source fallback outcomes, CI fixes (cupertino_http CocoaPods link, TestFlight group cleanup). Committers: [[people/rabble]], [[people/realmeylisdev]], [[people/notthatkindofdrliz]], [[people/hm21]], [[people/mbradley]].

- 2026-05-14: `data/raw/github/daily/2026-05-14/divinevideo/divine-mobile/` captured **16 commits** in the 24h window. Themes: mentions resolution across surfaces (#4353), safety settings for 18+ playback (#4350), contributor guidance tightening (#4327), For You feed routing through recommendations (#4309), collaborator p-tag construction (#4326), plus additional UI and routing refinements. Committers: [[people/rabble]], Liz Sweigart, Meylis, and other contributors.

- 2026-05-12: `data/raw/github/daily/2026-05-12/divinevideo/divine-mobile/` captured **18 commits** in the 24h window. Themes: notification-system refactor (delete legacy Riverpod stack, dedupe WS-first notifications, complete tap-target routing, retire legacy list-item screens, throw typed API exceptions), profile features (banner upload from setup, linkify profile/list text, pre-seed cached profile), video/editor work (native video-player in feed, metadata screen redesign), canonical subtitle overlay in feed, cache_sync package with follower/following integration, auth copy updates, search per-source fallback outcomes, CI fixes (cupertino_http CocoaPods link, TestFlight group cleanup). Committers: [[people/rabble]], [[people/realmeylisdev]], [[people/notthatkindofdrliz]], [[people/hm21]], [[people/mbradley]].

- 2026-05-15: `data/raw/github/daily/2026-05-15/divinevideo/divine-mobile/` captured **13 commits** and **74 updated issues** in the 24h window. Commit themes: tag-sanitization logging refactor (#4385), linkified text consolidation (#4374), collaborator invite video previews (#4378), fake overlay removal (#4373), profile Report option (#4379), account-scoped cache invalidation (#4361), Nostr side-effect gating on session readiness (#4162), transient invite-retry fixes (#4377), sexual-content moderation label canonicalization (#4367), user-content linkify fixes (#4358). Issues: crashlytics hardening across network images (4401), Android FlutterJNI teardown (3416), malformed media guards (4392/4391), iOS video composition (3410), editor callbacks (4396), profile/invite bloc guards (4393), relay pending-message snapshots (4399), API category safe mapping (4398), recording clip file races (4397), editor audio local-source handling (4395), list cache initialization (4394). Committers: [[people/NotThatKindOfDrLiz]] (6), [[people/rabble]] (4), [[people/realmeylisdev]] (1), [[people/hm21]] (1), [[people/dcadenas]] (1).

- 2026-05-17: `data/raw/github/daily/2026-05-17/divinevideo/divine-mobile/` captured **14 commits** in the 24h window. Themes: notification auth refresh and stable cursors (#4451), optimized video playback URLs (#4461), feed auto-advance on active loop (#4454), push control events to Divine relay with relay OK handling (#4410), prefer named actors in grouped notification rows (#4448), inline comment composer + fullscreen layout polish (#4424), redesign video metadata editing (#4322), fix timeline reset after clip adjustment/duplication (#4351), local nsec export fix for Keycast-backed accounts (#4444), keep staging API on staging relay (#4441), redesign video info metadata sheet to match Figma (#4422), fix user reports emitting invalid NIP-56 e tags (#4421), harden notification row localization and large-font layout (#4412), default `useLegacySurface` to true on Android to close FlutterJNI renderer race. Committers: [[people/rabble]] (5), [[people/dcadenas]] (3), [[people/realmeylisdev]] (1), Sebastian Heit (2), Alex Frei (2), Liz Sweigart (1), Meylis (1).

## Open questions
- Who is the named maintainer (beyond top contributors by volume)?
- Runtime deployment: where is this service hosted?
- Direct dependencies / upstream services in the Divine stack?
