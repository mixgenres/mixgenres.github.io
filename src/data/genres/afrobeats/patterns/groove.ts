import type { MusicalPattern } from '../../../schema';

export const AFROBEATS_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
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
        }
];
