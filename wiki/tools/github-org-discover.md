# github-org-discover

**Canonical id:** `tool_github-org-discover`
**Type:** ingestion script (discovery) · **Status:** active
**Source:** [`tools/ingestion/github-org-discover.js`](../../tools/ingestion/github-org-discover.js)
**Skill:** [`.agents/skills/github-org-discovery`](../../.agents/skills/github-org-discovery/SKILL.md)

## Summary
Maps a GitHub organization — repositories, members, and recently-active contributors — into a single JSON document. Used as the first pass when bootstrapping a team in the wiki.

## Output shape
```
{
  org: { login, name, description, html_url, public_repos, ... },
  discovered_at: ISO timestamp,
  parameters: { include_archived, include_forks, exclude, recent_days, ... },
  repositories: [ { name, full_name, description, language, stars, archived, fork,
                    pushed_at, topics, license, top_contributors: [...] } ],
  members:      [ { login, html_url, avatar_url } ],
  active_contributors: [ { login, repos: [...], total_contributions } ]
}
```

## Usage

```bash
GITHUB_TOKEN=$(gh auth token) \
  node tools/ingestion/github-org-discover.js <org> \
  --contributors-top 10 --recent-days 180 \
  > data/raw/github/org-discovery/<YYYY-MM-DD>/<org>/github-org-discover.json
```

Key flags:
- `--include-archived` — include archived repos (default off).
- `--include-forks` — include forks (default off).
- `--exclude <names>` — comma-separated repo names to drop.
- `--contributors-top N` — how many top contributors per repo (default 5).
- `--recent-days N` — recency window for `active_contributors` (default 90).
- `--no-members` — skip the public org member listing.

## Signals emitted
- **Repository inventory** — drives [[projects/*]] page creation.
- **Top contributors per repo** — drives [[people/*]] page creation and project ownership inference.
- **`active_contributors` aggregation** — who is actually shipping across the org right now, across how many repos.
- **`topics`** on each repo — seeds concept tags on the resulting project page.
- **`pushed_at`** — activity recency, useful for the "active vs. dormant" split.

## History
- Introduced 2026-05-07 alongside the discovery of [[teams/marmot-protocol]].
- First consumer: the marmot-protocol discovery run stored at `data/raw/github/org-discovery/2026-05-07/marmot-protocol/github-org-discover.json`.

## Open questions
- Should contributor sampling paginate beyond the default 100 cap on `/contributors`?
- Should we compute a "platform language" breakdown per org (aggregate of per-repo languages)?
- Should we capture each repo's README first paragraph to seed project summaries?
