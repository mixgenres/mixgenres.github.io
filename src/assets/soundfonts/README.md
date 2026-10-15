# Distilled SoundFont assets

These are selectively rebuilt SF3 banks with Ogg Vorbis samples, then compressed with gzip. The `.sfpack` extension prevents static servers from treating the file as HTTP Content-Encoding and silently decoding it twice. The loader also accepts transparently decoded banks. SoundFont sample loops, velocity/key zones, generators, modulators and stereo links survive repackaging; waveform compression uses Ogg Vorbis at quality 6.

| Pack | Compressed MiB | Presets | Samples |
| --- | ---: | ---: | ---: |
| keys | 4.39 | 10 | 131 |
| mallets | 0.40 | 10 | 60 |
| guitars | 0.42 | 16 | 136 |
| strings | 0.93 | 6 | 80 |
| winds | 0.69 | 18 | 126 |
| brass | 0.34 | 6 | 49 |
| electronic | 0.91 | 24 | 133 |
| percussion | 2.73 | 29 | 242 |
| nylon | 2.52 | 3 | 24 |
| steel | 2.44 | 2 | 59 |
| piano | 18.07 | 1 | 240 |
| bass | 0.76 | 2 | 25 |
| drumkit | 14.12 | 8 | 374 |
| electricClean | 12.36 | 6 | 182 |
| electricDrive | 18.20 | 6 | 182 |
| bandoneon | 0.35 | 2 | 12 |
| upright | 7.78 | 6 | 272 |

Total: **86.9 MiB, 153 presets and 2,263 samples** across 17 on-demand banks. The packaging list omits unused GM programs while retaining every direct instrument route and technique patch. All banks use SF3/Ogg Vorbis at quality 6. The piano preserves four recorded dynamics and stereo microphone pairs; the drum kit and electric guitars retain their recorded takes and velocity layers.

Tango routes to the dedicated Jörg Bleymehl bandoneon. Bank 73 is bellows-open and bank 74 bellows-close; both use the same twelve recorded notes, with a modest close-direction filter/attack change. This does not claim separate recorded bellows-direction samples. Orchestral timpani use the chromatic Timpani preset from MuseScore General, rather than a drum-kit key. VCSL recordings give congas, bongos, darbuka, frame drum, guiro-family scrapers, claves, agogo, cowbell, shaker, tambourine, gong, and slit log drum distinct recorded presets and round robins where the source has them. A single source-level gain trim per instrument/take group levels hot takes toward -10 dBFS and lifts quiet takes toward that target (boosts capped at +18 dB); notes, velocity layers, gestures, and takes within a group keep their relative levels. The curated sample list and individual hashes are kept in `scripts/lib/percussion-sources.json`.

Khomus uses its own bank 66/program 22 patch from the FreePats jaw harp recordings, rather than the kalimba preset. The notes trigger the recorded tongue timbre across its playable range; pitch transposition is a teaching approximation because a jaw harp player's mouth changes the overtone series continuously while the sample set captures a finite set of gestures.

Balafon uses a VCSL traditional-mallet patch at bank 66/program 23 with six recorded roots and three velocity layers. Turntable uses the CC0 BigSoundBank “Vinyl Scratch #6” one-shot at bank 66/program 24. Its note pitch controls playback speed; the single sample does not represent a full scratch articulation library.

Reggaeton selects the GeneralUser Electronic, 808/909, or Dance kits by authored instrument variant, preserving GM component keys. All fourteen synth patches use distinct bank 75 presets with authored volume envelopes and SF2 lowpass treatments. GeneralUser waveforms supply the sources; highpass, bandpass, and ladder filter identities remain approximations. Their GeneralUser waveform samples remain shared, while instrument zones have unique names so packaging cannot collapse the different envelopes. These are sample treatments, not claims of original hardware capture or full synthesis of every patch parameter. Recorded percussion presets use compact unique names for compatibility with readers that omit extended-name metadata. The bundled library preserves extended names. The three log-drum takes occupy bank 66/programs 25–27, separate from the jaw harp at program 22. Gestures with one recorded take always select that recording. Qawwali harmonium uses 38 recorded notes spanning C2–D5 at bank 66/program 28; the zone map fills the missing F♯4 root from its nearest recording, and bounds playback to C2–C6 with a 0.35-second release.

Sources:

- [GeneralUser GS](https://github.com/mrbumpy409/GeneralUser-GS), S. Christian Collins, source commit `684543d5e5efaef08d02be50dcda8d552478fa60`. The SF2 identifies itself as “GeneralUser GS 2.0.3 BETA”. Its embedded notices remain in the rebuilt banks and `notices/GeneralUser-GS.txt`.
- [MuseScore General](https://ftp.osuosl.org/pub/musescore/soundfont/MuseScore_General/), MuseScore General v0.2. Only the chromatic Timpani preset is retained in the percussion pack.
- [Ichiyanagi Classical Guitar v1.03](https://drive.google.com/uc?export=download&id=1Wib1vV4PRNOhjXg0KAR7s-OQLsT3SE_0), samples by Kazuma Yamamoto, edited by Ziya Mete Demircan. Its license is CC BY-NC 4.0 with an exception for works created with the SoundFont; the notice is shipped in `notices/Ichiyanagi.txt`. The nylon patch is a classical-guitar teaching approximation, not a flamenco-guitar recording.
- [FreePats FSS steel-string guitar](https://freepats.zenvoid.org/Guitar/steel-acoustic-guitar.html), Gary Campion / FlameStudios, assembled by Roberto, small SF2 release 2020-05-21. GPL-3 with the upstream composition exception retained. This is an acoustic guitar recording, not a pedal-steel recording. Pedal and lap steel currently use the clean-electric recording pack as a closer source-family approximation; the instrument's pedal bends still come from the authored performance.
- [Salamander Grand Piano](https://freepats.zenvoid.org/Piano/acoustic-grand-piano.html), FreePats, version 3+, 240 retained stereo samples from the four selected recorded dynamics.
- [MuldjordKit](https://github.com/freepats/muldjordkit), FreePats, 2020-10-18. Three recorded takes and six velocity layers are repacked into a GM drum layout.
- [YR electric bass](https://github.com/freepats/electric-bass-YR), FreePats, 2019-09-30. Fingerstyle and picked recordings remain separate presets with source-specific sample names; equal note names cannot merge their different recordings. The top sample zones extend to MIDI 55 by transposing the highest recorded root, rather than adding new recordings.
- [FSBS clean and driven electric guitars](https://github.com/freepats), FreePats, pinned 2026-08-07 and 2022-09-11 recordings. Three takes and two recorded dynamics are retained; upper notes without soft recordings use the source hard sample.
- [Jörg Bleymehl bandoneon v2](https://github.com/jebentancour/Bandonberry/blob/master/bandoneon_v2.sf2), recorded on a 1930 ELA bandoneon. The source notice allows private and commercial music use.
- [FreePats Jaw Harp](https://freepats.zenvoid.org/Ethnic/jaw-harp.html), version 2020-06-06, CC0. Its FreePats note identifies the Nivkh performers and recording conditions.
- [VCSL Balafon](https://github.com/sgossner/VCSL), traditional mallet recordings, pinned to the VCSL commit listed in the source manifests; CC0.
- [BigSoundBank Vinyl Scratch #6](https://bigsoundbank.com/vinyl-scratch-6-s2863.html), CC0 one-shot WAV by Joseph SARDIN.
- [VCSL](https://github.com/sgossner/VCSL), Sam Gossner and contributors, source commit `c1ea7bcc3c7309650ab0da9d15c9cd1fbc4a4c7e`, CC0. The compact selection includes cajón, palmas/claps and 11 recorded percussion families. Converted to mono 44.1 kHz, trailing silence trimmed, terminal fade applied, then placed into SF2 velocity/key zones. Round robins are selected deterministically by attack identity.
- [tonejs-instruments harmonium samples](https://github.com/nbrosowsky/tonejs-instruments/tree/622c2f1c32c8cfce4158ddc3eb26e518ddef37e5/samples/harmonium), source commit `622c2f1c32c8cfce4158ddc3eb26e518ddef37e5`; harmonium recording by donyaquick, Freesound sound 330410. The upstream sample collection is CC BY 3.0. Thirty-eight note WAV samples spanning C2–D5 are trimmed, encoded into the keys SF3 pack, and distributed with the source attribution in `/soundfont-notices.txt`.

`manifest.json` records source/WAV hashes, compressed and uncompressed bank hashes, sizes, preset identities and sample counts. The bank identity table is generated from this manifest and verifies downloaded asset content. The distributed site includes the collected notices at `/soundfont-notices.txt`.

Many named catalog instruments still share a family-level GM or nearest-source patch; the displayed instrument name does not mean a dedicated recording. The remaining major source gaps include dedicated human voice and choir, erhu, pipa, bonang/reyong/saron, many regional drums, and pedal/lap steel. Recent routing improvements choose a GS mandolin variation for bouzouki, dombra, and pipa; a sitar-family patch for setar/tar/baglama; a Koto patch for plucked qanun; and a breathier shakuhachi patch for ney, xiao, and quena. These are closer attack-family approximations, not recordings of those instruments. Tin whistle uses GeneralUser GS's five-root bank 24/program 75 recording; low whistle shares those samples in a lower register and still needs its own set. Country banjo uses the GM Banjo patch, while the vocal guide uses GM Voice Oohs rather than sung vocals. The [Kay 5-String Banjo](https://sfzinstruments.github.io/folk/kay_5_string_banjo/) source is a better match but its 425 MiB set is too large for this compact bank; [ganjo](https://github.com/sfzinstruments/ganjo) is smaller and CC0, but is a six-string guitar-banjo rather than a 5-string bluegrass banjo.

Qawwali dholak still maps to nearest General MIDI conga hits (keys 64, 63 and 62). Dedicated CC0 bass-head and treble-head one-shots are identified ([bass](https://freesound.org/people/curesforbrokenhearts/sounds/536872/), [treble](https://freesound.org/people/curesforbrokenhearts/sounds/536871/)), but Freesound gates the full WAV downloads behind login, so they are not in this reproducible package; the two hits would not supply a full stroke set or round robins anyway. The [CC0 pedal-steel recording](https://commons.wikimedia.org/wiki/File:Sound_of_steel_guitar_(pedal).ogg) is a Western Swing performance, not an isolated-note set, so pedal/lap steel remain on clean-electric source recordings. The cached CdM Gamelan archive has SFZ mappings but no referenced sample media. VCSL's lightweight instruments often have one round robin and two or three velocity layers: useful recorded hits, but not a substitute for articulation-rich libraries. These voice, regional-instrument, evolving-synth-filter, and continuous log-drum-pitch limitations are source or engine gaps rather than mix settings.

Reproduce from downloaded, hash-verified inputs:

```bash
python3 scripts/fetch-soundfont-sources.py
```

Requires Python 3, `bsdtar`, `ffmpeg` and installed npm dependencies. Source downloads stay under ignored `.cache/soundfont-sources/`. Changed source hashes stop the script rather than silently replacing the instrument media.

The drumkit pack includes three Muldjord stick-kit takes and the GeneralUser GS Brush Kit on a dedicated preset; Cool Jazz selects the brush preset through its style dialect. The package step requires an ffmpeg build with `libvorbis`. If the system ffmpeg lacks that encoder, compile `scripts/lib/encode-vorbis.c` against libvorbis and libogg, then set `MIXGENRES_VORBIS_ENCODER` to the compiled executable when running `soundfonts:package`.

To rebuild from existing files:

```bash
npm run soundfonts:package -- \
  /path/GeneralUser-GS.sf2 \
  /path/SpanishClassicalGuitar-20190618.sf2 \
  /path/FSS-SteelStringGuitar-small-20200521.sf2 \
  /path/vcsl-selected-wavs \
  /path/quality-soundfont-sources \
  /path/MuseScore_General.sf2 \
  /path/JawHarp-20200606.sf2 \
  /path/Vinyl-Scratch-6.wav \
  /path/harmonium-wavs
```

Append `--packs=percussion,electronic` to rebuild only those packs while retaining other shipped banks and release metadata. The same nine source paths remain required.

Changing the selection in `soundfont/presets.ts` requires repackaging and running `npm run test:soundfont`. The bank source hashes and exact `spessasynth_core` dependency are pinned. SF2 metadata is retained, including source creation dates, so rebuilding the same inputs produces the same bank payloads.
