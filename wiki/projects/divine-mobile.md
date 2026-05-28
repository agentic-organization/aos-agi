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
- 2026-05-11: `data/raw/github/daily/2026-05-11/divinevideo/divine-mobile/` captured **54 commits** in the 72h window and release **1.0.13** (published 2026-05-10). Commit themes: video-editor audio extraction, DM auto-sweep of failed outgoing states, profile memCacheWidth fix, notification row styling, IdentitySkeletonizer component, pro_video_editor bump to 1.16.1, liker/reposter list in video. Committers: [[people/rabble]], [[people/realmeylisdev]], [[people/notthatkindofdrliz]], [[people/hm21]], [[people/mbradley]], [[people/untreu2]], `evgenibir`, `Chardot`.
- 2026-05-20: Daily ingestion (`data/raw/github/daily/2026-05-20/divinevideo/divine-mobile/`) shows **10 commits** by [[people/hm21]], [[people/rabble]], [[people/notthatkindofdrliz]], and github-actions[bot]. Themes: fix tags search input reset when suggestion tapped (#4569), macOS data-protection keychain fix (#4574), audio extraction routing to AudioSourceConfig.file (#4395/#4549), prevent audio session interference during recording (#4548), restore popular feed pagination (#4492). **46 issues updated** including server-backed video sort (#4572).

- 2026-05-21: Daily ingestion (`data/raw/github/daily/2026-05-21/divinevideo/divine-mobile/`) shows **8 commits** by [[people/realmeylisdev]] and [[people/mbradley]]. Themes: DM Bloc error classification via Reportable matrix (#4597), search idle placeholder fix (#4290), Nostr client init race recovery for reporting (#4587), error-handling per-layer failure contract docs (#4581), flutter_local_notifications v19→v21 bump (#4579), notification badge cubit/bloc convergence tests (#4562), notification a11y/theming cleanup (#4558), parseFcmPayload testable refactor (#4563). **35 issues updated**.
- 2026-05-22: Daily ingestion (`data/raw/github/daily/2026-05-22/divinevideo/divine-mobile/`) shows **25 commits** and release **1.0.14** (version bump #4617). Themes: server-backed video sort (#4572), C2PA "do not train" assertion (#4613), clip trash bin with 30-day retention (#4546), notification mark-all-read on leave + sync fix (#4573), restricted content overlay actions (#4566), provider-backed sound library hook (#4540), video-editor volume editing (#4578), keycast mid-session token refresh on 401/app resume (#4589), upload retryCount increment (#4583), age-verification unlock for adult categories (#4582), Riverpod/BLoC migration boundaries (#4584), and Bloc error classification via Reportable matrix across notifications, DM, profile-editor, video-editor, welcome, publish, and state modules. **57 issues updated**. Committers: [[people/rabble]], [[people/realmeylisdev]], [[people/notthatkindofdrliz]], [[people/hm21]], [[people/mbradley]], [[people/untreu2]].
- 2026-05-28: Daily ingestion (`data/raw/github/daily/2026-05-28/divinevideo/divine-mobile/`) shows **5 commits** by [[people/realmeylisdev]], emir yorulmaz, and [[people/dcadenas]], plus **27 issues updated**. Merged PRs: preserve normalized payload on foreground local notification taps (#4757/#4728), remove legacy bare-string payload fallback (#4718), keep publish flow alive during expired-session recovery (#4714), migrate NotificationSettingsScreen to a Cubit (#4749), move emulator launch and stack setup into e2e scripts (#4761). Themes: notification-system hardening (payload normalization, legacy fallback removal), auth resilience (expired-session recovery), state-layer migration (Cubit), and e2e infrastructure. Open issues include voice-over feature (#1923/#4781), digital zoom in editor (#2050), clip sound loss (#4779), and account availability post-login (#4782).

## Open questions
- Who is the named maintainer (beyond top contributors by volume)?
- Runtime deployment: where is this service hosted?
- Direct dependencies / upstream services in the Divine stack?
