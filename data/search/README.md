# data/search/

Build artifacts for the wiki search layer. **None of these files are committed to git** — they are regenerated on demand.

## Files

| Path | Produced by | Committed | Purpose |
|---|---|---|---|
| `chunks.jsonl` | `tools/search/walk-wiki.js` | no | One JSON record per wiki chunk. The single source of truth that every other artifact derives from. |
| `bm25-index.json` | `tools/search/build-bm25.js` | no | Inverted index for BM25 keyword search. Required for any search mode. |
| `embeddings.bin` | `tools/search/embed.py corpus` | no | Raw `float32[num_chunks][dim]` vectors, row-major. Optional — enables vector and hybrid search. |
| `embeddings.meta.json` | `tools/search/embed.py corpus` | no | `{ model_id, dim, num_chunks, ids: [...] }`. Written alongside `embeddings.bin`. |

All four are in `.gitignore`.

## Rebuild

```bash
# BM25 only — fast, no model, works anywhere:
tools/search/build.sh

# Add vector search — run on a machine with a GPU or enough RAM for the chosen model:
python3 tools/search/embed.py corpus --model sentence-transformers/all-MiniLM-L6-v2
```

## Query

```bash
node tools/search/search.js "your query text"            # hybrid if embeddings present, else BM25
node tools/search/search.js --bm25-only "exact terms"    # force BM25
node tools/search/search.js --vector-only "..."          # force vector (fails if embeddings missing)
node tools/search/search.js --alpha 0.3 "..."            # hybrid blend weight on BM25
node tools/search/search.js --json "..."                 # machine-readable output
```

## Embedding contract (for users running `embed.py` on a bigger machine)

The corpus embedder MUST:

- Read `chunks.jsonl` as produced by `walk-wiki.js` — one JSON record per line.
- Embed the concatenation of `title`, `heading`, `breadcrumbs`, and `text` (this is what `chunk_to_text()` in `embed.py` does — reuse it for consistency with the BM25 side).
- Write `embeddings.bin` as raw `float32` bytes, row-major, **no header**. Size must equal `num_chunks × dim × 4` bytes.
- Write `embeddings.meta.json` with at least:
  - `model_id` — the embedding model's HuggingFace id (or any string the user chose).
  - `dim` — the vector dimension.
  - `num_chunks` — must equal the line count of `chunks.jsonl`.
  - `ids` — the list of chunk ids, in the same row order as the binary.

`search.js` validates file size and chunk count on load and falls back to BM25 on mismatch.

## When to rebuild

Rebuild after any material wiki change — i.e. after every merged PR that touches `wiki/**`. The daily ingestion pipeline (`tools/ingestion/github-daily-ingest.js`) is a natural trigger; the agent skill `.agents/skills/wiki-search/SKILL.md` has the checklist.
