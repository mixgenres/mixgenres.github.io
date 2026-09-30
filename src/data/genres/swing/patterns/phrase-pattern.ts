import type { MusicalPattern } from '../../../schema';

export const SWING_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "swing-phrase-10",
          "worldId": "swing",
          "styleIds": ["swing-big-band-swing"],
          "name": "Spang-a-Lang Phrase",
          "family": "Spang-a-Lang",
          "category": "phrasePattern",
          "description": "A phrase-level rhythmic template that leaves space for the lead while shaping the phrase arc.",
          "tags": [
            "swing",
            "spang-a-lang",
            "phrase",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "alto-sax"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "alto-sax"
          ],
          "compatibleRoles": [
            "alto-sax"
          ],
          "compatibleInstruments": [
            "alto-sax"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            0,
            3,
            4,
            6,
            7,
            9,
            10
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
          "swingPercentage": 66,
          "articulations": ["breath"],
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
              "id": "swing-phrase-10-v-01",
              "parentPatternId": "swing-phrase-10",
              "name": "Spang-a-Lang Phrase — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks to make room in the groove while preserving its main pulse.",
              "onsetGrid": [
                0,
                4,
                6,
                9,
                10
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
              "id": "swing-phrase-10-v-02",
              "parentPatternId": "swing-phrase-10",
              "name": "Spang-a-Lang Phrase — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the core rhythm intact while shifting accents to create a fresh variation.",
              "onsetGrid": [
                0,
                3,
                4,
                6,
                7,
                9,
                10
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
          "provenance": "GenreDAW catalog rebuild from existing Swing world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "swing",
            "spang-a-lang"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        },
  {
          "id": "swing--phrasing",
          "worldId": "swing",
          "styleIds": ["swing-big-band-swing"],
          "name": "Swing Vocal Phrasing",
          "family": "Vocal Phrasing",
          "category": "phrasePattern",
          "description": "Dedicated vocal phrasing space for Swing,",
          "tags": [
            "swing",
            "alto-sax",
            "vocal-phrasing",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "alto-sax"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "alto-sax"
          ],
          "compatibleRoles": [
            "alto-sax",
            "lead"
          ],
          "compatibleInstruments": [
            "alto-sax"
          ],
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 16,
          "onsetGrid": [
            0,
            3,
            6,
            10,
            12,
            15
          ],
          "accentProfile": [
            0.98,
            0.62,
            0.84,
            0.6,
            0.94,
            0.68
          ],
          "velocityProfile": [
            0.92,
            0.58,
            0.78,
            0.56,
            0.88,
            0.64
          ],
          "syncopationRating": 0.66,
          "anticipationOffset": 0,
          "swingPercentage": 55,
          "articulations": ["breath"],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus",
            "bridge"
          ],
    
    
          "variants": [
            {
              "id": "swing--phrasing-v1",
              "parentPatternId": "swing--phrasing",
              "name": "Swing Vocal Phrasing — sparse",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Sparse answer-friendly repeat.",
              "onsetGrid": [
                0,
                3,
                10,
                15
              ],
              "accentProfile": [
                0.98,
                0.62,
                0.92,
                0.7
              ],
              "velocityProfile": [
                0.9,
                0.58,
                0.86,
                0.64
              ]
            },
            {
              "id": "swing--phrasing-v2",
              "parentPatternId": "swing--phrasing",
              "name": "Swing Vocal Phrasing — accent shift",
              "variationType": "accentShift",
              "probability": 0.18,
              "description": "Shifted vocal emphasis for repeat variation.",
              "onsetGrid": [
                0,
                3,
                6,
                10,
                12,
                15
              ],
              "accentProfile": [
                0.9,
                0.7,
                0.8,
                0.65,
                1,
                0.62
              ],
              "velocityProfile": [
                0.86,
                0.62,
                0.76,
                0.6,
                0.92,
                0.58
              ]
            }
          ],
          "provenance": "GenreDAW catalog rebuild: vocal coverage for Swing.",
          "authenticityTags": [
            "swing",
            "alto-sax"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.8,
          "enabled": true
        }
];
