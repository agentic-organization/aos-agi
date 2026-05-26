# Ditto

**Status:** active · **Hub:** [[teams/foundry]] · **Owner team:** [[teams/soapbox]] · **Organization:** [[teams/and-other-stuff]]

## Summary
A fully customizable social platform built on Nostr — a Nostr client framed for community-server hosting. Custom themes, Lightning payments, and an ever-growing set of content types, with an explicit "your content, your vibe, your rules" framing. Made by [[teams/soapbox]].

## Websites
- App: [https://ditto.pub](https://ditto.pub)
- Docs: [https://docs.ditto.pub](https://docs.ditto.pub)

## Repositories
- **Canonical (source of truth):** GitLab — [soapbox-pub/ditto](https://gitlab.com/soapbox-pub/ditto)
- **GitHub mirror:** [soapbox-pub/ditto](https://github.com/soapbox-pub/ditto) (TypeScript, 55 stars, last push 2026-05-07)

> Activity figures below come from the GitHub mirror. Because the project mirrors push-style from GitLab, commit authorship is preserved, but issue/PR conversation lives on GitLab.

## Tags / concepts
[[concepts/social]] · [[concepts/nostr]] · [[concepts/customization]]

## Top observed contributors (last ~90 days, GitHub mirror)
[[people/alexgleason]] (1255) · [[people/shakespeare-diy]] (503) · [[people/Danidfra]] (441) · [[people/marykatefain]] (284) · [[people/happylemonprogramming]] (112)

## Communication
- (channels unknown — Soapbox-side coordination likely on Nostr / Soapbox-run channels; to be discovered)

## Related systems
- [[projects/nostrify]] — Soapbox's Nostr framework, used as Ditto's underlying library
- [[projects/shakespeare]] — sibling Soapbox project; sometimes contributes patches via the `shakespeare-diy` automation account

## Required capabilities / skills
- [[skills/nostr]]
- [[skills/typescript]]
- [[skills/social]]

## Organizational relevance
Ditto is one of AOS's **Foundry** projects, owned and operated by [[teams/soapbox]] (Alex Gleason's project label). Soapbox's earlier "soapbox" Mastodon-fork client has effectively been succeeded by Ditto on the active-development axis.

## History
- 2026-05-11: GitHub mirror activity via `data/raw/github/daily/2026-05-11/soapbox-pub/ditto/`: **9 commits** in the 72h window, including releases **v2.14.0** (2026-05-09) and **v2.14.1** (2026-05-11). Commit themes: repost header on reposted reactions/zaps/reposts, on-chain zaps (kind 8333) as notifications, Restore button for embedded snapshot card recovery, event recovery dialog layout tightening, `e` tag in draft article deletion events, avatar-to-profile links preferring `naddr`.
- 2026-05-19: Daily ingestion (`data/raw/github/daily/2026-05-19/soapbox-pub/ditto/`) shows **2 commits** by [[people/alexgleason]]. Major feature: "Zap all members" on-chain batch action on people-list events (kind 3, 30000, 39089) — builds a single Taproot PSBT paying every listed member, publishes one kind 8333 event with all recipients as `p` tags, and renders multi-recipient zap cards with avatar stacks. Also includes verification updates for multi-recipient sums and NIP-BC spec alignment.
- 2026-05-07: Page expanded from Foundry stub using [`tools/ingestion/github-org-discover.js`](../tools/github-org-discover.md) snapshot of `soapbox-pub` (`data/raw/github/org-discovery/2026-05-07/soapbox-pub/github-org-discover.json`).
- 2026-05-07: Original Foundry-listing stub created from andotherstuff.org.

- 2026-05-11: Daily ingestion (`data/raw/github/daily/2026-05-11/soapbox-pub/ditto/`) shows **2 commits** by [[people/alexgleason]] and **1 release** v2.14.0 (and follow-up v2.14.1). Commits: "Add 'Zap all members' on-chain action to people-list events" (kind 8333 batch zaps), and "Add VIEW action on payment success".
- 2026-05-21: Daily ingestion (`data/raw/github/daily/2026-05-21/soapbox-pub/ditto/`) shows **2 commits** by [[people/alexgleason]]: show per-recipient share for multi-recipient on-chain zap notifications (kind 8333 batch fix), and add 'View' action to post success toast.
- 2026-05-22: Daily ingestion (`data/raw/github/daily/2026-05-22/soapbox-pub/ditto/`) shows **10 commits** by [[people/alexgleason]]. Major Bitcoin wallet surface work: BIP-352 silent payment sends, BIP-375 ECDH share + DLEQ proof attachment to signed SP PSBTs, PSBT v2 extraction with @scure/btc-signer (replacing bitcoinjs-lib), QR code scanning for wallet Send recipient, Bitcoin APIs editor in Wallet settings, Esplora REST failover with abort signals/timeouts. **100 events** in the 24h window.

- 2026-05-12: `data/raw/github/daily/2026-05-12/soapbox-pub/ditto/` captured **2 commits** in the 24h window (GitHub mirror). Themes: truncate version-update toast excerpt to 60 characters, fetch BTC price from mempool.space instead of CoinGecko. Committers: [[people/alexgleason]].

- 2026-05-14: `data/raw/github/daily/2026-05-14/soapbox-pub/ditto/` captured **6 commits** in the 24h window (GitHub mirror). Themes: zap amounts displayed as USD by default with unified on-chain/Lightning icon, reaction and zap overlays consistently across all feeds, feed toggles for reactions and zaps, zap amounts in notifications linked to underlying events, Mute All dropdown next to Follow All buttons. Committers: [[people/alexgleason]].

- 2026-05-15: `data/raw/github/daily/2026-05-15/soapbox-pub/ditto/` captured **8 commits** in the 24h window (GitHub mirror), including releases **v2.15.0** and **v2.15.1**. Themes: NIP-51 badge-set rendering (kind 30008) distinct from legacy NIP-58 badges, badge-set hero banner resized to 3:1 poster-style cover art, badge-definition query grouping for large sets, reaction/zap overlays extended to search feed, iOS App Store auto-release via Fastlane. Committer: [[people/alexgleason]] (all 8).

- 2026-05-16: `data/raw/github/daily/2026-05-16/soapbox-pub/ditto/` captured **10 commits** in the 24h window (GitHub mirror), including releases **v2.15.2** (2026-05-15). Themes: per-item error boundaries in feeds/embedded events to prevent one broken post from crashing the entire feed; page-level error boundary around the center column to keep sidebar/navigation interactive when content fails; `parseAddr` utility extracted and used across ~10 call sites for kind:pubkey:identifier address parsing with hex validation; MessageCircle icon for kind 1111 comment notifications; PostDetailPage error boundary for kind-dispatch so broken articles/zapstore releases don't blank the whole route. Committer: [[people/alexgleason]] (all 10).

- 2026-05-17: `data/raw/github/daily/2026-05-17/soapbox-pub/ditto/` captured **8 commits** in the 24h window (GitHub mirror), including release **v2.16.0** (2026-05-17). Themes: render zap roots in comment context as "{amount} zap by @{sender}", make NoteCard's standalone zap branch kind-aware (fixes "Anonymous zapped"), give profile-zap notifications a recipient card body, fall back to profile-zap card when a zap's target note is unreachable, render profile-targeted zaps as standalone feed cards, point Bitcoin send success "View transaction" at the in-app tx page, redesign wallet Send dialog to mirror the on-chain zap UI. Committer: [[people/alexgleason]] (all 8).
- 2026-05-24: Daily ingestion (`data/raw/github/daily/2026-05-24/soapbox-pub/ditto/`) captured **11 commits** by [[people/alexgleason]], including releases **v2.17.0** and **v2.18.0**. Themes: Agora Fundraiser support (kind 33863) with donate QR, "Open in Wallet" BIP-21 links, and Donate-button dialog; BIP-21 `sp=` silent-payment parameter honored in Send QR scanner; Zap Fundraisers from Ditto's built-in wallet; pull Fundraiser "raised" total from the campaign's on-chain address. **100 events** in the 24h window.
- 2026-05-25: Daily ingestion (`data/raw/github/daily/2026-05-25/soapbox-pub/ditto/`) captured **91 PushEvents** on the GitHub mirror (reflecting heavy GitLab upstream activity) and **1 default-branch commit** by [[people/alexgleason]]: "Switch to the newly added account when logging in". **100 events** total in the 24h window — all PushEvents by alexgleason, silentius-satoshi, and 2three1y. This is the highest push-event volume seen on the mirror to date.
- 2026-05-26: Daily ingestion (`data/raw/github/daily/2026-05-26/soapbox-pub/ditto/`) captured **5 commits** by [[people/alexgleason]]. Themes: BIP-21 URI parsing in Send recipient field, suppress profile search when recipient is an address/URI, surface both `sp` and `bc1` rows when a BIP-21 URI carries both, soften raw-Bitcoin-address privacy notice, portal the Send-recipient dropdown outside the dialog body (UI layering). **100 events** in the 24h window.

## Open questions
- Where do Ditto contributors discuss day-to-day work — Nostr group, Discord/Matrix, GitLab issues only?
- Who currently runs the flagship `ditto.pub` instance and what is its operational footprint?
- Relationship to the legacy `soapbox` Mastodon-fork client: full deprecation, or maintenance mode?
