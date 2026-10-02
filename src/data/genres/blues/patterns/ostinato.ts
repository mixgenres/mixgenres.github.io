import type { MusicalPattern } from '../../../schema';

export const BLUES_WORLD_PATTERNS_OSTINATO: MusicalPattern[] = [
  {
          "id": "blues-boogie-bass",
          "worldId": "blues",
          "styleIds": ["blues-texas"],
          "name": "Boogie Root–Fifth Bass",
          "family": "Boogie Bass",
          "category": "ostinato",
          "description": "Alternating root, fifth and sixth movement",
          "tags": [
            "blues",
            "boogie",
            "bass"
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
            "piano"
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
            1,
            0.55,
            0.85,
            0.55,
            0.95,
            0.6,
            0.9,
            0.6
          ],
          "velocityProfile": [
            0.9,
            0.55,
            0.8,
            0.55,
            0.9,
            0.55,
            0.85,
            0.55
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
              "id": "blues-boogie-walkup",
              "parentPatternId": "blues-boogie-bass",
              "name": "Sixth Walk-Up",
              "variationType": "development",
              "probability": 0.35,
              "onsetGrid": [
                0,
                2,
                4,
                6,
                8,
                10,
                12,
                13,
                14,
                15
              ],
              "accentProfile": [
                1,
                0.5,
                0.8,
                0.5,
                0.9,
                0.55,
                0.85,
                0.65,
                0.8,
                1
              ],
              "description": "A rising sixth/chromatic approach used to"
            },
            {
              "id": "blues-boogie-bass-v-02",
              "parentPatternId": "blues-boogie-bass",
              "name": "Boogie Root–Fifth Bass — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
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
                0.96,
                0.63,
                0.8099999999999999,
                0.63,
                0.9099999999999999,
                0.6799999999999999,
                0.86,
                0.6799999999999999
              ],
              "velocityProfile": [
                0.96,
                0.53,
                0.78,
                0.6100000000000001,
                0.88,
                0.53,
                0.9099999999999999,
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
          "weight": 0.7,
          "provenance": "Blues catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "blues"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 66,
          "anticipationOffset": 0,
    
    
          "articulations": [
            "accented",
            "ghost-aware"
          ]
        },
  {
          "id": "blues-anchor-15",
          "worldId": "blues",
          "styleIds": ["blues-delta"],
          "name": "Call & Response Anchor",
          "family": "Call & Response",
          "category": "ostinato",
          "description": "A repeating anchor that locks the",
          "tags": [
            "blues",
            "call-response",
            "anchor",
            "catalog-v2"
          ],
          "scopes": [
            "measure",
            "phrase"
          ],
          "roles": [
            "bass"
          ],
    
          "approaches": ["walking"],
          "instruments": [
            "bass"
          ],
          "compatibleRoles": [
            "bass"
          ],
          "compatibleInstruments": [
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
            8,
            10,
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
          "swingPercentage": 66,
          "articulations": [
            "accented",
            "ghost-aware"
          ],
          "supportedEnergy": [2, 3, 4],
          "phrasePosition": [
            "start",
            "middle"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
    
    
          "variants": [
            {
              "id": "blues-anchor-15-v-01",
              "parentPatternId": "blues-anchor-15",
              "name": "Call & Response Anchor — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                2,
                5,
                8,
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
              "id": "blues-anchor-15-v-02",
              "parentPatternId": "blues-anchor-15",
              "name": "Call & Response Anchor — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                2,
                4,
                5,
                8,
                10,
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
          "provenance": "GenreDAW catalog rebuild from existing Blues world data; generated to cover missing musical functions without runtime AI.",
          "authenticityTags": [
            "blues",
            "call-response"
          ],
          "danceTags": [
            "listening",
            "social-partner"
          ],
          "tuningSystem": "12-tet",
          "difficulty": 2,
          "weight": 0.7,
          "enabled": true
        }
];
