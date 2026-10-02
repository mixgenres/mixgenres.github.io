import type { GenreWorld } from '../../schema';
import { DRUM_AND_BASS_STYLES, DRUM_AND_BASS_WORLD_DETAILS } from './standalone';

/** Standalone authored definition for Drum & Bass. */
const DRUM_AND_BASS_WORLD_BASE: GenreWorld = {
  "id": "drum-and-bass",
  "name": "Drum & Bass",
  "family": "Electronic / Dance",
  "color": "#C7E2E0",
  "level": "world",
  "description": "Synthesizer and drum machine driven music",
  "substyles": [
    "Downtempo",
    "Trip-Hop",
    "IDM",
    "Dubstep",
    "Garage",
    "Synthwave",
    "Ambient",
    "Techno"
  ],
  "artists": [
    "Bonobo",
    "Tycho",
    "Massive Attack",
    "Portishead",
    "Aphex Twin",
    "Boards of Canada",
    "Burial",
    "Skream",
    "MJ Cole",
    "Todd Edwards",
    "Kavinsky",
    "The Midnight",
    "Brian Eno",
    "Stars of the Lid",
    "Juan Atkins",
    "Jeff Mills"
  ],
  "concepts": [
    "four-on-the-floor",
    "sidechain compression",
    "filter sweeps",
    "breakbeat chopping",
    "wobble bass",
    "risers and drops",
    "arpeggiation"
  ],
  "crossLinks": [
    "Electronic ↔ Hip-Hop",
    "Electronic ↔ Rock",
    "Electronic ↔ Funk"
  ],
  "roles": {
    "drums": [
      "four-on-the-floor kick",
      "open offbeat hats",
      "breakbeats"
    ],
    "bass": [
      "sub-bass rumble",
      "acid synth bass",
      "reese bass"
    ],
    "synth": [
      "chord stabs",
      "supersaw leads",
      "ambient pads"
    ]
  },
  "tuningSystem": "12-tet",
  "signatureCell": "Driving four-on-the-floor kick with open offbeat hi-hat and pumping sidechain bass",
  "grooveMechanics": {
    "swingPercentage": 52,
    "anticipationOffsetSteps": 0,
    "microtimingFeel": "straight"
  },
  "styleDefinitions": [
    {
      "id": "drum-and-bass-downtempo",
      "worldId": "drum-and-bass",
      "name": "Downtempo",
      "origin": "Bristol / Vienna / Ibiza",
      "era": "1990s–Present",
      "description": "Chilled • 4/4 • Atmospheric\nRelaxed, lush",
      "characteristicInstruments": ["synth", "drums", "bass", "sampler", "guitar"],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        80,
        100
      ],
      "keySubstyles": [
        "Chillout",
        "Lush Organic Downtempo"
      ],
      "coreConcepts": [
        "spacious warm synth pads",
        "organic percussion textures (shakers, foley)",
        "relaxed unhurried drum groove",
        "melodic acoustic/electronic hybridity"
      ],
      "rhythmicGrammar": [
        "relaxed half-time or unhurried 4/4 with soft sidechain compression breathing"
      ],
      "danceTags": [
        "listening",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Lush filtering synth pad over relaxed acoustic drum loop and deep sub-bass",
      "grooveMechanics": {
        "swingPercentage": 52,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
      },
      "sectionProgressions": {
        "intro": [
          "Am7",
          "Fmaj7",
          "C",
          "G"
        ],
        "verse": [
          "Am7",
          "Fmaj7",
          "C",
          "G",
          "Am7",
          "Fmaj7",
          "C",
          "G"
        ],
        "chorus": [
          "Fmaj7",
          "G",
          "Am7",
          "Em7",
          "Fmaj7",
          "G",
          "Am7",
          "Am7"
        ],
        "coda": [
          "Fmaj7",
          "G",
          "Am7",
          "Am7"
        ]
      }
    },
    {
      "id": "drum-and-bass-trip-hop",
      "worldId": "drum-and-bass",
      "name": "Trip-Hop",
      "origin": "Bristol, UK",
      "era": "1990s",
      "description": "Moody • Cinematic • Heavy\nSlow hip-hop",
      "characteristicInstruments": ["drums", "bass", "sampler", "synth", "string-ensemble"],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        74,
        90
      ],
      "keySubstyles": [
        "Bristol Sound",
        "Cinematic Trip Hop"
      ],
      "coreConcepts": [
        "heavy detuned hip-hop drum breaks",
        "haunting vinyl scratches and tape hiss",
        "dark minor string arrangements",
        "smoky sultry vocals"
      ],
      "rhythmicGrammar": [
        "heavy slow breakbeat with prominent sub-bass rumble and offbeat ghost snares"
      ],
      "danceTags": [
        "listening",
        "blues-fusion-compatible"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Heavy vinyl-crackle breakbeat dropping under haunting minor string ostinato",
      "grooveMechanics": {
        "swingPercentage": 54,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "laid-back"
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
        "chorus": [
          "Bb",
          "C",
          "Dm",
          "Dm",
          "Bb",
          "C",
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
      "id": "drum-and-bass-idm",
      "worldId": "drum-and-bass",
      "name": "IDM",
      "origin": "UK / Europe",
      "era": "1990s–Present",
      "description": "Complex • Glitchy • Brain Dance\nIntricate",
      "characteristicInstruments": ["sampler", "synth", "drums", "synth", "synth"],
      "preferredMeters": [
        "4/4",
        "7/8"
      ],
      "tempoRange": [
        110,
        160
      ],
      "keySubstyles": [
        "Intelligent Dance Music",
        "Braindance",
        "Glitch"
      ],
      "coreConcepts": [
        "micro-edited drum glitching (Amen chop)",
        "haunting analog synth nostalgia",
        "irregular rhythmic drill rolls",
        "unexpected harmonic detuning"
      ],
      "rhythmicGrammar": [
        "polymetric micro-sliced drum samples shifting across unpredictable subdivisions"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Micro-edited 64th-note glitch drum roll juxtaposed with warm melancholic synth chord",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Ebmaj7",
          "Cm7",
          "Abmaj7",
          "Bb"
        ],
        "verse": [
          "Ebmaj7",
          "Cm7",
          "Abmaj7",
          "Bb",
          "Fm7",
          "Gm7",
          "Abmaj7",
          "Bb"
        ],
        "coda": [
          "Abmaj7",
          "Bb",
          "Ebmaj7",
          "Ebmaj7"
        ]
      }
    },
    {
      "id": "drum-and-bass-dubstep",
      "worldId": "drum-and-bass",
      "name": "Dubstep",
      "origin": "Croydon, South London",
      "era": "2000s",
      "description": "Heavy Sub • Half-step • Dark\n140",
      "characteristicInstruments": ["synth", "drums", "synth", "sampler"],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        138,
        144
      ],
      "keySubstyles": [
        "Deep Dubstep",
        "UK Garage Roots Dubstep"
      ],
      "coreConcepts": [
        "massive 40Hz sub-bass pressure",
        "half-time snare drop on beat 3",
        "space, silence, and dub delay feedback",
        "shuffling 2-step hi-hats"
      ],
      "rhythmicGrammar": [
        "half-time beat: kick on 1, snare crack on 3, surrounded by spacious delay tails"
      ],
      "danceTags": [
        "festival-fusion",
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Snare crack on beat 3 with massive filtered sub-bass sweep and vinyl crackle",
      "grooveMechanics": {
        "swingPercentage": 52,
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
        "drop": [
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
      "id": "drum-and-bass-garage",
      "worldId": "drum-and-bass",
      "name": "Garage",
      "origin": "London, UK",
      "era": "Late 1990s–Present",
      "description": "Skippy • 2-Step • Vocal chops\nSyncopated",
      "characteristicInstruments": ["drums", "bass", "synth", "sampler", "piano"],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        130,
        138
      ],
      "keySubstyles": [
        "UK 2-Step",
        "Speed Garage",
        "Future Garage"
      ],
      "coreConcepts": [
        "skippy syncopated 2-step kick/snare pattern",
        "deep warped basslines (donk/ Reese)",
        "chopped pitched-up vocal micro-samples",
        "bright house piano chords"
      ],
      "rhythmicGrammar": [
        "shuffled 16th-note hi-hats with kick on 1 and displaced syncopated second kick"
      ],
      "danceTags": [
        "social-partner",
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Skippy 2-step kick syncopation with snappy pitched vocal slice and deep Reese bass",
      "grooveMechanics": {
        "swingPercentage": 58,
        "anticipationOffsetSteps": 1,
        "microtimingFeel": "swung"
      },
      "sectionProgressions": {
        "intro": [
          "Dbmaj7",
          "Ebm7",
          "Fm7",
          "Gbmaj7"
        ],
        "verse": [
          "Dbmaj7",
          "Ebm7",
          "Fm7",
          "Gbmaj7",
          "Bbm7",
          "Ab",
          "Gbmaj7",
          "Gbmaj7"
        ],
        "chorus": [
          "Gbmaj7",
          "Ab",
          "Bbm7",
          "Fm7",
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
      "id": "drum-and-bass-synthwave",
      "worldId": "drum-and-bass",
      "name": "Synthwave",
      "origin": "France / USA / Internet",
      "era": "2000s–Present",
      "description": "80s Nostalgia • Arpeggios • Gated",
      "characteristicInstruments": ["synth", "drums", "bass", "guitar", "synth"],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        100,
        128
      ],
      "keySubstyles": [
        "Outrun",
        "Darksynth",
        "Dreamwave"
      ],
      "coreConcepts": [
        "relentless 16th-note bass arpeggios",
        "gated reverb snare hits",
        "soaring lead synthesizer melodies",
        "80s action film nostalgic mood"
      ],
      "rhythmicGrammar": [
        "four-on-the-floor kick with massive gated snare on 2 and 4 and 16th synth bass chug"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Driving 16th-note analog synth bass arp driving into massive gated reverb snare",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Am",
          "F",
          "C",
          "G"
        ],
        "verse": [
          "Am",
          "F",
          "C",
          "G",
          "Am",
          "F",
          "C",
          "G"
        ],
        "chorus": [
          "F",
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
      "id": "drum-and-bass-ambient",
      "worldId": "drum-and-bass",
      "name": "Ambient",
      "origin": "UK / Global",
      "era": "1970s–Present",
      "description": "Timbral • Beatless • Expansive\nSubtle sonic",
      "characteristicInstruments": ["synth", "sampler", "synth", "string-ensemble", "piano"],
      "preferredMeters": [
        "free"
      ],
      "tempoRange": [
        40,
        60
      ],
      "keySubstyles": [
        "Classic Ambient",
        "Drone Music",
        "Environmental Soundscapes"
      ],
      "coreConcepts": [
        "non-rhythmic expansive soundscapes",
        "endless reverb and tape delay decay",
        "gradual micro-tonal and harmonic evolutions",
        "atmospheric immersion"
      ],
      "rhythmicGrammar": [
        "unmetered sound flow evolving organically without percussive transients"
      ],
      "danceTags": [
        "listening"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Expansive analog synth chord slowly filtering and dissolving into infinite reverb tail",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "rubato"
      },
      "sectionProgressions": {
        "intro": [
          "Cmaj9",
          "Fmaj7",
          "Am9",
          "Gadd9"
        ],
        "theme": [
          "Cmaj9",
          "Fmaj7",
          "Am9",
          "Gadd9",
          "Dm9",
          "Em7",
          "Fmaj7",
          "Gadd9"
        ],
        "coda": [
          "Fmaj7",
          "Gadd9",
          "Cmaj9",
          "Cmaj9"
        ]
      }
    },
    {
      "id": "drum-and-bass-techno",
      "worldId": "drum-and-bass",
      "name": "Techno",
      "origin": "Detroit, Michigan / Berlin",
      "era": "1980s–Present",
      "description": "Relentless • 4/4 • Industrial\nMachine-driven hypnotic",
      "characteristicInstruments": ["drums", "synth", "synth", "sampler", "synth"],
      "preferredMeters": [
        "4/4"
      ],
      "tempoRange": [
        128,
        140
      ],
      "keySubstyles": [
        "Detroit Techno",
        "Berlin Warehouse Techno",
        "Hypnotic Techno"
      ],
      "coreConcepts": [
        "heavy Roland TR-909 kick drum on every beat",
        "offbeat open hi-hat sizzle",
        "hypnotic repetitive modular synth sequence",
        "industrial tension and release"
      ],
      "rhythmicGrammar": [
        "unrelenting 4-on-the-floor kick with 16th-note shaker/rim ostinato and offbeat hats"
      ],
      "danceTags": [
        "festival-fusion"
      ],
      "tuningSystem": "12-tet",
      "signatureCell": "Pounding 909 kick drum on all 4 beats with driving offbeat open hi-hat sizzle",
      "grooveMechanics": {
        "swingPercentage": 50,
        "anticipationOffsetSteps": 0,
        "microtimingFeel": "straight"
      },
      "sectionProgressions": {
        "intro": [
          "Dm",
          "Dm",
          "Dm",
          "Dm"
        ],
        "buildup": [
          "Dm",
          "Dm",
          "Bb",
          "C"
        ],
        "drop": [
          "Dm",
          "Dm",
          "Dm",
          "Dm",
          "Dm",
          "Dm",
          "Bb",
          "C"
        ],
        "coda": [
          "Dm",
          "Dm",
          "Dm",
          "Dm"
        ]
      }
    }
  ],
  "patterns": [
    {
      "id": "drum-and-bass--elec-4onfloor",
      "worldId": "drum-and-bass",
      "styleIds": [],
      "name": "Four on the Floor",
      "family": "Beat",
      "category": "fill",
      "transitionType": "fill",
      "description": "Kick on every quarter note driving",
      "tags": [
        "electronic",
        "house"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums"
      ],
      "approaches": [
        "groove"
      ],
      "instruments": ["drums"],
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
        0.9,
        0.95,
        0.9
      ],
      "velocityProfile": [
        0.95,
        0.88,
        0.92,
        0.88
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
          "id": "drum-and-bass--elec-4onfloor-v-01",
          "parentPatternId": "drum-and-bass--elec-4onfloor",
          "name": "Four on the Floor — sparse variation",
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
            0.85,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.8,
            0.8400000000000001
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "drum-and-bass--elec-4onfloor-v-02",
          "parentPatternId": "drum-and-bass--elec-4onfloor",
          "name": "Four on the Floor — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            4,
            8,
            12
          ],
          "accentProfile": [
            0.96,
            0.98,
            0.9099999999999999,
            0.98
          ],
          "velocityProfile": [
            1,
            0.86,
            0.9,
            0.94
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
      "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "electronic"
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
      "id": "drum-and-bass--elec-offbeat-hats",
      "worldId": "drum-and-bass",
      "styleIds": [],
      "name": "Offbeat Hats",
      "family": "Beat",
      "category": "break",
      "transitionType": "fill",
      "description": "Open hi-hats on the upbeats creating",
      "tags": [
        "electronic",
        "house"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums"
      ],
      "approaches": [
        "groove"
      ],
      "instruments": ["drums"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        2,
        6,
        10,
        14
      ],
      "accentProfile": [
        0.95,
        0.9,
        1,
        0.9
      ],
      "velocityProfile": [
        0.9,
        0.85,
        0.95,
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
          "id": "drum-and-bass--elec-offbeat-hats-v-01",
          "parentPatternId": "drum-and-bass--elec-offbeat-hats",
          "name": "Offbeat Hats — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            2,
            10,
            14
          ],
          "accentProfile": [
            0.8999999999999999,
            0.85,
            0.95
          ],
          "velocityProfile": [
            0.8200000000000001,
            0.77,
            0.87
          ],
          "microtimingOffset": [
            -3,
            6,
            -3
          ]
        },
        {
          "id": "drum-and-bass--elec-offbeat-hats-v-02",
          "parentPatternId": "drum-and-bass--elec-offbeat-hats",
          "name": "Offbeat Hats — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            2,
            6,
            10,
            14
          ],
          "accentProfile": [
            0.9099999999999999,
            0.98,
            0.96,
            0.98
          ],
          "velocityProfile": [
            0.96,
            0.83,
            0.9299999999999999,
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
      "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "electronic"
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
      "id": "drum-and-bass--elec-techno-rumble",
      "worldId": "drum-and-bass",
      "styleIds": [],
      "name": "Techno Rumble",
      "family": "Beat",
      "category": "cadence",
      "transitionType": "fill",
      "description": "Driving 16th note bass/kick interaction and",
      "tags": [
        "electronic",
        "techno"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums",
        "bass"
      ],
      "approaches": [
        "groove",
        "walking"
      ],
      "instruments": ["drums", "bass"],
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
        0.65,
        0.7,
        0.95,
        0.65,
        0.7,
        1,
        0.65,
        0.7,
        0.95,
        0.65,
        0.7
      ],
      "velocityProfile": [
        0.95,
        0.55,
        0.6,
        0.9,
        0.55,
        0.6,
        0.95,
        0.55,
        0.6,
        0.9,
        0.55,
        0.6
      ],
      "supportedEnergy": [
        4,
        5
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
          "id": "drum-and-bass--elec-techno-rumble-v-01",
          "parentPatternId": "drum-and-bass--elec-techno-rumble",
          "name": "Techno Rumble — sparse variation",
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
            0.6,
            0.6499999999999999,
            0.8999999999999999,
            0.6,
            0.6499999999999999,
            0.95,
            0.6
          ],
          "velocityProfile": [
            0.87,
            0.47000000000000003,
            0.52,
            0.8200000000000001,
            0.47000000000000003,
            0.52,
            0.87,
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
          "id": "drum-and-bass--elec-techno-rumble-v-02",
          "parentPatternId": "drum-and-bass--elec-techno-rumble",
          "name": "Techno Rumble — accent shift",
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
            0.73,
            0.6599999999999999,
            1,
            0.61,
            0.7799999999999999,
            0.96,
            0.73,
            0.6599999999999999,
            1,
            0.61,
            0.7799999999999999
          ],
          "velocityProfile": [
            1,
            0.53,
            0.58,
            0.96,
            0.53,
            0.58,
            1,
            0.53,
            0.58,
            0.96,
            0.53,
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
            2,
            -5,
            2,
            -5
          ]
        }
      ],
      "difficulty": 4,
      "weight": 1,
      "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "electronic"
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
      "id": "drum-and-bass--elec-trance-16ths",
      "worldId": "drum-and-bass",
      "styleIds": [],
      "name": "Trance Bass 16ths",
      "family": "Bass",
      "category": "groove",
      "description": "Driving 16th note arpeggiated bass with",
      "tags": [
        "electronic",
        "trance"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "bass",
        "synth"
      ],
      "approaches": [
        "walking"
      ],
      "instruments": ["bass", "synth"],
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
        0.75,
        0.85,
        0.95,
        0.9,
        0.75,
        0.85,
        0.95,
        0.9,
        0.75,
        0.85,
        0.95,
        0.9,
        0.75,
        0.85,
        0.95,
        0.9
      ],
      "velocityProfile": [
        0.7,
        0.8,
        0.95,
        0.85,
        0.7,
        0.8,
        0.95,
        0.85,
        0.7,
        0.8,
        0.95,
        0.85,
        0.7,
        0.8,
        0.95,
        0.85
      ],
      "supportedEnergy": [
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
          "id": "drum-and-bass--elec-trance-16ths-v-01",
          "parentPatternId": "drum-and-bass--elec-trance-16ths",
          "name": "Trance Bass 16ths — sparse variation",
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
            0.7,
            0.7999999999999999,
            0.8999999999999999,
            0.85,
            0.7,
            0.7999999999999999,
            0.8999999999999999,
            0.85,
            0.7,
            0.7999999999999999,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.62,
            0.7200000000000001,
            0.87,
            0.77,
            0.62,
            0.7200000000000001,
            0.87,
            0.77,
            0.62,
            0.7200000000000001,
            0.87
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
          "id": "drum-and-bass--elec-trance-16ths-v-02",
          "parentPatternId": "drum-and-bass--elec-trance-16ths",
          "name": "Trance Bass 16ths — accent shift",
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
            0.71,
            0.9299999999999999,
            0.9099999999999999,
            0.98,
            0.71,
            0.9299999999999999,
            0.9099999999999999,
            0.98,
            0.71,
            0.9299999999999999,
            0.9099999999999999,
            0.98,
            0.71,
            0.9299999999999999,
            0.9099999999999999,
            0.98
          ],
          "velocityProfile": [
            0.76,
            0.78,
            0.9299999999999999,
            0.9099999999999999,
            0.6799999999999999,
            0.78,
            1,
            0.83,
            0.6799999999999999,
            0.8600000000000001,
            0.9299999999999999,
            0.83,
            0.76,
            0.78,
            0.9299999999999999,
            0.9099999999999999
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
      "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "electronic"
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
      "id": "drum-and-bass--elec-dubstep-half",
      "worldId": "drum-and-bass",
      "styleIds": [],
      "name": "Dubstep Half-Time",
      "family": "Beat",
      "category": "groove",
      "description": "Heavy kick on 1 and crushing",
      "tags": [
        "electronic",
        "dubstep"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums"
      ],
      "approaches": [
        "groove"
      ],
      "instruments": ["drums"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        8
      ],
      "accentProfile": [
        1,
        0.95
      ],
      "velocityProfile": [
        0.95,
        0.9
      ],
      "supportedEnergy": [
        1,
        2
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
          "id": "drum-and-bass--elec-dubstep-half-v-01-safe",
          "parentPatternId": "drum-and-bass--elec-dubstep-half",
          "name": "Dubstep Half-Time — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse",
          "onsetGrid": [
            0,
            8
          ],
          "accentProfile": [
            0.95,
            1
          ],
          "velocityProfile": [
            0.98,
            0.86
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        },
        {
          "id": "drum-and-bass--elec-dubstep-half-v-02-safe",
          "parentPatternId": "drum-and-bass--elec-dubstep-half",
          "name": "Dubstep Half-Time — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse",
          "onsetGrid": [
            0,
            8
          ],
          "accentProfile": [
            0.95,
            1
          ],
          "velocityProfile": [
            0.98,
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
      "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "electronic"
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
      "id": "drum-and-bass--elec-dnb-amen",
      "worldId": "drum-and-bass",
      "styleIds": [],
      "name": "DnB Break",
      "family": "Beat",
      "category": "groove",
      "description": "Fast syncopated breakbeat at 174 BPM",
      "tags": [
        "electronic",
        "dnb"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums"
      ],
      "approaches": [
        "groove"
      ],
      "instruments": ["drums"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        4,
        7,
        9,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.95,
        0.75,
        0.8,
        0.95,
        0.7
      ],
      "velocityProfile": [
        0.95,
        0.9,
        0.65,
        0.75,
        0.9,
        0.65
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
          "id": "drum-and-bass--elec-dnb-amen-v-01",
          "parentPatternId": "drum-and-bass--elec-dnb-amen",
          "name": "DnB Break — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            7,
            9,
            14
          ],
          "accentProfile": [
            0.95,
            0.8999999999999999,
            0.7,
            0.75
          ],
          "velocityProfile": [
            0.87,
            0.8200000000000001,
            0.5700000000000001,
            0.67
          ],
          "microtimingOffset": [
            -3,
            6,
            -3,
            6
          ]
        },
        {
          "id": "drum-and-bass--elec-dnb-amen-v-02",
          "parentPatternId": "drum-and-bass--elec-dnb-amen",
          "name": "DnB Break — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            4,
            7,
            9,
            12,
            14
          ],
          "accentProfile": [
            0.96,
            1,
            0.71,
            0.88,
            0.9099999999999999,
            0.7799999999999999
          ],
          "velocityProfile": [
            1,
            0.88,
            0.63,
            0.81,
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
      "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "electronic"
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
      "id": "drum-and-bass--elec-footwork",
      "worldId": "drum-and-bass",
      "styleIds": [],
      "name": "Chicago Footwork / Juke",
      "family": "Footwork",
      "category": "groove",
      "description": "Rapid, chopped kick pattern with triplet-displaced",
      "tags": [
        "electronic",
        "footwork",
        "juke"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums"
      ],
      "approaches": [
        "groove"
      ],
      "instruments": ["drums"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        6,
        7,
        9,
        12,
        13,
        15
      ],
      "accentProfile": [
        1,
        0.65,
        0.9,
        0.6,
        0.95,
        0.85,
        0.6,
        0.9
      ],
      "velocityProfile": [
        0.95,
        0.6,
        0.85,
        0.55,
        0.9,
        0.8,
        0.55,
        0.85
      ],
      "supportedEnergy": [
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
          "id": "drum-and-bass--elec-footwork-v-01",
          "parentPatternId": "drum-and-bass--elec-footwork",
          "name": "Chicago Footwork / Juke — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            6,
            7,
            12,
            13
          ],
          "accentProfile": [
            0.95,
            0.6,
            0.85,
            0.5499999999999999,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.52,
            0.77,
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
          "id": "drum-and-bass--elec-footwork-v-02",
          "parentPatternId": "drum-and-bass--elec-footwork",
          "name": "Chicago Footwork / Juke — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            6,
            7,
            9,
            12,
            13,
            15
          ],
          "accentProfile": [
            0.96,
            0.73,
            0.86,
            0.6799999999999999,
            0.9099999999999999,
            0.9299999999999999,
            0.5599999999999999,
            0.98
          ],
          "velocityProfile": [
            1,
            0.58,
            0.83,
            0.6100000000000001,
            0.88,
            0.78,
            0.6100000000000001,
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
            -5
          ]
        }
      ],
      "difficulty": 3,
      "weight": 1,
      "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "electronic"
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
      "id": "drum-and-bass--elec-ukg",
      "worldId": "drum-and-bass",
      "styleIds": [],
      "name": "UK Garage Swung",
      "family": "Beat",
      "category": "groove",
      "description": "Swung 16ths with skipping 2-step kicks",
      "tags": [
        "electronic",
        "ukg"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums"
      ],
      "approaches": [
        "groove"
      ],
      "instruments": ["drums"],
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
        0.95,
        0.8,
        0.85,
        0.95,
        0.75
      ],
      "velocityProfile": [
        0.95,
        0.9,
        0.75,
        0.8,
        0.9,
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
          "id": "drum-and-bass--elec-ukg-v-01",
          "parentPatternId": "drum-and-bass--elec-ukg",
          "name": "UK Garage Swung — sparse variation",
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
            0.8999999999999999,
            0.75,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.8200000000000001,
            0.67,
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
          "id": "drum-and-bass--elec-ukg-v-02",
          "parentPatternId": "drum-and-bass--elec-ukg",
          "name": "UK Garage Swung — accent shift",
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
            1,
            0.76,
            0.9299999999999999,
            0.9099999999999999,
            0.83
          ],
          "velocityProfile": [
            1,
            0.88,
            0.73,
            0.8600000000000001,
            0.88,
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
      "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "electronic"
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
      "id": "drum-and-bass--elec-electro",
      "worldId": "drum-and-bass",
      "styleIds": [],
      "name": "Electro 808",
      "family": "Beat",
      "category": "groove",
      "description": "Classic syncopated 808 robotic electro beat.",
      "tags": [
        "electronic",
        "electro"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "drums"
      ],
      "approaches": [
        "groove"
      ],
      "instruments": ["drums"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        4,
        7,
        10,
        12,
        14
      ],
      "accentProfile": [
        1,
        0.95,
        0.8,
        0.85,
        0.95,
        0.8
      ],
      "velocityProfile": [
        0.95,
        0.9,
        0.75,
        0.8,
        0.9,
        0.75
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
          "id": "drum-and-bass--elec-electro-v-01",
          "parentPatternId": "drum-and-bass--elec-electro",
          "name": "Electro 808 — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            7,
            10,
            14
          ],
          "accentProfile": [
            0.95,
            0.8999999999999999,
            0.75,
            0.7999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.8200000000000001,
            0.67,
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
          "id": "drum-and-bass--elec-electro-v-02",
          "parentPatternId": "drum-and-bass--elec-electro",
          "name": "Electro 808 — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            4,
            7,
            10,
            12,
            14
          ],
          "accentProfile": [
            0.96,
            1,
            0.76,
            0.9299999999999999,
            0.9099999999999999,
            0.88
          ],
          "velocityProfile": [
            1,
            0.88,
            0.73,
            0.8600000000000001,
            0.88,
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
      "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "electronic"
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
      "id": "drum-and-bass--elec-ambient",
      "worldId": "drum-and-bass",
      "styleIds": [],
      "name": "Ambient Pulse",
      "family": "Synth",
      "category": "groove",
      "description": "Slow evolving chord pulses with gentle",
      "tags": [
        "electronic",
        "ambient"
      ],
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
      "instruments": ["keys", "synth"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 4,
      "onsetGrid": [
        0,
        2
      ],
      "accentProfile": [
        1,
        0.8
      ],
      "velocityProfile": [
        0.9,
        0.75
      ],
      "supportedEnergy": [
        1,
        2
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
          "id": "drum-and-bass--elec-ambient-v-01-safe",
          "parentPatternId": "drum-and-bass--elec-ambient",
          "name": "Ambient Pulse — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse",
          "onsetGrid": [
            0,
            2
          ],
          "accentProfile": [
            0.95,
            0.88
          ],
          "velocityProfile": [
            0.93,
            0.71
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        },
        {
          "id": "drum-and-bass--elec-ambient-v-02-safe",
          "parentPatternId": "drum-and-bass--elec-ambient",
          "name": "Ambient Pulse — played variation",
          "variationType": "accentShift",
          "probability": 0.18,
          "description": "A light played variation for sparse",
          "onsetGrid": [
            0,
            2
          ],
          "accentProfile": [
            0.95,
            0.88
          ],
          "velocityProfile": [
            0.93,
            0.71
          ],
          "microtimingOffset": [
            -2,
            4
          ]
        }
      ],
      "difficulty": 1,
      "weight": 1,
      "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "electronic"
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
      "id": "drum-and-bass--elec-synthwave",
      "worldId": "drum-and-bass",
      "styleIds": [],
      "name": "Synthwave 8ths",
      "family": "Bass",
      "category": "groove",
      "description": "Straight 8th note driving retro synth",
      "tags": [
        "electronic",
        "synthwave"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "bass",
        "synth"
      ],
      "approaches": [
        "walking"
      ],
      "instruments": ["bass", "synth"],
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
        0.8,
        0.92,
        0.8,
        0.96,
        0.8,
        0.92,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.75,
        0.88,
        0.75,
        0.92,
        0.75,
        0.88,
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
          "id": "drum-and-bass--elec-synthwave-v-01",
          "parentPatternId": "drum-and-bass--elec-synthwave",
          "name": "Synthwave 8ths — sparse variation",
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
            0.75,
            0.87,
            0.75,
            0.9099999999999999
          ],
          "velocityProfile": [
            0.87,
            0.67,
            0.8,
            0.67,
            0.8400000000000001
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
          "id": "drum-and-bass--elec-synthwave-v-02",
          "parentPatternId": "drum-and-bass--elec-synthwave",
          "name": "Synthwave 8ths — accent shift",
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
            0.88,
            0.88,
            0.88,
            0.9199999999999999,
            0.88,
            0.88,
            0.9299999999999999
          ],
          "velocityProfile": [
            1,
            0.73,
            0.86,
            0.81,
            0.9,
            0.73,
            0.94,
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
      "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "electronic"
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
      "id": "drum-and-bass--elec-acid-303",
      "worldId": "drum-and-bass",
      "styleIds": [],
      "name": "Acid House 303 Bassline",
      "family": "Acid Bass",
      "category": "ostinato",
      "description": "Squelchy Roland TB-303 style syncopated 16th-note",
      "tags": [
        "electronic",
        "acid-house",
        "bass"
      ],
      "scopes": [
        "measure"
      ],
      "roles": [
        "bass",
        "synth"
      ],
      "approaches": [
        "walking"
      ],
      "instruments": ["bass", "synth"],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
        4,
        7,
        10,
        11,
        14
      ],
      "accentProfile": [
        1,
        0.6,
        0.9,
        0.65,
        0.95,
        0.7,
        0.85
      ],
      "velocityProfile": [
        0.95,
        0.55,
        0.85,
        0.6,
        0.9,
        0.65,
        0.8
      ],
      "supportedEnergy": [
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
          "id": "drum-and-bass--elec-acid-303-v-01",
          "parentPatternId": "drum-and-bass--elec-acid-303",
          "name": "Acid House 303 Bassline — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4,
            7,
            11,
            14
          ],
          "accentProfile": [
            0.95,
            0.5499999999999999,
            0.85,
            0.6,
            0.8999999999999999
          ],
          "velocityProfile": [
            0.87,
            0.47000000000000003,
            0.77,
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
          "id": "drum-and-bass--elec-acid-303-v-02",
          "parentPatternId": "drum-and-bass--elec-acid-303",
          "name": "Acid House 303 Bassline — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
            4,
            7,
            10,
            11,
            14
          ],
          "accentProfile": [
            0.96,
            0.6799999999999999,
            0.86,
            0.73,
            0.9099999999999999,
            0.7799999999999999,
            0.8099999999999999
          ],
          "velocityProfile": [
            1,
            0.53,
            0.83,
            0.6599999999999999,
            0.88,
            0.63,
            0.8600000000000001
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
      "provenance": "Electronic catalog rebuild: retained source material or generated structural support pattern.",
      "authenticityTags": [
        "electronic"
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
      "id": "drum-and-bass--electronic-phrase-13",
      "worldId": "drum-and-bass",
      "styleIds": [],
      "name": "Pluck Phrase",
      "family": "Pluck",
      "category": "phrasePattern",
      "description": "A phrase-level rhythmic template that leaves",
      "tags": [
        "electronic",
        "pluck",
        "phrase",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "synth"
      ],
      "approaches": [
        "phrase"
      ],
      "instruments": ["synth"],
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
        0,
        2,
        5,
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
          "id": "drum-and-bass--electronic-phrase-13-v-01",
          "parentPatternId": "drum-and-bass--electronic-phrase-13",
          "name": "Pluck Phrase — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            5,
            7,
            12,
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
          "id": "drum-and-bass--electronic-phrase-13-v-02",
          "parentPatternId": "drum-and-bass--electronic-phrase-13",
          "name": "Pluck Phrase — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            2,
            5,
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
      "provenance": "GenreDAW catalog rebuild from existing Electronic world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "electronic",
        "pluck"
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
      "id": "drum-and-bass--electronic-call-14",
      "worldId": "drum-and-bass",
      "styleIds": [],
      "name": "Breakbeat Response",
      "family": "Breakbeat",
      "category": "interactionPattern",
      "description": "A call-and-response shape that leaves the",
      "tags": [
        "electronic",
        "breakbeat",
        "call",
        "catalog-v2"
      ],
      "scopes": [
        "measure",
        "phrase"
      ],
      "roles": [
        "synth",
        "lead"
      ],
      "approaches": [
        "phrase"
      ],
      "instruments": ["synth", "bass"],
      "compatibleRoles": [
        "synth",
        "lead"
      ],
      "compatibleInstruments": [
        "synth",
        "bass"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        1,
        3,
        6,
        8,
        11,
        13
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
          "id": "drum-and-bass--electronic-call-14-v-01",
          "parentPatternId": "drum-and-bass--electronic-call-14",
          "name": "Breakbeat Response — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            3,
            6,
            11,
            13
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
          "id": "drum-and-bass--electronic-call-14-v-02",
          "parentPatternId": "drum-and-bass--electronic-call-14",
          "name": "Breakbeat Response — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            1,
            3,
            6,
            8,
            11,
            13
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
          "id": "drum-and-bass--electronic-call-14-v-03",
          "parentPatternId": "drum-and-bass--electronic-call-14",
          "name": "Breakbeat Response — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            0,
            1,
            3,
            6,
            8,
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
      "provenance": "GenreDAW catalog rebuild from existing Electronic world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "electronic",
        "breakbeat"
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
      "id": "drum-and-bass--electronic-anchor-15",
      "worldId": "drum-and-bass",
      "styleIds": [],
      "name": "Build Anchor",
      "family": "Build",
      "category": "ostinato",
      "description": "A repeating anchor that locks the",
      "tags": [
        "electronic",
        "build",
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
      "instruments": ["bass"],
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
        4,
        7,
        9,
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
      "swingPercentage": 50,
      "articulations": [
        "accented",
        "ghost-aware"
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
          "id": "drum-and-bass--electronic-anchor-15-v-01",
          "parentPatternId": "drum-and-bass--electronic-anchor-15",
          "name": "Build Anchor — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            1,
            4,
            7,
            12,
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
          "id": "drum-and-bass--electronic-anchor-15-v-02",
          "parentPatternId": "drum-and-bass--electronic-anchor-15",
          "name": "Build Anchor — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            1,
            2,
            4,
            7,
            9,
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
      "provenance": "GenreDAW catalog rebuild from existing Electronic world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "electronic",
        "build"
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
      "id": "drum-and-bass--electronic-comp-16",
      "worldId": "drum-and-bass",
      "styleIds": [],
      "name": "Drop Comping",
      "family": "Drop",
      "category": "groove",
      "description": "A genre-shaped accompaniment cell that supports",
      "tags": [
        "electronic",
        "drop",
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
      "instruments": ["synth"],
      "compatibleRoles": [
        "harmony"
      ],
      "compatibleInstruments": [
        "synth"
      ],
      "canCrossRole": true,
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        3,
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
      "swingPercentage": 50,
      "articulations": [
        "accented",
        "ghost-aware"
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
          "id": "drum-and-bass--electronic-comp-16-v-01",
          "parentPatternId": "drum-and-bass--electronic-comp-16",
          "name": "Drop Comping — sparse variation",
          "variationType": "sparse",
          "probability": 0.22,
          "description": "Drops selected interior attacks so the",
          "onsetGrid": [
            0,
            4,
            6,
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
          "id": "drum-and-bass--electronic-comp-16-v-02",
          "parentPatternId": "drum-and-bass--electronic-comp-16",
          "name": "Drop Comping — accent shift",
          "variationType": "accentShift",
          "probability": 0.2,
          "description": "Keeps the rhythm intact but moves",
          "onsetGrid": [
            0,
            3,
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
      "provenance": "GenreDAW catalog rebuild from existing Electronic world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "electronic",
        "drop"
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
      "id": "drum-and-bass--electronic-intro-17",
      "worldId": "drum-and-bass",
      "styleIds": [],
      "name": "Arp Intro",
      "family": "Arp",
      "category": "sectionPattern",
      "description": "A reduced entrance used to establish",
      "tags": [
        "electronic",
        "arp",
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
      "approaches": [
        "comping"
      ],
      "instruments": ["synth"],
      "compatibleRoles": [
        "harmony",
        "texture"
      ],
      "compatibleInstruments": [
        "synth"
      ],
      "canCrossRole": true,
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
        "intro"
      ],
      "variants": [
        {
          "id": "drum-and-bass--electronic-intro-17-v-01",
          "parentPatternId": "drum-and-bass--electronic-intro-17",
          "name": "Arp Intro — sparse variation",
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
          "id": "drum-and-bass--electronic-intro-17-v-02",
          "parentPatternId": "drum-and-bass--electronic-intro-17",
          "name": "Arp Intro — accent shift",
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
          "id": "drum-and-bass--electronic-intro-17-v-03",
          "parentPatternId": "drum-and-bass--electronic-intro-17",
          "name": "Arp Intro — transition variation",
          "variationType": "transition",
          "probability": 0.16,
          "description": "Adds a final pickup/closure gesture for",
          "onsetGrid": [
            0,
            3,
            6,
            8,
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
      "provenance": "GenreDAW catalog rebuild from existing Electronic world data; generated to cover missing musical functions without runtime AI.",
      "authenticityTags": [
        "electronic",
        "arp"
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
      "id": "drum-and-bass--dnb-break-core",
      "worldId": "drum-and-bass",
      "name": "DnB Break Core",
      "shortName": "DnB Break Core",
      "family": "drum-and-bass",
      "category": "groove",
      "description": "Fast chopped break accents over a stable 2-bar pulse, leaving the sub to define downbeat weight.",
      "tags": [
        "breakbeat",
        "dnb",
        "chop"
      ],
      "approaches": [
        "breakbeat",
        "dnb",
        "chop"
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
        3,
        4,
        6,
        8,
        10,
        12,
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
        0.5,
        1
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
        1,
        1
      ],
      "articulations": [],
      "variants": [],
      "sourceLevel": "native-genre",
      "canCrossRole": true,
      "authenticityTags": [
        "breakbeat",
        "dnb",
        "chop"
      ]
    },
    {
      "id": "drum-and-bass--dnb-sub-phrase",
      "worldId": "drum-and-bass",
      "name": "DnB Sub Phrase",
      "shortName": "DnB Sub Phrase",
      "family": "drum-and-bass",
      "category": "groove",
      "description": "Sparse sub notes that target root/5th and re-enter after break drops.",
      "tags": [
        "sub",
        "dnb",
        "negative-space"
      ],
      "approaches": [
        "sub",
        "dnb",
        "negative-space"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "bass",
        "pulse"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
        0,
        7,
        8,
        14
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
        "sub",
        "dnb",
        "negative-space"
      ]
    },
    {
      "id": "drum-and-bass--dnb-two-step",
      "worldId": "drum-and-bass",
      "name": "DnB Two-Step Variant",
      "shortName": "DnB Two-Step Variant",
      "family": "drum-and-bass",
      "category": "groove",
      "description": "Kick/snare displacement derived from UK garage rather than four-on-floor.",
      "tags": [
        "two-step",
        "dnb",
        "swing"
      ],
      "approaches": [
        "two-step",
        "dnb",
        "swing"
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
        6,
        8,
        14
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
        "two-step",
        "dnb",
        "swing"
      ]
    },
    {
      "id": "drum-and-bass--dnb-drop-fill",
      "worldId": "drum-and-bass",
      "name": "DnB Drop Fill",
      "shortName": "DnB Drop Fill",
      "family": "drum-and-bass",
      "category": "groove",
      "description": "Dense 16th/32nd pickup that opens a transition into a new bass phrase.",
      "tags": [
        "fill",
        "drop",
        "dnb"
      ],
      "approaches": [
        "fill",
        "drop",
        "dnb"
      ],
      "scopes": [
        "song",
        "region",
        "measure"
      ],
      "roles": [
        "drums",
        "percussion"
      ],
      "meter": "4/4",
      "cycleLength": 1,
      "subdivisions": 16,
      "onsetGrid": [
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
        "fill",
        "drop",
        "dnb"
      ]
    }
  ],
  "kind": "world",
  "strictness": "strict"
};

export const DRUM_AND_BASS_WORLD: GenreWorld = {
  ...DRUM_AND_BASS_WORLD_BASE,
  ...DRUM_AND_BASS_WORLD_DETAILS,
  styleDefinitions: DRUM_AND_BASS_STYLES,
};
