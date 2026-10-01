import type { MusicalPattern } from '../../../schema';

export const METAL_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
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
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
          "id": "metal-comp-13",
          "worldId": "metal",
          "styleIds": ["metal-heavy-metal"],
          "name": "Blast Comping",
          "family": "Blast",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports the groove while leaving room for the lead.",
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
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
          "id": "metal-verse-15",
          "worldId": "metal",
          "styleIds": ["metal-heavy-metal"],
          "name": "Breakdown Verse Variation",
          "family": "Breakdown",
          "category": "groove",
          "description": "A restrained verse variation uses intentional space to keep the arrangement uncluttered.",
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
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
        }
,
  {
    "id": "tech-metal-gallop",
    "worldId": "metal",
    "styleIds": [
      "metal-nwobhm"
    ],
    "name": "gallop",
    "shortName": "gallop",
    "family": "metal",
    "category": "groove",
    "description": "Technique: gallop",
    "tags": [
      "metal",
      "gallop"
    ],
    "approaches": [
      "gallop"
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
      "metal",
      "gallop"
    ],
    "techniques": [
      "gallop"
    ]
  },
  {
    "id": "tech-metal-palm-muted-chug",
    "worldId": "metal",
    "styleIds": [
      "metal-groove-metal"
    ],
    "name": "palm-muted chug",
    "shortName": "palm-muted chug",
    "family": "metal",
    "category": "groove",
    "description": "Technique: palm-muted chug",
    "tags": [
      "metal",
      "palm-muted chug"
    ],
    "approaches": [
      "palm-muted chug"
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
      "metal",
      "palm-muted chug"
    ],
    "techniques": [
      "palm-muted chug"
    ]
  },
  {
    "id": "tech-metal-tremolo-picking",
    "worldId": "metal",
    "styleIds": [
      "metal-blackgaze"
    ],
    "name": "tremolo picking",
    "shortName": "tremolo picking",
    "family": "metal",
    "category": "groove",
    "description": "Technique: tremolo picking",
    "tags": [
      "metal",
      "tremolo picking"
    ],
    "approaches": [
      "tremolo picking"
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
      "metal",
      "tremolo picking"
    ],
    "techniques": [
      "tremolo picking"
    ]
  },
  {
    "id": "tech-metal-blast-beat",
    "worldId": "metal",
    "styleIds": [
      "metal-deathcore",
      "metal-blackgaze"
    ],
    "name": "blast beat",
    "shortName": "blast beat",
    "family": "metal",
    "category": "groove",
    "description": "Technique: blast beat",
    "tags": [
      "metal",
      "blast beat"
    ],
    "approaches": [
      "blast beat"
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
      "metal",
      "blast beat"
    ],
    "techniques": [
      "blast beat"
    ]
  },
  {
    "id": "tech-metal-double-kick",
    "worldId": "metal",
    "styleIds": [
      "metal-groove-metal"
    ],
    "name": "double-kick",
    "shortName": "double-kick",
    "family": "metal",
    "category": "groove",
    "description": "Technique: double-kick",
    "tags": [
      "metal",
      "double-kick"
    ],
    "approaches": [
      "double-kick"
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
      "metal",
      "double-kick"
    ],
    "techniques": [
      "double-kick"
    ]
  },
  {
    "id": "tech-metal-breakdown",
    "worldId": "metal",
    "styleIds": [
      "metal-metalcore",
      "metal-deathcore"
    ],
    "name": "breakdown",
    "shortName": "breakdown",
    "family": "metal",
    "category": "groove",
    "description": "Technique: breakdown",
    "tags": [
      "metal",
      "breakdown"
    ],
    "approaches": [
      "breakdown"
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
      "drums",
      "hand-percussion"
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
      0.65,
      0.65,
      0.65,
      1,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92,
      0.72,
      0.72
    ],
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
      "metal",
      "breakdown"
    ],
    "techniques": [
      "breakdown"
    ]
  },
  {
    "id": "tech-metal-half-time-breakdown",
    "worldId": "metal",
    "styleIds": [
      "metal-metalcore",
      "metal-deathcore"
    ],
    "name": "half-time breakdown",
    "shortName": "half-time breakdown",
    "family": "metal",
    "category": "groove",
    "description": "Technique: half-time breakdown",
    "tags": [
      "metal",
      "half-time breakdown"
    ],
    "approaches": [
      "half-time breakdown"
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
      0.65,
      0.65,
      1,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92,
      0.72,
      0.72
    ],
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
      "metal",
      "half-time breakdown"
    ],
    "techniques": [
      "half-time breakdown"
    ]
  },
  {
    "id": "tech-metal-polyrhythmic-meter-shifts",
    "worldId": "metal",
    "styleIds": [],
    "name": "polyrhythmic meter shifts",
    "shortName": "polyrhythmic meter shifts",
    "family": "metal",
    "category": "groove",
    "description": "Technique: polyrhythmic meter shifts",
    "tags": [
      "metal",
      "polyrhythmic meter shifts"
    ],
    "approaches": [
      "polyrhythmic meter shifts"
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
      "metal",
      "polyrhythmic meter shifts"
    ],
    "techniques": [
      "polyrhythmic meter shifts"
    ]
  },
  {
    "id": "style-metal-nwobhm-signature",
    "worldId": "metal",
    "styleIds": [
      "metal-nwobhm"
    ],
    "name": "NWOBHM Signature Cell",
    "shortName": "NWOBHM Cell",
    "family": "metal",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "metal",
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
      "distortion-guitar",
      "bass",
      "drums",
      "voice"
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
      "metal",
      "signature"
    ],
    "techniques": [
      "gallop",
      "twin-guitar harmony"
    ]
  },
  {
    "id": "style-metal-groove-metal-signature",
    "worldId": "metal",
    "styleIds": [
      "metal-groove-metal"
    ],
    "name": "Groove Metal Signature Cell",
    "shortName": "Groove Metal Cell",
    "family": "metal",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "metal",
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
      "distortion-guitar",
      "bass",
      "drums",
      "voice"
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
      "metal",
      "signature"
    ],
    "techniques": [
      "palm-muted chug",
      "chromatic low-string riff",
      "double-kick",
      "twin-guitar harmony"
    ]
  },
  {
    "id": "style-metal-metalcore-signature",
    "worldId": "metal",
    "styleIds": [
      "metal-metalcore"
    ],
    "name": "Metalcore Signature Cell",
    "shortName": "Metalcore Cell",
    "family": "metal",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "metal",
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
      "distortion-guitar",
      "bass",
      "drums",
      "voice"
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
      0.7,
      0.7,
      0.7,
      1,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7,
      0.9,
      0.7
    ],
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
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "metal",
      "signature"
    ],
    "techniques": [
      "breakdown",
      "half-time breakdown"
    ]
  },
  {
    "id": "style-metal-deathcore-signature",
    "worldId": "metal",
    "styleIds": [
      "metal-deathcore"
    ],
    "name": "Deathcore Signature Cell",
    "shortName": "Deathcore Cell",
    "family": "metal",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "metal",
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
      "distortion-guitar",
      "bass",
      "drums",
      "voice"
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
      0.7,
      0.7,
      0.7,
      1,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7,
      0.9,
      0.7
    ],
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
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "metal",
      "signature"
    ],
    "techniques": [
      "blast beat",
      "breakdown",
      "chromatic low-string riff",
      "half-time breakdown"
    ]
  },
  {
    "id": "style-metal-blackgaze-signature",
    "worldId": "metal",
    "styleIds": [
      "metal-blackgaze"
    ],
    "name": "Blackgaze Signature Cell",
    "shortName": "Blackgaze Cell",
    "family": "metal",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "metal",
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
      "distortion-guitar",
      "bass",
      "drums",
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
      "metal",
      "signature"
    ],
    "techniques": [
      "blast beat",
      "tremolo picking",
      "tremolo/drone layer"
    ]
  }
];
