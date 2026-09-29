import type { MusicalPattern } from '../../../schema';

export const ROCK_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
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
              "name": "7/8 Riff — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
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
              "description": "Keeps the rhythm intact but moves",
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
              "name": "Prog Synth Arp — sparse variation",
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
              "name": "Acoustic Strum — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
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
              "description": "Keeps the rhythm intact but moves",
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
              "name": "Lead Guitar Bend — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
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
              "name": "Lead Guitar Bend — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A light played variation for sparse",
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
          "description": "A genre-shaped accompaniment cell that supports",
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
              "name": "Backbeat Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
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
              "description": "Keeps the rhythm intact but moves",
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
          "description": "A restrained verse variation with intentional",
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
              "name": "Solo Verse Variation — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
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
              "description": "Keeps the rhythm intact but moves",
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
];
