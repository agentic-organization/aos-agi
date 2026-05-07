# Skills

Repo-local skills for agents operating on this repository.

A **skill** is a written playbook: when to use it, why it matters, and how to do it well. Skills are lightweight, focused, and interlinked.

## Evolutionary by design

Skills are **living documents**. They capture the current best understanding of a recurring task and are expected to change as the organization's data grows, new patterns appear, and the wiki matures. Edit them in place — don't version, don't freeze. Git history is the audit trail.

When a skill turns out to be wrong, incomplete, or outdated:

1. Patch it immediately.
2. Note the change briefly in the commit message (e.g., *"skills/llm-wiki: add stub-page convention, clarify evidence citation"*).
3. Keep it lean. Explain the *why*; let the agent apply judgment.

## Layout

```
.agents/skills/
  <skill-name>/
    SKILL.md          # Entry point — YAML frontmatter + markdown body
    references/       # Optional: deeper reference material loaded on demand
    templates/        # Optional: page skeletons the skill copies from
    examples/         # Optional: worked examples
```

## Current skills

- [`llm-wiki/`](llm-wiki/) — Maintain the living Markdown wiki in `wiki/`: page types, interlinking, incremental updates, evidence handling, stub-and-grow pattern.

## Adding a skill

1. Create `.agents/skills/<name>/SKILL.md` with YAML frontmatter (`name`, `description`) and a focused body.
2. Explain reasoning, not just rules. Future agents are smart — they need context, not commands.
3. Link it from this index.
4. Commit. Improve in later commits as the skill is exercised.
