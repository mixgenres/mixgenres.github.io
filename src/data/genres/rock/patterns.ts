import type { GenreWorld, MusicalPattern } from '../../schema';


const ROCK_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "rock-riff-lock",
          "worldId": "rock",
          "styleIds": ["rock-hard-rock"],
          "name": "Riff + Bass Lock",
          "family": "Riff",
          "category": "ostinato",
          "description": "Electric guitar and bass share a tightly locked rhythmic figure.",
          "tags": [
            "rock",
            "riff",
            "bass",
            "guitar"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "rhythm-guitar",
            "bass",
            "pulse",
            "drums"
          ],
    
          "approaches": ["walking", "groove"],
          "instruments": [
            "electric-guitar",
            "bass",
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
            10,
            12,
            14
          ],
          "accentProfile": [
            1,
            0.8,
            0.9,
            0.95,
            0.7,
            0.9,
            0.8
          ],
          "velocityProfile": [
            1,
            0.75,
            0.85,
            0.9,
            0.65,
            0.85,
            0.75
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
              "id": "rock-riff-stop",
              "parentPatternId": "rock-riff-lock",
              "name": "Stop-Time Hit",
              "variationType": "breakdown",
              "probability": 0.4,
              "onsetGrid": [
                0,
                4
              ],
              "accentProfile": [
                1,
                1
              ],
              "description": "The riff collapses into accented hits,"
            },
            {
              "id": "rock-riff-lock-v-02",
              "parentPatternId": "rock-riff-lock",
              "name": "Riff + Bass Lock — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                6,
                8,
                10,
                12,
                14
              ],
              "accentProfile": [
                0.96,
                0.88,
                0.86,
                1,
                0.6599999999999999,
                0.98,
                0.76
              ],
              "velocityProfile": [
                1,
                0.73,
                0.83,
                0.96,
                0.63,
                0.83,
                0.81
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
          "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "rock"
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
          "id": "rock-odd-meter",
          "worldId": "rock",
          "styleIds": ["rock-progressive-rock"],
          "name": "7/8 Accent Group",
          "family": "Odd Meter",
          "category": "ostinato",
          "description": "A seven-eighth-note cycle grouped 2+2+3 creates an uneven, driving pulse.",
          "tags": [
            "rock",
            "progressive",
            "7/8",
            "odd-meter"
          ],
          "scopes": [
            "measure",
            "phrase",
            "track",
            "region"
          ],
          "roles": [
            "rhythm-guitar",
            "bass",
            "drums"
          ],
    
          "approaches": ["walking", "groove"],
          "instruments": [
            "electric-guitar",
            "bass",
            "drums"
          ],
          "meter": "7/8",
          "cycleLength": 1,
          "subdivisions": 14,
          "onsetGrid": [
            0,
            4,
            8,
            10
          ],
          "accentProfile": [
            1,
            0.7,
            1,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.9,
            0.75
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "solo"
          ],
          "variants": [
            {
              "id": "rock-odd-meter-v-01",
              "parentPatternId": "rock-odd-meter",
              "name": "7/8 Accent Group — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                8,
                10
              ],
              "accentProfile": [
                0.95,
                0.6499999999999999,
                0.95
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
              "id": "rock-odd-meter-v-02",
              "parentPatternId": "rock-odd-meter",
              "name": "7/8 Accent Group — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                4,
                8,
                10
              ],
              "accentProfile": [
                0.96,
                0.7799999999999999,
                0.96,
                0.9299999999999999
              ],
              "velocityProfile": [
                1,
                0.63,
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
          "weight": 0.7,
          "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "rock"
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
          "id": "rock-anchor-15",
          "worldId": "rock",
          "styleIds": ["rock-hard-rock"],
          "name": "Power Chord Anchor",
          "family": "Power Chord",
          "category": "ostinato",
          "description": "A repeating anchor that locks the bass line to the harmonic cycle.",
          "tags": [
            "rock",
            "power-chord",
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
            6,
            10,
            14
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68
          ],
          "syncopationRating": 1,
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
              "id": "rock-anchor-15-v-01",
              "parentPatternId": "rock-anchor-15",
              "name": "Power Chord Anchor — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                2,
                10,
                14
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
              "id": "rock-anchor-15-v-02",
              "parentPatternId": "rock-anchor-15",
              "name": "Power Chord Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                6,
                10,
                14
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
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
          "provenance": "GenreDAW catalog rebuild from existing Rock world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "rock",
            "power-chord"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 1,
          "weight": 0.7,
          "enabled": true
        }
];


const ROCK_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "rock-straight-drive",
          "worldId": "rock",
          "styleIds": ["rock-punk-rock"],
          "name": "Straight-Eighth Drive",
          "family": "Driving Eighths",
          "category": "phrasePattern",
          "description": "Continuous guitar eighths with a firm",
          "tags": [
            "rock",
            "punk",
            "eighths",
            "drive"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "rhythm-guitar",
            "bass",
            "drums",
            "pulse"
          ],
    
          "approaches": ["walking", "groove"],
          "instruments": [
            "electric-guitar",
            "bass",
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
            0.7,
            0.9,
            0.7,
            1,
            0.7,
            0.9,
            0.7
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.85,
            0.65,
            0.95,
            0.65,
            0.85,
            0.65
          ],
          "supportedEnergy": [4, 5],
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
              "id": "rock-straight-drive-v-01",
              "parentPatternId": "rock-straight-drive",
              "name": "Straight-Eighth Drive — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                6,
                10,
                12
              ],
              "accentProfile": [
                0.95,
                0.6499999999999999,
                0.85,
                0.6499999999999999,
                0.95
              ],
              "velocityProfile": [
                0.87,
                0.5700000000000001,
                0.77,
                0.5700000000000001,
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
              "id": "rock-straight-drive-v-02",
              "parentPatternId": "rock-straight-drive",
              "name": "Straight-Eighth Drive — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
                0.7799999999999999,
                0.86,
                0.7799999999999999,
                0.96,
                0.7799999999999999,
                0.86,
                0.7799999999999999
              ],
              "velocityProfile": [
                1,
                0.63,
                0.83,
                0.71,
                0.9299999999999999,
                0.63,
                0.9099999999999999,
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
          "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "rock"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    
          "articulations": ["accented"]
        }
];


const ROCK_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "rock-open-close",
          "worldId": "rock",
          "styleIds": ["rock-grunge"],
          "name": "Open Verse → Full Chorus",
          "family": "Dynamic Arrangement",
          "category": "sectionPattern",
          "description": "A sparse verse leaves negative space",
          "tags": [
            "rock",
            "arrangement",
            "dynamics",
            "chorus"
          ],
          "scopes": [
            "phrase",
            "region",
            "song"
          ],
          "roles": [
            "rhythm-guitar",
            "bass",
            "drums",
            "texture"
          ],
    
          "approaches": ["walking", "groove"],
          "instruments": [
            "electric-guitar",
            "bass",
            "drums",
            "keys"
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
            0.8,
            0.7,
            0.9,
            0.8
          ],
          "velocityProfile": [
            0.6,
            0.55,
            0.7,
            0.6
          ],
          "supportedEnergy": [1, 2, 3, 4, 5],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "rock-open-close-v-01",
              "parentPatternId": "rock-open-close",
              "name": "Open Verse → Full Chorus — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                8,
                12
              ],
              "accentProfile": [
                0.75,
                0.6499999999999999,
                0.85
              ],
              "velocityProfile": [
                0.52,
                0.47000000000000003,
                0.62
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "rock-open-close-v-02",
              "parentPatternId": "rock-open-close",
              "name": "Open Verse → Full Chorus — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                0.76,
                0.7799999999999999,
                0.86,
                0.88
              ],
              "velocityProfile": [
                0.6599999999999999,
                0.53,
                0.6799999999999999,
                0.6599999999999999
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5
              ]
            },
            {
              "id": "rock-open-close-v-03",
              "parentPatternId": "rock-open-close",
              "name": "Open Verse → Full Chorus — transition",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                0,
                4,
                8,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.78,
                0.6799999999999999,
                0.88,
                0.78,
                1,
                1
              ],
              "velocityProfile": [
                0.6,
                0.55,
                0.7,
                0.6,
                0.98,
                0.98
              ],
              "microtimingOffset": [
                0,
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
          "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "rock"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    
          "articulations": ["accented"]
        }
];


const ROCK_WORLD_PATTERNS_FILL: MusicalPattern[] = [
  {
          "id": "rock-power-chords",
          "worldId": "rock",
          "styleIds": ["rock-punk-rock"],
          "name": "Power Chords",
          "family": "Guitar",
          "category": "fill",
          "transitionType": "fill",
          "description": "Distorted 8th note power chords driving",
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
            0.78,
            0.88,
            0.76,
            0.95,
            0.78,
            0.88,
            0.82
          ],
          "velocityProfile": [
            0.95,
            0.72,
            0.82,
            0.7,
            0.9,
            0.72,
            0.82,
            0.78
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
              "id": "rock-power-chords-v-01",
              "parentPatternId": "rock-power-chords",
              "name": "Power Chords — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                2,
                3,
                5,
                6
              ],
              "accentProfile": [
                0.95,
                0.73,
                0.83,
                0.71,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.64,
                0.74,
                0.62,
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
              "id": "rock-power-chords-v-02",
              "parentPatternId": "rock-power-chords",
              "name": "Power Chords — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
                0.86,
                0.84,
                0.84,
                0.9099999999999999,
                0.86,
                0.84,
                0.8999999999999999
              ],
              "velocityProfile": [
                1,
                0.7,
                0.7999999999999999,
                0.76,
                0.88,
                0.7,
                0.8799999999999999,
                0.76
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
          "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "rock"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];


const ROCK_WORLD_PATTERNS_BREAK: MusicalPattern[] = [
  {
          "id": "rock-halftime-groove",
          "worldId": "rock",
          "styleIds": ["rock-grunge"],
          "name": "Half-Time Groove",
          "family": "Drums",
          "category": "break",
          "transitionType": "fill",
          "description": "Spacious half-time groove with massive snare",
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
            4
          ],
          "accentProfile": [
            0.96,
            1
          ],
          "velocityProfile": [
            0.92,
            0.98
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
              "id": "rock-halftime-groove-v-01-safe",
              "parentPatternId": "rock-halftime-groove",
              "name": "Half-Time Groove — played",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                0,
                4
              ],
              "accentProfile": [
                0.9099999999999999,
                1
              ],
              "velocityProfile": [
                0.9500000000000001,
                0.94
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            },
            {
              "id": "rock-halftime-groove-v-02-safe",
              "parentPatternId": "rock-halftime-groove",
              "name": "Half-Time Groove — played",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                0,
                4
              ],
              "accentProfile": [
                0.9099999999999999,
                1
              ],
              "velocityProfile": [
                0.9500000000000001,
                0.94
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "rock"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];


const ROCK_WORLD_PATTERNS_CADENCE: MusicalPattern[] = [
  {
          "id": "rock-tom-beat",
          "worldId": "rock",
          "styleIds": ["rock-grunge"],
          "name": "Tom Groove",
          "family": "Drums",
          "category": "cadence",
          "transitionType": "fill",
          "description": "Tribal tom-tom beat for atmospheric verses",
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
            4,
            7,
            8,
            11,
            12,
            15
          ],
          "accentProfile": [
            1,
            0.7,
            0.85,
            0.65,
            0.95,
            0.7,
            0.85,
            0.65
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.8,
            0.6,
            0.9,
            0.65,
            0.8,
            0.6
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
              "id": "rock-tom-beat-v-01",
              "parentPatternId": "rock-tom-beat",
              "name": "Tom Groove — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                7,
                11,
                12
              ],
              "accentProfile": [
                0.95,
                0.6499999999999999,
                0.7999999999999999,
                0.6,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.5700000000000001,
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
              "id": "rock-tom-beat-v-02",
              "parentPatternId": "rock-tom-beat",
              "name": "Tom Groove — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
                0.7799999999999999,
                0.8099999999999999,
                0.73,
                0.9099999999999999,
                0.7799999999999999,
                0.8099999999999999,
                0.73
              ],
              "velocityProfile": [
                1,
                0.63,
                0.78,
                0.6599999999999999,
                0.88,
                0.63,
                0.8600000000000001,
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
                -5
              ]
            }
          ],
    
          "difficulty": 3,
          "weight": 1,
          "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "rock"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];


const ROCK_WORLD_PATTERNS_CELL: MusicalPattern[] = [
  {
          "id": "rock-organ-sustain",
          "worldId": "rock",
          "styleIds": ["rock-hard-rock"],
          "name": "Hammond Organ Sustain",
          "family": "Keys",
          "category": "cell",
          "description": "Sustained Hammond B3 chords with Leslie",
          "tags": [
            "rock",
            "organ",
            "keys"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "keys"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "keys"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            7,
            8,
            15
          ],
          "accentProfile": [
            0.9,
            0.6,
            0.85,
            0.65
          ],
          "velocityProfile": [
            0.85,
            0.55,
            0.8,
            0.6
          ],
          "supportedEnergy": [1, 2],
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
              "id": "rock-organ-sustain-v-01",
              "parentPatternId": "rock-organ-sustain",
              "name": "Hammond Organ Sustain — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                8,
                15
              ],
              "accentProfile": [
                0.85,
                0.5499999999999999,
                0.7999999999999999
              ],
              "velocityProfile": [
                0.77,
                0.47000000000000003,
                0.7200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "rock-organ-sustain-v-02",
              "parentPatternId": "rock-organ-sustain",
              "name": "Hammond Organ Sustain — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                7,
                8,
                15
              ],
              "accentProfile": [
                0.86,
                0.6799999999999999,
                0.8099999999999999,
                0.73
              ],
              "velocityProfile": [
                0.9099999999999999,
                0.53,
                0.78,
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
          "weight": 0.7,
          "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "rock"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
          "articulations": ["accented"]
        }
];


const ROCK_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "rock-prog-7-8",
          "worldId": "rock",
          "styleIds": ["rock-progressive-rock"],
          "name": "7/8 Riff",
          "family": "Guitar",
          "category": "groove",
          "description": "Odd meter guitar riff in 2+2+3",
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
          "meter": "7/8",
          "cycleLength": 1,
          "subdivisions": 7,
          "onsetGrid": [
            0,
            2,
            4,
            5
          ],
          "accentProfile": [
            1,
            0.8,
            0.9,
            0.75
          ],
          "velocityProfile": [
            0.95,
            0.75,
            0.85,
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
              "id": "rock-prog-7-8-v-01",
              "parentPatternId": "rock-prog-7-8",
              "name": "7/8 Riff — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                5
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
              "id": "rock-prog-7-8-v-02",
              "parentPatternId": "rock-prog-7-8",
              "name": "7/8 Riff — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                4,
                5
              ],
              "accentProfile": [
                0.96,
                0.88,
                0.86,
                0.83
              ],
              "velocityProfile": [
                1,
                0.73,
                0.83,
                0.76
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
          "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "rock"
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
          "id": "rock-prog-synth",
          "worldId": "rock",
          "styleIds": ["rock-progressive-rock"],
          "name": "Prog Synth Arp",
          "family": "Synth",
          "category": "groove",
          "description": "Fast synth arpeggiator creating swirling harmonic",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "synth",
            "keys"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "synth",
            "keys"
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
            0.6,
            0.75,
            0.6,
            0.9,
            0.6,
            0.75,
            0.6,
            0.95,
            0.6,
            0.75,
            0.6,
            0.9,
            0.6,
            0.75,
            0.65
          ],
          "velocityProfile": [
            0.9,
            0.55,
            0.7,
            0.55,
            0.85,
            0.55,
            0.7,
            0.55,
            0.9,
            0.55,
            0.7,
            0.55,
            0.85,
            0.55,
            0.7,
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
              "id": "rock-prog-synth-v-01",
              "parentPatternId": "rock-prog-synth",
              "name": "Prog Synth Arp — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
                0.5499999999999999,
                0.7,
                0.5499999999999999,
                0.85,
                0.5499999999999999,
                0.7,
                0.5499999999999999,
                0.8999999999999999,
                0.5499999999999999,
                0.7
              ],
              "velocityProfile": [
                0.8200000000000001,
                0.47000000000000003,
                0.62,
                0.47000000000000003,
                0.77,
                0.47000000000000003,
                0.62,
                0.47000000000000003,
                0.8200000000000001,
                0.47000000000000003,
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
              "id": "rock-prog-synth-v-02",
              "parentPatternId": "rock-prog-synth",
              "name": "Prog Synth Arp — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
                0.6799999999999999,
                0.71,
                0.6799999999999999,
                0.86,
                0.6799999999999999,
                0.71,
                0.6799999999999999,
                0.9099999999999999,
                0.6799999999999999,
                0.71,
                0.6799999999999999,
                0.86,
                0.6799999999999999,
                0.71,
                0.73
              ],
              "velocityProfile": [
                0.96,
                0.53,
                0.6799999999999999,
                0.6100000000000001,
                0.83,
                0.53,
                0.76,
                0.53,
                0.88,
                0.6100000000000001,
                0.6799999999999999,
                0.53,
                0.9099999999999999,
                0.53,
                0.6799999999999999,
                0.6599999999999999
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
          "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "rock"
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
          "id": "rock-acoustic-strum",
          "worldId": "rock",
          "styleIds": ["rock-hard-rock"],
          "name": "Acoustic Strum",
          "family": "Guitar",
          "category": "groove",
          "description": "Acoustic guitar layering with accented down-up",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "guitar"
          ],
    
          "approaches": ["chop"],
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
            5,
            6,
            7
          ],
          "accentProfile": [
            1,
            0.7,
            0.9,
            0.65,
            0.85,
            0.75
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.85,
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
              "id": "rock-acoustic-strum-v-01",
              "parentPatternId": "rock-acoustic-strum",
              "name": "Acoustic Strum — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                5,
                7
              ],
              "accentProfile": [
                0.95,
                0.6499999999999999,
                0.85,
                0.6
              ],
              "velocityProfile": [
                0.87,
                0.5700000000000001,
                0.77,
                0.52
              ],
              "microtimingOffset": [
                -3,
                6,
                -3,
                6
              ]
            },
            {
              "id": "rock-acoustic-strum-v-02",
              "parentPatternId": "rock-acoustic-strum",
              "name": "Acoustic Strum — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                4,
                5,
                6,
                7
              ],
              "accentProfile": [
                0.96,
                0.7799999999999999,
                0.86,
                0.73,
                0.8099999999999999,
                0.83
              ],
              "velocityProfile": [
                1,
                0.63,
                0.83,
                0.6599999999999999,
                0.78,
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
          "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "rock"
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
          "id": "rock-lead-bend",
          "worldId": "rock",
          "styleIds": ["rock-hard-rock"],
          "name": "Lead Guitar Bend",
          "family": "Guitar",
          "category": "groove",
          "description": "Sustained bending lead note answering vocal",
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
          "subdivisions": 8,
          "onsetGrid": [
            2,
            6
          ],
          "accentProfile": [
            0.88,
            0.96
          ],
          "velocityProfile": [
            0.82,
            0.92
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
              "id": "rock-lead-bend-v-01-safe",
              "parentPatternId": "rock-lead-bend",
              "name": "Lead Guitar Bend — played",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                2,
                6
              ],
              "accentProfile": [
                0.83,
                1
              ],
              "velocityProfile": [
                0.85,
                0.88
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            },
            {
              "id": "rock-lead-bend-v-02-safe",
              "parentPatternId": "rock-lead-bend",
              "name": "Lead Guitar Bend — played",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                2,
                6
              ],
              "accentProfile": [
                0.83,
                1
              ],
              "velocityProfile": [
                0.85,
                0.88
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 1,
          "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "rock"
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
          "id": "rock-comp-16",
          "worldId": "rock",
          "styleIds": ["rock-hard-rock"],
          "name": "Backbeat Comping",
          "family": "Backbeat",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports the groove while leaving room for the lead.",
          "tags": [
            "rock",
            "backbeat",
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
            "keys"
          ],
          "compatibleRoles": [
            "harmony"
          ],
          "compatibleInstruments": [
            "guitar",
            "keys"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            3,
            7,
            11,
            15
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68
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
            "chorus"
          ],
    
    
          "variants": [
            {
              "id": "rock-comp-16-v-01",
              "parentPatternId": "rock-comp-16",
              "name": "Backbeat Comping — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                3,
                11,
                15
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
              "id": "rock-comp-16-v-02",
              "parentPatternId": "rock-comp-16",
              "name": "Backbeat Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                3,
                7,
                11,
                15
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
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
          "provenance": "GenreDAW catalog rebuild from existing Rock world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "rock",
            "backbeat"
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
          "id": "rock-verse-17",
          "worldId": "rock",
          "styleIds": ["rock-hard-rock"],
          "name": "Solo Verse Variation",
          "family": "Solo",
          "category": "groove",
          "description": "A restrained verse variation uses intentional space to keep the arrangement uncluttered.",
          "tags": [
            "rock",
            "solo",
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
            3,
            5,
            7,
            9,
            11,
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
              "id": "rock-verse-17-v-01",
              "parentPatternId": "rock-verse-17",
              "name": "Solo Verse Variation — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                5,
                7,
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
              "id": "rock-verse-17-v-02",
              "parentPatternId": "rock-verse-17",
              "name": "Solo Verse Variation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                3,
                5,
                7,
                9,
                11,
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
          "provenance": "GenreDAW catalog rebuild from existing Rock world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "rock",
            "solo"
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
,
  {
    "id": "tech-rock-rock-backbeat",
    "worldId": "rock",
    "styleIds": [
      "rock-rock-roll",
      "rock-southern-rock",
      "rock-math-rock"
    ],
    "name": "backbeat",
    "shortName": "backbeat",
    "family": "rock",
    "category": "groove",
    "description": "Technique: rock backbeat",
    "tags": [
      "rock",
      "rock backbeat"
    ],
    "approaches": [
      "rock backbeat"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
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
      12
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
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
      "rock",
      "rock backbeat"
    ],
    "techniques": [
      "rock backbeat"
    ]
  },
  {
    "id": "tech-rock-motorik-beat",
    "worldId": "rock",
    "styleIds": [
      "rock-british-invasion",
      "rock-krautrock"
    ],
    "name": "motorik beat",
    "shortName": "motorik beat",
    "family": "rock",
    "category": "groove",
    "description": "Technique: motorik beat",
    "tags": [
      "rock",
      "motorik beat"
    ],
    "approaches": [
      "motorik beat"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "percussion"
    ],
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
      12
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
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
      "rock",
      "motorik beat"
    ],
    "techniques": [
      "motorik beat"
    ]
  },
  {
    "id": "tech-rock-odd-meter-riff",
    "worldId": "rock",
    "styleIds": [
      "rock-rock-roll",
      "rock-math-rock"
    ],
    "name": "odd-meter riff",
    "shortName": "odd-meter riff",
    "family": "rock",
    "category": "groove",
    "description": "Technique: odd-meter riff",
    "tags": [
      "rock",
      "odd-meter riff"
    ],
    "approaches": [
      "odd-meter riff"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "lead"
    ],
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
      12
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
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
      "rock",
      "odd-meter riff"
    ],
    "techniques": [
      "odd-meter riff"
    ]
  },
  {
    "id": "tech-rock-arpeggiated-shoegaze-wall",
    "worldId": "rock",
    "styleIds": [
      "rock-dream-pop"
    ],
    "name": "arpeggiated shoegaze wall",
    "shortName": "arpeggiated shoegaze wall",
    "family": "rock",
    "category": "groove",
    "description": "Technique: arpeggiated shoegaze wall",
    "tags": [
      "rock",
      "arpeggiated shoegaze wall"
    ],
    "approaches": [
      "arpeggiated shoegaze wall"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "lead"
    ],
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
      12
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
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
      "rock",
      "arpeggiated shoegaze wall"
    ],
    "techniques": [
      "arpeggiated shoegaze wall"
    ]
  },
  {
    "id": "style-rock-rock-roll-signature",
    "worldId": "rock",
    "styleIds": [
      "rock-rock-roll"
    ],
    "name": "& Roll",
    "shortName": "& Roll",
    "family": "rock",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "rock",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "electric-guitar",
      "piano",
      "bass",
      "drums"
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
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "rock",
      "signature"
    ],
    "techniques": [
      "boogie riff",
      "rock backbeat",
      "dual-guitar harmony",
      "guitar octave",
      "odd-meter riff"
    ]
  },
  {
    "id": "style-rock-british-invasion-signature",
    "worldId": "rock",
    "styleIds": [
      "rock-british-invasion"
    ],
    "name": "British Invasion",
    "shortName": "British Invasion",
    "family": "rock",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "rock",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "electric-guitar",
      "bass",
      "drums",
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
      1,
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "rock",
      "signature"
    ],
    "techniques": [
      "dual-guitar harmony",
      "guitar octave",
      "motorik beat"
    ]
  },
  {
    "id": "style-rock-southern-rock-signature",
    "worldId": "rock",
    "styleIds": [
      "rock-southern-rock"
    ],
    "name": "Southern Rock",
    "shortName": "Southern Rock",
    "family": "rock",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "rock",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "electric-guitar",
      "bass",
      "drums",
      "steel-guitar"
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
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "rock",
      "signature"
    ],
    "techniques": [
      "dual-guitar harmony",
      "guitar octave",
      "rock backbeat"
    ]
  },
  {
    "id": "style-rock-krautrock-signature",
    "worldId": "rock",
    "styleIds": [
      "rock-krautrock"
    ],
    "name": "Krautrock",
    "shortName": "Krautrock",
    "family": "rock",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "rock",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "electric-guitar",
      "bass",
      "drums",
      "synth"
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
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "rock",
      "signature"
    ],
    "techniques": [
      "motorik beat"
    ]
  },
  {
    "id": "style-rock-math-rock-signature",
    "worldId": "rock",
    "styleIds": [
      "rock-math-rock"
    ],
    "name": "Math Rock",
    "shortName": "Math Rock",
    "family": "rock",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "rock",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "electric-guitar",
      "bass",
      "drums"
    ],
    "meter": "5/4",
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
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "rock",
      "signature"
    ],
    "techniques": [
      "odd-meter riff",
      "boogie riff",
      "dual-guitar harmony",
      "guitar octave",
      "rock backbeat"
    ]
  },
  {
    "id": "style-rock-dream-pop-signature",
    "worldId": "rock",
    "styleIds": [
      "rock-dream-pop"
    ],
    "name": "Dream Pop",
    "shortName": "Dream Pop",
    "family": "rock",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "rock",
      "signature"
    ],
    "approaches": [
      "signature",
      "groove"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "rhythm",
      "bass",
      "harmony"
    ],
    "instruments": [
      "electric-guitar",
      "synth",
      "bass",
      "drums"
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
      0.7,
      0.7,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1,
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "rock",
      "signature"
    ],
    "techniques": [
      "dual-guitar harmony",
      "arpeggiated shoegaze wall",
      "guitar octave"
    ]
  }
];


const ROCK_WORLD_PATTERNS_ROLEPATTERN: MusicalPattern[] = [
  {
          "id": "rock-roster-",
          "worldId": "rock",
          "styleIds": ["rock-hard-rock"],
          "name": "part",
          "family": "Build",
          "category": "rolePattern",
          "description": "A default-roster coverage pattern gives each ensemble role a playable part.",
          "tags": [
            "rock",
            "build",
            "roster",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "electric-guitar"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "electric-guitar"
          ],
          "compatibleRoles": [
            "electric-guitar"
          ],
          "compatibleInstruments": [
            "electric-guitar"
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
            13,
            15
          ],
          "accentProfile": [
            1,
            0.72,
            0.72,
            1,
            0.72,
            0.72
          ],
          "velocityProfile": [
            0.95,
            0.68,
            0.68,
            0.95,
            0.68,
            0.68
          ],
          "syncopationRating": 0,
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
              "id": "rock-roster-13-v-01",
              "parentPatternId": "rock-roster-",
              "name": "Build Texture — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                8,
                12
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
              "id": "rock-roster-13-v-02",
              "parentPatternId": "rock-roster-",
              "name": "Build Texture — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
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
          "provenance": "GenreDAW catalog rebuild from existing Rock world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "rock",
            "build"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 1,
          "weight": 0.7,
          "enabled": true
        }
];


const ROCK_WORLD_PATTERNS_INTERACTIONPATTERN: MusicalPattern[] = [
  {
          "id": "rock-call-14",
          "worldId": "rock",
          "styleIds": ["rock-hard-rock"],
          "name": "Break Response",
          "family": "Break",
          "category": "interactionPattern",
          "description": "A call-and-response shape that gives the lead and accompaniment distinct roles.",
          "tags": [
            "rock",
            "break",
            "call",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "electric-guitar"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "electric-guitar"
          ],
          "compatibleRoles": [
            "electric-guitar"
          ],
          "compatibleInstruments": [
            "electric-guitar"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            1,
            5,
            9,
            13
          ],
          "accentProfile": [
            0.95,
            0.62,
            0.95,
            0.62
          ],
          "velocityProfile": [
            0.95,
            0.57,
            0.95,
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
              "id": "rock-call-14-v-01",
              "parentPatternId": "rock-call-14",
              "name": "Break Response — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                1,
                9,
                13
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
              "id": "rock-call-14-v-02",
              "parentPatternId": "rock-call-14",
              "name": "Break Response — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                1,
                5,
                9,
                13
              ],
              "accentProfile": [
                0.9099999999999999,
                0.7,
                0.9099999999999999,
                0.7
              ],
              "velocityProfile": [
                1,
                0.5499999999999999,
                0.9299999999999999,
                0.6799999999999999
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5
              ]
            },
            {
              "id": "rock-call-14-v-03",
              "parentPatternId": "rock-call-14",
              "name": "Break Response — transition",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup or closing gesture to give the phrase a more decisive ending.",
              "onsetGrid": [
                1,
                5,
                9,
                13,
                14,
                15
              ],
              "accentProfile": [
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
                0.98,
                0.98
              ],
              "microtimingOffset": [
                0,
                0,
                0,
                0,
                -6,
                -6
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild from existing Rock world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "rock",
            "break"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 1,
          "weight": 0.7,
          "enabled": true
        }
];


const ROCK_WORLD_PATTERNS_COMPING: MusicalPattern[] = [
  {
    "id": "tech-rock-power-chord",
    "worldId": "rock",
    "styleIds": [],
    "name": "power chord",
    "shortName": "power chord",
    "family": "rock",
    "category": "comping",
    "description": "Technique: power chord",
    "tags": [
      "rock",
      "power chord"
    ],
    "approaches": [
      "power chord"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "guitar",
      "lead",
      "comp"
    ],
    "instruments": [
      "electric-guitar"
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
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
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
      "rock",
      "power chord"
    ],
    "techniques": [
      "power chord"
    ]
  },
  {
    "id": "tech-rock-palm-mute",
    "worldId": "rock",
    "styleIds": [],
    "name": "palm mute",
    "shortName": "palm mute",
    "family": "rock",
    "category": "comping",
    "description": "Technique: palm mute",
    "tags": [
      "rock",
      "palm mute"
    ],
    "approaches": [
      "palm mute"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "guitar",
      "lead",
      "comp"
    ],
    "instruments": [
      "electric-guitar"
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
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
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
      "rock",
      "palm mute"
    ],
    "techniques": [
      "palm mute"
    ]
  },
  {
    "id": "tech-rock-guitar-octave",
    "worldId": "rock",
    "styleIds": [
      "rock-rock-roll",
      "rock-british-invasion",
      "rock-southern-rock",
      "rock-math-rock",
      "rock-dream-pop"
    ],
    "name": "guitar octave",
    "shortName": "guitar octave",
    "family": "rock",
    "category": "comping",
    "description": "Technique: guitar octave",
    "tags": [
      "rock",
      "guitar octave"
    ],
    "approaches": [
      "guitar octave"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "guitar",
      "lead",
      "comp"
    ],
    "instruments": [
      "electric-guitar"
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
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
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
      "rock",
      "guitar octave"
    ],
    "techniques": [
      "guitar octave"
    ]
  },
  {
    "id": "tech-rock-dual-guitar-harmony",
    "worldId": "rock",
    "styleIds": [
      "rock-rock-roll",
      "rock-british-invasion",
      "rock-southern-rock",
      "rock-math-rock",
      "rock-dream-pop"
    ],
    "name": "dual-guitar harmony",
    "shortName": "dual-guitar harmony",
    "family": "rock",
    "category": "comping",
    "description": "Technique: dual-guitar harmony",
    "tags": [
      "rock",
      "dual-guitar harmony"
    ],
    "approaches": [
      "dual-guitar harmony"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "harmony",
      "lead"
    ],
    "instruments": [
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
      1,
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
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
      "rock",
      "dual-guitar harmony"
    ],
    "techniques": [
      "dual-guitar harmony"
    ]
  }
];


const ROCK_WORLD_PATTERNS_LEAD: MusicalPattern[] = [
  {
    "id": "tech-rock-boogie-riff",
    "worldId": "rock",
    "styleIds": [
      "rock-rock-roll",
      "rock-math-rock"
    ],
    "name": "boogie riff",
    "shortName": "boogie riff",
    "family": "rock",
    "category": "lead",
    "description": "Technique: boogie riff",
    "tags": [
      "rock",
      "boogie riff"
    ],
    "approaches": [
      "boogie riff"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "guitar",
      "lead"
    ],
    "instruments": [
      "electric-guitar"
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
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
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
      "rock",
      "boogie riff"
    ],
    "techniques": [
      "boogie riff"
    ]
  }
];


const ROCK_WORLD_PATTERNS_TEXTURE: MusicalPattern[] = [
  {
    "id": "tech-rock-feedback-swell",
    "worldId": "rock",
    "styleIds": [],
    "name": "feedback swell",
    "shortName": "feedback swell",
    "family": "rock",
    "category": "texture",
    "description": "Technique: feedback swell",
    "tags": [
      "rock",
      "feedback swell"
    ],
    "approaches": [
      "feedback swell"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "texture"
    ],
    "instruments": [
      "synth"
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
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
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
      "rock",
      "feedback swell"
    ],
    "techniques": [
      "feedback swell"
    ]
  },
  {
    "id": "tech-rock-crescendo-architecture",
    "worldId": "rock",
    "styleIds": [],
    "name": "crescendo architecture",
    "shortName": "crescendo architecture",
    "family": "rock",
    "category": "texture",
    "description": "Technique: crescendo architecture",
    "tags": [
      "rock",
      "crescendo architecture"
    ],
    "approaches": [
      "crescendo architecture"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "texture",
      "harmony"
    ],
    "instruments": [
      "strings"
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
      0.65,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92
    ],
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
      "rock",
      "crescendo architecture"
    ],
    "techniques": [
      "crescendo architecture"
    ]
  }
];

const PATTERN_GROUPS: Record<string, MusicalPattern[]> = {
  "ostinato": ROCK_WORLD_PATTERNS_OSTINATO,
  "phrasePattern": ROCK_WORLD_PATTERNS_PHRASEPATTERN,
  "sectionPattern": ROCK_WORLD_PATTERNS_SECTIONPATTERN,
  "fill": ROCK_WORLD_PATTERNS_FILL,
  "break": ROCK_WORLD_PATTERNS_BREAK,
  "cadence": ROCK_WORLD_PATTERNS_CADENCE,
  "cell": ROCK_WORLD_PATTERNS_CELL,
  "groove": ROCK_WORLD_PATTERNS_GROOVE,
  "rolePattern": ROCK_WORLD_PATTERNS_ROLEPATTERN,
  "interactionPattern": ROCK_WORLD_PATTERNS_INTERACTIONPATTERN,
  "comping": ROCK_WORLD_PATTERNS_COMPING,
  "lead": ROCK_WORLD_PATTERNS_LEAD,
  "texture": ROCK_WORLD_PATTERNS_TEXTURE,
};
const PATTERN_ORDER: { category: string; index: number }[] = [{"category":"ostinato","index":0},{"category":"phrasePattern","index":0},{"category":"sectionPattern","index":0},{"category":"ostinato","index":1},{"category":"fill","index":0},{"category":"break","index":0},{"category":"cadence","index":0},{"category":"cell","index":0},{"category":"groove","index":0},{"category":"groove","index":1},{"category":"groove","index":2},{"category":"groove","index":3},{"category":"rolePattern","index":0},{"category":"interactionPattern","index":0},{"category":"ostinato","index":2},{"category":"groove","index":4},{"category":"groove","index":5},{"category":"comping","index":0},{"category":"comping","index":1},{"category":"comping","index":2},{"category":"comping","index":3},{"category":"groove","index":6},{"category":"groove","index":7},{"category":"groove","index":8},{"category":"groove","index":9},{"category":"groove","index":10},{"category":"groove","index":11},{"category":"groove","index":12},{"category":"groove","index":13},{"category":"groove","index":14},{"category":"groove","index":15},{"category":"lead","index":0},{"category":"texture","index":0},{"category":"texture","index":1}];

export const ROCK_WORLD_PATTERNS: Partial<GenreWorld> = {
  patterns: PATTERN_ORDER.map(({ category, index }) => PATTERN_GROUPS[category][index]),
};
