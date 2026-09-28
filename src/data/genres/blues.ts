import type { GenreWorld } from '../../types';

export const BLUES_WORLD: GenreWorld = {
  "id": "blues",
  "name": "Blues",
  "family": "Roots / Blues",
  "color": "#6f7f9a",
  "level": "world",
  "description": "A deep blues vocabulary built around",
  "styleDefinitions": [
    {
      "id": "blues-chicago",
      "worldId": "blues",
      "name": "Chicago Blues",
      "origin": "Chicago, Illinois",
      "era": "1940s–1960s",
      "description": "Electric • 12-bar • Driving\nAmplified harmonica",
      "characteristicInstruments": [
        "electric-guitar",
        "harmonica",
        "piano",
        "bass",
        "drums"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        86,
        110
      ],
      "keySubstyles": [
        "South Side Chicago Blues",
        "Chess Records Sound"
      ],
      "coreConcepts": [
        "distorted amplified harmonica (bullet mic)",
        "heavy electric guitar shuffle riffs",
        "rolling boogie basslines",
        "deep guttural vocal delivery"
      ],
      "rhythmicGrammar": [
        "driving 12/8 triplet shuffle with backbeat snare and walking bass"
      ],
      "danceTags": [
        "social-partner",
        "blues-fusion-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Electric guitar shuffle riff with answering distorted harmonica cry",
      "grooveMechanics": {
        "swingPercentage": 66,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "swung"
      },
      "sectionProgressions": {
        "intro": [
          "E7",
          "A7",
          "E7",
          "B7"
        ],
        "verse": [
          "E7",
          "E7",
          "E7",
          "E7",
          "A7",
          "A7",
          "E7",
          "E7",
          "B7",
          "A7",
          "E7",
          "B7"
        ],
        "solo": [
          "E7",
          "E7",
          "E7",
          "E7",
          "A7",
          "A7",
          "E7",
          "E7",
          "B7",
          "A7",
          "E7",
          "B7"
        ],
        "coda": [
          "B7",
          "A7",
          "E7",
          "E9"
        ]
      }
    },
    {
      "id": "blues-delta",
      "worldId": "blues",
      "name": "Delta Blues",
      "origin": "Mississippi Delta",
      "era": "1920s–1930s",
      "description": "Raw • Acoustic • Bottleneck\nSlide guitar",
      "characteristicInstruments": [
        "acoustic-guitar",
        "harmonica",
        "piano",
        "foot-stomp",
        "slide-guitar"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        72,
        98
      ],
      "keySubstyles": [
        "Acoustic Delta Blues",
        "Bottleneck Slide"
      ],
      "coreConcepts": [
        "bottleneck glass/metal slide on acoustic guitar",
        "percussive heel stomping",
        "haunting falsetto vocal leaps",
        "elastic polyrhythmic timing"
      ],
      "rhythmicGrammar": [
        "syncopated thumb-bass pulse with free-meter vocal phrases and slide ornaments"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Bottleneck slide whine over steady acoustic thumb-bass stomp",
      "grooveMechanics": {
        "swingPercentage": 62,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "intro": [
          "A7",
          "D7",
          "A7",
          "E7"
        ],
        "verse": [
          "A7",
          "A7",
          "A7",
          "A7",
          "D7",
          "D7",
          "A7",
          "A7",
          "E7",
          "D7",
          "A7",
          "E7"
        ],
        "coda": [
          "E7",
          "D7",
          "A7",
          "A7"
        ]
      }
    },
    {
      "id": "blues-texas",
      "worldId": "blues",
      "name": "Texas Blues",
      "origin": "Texas, USA",
      "era": "1950s–1980s",
      "description": "Swinging • Sharp • Virtuosic\nSingle-note electric",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "piano",
        "harmonica"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        115,
        145
      ],
      "keySubstyles": [
        "Texas Shuffle",
        "Electric Blues Rock"
      ],
      "coreConcepts": [
        "blistering single-note lead guitar bending",
        "heavy Texas shuffle drum groove",
        "virtuosic turnaround licks",
        "dynamic power rhythm"
      ],
      "rhythmicGrammar": [
        "uptempo triplet shuffle with snappy snare rimshots and walking bass"
      ],
      "danceTags": [
        "social-partner",
        "blues-fusion-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Sharp Texas shuffle snap with rapid ascending pentatonic guitar bend",
      "grooveMechanics": {
        "swingPercentage": 64,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "swung"
      },
      "sectionProgressions": {
        "intro": [
          "G7",
          "C7",
          "G7",
          "D7"
        ],
        "verse": [
          "G7",
          "G7",
          "G7",
          "G7",
          "C7",
          "C7",
          "G7",
          "G7",
          "D7",
          "C7",
          "G7",
          "D7"
        ],
        "solo": [
          "G7",
          "G7",
          "G7",
          "G7",
          "C7",
          "C7",
          "G7",
          "G7",
          "D7",
          "C7",
          "G7",
          "D7"
        ],
        "coda": [
          "D7",
          "C7",
          "G7",
          "G9"
        ]
      }
    },
    {
      "id": "blues-piedmont",
      "worldId": "blues",
      "name": "Piedmont Blues",
      "origin": "East Coast USA (Piedmont region)",
      "era": "1920s–1940s",
      "description": "Bouncy • Ragtime • Fingerpicked\nSyncopated acoustic",
      "characteristicInstruments": [
        "acoustic-guitar",
        "harmonica",
        "washboard",
        "piano",
        "upright-bass"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        96,
        120
      ],
      "keySubstyles": [
        "East Coast Blues",
        "Ragtime Blues"
      ],
      "coreConcepts": [
        "alternating thumb-bass ragtime picking",
        "syncopated treble-string melodies",
        "upbeat cheerful bounce",
        "clean acoustic articulation"
      ],
      "rhythmicGrammar": [
        "ragtime boom-chick thumb bass with syncopated index/middle finger arpeggios"
      ],
      "danceTags": [
        "social-partner",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Alternating thumb-bass ragtime arpeggio with bright syncopated treble melody",
      "grooveMechanics": {
        "swingPercentage": 58,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "swung"
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
          "C7",
          "F",
          "Fm",
          "C",
          "A7",
          "D7",
          "G7",
          "C",
          "E7",
          "Am",
          "F",
          "C",
          "G7",
          "C",
          "G7"
        ],
        "coda": [
          "C",
          "A7",
          "D7",
          "G7",
          "C",
          "C"
        ]
      }
    },
    {
      "id": "blues-jump",
      "worldId": "blues",
      "name": "Jump Blues",
      "origin": "Kansas City / Los Angeles",
      "era": "1940s–1950s",
      "description": "Fast • Horns • Swinging\nUpbeat predecessor",
      "characteristicInstruments": [
        "brass",
        "piano",
        "electric-guitar",
        "upright-bass",
        "drums"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        135,
        175
      ],
      "keySubstyles": [
        "Jump Swing",
        "Boogie Jump Blues"
      ],
      "coreConcepts": [
        "swinging big-band horn riffs",
        "boogie-woogie piano bass ostinatos",
        "shouting energetic vocals",
        "fast walking bassline"
      ],
      "rhythmicGrammar": [
        "fast 4-on-the-floor four-beat swing with driving snare backbeat on 2 and 4"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Punchy horn unison riff over driving boogie-woogie piano and walking bass",
      "grooveMechanics": {
        "swingPercentage": 60,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "swung"
      },
      "sectionProgressions": {
        "intro": [
          "Bb7",
          "Eb7",
          "Bb7",
          "F7"
        ],
        "verse": [
          "Bb7",
          "Bb7",
          "Bb7",
          "Bb7",
          "Eb7",
          "Eb7",
          "Bb7",
          "Bb7",
          "F7",
          "Eb7",
          "Bb7",
          "F7"
        ],
        "solo": [
          "Bb7",
          "Bb7",
          "Bb7",
          "Bb7",
          "Eb7",
          "Eb7",
          "Bb7",
          "Bb7",
          "F7",
          "Eb7",
          "Bb7",
          "F7"
        ],
        "coda": [
          "F7",
          "Eb7",
          "Bb7",
          "Bb7"
        ]
      }
    },
    {
      "id": "blues-hill-country",
      "worldId": "blues",
      "name": "Hill Country Blues",
      "origin": "North Mississippi Hill Country",
      "era": "1960s–Present",
      "description": "Hypnotic • One-chord • Droning\nRelentless groove-based",
      "characteristicInstruments": [
        "electric-guitar",
        "drums",
        "bass",
        "harmonica",
        "hand-percussion"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        92,
        116
      ],
      "keySubstyles": [
        "North Mississippi Blues",
        "Trance Blues"
      ],
      "coreConcepts": [
        "hypnotic one-chord drone vamp",
        "repetitive polyrhythmic guitar grooves",
        "open-ended modal improvisation",
        "raw driving drum stomps"
      ],
      "rhythmicGrammar": [
        "continuous circular modal guitar groove locked with dry kick and snare"
      ],
      "danceTags": [
        "festival-fusion",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Relentless one-chord hypnotic modal guitar vamp locked with raw drum stomp",
      "grooveMechanics": {
        "swingPercentage": 54,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "E7",
          "E7",
          "E7",
          "E7"
        ],
        "verse": [
          "E7",
          "E7",
          "E7",
          "E7",
          "E7",
          "E7",
          "E7",
          "E7"
        ],
        "solo": [
          "E7",
          "E7",
          "E7",
          "E7",
          "E7",
          "E7",
          "E7",
          "E7"
        ],
        "coda": [
          "E7",
          "E7",
          "E7",
          "E7"
        ]
      }
    },
    {
      "id": "blues-swamp",
      "worldId": "blues",
      "name": "Swamp Blues",
      "origin": "Baton Rouge, Louisiana",
      "era": "1950s–1960s",
      "description": "Laid-back • Reverb • Tremolo\nLethargic Louisiana",
      "characteristicInstruments": [
        "electric-guitar",
        "harmonica",
        "bass",
        "drums",
        "piano"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        78,
        96
      ],
      "keySubstyles": [
        "Louisiana Swamp Blues",
        "Excello Sound"
      ],
      "coreConcepts": [
        "heavy amplifier tremolo and spring reverb",
        "lethargic relaxed groove",
        "sparse acoustic/electric interplay",
        "lazy vocal delivery"
      ],
      "rhythmicGrammar": [
        "laid-back lazy shuffle with muted bass pulse and subtle snare brushes"
      ],
      "danceTags": [
        "listening",
        "blues-fusion-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Tremolo-pulsing electric guitar chord over slow relaxed swamp groove",
      "grooveMechanics": {
        "swingPercentage": 62,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "E",
          "A",
          "E",
          "B7"
        ],
        "verse": [
          "E",
          "E",
          "E",
          "E",
          "A",
          "A",
          "E",
          "E",
          "B7",
          "A",
          "E",
          "B7"
        ],
        "coda": [
          "B7",
          "A",
          "E",
          "E"
        ]
      }
    },
    {
      "id": "blues-soul",
      "worldId": "blues",
      "name": "Soul Blues",
      "origin": "Memphis / Chicago / Jackson, MS",
      "era": "1960s–1970s",
      "description": "Smooth • Horn-fed • Expressive\nGospel-influenced 60s",
      "characteristicInstruments": [
        "electric-guitar",
        "brass",
        "organ",
        "bass",
        "drums"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        74,
        94
      ],
      "keySubstyles": [
        "Urban Soul Blues",
        "Gospel Blues"
      ],
      "coreConcepts": [
        "lush brass section pads and swells",
        "gospel-tinged organ voicings",
        "expressive single-string vibrato guitar leads",
        "deep emotive vocal belts"
      ],
      "rhythmicGrammar": [
        "slow 12/8 gospel ballad triplet pulse or relaxed 4/4 soul groove"
      ],
      "danceTags": [
        "social-partner",
        "blues-fusion-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Singing vibrato guitar line answering lush warm horn section swells",
      "grooveMechanics": {
        "swingPercentage": 66,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "C",
          "F",
          "C",
          "G7"
        ],
        "verse": [
          "C",
          "C",
          "C",
          "C",
          "F",
          "F",
          "C",
          "C",
          "G7",
          "F",
          "C",
          "G7"
        ],
        "chorus": [
          "F",
          "F",
          "C",
          "C",
          "F",
          "F",
          "G7",
          "G7"
        ],
        "coda": [
          "G7",
          "F",
          "C",
          "C"
        ]
      }
    }
  ],
  "substyles": [
    "Chicago Blues",
    "Delta Blues",
    "Texas Blues",
    "Piedmont Blues",
    "Jump Blues",
    "Hill Country Blues",
    "Swamp Blues",
    "Soul Blues"
  ],
  "artists": [
    "Muddy Waters",
    "Howlin' Wolf",
    "Robert Johnson",
    "Charley Patton",
    "Stevie Ray Vaughan",
    "Freddie King",
    "Blind Willie McTell",
    "Reverend Gary Davis",
    "Louis Jordan",
    "Big Joe Turner",
    "R.L. Burnside",
    "Junior Kimbrough",
    "Slim Harpo",
    "Lightnin' Slim",
    "B.B. King",
    "Bobby \"Blue\" Bland"
  ],
  "concepts": [
    "12-bar form",
    "shuffle feel",
    "call and response",
    "turnaround",
    "blues scale",
    "dominant harmony",
    "space and phrasing"
  ],
  "roles": {
    "bass": [
      "root–fifth boogie",
      "walking blues bass",
      "riff lock"
    ],
    "guitar": [
      "fills",
      "turnarounds",
      "bends",
      "double-stops"
    ],
    "drums": [
      "shuffle",
      "backbeat",
      "fills"
    ],
    "piano": [
      "boogie",
      "blues comping",
      "turnaround figures"
    ]
  },
  "patterns": [
    {
      "id": "blues-shuffle",
      "worldId": "blues",
      "styleIds": ["blues-chicago"],
      "name": "Chicago Shuffle",
      "family": "Shuffle",
      "category": "fill",
      "transitionType": "fill",
      "description": "A repeating triplet-derived blues pulse with",
      "tags": [
        "blues",
        "shuffle",
        "backbeat"
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
      "subdivisions": 12,
      "onsetGrid": [
        0,
        3,
        4,
        7,
        8,
        11
      ],
      "accentProfile": [
        1,
        0.65,
        0.9,
        0.65,
        0.95,
        0.7
      ],
      "velocityProfile": [
        0.9,
        0.6,
        0.85,
        0.6,
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
        "chorus",
        "solo"
      ],
      "variants": [
        {
          "id": "blues-shuffle-fill",
          "parentPatternId": "blues-shuffle",
          "name": "Shuffle Fill",
          "variationType": "fill",
          "probability": 0.45,
          "onsetGrid": [
            0,
            3,
            4,
            6,
            8,
            9,
            11
          ],
          "accentProfile": [
            1,
            0.6,
            0.85,
            0.7,
            0.9,
            0.65,
            1
          ],
          "description": "A short turnaround-oriented fill that leaves"
        },
        {
          "id": "blues-shuffle-v-02",
          "parentPatternId": "blues-shuffle",
          "name": "Chicago Shuffle — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            4,
            7,
            8,
            11
          ],
          "accentProfile": [
            0.96,
            0.73,
            0.86,
            0.73,
            0.9099999999999999,
            0.7799999999999999
          ],
          "velocityProfile": [
            0.96,
            0.58,
            0.83,
            0.6599999999999999,
            0.88,
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
      "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "blues"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,

      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "blues-boogie-bass",
      "worldId": "blues",
      "styleIds": ["blues-texas"],
      "name": "Boogie Root–Fifth Bass",
      "family": "Boogie Bass",
      "category": "ostinato",
      "description": "Alternating root, fifth and sixth movement",
      "tags": [
        "blues",
        "boogie",
        "bass"
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
        2,
        4,
        6,
        8,
        10,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.55,
        0.85,
        0.55,
        0.95,
        0.6,
        0.9,
        0.6
      ],
      "velocityProfile": [
        0.9,
        0.55,
        0.8,
        0.55,
        0.9,
        0.55,
        0.85,
        0.55
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
          "id": "blues-boogie-walkup",
          "parentPatternId": "blues-boogie-bass",
          "name": "Sixth Walk-Up",
          "variationType": "development",
          "probability": 0.35,
          "onsetGrid": [
            0,
            2,
            4,
            6,
            8,
            10,
            12,
            13,
            14,
            15
          ],
          "accentProfile": [
            1,
            0.5,
            0.8,
            0.5,
            0.9,
            0.55,
            0.85,
            0.65,
            0.8,
            1
          ],
          "description": "A rising sixth/chromatic approach used to"
        },
        {
          "id": "blues-boogie-bass-v-02",
          "parentPatternId": "blues-boogie-bass",
          "name": "Boogie Root–Fifth Bass — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            4,
            6,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.96,
            0.63,
            0.8099999999999999,
            0.63,
            0.9099999999999999,
            0.6799999999999999,
            0.86,
            0.6799999999999999
          ],
          "velocityProfile": [
            0.96,
            0.53,
            0.78,
            0.6100000000000001,
            0.88,
            0.53,
            0.9099999999999999,
            0.53
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
      "weight": 0.7,
      "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "blues"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,


      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "blues-turnaround",
      "worldId": "blues",
      "styleIds": ["blues-delta"],
      "name": "12-Bar Turnaround",
      "family": "Turnaround",
      "category": "cadence",
      "transitionType": "fill",
      "description": "A compact cadence in the final",
      "tags": [
        "blues",
        "12-bar",
        "turnaround",
        "cadence"
      ],
      "scopes": [
        "phrase",
        "region",
        "song"
      ],
      "roles": [
        "harmony",
        "rhythm-guitar",
        "melody"
      ],

      "approaches": ["comping", "phrase"],
      "instruments": [
        "electric-guitar",
        "guitar",
        "piano"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        6,
        8,
        10,
        12,
        14,
        15
      ],
      "accentProfile": [
        0.8,
        0.6,
        0.75,
        0.9,
        0.7,
        0.85,
        0.7,
        1
      ],
      "velocityProfile": [
        0.75,
        0.55,
        0.7,
        0.9,
        0.65,
        0.8,
        0.65,
        1
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "end"
      ],
      "sectionUsage": [
        "turnaround",
        "ending"
      ],
      "variants": [
        {
          "id": "blues-turnaround-v-01",
          "parentPatternId": "blues-turnaround",
          "name": "12-Bar Turnaround — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            6,
            8,
            12,
            14
          ],
          "accentProfile": [
            0.75,
            0.5499999999999999,
            0.7,
            0.85,
            0.6499999999999999
          ],
          "velocityProfile": [
            0.67,
            0.47000000000000003,
            0.62,
            0.8200000000000001,
            0.5700000000000001
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
          "id": "blues-turnaround-v-02",
          "parentPatternId": "blues-turnaround",
          "name": "12-Bar Turnaround — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            6,
            8,
            10,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.76,
            0.6799999999999999,
            0.71,
            0.98,
            0.6599999999999999,
            0.9299999999999999,
            0.6599999999999999,
            1
          ],
          "velocityProfile": [
            0.81,
            0.53,
            0.6799999999999999,
            0.96,
            0.63,
            0.78,
            0.71,
            0.98
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
          "id": "blues-turnaround-v-03",
          "parentPatternId": "blues-turnaround",
          "name": "12-Bar Turnaround — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            0,
            3,
            6,
            8,
            10,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.78,
            0.58,
            0.73,
            0.88,
            0.6799999999999999,
            0.83,
            1,
            1
          ],
          "velocityProfile": [
            0.75,
            0.55,
            0.7,
            0.9,
            0.65,
            0.8,
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

      "difficulty": 3,
      "weight": 0.7,
      "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "blues"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,

      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "blues-slow-12-8",
      "worldId": "blues",
      "styleIds": ["blues-chicago"],
      "name": "Slow 12/8 Groove",
      "family": "Drums",
      "category": "break",
      "transitionType": "fill",
      "description": "Slow heavy triplet feel with snare",
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
      "meter": "12/8",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        3,
        6,
        9
      ],
      "accentProfile": [
        1,
        0.7,
        0.95,
        0.7
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.9,
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
          "id": "blues-slow-12-8-v-01",
          "parentPatternId": "blues-slow-12-8",
          "name": "Slow 12/8 Groove — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            6,
            9
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
          "id": "blues-slow-12-8-v-02",
          "parentPatternId": "blues-slow-12-8",
          "name": "Slow 12/8 Groove — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            6,
            9
          ],
          "accentProfile": [
            0.96,
            0.7799999999999999,
            0.9099999999999999,
            0.7799999999999999
          ],
          "velocityProfile": [
            1,
            0.63,
            0.88,
            0.71
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
      "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "blues"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,

      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "blues-texas-shuffle",
      "worldId": "blues",
      "styleIds": ["blues-texas"],
      "name": "Texas Shuffle",
      "family": "Guitar",
      "category": "groove",
      "description": "Driving guitar shuffle with muted rake",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "guitar",
        "electric-guitar"
      ],

      "approaches": ["chop"],
      "instruments": [
        "guitar",
        "electric-guitar"
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
        1,
        0.65,
        0.85,
        0.6,
        0.95,
        0.65,
        0.85,
        0.7
      ],
      "velocityProfile": [
        0.9,
        0.6,
        0.8,
        0.55,
        0.9,
        0.6,
        0.8,
        0.65
      ],
      "supportedEnergy": [1, 2, 3, 4, 5],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "blues-texas-shuffle-v-01",
          "parentPatternId": "blues-texas-shuffle",
          "name": "Texas Shuffle — sparse variation",
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
            0.95,
            0.6,
            0.7999999999999999,
            0.5499999999999999,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.8200000000000001,
            0.52,
            0.7200000000000001,
            0.47000000000000003,
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
          "id": "blues-texas-shuffle-v-02",
          "parentPatternId": "blues-texas-shuffle",
          "name": "Texas Shuffle — accent shift",
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
            0.96,
            0.73,
            0.8099999999999999,
            0.6799999999999999,
            0.9099999999999999,
            0.73,
            0.8099999999999999,
            0.7799999999999999
          ],
          "velocityProfile": [
            0.96,
            0.58,
            0.78,
            0.6100000000000001,
            0.88,
            0.58,
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
      "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "blues"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,


      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "blues-soul-groove",
      "worldId": "blues",
      "styleIds": ["blues-soul"],
      "name": "Soul Blues Beat",
      "family": "Drums",
      "category": "groove",
      "description": "Straight 8ths Memphis style beat with",
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
      "subdivisions": 8,
      "onsetGrid": [
        0,
        2,
        4,
        6
      ],
      "accentProfile": [
        1,
        0.6,
        0.95,
        0.65
      ],
      "velocityProfile": [
        0.9,
        0.55,
        0.9,
        0.6
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
          "id": "blues-soul-groove-v-01",
          "parentPatternId": "blues-soul-groove",
          "name": "Soul Blues Beat — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4,
            6
          ],
          "accentProfile": [
            0.95,
            0.5499999999999999,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.8200000000000001,
            0.47000000000000003,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "blues-soul-groove-v-02",
          "parentPatternId": "blues-soul-groove",
          "name": "Soul Blues Beat — accent shift",
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
            0.96,
            0.6799999999999999,
            0.9099999999999999,
            0.73
          ],
          "velocityProfile": [
            0.96,
            0.53,
            0.88,
            0.6599999999999999
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
      "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "blues"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,


      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "blues-bass-walk",
      "worldId": "blues",
      "styleIds": ["blues-chicago"],
      "name": "Walking Blues Bass",
      "family": "Bass",
      "category": "groove",
      "description": "Quarter note walking bass leading through",
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
      "subdivisions": 4,
      "onsetGrid": [
        0,
        1,
        2,
        3
      ],
      "accentProfile": [
        1,
        0.75,
        0.9,
        0.8
      ],
      "velocityProfile": [
        0.95,
        0.7,
        0.85,
        0.75
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
          "id": "blues-bass-walk-v-01",
          "parentPatternId": "blues-bass-walk",
          "name": "Walking Blues Bass — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            2,
            3
          ],
          "accentProfile": [
            0.95,
            0.7,
            0.85
          ],
          "velocityProfile": [
            0.87,
            0.62,
            0.77
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "blues-bass-walk-v-02",
          "parentPatternId": "blues-bass-walk",
          "name": "Walking Blues Bass — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            1,
            2,
            3
          ],
          "accentProfile": [
            0.96,
            0.83,
            0.86,
            0.88
          ],
          "velocityProfile": [
            1,
            0.6799999999999999,
            0.83,
            0.81
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
      "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "blues"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,

      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "blues-piano-triplets",
      "worldId": "blues",
      "styleIds": ["blues-chicago"],
      "name": "Piano Triplets",
      "family": "Piano",
      "category": "groove",
      "description": "Rolling right hand blues triplets over",
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
      "subdivisions": 12,
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
        11
      ],
      "accentProfile": [
        1,
        0.6,
        0.7,
        0.9,
        0.6,
        0.7,
        0.95,
        0.6,
        0.7,
        0.85,
        0.6,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.55,
        0.65,
        0.85,
        0.55,
        0.65,
        0.9,
        0.55,
        0.65,
        0.8,
        0.55,
        0.7
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
          "id": "blues-piano-triplets-v-01",
          "parentPatternId": "blues-piano-triplets",
          "name": "Piano Triplets — sparse variation",
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
            11
          ],
          "accentProfile": [
            0.95,
            0.5499999999999999,
            0.6499999999999999,
            0.85,
            0.5499999999999999,
            0.6499999999999999,
            0.8999999999999999,
            0.5499999999999999
          ],
          "velocityProfile": [
            0.87,
            0.47000000000000003,
            0.5700000000000001,
            0.77,
            0.47000000000000003,
            0.5700000000000001,
            0.8200000000000001,
            0.47000000000000003
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "blues-piano-triplets-v-02",
          "parentPatternId": "blues-piano-triplets",
          "name": "Piano Triplets — accent shift",
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
            11
          ],
          "accentProfile": [
            0.96,
            0.6799999999999999,
            0.6599999999999999,
            0.98,
            0.5599999999999999,
            0.7799999999999999,
            0.9099999999999999,
            0.6799999999999999,
            0.6599999999999999,
            0.9299999999999999,
            0.5599999999999999,
            0.83
          ],
          "velocityProfile": [
            1,
            0.53,
            0.63,
            0.9099999999999999,
            0.53,
            0.63,
            0.96,
            0.53,
            0.63,
            0.8600000000000001,
            0.53,
            0.6799999999999999
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
            -5
          ]
        }
      ],

      "difficulty": 4,
      "weight": 1,
      "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "blues"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,

      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "blues-horn-stabs",
      "worldId": "blues",
      "styleIds": ["blues-soul"],
      "name": "Horn Stabs",
      "family": "Brass",
      "category": "groove",
      "description": "Punchy brass punctuation answering the vocal",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "brass",
        "trumpet",
        "sax"
      ],

      "approaches": ["groove"],
      "instruments": [
        "brass",
        "trumpet",
        "sax"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        2,
        6
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
        "chorus"
      ],
      "variants": [
        {
          "id": "blues-horn-stabs-v-01-safe",
          "parentPatternId": "blues-horn-stabs",
          "name": "Horn Stabs — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse",
          "onsetGrid": [
            2,
            6
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
          "id": "blues-horn-stabs-v-02-safe",
          "parentPatternId": "blues-horn-stabs",
          "name": "Horn Stabs — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse",
          "onsetGrid": [
            2,
            6
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
      "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "blues"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,

      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "blues-delta-slide",
      "worldId": "blues",
      "styleIds": ["blues-delta"],
      "name": "Slide Guitar Lick",
      "family": "Guitar",
      "category": "groove",
      "description": "Acoustic slide guitar response with vocal",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "guitar",
        "electric-guitar"
      ],

      "approaches": ["chop"],
      "instruments": [
        "guitar",
        "electric-guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        4,
        8,
        10,
        12
      ],
      "accentProfile": [
        1,
        0.7,
        0.9,
        0.75,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.85,
        0.7,
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
          "id": "blues-delta-slide-v-01",
          "parentPatternId": "blues-delta-slide",
          "name": "Slide Guitar Lick — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            8,
            10
          ],
          "accentProfile": [
            0.95,
            0.6499999999999999,
            0.85
          ],
          "velocityProfile": [
            0.87,
            0.5700000000000001,
            0.77
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "blues-delta-slide-v-02",
          "parentPatternId": "blues-delta-slide",
          "name": "Slide Guitar Lick — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            4,
            8,
            10,
            12
          ],
          "accentProfile": [
            0.96,
            0.7799999999999999,
            0.86,
            0.83,
            0.8099999999999999
          ],
          "velocityProfile": [
            1,
            0.63,
            0.83,
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
      "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "blues"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,

      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "blues-rhumba",
      "worldId": "blues",
      "styleIds": ["blues-chicago"],
      "name": "Blues Rhumba",
      "family": "Drums",
      "category": "groove",
      "description": "Cross-stick and tom rhumba beat popularized",
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
        0.7,
        0.9,
        0.95,
        0.65,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.85,
        0.9,
        0.6,
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
          "id": "blues-rhumba-v-01",
          "parentPatternId": "blues-rhumba",
          "name": "Blues Rhumba — sparse variation",
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
            0.6499999999999999,
            0.85,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.5700000000000001,
            0.77,
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
          "id": "blues-rhumba-v-02",
          "parentPatternId": "blues-rhumba",
          "name": "Blues Rhumba — accent shift",
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
            0.7799999999999999,
            0.86,
            1,
            0.61,
            0.9299999999999999
          ],
          "velocityProfile": [
            1,
            0.63,
            0.83,
            0.96,
            0.58,
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
      "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "blues"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,

      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "blues-organ-swell",
      "worldId": "blues",
      "styleIds": ["blues-soul"],
      "name": "Organ Swell",
      "family": "Keys",
      "category": "groove",
      "description": "Hammond B3 chord swell rising into",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "keys",
        "synth"
      ],

      "approaches": ["groove"],
      "instruments": [
        "keys",
        "synth"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 4,
      "onsetGrid": [
        0,
        2
      ],
      "accentProfile": [
        0.75,
        0.95
      ],
      "velocityProfile": [
        0.7,
        0.9
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
          "id": "blues-organ-swell-v-01-safe",
          "parentPatternId": "blues-organ-swell",
          "name": "Organ Swell — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse",
          "onsetGrid": [
            0,
            2
          ],
          "accentProfile": [
            0.7,
            1
          ],
          "velocityProfile": [
            0.73,
            0.86
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        },
        {
          "id": "blues-organ-swell-v-02-safe",
          "parentPatternId": "blues-organ-swell",
          "name": "Organ Swell — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse",
          "onsetGrid": [
            0,
            2
          ],
          "accentProfile": [
            0.7,
            1
          ],
          "velocityProfile": [
            0.73,
            0.86
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        }
      ],

      "difficulty": 1,
      "weight": 1,
      "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "blues"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 66,
      "anticipationOffset": 0,

      "articulations": [
        "accented",
        "ghost-aware"
      ]
    },
    {
      "id": "blues-phrase-13",
      "worldId": "blues",
      "styleIds": ["blues-delta"],
      "name": "12-Bar Phrase",
      "family": "12-Bar",
      "category": "phrasePattern",
      "description": "A phrase-level rhythmic template that leaves",
      "tags": [
        "blues",
        "12-bar",
        "phrase",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmonica"
      ],

      "approaches": ["phrase"],
      "instruments": [
        "harmonica"
      ],
      "compatibleRoles": [
        "harmonica"
      ],
      "compatibleInstruments": [
        "harmonica"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        2,
        3,
        6,
        8,
        9,
        11
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68,
        1,
        0.74,
        0.9
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74,
        0.9
      ],
      "syncopationRating": 0.7142857142857143,
      "anticipationOffset": 0,
      "swingPercentage": 66,
      "articulations": [
        "breath",
        "phrase-end"
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
          "id": "blues-phrase-13-v-01",
          "parentPatternId": "blues-phrase-13",
          "name": "12-Bar Phrase — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            3,
            6,
            9,
            11
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
          "id": "blues-phrase-13-v-02",
          "parentPatternId": "blues-phrase-13",
          "name": "12-Bar Phrase — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            3,
            6,
            8,
            9,
            11
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76,
            0.96,
            0.82,
            0.86
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96
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
      "provenance": "GenreDAW catalog rebuild from existing Blues world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "blues",
        "12-bar"
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
      "id": "blues-call-14",
      "worldId": "blues",
      "styleIds": ["blues-delta"],
      "name": "Rake Response",
      "family": "Rake",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the",
      "tags": [
        "blues",
        "rake",
        "call",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmonica"
      ],

      "approaches": ["phrase"],
      "instruments": [
        "harmonica"
      ],
      "compatibleRoles": [
        "harmonica"
      ],
      "compatibleInstruments": [
        "harmonica"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        1,
        3,
        4,
        7,
        9,
        10,
        12
      ],
      "accentProfile": [
        0.95,
        0.62,
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
        0.8999999999999999,
        0.62,
        0.95
      ],
      "syncopationRating": 0.7142857142857143,
      "anticipationOffset": 0,
      "swingPercentage": 66,
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
          "id": "blues-call-14-v-01",
          "parentPatternId": "blues-call-14",
          "name": "Rake Response — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            1,
            4,
            7,
            10,
            12
          ],
          "accentProfile": [
            0.8999999999999999,
            0.57,
            0.8999999999999999,
            0.57,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.48999999999999994,
            0.87,
            0.54,
            0.82
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
          "id": "blues-call-14-v-02",
          "parentPatternId": "blues-call-14",
          "name": "Rake Response — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            1,
            3,
            4,
            7,
            9,
            10,
            12
          ],
          "accentProfile": [
            0.9099999999999999,
            0.7,
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
            0.8799999999999999,
            0.6,
            1
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
        },
        {
          "id": "blues-call-14-v-03",
          "parentPatternId": "blues-call-14",
          "name": "Rake Response — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            1,
            3,
            4,
            7,
            9,
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
            0.62,
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
            0,
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Blues world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "blues",
        "rake"
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
      "id": "blues-anchor-15",
      "worldId": "blues",
      "styleIds": ["blues-delta"],
      "name": "Call & Response Anchor",
      "family": "Call & Response",
      "category": "ostinato",
      "description": "A repeating anchor that locks the",
      "tags": [
        "blues",
        "call-response",
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
        2,
        4,
        5,
        8,
        10,
        11,
        13
      ],
      "accentProfile": [
        1,
        0.74,
        0.9,
        0.68,
        1,
        0.74,
        0.9
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74,
        0.9
      ],
      "syncopationRating": 0.7142857142857143,
      "anticipationOffset": 0,
      "swingPercentage": 66,
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
          "id": "blues-anchor-15-v-01",
          "parentPatternId": "blues-anchor-15",
          "name": "Call & Response Anchor — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            2,
            5,
            8,
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
          "id": "blues-anchor-15-v-02",
          "parentPatternId": "blues-anchor-15",
          "name": "Call & Response Anchor — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            2,
            4,
            5,
            8,
            10,
            11,
            13
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86,
            0.76,
            0.96,
            0.82,
            0.86
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96
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
      "provenance": "GenreDAW catalog rebuild from existing Blues world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "blues",
        "call-response"
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
      "id": "blues-comp-16",
      "worldId": "blues",
      "styleIds": ["blues-delta"],
      "name": "Turnaround Comping",
      "family": "Turnaround",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports",
      "tags": [
        "blues",
        "turnaround",
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
        "guitar",
        "piano"
      ],
      "compatibleRoles": [
        "harmony"
      ],
      "compatibleInstruments": [
        "guitar",
        "piano"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        4,
        6,
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
        0.9
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9,
        0.68,
        0.95,
        0.74,
        0.9
      ],
      "syncopationRating": 0.7142857142857143,
      "anticipationOffset": 0,
      "swingPercentage": 66,
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
          "id": "blues-comp-16-v-01",
          "parentPatternId": "blues-comp-16",
          "name": "Turnaround Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            4,
            7,
            10,
            13,
            15
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
          "id": "blues-comp-16-v-02",
          "parentPatternId": "blues-comp-16",
          "name": "Turnaround Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            4,
            6,
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
            0.86
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88,
            0.74,
            0.9299999999999999,
            0.72,
            0.96
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
      "provenance": "GenreDAW catalog rebuild from existing Blues world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "blues",
        "turnaround"
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
      "id": "blues--phrasing",
      "worldId": "blues",
      "styleIds": ["blues-delta"],
      "name": "Blues Vocal Phrasing",
      "family": "Vocal Phrasing",
      "category": "phrasePattern",
      "description": "12-bar vocal phrase placement with call-and-response",
      "tags": [
        "blues",
        "harmonica",
        "vocal-phrasing",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "harmonica"
      ],

      "approaches": ["phrase"],
      "instruments": [
        "harmonica"
      ],
      "compatibleRoles": [
        "harmonica",
        "lead"
      ],
      "compatibleInstruments": [
        "harmonica"
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
      "swingPercentage": 58,
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
        "bridge",
        "intro"
      ],


      "variants": [
        {
          "id": "blues--phrasing-v--alt",
          "parentPatternId": "blues--phrasing",
          "name": "Blues Vocal Phrasing — alternate phrasing",
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
          "id": "blues--phrasing-v-final-accent",
          "parentPatternId": "blues--phrasing",
          "name": "Blues Vocal Phrasing — accent shift",
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
      "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Blues.",
      "authenticityTags": [
        "blues",
        "harmonica"
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
  "signatureCell": "Chicago triplet shuffle ride with heavy 2 & 4 snare backbeat and turnaround",
  "grooveMechanics": {
    "swingPercentage": 66,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "laid-back"
  },
  "crossLinks": [
    "Blues ↔ Rock",
    "Blues ↔ Jazz",
    "Blues ↔ Country",
    "Blues ↔ Blues Fusion"
  ]
};
