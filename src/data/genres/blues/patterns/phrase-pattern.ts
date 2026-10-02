import type { MusicalPattern } from '../../../schema';

export const BLUES_WORLD_PATTERNS_PHRASEPATTERN: MusicalPattern[] = [
  {
          "id": "blues-phrase-13",
          "worldId": "blues",
          "styleIds": ["blues-delta"],
          "name": "12-Bar Phrase",
          "family": "12-Bar",
          "category": "phrasePattern",
          "description": "A phrase-level rhythmic template that leaves",
          "tags": [
            "blues",
            "12-bar",
            "phrase",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "harmonica"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "harmonica"
          ],
          "compatibleRoles": [
            "harmonica"
          ],
          "compatibleInstruments": [
            "harmonica"
          ],
          "canCrossRole": true,
          "meter": "4/4",
          "cycleLength": 1,
          "subdivisions": 12,
          "onsetGrid": [
            0,
            2,
            3,
            6,
            8,
            9,
            11
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
              "id": "blues-phrase-13-v-01",
              "parentPatternId": "blues-phrase-13",
              "name": "12-Bar Phrase — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                3,
                6,
                9,
                11
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
              "id": "blues-phrase-13-v-02",
              "parentPatternId": "blues-phrase-13",
              "name": "12-Bar Phrase — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                2,
                3,
                6,
                8,
                9,
                11
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
          "provenance": "GenreDAW catalog rebuild from existing Blues world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "blues",
            "12-bar"
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
          "id": "blues--phrasing",
          "worldId": "blues",
          "styleIds": ["blues-delta"],
          "name": "Blues Vocal Phrasing",
          "family": "Vocal Phrasing",
          "category": "phrasePattern",
          "description": "12-bar vocal phrase placement with call-and-response",
          "tags": [
            "blues",
            "harmonica",
            "vocal-phrasing",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "harmonica"
          ],
    
          "approaches": ["phrase"],
          "instruments": [
            "harmonica"
          ],
          "compatibleRoles": [
            "harmonica",
            "lead"
          ],
          "compatibleInstruments": [
            "harmonica"
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
          "swingPercentage": 58,
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
            "intro"
          ],
    
    
          "variants": [
            {
              "id": "blues--phrasing-v--alt",
              "parentPatternId": "blues--phrasing",
              "name": "Blues Vocal Phrasing — alternate phrasing",
              "variationType": "phraseStart",
              "probability": 0.2,
              "description": "Alternate vocal entry placement for a",
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
              "id": "blues--phrasing-v-final-accent",
              "parentPatternId": "blues--phrasing",
              "name": "Blues Vocal Phrasing — accent shift",
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
          "provenance": "GenreDAW catalog rebuild: dedicated vocal phrasing coverage for Blues.",
          "authenticityTags": [
            "blues",
            "harmonica"
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
