import type { MusicalPattern } from '../../../schema';

export const FUNK_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "funk-ghost-snares",
          "worldId": "funk",
          "styleIds": ["funk-p-funk"],
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
    
          "approaches": ["groove"],
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
              "id": "funk-ghost-snares-v-01",
              "parentPatternId": "funk-ghost-snares",
              "name": "Ghost Snares — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "id": "funk-ghost-snares-v-02",
              "parentPatternId": "funk-ghost-snares",
              "name": "Ghost Snares — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
    
    
          "articulations": ["accented"]
        },
  {
          "id": "funk-clavinet",
          "worldId": "funk",
          "styleIds": ["funk-p-funk"],
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
    
          "approaches": ["groove"],
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
              "id": "funk-clavinet-v-01",
              "parentPatternId": "funk-clavinet",
              "name": "Clavinet Sync — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "id": "funk-clavinet-v-02",
              "parentPatternId": "funk-clavinet",
              "name": "Clavinet Sync — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
    
          "articulations": ["accented"]
        },
  {
          "id": "funk-horn-section",
          "worldId": "funk",
          "styleIds": ["funk-p-funk"],
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
    
          "approaches": ["groove"],
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
              "id": "funk-horn-section-v-01",
              "parentPatternId": "funk-horn-section",
              "name": "Horn Section Hits — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "id": "funk-horn-section-v-02",
              "parentPatternId": "funk-horn-section",
              "name": "Horn Section Hits — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
    
          "articulations": ["accented"]
        },
  {
          "id": "funk-soul-bass",
          "worldId": "funk",
          "styleIds": ["soul-neo-soul"],
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
    
          "approaches": ["walking"],
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
              "id": "funk-soul-bass-v-01",
              "parentPatternId": "funk-soul-bass",
              "name": "Motown Bass — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "id": "funk-soul-bass-v-02",
              "parentPatternId": "funk-soul-bass",
              "name": "Motown Bass — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
    
          "articulations": ["accented"]
        },
  {
          "id": "funk-hihat-open",
          "worldId": "funk",
          "styleIds": ["funk-p-funk"],
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
    
          "approaches": ["groove"],
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
              "id": "funk-hihat-open-v-01",
              "parentPatternId": "funk-hihat-open",
              "name": "Open Hi-Hat — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "id": "funk-hihat-open-v-02",
              "parentPatternId": "funk-hihat-open",
              "name": "Open Hi-Hat — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
    
          "articulations": ["accented"]
        },
  {
          "id": "funk-neo-soul-beat",
          "worldId": "funk",
          "styleIds": ["soul-neo-soul"],
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
              "id": "funk-neo-soul-beat-v-01",
              "parentPatternId": "funk-neo-soul-beat",
              "name": "Neo-Soul Drag — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "id": "funk-neo-soul-beat-v-02",
              "parentPatternId": "funk-neo-soul-beat",
              "name": "Neo-Soul Drag — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
    
          "articulations": ["accented"]
        },
  {
          "id": "funk-wah-guitar",
          "worldId": "funk",
          "styleIds": ["funk-p-funk"],
          "name": "Wah-Wah Guitar",
          "family": "Guitar",
          "category": "groove",
          "description": "Expressive wah-pedal rhythm sweeps through the chord changes.",
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
              "id": "funk-wah-guitar-v-01",
              "parentPatternId": "funk-wah-guitar",
              "name": "Wah-Wah Guitar — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "id": "funk-wah-guitar-v-02",
              "parentPatternId": "funk-wah-guitar",
              "name": "Wah-Wah Guitar — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
    
          "articulations": ["accented"]
        },
  {
          "id": "funk-comp-16",
          "worldId": "funk",
          "styleIds": ["funk-p-funk"],
          "name": "Clav Comping",
          "family": "Clav",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports the groove while leaving room for the lead.",
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
              "id": "funk-comp-16-v-01",
              "parentPatternId": "funk-comp-16",
              "name": "Clav Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "id": "funk-comp-16-v-02",
              "parentPatternId": "funk-comp-16",
              "name": "Clav Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
        }
,
  {
    "id": "tech-funk-james-brown-one",
    "worldId": "funk",
    "styleIds": [
      "funk-one-pocket-funk-james-brown"
    ],
    "name": "James Brown “one”",
    "shortName": "James Brown “one”",
    "family": "funk",
    "category": "groove",
    "description": "Technique: James Brown “one”",
    "tags": [
      "funk",
      "James Brown “one”"
    ],
    "approaches": [
      "James Brown “one”"
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
      "funk",
      "James Brown “one”"
    ],
    "techniques": [
      "James Brown “one”"
    ]
  },
  {
    "id": "tech-funk-vamp-extension",
    "worldId": "funk",
    "styleIds": [
      "funk-jazz-funk",
      "funk-p-funk-cosmic"
    ],
    "name": "vamp extension",
    "shortName": "vamp extension",
    "family": "funk",
    "category": "groove",
    "description": "Technique: vamp extension",
    "tags": [
      "funk",
      "vamp extension"
    ],
    "approaches": [
      "vamp extension"
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
      "funk",
      "vamp extension"
    ],
    "techniques": [
      "vamp extension"
    ]
  },
  {
    "id": "tech-funk-rhythmic-stop",
    "worldId": "funk",
    "styleIds": [
      "funk-one-pocket-funk-james-brown",
      "funk-p-funk-cosmic"
    ],
    "name": "rhythmic stop",
    "shortName": "rhythmic stop",
    "family": "funk",
    "category": "groove",
    "description": "Technique: rhythmic stop",
    "tags": [
      "funk",
      "rhythmic stop"
    ],
    "approaches": [
      "rhythmic stop"
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
      "funk",
      "rhythmic stop"
    ],
    "techniques": [
      "rhythmic stop"
    ]
  },
  {
    "id": "tech-funk-pocket-displacement",
    "worldId": "funk",
    "styleIds": [],
    "name": "pocket displacement",
    "shortName": "pocket displacement",
    "family": "funk",
    "category": "groove",
    "description": "Technique: pocket displacement",
    "tags": [
      "funk",
      "pocket displacement"
    ],
    "approaches": [
      "pocket displacement"
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
      "funk",
      "pocket displacement"
    ],
    "techniques": [
      "pocket displacement"
    ]
  },
  {
    "id": "style-funk-one-pocket-funk-james-brown-signature",
    "worldId": "funk",
    "styleIds": [
      "funk-one-pocket-funk-james-brown"
    ],
    "name": "One-Pocket Funk — James Brown Signature Cell",
    "shortName": "One-Pocket Funk — James Brown Cell",
    "family": "funk",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "funk",
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
      "brass"
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
      "funk",
      "signature"
    ],
    "techniques": [
      "rhythmic stop",
      "16th-note guitar scratch",
      "James Brown “one”",
      "ghost-note bass",
      "funk horn stab",
      "muted guitar"
    ]
  },
  {
    "id": "style-funk-minneapolis-funk-signature",
    "worldId": "funk",
    "styleIds": [
      "funk-minneapolis-funk"
    ],
    "name": "Minneapolis Funk Signature Cell",
    "shortName": "Minneapolis Funk Cell",
    "family": "funk",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "funk",
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
      "funk",
      "signature"
    ],
    "techniques": [
      "syncopated bass octave",
      "clavinet riff",
      "muted guitar",
      "16th-note guitar scratch",
      "funk horn stab",
      "ghost-note bass"
    ]
  },
  {
    "id": "style-funk-jazz-funk-signature",
    "worldId": "funk",
    "styleIds": [
      "funk-jazz-funk"
    ],
    "name": "Jazz-Funk Signature Cell",
    "shortName": "Jazz-Funk Cell",
    "family": "funk",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "funk",
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
      "rhodes",
      "clavinet",
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
      "funk",
      "signature"
    ],
    "techniques": [
      "clavinet riff",
      "funk horn stab",
      "vamp extension"
    ]
  },
  {
    "id": "style-funk-p-funk-cosmic-signature",
    "worldId": "funk",
    "styleIds": [
      "funk-p-funk-cosmic"
    ],
    "name": "P-Funk Cosmic Signature Cell",
    "shortName": "P-Funk Cosmic Cell",
    "family": "funk",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "funk",
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
      "bass",
      "drums",
      "electric-guitar",
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
      "funk",
      "signature"
    ],
    "techniques": [
      "funk horn stab",
      "rhythmic stop",
      "vamp extension"
    ]
  }
];
