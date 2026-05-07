# Nostrify

**Status:** active · **Hub:** [[teams/foundry]] · **Owner team:** [[teams/soapbox]] · **Organization:** [[teams/and-other-stuff]]

## Summary
Soapbox's TypeScript framework for building on Nostr — "Bring your projects to life on Nostr." Used as the underlying Nostr layer by [[projects/ditto]] and other Soapbox apps. Like Soapbox's other primary projects, the GitHub repo is described in its own README as a **mirror of the source on GitLab**.

## Repositories
- **Canonical:** GitLab — [soapbox-pub/nostrify](https://gitlab.com/soapbox-pub/nostrify)
- **GitHub mirror:** [soapbox-pub/nostrify](https://github.com/soapbox-pub/nostrify) (TypeScript, 14 stars, last push 2026-05-05)

## Tags / concepts
[[concepts/nostr]] · [[concepts/typescript]] · [[concepts/framework]]

## Top observed contributors (last ~90 days, GitHub mirror)
[[people/alexgleason]] (878) · [[people/xyzshantaram]] (141) · [[people/patrickReiis]] (6) · [[people/sergey3bv]] (2) · [[people/marykatefain]] (1)

## Related systems
- [[projects/ditto]] — primary downstream consumer
- [[projects/shakespeare]] — also Soapbox-built on Nostr; likely shares patterns with Nostrify even if not a direct dependency

## Required capabilities / skills
- [[skills/nostr]]
- [[skills/typescript]]

## Organizational relevance
The **library layer** of the Soapbox stack. Anyone building Nostr apps inside [[teams/soapbox]] picks up Nostrify by default; cross-team adoption (Divine, Marmot, Cashu) is currently unknown and worth checking.

## History
- 2026-05-07: Page created from `soapbox-pub` GitHub discovery snapshot.

## Open questions
- Adoption outside Soapbox — does any Marmot-protocol, Divine, or Cashu project depend on it?
- Release/versioning cadence (npm? jsr? GitLab releases?).
