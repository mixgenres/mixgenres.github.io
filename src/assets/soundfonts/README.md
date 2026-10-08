# Distilled SoundFont assets

These are selectively rebuilt SF2 banks compressed with gzip. The `.sfpack` extension prevents static servers from treating the file as HTTP Content-Encoding and silently decoding it twice. The loader also accepts transparently decoded SF2. SoundFont sample loops, velocity/key zones, generators, modulators and stereo links survive repackaging; there is no lossy audio codec.

| Pack | Compressed MiB | Presets | Samples |
| --- | ---: | ---: | ---: |
| keys | 3.87 | 11 | 110 |
| mallets | 1.59 | 9 | 42 |
| guitars | 4.39 | 20 | 195 |
| strings | 4.97 | 7 | 87 |
| winds | 3.57 | 17 | 121 |
| brass | 1.63 | 6 | 49 |
| electronic | 4.07 | 9 | 94 |
| percussion | 2.82 | 4 | 77 |
| nylon | 11.62 | 3 | 24 |
| steel | 17.26 | 2 | 59 |
| piano | 18.07 | 1 | 240 |
| bass | 3.71 | 2 | 13 |
| drumkit | 13.67 | 6 | 310 |
| electricClean | 12.36 | 6 | 182 |
| electricDrive | 18.20 | 6 | 182 |
| bandoneon | 2.28 | 2 | 12 |
| upright | 7.78 | 6 | 272 |

Total: **131.5 MiB, 116 presets and 2,066 samples** across 17 banks. Presets are selected by the app's instrument and technique routing rather than shipping the entire GeneralUser bank. The nylon pack keeps three source variants; the steel and electric packs include recorded takes and programmed damped versions. The Salamander piano preserves four recorded dynamics and stereo pairs. Piano, kit and electric-guitar samples use Vorbis compression inside the SF3 banks; other banks retain PCM.

Tango routes to the dedicated Jörg Bleymehl bandoneon. Bank 73 is bellows-open and bank 74 bellows-close; both use the same twelve recorded notes, with a modest close-direction filter/attack change. This does not claim separate recorded bellows-direction samples. Orchestral timpani use the chromatic Timpani preset from MuseScore General, rather than a drum-kit key.

Sources:

- [GeneralUser GS](https://github.com/mrbumpy409/GeneralUser-GS), S. Christian Collins, source commit `684543d5e5efaef08d02be50dcda8d552478fa60`. The SF2 identifies itself as “GeneralUser GS 2.0.3 BETA”. Its embedded notices remain in the rebuilt banks and `notices/GeneralUser-GS.txt`.
- [MuseScore General](https://ftp.osuosl.org/pub/musescore/soundfont/MuseScore_General/), MuseScore General v0.2. Only the chromatic Timpani preset is retained in the percussion pack.
- [FreePats Spanish classical guitar](https://freepats.zenvoid.org/Guitar/acoustic-guitar.html), Roberto, SF2 release 2019-06-18. Dedicated Spanish nylon samples, CC0.
- [FreePats FSS steel-string guitar](https://freepats.zenvoid.org/Guitar/steel-acoustic-guitar.html), Gary Campion / FlameStudios, assembled by Roberto, small SF2 release 2020-05-21. GPL-3 with the upstream composition exception retained.
- [Salamander Grand Piano](https://freepats.zenvoid.org/Piano/acoustic-grand-piano.html), FreePats, version 3+, 240 retained stereo samples from the four selected recorded dynamics.
- [MuldjordKit](https://github.com/freepats/muldjordkit), FreePats, 2020-10-18. Three recorded takes and six velocity layers are repacked into a GM drum layout.
- [YR electric bass](https://github.com/freepats/electric-bass-YR), FreePats, 2019-09-30. Fingerstyle and picked recordings remain separate presets.
- [FSBS clean and driven electric guitars](https://github.com/freepats), FreePats, pinned 2026-08-07 and 2022-09-11 recordings. Three takes and two recorded dynamics are retained; upper notes without soft recordings use the source hard sample.
- [Jörg Bleymehl bandoneon v2](https://github.com/jebentancour/Bandonberry/blob/master/bandoneon_v2.sf2), recorded on a 1930 ELA bandoneon. The source notice allows private and commercial music use.
- [VCSL](https://github.com/sgossner/VCSL), Sam Gossner and contributors, source commit `c1ea7bcc3c7309650ab0da9d15c9cd1fbc4a4c7e`. Six cajón recordings (three contacts, two velocity layers) and three clap takes, CC0. Converted to mono 44.1 kHz, trailing silence trimmed, terminal fade applied, then placed into SF2 zones. Clap takes are chosen deterministically by attack identity.

`manifest.json` records source/WAV hashes, compressed and uncompressed bank hashes, sizes, preset identities and sample counts. The bank identity table is generated from this manifest and verifies downloaded asset content. The distributed site includes the collected notices at `/soundfont-notices.txt`.

Reproduce from downloaded, hash-verified inputs:

```bash
python3 scripts/fetch-soundfont-sources.py
```

Requires Python 3, `bsdtar`, `ffmpeg` and installed npm dependencies. Source downloads stay under ignored `.cache/soundfont-sources/`. Changed source hashes stop the script rather than silently replacing the instrument media.

To rebuild from existing files:

```bash
npm run soundfonts:package -- \
  /path/GeneralUser-GS.sf2 \
  /path/SpanishClassicalGuitar-20190618.sf2 \
  /path/FSS-SteelStringGuitar-small-20200521.sf2 \
  /path/vcsl-selected-wavs \
  /path/quality-soundfont-sources
```

Changing the selection in `soundfont/presets.ts` requires repackaging and running `npm run test:soundfont`. The bank source hashes and exact `spessasynth_core` dependency are pinned. SF2 metadata is retained, including source creation dates, so rebuilding the same inputs produces the same bank payloads.
