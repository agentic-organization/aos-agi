# org-memory

Persistent organizational memory and evolution log for the Organization Intelligence Agent.

This repository is **not** the agent. It is the agent's long-term memory: raw evidence, normalized entities, derived analyses, ontology, generated tools, and a living Markdown wiki inspired by Karpathy's [LLM Wiki](docs/LLM_WIKI.md) pattern.

## Start here

- [AGENTS.md](AGENTS.md) — high-density architecture and system plan
- [docs/LLM_WIKI.md](docs/LLM_WIKI.md) — the LLM Wiki pattern this system is built on
- [wiki/index.md](wiki/index.md) — entry point to the living wiki

## Layout

```
docs/         — reference docs and external source material (incl. LLM_WIKI.md)
config/       — source connectors, policies, prompts, schemas
tools/        — ingestion, extraction, normalization, analysis, synthesis, graph, generated
data/         — raw dumps, normalized entities, derived analyses, snapshots
ontology/    — entity types, relationship types, taxonomies, skills, capabilities
directory/    — canonical people, accounts, teams, roles, identities, skills
graph/        — materialized entity + relationship graph (JSON + indexes)
wiki/         — living Markdown knowledge base (the LLM Wiki)
runs/         — ingestion, synthesis, evaluation, review runs
logs/         — operational logs
reports/      — human-readable reports and digests
```

Every directory has its own `README.md` explaining what lives there.

## Loop

```
Observe → Ingest → Normalize → Resolve identities → Discover relationships
  → Infer structure → Infer skills → Update ontology → Synthesize wiki
  → Generate tools → Commit → Repeat
```

See [AGENTS.md](AGENTS.md) for full detail.
