# Audit output

This directory contains generated audit results and the explicit waiver file.

## Canonical entry point

Run from the repository root:

```bash
npm run audit:run
```

Tiers are cumulative:

- `--tier=0`: TypeScript, data-boundary, and ID integrity gates.
- `--tier=1`: Tier 0 plus a complete per-style compile/provenance/performance audit.
- `--tier=2`: Tier 1 plus a complete per-genre offline audio audit.
- `--tier=3`: Tier 2 plus the browser-master gate.

The orchestrator shards the expensive tiers, then verifies that every expected style/genre appears exactly once in the aggregate report. A missing shard, failed shard, duplicate row, or missing catalog entry fails the run.

`run.json` is the result of the most recent invocation. `last-success.json` is written **only** after a fully successful run, so it is safe to use as a known-good baseline.

`style-audit.json` and `audio-audit.json` are aggregate reports. The shard reports remain alongside them for diagnosis.

## Ratchets and waivers

Use:

```bash
npm run audit:diff -- audit/baseline.json audit/style-audit.json
```

Waivers live in `waivers.json`. Every waiver requires an id, reason, and expiration date. Expired waivers are ignored; malformed waivers fail the diff instead of silently weakening it.

The waiver file is intentionally small and should be reviewed like source code.
