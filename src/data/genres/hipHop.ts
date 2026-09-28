import type { GenreWorld } from '../../types';

export const HIP_HOP_WORLD: GenreWorld = {
  "id": "hip-hop",
  "name": "Global Urban Beat",
  "family": "Urban / Beat-driven Continuum",
  "color": "#8c8c8c",
  "level": "world",
  "description": "Unified global urban beat continuum spanning",
  "styleDefinitions": [
    {
      "id": "hip-hop-boom-bap",
      "worldId": "hip-hop",
      "name": "Boom Bap",
      "origin": "New York City",
      "era": "1990s",
      "description": "Punchy • 4/4 MPC • Head-nod\nGritty",
      "characteristicInstruments": [
        "sampler",
        "drums",
        "bass",
        "turntable",
        "piano"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        86,
        96
      ],
      "keySubstyles": [
        "East Coast Golden Age",
        "SP1200 / MPC60 Boom Bap"
      ],
      "coreConcepts": [
        "12-bit SP-1200 / MPC punchy drum chop",
        "acoustic snare crack on 2 and 4 (the Bap)",
        "heavy filtered jazz bassline sample",
        "intricate multisyllabic lyricism and vocal scratches"
      ],
      "rhythmicGrammar": [
        "swung 16th-note drum swing (MPC 58-62% swing) with heavy kick on 1 and syncopated kick before 3"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Hard vinyl kick-snare pocket with filtered jazz bassline and vocal turntable scratch",
      "grooveMechanics": {
        "swingPercentage": 58,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "swung"
      },
      "sectionProgressions": {
        "intro": [
          "Am7",
          "Dm7",
          "Em7",
          "Am7"
        ],
        "verse": [
          "Am7",
          "Dm7",
          "Em7",
          "Am7",
          "Am7",
          "Dm7",
          "Em7",
          "Am7"
        ],
        "scratch": [
          "Am7",
          "Dm7",
          "Fmaj7",
          "Em7"
        ],
        "coda": [
          "Am7",
          "Dm7",
          "Am7",
          "Am7"
        ]
      }
    },
    {
      "id": "hip-hop-trap",
      "worldId": "hip-hop",
      "name": "Trap",
      "origin": "Atlanta, Georgia",
      "era": "2000s–Present",
      "description": "808 • Fast Hi-Hats • Dark\nRolling",
      "characteristicInstruments": [
        "sub-bass",
        "drums",
        "synth",
        "sampler",
        "piano"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        130,
        160
      ],
      "keySubstyles": [
        "Atlanta Trap",
        "Dark 808 Trap"
      ],
      "coreConcepts": [
        "tuned distorted 808 sub-bass glides",
        "rapid-fire 32nd and 64th-note triplet hi-hat rolls",
        "half-time snare clap on beat 3",
        "dark minor bell/synth melodies"
      ],
      "rhythmicGrammar": [
        "half-time feel: kick on 1, snare clap on 3, with frantic stuttering hi-hat rolls"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Sliding 808 sub-bass pitch glide locked with 32nd-note triplet hi-hat roll and snare on 3",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Fm",
          "Db",
          "Bbm",
          "C7"
        ],
        "verse": [
          "Fm",
          "Db",
          "Bbm",
          "C7",
          "Fm",
          "Db",
          "Bbm",
          "C7"
        ],
        "hook": [
          "Fm",
          "Fm",
          "Db",
          "C7",
          "Fm",
          "Fm",
          "Db",
          "C7"
        ],
        "coda": [
          "Db",
          "C7",
          "Fm",
          "Fm"
        ]
      }
    },
    {
      "id": "hip-hop-lo-fi",
      "worldId": "hip-hop",
      "name": "Lo-Fi",
      "origin": "Tokyo / Internet / Global",
      "era": "2010s–Present",
      "description": "Warm • Vinyl Noise • Relaxed\nJazzy,",
      "characteristicInstruments": [
        "sampler",
        "piano",
        "drums",
        "bass",
        "acoustic-guitar"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        74,
        88
      ],
      "keySubstyles": [
        "Chillhop",
        "Lo-Fi Hip Hop"
      ],
      "coreConcepts": [
        "drunk unquantized J Dilla swing timing",
        "dusty vinyl surface noise and wow/flutter",
        "warm jazz 7th/9th Rhodes and piano chords",
        "mellow sidechain pumping"
      ],
      "rhythmicGrammar": [
        "unquantized loose hi-hats and late snare backbeat creating relaxed human head-nod"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Unquantized drunk kick/snare pocket rolling under warm Rhodes major 7th chord with vinyl crackle",
      "grooveMechanics": {
        "swingPercentage": 62,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Ebmaj7",
          "Cm7",
          "Fm7",
          "Bb7"
        ],
        "verse": [
          "Ebmaj7",
          "Cm7",
          "Fm7",
          "Bb7",
          "Ebmaj7",
          "Cm7",
          "Fm7",
          "Bb7"
        ],
        "chorus": [
          "Abmaj7",
          "Gm7",
          "Fm7",
          "Bb7",
          "Abmaj7",
          "Gm7",
          "Fm7",
          "Ebmaj7"
        ],
        "coda": [
          "Abmaj7",
          "Bb7",
          "Ebmaj7",
          "Ebmaj7"
        ]
      }
    },
    {
      "id": "hip-hop-drill",
      "worldId": "hip-hop",
      "name": "Drill",
      "origin": "Chicago / London / Brooklyn",
      "era": "2010s–Present",
      "description": "Sliding 808s • Syncopated Snare •",
      "characteristicInstruments": [
        "sub-bass",
        "drums",
        "synth",
        "piano",
        "sampler"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        138,
        146
      ],
      "keySubstyles": [
        "UK Drill",
        "Brooklyn Drill",
        "Chicago Drill"
      ],
      "coreConcepts": [
        "extreme sliding 808 sub-bass octaves and pitch bends",
        "syncopated counter-snare on beat 3 and beat 4-and",
        "haunting minor piano/vocal sample loops",
        "aggressive syncopated hi-hat gallop"
      ],
      "rhythmicGrammar": [
        "kick on 1, snare on 3 with delayed secondary snare on 4-and creating iconic drill skip"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Extreme sliding 808 octave jump landing on syncopated counter-snare and hi-hat triplet skip",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "Dm",
          "Bb",
          "Gm",
          "A7"
        ],
        "verse": [
          "Dm",
          "Bb",
          "Gm",
          "A7",
          "Dm",
          "Bb",
          "Gm",
          "A7"
        ],
        "hook": [
          "Dm",
          "Dm",
          "Bb",
          "A7",
          "Dm",
          "Dm",
          "Gm",
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
      "id": "hip-hop-g-funk",
      "worldId": "hip-hop",
      "name": "G-Funk",
      "origin": "Los Angeles / Long Beach, California",
      "era": "1990s",
      "description": "Laid-back • Whiny Synth • Funk",
      "characteristicInstruments": [
        "synth",
        "bass",
        "drums",
        "electric-guitar",
        "sampler"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        88,
        98
      ],
      "keySubstyles": [
        "West Coast G-Funk",
        "Gangsta Rap"
      ],
      "coreConcepts": [
        "high-pitched sine wave portamento synth lead (\"whistle\")",
        "heavy live-sounding P-Funk slap basslines",
        "relaxed laid-back pocket groove",
        "lush female vocal choruses"
      ],
      "rhythmicGrammar": [
        "relaxed 4/4 funk groove with heavy kick, crisp handclap snare, and lazy hi-hat swing"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "High whiny portamento sine synth lead gliding over fat funk bassline and lazy clap backbeat",
      "grooveMechanics": {
        "swingPercentage": 56,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
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
          "B7",
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
      "id": "hip-hop-experimental",
      "worldId": "hip-hop",
      "name": "Experimental",
      "origin": "Sacramento / Los Angeles / Underground",
      "era": "2010s–Present",
      "description": "Abrasive • Industrial • Glitchy\nDistorted avant-garde",
      "characteristicInstruments": [
        "sampler",
        "drums",
        "sub-bass",
        "synth",
        "distortion-guitar"
      ],
      "preferredMeters": [
        "4/4",
        "5/4"
      ],
      "tempoRange": [
        110,
        160
      ],
      "keySubstyles": [
        "Industrial Hip Hop",
        "Glitch Rap",
        "Noise Rap"
      ],
      "coreConcepts": [
        "blown-out digital distortion and clipping",
        "erratic rhythm changes and sudden time signature shifts",
        "aggressive punk vocal screams and frantic flow",
        "anarchic audio collage"
      ],
      "rhythmicGrammar": [
        "fractured industrial percussion colliding with explosive distorted bass hits"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Blown-out distorted sub-kick erupting into frantic glitched industrial noise bursts",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "pushed"
      },
      "sectionProgressions": {
        "intro": [
          "Dm",
          "Dm",
          "Dm",
          "Dm"
        ],
        "verse": [
          "Dm",
          "D#dim",
          "Dm",
          "D#dim"
        ],
        "drop": [
          "Dm",
          "Dm",
          "Bb",
          "C#dim"
        ],
        "coda": [
          "Dm",
          "Dm",
          "Dm",
          "Dm"
        ]
      }
    },
    {
      "id": "hip-hop-cloud-rap",
      "worldId": "hip-hop",
      "name": "Cloud Rap",
      "origin": "Stockholm / Internet / Houston",
      "era": "2010s–Present",
      "description": "Ethereal • Reverb • Dreamy\nSpacey, ambient-sampled",
      "characteristicInstruments": [
        "synth",
        "sampler",
        "sub-bass",
        "drums",
        "piano"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        120,
        140
      ],
      "keySubstyles": [
        "Sad Boys Aesthetic",
        "Vapor Trap",
        "Ambient Trap"
      ],
      "coreConcepts": [
        "heavily washed ambient synth pads and reverb",
        "floating pitched-down vocal samples",
        "half-time slow 808 percussion",
        "melancholic detached delivery"
      ],
      "rhythmicGrammar": [
        "slow half-time trap beat muffled in cavernous reverb with gentle floating hats"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Ethereal vocal chop drowning in massive reverb over soft half-time 808 bass kick",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Dbmaj7",
          "Bbm7",
          "Fm",
          "Ab"
        ],
        "verse": [
          "Dbmaj7",
          "Bbm7",
          "Fm",
          "Ab",
          "Dbmaj7",
          "Bbm7",
          "Fm",
          "Ab"
        ],
        "chorus": [
          "Gbmaj7",
          "Ab",
          "Bbm7",
          "Fm",
          "Gbmaj7",
          "Ab",
          "Dbmaj7",
          "Dbmaj7"
        ],
        "coda": [
          "Gbmaj7",
          "Ab",
          "Dbmaj7",
          "Dbmaj7"
        ]
      }
    },
    {
      "id": "hip-hop-jazz-rap",
      "worldId": "hip-hop",
      "name": "Jazz Rap",
      "origin": "Queens / Brooklyn / Chicago",
      "era": "1990s–Present",
      "description": "Upright Bass • Horns • Conscious\nLyrical",
      "characteristicInstruments": [
        "upright-bass",
        "brass",
        "drums",
        "piano",
        "sampler"
      ],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        88,
        100
      ],
      "keySubstyles": [
        "Native Tongues Sound",
        "Conscious Hip Hop",
        "Neo-Soul Rap"
      ],
      "coreConcepts": [
        "walking acoustic upright basslines",
        "warm trumpet and saxophone horn riffs",
        "extended jazz chords (m9, maj7, 13th)",
        "socially conscious poetic lyricism"
      ],
      "rhythmicGrammar": [
        "deeply swung jazz drum pocket with warm brushed snare and relaxed kick syncopation"
      ],
      "danceTags": [
        "social-partner",
        "wcs-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Warm upright bass walking line locked with jazzy snare rimshot and muted trumpet lick",
      "grooveMechanics": {
        "swingPercentage": 60,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "swung"
      },
      "sectionProgressions": {
        "intro": [
          "Cm9",
          "F13",
          "Bbmaj7",
          "G7b9"
        ],
        "verse": [
          "Cm9",
          "F13",
          "Bbmaj7",
          "G7b9",
          "Cm9",
          "F13",
          "Bbmaj7",
          "G7b9"
        ],
        "chorus": [
          "Ebm9",
          "Ab13",
          "Dbmaj7",
          "G7b9",
          "Cm9",
          "F13",
          "Bbmaj7",
          "Bbmaj7"
        ],
        "coda": [
          "Cm9",
          "F13",
          "Bbmaj7",
          "Bbmaj7"
        ]
      }
    }
  ],
  "substyles": [
    "Boom Bap",
    "Trap",
    "Lo-Fi",
    "Drill",
    "G-Funk",
    "Experimental",
    "Cloud Rap",
    "Jazz Rap"
  ],
  "artists": [
    "DJ Premier",
    "Nas",
    "Future",
    "Metro Boomin",
    "J Dilla",
    "Nujabes",
    "Pop Smoke",
    "Central Cee",
    "Dr. Dre",
    "Snoop Dogg",
    "Death Grips",
    "JPEGMAFIA",
    "Yung Lean",
    "Clams Casino",
    "A Tribe Called Quest",
    "Noname"
  ],
  "concepts": [
    "808 sub glide",
    "dembow riddim [3, 3, 2]",
    "swung 16th-note hi-hat pocket",
    "half-time snare placement",
    "vocal-forward space",
    "chopped sample loops"
  ],
  "roles": {
    "drums": [
      "swung boom-bap break",
      "trap rolled hi-hat kit",
      "dembow kick-snare riddim"
    ],
    "bass": [
      "808 slide & sub bass",
      "sampled upright walking bass",
      "dembow-locked sub pulse"
    ],
    "harmony": [
      "minimal sampled piano loop",
      "dark minor synth pad"
    ],
    "lead": [
      "vocal delivery hook",
      "G-funk synth lead",
      "drill vocal chops"
    ],
    "percussion": [
      "dembow rimshot and conga accents"
    ]
  },
  "patterns": [
    {
      "id": "hiphop-boom-basic",
      "worldId": "hip-hop",
      "styleIds": ["hip-hop-boom-bap"],
      "name": "Boom Bap Basic",
      "family": "Beat",
      "category": "sectionPattern",
      "description": "Classic 90s boom bap beat with",
      "tags": [
        "hip-hop",
        "beat"
      ],
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
        4,
        8,
        12,
        10
      ],
      "accentProfile": [
        1,
        0.95,
        0.85,
        0.95,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.9,
        0.8,
        0.9,
        0.7
      ],
      "supportedEnergy": [1, 2, 3, 4, 5],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus",
        "intro"
      ],
      "variants": [
        {
          "id": "hiphop-boom-basic-v-01",
          "parentPatternId": "hiphop-boom-basic",
          "name": "Boom Bap Basic — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            8,
            12
          ],
          "accentProfile": [
            0.95,
            0.8999999999999999,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.8200000000000001,
            0.7200000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "hiphop-boom-basic-v-02",
          "parentPatternId": "hiphop-boom-basic",
          "name": "Boom Bap Basic — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            4,
            8,
            12,
            10
          ],
          "accentProfile": [
            0.96,
            1,
            0.8099999999999999,
            1,
            0.71
          ],
          "velocityProfile": [
            1,
            0.88,
            0.78,
            0.96,
            0.6799999999999999
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
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "hip-hop"
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
      "id": "hiphop-boom-sync",
      "worldId": "hip-hop",
      "styleIds": ["hip-hop-boom-bap"],
      "name": "Syncopated Kick",
      "family": "Beat",
      "category": "fill",
      "transitionType": "fill",
      "description": "Boom Bap with syncopated 16th kick",
      "tags": [
        "hip-hop",
        "beat"
      ],
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
        4,
        7,
        8,
        11,
        12
      ],
      "accentProfile": [
        1,
        0.95,
        0.8,
        0.9,
        0.75,
        1
      ],
      "velocityProfile": [
        0.95,
        0.9,
        0.75,
        0.85,
        0.7,
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
          "id": "hiphop-boom-sync-v-01",
          "parentPatternId": "hiphop-boom-sync",
          "name": "Syncopated Kick — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            7,
            8,
            12
          ],
          "accentProfile": [
            0.95,
            0.8999999999999999,
            0.75,
            0.85
          ],
          "velocityProfile": [
            0.87,
            0.8200000000000001,
            0.67,
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
          "id": "hiphop-boom-sync-v-02",
          "parentPatternId": "hiphop-boom-sync",
          "name": "Syncopated Kick — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            4,
            7,
            8,
            11,
            12
          ],
          "accentProfile": [
            0.96,
            1,
            0.76,
            0.98,
            0.71,
            1
          ],
          "velocityProfile": [
            1,
            0.88,
            0.73,
            0.9099999999999999,
            0.6799999999999999,
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
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "hip-hop"
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
      "id": "hiphop-trap-basic",
      "worldId": "hip-hop",
      "styleIds": ["hip-hop-trap"],
      "name": "Trap Half-Time",
      "family": "Beat",
      "category": "break",
      "transitionType": "fill",
      "description": "Basic half-time trap beat with booming",
      "tags": [
        "hip-hop",
        "beat"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums",
        "bass"
      ],

      "approaches": ["groove", "walking"],
      "instruments": [
        "drums",
        "bass"
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
        1,
        0.95,
        0.8
      ],
      "velocityProfile": [
        0.95,
        0.9,
        0.75
      ],
      "supportedEnergy": [1, 2],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "hiphop-trap-basic-v-01",
          "parentPatternId": "hiphop-trap-basic",
          "name": "Trap Half-Time — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            14
          ],
          "accentProfile": [
            0.95,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.8200000000000001
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        {
          "id": "hiphop-trap-basic-v-02",
          "parentPatternId": "hiphop-trap-basic",
          "name": "Trap Half-Time — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            8,
            14
          ],
          "accentProfile": [
            0.96,
            1,
            0.76
          ],
          "velocityProfile": [
            1,
            0.88,
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
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "hip-hop"
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
      "id": "hiphop-trap-hats",
      "worldId": "hip-hop",
      "styleIds": ["hip-hop-trap"],
      "name": "Trap Hi-Hats",
      "family": "Beat",
      "category": "cadence",
      "transitionType": "fill",
      "description": "Continuous 16ths with 32nd note hi-hat",
      "tags": [
        "hip-hop",
        "beat"
      ],
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
      "subdivisions": 32,
      "onsetGrid": [
        0,
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20,
        21,
        22,
        24,
        26,
        28,
        30
      ],
      "accentProfile": [
        0.9,
        0.65,
        0.8,
        0.65,
        0.85,
        0.65,
        0.8,
        0.65,
        0.9,
        0.65,
        0.7,
        0.8,
        0.9,
        0.85,
        0.65,
        0.8,
        0.65
      ],
      "velocityProfile": [
        0.85,
        0.55,
        0.75,
        0.55,
        0.8,
        0.55,
        0.75,
        0.55,
        0.85,
        0.55,
        0.6,
        0.7,
        0.85,
        0.8,
        0.55,
        0.75,
        0.55
      ],
      "supportedEnergy": [4, 5],
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
          "id": "hiphop-trap-hats-v-01",
          "parentPatternId": "hiphop-trap-hats",
          "name": "Trap Hi-Hats — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4,
            6,
            10,
            12,
            16,
            18,
            21,
            22,
            26,
            28
          ],
          "accentProfile": [
            0.85,
            0.6,
            0.75,
            0.6,
            0.7999999999999999,
            0.6,
            0.75,
            0.6,
            0.85,
            0.6,
            0.6499999999999999
          ],
          "velocityProfile": [
            0.77,
            0.47000000000000003,
            0.67,
            0.47000000000000003,
            0.7200000000000001,
            0.47000000000000003,
            0.67,
            0.47000000000000003,
            0.77,
            0.47000000000000003,
            0.52
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
          "id": "hiphop-trap-hats-v-02",
          "parentPatternId": "hiphop-trap-hats",
          "name": "Trap Hi-Hats — accent shift",
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
            14,
            16,
            18,
            20,
            21,
            22,
            24,
            26,
            28,
            30
          ],
          "accentProfile": [
            0.86,
            0.73,
            0.76,
            0.73,
            0.8099999999999999,
            0.73,
            0.76,
            0.73,
            0.86,
            0.73,
            0.6599999999999999,
            0.88,
            0.86,
            0.9299999999999999,
            0.61,
            0.88,
            0.61
          ],
          "velocityProfile": [
            0.9099999999999999,
            0.53,
            0.73,
            0.6100000000000001,
            0.78,
            0.53,
            0.81,
            0.53,
            0.83,
            0.6100000000000001,
            0.58,
            0.6799999999999999,
            0.9099999999999999,
            0.78,
            0.53,
            0.81,
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
            -5,
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

      "difficulty": 5,
      "weight": 1,
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "hip-hop"
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
      "id": "hip-hop-sampled-keys",
      "worldId": "hip-hop",
      "styleIds": ["hip-hop-boom-bap"],
      "name": "Sampled Keys Loop",
      "family": "Sample Loop",
      "category": "groove",
      "description": "Looped melodic/harmonic sample role underneath the",
      "tags": [
        "hip-hop",
        "beat",
        "sample-loop"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "harmony"
      ],

      "approaches": ["comping"],
      "instruments": [
        "keys"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 24,
      "onsetGrid": [
        0,
        6,
        12,
        18,
        10
      ],
      "accentProfile": [
        0.9,
        0.85,
        0.8,
        0.9,
        0.7
      ],
      "velocityProfile": [
        0.85,
        0.8,
        0.75,
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
          "id": "hiphop-lofi-v-01",
          "parentPatternId": "hiphop-lofi",
          "name": "Lo-Fi Swing — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            12,
            18
          ],
          "accentProfile": [
            0.85,
            0.7999999999999999,
            0.75
          ],
          "velocityProfile": [
            0.77,
            0.7200000000000001,
            0.67
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "hiphop-lofi-v-02",
          "parentPatternId": "hiphop-lofi",
          "name": "Lo-Fi Swing — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            6,
            12,
            18,
            10
          ],
          "accentProfile": [
            0.86,
            0.9299999999999999,
            0.76,
            0.98,
            0.6599999999999999
          ],
          "velocityProfile": [
            0.9099999999999999,
            0.78,
            0.73,
            0.9099999999999999,
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
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "hip-hop"
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
      ],
      "compatibleRoles": [
        "harmony"
      ],
      "compatibleInstruments": [
        "keys"
      ]
    },
    {
      "id": "hiphop-gfunk",
      "worldId": "hip-hop",
      "styleIds": ["hip-hop-boom-bap"],
      "name": "G-Funk",
      "family": "Beat",
      "category": "groove",
      "description": "Heavy kick and snare with driving",
      "tags": [
        "hip-hop",
        "beat"
      ],
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
        0.65,
        0.95,
        0.65,
        0.9,
        0.65,
        0.95,
        0.7
      ],
      "velocityProfile": [
        0.95,
        0.6,
        0.9,
        0.6,
        0.85,
        0.6,
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
          "id": "hiphop-gfunk-v-01",
          "parentPatternId": "hiphop-gfunk",
          "name": "G-Funk — sparse variation",
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
            0.95,
            0.6,
            0.8999999999999999,
            0.6,
            0.85
          ],
          "velocityProfile": [
            0.87,
            0.52,
            0.8200000000000001,
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
          "id": "hiphop-gfunk-v-02",
          "parentPatternId": "hiphop-gfunk",
          "name": "G-Funk — accent shift",
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
            0.73,
            0.9099999999999999,
            0.73,
            0.86,
            0.73,
            0.9099999999999999,
            0.7799999999999999
          ],
          "velocityProfile": [
            1,
            0.58,
            0.88,
            0.6599999999999999,
            0.83,
            0.58,
            0.96,
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
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "hip-hop"
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
      "id": "hiphop-drill",
      "worldId": "hip-hop",
      "styleIds": ["hip-hop-trap"],
      "name": "Drill Beat",
      "family": "Beat",
      "category": "groove",
      "description": "Syncopated sliding snare/clap placement for drill.",
      "tags": [
        "hip-hop",
        "beat"
      ],
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
        7,
        11,
        14
      ],
      "accentProfile": [
        1,
        0.85,
        0.95,
        0.8
      ],
      "velocityProfile": [
        0.95,
        0.8,
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
          "id": "hiphop-drill-v-01",
          "parentPatternId": "hiphop-drill",
          "name": "Drill Beat — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            11,
            14
          ],
          "accentProfile": [
            0.95,
            0.7999999999999999,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
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
          "id": "hiphop-drill-v-02",
          "parentPatternId": "hiphop-drill",
          "name": "Drill Beat — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            7,
            11,
            14
          ],
          "accentProfile": [
            0.96,
            0.9299999999999999,
            0.9099999999999999,
            0.88
          ],
          "velocityProfile": [
            1,
            0.78,
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
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "hip-hop"
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
      "id": "hiphop-breakbeat",
      "worldId": "hip-hop",
      "styleIds": ["hip-hop-boom-bap"],
      "name": "Old School Break",
      "family": "Beat",
      "category": "groove",
      "description": "Syncopated funk breakbeat style drum groove",
      "tags": [
        "hip-hop",
        "beat"
      ],
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
        4,
        7,
        8,
        10,
        12
      ],
      "accentProfile": [
        1,
        0.78,
        0.98,
        0.72,
        0.88,
        0.82,
        0.96
      ],
      "velocityProfile": [
        0.96,
        0.72,
        0.94,
        0.68,
        0.84,
        0.78,
        0.92
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
          "id": "hiphop-breakbeat-v-01",
          "parentPatternId": "hiphop-breakbeat",
          "name": "Old School Break — sparse variation",
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
            0.73,
            0.9299999999999999,
            0.6699999999999999,
            0.83
          ],
          "velocityProfile": [
            0.88,
            0.64,
            0.86,
            0.6000000000000001,
            0.76
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
          "id": "hiphop-breakbeat-v-02",
          "parentPatternId": "hiphop-breakbeat",
          "name": "Old School Break — accent shift",
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
            12
          ],
          "accentProfile": [
            0.96,
            0.86,
            0.94,
            0.7999999999999999,
            0.84,
            0.8999999999999999,
            0.9199999999999999
          ],
          "velocityProfile": [
            1,
            0.7,
            0.9199999999999999,
            0.74,
            0.82,
            0.76,
            0.98
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
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "hip-hop"
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
      "id": "hiphop-bounce",
      "worldId": "hip-hop",
      "styleIds": ["hip-hop-trap"],
      "name": "Bounce Beat",
      "family": "Beat",
      "category": "groove",
      "description": "New Orleans style bounce rhythm and",
      "tags": [
        "hip-hop",
        "beat"
      ],
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
        0.8,
        0.85,
        0.95,
        0.8,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.75,
        0.8,
        0.9,
        0.75,
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
          "id": "hiphop-bounce-v-01",
          "parentPatternId": "hiphop-bounce",
          "name": "Bounce Beat — sparse variation",
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
            0.75,
            0.7999999999999999,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.67,
            0.7200000000000001,
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
          "id": "hiphop-bounce-v-02",
          "parentPatternId": "hiphop-bounce",
          "name": "Bounce Beat — accent shift",
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
            0.88,
            0.8099999999999999,
            1,
            0.76,
            0.9299999999999999
          ],
          "velocityProfile": [
            1,
            0.73,
            0.78,
            0.96,
            0.73,
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
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "hip-hop"
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
      "id": "hiphop-westcoast",
      "worldId": "hip-hop",
      "styleIds": ["hip-hop-boom-bap"],
      "name": "West Coast",
      "family": "Beat",
      "category": "groove",
      "description": "Syncopated kicks with handclaps and crisp",
      "tags": [
        "hip-hop",
        "beat"
      ],
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
        4,
        7,
        12,
        15
      ],
      "accentProfile": [
        1,
        0.95,
        0.8,
        0.95,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.9,
        0.75,
        0.9,
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
          "id": "hiphop-westcoast-v-01",
          "parentPatternId": "hiphop-westcoast",
          "name": "West Coast — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            7,
            12
          ],
          "accentProfile": [
            0.95,
            0.8999999999999999,
            0.75
          ],
          "velocityProfile": [
            0.87,
            0.8200000000000001,
            0.67
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "hiphop-westcoast-v-02",
          "parentPatternId": "hiphop-westcoast",
          "name": "West Coast — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            4,
            7,
            12,
            15
          ],
          "accentProfile": [
            0.96,
            1,
            0.76,
            1,
            0.71
          ],
          "velocityProfile": [
            1,
            0.88,
            0.73,
            0.96,
            0.6799999999999999
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
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "hip-hop"
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
      "id": "hiphop-neosoul",
      "worldId": "hip-hop",
      "styleIds": ["hip-hop-boom-bap"],
      "name": "Neo-Soul Hip Hop",
      "family": "Beat",
      "category": "groove",
      "description": "Behind the beat snare with organic",
      "tags": [
        "hip-hop",
        "beat"
      ],
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
        5,
        8,
        13
      ],
      "accentProfile": [
        0.9,
        0.85,
        0.8,
        0.85
      ],
      "velocityProfile": [
        0.85,
        0.8,
        0.75,
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
          "id": "hiphop-neosoul-v-01",
          "parentPatternId": "hiphop-neosoul",
          "name": "Neo-Soul Hip Hop — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            8,
            13
          ],
          "accentProfile": [
            0.85,
            0.7999999999999999,
            0.75
          ],
          "velocityProfile": [
            0.77,
            0.7200000000000001,
            0.67
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "hiphop-neosoul-v-02",
          "parentPatternId": "hiphop-neosoul",
          "name": "Neo-Soul Hip Hop — accent shift",
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
            0.86,
            0.9299999999999999,
            0.76,
            0.9299999999999999
          ],
          "velocityProfile": [
            0.9099999999999999,
            0.78,
            0.73,
            0.8600000000000001
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
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "hip-hop"
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
      "id": "hiphop-minimal808",
      "worldId": "hip-hop",
      "styleIds": ["hip-hop-trap"],
      "name": "Minimal 808",
      "family": "Beat",
      "category": "groove",
      "description": "Sparse 808 sub kicks leaving open",
      "tags": [
        "hip-hop",
        "beat"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums",
        "bass"
      ],

      "approaches": ["groove", "walking"],
      "instruments": [
        "drums",
        "bass"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        10,
        14
      ],
      "accentProfile": [
        1,
        0.85,
        0.9
      ],
      "velocityProfile": [
        0.95,
        0.8,
        0.85
      ],
      "supportedEnergy": [1, 2],
      "phrasePosition": [
        "start"
      ],
      "sectionUsage": [
        "verse",
        "chorus"
      ],
      "variants": [
        {
          "id": "hiphop-minimal808-v-01",
          "parentPatternId": "hiphop-minimal808",
          "name": "Minimal 808 — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            14
          ],
          "accentProfile": [
            0.95,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.7200000000000001
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        {
          "id": "hiphop-minimal808-v-02",
          "parentPatternId": "hiphop-minimal808",
          "name": "Minimal 808 — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            10,
            14
          ],
          "accentProfile": [
            0.96,
            0.9299999999999999,
            0.86
          ],
          "velocityProfile": [
            1,
            0.78,
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
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "hip-hop"
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
      "id": "hiphop-dembow-riddim",
      "worldId": "hip-hop",
      "styleIds": ["hip-hop-drill"],
      "name": "Classic Dembow Riddim",
      "family": "Dembow",
      "category": "groove",
      "description": "The heartbeat of global urban Latin",
      "tags": [
        "reggaeton",
        "dembow",
        "drums",
        "latin",
        "beat"
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
        3,
        4,
        6,
        8,
        11,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.88,
        0.95,
        0.88,
        1,
        0.88,
        0.95,
        0.88
      ],
      "velocityProfile": [
        0.95,
        0.82,
        0.92,
        0.82,
        0.95,
        0.82,
        0.92,
        0.82
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
          "id": "hiphop-dembow-riddim-v-01",
          "parentPatternId": "hiphop-dembow-riddim",
          "name": "Classic Dembow Riddim — sparse variation",
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
            0.83,
            0.8999999999999999,
            0.83,
            0.95
          ],
          "velocityProfile": [
            0.87,
            0.74,
            0.8400000000000001,
            0.74,
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
          "id": "hiphop-dembow-riddim-v-02",
          "parentPatternId": "hiphop-dembow-riddim",
          "name": "Classic Dembow Riddim — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            4,
            6,
            8,
            11,
            12,
            14
          ],
          "accentProfile": [
            0.96,
            0.96,
            0.9099999999999999,
            0.96,
            0.96,
            0.96,
            0.9099999999999999,
            0.96
          ],
          "velocityProfile": [
            1,
            0.7999999999999999,
            0.9,
            0.8799999999999999,
            0.9299999999999999,
            0.7999999999999999,
            0.98,
            0.7999999999999999
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
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "hip-hop"
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
      "id": "hiphop-808-glide-bass",
      "worldId": "hip-hop",
      "styleIds": ["hip-hop-trap"],
      "name": "808 Glide & Sub Slide Bass",
      "family": "808 Bass",
      "category": "ostinato",
      "description": "Deep sliding 808 sub bass notes",
      "tags": [
        "trap",
        "808",
        "bass",
        "sub",
        "glide"
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
        6,
        12
      ],
      "accentProfile": [
        1,
        0.85,
        0.9
      ],
      "velocityProfile": [
        0.95,
        0.8,
        0.85
      ],
      "supportedEnergy": [1, 2],
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
          "id": "hiphop-808-glide-bass-v-01",
          "parentPatternId": "hiphop-808-glide-bass",
          "name": "808 Glide & Sub Slide Bass — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            12
          ],
          "accentProfile": [
            0.95,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.7200000000000001
          ],
          "microtimingOffset": [
            -3,
            6
          ]
        },
        {
          "id": "hiphop-808-glide-bass-v-02",
          "parentPatternId": "hiphop-808-glide-bass",
          "name": "808 Glide & Sub Slide Bass — accent shift",
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
            0.9299999999999999,
            0.86
          ],
          "velocityProfile": [
            1,
            0.78,
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
      "weight": 0.7,
      "provenance": "Global Urban Beat catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "hip-hop"
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
      "id": "hip-hop-call-15",
      "worldId": "hip-hop",
      "styleIds": ["hip-hop-boom-bap"],
      "name": "Boom Bap Response",
      "family": "Boom Bap",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the",
      "tags": [
        "hip-hop",
        "boom-bap",
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
          "id": "hip-hop-call-15-v-01",
          "parentPatternId": "hip-hop-call-15",
          "name": "Boom Bap Response — sparse variation",
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
          "id": "hip-hop-call-15-v-02",
          "parentPatternId": "hip-hop-call-15",
          "name": "Boom Bap Response — accent shift",
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
          "id": "hip-hop-call-15-v-03",
          "parentPatternId": "hip-hop-call-15",
          "name": "Boom Bap Response — transition variation",
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
      "provenance": "GenreDAW catalog rebuild from existing Global Urban Beat world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "hip-hop",
        "boom-bap"
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
      "id": "hip-hop-anchor-16",
      "worldId": "hip-hop",
      "styleIds": ["hip-hop-boom-bap"],
      "name": "Sample Chop Anchor",
      "family": "Sample Chop",
      "category": "ostinato",
      "description": "A repeating anchor that locks the",
      "tags": [
        "hip-hop",
        "sample-chop",
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
          "id": "hip-hop-anchor-16-v-01",
          "parentPatternId": "hip-hop-anchor-16",
          "name": "Sample Chop Anchor — sparse variation",
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
          "id": "hip-hop-anchor-16-v-02",
          "parentPatternId": "hip-hop-anchor-16",
          "name": "Sample Chop Anchor — accent shift",
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
      "provenance": "GenreDAW catalog rebuild from existing Global Urban Beat world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "hip-hop",
        "sample-chop"
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
      "id": "hip-hop--phrasing",
      "worldId": "hip-hop",
      "styleIds": ["hip-hop-boom-bap"],
      "name": "Rap Cadence & Hook",
      "family": "Vocal Phrasing",
      "category": "phrasePattern",
      "description": "Rap cadence and hook placement with",
      "tags": [
        "hip-hop",
        "synth",
        "vocal-phrasing",
        "catalog-v2",
        "sample-loop"
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
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        6,
        10,
        12,
        15
      ],
      "accentProfile": [
        1,
        0.65,
        0.8,
        0.58,
        0.95,
        0.7
      ],
      "velocityProfile": [
        0.92,
        0.6,
        0.78,
        0.55,
        0.88,
        0.64
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
          "id": "hip-hop--phrasing-v1",
          "parentPatternId": "hip-hop--phrasing",
          "name": "Rap Cadence & Hook — sparse",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Reduced-density repeat.",
          "onsetGrid": [
            0,
            3,
            10,
            15
          ],
          "accentProfile": [
            1,
            0.65,
            0.95,
            0.7
          ],
          "velocityProfile": [
            0.9,
            0.58,
            0.86,
            0.64
          ]
        },
        {
          "id": "hip-hop--phrasing-v2",
          "parentPatternId": "hip-hop--phrasing",
          "name": "Rap Cadence & Hook — accent shift",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "Shifted emphasis repeat.",
          "onsetGrid": [
            0,
            3,
            6,
            10,
            12,
            15
          ],
          "accentProfile": [
            0.9,
            0.7,
            0.75,
            0.68,
            1,
            0.62
          ],
          "velocityProfile": [
            0.86,
            0.62,
            0.72,
            0.58,
            0.92,
            0.56
          ]
        }
      ],
      "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Global Urban Beat.",
      "authenticityTags": [
        "hip-hop",
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
  "signatureCell": "Dembow riddim [0, 6, 8, 12, 14] & 808 sliding sub-bass",
  "grooveMechanics": {
    "swingPercentage": 54,
    "anticipationOffsetSteps": 1,
    "microtimingFeel": "laid-back"
  },
  "crossLinks": [
    "Global Urban Beat ↔ Afrobeats",
    "Global Urban Beat ↔ Bachata Sensual",
    "Global Urban Beat ↔ Funk"
  ]
};
