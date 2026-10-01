import type { MusicalPattern } from '../../../schema';

export const SALSA_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "salsa-clave-32",
          "worldId": "salsa",
          "styleIds": ["salsa-salsa-dura"],
          "name": "3-2 Son Clave",
          "family": "Clave",
          "category": "groove",
          "description": "Classic 3-2 clave timeline.",
          "tags": [],
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
            10,
            12
          ],
          "accentProfile": [
            1,
            0.85,
            0.95,
            0.9,
            0.85
          ],
          "velocityProfile": [
            0.95,
            0.8,
            0.9,
            0.85,
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
              "id": "salsa-clave-32-v-01",
              "parentPatternId": "salsa-clave-32",
              "name": "3-2 Son Clave — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                10
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
              "id": "salsa-clave-32-v-02",
              "parentPatternId": "salsa-clave-32",
              "name": "3-2 Son Clave — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                6,
                10,
                12
              ],
              "accentProfile": [
                0.96,
                0.9299999999999999,
                0.9099999999999999,
                0.98,
                0.8099999999999999
              ],
              "velocityProfile": [
                1,
                0.78,
                0.88,
                0.9099999999999999,
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
          "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "salsa"
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
          "id": "salsa-timbal-bell",
          "worldId": "salsa",
          "styleIds": ["salsa-salsa-dura"],
          "name": "Timbal Mambo Bell",
          "family": "Bell",
          "category": "groove",
          "description": "A timbalero mambo cowbell pattern rides over the clave.",
          "tags": [],
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
            4,
            7,
            8,
            11,
            12,
            15
          ],
          "accentProfile": [
            1,
            0.65,
            0.85,
            0.7,
            0.95,
            0.65,
            0.85,
            0.7
          ],
          "velocityProfile": [
            0.95,
            0.6,
            0.8,
            0.65,
            0.9,
            0.6,
            0.8,
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
              "id": "salsa-timbal-bell-v-01",
              "parentPatternId": "salsa-timbal-bell",
              "name": "Timbal Mambo Bell — sparse variation",
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
                0.6,
                0.7999999999999999,
                0.6499999999999999,
                0.8999999999999999
              ],
              "velocityProfile": [
                0.87,
                0.52,
                0.7200000000000001,
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
              "id": "salsa-timbal-bell-v-02",
              "parentPatternId": "salsa-timbal-bell",
              "name": "Timbal Mambo Bell — accent shift",
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
                0.73,
                0.8099999999999999,
                0.7799999999999999,
                0.9099999999999999,
                0.73,
                0.8099999999999999,
                0.7799999999999999
              ],
              "velocityProfile": [
                1,
                0.58,
                0.78,
                0.71,
                0.88,
                0.58,
                0.8600000000000001,
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
          "provenance": "Salsa catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "salsa"
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
          "id": "salsa-comp-15",
          "worldId": "salsa",
          "styleIds": ["salsa-salsa-dura"],
          "name": "Son Clave Comping",
          "family": "Son Clave",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports the groove while leaving room for the lead.",
          "tags": [
            "salsa",
            "son-clave",
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
            2,
            6,
            9,
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
          "syncopationRating": 0.8333333333333334,
          "anticipationOffset": 0,
          "swingPercentage": 53,
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
              "id": "salsa-comp-15-v-01",
              "parentPatternId": "salsa-comp-15",
              "name": "Son Clave Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                9,
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
              "id": "salsa-comp-15-v-02",
              "parentPatternId": "salsa-comp-15",
              "name": "Son Clave Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                6,
                9,
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
          "provenance": "GenreDAW catalog rebuild from existing Salsa world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "salsa",
            "son-clave"
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
    "id": "tech-salsa-2-3-clave",
    "worldId": "salsa",
    "styleIds": [
      "salsa-son-cubano-foundation",
      "salsa-salsa-jazz-fusion"
    ],
    "name": "2-3 clave",
    "shortName": "2-3 clave",
    "family": "salsa",
    "category": "groove",
    "description": "Technique: 2-3 clave",
    "tags": [
      "salsa",
      "2-3 clave"
    ],
    "approaches": [
      "2-3 clave"
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
      2,
      5,
      8,
      10,
      12,
      14
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65,
      1,
      0.65,
      0.65
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92,
      0.72,
      0.72,
      0.92
    ],
    "durationGrid": [
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
      "salsa",
      "2-3 clave"
    ],
    "techniques": [
      "2-3 clave"
    ]
  },
  {
    "id": "tech-salsa-3-2-clave",
    "worldId": "salsa",
    "styleIds": [
      "salsa-son-cubano-foundation",
      "salsa-salsa-jazz-fusion"
    ],
    "name": "3-2 clave",
    "shortName": "3-2 clave",
    "family": "salsa",
    "category": "groove",
    "description": "Technique: 3-2 clave",
    "tags": [
      "salsa",
      "3-2 clave"
    ],
    "approaches": [
      "3-2 clave"
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
      8,
      11,
      14
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
      "salsa",
      "3-2 clave"
    ],
    "techniques": [
      "3-2 clave"
    ]
  },
  {
    "id": "tech-salsa-cascara",
    "worldId": "salsa",
    "styleIds": [],
    "name": "cascara",
    "shortName": "cascara",
    "family": "salsa",
    "category": "groove",
    "description": "Technique: cascara",
    "tags": [
      "salsa",
      "cascara"
    ],
    "approaches": [
      "cascara"
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
      "salsa",
      "cascara"
    ],
    "techniques": [
      "cascara"
    ]
  },
  {
    "id": "tech-salsa-bongo-martillo",
    "worldId": "salsa",
    "styleIds": [
      "salsa-son-cubano-foundation"
    ],
    "name": "bongó martillo",
    "shortName": "bongó martillo",
    "family": "salsa",
    "category": "groove",
    "description": "Technique: bongó martillo",
    "tags": [
      "salsa",
      "bongó martillo"
    ],
    "approaches": [
      "bongó martillo"
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
      "salsa",
      "bongó martillo"
    ],
    "techniques": [
      "bongó martillo"
    ]
  },
  {
    "id": "tech-salsa-campana",
    "worldId": "salsa",
    "styleIds": [
      "salsa-salsa-brava-1970s-new-york",
      "salsa-salsa-conjunto"
    ],
    "name": "campana",
    "shortName": "campana",
    "family": "salsa",
    "category": "groove",
    "description": "Technique: campana",
    "tags": [
      "salsa",
      "campana"
    ],
    "approaches": [
      "campana"
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
      "salsa",
      "campana"
    ],
    "techniques": [
      "campana"
    ]
  },
  {
    "id": "tech-salsa-mambo-break",
    "worldId": "salsa",
    "styleIds": [
      "salsa-salsa-brava-1970s-new-york"
    ],
    "name": "mambo break",
    "shortName": "mambo break",
    "family": "salsa",
    "category": "groove",
    "description": "Technique: mambo break",
    "tags": [
      "salsa",
      "mambo break"
    ],
    "approaches": [
      "mambo break"
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
      "salsa",
      "mambo break"
    ],
    "techniques": [
      "mambo break"
    ]
  },
  {
    "id": "tech-salsa-percussion-coda",
    "worldId": "salsa",
    "styleIds": [],
    "name": "percussion coda",
    "shortName": "percussion coda",
    "family": "salsa",
    "category": "groove",
    "description": "Technique: percussion coda",
    "tags": [
      "salsa",
      "percussion coda"
    ],
    "approaches": [
      "percussion coda"
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
      "salsa",
      "percussion coda"
    ],
    "techniques": [
      "percussion coda"
    ]
  },
  {
    "id": "style-salsa-son-cubano-foundation-signature",
    "worldId": "salsa",
    "styleIds": [
      "salsa-son-cubano-foundation"
    ],
    "name": "Son Cubano Foundation Signature Cell",
    "shortName": "Son Cubano Foundation Cell",
    "family": "salsa",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "salsa",
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
      "tres",
      "bongos",
      "bass",
      "claves"
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
      "salsa",
      "signature"
    ],
    "techniques": [
      "bongó martillo",
      "2-3 clave",
      "3-2 clave"
    ]
  },
  {
    "id": "style-salsa-salsa-brava-1970s-new-york-signature",
    "worldId": "salsa",
    "styleIds": [
      "salsa-salsa-brava-1970s-new-york"
    ],
    "name": "Salsa Brava / 1970s New York Signature Cell",
    "shortName": "Salsa Brava / 1970s New York Cell",
    "family": "salsa",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "salsa",
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
      "trombone",
      "piano",
      "bass",
      "congas"
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
      "salsa",
      "signature"
    ],
    "techniques": [
      "campana",
      "montuno",
      "coro/pregón",
      "mambo horn section",
      "mambo break"
    ]
  },
  {
    "id": "style-salsa-salsa-conjunto-signature",
    "worldId": "salsa",
    "styleIds": [
      "salsa-salsa-conjunto"
    ],
    "name": "Salsa Conjunto Signature Cell",
    "shortName": "Salsa Conjunto Cell",
    "family": "salsa",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "salsa",
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
      "trumpet",
      "piano",
      "bass",
      "congas"
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
      "salsa",
      "signature"
    ],
    "techniques": [
      "campana",
      "montuno",
      "tumbao",
      "coro/pregón"
    ]
  },
  {
    "id": "style-salsa-salsa-jazz-fusion-signature",
    "worldId": "salsa",
    "styleIds": [
      "salsa-salsa-jazz-fusion"
    ],
    "name": "Salsa Jazz Fusion Signature Cell",
    "shortName": "Salsa Jazz Fusion Cell",
    "family": "salsa",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "salsa",
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
      "piano",
      "bass",
      "congas",
      "timbales"
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
      "salsa",
      "signature"
    ],
    "techniques": [
      "montuno",
      "2-3 clave",
      "3-2 clave",
      "mambo horn section"
    ]
  },
  {
    "id": "style-salsa-boogaloo-latin-soul-signature",
    "worldId": "salsa",
    "styleIds": [
      "salsa-boogaloo-latin-soul"
    ],
    "name": "Boogaloo / Latin Soul Signature Cell",
    "shortName": "Boogaloo / Latin Soul Cell",
    "family": "salsa",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "salsa",
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
      "piano",
      "bass",
      "congas",
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
      "salsa",
      "signature"
    ],
    "techniques": [
      "mambo horn section"
    ]
  }
];
