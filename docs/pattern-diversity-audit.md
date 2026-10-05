# Pattern diversity and reference review

Run the read-only catalog and example audit with:

```sh
node --import tsx scripts/audit-pattern-diversity.ts
```

It writes `audit/pattern-diversity/report.json` (the `audit/` directory is
ignored by Git). Limit a focused pass to selected styles with
`--styles=chinese-guqin,salsa-salsa-dura,tango-golden-age`. Existing MP3
comparison reports are included when present; `--comparisons=PATH` and
`--inventory=PATH` select alternate report and inventory folders.

Add `--compile` to a focused run to compare selected pattern IDs with phrase-
level note rhythms and pitch contours after song compilation. This costs more
because it compiles each complete example.

## What the report measures

- Authored pattern records and unique behavioral signatures. Signatures ignore
  labels, IDs, instrument identity, accents and velocity, so renaming a cell or
  changing only its dynamics does not create a new musical idea.
- Exact behavioral duplicates and possible onset-grid clones. These are review
  prompts. Cross-instrument unison and intentionally shared cells can be valid.
- The role coverage of authored patterns versus the style's actual ensemble.
- Generated example assignments by section and track. These show whether the
  arranger changes its selected pattern vocabulary over the form; internal
  performance variation inside one pattern is counted separately when using
  the optional `--compile` pass.
- Local source MP3s and existing acoustic comparison reports. One reviewed
  title alias connects the file `上海音乐学院教授丝竹研究组 - 欢乐歌.mp3` to
  the catalog title *Huanle Ge*. The alternate file credit is explicitly not
  claimed to match the catalog credit.

There are no minimum pattern counts or generic penalties for repeated material.
Sparse solo traditions, fixed dance grooves, and styles with several contrasting
sections should be reviewed against different expectations.

## Limits of the MP3 evidence

Spectral balance, attack-density estimates, envelope, level and stereo width can
point to a useful part of a recording to compare. They cannot identify a groove,
transcribe a melody, establish coordinated part relationships, or certify
authenticity. Short windows and unaligned song excerpts are especially limited.
Treat them as prompts for listening to instrument roles, pulse, phrasing, form,
register and development. Do not tune patterns to a spectral-distance score.

The first review set uses local references for Jiangnan Sizhu, Guqin, Salsa Dura,
Golden Age Tango, Soleá and classic Reggaeton. Their examples deliberately span
heterophonic ensemble playing, sparse solo phrasing, interlocking dance grooves,
phrase-level dynamics and loop-based production. Tango and Flamenco remain useful
implemented comparisons, not universal quotas for other traditions.
