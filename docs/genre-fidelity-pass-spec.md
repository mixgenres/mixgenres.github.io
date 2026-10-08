# Genre fidelity pass: validation and implementation specification

Version 1 — grounded in the working checkout on 7 October 2026.

## Purpose and operating contract

Use this specification to audit and develop one requested genre in MixGenres. The target is a playable musical system whose arrangements, instrumental behavior, phrasing, and sound approach real musicians performing the selected styles. A genre must provide enough musical vocabulary to explore and construct convincing songs, rather than merely generate a recognizable rhythm beneath interchangeable instruments.

This is an implementation assignment when invoked for a genre. Inspect, research, acquire references, diagnose, implement, render, compare, and document the result. A report alone does not complete an implementation pass. This document itself does not certify any existing genre or instrument.

The existing taxonomy intentionally has uneven depth. Broad genres and detailed genres such as salsa, zouk, and Argentine tango need not have the same number of styles, patterns, instruments, or levels of subdivision. Preserve useful public identities and saved-song IDs. Do not merge, split, rename, or pad catalogs simply to make them symmetrical. Investigate questionable classifications and document the evidence before changing them.

Treat these as separate objects:

| Object | Responsibility |
| --- | --- |
| Genre | Owns a musical domain, its style map, defaults, boundaries, and exploration vocabulary. |
| Song style | Defines a coherent performance tradition, arrangement language, personnel, techniques, harmony, and production. May be narrower than a subgenre or reflect an orchestra/era. |
| Pattern family | Names a musical function, such as marcato-4; does not prescribe one identical event stream for every player. |
| Instrument/role cell | Implements that function for a particular instrument, role, register, and context. |
| Exploration study | An original, deliberately composed example exposing reusable musical vocabulary. |
| Recording arrangement | Describes a specific performance/version, with its own form, harmony, orchestration, and attributable source evidence. |

“Highest fidelity” is a development objective, not an automatic pass label. Report score correctness, physical/mechanical correctness, acoustic similarity, and musical authenticity independently. A valid schema, sophisticated DSP graph, spectral match, or plausible description cannot prove that the music sounds convincing.

## Invocation and required outputs

The user need only supply a genre. Infer its existing ID and styles from the checkout. Optional inputs are a style subset, named recordings, priority instruments, production era, and constraints on shipped assets or runtime cost. With no subset specified, inventory and audit every existing style in the selected genre. Deeply implement a first representative passage, then carry the method through all styles; the first passage is a milestone, not the finish line.

Create these reviewable outputs:

1. `docs/genres/<genre-id>/fidelity.md`: durable genre/style dossier, vocabulary, implementation map, limits, and findings.
2. `docs/genres/<genre-id>/references.json`: durable reference and evidence manifest. This is a **new review artifact**, not an existing runtime schema.
3. `docs/genres/<genre-id>/coverage.json`: style × player/role × musical function × engine-layer coverage and status. Also a new review artifact.
4. Genre-owned executable data, original studies, and recording-specific data in their appropriate existing locations; focused shared-engine improvements when required.
5. `audit/genre-fidelity/<genre-id>/`: generated baseline/candidate scores, rendered audio, comparisons, diagnostic reports, and a review index linking evidence. This directory is disposable and ignored by Git; keep conclusions and provenance in the durable dossier.
6. Final status by style and instrument, with changed files, verification results, remaining deficits, and the next concrete action for each unresolved deficit.

Each finding has an ID, severity, observed behavior, source/timecode, affected styles/players, owning engine layer, intended correction, and an observable acceptance condition. Use `P0` for broken output or corrupted musical identity, `P1` for major musical/acoustic deficits, and `P2` for refinements. Do not close a finding merely because a field was populated.

## Phase 0 — inspect the live repository and establish a baseline

Read applicable `AGENTS.md` instructions and check the working tree. Preserve unrelated user work. Inspect executable code before relying on historical documents; this repository contains evolving architecture and earlier design proposals.

Read at least:

- `docs/engine-pipeline.md`, `docs/song-authenticity.md`, `docs/genre-reference-pass.md`, the current package scripts, and `src/data/genres/README.md`.
- The requested folder's `catalog.ts`, `index.ts`, `studies.ts` and `referenceMix.ts` where present.
- `src/data/schema.ts`, `src/data/genres/_shared/genrePack.ts`, and the resolved style contracts.
- The relevant instrument definitions, capabilities, performance profiles, renderer modules, solo definitions, interactions, and mix contracts.
- `src/data/songs/` and `reference-songs.txt`, plus existing local sample inventories.

Resolve discrepancies from live behavior. For example, the current genre registry uses explicit imports for Vite and Node despite an older requirement describing folder discovery. Keep audio rendering on demand: the SoundFont engine computes per-part events and does not pre-render or cache PCM audio.

Build an architecture map with these four layers:

| Layer | Current entry points / ownership | Required inspection |
| --- | --- | --- |
| Written notation | `src/engine/score/notatedScore.ts`; `src/data/schema.ts`; genre-owned cells | Exact meter, beat units, rests, pitches, durations, ties, articulations, and written directions. |
| Band interpretation | `src/engine/band/interpretBand.ts`, `interactions.ts`, `transitions.ts`; style contracts | Harmony, voicing, roles, phrase development, solo policies, ensemble timing, and boundaries. |
| Instrument and sample routing | `src/data/instruments/`; `src/data/performance/`; `src/engine/playback/trackSound.ts`; `src/engine/playback/soundfont/presets.ts`; `soundfont/plan.ts` | Playable ranges, score techniques, sample routing, pitch, attacks, sustain, and release. |
| Ensemble mix and output | `src/engine/playback/renderSongMix.ts`; `src/engine/studio/dynamicMix/`; genre mix calibration | Stage, balance, foreground handoffs, room, processing, headroom, playback/export agreement. |

Save the baseline before changing data: source fingerprint, selected style IDs, deterministic seed/settings, complete realized scores, one full example per style, and focused exposed passages. Identify the baseline's listening status honestly. If no listening capability is available, retain the audio for review and mark listening as unperformed.

**Exit gate:** every existing style has a coverage row; the actual data-to-score-to-sample-event path is known; baseline artifacts exist or each unavailable artifact has a specific failure recorded.

## Phase 1 — establish musical scope and evidence

For each style, document geographic/cultural scope, period, defining ensemble, pulse/meter, tempo convention, musical functions, form, harmonic/pitch language, characteristic techniques, expressive behavior, production, and boundaries with adjacent styles. Separate essential identity from common practice, optional vocabulary, rare practice, and explicit fusion.

Use existing references as leads, not as unquestionable classifications. Check that the selected **performance/version**, not merely the title or artist, demonstrates the claimed style. A modern cover, remaster, live version, or crossover may change the arrangement and production evidence.

For this catalog's reference-building workflow, target **five verified MP3 performances per song style**, chosen to cover a representative ensemble/groove, performer or regional contrast, exposed lead technique, rhythm-section interaction, and form/production development. Prefer at least two performers/ensembles. This is a practical evidence set, not a quota that overrides availability or proof of coverage: explain missing categories rather than filling them with weak matches, and expand when five recordings do not explain important variation. One recording can legitimately inform more than one style only when that specific performance belongs to both; document the reason. Follow the download, verification, voice-removal, and 5 GiB storage workflow in [the genre reference pass](./genre-reference-pass.md).

Browse to verify niche musical claims, reference URLs, instrument acoustics, and exact recording identities. Prefer musician demonstrations, published scores, institutional archives, maker documentation, and primary research. Distinguish what is heard in one recording from a claim about the whole style. Resolve disagreement by documenting the differing practices rather than averaging them into a fictional rule.

For each consequential claim, record:

```json
{
  "claimId": "example-claim-001",
  "styleIds": ["existing-style-id"],
  "claim": "Specific musical or physical behavior being investigated",
  "evidenceType": "recording-observation",
  "sources": [{"referenceId": "ref-001", "startSeconds": 42.0, "endSeconds": 50.0}],
  "confidence": "medium",
  "limitations": "What cannot be inferred from this evidence",
  "implementationTargets": ["actual/path.ts#actual-symbol"],
  "validation": "Observable score/control/audio comparison"
}
```

Evidence types should distinguish recording observation, documented practice, measured acoustics, original exercise, engineering hypothesis, and unverified inference. Confidence is an explicit assessment, not a computed authenticity score. Record plausible guesses as hypotheses; do not silently promote them into defaults.

**Exit gate:** the style map explains differences musically, and every proposed defining behavior has evidence or an unresolved finding.

## Phase 2 — acquire and prepare references

The user has a local YouTube-to-MP3 app. Use it for the requested reference workflow when UI control is available. Discover the actual installed app and read its UI before interacting; do not assume an app name, button, download folder, or successful transfer. Do not substitute a different downloader merely because it is convenient.

For each needed recording:

1. Check `samples/`, `voiced/`, and the existing inventories first. Reuse an exact verified recording instead of downloading a duplicate.
2. Find and verify the YouTube reference: URL/video ID, uploader, artist, title, performance/version, approximate duration, and relevant timecodes. A search-result title alone is insufficient identification.
3. Paste the verified link into the local downloader, start the download, observe completion, and locate its actual output. Process in manageable batches with per-item state so failed links cannot disappear from the report.
4. Verify nonzero size, decodability, duration, channels, and sample rate with `ffprobe`. Listen/check identifying passages when available. Preserve the original MP3; record a SHA-256 hash, acquisition time, original filename, and canonical local path.
5. Place the verified original under `samples/` with a stable, unambiguous filename. Existing exact-match tooling expects artist/title names; if versions require distinct names, maintain explicit version mapping rather than manipulating titles to force a match.
6. Inspect the root script, then run a targeted separation for the verified file:

   ```bash
   ./removeVoiceFromMp3.sh --file "samples/Artist - Exact Recording.mp3" --device auto
   ```

   The current script defaults to `htdemucs_ft`, writes vocal-removed accompaniment under `voiced/` with the original basename, and skips valid existing outputs. Record actual model/settings, output hash, and separation log. Inspect whether dependencies are already installed: the script can install Homebrew/dependencies, so it is not a pure audio operation. Do not run its no-file mode for a one-genre pass. Use `--force` only for a documented reason to regenerate an output.
7. Verify the output and compare the same passages in original and accompaniment. Note lost instrument energy, softened transients, residual voice, pumping, stereo changes, or false artifacts. Revisit the original whenever the separation changes the conclusion.

Demucs accompaniment is **not clean ground truth** and is not an isolated bandoneon, violin, piano, or bass. It can support ensemble rhythm and bounded production comparisons. Physical model fitting needs instrument-exposed passages or appropriate isolated recordings/measurements. A separated mixture cannot identify a reed spectrum or instrument body response reliably. Vocal style claims still require the original recording; an instrumental study must declare the omission.

Maintain reference states `identified`, `downloaded`, `verified`, `separated`, `reviewed`, `failed`, or `missing`, with a reason and next action. If app access or a file is unavailable, continue independent research and implementation, preserve the missing-evidence status, and ask only for the concrete input that resolves it. Do not claim successful acquisition or audition without evidence.

### Storage-aware Demucs optimization

Demucs settings and the targeted wrapper may be customized for quality and efficiency. Storage consumption is a hard operating constraint: avoid accumulating whole-song decoded audio, unused stems, duplicate downloads, model variants, or per-iteration full-song renders.

Before acquisition/separation, inventory existing sample/output/model-cache sizes, duration/channel metadata, available disk space on the actual working volume, and current jobs. Record starting usage and establish an incremental temporary/retained budget in the pass manifest. As conservative initial ceilings, use **2 GiB of pass-owned temporary audio and 1 GiB of new retained reference/review audio**, further reduced to preserve at least the larger of **5 GiB or 10% of the volume** as free space. These are operational defaults, not audio quality targets or permission to fill the allowance. Adapt downward to available resources; surface any necessary budget increase before consuming it. Include downloads and new model weights in the estimate separately from audio. Existing files do not count as new allocation but still affect available space.

Estimate PCM storage before every job: `durationSeconds × sampleRate × channels × bytesPerSample`, multiplied by all simultaneously materialized copies/stems, plus encoding/workspace overhead. Stereo float32 at 44.1 kHz is approximately **20.2 MiB per minute per file**. The current wrapper materializes a source WAV and two output WAVs, so budget for at least those three copies plus working/encoded output; verify actual peak use rather than assuming the estimate is exact. Two-stem output does not guarantee that inference internally uses only two sources or half the memory.

Default to one separation job at a time. Reuse verified existing accompaniment; strengthen reuse identity with source hash, model/version, settings, and selected range, because basename-only skip logic cannot detect a replaced recording or changed configuration. Do not create a separate environment or redownload weights when the installed compatible environment/model suffices.

Choose the smallest processing scope that answers the musical question:

- Inspect the original first. Skip separation when vocals are absent/unimportant or when it cannot resolve the uncertainty.
- Prefer a small set of justified passages for diagnosis and fitting. Include leading/trailing context for separation and crop to the intended window **after** processing. Verify edge behavior against the original; record absolute source offsets and padding. Such clips are not substitutes for whole-song form analysis.
- Use complete-song accompaniment when full structure, phrase development, or repeated review actually requires it. Avoid generating every reference's full accompaniment by default.
- Begin with the installed model and existing conservative settings. Increase shifts, overlap, or change models only after a fixed difficult passage shows a worthwhile improvement. Shorter inference segments may reduce memory, but do not automatically reduce output disk size; check installed model/version support and musical continuity. Do not claim a quality improvement without comparison.

The existing wrapper has no range-selection flags. If passage processing is needed, implement a typed/validated targeted wrapper or explicit pre-crop workflow; do not invent command-line support. Store excerpts in the pass-owned workspace with range-aware names and a manifest, not as a full-recording match in `voiced/`.

Keep original downloaded MP3s as the canonical reference. Retain compact audition files and small lossless excerpts when acoustic measurements need them; use lossless data for fitting where possible and document unavoidable lossy-source limitations. Do not retain the decoded source WAV, vocal stem, or all intermediate stems by default. Publish validated outputs atomically, then promptly delete only temporary files created by this pass. Preserve existing samples, outputs, environments, caches, and files owned by other active jobs. Identify orphaned workspaces by ownership and inactivity before proposing cleanup; never globally delete `.demucs-work.*`.

Keep a bounded baseline and accepted-candidate review set rather than every iteration. Track current and peak temporary bytes, new retained bytes, elapsed processing time, settings, and cleaned/retained artifacts. Recheck space between jobs; on a projected or observed budget breach, stop new allocation, clean pass-owned intermediates, and reduce scope or encoding footprint. Report remaining storage requirements if work cannot continue within the budget. A failed or interrupted job must leave a resumable manifest and must not leave accumulating decoded audio.

Useful existing tools include `scripts/index-all-reference-samples.ts`, `prepare-reference-samples.ts`, `survey-all-reference-audio.py`, and `compare-reference-audio.py`. Inspect their arguments and write scope before running them. The existing `calibrate-reference-mixes.py` rewrites genre `referenceMix.ts` files and may update genre indexes across the catalog; adapt a narrowly scoped path or perform a reviewed local update for the requested genre. Do not run a global mutation to calibrate one genre.

**Exit gate:** every required reference has provenance, verified files or an explicit missing state, selected passages, and separation limitations.

## Phase 3 — decompose recordings into playable musical functions

Create a timecoded listening map for each primary recording. Use at least an exposed entrance, a developed ensemble passage, a contrast/solo/handoff, a boundary, and an ending where those exist. Inspect complete form, not just a convenient eight-second window. Record meter and BPM with the counted beat unit; distinguish tempo drift, rubato, swing, local anticipation, and recording speed uncertainty.

Create one row per **player/part and phrase**, including repeated players of the same instrument:

| Required field | Detail |
| --- | --- |
| Identity | Reference/timecode, section, bars, phrase position, player/instrument, sounding register, role at this moment. |
| Musical task | Pulse, accompaniment, melody, countermelody, pedal, response, ornament, fill, cadence, texture, or deliberate rest. |
| Written content | Onsets, durations, pitch contour/voicing, harmonic alignment, accents, rests, pickups, ties, and rhythmic cycle. |
| Performance | Attack/release, articulation, direction/contact/excitation where evidenced, phrase contour, expressive timing, and shared cues. |
| Ensemble relation | Who leads, follows, answers, reinforces, yields, doubles, or leaves space; which actual events establish it. |
| Production | Foreground, balance, spatial position/depth, ambience, and any recording artifacts. |
| Certainty | Heard/documented/measured versus ambiguous; alternate interpretation where needed. |

Do not infer instrument independence from a Demucs category. Do not assign one rhythm to all instruments because their accents occasionally coincide. Conversely, shared onsets can be correct in a tutti/unison; validate each player's pitches, register, voicing, gate, articulation, and phrase job before treating similarity as a defect.

Trace each observed function to current catalog cells and compiled behavior. Mark it `correct`, `partial`, `missing`, `incorrect`, or `not-applicable`. A description naming a function without a usable realization is `missing` or `partial`.

**Exit gate:** the differences between real performance and current engine output are attributed to specific players/functions/layers, rather than a vague claim that the genre needs more patterns.

## Phase 4 — implement instrument and technique fidelity

Fully specify each characteristic instrument for its relevant roles. Cover model/variant, construction and excitation, tuning and transposition, playable range, useful registers, polyphony, physical coordination, sustained state, timbre/dynamic response, techniques, phrasing, soloing, interactions, and mix function. Separate instrument capability from style preference and from what one recording happens to use.

A new instrument requires the complete vertical path:

1. Instrument definition in `src/data/instruments/catalog/` and registration in `src/data/instruments/index.ts`.
2. Relevant schema/type additions, notation/tuning/fingering rules, role preferences, and practical range rules.
3. Playable technique capabilities and performance mappings in `src/data/performance/`, with contextual style dialects.
4. A suitable SoundFont preset and sample bank, or an explicit family approximation. Add alternate preset routes in `soundfont/presets.ts` and event handling in `soundfont/plan.ts` only where the available samples support the technique.
5. Style-owned cells, exploration studies, solo/interaction policies, mix behavior, UI/score visibility, and export compatibility.
6. A direct per-part render and an ensemble passage demonstrating why it is needed.

Reuse a shared model only when its underlying mechanics and calibrated variant support the new instrument. A renamed generic patch is an approximation and must be disclosed. Do not add instruments merely to enlarge the ensemble or fill a quiet section.

For every exposed technique, provide a contract: musician action → legal instruments/roles/registers → note/motif/phrase/section scope → required written content → physical state/control trajectory → audible consequence → valid context and prohibited context → acceptance probe. Check both positive use and a negative case preventing accidental activation.

Examples of required specificity:

- Bowed instruments: bow/string contact, speed/force/position, connected versus renewed attacks, string changes, playable double stops, pitch transitions, and release.
- Plucked instruments: tuning, strings/frets where applicable, hand/strum ordering, pluck position, mute/dead notes, body radiation, and decay.
- Piano: independent hand/register behavior, hammer response, voiced chords, damper/pedal state, repeated-note limits, resonance, and release. A discrete chromatic approach must not become a continuous string pitch bend.
- Bellows instruments: actual instrument variant, registration, manuals/buttons, shared bellows direction/pressure, reversals, reed onset thresholds/response, pitch behavior, and coordination. Labels such as “8′/4′” or “bellows accent” require an implemented acoustic/control consequence.
- Percussion: component identity, strike location/type, open versus muted state, damping, stick/hand coordination, interlocking lanes, and distinct transient/decay behavior.
- Voice when required: range, phrase breathing, text/syllable constraints where supported, inflection, articulation, and answer relationships. If the engine cannot model a necessary vocal feature, retain a prominent limitation instead of replacing it with an instrument and claiming equivalence.

Read the sample planner and packaged preset zones; confirm the claimed articulation, bend, controller or alternate sample actually reaches playback. Do not claim fret-position, bellows, bow-noise or other nuance from a generic preset when the bank contains no such recorded or programmed variation. Record the bank source, preset identity, sample coverage and approximation limits.

Use low/middle/high registers, soft/medium/strong excitation, isolated attacks, repetitions, sustains with changing control, connected phrases, release/damping, and maximum relevant polyphony. Check pitch-bearing attack and tail separately. Preserve valid tails and controller state across section boundaries; mix-only edits must not change the instrument's musical or physical behavior.

**Exit gate:** every required technique resolves to observable controls and audio, unsupported techniques are not advertised as functional, and physical gaps have tested corrections or explicit findings.

## Phase 5 — build role-specific vocabulary and phrase grammar

Build pattern families around musical function, with independently authored realizations for eligible instrument/role contexts. Reuse only where the performance is genuinely equivalent. Separate body cells, pickups, responses, breaks, transitions, and cadences. Add variations because they express an evidenced distinction, not because the catalog needs a count.

For each cell document: stable ID, genre/style ownership, family/function, instrument and role, meter, beat unit, cycle length, rich events, pitches/voicing/register, accent/velocity/gate behavior, techniques, phrase/section/energy eligibility, interactions, valid variants, provenance, and a minimal audition. Optional fields need a documented default or a reason they do not apply.

Preserve exact fractional positions, tuplets, multi-bar cycles, rests, and durations. Current `AuthoredCell` inputs use quarter-note units; inspect conversion before authoring compound meters. `PatternEvent` and legacy grids have different representations. Never paste sixteenth-step indices into beat positions. Inspect the shared builder's projections and generated variants; if the authoring API loses necessary information, extend the typed path rather than burying behavior in descriptions or name matching.

Use explicit `worldId`, `styleIds`, role/instrument eligibility, and section/phrase constraints. Automatic arrangements must use the selected style's eligible local vocabulary. Missing content should remain a visible gap/rest; a wrong-genre fallback is not a correction. Deliberate guest-lens exploration may use another tradition only through an explicit user-selected lens.

Write phrase grammar: statement/answer, continuation, development, contrast, resolution, pickups, antecedent/consequent, phrase-level dynamics, and permissible repetition. Repetition is musically valid; variation must explain its purpose. Coordinated phrase timing should derive from shared cues and role relationships, with small bounded residual variation if appropriate. Independent random jitter is not expressive ensemble phrasing.

Write harmony per style: pitch system/tuning, scale/chord vocabulary, harmonic rhythm, cadences, bass anticipations, approach tones, voice leading, voicing density/register, and instrument constraints. Avoid global four-note limits, generic root blocks, or automatic repitching that destroys a melody. Honor literal score pitches and explicitly authored technique choices.

**Exit gate:** each required player/function/context has a usable cell or justified absence, and full phrases retain distinct player behavior after compilation.

## Phase 6 — compose exploration scaffolding and recording arrangements

The sample songs are scaffolding for exploration. They should teach how the style works and provide musical material to develop. They need not be literal copies of reference recordings, but must contain deliberately composed sentences rather than arbitrary filler.

For each style create or improve:

- Small isolated studies for defining cells/techniques, with audible start/end and player-readable purpose.
- At least one developed ensemble study with a coherent statement, response/continuation, meaningful contrast, and resolution. Use a complete natural form for the style; a 16–32-bar passage is a useful first benchmark only where musically appropriate.
- A justified section/personnel/energy plan with lead changes, supporting roles, rests, and transitions. Every active part should have a musical reason to enter.
- Demonstrations of supported solo behavior and interaction, including how accompaniment adapts and how the ensemble returns. Do not require trading or unaccompanied solos where they are inappropriate; mark those modes accordingly.
- Variants that expose meaningful exploration: different instrumental roles, accompaniment families, phrase development, or production context while retaining the defining grammar.

Keep recording-specific form, harmony, and arrangement work under `src/data/songs/`. Keep reusable genre vocabulary in the genre folder. Mark source-derived arrangements, reductions, and original exercises distinctly; do not label an invented melody a transcription. A faithful recording arrangement needs timecoded evidence for actual theme, structure, harmonic changes, personnel, and development, with uncertainty retained.

Inspect complete realized scores, not only authoring metadata. Confirm repeated instruments remain separate players; piano hands/manuals/voices remain identifiable where needed; all intended players participate; deliberate silence survives; literal melody survives; and cadences do not become recurring accompaniment. No arbitrary fill is allowed simply because a phrase or section ended.

**Exit gate:** all selected styles have musically coherent exploration examples with coverage of their defining functions and a clear distinction from recording-specific work.

## Phase 7 — calibrate style-specific mixing

Improve score, performance, and source timbre before using EQ, reverb, or loudness to hide deficits. Evaluate dry instruments, the minimally processed ensemble, and the final mix independently.

Author or validate style-specific balance, stage/depth/width, mono/stereo expectations, room and sends, foreground priority/handoffs, spectral masking, transient preservation, dynamics/buses, section automation, transitions, and output headroom. Resolve overrides over declared shared defaults; inspect the final resolved contract and all four-layer effects, not just fields in `catalog.ts`.

Use original recordings for historical/production context. Use separated accompaniment only for bounded comparisons after its artifacts are documented. Existing two-window RMS/spectral measurements cannot recover instrument faders, a room impulse response, whole-song loudness, or the correct mix. Never copy one recording's measurement profile across every style without justification.

Separate performance behavior, instrument radiation, recorded microphone/room behavior, and archival transfer artifacts. Do not distort the instrument model to reproduce a narrow-band transfer. Add recording coloration as an explicit optional production choice when needed, avoiding duplicated instrument bodies, duplicated gain/control stages, or repeated room processing.

Level-match comparisons using a declared method; retain unnormalized peak/loudness diagnostics separately. Compare equivalent musical functions/sections, not simply the same number of elapsed seconds in two different forms. A stronger RMS or matching spectral centroid is not proof of improvement.

**Exit gate:** the resolved mix has an evidenced style-specific purpose and preserves articulation, musical hierarchy, and controlled output.

## Phase 8 — validate, compare, and iterate

Run an evidence-driven loop: observe defect → assign owning layer → make a focused correction → inspect score/control changes → render fixed comparisons → evaluate → retain or revise. Hold score/settings/seed fixed when evaluating sample routing or mix; hold the bank and mix fixed when evaluating composition. Change comparison windows only for a recorded reason. Re-check shared-engine effects on other genres using representative instruments and techniques.

Use current supported commands after inspecting their arguments:

```bash
npm run lint
npm run audit:catalog
npm run test:score
npm run test:accuracy
npm run test:solos
npm run test:mix
npm run check:audio
npm run build:static
```

Select the relevant focused commands for the actual changes; avoid redundant whole-catalog audio renders. Structural coverage still needs to include every affected style. Shared mechanism changes require regression coverage outside the requested genre.

Illustrative existing targeted commands for tango:

```bash
npm run test:audio -- --style=tango-golden-age --encoded --save --details
npm run test:soundfont
npm run audit:soundfont
npm run render-song -- tango audit/genre-fidelity/tango/golden-age.wav --style=tango-golden-age --format=wav --report=audit/genre-fidelity/tango/golden-age-render.json
```

The full-song render above uses the current **catalog recording example**. It does not prove coverage of every separately authored study. Render each changed study explicitly through the same on-demand SoundFont path; add a typed targeted fixture/runner if the existing scripts do not expose it. Do not pretend an unsupported CLI flag exists.

Required validation layers:

| Layer | Acceptance evidence |
| --- | --- |
| Catalog/ownership | Every ID resolves; no unintended foreign pattern/technique; unsupported or missing vocabulary remains explicit. |
| Score | Exact timing, durations, rests, ties, pitches, voicings, registers, meter/cycles, playable directions, and complete part/section coverage. |
| Interpretation | Correct harmony, phrasing, role/solo handoffs, interactions, source-preserving written content, and justified transitions. |
| Physical controls | Correct action/state, context restrictions, shared player state, note-off and carryover, bounded values, and no fabricated control effects. |
| Audio mechanics | Stable pitch/transients/dynamics/decay, distinct techniques, no nonfinite samples or unintended silence, relevant polyphony/coordination. |
| Ensemble/output | Intended balance/foreground, no destructive masking or output clipping, preserved tails, browser playback/seek/loop and decoded export agreement. |
| Perceptual/music | Actual level-matched auditions against references and baseline, with specific observations on identity, groove, orchestration, phrasing, development, and production. |

Choose numerical tolerances from the instrument, measurement resolution, and source evidence. Record units and rationale before evaluating candidates. A generic cents/onset/RMS tolerance across all instruments and traditions is inappropriate. Report ambiguous pitch measurements, especially weak tails, instead of retuning a correct attack to fit a detector.

Retain dry probes, stems, full ensemble, ending/tails, baseline/candidate A/B, and reference-window links. For proposed authenticity judgments seek a musician familiar with the style, ideally with blinded/order-varied comparisons. Record who or what actually evaluated the audio and what they concluded. If human review is pending, report engineering validation as complete and perceptual validation as pending. Do not manufacture a listening verdict or an “authenticity percentage.”

Add focused regression tests for corrected mechanisms and meaningful musical failure cases. Do not write tautological tests that merely assert newly entered metadata equals itself. Never weaken or bypass existing guards to obtain a pass.

**Exit gate:** each finding has before/after evidence and each style has honest, independent structural, musical, physical, acoustic, and listening statuses.

## Tango worked decomposition guide

Use these as investigation prompts, not universal historical claims or prescriptions. Verify their applicability to the selected style and recordings. The existing tango folder includes distinct historical/orchestra styles, milonga/vals, song-oriented styles, nuevo/electronic approaches, and crossovers; read the live list rather than replacing it with this abbreviated illustration.

For a passage identified as **marcato-4**, investigate separate realizations:

| Part | Questions the implementation must answer |
| --- | --- |
| Piano left hand | Which bass notes/octaves/chord tones, exact register, attack weight, duration, approaches, and relationship to bass? |
| Piano right hand | Which voiced chords, attack alignment, sustain/release, register separation, and space for the melody? |
| Double bass | Which notes and articulations, playable string/bow/pluck actions, weight, release, and purposeful reinforcement or independence? |
| Bandoneon accompaniment | Which manual/register/voicing, bellows pressure/direction, short versus connected attacks, and phrase-level coordination? |
| Bandoneon lead | Does it articulate with the pulse, sustain across it, answer it, or develop an independent melodic sentence? |
| Violin players | Which melody/counterline/doubling, bowing and length, register/voicing, expressive transitions, and entrance/release cues? |

This family may contain coordinated attacks; it must not become a copied four-hit melody/chord/bass pattern assigned to every player. Melody is not obliged to play marcato merely because accompaniment does.

Investigate marcato variants, syncopated accompaniment, arrastre, cuts, lyrical sustained phrases, countermelodies, and variations only where evidenced. For an orchestra-specific style, test the actual balance, attack/release, phrase grammar, and accompaniment differences instead of cloning another style and changing its name. For milonga, vals, nuevo, electronic styles, and crossovers, investigate their own meter, cells, instrumentation, and production rather than inheriting Golden Age defaults. Do not assign 3+3+2 to all nuevo passages or a percussion kit to every tango style.

An orquesta típica benchmark may require multiple bandoneon/string players rather than one generic instrument per role. Decide personnel from the selected performance and distinguish an educational quartet reduction from orchestral reproduction. Multi-player sections need voiced parts and coordinated expression; duplicating one stem with random detuning is insufficient evidence of orchestral fidelity.

## Completion and handoff

Maintain a status table for every style: reference evidence, vocabulary, exploration studies, recording arrangement where applicable, mechanics, mixing, structural checks, rendered coverage, and listening review. Each item is `verified`, `partial`, `missing`, `failed`, or `not-applicable`, with artifact links and rationale.

The pass can be reported as **implemented and engineering-validated** only when all requested styles have complete required functions, no unresolved P0/P1 implementation defects, functioning vertical instrument/technique paths, coherent studies, and passing applicable checks. Perceptual fidelity is a separate reviewed result. Missing recordings, inadequate physical evidence, unsupported expressive features, or unavailable listening prevent an unqualified high-fidelity claim.

The final handoff must explain what changed musically and audibly, the evidence used, the checks actually run, regression implications of shared changes, and unresolved limitations. If incomplete, give an actionable backlog ordered by musical impact, with the precise missing data or implementation needed. Do not hide incomplete styles behind an aggregate pass.

## Copyable execution prompt

> Apply `docs/genre-fidelity-pass-spec.md` to genre `<GENRE>`. Audit every existing style unless I specify a subset. Preserve the intentional taxonomy and unrelated working-tree changes. Inspect the live architecture and baseline first; use verified recordings, the local YouTube-to-MP3 app for missing references, and targeted runs of the root Demucs script. Optimize Demucs within the spec's storage budgets, reuse existing outputs, prefer justified excerpts, process sequentially, and promptly remove only pass-owned intermediates. Build the durable dossier, reference manifest, coverage matrix, and review artifacts. Implement evidenced, instrument/role-specific patterns, techniques, phrasing, interactions, solo behavior, instruments, and style-specific mixing through the existing four-layer engine. Develop one convincing benchmark before broadening, then finish the remaining styles. Keep original exploration studies separate from recording-specific arrangements. Do not invent filler, silently borrow another style's data, or equate metadata/tests/spectral similarity with authenticity. Validate score, controls, dry instruments, ensemble, playback, and export; retain repeatable baseline/candidate comparisons. Continue authorized work autonomously, document missing evidence precisely, and report engineering and perceptual status separately for each style.
