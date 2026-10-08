# Song and performance review

MixGenres separates composition from sound playback. Notation and band interpretation decide each part's pitches, phrasing, timing, articulations, role changes and ensemble development. The SoundFont plan maps those decisions to recorded presets and sample events. A plausible score or valid preset route is not proof that a generated performance matches its reference.

## Review the musical result

Inspect complete realized scores for every affected style. Check meter, harmony, contours, durations, rests, part entries, playable ranges, phrase endings, ensemble handoffs and technique ownership. Listen to both individual parts and the ensemble. Compare equivalent passages with the exact reference, using the original recording for identity and the `voiced/` accompaniment only for bounded ensemble mix evidence. A separated file is not an isolated instrument stem.

The app's reference comparison and the all-style report measure mix and timbre features. They can expose thin body, excess brightness, balance problems, stereo differences and silence; they cannot establish note-for-note similarity, groove, culturally correct phrasing or musical authenticity. Keep human listening status explicit and do not label an aggregate feature score as an authenticity result.

## Current checks

- `npm run test:score` checks notation and phrase interpretation.
- `npm run test:soundfont` checks preset/sample integrity, technique routing, per-part events, seek behavior and direct rendering.
- `npm run test:mix` checks the shared mix and automation.
- `npm run audit:sample-ensembles` verifies the sample-song instrument roster rule and Tango bandoneon coverage.
- `npm run audit:soundfont` and the browser audit exercise live playback; `npm run benchmark:soundfont` measures direct offline render and MP3 encoding speed.
- `npm run check:audio` adds focused sample-render and export checks.

These checks cover engineering behavior and selected passages. They do not replace level-matched listening across the complete song, the exact recording reference, and musicians familiar with the style.
