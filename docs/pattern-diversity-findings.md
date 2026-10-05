# Initial pattern diversity findings

This is the first review baseline from `scripts/audit-pattern-diversity.ts`.
It covers all **420 styles across 55 genres** and generates every catalog song
example. The machine-readable report is in the ignored
`audit/pattern-diversity/full-report.json` file.

## Catalog and generated-song results

- All 420 catalog examples produced a sheet; the report found no missing
  expected ensemble roles. This confirms structural coverage, not idiomatic
  behavior.
- **411 of 420** examples use the same pattern assignment map in every section.
  Every track in those examples selects one pattern for the full form. This is
  a pattern-selection-layer result, not proof that the compiled music is static.
- **11 styles have only one authored pattern record.** Several are solo styles,
  so the number alone is not a failure. It is a prompt to inspect whether the
  pattern contains the distinct gestures and phrase shapes its reference calls
  for.
- **201 styles have at least one exact behavioral-signature match** after
  ignoring names, IDs, instrument identity, accent and velocity. Identical
  material can be a useful unison or a legitimate shared cell; each match needs
  review before deciding whether it is redundant.
- There are 386 styles with a matched local MP3 and 370 existing audio
  comparison reports. Acoustic comparisons remain separate from musical
  pattern acceptance.

The first examples make the count problem concrete:

| Style | Pattern records | Distinct signatures | Tracks selecting one pattern for the whole form |
|---|---:|---:|---:|
| Jiangnan Sizhu | 4 | 3 | erhu, dizi, pipa, guzheng |
| Guqin | 1 | 1 | guqin |
| Salsa Dura | 11 | 9 | voice, horns, piano/tres, bass, percussion |
| Golden Age Tango | 4 | 4 | bandoneon, violin, piano, bass |
| Soleá | 4 | 4 | voice, guitar, palmas |
| Classic Reggaeton | 5 | 5 | voice, synths, drums, sampler |

Salsa Dura's eleven records are distributed across eleven tracks; they do not
form eleven selectable full-band ideas. Conversely, Guqin's one record does
not mean the music should have a large menu: its free phrasing and sparse
development need a few substantial gestures, not a quota of unrelated loops.

I also compiled the six examples in the pilot. The compiled event summaries
show phrase-level rhythm and contour changes within those stable pattern maps:
Guqin produces 423 events across six form sections, Salsa Dura 6,024, Golden Age
Tango 1,516, and Soleá 1,718. This confirms that selection IDs alone miss
realized variation. These event signatures still cannot tell whether the
variation is idiomatic or musically convincing; that requires listening to the
song against the recording.

## Reference MP3 review set

The pilot rendered **12-second instrumental excerpts** and compared them with
local recordings. For four styles, the comparator checked three different
12-second positions in the source recording. Jiangnan used the local
`欢乐歌` filename, whose title matches catalog *Huanle Ge*; its performance
credit is not claimed to match the catalog credit.

- [Jiangnan Sizhu source](../samples/%E4%B8%8A%E6%B5%B7%E9%9F%B3%E4%B9%90%E5%AD%A6%E9%99%A2%E6%95%99%E6%8E%88%E4%B8%9D%E7%AB%B9%E7%A0%94%E7%A9%B6%E7%BB%84%20-%20%E6%AC%A2%E4%B9%90%E6%AD%8C.mp3) — the excerpt's attack-density estimate was about 0.9 attacks/sec above the first source window, with much less envelope movement and stereo width. This is a prompt to listen for phrase breathing and ensemble exchange, not an acceptance metric.
- [Guqin source](../samples/Guan%20Pinghu%20-%20Liu%20Shui.mp3) — the three comparisons point to major low-frequency and stereo differences, while source windows vary substantially. A single 12-second crop is not a sound target for this free-rhythm piece.
- [Salsa Dura source](../samples/Willie%20Col%C3%B3n%20%26%20H%C3%A9ctor%20Lavoe%20-%20Che%20Che%20Col%C3%A9.mp3) — centroid and attack estimates are relatively close in some windows, but the generated excerpt has weaker low-body energy and is narrower. The reference is a bomba/calypso hybrid, so its pattern should not be judged as a generic son-clave transcription.
- [Golden Age Tango source](../samples/An%C3%ADbal%20Troilo%20-%20Quejas%20de%20Bandone%C3%B3n.mp3) — generated windows are darker and show lower envelope movement in some positions. These are prompts to inspect bandoneon/violin foreground, phrasing and dynamic contrast.
- [Soleá source](../samples/Camar%C3%B3n%20de%20la%20Isla%20-%20De%20tus%20ojos%20soy%20cautivo.mp3) — the rendered excerpt is brighter and narrower across the selected windows. Review guitar articulation, voice/guitar exchange, palmas placement and phrase ending against the recording.
- [Classic Reggaeton source](../samples/Daddy%20Yankee%20-%20Gasolina.mp3) — the generated sample is markedly darker, louder and more low-heavy by these fingerprints. That calls for level-matched listening and checking sub, kick and upper-register balance, not adding more pattern records.

The source MP3 is a musical reference, but these comparisons are decoded
spectral, attack, envelope and stereo measurements. They do not transcribe
melodies or establish that two recordings are aligned. No subjective listening
verdict or authenticity score is claimed.

## Recommended next pass

Use this report to author a small number of complete, style-specific musical
ideas with coordinated role lanes, then ensure the arranger can select them by
section and phrase context. Review exact-match groups before deleting anything.
Start with Jiangnan Sizhu, Guqin, Salsa Dura, and Reggaeton; keep Tango and
Flamenco as useful comparisons rather than universal models. Re-run the audit
and compare the generated songs to the same MP3s after each material change.
