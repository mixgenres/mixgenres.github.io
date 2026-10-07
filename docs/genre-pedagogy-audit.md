# Genre pedagogy and instrument-data audit

Generated 2026-10-07T08:41:58.785Z. Scope: 420 styles across 55 genre folders and 2078 instrument/style pairs.

## Findings

- 0 instrument/style pairs have no local body pattern; 0 have one; 7 have two; 2071 have at least three. Cadences and turnarounds are excluded from this count.
- 14131 local body studies have 14131 distinct event shapes, with technique, energy, difficulty and section information listed per pattern in the JSON report.
- 0 mapped playable gestures have no explicit local pattern example; this should be zero. 76 non-section cues have no named renderer gesture: 22 note-level technique cues and 54 motif/phrase vocabulary cues.
- 408 local recordings map to 385 styles; 309 styles have separated-accompaniment calibration profiles and 35 have no exact local reference.

A pattern counts as local only when its world and style IDs match and its instrument list names the instrument. Repetition is valid musical form; this audit counts the authored vocabulary available to teach the part, not how frequently an arrangement repeats a cell. Similarity is an audit prompt, not an authenticity score.

Reference RMS and crest factor are recorded for comparison, but separated audio gain is not an album loudness target. The runtime uses the separated accompaniment to make bounded width, low-end and brightness corrections. Instrument role gain remains authored per style because a stereo mix cannot reveal each instrument stem level.

## Remaining instrument and technique gaps

| Genre / style | Instrument | Local body patterns | Missing playable gesture examples | Cues without renderer mapping |
|---|---:|---:|---|---|
| brazilian / brazilian-samba | bass | 5 | — | fingerstyle |
| brazilian / brazilian-pagode | bass | 5 | — | fingerstyle |
| brazilian / brazilian-partido-alto | bass | 5 | — | fingerstyle |
| brazilian / brazilian-samba-de-roda | bass | 5 | — | fingerstyle |
| brazilian / brazilian-forro | bass | 6 | — | fingerstyle |
| brazilian / brazilian-baiao | bass | 6 | — | fingerstyle |
| brazilian / brazilian-xote | bass | 4 | — | fingerstyle |
| brazilian / brazilian-mpb | bass | 6 | — | fingerstyle |
| brazilian / brazilian-samba-reggae | bass | 6 | — | fingerstyle |
| brazilian / brazilian-samba-rock | bass | 6 | — | fingerstyle |
| chinese / chinese-jingju | gongs | 2 | — | — |
| chinese / chinese-suona-chuida | gongs | 2 | — | — |
| country / country-honky-tonk | bass | 7 | — | fingerstyle |
| country / country-bluegrass | violin | 7 | — | shuffle-bow, drone-double-stop, double-stop |
| country / country-bakersfield | bass | 7 | — | fingerstyle |
| country / country-outlaw | bass | 7 | — | fingerstyle |
| country / country-western-swing | violin | 6 | — | shuffle-bow, drone-double-stop, double-stop |
| country / country-americana | violin | 7 | — | shuffle-bow, drone-double-stop, double-stop |
| country / country-country-pop | bass | 7 | — | fingerstyle |
| flamenco / flamenco-rumba | guitar | 11 | — | abanico |
| flamenco / flamenco-rumba | cajon | 9 | — | bass |
| folk / folk-contemporary-folk | violin | 6 | — | shuffle-bow, drone-double-stop, double-stop |
| folk / folk-old-time | violin | 6 | — | shuffle-bow, drone-double-stop, open-string-drone, double-stop |
| folk / folk-old-time | guitar | 14 | — | open-string |
| folk / folk-appalachian | violin | 6 | — | shuffle-bow, drone-double-stop, double-stop |
| folk / folk-celtic | violin | 6 | — | shuffle-bow, drone-double-stop, double-stop |
| folk / folk-folk-revival | violin | 6 | — | shuffle-bow, drone-double-stop, double-stop |
| gamelan / gamelan-javanese | gongs | 2 | — | — |
| gamelan / gamelan-balinese-gong-kebyar | gongs | 2 | — | — |
| gamelan / gamelan-degung | gongs | 2 | — | — |
| gamelan / gamelan-gamelan-angklung | gongs | 2 | — | — |
| japanese / japanese-gagaku | taiko | 2 | — | — |
| jazz / jazz-big-band | guitar | 5 | — | comping |
| jazz / jazz-gypsy-jazz | guitar | 14 | — | comping |
| jazz / jazz-jazz-fusion | guitar | 5 | — | comping |
| metal / metal-heavy-metal | guitar | 27 | — | gallop |
| metal / metal-thrash | guitar | 23 | — | chug |
| metal / metal-progressive-metal | guitar | 22 | — | chug |
| mexican / mexican-mariachi | violin | 6 | — | drone-double-stop, double-stop |
| mexican / mexican-ranchera | violin | 6 | — | drone-double-stop, double-stop |
| mexican / mexican-son-huasteco | violin | 6 | — | drone-double-stop, double-stop |
| mexican / mexican-tierra-caliente | violin | 6 | — | drone-double-stop, double-stop |
| mexican / mexican-bolero-ranchero | violin | 6 | — | drone-double-stop, double-stop |
| reggae / reggae-roots | guitar | 11 | — | offbeat-skank |
| reggae / reggae-one-drop | guitar | 11 | — | offbeat-skank |
| reggae / reggae-rockers | guitar | 11 | — | offbeat-skank |
| reggae / reggae-dub | guitar | 10 | — | offbeat-skank |
| reggae / reggae-rocksteady | guitar | 11 | — | offbeat-skank |
| reggae / reggae-ska | guitar | 11 | — | offbeat-skank |
| salsa / salsa-salsa-dura | cowbell | 4 | — | damped |
| soukous / soukous-soukous | bass | 7 | — | fingerstyle |
| soukous / soukous-congolese-rumba | bass | 7 | — | fingerstyle |
| soukous / soukous-sebene | bass | 7 | — | fingerstyle |
| soukous / soukous-kwassa-kwassa | bass | 7 | — | fingerstyle |
| soukous / soukous-ndombolo | bass | 7 | — | fingerstyle |
| swing / swing-west-coast-swing | guitar | 7 | — | comping |
| swing / swing-lindy-hop | guitar | 6 | — | comping |
| swing / swing-balboa | guitar | 6 | — | comping |
| swing / swing-charleston | guitar | 6 | — | comping |
| swing / swing-slow-swing | guitar | 6 | — | comping |
| swing / swing-fusion-swing | guitar | 7 | — | comping |

## Reference coverage by genre

| Genre | Styles | Exact local reference | Separated accompaniment profile |
|---|---:|---:|---:|
| afrobeat | 7 | 7 | 5 |
| afrobeats | 5 | 5 | 5 |
| amapiano | 7 | 5 | 5 |
| ambient | 9 | 7 | 6 |
| andean | 7 | 7 | 6 |
| arabic | 5 | 4 | 3 |
| bachata | 8 | 8 | 5 |
| bass | 10 | 9 | 9 |
| blues | 8 | 8 | 7 |
| bollywood | 6 | 6 | 6 |
| brazilian | 11 | 11 | 9 |
| chinese | 8 | 6 | 3 |
| cinematic | 6 | 6 | 5 |
| classical | 7 | 1 | 1 |
| country | 7 | 7 | 7 |
| dangdut | 4 | 4 | 4 |
| desert-blues | 4 | 4 | 3 |
| electronic | 8 | 8 | 7 |
| ethiopian | 5 | 5 | 4 |
| flamenco | 18 | 17 | 11 |
| folk | 6 | 6 | 6 |
| funk | 9 | 8 | 7 |
| gamelan | 4 | 3 | 2 |
| gnawa | 4 | 4 | 4 |
| gospel | 5 | 5 | 4 |
| hip-hop | 9 | 8 | 8 |
| house | 7 | 7 | 6 |
| indian-classical | 8 | 4 | 2 |
| industrial | 5 | 4 | 2 |
| japanese | 5 | 5 | 4 |
| jazz | 9 | 9 | 7 |
| kizomba | 7 | 7 | 5 |
| korean | 5 | 5 | 4 |
| latin | 12 | 11 | 9 |
| mbalax | 4 | 4 | 4 |
| metal | 7 | 7 | 5 |
| mexican | 10 | 10 | 6 |
| persian | 5 | 4 | 2 |
| pop | 9 | 9 | 7 |
| punk | 5 | 5 | 4 |
| qawwali | 4 | 4 | 4 |
| r-and-b | 9 | 9 | 6 |
| reggae | 7 | 7 | 5 |
| reggaeton | 6 | 6 | 5 |
| rock | 10 | 9 | 6 |
| salsa | 16 | 15 | 13 |
| soukous | 5 | 5 | 4 |
| steppe | 6 | 5 | 5 |
| swing | 7 | 7 | 5 |
| taarab | 5 | 5 | 5 |
| tango | 17 | 17 | 13 |
| timba | 12 | 12 | 11 |
| turkish | 5 | 5 | 4 |
| weird | 16 | 10 | 8 |
| zouk | 10 | 9 | 6 |

The full pattern names, articulation gestures, sections, energy bands, instrument pairs, raw technique cues and per-style mix evidence are in [`audit/technique-coverage/report.json`](../audit/technique-coverage/report.json).
