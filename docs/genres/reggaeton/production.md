# Reggaeton production pass

The six styles previously shared one mix character, a warm pad, a generic synth bass, and an acoustic drum kit. This pass gives each style an authored electronic kit, percussion palette, synth choice, and production balance in `src/data/genres/reggaeton/catalog.ts`.

| Style | Kit | Chords | Bass | Production intent |
| --- | --- | --- | --- | --- |
| Classic | Electronic | Saw Lead | Sub Bass | Dry dembow, short replies, centered rhythm |
| Playero / Underground | 808/909 | Square Lead | Sub Bass | Narrow stage, clipped accents, restrained ambience |
| Melodic | Dance | Poly Synth | Sub Bass | Wider harmony, softer compression, short echoes |
| Neoperreo | Electronic | Square Lead | Bass Lead | Sparse space, more drum saturation, harder tone |
| Latin Trap Crossover | 808/909 | Warm Pad | Sub Bass | Half-time pocket, low bass, lighter drum parallel path |
| Experimental | Electronic | Halo Pad | Bass Lead | Wider textures with a stable centered low anchor |

The sample plan keeps written kit components intact. Sampler notes select from a small style palette of hats, claps, rim clicks, shakers, or auxiliary percussion instead of arbitrary toms and crashes. This palette changes the example's sound without restricting which roles or patterns a student may try.

Sub Bass, Bass Lead, and Poly Synth are rebuilt from the pinned GeneralUser waveforms with distinct authored volume envelopes and lowpass settings. The subsequent catalog pass extends these treatments to all fourteen authored synth choices. Unique internal instrument names prevent SoundFont packaging from merging differently treated presets that share waveform PCM.

The common master graph now accepts explicit compressor attack/release, drum saturation, parallel drum compression, and parallel low-band enhancement. Reggaeton uses no extra parallel sub boost. Bass width remains zero through catalog calibration. Both live playback and browser export consume these controls, including scene automation for compressor timing and parallel gains.

## Evidence and remaining sound gaps

The production changes are authored targets. The regression suite checks routing, packaged generator values, audible finite synth PCM, distinct style profiles, mono bass, and matching fresh/updated master graphs. Passing these checks does not establish perceptual similarity to a released recording.

`references.json` contains five or six distinct streaming recordings per style, with comparison prompts. Only catalog metadata was inspected during this pass; listening comparisons and verified timecodes are pending. No reference MP3s were downloaded.

- The vocal lead still uses a vowel/choir SoundFont. It cannot perform intelligible rap, consonants, breath, sung syllables, vocal doubling, or pitch-correction phrasing. This is the largest identity gap for finished reggaeton songs.
- The 808/909 kit is a real named sample preset from the existing source. It is not a new library of contemporary producer kick, clap, or tuned 808 articulations.
- SoundFont volume envelopes and lowpass settings now work for all fourteen presets. Oscillator identity, unison, highpass/bandpass/ladder behavior, and per-note filter movement are not fully represented by the existing GM-based patch routes.
- Authored pitch bends can move sample pitch; continuous legato 808 slides across arbitrary intervals still need dedicated event semantics and release handling.
- Section gain, width, room, compressor timing, and parallel gains automate. Drum saturation amount and kick-duck depth now automate per scene. Saturation type still updates when the master character changes.
- Node command-line renders use the portable mix path when Web Audio is unavailable. They do not audition the browser's compressor, distortion, room, or mastering graph. A browser listening comparison is required before calling this release-quality mixing.

Example songs remain teaching adaptations. The linked recordings do not certify their notes, harmony, instruments, arrangement, or measured loudness.
