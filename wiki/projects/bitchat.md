# bitchat

**Status:** active · **Hub:** [[teams/foundry]] · **Organization:** [[teams/and-other-stuff]]

## Summary
A decentralized peer-to-peer messaging app that operates over Bluetooth mesh networks. bitchat enables offline communication without internet connectivity, user accounts, or central servers, making it ideal for situations where traditional networks are unavailable.

## Website
- [https://bitchat.free](https://bitchat.free)

## Repository
- GitHub: [permissionlesstech/bitchat](https://github.com/permissionlesstech/bitchat)

## Tags / concepts
[[concepts/messaging]] · [[concepts/offline]] · [[concepts/bluetooth]]

## Owners & contributors
- (not yet mapped — pending ingestion of commit history, CODEOWNERS, and maintainer lists)

## Communication
- (channels unknown — Slack/Discord/Matrix/Nostr to be discovered)

## Related systems
- (to be filled as system-level dependencies are observed)

## Required capabilities / skills
- [[skills/messaging]]
- [[skills/offline]]
- [[skills/bluetooth]]

## Organizational relevance
Part of AOS's **Foundry** hub — projects the Foundry supports and stewards as part of the freedom-tech ecosystem.

## History
- 2026-05-07: Page created from andotherstuff.org Foundry project listing.
- 2026-05-20: Daily ingestion (`data/raw/github/daily/2026-05-20/permissionlesstech/bitchat/`) shows **2 issues updated**: #1073 proposal for SDK packages for the BitChat protocol by SwarnavaB, and #1112 automate relay data updates for February–May 2026 by yanas-logs (closed).
- 2026-05-22: Daily ingestion (`data/raw/github/daily/2026-05-22/permissionlesstech/bitchat/`) shows **0 commits** in the 24h window but **100 events** and **3 issues updated** — sustained PR/issue activity.
- 2026-05-31: Daily ingestion (`data/raw/github/daily/2026-05-31/permissionlesstech/bitchat/`) shows **1 commit** in the 24h window: "[codex] Refactor app runtime and ownership architecture" (#1104). **3 issues updated** including BLE ingress fanout refinement (#1280) and BLE transport event handling refactor (#1266).

- 2026-06-01: Daily ingestion (`data/raw/github/daily/2026-06-01/permissionlesstech/bitchat/`) shows **5 commits** by jackjackbits and GitHub Action. Major BLE transport refactoring series: "[codex] Extract BLE link state store" (#1310), "[codex] Refactor BLE outbound scheduling and Noise queues" (#1306), "[codex] Refine BLE ingress fanout" (#1280), "[codex] Refactor BLE transport event handling" (#1266) — systematic extraction of BLE subsystems (link state store, connection scheduler, outbound fragment scheduler, Noise session queues, inbound write buffer, fragment assembly buffer). Also automated relay data update. **4 issues updated**. **100 events** in the 24h window.

## Open questions
- Who are the primary maintainers and active contributors?
- Which AOS hub(s) beyond the Foundry engage with this project (Lab? Studio?)?
- What is the current development velocity and release cadence?
- Which other Foundry projects does it depend on or integrate with?
