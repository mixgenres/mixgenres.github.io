# Style and recording calibration

The calibration map has 420 style entries, matched by genre and style name in `styleReferences.ts`. The registry retains the complete credit, original recording/version label and sonic cues. The picker detail shows every cue and every resolved ensemble part with its role, including repeated instrument IDs.

Full songs and samples use separate forms. Each full-song entry requires an explicit form and harmonic plan from `src/data/songs`; missing entries are errors. Repertoire or scene references receive concrete editorial selections in `referenceSelections.ts`. Original reference labels remain available alongside those selections. Source links are shown when supplied; their presence does not imply verification of the entire arrangement.

## Evidence and limits

Full-song charts are score adaptations. Many section lengths, tempos and chord cells are estimates, and the existing style ensemble may differ from recorded personnel. The catalog does not contain note-for-note melodies or verified transcriptions of every recording. Modal/drone anchors and bar-based timing simplify some reference traditions. Generated structure, complete metadata and successful tests are separate from historical accuracy and acoustic fidelity.

Instrument identities stay shared across styles. Several roles using the same synth or guitar remain separate tracks. Genre-specific techniques, setup and mix belong in metadata rather than new instrument identities. The current synthesis models need listening and model-specific refinement; catalog coverage does not prove they reproduce their references.

## Checks

`npm run check` validates data boundaries, catalog structure, sample generation and focused behavior. `npm run check:audio` adds selected PCM and export checks. The catalog metadata regression also checks reference/version preservation, explicit ownership, repeated parts, absolute harmony and score projection. These checks detect dropped metadata and behavioral regressions, not the correctness of every estimated recording chart.
