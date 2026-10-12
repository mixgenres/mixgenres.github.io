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
- The sample-song part audit covers all 421 styles and 2,191 instrument/role combinations. Every part has at least two style-owned playable patterns, a cell-derived practice study, and distinct concise picker labels. Practice studies remain optional, so the recording-style arrangement continues to use its authored phrase cells.

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

## Catalog authenticity pass — October 2026

The pass checked all **55 genre worlds, 421 style definitions, 421 sample songs, and 18,498 runtime-selectable patterns** against style ownership, labels, reference keys, mix/source routing, and study/arrangement boundaries.

- All 421 sample-song entries resolve a matching style reference key and retain the same reference credit/title as the style metadata. The internal reference-quality cues are present for every style; only four genre reference files currently contain linked recording lists: Chinese, Flamenco, Reggaeton, and Tango. Those are listening seeds, not complete coverage or verified comparisons.
- Pattern labels stay concise and distinct within the instrument/role picker. Some styles still have one authored core cell per part; the extra choices are local practice studies derived from that cell, not independent recording transcriptions.
- A repeated three-attack phrase-close placeholder was used by 394 styles. This includes one identical tom/snare/snare grid repeated across many drum parts. These **1,973 cells** remain available as neutral timing practice with honest labels, but are no longer attached as automatic style cadences. The arrangement keeps its authored core phrase when there is no style-specific ending.
- The **78 generated two-bar turnaround exercises** are explicitly tagged as practice variations. Automatic song arrangement skips them, while students may still choose them deliberately.
- Across **2,119 instrument/role combinations**, each currently has one authored core phrase; menu breadth comes from labeled study variations based on the local source phrase. These studies can teach reduction, response placement, technique, and development, but they do not replace a wider authored repertoire per part. That is the largest remaining pedagogy/content gap; adding unsupported genre phrases by algorithm would make the catalog look broader without establishing stylistic correctness.
- The generic onset-grid boundary nudge was removed. Explicit Tango arrastre, Piazzolla 3+3+2, and dembow mechanics remain available where the style specifies them; other patterns only change at boundaries when the catalog supplies a phrase cell.
- Templated style descriptions now summarize each authored pattern cue, meter, tempo, lead/support pairing, bass motion, and form. Curated Tango, Flamenco, Chinese, and other hand-authored descriptions stay intact.

The sound-source review found no additional, locally available recording library to package. The project already uses VCSL material; VCSL's upstream library is CC0, but each source asset still needs to be inventoried and packaged deliberately. [VCSL license and scope](https://github.com/sgossner/VCSL/blob/master/README.md). Commercial plugin libraries are not drop-in SoundFont sources: Spitfire's license prohibits redistributing its samples or repackaging them as sampler programs. [Spitfire Audio EULA](https://www.spitfireaudio.com/pages/spitfire-audio-end-user-license-agreement).

The priority source gaps remain real voice and choir, regional winds/strings/lutes, and dedicated electronic log-bass synthesis. The current project tree has no source pack for those instruments to add in this pass. Licensed source media and a format/gesture audit are required before expanding the shipped browser packs. This pass improves how catalog cells are taught and selected; it does not certify a close match to the recordings.

General mix design references: [iZotope low-end mixing](https://www.izotope.com/community/blog/7-tips-for-mixing-the-low-end) and [iZotope multiband compression](https://www.izotope.com/community/blog/multiband-compression-basics-izotope-mastering-tips). These support checking bass in ensemble context and preserving dynamics; they do not prescribe this catalog's numerical settings.

## Playback level audit — October 2026

The playback chain was attenuating complete arrangements before the shared master. `ensembleHeadroom` used `1.8 / sqrt(track count)`, taking an 11-part salsa arrangement down by 5.3 dB and a five-part band down by 1.9 dB regardless of the parts' actual energy. The live master had no program makeup, while the portable render added only up to 4 dB after mixing. On dense 12-second generated sections, pre-fix sample-domain active RMS measured -20.4 dBFS for rock alternative, -24.6 for salsa dura, -29.6 for Amapiano classic, and -24.9 for deep house. These are PCM RMS diagnostics, not LUFS or reference-track measurements; they exposed the level loss, not a target loudness.

The part audit also found quiet source media. The first VCSL log-drum take peaked at -26.1 dBFS (the second at -19.2 and third at -12.0), so Amapiano's low pattern could be buried before role or master processing. Recorded VCSL families now receive one capped source trim per instrument/take group. The mix chain uses a fixed 8 dB program gain around each style's glue settings, stops shrinking every track by count, and guards a linked stereo -2 dBFS sample peak to leave lossy-encode reconstruction room. User faders and style-specific compression, bass balance, brightness, width, and room controls remain active.

The level design follows the distinction between sound quality and distribution loudness: AES describes normalization as applying one gain value to the full file, warns that real-time correction can override intended dynamic changes, and gives separate guidance for music tracks. EBU R 128 specifies a -1 dBTP maximum for general linear-programme production; the live and PCM export guard enforces a -2 dBFS *sample* peak to allow for lossy reconstruction, and does not claim to measure true peak itself. [AES loudness normalization](https://aes.org/resources/audio-topics/loudness-project/loudness-normalization/), [EBU R 128](https://tech.ebu.ch/docs/r/r128.pdf).

Four 20-second ensemble windows, plus the six-second SoundFont release reserve, were rendered through the portable Node export path (26.1–26.4 seconds after MP3 decode) and measured with EBU R 128 loudness/true-peak metering: Amapiano classic measured -18.7 LUFS / -2.0 dBTP, rock alternative -18.0 LUFS / -2.1 dBTP, salsa dura -17.0 LUFS / -2.2 dBTP, and deep house -17.1 LUFS / -1.8 dBTP. These are repeatable level checkpoints, not matches to the named recordings; the Node path does not run the browser's full compressor, saturation, and room graph. All four MP3 decodes stayed below the -1 dBTP linear-programme ceiling.

Recorded-source gaps remain material to fidelity. The shipped voice/choir presets are not sung vocals; GeneralUser synth waves do not provide continuously moving filters or oscillator/unison behavior; the slit log drum is a struck wooden sample rather than the full resonant, sliding electronic log-bass source; most regional wind/string routes remain GM-family approximations. The SoundFont notes in `src/assets/soundfonts/README.md` identify the exact source work and its license terms, and explain why the cached CdM gamelan mapping archive has no sample media to bundle. This pass improves gain staging and captured-hit consistency; it does not establish a listening-verified match to the reference recordings.
