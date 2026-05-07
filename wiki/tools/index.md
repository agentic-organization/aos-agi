# Tools — Index

One page per operational tool the agent knows about (ingestion scripts, synthesis scripts, delivery gateways, third-party SaaS the org relies on).

Pages focus on: purpose, skill mappings, users, related systems, signals emitted.

## Current tools

### Ingestion
- [[tools/cashu-daily-report]] — daily 24h activity scrape of 8 `cashubtc` repos.
- [[tools/github-org-discover]] — maps a GitHub org (repos, members, active contributors) into a single JSON snapshot.

### Delivery / gateways
- [[tools/openclaw-message-gateway]] — `openclaw message send` CLI used by scripts to deliver reports to chat platforms.

## See also
- [[../tools/ingestion/README]] — actual executable scripts (repository path `tools/`).
- [[projects/openclaw]] — the agent engine providing the message gateway.
