import type { MusicalPattern } from '../../../schema';

export const FLAMENCO_WORLD_PATTERNS_GROOVE: MusicalPattern[] = [
  {
          "id": "flamenco-cajon-rumba",
          "worldId": "flamenco",
          "styleIds": ["flamenco-rumba"],
          "name": "Cajon Rumba",
          "family": "Cajon",
          "category": "groove",
          "description": "A cajón rhythm for rumba flamenca combines bass tones and sharp slaps.",
          "tags": [],
          "scopes": [
            "measure"
          ],
          "roles": [
            "percussion",
            "drums"
          ],
    
          "approaches": ["groove"],
          "instruments": [
            "percussion",
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
            0.7,
            0.95,
            0.8,
            0.7,
            0.9
          ],
          "velocityProfile": [
            0.95,
            0.65,
            0.9,
            0.75,
            0.65,
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
              "id": "flamenco-cajon-rumba-v-01",
              "parentPatternId": "flamenco-cajon-rumba",
              "name": "Cajon Rumba — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                6,
                8,
                14
              ],
              "accentProfile": [
                0.95,
                0.6499999999999999,
                0.8999999999999999,
                0.75
              ],
              "velocityProfile": [
                0.87,
                0.5700000000000001,
                0.8200000000000001,
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
              "id": "flamenco-cajon-rumba-v-02",
              "parentPatternId": "flamenco-cajon-rumba",
              "name": "Cajon Rumba — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
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
                0.7799999999999999,
                0.9099999999999999,
                0.88,
                0.6599999999999999,
                0.98
              ],
              "velocityProfile": [
                1,
                0.63,
                0.88,
                0.81,
                0.63,
                0.83
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
          "provenance": "Flamenco catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "flamenco"
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
          "id": "flamenco-comp-13",
          "worldId": "flamenco",
          "styleIds": ["flamenco-solea-style"],
          "name": "Falseta Comping",
          "family": "Falseta",
          "category": "groove",
          "description": "A genre-shaped accompaniment cell that supports the groove while leaving room for the lead.",
          "tags": [
            "flamenco",
            "falseta",
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
            3,
            5,
            8
          ],
          "accentProfile": [
            1,
            0.74,
            0.9,
            0.68,
            1
          ],
          "velocityProfile": [
            1,
            0.69,
            0.9,
            0.68,
            0.95
          ],
          "syncopationRating": 0.6,
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
              "id": "flamenco-comp-13-v-01",
              "parentPatternId": "flamenco-comp-13",
              "name": "Falseta Comping — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                3,
                5
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
              "id": "flamenco-comp-13-v-02",
              "parentPatternId": "flamenco-comp-13",
              "name": "Falseta Comping — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                2,
                3,
                5,
                8
              ],
              "accentProfile": [
                0.96,
                0.82,
                0.86,
                0.76,
                0.96
              ],
              "velocityProfile": [
                1,
                0.6699999999999999,
                0.88,
                0.74,
                0.9299999999999999
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
          "provenance": "GenreDAW catalog rebuild from existing Flamenco world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "flamenco",
            "falseta"
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
          "id": "flamenco-verse-15",
          "worldId": "flamenco",
          "styleIds": ["flamenco-solea-style"],
          "name": "Llamada Verse Variation",
          "family": "Llamada",
          "category": "groove",
          "description": "A restrained verse variation uses intentional space to keep the arrangement uncluttered.",
          "tags": [
            "flamenco",
            "llamada",
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
              "id": "flamenco-verse-15-v-01",
              "parentPatternId": "flamenco-verse-15",
              "name": "Llamada Verse Variation — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
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
              "id": "flamenco-verse-15-v-02",
              "parentPatternId": "flamenco-verse-15",
              "name": "Llamada Verse Variation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
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
          "provenance": "GenreDAW catalog rebuild from existing Flamenco world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "flamenco",
            "llamada"
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
          "id": "flam-buleria-compas",
          "worldId": "flamenco",
          "styleIds": ["flamenco-buleria-style"],
          "name": "Bulería Compás / Jerez Drive",
          "family": "Bulería Compás",
          "category": "groove",
          "description": "Fast 12-beat bulería framework with elastic",
          "tags": [
            "buleria",
            "compas",
            "contratiempo",
            "fin-de-fiesta"
          ],
          "scopes": [
            "measure",
            "phrase",
            "region",
            "track",
            "song"
          ],
          "roles": [
            "pulse",
            "percussion",
            "harmony"
          ],
    
          "approaches": ["groove", "comping"],
          "instruments": [
            "guitar",
            "palmas",
            "cajon"
          ],
          "meter": "12/8",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            11,
            2,
            5,
            7,
            8,
            9,
            10
          ],
          "accentProfile": [
            1,
            0.9,
            0.75,
            1,
            0.55,
            0.92,
            0.55
          ],
          "velocityProfile": [
            0.98,
            0.96,
            0.93,
            0.98,
            0.89,
            0.96,
            0.89
          ],
          "syncopationRating": 0.57,
          "articulations": [
            "rasgueado",
            "golpe",
            "alzapua"
          ],
          "hitGrid": [
            "rasgueado",
            "golpe",
            "rasgueado",
            "rasgueado",
            "golpe",
            "rasgueado",
            "golpe"
          ],
          "supportedEnergy": [4, 5],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "solo"
          ],
    
    
          "variants": [
            {
              "id": "flam-buleria-compas-corte",
              "parentPatternId": "flam-buleria-compas",
              "name": "Bulería Corte / Stop",
              "variationType": "cadence",
              "probability": 0.35,
              "description": "Quick corte before the next respuesta.",
              "onsetGrid": [
                8,
                9,
                10,
                11,
                2
              ],
              "accentProfile": [
                0.6,
                0.85,
                1,
                0.9,
                1
              ],
              "velocityProfile": [
                0.9,
                0.95,
                0.98,
                0.96,
                0.98
              ]
            }
          ],
          "provenance": "Flamenco genre patch: authored from palo-specific compás and accompaniment grammar.",
          "authenticityTags": [
            "flamenco",
            "flamenco-buleria-style"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 3,
          "weight": 0.99,
          "enabled": true
        }
,
  {
    "id": "tech-flamenco-12-beat-compas",
    "worldId": "flamenco",
    "styleIds": [
      "flamenco-solea-por-medio",
      "flamenco-flamenco-fusion",
      "flamenco-cante-jondo"
    ],
    "name": "12-beat compás",
    "shortName": "12-beat compás",
    "family": "flamenco",
    "category": "groove",
    "description": "Technique: 12-beat compás",
    "tags": [
      "flamenco",
      "12-beat compás"
    ],
    "approaches": [
      "12-beat compás"
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
    "meter": "12/8",
    "cycleLength": 1,
    "subdivisions": 12,
    "onsetGrid": [
      0,
      3,
      6,
      8,
      10
    ],
    "accentProfile": [
      1,
      0.65,
      0.65,
      0.65,
      1
    ],
    "velocityProfile": [
      0.92,
      0.72,
      0.72,
      0.92,
      0.72
    ],
    "durationGrid": [
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
      "flamenco",
      "12-beat compás"
    ],
    "techniques": [
      "12-beat compás"
    ]
  },
  {
    "id": "tech-flamenco-palmas-sordas",
    "worldId": "flamenco",
    "styleIds": [],
    "name": "palmas sordas",
    "shortName": "palmas sordas",
    "family": "flamenco",
    "category": "groove",
    "description": "Technique: palmas sordas",
    "tags": [
      "flamenco",
      "palmas sordas"
    ],
    "approaches": [
      "palmas sordas"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "percussion",
      "rhythm"
    ],
    "instruments": [
      "palmas"
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
      "flamenco",
      "palmas sordas"
    ],
    "techniques": [
      "palmas sordas"
    ]
  },
  {
    "id": "tech-flamenco-palmas-abiertas",
    "worldId": "flamenco",
    "styleIds": [],
    "name": "palmas abiertas",
    "shortName": "palmas abiertas",
    "family": "flamenco",
    "category": "groove",
    "description": "Technique: palmas abiertas",
    "tags": [
      "flamenco",
      "palmas abiertas"
    ],
    "approaches": [
      "palmas abiertas"
    ],
    "scopes": [
      "song",
      "region",
      "measure"
    ],
    "roles": [
      "percussion",
      "rhythm"
    ],
    "instruments": [
      "palmas"
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
      "flamenco",
      "palmas abiertas"
    ],
    "techniques": [
      "palmas abiertas"
    ]
  },
  {
    "id": "tech-flamenco-tremolo",
    "worldId": "flamenco",
    "styleIds": [],
    "name": "tremolo",
    "shortName": "tremolo",
    "family": "flamenco",
    "category": "groove",
    "description": "Technique: tremolo",
    "tags": [
      "flamenco",
      "tremolo"
    ],
    "approaches": [
      "tremolo"
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
      "flamenco",
      "tremolo"
    ],
    "techniques": [
      "tremolo"
    ]
  },
  {
    "id": "tech-flamenco-golpe",
    "worldId": "flamenco",
    "styleIds": [],
    "name": "golpe",
    "shortName": "golpe",
    "family": "flamenco",
    "category": "groove",
    "description": "Technique: golpe",
    "tags": [
      "flamenco",
      "golpe"
    ],
    "approaches": [
      "golpe"
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
      "flamenco",
      "golpe"
    ],
    "techniques": [
      "golpe"
    ]
  },
  {
    "id": "tech-flamenco-remate",
    "worldId": "flamenco",
    "styleIds": [
      "flamenco-solea-por-medio"
    ],
    "name": "remate",
    "shortName": "remate",
    "family": "flamenco",
    "category": "groove",
    "description": "Technique: remate",
    "tags": [
      "flamenco",
      "remate"
    ],
    "approaches": [
      "remate"
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
      "flamenco",
      "remate"
    ],
    "techniques": [
      "remate"
    ]
  },
  {
    "id": "tech-flamenco-llamada",
    "worldId": "flamenco",
    "styleIds": [
      "flamenco-solea-por-medio"
    ],
    "name": "llamada",
    "shortName": "llamada",
    "family": "flamenco",
    "category": "groove",
    "description": "Technique: llamada",
    "tags": [
      "flamenco",
      "llamada"
    ],
    "approaches": [
      "llamada"
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
      "flamenco",
      "llamada"
    ],
    "techniques": [
      "llamada"
    ]
  },
  {
    "id": "tech-flamenco-rubato-entrance",
    "worldId": "flamenco",
    "styleIds": [
      "flamenco-cante-jondo"
    ],
    "name": "rubato entrance",
    "shortName": "rubato entrance",
    "family": "flamenco",
    "category": "groove",
    "description": "Technique: rubato entrance",
    "tags": [
      "flamenco",
      "rubato entrance"
    ],
    "approaches": [
      "rubato entrance"
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
      "flamenco",
      "rubato entrance"
    ],
    "techniques": [
      "rubato entrance"
    ]
  },
  {
    "id": "style-flamenco-solea-por-medio-signature",
    "worldId": "flamenco",
    "styleIds": [
      "flamenco-solea-por-medio"
    ],
    "name": "Soleá por Medio Signature Cell",
    "shortName": "Soleá por Medio Cell",
    "family": "flamenco",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "flamenco",
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
      "spanish-guitar",
      "palmas",
      "cajon",
      "voice"
    ],
    "meter": "12/8",
    "cycleLength": 1,
    "subdivisions": 12,
    "onsetGrid": [
      0,
      3,
      6,
      8,
      10
    ],
    "accentProfile": [
      1,
      0.7,
      0.7,
      0.7,
      1
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7,
      0.9
    ],
    "durationGrid": [
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
      "flamenco",
      "signature"
    ],
    "techniques": [
      "falseta",
      "llamada",
      "rasgueado",
      "remate",
      "12-beat compás"
    ]
  },
  {
    "id": "style-flamenco-flamenco-fusion-signature",
    "worldId": "flamenco",
    "styleIds": [
      "flamenco-flamenco-fusion"
    ],
    "name": "Flamenco Fusion Signature Cell",
    "shortName": "Flamenco Fusion Cell",
    "family": "flamenco",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "flamenco",
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
      "spanish-guitar",
      "electric-guitar",
      "bass",
      "bongos"
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
      "flamenco",
      "signature"
    ],
    "techniques": [
      "12-beat compás"
    ]
  },
  {
    "id": "style-flamenco-nuevo-flamenco-signature",
    "worldId": "flamenco",
    "styleIds": [
      "flamenco-nuevo-flamenco"
    ],
    "name": "Nuevo Flamenco Signature Cell",
    "shortName": "Nuevo Flamenco Cell",
    "family": "flamenco",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "flamenco",
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
      "spanish-guitar",
      "cajon",
      "bass",
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
      "flamenco",
      "signature"
    ],
    "techniques": [
      "falseta"
    ]
  },
  {
    "id": "style-flamenco-cante-jondo-signature",
    "worldId": "flamenco",
    "styleIds": [
      "flamenco-cante-jondo"
    ],
    "name": "Cante Jondo Signature Cell",
    "shortName": "Cante Jondo Cell",
    "family": "flamenco",
    "category": "groove",
    "description": "Style signature groove cue",
    "tags": [
      "flamenco",
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
      "spanish-guitar",
      "palmas",
      "cajon"
    ],
    "meter": "12/8",
    "cycleLength": 1,
    "subdivisions": 12,
    "onsetGrid": [
      0,
      3,
      6,
      8,
      10
    ],
    "accentProfile": [
      1,
      0.7,
      0.7,
      0.7,
      1
    ],
    "velocityProfile": [
      0.9,
      0.7,
      0.9,
      0.7,
      0.9
    ],
    "durationGrid": [
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
      "flamenco",
      "signature"
    ],
    "techniques": [
      "dramatic pause",
      "rubato entrance",
      "jaleo",
      "melisma",
      "12-beat compás"
    ]
  }
];
