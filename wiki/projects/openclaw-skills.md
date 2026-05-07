# OpenClaw Skills

**Status:** active · **Hub:** [[teams/foundry]] · **Owner team:** [[teams/soapbox]] · **Organization:** [[teams/and-other-stuff]]

## Summary
A pack of "skills" that enhance [[projects/openclaw]] (the agent runtime that powers [[projects/clawi]]) — described as letting OpenClaw use OpenCode, MKStack, and similar tooling. This is one of the clearest **cross-team contributions** observed so far in the AOS graph: Soapbox shipping capability into Clawi's runtime.

## Repository
- GitHub: [soapbox-pub/openclaw-skills](https://github.com/soapbox-pub/openclaw-skills) (last push 2026-01-31)

## Tags / concepts
[[concepts/agent-skills]] · [[concepts/cross-team-bridge]]

## Contributors
[[people/alexgleason]] (14)

## Related systems
- [[projects/openclaw]] — the runtime these skills target
- [[projects/clawi]] — the consumer-facing AOS app on top of OpenClaw
- [[projects/shakespeare]] — sibling Soapbox project that may share skill-loading patterns

## Organizational relevance
Concrete example of the AOS Foundry pattern at work: one team (Soapbox) writes skills; another team's app (Clawi) consumes them. Worth tracking because if this pattern grows, "AOS skills" may become a first-class concept in the wiki ontology.

## History
- 2026-05-07: Page created from `soapbox-pub` GitHub discovery snapshot.

## Open questions
- Distribution mechanism — npm package, jsr, repo-fetch, or built-in?
- Governance — does Clawi's team review what skills land here, or is it Soapbox-managed end-to-end?
