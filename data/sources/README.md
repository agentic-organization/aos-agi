# Sources

Machine-readable source manifests for ingestion tools.

Path: `data/sources/`

## `github-watchlist.json`

Curated GitHub organizations and repositories observed by `tools/ingestion/github-daily-ingest.js`.

The watchlist is synthesized from the wiki rather than stored in the wiki because daily ingestion needs a stable machine-readable source of truth. Wiki pages should link to and interpret this manifest; ingestion scripts should read this manifest directly.
