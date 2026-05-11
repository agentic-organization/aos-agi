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
- 2026-05-07: Page expanded from Foundry stub using [`tools/ingestion/github-org-discover.js`](../tools/github-org-discover.md) snapshot of `soapbox-pub` (`data/raw/github/org-discovery/2026-05-07/soapbox-pub/github-org-discover.json`).
- 2026-05-07: Original Foundry-listing stub created from andotherstuff.org.

- 2026-05-11: GitHub mirror activity via `data/raw/github/daily/2026-05-11/soapbox-pub/ditto/`: **9 commits** in the 72h window, including releases **v2.14.0** (2026-05-09) and **v2.14.1** (2026-05-11). Commit themes: repost header on reposted reactions/zaps/reposts, on-chain zaps (kind 8333) as notifications, Restore button for embedded snapshot card recovery, event recovery dialog layout tightening, `e` tag in draft article deletion events, avatar-to-profile links preferring `naddr`.

## Open questions
- Where do Ditto contributors discuss day-to-day work — Nostr group, Discord/Matrix, GitLab issues only?
- Who currently runs the flagship `ditto.pub` instance and what is its operational footprint?
- Relationship to the legacy `soapbox` Mastodon-fork client: full deprecation, or maintenance mode?
