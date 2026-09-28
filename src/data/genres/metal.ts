import { GenreWorld } from '../../types';

export const METAL_WORLD: GenreWorld = {
  "id": "metal",
  "name": "Metal",
  "family": "Heavy / Amplified",
  "color": "#8c7b83",
  "level": "world",
  "description": "The sonic power of Metal: Iron",
  rhythm: { syncopation: 0.2, swing: 0.0, pocket: 'ahead', pocketDepth: 5 },
  styles: {
    'djent': {
      id: 'djent',
      name: 'Djent / Modern Prog',
      tempoRange: [100, 160]
    }
  },
  "styleDefinitions": [
    {
      "id": "metal-heavy-metal",
      "worldId": "metal",
      "name": "Heavy Metal",
      "origin": "Birmingham, UK",
      "era": "1970s–1980s",
      "description": "Riff-driven • Distorted • Operatic\nThe foundational",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "overdrive-guitar",
        "hand-percussion"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        100,
        140
      ],
      "keySubstyles": [
        "Traditional Heavy Metal",
        "NWOBHM"
      ],
      "coreConcepts": [
        "Tony Iommi iconic heavy power-chord riffing",
        "Steve Harris driving galloping basslines",
        "twin-guitar harmonized melody leads",
        "operatic high-vibrato lead vocals (Bruce Dickinson)"
      ],
      "rhythmicGrammar": [
        "driving 4/4 gallop: eighth note followed by two sixteenth notes [8th-16th-16th]"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Galloping bass and drum rhythm powering twin-guitar harmonized heavy metal lead",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "Em",
          "G",
          "D",
          "Em"
        ],
        "verse": [
          "Em",
          "G",
          "D",
          "Em",
          "C",
          "D",
          "Em",
          "Em"
        ],
        "chorus": [
          "C",
          "D",
          "G",
          "Em",
          "C",
          "D",
          "Em",
          "Em"
        ],
        "solo": [
          "Em",
          "C",
          "D",
          "Em",
          "Em",
          "C",
          "D",
          "B7"
        ],
        "coda": [
          "C",
          "D",
          "Em",
          "Em"
        ]
      }
    },
    {
      "id": "metal-thrash",
      "worldId": "metal",
      "name": "Thrash",
      "origin": "Bay Area, California / Los Angeles",
      "era": "1980s",
      "description": "Fast • Palm-muted • Aggressive\nHigh-speed palm-muted",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "overdrive-guitar",
        "hand-percussion"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        160,
        220
      ],
      "keySubstyles": [
        "Bay Area Thrash",
        "Teutonic Thrash"
      ],
      "coreConcepts": [
        "lightning-fast downpicked palm-muted E-string chugs",
        "skank beats and fast double-kick flurries",
        "ferocious barking vocal delivery",
        "chaotic shredding whammy-bar guitar solos"
      ],
      "rhythmicGrammar": [
        "high-speed 16th-note palm-muted chugging locked with fast alternating skank snare beat"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Machine-gun palm-muted open-E chug erupting into fast skank-beat thrash riff",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "E5",
          "F5",
          "E5",
          "Bb5"
        ],
        "verse": [
          "E5",
          "E5",
          "F5",
          "E5",
          "E5",
          "E5",
          "G5",
          "F#5"
        ],
        "chorus": [
          "C5",
          "D5",
          "E5",
          "E5",
          "C5",
          "D5",
          "E5",
          "E5"
        ],
        "coda": [
          "F5",
          "Bb5",
          "E5",
          "E5"
        ]
      }
    },
    {
      "id": "metal-death-metal",
      "worldId": "metal",
      "name": "Death Metal",
      "origin": "Tampa, Florida / Sweden",
      "era": "Late 1980s–Present",
      "description": "Guttural • Blast Beats • Tremolo\nExtreme",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "overdrive-guitar",
        "hand-percussion"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        180,
        250
      ],
      "keySubstyles": [
        "Florida Death Metal",
        "Stockholm Sound (HM-2)",
        "Technical Death Metal"
      ],
      "coreConcepts": [
        "deep guttural death growl vocals",
        "rapid-fire 16th-note blast beats",
        "down-tuned tremolo-picked chromatic riffs (D/C/B standard)",
        "diminished and augmented dissonant solos"
      ],
      "rhythmicGrammar": [
        "relentless 32nd-note blast beats switching into crushing slow double-kick breakdowns"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Relentless snare blast beat with down-tuned chromatic tremolo guitar riff and guttural growl",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "B5",
          "C5",
          "B5",
          "F5"
        ],
        "verse": [
          "B5",
          "B5",
          "C5",
          "B5",
          "B5",
          "B5",
          "F5",
          "E5"
        ],
        "slam": [
          "B5",
          "B5",
          "B5",
          "B5",
          "C5",
          "B5",
          "F5",
          "E5"
        ],
        "coda": [
          "B5",
          "C5",
          "B5",
          "B5"
        ]
      }
    },
    {
      "id": "metal-black-metal",
      "worldId": "metal",
      "name": "Black Metal",
      "origin": "Norway / Sweden / UK",
      "era": "Early 1990s",
      "description": "Atmospheric • High Shrieks • Tremolo\nIcy",
      "characteristicInstruments": [
        "electric-guitar",
        "drums",
        "bass",
        "overdrive-guitar",
        "synth"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        140,
        210
      ],
      "keySubstyles": [
        "Second Wave Norwegian Black Metal",
        "Atmospheric Black Metal"
      ],
      "coreConcepts": [
        "continuous wall of sound tremolo-picked minor/diminished chords",
        "piercing high-pitched shriek vocals",
        "raw lo-fi necro production aesthetics",
        "atmospheric melancholic Nordic melodies"
      ],
      "rhythmicGrammar": [
        "hypnotic continuous blast beats and fast ride cymbal washes without dynamic compression"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Icy cold tremolo-picked minor chord wall flying over continuous blast beat and piercing shriek",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "Em",
          "C",
          "Am",
          "B7"
        ],
        "verse": [
          "Em",
          "C",
          "Am",
          "B7",
          "Em",
          "G",
          "D",
          "Em"
        ],
        "theme": [
          "C",
          "Em",
          "Am",
          "Em",
          "C",
          "D",
          "Em",
          "Em"
        ],
        "coda": [
          "C",
          "B7",
          "Em",
          "Em"
        ]
      }
    },
    {
      "id": "metal-power-metal",
      "worldId": "metal",
      "name": "Power Metal",
      "origin": "Germany / Finland",
      "era": "1980s–Present",
      "description": "Euphoric • Double-Bass • Fantasy\nHigh-speed soaring",
      "characteristicInstruments": [
        "electric-guitar",
        "drums",
        "bass",
        "synth",
        "overdrive-guitar"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        160,
        210
      ],
      "keySubstyles": [
        "European Power Metal",
        "Symphonic Power Metal"
      ],
      "coreConcepts": [
        "relentless 16th-note double-bass drum drive",
        "high-soaring clean operatic tenor vocals (Michael Kiske)",
        "bright major/modal melodic twin-guitar solos",
        "epic fantasy and mythological lyrical themes"
      ],
      "rhythmicGrammar": [
        "continuous 16th-note double-kick battery with snare cracking on 2 and 4"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "High operatic tenor vocal soaring over blinding double-kick speed and triumphant twin-guitar lead",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "F",
          "G",
          "C"
        ],
        "verse": [
          "Am",
          "F",
          "G",
          "C",
          "Dm",
          "Am",
          "F",
          "G"
        ],
        "chorus": [
          "F",
          "G",
          "C",
          "Am",
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
      "id": "metal-doom-metal",
      "worldId": "metal",
      "name": "Doom Metal",
      "origin": "Birmingham / Maryland / Sweden",
      "era": "1970s–Present",
      "description": "Slow • Heavy • Crushing\nMassive low-tempo",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "overdrive-guitar",
        "hand-percussion"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        50,
        75
      ],
      "keySubstyles": [
        "Epic Doom Metal",
        "Stoner Doom"
      ],
      "coreConcepts": [
        "crushing slow monolithic fuzz/distortion riffs",
        "deep resonant bass rumble",
        "lugubrious operatic or mournful clean vocals",
        "monumental weight and catastrophic tempo"
      ],
      "rhythmicGrammar": [
        "extremely heavy slow 4/4 beat with immense drum hits echoing into cavernous spaces"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Crushing monolithic down-tuned fuzz chord sustaining infinitely over slow thunderous drum strike",
      "grooveMechanics": {
        "swingPercentage": 52,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Em",
          "Bb",
          "A",
          "Em"
        ],
        "verse": [
          "Em",
          "Bb",
          "A",
          "Em",
          "G",
          "F",
          "Em",
          "Em"
        ],
        "chorus": [
          "C",
          "B7",
          "Em",
          "Em",
          "C",
          "B7",
          "Em",
          "Em"
        ],
        "coda": [
          "Bb",
          "A",
          "Em",
          "Em"
        ]
      }
    },
    {
      "id": "metal-sludge",
      "worldId": "metal",
      "name": "Sludge",
      "origin": "New Orleans, Louisiana (NOLA)",
      "era": "Late 1980s–1990s",
      "description": "Grimy • Down-tuned • Hardcore Slowness\nBlack",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "overdrive-guitar",
        "hand-percussion"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        55,
        80
      ],
      "keySubstyles": [
        "NOLA Sludge Metal",
        "Southern Sludge"
      ],
      "coreConcepts": [
        "harsh agonizing vocal screams",
        "down-tuned Southern blues riffs slowed to a crawl",
        "screaming feedback between agonizing riff impacts",
        "gritty swampy misery and despair"
      ],
      "rhythmicGrammar": [
        "sluggish heavy groove shifting unpredictably between dragging doom and sudden punk bursts"
      ],
      "danceTags": [
        "festival-fusion",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Swampy down-tuned blues riff collapsing into screeching feedback and agonized vocal shriek",
      "grooveMechanics": {
        "swingPercentage": 54,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "C#5",
          "D5",
          "C#5",
          "G5"
        ],
        "verse": [
          "C#5",
          "D5",
          "C#5",
          "G5",
          "C#5",
          "E5",
          "D#5",
          "D5"
        ],
        "coda": [
          "C#5",
          "G5",
          "C#5",
          "C#5"
        ]
      }
    },
    {
      "id": "metal-progressive-metal",
      "worldId": "metal",
      "name": "Progressive Metal",
      "origin": "Boston / Sweden / Global",
      "era": "Late 1980s–Present",
      "description": "Technical • Complex Meter • Dynamic\nOdd-time",
      "characteristicInstruments": [
        "electric-guitar",
        "bass",
        "drums",
        "synth",
        "overdrive-guitar"
      ],
      "preferredMeters": [
        "7/8",
        "5/8",
        "9/8",
        "4/4"
      ],
      "tempoRange": [
        110,
        155
      ],
      "keySubstyles": [
        "Djent",
        "Symphonic Prog Metal",
        "Technical Prog"
      ],
      "coreConcepts": [
        "complex shifting odd-time signatures (7/8, 11/8, 13/8)",
        "syncopated palm-muted djent polymetric chugging (8-string guitars)",
        "virtuosic unison guitar/keyboard shred solos",
        "dramatic contrast between acoustic beauty and extreme metal roar"
      ],
      "rhythmicGrammar": [
        "polymetric syncopations over steady quarter-note pulse with surgical double-bass precision"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Djent 8-string polyrhythmic chug executing in 7/8 locked with surgical double-bass drumming",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Dm",
          "Bbmaj7",
          "Gm7",
          "A7alt"
        ],
        "verse": [
          "Dm",
          "Bbmaj7",
          "Gm7",
          "A7alt",
          "Fmaj7",
          "Em7b5",
          "A7alt",
          "Dm"
        ],
        "chorus": [
          "Bbmaj7",
          "C",
          "Dm",
          "Am",
          "Bbmaj7",
          "C",
          "Dm",
          "Dm"
        ],
        "solo": [
          "Dm",
          "Eb",
          "Dm",
          "Eb",
          "Gm",
          "A7alt",
          "Dm",
          "Dm"
        ],
        "coda": [
          "Bbmaj7",
          "A7alt",
          "Dm",
          "Dm"
        ]
      }
    }
  ],
  "substyles": [
    "Heavy Metal",
    "Thrash",
    "Death Metal",
    "Black Metal",
    "Power Metal",
    "Doom Metal",
    "Sludge",
    "Progressive Metal"
  ],
  "artists": [
    "Black Sabbath",
    "Iron Maiden",
    "Metallica",
    "Slayer",
    "Death",
    "Cannibal Corpse",
    "Mayhem",
    "Darkthrone",
    "Helloween",
    "Blind Guardian",
    "Candlemass",
    "Electric Wizard",
    "Eyehategod",
    "Crowbar",
    "Dream Theater",
    "Opeth"
  ],
  "concepts": [
    "the gallop",
    "palm-muting",
    "down-picking precision",
    "double bass kick",
    "djent tone",
    "polymeter",
    "breakdown",
    "twin harmonies"
  ],
  "roles": {
    "rhythmGuitar": [
      "tight palm-muted chugs",
      "gallop figures",
      "polymetric djent syncopations"
    ],
    "leadGuitar": [
      "twin lead harmonized melodies",
      "sweep arpeggios",
      "screaming pinch harmonics"
    ],
    "bass": [
      "distorted pick attack doubling guitars",
      "independent low end foundation"
    ],
    "drums": [
      "double bass drum patterns",
      "blast beats",
      "crushing half-time breakdown snares"
    ]
  },
  "patterns": [
    {
      "id": "metal-gallop-riff",
      "worldId": "metal",
      "styleIds": ["metal-heavy-metal"],
      "name": "The Gallop Rhythm (Iron Maiden / Steve Harris)",
      "family": "Metal Gallop",
      "category": "ostinato",
      "description": "Classic 16th-16th-8th galloping chug on palm-muted",
      "tags": [
        "metal",
        "gallop",
        "thrash",
        "iron-maiden",
        "palm-mute"
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
        "rhythm-guitar",
        "bass",
        "drums"
      ],

      "approaches": ["comping", "walking", "groove"],
      "instruments": [
        "electric-guitar",
        "bass",
        "drums"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        1,
        2,
        4,
        5,
        6,
        8,
        9,
        10,
        12,
        13,
        14
      ],
      "accentProfile": [
        1,
        0.7,
        0.9,
        1,
        0.7,
        0.9,
        1,
        0.7,
        0.9,
        1,
        0.7,
        0.9
      ],
      "velocityProfile": [
        1,
        0.7,
        0.85,
        1,
        0.7,
        0.85,
        1,
        0.7,
        0.85,
        1,
        0.7,
        0.85
      ],
      "articulations": [
        "palm-mute",
        "down-pick"
      ],
      "supportedEnergy": [4, 5],
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
          "id": "metal-double-kick-blast",
          "parentPatternId": "metal-gallop-riff",
          "name": "Continuous 16th Double-Kick Stream",
          "variationType": "dense",
          "probability": 0.5,
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
            0.8,
            0.9,
            0.8,
            1,
            0.8,
            0.9,
            0.8,
            1,
            0.8,
            0.9,
            0.8,
            1,
            0.8,
            0.9,
            0.8
          ],
          "description": "Wall of 16th note double bass"
        },
        {
          "id": "metal-gallop-riff-v-02",
          "parentPatternId": "metal-gallop-riff",
          "name": "The Gallop Rhythm (Iron Maiden / Steve Harris) — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            1,
            2,
            4,
            5,
            6,
            8,
            9,
            10,
            12,
            13,
            14
          ],
          "accentProfile": [
            0.96,
            0.7799999999999999,
            0.86,
            1,
            0.6599999999999999,
            0.98,
            0.96,
            0.7799999999999999,
            0.86,
            1,
            0.6599999999999999,
            0.98
          ],
          "velocityProfile": [
            1,
            0.6799999999999999,
            0.83,
            1,
            0.6799999999999999,
            0.83,
            1,
            0.6799999999999999,
            0.83,
            1,
            0.6799999999999999,
            0.83
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
      "weight": 0.7,
      "provenance": "Metal catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "metal"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,

},
    {
      "id": "metal-djent-chug",
      "worldId": "metal",
      "styleIds": ["metal-progressive-metal"],
      "name": "Djent Polymetric Low Chug",
      "family": "Djent Rhythms",
      "category": "ostinato",
      "description": "Syncopated, unyielding low-tuned palm-muted chugs grouped",
      "tags": [
        "djent",
        "prog-metal",
        "meshuggah",
        "polymeter",
        "chug"
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
        "rhythm-guitar",
        "bass"
      ],

      "approaches": ["comping", "walking"],
      "instruments": [
        "electric-guitar",
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
        11,
        14
      ],
      "accentProfile": [
        1,
        0.9,
        1,
        0.9,
        0.85,
        1
      ],
      "velocityProfile": [
        1,
        0.9,
        1,
        0.9,
        0.85,
        1
      ],
      "articulations": [
        "tight-djent-mute",
        "percussive-strike"
      ],
      "supportedEnergy": [2, 3, 4],
      "phrasePosition": [
        "start",
        "middle"
      ],
      "sectionUsage": [
        "verse",
        "breakdown",
        "solo"
      ],
      "variants": [
        {
          "id": "metal-half-time-breakdown",
          "parentPatternId": "metal-djent-chug",
          "name": "Crushing Half-Time Breakdown",
          "variationType": "breakdown",
          "probability": 0.6,
          "onsetGrid": [
            0,
            6,
            8,
            14
          ],
          "accentProfile": [
            1,
            0.9,
            1,
            0.9
          ],
          "description": "Tempo feel halved with devastating snare"
        },
        {
          "id": "metal-djent-chug-v-02",
          "parentPatternId": "metal-djent-chug",
          "name": "Djent Polymetric Low Chug — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            6,
            9,
            11,
            14
          ],
          "accentProfile": [
            0.96,
            0.98,
            0.96,
            0.98,
            0.8099999999999999,
            1
          ],
          "velocityProfile": [
            1,
            0.88,
            0.98,
            0.96,
            0.83,
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
        }
      ],

      "difficulty": 2,
      "weight": 0.7,
      "provenance": "Metal catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "metal"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,

},
    {
      "id": "metal-blast-beat",
      "worldId": "metal",
      "styleIds": ["metal-heavy-metal"],
      "name": "Blast Beat",
      "family": "Drums",
      "category": "fill",
      "transitionType": "fill",
      "description": "Extremely fast alternating kick and snare",
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
        0.85,
        0.95,
        0.85,
        1,
        0.85,
        0.95,
        0.85,
        1,
        0.85,
        0.95,
        0.85,
        1,
        0.85,
        0.95,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.8,
        0.9,
        0.8,
        0.95,
        0.8,
        0.9,
        0.8,
        0.95,
        0.8,
        0.9,
        0.8,
        0.95,
        0.8,
        0.9,
        0.8
      ],
      "supportedEnergy": [4, 5],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "metal-blast-beat-variant-double-kick-16ths",
          "parentPatternId": "metal-blast-beat",
          "name": "Double Kick 16ths",
          "variationType": "instrumentSpecific",
          "probability": 0.18,
          "description": "Continuous 16th note double bass stream",
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
            0.7,
            0.85,
            0.7,
            0.95,
            0.7,
            0.85,
            0.7,
            1,
            0.7,
            0.85,
            0.7,
            0.95,
            0.7,
            0.85,
            0.7
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.8,
            0.65,
            0.9,
            0.65,
            0.8,
            0.65,
            0.95,
            0.65,
            0.8,
            0.65,
            0.9,
            0.65,
            0.8,
            0.65
          ],
          "constraints": [
            "same genre context",
            "use as an alternate voicing/technique"
          ]
        },
        {
          "id": "metal-blast-beat-variant-tremolo-picking",
          "parentPatternId": "metal-blast-beat",
          "name": "Tremolo Picking",
          "variationType": "instrumentSpecific",
          "probability": 0.18,
          "description": "Fast continuous picking with dynamic shaping",
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
            0.6,
            0.7,
            0.6,
            0.9,
            0.6,
            0.7,
            0.6,
            0.95,
            0.6,
            0.7,
            0.6,
            0.9,
            0.6,
            0.7,
            0.65
          ],
          "velocityProfile": [
            0.95,
            0.55,
            0.65,
            0.55,
            0.85,
            0.55,
            0.65,
            0.55,
            0.9,
            0.55,
            0.65,
            0.55,
            0.85,
            0.55,
            0.65,
            0.6
          ],
          "constraints": [
            "same genre context",
            "use as an alternate voicing/technique"
          ]
        },
        {
          "id": "metal-blast-beat-variant-sweep-picking-solo",
          "parentPatternId": "metal-blast-beat",
          "name": "Sweep Picking Solo",
          "variationType": "instrumentSpecific",
          "probability": 0.18,
          "description": "Fluid high-speed arpeggiated lead guitar run.",
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
            0.65,
            0.7,
            0.75,
            0.8,
            0.85,
            0.9,
            0.95,
            1,
            0.9,
            0.85,
            0.8,
            0.75,
            0.7,
            0.65,
            0.6
          ],
          "velocityProfile": [
            0.95,
            0.6,
            0.65,
            0.7,
            0.75,
            0.8,
            0.85,
            0.9,
            0.95,
            0.85,
            0.8,
            0.75,
            0.7,
            0.65,
            0.6,
            0.55
          ],
          "constraints": [
            "same genre context",
            "use as an alternate voicing/technique"
          ]
        }
      ],

      "difficulty": 5,
      "weight": 1,
      "provenance": "Metal catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "metal"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,

      "articulations": ["accented"]
    },
    {
      "id": "metal-breakdown",
      "worldId": "metal",
      "styleIds": ["metal-progressive-metal"],
      "name": "Breakdown Chug",
      "family": "Guitar",
      "category": "break",
      "transitionType": "fill",
      "description": "Crushing, heavy, syncopated palm-muted chords.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "electric-guitar",
        "bass"
      ],

      "approaches": ["walking"],
      "instruments": [
        "electric-guitar",
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
        14
      ],
      "accentProfile": [
        1,
        0.9,
        0.8,
        0.95,
        1,
        0.85,
        0.95
      ],
      "velocityProfile": [
        1,
        0.85,
        0.75,
        0.9,
        0.95,
        0.8,
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
          "id": "metal-breakdown-v-01",
          "parentPatternId": "metal-breakdown",
          "name": "Breakdown Chug — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4,
            7,
            10,
            14
          ],
          "accentProfile": [
            0.95,
            0.85,
            0.75,
            0.8999999999999999,
            0.95
          ],
          "velocityProfile": [
            0.92,
            0.77,
            0.67,
            0.8200000000000001,
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
          "id": "metal-breakdown-v-02",
          "parentPatternId": "metal-breakdown",
          "name": "Breakdown Chug — accent shift",
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
            14
          ],
          "accentProfile": [
            0.96,
            0.98,
            0.76,
            1,
            0.96,
            0.9299999999999999,
            0.9099999999999999
          ],
          "velocityProfile": [
            1,
            0.83,
            0.73,
            0.96,
            0.9299999999999999,
            0.78,
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

      "difficulty": 2,
      "weight": 1,
      "provenance": "Metal catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "metal"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,

      "articulations": ["accented"]
    },
    {
      "id": "metal-djent-sync",
      "worldId": "metal",
      "styleIds": ["metal-progressive-metal"],
      "name": "Djent Syncopation",
      "family": "Guitar",
      "category": "cadence",
      "transitionType": "fill",
      "description": "Complex syncopated low-register chugging.",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "electric-guitar"
      ],

      "approaches": ["groove"],
      "instruments": [
        "electric-guitar"
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
        13
      ],
      "accentProfile": [
        1,
        0.9,
        0.8,
        0.95,
        0.85,
        1
      ],
      "velocityProfile": [
        0.95,
        0.85,
        0.75,
        0.9,
        0.8,
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
          "id": "metal-djent-sync-v-01",
          "parentPatternId": "metal-djent-sync",
          "name": "Djent Syncopation — sparse variation",
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
            0.85,
            0.75,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.77,
            0.67,
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
          "id": "metal-djent-sync-v-02",
          "parentPatternId": "metal-djent-sync",
          "name": "Djent Syncopation — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            5,
            8,
            11,
            13
          ],
          "accentProfile": [
            0.96,
            0.98,
            0.76,
            1,
            0.8099999999999999,
            1
          ],
          "velocityProfile": [
            1,
            0.83,
            0.73,
            0.96,
            0.78,
            0.9299999999999999
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
      "provenance": "Metal catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "metal"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,

      "articulations": ["accented"]
    },
    {
      "id": "metal-clean-arp",
      "worldId": "metal",
      "styleIds": ["metal-progressive-metal"],
      "name": "Clean Arpeggio",
      "family": "Guitar",
      "category": "groove",
      "description": "Atmospheric clean arpeggiated intro with dynamic",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "electric-guitar",
        "guitar"
      ],

      "approaches": ["chop"],
      "instruments": [
        "electric-guitar",
        "guitar"
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
        0.95,
        0.6,
        0.75,
        0.65,
        0.9,
        0.6,
        0.75,
        0.7
      ],
      "velocityProfile": [
        0.9,
        0.55,
        0.7,
        0.6,
        0.85,
        0.55,
        0.7,
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
          "id": "metal-clean-arp-v-01",
          "parentPatternId": "metal-clean-arp",
          "name": "Clean Arpeggio — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4,
            6,
            10,
            12
          ],
          "accentProfile": [
            0.8999999999999999,
            0.5499999999999999,
            0.7,
            0.6,
            0.85
          ],
          "velocityProfile": [
            0.8200000000000001,
            0.47000000000000003,
            0.62,
            0.52,
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
          "id": "metal-clean-arp-v-02",
          "parentPatternId": "metal-clean-arp",
          "name": "Clean Arpeggio — accent shift",
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
            0.9099999999999999,
            0.6799999999999999,
            0.71,
            0.73,
            0.86,
            0.6799999999999999,
            0.71,
            0.7799999999999999
          ],
          "velocityProfile": [
            0.96,
            0.53,
            0.6799999999999999,
            0.6599999999999999,
            0.83,
            0.53,
            0.76,
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
      "provenance": "Metal catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "metal"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,


      "articulations": ["accented"]
    },
    {
      "id": "metal-bass-gallop",
      "worldId": "metal",
      "styleIds": ["metal-heavy-metal"],
      "name": "Bass Gallop",
      "family": "Bass",
      "category": "groove",
      "description": "Iron Maiden style triplet/gallop feel driving",
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
      "subdivisions": 16,
      "onsetGrid": [
        0,
        2,
        3,
        4,
        6,
        7,
        8,
        10,
        11,
        12,
        14,
        15
      ],
      "accentProfile": [
        1,
        0.7,
        0.85,
        1,
        0.7,
        0.85,
        1,
        0.7,
        0.85,
        1,
        0.7,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.65,
        0.8,
        0.95,
        0.65,
        0.8,
        0.95,
        0.65,
        0.8,
        0.95,
        0.65,
        0.8
      ],
      "supportedEnergy": [4, 5],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "metal-bass-gallop-v-01",
          "parentPatternId": "metal-bass-gallop",
          "name": "Bass Gallop — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
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
            0.95,
            0.6499999999999999,
            0.7999999999999999,
            0.95,
            0.6499999999999999,
            0.7999999999999999,
            0.95,
            0.6499999999999999
          ],
          "velocityProfile": [
            0.87,
            0.5700000000000001,
            0.7200000000000001,
            0.87,
            0.5700000000000001,
            0.7200000000000001,
            0.87,
            0.5700000000000001
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
          "id": "metal-bass-gallop-v-02",
          "parentPatternId": "metal-bass-gallop",
          "name": "Bass Gallop — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            3,
            4,
            6,
            7,
            8,
            10,
            11,
            12,
            14,
            15
          ],
          "accentProfile": [
            0.96,
            0.7799999999999999,
            0.8099999999999999,
            1,
            0.6599999999999999,
            0.9299999999999999,
            0.96,
            0.7799999999999999,
            0.8099999999999999,
            1,
            0.6599999999999999,
            0.9299999999999999
          ],
          "velocityProfile": [
            1,
            0.63,
            0.78,
            1,
            0.63,
            0.78,
            1,
            0.63,
            0.78,
            1,
            0.63,
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
      "provenance": "Metal catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "metal"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,


      "articulations": ["accented"]
    },
    {
      "id": "metal-prog-odd-meter",
      "worldId": "metal",
      "styleIds": ["metal-progressive-metal"],
      "name": "5/8 Riff",
      "family": "Guitar",
      "category": "groove",
      "description": "Odd meter progressive riff in asymmetric",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "electric-guitar"
      ],

      "approaches": ["groove"],
      "instruments": [
        "electric-guitar"
      ],
      "meter": "5/8",
      "cycleLength": 1,
      "subdivisions": 10,
      "onsetGrid": [
        0,
        2,
        4,
        6,
        7
      ],
      "accentProfile": [
        1,
        0.75,
        0.85,
        0.95,
        0.7
      ],
      "velocityProfile": [
        0.95,
        0.7,
        0.8,
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
          "id": "metal-prog-odd-meter-v-01",
          "parentPatternId": "metal-prog-odd-meter",
          "name": "5/8 Riff — sparse variation",
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
            0.7,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.62,
            0.7200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "metal-prog-odd-meter-v-02",
          "parentPatternId": "metal-prog-odd-meter",
          "name": "5/8 Riff — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            4,
            6,
            7
          ],
          "accentProfile": [
            0.96,
            0.83,
            0.8099999999999999,
            1,
            0.6599999999999999
          ],
          "velocityProfile": [
            1,
            0.6799999999999999,
            0.78,
            0.96,
            0.63
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
      "provenance": "Metal catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "metal"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,


      "articulations": ["accented"]
    },
    {
      "id": "metal-groove-metal",
      "worldId": "metal",
      "styleIds": ["metal-heavy-metal"],
      "name": "Groove Metal Riff",
      "family": "Guitar",
      "category": "groove",
      "description": "Mid-tempo swinging heavy riff with biting",
      "tags": [],
      "scopes": [
        "measure"
      ],
      "roles": [
        "electric-guitar"
      ],

      "approaches": ["groove"],
      "instruments": [
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
        0.75,
        0.9,
        0.7,
        0.95,
        0.7,
        0.9,
        0.8
      ],
      "velocityProfile": [
        0.95,
        0.7,
        0.85,
        0.65,
        0.9,
        0.65,
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
          "id": "metal-groove-metal-v-01",
          "parentPatternId": "metal-groove-metal",
          "name": "Groove Metal Riff — sparse variation",
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
            0.7,
            0.85,
            0.6499999999999999,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.62,
            0.77,
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
          "id": "metal-groove-metal-v-02",
          "parentPatternId": "metal-groove-metal",
          "name": "Groove Metal Riff — accent shift",
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
            0.83,
            0.86,
            0.7799999999999999,
            0.9099999999999999,
            0.7799999999999999,
            0.86,
            0.88
          ],
          "velocityProfile": [
            1,
            0.6799999999999999,
            0.83,
            0.71,
            0.88,
            0.63,
            0.9099999999999999,
            0.73
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
      "provenance": "Metal catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "metal"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "swingPercentage": 50,
      "anticipationOffset": 0,

      "articulations": ["accented"]
    },
    {
      "id": "metal-phrase-10",
      "worldId": "metal",
      "styleIds": ["metal-heavy-metal"],
      "name": "Breakdown Phrase",
      "family": "Breakdown",
      "category": "phrasePattern",
      "description": "A phrase-level rhythmic template that leaves",
      "tags": [
        "metal",
        "breakdown",
        "phrase",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "overdrive-guitar"
      ],

      "approaches": ["phrase"],
      "instruments": [
        "overdrive-guitar"
      ],
      "compatibleRoles": [
        "overdrive-guitar"
      ],
      "compatibleInstruments": [
        "overdrive-guitar"
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
        "muted"
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
          "id": "metal-phrase-10-v-01",
          "parentPatternId": "metal-phrase-10",
          "name": "Breakdown Phrase — sparse variation",
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
          "id": "metal-phrase-10-v-02",
          "parentPatternId": "metal-phrase-10",
          "name": "Breakdown Phrase — accent shift",
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
      "provenance": "GenreDAW catalog rebuild from existing Metal world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "metal",
        "breakdown"
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
      "id": "metal-call-11",
      "worldId": "metal",
      "styleIds": ["metal-heavy-metal"],
      "name": "Gallop Response",
      "family": "Gallop",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the",
      "tags": [
        "metal",
        "gallop",
        "call",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "overdrive-guitar"
      ],

      "approaches": ["phrase"],
      "instruments": [
        "overdrive-guitar"
      ],
      "compatibleRoles": [
        "overdrive-guitar"
      ],
      "compatibleInstruments": [
        "overdrive-guitar"
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
      "syncopationRating": 1,
      "anticipationOffset": 0,
      "swingPercentage": 50,
      "articulations": [
        "muted"
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
          "id": "metal-call-11-v-01",
          "parentPatternId": "metal-call-11",
          "name": "Gallop Response — sparse variation",
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
          "id": "metal-call-11-v-02",
          "parentPatternId": "metal-call-11",
          "name": "Gallop Response — accent shift",
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
          "id": "metal-call-11-v-03",
          "parentPatternId": "metal-call-11",
          "name": "Gallop Response — transition variation",
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
      "provenance": "GenreDAW catalog rebuild from existing Metal world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "metal",
        "gallop"
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
      "id": "metal-anchor-12",
      "worldId": "metal",
      "styleIds": ["metal-heavy-metal"],
      "name": "Tremolo Anchor",
      "family": "Tremolo",
      "category": "ostinato",
      "description": "A repeating anchor that locks the",
      "tags": [
        "metal",
        "tremolo",
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
        "muted"
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
          "id": "metal-anchor-12-v-01",
          "parentPatternId": "metal-anchor-12",
          "name": "Tremolo Anchor — sparse variation",
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
          "id": "metal-anchor-12-v-02",
          "parentPatternId": "metal-anchor-12",
          "name": "Tremolo Anchor — accent shift",
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
        }
      ],
      "provenance": "GenreDAW catalog rebuild from existing Metal world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "metal",
        "tremolo"
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
      "id": "metal-comp-13",
      "worldId": "metal",
      "styleIds": ["metal-heavy-metal"],
      "name": "Blast Comping",
      "family": "Blast",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports",
      "tags": [
        "metal",
        "blast",
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
        4,
        8,
        10,
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
        "muted"
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
          "id": "metal-comp-13-v-01",
          "parentPatternId": "metal-comp-13",
          "name": "Blast Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4,
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
          "id": "metal-comp-13-v-02",
          "parentPatternId": "metal-comp-13",
          "name": "Blast Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            4,
            8,
            10,
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
      "provenance": "GenreDAW catalog rebuild from existing Metal world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "metal",
        "blast"
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
      "id": "metal-intro-14",
      "worldId": "metal",
      "styleIds": ["metal-heavy-metal"],
      "name": "Lead Intro",
      "family": "Lead",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish",
      "tags": [
        "metal",
        "lead",
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
        "muted"
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
          "id": "metal-intro-14-v-01",
          "parentPatternId": "metal-intro-14",
          "name": "Lead Intro — sparse variation",
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
          "id": "metal-intro-14-v-02",
          "parentPatternId": "metal-intro-14",
          "name": "Lead Intro — accent shift",
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
          "id": "metal-intro-14-v-03",
          "parentPatternId": "metal-intro-14",
          "name": "Lead Intro — transition variation",
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
            0.98,
            0.72,
            0.88,
            0.66,
            0.98,
            0.72,
            0.88,
            0.66,
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
            0.63,
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
      "provenance": "GenreDAW catalog rebuild from existing Metal world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "metal",
        "lead"
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
      "id": "metal-verse-15",
      "worldId": "metal",
      "styleIds": ["metal-heavy-metal"],
      "name": "Breakdown Verse Variation",
      "family": "Breakdown",
      "category": "groove",
      "description": "A restrained verse variation with intentional",
      "tags": [
        "metal",
        "breakdown",
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
        "muted"
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
          "id": "metal-verse-15-v-01",
          "parentPatternId": "metal-verse-15",
          "name": "Breakdown Verse Variation — sparse variation",
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
          "id": "metal-verse-15-v-02",
          "parentPatternId": "metal-verse-15",
          "name": "Breakdown Verse Variation — accent shift",
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
      "provenance": "GenreDAW catalog rebuild from existing Metal world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "metal",
        "breakdown"
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
      "id": "metal-chorus-16",
      "worldId": "metal",
      "styleIds": ["metal-heavy-metal"],
      "name": "Gallop Chorus Lift",
      "family": "Gallop",
      "category": "sectionPattern",
      "description": "A higher-energy chorus layer that increases",
      "tags": [
        "metal",
        "gallop",
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
      "anticipationOffset": 1,
      "swingPercentage": 50,
      "articulations": [
        "muted"
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
          "id": "metal-chorus-16-v-01",
          "parentPatternId": "metal-chorus-16",
          "name": "Gallop Chorus Lift — sparse variation",
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
          "id": "metal-chorus-16-v-02",
          "parentPatternId": "metal-chorus-16",
          "name": "Gallop Chorus Lift — accent shift",
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
          "id": "metal-chorus-16-v-03",
          "parentPatternId": "metal-chorus-16",
          "name": "Gallop Chorus Lift — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
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
      "provenance": "GenreDAW catalog rebuild from existing Metal world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "metal",
        "gallop"
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
      "id": "metal--phrasing",
      "worldId": "metal",
      "styleIds": ["metal-heavy-metal"],
      "name": "Metal Vocal Phrasing",
      "family": "Vocal Phrasing",
      "category": "phrasePattern",
      "description": "Screamed/clean vocal onset template with accented",
      "tags": [
        "metal",
        "overdrive-guitar",
        "vocal-phrasing",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "overdrive-guitar"
      ],

      "approaches": ["phrase"],
      "instruments": [
        "overdrive-guitar"
      ],
      "compatibleRoles": [
        "overdrive-guitar",
        "lead"
      ],
      "compatibleInstruments": [
        "overdrive-guitar"
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
      "articulations": ["breath"],
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
          "id": "metal--phrasing-v--alt",
          "parentPatternId": "metal--phrasing",
          "name": "Metal Vocal Phrasing — alternate phrasing",
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
          "id": "metal--phrasing-v-final-accent",
          "parentPatternId": "metal--phrasing",
          "name": "Metal Vocal Phrasing — accent shift",
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
      "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Metal.",
      "authenticityTags": [
        "metal",
        "overdrive-guitar"
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
  "signatureCell": "High-speed palm-muted galloping guitar chug locked with double-kick drum and crushing breakdown",
  "grooveMechanics": {
    "swingPercentage": 50,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "pushed"
  },
  "crossLinks": [
    "Metal ↔ Rock",
    "Metal ↔ Classical / Symphonic",
    "Metal ↔ Math Rock"
  ]
};

export const MetalGenre = METAL_WORLD;
