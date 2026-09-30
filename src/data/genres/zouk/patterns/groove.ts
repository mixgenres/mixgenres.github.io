import type { MusicalPattern } from '../../../schema';

export const ZOUK_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "zouk-ti-bwa",
          "worldId": "zouk",
          "styleIds": ["zouk-zouk-beton"],
          "name": "Ti-Bwa Woodblock Ostinato",
          "family": "Percussion",
          "category": "groove",
          "description": "Traditional Martinique and Guadeloupe ti-bwa stick patterns mark the pulse.",
          "tags": [
            "zouk",
            "ti-bwa",
            "percussion",
            "woodblock",
            "antilles"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "percussion"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "percussion"
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
            0.78,
            0.92,
            0.74,
            0.94,
            0.72,
            0.88
          ],
          "velocityProfile": [
            0.95,
            0.72,
            0.88,
            0.7,
            0.9,
            0.68,
            0.84
          ],
          "supportedEnergy": [4, 5],
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
              "id": "zouk-ti-bwa-v-01",
              "parentPatternId": "zouk-ti-bwa",
              "name": "Ti-Bwa Woodblock Ostinato — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                8,
                12,
                14
              ],
              "accentProfile": [
                0.95,
                0.73,
                0.87,
                0.69,
                0.8899999999999999
              ],
              "velocityProfile": [
                0.87,
                0.64,
                0.8,
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
              "id": "zouk-ti-bwa-v-02",
              "parentPatternId": "zouk-ti-bwa",
              "name": "Ti-Bwa Woodblock Ostinato — accent shift",
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
                0.86,
                0.88,
                0.82,
                0.8999999999999999,
                0.7999999999999999,
                0.84
              ],
              "velocityProfile": [
                1,
                0.7,
                0.86,
                0.76,
                0.88,
                0.66,
                0.8999999999999999
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
          "provenance": "Zouk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "zouk"
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
          "id": "zouk-synth-chords",
          "worldId": "zouk",
          "styleIds": ["zouk-zouk-love"],
          "name": "Zouk DX7 Synth Stabs",
          "family": "Synth",
          "category": "groove",
          "description": "Syncopated DX7 electric piano and FM",
          "tags": [
            "zouk",
            "dx7",
            "synth",
            "keys"
          ],
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
          "subdivisions": 16,
          "onsetGrid": [
            3,
            6,
            10,
            14
          ],
          "accentProfile": [
            0.88,
            0.98,
            0.88,
            1
          ],
          "velocityProfile": [
            0.82,
            0.94,
            0.82,
            0.96
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
              "id": "zouk-synth-chords-v-01",
              "parentPatternId": "zouk-synth-chords",
              "name": "Zouk DX7 Synth Stabs — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                3,
                10,
                14
              ],
              "accentProfile": [
                0.83,
                0.9299999999999999,
                0.83
              ],
              "velocityProfile": [
                0.74,
                0.86,
                0.74
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "zouk-synth-chords-v-02",
              "parentPatternId": "zouk-synth-chords",
              "name": "Zouk DX7 Synth Stabs — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                3,
                6,
                10,
                14
              ],
              "accentProfile": [
                0.84,
                1,
                0.84,
                1
              ],
              "velocityProfile": [
                0.8799999999999999,
                0.9199999999999999,
                0.7999999999999999,
                1
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
          "provenance": "Zouk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "zouk"
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
          "id": "zouk-snare",
          "worldId": "zouk",
          "styleIds": ["zouk-zouk-beton"],
          "name": "Zouk Snare Rimshot",
          "family": "Beat",
          "category": "groove",
          "description": "Snare rimshot on the backbeat locking",
          "tags": [
            "zouk",
            "snare",
            "drums"
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
            4,
            12
          ],
          "accentProfile": [
            0.95,
            1
          ],
          "velocityProfile": [
            0.9,
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
              "id": "zouk-snare-v-01-safe",
              "parentPatternId": "zouk-snare",
              "name": "Zouk Snare Rimshot — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                4,
                12
              ],
              "accentProfile": [
                0.8999999999999999,
                1
              ],
              "velocityProfile": [
                0.93,
                0.9099999999999999
              ],
              "microtimingOffset": [
                -2,
                4
              ]
            },
            {
              "id": "zouk-snare-v-02-safe",
              "parentPatternId": "zouk-snare",
              "name": "Zouk Snare Rimshot — played variation",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "A lightly played variation for sparse sections keeps the groove present without adding density.",
              "onsetGrid": [
                4,
                12
              ],
              "accentProfile": [
                0.8999999999999999,
                1
              ],
              "velocityProfile": [
                0.93,
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
          "provenance": "Zouk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "zouk"
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
          "id": "zouk-horn-stabs",
          "worldId": "zouk",
          "styleIds": ["zouk-zouk-beton"],
          "name": "Kassav Horn Section Stabs",
          "family": "Brass",
          "category": "groove",
          "description": "Punchy Kassav-style brass horn section stabs",
          "tags": [
            "zouk",
            "brass",
            "horns",
            "kassav",
            "antilles"
          ],
          "scopes": [
            "measure"
          ],
          "roles": [
            "lead",
            "brass"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "trumpet",
            "brass"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            3,
            6,
            11,
            14
          ],
          "accentProfile": [
            0.95,
            1,
            0.95,
            1
          ],
          "velocityProfile": [
            0.9,
            0.96,
            0.9,
            0.96
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "chorus",
            "solo"
          ],
          "variants": [
            {
              "id": "zouk-horn-stabs-v-01",
              "parentPatternId": "zouk-horn-stabs",
              "name": "Kassav Horn Section Stabs — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                3,
                11,
                14
              ],
              "accentProfile": [
                0.8999999999999999,
                0.95,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.8200000000000001,
                0.88,
                0.8200000000000001
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "zouk-horn-stabs-v-02",
              "parentPatternId": "zouk-horn-stabs",
              "name": "Kassav Horn Section Stabs — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                3,
                6,
                11,
                14
              ],
              "accentProfile": [
                0.9099999999999999,
                1,
                0.9099999999999999,
                1
              ],
              "velocityProfile": [
                0.96,
                0.94,
                0.88,
                1
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
          "provenance": "Zouk catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "zouk"
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
          "id": "zouk-comp-12",
          "worldId": "zouk",
          "styleIds": ["zouk-zouk-beton"],
          "name": "Zouk Love Comping",
          "family": "Zouk Love",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports the groove while leaving room for the lead.",
          "tags": [
            "zouk",
            "zouk-zouk-love",
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
            2,
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
              "id": "zouk-comp-12-v-01",
              "parentPatternId": "zouk-comp-12",
              "name": "Zouk Love Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                2,
                8,
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
              "id": "zouk-comp-12-v-02",
              "parentPatternId": "zouk-comp-12",
              "name": "Zouk Love Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
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
          "provenance": "GenreDAW catalog rebuild from existing Zouk world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "zouk",
            "zouk-zouk-love"
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
          "id": "zouk-verse-14",
          "worldId": "zouk",
          "styleIds": ["zouk-zouk-beton"],
          "name": "Hook Verse Variation",
          "family": "Hook",
          "category": "groove",
          "description": "A restrained verse variation uses intentional space to keep the arrangement uncluttered.",
          "tags": [
            "zouk",
            "hook",
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
            0,
            1,
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
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "middle"
          ],
          "sectionUsage": [
            "verse"
          ],
    
    
          "variants": [
            {
              "id": "zouk-verse-14-v-01",
              "parentPatternId": "zouk-verse-14",
              "name": "Hook Verse Variation — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                3,
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
              "id": "zouk-verse-14-v-02",
              "parentPatternId": "zouk-verse-14",
              "name": "Hook Verse Variation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
          "provenance": "GenreDAW catalog rebuild from existing Zouk world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "zouk",
            "hook"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 1,
          "enabled": true
        }
];
