import type { GenreWorld } from '../../schema';

/** Standalone authored definition for R&B. */
export const R_AND_B_WORLD: GenreWorld = {
  "id": "r-and-b",
  "name": "R&B",
  "family": "African American Groove",
  "color": "#e28743",
  "level": "world",
  "description": "The masters of groove: \"The One\"",
  "substyles": [
    "P-Funk",
    "Deep Funk",
    "Synth Funk",
    "Disco",
    "Go-Go",
    "Boogie",
    "Afrobeat",
    "Funk Carioca"
  ],
  "artists": [
    "Parliament",
    "Funkadelic",
    "The Meters",
    "Sharon Jones & The Dap-Kings",
    "Prince",
    "Cameo",
    "Chic",
    "Donna Summer",
    "Chuck Brown",
    "Trouble Funk",
    "Evelyn \"Champagne\" King",
    "D-Train",
    "Fela Kuti",
    "Tony Allen",
    "MC Marcinho",
    "Anitta"
  ],
  "concepts": [
    "The One",
    "chicken-scratch guitar",
    "ghost notes",
    "clavinet syncopation",
    "horn stabs",
    "Dilla swing",
    "laid-back snare"
  ],
  "crossLinks": [
    "Funk ↔ Jazz",
    "Funk ↔ Hip-Hop",
    "Funk ↔ Afrobeat",
    "Funk ↔ WCS"
  ],
  "roles": {
    "bass": [
      "slap bass on The One",
      "syncopated 16th pops",
      "melodic soul walking lines",
      "synth bass ostinatos"
    ],
    "guitar": [
      "chicken-scratch 16th muting",
      "isolated 9th chord stabs",
      "wah-wah pedal comping"
    ],
    "drums": [
      "funky drummer breakbeat",
      "linear ghost-note snare patterns",
      "laid-back neo-soul pocket"
    ],
    "keys": [
      "percussive clavinet",
      "Rhodes/Wurlitzer tremolo chords",
      "B3 organ glissandos"
    ],
    "lead": [
      "tight brass section hits",
      "vocal falsetto and call-and-response"
    ]
  },
  "rhythm": {
    "syncopation": 0.9,
    "swing": 0.15,
    "pocket": "behind",
    "pocketDepth": 12
  },
  "drumRules": {},
  "tuningSystem": "12-tet",
  "signatureCell": "Explosive root slap on The One with syncopated 16th ghost notes and chicken-scratch 9th guitar",
  "grooveMechanics": {
    "swingPercentage": 54,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "laid-back"
  },
  "styleDefinitions": [
    {
      "id": "r-and-b-p-funk",
      "worldId": "r-and-b",
      "name": "P-Funk",
      "origin": "Plainfield, NJ / Detroit",
      "era": "1970s",
      "description": "Heavy On The One • Space",
      "characteristicInstruments": [
        "bass",
        "drums",
        "electric-guitar",
        "synth",
        "brass"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        96,
        116
      ],
      "keySubstyles": [
        "Parliament Funk",
        "Space Funk",
        "Psychedelic Funk Rock"
      ],
      "coreConcepts": [
        "absolute emphasis on \"The One\"",
        "Mu-Tron envelope filtered bass (Bootsy Collins)",
        "Bernie Worrell Minimoog squelches",
        "layered humorous party chants"
      ],
      "rhythmicGrammar": [
        "explosive accent on downbeat 1 followed by intricate syncopated 16th-note subdivisions"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Massive downbeat \"ONE\" followed by Bootsy envelope-filter bass bubble and synth squelch",
      "grooveMechanics": {
        "swingPercentage": 58,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "swung"
      },
      "sectionProgressions": {
        "intro": [
          "E7#9",
          "E7#9",
          "E7#9",
          "E7#9"
        ],
        "groove": [
          "E7#9",
          "E7#9",
          "A7",
          "E7#9",
          "E7#9",
          "E7#9",
          "B7",
          "E7#9"
        ],
        "break": [
          "A7",
          "A7",
          "E7#9",
          "E7#9",
          "B7",
          "A7",
          "E7#9",
          "E7#9"
        ],
        "coda": [
          "E7#9",
          "E7#9",
          "E7#9",
          "E7#9"
        ]
      }
    },
    {
      "id": "r-and-b-deep-funk",
      "worldId": "r-and-b",
      "name": "Deep Funk",
      "origin": "New Orleans / Cincinnati",
      "era": "Late 1960s–1970s",
      "description": "Raw • Syncopated • Tight\nAnalog rhythm",
      "characteristicInstruments": [
        "drums",
        "bass",
        "electric-guitar",
        "organ",
        "brass"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        88,
        108
      ],
      "keySubstyles": [
        "New Orleans Second Line Funk",
        "Sister Funk"
      ],
      "coreConcepts": [
        "Zigaboo Modeliste second-line syncopated drum phrasing",
        "single-note scratching guitar skanks",
        "punchy Hammond organ stabs",
        "deep dry bass grooves"
      ],
      "rhythmicGrammar": [
        "displaced snare accents and syncopated hi-hat barks weaving around rolling kick"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Syncopated second-line snare drag locked with clean single-note guitar chicken-scratch",
      "grooveMechanics": {
        "swingPercentage": 60,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "swung"
      },
      "sectionProgressions": {
        "intro": [
          "C7",
          "C7",
          "C7",
          "C7"
        ],
        "groove": [
          "C7",
          "F7",
          "C7",
          "G7",
          "C7",
          "F7",
          "G7",
          "C7"
        ],
        "solo": [
          "F7",
          "F7",
          "C7",
          "C7",
          "G7",
          "F7",
          "C7",
          "C7"
        ],
        "coda": [
          "G7",
          "F7",
          "C7",
          "C7"
        ]
      }
    },
    {
      "id": "r-and-b-synth-funk",
      "worldId": "r-and-b",
      "name": "Synth Funk",
      "origin": "Minneapolis / Los Angeles",
      "era": "1980s",
      "description": "Electronic • Drum Machine • Slap",
      "characteristicInstruments": [
        "synth",
        "drums",
        "bass",
        "electric-guitar",
        "brass"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        108,
        124
      ],
      "keySubstyles": [
        "Minneapolis Sound",
        "Electro Funk"
      ],
      "coreConcepts": [
        "LinnDrum gated drum machine beats",
        "Oberheim/Prophet synth brass chords",
        "aggressive slap and pop basslines",
        "clean funky Stratocaster rhythms"
      ],
      "rhythmicGrammar": [
        "tight electronic 16th-note grid with sharp snare crack and syncopated bass slaps"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "LinnDrum side-stick crack with punchy Oberheim synth brass stab and thumb-slap bass",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Dm",
          "G",
          "Dm",
          "G"
        ],
        "verse": [
          "Dm",
          "G",
          "Dm",
          "G",
          "Dm",
          "G",
          "Bb",
          "C"
        ],
        "chorus": [
          "Bb",
          "C",
          "Dm",
          "Dm",
          "Bb",
          "C",
          "Dm",
          "Dm"
        ],
        "coda": [
          "Bb",
          "C",
          "Dm",
          "Dm"
        ]
      }
    },
    {
      "id": "r-and-b-disco",
      "worldId": "r-and-b",
      "name": "Disco",
      "origin": "New York City / Philadelphia",
      "era": "1970s",
      "description": "Four-on-the-floor • Strings • Glamorous\nOrchestral dance",
      "characteristicInstruments": [
        "drums",
        "bass",
        "electric-guitar",
        "strings",
        "brass"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        115,
        128
      ],
      "keySubstyles": [
        "Philly Disco",
        "Chic Organization Sound",
        "Euro Disco"
      ],
      "coreConcepts": [
        "Nile Rodgers \"chucking\" rhythm guitar style",
        "Bernard Edwards driving octave slap/finger bass",
        "four-on-the-floor kick with open hi-hat on every upbeat",
        "sweeping string orchestra lines"
      ],
      "rhythmicGrammar": [
        "four-on-the-floor kick with open hi-hat on every upbeat and 16th-note guitar chucking"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Nile Rodgers 16th-note chucking guitar rhythm locked with driving octave disco bassline",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Em7",
          "A7",
          "Em7",
          "A7"
        ],
        "verse": [
          "Em7",
          "A7",
          "Em7",
          "A7",
          "Em7",
          "A7",
          "Em7",
          "A7"
        ],
        "chorus": [
          "Cmaj7",
          "Bm7",
          "Am7",
          "Bm7",
          "Cmaj7",
          "Bm7",
          "Em7",
          "Em7"
        ],
        "coda": [
          "Cmaj7",
          "Bm7",
          "Em7",
          "Em7"
        ]
      }
    },
    {
      "id": "r-and-b-go-go",
      "worldId": "r-and-b",
      "name": "Go-Go",
      "origin": "Washington, D.C.",
      "era": "1970s–1980s",
      "description": "Percussive • Call-and-Response • Non-stop\nD.C. continuous",
      "characteristicInstruments": [
        "drums",
        "cowbell",
        "timbales",
        "bass",
        "brass"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        92,
        108
      ],
      "keySubstyles": [
        "D.C. Go-Go",
        "Heavy Go-Go Funk"
      ],
      "coreConcepts": [
        "relentless syncopated cowbell/woodblock pattern",
        "driving rototom/timbale fills",
        "continuous non-stop live show transitions",
        "charismatic crowd call-and-response"
      ],
      "rhythmicGrammar": [
        "syncopated rototom and double-cowbell pattern driving over laid-back half-time kick/snare pocket"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Syncopated dual cowbell pattern driving relentless D.C. pocket under shouting vocal calls",
      "grooveMechanics": {
        "swingPercentage": 56,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "swung"
      },
      "sectionProgressions": {
        "intro": [
          "Am7",
          "D7",
          "Am7",
          "D7"
        ],
        "groove": [
          "Am7",
          "D7",
          "Am7",
          "D7",
          "Am7",
          "D7",
          "Am7",
          "D7"
        ],
        "break": [
          "F7",
          "E7",
          "Am7",
          "D7",
          "F7",
          "E7",
          "Am7",
          "Am7"
        ],
        "coda": [
          "Am7",
          "D7",
          "Am7",
          "Am7"
        ]
      }
    },
    {
      "id": "r-and-b-boogie",
      "worldId": "r-and-b",
      "name": "Boogie",
      "origin": "New York / London",
      "era": "Late 1970s–Early 1980s",
      "description": "Mid-tempo • Synth Bass • Electric\nPost-disco",
      "characteristicInstruments": [
        "synth",
        "bass",
        "drums",
        "electric-guitar",
        "piano"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        106,
        118
      ],
      "keySubstyles": [
        "Post-Disco Boogie",
        "Electro Boogie"
      ],
      "coreConcepts": [
        "heavy Minimoog/Pro-One synth basslines",
        "handclap and snare backbeats",
        "shimmering electric piano chords",
        "smooth soulful vocal hooks"
      ],
      "rhythmicGrammar": [
        "mid-tempo 4/4 with punchy synth bass on 16th syncopations and crisp handclaps on 2 and 4"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Fat analog synth bass bounce driving under crisp handclap backbeat and bright Rhodes chords",
      "grooveMechanics": {
        "swingPercentage": 54,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Fm7",
          "Bbm7",
          "Eb7",
          "Abmaj7"
        ],
        "verse": [
          "Fm7",
          "Bbm7",
          "Eb7",
          "Abmaj7",
          "Dbmaj7",
          "Bbm7",
          "C7",
          "C7"
        ],
        "chorus": [
          "Dbmaj7",
          "Eb",
          "Fm7",
          "Ab",
          "Dbmaj7",
          "Eb",
          "Fm7",
          "Fm7"
        ],
        "coda": [
          "Dbmaj7",
          "Eb",
          "Fm7",
          "Fm7"
        ]
      }
    },
    {
      "id": "r-and-b-afrobeat",
      "worldId": "r-and-b",
      "name": "Afrobeat",
      "origin": "Lagos, Nigeria",
      "era": "1970s",
      "description": "Polyrhythmic • Horn Section • Endless",
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
        126
      ],
      "keySubstyles": [
        "Classic Afrobeat",
        "Afrobeat Big Band"
      ],
      "coreConcepts": [
        "Tony Allen polyrhythmic 4-limb drum independence",
        "dual interlocking rhythm guitars",
        "punchy declarative horn blasts",
        "hypnotic modal organ vamps"
      ],
      "rhythmicGrammar": [
        "relentless 16th hi-hat pulse with syncopated cross-stick snare and repeating bass riff"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Two interlocking guitars weaving around Tony Allen polyrhythmic snare cross-stick and bass vamp",
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
        "groove": [
          "Dm7",
          "G7",
          "Dm7",
          "G7",
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
      "id": "r-and-b-funk-carioca",
      "worldId": "r-and-b",
      "name": "Funk Carioca",
      "origin": "Rio de Janeiro Favelas, Brazil",
      "era": "1990s–Present",
      "description": "Volt Mix Beat • Vocal Chants",
      "characteristicInstruments": [
        "drums",
        "sub-bass",
        "sampler",
        "tenor-sax",
        "synth"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        128,
        136
      ],
      "keySubstyles": [
        "Baile Funk",
        "Funk 150 BPM",
        "Funk Melody"
      ],
      "coreConcepts": [
        "iconic \"Tamborzão\" / Volt Mix syncopated beat",
        "call-and-response favela vocal shouts",
        "sub-bass drops and siren sound effects",
        "explosive street party dance"
      ],
      "rhythmicGrammar": [
        "distinctive Tamborzão drum beat: boom... ch-ch-boom... ch-boom... syncopation"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Explosive Tamborzão favela drum rhythm driving under aggressive call-and-response vocal chant",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "Am",
          "Am",
          "Am"
        ],
        "verse": [
          "Am",
          "F",
          "G",
          "Am",
          "Am",
          "F",
          "G",
          "Am"
        ],
        "drop": [
          "Am",
          "Am",
          "Am",
          "Am",
          "Am",
          "F",
          "G",
          "Am"
        ],
        "coda": [
          "F",
          "G",
          "Am",
          "Am"
        ]
      }
    }
  ],
  "patterns": [
    {
      "id": "r-and-b--funk-the-one-bass",
      "worldId": "r-and-b",
      "styleIds": [],
      "name": "\"The One\" 16th-Note Syncopated Bass",
      "family": "Funk Basslines",
      "category": "ostinato",
      "description": "Explosive root hit on beat 1",
      "tags": [
        "funk",
        "bass",
        "slap",
        "the-one",
        "james-brown",
        "groove"
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
      "approaches": [
        "walking",
        "groove"
      ],
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
        10,
        12,
        14,
        15
      ],
      "accentProfile": [
        1,
        0.6,
        0.9,
        0.8,
        0.6,
        0.95,
        0.7,
        0.85
      ],
      "velocityProfile": [
        1,
        0.6,
        0.85,
        0.75,
        0.55,
        0.9,
        0.65,
        0.8
      ],
      "articulations": [
        "ghost"
      ],
      "supportedEnergy": [
        4,
        5
      ],
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
          "id": "r-and-b--funk-jamerson-motown-bass",
          "parentPatternId": "r-and-b--funk-the-one-bass",
          "name": "James Jamerson Melodic Walking Soul Line",
          "variationType": "ornamented",
          "probability": 0.5,
          "onsetGrid": [
            0,
            4,
            6,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.95,
            0.7,
            0.85,
            0.9,
            0.75,
            0.95,
            0.8
          ],
          "description": "Syncopated melodic bassline using chromatic enclosures"
        },
        {
          "id": "r-and-b--funk-the-one-bass-v-02",
          "parentPatternId": "r-and-b--funk-the-one-bass",
          "name": "\"The One\" 16th-Note Syncopated Bass — accent shift",
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
            0.96,
            0.6799999999999999,
            0.86,
            0.88,
            0.5599999999999999,
            1,
            0.6599999999999999,
            0.9299999999999999
          ],
          "velocityProfile": [
            1,
            0.58,
            0.83,
            0.81,
            0.53,
            0.88,
            0.71,
            0.78
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
      "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "funk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0
    },
    {
      "id": "r-and-b--funk-chicken-scratch-guitar",
      "worldId": "r-and-b",
      "styleIds": [],
      "name": "Chicken-Scratch 9th Chords (Muted 16th Strum)",
      "family": "Funk Guitar",
      "category": "ostinato",
      "description": "Rapid 16th-note muted rhythmic scratches with",
      "tags": [
        "guitar",
        "funk",
        "chicken-scratch",
        "9th-chords",
        "rhythm"
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
        "rhythm-guitar"
      ],
      "approaches": [
        "comping"
      ],
      "instruments": [
        "electric-guitar",
        "guitar"
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
        0.9,
        0.3,
        0.4,
        0.3,
        1,
        0.3,
        0.95,
        0.3,
        0.9,
        0.3,
        0.4,
        0.3,
        1,
        0.3,
        0.95,
        0.3
      ],
      "velocityProfile": [
        0.85,
        0.3,
        0.4,
        0.3,
        1,
        0.3,
        0.9,
        0.3,
        0.85,
        0.3,
        0.4,
        0.3,
        1,
        0.3,
        0.9,
        0.3
      ],
      "articulations": [
        "accent"
      ],
      "supportedEnergy": [
        4,
        5
      ],
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
          "id": "r-and-b--funk-guitar-sparse-chank",
          "parentPatternId": "r-and-b--funk-chicken-scratch-guitar",
          "name": "Single-Chord Syncopated \"Chank\"",
          "variationType": "sparse",
          "probability": 0.5,
          "onsetGrid": [
            2,
            6,
            10,
            14
          ],
          "accentProfile": [
            1,
            1,
            1,
            1
          ],
          "description": "Clean, isolated off-beat chord stabs leaving"
        },
        {
          "id": "r-and-b--funk-chicken-scratch-guitar-v-02",
          "parentPatternId": "r-and-b--funk-chicken-scratch-guitar",
          "name": "Chicken-Scratch 9th Chords (Muted 16th Strum) — accent shift",
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
            0.86,
            0.4,
            0.4,
            0.4,
            0.96,
            0.4,
            0.9099999999999999,
            0.4,
            0.86,
            0.4,
            0.4,
            0.4,
            0.96,
            0.4,
            0.9099999999999999,
            0.4
          ],
          "velocityProfile": [
            0.9099999999999999,
            0.4,
            0.4,
            0.4,
            0.98,
            0.4,
            0.96,
            0.4,
            0.83,
            0.4,
            0.4,
            0.4,
            1,
            0.4,
            0.88,
            0.4
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
      "weight": 0.7,
      "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "funk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0
    },
    {
      "id": "r-and-b--funk-drum-breakbeat",
      "worldId": "r-and-b",
      "styleIds": [],
      "name": "Clyde Stubblefield \"Funky Drummer\" Breakbeat",
      "family": "Funk Drumming",
      "category": "fill",
      "transitionType": "fill",
      "description": "The most sampled groove in music",
      "tags": [
        "drums",
        "breakbeat",
        "funk",
        "clyde-stubblefield",
        "ghost-notes"
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
      "approaches": [
        "groove"
      ],
      "instruments": [
        "drums",
        "percussion"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        4,
        6,
        7,
        8,
        10,
        12,
        14,
        15
      ],
      "accentProfile": [
        1,
        0.4,
        1,
        0.35,
        0.4,
        0.9,
        0.4,
        1,
        0.35,
        0.8
      ],
      "velocityProfile": [
        0.95,
        0.4,
        0.95,
        0.3,
        0.35,
        0.85,
        0.4,
        0.95,
        0.3,
        0.75
      ],
      "supportedEnergy": [
        4,
        5
      ],
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "intro",
        "verse",
        "chorus",
        "solo",
        "vamp"
      ],
      "variants": [
        {
          "id": "r-and-b--neosoul-dilla-swung-pocket",
          "parentPatternId": "r-and-b--funk-drum-breakbeat",
          "name": "Neo-Soul Laid-Back Swung Pocket",
          "variationType": "syncopated",
          "probability": 0.5,
          "onsetGrid": [
            0,
            4,
            7,
            8,
            12,
            15
          ],
          "accentProfile": [
            1,
            0.95,
            0.5,
            0.85,
            1,
            0.6
          ],
          "description": "Unquantized relaxed pocket with delayed backbeat"
        },
        {
          "id": "r-and-b--funk-drum-breakbeat-v-02",
          "parentPatternId": "r-and-b--funk-drum-breakbeat",
          "name": "Clyde Stubblefield \"Funky Drummer\" Breakbeat — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            4,
            6,
            7,
            8,
            10,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.96,
            0.48000000000000004,
            0.96,
            0.43,
            0.4,
            0.98,
            0.4,
            1,
            0.4,
            0.88
          ],
          "velocityProfile": [
            1,
            0.4,
            0.9299999999999999,
            0.4,
            0.4,
            0.83,
            0.46,
            0.9299999999999999,
            0.4,
            0.81
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
            -5
          ]
        }
      ],
      "difficulty": 3,
      "weight": 1,
      "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "funk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "articulations": [
        "accented"
      ]
    },
    {
      "id": "r-and-b--funk-16th-strum",
      "worldId": "r-and-b",
      "styleIds": [],
      "name": "16th Note Strum",
      "family": "Guitar",
      "category": "break",
      "transitionType": "fill",
      "description": "Continuous 16ths chicken-scratch with accented backbeat",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "electric-guitar"
      ],
      "approaches": [
        "groove"
      ],
      "instruments": [
        "electric-guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        3,
        4,
        6,
        8,
        10,
        12,
        14
      ],
      "accentProfile": [
        0.95,
        0.6,
        0.7,
        1,
        0.65,
        0.9,
        0.6,
        1,
        0.7
      ],
      "velocityProfile": [
        0.9,
        0.5,
        0.6,
        0.95,
        0.55,
        0.85,
        0.5,
        0.95,
        0.6
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "r-and-b--funk-16th-strum-v-01",
          "parentPatternId": "r-and-b--funk-16th-strum",
          "name": "16th Note Strum — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            3,
            4,
            8,
            10,
            14
          ],
          "accentProfile": [
            0.8999999999999999,
            0.5499999999999999,
            0.6499999999999999,
            0.95,
            0.6,
            0.85
          ],
          "velocityProfile": [
            0.8200000000000001,
            0.42,
            0.52,
            0.87,
            0.47000000000000003,
            0.77
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "r-and-b--funk-16th-strum-v-02",
          "parentPatternId": "r-and-b--funk-16th-strum",
          "name": "16th Note Strum — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            3,
            4,
            6,
            8,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.9099999999999999,
            0.6799999999999999,
            0.6599999999999999,
            1,
            0.61,
            0.98,
            0.5599999999999999,
            1,
            0.6599999999999999
          ],
          "velocityProfile": [
            0.96,
            0.48,
            0.58,
            1,
            0.53,
            0.83,
            0.56,
            0.9299999999999999,
            0.58
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
            2
          ]
        }
      ],
      "difficulty": 3,
      "weight": 1,
      "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "funk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "articulations": [
        "accented"
      ]
    },
    {
      "id": "r-and-b--funk-slap-bass",
      "worldId": "r-and-b",
      "styleIds": [],
      "name": "Slap Bass",
      "family": "Bass",
      "category": "cadence",
      "transitionType": "fill",
      "description": "Thumb slap on downbeats and syncopated",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "bass"
      ],
      "approaches": [
        "walking"
      ],
      "instruments": [
        "bass"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        4,
        7,
        8,
        10,
        12,
        15
      ],
      "accentProfile": [
        1,
        0.85,
        0.7,
        0.9,
        0.95,
        0.8,
        0.7,
        0.85
      ],
      "velocityProfile": [
        1,
        0.8,
        0.65,
        0.85,
        0.9,
        0.75,
        0.65,
        0.8
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
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
          "id": "r-and-b--funk-slap-bass-v-01",
          "parentPatternId": "r-and-b--funk-slap-bass",
          "name": "Slap Bass — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4,
            7,
            10,
            12
          ],
          "accentProfile": [
            0.95,
            0.7999999999999999,
            0.6499999999999999,
            0.85,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.92,
            0.7200000000000001,
            0.5700000000000001,
            0.77,
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
          "id": "r-and-b--funk-slap-bass-v-02",
          "parentPatternId": "r-and-b--funk-slap-bass",
          "name": "Slap Bass — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            4,
            7,
            8,
            10,
            12,
            15
          ],
          "accentProfile": [
            0.96,
            0.9299999999999999,
            0.6599999999999999,
            0.98,
            0.9099999999999999,
            0.88,
            0.6599999999999999,
            0.9299999999999999
          ],
          "velocityProfile": [
            1,
            0.78,
            0.63,
            0.9099999999999999,
            0.88,
            0.73,
            0.71,
            0.78
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
      "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "funk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "articulations": [
        "accented"
      ]
    },
    {
      "id": "r-and-b--funk-ghost-snares",
      "worldId": "r-and-b",
      "styleIds": [],
      "name": "Ghost Snares",
      "family": "Drums",
      "category": "groove",
      "description": "Subtle 16th ghost note chatter dancing",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums"
      ],
      "approaches": [
        "groove"
      ],
      "instruments": [
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        3,
        6,
        7,
        10,
        11,
        14,
        15
      ],
      "accentProfile": [
        0.45,
        0.5,
        0.5,
        0.55,
        0.45,
        0.5,
        0.5,
        0.6
      ],
      "velocityProfile": [
        0.4,
        0.45,
        0.45,
        0.5,
        0.4,
        0.45,
        0.45,
        0.55
      ],
      "supportedEnergy": [
        1,
        2,
        3,
        4,
        5
      ],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "r-and-b--funk-ghost-snares-v-01",
          "parentPatternId": "r-and-b--funk-ghost-snares",
          "name": "Ghost Snares — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            2,
            6,
            7,
            11,
            14
          ],
          "accentProfile": [
            0.45,
            0.45,
            0.45,
            0.5,
            0.45
          ],
          "velocityProfile": [
            0.4,
            0.4,
            0.4,
            0.42,
            0.4
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
          "id": "r-and-b--funk-ghost-snares-v-02",
          "parentPatternId": "r-and-b--funk-ghost-snares",
          "name": "Ghost Snares — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            2,
            3,
            6,
            7,
            10,
            11,
            14,
            15
          ],
          "accentProfile": [
            0.41000000000000003,
            0.58,
            0.46,
            0.63,
            0.41000000000000003,
            0.58,
            0.46,
            0.6799999999999999
          ],
          "velocityProfile": [
            0.46,
            0.43,
            0.43,
            0.56,
            0.4,
            0.43,
            0.51,
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
      "weight": 1,
      "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "funk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "articulations": [
        "accented"
      ]
    },
    {
      "id": "r-and-b--funk-clavinet",
      "worldId": "r-and-b",
      "styleIds": [],
      "name": "Clavinet Sync",
      "family": "Keys",
      "category": "groove",
      "description": "Perceptive syncopated clavinet riff driving forward",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "keys",
        "synth"
      ],
      "approaches": [
        "groove"
      ],
      "instruments": [
        "keys",
        "synth"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        1,
        4,
        7,
        10,
        13
      ],
      "accentProfile": [
        0.95,
        0.75,
        0.9,
        0.8,
        0.85
      ],
      "velocityProfile": [
        0.9,
        0.7,
        0.85,
        0.75,
        0.8
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "r-and-b--funk-clavinet-v-01",
          "parentPatternId": "r-and-b--funk-clavinet",
          "name": "Clavinet Sync — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            1,
            7,
            10
          ],
          "accentProfile": [
            0.8999999999999999,
            0.7,
            0.85
          ],
          "velocityProfile": [
            0.8200000000000001,
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
          "id": "r-and-b--funk-clavinet-v-02",
          "parentPatternId": "r-and-b--funk-clavinet",
          "name": "Clavinet Sync — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            1,
            4,
            7,
            10,
            13
          ],
          "accentProfile": [
            0.9099999999999999,
            0.83,
            0.86,
            0.88,
            0.8099999999999999
          ],
          "velocityProfile": [
            0.96,
            0.6799999999999999,
            0.83,
            0.81,
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
      "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "funk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "articulations": [
        "accented"
      ]
    },
    {
      "id": "r-and-b--funk-horn-section",
      "worldId": "r-and-b",
      "styleIds": [],
      "name": "Horn Section Hits",
      "family": "Brass",
      "category": "groove",
      "description": "Explosive unison brass stabs marking rhythmic",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "brass",
        "trumpet",
        "sax"
      ],
      "approaches": [
        "groove"
      ],
      "instruments": [
        "brass",
        "trumpet",
        "sax"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        6,
        12
      ],
      "accentProfile": [
        1,
        0.95,
        0.9
      ],
      "velocityProfile": [
        1,
        0.9,
        0.85
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "r-and-b--funk-horn-section-v-01",
          "parentPatternId": "r-and-b--funk-horn-section",
          "name": "Horn Section Hits — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            12
          ],
          "accentProfile": [
            0.95,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.92,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        {
          "id": "r-and-b--funk-horn-section-v-02",
          "parentPatternId": "r-and-b--funk-horn-section",
          "name": "Horn Section Hits — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            6,
            12
          ],
          "accentProfile": [
            0.96,
            1,
            0.86
          ],
          "velocityProfile": [
            1,
            0.88,
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
      "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "funk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "articulations": [
        "accented"
      ]
    },
    {
      "id": "r-and-b--funk-soul-bass",
      "worldId": "r-and-b",
      "styleIds": [],
      "name": "Motown Bass",
      "family": "Bass",
      "category": "groove",
      "description": "Melodic James Jamerson style syncopated walking",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "bass"
      ],
      "approaches": [
        "walking"
      ],
      "instruments": [
        "bass"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        4,
        7,
        8,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.75,
        0.9,
        0.85,
        0.7,
        0.95
      ],
      "velocityProfile": [
        0.95,
        0.7,
        0.85,
        0.8,
        0.65,
        0.9
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "r-and-b--funk-soul-bass-v-01",
          "parentPatternId": "r-and-b--funk-soul-bass",
          "name": "Motown Bass — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            7,
            8,
            14
          ],
          "accentProfile": [
            0.95,
            0.7,
            0.85,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.62,
            0.77,
            0.7200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "r-and-b--funk-soul-bass-v-02",
          "parentPatternId": "r-and-b--funk-soul-bass",
          "name": "Motown Bass — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            4,
            7,
            8,
            12,
            14
          ],
          "accentProfile": [
            0.96,
            0.83,
            0.86,
            0.9299999999999999,
            0.6599999999999999,
            1
          ],
          "velocityProfile": [
            1,
            0.6799999999999999,
            0.83,
            0.8600000000000001,
            0.63,
            0.88
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
      "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "funk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "articulations": [
        "accented"
      ]
    },
    {
      "id": "r-and-b--funk-hihat-open",
      "worldId": "r-and-b",
      "styleIds": [],
      "name": "Open Hi-Hat",
      "family": "Drums",
      "category": "groove",
      "description": "Crisp open hi-hat barking on upbeats.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums"
      ],
      "approaches": [
        "groove"
      ],
      "instruments": [
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        1,
        3,
        5,
        7
      ],
      "accentProfile": [
        0.95,
        0.85,
        0.95,
        0.9
      ],
      "velocityProfile": [
        0.9,
        0.8,
        0.9,
        0.85
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "r-and-b--funk-hihat-open-v-01",
          "parentPatternId": "r-and-b--funk-hihat-open",
          "name": "Open Hi-Hat — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            1,
            5,
            7
          ],
          "accentProfile": [
            0.8999999999999999,
            0.7999999999999999,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.8200000000000001,
            0.7200000000000001,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "r-and-b--funk-hihat-open-v-02",
          "parentPatternId": "r-and-b--funk-hihat-open",
          "name": "Open Hi-Hat — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            1,
            3,
            5,
            7
          ],
          "accentProfile": [
            0.9099999999999999,
            0.9299999999999999,
            0.9099999999999999,
            0.98
          ],
          "velocityProfile": [
            0.96,
            0.78,
            0.88,
            0.9099999999999999
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
      "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "funk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "articulations": [
        "accented"
      ]
    },
    {
      "id": "r-and-b--funk-neo-soul-beat",
      "worldId": "r-and-b",
      "styleIds": [],
      "name": "Neo-Soul Drag",
      "family": "Drums",
      "category": "groove",
      "description": "Dilla-style unquantized groove with laid-back snare",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums"
      ],
      "approaches": [
        "groove"
      ],
      "instruments": [
        "drums"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        5,
        8,
        13
      ],
      "accentProfile": [
        1,
        0.9,
        0.75,
        0.95
      ],
      "velocityProfile": [
        0.95,
        0.85,
        0.7,
        0.9
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "r-and-b--funk-neo-soul-beat-v-01",
          "parentPatternId": "r-and-b--funk-neo-soul-beat",
          "name": "Neo-Soul Drag — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            8,
            13
          ],
          "accentProfile": [
            0.95,
            0.85,
            0.7
          ],
          "velocityProfile": [
            0.87,
            0.77,
            0.62
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "r-and-b--funk-neo-soul-beat-v-02",
          "parentPatternId": "r-and-b--funk-neo-soul-beat",
          "name": "Neo-Soul Drag — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            5,
            8,
            13
          ],
          "accentProfile": [
            0.96,
            0.98,
            0.71,
            1
          ],
          "velocityProfile": [
            1,
            0.83,
            0.6799999999999999,
            0.96
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
      "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "funk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "articulations": [
        "accented"
      ]
    },
    {
      "id": "r-and-b--funk-wah-guitar",
      "worldId": "r-and-b",
      "styleIds": [],
      "name": "Wah-Wah Guitar",
      "family": "Guitar",
      "category": "groove",
      "description": "Expressive wah pedal rhythm sweeping through",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "electric-guitar"
      ],
      "approaches": [
        "groove"
      ],
      "instruments": [
        "electric-guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        4,
        7,
        8,
        10,
        12,
        15
      ],
      "accentProfile": [
        0.95,
        0.6,
        0.85,
        0.7,
        0.9,
        0.65,
        0.85,
        0.75
      ],
      "velocityProfile": [
        0.9,
        0.55,
        0.8,
        0.65,
        0.85,
        0.6,
        0.8,
        0.7
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "r-and-b--funk-wah-guitar-v-01",
          "parentPatternId": "r-and-b--funk-wah-guitar",
          "name": "Wah-Wah Guitar — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4,
            7,
            10,
            12
          ],
          "accentProfile": [
            0.8999999999999999,
            0.5499999999999999,
            0.7999999999999999,
            0.6499999999999999,
            0.85
          ],
          "velocityProfile": [
            0.8200000000000001,
            0.47000000000000003,
            0.7200000000000001,
            0.5700000000000001,
            0.77
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
          "id": "r-and-b--funk-wah-guitar-v-02",
          "parentPatternId": "r-and-b--funk-wah-guitar",
          "name": "Wah-Wah Guitar — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            4,
            7,
            8,
            10,
            12,
            15
          ],
          "accentProfile": [
            0.9099999999999999,
            0.6799999999999999,
            0.8099999999999999,
            0.7799999999999999,
            0.86,
            0.73,
            0.8099999999999999,
            0.83
          ],
          "velocityProfile": [
            0.96,
            0.53,
            0.78,
            0.71,
            0.83,
            0.58,
            0.8600000000000001,
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
            -5
          ]
        }
      ],
      "difficulty": 3,
      "weight": 1,
      "provenance": "Funk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "funk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,
      "articulations": [
        "accented"
      ]
    },
    {
      "id": "r-and-b--funk-phrase-13",
      "worldId": "r-and-b",
      "styleIds": [],
      "name": "Vamp Phrase",
      "family": "Vamp",
      "category": "phrasePattern",
      "description": "A phrase-level rhythmic template that leaves",
      "tags": [
        "funk",
        "vamp",
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
      "approaches": [
        "phrase"
      ],
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
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        4,
        7,
        8,
        11,
        12,
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
      "syncopationRating": 0.5,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "breath",
        "phrase-end"
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "r-and-b--funk-phrase-13-v-01",
          "parentPatternId": "r-and-b--funk-phrase-13",
          "name": "Vamp Phrase — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4,
            7,
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
          "id": "r-and-b--funk-phrase-13-v-02",
          "parentPatternId": "r-and-b--funk-phrase-13",
          "name": "Vamp Phrase — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            4,
            7,
            8,
            11,
            12,
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
      "provenance": "GenreDAW catalog rebuild from existing Funk world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "funk",
        "vamp"
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
      "id": "r-and-b--funk-call-14",
      "worldId": "r-and-b",
      "styleIds": [],
      "name": "Break Response",
      "family": "Break",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the",
      "tags": [
        "funk",
        "break",
        "call",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "tenor-sax"
      ],
      "approaches": [
        "phrase"
      ],
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
      "subdivisions": 16,
      "onsetGrid": [
        0,
        1,
        4,
        5,
        8,
        9,
        12,
        13
      ],
      "accentProfile": [
        0.95,
        0.62,
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
        0.62,
        0.95,
        0.57
      ],
      "syncopationRating": 0.5,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "breath",
        "phrase-end"
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
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
          "id": "r-and-b--funk-call-14-v-01",
          "parentPatternId": "r-and-b--funk-call-14",
          "name": "Break Response — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4,
            5,
            9,
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
          "id": "r-and-b--funk-call-14-v-02",
          "parentPatternId": "r-and-b--funk-call-14",
          "name": "Break Response — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            1,
            4,
            5,
            8,
            9,
            12,
            13
          ],
          "accentProfile": [
            0.9099999999999999,
            0.7,
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
            0.6,
            1,
            0.5499999999999999
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
          "id": "r-and-b--funk-call-14-v-03",
          "parentPatternId": "r-and-b--funk-call-14",
          "name": "Break Response — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            0,
            1,
            4,
            5,
            8,
            9,
            12,
            13,
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
            0.6,
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
            0.57,
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
            0,
            -6,
            -6
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Funk world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "funk",
        "break"
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
      "id": "r-and-b--funk-anchor-15",
      "worldId": "r-and-b",
      "styleIds": [],
      "name": "Pocket Anchor",
      "family": "Pocket",
      "category": "ostinato",
      "description": "A repeating anchor that locks the",
      "tags": [
        "funk",
        "pocket",
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
      "approaches": [
        "walking"
      ],
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
        1,
        2,
        5,
        6,
        9,
        10,
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
      "syncopationRating": 1,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "accented"
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
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
          "id": "r-and-b--funk-anchor-15-v-01",
          "parentPatternId": "r-and-b--funk-anchor-15",
          "name": "Pocket Anchor — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            1,
            5,
            6,
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
          "id": "r-and-b--funk-anchor-15-v-02",
          "parentPatternId": "r-and-b--funk-anchor-15",
          "name": "Pocket Anchor — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            1,
            2,
            5,
            6,
            9,
            10,
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
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Funk world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "funk",
        "pocket"
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
      "id": "r-and-b--funk-comp-16",
      "worldId": "r-and-b",
      "styleIds": [],
      "name": "Clav Comping",
      "family": "Clav",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports",
      "tags": [
        "funk",
        "clav",
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
      "approaches": [
        "comping"
      ],
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
        1,
        4,
        6,
        9,
        11,
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
      "syncopationRating": 0.8333333333333334,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "accented"
      ],
      "supportedEnergy": [
        2,
        3,
        4
      ],
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "r-and-b--funk-comp-16-v-01",
          "parentPatternId": "r-and-b--funk-comp-16",
          "name": "Clav Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            1,
            6,
            9,
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
          "id": "r-and-b--funk-comp-16-v-02",
          "parentPatternId": "r-and-b--funk-comp-16",
          "name": "Clav Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            1,
            4,
            6,
            9,
            11,
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
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Funk world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "funk",
        "clav"
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
      "id": "r-and-b--funk--phrasing",
      "worldId": "r-and-b",
      "styleIds": [],
      "name": "Funk Vocal Phrasing",
      "family": "Vocal Phrasing",
      "category": "phrasePattern",
      "description": "Rhythmic vocal hook template that uses",
      "tags": [
        "funk",
        "tenor-sax",
        "vocal-phrasing",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "tenor-sax"
      ],
      "approaches": [
        "phrase"
      ],
      "instruments": [
        "tenor-sax"
      ],
      "compatibleRoles": [
        "tenor-sax",
        "lead"
      ],
      "compatibleInstruments": [
        "tenor-sax"
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
      "supportedEnergy": [
        2,
        3,
        4
      ],
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
          "id": "r-and-b--funk--phrasing-v--alt",
          "parentPatternId": "r-and-b--funk--phrasing",
          "name": "Funk Vocal Phrasing — alternate phrasing",
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
          "id": "r-and-b--funk--phrasing-v-final-accent",
          "parentPatternId": "r-and-b--funk--phrasing",
          "name": "Funk Vocal Phrasing — accent shift",
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
      "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Funk.",
      "authenticityTags": [
        "funk",
        "tenor-sax"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 2,
      "weight": 0.9,
      "enabled": true
    },
    {
      "id": "r-and-b--rnb-pocket-backbeat",
      "worldId": "r-and-b",
      "name": "R&B Pocket Backbeat",
      "shortName": "R&B Pocket Backbeat",
      "family": "r-and-b",
      "category": "groove",
      "description": "Deep backbeat with selective ghosting and enough negative space for vocal syncopation.",
      "tags": [
        "pocket",
        "backbeat",
        "space"
      ],
      "approaches": [
        "pocket",
        "backbeat",
        "space"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "drums",
        "rhythm"
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
        1,
        0.5,
        0.78,
        0.5
      ],
      "styleIds": [],
      "durationGrid": [
        1,
        1,
        1,
        1
      ],
      "articulations": [],
      "variants": [],
      "sourceLevel": "native-genre",
      "canCrossRole": true,
      "authenticityTags": [
        "pocket",
        "backbeat",
        "space"
      ]
    },
    {
      "id": "r-and-b--rnb-chromatic-bass",
      "worldId": "r-and-b",
      "name": "R&B Chromatic Bass",
      "shortName": "R&B Chromatic Bass",
      "family": "r-and-b",
      "category": "groove",
      "description": "Chord-tone bass with chromatic approaches into thirds and roots at phrase turns.",
      "tags": [
        "chromatic",
        "bass",
        "guide-tone"
      ],
      "approaches": [
        "chromatic",
        "bass",
        "guide-tone"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "bass"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        5,
        7,
        8,
        11,
        13,
        15
      ],
      "accentProfile": [
        1,
        0.5,
        0.78,
        0.5,
        1,
        0.5,
        0.78,
        0.5
      ],
      "styleIds": [],
      "durationGrid": [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "articulations": [],
      "variants": [],
      "sourceLevel": "native-genre",
      "canCrossRole": true,
      "authenticityTags": [
        "chromatic",
        "bass",
        "guide-tone"
      ]
    },
    {
      "id": "r-and-b--rnb-neo-soul-comp",
      "worldId": "r-and-b",
      "name": "R&B Syncopated Comp",
      "shortName": "R&B Syncopated Comp",
      "family": "r-and-b",
      "category": "groove",
      "description": "Extended-chord stabs voiced around guide tones and delayed attacks.",
      "tags": [
        "neo-soul",
        "guide-tone",
        "syncopation"
      ],
      "approaches": [
        "neo-soul",
        "guide-tone",
        "syncopation"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "harmony",
        "comp"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        1,
        4,
        6,
        9,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.5,
        0.78,
        0.5,
        1,
        0.5
      ],
      "styleIds": [],
      "durationGrid": [
        1,
        1,
        1,
        1,
        1,
        1
      ],
      "articulations": [],
      "variants": [],
      "sourceLevel": "native-genre",
      "canCrossRole": true,
      "authenticityTags": [
        "neo-soul",
        "guide-tone",
        "syncopation"
      ]
    },
    {
      "id": "r-and-b--rnb-vocal-answer",
      "worldId": "r-and-b",
      "name": "R&B Vocal Answer",
      "shortName": "R&B Vocal Answer",
      "family": "r-and-b",
      "category": "groove",
      "description": "Short melodic response cells occupying intentional gaps after the lead phrase.",
      "tags": [
        "call-response",
        "answer",
        "space"
      ],
      "approaches": [
        "call-response",
        "answer",
        "space"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "melody",
        "lead",
        "voice"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        6,
        7,
        14,
        15
      ],
      "accentProfile": [
        1,
        0.5,
        0.78,
        0.5
      ],
      "styleIds": [],
      "durationGrid": [
        1,
        1,
        1,
        1
      ],
      "articulations": [],
      "variants": [],
      "sourceLevel": "native-genre",
      "canCrossRole": true,
      "authenticityTags": [
        "call-response",
        "answer",
        "space"
      ]
    }
  ],
  "kind": "world",
  "strictness": "flexible"
};
