# All-genres fidelity and sample-song pass

Updated 2026-10-07. This pass covers 55 genre folders, 420 song styles and 420 shipped sample songs. It follows the genre validation guidance and keeps genre-owned vocabulary local to its style. The current song-by-song roster and reference crosswalk is in [genre-verification-implementation-audit.md](./genre-verification-implementation-audit.md).

## Changes

- Every eligible local instrument cell now supplies a phrase-development variation derived from that same style’s most developed body cell. Reductions, closing answers and instrument-mapped technique studies remain separately labeled as derived practice material; they are not counted as extra source repertoire.
- Phrase-pattern selection now progresses across the whole song instead of restarting at each section. Section names used by the sample songs—including cycle/return forms and Korean jangdan sections—are normalized so local studies can actually be selected in those sections.
- Separated-reference mix width now propagates through stage, role and section controls. The planner gives role width precedence over stage defaults, so previously the reference correction could change the displayed stage profile without changing the rendered role widths. Original recordings remain visible as evidence but do not drive mix corrections; separated-audio RMS is not treated as an album loudness target.
- The Chinese pass remains documented with its own style dossier, source manifest and role-level coverage in [`genres/chinese/fidelity.md`](genres/chinese/fidelity.md).

## Validation

- All 420 songs compiled with zero failures. The catalog audit now measures 2,190 instrument lanes: 63 use a single selected pattern, 158 use one pattern for at least 80% of measures, and the mean is 4.78 selected IDs per lane. The earlier baseline was 124 single-pattern lanes, 349 dominant lanes, and 3.93 IDs per lane. These counts measure pattern selection, not perceived musical variation.
- The SoundFont playback path uses 17 selectively distilled, demand-loaded banks totaling 131.5 MiB compressed. The catalog roster audit confirms 5–8 distinct instruments for all 420 sample songs and bandoneon on all 17 Tango songs. SoundFont is the only playback engine; rendered audio is produced per part on demand.
- The 5–8 count is a user-directed sample-catalog rule. A few sparse styles use quiet, score-backed sample-only support parts; that roster does not claim every added player belongs to the historical reference ensemble, and needs listening review for musical fit.
- The current inventory has 423 local MP3s, exact recordings for 410 styles, 10 catalog styles without an exact local MP3, and measured accompaniment features for 317 links. There are 315 local `voiced/` files; they provide separated-mix evidence where available, not isolated instrument stems. The 8-second SoundFont comparison is recorded under `audit/all-samples/soundfont-v3-all-genres/`; every row remains a timbre/mix screen for musical review, not a note-for-note or perceptual match claim.
- The Chinese pass added a verified suona-and-orchestra recording and an explicit Chinese-title alias for Jiangnan Sizhu; neither original recording is treated as voice-removed mix evidence.
- The current source/technique audit is in [`genre-pedagogy-audit.md`](genre-pedagogy-audit.md), with style-by-style pattern and mix evidence in the ignored `audit/technique-coverage/report.json`.

## Remaining review

The catalog still has 29 instrument/style pairs without a folder-authored body cell and 1,904 with only one. Generated variations improve song use but do not replace original instrument-specific teaching material. The gesture audit also retains 76 technique or phrase cues without a named SoundFont route; mapped actions all have a local pattern example. These are the next data-authoring priorities.

The eight-second SoundFont sweep is a screening pass, not human listening or a musical authenticity certification. Each matched style remains marked for musical review; compare the generated excerpt with its exact voiced reference where the inventory identifies one.
