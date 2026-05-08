# wiki-search

**Kind:** tool · **Path:** `tools/search/` · **Status:** active (BM25 live; vector half awaits first embedding run)

## Summary
Hybrid BM25 + sentence-transformer search over the `mini-agi` wiki. Pure-JS BM25 is always on; vector search lights up once someone runs `embed.py` on a machine with a model. Results are returned as ranked chunks with breadcrumb trails and text snippets — the same shape whether you use BM25, vectors, or the hybrid blend.

Inspired by Karpathy's LLM-Wiki footnote about [qmd](https://github.com/tobi/qmd) — hybrid local search without committing to a retrieval service.

## Components

- `tools/search/walk-wiki.js` — walks `wiki/` and emits `data/search/chunks.jsonl`. Splits on H1/H2 boundaries; keeps a breadcrumb trail; soft-caps chunks at 1500 characters.
- `tools/search/build-bm25.js` — reads `chunks.jsonl`, writes `data/search/bm25-index.json` (Okapi BM25, k1=1.5, b=0.75). Stores compact chunk metadata + an inverted index; no external deps.
- `tools/search/embed.py` — Python entry point for two modes:
  - `corpus` — embeds the whole `chunks.jsonl` into `embeddings.bin` (raw `float32[num_chunks][dim]`) + `embeddings.meta.json`.
  - `--query` — embeds a single query string for `search.js` to use at query time.
- `tools/search/search.js` — CLI. Loads BM25; loads vectors if present; returns top-K hits.
- `tools/search/build.sh` — orchestrator. Walks the wiki and builds BM25. Does **not** run the embedder — that is intentional, embedding belongs on a bigger machine.

## Build

```bash
tools/search/build.sh
```

That's it for BM25. You can search immediately after.

## Embed (optional, on a bigger machine)

```bash
pip install sentence-transformers numpy

python3 tools/search/embed.py corpus \
    --model sentence-transformers/all-MiniLM-L6-v2
```

Swap in a larger model (`BAAI/bge-large-en-v1.5`, `mixedbread-ai/mxbai-embed-large-v1`, ...) when you have the hardware. Copy `embeddings.bin` + `embeddings.meta.json` back into `data/search/` on any host where you want vector search.

## Query

```bash
node tools/search/search.js "your query"
node tools/search/search.js --k 10 --bm25-only "callebtc cashu"
node tools/search/search.js --alpha 0.3 "privacy-preserving payments"
node tools/search/search.js --json "nutshell python mint"
```

## Artifacts

All under `data/search/` and **none are committed** (see `.gitignore`):

- `chunks.jsonl` — produced by the walker.
- `bm25-index.json` — produced by the indexer.
- `embeddings.bin` + `embeddings.meta.json` — produced by `embed.py corpus`.

The tools are authoritative; the indexes are disposable.

## When to rebuild

After any PR that meaningfully changes `wiki/**`. BM25 rebuilds are cheap (seconds). Re-embedding is more expensive and can be scheduled or batched.

## Related
- [[skills/wiki-search]] — agent skill for using and maintaining the search layer.
- [docs/LLM_WIKI.md](../../docs/LLM_WIKI.md) — motivates the existence of a proper search layer once the wiki outgrows index-file navigation.
- [data/search/README.md](../../data/search/README.md) — on-disk layout and the embedding contract for any future embedder.

## History
- 2026-05-08: Tool scaffolded. BM25 indexer live against 1498 wiki chunks / 2958 unique terms. Embedding scaffold ready; not yet run — corpus vectors will be generated on a separate machine.

## Open questions
- Which embedding model(s) deliver the best recall on this wiki's vocabulary? Worth a small eval pass once vectors are available.
- Should we cache query embeddings (e.g. small SQLite) to avoid re-embedding repeated queries?
- Would it be worth adding an MCP server wrapper so LLM agents can call `search` as a native tool rather than shelling out?
- Should we eventually switch to [qmd](https://github.com/tobi/qmd) — the tool [`docs/LLM_WIKI.md`](../../docs/LLM_WIKI.md) recommends? qmd ships hybrid BM25+vector+rerank with an MCP server, but it requires an external install, caches GGUF models outside the repo, and would make the search layer depend on a third-party lifecycle. The from-scratch scaffold here keeps embeddings portable inside `data/search/` and works from any host that has Node (BM25) or Python (query-time vectors). Worth revisiting if this grows.
