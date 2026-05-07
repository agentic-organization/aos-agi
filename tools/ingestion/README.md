# tools/ingestion

Source-specific data fetchers for the Organization Intelligence Agent. Each script pulls from one source (GitHub, Slack, etc.), emits a derived artifact (a report, a dump, a JSON record), and does **not** write into `wiki/` or `graph/` directly — synthesis is a separate step.

## Scripts

### `cashu-daily-report.js`

Fetches the last 24 hours of PR and issue activity across a fixed set of [cashubtc](https://github.com/cashubtc) repositories and renders a human-readable report. Optionally delivers it through the OpenClaw message gateway.

**Tracked repos (default):** `Numo`, `cashu-ts`, `cdk`, `coco`, `cashu.me`, `nuts`, `nutshell`, `BTCNutServer`

**Configuration:**

| Env var | Purpose | Default |
|---|---|---|
| `CASHU_REPORT_HOURS` | Lookback window | `24` |
| `CASHU_REPORT_REPOS` | Comma-separated repo list | the 8 listed above |
| `CASHU_REPORT_TG_TARGET` | Telegram DM/chat ID for `--send-dm` | *unset* |
| `GITHUB_TOKEN` | Optional GitHub token to raise rate limits | *unset* |

**Usage:**

```bash
# Dry run — print to stdout
node tools/ingestion/cashu-daily-report.js

# Send via Telegram DM (requires CASHU_REPORT_TG_TARGET set and openclaw CLI on PATH)
CASHU_REPORT_TG_TARGET=<chat_id> node tools/ingestion/cashu-daily-report.js --send-dm
```

**Captured in the wiki:**
- [[tools/cashu-daily-report]] — tool page.
- [[communication/cashu-daily-report-dm]] — the recurring delivery channel that routes this report to [[people/callebtc]].

**Status:** in use. Previously a standalone script (`cashu-report.js`) with a hardcoded Telegram chat ID; moved into the repo, parameterized via env vars, and integrated into the wiki as of this commit.
