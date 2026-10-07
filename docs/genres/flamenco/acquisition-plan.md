# Flamenco multi-reference pilot

Updated 2026-10-07. This pilot builds a style-local evidence set for the 18 Flamenco styles already in the app. The initial working target is four verified MP3 recordings per style; add a fifth when it contributes a distinct performer, period, ensemble, or production context. This is a reference set for score, technique, articulation, and mix review, not a request to create four sample songs per style.

## Current inventory and acquisition scope

The existing local inventory contains 17 Flamenco matches: one for 17 styles and none for Seguiriya. Reaching four per style requires 55 new MP3s (72 total). The current 17 MP3s occupy 93.6 MiB, averaging 5.51 MiB. At that observed size, the initial acquisition is about 303 MiB of new MP3s; the fifth-reference ceiling would add another 18 files, about 99 MiB. Actual size depends on duration and encoding. `references.json` records the per-style backlog, the local files, and their current verification limits.

The working volume reports 7.0 GiB free. The genre-fidelity spec calls for retaining the larger of 5 GiB or 10% of the volume; 10% here is about 22.8 GiB, so the volume is already below that reserve. The spec also says to surface a necessary budget increase before consuming it. The MP3 additions are within the normal 1 GiB retained-audio ceiling, but that ceiling does not override the free-space reserve. Downloads and new separation work are held until free space is recovered or the user approves a bounded exception. No existing sample, accompaniment, model, or cache was removed to make room.

## Selection rules

- Keep each source attached only to the style or styles the actual performance demonstrates. A shared recording must have evidence for each style association; neighboring genres are not stand-ins.
- Prefer complementary examples from at least two performers or ensembles. Include the style's defining personnel and contrasting phrase jobs, not just another rendition of the same hook.
- Verify video ID, uploader, artist, exact performance/version, duration, and listening timecodes before downloading through MediaHuman. Preserve original MP3s and record SHA-256, acquisition time, decoder metadata, and canonical path.
- Voice removal is optional and targeted. Keep the original master for vocal style, production, and transfer context. Use a separated accompaniment only when it answers a specific ensemble-balance question; document artifacts and never treat the result as isolated instrument ground truth.
- Do not average raw master RMS into a fader target. Compare like sections at matched listening level, report unnormalized level and peak separately, and use robust per-style summaries across recordings and multiple musical sections. Keep common style behavior separate from performer, era, venue, mastering, and crossover differences.

## How the reference set will inform the app

For each verified MP3, build a timecoded map of an exposed entrance, developed phrase, role handoff/contrast, and cadence or ending where present. Record guitar technique and articulation, voice/cante phrasing, palmas and cajón relationship, bass or additional ensemble roles when actually present, compás, harmony, register, density, and intentional space. Compare those observations against the genre-owned cells, compiled phrase assignments, instrument controls, and full-song form. Missing gestures become instrument/style-owned studies and patterns only when the recordings support them; repeated loops remain valid when they are musically intended.

For mix review, compare a dry render and the resolved Flamenco mix against equivalent reference passages. Evaluate foreground hierarchy, guitar body and attack, vocal/guitar proximity, palmas transients, low-end support when present, stereo width/depth, room, section density, and output headroom. Ask listeners whether the result reads as the intended palo and ensemble, whether any part feels distant, thin, crowded, harsh, or over-polished, and which entrance or technique causes that impression. Record listener verdicts as human review, separate from the automated audio measurements. Update only the style mix contract whose evidence supports the change, then rerender the same passages and compare at matched level.

The MP3s do not train a statistical or machine-learning model in this repository. They provide repeated evidence for measured style profiles and human-reviewed authoring decisions. Spectral averages alone cannot infer player identity, correct choreography, compás, articulation, or musical authenticity.

## Per-style backlog

`references.json` is the machine-readable source of truth for current counts and local-file hashes. Current styles with one match need three additions; Seguiriya needs four. Source candidates and download states will be appended there only after the exact performance and provenance are verified.
