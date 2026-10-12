# Catalog production pass — October 2026

## Coverage

Reviewed the instrument routes, authored synth choices, percussion take maps, and production policies for **55 genres and 421 styles**. Every world now has an explicit production starting point in `src/data/genres/_shared/production.ts`; named style overrides distinguish major acoustic, amplified, and programmed crossovers. Existing balances, rooms, section policies, and detailed Tango/Flamenco authoring remain the starting point. This is a catalog and engine pass, not 421 completed recording listening comparisons.

| Production starting point | Genres |
| --- | --- |
| Natural instruments | Andean, Chinese, Flamenco, Folk, Gamelan, Gnawa, Indian Classical, Japanese, Korean, Persian, Qawwali, Steppe |
| Ensemble | Arabic, Bollywood, Classical, Gospel, Jazz, Mexican, Taarab, Tango, Turkish |
| Percussion clarity | Bachata, Brazilian, Dangdut, Latin, Mbalax, Salsa |
| Amplified band | Afrobeat, Blues, Country, Desert Blues, Ethiopian, Kizomba, Pop, R&B, Reggae, Rock, Soukous, Swing, Zouk |
| Punchier acoustic kit | Funk, Metal, Punk, Timba |
| Drum machine | Afrobeats, Electronic, Hip-Hop, Reggaeton |
| Dance kit | House |
| Electronic low end | Amapiano, Bass |
| Distortion | Industrial |
| Space and longer releases | Ambient, Cinematic, Weird |

Style overrides include acoustic Delta/Piedmont blues, Bluegrass, Bossa Nova, chamber music, jazz fusion, synth-pop, trap/drill, acid house, electronic dangdut, dub, shoegaze, and regional electronic crossovers. Classic disco retains an acoustic kit; boogie and Hi-NRG select programmed sources. Release times derive from the style's tempo range unless explicitly authored. These are adjustable production targets, not measurements of the example recording.

## Completed changes

- Acoustic profiles have zero drum distortion and little or no parallel compression. Zero saturation uses an actual dry route, including transients above the waveshaper table range.
- Programmed styles select Electronic, 808/909, or Dance SoundFont kits through instrument dialects. Acoustic kit choices remain explicit. Existing reggaeton choices take precedence.
- All fourteen authored synth patches have distinct bank 75 presets with their own volume envelopes and lowpass treatments. Waveform PCM is shared where possible; short internal names keep presets distinct during live preparation.
- Amplified and programmed low anchors stay centered, with zero bass width and ambience. Natural ensemble seating is preserved.
- No style receives an automatic parallel sub boost. Its authored bass and shelf balance supply the weight.
- Explicit style compressor ratios and dryness win over the old Salsa-specific master defaults. A ratio of one remains neutral.
- The inactive kick-duck path contributes zero correction to the full dry instrument signal. It no longer recombines mismatched low/high crossover filters at rest.
- Kick-duck depth and drum saturation amount now automate through the same scene lanes as compressor timing, parallel gains, EQ, width, and sends.
- Güiro short scrapes and frame-drum hand gestures select their single recorded take. Other gestures retain available alternate takes.
- Log-drum takes moved to bank 66/programs 25–27, eliminating the program 22 collision with the jaw harp.
- Recorded percussion uses compact unique names for plain SF2 reader compatibility. The bundled library preserves extended names; the preparation regression checks its sample identity directly.
- Fingerstyle and picked bass waveforms keep separate source identities. Previously equal note names caused picked samples to be replaced during packaging. The highest source zones extend to MIDI 55 so authored upper bass notes remain audible; these notes transpose an existing recording.

Playback and browser export retain the same SoundFont event plan and mix graph. Parts render on demand. No audio caches, second instrument engine, compatibility gates, or instrument substitutions were added.

## Remaining gaps by sound family

| Family or genre | Remaining production limitation |
| --- | --- |
| Voice-led genres, choir, throat singing | Vowel and choir samples cannot perform words, consonants, breath, rap, vocal doubling, melisma with syllables, or regional vocal techniques. More EQ cannot repair this identity gap. |
| Gamelan, Chinese/Korean/Indian bowed instruments, regional lutes and zithers | Several catalog instruments still use family approximations. Tubular bells cannot establish bonang identity, and violin/mandolin/dulcimer routes cannot establish the regional instrument's articulation. Dedicated recordings remain necessary. |
| Gnawa, Indian and Brazilian percussion | Qraqeb, dholak, mridangam, pakhawaj, tabla, berimbau, and other regional sources remain approximate. Recorded alias routes such as riq/frame drum also lack some instrument-specific contacts and jingles. |
| Amapiano | The recorded slit log drum is not a complete electronic log-bass articulation library. Resonant electronic tone, pitch movement, and low-end decay still need dedicated source and gesture work. |
| Trap, bass music, acid and evolving synth textures | Envelopes and sampled tone selection work. Continuous legato slides, changing filters, oscillator/unison identity, and authentic ladder/highpass/bandpass behavior remain incomplete. |
| Steel guitar, brass, bowed strings, guitar-heavy genres | Technique-specific recordings for slides, mutes, bow transitions, bends, and regional guitar attacks remain incomplete. Event pitch changes are teaching approximations. |
| Experimental sample composition | The sampler supplies recorded percussion hits. It is not a general user audio sampler or a library of vocal chops, found sounds, and evolving loops. |
| Mixed-style sections | Saturation amount and ducking depth automate; saturation type still changes through master-character updates. |
| Node audio renders | The portable backend does not reproduce the browser's full compressor, saturation, and room graph. Use browser playback/export for perceptual mix comparison. |

The focused song check covers playable sample zones and authored kit/synth routing across the catalog. It does not certify instrument authenticity, vocal realism, recording transcription, loudness matching, or subjective mix quality. Existing `docs/genres/*/references.json` lists remain research seeds; listening comparisons and verified timecodes are still needed before making those claims.

General mix design references: [iZotope low-end mixing](https://www.izotope.com/community/blog/7-tips-for-mixing-the-low-end) and [iZotope multiband compression](https://www.izotope.com/community/blog/multiband-compression-basics-izotope-mastering-tips). These support checking bass in ensemble context and preserving dynamics; they do not prescribe this catalog's numerical settings.
