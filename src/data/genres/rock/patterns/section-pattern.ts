import type { MusicalPattern } from '../../../schema';

export const ROCK_WORLD_PATTERNS_SECTIONPATTERN: MusicalPattern[] = [
  {
          "id": "rock-open-close",
          "worldId": "rock",
          "styleIds": ["rock-grunge"],
          "name": "Open Verse → Full Chorus",
          "family": "Dynamic Arrangement",
          "category": "sectionPattern",
          "description": "A sparse verse leaves negative space",
          "tags": [
            "rock",
            "arrangement",
            "dynamics",
            "chorus"
          ],
          "scopes": [
            "phrase",
            "region",
            "song"
          ],
          "roles": [
            "rhythm-guitar",
            "bass",
            "drums",
            "texture"
          ],
    
          "approaches": ["walking", "groove"],
          "instruments": [
            "electric-guitar",
            "bass",
            "drums",
            "keys"
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
            0.8,
            0.7,
            0.9,
            0.8
          ],
          "velocityProfile": [
            0.6,
            0.55,
            0.7,
            0.6
          ],
          "supportedEnergy": [1, 2, 3, 4, 5],
          "phrasePosition": [
            "start",
            "middle",
            "end"
          ],
          "sectionUsage": [
            "verse",
            "chorus"
          ],
          "variants": [
            {
              "id": "rock-open-close-v-01",
              "parentPatternId": "rock-open-close",
              "name": "Open Verse → Full Chorus — sparse variation",
              "variationType": "sparse",
              "probability": 0.22,
              "description": "Drops selected interior attacks so the",
              "onsetGrid": [
                0,
                8,
                12
              ],
              "accentProfile": [
                0.75,
                0.6499999999999999,
                0.85
              ],
              "velocityProfile": [
                0.52,
                0.47000000000000003,
                0.62
              ],
              "microtimingOffset": [
                -3,
                6,
                -3
              ]
            },
            {
              "id": "rock-open-close-v-02",
              "parentPatternId": "rock-open-close",
              "name": "Open Verse → Full Chorus — accent shift",
              "variationType": "accentShift",
              "probability": 0.2,
              "description": "Keeps the rhythm intact but moves",
              "onsetGrid": [
                0,
                4,
                8,
                12
              ],
              "accentProfile": [
                0.76,
                0.7799999999999999,
                0.86,
                0.88
              ],
              "velocityProfile": [
                0.6599999999999999,
                0.53,
                0.6799999999999999,
                0.6599999999999999
              ],
              "microtimingOffset": [
                2,
                -5,
                2,
                -5
              ]
            },
            {
              "id": "rock-open-close-v-03",
              "parentPatternId": "rock-open-close",
              "name": "Open Verse → Full Chorus — transition variation",
              "variationType": "transition",
              "probability": 0.16,
              "description": "Adds a final pickup/closure gesture for",
              "onsetGrid": [
                0,
                4,
                8,
                12,
                14,
                15
              ],
              "accentProfile": [
                0.78,
                0.6799999999999999,
                0.88,
                0.78,
                1,
                1
              ],
              "velocityProfile": [
                0.6,
                0.55,
                0.7,
                0.6,
                0.98,
                0.98
              ],
              "microtimingOffset": [
                0,
                0,
                0,
                0,
                -6,
                -6
              ]
            }
          ],
    
          "difficulty": 1,
          "weight": 0.7,
          "provenance": "Rock catalog rebuild: retained source material or generated structural support pattern.",
          "authenticityTags": [
            "rock"
          ],
          "danceTags": [
            "listening"
          ],
          "tuningSystem": "12-tet",
          "swingPercentage": 50,
          "anticipationOffset": 0,
    
    
          "articulations": ["accented"]
        }
];
