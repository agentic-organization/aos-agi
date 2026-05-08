# mini-agi

Persistent organizational memory for the Organization Intelligence Agent.

This repository is **not** the agent. It is the agent's long-term memory: raw evidence, reusable ingestion tools, and a living Markdown wiki inspired by Karpathy's [LLM Wiki](docs/LLM_WIKI.md) pattern.

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
