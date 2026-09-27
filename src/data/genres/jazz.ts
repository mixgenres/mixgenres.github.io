import { GenreWorld } from '../../types';

export const JAZZ_WORLD: GenreWorld = {
  "id": "jazz",
  "name": "Jazz",
  "family": "Improvisation / Harmony",
  "color": "#5f83bb",
  "level": "world",
  "description": "The monumental Jazz style: Swing and",
  "prominentChords": ['Maj 7', 'Min 7', 'Dom 9', 'Min 7b5', 'Dim 7'],
  performanceRules: {
    trumpet: {
      evaluateNote: (phrase: any, index: number) => {
        const note = phrase.notes[index];
        const prev = phrase.notes[index - 1];
        const next = phrase.notes[index + 1];
        const noteTime = note.time ?? 0;
        const noteDur = note.duration ?? note.dur ?? 0.25;
        const noteVel = note.velocity ?? note.vel ?? 80;
        const notePitch = note.pitch ?? note.midi ?? 60;
        const prevTime = prev ? (prev.time ?? 0) : 0;
        const prevDur = prev ? (prev.duration ?? prev.dur ?? 0.25) : 0;
        const prevPitch = prev ? (prev.pitch ?? prev.midi ?? 60) : 60;

        let articulation = 'tongued';
        const isLegato = prev && (noteTime - (prevTime + prevDur) < 0.05);

        if (isLegato) articulation = Math.abs(notePitch - prevPitch) <= 2 ? 'lip_slur' : 'legato';
        else if (noteVel > 85) articulation = 'marcato';

        if (!next || ((next.time ?? 0) - (noteTime + noteDur) > 0.5)) {
          if (noteVel > 75) articulation = 'fall';
        }

        return [{
          ...note,
          type: 'continuous',
          articulation,
          timbreControl: { breathPressure: noteVel, embouchureTension: notePitch / 127 }
        }];
      }
    }
  },
  drumRules: {
    evaluateStep: (step: any) => {
      const events = [];
      if (step.kick) events.push({ type: 'kick', velocity: step.velocity * 0.8, time: step.time });
      if (step.snare) {
        events.push({ type: 'snare', velocity: step.velocity, time: step.time });
        if (step.velocity < 60) events.push({ type: 'snare_ghost', velocity: step.velocity, time: step.time });
        else if (step.velocity > 95) events.push({ type: 'snare_rimshot', velocity: step.velocity, time: step.time });
      }
      if (step.hihat) {
        let hatType = step.velocity < 60 ? 'hihat_tip' : 'hihat_shank';
        if (step.isOpen) hatType = 'hihat_open';
        else if (step.isPedal) hatType = 'hihat_pedal';
        events.push({ type: hatType, velocity: step.velocity, time: step.time });
      }
      if (step.ghosts) step.ghosts.forEach((g: any) => events.push({ type: 'snare_ghost', velocity: g.velocity, time: g.time }));

      return events;
    }
  },
  "styleDefinitions": [
    {
      "id": "jazz-bebop",
      "worldId": "jazz",
      "name": "Bebop",
      "origin": "Harlem, New York City",
      "era": "1940s",
      "description": "Fast • Chromatic • Virtuosic\nRapid harmonic",
      "characteristicInstruments": [
        "alto-sax",
        "trumpet",
        "piano",
        "upright-bass",
        "drums"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        180,
        260
      ],
      "keySubstyles": [
        "Classic Bebop",
        "52nd Street Sound"
      ],
      "coreConcepts": [
        "lightning-fast chromatic approach notes and enclosures",
        "extended upper chord tones (9ths, 11ths, b13ths, #11ths)",
        "snappy ii-V-I substitutions and tritone subs",
        "unison trumpet/alto horn heads and blistering solos"
      ],
      "rhythmicGrammar": [
        "fast ride cymbal \"spang-a-lang\" with Max Roach snare and bass drum dropping bombs on unexpected beats"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Rapid chromatic enclosure lick landing on #11 upper chord extension with ride cymbal drive",
      "grooveMechanics": {
        "swingPercentage": 54,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "swung"
      },
      "sectionProgressions": {
        "intro": [
          "Fm7",
          "Bb7",
          "Ebmaj7",
          "C7b9"
        ],
        "head": [
          "Fm7",
          "Bb7",
          "Ebmaj7",
          "C7b9",
          "Fm7",
          "Bb7",
          "Ebmaj7",
          "Ebmaj7"
        ],
        "bridge": [
          "Abm7",
          "Db7",
          "Gbmaj7",
          "Gbmaj7",
          "Am7",
          "D7",
          "Gmaj7",
          "C7b9"
        ],
        "coda": [
          "Fm7",
          "Bb7",
          "Ebmaj7",
          "Ebmaj7"
        ]
      }
    },
    {
      "id": "jazz-cool-jazz",
      "worldId": "jazz",
      "name": "Cool Jazz",
      "origin": "New York / Los Angeles (West Coast)",
      "era": "Late 1940s–1950s",
      "description": "Subtle • Relaxed • Lyricism\nRestrained, understated",
      "characteristicInstruments": [
        "trumpet",
        "alto-sax",
        "piano",
        "upright-bass",
        "drums"
      ],
      "preferredMeters": [
        "4/4",
        "3/4"
      ],
      "tempoRange": [
        95,
        130
      ],
      "keySubstyles": [
        "Birth of the Cool",
        "West Coast Jazz"
      ],
      "coreConcepts": [
        "subtle breathy tone with minimal vibrato (Miles Harmon mute)",
        "intricate contrapuntal horn arrangements",
        "relaxed laid-back swing feel",
        "understated lyrical melodic purity"
      ],
      "rhythmicGrammar": [
        "feathered bass drum with gentle brushed snare and smooth relaxed ride cymbal pulse"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Miles Davis Harmon-muted trumpet line whispering gently over brushed snare and cool bass",
      "grooveMechanics": {
        "swingPercentage": 56,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Dm7",
          "G7",
          "Cmaj7",
          "A7b9"
        ],
        "head": [
          "Dm7",
          "G7",
          "Cmaj7",
          "Am7",
          "Dm7",
          "G7",
          "Cmaj7",
          "Cmaj7"
        ],
        "bridge": [
          "Fmaj7",
          "Fm7",
          "Em7",
          "A7",
          "Dm7",
          "D7",
          "G7",
          "A7b9"
        ],
        "coda": [
          "Dm7",
          "G7",
          "Cmaj7",
          "Cmaj7"
        ]
      }
    },
    {
      "id": "jazz-hard-bop",
      "worldId": "jazz",
      "name": "Hard Bop",
      "origin": "New York / Philadelphia / Detroit",
      "era": "1950s–1960s",
      "description": "Soulful • Blues-infused • Driving\nGospel and",
      "characteristicInstruments": [
        "tenor-sax",
        "trumpet",
        "piano",
        "upright-bass",
        "drums"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        120,
        160
      ],
      "keySubstyles": [
        "Blue Note Sound",
        "Soul Jazz"
      ],
      "coreConcepts": [
        "heavy gospel and blues chord inflections",
        "Art Blakey driving press-rolls and thunderous hi-hat snaps on 2 and 4",
        "earthy memorable horn themes",
        "funky walking basslines"
      ],
      "rhythmicGrammar": [
        "driving medium-up swing with aggressive hi-hat snap on 2 and 4 and piano church-chord comping"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Art Blakey explosive drum press-roll erupting into soulful minor-blues horn unison",
      "grooveMechanics": {
        "swingPercentage": 58,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "swung"
      },
      "sectionProgressions": {
        "intro": [
          "Fm7",
          "Bbm7",
          "C7#9",
          "Fm7"
        ],
        "head": [
          "Fm7",
          "Bbm7",
          "C7#9",
          "Fm7",
          "Ab7",
          "Db7",
          "C7#9",
          "Fm7"
        ],
        "solo": [
          "Fm7",
          "Bbm7",
          "C7#9",
          "Fm7",
          "Bbm7",
          "Eb7",
          "Abmaj7",
          "C7#9"
        ],
        "coda": [
          "Bbm7",
          "C7#9",
          "Fm7",
          "Fm7"
        ]
      }
    },
    {
      "id": "jazz-free-jazz",
      "worldId": "jazz",
      "name": "Free Jazz",
      "origin": "New York City / Los Angeles",
      "era": "Late 1950s–1960s",
      "description": "Avant-Garde • Atonal • Unbound\nRadical improvisation",
      "characteristicInstruments": [
        "tenor-sax",
        "alto-sax",
        "trumpet",
        "upright-bass",
        "drums"
      ],
      "preferredMeters": [
        "free"
      ],
      "tempoRange": [
        100,
        220
      ],
      "keySubstyles": [
        "Avant-Garde Jazz",
        "Harmolodics",
        "Energy Music"
      ],
      "coreConcepts": [
        "abandonment of preset chord changes and fixed meters",
        "overblowing, multiphonics, and screeches on horns",
        "intense collective improvisation and energy waves",
        "free harmonic and microtonal exploration"
      ],
      "rhythmicGrammar": [
        "multidirectional polyrhythmic percussion pulses without a fixed metronomic downbeat"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "High multiphonic saxophone shriek erupting over frantic multidirectional free drum flurry",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "head": [
          "F",
          "B",
          "Eb",
          "A",
          "D",
          "Ab",
          "Db",
          "G"
        ]
      }
    },
    {
      "id": "jazz-gypsy-jazz",
      "worldId": "jazz",
      "name": "Gypsy Jazz",
      "origin": "Paris, France (Manouche GenreStyleDefinition)",
      "era": "1930s–1940s",
      "description": "La Pompe • Acoustic Guitar •",
      "characteristicInstruments": [
        "acoustic-guitar",
        "violin",
        "upright-bass",
        "clarinet",
        "tenor-sax"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        140,
        240
      ],
      "keySubstyles": [
        "Jazz Manouche",
        "Hot Club Swing"
      ],
      "coreConcepts": [
        "\"La Pompe\" percussive acoustic guitar rhythm strumming on 2 and 4",
        "virtuosic chromatic Selmer acoustic guitar runs",
        "sweet singing Grappelli-style violin glissandi and vibrato",
        "driving bass pulse without drums"
      ],
      "rhythmicGrammar": [
        "tight percussive four-to-the-bar rhythm guitar with heavy downward chop on beats 2 and 4"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Crisp percussive La Pompe guitar chop driving blinding chromatic Django acoustic guitar arpeggio",
      "grooveMechanics": {
        "swingPercentage": 56,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "Am6",
          "E7",
          "Am6",
          "E7"
        ],
        "head": [
          "Am6",
          "Am6",
          "Dm6",
          "Dm6",
          "E7",
          "E7",
          "Am6",
          "E7"
        ],
        "bridge": [
          "Cmaj7",
          "C#dim",
          "Dm7",
          "G7",
          "Cmaj7",
          "F7",
          "E7",
          "E7"
        ],
        "coda": [
          "Dm6",
          "E7",
          "Am6",
          "Am6"
        ]
      }
    },
    {
      "id": "jazz-fusion",
      "worldId": "jazz",
      "name": "Fusion",
      "origin": "New York / Los Angeles",
      "era": "Late 1960s–1970s",
      "description": "Electric • Complex Meter • High",
      "characteristicInstruments": [
        "synth",
        "electric-guitar",
        "bass",
        "drums",
        "tenor-sax"
      ],
      "preferredMeters": [
        "4/4",
        "7/8",
        "5/4"
      ],
      "tempoRange": [
        110,
        145
      ],
      "keySubstyles": [
        "Jazz-Rock Fusion",
        "Electric Jazz"
      ],
      "coreConcepts": [
        "virtuosic electric bass technical mastery (Jaco Pastorius fretless harmonics)",
        "screaming overdrive guitar solos",
        "complex analog synthesizer polyphony (Rhodes, Minimoog, Prophet)",
        "complex odd-meter funk rhythms"
      ],
      "rhythmicGrammar": [
        "tight virtuosic 16th-note funk/rock drumming with complex polyrhythmic hi-hat subdivisions"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Jaco fretless bass harmonic flourish locked with lightning-fast odd-meter synth/guitar unison",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Dmaj9",
          "Cmaj9#11",
          "Bbmaj7#11",
          "A7alt"
        ],
        "theme": [
          "Dmaj9",
          "Gmaj7#11",
          "Cmaj9#11",
          "Fmaj7#11",
          "Bm9",
          "Em9",
          "A7alt",
          "Dmaj9"
        ],
        "solo": [
          "Bm9",
          "E13",
          "Bm9",
          "E13",
          "Gmaj7",
          "F#m7",
          "Em7",
          "A7alt"
        ],
        "coda": [
          "Bbmaj7#11",
          "A7alt",
          "Dmaj9",
          "Dmaj9"
        ]
      }
    },
    {
      "id": "jazz-spiritual-jazz",
      "worldId": "jazz",
      "name": "Spiritual Jazz",
      "origin": "New York / Chicago / Global",
      "era": "Late 1960s–1970s",
      "description": "Modal Drone • Cosmic • Transcendental\nSearching",
      "characteristicInstruments": [
        "tenor-sax",
        "harp",
        "piano",
        "upright-bass",
        "drums"
      ],
      "preferredMeters": [
        "4/4",
        "3/4",
        "free"
      ],
      "tempoRange": [
        80,
        115
      ],
      "keySubstyles": [
        "Strata-East Sound",
        "Cosmic Jazz",
        "Transcendental Jazz"
      ],
      "coreConcepts": [
        "hypnotic open-fifth modal bass ostinatos",
        "cascading concert harp glissandi and organ drones",
        "transcendental overblown saxophone cries and hums",
        "shimmering bells, shakers, and tambourines"
      ],
      "rhythmicGrammar": [
        "oceanic rolling 3/4 or 4/4 triplet waves over steady grounding bass pedal point"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Cascading Alice Coltrane harp glissando rising over deep bass drone and Pharoah Sanders saxophone cry",
      "grooveMechanics": {
        "swingPercentage": 54,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "intro": [
          "Fm",
          "Fm",
          "Fm",
          "Fm"
        ],
        "theme": [
          "Fm7",
          "Bbm7",
          "Eb7",
          "Abmaj7",
          "Dbmaj7",
          "Bbm7",
          "C7alt",
          "Fm7"
        ],
        "drone": [
          "Fm7",
          "Fm7",
          "Fm7",
          "Fm7"
        ],
        "coda": [
          "Dbmaj7",
          "C7alt",
          "Fm7",
          "Fm7"
        ]
      }
    },
    {
      "id": "jazz-ragtime",
      "worldId": "jazz",
      "name": "Ragtime",
      "origin": "Sedalia / St. Louis, Missouri",
      "era": "1890s–1910s",
      "description": "Syncopated • Marching Bass • Piano\nFoundational",
      "characteristicInstruments": [
        "piano",
        "banjo",
        "brass",
        "upright-bass",
        "drums"
      ],
      "preferredMeters": [
        "2/4"
      ],
      "tempoRange": [
        80,
        104
      ],
      "keySubstyles": [
        "Classic Ragtime",
        "St. Louis Rag"
      ],
      "coreConcepts": [
        "steady \"boom-chick\" marching left-hand stride bass",
        "heavily syncopated right-hand melodies",
        "multi-strain classical march structure (AABBACCDD)",
        "clean acoustic articulation"
      ],
      "rhythmicGrammar": [
        "strict marching 2/4 meter with syncopated right-hand accents tied across eighth-note beats"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Steady left-hand boom-chick march bass with sparkling syncopated right-hand Joplin melody",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "C",
          "G7",
          "C",
          "G7"
        ],
        "strain-a": [
          "C",
          "G7",
          "C",
          "G7",
          "C",
          "C7",
          "F",
          "D7",
          "G",
          "G7",
          "C",
          "C"
        ],
        "strain-b": [
          "C",
          "G7",
          "C",
          "C",
          "F",
          "C",
          "G7",
          "C"
        ],
        "coda": [
          "F",
          "G7",
          "C",
          "C"
        ]
      }
    }
  ],
  "substyles": [
    "Bebop",
    "Cool Jazz",
    "Hard Bop",
    "Free Jazz",
    "Gypsy Jazz",
    "Fusion",
    "Spiritual Jazz",
    "Ragtime"
  ],
  "artists": [
    "Charlie Parker",
    "Dizzy Gillespie",
    "Miles Davis",
    "Chet Baker",
    "Art Blakey & The Jazz Messengers",
    "Horace Silver",
    "Ornette Coleman",
    "John Coltrane",
    "Django Reinhardt",
    "Stephane Grappelli",
    "Weather Report",
    "Return to Forever",
    "Pharoah Sanders",
    "Alice Coltrane",
    "Scott Joplin",
    "Jelly Roll Morton"
  ],
  "concepts": [
    "walking bass",
    "spang-a-lang ride",
    "charleston syncopation",
    "ii-V-I guide tones",
    "quartal voicings",
    "enclosures",
    "pedal point",
    "broken time"
  ],
  "roles": {
    "bass": [
      "4-feel walking line",
      "2-feel head anchor",
      "modal pedal point",
      "syncopated counterpoint"
    ],
    "piano": [
      "syncopated comping",
      "shell voicings",
      "quartal stacks",
      "chord melody"
    ],
    "drums": [
      "ride cymbal swing",
      "hi-hat 2 & 4 snap",
      "snare comping punches",
      "brush ballad sweep"
    ],
    "lead": [
      "bebop melody / solo",
      "horn section harmonized head",
      "expressive counterlines"
    ]
  },
  "patterns": [
    {
      "id": "jazz-walking-bass",
      "worldId": "jazz",
      "styleIds": ["jazz-swing-bebop"],
      "name": "Walking Bass (Continuous Harmonic Navigation)",
      "family": "Walking Basslines",
      "category": "ostinato",
      "description": "Continuous four-to-the-bar walking bass connecting roots,",
      "tags": [
        "bass",
        "walking",
        "swing",
        "bebop",
        "pulse"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "bass",
        "pulse"
      ],

      "approaches": ["walking", "groove"],
      "instruments": [
        "bass",
        "piano"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        4,
        8,
        12
      ],
      "accentProfile": [
        0.9,
        0.95,
        0.85,
        1
      ],
      "velocityProfile": [
        0.85,
        0.9,
        0.8,
        0.95
      ],
      "articulations": [
        "tenuto-pizz",
        "chromatic-lead"
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "solo",
        "vamp"
      ],
      "variants": [
        {
          "id": "jazz-two-feel-bass",
          "parentPatternId": "jazz-walking-bass",
          "name": "Two-Feel Bass (Head Statement)",
          "variationType": "sparse",
          "probability": 0.5,
          "onsetGrid": [
            0,
            8
          ],
          "accentProfile": [
            1,
            0.9
          ],
          "description": "Half-note pulse used during head statements"
        },
        {
          "id": "jazz-walking-with-triplet-skip",
          "parentPatternId": "jazz-walking-bass",
          "name": "Walking Bass with Triplet Ghost Skip",
          "variationType": "ornamented",
          "probability": 0.45,
          "onsetGrid": [
            0,
            4,
            6,
            8,
            12
          ],
          "accentProfile": [
            0.9,
            0.9,
            0.5,
            0.85,
            1
          ],
          "description": "Ray Brown-style ghosted triplet skip note"
        }
      ],

      "difficulty": 1,
      "weight": 0.7,
      "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "jazz"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,

},
    {
      "id": "jazz-ride-spangalang",
      "worldId": "jazz",
      "styleIds": ["jazz-swing-bebop"],
      "name": "Jazz Ride Cymbal (Spang-a-Lang)",
      "family": "Jazz Drumming",
      "category": "ostinato",
      "description": "The definitive jazz swing ride pattern",
      "tags": [
        "drums",
        "ride",
        "swing",
        "jazz",
        "hi-hat"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "drums",
        "percussion",
        "pulse"
      ],

      "approaches": ["groove"],
      "instruments": [
        "drums",
        "percussion"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        4,
        6,
        8,
        12,
        14
      ],
      "accentProfile": [
        0.85,
        0.95,
        0.65,
        0.85,
        1,
        0.7
      ],
      "velocityProfile": [
        0.8,
        0.95,
        0.6,
        0.8,
        1,
        0.65
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "intro",
        "verse",
        "chorus",
        "solo"
      ],
      "variants": [
        {
          "id": "jazz-brushes-ballad",
          "parentPatternId": "jazz-ride-spangalang",
          "name": "Ballad Snare Brushes (Circular Sweep)",
          "variationType": "sparse",
          "probability": 0.5,
          "onsetGrid": [
            0,
            4,
            8,
            12
          ],
          "accentProfile": [
            0.6,
            0.75,
            0.6,
            0.8
          ],
          "description": "Gentle circular wire brush sweeps on"
        },
        {
          "id": "jazz-ride-spangalang-v-02",
          "parentPatternId": "jazz-ride-spangalang",
          "name": "Jazz Ride Cymbal (Spang-a-Lang) — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            4,
            6,
            8,
            12,
            14
          ],
          "accentProfile": [
            0.8099999999999999,
            1,
            0.61,
            0.9299999999999999,
            0.96,
            0.7799999999999999
          ],
          "velocityProfile": [
            0.8600000000000001,
            0.9299999999999999,
            0.58,
            0.8600000000000001,
            0.98,
            0.63
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        }
      ],

      "difficulty": 2,
      "weight": 0.7,
      "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "jazz"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,


      "articulations": ["accented"]
    },
    {
      "id": "jazz-piano-comping",
      "worldId": "jazz",
      "styleIds": ["jazz-swing-bebop"],
      "name": "Syncopated Piano Comping (Charleston & Red Garland Pluck)",
      "family": "Piano Comping",
      "category": "ostinato",
      "description": "Sparse, syncopated chord voicings placed around",
      "tags": [
        "piano",
        "comping",
        "charleston",
        "harmony",
        "voicings"
      ],
      "scopes": [
        "measure",
        "phrase",
        "region",
        "track",
        "song"
      ],
      "roles": [
        "harmony",
        "piano",
        "keyboard"
      ],

      "approaches": ["comping"],
      "instruments": [
        "piano",
        "keys",
        "guitar"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        6,
        14
      ],
      "accentProfile": [
        0.95,
        1,
        0.85
      ],
      "velocityProfile": [
        0.9,
        0.95,
        0.8
      ],
      "supportedEnergy": [1, 2],
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "solo",
        "vamp"
      ],
      "variants": [
        {
          "id": "jazz-quartal-mccoy-comping",
          "parentPatternId": "jazz-piano-comping",
          "name": "McCoy Tyner Quartal Power Comping",
          "variationType": "dense",
          "probability": 0.5,
          "onsetGrid": [
            0,
            3,
            6,
            10,
            12,
            14
          ],
          "accentProfile": [
            1,
            0.7,
            0.95,
            0.8,
            0.9,
            1
          ],
          "description": "Powerful fourth-based modal chords with pentatonic"
        },
        {
          "id": "jazz-piano-comping-v-02",
          "parentPatternId": "jazz-piano-comping",
          "name": "Syncopated Piano Comping (Charleston & Red Garland Pluck) — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            6,
            14
          ],
          "accentProfile": [
            0.9099999999999999,
            1,
            0.8099999999999999
          ],
          "velocityProfile": [
            0.96,
            0.9299999999999999,
            0.78
          ],
          "microtimingOffset": [
            2,
            -5,
            2
          ]
        }
      ],

      "difficulty": 1,
      "weight": 0.7,
      "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "jazz"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,


      "articulations": ["accented"]
    },
    {
      "id": "jazz-brushes-swing",
      "worldId": "jazz",
      "styleIds": ["jazz-swing-bebop"],
      "name": "Brushes Swing",
      "family": "Drums",
      "category": "fill",
      "transitionType": "fill",
      "description": "Sweeping wire brush circular patterns on",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums"
      ],

      "approaches": ["groove"],
      "instruments": [
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        2,
        3,
        5,
        6,
        8,
        9,
        11
      ],
      "accentProfile": [
        0.95,
        0.6,
        0.85,
        0.65,
        0.95,
        0.6,
        0.85,
        0.7
      ],
      "velocityProfile": [
        0.9,
        0.55,
        0.8,
        0.6,
        0.9,
        0.55,
        0.8,
        0.65
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "jazz-brushes-swing-v-01",
          "parentPatternId": "jazz-brushes-swing",
          "name": "Brushes Swing — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            3,
            5,
            8,
            9
          ],
          "accentProfile": [
            0.8999999999999999,
            0.5499999999999999,
            0.7999999999999999,
            0.6,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.8200000000000001,
            0.47000000000000003,
            0.7200000000000001,
            0.52,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3
          ]
        },
        {
          "id": "jazz-brushes-swing-v-02",
          "parentPatternId": "jazz-brushes-swing",
          "name": "Brushes Swing — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            3,
            5,
            6,
            8,
            9,
            11
          ],
          "accentProfile": [
            0.9099999999999999,
            0.6799999999999999,
            0.8099999999999999,
            0.73,
            0.9099999999999999,
            0.6799999999999999,
            0.8099999999999999,
            0.7799999999999999
          ],
          "velocityProfile": [
            0.96,
            0.53,
            0.78,
            0.6599999999999999,
            0.88,
            0.53,
            0.8600000000000001,
            0.63
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        }
      ],

      "difficulty": 3,
      "weight": 1,
      "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "jazz"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,

      "articulations": ["accented"]
    },
    {
      "id": "jazz-latin-montuno-comp",
      "worldId": "jazz",
      "styleIds": ["jazz-modal-contemporary"],
      "name": "Latin Jazz Montuno Comping",
      "family": "Piano Comping",
      "category": "ostinato",
      "description": "Syncopated two-handed montuno piano ostinato bringing",
      "tags": [
        "jazz",
        "latin-jazz",
        "montuno",
        "piano"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "piano",
        "keys"
      ],

      "approaches": ["comping"],
      "instruments": [
        "piano",
        "keys"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        4,
        7,
        10,
        12,
        15
      ],
      "accentProfile": [
        0.85,
        1,
        0.7,
        0.95,
        0.8,
        0.9
      ],
      "velocityProfile": [
        0.8,
        0.95,
        0.65,
        0.9,
        0.75,
        0.85
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "solo"
      ],
      "variants": [
        {
          "id": "jazz-latin-montuno-comp-v-01",
          "parentPatternId": "jazz-latin-montuno-comp",
          "name": "Latin Jazz Montuno Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            2,
            7,
            10,
            15
          ],
          "accentProfile": [
            0.7999999999999999,
            0.95,
            0.6499999999999999,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.7200000000000001,
            0.87,
            0.5700000000000001,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "jazz-latin-montuno-comp-v-02",
          "parentPatternId": "jazz-latin-montuno-comp",
          "name": "Latin Jazz Montuno Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            2,
            4,
            7,
            10,
            12,
            15
          ],
          "accentProfile": [
            0.8099999999999999,
            1,
            0.6599999999999999,
            1,
            0.76,
            0.98
          ],
          "velocityProfile": [
            0.8600000000000001,
            0.9299999999999999,
            0.63,
            0.96,
            0.73,
            0.83
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        }
      ],

      "difficulty": 2,
      "weight": 0.7,
      "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "jazz"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,


      "articulations": ["accented"]
    },
    {
      "id": "jazz-piano-red-garland",
      "worldId": "jazz",
      "styleIds": ["jazz-swing-bebop"],
      "name": "Block Chords",
      "family": "Piano",
      "category": "break",
      "transitionType": "fill",
      "description": "Locked-hands syncopated block chords.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "piano",
        "keys"
      ],

      "approaches": ["comping"],
      "instruments": [
        "piano",
        "keys"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        0,
        3,
        5
      ],
      "accentProfile": [
        0.95,
        0.8,
        1
      ],
      "velocityProfile": [
        0.9,
        0.75,
        0.95
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "jazz-piano-red-garland-v-01",
          "parentPatternId": "jazz-piano-red-garland",
          "name": "Block Chords — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            5
          ],
          "accentProfile": [
            0.8999999999999999,
            0.75
          ],
          "velocityProfile": [
            0.8200000000000001,
            0.67
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        {
          "id": "jazz-piano-red-garland-v-02",
          "parentPatternId": "jazz-piano-red-garland",
          "name": "Block Chords — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            5
          ],
          "accentProfile": [
            0.9099999999999999,
            0.88,
            0.96
          ],
          "velocityProfile": [
            0.96,
            0.73,
            0.9299999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2
          ]
        }
      ],

      "difficulty": 1,
      "weight": 1,
      "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "jazz"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,

      "articulations": ["accented"]
    },
    {
      "id": "jazz-hihat-2-4",
      "worldId": "jazz",
      "styleIds": ["jazz-swing-bebop"],
      "name": "Hi-Hat 2 & 4",
      "family": "Drums",
      "category": "cadence",
      "transitionType": "fill",
      "description": "Crisp foot hi-hat chick locking beats",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums"
      ],

      "approaches": ["groove"],
      "instruments": [
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 4,
      "onsetGrid": [
        1,
        3
      ],
      "accentProfile": [
        0.9,
        1
      ],
      "velocityProfile": [
        0.85,
        0.95
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "ending",
        "turnaround"
      ],
      "variants": [
        {
          "id": "jazz-hihat-2-4-v-01-safe",
          "parentPatternId": "jazz-hihat-2-4",
          "name": "Hi-Hat 2 & 4 — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse",
          "onsetGrid": [
            1,
            3
          ],
          "accentProfile": [
            0.85,
            1
          ],
          "velocityProfile": [
            0.88,
            0.9099999999999999
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        },
        {
          "id": "jazz-hihat-2-4-v-02-safe",
          "parentPatternId": "jazz-hihat-2-4",
          "name": "Hi-Hat 2 & 4 — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse",
          "onsetGrid": [
            1,
            3
          ],
          "accentProfile": [
            0.85,
            1
          ],
          "velocityProfile": [
            0.88,
            0.9099999999999999
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        }
      ],

      "difficulty": 1,
      "weight": 1,
      "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "jazz"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,

      "articulations": ["accented"]
    },
    {
      "id": "jazz-ride-broken",
      "worldId": "jazz",
      "styleIds": ["jazz-modal-contemporary"],
      "name": "Broken Ride",
      "family": "Drums",
      "category": "groove",
      "description": "Interactive, conversational broken-time ride cymbal.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums"
      ],

      "approaches": ["groove"],
      "instruments": [
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        3,
        6,
        8,
        9
      ],
      "accentProfile": [
        1,
        0.7,
        0.95,
        0.6,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.9,
        0.55,
        0.8
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "jazz-ride-broken-v-01",
          "parentPatternId": "jazz-ride-broken",
          "name": "Broken Ride — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            6,
            8
          ],
          "accentProfile": [
            0.95,
            0.6499999999999999,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.5700000000000001,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "jazz-ride-broken-v-02",
          "parentPatternId": "jazz-ride-broken",
          "name": "Broken Ride — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            6,
            8,
            9
          ],
          "accentProfile": [
            0.96,
            0.7799999999999999,
            0.9099999999999999,
            0.6799999999999999,
            0.8099999999999999
          ],
          "velocityProfile": [
            1,
            0.63,
            0.88,
            0.6100000000000001,
            0.78
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2
          ]
        }
      ],

      "difficulty": 2,
      "weight": 1,
      "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "jazz"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,


      "articulations": ["accented"]
    },
    {
      "id": "jazz-bass-pedal",
      "worldId": "jazz",
      "styleIds": ["jazz-modal-contemporary"],
      "name": "Pedal Point",
      "family": "Bass",
      "category": "groove",
      "description": "Repeating root pedal anchor building modal",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "bass"
      ],

      "approaches": ["walking"],
      "instruments": [
        "bass"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        0,
        2,
        4,
        6
      ],
      "accentProfile": [
        0.95,
        0.78,
        0.88,
        0.72
      ],
      "velocityProfile": [
        0.9,
        0.7,
        0.82,
        0.68
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "jazz-bass-pedal-v-01",
          "parentPatternId": "jazz-bass-pedal",
          "name": "Pedal Point — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4,
            6
          ],
          "accentProfile": [
            0.8999999999999999,
            0.73,
            0.83
          ],
          "velocityProfile": [
            0.8200000000000001,
            0.62,
            0.74
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "jazz-bass-pedal-v-02",
          "parentPatternId": "jazz-bass-pedal",
          "name": "Pedal Point — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            4,
            6
          ],
          "accentProfile": [
            0.9099999999999999,
            0.86,
            0.84,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.96,
            0.6799999999999999,
            0.7999999999999999,
            0.74
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5
          ]
        }
      ],

      "difficulty": 1,
      "weight": 1,
      "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "jazz"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,

      "articulations": ["accented"]
    },
    {
      "id": "jazz-comping-sync",
      "worldId": "jazz",
      "styleIds": ["jazz-modal-contemporary"],
      "name": "Syncopated Comping",
      "family": "Piano",
      "category": "groove",
      "description": "Offbeat pushes and harmonic anticipations.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "piano",
        "keys"
      ],

      "approaches": ["comping"],
      "instruments": [
        "piano",
        "keys"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        1,
        4,
        7
      ],
      "accentProfile": [
        0.85,
        1,
        0.9
      ],
      "velocityProfile": [
        0.8,
        0.95,
        0.85
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "jazz-comping-sync-v-01",
          "parentPatternId": "jazz-comping-sync",
          "name": "Syncopated Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            1,
            7
          ],
          "accentProfile": [
            0.7999999999999999,
            0.95
          ],
          "velocityProfile": [
            0.7200000000000001,
            0.87
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        {
          "id": "jazz-comping-sync-v-02",
          "parentPatternId": "jazz-comping-sync",
          "name": "Syncopated Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            1,
            4,
            7
          ],
          "accentProfile": [
            0.8099999999999999,
            1,
            0.86
          ],
          "velocityProfile": [
            0.8600000000000001,
            0.9299999999999999,
            0.83
          ],
          "microtimingOffset": [
            2,
            -5,
            2
          ]
        }
      ],

      "difficulty": 1,
      "weight": 1,
      "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "jazz"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,

      "articulations": ["accented"]
    },
    {
      "id": "jazz-snare-comp",
      "worldId": "jazz",
      "styleIds": ["jazz-swing-bebop"],
      "name": "Snare Comping",
      "family": "Drums",
      "category": "groove",
      "description": "Dropping bombs and snare commentary behind",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums"
      ],

      "approaches": ["groove"],
      "instruments": [
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        2,
        7,
        10
      ],
      "accentProfile": [
        0.75,
        1,
        0.85
      ],
      "velocityProfile": [
        0.7,
        0.95,
        0.8
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "jazz-snare-comp-v-01",
          "parentPatternId": "jazz-snare-comp",
          "name": "Snare Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            2,
            10
          ],
          "accentProfile": [
            0.7,
            0.95
          ],
          "velocityProfile": [
            0.62,
            0.87
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        {
          "id": "jazz-snare-comp-v-02",
          "parentPatternId": "jazz-snare-comp",
          "name": "Snare Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            2,
            7,
            10
          ],
          "accentProfile": [
            0.71,
            1,
            0.8099999999999999
          ],
          "velocityProfile": [
            0.76,
            0.9299999999999999,
            0.78
          ],
          "microtimingOffset": [
            2,
            -5,
            2
          ]
        }
      ],

      "difficulty": 1,
      "weight": 1,
      "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "jazz"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,

      "articulations": ["accented"]
    },
    {
      "id": "jazz-waltz-ride",
      "worldId": "jazz",
      "styleIds": ["jazz-modal-contemporary"],
      "name": "Jazz Waltz Ride",
      "family": "Drums",
      "category": "groove",
      "description": "Swinging triplet ride pattern in 3/4",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums"
      ],

      "approaches": ["groove"],
      "instruments": [
        "drums"
      ],
      "meter": "3/4",
      "cycleLength": 1,
      "subdivisions": 9,
      "onsetGrid": [
        0,
        2,
        3,
        5,
        6,
        8
      ],
      "accentProfile": [
        1,
        0.65,
        0.85,
        0.6,
        0.9,
        0.7
      ],
      "velocityProfile": [
        0.95,
        0.6,
        0.8,
        0.55,
        0.85,
        0.65
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "jazz-waltz-ride-v-01",
          "parentPatternId": "jazz-waltz-ride",
          "name": "Jazz Waltz Ride — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            3,
            5,
            8
          ],
          "accentProfile": [
            0.95,
            0.6,
            0.7999999999999999,
            0.5499999999999999
          ],
          "velocityProfile": [
            0.87,
            0.52,
            0.7200000000000001,
            0.47000000000000003
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "jazz-waltz-ride-v-02",
          "parentPatternId": "jazz-waltz-ride",
          "name": "Jazz Waltz Ride — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            3,
            5,
            6,
            8
          ],
          "accentProfile": [
            0.96,
            0.73,
            0.8099999999999999,
            0.6799999999999999,
            0.86,
            0.7799999999999999
          ],
          "velocityProfile": [
            1,
            0.58,
            0.78,
            0.6100000000000001,
            0.83,
            0.63
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        }
      ],

      "difficulty": 2,
      "weight": 1,
      "provenance": "Jazz catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "jazz"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,

      "articulations": ["accented"]
    },
    {
      "id": "jazz-phrase-13",
      "worldId": "jazz",
      "styleIds": ["jazz-swing-bebop"],
      "name": "Solo Phrase",
      "family": "Solo",
      "category": "phrasePattern",
      "description": "A phrase-level rhythmic template that leaves",
      "tags": [
        "jazz",
        "solo",
        "phrase",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "tenor-sax"
      ],

      "approaches": ["phrase"],
      "instruments": [
        "tenor-sax"
      ],
      "compatibleRoles": [
        "tenor-sax"
      ],
      "compatibleInstruments": [
        "tenor-sax"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        1,
        4,
        6,
        9,
        11
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68,
        1
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95
      ],
      "syncopationRating": 0.8,
      "anticipationOffset": 0,
      "swingPercentage": 66,
      "articulations": ["breath"],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],


      "variants": [
        {
          "id": "jazz-phrase-13-v-01",
          "parentPatternId": "jazz-phrase-13",
          "name": "Solo Phrase — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            1,
            6,
            9
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "jazz-phrase-13-v-02",
          "parentPatternId": "jazz-phrase-13",
          "name": "Solo Phrase — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            1,
            4,
            6,
            9,
            11
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76,
            0.96
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Jazz world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "jazz",
        "solo"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "jazz-call-14",
      "worldId": "jazz",
      "styleIds": ["jazz-swing-bebop"],
      "name": "Horn Head & Solo Phrase",
      "family": "Horn Head",
      "category": "interactionPattern",
      "description": "A horn-head/solo contour slot that gives",
      "tags": [
        "jazz",
        "shout",
        "call",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "lead"
      ],

      "approaches": ["phrase"],
      "instruments": [
        "sax"
      ],
      "compatibleRoles": [
        "lead"
      ],
      "compatibleInstruments": [
        "sax"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        5,
        7,
        10,
        12
      ],
      "accentProfile": [
        0.95,
        0.62,
        0.95,
        0.62,
        0.95
      ],
      "velocityProfile": [
        0.95,
        0.57,
        0.95,
        0.62,
        0.8999999999999999
      ],
      "syncopationRating": 0.8,
      "anticipationOffset": 0,
      "swingPercentage": 66,
      "articulations": ["breath"],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "bridge"
      ],


      "variants": [
        {
          "id": "jazz-call-14-v-01",
          "parentPatternId": "jazz-call-14",
          "name": "Shout Response — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            2,
            7,
            10
          ],
          "accentProfile": [
            0.8999999999999999,
            0.57,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.48999999999999994,
            0.87
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "jazz-call-14-v-02",
          "parentPatternId": "jazz-call-14",
          "name": "Shout Response — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            2,
            5,
            7,
            10,
            12
          ],
          "accentProfile": [
            0.9099999999999999,
            0.7,
            0.9099999999999999,
            0.7,
            0.9099999999999999
          ],
          "velocityProfile": [
            1,
            0.5499999999999999,
            0.9299999999999999,
            0.6799999999999999,
            0.8799999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2
          ]
        },
        {
          "id": "jazz-call-14-v-03",
          "parentPatternId": "jazz-call-14",
          "name": "Shout Response — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            2,
            5,
            7,
            10,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.9299999999999999,
            0.6,
            0.9299999999999999,
            0.6,
            0.9299999999999999,
            1,
            1
          ],
          "velocityProfile": [
            0.95,
            0.57,
            0.95,
            0.62,
            0.8999999999999999,
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Jazz world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "jazz",
        "shout"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "jazz-anchor-15",
      "worldId": "jazz",
      "styleIds": ["jazz-swing-bebop"],
      "name": "Head Anchor",
      "family": "Head",
      "category": "ostinato",
      "description": "A repeating anchor that locks the",
      "tags": [
        "jazz",
        "head",
        "anchor",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "bass"
      ],

      "approaches": ["walking"],
      "instruments": [
        "bass"
      ],
      "compatibleRoles": [
        "bass"
      ],
      "compatibleInstruments": [
        "bass"
      ],
      "canCrossRole": true,
      "meter": "3/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        3,
        6,
        8,
        11,
        13
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68,
        1
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95
      ],
      "syncopationRating": 0.8,
      "anticipationOffset": 0,
      "swingPercentage": 66,
      "articulations": ["accented"],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],


      "variants": [
        {
          "id": "jazz-anchor-15-v-01",
          "parentPatternId": "jazz-anchor-15",
          "name": "Head Anchor — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            3,
            8,
            11
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "jazz-anchor-15-v-02",
          "parentPatternId": "jazz-anchor-15",
          "name": "Head Anchor — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            3,
            6,
            8,
            11,
            13
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76,
            0.96
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Jazz world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "jazz",
        "head"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "jazz-comp-16",
      "worldId": "jazz",
      "styleIds": ["jazz-swing-bebop"],
      "name": "Comping Comping",
      "family": "Comping",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports",
      "tags": [
        "jazz",
        "comping",
        "comp",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmony"
      ],

      "approaches": ["comping"],
      "instruments": [
        "piano"
      ],
      "compatibleRoles": [
        "harmony"
      ],
      "compatibleInstruments": [
        "piano"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        5,
        8,
        10,
        13,
        15
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68,
        1
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95
      ],
      "syncopationRating": 0.8,
      "anticipationOffset": 0,
      "swingPercentage": 66,
      "articulations": ["accented"],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],


      "variants": [
        {
          "id": "jazz-comp-16-v-01",
          "parentPatternId": "jazz-comp-16",
          "name": "Comping Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            5,
            10,
            13
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "jazz-comp-16-v-02",
          "parentPatternId": "jazz-comp-16",
          "name": "Comping Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            5,
            8,
            10,
            13,
            15
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76,
            0.96
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Jazz world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "jazz",
        "comping"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "jazz-intro-17",
      "worldId": "jazz",
      "styleIds": ["jazz-swing-bebop"],
      "name": "Shout Horn Answer",
      "family": "Turnaround",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish",
      "tags": [
        "jazz",
        "turnaround",
        "intro",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmony",
        "texture",
        "lead"
      ],

      "approaches": ["comping", "phrase"],
      "instruments": [
        "trumpet"
      ],
      "compatibleRoles": [
        "harmony",
        "texture",
        "lead"
      ],
      "compatibleInstruments": [
        "trumpet"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        4,
        5,
        7,
        8
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68,
        1,
        0.74
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74
      ],
      "syncopationRating": 0.5,
      "anticipationOffset": 0,
      "swingPercentage": 66,
      "articulations": ["accented"],
      "supportedEnergy": [1, 2, 3, 4, 5],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "intro"
      ],


      "variants": [
        {
          "id": "jazz-intro-17-v-01",
          "parentPatternId": "jazz-intro-17",
          "name": "Turnaround Intro — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4,
            5,
            8
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85,
            0.63
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001,
            0.6000000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "jazz-intro-17-v-02",
          "parentPatternId": "jazz-intro-17",
          "name": "Turnaround Intro — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            4,
            5,
            7,
            8
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76,
            0.96,
            0.82
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5
          ]
        },
        {
          "id": "jazz-intro-17-v-03",
          "parentPatternId": "jazz-intro-17",
          "name": "Turnaround Intro — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            0,
            2,
            4,
            5,
            7,
            8,
            14,
            15
          ],
          "accentProfile": [
            0.98,
            0.72,
            0.88,
            0.66,
            0.98,
            0.72,
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
            0.74,
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Jazz world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "jazz",
        "turnaround"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    }
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Spang-a-lang ride cymbal with 4-to-the-bar walking bass and ii-V-I progressions",
  "grooveMechanics": {
    "swingPercentage": 66,
    "anticipationOffsetSteps": 1,
    "microtimingFeel": "laid-back"
  },
  "crossLinks": [
    "Jazz ↔ Blues",
    "Jazz ↔ Swing",
    "Jazz ↔ Funk",
    "Jazz ↔ Bossa Nova"
  ]
};

export const JazzGenre = JAZZ_WORLD;
