# All-genres fidelity and sample-song pass

Updated 2026-10-07. This pass covers 55 genre folders, 420 song styles and 420 shipped sample songs. It follows the genre validation guidance and keeps genre-owned vocabulary local to its style.

## Changes

- Every eligible local instrument cell now supplies a phrase-development variation derived from that same style’s most developed body cell. Reductions, closing answers and instrument-mapped technique studies remain separately labeled as derived practice material; they are not counted as extra source repertoire.
- Phrase-pattern selection now progresses across the whole song instead of restarting at each section. Section names used by the sample songs—including cycle/return forms and Korean jangdan sections—are normalized so local studies can actually be selected in those sections.
- Separated-reference mix width now propagates through stage, role and section controls. The planner gives role width precedence over stage defaults, so previously the reference correction could change the displayed stage profile without changing the rendered role widths. Original recordings remain visible as evidence but do not drive mix corrections; separated-audio RMS is not treated as an album loudness target.
- The Chinese pass remains documented with its own style dossier, source manifest and role-level coverage in [`genres/chinese/fidelity.md`](genres/chinese/fidelity.md).

## Validation

- All 420 songs compiled with zero failures. The catalog audit now measures 2,190 instrument lanes: 63 use a single selected pattern, 158 use one pattern for at least 80% of measures, and the mean is 4.78 selected IDs per lane. The earlier baseline was 124 single-pattern lanes, 349 dominant lanes, and 3.93 IDs per lane. These counts measure pattern selection, not perceived musical variation.
- The all-reference audio sweep is recorded under `audit/all-samples/deep-pass-2026-10-final-all/` and compares two-second generated ensemble excerpts against voice-removed accompaniment windows where available, falling back to the exact local album mix otherwise. Existing accompaniment was measured for 314 recordings. The searchable review player is `audit/all-samples/listen.html`.
- Reference coverage is 409 local recording files, exact matches for 387 styles, separated-accompaniment profiles for 309 styles, 33 styles without an exact local match, and 111 without separated-accompaniment profiles. The Chinese pass added a verified suona-and-orchestra recording and an explicit Chinese-title alias for Jiangnan Sizhu; neither original recording is treated as voice-removed mix evidence.
- The current source/technique audit is in [`genre-pedagogy-audit.md`](genre-pedagogy-audit.md), with style-by-style pattern and mix evidence in the ignored `audit/technique-coverage/report.json`.

## Remaining review

The catalog still has 29 instrument/style pairs without a folder-authored body cell and 1,904 with only one. Generated variations improve song use but do not replace original instrument-specific teaching material. The gesture audit also retains 76 technique or phrase cues without a named renderer gesture; mapped playable gestures all have a local pattern example. These are the next data-authoring priorities.

The two-second sweep is a screening pass, not human listening or a musical authenticity certification. Each matched style remains marked for musical review; the render player lets a reviewer compare the reference and generated excerpts at matched playback level.
