# Style technique coverage and playback audit

## Finding

The style catalog already carries a large instrument-specific technique vocabulary, but playback did not use it as its main source. Phrase selection mostly used genre-level references and generic instrument preferences. That made sibling styles inherit similar gestures even when their calibrations named different techniques.

There was a second break earlier in the pipeline: pattern projection blanked an articulation when its text did not literally match the receiving instrument's technique list. That erased the cue before notation and playback could preserve its intent and adapt it to another instrument. The phrase selector also excluded every unpitched action, even when the part had explicitly been assigned a percussion role.

These problems become visible when comparing the styles' own references. Jiangnan Sizhu calls for shared melodic shaping and ornament, while its active cells mostly spell `legato` or `staccato`; Guqin's active cell similarly does not spell out its calibrated harmonics and inflections. Soleá demonstrates the stronger end of the current system: its guitar pattern explicitly sequences rasgueado and golpe, and a separate falseta writes the p-i-a-m-i tremolo. The same preservation and execution path was not applied broadly across the catalog.

## Catalog-wide results

`scripts/audit-technique-coverage.mjs` reads every active style and instrument mapping, checks its cue against that instrument's playable gesture profile, and compares the mapped actions with the style's active pattern articulations.

- 420 styles across 55 genre catalogs
- 2,078 style/instrument technique lists
- 10,070 authored instrument/style cues
- 9,964 cues map to one or more named gestures for that instrument
- 106 cues do not map to a note gesture; these include some production/phrase directions (such as filter sweeps) and some actions that still need a dedicated multi-note realization (such as double-stops)
- 8,313 mapped gestures do not appear as explicit articulations in the corresponding style-owned patterns

The last figure is a cue-to-pattern gap, not a count of silent or broken songs. Playback already had genre-wide gesture preferences and specialized arrangements, and the changes below let calibrated style gestures enter non-authored attacks. The report identifies where authored pattern material still does not explicitly teach those gestures. The count is intentionally not used as a quota: a fixed loop or sparse solo tradition should not be forced to exhibit every catalog capability in every passage.

## Playback changes

- Phrase technique selection now reads style-specific `instrumentTechniques` and uses only cues that resolve to a gesture in that instrument's profile. Section/song-only controls stay out of note-level technique selection.
- A part lens now carries its selected `styleId` as well as its genre. That style's instrument vocabulary and performance grammar contribute in proportion to the lens weight.
- Generic articulations (`accent`, `staccato`, `legato`, `tenuto`) can yield a few attacks to a more specific style gesture. Explicit named techniques remain protected.
- Pattern articulations stay in the written score even when the receiving instrument cannot perform the literal source action. Playback resolves the cue against the instrument's own gestures and style context rather than passing an unsupported ID to the renderer.
- Unpitched body/string contacts can be chosen for a part explicitly assigned a percussion role; they remain excluded from ordinary pitched roles.
- An instrument's calibrated physical techniques remain available after role reassignment. The role affects musical selection, while the instrument profile still limits which gestures can sound.

This supports adaptation without multiplying the pattern picker. It does not pretend every catalog phrase such as `filter sweep`, `double-stop`, or `bird call` is a single-note articulation. Those need a control gesture, coordinated voice event, or multi-event phrase realization as appropriate.

## Reference MP3s

These existing local recordings and their prior 12-second feature comparisons informed the targeted cases. The measurements are prompts for musical listening, not an authenticity score; they cannot identify a technique or establish note alignment on their own.

- [Jiangnan Sizhu, Huanle Ge](../samples/%E4%B8%8A%E6%B5%B7%E9%9F%B3%E4%B9%90%E5%AD%A6%E9%99%A2%E6%95%99%E6%8E%88%E4%B8%9D%E7%AB%B9%E7%A0%94%E7%A9%B6%E7%BB%84%20-%20%E6%AC%A2%E4%B9%90%E6%AD%8C.mp3) — compare how related lead instruments vary one shared line, rather than merely choosing different notes.
- [Guqin, Liu Shui](../samples/Guan%20Pinghu%20-%20Liu%20Shui.mp3) — compare space, decay, slides, harmonics, and free phrasing; a dense, fixed one-bar gesture is the wrong target.
- [Salsa Dura reference, Che Che Colé](../samples/Willie%20Col%C3%B3n%20%26%20H%C3%A9ctor%20Lavoe%20-%20Che%20Che%20Col%C3%A9.mp3) — compare the bass, piano, and percussion interaction; this recording has a bomba/calypso context and is not a generic son-clave template.
- [Golden Age Tango, Quejas de Bandoneón](../samples/An%C3%ADbal%20Troilo%20-%20Quejas%20de%20Bandone%C3%B3n.mp3) — compare bandoneon and violin phrasing and the alternation between grounded accompaniment and exposed lines.
- [Soleá reference, De tus ojos soy cautivo](../samples/Camar%C3%B3n%20de%20la%20Isla%20-%20De%20tus%20ojos%20soy%20cautivo.mp3) — a useful contrast because rasgueado, golpe, tremolo, palmas, and voice/guitar exchange already have explicit pattern-level support.
- [Classic Reggaeton, Gasolina](../samples/Daddy%20Yankee%20-%20Gasolina.mp3) — compare the loop's dembow behavior and production-level changes separately from instrument articulation.

Generated excerpts and the previous feature reports live under ignored `audit/pattern-diversity/audio/`. Re-run the report with:

```sh
node --import tsx scripts/audit-technique-coverage.mjs
```

It writes `audit/technique-coverage/report.json` with per-style cue mappings, authored pattern gestures, and reference-file availability.

## Verification

- TypeScript check passes.
- Technique mechanics regression suite passes, including tests for a Jiangnan pipa vocabulary, a weighted Soleá part lens, guitar reassignment to percussion, and an unfamiliar pattern cue retained in notation and adapted to piano.
- Existing technique audio tests exercise the shared renderer for rasgueado, picado, alzapúa, golpe, tango bowed-string techniques, bass slap/pop/dead notes, and body/afterlength effects.

The next realism pass should author coordinated event sequences for multi-action techniques and compare those fresh renders against these MP3 references. The present changes repair the style/role/pattern handoffs; they do not claim the synth is acoustically equivalent to the recordings.
