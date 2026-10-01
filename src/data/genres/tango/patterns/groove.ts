import type { MusicalPattern } from '../../../schema';

export const TANGO_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "tango-bass-pizzicato",
          "worldId": "tango",
          "styleIds": ["tango-tango-nuevo"],
          "name": "Pizzicato Bass",
          "family": "Bass",
          "category": "groove",
          "description": "Plucked bass syncopations with dynamic accents.",
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
          "subdivisions": 8,
          "onsetGrid": [
            0,
            3,
            6
          ],
          "accentProfile": [
            1,
            0.85,
            0.75
          ],
          "velocityProfile": [
            0.95,
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
              "id": "tango-bass-pizzicato-v-01",
              "parentPatternId": "tango-bass-pizzicato",
              "name": "Pizzicato Bass — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6
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
              "id": "tango-bass-pizzicato-v-02",
              "parentPatternId": "tango-bass-pizzicato",
              "name": "Pizzicato Bass — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                6
              ],
              "accentProfile": [
                0.96,
                0.9299999999999999,
                0.71
              ],
              "velocityProfile": [
                1,
                0.78,
                0.6799999999999999
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
          "provenance": "Tango catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "tango"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 53,
          "anticipationOffset": 0,
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "tango-comp-15",
          "worldId": "tango",
          "styleIds": ["tango-milonga"],
          "name": "Yumba Comping",
          "family": "Yumba",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports the groove while leaving room for the lead.",
          "tags": [
            "tango",
            "yumba",
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
            "piano"
          ],
          "compatibleRoles": [
            "harmony"
          ],
          "compatibleInstruments": [
            "guitar",
            "piano"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
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
          "syncopationRating": 0.5714285714285714,
          "anticipationOffset": 0,
          "swingPercentage": 53,
          "articulations": [
            "rubato-aware"
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
              "id": "tango-comp-15-v-01",
              "parentPatternId": "tango-comp-15",
              "name": "Yumba Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
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
              "id": "tango-comp-15-v-02",
              "parentPatternId": "tango-comp-15",
              "name": "Yumba Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
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
          "provenance": "GenreDAW catalog rebuild from existing Tango world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "tango",
            "yumba"
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
          "id": "tango-verse-17",
          "worldId": "tango",
          "styleIds": ["tango-milonga"],
          "name": "Síncopa Verse Variation",
          "family": "Síncopa",
          "category": "groove",
          "description": "A restrained verse variation uses intentional space to keep the arrangement uncluttered.",
          "tags": [
            "tango",
            "sincopa",
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
            3,
            6,
            7,
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
          "syncopationRating": 1,
          "anticipationOffset": 0,
          "swingPercentage": 53,
          "articulations": [
            "rubato-aware"
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
              "id": "tango-verse-17-v-01",
              "parentPatternId": "tango-verse-17",
              "name": "Síncopa Verse Variation — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                3,
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
              "id": "tango-verse-17-v-02",
              "parentPatternId": "tango-verse-17",
              "name": "Síncopa Verse Variation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                3,
                6,
                7,
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
          "provenance": "GenreDAW catalog rebuild from existing Tango world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "tango",
            "sincopa"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 1,
          "enabled": true
        }
,
  {
    "id": "tech-tango-sincopa-tanguera",
    "worldId": "tango",
    "styleIds": [
      "tango-guardia-nueva-modernism"
    ],
    "name": "síncopa tanguera",
    "shortName": "síncopa tanguera",
    "family": "tango",
    "category": "groove",
    "description": "Technique: síncopa tanguera",
    "tags": [
      "tango",
      "síncopa tanguera"
    ],
    "approaches": [
      "síncopa tanguera"
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
      "tango",
      "síncopa tanguera"
    ],
    "techniques": [
      "síncopa tanguera"
    ]
  },
  {
    "id": "tech-tango-3-3-2",
    "worldId": "tango",
    "styleIds": [],
    "name": "3-3-2",
    "shortName": "3-3-2",
    "family": "tango",
    "category": "groove",
    "description": "Technique: 3-3-2",
    "tags": [
      "tango",
      "3-3-2"
    ],
    "approaches": [
      "3-3-2"
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
      3,
      6,
      8
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
      "tango",
      "3-3-2"
    ],
    "techniques": [
      "3-3-2"
    ]
  },
  {
    "id": "tech-tango-habanera",
    "worldId": "tango",
    "styleIds": [],
    "name": "habanera",
    "shortName": "habanera",
    "family": "tango",
    "category": "groove",
    "description": "Technique: habanera",
    "tags": [
      "tango",
      "habanera"
    ],
    "approaches": [
      "habanera"
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
      "tango",
      "habanera"
    ],
    "techniques": [
      "habanera"
    ]
  },
  {
    "id": "tech-tango-elastic-rubato",
    "worldId": "tango",
    "styleIds": [
      "tango-song-centered-tango",
      "tango-elastic-golden-age-tango"
    ],
    "name": "elastic rubato",
    "shortName": "elastic rubato",
    "family": "tango",
    "category": "groove",
    "description": "Technique: elastic rubato",
    "tags": [
      "tango",
      "elastic rubato"
    ],
    "approaches": [
      "elastic rubato"
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
      8
    ],
    "accentProfile": [
      1,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72
    ],
    "durationGrid": [
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-genre",
    "canCrossRole": true,
    "authenticityTags": [
      "tango",
      "elastic rubato"
    ],
    "techniques": [
      "elastic rubato"
    ]
  },
  {
    "id": "style-tango-song-centered-tango-signature",
    "worldId": "tango",
    "styleIds": [
      "tango-song-centered-tango"
    ],
    "name": "Song-Centered Tango Signature Cell",
    "shortName": "Song-Centered Tango Cell",
    "family": "tango",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "tango",
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
      "voice",
      "acoustic-guitar",
      "bandoneon",
      "violin"
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
      "tango",
      "signature"
    ],
    "techniques": [
      "elastic rubato",
      "chromatic tango bass",
      "tango vals bass"
    ]
  },
  {
    "id": "style-tango-guardia-nueva-modernism-signature",
    "worldId": "tango",
    "styleIds": [
      "tango-guardia-nueva-modernism"
    ],
    "name": "Guardia Nueva Modernism Signature Cell",
    "shortName": "Guardia Nueva Modernism Cell",
    "family": "tango",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "tango",
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
      "bandoneon",
      "violin",
      "piano",
      "upright-bass"
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
      "tango",
      "signature"
    ],
    "techniques": [
      "síncopa tanguera",
      "bandoneon/string counterpoint",
      "chromatic tango bass",
      "orchestral silence",
      "tango vals bass"
    ]
  },
  {
    "id": "style-tango-rhythmic-drive-tango-signature",
    "worldId": "tango",
    "styleIds": [
      "tango-rhythmic-drive-tango"
    ],
    "name": "Rhythmic Drive Tango Signature Cell",
    "shortName": "Rhythmic Drive Tango Cell",
    "family": "tango",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "tango",
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
      "bandoneon",
      "violin",
      "piano",
      "upright-bass"
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
      "tango",
      "signature"
    ],
    "techniques": [
      "chromatic tango bass",
      "marcato en 2",
      "marcato en 4",
      "tango vals bass"
    ]
  },
  {
    "id": "style-tango-elegant-cantabile-tango-signature",
    "worldId": "tango",
    "styleIds": [
      "tango-elegant-cantabile-tango"
    ],
    "name": "Elegant Cantabile Tango Signature Cell",
    "shortName": "Elegant Cantabile Tango Cell",
    "family": "tango",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "tango",
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
      "bandoneon",
      "violin",
      "piano",
      "upright-bass"
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
      "tango",
      "signature"
    ],
    "techniques": [
      "bandoneon/string counterpoint",
      "chromatic tango bass",
      "marcato en 2",
      "marcato en 4",
      "tango vals bass"
    ]
  },
  {
    "id": "style-tango-elastic-golden-age-tango-signature",
    "worldId": "tango",
    "styleIds": [
      "tango-elastic-golden-age-tango"
    ],
    "name": "Elastic Golden-Age Tango Signature Cell",
    "shortName": "Elastic Golden-Age Tango Cell",
    "family": "tango",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "tango",
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
      "bandoneon",
      "violin",
      "piano",
      "upright-bass"
    ],
    "meter": "4/4",
    "cycleLength": 1,
    "subdivisions": 16,
    "onsetGrid": [
      0,
      8
    ],
    "accentProfile": [
      1,
      0.7
    ],
    "velocityProfile": [
      0.9,
      0.7
    ],
    "durationGrid": [
      1,
      1
    ],
    "articulations": [],
    "variants": [],
    "sourceLevel": "native-style",
    "canCrossRole": false,
    "authenticityTags": [
      "tango",
      "signature"
    ],
    "techniques": [
      "elastic rubato",
      "orchestral silence",
      "arrastre",
      "bandoneon/string counterpoint",
      "bandoneon repeated-note figure",
      "chromatic tango bass"
    ]
  },
  {
    "id": "style-tango-dramatic-yumba-tango-signature",
    "worldId": "tango",
    "styleIds": [
      "tango-dramatic-yumba-tango"
    ],
    "name": "Dramatic Yumba Tango Signature Cell",
    "shortName": "Dramatic Yumba Tango Cell",
    "family": "tango",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "tango",
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
      "bandoneon",
      "violin",
      "piano",
      "upright-bass"
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
      "tango",
      "signature"
    ],
    "techniques": [
      "yumba",
      "chromatic tango bass",
      "marcato en 2",
      "marcato en 4",
      "orchestral silence",
      "tango vals bass"
    ]
  },
  {
    "id": "style-tango-harmonic-modernism-tango-signature",
    "worldId": "tango",
    "styleIds": [
      "tango-harmonic-modernism-tango"
    ],
    "name": "Harmonic Modernism Tango Signature Cell",
    "shortName": "Harmonic Modernism Tango Cell",
    "family": "tango",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "tango",
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
      "bandoneon",
      "piano",
      "violin",
      "upright-bass"
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
      "tango",
      "signature"
    ],
    "techniques": [
      "bandoneon/string counterpoint",
      "chromatic tango bass",
      "tango vals bass"
    ]
  },
  {
    "id": "style-tango-rio-de-la-plata-fusion-signature",
    "worldId": "tango",
    "styleIds": [
      "tango-rio-de-la-plata-fusion"
    ],
    "name": "Río de la Plata Fusion Signature Cell",
    "shortName": "Río de la Plata Fusion Cell",
    "family": "tango",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "tango",
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
      "bandoneon",
      "electric-guitar",
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
      "tango",
      "signature"
    ],
    "techniques": [
      "Piazzolla ostinato",
      "chromatic tango bass",
      "tango vals bass"
    ]
  }
];
