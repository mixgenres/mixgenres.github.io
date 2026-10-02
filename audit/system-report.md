# System checks — FAIL

Generated 2026-10-02T15:41:19.906Z; source f88aa1ccf13b.

| Check | Status | Seconds |
| --- | --- | ---: |
| types | PASS | 2.6 |
| data-boundary | PASS | 0.1 |
| integrity | PASS | 21.5 |
| style-provenance | PASS | 20.7 |
| performance | FAIL | 21.8 |
| instrument-paths | PASS | 0.4 |
| solos | PASS | 0.8 |
| sound-metadata | PASS | 0.7 |
| mix-regression | PASS | 0.6 |
| mix-settings | PASS | 20.8 |
| instrument-pcm | NOT_RUN | 0.0 |
| audio-pcm | NOT_RUN | 0.0 |

## Coverage gaps

- audio: stale report; excluded from current conclusions
- browser: missing report; excluded from current conclusions
- instruments: stale report; excluded from current conclusions
- Excerpts cannot establish whole-song LUFS or perceptual authenticity.

## Findings

- error: electronic-trip-hop/r1/synth — Expected one of accent, staccato, portamento; observed legato
- error: electronic-trip-hop/r2/synth — Expected one of accent, staccato, portamento; observed legato
- error: electronic-trip-hop/r3/synth — Expected one of accent, staccato, portamento; observed legato
- error: electronic-dubstep/r1/synth — Expected one of accent, staccato, portamento; observed legato
- error: electronic-dubstep/r5/synth — Expected one of accent, staccato, portamento; observed legato
- error: chinese-traditional-silk-and-bamboo/r1/erhu — Expected one of legato, portamento, vibrato; observed accent

## performance failure

```text
{"status":"FAIL","coverage":{"expectedStyles":222,"inspectedStyles":222},"errors":6,"warnings":0,"info":0}

```

Open system-report.html for searchable style gains, measured levels, findings and detailed JSON links.
