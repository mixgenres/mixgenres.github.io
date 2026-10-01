# scripts/

Everything here runs from the **repo root** (`npm run <name>`). Reports are written to `audit/`.
The folder name tells you what a script is allowed to do:

| Folder | Purpose | Fails the run? | Writes |
|---|---|---|---|
| `checks/` | Pass/fail gates for data and engine integrity | **Yes** (exit 1) | `audit/*.json` |
| `reports/` | Measure and describe; never gate | No | `audit/*.json` |
| `generate/` | Rewrites files **inside `src/`** | on error | `src/`, `audit/` |
| `render/` | Offline-engine audio (MP3) for smoke tests / diagnostics | on render error | mp3 + json |
| `lib/` | Shared helpers (no entry points) | - | - |
| `docs/` | Catalog requirements + JSON schema | - | - |

> **Audio caveat.** Everything in `render/` uses the Node offline engine. It does **not** run the browser master chain
> (bus routing, EQ, compression, room). Never judge final loudness or tone from those MP3s — use `report:levels`.

## checks/ — gates

| npm script | File | What it verifies |
|---|---|---|
| `check` | tsc + `data-boundary` + `ids` | Type-checks `src/` + `scripts/`, then the two cheap data gates below. Run by `build`. |
| `check:data-boundary` | `checks/data-boundary.mjs` | `src/data` is pure data: no external or out-of-`src/data` imports; every catalog instrument has a DSP definition and vice versa. |
| `check:ids` | `checks/data-ids.ts` | Id integrity: pattern grids/profiles in range, unique ids, styles registered with form templates, instrument references exist. |
| `check:catalog-expansion` | `checks/catalog-expansion.ts` | Expansion is complete: 32 genres, 145 styles, 487 patterns, each well-formed with exactly one owner. |
| `check:catalog-static` | `checks/catalog-static.py` | Same expansion, scanned from source only (no engine), in the genre-local file layout. |
| `check:smoke` | `checks/smoke-compile.ts` | Every genre builds a sheet and compiles to a non-empty performance. |
| `check:styles` | `checks/styles.ts` | **One pass over all 363 styles, four groups** (`--only=compile,schema,tone,provenance`): `compile` = 8 starter tracks, modules exist, notes > 0; `schema` = required fields, non-empty patterns, technique actually played; `tone` = mix character 0..1, room send/RT60 in range, no orphan patches; `provenance` = source provenance + no hardcoded decisions. |
| `test:integrity` | `checks/styles.ts --only=compile` | The fast subset used by `npm test`. |
| `check:instruments` | `checks/instruments.ts` | Every instrument resolves to a render module, has physical-model metadata, decodes articulations, maps kit components, routes percussion to the drum bus; high-value instruments (trumpet, bandoneon, congas, …) have a dedicated module. |
| `check:instrument-render` | `checks/instrument-render.ts` | Every instrument renders finite sound in the offline engine and dies after note-off. Records raw per-instrument peaks. |
| `check:markers` | `checks/source-markers.ts` | No TODO/FIXME/"not implemented"/legacy-fallback markers in `src/`. |
| `test:unit` | `checks/unit/*` | Velocity-for-energy, spotlight gain, arrangement decisions. |
| `check:rigorous` | composite | `check` + instruments + instrument-render + render regression. |

`npm test` = `check` + `check:smoke` + `test:integrity`. `npm run test:all` adds the render regression and a static build.

## reports/ — measurements

| npm script | File | What it tells you |
|---|---|---|
| `report:levels` | `reports/style-levels.ts` | **Static level audit, no audio.** Per style → per section → per track: notes, mean velocity, estimated level from the real gain chain; flags spread, thin sections, flat dynamics, buried lead/bass, pan skew. `audit/song-levels/style-levels.json` |
| `report:level-targets` | `reports/level-targets-diff.py` | Estimated per-track peak (raw instrument peak × gain chain) vs role targets; prints `git diff --no-index /tmp/current.tsv /tmp/proposed.tsv` input. Needs `check:instrument-render` + `report:levels` first. |
| `report:genres` | `reports/genre-baseline.ts` | Per genre default starter: reference song, dialect target, per-track note stats, evidence, volume and heuristic warnings. `audit/genre-baseline.json` |
| `report:sonic-model [genre]` | `reports/song-sonic-model.ts` | One song's tracks, sections, phrase plan and mix plan (`docs/schemas/song-sonic-model.schema.json`). |
| `report:instrument-schema <id> [genre]` | `reports/instrument-schema.ts` | One instrument's physical model, runtime path and compiled gesture stats. |

## generate/

| npm script | File | Warning |
|---|---|---|
| `generate:catalog` | `generate/catalog-schemas.ts` | Validates all genre/style refs, writes `audit/catalog-schemas/`, and **regenerates `src/data/songs/starters.ts`**. Review the diff. |

## render/ — offline audio (see caveat above)

| npm script | File | Use |
|---|---|---|
| `render:song [genre] [out.mp3] [seconds]` | `render/song.ts` | One full song. |
| `render:styles` | `render/styles.ts` | Batch-render styles. `--set=all\|expansion --seconds --concurrency --out --style=id,id`. |
| `render:expansion` | `render/styles.ts --set=expansion` | The 145 expansion styles, 12 s each, with manifest. |
| `render:instrument <id> [genre] [out]` | `render/instrument.ts` | One instrument lane in isolation. |
| `render:regression` | `render/regression.ts` | 1.5 s per genre + ffprobe validation (`AUDIO_START`/`AUDIO_END` shard). |
| `render:stems <genre> [style]` | `render/stems.ts` (+ `stems-analyze.py`) | FULL + solo stems + per-section note stats; analyse per-section RMS. |
