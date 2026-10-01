Audit checklist for a weaker model

Give the model these ground rules first:

Record the baseline by running npm run check, check:instruments, check:instrument-render, check:styles and test:unit. Re-run them after any fix.

Write each probe below as a .ts file outside src/ and run it with node --import tsx probe.ts. The probes import from src/data/instruments/index.ts, src/engine/style/index.ts, src/engine/sheet/sheet.ts, src/engine/band/arrangeBand.ts and src/data/genres/index.ts.

A. Classification (no regex, no substring)

A1. Role vocabulary.

Count acousticProfile.role across Object.values(INSTRUMENTS_BY_ID).
PASS only if every value is one of bass, harmony, melody, pad, percussion, lead, comp, effect.
Any perc, rhythm or drums is a FAIL.

A2. Role tables are exhaustive.

ROLE_DB_PROFILES and DEFAULT_ROLE_PROFILES must each have a key for every role in A1.
FAIL on any role that falls through to the -3.0 default in getRoleGainLinear.

A3. Drum-bus routing.

For each instrument, call determineBusCategory(def.acousticProfile.role, def.id).
Every instrument with voicing === 'unpitched', or family hand-drums, kit or body-percussion, must return drums. The only exception is log-drum, which returns sub.
Any pitched instrument that returns drums is a FAIL (known case: steel-drums).
Also fail on any effect-role instrument that isn't inst.

A4. Bass consistency.

List instruments where id contains bass but role isn't bass, and the reverse.
Each hit must be explained, for example bassoon, tuba, guitarron.

A5. Pan resolution.

For each instrument, compare StereoFieldManager.resolveInstrumentPan(id) with acousticProfile.pan.
Flag any PAN_MAP key that matched as a substring rather than a whole --delimited token. Known cases: harp/arp, bassoon/bass, guitarron/guitar, polysynth/synth.
Run grep -rn "acousticProfile" src/engine and list which fields are actually read. FAIL for each authored field never consumed (pan, trim, space).

A6. Electronic classification agrees everywhere.

For each instrument, compute ELECTRONIC_GAIN_INSTRUMENT_PATTERN.test(id), ELECTRONIC_PLAYBACK_INSTRUMENT_PATTERN.test(id) and family === 'electronic' || elementaryModel === 9.
All three must agree. List the mismatches.

A7. Genre-regex cross-contamination.

For every style in ALL_STYLES, test TANGO_PATTERN, TANGO_NUEVO_PATTERN, TANGO_ELECTRONICO_PATTERN and KIZOMBA_PATTERN (from src/data/sound/dsp/genreClassifiers.ts) against "<instrument>:<styleId>". The real dialect id has that shape.
FAIL on any style outside the intended genre that matches. Known cases: flamenco-tangos-style, flamenco-nuevo-flamenco, zouk-ghetto-zouk.

A8. Regex-on-identifier sweep.

Run grep -rnE "\.test\(|\.includes\(" src/engine src/data/sound src/data/instruments | grep -iE "role|instrumentId|genreId|dialect|styleId|id\b".
For each hit, record what string is matched and whether an exact Set or Record lookup would do.
Pay particular attention to canonicalPatternSection in sheet.ts (/…|a$|b$/). I suspected it swallows coda and llamada into "verse" but never confirmed it.
To confirm it, feed every region kind from the three genres through the same regex chain and compare against the expected canonical section.
B. Levels

B1. Static level report.

Run node --import tsx scripts/reports/style-levels.ts <genre> for tango, flamenco and kizomba, then read audit/song-levels/style-levels.json.
FAIL any style with a section-level-spread flag above 30 dB, or a lead-buried or bass-buried flag.
List every track whose makeup is 30 (the cap in GAIN_BY_MODEL).
List every track whose effDb is above +6 or below −20.

B2. Harness double-counting.

Confirm defaultTrackParams sets volume = 0.8 * makeupGainFor(...).
Confirm renderTrack multiplies by params.volume.
Confirm instrument-render.ts reads only one 256-sample block.
Therefore level-targets-diff.py counts makeup twice, and its results are invalid until fixed.

B3. Unity-gain measurement.

For each instrument, render a 0.6 s accent note at velocity 0.8 with volume: 1. Measure peak and RMS, then compute inMixRms = unityRms + 20*log10(makeup * roleGain).
Do this for every instrument used by the three genres, per genre id so the genre offsets apply.
Criterion (my own proposal, not defined by the repo): within one style, in-mix RMS across active tracks should span 15 dB or less. Lead, melody and voice should be at or above comp, harmony and percussion. Bass should be within 6 dB of the loudest track.
Anything outside that is a FAIL to investigate. It might be the instrument's makeupGain, or the role or genre offsets.

B4. Offline renders are not loudness evidence.

The repo README says the Node offline engine skips the browser master chain. Never judge final loudness from the mp3 renders.
C. Musical authenticity (dump, then compare to lists)

C1. Dump per style.

Run makeSheet({genreId, styleId}) and compileWholeSong.
Record: bpm, timeSignature, tracks (instrument, role, volume), each region's kind, bars, energy and chords, and the pattern id each track plays in each section.

C2. Palette check.

FAIL if a style has any instrument on the "avoid" list below.
Genre or style	Allowed	Avoid unless the style is a fusion or revival
Tango tradicional, vals, electronico	bandoneon, violin, viola, cello, piano, upright-bass, voice, strings (electronico adds sampler, drums, synth, sub-bass)	flute, clarinet, acoustic-guitar
Milonga	the above, plus guitar	flute, clarinet
Tango nuevo	the tradicional set plus electric-guitar	flute, clarinet
Flamenco traditional palos (soleá, bulería, alegrías, seguiriya, tientos, fandango, cante jondo)	spanish-guitar, voice, palmas, cajon, zapateado, hand-percussion	drums, bass, flute, castanets, keys
Flamenco rumba, fusion, nuevo	may add bass, flute, congas, drums	
Kizomba	bass, drums, electric-guitar, rhodes/piano/synth/warm-pad, voice, dikanza, shaker, congas	acoustic-guitar except in semba styles

I wrote these lists from general knowledge. A human should confirm them before they are used as a gate.

C3. Pattern provenance. For each track and section, report a FAIL on any of these:

the pattern id belongs to another genre (for example tango-* in kizomba)
the pattern's roles don't include the track's role, or the track's instrument kinds
a percussion-only pattern plays on a pitched instrument, or a bass-only pattern on a non-bass
the same pattern plays on two or more tracks in one section
two bass-role tracks play the same pattern at once (kizomba-tarraxo has four)

C4. Stub patterns. In PATTERNS_BY_WORLD for each of the three genres, flag any pattern where:

the description starts with Technique:
the onsetGrid is exactly [0,4,8,12] while the name isn't a marcato cell
the roles are [lead, harmony] with instruments [bandoneon]
canCrossRole is true on such a generated cell
the instruments list is empty

Report the count per genre.

C5. Harmony. Per style, print the distinct sectionProgressions. Flag a style when:

every section has the identical progression
the progression is the generic Am E7 Am G7 fallback (it ends on G7, not the tonic)
the final bar of a closing section isn't the tonic

C6. Tempo and meter.

Compare sheet.bpm and sheet.timeSignature against the style's authored tempoRange and preferredMeters. The engine overrides meter with the dominant pattern meter, so note when they differ.
Then check against published tempo norms, which a human should supply and confirm.

C7. Energy.

Print the region energies per style.
Flag a style where every section has the same energy.
Flag a style where the intro or coda isn't the lowest or the climax section isn't the highest.
Flag any section with two or fewer active tracks.

C8. Truncated or placeholder text.

In meta.ts and styles.ts for each genre, flag any description that:
doesn't end in ., ! or ?
contains \nThe
is a fragment (known case: tango, "…Tango lens: marcato")
D. Gate hardening (what the checks should assert)

For each item, record whether a check exists today, then whether it passes.

D1. check:instruments should assert role === 'percussion' is routed to the drums bus. That's the assertion that currently can't see the perc bug.
D2. A check that every instrument's role is a MixRole, with no alias.
D3. A check that ROLE_DB_PROFILES, GENRE_MIX_OFFSETS keys and INSTRUMENT_MIX_TRIMS keys reference real roles and real instrument ids.
D4. A check that no genre classifier matches outside its genre (A7).
D5. A check that no style's starter contains an avoided instrument (C2).
D6. A check that no pattern in a style's palette is a stub (C4).
D7. A level check that fails when B3's criterion is violated.
Report format

Return one table with these columns: Check | Command | Result (PASS/FAIL/COULD NOT RUN) | Evidence (verbatim) | Affected ids.

End with a short list of the failing checks, ordered by how many styles or instruments they affect.