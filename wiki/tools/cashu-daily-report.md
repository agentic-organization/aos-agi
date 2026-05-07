# cashu-daily-report

**Canonical id:** `tool_cashu-daily-report`
**Type:** ingestion script (operational tool) · **Status:** active
**Owner:** [[people/callebtc]] · **Team:** [[teams/cashu-core]]

## Summary
Daily summary of activity in the [cashubtc](https://github.com/cashubtc) GitHub organization. The script queries the GitHub REST API for a fixed set of repositories, filters to PRs and issues updated in the last 24 hours, and renders a compact human-readable report.

Implementation: [`tools/ingestion/cashu-daily-report.js`](../../tools/ingestion/cashu-daily-report.js).

## Tracked repositories (default)
- `cashubtc/Numo`
- `cashubtc/cashu-ts`
- `cashubtc/cdk`
- `cashubtc/coco`
- `cashubtc/cashu.me`
- `cashubtc/nuts`
- `cashubtc/nutshell`
- `cashubtc/BTCNutServer`

These are the 8 repos currently on the "watched core" list. The set is overridable at runtime via `CASHU_REPORT_REPOS`.

## What it reports
For each repository, within the last 24h (configurable):

- **Updated open PRs** — with draft flag, title, and author/assignees.
- **Merged PRs** — title and author/assignees.
- **Updated open issues** (excluding PRs) — title and author/assignees.

A per-repo total and a per-invocation summary line are included.

## Delivery
- **Dry run** (default) — prints to stdout.
- **`--send-dm`** — sends via [[tools/openclaw-message-gateway]] through the `telegram` channel to the target in `CASHU_REPORT_TG_TARGET`. In the current deployment the target is [[people/callebtc]] (see [[communication/cashu-daily-report-dm]]).
- **`--send-group`** — reserved; no group target is configured in the current deployment.

## Signals this tool emits
This is a first-class ingestion source for the agent. Each run produces signals useful to downstream synthesis:

- **Per-repo activity volume** → contributes to [[projects/cashu]] velocity tracking.
- **Author/assignee handles** → feeds identity and collaboration graphs for [[people/*]] under [[teams/cashu-core]].
- **PR merge cadence** → contributes to ownership inference (who merges what, where).
- **Issue churn** → early signal for scope and risk observations on the [[projects/cashu]] page.

The agent's synthesis step integrates these signals into the wiki and graph; the script itself is stateless.

## Relationship to other tools
- Produces the message body for [[communication/cashu-daily-report-dm]].
- Runs under [[tools/openclaw-message-gateway]] when delivery is enabled.
- Related to (future) [[tools/github-org-snapshot]] — a deeper pass over the same org for identity resolution and ownership.

## History
- Originally a personal one-off script (`cashu-report.js`) with a hardcoded Telegram chat ID.
- Moved into the org-memory repo under `tools/ingestion/` and parameterized via env vars (`CASHU_REPORT_TG_TARGET`, `CASHU_REPORT_HOURS`, `CASHU_REPORT_REPOS`, `GITHUB_TOKEN`).

## Open questions
- What is the current run cadence — cron? manual? Clawi skill?
- Should `coco` be tracked here (the report lists it) even though `coco` is surfaced via [[people/egge21m]] rather than the cashubtc org?
- Should the default repo list expand to include wallets tracked elsewhere (`minibits-cash/minibits_wallet`, `zeugmaster/macadamia`)?
- Should the output format be versioned (v1 text → v2 Markdown/JSON) so synthesis can parse it reliably?
