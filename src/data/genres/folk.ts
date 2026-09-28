import type { GenreWorld } from '../../types';

export const FOLK_WORLD: GenreWorld = {
  "id": "folk",
  "name": "Folk",
  "family": "Acoustic / Traditional",
  "color": "#DFE2C7",
  "level": "world",
  "description": "Acoustic-driven music centered around storytelling, fingerpicking,",
  "styleDefinitions": [
    {
      "id": "folk-indie-folk",
      "worldId": "folk",
      "name": "Indie Folk",
      "origin": "Pacific Northwest / Global",
      "era": "2000s–Present",
      "description": "Acoustic • 4/4 • Warm Harmonies\nModern",
      "characteristicInstruments": [
        "acoustic-guitar",
        "banjo",
        "upright-bass",
        "piano",
        "drums"
      ],
      "preferredMeters": [
        "4/4",
        "3/4",
        "6/8"
      ],
      "tempoRange": [
        80,
        108
      ],
      "keySubstyles": [
        "Chamber Indie Folk",
        "Freak Folk"
      ],
      "coreConcepts": [
        "rich four-part vocal harmonies",
        "open-tuned fingerpicked acoustic guitars",
        "organic foot-stomps and tambourines",
        "atmospheric reverb textures"
      ],
      "rhythmicGrammar": [
        "warm rolling 4/4 acoustic fingerpicking with gentle bass drum pulses and snare brushes"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Lush 4-part vocal harmony blooming over open-tuned acoustic guitar fingerpicking",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "C",
          "G",
          "Am",
          "F"
        ],
        "verse": [
          "C",
          "G",
          "Am",
          "F",
          "C",
          "G",
          "Am",
          "F"
        ],
        "chorus": [
          "F",
          "C",
          "G",
          "Am",
          "F",
          "C",
          "G",
          "G"
        ],
        "coda": [
          "F",
          "G",
          "C",
          "C"
        ]
      }
    },
    {
      "id": "folk-old-time",
      "worldId": "folk",
      "name": "Old-Time",
      "origin": "Appalachian Mountains, USA",
      "era": "19th Century–Early 20th Century",
      "description": "Clawhammer • Fiddle • Drone\nRaw mountain",
      "characteristicInstruments": [
        "banjo",
        "fiddle",
        "acoustic-guitar",
        "upright-bass",
        "hand-percussion"
      ],
      "preferredMeters": [
        "2/4",
        "4/4"
      ],
      "tempoRange": [
        110,
        136
      ],
      "keySubstyles": [
        "Appalachian Old-Time",
        "Clawhammer Banjo Tune"
      ],
      "coreConcepts": [
        "clawhammer \"bump-ditty\" banjo strumming",
        "fiddle bowing with heavy open-string drones",
        "communal porch-picking feel",
        "modal mountain scales"
      ],
      "rhythmicGrammar": [
        "driving 2/4 clawhammer banjo rhythm locked in close unison with melodic fiddle line"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "just-intonation",
      "signatureCell": "Clawhammer banjo bump-ditty rhythm locked in unison with droning mountain fiddle",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "A",
          "D",
          "E",
          "A"
        ],
        "part-a": [
          "A",
          "D",
          "E",
          "A",
          "A",
          "D",
          "E",
          "A"
        ],
        "part-b": [
          "D",
          "A",
          "E",
          "A",
          "D",
          "A",
          "E",
          "A"
        ],
        "coda": [
          "D",
          "E",
          "A",
          "A"
        ]
      }
    },
    {
      "id": "folk-protest",
      "worldId": "folk",
      "name": "Protest",
      "origin": "Greenwich Village, New York",
      "era": "1960s",
      "description": "Lyrical • Acoustic • Message-driven\nTopical songs",
      "characteristicInstruments": [
        "acoustic-guitar",
        "harmonica",
        "upright-bass",
        "hand-percussion",
        "drums"
      ],
      "preferredMeters": [
        "4/4",
        "3/4"
      ],
      "tempoRange": [
        85,
        115
      ],
      "keySubstyles": [
        "Topical Song Movement",
        "60s Folk Revival"
      ],
      "coreConcepts": [
        "unadorned strummed acoustic guitar",
        "piercing rack harmonica interludes",
        "poetic incisive socio-political lyrics",
        "direct unpolished vocal honesty"
      ],
      "rhythmicGrammar": [
        "straightforward steady strumming pattern prioritizing lyrical intelligibility and narrative cadence"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Strummed acoustic guitar pause followed by piercing rack-harmonica cry between verses",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "G",
          "C",
          "G",
          "D"
        ],
        "verse": [
          "G",
          "C",
          "G",
          "D",
          "G",
          "C",
          "G",
          "D",
          "C",
          "D",
          "G",
          "Em",
          "C",
          "D",
          "G",
          "G"
        ],
        "coda": [
          "C",
          "D",
          "G",
          "G"
        ]
      }
    },
    {
      "id": "folk-psychedelic-folk",
      "worldId": "folk",
      "name": "Psychedelic Folk",
      "origin": "UK / San Francisco",
      "era": "Late 1960s–1970s",
      "description": "Dreamy • Exotic • Expansive\nAcid-tinged mystical",
      "characteristicInstruments": [
        "acoustic-guitar",
        "sitar",
        "flute",
        "hand-percussion",
        "synth"
      ],
      "preferredMeters": [
        "4/4",
        "6/8",
        "free"
      ],
      "tempoRange": [
        75,
        105
      ],
      "keySubstyles": [
        "Acid Folk",
        "Freak Folk",
        "Pagan Folk"
      ],
      "coreConcepts": [
        "unusual non-Western instrumentations (sitar, finger cymbals)",
        "whimsical mystical lyrics",
        "modal and drone-based guitar tunings",
        "airy reverb and tape echo"
      ],
      "rhythmicGrammar": [
        "fluid elastic rhythm shifting organically between free atmospheric washes and gentle circular pulses"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Dreamy acoustic guitar modal drone enveloped in swirling wooden flute and gentle bells",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "intro": [
          "Dm",
          "C",
          "Bb",
          "A7"
        ],
        "verse": [
          "Dm",
          "C",
          "Bb",
          "A7",
          "Dm",
          "C",
          "Bb",
          "A7"
        ],
        "interlude": [
          "F",
          "C",
          "Gm",
          "Dm",
          "Bb",
          "F",
          "A7",
          "A7"
        ],
        "coda": [
          "Bb",
          "A7",
          "Dm",
          "Dm"
        ]
      }
    },
    {
      "id": "folk-anti-folk",
      "worldId": "folk",
      "name": "Anti-Folk",
      "origin": "East Village, New York",
      "era": "1980s–2000s",
      "description": "Quirky • Raw • Irreverent\nPunk attitude",
      "characteristicInstruments": [
        "acoustic-guitar",
        "piano",
        "upright-bass",
        "drums",
        "bass"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        100,
        135
      ],
      "keySubstyles": [
        "NYC Anti-Folk",
        "Lo-Fi Folk Punk"
      ],
      "coreConcepts": [
        "punk DIY irreverence",
        "idiosyncratic witty autobiographical lyrics",
        "ramshackle acoustic energy",
        "unconventional vocal quirks and speak-singing"
      ],
      "rhythmicGrammar": [
        "fast aggressive acoustic guitar strumming with punk downstrokes and simple drum beats"
      ],
      "danceTags": [
        "listening",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Fast energetic acoustic guitar punk strum with quirky conversational vocal delivery",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
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
          "F",
          "G",
          "C",
          "C",
          "F",
          "G",
          "C"
        ],
        "chorus": [
          "F",
          "G",
          "C",
          "Am",
          "F",
          "G",
          "C",
          "C"
        ],
        "coda": [
          "F",
          "G",
          "C",
          "C"
        ]
      }
    },
    {
      "id": "folk-bluegrass",
      "worldId": "folk",
      "name": "Bluegrass",
      "origin": "Appalachia / Kentucky",
      "era": "1940s–Present",
      "description": "High-Speed • Banjo • Chop\nVirtuosic multi-instrumental",
      "characteristicInstruments": [
        "banjo",
        "mandolin",
        "acoustic-guitar",
        "fiddle",
        "upright-bass"
      ],
      "preferredMeters": [
        "2/4",
        "4/4"
      ],
      "tempoRange": [
        130,
        165
      ],
      "keySubstyles": [
        "Progressive Bluegrass",
        "Traditional Bluegrass"
      ],
      "coreConcepts": [
        "blistering acoustic flatpicking guitar runs",
        "driving three-finger Scruggs banjo speed",
        "syncopated mandolin chop on offbeats",
        "tight high-tenor vocal trios"
      ],
      "rhythmicGrammar": [
        "fast 2/4 driving boom-chick bass with percussive mandolin chop on 2 and 4"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Lightning-fast acoustic guitar flatpicking run trading licks with virtuosic banjo roll",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "G",
          "C",
          "D",
          "G"
        ],
        "verse": [
          "G",
          "G",
          "C",
          "G",
          "G",
          "Em",
          "D",
          "G"
        ],
        "chorus": [
          "C",
          "G",
          "D",
          "G",
          "C",
          "G",
          "D",
          "G"
        ],
        "solo": [
          "G",
          "C",
          "D",
          "G"
        ],
        "coda": [
          "C",
          "D",
          "G",
          "G"
        ]
      }
    },
    {
      "id": "folk-neo-traditional",
      "worldId": "folk",
      "name": "Neo-Traditional",
      "origin": "UK / North America",
      "era": "1990s–Present",
      "description": "Pure • Modal • Fingerstyle\nRefined preservation",
      "characteristicInstruments": [
        "acoustic-guitar",
        "upright-bass",
        "fiddle",
        "harmonium",
        "flute"
      ],
      "preferredMeters": [
        "4/4",
        "3/4"
      ],
      "tempoRange": [
        72,
        98
      ],
      "keySubstyles": [
        "British Folk Revival",
        "Traditional Balladry"
      ],
      "coreConcepts": [
        "modal DADGAD guitar fingerpicking",
        "unadorned pure vocal delivery of centuries-old murder ballads",
        "atmospheric harmonium drone",
        "historical authenticity"
      ],
      "rhythmicGrammar": [
        "spacious breathing meter supporting narrative poetry with delicate fingerpicked embellishments"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "just-intonation",
      "signatureCell": "Modal DADGAD acoustic guitar arpeggiation underpinning pure unvarnished vocal ballad",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "G",
          "F",
          "Em"
        ],
        "ballad": [
          "Am",
          "G",
          "Am",
          "Em",
          "F",
          "G",
          "Am",
          "Am"
        ],
        "coda": [
          "F",
          "G",
          "Am",
          "Am"
        ]
      }
    },
    {
      "id": "folk-chamber-folk",
      "worldId": "folk",
      "name": "Chamber Folk",
      "origin": "North America / Europe",
      "era": "2000s–Present",
      "description": "Orchestral • Intricate • Elegant\nAcoustic songwriting",
      "characteristicInstruments": [
        "acoustic-guitar",
        "strings",
        "violin",
        "flute",
        "piano"
      ],
      "preferredMeters": [
        "4/4",
        "7/8",
        "3/4"
      ],
      "tempoRange": [
        80,
        112
      ],
      "keySubstyles": [
        "Orchestral Folk",
        "Baroque Pop Folk"
      ],
      "coreConcepts": [
        "intricate string quartet and woodwind arrangements",
        "plucked violin pizzicati and glockenspiel bells",
        "complex polyphonic counterpoint",
        "literary whimsical song forms"
      ],
      "rhythmicGrammar": [
        "delicate layered acoustic rhythms frequently featuring odd-time signatures (5/4, 7/8) and precise classical articulation"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Pizzicato string counterpoint weaving through fingerpicked acoustic guitar and glockenspiel",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Fmaj7",
          "G",
          "Am",
          "C"
        ],
        "verse": [
          "Fmaj7",
          "G",
          "Am",
          "C",
          "Fmaj7",
          "G",
          "Am",
          "Em"
        ],
        "chorus": [
          "Dm7",
          "Em7",
          "Fmaj7",
          "G",
          "Dm7",
          "Em7",
          "Am",
          "Am"
        ],
        "coda": [
          "Fmaj7",
          "G",
          "Am",
          "Am"
        ]
      }
    }
  ],
  "substyles": [
    "Indie Folk",
    "Old-Time",
    "Protest",
    "Psychedelic Folk",
    "Anti-Folk",
    "Bluegrass",
    "Neo-Traditional",
    "Chamber Folk"
  ],
  "artists": [
    "Fleet Foxes",
    "Bon Iver",
    "Doc Watson",
    "Tommy Jarrell",
    "Bob Dylan",
    "Joan Baez",
    "The Incredible String Band",
    "Devendra Banhart",
    "Moldy Peaches",
    "Regina Spektor",
    "Tony Rice",
    "Béla Fleck",
    "Shirley Collins",
    "Laura Marling",
    "Sufjan Stevens",
    "Andrew Bird"
  ],
  "concepts": [
    "Travis picking",
    "alternating bass",
    "Carter scratch",
    "boom-chuck",
    "ballad form",
    "modal tuning",
    "close vocal harmony"
  ],
  "roles": {
    "guitar": [
      "Travis picking",
      "flatpicking runs",
      "syncopated strumming"
    ],
    "bass": [
      "root-fifth alternating bass",
      "boom-chuck foundation"
    ],
    "violin": [
      "old-time fiddle drones",
      "melodic breaks"
    ],
    "acoustic-guitar": [
      "narrative delivery",
      "high lonesome vocal harmony"
    ]
  },
  "patterns": [
    {
      "id": "folk-travis",
      "worldId": "folk",
      "styleIds": ["folk-singer-songwriter"],
      "name": "Travis Picking",
      "family": "Fingerpicking",
      "category": "phrasePattern",
      "description": "Alternating thumb bass with syncopated treble.",
      "tags": [
        "folk",
        "fingerpicking"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "rhythm-guitar"
      ],

      "approaches": ["groove"],
      "instruments": [
        "guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        4,
        8,
        12,
        6,
        14
      ],
      "accentProfile": [
        1,
        0.85,
        0.95,
        0.85,
        0.75,
        0.8
      ],
      "velocityProfile": [
        0.95,
        0.8,
        0.9,
        0.8,
        0.7,
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
          "id": "folk-travis-variant-clawhammer-feel",
          "parentPatternId": "folk-travis",
          "name": "Clawhammer Feel",
          "variationType": "instrumentSpecific",
          "probability": 0.18,
          "description": "Bum-ditty rhythm translated to guitar. Retained",
          "onsetGrid": [
            0,
            2,
            3,
            4,
            6,
            7
          ],
          "accentProfile": [
            1,
            0.7,
            0.85,
            0.95,
            0.7,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.8,
            0.9,
            0.65,
            0.8
          ],
          "constraints": [
            "same genre context",
            "use as an alternate voicing/technique"
          ]
        },
        {
          "id": "folk-travis-v-02",
          "parentPatternId": "folk-travis",
          "name": "Travis Picking — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            4,
            8,
            12,
            6,
            14
          ],
          "accentProfile": [
            0.96,
            0.9299999999999999,
            0.9099999999999999,
            0.9299999999999999,
            0.71,
            0.88
          ],
          "velocityProfile": [
            1,
            0.78,
            0.88,
            0.8600000000000001,
            0.6799999999999999,
            0.73
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
      "provenance": "Folk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "folk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 52,
      "anticipationOffset": 0,


      "articulations": ["accented"]
    },
    {
      "id": "folk-travis-sync",
      "worldId": "folk",
      "styleIds": ["folk-singer-songwriter"],
      "name": "Syncopated Travis",
      "family": "Fingerpicking",
      "category": "fill",
      "transitionType": "fill",
      "description": "Travis picking with anticipations.",
      "tags": [
        "folk",
        "fingerpicking"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "rhythm-guitar"
      ],

      "approaches": ["groove"],
      "instruments": [
        "guitar"
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
        15
      ],
      "accentProfile": [
        1,
        0.85,
        0.9,
        0.95,
        0.85,
        0.8
      ],
      "velocityProfile": [
        0.95,
        0.8,
        0.85,
        0.9,
        0.8,
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
          "id": "folk-travis-sync-v-01",
          "parentPatternId": "folk-travis-sync",
          "name": "Syncopated Travis — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            7,
            8,
            15
          ],
          "accentProfile": [
            0.95,
            0.7999999999999999,
            0.85,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.7200000000000001,
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
          "id": "folk-travis-sync-v-02",
          "parentPatternId": "folk-travis-sync",
          "name": "Syncopated Travis — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            4,
            7,
            8,
            12,
            15
          ],
          "accentProfile": [
            0.96,
            0.9299999999999999,
            0.86,
            1,
            0.8099999999999999,
            0.88
          ],
          "velocityProfile": [
            1,
            0.78,
            0.83,
            0.96,
            0.78,
            0.73
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
      "provenance": "Folk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "folk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 52,
      "anticipationOffset": 0,

      "articulations": ["accented"]
    },
    {
      "id": "folk-strum-basic",
      "worldId": "folk",
      "styleIds": ["folk-singer-songwriter"],
      "name": "Basic Strum",
      "family": "Strumming",
      "category": "break",
      "transitionType": "fill",
      "description": "Down on beats, up on offbeats.",
      "tags": [
        "folk",
        "strumming"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "rhythm-guitar"
      ],

      "approaches": ["groove"],
      "instruments": [
        "guitar"
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
          "id": "folk-strum-basic-variant-carter-scratch",
          "parentPatternId": "folk-strum-basic",
          "name": "Carter Scratch",
          "variationType": "instrumentSpecific",
          "probability": 0.18,
          "description": "Melody on bass notes followed by",
          "onsetGrid": [
            0,
            2,
            4,
            6
          ],
          "accentProfile": [
            1,
            0.8,
            0.95,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.75,
            0.9,
            0.8
          ],
          "constraints": [
            "same genre context",
            "use as an alternate voicing/technique"
          ]
        },
        {
          "id": "folk-strum-basic-v-02",
          "parentPatternId": "folk-strum-basic",
          "name": "Basic Strum — accent shift",
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
      "provenance": "Folk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "folk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 52,
      "anticipationOffset": 0,

      "articulations": ["accented"]
    },
    {
      "id": "folk-strum-sync",
      "worldId": "folk",
      "styleIds": ["folk-singer-songwriter"],
      "name": "Syncopated Strum",
      "family": "Strumming",
      "category": "cadence",
      "transitionType": "fill",
      "description": "Standard folk syncopated strum (D-D-U-U-D-U).",
      "tags": [
        "folk",
        "strumming"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "rhythm-guitar"
      ],

      "approaches": ["groove"],
      "instruments": [
        "guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        0,
        2,
        5,
        6,
        7
      ],
      "accentProfile": [
        1,
        0.8,
        0.9,
        0.75,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.75,
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
        "chorus",
        "ending",
        "turnaround"
      ],
      "variants": [
        {
          "id": "folk-strum-sync-v-01",
          "parentPatternId": "folk-strum-sync",
          "name": "Syncopated Strum — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            5,
            6
          ],
          "accentProfile": [
            0.95,
            0.75,
            0.85
          ],
          "velocityProfile": [
            0.87,
            0.67,
            0.77
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "folk-strum-sync-v-02",
          "parentPatternId": "folk-strum-sync",
          "name": "Syncopated Strum — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            5,
            6,
            7
          ],
          "accentProfile": [
            0.96,
            0.88,
            0.86,
            0.83,
            0.8099999999999999
          ],
          "velocityProfile": [
            1,
            0.73,
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
      "provenance": "Folk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "folk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 52,
      "anticipationOffset": 0,

      "articulations": ["accented"]
    },
    {
      "id": "folk-waltz",
      "worldId": "folk",
      "styleIds": ["folk-singer-songwriter"],
      "name": "Waltz Strum",
      "family": "Strumming",
      "category": "groove",
      "description": "Bass on 1, strum on 2",
      "tags": [
        "folk",
        "strumming"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "rhythm-guitar"
      ],

      "approaches": ["groove"],
      "instruments": [
        "guitar"
      ],
      "meter": "3/4",
      "cycleLength": 1,
      "subdivisions": 6,
      "onsetGrid": [
        0,
        2,
        4
      ],
      "accentProfile": [
        1,
        0.72,
        0.65
      ],
      "velocityProfile": [
        0.95,
        0.68,
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
          "id": "folk-waltz-v-01",
          "parentPatternId": "folk-waltz",
          "name": "Waltz Strum — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4
          ],
          "accentProfile": [
            0.95,
            0.6699999999999999
          ],
          "velocityProfile": [
            0.87,
            0.6000000000000001
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        {
          "id": "folk-waltz-v-02",
          "parentPatternId": "folk-waltz",
          "name": "Waltz Strum — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            4
          ],
          "accentProfile": [
            0.96,
            0.7999999999999999,
            0.61
          ],
          "velocityProfile": [
            1,
            0.66,
            0.58
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
      "provenance": "Folk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "folk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 52,
      "anticipationOffset": 0,


      "articulations": ["accented"]
    },
    {
      "id": "folk-waltz-pick",
      "worldId": "folk",
      "styleIds": ["folk-singer-songwriter"],
      "name": "Waltz Fingerpick",
      "family": "Fingerpicking",
      "category": "groove",
      "description": "Arpeggio over 3 beats.",
      "tags": [
        "folk",
        "fingerpicking"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "rhythm-guitar"
      ],

      "approaches": ["groove"],
      "instruments": [
        "guitar"
      ],
      "meter": "3/4",
      "cycleLength": 1,
      "subdivisions": 6,
      "onsetGrid": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "accentProfile": [
        1,
        0.65,
        0.75,
        0.85,
        0.7,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.6,
        0.7,
        0.8,
        0.65,
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
          "id": "folk-waltz-pick-v-01",
          "parentPatternId": "folk-waltz-pick",
          "name": "Waltz Fingerpick — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            2,
            3,
            5
          ],
          "accentProfile": [
            0.95,
            0.6,
            0.7,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.52,
            0.62,
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
          "id": "folk-waltz-pick-v-02",
          "parentPatternId": "folk-waltz-pick",
          "name": "Waltz Fingerpick — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            1,
            2,
            3,
            4,
            5
          ],
          "accentProfile": [
            0.96,
            0.73,
            0.71,
            0.9299999999999999,
            0.6599999999999999,
            0.83
          ],
          "velocityProfile": [
            1,
            0.58,
            0.6799999999999999,
            0.8600000000000001,
            0.63,
            0.6799999999999999
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
      "provenance": "Folk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "folk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 52,
      "anticipationOffset": 0,


      "articulations": ["accented"]
    },
    {
      "id": "folk-68-arpeggio",
      "worldId": "folk",
      "styleIds": ["folk-singer-songwriter"],
      "name": "6/8 Arpeggio",
      "family": "Fingerpicking",
      "category": "groove",
      "description": "Rolling 6/8 arpeggio pattern.",
      "tags": [
        "folk",
        "fingerpicking"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "rhythm-guitar"
      ],

      "approaches": ["groove"],
      "instruments": [
        "guitar"
      ],
      "meter": "6/8",
      "cycleLength": 1,
      "subdivisions": 6,
      "onsetGrid": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "accentProfile": [
        1,
        0.6,
        0.7,
        0.9,
        0.65,
        0.7
      ],
      "velocityProfile": [
        0.95,
        0.55,
        0.65,
        0.85,
        0.6,
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
          "id": "folk-68-arpeggio-v-01",
          "parentPatternId": "folk-68-arpeggio",
          "name": "6/8 Arpeggio — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            2,
            3,
            5
          ],
          "accentProfile": [
            0.95,
            0.5499999999999999,
            0.6499999999999999,
            0.85
          ],
          "velocityProfile": [
            0.87,
            0.47000000000000003,
            0.5700000000000001,
            0.77
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "folk-68-arpeggio-v-02",
          "parentPatternId": "folk-68-arpeggio",
          "name": "6/8 Arpeggio — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            1,
            2,
            3,
            4,
            5
          ],
          "accentProfile": [
            0.96,
            0.6799999999999999,
            0.6599999999999999,
            0.98,
            0.61,
            0.7799999999999999
          ],
          "velocityProfile": [
            1,
            0.53,
            0.63,
            0.9099999999999999,
            0.58,
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
      "provenance": "Folk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "folk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 52,
      "anticipationOffset": 0,

      "articulations": ["accented"]
    },
    {
      "id": "folk-fiddle-drone",
      "worldId": "folk",
      "styleIds": ["folk-bluegrass"],
      "name": "Old-Time Fiddle Drone & Shuffle Bow",
      "family": "Fiddle",
      "category": "ostinato",
      "description": "Sustained open-string drone under a rhythmic",
      "tags": [
        "folk",
        "old-time",
        "fiddle"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "violin"
      ],

      "approaches": ["groove"],
      "instruments": [
        "violin"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 12,
      "onsetGrid": [
        0,
        3,
        4,
        6,
        9,
        10
      ],
      "accentProfile": [
        1,
        0.6,
        0.75,
        0.9,
        0.6,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.55,
        0.7,
        0.85,
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
          "id": "folk-fiddle-drone-v-01",
          "parentPatternId": "folk-fiddle-drone",
          "name": "Old-Time Fiddle Drone & Shuffle Bow — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4,
            6,
            10
          ],
          "accentProfile": [
            0.95,
            0.5499999999999999,
            0.7,
            0.85
          ],
          "velocityProfile": [
            0.87,
            0.47000000000000003,
            0.62,
            0.77
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "folk-fiddle-drone-v-02",
          "parentPatternId": "folk-fiddle-drone",
          "name": "Old-Time Fiddle Drone & Shuffle Bow — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            4,
            6,
            9,
            10
          ],
          "accentProfile": [
            0.96,
            0.6799999999999999,
            0.71,
            0.98,
            0.5599999999999999,
            0.83
          ],
          "velocityProfile": [
            1,
            0.53,
            0.6799999999999999,
            0.9099999999999999,
            0.53,
            0.6799999999999999
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
      "provenance": "Folk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "folk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 52,
      "anticipationOffset": 0,

      "articulations": ["accented"]
    },
    {
      "id": "folk-fast-bluegrass",
      "worldId": "folk",
      "styleIds": ["folk-bluegrass"],
      "name": "Fast Bluegrass Drive",
      "family": "Rhythm",
      "category": "groove",
      "description": "Driving 2/4 feel flatpicking rhythm.",
      "tags": [
        "folk",
        "bluegrass"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "rhythm-guitar"
      ],

      "approaches": ["groove"],
      "instruments": [
        "guitar"
      ],
      "meter": "2/4",
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
        0.95,
        0.8
      ],
      "velocityProfile": [
        0.95,
        0.7,
        0.9,
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
          "id": "folk-fast-bluegrass-v-01",
          "parentPatternId": "folk-fast-bluegrass",
          "name": "Fast Bluegrass Drive — sparse variation",
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
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.62,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "folk-fast-bluegrass-v-02",
          "parentPatternId": "folk-fast-bluegrass",
          "name": "Fast Bluegrass Drive — accent shift",
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
            0.9099999999999999,
            0.88
          ],
          "velocityProfile": [
            1,
            0.6799999999999999,
            0.88,
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
      "provenance": "Folk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "folk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 52,
      "anticipationOffset": 0,

      "articulations": ["accented"]
    },
    {
      "id": "folk-driving-8ths",
      "worldId": "folk",
      "styleIds": ["folk-singer-songwriter"],
      "name": "Driving 8ths",
      "family": "Strumming",
      "category": "groove",
      "description": "Continuous 8th note strumming for builds.",
      "tags": [
        "folk",
        "strumming"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "rhythm-guitar"
      ],

      "approaches": ["groove"],
      "instruments": [
        "guitar"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 8,
      "onsetGrid": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ],
      "accentProfile": [
        1,
        0.65,
        0.85,
        0.7,
        0.95,
        0.65,
        0.85,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.6,
        0.8,
        0.65,
        0.9,
        0.6,
        0.8,
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
          "id": "folk-driving-8ths-v-01",
          "parentPatternId": "folk-driving-8ths",
          "name": "Driving 8ths — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            2,
            3,
            5,
            6
          ],
          "accentProfile": [
            0.95,
            0.6,
            0.7999999999999999,
            0.6499999999999999,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.52,
            0.7200000000000001,
            0.5700000000000001,
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
          "id": "folk-driving-8ths-v-02",
          "parentPatternId": "folk-driving-8ths",
          "name": "Driving 8ths — accent shift",
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
            7
          ],
          "accentProfile": [
            0.96,
            0.73,
            0.8099999999999999,
            0.7799999999999999,
            0.9099999999999999,
            0.73,
            0.8099999999999999,
            0.83
          ],
          "velocityProfile": [
            1,
            0.58,
            0.78,
            0.71,
            0.88,
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
      "provenance": "Folk catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "folk"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 52,
      "anticipationOffset": 0,

      "articulations": ["accented"]
    },
    {
      "id": "folk-roster-bass",
      "worldId": "folk",
      "styleIds": ["folk-singer-songwriter"],
      "name": "Folk bass part",
      "family": "Flatpick",
      "category": "rolePattern",
      "description": "A default-roster coverage pattern that gives",
      "tags": [
        "folk",
        "flatpick",
        "roster",
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
        3,
        6,
        9,
        12
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
      "syncopationRating": 0.6,
      "anticipationOffset": 0,
      "swingPercentage": 52,
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
          "id": "folk-roster-11-v-01",
          "parentPatternId": "folk-roster-11",
          "name": "Flatpick Texture — sparse variation",
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
          "id": "folk-roster-11-v-02",
          "parentPatternId": "folk-roster-11",
          "name": "Flatpick Texture — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            6,
            9,
            12
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
      "provenance": "GenreDAW catalog rebuild from existing Folk world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "folk",
        "flatpick"
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
      "id": "folk-roster-",
      "worldId": "folk",
      "styleIds": ["folk-singer-songwriter"],
      "name": "Folk  part",
      "family": "Banjo Roll",
      "category": "rolePattern",
      "description": "A default-roster coverage pattern that gives",
      "tags": [
        "folk",
        "banjo-roll",
        "roster",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "acoustic-guitar"
      ],

      "approaches": ["phrase"],
      "instruments": [
        "acoustic-guitar"
      ],
      "compatibleRoles": [
        "acoustic-guitar"
      ],
      "compatibleInstruments": [
        "acoustic-guitar"
      ],
      "canCrossRole": true,
      "meter": "6/8",
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
      "swingPercentage": 52,
      "articulations": ["breath"],
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
          "id": "folk-roster-12-v-01",
          "parentPatternId": "folk-roster-12",
          "name": "Banjo Roll Texture — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            1,
            7,
            10
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
          "id": "folk-roster-12-v-02",
          "parentPatternId": "folk-roster-12",
          "name": "Banjo Roll Texture — accent shift",
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
      "provenance": "GenreDAW catalog rebuild from existing Folk world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "folk",
        "banjo-roll"
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
      "id": "folk-call-13",
      "worldId": "folk",
      "styleIds": ["folk-singer-songwriter"],
      "name": "Fiddle Break Response",
      "family": "Fiddle Break",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the",
      "tags": [
        "folk",
        "fiddle-break",
        "call",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "acoustic-guitar"
      ],

      "approaches": ["phrase"],
      "instruments": [
        "acoustic-guitar"
      ],
      "compatibleRoles": [
        "acoustic-guitar"
      ],
      "compatibleInstruments": [
        "acoustic-guitar"
      ],
      "canCrossRole": true,
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
      "swingPercentage": 52,
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
          "id": "folk-call-13-v-01",
          "parentPatternId": "folk-call-13",
          "name": "Fiddle Break Response — sparse variation",
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
          "id": "folk-call-13-v-02",
          "parentPatternId": "folk-call-13",
          "name": "Fiddle Break Response — accent shift",
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
          "id": "folk-call-13-v-03",
          "parentPatternId": "folk-call-13",
          "name": "Fiddle Break Response — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            1,
            4,
            7,
            10,
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
      "provenance": "GenreDAW catalog rebuild from existing Folk world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "folk",
        "fiddle-break"
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
      "id": "folk-anchor-14",
      "worldId": "folk",
      "styleIds": ["folk-singer-songwriter"],
      "name": "Vocal Harmony Anchor",
      "family": "Vocal Harmony",
      "category": "ostinato",
      "description": "A repeating anchor that locks the",
      "tags": [
        "folk",
        "vocal-harmony",
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
        5,
        8,
        11,
        14
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
      "swingPercentage": 52,
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
          "id": "folk-anchor-14-v-01",
          "parentPatternId": "folk-anchor-14",
          "name": "Vocal Harmony Anchor — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            2,
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
          "id": "folk-anchor-14-v-02",
          "parentPatternId": "folk-anchor-14",
          "name": "Vocal Harmony Anchor — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            2,
            5,
            8,
            11,
            14
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
      "provenance": "GenreDAW catalog rebuild from existing Folk world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "folk",
        "vocal-harmony"
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
      "id": "folk-comp-15",
      "worldId": "folk",
      "styleIds": ["folk-singer-songwriter"],
      "name": "Fingerpick Comping",
      "family": "Fingerpick",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports",
      "tags": [
        "folk",
        "fingerpick",
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
        0,
        2,
        4
      ],
      "accentProfile": [
        1,
        0.74,
        0.9
      ],
      "velocityProfile": [
        1,
        0.69,
        0.9
      ],
      "syncopationRating": 0.3333333333333333,
      "anticipationOffset": 0,
      "swingPercentage": 52,
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
          "id": "folk-comp-15-v-01",
          "parentPatternId": "folk-comp-15",
          "name": "Fingerpick Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4
          ],
          "accentProfile": [
            0.95,
            0.69
          ],
          "velocityProfile": [
            0.92,
            0.61
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        {
          "id": "folk-comp-15-v-02",
          "parentPatternId": "folk-comp-15",
          "name": "Fingerpick Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            4
          ],
          "accentProfile": [
            0.96,
            0.82,
            0.86
          ],
          "velocityProfile": [
            1,
            0.6699999999999999,
            0.88
          ],
          "microtimingOffset": [
            2,
            -5,
            2
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Folk world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "folk",
        "fingerpick"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 1,
      "weight": 1,
      "enabled": true
    },
    {
      "id": "folk-intro-16",
      "worldId": "folk",
      "styleIds": ["folk-singer-songwriter"],
      "name": "Flatpick Intro",
      "family": "Flatpick",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish",
      "tags": [
        "folk",
        "flatpick",
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
      "meter": "6/8",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        1,
        4,
        6,
        8,
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
      "syncopationRating": 0.5,
      "anticipationOffset": 0,
      "swingPercentage": 52,
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
          "id": "folk-intro-16-v-01",
          "parentPatternId": "folk-intro-16",
          "name": "Flatpick Intro — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
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
          "id": "folk-intro-16-v-02",
          "parentPatternId": "folk-intro-16",
          "name": "Flatpick Intro — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            1,
            4,
            6,
            8,
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
          "id": "folk-intro-16-v-03",
          "parentPatternId": "folk-intro-16",
          "name": "Flatpick Intro — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            0,
            1,
            4,
            6,
            8,
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
      "provenance": "GenreDAW catalog rebuild from existing Folk world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "folk",
        "flatpick"
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
      "id": "folk-verse-17",
      "worldId": "folk",
      "styleIds": ["folk-singer-songwriter"],
      "name": "Banjo Roll Verse Variation",
      "family": "Banjo Roll",
      "category": "groove",
      "description": "A restrained verse variation with intentional",
      "tags": [
        "folk",
        "banjo-roll",
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
        "guitar"
      ],
      "compatibleRoles": [
        "pulse",
        "rhythm-guitar",
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
        1,
        2,
        5,
        7,
        9,
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
      "syncopationRating": 0.875,
      "anticipationOffset": 0,
      "swingPercentage": 52,
      "articulations": ["accented"],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "middle"
      ],
      "sectionUsage": [
        "verse"
      ],


      "variants": [
        {
          "id": "folk-verse-17-v-01",
          "parentPatternId": "folk-verse-17",
          "name": "Banjo Roll Verse Variation — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            1,
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
          "id": "folk-verse-17-v-02",
          "parentPatternId": "folk-verse-17",
          "name": "Banjo Roll Verse Variation — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            1,
            2,
            5,
            7,
            9,
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
      "provenance": "GenreDAW catalog rebuild from existing Folk world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "folk",
        "banjo-roll"
      ],
      "danceTags": [
        "listening",
        "social-partner"
      ],
      "tuningSystem": "12-tet",
      "difficulty": 3,
      "weight": 1,
      "enabled": true
    }
  ],
  "tuningSystem": "12-tet",
  "signatureCell": "Alternating thumb Travis picking with syncopated treble melody and open chords",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "crossLinks": [
    "Folk ↔ Country",
    "Folk ↔ Blues",
    "Folk ↔ Rock"
  ]
};
