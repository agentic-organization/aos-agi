# cashu-daily-report → Calle DM

**Canonical id:** `comm_cashu-daily-report-dm`
**Type:** outbound recurring delivery channel · **Platform:** Telegram (DM)

## Summary
A recurring Telegram direct message that delivers the [[tools/cashu-daily-report]] output to [[people/callebtc]]. Used as Calle's daily situational-awareness feed on cashubtc activity.

## Participants
- **Recipient:** [[people/callebtc]] (Telegram DM — target ID stored outside this repo as `CASHU_REPORT_TG_TARGET`).
- **Sender:** automation running [[tools/cashu-daily-report]] via [[tools/openclaw-message-gateway]].

## Content
See [[tools/cashu-daily-report]] for the full format. Each message contains, over the last 24h:

- A header with UTC date.
- A one-line per-repo summary.
- Per-repo breakdown of updated/merged PRs and updated issues, with author/assignee handles.

## Related
- [[tools/cashu-daily-report]] — the producer.
- [[teams/cashu-core]] — the team whose activity is surveilled.
- [[projects/cashu]] — the project this channel tracks.

## Privacy / scope note
The Telegram chat ID for the recipient is a piece of personal routing information and is **not committed to this repo**. It is sourced at runtime from the `CASHU_REPORT_TG_TARGET` environment variable. Keep it that way when evolving this tool.

## Open questions
- Run cadence (cron, Clawi, ad-hoc)?
- Should there be a second recipient/channel (team-wide), gated by the currently-unused `--send-group` flag?
- Does [[people/callebtc]] react to the report via another channel (replies, edits)? If so, is that reaction ingestible?
