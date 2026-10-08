# Genre verification implementation audit

Updated 2026-10-08. This is a catalog and implementation crosswalk for the 55 genre folders and all 420 shipped sample songs. The latest requirements are a distinct 5–8-instrument roster per song and SoundFont playback with tango bandoneon.

## Results

- Sample song rosters: **420/420** within 5–8 distinct instrument IDs; 0 violations.
- Tango: **17/17** songs include bandoneon.
- SoundFont asset set: **17** demand-loaded banks, 131.5 MiB compressed.
- SoundFont comparison phase `soundfont-v3-all-genres`: 390/390 rows complete, 0 failed; 310 rows draw on voiced-feature references.
- A Node offline benchmark rendered an 8-second 30-player mix in 7.001437125000001 s and encoded MP3 in 0.39208516699999746 s. This measures offline throughput, not browser audio-start latency.
- Across 1167 measured windows (930 from separated accompaniment), median spectral distance was 0.542, low-body energy ratio 0.53, generated/reference centroid ratio 1.50, and RMS difference -3.8 dB. These aggregate screens diagnose timbre and balance; they are not a perceptual similarity score.
- The reference screen renders an 8-second dense ensemble excerpt. It uses voiced accompaniment measurements where available and labels album-mix fallback. Spectral similarity is a mix/timbre screen; it does not prove note-for-note similarity or musical authenticity.

## Genre crosswalk

| Genre | Songs | In range | Instrument count distribution | Support added | Exact reference links | Voiced links | Measured voiced |
|---|---:|---:|---|---:|---:|---:|---:|
| afrobeat | 7 | 7/7 | 5×1, 6×1, 7×1, 8×4 | 1 | 7 | 5 | 5 |
| afrobeats | 5 | 5/5 | 5×1, 6×4 | 0 | 5 | 5 | 5 |
| amapiano | 7 | 7/7 | 5×1, 6×6 | 1 | 7 | 5 | 5 |
| ambient | 9 | 9/9 | 5×9 | 9 | 8 | 6 | 7 |
| andean | 7 | 7/7 | 5×6, 6×1 | 0 | 7 | 6 | 6 |
| arabic | 5 | 5/5 | 5×2, 6×2, 7×1 | 1 | 5 | 4 | 4 |
| bachata | 8 | 8/8 | 6×6, 7×1, 8×1 | 0 | 8 | 5 | 5 |
| bass | 10 | 10/10 | 5×10 | 10 | 10 | 9 | 9 |
| blues | 8 | 8/8 | 5×2, 6×6 | 2 | 8 | 7 | 7 |
| bollywood | 6 | 6/6 | 7×6 | 0 | 6 | 6 | 6 |
| brazilian | 11 | 11/11 | 6×6, 7×5 | 0 | 11 | 9 | 9 |
| chinese | 8 | 8/8 | 5×8 | 8 | 8 | 4 | 4 |
| cinematic | 6 | 6/6 | 6×6 | 0 | 6 | 5 | 5 |
| classical | 7 | 7/7 | 5×7 | 2 | 5 | 1 | 1 |
| country | 7 | 7/7 | 5×5, 6×1, 7×1 | 0 | 7 | 7 | 7 |
| dangdut | 4 | 4/4 | 6×4 | 0 | 4 | 4 | 4 |
| desert-blues | 4 | 4/4 | 5×4 | 1 | 4 | 3 | 3 |
| electronic | 8 | 8/8 | 5×8 | 8 | 8 | 7 | 7 |
| ethiopian | 5 | 5/5 | 5×2, 6×3 | 2 | 5 | 4 | 4 |
| flamenco | 18 | 18/18 | 5×16, 6×2 | 14 | 20 | 13 | 11 |
| folk | 6 | 6/6 | 5×6 | 5 | 6 | 6 | 6 |
| funk | 9 | 9/9 | 5×1, 6×7, 7×1 | 1 | 9 | 7 | 7 |
| gamelan | 4 | 4/4 | 5×4 | 1 | 3 | 2 | 2 |
| gnawa | 4 | 4/4 | 5×4 | 2 | 4 | 4 | 4 |
| gospel | 5 | 5/5 | 5×1, 7×4 | 0 | 5 | 4 | 4 |
| hip-hop | 9 | 9/9 | 5×8, 6×1 | 1 | 9 | 8 | 8 |
| house | 7 | 7/7 | 5×7 | 7 | 7 | 6 | 6 |
| indian-classical | 8 | 8/8 | 5×8 | 8 | 7 | 2 | 2 |
| industrial | 5 | 5/5 | 5×3, 6×2 | 3 | 5 | 3 | 3 |
| japanese | 5 | 5/5 | 5×5 | 4 | 5 | 4 | 4 |
| jazz | 9 | 9/9 | 5×7, 6×1, 8×1 | 2 | 10 | 7 | 7 |
| kizomba | 7 | 7/7 | 6×7 | 0 | 7 | 5 | 5 |
| korean | 5 | 5/5 | 5×5 | 5 | 5 | 4 | 4 |
| latin | 12 | 12/12 | 5×5, 6×6, 7×1 | 0 | 12 | 10 | 10 |
| mbalax | 4 | 4/4 | 6×4 | 0 | 4 | 4 | 4 |
| metal | 7 | 7/7 | 5×7 | 7 | 7 | 5 | 5 |
| mexican | 10 | 10/10 | 5×5, 6×5 | 3 | 10 | 6 | 6 |
| persian | 5 | 5/5 | 5×5 | 5 | 5 | 2 | 2 |
| pop | 9 | 9/9 | 5×3, 6×6 | 0 | 9 | 7 | 7 |
| punk | 5 | 5/5 | 5×5 | 5 | 5 | 4 | 4 |
| qawwali | 4 | 4/4 | 5×4 | 1 | 4 | 4 | 4 |
| r-and-b | 9 | 9/9 | 5×9 | 0 | 12 | 6 | 6 |
| reggae | 7 | 7/7 | 5×1, 6×4, 7×2 | 1 | 7 | 5 | 5 |
| reggaeton | 6 | 6/6 | 5×6 | 6 | 6 | 5 | 5 |
| rock | 10 | 10/10 | 5×10 | 10 | 10 | 6 | 6 |
| salsa | 16 | 16/16 | 7×4, 8×12 | 0 | 15 | 13 | 13 |
| soukous | 5 | 5/5 | 5×5 | 0 | 5 | 4 | 4 |
| steppe | 6 | 6/6 | 5×6 | 5 | 6 | 5 | 5 |
| swing | 7 | 7/7 | 5×1, 6×6 | 0 | 7 | 5 | 5 |
| taarab | 5 | 5/5 | 5×1, 6×4 | 0 | 5 | 5 | 5 |
| tango | 17 | 17/17 | 5×16, 7×1 | 13 | 17 | 13 | 13 |
| timba | 12 | 12/12 | 8×12 | 0 | 12 | 11 | 11 |
| turkish | 5 | 5/5 | 5×5 | 4 | 5 | 4 | 4 |
| weird | 16 | 16/16 | 5×16 | 16 | 14 | 9 | 10 |
| zouk | 10 | 10/10 | 6×9, 7×1 | 0 | 13 | 7 | 7 |

## SoundFont comparison medians by genre

| Genre | Windows | Voiced accompaniment | Median spectral distance | Median low/body energy ratio | Median centroid ratio | Median RMS difference, dB |
|---|---:|---:|---:|---:|---:|---:|
| afrobeat | 21 | 15 | 0.473 | 0.56 | 1.93 | -2.3 |
| afrobeats | 15 | 15 | 0.570 | 0.42 | 2.50 | -11.3 |
| amapiano | 15 | 15 | 0.575 | 0.56 | 2.29 | -9.4 |
| ambient | 21 | 18 | 0.607 | 0.74 | 1.26 | -8.1 |
| andean | 21 | 18 | 0.724 | 0.24 | 1.87 | -3.6 |
| arabic | 12 | 9 | 0.597 | 2.37 | 0.67 | -1.4 |
| bachata | 24 | 15 | 0.482 | 0.73 | 1.25 | 1.7 |
| bass | 27 | 27 | 0.536 | 0.35 | 1.28 | -8.1 |
| blues | 24 | 21 | 0.560 | 0.30 | 2.16 | -5.6 |
| bollywood | 18 | 18 | 0.633 | 0.40 | 2.48 | 2.3 |
| brazilian | 33 | 27 | 0.555 | 1.35 | 0.64 | -3.8 |
| chinese | 24 | 12 | 0.613 | 2.03 | 1.73 | -0.7 |
| cinematic | 18 | 15 | 0.639 | 0.27 | 2.69 | -1.9 |
| classical | 3 | 3 | 0.681 | 0.01 | 2.13 | 10.9 |
| country | 21 | 21 | 0.400 | 0.80 | 1.45 | 0.4 |
| dangdut | 12 | 12 | 0.588 | 0.52 | 1.89 | -1.7 |
| desert-blues | 12 | 9 | 0.537 | 0.56 | 1.79 | -5.0 |
| electronic | 24 | 21 | 0.460 | 0.63 | 2.44 | -7.4 |
| ethiopian | 15 | 12 | 0.469 | 1.03 | 2.03 | -7.6 |
| flamenco | 57 | 33 | 0.427 | 1.03 | 0.66 | 1.3 |
| folk | 18 | 18 | 0.493 | 0.82 | 2.51 | 1.6 |
| funk | 24 | 21 | 0.563 | 0.30 | 1.79 | -2.6 |
| gamelan | 9 | 6 | 0.620 | 5.07 | 0.50 | -2.7 |
| gnawa | 12 | 12 | 0.658 | 0.88 | 1.78 | -8.7 |
| gospel | 15 | 12 | 0.539 | 0.60 | 2.51 | -3.5 |
| hip-hop | 24 | 24 | 0.615 | 0.40 | 1.73 | -11.4 |
| house | 21 | 18 | 0.565 | 0.48 | 1.59 | -9.4 |
| indian-classical | 12 | 6 | 0.569 | 8.61 | 1.13 | -2.3 |
| industrial | 12 | 6 | 0.534 | 0.39 | 1.66 | 0.8 |
| japanese | 15 | 12 | 0.744 | 4.16 | 1.22 | 3.8 |
| jazz | 27 | 21 | 0.417 | 0.47 | 1.75 | 1.6 |
| kizomba | 21 | 15 | 0.553 | 0.58 | 1.11 | -12.4 |
| korean | 15 | 12 | 0.641 | 1.98 | 1.08 | 1.0 |
| latin | 33 | 27 | 0.496 | 0.72 | 0.75 | -7.7 |
| mbalax | 12 | 12 | 0.589 | 1.79 | 0.63 | -2.2 |
| metal | 21 | 15 | 0.473 | 0.33 | 1.79 | 0.0 |
| mexican | 30 | 18 | 0.495 | 0.76 | 1.44 | -8.7 |
| persian | 12 | 6 | 0.676 | 7.04 | 1.40 | -13.4 |
| pop | 27 | 21 | 0.513 | 0.35 | 1.08 | -6.0 |
| punk | 15 | 12 | 0.380 | 0.51 | 1.74 | -1.5 |
| qawwali | 12 | 12 | 0.567 | 0.84 | 1.89 | -7.3 |
| r-and-b | 27 | 18 | 0.533 | 0.34 | 1.75 | -4.1 |
| reggae | 21 | 15 | 0.548 | 0.35 | 1.88 | -7.5 |
| reggaeton | 18 | 15 | 0.544 | 0.43 | 1.23 | -7.8 |
| rock | 27 | 18 | 0.475 | 0.30 | 2.48 | -2.2 |
| salsa | 45 | 39 | 0.493 | 0.55 | 1.56 | -5.9 |
| soukous | 15 | 12 | 0.592 | 0.29 | 2.54 | -2.2 |
| steppe | 15 | 15 | 0.545 | 0.31 | 1.56 | -3.8 |
| swing | 21 | 15 | 0.479 | 0.75 | 1.81 | -3.4 |
| taarab | 15 | 15 | 0.600 | 0.83 | 2.64 | -7.2 |
| tango | 51 | 39 | 0.518 | 0.05 | 1.91 | 4.3 |
| timba | 36 | 33 | 0.481 | 0.29 | 1.73 | -7.2 |
| turkish | 15 | 12 | 0.580 | 2.40 | 1.40 | -9.5 |
| weird | 30 | 24 | 0.594 | 1.01 | 0.86 | -7.0 |
| zouk | 27 | 18 | 0.477 | 0.39 | 0.97 | -6.7 |

## Song-by-song sample roster

| Genre | Style/song ID | Distinct instruments | Instruments | Sample-only support | Reference evidence |
|---|---|---:|---|---|---|
| afrobeat | afrobeat-classic-afrobeat | 8 | voice, trumpet, tenor-sax, bass, drums, congas, shekere, guitar | — | voiced |
| afrobeat | afrobeat-highlife | 7 | voice, trumpet, bass, drums, cowbell, congas, guitar | — | voiced |
| afrobeat | afrobeat-palm-wine | 5 | voice, shaker, guitar, congas, drums | congas, drums | voiced |
| afrobeat | afrobeat-juju | 6 | voice, bass, talking-drum, shekere, drums, guitar | — | album mix |
| afrobeat | afrobeat-funk-heavy-afrobeat | 8 | voice, trumpet, tenor-sax, bass, drums, congas, shekere, guitar | — | voiced |
| afrobeat | afrobeat-jazz-heavy-afrobeat | 8 | voice, trumpet, tenor-sax, bass, drums, congas, shekere, guitar | — | voiced |
| afrobeat | afrobeat-modern-revival | 8 | voice, trumpet, tenor-sax, bass, drums, congas, shekere, guitar | — | album mix |
| afrobeats | afrobeats-contemporary-afrobeats | 6 | voice, bass, drums, shaker, guitar, rhodes | — | voiced |
| afrobeats | afrobeats-afropop | 6 | voice, bass, drums, shaker, guitar, rhodes | — | voiced |
| afrobeats | afrobeats-afrofusion | 6 | voice, bass, drums, shaker, guitar, rhodes | — | voiced |
| afrobeats | afrobeats-alte | 5 | voice, synth, drums, sampler, rhodes | — | voiced |
| afrobeats | afrobeats-randb-afrobeats | 6 | voice, bass, drums, shaker, guitar, rhodes | — | voiced |
| amapiano | amapiano-classic | 6 | synth, log-drum, drums, shaker, piano, rhodes | — | voiced |
| amapiano | amapiano-private-school | 6 | synth, log-drum, drums, shaker, piano, rhodes | — | voiced |
| amapiano | amapiano-vocal | 6 | voice, log-drum, drums, shaker, piano, synth | — | voiced |
| amapiano | amapiano-log-drum-heavy | 6 | synth, log-drum, drums, shaker, piano, rhodes | — | voiced |
| amapiano | amapiano-bacardi | 6 | synth, log-drum, drums, shaker, piano, rhodes | — | album mix |
| amapiano | amapiano-gqom-crossover | 5 | synth, drums, sampler, piano, log-drum | piano, log-drum | album mix |
| amapiano | amapiano-kwaito-crossover | 6 | synth, log-drum, drums, shaker, piano, rhodes | — | voiced |
| ambient | ambient-atmospheric | 5 | synth, piano, string-ensemble, guitar, drums | guitar, drums | voiced |
| ambient | ambient-drone | 5 | synth, piano, string-ensemble, guitar, drums | piano, string-ensemble, guitar, drums | voiced |
| ambient | ambient-dark-ambient | 5 | synth, piano, string-ensemble, guitar, drums | piano, string-ensemble, guitar, drums | no exact local MP3 |
| ambient | ambient-organic-ambient | 5 | guitar, flute, string-ensemble, synth, piano | synth, piano | voiced |
| ambient | ambient-neo-classical-ambient | 5 | piano, synth, string-ensemble, guitar, drums | guitar, drums | voiced |
| ambient | ambient-glitch-ambient | 5 | piano, sampler, synth, string-ensemble, guitar | string-ensemble, guitar | album mix |
| ambient | ambient-generative-ambient | 5 | synth, piano, string-ensemble, guitar, drums | piano, string-ensemble, guitar, drums | album mix |
| ambient | ambient-cinematic-ambient | 5 | piano, synth, string-ensemble, guitar, drums | guitar, drums | voiced |
| ambient | ambient-downtempo-ambient | 5 | piano, synth, drums, rhodes, string-ensemble | string-ensemble | voiced |
| andean | andean-huayno | 5 | quena, siku, bombo-andino, charango, guitar | — | voiced |
| andean | andean-sanjuanito | 5 | quena, siku, bombo-andino, charango, guitar | — | voiced |
| andean | andean-saya | 6 | voice, quena, siku, bombo-andino, charango, guitar | — | voiced |
| andean | andean-tinku | 5 | quena, siku, bombo-andino, charango, guitar | — | voiced |
| andean | andean-carnavalito | 5 | quena, siku, bombo-andino, charango, guitar | — | album mix |
| andean | andean-nueva-cancion | 5 | quena, siku, bombo-andino, charango, guitar | — | voiced |
| andean | andean-andean-fusion | 5 | quena, siku, bombo-andino, charango, guitar | — | voiced |
| arabic | arabic-tarab | 6 | voice, ney, riq, darbuka, oud, qanun | — | voiced |
| arabic | arabic-takht | 5 | ney, oud, violin, riq, qanun | — | voiced |
| arabic | arabic-muwashshah | 6 | voice, ney, riq, darbuka, oud, qanun | — | album mix |
| arabic | arabic-instrumental-maqam | 5 | oud, qanun, ney, riq, darbuka | qanun, ney, riq, darbuka | voiced |
| arabic | arabic-modern-arabic-orchestra | 7 | voice, ney, riq, darbuka, oud, qanun, string-ensemble | — | voiced |
| bachata | bachata-dominican | 6 | voice, requinto, bass, bongos, guira, guitar | — | voiced |
| bachata | bachata-amargue | 6 | voice, requinto, bass, bongos, guira, guitar | — | album mix |
| bachata | bachata-traditional-bolero-bachata | 6 | voice, requinto, bass, bongos, guira, guitar | — | voiced |
| bachata | bachata-moderna | 8 | voice, requinto, bass, bongos, guira, drums, guitar, synth | — | voiced |
| bachata | bachata-sensual | 6 | voice, requinto, bass, bongos, guira, guitar | — | album mix |
| bachata | bachata-bachata-mambo | 6 | voice, requinto, bass, bongos, guira, guitar | — | voiced |
| bachata | bachata-urban | 7 | voice, requinto, synth, bongos, guira, drums, guitar | — | voiced |
| bachata | bachata-fusion | 6 | voice, requinto, bass, bongos, guira, guitar | — | album mix |
| bass | bass-drum-and-bass | 5 | synth, drums, sampler, bass, organ | bass, organ | voiced |
| bass | bass-jungle | 5 | synth, drums, sampler, bass, organ | bass, organ | album mix |
| bass | bass-liquid | 5 | synth, drums, sampler, bass, organ | bass, organ | voiced |
| bass | bass-neurofunk | 5 | synth, drums, sampler, bass, organ | bass, organ | voiced |
| bass | bass-uk-garage | 5 | synth, drums, sampler, bass, organ | bass, organ | voiced |
| bass | bass-2-step | 5 | synth, drums, sampler, bass, organ | bass, organ | voiced |
| bass | bass-dubstep | 5 | synth, drums, sampler, bass, organ | bass, organ | voiced |
| bass | bass-grime | 5 | synth, drums, sampler, bass, organ | bass, organ | voiced |
| bass | bass-future-garage | 5 | synth, drums, sampler, bass, organ | bass, organ | voiced |
| bass | bass-breakbeat | 5 | synth, drums, sampler, bass, organ | bass, organ | voiced |
| blues | blues-modern-blues | 6 | guitar, voice, harmonica, bass, drums, piano | — | voiced |
| blues | blues-delta | 5 | voice, resonator-guitar, guitar, harmonica, bass | guitar, harmonica, bass | voiced |
| blues | blues-chicago | 6 | voice, guitar, harmonica, bass, drums, piano | — | voiced |
| blues | blues-texas | 6 | guitar, voice, harmonica, bass, drums, piano | — | voiced |
| blues | blues-piedmont | 5 | voice, guitar, harmonica, bass, drums | harmonica, bass, drums | voiced |
| blues | blues-hill-country | 6 | voice, guitar, harmonica, bass, drums, piano | — | album mix |
| blues | blues-slow-blues | 6 | voice, guitar, harmonica, bass, drums, piano | — | voiced |
| blues | blues-blues-fusion | 6 | voice, guitar, harmonica, bass, drums, piano | — | voiced |
| bollywood | bollywood-modern | 7 | voice, bansuri, bass, tabla, drums, guitar, string-ensemble | — | voiced |
| bollywood | bollywood-golden-age | 7 | voice, bansuri, bass, tabla, drums, guitar, string-ensemble | — | voiced |
| bollywood | bollywood-disco-bollywood | 7 | voice, bansuri, bass, tabla, drums, guitar, string-ensemble | — | voiced |
| bollywood | bollywood-romantic | 7 | voice, bansuri, bass, tabla, drums, guitar, string-ensemble | — | voiced |
| bollywood | bollywood-folk-cinematic | 7 | voice, bansuri, bass, tabla, drums, guitar, string-ensemble | — | voiced |
| bollywood | bollywood-electronic-club | 7 | voice, bansuri, bass, tabla, drums, guitar, string-ensemble | — | voiced |
| brazilian | brazilian-samba | 7 | voice, bass, surdo, pandeiro, tamborim, guitar, cavaquinho | — | voiced |
| brazilian | brazilian-bossa-nova | 6 | voice, flute, upright-bass, drums, guitar, piano | — | voiced |
| brazilian | brazilian-pagode | 6 | voice, bass, pandeiro, tantan, cavaquinho, banjo | — | album mix |
| brazilian | brazilian-partido-alto | 7 | voice, bass, surdo, pandeiro, tamborim, guitar, cavaquinho | — | voiced |
| brazilian | brazilian-samba-de-roda | 7 | voice, bass, surdo, pandeiro, tamborim, guitar, cavaquinho | — | voiced |
| brazilian | brazilian-forro | 6 | accordion, voice, bass, zabumba, triangle, guitar | — | album mix |
| brazilian | brazilian-baiao | 6 | accordion, voice, bass, zabumba, triangle, guitar | — | voiced |
| brazilian | brazilian-xote | 6 | accordion, voice, bass, zabumba, triangle, guitar | — | voiced |
| brazilian | brazilian-mpb | 6 | voice, bass, drums, pandeiro, guitar, piano | — | voiced |
| brazilian | brazilian-samba-reggae | 7 | voice, bass, surdo, pandeiro, tamborim, guitar, cavaquinho | — | voiced |
| brazilian | brazilian-samba-rock | 7 | voice, bass, surdo, pandeiro, tamborim, guitar, cavaquinho | — | voiced |
| chinese | chinese-jiangnan-sizhu | 5 | erhu, dizi, pipa, guzheng, paigu | guzheng, paigu | voiced |
| chinese | chinese-guqin | 5 | guqin, pipa, guzheng, dizi, erhu | pipa, guzheng, dizi, erhu | album mix |
| chinese | chinese-guzheng | 5 | guzheng, pipa, dizi, erhu, paigu | pipa, dizi, erhu, paigu | album mix |
| chinese | chinese-pipa | 5 | pipa, guzheng, dizi, erhu, paigu | guzheng, dizi, erhu, paigu | album mix |
| chinese | chinese-jingju | 5 | voice, jinghu, paigu, gongs, pipa | pipa | voiced |
| chinese | chinese-cantonese-ensemble | 5 | gaohu, dizi, pipa, guzheng, erhu | erhu | voiced |
| chinese | chinese-chaozhou | 5 | erhu, gaohu, pipa, guzheng, dizi | dizi | voiced |
| chinese | chinese-suona-chuida | 5 | suona, paigu, gongs, pipa, guzheng | pipa, guzheng | album mix |
| cinematic | cinematic-modern-score | 6 | piano, french-horn, cello, timpani, string-ensemble, synth | — | voiced |
| cinematic | cinematic-golden-age | 6 | piano, french-horn, cello, timpani, string-ensemble, synth | — | voiced |
| cinematic | cinematic-minimal-tension | 6 | piano, french-horn, cello, timpani, string-ensemble, synth | — | album mix |
| cinematic | cinematic-hybrid | 6 | piano, french-horn, cello, timpani, string-ensemble, synth | — | voiced |
| cinematic | cinematic-epic | 6 | piano, french-horn, cello, timpani, string-ensemble, synth | — | voiced |
| cinematic | cinematic-ambient-score | 6 | piano, french-horn, cello, timpani, string-ensemble, synth | — | voiced |
| classical | classical-classical-orchestra | 5 | violin, flute, cello, timpani, string-ensemble | — | album mix |
| classical | classical-baroque | 5 | violin, flute, cello, harpsichord, timpani | timpani | voiced |
| classical | classical-romantic | 5 | violin, flute, cello, timpani, string-ensemble | — | album mix |
| classical | classical-impressionist | 5 | violin, flute, cello, timpani, string-ensemble | — | album mix |
| classical | classical-modernist | 5 | violin, flute, cello, timpani, string-ensemble | — | no exact local MP3 |
| classical | classical-minimalist | 5 | violin, flute, cello, timpani, string-ensemble | — | no exact local MP3 |
| classical | classical-chamber | 5 | violin, cello, viola, flute, timpani | flute, timpani | album mix |
| country | country-honky-tonk | 5 | voice, pedal-steel, bass, drums, guitar | — | voiced |
| country | country-bluegrass | 6 | voice, violin, banjo, upright-bass, guitar, mandolin | — | voiced |
| country | country-bakersfield | 5 | voice, pedal-steel, bass, drums, guitar | — | voiced |
| country | country-outlaw | 5 | voice, pedal-steel, bass, drums, guitar | — | voiced |
| country | country-western-swing | 7 | voice, violin, pedal-steel, upright-bass, drums, guitar, piano | — | voiced |
| country | country-americana | 5 | voice, violin, upright-bass, guitar, resonator-guitar | — | voiced |
| country | country-country-pop | 5 | voice, pedal-steel, bass, drums, guitar | — | voiced |
| dangdut | dangdut-classic | 6 | voice, flute, bass, kendang, drums, guitar | — | voiced |
| dangdut | dangdut-koplo | 6 | voice, flute, bass, kendang, drums, guitar | — | voiced |
| dangdut | dangdut-rock-dangdut | 6 | voice, flute, bass, kendang, drums, guitar | — | voiced |
| dangdut | dangdut-electronic-dangdut | 6 | voice, flute, bass, kendang, drums, guitar | — | voiced |
| desert-blues | desert-blues-tishoumaren | 5 | voice, guitar, bass, drums, hand-percussion | — | voiced |
| desert-blues | desert-blues-sahel-guitar | 5 | voice, guitar, bass, drums, hand-percussion | — | album mix |
| desert-blues | desert-blues-acoustic-tuareg | 5 | voice, guitar, hand-percussion, bass, drums | bass, drums | voiced |
| desert-blues | desert-blues-psychedelic-desert | 5 | voice, guitar, bass, drums, hand-percussion | — | voiced |
| electronic | electronic-techno | 5 | synth, drums, bass, piano, sampler | bass, piano, sampler | voiced |
| electronic | electronic-detroit-techno | 5 | synth, drums, bass, piano, sampler | bass, piano, sampler | voiced |
| electronic | electronic-electro | 5 | synth, drums, bass, piano, sampler | bass, piano, sampler | album mix |
| electronic | electronic-trance | 5 | synth, drums, bass, piano, sampler | bass, piano, sampler | voiced |
| electronic | electronic-idm | 5 | synth, drums, bass, piano, sampler | bass, piano, sampler | voiced |
| electronic | electronic-minimal | 5 | synth, drums, bass, piano, sampler | bass, piano, sampler | voiced |
| electronic | electronic-synthwave | 5 | synth, drums, bass, piano, sampler | bass, piano, sampler | voiced |
| electronic | electronic-melodic-electronic | 5 | synth, drums, bass, piano, sampler | bass, piano, sampler | voiced |
| ethiopian | ethiopian-ethio-jazz | 6 | tenor-sax, trumpet, bass, drums, kebero, organ | — | voiced |
| ethiopian | ethiopian-tizita | 5 | voice, masenqo, kebero, krar, drums | drums | voiced |
| ethiopian | ethiopian-ethiopian-funk | 6 | tenor-sax, trumpet, bass, drums, kebero, organ | — | voiced |
| ethiopian | ethiopian-traditional-modal | 5 | voice, masenqo, kebero, krar, drums | drums | album mix |
| ethiopian | ethiopian-modern-ethio-jazz | 6 | tenor-sax, trumpet, bass, drums, kebero, organ | — | voiced |
| flamenco | flamenco-solea | 5 | voice, guitar, palmas, cajon, violin | cajon, violin | voiced, voiced, voiced, album mix |
| flamenco | flamenco-bulerias | 5 | voice, guitar, palmas, cajon, violin | violin | album mix |
| flamenco | flamenco-alegrias | 5 | voice, guitar, palmas, cajon, violin | violin | voiced |
| flamenco | flamenco-tangos | 5 | voice, guitar, palmas, cajon, violin | violin | voiced |
| flamenco | flamenco-seguiriya | 5 | voice, guitar, palmas, cajon, violin | violin | no exact local MP3 |
| flamenco | flamenco-tientos | 5 | voice, guitar, palmas, cajon, violin | violin | album mix |
| flamenco | flamenco-fandangos | 5 | voice, guitar, palmas, cajon, violin | violin | voiced |
| flamenco | flamenco-rumba | 5 | voice, guitar, bass, palmas, cajon | — | voiced |
| flamenco | flamenco-tonas-martinetes | 5 | voice, cajon, palmas, violin, guitar | cajon, palmas, violin, guitar | album mix |
| flamenco | flamenco-taranta | 5 | voice, guitar, cajon, palmas, violin | cajon, palmas, violin | voiced |
| flamenco | flamenco-granaina-malaguena | 5 | voice, guitar, cajon, palmas, violin | cajon, palmas, violin | voiced |
| flamenco | flamenco-guajira | 5 | voice, guitar, palmas, cajon, violin | violin | voiced |
| flamenco | flamenco-farruca | 5 | voice, guitar, palmas, cajon, violin | violin | voiced |
| flamenco | flamenco-sevillanas | 5 | voice, guitar, palmas, cajon, violin | violin | album mix |
| flamenco | flamenco-nuevo-flamenco | 5 | voice, guitar, palmas, cajon, violin | violin | voiced |
| flamenco | flamenco-flamenco-jazz | 6 | guitar, tenor-sax, upright-bass, palmas, cajon, piano | — | voiced |
| flamenco | flamenco-flamenco-rock | 5 | voice, guitar, bass, palmas, drums | — | album mix |
| flamenco | flamenco-urban-experimental | 6 | voice, guitar, synth, palmas, drums, sampler | — | album mix |
| folk | folk-contemporary-folk | 5 | voice, violin, upright-bass, guitar, banjo | banjo | voiced |
| folk | folk-old-time | 5 | violin, upright-bass, banjo, guitar, voice | voice | voiced |
| folk | folk-appalachian | 5 | voice, violin, banjo, guitar, upright-bass | upright-bass | voiced |
| folk | folk-celtic | 5 | violin, tin-whistle, bodhran, guitar, bouzouki | — | voiced |
| folk | folk-singer-songwriter | 5 | voice, guitar, violin, upright-bass, banjo | violin, upright-bass, banjo | voiced |
| folk | folk-folk-revival | 5 | voice, violin, upright-bass, guitar, banjo | banjo | voiced |
| funk | funk-funk | 6 | voice, trumpet, bass, drums, guitar, clavinet | — | voiced |
| funk | funk-james-brown-the-one | 6 | voice, trumpet, bass, drums, guitar, clavinet | — | voiced |
| funk | funk-p-funk | 6 | voice, synth, bass, drums, guitar, rhodes | — | voiced |
| funk | funk-jazz-funk | 7 | synth, voice, trumpet, bass, drums, guitar, clavinet | — | album mix |
| funk | funk-minneapolis | 5 | voice, synth, drums, guitar, bass | bass | voiced |
| funk | funk-disco | 6 | voice, bass, drums, guitar, piano, string-ensemble | — | voiced |
| funk | funk-philly-disco | 6 | voice, bass, drums, guitar, piano, string-ensemble | — | album mix |
| funk | funk-boogie | 6 | voice, synth, bass, drums, guitar, rhodes | — | voiced |
| funk | funk-hi-nrg | 6 | voice, synth, bass, drums, guitar, rhodes | — | voiced |
| gamelan | gamelan-javanese | 5 | gamelan-metallophone, rebab, kendang, gongs, bonang | — | no exact local MP3 |
| gamelan | gamelan-balinese-gong-kebyar | 5 | gamelan-metallophone, kendang, gongs, bonang, rebab | rebab | voiced |
| gamelan | gamelan-degung | 5 | gamelan-metallophone, rebab, kendang, gongs, bonang | — | voiced |
| gamelan | gamelan-gamelan-angklung | 5 | gamelan-metallophone, rebab, kendang, gongs, bonang | — | album mix |
| gnawa | gnawa-traditional | 5 | voice, guembri, qraqeb, drums, guitar | drums, guitar | voiced |
| gnawa | gnawa-lila-trance | 5 | voice, guembri, qraqeb, drums, guitar | drums, guitar | voiced |
| gnawa | gnawa-gnawa-jazz | 5 | voice, tenor-sax, guembri, qraqeb, drums | — | voiced |
| gnawa | gnawa-gnawa-rock | 5 | voice, guitar, guembri, qraqeb, drums | — | voiced |
| gospel | gospel-choir-gospel | 7 | voice, choir, bass, drums, tambourine, piano, organ | — | voiced |
| gospel | gospel-traditional | 7 | voice, choir, bass, drums, tambourine, piano, organ | — | album mix |
| gospel | gospel-quartet | 5 | voice, choir, bass, hand-percussion, guitar | — | voiced |
| gospel | gospel-gospel-soul | 7 | voice, choir, bass, drums, tambourine, piano, organ | — | voiced |
| gospel | gospel-contemporary | 7 | voice, choir, bass, drums, tambourine, piano, organ | — | voiced |
| hip-hop | hip-hop-boom-bap | 5 | voice, synth, drums, sampler, rhodes | — | voiced |
| hip-hop | hip-hop-golden-age | 5 | voice, synth, drums, sampler, rhodes | — | voiced |
| hip-hop | hip-hop-g-funk | 5 | voice, synth, drums, rhodes, sampler | sampler | voiced |
| hip-hop | hip-hop-southern | 5 | voice, synth, drums, sampler, rhodes | — | voiced |
| hip-hop | hip-hop-trap | 5 | voice, synth, drums, sampler, rhodes | — | voiced |
| hip-hop | hip-hop-drill | 5 | voice, synth, drums, sampler, rhodes | — | voiced |
| hip-hop | hip-hop-jazz-rap | 6 | voice, upright-bass, drums, turntable, piano, tenor-sax | — | voiced |
| hip-hop | hip-hop-abstract | 5 | voice, synth, drums, sampler, rhodes | — | album mix |
| hip-hop | hip-hop-lo-fi | 5 | piano, bass, drums, turntable, rhodes | — | voiced |
| house | house-deep-house | 5 | synth, drums, shaker, rhodes, piano | piano | voiced |
| house | house-chicago-house | 5 | synth, drums, shaker, rhodes, piano | piano | voiced |
| house | house-garage-piano-house | 5 | piano, synth, drums, organ, shaker | shaker | voiced |
| house | house-acid-house | 5 | synth, drums, shaker, rhodes, piano | shaker, rhodes, piano | album mix |
| house | house-tech-house | 5 | synth, drums, shaker, rhodes, piano | piano | voiced |
| house | house-progressive-house | 5 | synth, drums, shaker, rhodes, piano | piano | voiced |
| house | house-afro-house | 5 | synth, drums, shaker, rhodes, piano | piano | voiced |
| indian-classical | indian-classical-hindustani-khayal | 5 | voice, sarangi, tabla, tanpura, pakhawaj | pakhawaj | album mix |
| indian-classical | indian-classical-dhrupad | 5 | voice, rudra-veena, pakhawaj, tanpura, tabla | tabla | album mix |
| indian-classical | indian-classical-instrumental-gat | 5 | sitar, tabla, tanpura, voice, sarangi | voice, sarangi | album mix |
| indian-classical | indian-classical-thumri | 5 | voice, sarangi, tabla, tanpura, pakhawaj | pakhawaj | voiced |
| indian-classical | indian-classical-carnatic-kriti | 5 | voice, sarangi, tabla, tanpura, pakhawaj | pakhawaj | album mix |
| indian-classical | indian-classical-ragam-tanam-pallavi | 5 | voice, sarangi, tabla, tanpura, pakhawaj | pakhawaj | album mix |
| indian-classical | indian-classical-varnam | 5 | voice, sarangi, tabla, tanpura, pakhawaj | pakhawaj | no exact local MP3 |
| indian-classical | indian-classical-tillana | 5 | voice, sarangi, tabla, tanpura, pakhawaj | pakhawaj | voiced |
| industrial | industrial-ebm | 5 | synth, drums, sampler, guitar, bass | guitar, bass | voiced |
| industrial | industrial-early-industrial | 5 | synth, drums, sampler, guitar, bass | guitar, bass | album mix |
| industrial | industrial-industrial-dance | 5 | synth, drums, sampler, guitar, bass | guitar, bass | album mix |
| industrial | industrial-industrial-rock | 6 | voice, guitar, bass, drums, sampler, synth | — | voiced |
| industrial | industrial-industrial-metal | 6 | voice, guitar, bass, drums, sampler, synth | — | voiced |
| japanese | japanese-gagaku | 5 | hichiriki, ryuteki, taiko, kane, sho | — | voiced |
| japanese | japanese-shakuhachi | 5 | shakuhachi, taiko, shamisen, kane, koto | taiko, shamisen, kane, koto | voiced |
| japanese | japanese-shamisen-minyo | 5 | voice, shamisen, taiko, shakuhachi, kane | shakuhachi, kane | voiced |
| japanese | japanese-koto-sankyoku | 5 | koto, shakuhachi, shamisen, taiko, kane | taiko, kane | voiced |
| japanese | japanese-taiko | 5 | taiko, kane, shamisen, shakuhachi, koto | shamisen, shakuhachi, koto | album mix |
| jazz | jazz-hard-bop | 5 | trumpet, tenor-sax, upright-bass, drums, piano | — | voiced |
| jazz | jazz-bebop | 5 | trumpet, tenor-sax, upright-bass, drums, piano | — | voiced |
| jazz | jazz-cool | 5 | alto-sax, upright-bass, drums, piano, tenor-sax | tenor-sax | voiced |
| jazz | jazz-modal | 5 | trumpet, tenor-sax, upright-bass, drums, piano | — | voiced |
| jazz | jazz-post-bop | 5 | trumpet, tenor-sax, upright-bass, drums, piano | — | album mix |
| jazz | jazz-big-band | 8 | trumpet, trombone, alto-sax, tenor-sax, upright-bass, drums, piano, guitar | — | album mix |
| jazz | jazz-gypsy-jazz | 5 | guitar, violin, upright-bass, drums, piano | drums, piano | voiced |
| jazz | jazz-jazz-fusion | 6 | guitar, tenor-sax, bass, drums, rhodes, synth | — | voiced, album mix |
| jazz | jazz-free-jazz | 5 | trumpet, tenor-sax, upright-bass, drums, piano | — | voiced |
| kizomba | kizomba-traditional | 6 | voice, bass, drums, dikanza, guitar, synth | — | voiced |
| kizomba | kizomba-semba-derived | 6 | voice, bass, drums, dikanza, guitar, synth | — | voiced |
| kizomba | kizomba-passada | 6 | voice, bass, drums, dikanza, guitar, synth | — | album mix |
| kizomba | kizomba-tarraxinha | 6 | voice, bass, drums, dikanza, guitar, synth | — | voiced |
| kizomba | kizomba-urban-kiz | 6 | voice, bass, drums, dikanza, guitar, synth | — | voiced |
| kizomba | kizomba-ghetto-zouk-crossover | 6 | voice, bass, drums, dikanza, guitar, synth | — | album mix |
| kizomba | kizomba-fusion-kiz | 6 | voice, bass, drums, dikanza, guitar, synth | — | voiced |
| korean | korean-jeongak | 5 | haegeum, janggu, gayageum, voice, buk | voice, buk | voiced |
| korean | korean-pansori | 5 | voice, buk, janggu, gayageum, gongs | janggu, gayageum, gongs | album mix |
| korean | korean-sanjo | 5 | gayageum, janggu, voice, buk, gongs | voice, buk, gongs | voiced |
| korean | korean-samulnori | 5 | gongs, janggu, buk, gayageum, voice | gayageum, voice | voiced |
| korean | korean-minyo | 5 | voice, janggu, gayageum, buk, gongs | buk, gongs | voiced |
| latin | latin-cumbia | 6 | voice, accordion, bass, cumbia-drum, guiro, guitar | — | voiced |
| latin | latin-merengue | 6 | voice, accordion, bass, tambora, guira, piano | — | voiced |
| latin | latin-vallenato | 5 | voice, accordion, bass, guacharaca, bongos | — | voiced |
| latin | latin-bolero | 6 | voice, upright-bass, bongos, maracas, guitar, piano | — | voiced |
| latin | latin-chicha | 5 | guitar, bass, cumbia-drum, guiro, organ | — | voiced |
| latin | latin-sonidera | 5 | voice, synth, bass, drums, guiro | — | voiced |
| latin | latin-tropical | 7 | voice, horn-section, bass, congas, timbales, guiro, piano | — | voiced |
| latin | latin-latin-pop | 6 | voice, accordion, bass, cumbia-drum, guiro, guitar | — | voiced |
| latin | latin-latin-funk | 6 | voice, accordion, bass, cumbia-drum, guiro, guitar | — | voiced |
| latin | latin-cumbia-villera | 5 | voice, synth, bass, drums, guiro | — | album mix |
| latin | latin-electrocumbia | 5 | voice, synth, bass, drums, guiro | — | album mix |
| latin | latin-latin-fusion | 6 | voice, accordion, bass, cumbia-drum, guiro, guitar | — | voiced |
| mbalax | mbalax-classic | 6 | voice, bass, sabar, talking-drum, shaker, guitar | — | voiced |
| mbalax | mbalax-sabar-heavy | 6 | voice, bass, sabar, talking-drum, shaker, guitar | — | voiced |
| mbalax | mbalax-pop-mbalax | 6 | voice, bass, sabar, talking-drum, shaker, guitar | — | voiced |
| mbalax | mbalax-electronic-fusion | 6 | voice, bass, sabar, talking-drum, shaker, guitar | — | voiced |
| metal | metal-heavy-metal | 5 | guitar, voice, bass, drums, organ | organ | album mix |
| metal | metal-thrash | 5 | guitar, voice, bass, drums, organ | organ | album mix |
| metal | metal-doom | 5 | voice, guitar, bass, drums, organ | organ | voiced |
| metal | metal-death | 5 | voice, guitar, bass, drums, organ | organ | voiced |
| metal | metal-black | 5 | voice, guitar, bass, drums, organ | organ | voiced |
| metal | metal-progressive-metal | 5 | voice, guitar, bass, drums, organ | organ | voiced |
| metal | metal-industrial-metal | 5 | voice, guitar, bass, drums, organ | organ | voiced |
| mexican | mexican-mariachi | 6 | voice, trumpet, violin, guitarron, guitar, vihuela | — | voiced |
| mexican | mexican-ranchera | 6 | voice, trumpet, violin, guitarron, guitar, vihuela | — | voiced |
| mexican | mexican-norteno | 5 | voice, accordion, bass, drums, bajo-sexto | — | album mix |
| mexican | mexican-banda | 6 | voice, trumpet, clarinet, tuba, drums, trombone | — | album mix |
| mexican | mexican-son-jarocho | 6 | voice, harp, requinto, guitarron, foot-stomp, jarana | — | voiced |
| mexican | mexican-son-huasteco | 5 | voice, violin, guitar, jarana, guitarron | guitarron | album mix |
| mexican | mexican-corrido | 5 | voice, accordion, bass, bajo-sexto, guitar | guitar | album mix |
| mexican | mexican-tierra-caliente | 5 | voice, violin, guitarron, bombo, guitar | — | voiced |
| mexican | mexican-conjunto | 5 | accordion, bass, drums, bajo-sexto, voice | voice | voiced |
| mexican | mexican-bolero-ranchero | 6 | voice, trumpet, violin, guitarron, guitar, vihuela | — | voiced |
| persian | persian-dastgah | 5 | voice, tar, tombak, santur, setar | setar | voiced |
| persian | persian-radif | 5 | setar, santur, tombak, tar, voice | tar, voice | album mix |
| persian | persian-avaz | 5 | voice, tar, santur, tombak, setar | santur, tombak, setar | album mix |
| persian | persian-instrumental-ensemble | 5 | voice, tar, tombak, santur, setar | setar | album mix |
| persian | persian-modern-persian | 5 | voice, tar, tombak, santur, setar | setar | voiced |
| pop | pop-contemporary | 6 | voice, bass, drums, guitar, piano, synth | — | voiced |
| pop | pop-dance-pop | 5 | voice, synth, drums, sampler, piano | — | voiced |
| pop | pop-synth-pop | 5 | voice, synth, drums, sampler, piano | — | voiced |
| pop | pop-city-pop | 6 | voice, bass, drums, rhodes, guitar, string-ensemble | — | album mix |
| pop | pop-indie-pop | 6 | voice, bass, drums, guitar, piano, synth | — | voiced |
| pop | pop-dream-pop | 5 | voice, synth, drums, sampler, piano | — | voiced |
| pop | pop-art-pop | 6 | voice, bass, drums, guitar, piano, synth | — | album mix |
| pop | pop-power-pop | 6 | guitar, voice, bass, drums, piano, synth | — | voiced |
| pop | pop-maximal-idol-pop | 6 | voice, bass, drums, guitar, piano, synth | — | voiced |
| punk | punk-punk | 5 | voice, guitar, bass, drums, piano | piano | voiced |
| punk | punk-hardcore | 5 | voice, guitar, bass, drums, piano | piano | voiced |
| punk | punk-post-hardcore | 5 | voice, guitar, bass, drums, piano | piano | album mix |
| punk | punk-pop-punk | 5 | voice, guitar, bass, drums, piano | piano | voiced |
| punk | punk-noise-punk | 5 | voice, guitar, bass, drums, piano | piano | voiced |
| qawwali | qawwali-traditional | 5 | voice, choir, dholak, hand-percussion, harmonium | — | voiced |
| qawwali | qawwali-hamd-naat | 5 | voice, choir, dholak, hand-percussion, harmonium | — | voiced |
| qawwali | qawwali-ghazal-qawwali | 5 | voice, choir, dholak, hand-percussion, harmonium | — | voiced |
| qawwali | qawwali-contemporary-fusion | 5 | voice, synth, hand-percussion, harmonium, dholak | hand-percussion, harmonium, dholak | voiced |
| r-and-b | r-and-b-contemporary-randb | 5 | voice, bass, drums, rhodes, guitar | — | voiced |
| r-and-b | r-and-b-motown | 5 | voice, bass, drums, rhodes, guitar | — | album mix |
| r-and-b | r-and-b-southern-soul | 5 | voice, bass, drums, rhodes, guitar | — | voiced |
| r-and-b | r-and-b-memphis-soul | 5 | voice, bass, drums, rhodes, guitar | — | voiced |
| r-and-b | r-and-b-philly-soul | 5 | voice, bass, drums, rhodes, guitar | — | voiced |
| r-and-b | r-and-b-quiet-storm | 5 | voice, bass, drums, rhodes, guitar | — | voiced |
| r-and-b | r-and-b-new-jack-swing | 5 | voice, bass, drums, rhodes, guitar | — | voiced |
| r-and-b | r-and-b-neo-soul | 5 | voice, bass, drums, rhodes, guitar | — | album mix |
| r-and-b | r-and-b-alternative-randb | 5 | voice, bass, drums, rhodes, guitar | — | album mix, album mix, album mix, album mix |
| reggae | reggae-roots | 6 | voice, bass, drums, shaker, guitar, organ | — | voiced |
| reggae | reggae-one-drop | 6 | voice, bass, drums, shaker, guitar, organ | — | voiced |
| reggae | reggae-rockers | 6 | voice, bass, drums, shaker, guitar, organ | — | voiced |
| reggae | reggae-dub | 7 | melodica, voice, bass, drums, shaker, guitar, organ | — | album mix |
| reggae | reggae-rocksteady | 6 | voice, bass, drums, shaker, guitar, organ | — | album mix |
| reggae | reggae-ska | 7 | voice, trumpet, tenor-sax, upright-bass, drums, guitar, organ | — | voiced |
| reggae | reggae-dancehall | 5 | voice, synth, drums, guitar, organ | guitar, organ | voiced |
| reggaeton | reggaeton-classic | 5 | voice, synth, drums, sampler, bass | bass | voiced |
| reggaeton | reggaeton-playero-underground | 5 | voice, synth, drums, sampler, bass | bass | voiced |
| reggaeton | reggaeton-melodic | 5 | voice, synth, drums, sampler, bass | bass | album mix |
| reggaeton | reggaeton-neoperreo | 5 | voice, synth, drums, sampler, bass | bass | voiced |
| reggaeton | reggaeton-latin-trap-crossover | 5 | voice, synth, drums, sampler, bass | bass | voiced |
| reggaeton | reggaeton-experimental | 5 | voice, synth, drums, sampler, bass | bass | voiced |
| rock | rock-alternative | 5 | voice, guitar, bass, drums, organ | organ | voiced |
| rock | rock-rock-and-roll | 5 | guitar, voice, bass, drums, organ | organ | voiced |
| rock | rock-classic-rock | 5 | voice, guitar, bass, drums, organ | organ | voiced |
| rock | rock-hard-rock | 5 | guitar, voice, bass, drums, organ | organ | album mix |
| rock | rock-psychedelic | 5 | guitar, voice, bass, drums, organ | organ | voiced |
| rock | rock-progressive | 5 | voice, guitar, bass, drums, organ | organ | album mix, album mix |
| rock | rock-indie | 5 | guitar, voice, bass, drums, organ | organ | album mix |
| rock | rock-shoegaze | 5 | voice, guitar, bass, drums, organ | organ | voiced |
| rock | rock-post-rock | 5 | voice, guitar, bass, drums, organ | organ | no exact local MP3 |
| rock | rock-japanese-melodic-rock | 5 | voice, guitar, bass, drums, organ | organ | voiced |
| salsa | salsa-salsa-dura | 8 | voice, trumpet, trombone, bass, congas, bongos, timbales, claves | — | voiced |
| salsa | salsa-son | 7 | trumpet, voice, bass, bongos, claves, maracas, tres | — | voiced |
| salsa | salsa-son-montuno | 8 | voice, trumpet, trombone, bass, congas, bongos, timbales, claves | — | voiced |
| salsa | salsa-mambo | 8 | voice, trumpet, trombone, bass, congas, bongos, timbales, claves | — | voiced |
| salsa | salsa-cha-cha-cha | 7 | voice, flute, bass, congas, guiro, timbales, piano | — | voiced |
| salsa | salsa-charanga | 8 | voice, flute, violin, bass, congas, timbales, guiro, piano | — | voiced |
| salsa | salsa-pachanga | 8 | voice, flute, violin, bass, congas, timbales, guiro, piano | — | voiced |
| salsa | salsa-boogaloo | 8 | voice, trumpet, trombone, bass, congas, bongos, timbales, claves | — | voiced |
| salsa | salsa-descarga | 8 | voice, trumpet, trombone, bass, congas, bongos, timbales, claves | — | album mix |
| salsa | salsa-guaguanco-salsa | 8 | voice, trumpet, trombone, bass, congas, bongos, timbales, claves | — | voiced |
| salsa | salsa-salsa-romantica | 8 | voice, trumpet, trombone, bass, congas, bongos, timbales, claves | — | album mix |
| salsa | salsa-puerto-rican-salsa | 8 | voice, trumpet, trombone, bass, congas, bongos, timbales, claves | — | voiced |
| salsa | salsa-salsa-calena | 8 | voice, trumpet, trombone, bass, congas, bongos, timbales, claves | — | voiced |
| salsa | salsa-salsa-jazz | 8 | piano, voice, trumpet, trombone, bass, congas, bongos, timbales | — | voiced |
| salsa | salsa-merengue-crossover | 7 | voice, trumpet, bass, tambora, guira, congas, piano | — | no exact local MP3 |
| salsa | salsa-cumbia-crossover | 7 | voice, accordion, bass, cumbia-drum, guiro, congas, piano | — | voiced |
| soukous | soukous-soukous | 5 | voice, guitar, bass, drums, congas | — | voiced |
| soukous | soukous-congolese-rumba | 5 | voice, guitar, bass, drums, congas | — | voiced |
| soukous | soukous-sebene | 5 | voice, guitar, bass, drums, congas | — | voiced |
| soukous | soukous-kwassa-kwassa | 5 | voice, guitar, bass, drums, congas | — | voiced |
| soukous | soukous-ndombolo | 5 | voice, guitar, bass, drums, congas | — | album mix |
| steppe | steppe-morin-khuur | 5 | morin-khuur, voice, guitar, drums, dombra | voice, guitar, drums, dombra | voiced |
| steppe | steppe-khoomei | 5 | voice, morin-khuur, guitar, drums, dombra | guitar, drums, dombra | voiced |
| steppe | steppe-sygyt | 5 | voice, morin-khuur, guitar, drums, dombra | guitar, drums, dombra | voiced |
| steppe | steppe-kargyraa | 5 | voice, morin-khuur, guitar, drums, dombra | guitar, drums, dombra | voiced |
| steppe | steppe-dombra | 5 | dombra, morin-khuur, voice, guitar, drums | morin-khuur, voice, guitar, drums | album mix |
| steppe | steppe-folk-rock-fusion | 5 | voice, morin-khuur, bass, drums, guitar | — | voiced |
| swing | swing-west-coast-swing | 6 | trumpet, tenor-sax, upright-bass, drums, piano, guitar | — | voiced |
| swing | swing-lindy-hop | 6 | trumpet, tenor-sax, upright-bass, drums, piano, guitar | — | album mix |
| swing | swing-balboa | 6 | trumpet, tenor-sax, upright-bass, drums, piano, guitar | — | voiced |
| swing | swing-charleston | 6 | trumpet, tenor-sax, upright-bass, drums, piano, guitar | — | voiced |
| swing | swing-slow-swing | 6 | trumpet, tenor-sax, upright-bass, drums, piano, guitar | — | voiced |
| swing | swing-electro-swing | 5 | trumpet, synth, drums, piano, sampler | — | voiced |
| swing | swing-fusion-swing | 6 | trumpet, tenor-sax, upright-bass, drums, piano, guitar | — | album mix |
| taarab | taarab-zanzibar | 6 | voice, violin, upright-bass, riq, oud, qanun | — | voiced |
| taarab | taarab-classical-orchestra | 6 | voice, violin, upright-bass, riq, oud, qanun | — | voiced |
| taarab | taarab-modern-taarab | 6 | voice, violin, upright-bass, riq, oud, qanun | — | voiced |
| taarab | taarab-swahili-orchestra | 6 | voice, violin, upright-bass, riq, oud, qanun | — | voiced |
| taarab | taarab-kidumbak | 5 | voice, violin, bass, bongos, shaker | — | voiced |
| tango | tango-golden-age | 5 | bandoneon, violin, upright-bass, piano, cello | cello | voiced |
| tango | tango-canyengue | 5 | bandoneon, violin, upright-bass, piano, cello | cello | voiced |
| tango | tango-guardia-nueva-de-caro | 5 | bandoneon, violin, upright-bass, piano, cello | cello | album mix |
| tango | tango-canaro | 5 | bandoneon, violin, upright-bass, piano, cello | cello | voiced |
| tango | tango-darienzo | 5 | bandoneon, violin, upright-bass, piano, cello | cello | album mix |
| tango | tango-di-sarli | 5 | violin, bandoneon, upright-bass, piano, cello | cello | voiced |
| tango | tango-troilo | 5 | bandoneon, violin, upright-bass, piano, cello | cello | voiced |
| tango | tango-pugliese | 5 | bandoneon, violin, upright-bass, piano, cello | cello | album mix |
| tango | tango-salgan | 5 | piano, bandoneon, violin, upright-bass, cello | cello | voiced |
| tango | tango-tango-cancion | 5 | voice, bandoneon, upright-bass, piano, guitar | — | voiced |
| tango | tango-milonga | 5 | bandoneon, violin, upright-bass, guitar, piano | — | voiced |
| tango | tango-vals | 5 | bandoneon, violin, upright-bass, piano, cello | cello | voiced |
| tango | tango-piazzolla-nuevo-tango | 5 | bandoneon, violin, upright-bass, piano, cello | cello | voiced |
| tango | tango-electrotango-gotan | 5 | bandoneon, synth, drums, sampler, piano | — | voiced |
| tango | tango-electro-rock-bajofondo | 5 | bandoneon, synth, drums, sampler, piano | — | voiced |
| tango | tango-modern-orquesta | 5 | bandoneon, violin, upright-bass, piano, cello | cello | album mix |
| tango | tango-chacarera-crossover | 7 | voice, violin, bass, bombo-leguero, guitar, piano, bandoneon | bandoneon | voiced |
| timba | timba-classic-timba | 8 | voice, trumpet, trombone, bass, congas, timbales, drums, cowbell | — | voiced |
| timba | timba-songo | 8 | voice, trumpet, trombone, bass, congas, timbales, drums, cowbell | — | voiced |
| timba | timba-irakere-jazz-funk-precursor | 8 | voice, trumpet, trombone, bass, congas, timbales, drums, cowbell | — | voiced |
| timba | timba-ng-la-banda-early-timba | 8 | voice, trumpet, trombone, bass, congas, timbales, drums, cowbell | — | voiced |
| timba | timba-charanga-habanera | 8 | voice, trumpet, trombone, bass, congas, timbales, drums, cowbell | — | voiced |
| timba | timba-bamboleo | 8 | voice, trumpet, trombone, bass, congas, timbales, drums, cowbell | — | voiced |
| timba | timba-paulito-fg | 8 | voice, trumpet, trombone, bass, congas, timbales, drums, cowbell | — | voiced |
| timba | timba-manolin | 8 | voice, trumpet, trombone, bass, congas, timbales, drums, cowbell | — | album mix |
| timba | timba-havana-dprimera | 8 | voice, trumpet, trombone, bass, congas, timbales, drums, cowbell | — | voiced |
| timba | timba-maykel-blanco | 8 | voice, trumpet, trombone, bass, congas, timbales, drums, cowbell | — | voiced |
| timba | timba-timba-funk | 8 | voice, trumpet, trombone, bass, congas, timbales, drums, cowbell | — | voiced |
| timba | timba-international-modern-timba | 8 | voice, trumpet, trombone, bass, congas, timbales, drums, cowbell | — | voiced |
| turkish | turkish-turkish-folk | 5 | voice, baglama, frame-drum, oud, darbuka | oud, darbuka | voiced |
| turkish | turkish-ottoman-classical | 5 | ney, oud, frame-drum, qanun, voice | voice | voiced |
| turkish | turkish-anatolian-rock | 5 | voice, baglama, bass, drums, guitar | — | voiced |
| turkish | turkish-arabesque | 5 | voice, darbuka, string-ensemble, oud, baglama | baglama | voiced |
| turkish | turkish-roman-halk | 5 | clarinet, zurna, darbuka, oud, voice | voice | album mix |
| weird | weird-deconstructed | 5 | piano, sampler, synth, drums, bass | drums, bass | voiced |
| weird | weird-musique-concrete | 5 | sampler, synth, piano, drums, bass | synth, piano, drums, bass | voiced |
| weird | weird-piano | 5 | piano, synth, sampler, drums, bass | synth, sampler, drums, bass | no exact local MP3 |
| weird | weird-glitch | 5 | synth, sampler, piano, drums, bass | piano, drums, bass | album mix |
| weird | weird-microsound | 5 | synth, sampler, piano, drums, bass | piano, drums, bass | voiced |
| weird | weird-process-generative | 5 | synth, sampler, piano, drums, bass | piano, drums, bass | album mix |
| weird | weird-phase | 5 | piano, sampler, synth, drums, bass | drums, bass | voiced |
| weird | weird-microtonal | 5 | synth, sampler, piano, drums, bass | piano, drums, bass | album mix |
| weird | weird-free-improvisation | 5 | piano, sampler, synth, drums, bass | drums, bass | no exact local MP3 |
| weird | weird-noise | 5 | synth, sampler, piano, drums, bass | piano, drums, bass | voiced |
| weird | weird-drone | 5 | synth, sampler, piano, drums, bass | piano, drums, bass | voiced |
| weird | weird-spectral | 5 | synth, sampler, piano, drums, bass | piano, drums, bass | album mix |
| weird | weird-no-wave | 5 | voice, guitar, bass, drums, synth | synth | album mix |
| weird | weird-zeuhl | 5 | voice, bass, drums, piano, synth | synth | voiced |
| weird | weird-polymetric | 5 | piano, sampler, synth, drums, bass | drums, bass | voiced |
| weird | weird-circuit-bent-broken-electronics | 5 | synth, sampler, piano, drums, bass | piano, drums, bass | voiced |
| zouk | zouk-zouk-love | 6 | voice, bass, drums, shaker, guitar, synth | — | album mix, album mix, voiced |
| zouk | zouk-zouk-beton | 6 | voice, bass, drums, shaker, guitar, synth | — | album mix |
| zouk | zouk-orchestral-zouk-love | 6 | voice, bass, drums, shaker, guitar, synth | — | album mix |
| zouk | zouk-cabo-zouk | 6 | voice, bass, drums, shaker, guitar, synth | — | voiced |
| zouk | zouk-ghetto-zouk | 6 | voice, bass, drums, shaker, guitar, synth | — | album mix |
| zouk | zouk-zouk-randb | 6 | voice, bass, drums, shaker, guitar, synth | — | album mix, voiced |
| zouk | zouk-afro-zouk | 6 | voice, bass, drums, shaker, guitar, synth | — | voiced |
| zouk | zouk-kompa-crossover | 6 | voice, bass, drums, shaker, guitar, synth | — | voiced |
| zouk | zouk-zouk-fusion | 6 | voice, bass, drums, shaker, guitar, synth | — | voiced |
| zouk | zouk-lambazouk-oriented | 7 | voice, accordion, bass, drums, shaker, guitar, synth | — | voiced |

## Implementation and evidence notes

- Sample-only support parts are added in the score builder when the authored recording roster has fewer than five instruments. They use sparse same-genre score grammar, run at reduced level, and enter from energy level 2 so the quietest introductions stay sparse. They do not modify the reusable genre style templates. Roster reductions above eight preserve melody, bass and percussion priorities first.
- Live playback and export use the SoundFont event plan and shared mix. Sample audio is rendered when requested; the browser reuses only compressed bank assets.
- Tango’s bandoneon uses the dedicated Jörg Bleymehl recording in both bellows directions. The two directions share one sparse 12-note source and use small preset differences; they are not separate recorded open/close samples. The bandoneon output is deliberately retained alongside piano, strings, and bass.
- Reference inventory has 423 local MP3s, 421 exact style/reference links, 10 styles without an exact local MP3, 315 voiced files, and 317 style links with measured voiced features. A measured separated mix is still not an isolated instrument stem.
- The current style/song dossier at [all-genres-fidelity-pass.md](./all-genres-fidelity-pass.md) should be read with this crosswalk. The detailed human-listening verdict remains open; this automated pass cannot certify “almost identical.”

Machine-readable report: `audit/all-samples/instrument-ensemble-audit.json`. Rebuild with `npm run audit:sample-ensembles`.
