# Divine

**Canonical id:** `team_divine`
**Type:** GitHub organization + engineering team · **Steward:** [[teams/foundry]] · **Organization:** [[teams/and-other-stuff]]
**Website:** [divine.video](https://divine.video) · **Contact:** contact@divine.video

## Summary
The [divinevideo](https://github.com/divinevideo) GitHub organization — home of the [[projects/divine]] product: a short-form social-video platform on Nostr. The org hosts 27 active repositories (none archived) covering mobile and web clients plus a full back-end stack of auth (Keycast), storage (Blossom), moderation, relay management, push notifications, naming, cross-posting, and badges.

Org creation: 2025-11-18. Currently 4 publicly-visible members and 26 recurring human contributors active within a 180-day window, plus 3 known automation/bot accounts.

## Relationship to AOS
- Steward: [[teams/foundry]] — Divine is a listed Foundry project.
- Cross-team ties: [[people/erskingardner]] (lead of [[teams/marmot-protocol]]) is a significant contributor to [[projects/keycast]]; [[projects/shakespeare]] automation (`shakespeare-diy`) appears as a code contributor on [[projects/divine-web]] and [[projects/divine-space]].

## Members

### Publicly-visible org members
- [[people/rabble]]
- [[people/mbradley]]
- [[people/NotThatKindOfDrLiz]]
- [[people/redaranj]] *(no active contributions in window — stub)*

### Active recurring contributors (last 180 days)

Full-stack / cross-repo:
- [[people/rabble]] — lead contributor; active across 23 repos.
- [[people/NotThatKindOfDrLiz]] — cross-repo release/ops work; present in nearly every repo.
- [[people/dcadenas]] — auth and infrastructure services (keycast, push, signer, name-server, login).
- [[people/mbradley]] — services (moderation, relay manager, name server, blossom).

Mobile-focused ([[projects/divine-mobile]]):
- [[people/realmeylisdev]], [[people/hm21]], [[people/omartinma]], [[people/B0berman]], [[people/JohnWeidner]], [[people/ryzizub]], [[people/Josh-Sanford]]

Web-focused ([[projects/divine-web]]):
- [[people/elphiethewitch]], [[people/dogelover911]], [[people/samthomson]], [[people/franbis]], [[people/Zyphrenn]]

Services and infra:
- [[people/sergey3bv]] — moderation, push, blossom, keycast.
- [[people/irab]] — keycast, divine-blossom.
- [[people/samchristenoliphant]] — divine-github-actions, keycast.
- [[people/tkhumush]] — divine-relay-manager.
- [[people/GitKalle]] — keycast.
- [[people/TheSeydiCharyyev]] — moderation, name-server.

Cross-team:
- [[people/erskingardner]] — [[projects/keycast]] (primary affiliation is [[teams/marmot-protocol]]).

### Occasional contributors (single small contribution in window)
`felixzieger` (keycast), `DSanich` (divine-moderation-service), `nbenmoody` (divine-push-service) — mentioned here for completeness, no standalone pages.

### Bot / automation accounts
- `rabble-claw` — appears as a committer on several repos. Likely [[people/rabble]]'s [[projects/clawi]] agent acting on his behalf. Confirm and document.
- `shakespeare-diy` — appears on [[projects/divine-web]] and [[projects/divine-space]]. Likely the [[projects/shakespeare]] AI-first dev platform making commits.
- `verse-ci` — appears on [[projects/divine-push-service]]. Likely a CI/deployment system. Identity to be confirmed.

## Projects

### Clients
- [[projects/divine-mobile]] — Flutter mobile app (renamed successor of `rabble/nostrvine`).
- [[projects/divine-web]] — TypeScript web client.
- [[projects/divine-space]] — MySpace-inspired video social network layer.

### Authentication
- [[projects/keycast]] — Rust OAuth/Nostr signing service.
- [[projects/divine-login]] — TypeScript OAuth client for Keycast.
- [[projects/divine-signer]] — signer component of the Divine auth stack.
- [[projects/divine-identify-verification-service]] — identity verification.

### Storage
- [[projects/divine-blossom]] — Blossom-protocol video hosting (Rust).
- [[projects/divine-upload-server]] — resumable upload data plane for Divine Blossom.

### Content moderation
- [[projects/divine-moderation-service]] — human-in-the-loop moderation service.
- [[projects/divine-moderation-api]] — public API in front of the service.
- [[projects/divine-realness]] — multi-provider AI-video (deepfake) detector.

### Nostr infrastructure
- [[projects/divine-relay-manager]] — relay management interface.
- [[projects/divine-relay-sync]] — NIP-77 negentropy sync between relays.
- [[projects/divine-router]] — traffic router.
- [[projects/divine-rest-gateway]] — REST caching proxy for Nostr on Cloudflare Workers.
- [[projects/divine-sky]] — umbrella for cloud/edge components.
- [[projects/divine-name-server]] — Nostr name-server.
- [[projects/divine-name-sync]] — companion sync service.
- [[projects/divine-push-service]] — push notifications for the mobile app.

### User-facing features
- [[projects/divine-badges]] — NIP-58 creator badges (Diviner of the Day/Week/Month).
- [[projects/divine-clips]] — cross-platform clipping marketplace.

### Meta / support (no standalone project pages)
- `divinevideo/.github` — organization meta.
- `divinevideo/brand-guidelines` — brand DNA, tone of voice, visual identity.
- `divinevideo/divine-github-actions` — reusable GitHub Actions for Divine repos.
- `divinevideo/keycast_flutter_demo` — demo app for Keycast Flutter library.
- `divinevideo/social-media-age-rules-db` — global age-regulations database (possibly shared tooling).

## Platform / tech coverage observed
- **Flutter / Dart** — [[projects/divine-mobile]], `keycast_flutter_demo`.
- **TypeScript** — [[projects/divine-web]], [[projects/divine-login]], [[projects/divine-signer]], [[projects/divine-space]], naming services, etc.
- **Rust** — [[projects/keycast]], [[projects/divine-blossom]], [[projects/divine-upload-server]], [[projects/divine-clips]], [[projects/divine-relay-sync]], [[projects/divine-rest-gateway]], [[projects/divine-router]], [[projects/divine-sky]], [[projects/divine-push-service]].
- **JavaScript** — [[projects/divine-moderation-service]], [[projects/divine-moderation-api]], [[projects/divine-badges]], [[projects/divine-name-sync]].
- **Cloudflare Workers** — several edge/Nostr services explicitly target this runtime (badges, REST gateway).

## Concentration observations
- [[people/rabble]] contributes across the widest surface by a large margin (23 of 27 repos, 2270 contributions in the window — roughly ~3× the next contributor).
- [[people/NotThatKindOfDrLiz]] has light-but-universal presence (27 of 27 repos), suggestive of release engineering / cross-repo ops.
- [[people/dcadenas]] owns the auth stack (keycast, push, signer, name-server, login).
- Mobile and web front-ends each have a dedicated cluster of contributors who only touch those surfaces.

Stated descriptively; not a verdict.

## Ingestion provenance
- Discovery run: `data/raw/github/divinevideo-2026-05-07.json`.
- Tool: [[tools/github-org-discover]].

## Open questions
- What is the actual maintainer structure — is rabble the sole decision-maker, or is there a steering group with dcadenas / mbradley / NotThatKindOfDrLiz?
- Funding and employment model per contributor.
- Communication: where does the team coordinate — Nostr, Telegram, Signal, Matrix?
- Deployment architecture — which services run on Cloudflare Workers, which on traditional cloud?
- `rabble-claw`, `shakespeare-diy`, `verse-ci` — confirm identities and ownership of these automation accounts.
- The andotherstuff.org Foundry card still points at `rabble/nostrvine`; update to reflect `divinevideo/*` organization.
