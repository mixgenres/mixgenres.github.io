# Genre pedagogy and instrument-data audit

Generated 2026-10-07T16:21:17.332Z. Scope: 420 styles across 55 genre folders and 2078 instrument/style pairs.

## Findings

- 0 instrument/style pairs have no local body pattern; 0 have one; 5 have two; 2073 have at least three. Cadences and turnarounds are excluded from this count.
- 16184 local body studies have 15339 distinct event shapes, with technique, energy, difficulty and section information listed per pattern in the JSON report.
- Source-authored body material is reported separately from generated exercises: 2230 source cells across 145 instrument/style pairs with two or more cells, 1904 with one, and 29 with none. 197 source patterns include explicit pitch data; 13948 local reductions, answers, phrase-development variations and technique drills are not counted as source repertoire.
- 0 mapped playable gestures have no explicit local pattern example; this should be zero. 76 non-section cues have no named renderer gesture: 22 note-level technique cues and 54 motif/phrase vocabulary cues.
- 408 local recordings map to 385 styles; 309 styles have separated-accompaniment calibration profiles and 35 have no exact local reference.

A pattern counts as local only when its world and style IDs match and its instrument list names the instrument. Repetition is valid musical form; this audit counts the authored vocabulary available to teach the part, not how frequently an arrangement repeats a cell. Similarity is an audit prompt, not an authenticity score.

Reference RMS and crest factor are recorded for comparison, but separated audio gain is not an album loudness target. The runtime uses the separated accompaniment to make bounded width, low-end and brightness corrections. Instrument role gain remains authored per style because a stereo mix cannot reveal each instrument stem level.

## Remaining instrument and technique gaps

| Genre / style | Instrument | Source cells | Distinct source shapes | With pitch | Derived drills | Missing playable gesture examples | Cues without renderer mapping |
|---|---:|---:|---:|---:|---:|---|---|
| brazilian / brazilian-samba | bass | 1 | 1 | 0 | 5 | — | fingerstyle |
| brazilian / brazilian-pagode | bass | 1 | 1 | 0 | 5 | — | fingerstyle |
| brazilian / brazilian-partido-alto | bass | 1 | 1 | 0 | 5 | — | fingerstyle |
| brazilian / brazilian-samba-de-roda | bass | 1 | 1 | 0 | 5 | — | fingerstyle |
| brazilian / brazilian-forro | bass | 1 | 1 | 0 | 6 | — | fingerstyle |
| brazilian / brazilian-baiao | bass | 1 | 1 | 0 | 6 | — | fingerstyle |
| brazilian / brazilian-xote | bass | 1 | 1 | 0 | 3 | — | fingerstyle |
| brazilian / brazilian-mpb | bass | 1 | 1 | 0 | 6 | — | fingerstyle |
| brazilian / brazilian-samba-reggae | bass | 1 | 1 | 0 | 6 | — | fingerstyle |
| brazilian / brazilian-samba-rock | bass | 1 | 1 | 0 | 6 | — | fingerstyle |
| country / country-honky-tonk | bass | 1 | 1 | 0 | 7 | — | fingerstyle |
| country / country-bluegrass | violin | 1 | 1 | 0 | 7 | — | shuffle-bow, drone-double-stop, double-stop |
| country / country-bakersfield | bass | 1 | 1 | 0 | 7 | — | fingerstyle |
| country / country-outlaw | bass | 1 | 1 | 0 | 7 | — | fingerstyle |
| country / country-western-swing | violin | 1 | 1 | 0 | 6 | — | shuffle-bow, drone-double-stop, double-stop |
| country / country-americana | violin | 1 | 1 | 0 | 6 | — | shuffle-bow, drone-double-stop, double-stop |
| country / country-country-pop | bass | 1 | 1 | 0 | 7 | — | fingerstyle |
| flamenco / flamenco-rumba | guitar | 1 | 1 | 1 | 11 | — | abanico |
| flamenco / flamenco-rumba | cajon | 1 | 1 | 0 | 9 | — | bass |
| folk / folk-contemporary-folk | violin | 1 | 1 | 0 | 6 | — | shuffle-bow, drone-double-stop, double-stop |
| folk / folk-old-time | violin | 1 | 1 | 0 | 6 | — | shuffle-bow, drone-double-stop, open-string-drone, double-stop |
| folk / folk-old-time | guitar | 1 | 1 | 0 | 14 | — | open-string |
| folk / folk-appalachian | violin | 1 | 1 | 0 | 6 | — | shuffle-bow, drone-double-stop, double-stop |
| folk / folk-celtic | violin | 1 | 1 | 0 | 6 | — | shuffle-bow, drone-double-stop, double-stop |
| folk / folk-folk-revival | violin | 1 | 1 | 0 | 6 | — | shuffle-bow, drone-double-stop, double-stop |
| gamelan / gamelan-javanese | gongs | 1 | 1 | 0 | 1 | — | — |
| gamelan / gamelan-balinese-gong-kebyar | gongs | 1 | 1 | 0 | 1 | — | — |
| gamelan / gamelan-degung | gongs | 1 | 1 | 0 | 1 | — | — |
| gamelan / gamelan-gamelan-angklung | gongs | 1 | 1 | 0 | 1 | — | — |
| japanese / japanese-gagaku | taiko | 1 | 1 | 0 | 1 | — | — |
| jazz / jazz-big-band | guitar | 1 | 1 | 0 | 5 | — | comping |
| jazz / jazz-gypsy-jazz | guitar | 2 | 2 | 0 | 14 | — | comping |
| jazz / jazz-jazz-fusion | guitar | 1 | 1 | 0 | 5 | — | comping |
| metal / metal-heavy-metal | guitar | 2 | 2 | 0 | 27 | — | gallop |
| metal / metal-thrash | guitar | 2 | 2 | 0 | 23 | — | chug |
| metal / metal-progressive-metal | guitar | 2 | 2 | 0 | 22 | — | chug |
| mexican / mexican-mariachi | violin | 1 | 1 | 0 | 6 | — | drone-double-stop, double-stop |
| mexican / mexican-ranchera | violin | 1 | 1 | 0 | 6 | — | drone-double-stop, double-stop |
| mexican / mexican-son-huasteco | violin | 1 | 1 | 0 | 6 | — | drone-double-stop, double-stop |
| mexican / mexican-tierra-caliente | violin | 1 | 1 | 0 | 6 | — | drone-double-stop, double-stop |
| mexican / mexican-bolero-ranchero | violin | 1 | 1 | 0 | 6 | — | drone-double-stop, double-stop |
| reggae / reggae-roots | guitar | 1 | 1 | 0 | 11 | — | offbeat-skank |
| reggae / reggae-one-drop | guitar | 1 | 1 | 0 | 11 | — | offbeat-skank |
| reggae / reggae-rockers | guitar | 1 | 1 | 0 | 11 | — | offbeat-skank |
| reggae / reggae-dub | guitar | 0 | 0 | 0 | 11 | — | offbeat-skank |
| reggae / reggae-rocksteady | guitar | 1 | 1 | 0 | 11 | — | offbeat-skank |
| reggae / reggae-ska | guitar | 1 | 1 | 0 | 11 | — | offbeat-skank |
| salsa / salsa-salsa-dura | cowbell | 1 | 1 | 0 | 4 | — | damped |
| soukous / soukous-soukous | bass | 1 | 1 | 0 | 7 | — | fingerstyle |
| soukous / soukous-congolese-rumba | bass | 1 | 1 | 0 | 7 | — | fingerstyle |
| soukous / soukous-sebene | bass | 1 | 1 | 0 | 7 | — | fingerstyle |
| soukous / soukous-kwassa-kwassa | bass | 1 | 1 | 0 | 7 | — | fingerstyle |
| soukous / soukous-ndombolo | bass | 1 | 1 | 0 | 7 | — | fingerstyle |
| swing / swing-west-coast-swing | guitar | 1 | 1 | 0 | 7 | — | comping |
| swing / swing-lindy-hop | guitar | 1 | 1 | 0 | 6 | — | comping |
| swing / swing-balboa | guitar | 1 | 1 | 0 | 6 | — | comping |
| swing / swing-charleston | guitar | 1 | 1 | 0 | 6 | — | comping |
| swing / swing-slow-swing | guitar | 1 | 1 | 0 | 6 | — | comping |
| swing / swing-fusion-swing | guitar | 1 | 1 | 0 | 7 | — | comping |

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

## Catalog pass order: source-cell depth and references

Low multi-cell coverage means students have fewer than two authored playable body choices for most instrument/style pairs. Exact local references help ground the next pass; a match alone does not establish that the file is appropriate or correctly separated.

| Priority | Genre | Styles | Instrument/style pairs | Zero source cells | One source cell | Two or more | Exact local references |
|---:|---|---:|---:|---:|---:|---:|---:|
| 1 | classical | 7 | 32 | 0 | 32 | 0 | 1 |
| 2 | indian-classical | 8 | 31 | 0 | 31 | 0 | 4 |
| 3 | weird | 16 | 38 | 2 | 35 | 1 | 10 |
| 4 | amapiano | 7 | 39 | 2 | 36 | 1 | 5 |
| 5 | arabic | 5 | 25 | 0 | 25 | 0 | 4 |
| 6 | persian | 5 | 17 | 0 | 17 | 0 | 4 |
| 7 | steppe | 6 | 13 | 0 | 13 | 0 | 5 |
| 8 | gamelan | 4 | 19 | 0 | 18 | 1 | 3 |
| 9 | funk | 9 | 54 | 0 | 54 | 0 | 8 |
| 10 | zouk | 10 | 60 | 2 | 58 | 0 | 9 |
| 11 | hip-hop | 9 | 45 | 1 | 43 | 1 | 8 |
| 12 | salsa | 16 | 145 | 3 | 142 | 0 | 15 |
| 13 | flamenco | 18 | 70 | 0 | 70 | 0 | 17 |
| 14 | afrobeat | 7 | 52 | 0 | 52 | 0 | 7 |
| 15 | afrobeats | 5 | 29 | 0 | 29 | 0 | 5 |
| 16 | andean | 7 | 35 | 0 | 35 | 0 | 7 |
| 17 | blues | 8 | 40 | 1 | 39 | 0 | 8 |
| 18 | bollywood | 6 | 42 | 0 | 42 | 0 | 6 |
| 19 | brazilian | 11 | 71 | 0 | 71 | 0 | 11 |
| 20 | cinematic | 6 | 36 | 0 | 36 | 0 | 6 |
| 21 | country | 7 | 38 | 0 | 38 | 0 | 7 |
| 22 | dangdut | 4 | 24 | 1 | 23 | 0 | 4 |
| 23 | ethiopian | 5 | 26 | 0 | 26 | 0 | 5 |
| 24 | folk | 6 | 23 | 0 | 23 | 0 | 6 |
| 25 | gnawa | 4 | 16 | 0 | 16 | 0 | 4 |
| 26 | gospel | 5 | 33 | 0 | 33 | 0 | 5 |
| 27 | kizomba | 7 | 42 | 4 | 38 | 0 | 7 |
| 28 | mbalax | 4 | 24 | 1 | 23 | 0 | 4 |
| 29 | mexican | 10 | 51 | 1 | 50 | 0 | 10 |
| 30 | qawwali | 4 | 20 | 0 | 20 | 0 | 4 |
| 31 | r-and-b | 9 | 45 | 0 | 45 | 0 | 9 |
| 32 | reggae | 7 | 40 | 2 | 38 | 0 | 7 |
| 33 | swing | 7 | 41 | 0 | 41 | 0 | 7 |
| 34 | taarab | 5 | 29 | 0 | 29 | 0 | 5 |
| 35 | timba | 12 | 108 | 3 | 105 | 0 | 12 |
| 36 | turkish | 5 | 20 | 0 | 20 | 0 | 5 |
| 37 | latin | 12 | 66 | 1 | 61 | 4 | 11 |
| 38 | jazz | 9 | 46 | 0 | 45 | 1 | 9 |
| 39 | industrial | 5 | 21 | 0 | 18 | 3 | 4 |
| 40 | tango | 17 | 74 | 0 | 71 | 3 | 17 |
| 41 | pop | 9 | 51 | 3 | 45 | 3 | 9 |
| 42 | japanese | 5 | 14 | 0 | 13 | 1 | 5 |
| 43 | korean | 5 | 13 | 0 | 12 | 1 | 5 |
| 44 | ambient | 9 | 22 | 1 | 16 | 5 | 7 |
| 45 | desert-blues | 4 | 18 | 0 | 15 | 3 | 4 |
| 46 | rock | 10 | 40 | 0 | 30 | 10 | 9 |
| 47 | punk | 5 | 20 | 0 | 16 | 4 | 5 |
| 48 | soukous | 5 | 25 | 0 | 20 | 5 | 5 |
| 49 | house | 7 | 26 | 1 | 19 | 6 | 7 |
| 50 | metal | 7 | 28 | 0 | 21 | 7 | 7 |
| 51 | reggaeton | 6 | 24 | 0 | 18 | 6 | 6 |
| 52 | bass | 10 | 30 | 0 | 20 | 10 | 9 |
| 53 | electronic | 8 | 16 | 0 | 8 | 8 | 8 |
| 54 | bachata | 8 | 50 | 0 | 10 | 40 | 8 |
| 55 | chinese | 8 | 21 | 0 | 0 | 21 | 6 |

The full pattern names, articulation gestures, sections, energy bands, instrument pairs, raw technique cues and per-style mix evidence are in [`audit/technique-coverage/report.json`](../audit/technique-coverage/report.json).
