# System checks

`npm run check` runs types, data boundaries, all-style generation/provenance,
section technique coverage, all instrument paths, solo and sound metadata,
master regression tests, and the structural mix audit. Every gate runs even if
an earlier one fails. Exit code 1 means a gate or current report contains errors.
A report marked PARTIAL means important audio coverage is absent or incomplete;
it is not an audio-quality pass.

- `npm run check:audio`: those checks plus every instrument's PCM probes and
  default-genre/contrasting-style opening and dense-ensemble renders.
- `npm run check:full`: also renders excerpts for every style in the catalog.
- `npm run audit:browser`: starts a local audit page at
  `http://127.0.0.1:3001/scripts/browser-mix-audit.html`. Choose all styles for
  exhaustive style coverage of the native OfflineAudioContext master.
  Completed results are saved in `audit/browser-mix-audit.json`; audio excerpts
  are saved in `/tmp/mixgenres-browser-audit`. The server binds to loopback.
- `npm run audit:report`: rebuilds the view using existing results without
  rerunning tests. Changed sources make previous checks and reports stale.
- `npm run audit:mix`: inspects structural gains and mix profiles for all styles.
- `npm run test:mix`: verifies initial/update master equivalence, gain-control
  baselines, silence preservation, disposal and six-channel bus separation.
- `npm run test:audio -- --style=tango-tango-electronico`: focused PCM/export
  measurement. `--all-styles` selects the catalog; `AUDIO_START` / `AUDIO_END`
  select validated zero-based half-open shards. Focused and sharded reports
  cannot replace the canonical full/subset report.

Open `audit/system-report.html` for a searchable view of genres, styles,
instrument gain factors, warnings, stem/bus/output levels and coverage gaps.
The companion Markdown file is concise and the JSON preserves full evidence.
Reports include generation time and a fingerprint of source files. Old reports
are excluded from current conclusions instead of silently combined.

## What the measurements mean

Structural gain is the product of instrument makeup, assigned-role trim,
user track level, CC7 volume and CC11 expression. Velocity is a separate
per-note excitation control. None of those numbers is acoustic loudness.
The structural audit preserves silent and unused lanes and shows the selected
pattern versus compiled notes for each section.

PCM diagnostics are taken before encoding. They report sample peak, RMS,
active-window RMS, crest factor, DC offset, samples at/above full scale,
stereo correlation and mono RMS. An isolated stem or unmastered bus can exceed
full scale in float PCM; that is a headroom warning, not automatic proof of
clipping. Non-finite audio or a rendered stem with compiled notes but no sound
fails the check. Encoder peak trim is reported so normalization cannot conceal
an overloaded sum.

Decoded MP3 measurements use ffmpeg EBU R128 to report LUFS and true peak after
encoder trimming and codec effects. A 2-second excerpt's LUFS and loudness range
are not whole-song targets. These diagnostics require `ffmpeg` and `ffprobe`.
Missing tools produce a failed measurement rather than a partial PASS.

Node rendering measures Elementary stems and style DSP. The native browser
audit measures the actual Web Audio master. Both use song track levels and
roles, preserve controller state for later excerpts, and sample openings plus
the busiest ensemble window. The report identifies unmeasured live scheduling,
long-term playback, whole-song loudness and perceptual authenticity.

The old `gain-calibration --apply` did not apply anything. Build now validates
without pretending to calibrate; `gain-calibration` remains an alias for the
read-only mix audit. The former seven-instrument "authenticity" probe is
consolidated into the full catalog identity/path audit. Runtime catalog defaults
are traced separately from missing data and hardcoded fallbacks.
