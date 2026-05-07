# .agents

Agent-facing materials for the Organization Intelligence Agent — skills, prompts, and workflow guidance that shape *how* the agent operates on this repository. The `.agents/` prefix (borrowed from the `.github/` convention) keeps agent-internals visually separate from the human-facing data and wiki.

## Contents

- [`skills/`](skills/) — Repo-local skills. Evolving playbooks the agent consults when performing recurring tasks (maintaining the wiki, normalizing a new source, resolving identities, etc.).

## What makes this different from `tools/` and `docs/`?

- [`tools/`](../tools/) — Executable code the agent runs.
- [`docs/`](../docs/) — External reference material (e.g., the LLM Wiki gist) and design notes for humans.
- [`.agents/`](.) — Instructions and patterns the agent reads into its own working context.

## Evolutionary by design

Everything under `.agents/` is meant to be edited in place as understanding grows. Git history is the audit trail. When a skill is wrong or incomplete, patch it immediately and note the change in the commit message.
