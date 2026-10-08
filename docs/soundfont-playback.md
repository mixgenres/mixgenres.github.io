# SoundFont playback

SoundFont is the only instrument playback engine. The editor's play control creates `SoundfontSongPlayer`; MP3/WAV export and offline audits render the same per-part sample events. There is no engine selector or generated-oscillator fallback.

## Per-part rendering

The score compiler owns notation, interpretation, technique decisions, transitions, phrasing and tuning. `soundfont/plan.ts` resolves each requested part's notes directly to bank, preset, key, velocity, controller and bend events. The live AudioWorklet schedules those events directly. Export renders each requested part through `SampleRuntime`, then sends the result through the shared mix and master.

The engine does not pre-render songs or retain rendered PCM stems. It computes the musical performance and only plans the requested parts when playback or export needs them. Notation and score interpretation may be reused because they avoid repeating musical decisions; no note-by-note physical voice layer or audio cache sits between the score and sample plan.

The browser downloads only banks used by the current parts. Downloads are hash-checked and kept as compressed assets in the bounded browser cache. The live graph decodes only required banks and owns its sample data for the session. This asset cache avoids repeated large downloads without adding PCM cache invalidation or mix identity layers.

## Instrument and technique routing

The app packages 17 banks with 116 presets and 2,066 samples, totaling about 131.5 MiB compressed. Piano, kit and electric-guitar banks use compressed sample formats. Enhanced acoustic guitar, piano, bass, upright bass and tango bandoneon recordings complement General MIDI family mappings. See the [bank manifest and source notes](../src/assets/soundfonts/README.md).

The score remains responsible for attacks such as rasgueado, tremolo, rolls and ornaments; the sample planner does not add a second burst on top. Articulation changes select alternate presets where available and shorten note holds for staccato or choke actions. Pitch bends and controller history are replayed when seeking into held or releasing notes. Tango bandoneon push/pull directions select separate presets built from one twelve-note recording set, with a modest preset adjustment for the close direction.

Some regional instruments and named techniques remain family approximations. Spanish-guitar mutes and harmonics use alternate patches; not every mute, fret position, bellows nuance, bow noise or regional drum stroke has a dedicated recording. Preset routing is testable, but a mapping is not evidence of acoustic authenticity. The all-style reference comparison is a mix/timbre screen, not note-for-note verification; human listening remains necessary.

## Live transport and output

AudioWorklet frames, rather than React timers, drive note events. Pause retains sample state; seek primes sample voices and relevant controller history before playback resumes. A replacement plan catches up while the old graph continues, then fades in when ready. Short ramps on persistent mixer strips keep balance edits click-free.

Live playback uses a linked stereo peak guard after the shared mix. Offline exports use the common mastering chain. Browser mastering and the portable Node master use different backends, so final waveforms are not guaranteed to be sample-identical. MP3 encoding streams fixed-size blocks through a small encoder worker; only the current export's rendered PCM is held until encoding completes.

## Validation

`npm run test:soundfont` verifies preset/sample integrity, catalog routing, guitar articulation patches, bandoneon direction mapping, sample ownership, seek crops, controller history, direct on-demand rendering and MP3 streaming. `npm run check:audio` adds sample rendering, technique, balance and export regressions. `npm run benchmark:soundfont` measures direct offline mixes; `npm run audit:soundfont` and the browser audit page exercise live transport. These checks are engineering evidence, not a substitute for listening across devices and styles.
