# Checks

- `npm run check`: one catalog pass over every exported data property and resolved style/profile, then focused musical, sound-resolution, solo, mix and playback regressions. No PCM rendering. Stops at the first failed gate.
- `npm run audit:catalog`: only the complete data/profile pass: references, finite numbers, probabilities, ranges, weighted distributions, provenance, physical DSP, gestures, kits, solo policies and mix settings.
- `npm run check:audio`: fast gates first (reused when the source fingerprint is unchanged), then PCM regression fixtures, representative instrument mechanisms and two short ensemble excerpts per selected style. `check:full` is an alias; neither renders the catalog.
- `npm run audit:browser`: native playback buffers and Web Audio master in the chosen browser at `http://127.0.0.1:3001/scripts/browser-mix-audit.html`. Defaults to renderer coverage; a specific style can be selected.
- `npm run test:audio -- --style=<id>`: targeted portable PCM. Add `--encoded` for MP3 stream and decoded loudness checks (requires ffmpeg/ffprobe), `--save` to retain clips in `/tmp/mixgenres-audio-regression`, or `--details` for per-stem diagnostics.
- `npm run audit:instrument-render -- --instrument=<id>`: targeted physical-model probes. Defaults to representatives covering shared modules, model IDs, excitation and sustain types. `--details` retains individual metrics.
- `npm run audit:report`: show the last run's result and whether its sources have changed.

Reports in `audit/*.json` contain coverage and actionable findings. Successful runs print one line per gate. Type checking belongs to `lint`/`build`; it is not repeated inside audits. `test:all` adds targeted audio and a production build.

`audit/` is disposable generated output, ignored by Git. The app never reads it. Delete the entire folder at any time; checks regenerate reports and rerun fast gates if their optional cache is absent. The report viewer prints a short message when no saved report exists.

All styles and profiles receive structural checks; numerical variations of the same renderer do not require separate audio renders. The audio selector automatically includes newly introduced renderer mechanisms. Explicit IDs are available for changes needing listening or focused diagnosis.

Node checks cover stems, portable mixing and export. Browser checks cover the native master and the PCM buffer used by the player. Passing either says what was measured; it does not claim every device or perceptual arrangement has been verified. Short-excerpt loudness is not a whole-song target. Isolated stem headroom is not reported as a clipping failure.
