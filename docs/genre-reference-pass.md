# Genre reference and study pass

Automatic song arrangement, section randomization and unsilencing now draw only from the selected style's allowed patterns in its own genre folder. A pattern marked for a fill or ending cannot become an ordinary verse groove. If the current role and section have no eligible local cell, the part rests until the catalog supplies one; a cell from an unrelated genre cannot silently fill it.

Folder-authored endings remain separately auditionable. A two-bar phrase can combine a local body cell with its own local cadence cell, with the cadence aligned to the final bar. The existing style pattern keeps its ID for saved arrangements. The recomposed phrase has its own local owner and describes its two parts. Cycles longer than two bars, processes, drones and phrases over 32 events are not chopped to make the catalog look larger.

## Reference audio

`audit/all-samples/inventory.json` maps exact local recording filenames to the catalog. `scripts/calibrate-reference-mixes.py` screens two developed eight-second windows per matched recording. It prefers the matching `voiced/` accompaniment file and records the audio path, byte size, modification time, measurement positions, source type, RMS, crest factor, low and high spectral shares, and side-to-mid level in that style's `referenceMix.ts` inside its genre folder. The compact measurements are retained with the style calibration so the style can be reviewed independently of a runtime cross-genre lookup.

The current inventory has 408 recordings and 385 exact style matches. The reference survey has voice-removed accompaniment for 309 matched styles. Those separated references provide bounded corrections to stereo width, low-end weight and brightness. The original-vocal measurements remain marked as review evidence and do not drive instrument-mix values. The pass does not treat Demucs output RMS as an album loudness target: separation changes gain, and one eight-second level is not a whole-song target. Thirty-five styles have no usable exact matched recording in the local inventory; the report lists them instead of assigning a neighboring genre's profile.

These spectral summaries help compare production shape. They cannot identify instruments, recover a performance, or certify an authentic arrangement. The original bachata lesson cells in `src/data/genres/bachata/studies.ts` distinguish derecho and majao segunda, the low root/fifth tumbao, bongo martillo, güira strokes, requinto answers and a separate mambo study. They are original exercises based on the local bachata reference set, not transcriptions.

## Instrument and technique audit

`scripts/audit-technique-coverage.mjs` audits all 420 styles and 2,078 instrument/style pairs. It checks only patterns owned by that style and naming that instrument, then records body-pattern count, distinct event behavior, difficulty, energy and section scope alongside the technique gestures the renderer can play. Phrase endings and recomposed turnarounds do not inflate the body-pattern count.

The shared pack builder now turns each style's own authored cell into a small foundation reduction, a local phrase-answer study and one focused cell for each mapped playable gesture that the source cell does not already demonstrate. The reduced and answer cells reuse the source instrument, meter, accents and pitch material. Styles where an instrument is explicitly listed but had no local cell received folder-specific parts: Flamenco cante/cajón, Atmospheric piano/string layers, and Chacarera crossover piano. No neighboring genre supplies a pattern.

Regenerate the human-readable [420-style audit](./genre-pedagogy-audit.md) and the detailed local JSON with `node --import tsx scripts/audit-technique-coverage.mjs`. The report separates pattern coverage from renderer capability gaps and lists reference matches and current per-style mix calibration. RMS from a vocal-removed reference is never interpreted as the target loudness of a generated master, and stereo evidence is not used to invent per-instrument fader settings.
