# Large-ensemble playback optimization — 7 October 2026

The target is 12, 15 and 30 audible players, including guitar, bandoneon, trumpet, congas, piano and cello. These changes replace the production instrument rendering path for both playback and audio exports. There is one sound model per instrument across devices and delivery formats.

## What changed

- `compactInstrument.ts` generates small band-limited spectra and resonant modes rather than rebuilding a native DSP graph for every instrument section. Instrument calculation runs at 22.05 kHz; deterministic linear reconstruction produces 44.1 kHz stereo output. Generated tables have a 1.5 MiB limit per worker. No samples, SoundFonts, downloaded instrument bank or neural runtime were added.
- Bandoneon retains fundamental/octave reeds, bellows direction, pressure and attack differences. Trumpet retains harmonic formants, tonguing, vibrato, falls and doits. Congas retain component tuning and different open/slap/muted/heel responses. Piano has an evolving multi-partial hammer/string response and damper release. Cello has bowed body/bridge spectra, bow texture, vibrato and a separate pizzicato decay.
- Guitar uses the same authored genre/variant parameters as the arrangement engine: nylon/acoustic/electric setup, body construction, excitation position, pick/nail/finger noise and drive. Muted strings and body hits are distinct; harmonics, bends, slides, rasgueado, alzapúa and tremolo have audible responses. Existing chord spreading, rhythms, voicings, phrasing and genre technique selection remain in the band interpretation layer.
- Compilation shares resolved sound parameters within each player/section. Prepared audio identities use the compiled physical key rather than repeatedly serializing complete sound parameter objects. Section planning/hashing is cached per player; 30 players do not thrash an eight-entry ensemble-wide cache. Worker payloads omit whole-song interpretation and inspector traces.
- Live edits retain the active audio snapshot, sources and scheduler until an independent replacement is ready. Tempo changes preserve the sounding bar and fractional beat. Under pressure, replacement audio is staged ahead instead of chasing the moving playhead. Mixer-only edits prepare at the current position using cached physics. Superseded edits, pause, seek and cancellation remain effective.
- Original note age, release, bends and controller history survive direct excerpt rendering. Canonical note-relative blocks preserve exact cropped/full PCM, including reconstruction between calculation samples. Playback/export cache versions were bumped to expire previous sounds.

## Browser measurements

The audit uses `scripts/lib/densePlaybackFixture.ts`, a 48-bar big-band score extended with independent audible chairs. The final fixture includes guitar chord parts and the priority instruments; it has 3,668 / 4,591 / 8,679 notes for 12 / 15 / 30 players. It is a workload test, not an artist transcription.

The earlier native 15-player run took 45.4 seconds from input to signal and exhausted its prepared audio after 9.5 seconds. The final compact 30-player fixture started in 6.78 seconds, including 2.03 seconds waiting for compilation and 4.62 seconds preparing its startup reserve. It continued through multiple loops with zero reported underruns. A 30-player tempo edit committed in 8.79 seconds while the old audio continued; the previous implementation took 96 seconds chasing its moving playhead. Retained prepared PCM stayed around 31–33 MiB under the mobile limits. These are different-sized workloads, not a controlled speedup ratio.

These results use a local production build, desktop CPU and the constrained mobile memory policy. They do not certify an actual phone or perceptual realism against recordings. Cold Play is still preparation-bound; prepared Play and live fader changes are measured separately below.

<!-- Additional final browser measurements are appended after verification. -->

## Preparation benchmark

`node --import tsx scripts/benchmark-playback-preparation.ts` compares twenty four-second transport windows per player, asserting identical physical keys and unchanged musical data. Latest local results:

| Players | Replan each request | First cached pass | Warm cached pass |
|---|---:|---:|---:|
| 12 | 78.70 ms | 15.94 ms | 0.67 ms |
| 15 | 66.99 ms | 15.89 ms | 0.83 ms |
| 30 | 197.28 ms | 30.60 ms | 1.27 ms |

For 30 players, modeled serialized worker payloads fell from 345,965,122 to 30,719,347 bytes across 1,565 requests (91% smaller). Serialization counts repeat shared references and therefore are an estimate, not actual structured-clone wire bytes. These figures exclude synthesis and studio mastering.

`node --import tsx scripts/benchmark-dense-playback.ts` separately exercises 12/15/30-player compilation and three consecutive four-second audio windows, checking that every chair contributes and all PCM is finite. Node's portable studio master differs from the browser's native master; its timings must not be presented as phone latency.

## Validation and auditions

- 96 targeted transport, cache, rendering, instrument-balance and articulation tests pass. They include 30 retained independent voices, 30 reusable player plans, slow moving-playhead replacement, mixer-only replacement, cancellation, pause, precise hold/release crops, controller changes and shared export PCM.
- The default ensemble audio harness passes with no audio findings; the large big-band encoded case is checked separately. Ten review MP3s have valid stereo 44.1 kHz streams.
- Strict TypeScript/API checks and the production build pass. The full structural check still fails on existing composition assertions: tango expects `accent` but receives `staccato`, and the pipa phrase vocabulary lacks `vibrato`. Expanded reference-calibration checks also flag existing ambient track-count and salsa anticipation expectations. These assertions concern authored musical decisions before synthesis; concurrent music/data changes were preserved.
- The resulting main bundle remains large (about 4.54 MB, 585 KB gzip), driven by the catalog and application. This optimization adds no instrument media assets to the shipped site; it does not claim the whole application is a tiny download.

Generate the review clips with `node --import tsx scripts/render-compact-review.ts`. They live in ignored `audit/playback-review/`: bandoneon, trumpet, congas, piano, cello, four genre guitar parts, and a 30-player ensemble. Their instrument cores are the production shared cores; isolated parts and the portable export master are labeled in the review page. Listening against reference MP3s remains necessary before calling these approximations recording-faithful.

Run the browser audit at `/scripts/browser-song-player-audit.html?dev=audio&budget=mobile`, or `budget=mobile-single` to enforce one rendering worker with the small-device limits. Use a production audit build or a development server without automatic reload during sustained testing.
