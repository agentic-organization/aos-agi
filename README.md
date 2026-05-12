# AOS Organization Intelligence (aos-agi)

Persistent organizational memory for **AOS** — the And Other Stuff ecosystem spanning Cashu, Nostr, and adjacent open-source projects.

This repository is **not** the agent. It is the agent's long-term memory: raw evidence, reusable ingestion tools, and a living Markdown wiki inspired by Karpathy's [LLM Wiki](docs/LLM_WIKI.md) pattern. It is derived from the [mini-agi](https://github.com/agentic-organization/mini-agi) template and customized for AOS-specific observation targets.

## What lives here

- **People**: [[people/callebtc]], [[people/alexgleason]], [[people/rabble]], and 50+ others across Cashu, Nostr, and Divine ecosystems.
- **Projects**: [[projects/cashu]], [[projects/nutshell]], [[projects/cdk]], [[projects/nostr-skills]], [[projects/athenut]], [[projects/soapbox]], and more.
- **Teams**: [[teams/cashu-core]], [[teams/divine]], [[teams/and-other-stuff]].
- **Tools**: Operational scripts like [[tools/cashu-daily-report]] and [[tools/github-daily-ingest]].
- **Evidence**: Raw GitHub snapshots under `data/raw/github/` dating back to 2026-05-07.

## Start here

- [AGENTS.md](AGENTS.md) — architecture and system plan
- [docs/LLM_WIKI.md](docs/LLM_WIKI.md) — the LLM Wiki pattern this system is built on
- [wiki/index.md](wiki/index.md) — entry point to the living wiki

## Layout

```
docs/     — reference docs (incl. LLM_WIKI.md)
tools/    — ingestion scripts + wiki search layer (small, focused, reusable)
data/     — raw evidence (data/raw/<source>/…) and search build artifacts (gitignored)
wiki/     — living Markdown knowledge base
.agents/  — agent skills (reusable procedures)
```

Directories are created when they have content to hold. No empty scaffold directories.

## Search

Hybrid BM25 + sentence-transformer search over the wiki. BM25 works immediately; vectors are optional and built on a bigger machine:

```bash
tools/search/build.sh                           # build BM25 index
node tools/search/search.js "your query"        # query (hybrid if embeddings present, else BM25)
```

See [`.agents/skills/wiki-search/SKILL.md`](.agents/skills/wiki-search/SKILL.md) for the full workflow including embedding.

## Loop

```
Observe → Ingest (save raw evidence) → Synthesize wiki pages
  → Cross-link → Commit via PR → Repeat
```

See [AGENTS.md](AGENTS.md) for detail.

## Workflow

All changes go through pull requests against `main`. No direct pushes to `main`. See `.agents/skills/pr-workflow/SKILL.md`.
