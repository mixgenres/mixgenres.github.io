# Default-reference audio validation

The local recordings reveal substantial differences between the generated studies and their references. The earlier technique audit improves the path from written gesture to physical source, but that does not establish recording-level resemblance. This pass measures the actual encoded MP3s and corrects several arrangement and renderer defects exposed by those measurements.

## Reproduce the workflow

```sh
# One file, including names with spaces and accents:
./remove.sh 'Aníbal Troilo - Quejas de Bandoneón.mp3'
# Inspect availability without separating audio:
node --import tsx scripts/prepare-reference-samples.ts
# Separate only the catalog's default reference in each genre:
node --import tsx scripts/prepare-reference-samples.ts --separate --device=mps
# Render app defaults through the shared app mixer, then decode both MP3s:
node --import tsx scripts/validate-default-reference-audio.ts \
  --genres=tango,flamenco,salsa,ambient --phase=review --seconds=20
# All genres, bounded concurrency, waiting for the preparation sweep:
node --import tsx scripts/validate-default-reference-audio.ts \
  --jobs=3 --wait-for-references --phase=validated --seconds=20
# Resume only clips whose render window and source fingerprint still match:
node --import tsx scripts/validate-default-reference-audio.ts --resume --phase=validated
```

`remove.sh` preserves batch operation and adds one-file input, explicit device selection, output directory selection and forced regeneration. Each invocation owns its scratch directory. Outputs are encoded to a temporary file and moved into place when complete; existing outputs must contain an audio stream before they are reused. MPS inference requires the existing native Apple Silicon environment; the comparison itself uses NumPy and ffmpeg.

The preparation manifest matches the canonical style's default reference by normalized artist and title, including diacritics. It does not substitute another recording when a match is absent or ambiguous. It records failures and continues to the next genre. Separation logs are in `audit/reference-separation/`. Comparisons, render diagnostics and review clips are in `audit/reference-comparison/`.

## What is compared

Reference preparation separates the complete supplied recording into vocals and accompaniment with the existing HTDemucs fine-tuned model. The comparison decodes the resulting accompaniment MP3 and the application's instrumental MP3 at 22,050 Hz. The application render keeps the selected style's score, role assignments, mixer levels, pans, controller events and shared export path. It excludes generated voice-family tracks for the instrumental comparison.

The default comparison window is the first 20 seconds, not the complete composition. This is a screening pass for sound balance, register, texture and onset density. The CLI can render another window with `--start` and `--duration`, and the Python comparator accepts independent reference/generated start times. Full-song arrangements are available with `render-song.ts --catalog=full-song`; they are distinct from the app's default short study and must be reviewed separately.

Measurements include normalized spectral energy, centroid, rolloff, six frequency bands, spectral-flux attack estimates, envelope range, stereo correlation and side/mid energy. Spectral energy averages channel powers before aggregation: phase cancellation in a wide recording must not masquerade as missing harmonics. Silence and nonfinite PCM are rejected. Spectral distances are gain-independent. A louder render alone cannot count as a timbre improvement.

The reported spectral distance is the square root of Jensen–Shannon divergence between 24 logarithmic energy bands. Zero denotes the same normalized band distribution. It is **not** a perceptual similarity score, an authenticity percentage or a learned acceptance threshold. Attack estimates can respond to beating and changing sustained harmonics. Side/mid energy can reflect a level imbalance as well as true decorrelation, so it must be read with stereo correlation. Aggregate chroma contains harmonic energy and is not a reliable transcription or key detector.

## Priority findings and changes

### Tango — Aníbal Troilo, Quejas de Bandoneón

The initial MP3 concentrated its energy below 1.5 kHz. Its centroid was approximately 688 Hz versus about 1,615 Hz in the separated reference. The stem diagnostics showed piano dominating the bandoneon and violin. Instrument makeup gains were adjusted to reduce this masking and restore the lead instruments' contribution. These are renderer normalization changes, not a new reference-specific EQ applied to the exported file.

The revised study has a centroid around 1,023 Hz and a smaller spectral distance. A substantial upper-midrange deficit remains. The reference orchestration, melody, phrase dynamics, bow/reed spectra and recording transfer are not reconstructed by matching the centroid. The existing tango source/filter instruments remain approximations; the prior [technique/physics analysis](technique-physics-analysis.md) and [tango sound direction](tango-sound-direction.md) describe those limits.

### Flamenco — Camarón de la Isla, De tus ojos soy cautivo

The former soleá default repeated a high-register ten-note tremolo cell every bar, leaving large gaps elsewhere. The recording's opening is guitar-led and much lower in spectral balance. The revised salida contains guitar alone; the default historical soleá ensemble no longer automatically inserts cajón. Guitar accompaniment now alternates bass and chord answers, with explicit stroke directions and simultaneous golpe. Tremolo is a phrase-ending falseta gesture followed by alzapúa, rather than the repeating accompaniment motor.

A related end-to-end bug appeared during validation: independently probabilistic attacks could delete a finger from a written quintuplet. Notated tuplet sequences now retain their attacks, preserving p–i–a–m–i and the ratio through interpretation and export. The tremolo and alzapúa are combined in a single closing variant so that selecting the former does not hide the latter.

The original centroid was approximately 856 Hz versus roughly 437 Hz in the reference. The revision is around 537 Hz, with a much smaller normalized spectral distance. This is an original technique study, not a transcription of the recording's falsetas. Its phrase envelope and nearly mono presentation still differ from the supplied reference.

### Salsa — Willie Colón and Héctor Lavoe, Che Che Colé

The initial tres stem was roughly 46 dB above the electric-bass stem in active RMS. Its inherited guitar makeup gain suppressed the rest of the ensemble during final normalization. Tres and piano gain staging were corrected. Bass receives an explicit genre balance adjustment, and finger-plucked bass now uses a triangular initial string displacement and softer pickup tone response. Noise-only excitation can suppress the lowest string mode; turning up that source merely amplifies its upper modes. Pick, slap and pop retain their wider contact bandwidth and collision components.

The accompaniment now distinguishes conga heel/ghost/slap/open-tone sequencing, bongo martillo-like alternation, timbales shell-like rhythmic placement and the separate clave timeline. Piano/tres figures use individual chord tones instead of identical full-chord stabs on every onset. The bass anticipations have longer fingered sustains.

These changes improve a general salsa-dura study. They do not reconstruct this particular arrangement: Fania describes Che Che Colé as a bomba/calypso hybrid, with a Ghanaian song adaptation. Its distinctive rhythmic construction cannot be certified by checking a generic son-clave pattern. [Fania's account, prepared with Colón's input](https://fania.com/record/a-man-and-his-music-the-player/) explains that distinction. The reference's trombone-led orchestration and bass balance still require separate recording-specific analysis.

### Ambient — Brian Eno, An Ending (Ascent)

The former atmospheric default used a low piano note plus two pads on essentially the same modal root, retriggered each bar. A width parameter did not create independent stereo content. It also exposed a synth bug: unison always introduced a detuned sawtooth, even when the patch selected sine; a generic second ADSR then reshaped the patch's own envelope.

Unison now respects the selected waveform and voice count. Explicit patches own their envelope/filter/saturation path, and voice allocation includes their declared release. The atmospheric study uses independent middle/upper-register pad voices with overlapping notes and a slow breathing patch. The parts have different pitches, entrances and stage placement. This generates actual independent content rather than widening a shared mono drone.

The initial centroid was approximately 180 Hz and stereo correlation 0.98. The revised example is around 379 Hz with correlation about 0.34. The reference is around 433 Hz and correlation 0.02. The initial recording fade, changing choral spectrum, harmonic progression and spatial production remain different. No claim is made about the precise synthesizer used on Eno's recording.

## Missing default references

These titles have no unambiguous local sample match and are printed and skipped:

- Chinese: Jiangnan Sizhu ensemble — Huanle Ge
- Classical: Mozart — Symphony No. 40, I
- Gamelan: Central Javanese court ensemble — Gambirsawit
- Indian classical: Bhimsen Joshi — Raga Miyan ki Todi
- Industrial: Front 242 — Headhunter
- Metal: Black Sabbath — Iron Man

## Limits and acceptance

Demucs accompaniment can alter attacks, sustain, leakage and stereo balance. The original recording should be checked alongside the separated reference. For flamenco and ambient, the opening original and separated measurements were also compared; they support the register/stereo findings rather than showing those differences to be separation artifacts.

The supplied recording and generated study are not beat- or phrase-aligned transcriptions. Differences may reflect composition, ensemble size, register, performance, production or the chosen window. No automatic report should label a genre “authentic” or a recording “matched” based on these fingerprints. Reports deliberately retain `needs-musical-review`.

Listen to level-matched reference, original-generation and revised clips, then check instrument identity, articulation, compás/clave, phrasing, voicing, density and stereo space separately. Before accepting a close recording imitation, evaluate additional windows and the full arrangement with musicians familiar with the tradition. The sweep is reproducible evidence for finding defects; it is not a substitute for that listening decision.

A further harmonic timing correction keeps salsa's written anticipations intact: the default no longer shifts the entire band by a sixteenth note. Bass theory's quarter-beat anticipation positions are converted from the interpreter's bar fractions before comparison; the late attack can then address the next chord's root. This avoids a displayed anticipatory rhythm that actually sounds the previous harmony.
