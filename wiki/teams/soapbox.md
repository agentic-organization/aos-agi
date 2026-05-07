# Soapbox (team)

**Status:** active · **Hub:** [[teams/foundry]] · **Organization:** [[teams/and-other-stuff]]

## Summary
Soapbox is the AOS team behind a tightly related family of Nostr-and-Fediverse projects: the social client [[projects/ditto]], the AI app builder [[projects/shakespeare]], the underlying [[projects/nostrify]] framework, and the legacy Mastodon-fork [[projects/soapbox]] client (the project the team takes its name from). It is currently a thin organization — one publicly-listed member, one dominant maintainer — but it ships disproportionately to its head-count, and shows up as a contributor of *capability* (skill packs, Shakespeare-built code) into other AOS teams.

## GitHub presence
- Org: [github.com/soapbox-pub](https://github.com/soapbox-pub)
- Description: "Software for the next generation of social media."
- Org-listed blog: [soapbox.pub](https://soapbox.pub/)
- Twitter (org-listed): @SoapboxTech
- 9 public repos (snapshot 2026-05-07).
- Public org members: only `alexgleason` is listed.

## Source-of-truth note
**Soapbox treats GitLab as canonical for its primary projects, with GitHub as a push-mirror.** The READMEs of [[projects/ditto]] and [[projects/shakespeare]] both link to `gitlab.com/soapbox-pub/...` as the source; [[projects/nostrify]]'s description explicitly calls itself a mirror. Issues and PRs may live on GitLab; the GitHub side reflects authentic commit history but not the conversation layer.

## People
- **Lead/maintainer:** [[people/alexgleason]] (Alex Gleason) — by raw activity, effectively the entire current Soapbox engineering surface.
- **Active contributors (last ~90 days, Soapbox repos):**
  - [[people/Danidfra]] — Ditto front-end
  - [[people/marykatefain]] — Ditto, Nostrify
  - [[people/happylemonprogramming]] — Ditto, Shakespeare
  - [[people/xyzshantaram]] — Nostrify
  - [[people/samthomson]] — Shakespeare *(cross-team with [[teams/divine]])*
  - [[people/DanConwayDev]] — Shakespeare
  - [[people/patrickReiis]] — Nostrify
  - [[people/sergey3bv]] — Nostrify *(cross-team with [[teams/divine]])*
- **Automation accounts:** [[people/shakespeare-diy]] — the Shakespeare project itself, contributing AI-authored code into Soapbox repos *and* into other AOS orgs (notably [[teams/divine]] repos).

## Active projects
- [[projects/ditto]] — Nostr social client (TypeScript)
- [[projects/shakespeare]] — AI app builder (TypeScript)
- [[projects/nostrify]] — Nostr framework (TypeScript)
- [[projects/openclaw-skills]] — skills for [[projects/openclaw]] / [[projects/clawi]]
- [[projects/nostr-skills]] — Nostr-protocol skill pack

## Legacy / lower-velocity projects
- [[projects/soapbox]] — original Mastodon-fork client (last push 2025-12-27)
- [[projects/rebased]] — Pleroma-derived backend in Elixir (last push 2025-04-10)
- `mostr-uptime` — uptime status page for the Mostr bridge (no project page; very low activity)
- `seeded-rsa` — utility library for deterministic RSA keypairs (no project page; ~2023, near-archival)

## Cross-team bridges
- **[[people/samthomson]]** and **[[people/sergey3bv]]** also contribute in [[teams/divine]] — first concrete people-overlap between Soapbox and Divine.
- **[[people/shakespeare-diy]]** appears as a code-contributor in `divinevideo/*` repos as well — the Shakespeare tool is being used to build Divine apps.
- **[[projects/openclaw-skills]]** is Soapbox-maintained but targets [[projects/openclaw]]/[[projects/clawi]] (different team's runtime). One of the cleanest tool-direction bridges in the wiki so far.

## Relationship to other AOS teams
Soapbox occupies the "Nostr toolkit + apps" niche of the AOS Foundry, alongside:

- [[teams/marmot-protocol]] — protocol/messaging-stack focus
- [[teams/divine]] — Nostr video / mobile-product focus
- [[teams/cashu-core]] — payments/ecash focus

Where the others have multiple maintainers and broader org membership, Soapbox concentrates engineering in a single lead with a wider but shallower contributor pool.

## Communication
- (channels unknown — Soapbox-side coordination likely happens on Nostr and/or GitLab issues; concrete channels yet to be confirmed.)

## History
- 2026-05-07: Team page created from `soapbox-pub` GitHub discovery snapshot (`data/raw/github/org-discovery/2026-05-07/soapbox-pub/github-org-discover.json`).

## Open questions
- Is there a wider Soapbox team we don't see (private repos, contractors paid via AOS, etc.)?
- Where do internal Soapbox discussions happen day-to-day?
- Funding flow — does Soapbox draw from the same AOS Foundry pool as Marmot/Divine/Cashu, or is it independently funded?
- Cross-team strategy: to what extent do Marmot, Divine, Cashu use [[projects/nostrify]]? If at all, Soapbox's surface is more central than the head-count suggests.
