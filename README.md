# MixGenres

MixGenres is a browser song editor and synthesizer. Choose a style, start from its complete example arrangement, edit sections, chords, patterns and instrumental parts, then play or export it.

## Example songs

Every authored style has one complete example arrangement to start from. Choosing a style or starting over loads its authored sections, tempo, ensemble and harmonic cells; `reference-songs.txt` remains the internal source/credit list.

These are editable score adaptations, not verified transcriptions or reproductions of the recordings. Bar counts, tempo and harmony may be approximate. Melodies come from the pattern vocabulary. An ensemble inherited from a style is not evidence of the recording's exact personnel. Drone anchors and Western bar grids also simplify traditions with different pitch and time systems. Representative selections for repertoire references are editorial choices, not rankings of historical significance. DSP instruments approximate acoustic and electronic sources; structural tests cannot certify how authentic they sound.

## Authoring and metadata

`src/data` owns musical metadata. Genre folders define style seeds, calibration, sections, instrument roles and patterns; `src/data/genres/index.ts` explicitly registers them. `src/data/styles/styleReferences.ts` preserves reference credits, recording labels and calibration cues. Full-song metadata lives in `src/data/songs`: `recordingForms.ts`, `recordingHarmonies.ts` and the explicit overrides in `recordingArrangements.ts`. `referenceSelections.ts` supplies concrete selections when a reference names a repertoire or scene.

The style registry validates instrument IDs and pattern ownership. It does not select patterns by name similarity, erase invalid owners or replace incomplete styles with another genre. Generic musical defaults are declared metadata, distinct from recording-specific evidence. Invalid forms, missing harmony and absent featured instruments fail with an error.

Ensemble entries become separate track IDs, including several parts using the same instrument. Role and solo assignments belong to tracks. Recording personnel restrictions and solo features are applied only when declared; a section without a personnel restriction retains the full ensemble. Section chord cells retain their authored keys rather than being transposed to the opening tonic.

Written pitches, fractional beats, note lengths, techniques and drum identities still pass through separate engine representations; expressive gate lengths and timing offsets remain distinct from notation. Score/notation inspection is no longer exposed as an application UI view. See [the engine pipeline](docs/engine-pipeline.md) and [calibration notes](docs/style-calibration-audit.md).

## Development and verification

```bash
npm install
npm run dev
npm run lint
npm run check
npm run check:audio
npm run build:static
```

`check` runs catalog validation, representative complete-example generation and focused musical, score, mix and playback regressions. `check:audio` adds targeted PCM and export checks. `build:static` only bundles the app; `build` also runs type and structural checks. Transient reports are written under `audit` and are not authored catalog data.

```bash
npm run audit:catalog
npm run audit:examples
npm run test:score
npm run render-song -- salsa /tmp/salsa.mp3
```

Playback and audio export use the shared DSP preparation and mix pipeline. Session caches reuse prepared instrument audio across compatible edits. First-time synthesis can take time, especially for long arrangements. Audio tests cover selected mechanisms and excerpts, not listening verification of every reference recording.
