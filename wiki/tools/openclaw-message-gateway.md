# openclaw-message-gateway

**Canonical id:** `tool_openclaw-message-gateway`
**Type:** delivery gateway · **Status:** active (stub)

## Summary
The `openclaw message send` CLI — a delivery primitive that routes messages to chat platforms (Telegram, etc.) from automation scripts. Used by [[tools/cashu-daily-report]] and, by extension, by any scheduled or on-demand report an agent operator wants delivered to a human.

## Known invocation

```
openclaw message send --channel <platform> --target <id> --message <text> --json
```

Observed channels: `telegram`. Other channels (Discord, Slack, Signal, WhatsApp, iMessage) are offered by [[projects/clawi]] and likely supported here too, but not yet observed in the scripts in this repo.

## Relationship
- Provided by [[projects/openclaw]] (engine behind [[projects/clawi]]).
- Invoked by [[tools/cashu-daily-report]].

## Open questions
- Full channel list and target-ID formats per channel?
- Auth model — per-user tokens? host-level config?
- Error-reporting contract when a send fails?

<!-- Stub created because cashu-daily-report.js depends on it. Expand as the gateway surface becomes observable (logs, docs, source). -->
