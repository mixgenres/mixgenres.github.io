# MixGenres

MixGenres is a browser song editor and synthesizer. Choose a style, start from its complete example arrangement, edit sections, chords, patterns and instrumental parts, then play or export it.

## Playback

Playback and audio exports use one SoundFont engine. The score compiler preserves phrasing, articulation, tuning and part relationships; a compact per-part event plan drives the live AudioWorklet or direct offline renderer. Both use the same mixer and master.

Seventeen selectively packaged banks total 131.5 MiB and download only as needed. They combine GeneralUser GS with dedicated Spanish nylon/steel guitars, upright bass, tango bandoneon, and recorded piano, kit and hand-percussion sources. World instruments without dedicated recordings use explicit family approximations. See [architecture, measurements and limitations](docs/soundfont-playback.md) and [bank provenance/reproduction](src/assets/soundfonts/README.md).

```bash
npm run test:soundfont
npm run audit:soundfont
npm run benchmark:soundfont
npm run render-song -- flamenco /tmp/flamenco.mp3 16 --bounded --ensemble
```

## Example songs

Every authored style has one complete example arrangement to start from. Choosing a style or starting over loads its authored sections, tempo, ensemble and harmonic cells; `reference-songs.txt` remains the internal source/credit list.

These are editable score adaptations, not verified transcriptions or reproductions of the recordings. Bar counts, tempo and harmony may be approximate. Melodies come from the pattern vocabulary. An ensemble inherited from a style is not evidence of the recording's exact personnel. Drone anchors and Western bar grids also simplify traditions with different pitch and time systems. Representative selections for repertoire references are editorial choices, not rankings of historical significance. SoundFont mappings approximate acoustic and electronic sources; structural tests cannot certify how authentic they sound.

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

`check` runs catalog validation, representative complete-example generation and focused musical, score, mix and playback regressions. `check:audio` adds targeted rendering and export checks. `build:static` only bundles the app; `build` and deployment run strict type, API boundary and structural checks. `scripts/audit-api-usage.ts` enforces the small runtime boundary. Transient reports are written under `audit` and are not authored catalog data.

```bash
npm run audit:catalog
npm run audit:examples
npm run test:score
npm run render-song -- salsa /tmp/salsa.mp3
```

Playback and export share the score, sample event plan, mix pipeline and versioned SoundFont banks. Banks are demand-loaded and cached as compressed assets by the browser; audio is rendered per part when requested, with no pre-rendered PCM cache. First-time bank loading can take time, especially for large banks. Audio tests cover selected techniques and excerpts, not listening verification of every reference recording.
