# Shakespeare

**Status:** active · **Hub:** [[teams/foundry]] · **Owner team:** [[teams/soapbox]] · **Organization:** [[teams/and-other-stuff]]

## Summary
An open-source AI app builder that runs entirely in the browser — a React PWA that lets users assemble React apps via natural-language prompts against any AI provider (OpenAI, Anthropic, OpenRouter, xAI, ZAI, Deepseek, others). Credits can be bought anonymously via Nostr + Lightning. The companion automation account `shakespeare-diy` is observed contributing code to other AOS projects (notably [[projects/ditto]] and several Divine repos), suggesting Shakespeare is increasingly used to *build* sibling AOS apps.

## Websites
- App: [https://shakespeare.diy](https://shakespeare.diy)

## Repositories
- **Canonical (source of truth):** GitLab — [soapbox-pub/shakespeare](https://gitlab.com/soapbox-pub/shakespeare)
- **GitHub mirror:** [soapbox-pub/shakespeare](https://github.com/soapbox-pub/shakespeare) (TypeScript, 18 stars, last push 2026-04-12)

> Activity figures below come from the GitHub mirror; conversation lives on GitLab.

## Tags / concepts
[[concepts/ai]] · [[concepts/nostr]] · [[concepts/web-development]]

## Top observed contributors (last ~90 days, GitHub mirror)
[[people/alexgleason]] (1512) · [[people/shakespeare-diy]] (69) · [[people/samthomson]] (61) · [[people/happylemonprogramming]] (32) · [[people/DanConwayDev]] (28)

## Related systems
- [[projects/nostrify]] — Soapbox's Nostr framework
- [[projects/openclaw-skills]] — bridge skill pack so Shakespeare-style flows can be invoked from Clawi
- [[projects/clawi]] — sister AOS project that consumes the `openclaw-skills` pack

## Automation accounts
- `shakespeare-diy` — bot account that appears as a contributor wherever Shakespeare itself is used to author code. See [[people/shakespeare-diy]] for cross-org observations.

## Required capabilities / skills
- [[skills/ai]]
- [[skills/nostr]]
- [[skills/web-development]]
- [[skills/typescript]]

## Organizational relevance
A **Foundry** project owned by [[teams/soapbox]]. Strategically central because Shakespeare is the AOS-blessed surface for "build with AI on Nostr" — it functionally pairs with [[projects/clawi]] (agent runtime) and [[projects/ditto]] (social client) as Soapbox's contribution to the AOS Foundry triad.

## History
- 2026-05-07: Page expanded from Foundry stub using `soapbox-pub` discovery snapshot (`data/raw/github/org-discovery/2026-05-07/soapbox-pub/github-org-discover.json`).
- 2026-05-07: Original Foundry-listing stub created from andotherstuff.org.

## Open questions
- Cadence and roadmap of Shakespeare releases (no obvious changelog visible from mirror alone).
- Architecture relationship to [[projects/clawi]] — separate engines, or convergence planned?
- Whether AOS projects increasingly use `shakespeare-diy` as a CI-style code-author and what governance applies to its commits.
