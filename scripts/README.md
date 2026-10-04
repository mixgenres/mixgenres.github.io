# Checks

Playback and exports use the instrument DSP renderer at 44.1 kHz. UI edits prepare the four [music-engine layers](../docs/engine-pipeline.md) and cache complete player/section audio, including outgoing holds and release tails. The player reads one prepared continuous mix. Instrument sound is authored through DSP models, physical parameters and genre dialects.

- `npm run check`: one catalog pass over every exported data property and resolved style/profile, then focused musical, sound-resolution, solo, mix and playback regressions. Complete-example generation uses representative mix mechanisms; `npm run audit:examples` compiles all 420 full arrangements. No PCM rendering. Stops at the first failed gate.
- `npm run audit:catalog`: only the complete data/profile pass: references, finite numbers, probabilities, ranges, weighted distributions, provenance, physical DSP, gestures, kits, solo policies and mix settings.
- `npm run check:audio`: fast gates first (reused when the source fingerprint is unchanged), then PCM regression fixtures, representative instrument mechanisms and two short ensemble excerpts per selected style. `check:full` is an alias; neither renders the catalog.
- `npm run audit:browser`: native playback buffers and Web Audio master in the chosen browser at `http://127.0.0.1:3001/scripts/browser-mix-audit.html`. Defaults to renderer coverage; a specific style can be selected.
- `npm run test:audio -- --style=<id>`: targeted portable PCM. Add `--encoded` for MP3 stream and decoded loudness checks (requires ffmpeg/ffprobe), `--save` to retain clips in `/tmp/mixgenres-audio-regression`, or `--details` for per-stem diagnostics.
- `npm run audit:instrument-render -- --instrument=<id>`: targeted physical-model probes. Defaults to representatives covering shared modules, model IDs, excitation and sustain types. `--details` retains individual metrics.
- `npm run audit:report`: show the last run's result and whether its sources have changed.
- `npm run test:score`: exact notation, band relationships, written ties/fingering/drums, cache invalidation and preparation contracts.
- `npm run audit:accuracy`: complete notation, band interpretation and prepared physical controls for all catalog styles, with review JSON.
- `node --import tsx scripts/benchmark-dsp-cache.ts`: complete default Golden Age tango; cold/warm/mixer/one-bar timing and DSP cache misses. Saves a full rendered WAV and benchmark report in `audit/`.
- `?genre=tango&style=tango-golden-age&dev=audio`: main-player UI diagnostics for prepared duration, cache reuse and click-to-output signal. This is an output probe, not a microphone measurement of the speakers.

Reports in `audit/*.json` contain coverage and actionable findings. Successful runs print one line per gate. Type checking belongs to `lint`/`build`; it is not repeated inside audits. `test:all` adds targeted audio and a production build.

`audit/` is disposable generated output, ignored by Git. The app never reads it. Delete the entire folder at any time; checks regenerate reports and rerun fast gates if their optional cache is absent. The report viewer prints a short message when no saved report exists.

All styles and profiles receive structural checks; numerical variations of the same renderer do not require separate audio renders. The audio selector automatically includes newly introduced renderer mechanisms. Explicit IDs are available for changes needing listening or focused diagnosis.

Node checks cover stems, portable mixing and export. Browser checks cover the native master and the PCM buffer used by the player. Passing either says what was measured; it does not claim every device or perceptual arrangement has been verified. Short-excerpt loudness is not a whole-song target. Isolated stem headroom is not reported as a clipping failure.
