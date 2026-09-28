import type { GenreWorld } from '../../types';

export const AFROBEATS_WORLD: GenreWorld = {
  "id": "afrobeats",
  "name": "Afrobeats",
  "family": "West African Pop / Global Groove",
  "color": "#d48834",
  "level": "world",
  "description": "Vibrant West African dance music continuum:",
  "styleDefinitions": [
    {
      "id": "afrobeats-afro-pop",
      "worldId": "afrobeats",
      "name": "Afro-Pop",
      "origin": "Nigeria / Ghana / Pan-African",
      "era": "2010s–Present",
      "description": "Upbeat • 4/4 Syncopated • Bright\nPolished",
      "characteristicInstruments": [
        "drums",
        "bass",
        "acoustic-guitar",
        "synth",
        "hand-percussion"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        100,
        114
      ],
      "keySubstyles": [
        "Naija Pop",
        "Afro-Fusion",
        "Global Afropop"
      ],
      "coreConcepts": [
        "syncopated kick/clap pocket",
        "clean guitar chops",
        "infectious melody hooks",
        "shaker perpetual motion"
      ],
      "rhythmicGrammar": [
        "kick on 1, 1-and, 3-and with sharp snare clap on beat 3 or 4-and"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Syncopated Afrobeats pocket kick [0, 6, 10] with offbeat snare clap",
      "grooveMechanics": {
        "swingPercentage": 54,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Fmaj7",
          "G",
          "Em7",
          "Am7"
        ],
        "verse": [
          "Fmaj7",
          "G",
          "Em7",
          "Am7"
        ],
        "chorus": [
          "Dm7",
          "Em7",
          "Fmaj7",
          "G"
        ],
        "coda": [
          "Am7",
          "G",
          "Fmaj7",
          "Em7"
        ]
      }
    },
    {
      "id": "afrobeats-afrobeat",
      "worldId": "afrobeats",
      "name": "Afrobeat",
      "origin": "Lagos, Nigeria",
      "era": "1970s–1980s",
      "description": "Polyrhythmic • Big Band • Foundation\nFela's",
      "characteristicInstruments": [
        "drums",
        "bass",
        "electric-guitar",
        "brass",
        "hand-percussion"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        112,
        128
      ],
      "keySubstyles": [
        "Classic Afrobeat",
        "Afrobeat Big Band"
      ],
      "coreConcepts": [
        "Tony Allen 4-limb polyrhythm",
        "dual interlocking rhythm guitars",
        "relentless minor vamp",
        "punchy horn stabs"
      ],
      "rhythmicGrammar": [
        "hi-hat 16th pulse, syncopated snare cross-stick, bass pedal ostinato"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Two interlocking guitars weaving around steady minor modal bass vamp",
      "grooveMechanics": {
        "swingPercentage": 52,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Dm7",
          "Dm7",
          "Dm7",
          "Dm7"
        ],
        "verse": [
          "Dm7",
          "G7",
          "Dm7",
          "G7"
        ],
        "solo": [
          "Dm7",
          "G7",
          "Dm7",
          "G7"
        ],
        "coda": [
          "Dm7",
          "Dm7",
          "Dm7",
          "Dm7"
        ]
      }
    },
    {
      "id": "afrobeats-amapiano",
      "worldId": "afrobeats",
      "name": "Amapiano",
      "origin": "South Africa",
      "era": "2018–Present",
      "description": "Driving • 4/4 Log Drum •",
      "characteristicInstruments": [
        "drums",
        "bass",
        "piano",
        "synth",
        "shaker"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        110,
        118
      ],
      "keySubstyles": [
        "Amapiano",
        "Private School Amapiano"
      ],
      "coreConcepts": [
        "pitched log drum rolls",
        "jazzy 9th/11th Rhodes chords",
        "ghost kicks",
        "high metallic shaker"
      ],
      "rhythmicGrammar": [
        "log drum sliding and pitching between octave drops on upbeat 16ths"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Pitched log drum roll dropping on unexpected syncopated subdivisions",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": -1,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Abmaj7",
          "Gm7",
          "Fm7",
          "Ebmaj7"
        ],
        "verse": [
          "Abmaj7",
          "Gm7",
          "Fm7",
          "Ebmaj7"
        ],
        "chorus": [
          "Dbmaj7",
          "Eb",
          "Fm7",
          "Gm7"
        ],
        "coda": [
          "Abmaj7",
          "Gm7",
          "Fm7",
          "Ebmaj7"
        ]
      }
    },
    {
      "id": "afrobeats-gqom",
      "worldId": "afrobeats",
      "name": "Gqom",
      "origin": "Durban, South Africa",
      "era": "2012–Present",
      "description": "Raw • Heavy Percussion • Dark\nDurban",
      "characteristicInstruments": [
        "drums",
        "sub-bass",
        "synth",
        "hand-percussion",
        "sampler"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        122,
        128
      ],
      "keySubstyles": [
        "Durban Gqom",
        "Minimal Gqom"
      ],
      "coreConcepts": [
        "heavy broken kick syncopation",
        "dark sub-bass hits",
        "industrial percussion",
        "repetitive vocal chants"
      ],
      "rhythmicGrammar": [
        "syncopated off-grid kicks with metallic claps and hollow toms"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Heavy broken kick syncopation with dark distorted sub-bass hits",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Em",
          "Em",
          "Em",
          "Em"
        ],
        "verse": [
          "Em",
          "F",
          "Em",
          "F"
        ],
        "drop": [
          "Em",
          "Em",
          "Em",
          "Em"
        ],
        "coda": [
          "Em",
          "Em",
          "Em",
          "Em"
        ]
      }
    },
    {
      "id": "afrobeats-afro-house",
      "worldId": "afrobeats",
      "name": "Afro-House",
      "origin": "South Africa / Angola",
      "era": "2000s–Present",
      "description": "Steady • 4/4 • Hypnotic\nDeep electronic",
      "characteristicInstruments": [
        "drums",
        "bass",
        "synth",
        "hand-percussion",
        "piano"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        120,
        126
      ],
      "keySubstyles": [
        "Deep Afro House",
        "Ancestral Soul"
      ],
      "coreConcepts": [
        "four-on-the-floor kick",
        "deep tribal conga syncopations",
        "lush ambient chords",
        "hypnotic vocal loops"
      ],
      "rhythmicGrammar": [
        "steady four-on-floor pulse with polyrhythmic conga and shaker weave"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Four-on-the-floor kick with deep tribal conga syncopations and lush chords",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Am7",
          "Em7",
          "Fmaj7",
          "G"
        ],
        "verse": [
          "Am7",
          "Em7",
          "Fmaj7",
          "G"
        ],
        "chorus": [
          "Fmaj7",
          "G",
          "Am7",
          "Em7"
        ],
        "coda": [
          "Am7",
          "Em7",
          "Fmaj7",
          "G"
        ]
      }
    },
    {
      "id": "afrobeats-highlife",
      "worldId": "afrobeats",
      "name": "Highlife",
      "origin": "Ghana / Nigeria",
      "era": "1950s–Present",
      "description": "Bouncy • Bright Guitars • Horns\nFoundational",
      "characteristicInstruments": [
        "acoustic-guitar",
        "bass",
        "drums",
        "brass",
        "hand-percussion"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        105,
        120
      ],
      "keySubstyles": [
        "Guitar-Band Highlife",
        "Classic Dance-Band Highlife"
      ],
      "coreConcepts": [
        "bright clean guitar thirds",
        "syncopated bell pattern",
        "cheerful brass arrangements",
        "bouncy bass"
      ],
      "rhythmicGrammar": [
        "clave-derived bell pattern with syncopated bass and snare cross-stick"
      ],
      "danceTags": [
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Clean dual-guitar fingerpicked thirds over bouncy clave-derived bell pattern",
      "grooveMechanics": {
        "swingPercentage": 54,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "C",
          "F",
          "G",
          "C"
        ],
        "verse": [
          "C",
          "Dm7",
          "G7",
          "C",
          "F",
          "G7",
          "C",
          "C"
        ],
        "chorus": [
          "F",
          "G",
          "Em",
          "Am",
          "Dm7",
          "G7",
          "C",
          "C"
        ],
        "coda": [
          "C",
          "F",
          "G7",
          "C"
        ]
      }
    },
    {
      "id": "afrobeats-palm-wine",
      "worldId": "afrobeats",
      "name": "Palm-Wine",
      "origin": "Sierra Leone / Ghana / Nigeria",
      "era": "1920s–1960s",
      "description": "Acoustic • Laid Back • Folk\nRaw",
      "characteristicInstruments": [
        "acoustic-guitar",
        "hand-percussion",
        "bass",
        "synth",
        "drums"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        84,
        102
      ],
      "keySubstyles": [
        "Acoustic Palm-Wine",
        "Maringa"
      ],
      "coreConcepts": [
        "two-finger plucked acoustic guitar",
        "knife-on-bottle percussion",
        "intimate storytelling vocals",
        "relaxed calypso bounce"
      ],
      "rhythmicGrammar": [
        "gentle rolling syncopated acoustic picking with soft percussion accents"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Gentle two-finger plucked acoustic guitar arpeggio with knife-on-bottle pulse",
      "grooveMechanics": {
        "swingPercentage": 56,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "C",
          "G7",
          "C",
          "G7"
        ],
        "verse": [
          "C",
          "F",
          "C",
          "G7",
          "C",
          "F",
          "G7",
          "C"
        ],
        "chorus": [
          "F",
          "C",
          "G7",
          "C"
        ],
        "coda": [
          "C",
          "G7",
          "C",
          "C"
        ]
      }
    },
    {
      "id": "afrobeats-alte",
      "worldId": "afrobeats",
      "name": "Alté",
      "origin": "Lagos, Nigeria / London",
      "era": "2016–Present",
      "description": "Experimental • Chill • Eclectic\nLo-fi West",
      "characteristicInstruments": [
        "synth",
        "bass",
        "drums",
        "acoustic-guitar",
        "synth"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        88,
        104
      ],
      "keySubstyles": [
        "Alté R&B",
        "Lo-Fi Afro-Fusion"
      ],
      "coreConcepts": [
        "lo-fi filtered keys",
        "laid-back drum pockets",
        "atmospheric autotuned vocals",
        "indie R&B textures"
      ],
      "rhythmicGrammar": [
        "relaxed half-time kick/snare with mellow offbeat hi-hat ticks"
      ],
      "danceTags": [
        "listening",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Lo-fi filtered Rhodes chords over relaxed half-time kick/snare and dreamy vocals",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Dbmaj7",
          "Bbm7",
          "Ebm7",
          "Ab7"
        ],
        "verse": [
          "Dbmaj7",
          "Bbm7",
          "Ebm7",
          "Ab7"
        ],
        "chorus": [
          "Gbmaj7",
          "Fm7",
          "Ebm7",
          "Ab7"
        ],
        "coda": [
          "Dbmaj7",
          "Bbm7",
          "Gbmaj7",
          "Ab7"
        ]
      }
    }
  ],
  "substyles": [
    "Afro-Pop",
    "Afrobeat",
    "Amapiano",
    "Gqom",
    "Afro-House",
    "Highlife",
    "Palm-Wine",
    "Alté"
  ],
  "artists": [
    "Wizkid",
    "Davido",
    "Fela Kuti",
    "Tony Allen",
    "Asake",
    "Focalistic",
    "DJ Lag",
    "Griffit Vigo",
    "Black Coffee",
    "Sun-El Musician",
    "The Cavemen",
    "E.T. Mensah",
    "Koo Nimo",
    "S.E. Rogie",
    "Santi",
    "Lady Donli"
  ],
  "concepts": [
    "syncopated kick/clap pocket",
    "log-drum pitched bass rolls",
    "clean highlife guitar picking",
    "shekere continuous groove",
    "horn section punch",
    "vocal hook repetition"
  ],
  "roles": {
    "bass": [
      "pitched log-drum bass rolls",
      "Fela minor vamp bass",
      "sub 808 pulse"
    ],
    "drums": [
      "syncopated Afropop kick/clap pocket",
      "Tony Allen polyrhythmic snare",
      "Amapiano ghost kick"
    ],
    "guitar": [
      "highlife fingerstyle arpeggios",
      "rhythm muted chops"
    ],
    "percussion": [
      "shekere shaker rattle",
      "talking drum accents",
      "conga syncopations"
    ],
    "lead": [
      "horn section stabs",
      "vocal hook lines"
    ],
    "harmony": [
      "airy Rhodes 9th chords",
      "warm pad washes"
    ]
  },
  "patterns": [
    {
      "id": "afro-log-drum-bass",
      "worldId": "afrobeats",
      "styleIds": ["afrobeats-afro-pop"],
      "name": "Pitched Log Drum Bass Groove",
      "family": "Log Drum",
      "category": "groove",
      "description": "Resonant FM synth log drum bassline",
      "tags": [
        "afrobeats",
        "bass",
        "log-drum",
        "amapiano",
        "sub"
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
        "synth"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        6,
        8,
        11,
        14
      ],
      "accentProfile": [
        1,
        0.85,
        0.95,
        0.75,
        0.9,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.8,
        0.9,
        0.7,
        0.85,
        0.8
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "solo"
      ],
      "variants": [
        {
          "id": "afro-log-drum-bass-v-01",
          "parentPatternId": "afro-log-drum-bass",
          "name": "Pitched Log Drum Bass Groove — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            6,
            8,
            14
          ],
          "accentProfile": [
            0.95,
            0.7999999999999999,
            0.8999999999999999,
            0.7
          ],
          "velocityProfile": [
            0.87,
            0.7200000000000001,
            0.8200000000000001,
            0.62
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "afro-log-drum-bass-v-02",
          "parentPatternId": "afro-log-drum-bass",
          "name": "Pitched Log Drum Bass Groove — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            6,
            8,
            11,
            14
          ],
          "accentProfile": [
            0.96,
            0.9299999999999999,
            0.9099999999999999,
            0.83,
            0.86,
            0.9299999999999999
          ],
          "velocityProfile": [
            1,
            0.78,
            0.88,
            0.76,
            0.83,
            0.78
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
      "provenance": "Afrobeats catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "afrobeats"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,


      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "afro-syncopated-kit",
      "worldId": "afrobeats",
      "styleIds": ["afrobeats-afro-pop"],
      "name": "Modern Afropop Kick & Rim Pocket",
      "family": "Afrobeats Drums",
      "category": "groove",
      "description": "Signature Afrobeats syncopated kick placement with",
      "tags": [
        "afrobeats",
        "drums",
        "kick",
        "rimshot"
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
        "pulse"
      ],

      "approaches": ["groove"],
      "instruments": [
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        6,
        10,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.9,
        0.95,
        0.75,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.85,
        0.9,
        0.7,
        0.8
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "intro",
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "afro-syncopated-kit-v-01",
          "parentPatternId": "afro-syncopated-kit",
          "name": "Modern Afropop Kick & Rim Pocket — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            10,
            12
          ],
          "accentProfile": [
            0.95,
            0.85,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.77,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "afro-syncopated-kit-v-02",
          "parentPatternId": "afro-syncopated-kit",
          "name": "Modern Afropop Kick & Rim Pocket — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            6,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.96,
            0.98,
            0.9099999999999999,
            0.83,
            0.8099999999999999
          ],
          "velocityProfile": [
            1,
            0.83,
            0.88,
            0.76,
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
      "provenance": "Afrobeats catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "afrobeats"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,


      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "afro-highlife-guitar",
      "worldId": "afrobeats",
      "styleIds": ["afrobeats-afro-pop"],
      "name": "Highlife Fingerstyle Clean Guitar",
      "family": "Highlife Guitar",
      "category": "ostinato",
      "description": "Bright clean electric guitar playing rhythmic",
      "tags": [
        "afrobeats",
        "guitar",
        "highlife",
        "clean"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmony",
        "guitar"
      ],

      "approaches": ["comping", "chop"],
      "instruments": [
        "guitar",
        "electric-guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        4,
        7,
        8,
        11,
        13,
        15
      ],
      "accentProfile": [
        0.85,
        0.95,
        0.75,
        0.9,
        0.8,
        0.95,
        0.7
      ],
      "velocityProfile": [
        0.8,
        0.9,
        0.7,
        0.85,
        0.75,
        0.9,
        0.65
      ],
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
          "id": "afro-highlife-guitar-v-01",
          "parentPatternId": "afro-highlife-guitar",
          "name": "Highlife Fingerstyle Clean Guitar — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            2,
            7,
            8,
            13,
            15
          ],
          "accentProfile": [
            0.7999999999999999,
            0.8999999999999999,
            0.7,
            0.85,
            0.75
          ],
          "velocityProfile": [
            0.7200000000000001,
            0.8200000000000001,
            0.62,
            0.77,
            0.67
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
          "id": "afro-highlife-guitar-v-02",
          "parentPatternId": "afro-highlife-guitar",
          "name": "Highlife Fingerstyle Clean Guitar — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            2,
            4,
            7,
            8,
            11,
            13,
            15
          ],
          "accentProfile": [
            0.8099999999999999,
            1,
            0.71,
            0.98,
            0.76,
            1,
            0.6599999999999999
          ],
          "velocityProfile": [
            0.8600000000000001,
            0.88,
            0.6799999999999999,
            0.9099999999999999,
            0.73,
            0.88,
            0.71
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2
          ]
        }
      ],

      "difficulty": 2,
      "weight": 0.7,
      "provenance": "Afrobeats catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "afrobeats"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,


      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "afro-shekere-shaker",
      "worldId": "afrobeats",
      "styleIds": ["afrobeats-afrobeat"],
      "name": "Shekere & Gourd Shaker Engine",
      "family": "Afro Percussion",
      "category": "groove",
      "description": "Continuous 16th-note gourd shaker rattle with",
      "tags": [
        "afrobeat",
        "percussion",
        "shekere",
        "shaker"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "percussion",
        "hand-percussion"
      ],

      "approaches": ["groove"],
      "instruments": [
        "percussion",
        "guiro"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ],
      "accentProfile": [
        1,
        0.5,
        0.75,
        0.5,
        0.85,
        0.5,
        0.75,
        0.5,
        0.95,
        0.5,
        0.75,
        0.5,
        0.85,
        0.5,
        0.75,
        0.55
      ],
      "velocityProfile": [
        0.95,
        0.45,
        0.7,
        0.45,
        0.8,
        0.45,
        0.7,
        0.45,
        0.9,
        0.45,
        0.7,
        0.45,
        0.8,
        0.45,
        0.7,
        0.5
      ],
      "supportedEnergy": [4, 5],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "intro",
        "verse",
        "chorus",
        "solo"
      ],
      "variants": [
        {
          "id": "afro-shekere-shaker-v-01",
          "parentPatternId": "afro-shekere-shaker",
          "name": "Shekere & Gourd Shaker Engine — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            2,
            3,
            5,
            6,
            8,
            9,
            11,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.95,
            0.45,
            0.7,
            0.45,
            0.7999999999999999,
            0.45,
            0.7,
            0.45,
            0.8999999999999999,
            0.45,
            0.7
          ],
          "velocityProfile": [
            0.87,
            0.4,
            0.62,
            0.4,
            0.7200000000000001,
            0.4,
            0.62,
            0.4,
            0.8200000000000001,
            0.4,
            0.62
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3,
            6,
            -3,
            6,
            -3,
            6,
            -3
          ]
        },
        {
          "id": "afro-shekere-shaker-v-02",
          "parentPatternId": "afro-shekere-shaker",
          "name": "Shekere & Gourd Shaker Engine — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15
          ],
          "accentProfile": [
            0.96,
            0.58,
            0.71,
            0.58,
            0.8099999999999999,
            0.58,
            0.71,
            0.58,
            0.9099999999999999,
            0.58,
            0.71,
            0.58,
            0.8099999999999999,
            0.58,
            0.71,
            0.63
          ],
          "velocityProfile": [
            1,
            0.43,
            0.6799999999999999,
            0.51,
            0.78,
            0.43,
            0.76,
            0.43,
            0.88,
            0.51,
            0.6799999999999999,
            0.43,
            0.8600000000000001,
            0.43,
            0.6799999999999999,
            0.56
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5,
            2,
            -5,
            2,
            -5,
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

      "difficulty": 5,
      "weight": 1,
      "provenance": "Afrobeats catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "afrobeats"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,


      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "afro-horn-stabs",
      "worldId": "afrobeats",
      "styleIds": ["afrobeats-afrobeat"],
      "name": "Fela Afrobeat Horn Section Stabs",
      "family": "Afro Horns",
      "category": "cadence",
      "transitionType": "fill",
      "description": "Pungent brass section horn stabs locking",
      "tags": [
        "afrobeat",
        "horns",
        "brass",
        "fela"
      ],
      "scopes": [
        "phrase",
        "region"
      ],
      "roles": [
        "lead",
        "brass"
      ],

      "approaches": ["phrase"],
      "instruments": [
        "trumpet",
        "brass",
        "sax"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        3,
        7,
        11,
        14
      ],
      "accentProfile": [
        0.95,
        0.9,
        0.95,
        1
      ],
      "velocityProfile": [
        0.9,
        0.85,
        0.9,
        0.95
      ],
      "supportedEnergy": [1, 2],
      "phrasePosition": [
        "middle",
        "end"
      ],
      "sectionUsage": [
        "chorus",
        "solo",
        "coda"
      ],
      "variants": [
        {
          "id": "afro-horn-stabs-v-01",
          "parentPatternId": "afro-horn-stabs",
          "name": "Fela Afrobeat Horn Section Stabs — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            3,
            11,
            14
          ],
          "accentProfile": [
            0.8999999999999999,
            0.85,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.8200000000000001,
            0.77,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "afro-horn-stabs-v-02",
          "parentPatternId": "afro-horn-stabs",
          "name": "Fela Afrobeat Horn Section Stabs — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            3,
            7,
            11,
            14
          ],
          "accentProfile": [
            0.9099999999999999,
            0.98,
            0.9099999999999999,
            1
          ],
          "velocityProfile": [
            0.96,
            0.83,
            0.88,
            1
          ],
          "microtimingOffset": [
            2,
            -5,
            2,
            -5
          ]
        },
        {
          "id": "afro-horn-stabs-v-03",
          "parentPatternId": "afro-horn-stabs",
          "name": "Fela Afrobeat Horn Section Stabs — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            3,
            7,
            11,
            14,
            15
          ],
          "accentProfile": [
            0.9299999999999999,
            0.88,
            0.9299999999999999,
            1,
            1
          ],
          "velocityProfile": [
            0.9,
            0.85,
            0.9,
            0.98,
            0.98
          ],
          "microtimingOffset": [
            0,
            0,
            0,
            -6,
            -6
          ]
        }
      ],

      "difficulty": 1,
      "weight": 0.7,
      "provenance": "Afrobeats catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "afrobeats"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,

      "articulations": [
        "legato"
      ]
    },
    {
      "id": "afro-amapiano-pad",
      "worldId": "afrobeats",
      "styleIds": ["afrobeats-amapiano"],
      "name": "Airy Rhodes & Synth Pad Comping",
      "family": "Amapiano Keys",
      "category": "groove",
      "description": "Spacious, warm electric piano voicings floating",
      "tags": [
        "amapiano",
        "keys",
        "rhodes",
        "pad"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "harmony",
        "texture"
      ],

      "approaches": ["comping"],
      "instruments": [
        "keys",
        "piano",
        "synth"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        8,
        14
      ],
      "accentProfile": [
        0.85,
        0.9,
        0.8
      ],
      "velocityProfile": [
        0.8,
        0.85,
        0.75
      ],
      "supportedEnergy": [1, 2],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "intro",
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "afro-amapiano-pad-v-01",
          "parentPatternId": "afro-amapiano-pad",
          "name": "Airy Rhodes & Synth Pad Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            14
          ],
          "accentProfile": [
            0.7999999999999999,
            0.85
          ],
          "velocityProfile": [
            0.7200000000000001,
            0.77
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        {
          "id": "afro-amapiano-pad-v-02",
          "parentPatternId": "afro-amapiano-pad",
          "name": "Airy Rhodes & Synth Pad Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            8,
            14
          ],
          "accentProfile": [
            0.8099999999999999,
            0.98,
            0.76
          ],
          "velocityProfile": [
            0.8600000000000001,
            0.83,
            0.73
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
      "provenance": "Afrobeats catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "afrobeats"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,


      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "afrobeats-call-7",
      "worldId": "afrobeats",
      "styleIds": ["afrobeats-afro-pop"],
      "name": "Shekere Response",
      "family": "Shekere",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the",
      "tags": [
        "afrobeats",
        "shekere",
        "call",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "synth"
      ],

      "approaches": ["phrase"],
      "instruments": [
        "synth"
      ],
      "compatibleRoles": [
        "synth"
      ],
      "compatibleInstruments": [
        "synth"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        1,
        4,
        7,
        9,
        12,
        15
      ],
      "accentProfile": [
        0.95,
        0.62,
        0.95,
        0.62,
        0.95,
        0.62
      ],
      "velocityProfile": [
        0.95,
        0.57,
        0.95,
        0.62,
        0.8999999999999999,
        0.62
      ],
      "syncopationRating": 0.6666666666666666,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "breath",
        "phrase-end"
      ],
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
          "id": "afrobeats-call-7-v-01",
          "parentPatternId": "afrobeats-call-7",
          "name": "Shekere Response — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            1,
            7,
            9,
            15
          ],
          "accentProfile": [
            0.8999999999999999,
            0.57,
            0.8999999999999999,
            0.57
          ],
          "velocityProfile": [
            0.87,
            0.48999999999999994,
            0.87,
            0.54
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "afrobeats-call-7-v-02",
          "parentPatternId": "afrobeats-call-7",
          "name": "Shekere Response — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            1,
            4,
            7,
            9,
            12,
            15
          ],
          "accentProfile": [
            0.9099999999999999,
            0.7,
            0.9099999999999999,
            0.7,
            0.9099999999999999,
            0.7
          ],
          "velocityProfile": [
            1,
            0.5499999999999999,
            0.9299999999999999,
            0.6799999999999999,
            0.8799999999999999,
            0.6
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
          "id": "afrobeats-call-7-v-03",
          "parentPatternId": "afrobeats-call-7",
          "name": "Shekere Response — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            1,
            4,
            7,
            9,
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
      "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "afrobeats",
        "shekere"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "afrobeats-anchor-8",
      "worldId": "afrobeats",
      "styleIds": ["afrobeats-afro-pop"],
      "name": "Hook Anchor",
      "family": "Hook",
      "category": "ostinato",
      "description": "A repeating anchor that locks the",
      "tags": [
        "afrobeats",
        "hook",
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
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        5,
        8,
        10,
        13
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
      "syncopationRating": 0.6666666666666666,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "accented",
        "ghost-aware"
      ],
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
          "id": "afrobeats-anchor-8-v-01",
          "parentPatternId": "afrobeats-anchor-8",
          "name": "Hook Anchor — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            5,
            8,
            13
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
          "id": "afrobeats-anchor-8-v-02",
          "parentPatternId": "afrobeats-anchor-8",
          "name": "Hook Anchor — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            5,
            8,
            10,
            13
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
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "afrobeats",
        "hook"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "afrobeats-comp-9",
      "worldId": "afrobeats",
      "styleIds": ["afrobeats-afro-pop"],
      "name": "Horn Comping",
      "family": "Horn",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports",
      "tags": [
        "afrobeats",
        "horn",
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
        "guitar"
      ],
      "compatibleRoles": [
        "harmony"
      ],
      "compatibleInstruments": [
        "guitar"
      ],
      "canCrossRole": true,
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
      "syncopationRating": 0.6666666666666666,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "accented",
        "ghost-aware"
      ],
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
          "id": "afrobeats-comp-9-v-01",
          "parentPatternId": "afrobeats-comp-9",
          "name": "Horn Comping — sparse variation",
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
          "id": "afrobeats-comp-9-v-02",
          "parentPatternId": "afrobeats-comp-9",
          "name": "Horn Comping — accent shift",
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
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "afrobeats",
        "horn"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "afrobeats-intro-10",
      "worldId": "afrobeats",
      "styleIds": ["afrobeats-afro-pop"],
      "name": "Afrobeat Intro",
      "family": "Afrobeat",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish",
      "tags": [
        "afrobeats",
        "afrobeat",
        "intro",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmony",
        "texture"
      ],

      "approaches": ["comping"],
      "instruments": [
        "guitar"
      ],
      "compatibleRoles": [
        "harmony",
        "texture"
      ],
      "compatibleInstruments": [
        "guitar"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        1,
        3,
        4,
        6,
        9,
        11,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68,
        1,
        0.74,
        0.9,
        0.68
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74,
        0.9,
        0.63
      ],
      "syncopationRating": 0.75,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "accented",
        "ghost-aware"
      ],
      "supportedEnergy": [4, 5],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "intro"
      ],


      "variants": [
        {
          "id": "afrobeats-intro-10-v-01",
          "parentPatternId": "afrobeats-intro-10",
          "name": "Afrobeat Intro — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            1,
            4,
            6,
            11,
            12
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85,
            0.63,
            0.95
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001,
            0.6000000000000001,
            0.87
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
          "id": "afrobeats-intro-10-v-02",
          "parentPatternId": "afrobeats-intro-10",
          "name": "Afrobeat Intro — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            1,
            3,
            4,
            6,
            9,
            11,
            12,
            14
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76,
            0.96,
            0.82,
            0.86,
            0.76
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96,
            0.61
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
        },
        {
          "id": "afrobeats-intro-10-v-03",
          "parentPatternId": "afrobeats-intro-10",
          "name": "Afrobeat Intro — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            1,
            3,
            4,
            6,
            9,
            11,
            12,
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
            0.88,
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
            0.9,
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
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "afrobeats",
        "afrobeat"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "afrobeats-verse-11",
      "worldId": "afrobeats",
      "styleIds": ["afrobeats-afro-pop"],
      "name": "Log Drum Verse Variation",
      "family": "Log Drum",
      "category": "groove",
      "description": "A restrained verse variation with intentional",
      "tags": [
        "afrobeats",
        "log-drum",
        "verse",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "pulse",
        "rhythm-guitar",
        "drums"
      ],

      "approaches": ["groove"],
      "instruments": [
        "drums",
        "percussion",
        "bass"
      ],
      "compatibleRoles": [
        "pulse",
        "rhythm-guitar",
        "drums"
      ],
      "compatibleInstruments": [
        "drums",
        "percussion",
        "bass"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        4,
        5,
        7,
        10,
        12,
        13,
        15
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68,
        1,
        0.74,
        0.9,
        0.68
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74,
        0.9,
        0.63
      ],
      "syncopationRating": 0.75,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "accented",
        "ghost-aware"
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "verse"
      ],


      "variants": [
        {
          "id": "afrobeats-verse-11-v-01",
          "parentPatternId": "afrobeats-verse-11",
          "name": "Log Drum Verse Variation — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            2,
            5,
            7,
            12,
            13
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85,
            0.63,
            0.95
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001,
            0.6000000000000001,
            0.87
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
          "id": "afrobeats-verse-11-v-02",
          "parentPatternId": "afrobeats-verse-11",
          "name": "Log Drum Verse Variation — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            2,
            4,
            5,
            7,
            10,
            12,
            13,
            15
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76,
            0.96,
            0.82,
            0.86,
            0.76
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96,
            0.61
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
      "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "afrobeats",
        "log-drum"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "afrobeats-chorus-12",
      "worldId": "afrobeats",
      "styleIds": ["afrobeats-afro-pop"],
      "name": "Shekere Chorus Lift",
      "family": "Shekere",
      "category": "sectionPattern",
      "description": "A higher-energy chorus layer that increases",
      "tags": [
        "afrobeats",
        "shekere",
        "chorus",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "pulse",
        "harmony",
        "drums"
      ],

      "approaches": ["groove", "comping"],
      "instruments": [
        "drums",
        "percussion",
        "guitar"
      ],
      "compatibleRoles": [
        "pulse",
        "harmony",
        "drums"
      ],
      "compatibleInstruments": [
        "drums",
        "percussion",
        "guitar"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        5,
        6,
        8,
        11,
        13,
        14
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68,
        1,
        0.74,
        0.9,
        0.68
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74,
        0.9,
        0.63
      ],
      "syncopationRating": 0.75,
      "anticipationOffset": 1,
      "swingPercentage": 50,
      "articulations": [
        "accented",
        "ghost-aware"
      ],
      "supportedEnergy": [1, 2, 3, 4, 5],
      "phrasePosition": [
        "middle",
        "end"
      ],
      "sectionUsage": [
        "chorus"
      ],


      "variants": [
        {
          "id": "afrobeats-chorus-12-v-01",
          "parentPatternId": "afrobeats-chorus-12",
          "name": "Shekere Chorus Lift — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            5,
            6,
            11,
            13
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85,
            0.63,
            0.95
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001,
            0.6000000000000001,
            0.87
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
          "id": "afrobeats-chorus-12-v-02",
          "parentPatternId": "afrobeats-chorus-12",
          "name": "Shekere Chorus Lift — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            5,
            6,
            8,
            11,
            13,
            14
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76,
            0.96,
            0.82,
            0.86,
            0.76
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96,
            0.61
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
        },
        {
          "id": "afrobeats-chorus-12-v-03",
          "parentPatternId": "afrobeats-chorus-12",
          "name": "Shekere Chorus Lift — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            0,
            3,
            5,
            6,
            8,
            11,
            13,
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
            0.88,
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
            0.9,
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
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "afrobeats",
        "shekere"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "afrobeats-bridge-13",
      "worldId": "afrobeats",
      "styleIds": ["afrobeats-afro-pop"],
      "name": "Hook Bridge",
      "family": "Hook",
      "category": "sectionPattern",
      "description": "A contrasting bridge texture designed to",
      "tags": [
        "afrobeats",
        "hook",
        "bridge",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmony",
        "lead"
      ],

      "approaches": ["comping", "phrase"],
      "instruments": [
        "guitar"
      ],
      "compatibleRoles": [
        "harmony",
        "lead"
      ],
      "compatibleInstruments": [
        "guitar"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        5,
        7,
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
        1,
        0.74,
        0.9,
        0.68
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74,
        0.9,
        0.63
      ],
      "syncopationRating": 0.75,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "legato"
      ],
      "supportedEnergy": [4, 5],
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "bridge",
        "interlude",
        "development"
      ],


      "variants": [
        {
          "id": "afrobeats-bridge-13-v-01",
          "parentPatternId": "afrobeats-bridge-13",
          "name": "Hook Bridge — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            5,
            7,
            10,
            13
          ],
          "accentProfile": [
            0.95,
            0.69,
            0.85,
            0.63,
            0.95
          ],
          "velocityProfile": [
            0.92,
            0.61,
            0.8200000000000001,
            0.6000000000000001,
            0.87
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
          "id": "afrobeats-bridge-13-v-02",
          "parentPatternId": "afrobeats-bridge-13",
          "name": "Hook Bridge — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            5,
            7,
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
            0.96,
            0.82,
            0.86,
            0.76
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96,
            0.61
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
        },
        {
          "id": "afrobeats-bridge-13-v-03",
          "parentPatternId": "afrobeats-bridge-13",
          "name": "Hook Bridge — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            0,
            2,
            5,
            7,
            8,
            10,
            13,
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
            0.88,
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
            0.9,
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
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "afrobeats",
        "hook"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "afrobeats-fill-14",
      "worldId": "afrobeats",
      "styleIds": ["afrobeats-afro-pop"],
      "name": "Horn Fill",
      "family": "Horn",
      "category": "fill",
      "transitionType": "fill",
      "description": "A short transition fill that signals",
      "tags": [
        "afrobeats",
        "horn",
        "fill",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "fill",
        "drums"
      ],

      "approaches": ["groove"],
      "instruments": [
        "drums",
        "percussion"
      ],
      "compatibleRoles": [
        "fill",
        "drums"
      ],
      "compatibleInstruments": [
        "drums",
        "percussion"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        4,
        6,
        10,
        12,
        14
      ],
      "accentProfile": [
        0.72,
        0.78,
        0.84,
        0.72,
        1,
        1
      ],
      "velocityProfile": [
        0.72,
        0.73,
        0.84,
        0.72,
        0.95,
        1
      ],
      "syncopationRating": 0.5,
      "anticipationOffset": 1,
      "swingPercentage": 50,
      "articulations": ["accent"],
      "supportedEnergy": [4, 5],
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "pre-chorus",
        "turnaround",
        "ending"
      ],


      "variants": [
        {
          "id": "afrobeats-fill-14-v-01",
          "parentPatternId": "afrobeats-fill-14",
          "name": "Horn Fill — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            6,
            10,
            14
          ],
          "accentProfile": [
            0.6699999999999999,
            0.73,
            0.7899999999999999,
            0.6699999999999999
          ],
          "velocityProfile": [
            0.64,
            0.65,
            0.76,
            0.64
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "afrobeats-fill-14-v-02",
          "parentPatternId": "afrobeats-fill-14",
          "name": "Horn Fill — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            4,
            6,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.6799999999999999,
            0.86,
            0.7999999999999999,
            0.7999999999999999,
            0.96,
            1
          ],
          "velocityProfile": [
            0.78,
            0.71,
            0.82,
            0.78,
            0.9299999999999999,
            0.98
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
          "id": "afrobeats-fill-14-v-03",
          "parentPatternId": "afrobeats-fill-14",
          "name": "Horn Fill — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            0,
            4,
            6,
            10,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.7,
            0.76,
            0.82,
            0.7,
            0.98,
            1,
            1
          ],
          "velocityProfile": [
            0.72,
            0.73,
            0.84,
            0.72,
            0.95,
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
      "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "afrobeats",
        "horn"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "afrobeats-break-15",
      "worldId": "afrobeats",
      "styleIds": ["afrobeats-afro-pop"],
      "name": "Afrobeat Break",
      "family": "Afrobeat",
      "category": "break",
      "transitionType": "fill",
      "description": "A deliberate drop in density for",
      "tags": [
        "afrobeats",
        "afrobeat",
        "break",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "drums",
        "bass"
      ],

      "approaches": ["groove", "walking"],
      "instruments": [
        "drums",
        "percussion",
        "bass"
      ],
      "compatibleRoles": [
        "drums",
        "bass"
      ],
      "compatibleInstruments": [
        "drums",
        "percussion",
        "bass"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        1,
        5,
        7,
        11,
        13,
        15
      ],
      "accentProfile": [
        1,
        0.55,
        0.55,
        0.55,
        1,
        1
      ],
      "velocityProfile": [
        1,
        0.5,
        0.55,
        0.55,
        0.95,
        1
      ],
      "syncopationRating": 1,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "accented"
      ],
      "supportedEnergy": [1, 2],
      "phrasePosition": [
        "middle",
        "end"
      ],
      "sectionUsage": [
        "breakdown",
        "stop-time"
      ],


      "variants": [
        {
          "id": "afrobeats-break-15-v-01",
          "parentPatternId": "afrobeats-break-15",
          "name": "Afrobeat Break — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            1,
            7,
            11,
            15
          ],
          "accentProfile": [
            0.95,
            0.5,
            0.5,
            0.5
          ],
          "velocityProfile": [
            0.92,
            0.42,
            0.47000000000000003,
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
          "id": "afrobeats-break-15-v-02",
          "parentPatternId": "afrobeats-break-15",
          "name": "Afrobeat Break — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            1,
            5,
            7,
            11,
            13,
            15
          ],
          "accentProfile": [
            0.96,
            0.63,
            0.51,
            0.63,
            0.96,
            1
          ],
          "velocityProfile": [
            1,
            0.48,
            0.53,
            0.6100000000000001,
            0.9299999999999999,
            0.98
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
          "id": "afrobeats-break-15-v-03",
          "parentPatternId": "afrobeats-break-15",
          "name": "Afrobeat Break — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            1,
            5,
            7,
            11,
            13,
            14,
            15
          ],
          "accentProfile": [
            0.98,
            0.53,
            0.53,
            0.53,
            0.98,
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.5,
            0.55,
            0.55,
            0.95,
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
      "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "afrobeats",
        "afrobeat"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "afrobeats-cadence-16",
      "worldId": "afrobeats",
      "styleIds": ["afrobeats-afro-pop"],
      "name": "Log Drum Cadence",
      "family": "Log Drum",
      "category": "cadence",
      "transitionType": "fill",
      "description": "A phrase-ending cadence that gives the",
      "tags": [
        "afrobeats",
        "log-drum",
        "cadence",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmony",
        "bass"
      ],

      "approaches": ["comping", "walking"],
      "instruments": [
        "guitar",
        "bass"
      ],
      "compatibleRoles": [
        "harmony",
        "bass"
      ],
      "compatibleInstruments": [
        "guitar",
        "bass"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        6,
        8,
        12,
        14
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
      "swingPercentage": 50,
      "articulations": [
        "accented",
        "ghost-aware"
      ],
      "supportedEnergy": [1, 2],
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "turnaround",
        "ending",
        "coda",
        "remate",
        "cierre"
      ],


      "variants": [
        {
          "id": "afrobeats-cadence-16-v-01",
          "parentPatternId": "afrobeats-cadence-16",
          "name": "Log Drum Cadence — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            6,
            8,
            14
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
          "id": "afrobeats-cadence-16-v-02",
          "parentPatternId": "afrobeats-cadence-16",
          "name": "Log Drum Cadence — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            6,
            8,
            12,
            14
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
          "id": "afrobeats-cadence-16-v-03",
          "parentPatternId": "afrobeats-cadence-16",
          "name": "Log Drum Cadence — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            0,
            2,
            6,
            8,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.98,
            0.72,
            0.88,
            0.66,
            0.98,
            1,
            1
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95,
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
      "provenance": "GenreDAW catalog rebuild from existing Afrobeats world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "afrobeats",
        "log-drum"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.7,
      "enabled": true
    },
    {
      "id": "afrobeats--phrasing",
      "worldId": "afrobeats",
      "styleIds": ["afrobeats-afro-pop"],
      "name": "Afrobeats Vocal Phrasing",
      "family": "Vocal Phrasing",
      "category": "phrasePattern",
      "description": "Hook-driven vocal placement designed around syncopated",
      "tags": [
        "afrobeats",
        "synth",
        "vocal-phrasing",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "synth"
      ],

      "approaches": ["phrase"],
      "instruments": [
        "synth"
      ],
      "compatibleRoles": [
        "synth",
        "lead"
      ],
      "compatibleInstruments": [
        "synth"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        5,
        8,
        11,
        14
      ],
      "accentProfile": [
        0.94,
        0.62,
        0.94,
        0.62,
        0.94,
        0.62
      ],
      "velocityProfile": [
        0.9,
        0.58,
        0.9,
        0.58,
        0.9,
        0.58
      ],
      "syncopationRating": 0.6666666666666666,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "breath",
        "phrase-end"
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "bridge"
      ],


      "variants": [
        {
          "id": "afrobeats--phrasing-v--alt",
          "parentPatternId": "afrobeats--phrasing",
          "name": "Afrobeats Vocal Phrasing — alternate phrasing",
          "variationType": "phraseStart",
          "probability": 0.2,
          "description": "Alternate vocal entry placement for a",
          "onsetGrid": [
            0,
            3,
            5,
            8,
            11,
            14
          ],
          "accentProfile": [
            0.92,
            0.62,
            0.92,
            0.62,
            0.92,
            0.62
          ],
          "velocityProfile": [
            0.88,
            0.58,
            0.88,
            0.58,
            0.88,
            0.58
          ],
          "microtimingOffset": [
            2,
            -4,
            2,
            -4,
            2,
            -4
          ]
        },
        {
          "id": "afrobeats--phrasing-v-final-accent",
          "parentPatternId": "afrobeats--phrasing",
          "name": "Afrobeats Vocal Phrasing — accent shift",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "Same rhythmic shape with shifted emphasis",
          "onsetGrid": [
            0,
            3,
            5,
            8,
            11,
            14
          ],
          "accentProfile": [
            0.8999999999999999,
            0.7,
            0.8999999999999999,
            0.7,
            0.8999999999999999,
            0.7
          ],
          "velocityProfile": [
            0.9,
            0.58,
            0.9,
            0.58,
            0.9,
            0.58
          ],
          "microtimingOffset": [
            2,
            -4,
            2,
            -4,
            2,
            -4
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Afrobeats.",
      "authenticityTags": [
        "afrobeats",
        "synth"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.9,
      "enabled": true
    }
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Syncopated Afrobeats pocket kick [0, 6, 10] with offbeat snare clap",
  "grooveMechanics": {
    "swingPercentage": 54,
    "anticipationOffsetSteps": 1,
    "microtimingFeel": "laid-back"
  },
  "crossLinks": [
    "Kizomba ↔ Afrobeats (Afro-Kiz festival room)",
    "Afrobeats ↔ Global Urban Beat",
    "Afrobeats ↔ Funk (Fela Kuti / James Brown shared DNA)"
  ]
};
