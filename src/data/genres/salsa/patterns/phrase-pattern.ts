import type { MusicalPattern } from '../../../schema';

export const SALSA_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "afro-mambo-horn-hits",
          "worldId": "salsa",
          "styleIds": ["salsa-salsa-dura"],
          "name": "Mambo Section Horn Stabs & Punctuation",
          "family": "Horn Mambos",
          "category": "phrasePattern",
          "description": "Explosive syncopated horn riffs and stabs",
          "tags": [
            "horns",
            "mambo",
            "trumpet",
            "sax",
            "brass",
            "stabs"
          ],
          "scopes": [
            "phrase",
            "region",
            "track"
          ],
          "roles": [
            "lead",
            "horn-section",
            "counterline"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "trumpet",
            "sax",
            "electric-guitar",
            "keys"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 2,
          "subdivisions": 32,
          "onsetGrid": [
            6,
            12,
            14,
            22,
            28,
            30
          ],
          "accentProfile": [
            1,
            0.95,
            1,
            1,
            0.95,
            1
          ],
          "velocityProfile": [
            1,
            0.9,
            1,
            1,
            0.9,
            1
          ],
          "articulations": [
            "staccatissimo",
            "fall-off"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "mambo",
            "breakdown",
            "chorus"
          ],
          "variants": [
            {
              "id": "afro-mambo-unison-break",
              "parentPatternId": "afro-mambo-horn-hits",
              "name": "Ensemble Tutti Bloque / Break",
              "variationType": "breakdown",
              "probability": 0.5,
              "onsetGrid": [
                0,
                3,
                6,
                12,
                14,
                15
              ],
              "accentProfile": [
                1,
                0.9,
                1,
                0.95,
                1,
                1
              ],
              "description": "Full band unison stop-time break."
            },
            {
              "id": "afro-mambo-horn-hits-v-02",
              "parentPatternId": "afro-mambo-horn-hits",
              "name": "Mambo Section Horn Stabs & Punctuation — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                6,
                12,
                14,
                22,
                28,
                30
              ],
              "accentProfile": [
                0.96,
                1,
                0.96,
                1,
                0.9099999999999999,
                1
              ],
              "velocityProfile": [
                1,
                0.88,
                0.98,
                1,
                0.88,
                0.98
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
          "weight": 0.7,
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
    
        },
  {
          "id": "salsa-phrase-12",
          "worldId": "salsa",
          "styleIds": ["salsa-salsa-dura"],
          "name": "Coro Phrase",
          "family": "Coro / backing vocals",
          "category": "phrasePattern",
          "description": "A phrase-level rhythmic template that leaves space for the lead while shaping the phrase arc.",
          "tags": [
            "salsa",
            "coro",
            "phrase",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "trumpet"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "trumpet"
          ],
          "compatibleRoles": [
            "trumpet"
          ],
          "compatibleInstruments": [
            "trumpet"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            2,
            5,
            6,
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
            "breath",
            "phrase-end"
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
              "id": "salsa-phrase-12-v-01",
              "parentPatternId": "salsa-phrase-12",
              "name": "Coro Phrase — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                2,
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
              "id": "salsa-phrase-12-v-02",
              "parentPatternId": "salsa-phrase-12",
              "name": "Coro Phrase — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                2,
                5,
                6,
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
            "coro"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        },
  {
          "id": "salsa--phrasing",
          "worldId": "salsa",
          "styleIds": ["salsa-son-montuno"],
          "name": "Salsa Vocal Phrasing",
          "family": "Vocal Phrasing",
          "category": "phrasePattern",
          "description": "Coro response phrasing sits between clave-driven",
          "tags": [
            "salsa",
            "trumpet",
            "vocal-phrasing",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "trumpet"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "trumpet"
          ],
          "compatibleRoles": [
            "trumpet",
            "lead"
          ],
          "compatibleInstruments": [
            "trumpet"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            5,
            8,
            11,
            14
          ],
          "accentProfile": [
            0.94,
            0.62,
            0.94,
            0.62,
            0.94,
            0.62
          ],
          "velocityProfile": [
            0.9,
            0.58,
            0.9,
            0.58,
            0.9,
            0.58
          ],
          "syncopationRating": 0.6666666666666666,
          "anticipationOffset": 0,
          "swingPercentage": 50,
          "articulations": [
            "breath",
            "phrase-end"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "bridge",
            "coro"
          ],
    
    
          "variants": [
            {
              "id": "salsa--phrasing-v--alt",
              "parentPatternId": "salsa--phrasing",
              "name": "Salsa Vocal Phrasing — alternate phrasing",
              "variationType": "phraseStart",
              "probability": 0.2,
              "description": "An alternate vocal entry shifts the placement of a phrase for subtle rhythmic variation.",
              "onsetGrid": [
                0,
                3,
                5,
                8,
                11,
                14
              ],
              "accentProfile": [
                0.92,
                0.62,
                0.92,
                0.62,
                0.92,
                0.62
              ],
              "velocityProfile": [
                0.88,
                0.58,
                0.88,
                0.58,
                0.88,
                0.58
              ],
              "microtimingOffset": [
                2,
                -4,
                2,
                -4,
                2,
                -4
              ]
            },
            {
              "id": "salsa--phrasing-v-final-accent",
              "parentPatternId": "salsa--phrasing",
              "name": "Salsa Vocal Phrasing — accent shift",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "Same rhythmic shape with shifted emphasis",
              "onsetGrid": [
                0,
                3,
                5,
                8,
                11,
                14
              ],
              "accentProfile": [
                0.8999999999999999,
                0.7,
                0.8999999999999999,
                0.7,
                0.8999999999999999,
                0.7
              ],
              "velocityProfile": [
                0.9,
                0.58,
                0.9,
                0.58,
                0.9,
                0.58
              ],
              "microtimingOffset": [
                2,
                -4,
                2,
                -4,
                2,
                -4
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Salsa.",
          "authenticityTags": [
            "salsa",
            "trumpet"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.9,
          "enabled": true
        }
];
