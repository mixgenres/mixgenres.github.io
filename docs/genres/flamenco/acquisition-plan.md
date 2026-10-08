# Flamenco multi-reference pilot

Updated 2026-10-08. This pilot builds a style-local evidence set for the 18 Flamenco styles already in the app. The working target is three verified MP3 recordings per style. Choose complementary performers, periods, ensembles, and production contexts; do not pad the set with near-duplicates. This is a reference set for score, technique, articulation, and mix review, not a request to create three sample songs per style.

## Current inventory and acquisition scope

The collection now has 33 local performances across all 18 Flamenco styles. Soleá (4), Bulerías (4), Alegrías (3), and Fandangos (3) meet the three-reference baseline; 21 additional style-reference slots remain across 14 styles. Every style has at least one mapped recording. `references.json` records per-style counts, local hashes, source URLs, and verification state. Source identity or listening review remains pending for several new recordings, so acquisition coverage is not an authenticity pass.

The user approved an approximately 5 GiB storage budget for this style-by-style pass. Keep at least 5 GiB free, limit retained reference/review audio to 500 MiB, and keep peak temporary audio below 1 GiB. A recent free-space check showed about 10 GiB; recheck before each acquisition batch and separation. No existing sample, accompaniment, model, or cache was removed to make room. Original MP3s remain intact; separated accompaniments are bounded evidence and are not instrument stems.

## Selection rules

Before clicking download, run `npm run check:reference-candidate -- --title="<resolved title>" --duration-seconds=<seconds>`. The gate blocks collection-style titles and items at least one hour, caps ordinary references at 15 minutes, and requires a documented single-work reason for longer recordings.

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

`references.json` is the machine-readable source of truth for current counts and local-file hashes. Soleá and Bulerías each have four references; Alegrías and Fandangos meet the three-reference baseline. Fourteen styles remain below target, with 21 style-reference slots outstanding. All styles now have at least one mapped performance. Source candidates and download states will be appended there only after the exact performance and provenance are verified. The completed style dossier and coverage matrix will track separate evidence status for each remaining style; acquisition count alone does not pass a style.
